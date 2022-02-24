import { DecoratedSchema } from './interfaces';
import { DataStoreHelper, FsData } from '@fairandsmart/types';
import { Subject } from 'rxjs';
export declare class DataCollector {
    private config;
    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null;
    formId: string;
    dataStore: DataStoreHelper;
    rendered: boolean;
    private onSend$;
    finalSubject: string | undefined;
    constructor(config: {
        elementId: string;
        schemaName: string;
        schemaPrefix: string;
        dataCreationEndpoint: string;
        customCss?: string;
        user?: string;
        userFieldId?: string;
        userFieldName?: string;
        dataSentTemplate?: string;
    });
    render(): this;
    onSend(): Subject<DataStoreHelper>;
    transformElement(): void;
    destroyForm(): void;
    loadSchema(): Promise<void>;
    private buildForm;
    private generateInput;
    private createSubmitButton;
    submitForm(): void;
    getSubject(): string | undefined;
    populateDataStore(field: HTMLInputElement): void;
    pushData(): Promise<FsData>;
}
