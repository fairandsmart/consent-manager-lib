import { RightConsents } from '../api';
import { DecoratedSchema, DecoratedSchemaEntry } from './interfaces';
import { RegistryPropertyType, FairQueryHelper, DataStoreHelper, FsData } from '@fairandsmart/types';
import { ConsentCollector } from './consent-collector';
import { Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class DataCollector {

    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null = null;
    formId: string;
    dataStore = new DataStoreHelper();
    rendered: boolean = false;
    private onSend$ = new Subject<DataStoreHelper>();
    finalSubject: string | undefined;

    constructor(private config: {
        elementId: string,
        schemaName: string,
        schemaPrefix: string,
        dataCreationEndpoint: string,
        customCss?: string,
        user?: string,
        userFieldId?: string,
        userFieldName?: string,
        dataSentTemplate?: string,
    }) {
        this.formId = (Math.random() + 1).toString(36).substring(4);
    }

    public render() {
        if (!this.rendered) {
            this.transformElement();
        }
        return this;
    }

    public onSend() {
        return this.onSend$;
    }

    transformElement() {
        this.parentFormElement = document.getElementById(this.config.elementId) as HTMLFormElement;
        if (this.parentFormElement !== null) {
            this.parentFormElement.innerHTML = 'Loading...';
            this.loadSchema().then(() => {
                const element = document.createElement('div');
                element.classList.add('fs-form-container');
                element.innerHTML = this.buildForm();
                element.appendChild(this.createSubmitButton());
                this.parentFormElement!.innerHTML = '';
                this.parentFormElement!.append(element);
                this.rendered = true;
            });
        } else {
            throw new Error(`[F&S Data Form Wrapper] Element with id ${this.config.elementId} not found`);
        }
    }

    destroyForm() {
        if (this.parentFormElement !== null) {
            this.parentFormElement.innerHTML = this.config.dataSentTemplate || 'Form Sent';
            this.rendered = false;
        }
    }

    async loadSchema() {
        if (!this.config.schemaPrefix?.length || !this.config.schemaName?.length) {
            throw new Error(`[F&S Data Form Wrapper] Element with id ${this.config.elementId} has no "data-schema-name" of "data-schema-id"`);
        }
        this.schema = await RightConsents.http<DecoratedSchema>({
            method: 'GET',
            url: `${RightConsents.config.catalogRoot}/${this.config.schemaPrefix}/schemas/${this.config.schemaName}/view/formly`
        }).toPromise();
    }

    private buildForm(): string {
        const entriesHtml: string[] = [];
        this.schema?.entries.sort((a, b) => a.index - b.index);
        this.schema?.entries.forEach((entry) => {
            const formMask = entry.decoration.formMask?.[0];
            if (!formMask) { return; }
            const content = `
                    <div class="entry" id="fsentry-${entry.id}">
                        <label for="${entry.id}" id="fsentry-${entry.id}-label">${formMask.templateOptions.label}</label>
                        ${this.generateInput(entry)}
                    </div>
                `;
            entriesHtml.push(content);
        });
        return entriesHtml.join('\n');
    }

    private generateInput(entry: DecoratedSchemaEntry) {
        const formMask = entry.decoration.formMask[0]; // TODO classes ?
        switch (formMask.type) {
            case RegistryPropertyType.STRING:
                return `
                    <input class="form-input" type="text" name="${entry.id}" id="${entry.id}" ${formMask.templateOptions.placeholder ? 'placeholder="'+formMask.templateOptions.placeholder+'"' : ''} ${formMask.templateOptions.required ? 'required=true': ''}>
                `
            case RegistryPropertyType.CHOICE:
            case RegistryPropertyType.MULTIPLE:
            case RegistryPropertyType.DATE:
            case RegistryPropertyType.CLASS:
            default:
                return `<span>Unsupported media type</span>`
        }
    }

    private createSubmitButton(): Node {
        const button = document.createElement('button');
        button.setAttribute('class', 'submit-btn');
        button.id = `submit-btn-${this.formId}`;
        button.textContent = 'Submit';
        button.onclick = (e) => { e.preventDefault(); this.submitForm(); }
        return button;
    }

    submitForm() {
        this.dataStore = new DataStoreHelper();
        if (this.parentFormElement) {
            const fields = this.parentFormElement.getElementsByClassName('form-input');
            for (let fieldIndex in fields) {
                if (fields.hasOwnProperty(fieldIndex)) {
                    this.populateDataStore(fields[fieldIndex] as HTMLInputElement);
                }
            }
            if (!this.getSubject()) {
                throw new Error('Missing user information. Either provide a "user" or "userFieldId" field in the DataFormWrapper configuration. See documentation for more information');
            }
            this.onSend$.next(this.dataStore);
        } else {
            throw new Error('Could not find a valid form element');
        }
    }

    getSubject() {
        if (this.config.user) {
            this.finalSubject = this.config.user;
        }
        if (this.config.userFieldId) {
            const entry = this.schema?.entries.find((e) => e.id === this.config.userFieldId);
            if (entry) {
                const result: any = FairQueryHelper.apply(this.dataStore.store, entry.query);
                if (!result?.length) {
                    throw new Error(`Could not find subject for entry id ${this.config.userFieldId} in form data`);
                }
                const dataEntry = result[0].value;
                this.finalSubject = dataEntry;
                if (!!this.config.userFieldName) {
                    if (typeof dataEntry !== 'object' || !this.config.userFieldName || !Object.prototype.hasOwnProperty.call(dataEntry, this.config.userFieldName)) {
                        throw new Error(`Could not find subject for field ${this.config.userFieldName} in data entry`);
                    }
                    this.finalSubject = dataEntry[this.config.userFieldName];
                }
            }
        }
        return this.finalSubject;
    }

    populateDataStore(field: HTMLInputElement) {
        const entry = this.schema?.entries.find((e) => e.id === field.id)!;
        const toAdd = {[FairQueryHelper.getPropertyFromExp(entry.query)]: field.value};
        if (this.dataStore.dirty) {
            if (FairQueryHelper.getParentQuery(entry.query)) {
                const matches = FairQueryHelper.apply(this.dataStore.store, FairQueryHelper.getParentQuery(entry.query));
                if (matches?.length > 0) {
                    toAdd.id = matches[0].value.id;
                }
            }
        }
        this.dataStore.mergeEntry(FairQueryHelper.getClassFromExp(entry.query), toAdd.id, toAdd);
    }

    pushData() {
        if (!this.schema) {
            throw new Error('Data schema was not loaded')
        }
        return RightConsents.http<FsData>({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: this.dataStore.store,
            url: `${this.config.dataCreationEndpoint}?format=${this.schema.name}%3A${this.schema.serial}&userId=${this.getSubject()}`
        }).pipe(tap(() => this.destroyForm())).toPromise();
    }
}
