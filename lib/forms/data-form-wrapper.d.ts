import { DecoratedSchema } from './interfaces';
import { DataStoreHelper } from '@fairandsmart/types';
export declare class DataFormWrapper {
    private config;
    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null;
    formId: string;
    dataStore: DataStoreHelper;
    constructor(config: {
        elementId: string;
        schemaName: string;
        schemaPrefix: string;
        customCss?: string;
        onSubmit?: (result: any) => void;
        onAbort?: (reason: string) => void;
    });
    transformElement(): void;
    loadSchema(): Promise<void>;
    private buildForm;
    private generateInput;
    private createSubmitButton;
    submitForm(): void;
    populateDataStore(field: HTMLInputElement): void;
}
