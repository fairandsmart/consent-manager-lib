import { RcHttpClient } from './http';
export interface RightConsentsApiConfig {
    httpClient: RcHttpClient;
    apiRoot: string;
}
declare class RightConsentsApi {
    private _config;
    /**
     * Returns the http client setup in the init function. If none are present, warns the user and returns default handler
     */
    get http(): RcHttpClient;
    get config(): RightConsentsApiConfig;
    get initialized(): boolean;
    constructor();
    init(config: RightConsentsApiConfig): void;
    reset(): void;
}
export declare const RightConsents: RightConsentsApi;
export {};
