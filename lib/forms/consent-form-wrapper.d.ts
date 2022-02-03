import { ConsentCollector } from './consent-collector';
import { DataFormWrapper } from './data-form-wrapper';
export declare class ConsentFormWrapper {
    private config;
    formId: string;
    constructor(config: {
        consentCollector: ConsentCollector;
        dataFormWrapper: DataFormWrapper;
        subjectFieldId?: string;
        subjectFieldName?: string;
    });
    collect(): Promise<void>;
}
