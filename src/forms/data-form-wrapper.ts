import { RightConsents } from '../api';
import { DecoratedSchema, DecoratedSchemaEntry } from './interfaces';
import { RegistryPropertyType, FairQueryHelper, DataStoreHelper } from '@fairandsmart/types';
import { ConsentCollector } from './consent-collector';
import { Observable, Subject } from 'rxjs';

export class DataFormWrapper {

    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null = null;
    formId: string;
    dataStore = new DataStoreHelper();
    rendered: boolean = false;
    private onSend$ = new Subject<DataStoreHelper>();

    constructor(private config: {
        elementId: string,
        schemaName: string,
        schemaPrefix: string,
        customCss?: string,
        onSubmit?: (result: any) => void,
        onAbort?: (reason: string) => void
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
        if (this.parentFormElement) {
            const fields = this.parentFormElement.getElementsByClassName('form-input');
            // TODO might need to reset data store
            for (let fieldIndex in fields) {
                if (fields.hasOwnProperty(fieldIndex)) {
                    this.populateDataStore(fields[fieldIndex] as HTMLInputElement);
                }
            }
            console.log('sending data');
            this.onSend$.next(this.dataStore);
        } else {
            throw new Error('Could not find a valid form element');
        }
    }

    getSubject(entryId: string, entryField?: string) {
        const entry = this.schema?.entries.find((e) => e.id === entryId);
        if (entry) {
            const result: any = FairQueryHelper.apply(this.dataStore.store, entry.query);
            if (result?.length) {
                const dataEntry = result[0].value;
                if (!!entryField) {
                    if (typeof dataEntry === 'object' && !!entryField && Object.prototype.hasOwnProperty.call(dataEntry, entryField)) {
                        return dataEntry[entryField];
                    } else {
                        throw new Error(`Could not find subject for field ${entryField} in data entry`);
                    }
                }
                return dataEntry;
            } else {
                throw new Error(`Could not find subject for entry id ${entryId} in form data`);
            }
        }
    }

    async populateDataStore(field: HTMLInputElement) {
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
        // TODO handle class obj
        /* Object.keys(values).forEach((key) => {
            if (values[key] === undefined) {
                delete values[key];
            }
        }); */
        this.dataStore.mergeEntry(FairQueryHelper.getClassFromExp(entry.query), toAdd.id, toAdd);
    }

    pushData() {
        console.log('pushing data');

    }
}
