import { DecoratedSchema } from './interfaces';
import { ModelData } from '../models';
export declare class ConsentFormWrapper {
    private config;
    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null;
    formId: string;
    constructor(config: {
        elementId: string;
        layoutId: string;
        prefix: string;
        customCss?: string;
        onSubmit?: (result: any) => void;
        onAbort?: (reason: string) => void;
    });
    transformElement(): void;
    loadLayout(): Promise<import("../models").ModelVersionDto<ModelData>>;
    submitForm(): void;
}
