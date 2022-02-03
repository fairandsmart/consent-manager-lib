import { ConsentCollectorCallback, ConsentCollectorConfig } from './interfaces';
export declare class ConsentCollector {
    private config;
    constructor(config: ConsentCollectorConfig);
    overrideSubject(newSubject: string): void;
    collect(callback?: ConsentCollectorCallback): Promise<void>;
    private getTokenFromBroker;
    private openInNewWindow;
    private openInIframe;
    private replaceElement;
}
