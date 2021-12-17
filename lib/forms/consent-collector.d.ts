import { ConsentCollectorCallback, ConsentCollectorConfig } from './interfaces';
export declare class ConsentCollector {
    private config;
    constructor(config: ConsentCollectorConfig);
    collect(callback?: ConsentCollectorCallback): Promise<void> | void;
    private getTokenFromBroker;
    private openInNewWindow;
    private openInIframe;
    private replaceElement;
}
