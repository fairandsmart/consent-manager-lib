import { ConsentCollector } from './consent-collector';
import { DataCollector } from './data-collector';
import { FsData } from '@fairandsmart/types';
export declare class ConsentFormWrapper {
    private config;
    formId: string;
    constructor(config: {
        consentCollector: ConsentCollector;
        dataCollector: DataCollector;
    });
    collect(): Promise<FsData>;
}
