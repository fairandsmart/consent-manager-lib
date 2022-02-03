import { DecoratedSchema } from './interfaces';
import { DataStoreHelper } from '@fairandsmart/types';
import { Subject } from 'rxjs';
export declare class DataFormWrapper {
    private config;
    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null;
    formId: string;
    dataStore: DataStoreHelper;
    rendered: boolean;
    private onSend$;
    constructor(config: {
        elementId: string;
        schemaName: string;
        schemaPrefix: string;
        customCss?: string;
        onSubmit?: (result: any) => void;
        onAbort?: (reason: string) => void;
    });
    render(): this;
    onSend(): Subject<DataStoreHelper>;
    transformElement(): void;
    loadSchema(): Promise<void>;
    private buildForm;
    private generateInput;
    private createSubmitButton;
    submitForm(): void;
    getSubject(entryId: string, entryField?: string): any;
    populateDataStore(field: HTMLInputElement): Promise<void>;
    pushData(): void;
}
