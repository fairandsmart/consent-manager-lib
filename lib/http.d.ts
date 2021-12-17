import { Observable } from 'rxjs';
export declare const defaultHttpClient: RcHttpClient;
export interface RcHttpClientConfig {
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    url: string;
    /** Query string params */
    params?: any;
    /** Request body */
    body?: any;
    /** HTTP Headers */
    headers?: {
        [key: string]: string;
    };
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    options?: RCApiOptions;
    resolveHeaders?: boolean;
}
/**
 * Additional options that can alter the default behavior of the api calls
 */
export interface RCApiOptions {
    /** If exists, should remove bearer authentication (like noAuth) and pass this token as queryParam "?t={token}".  */
    withToken?: string;
    /** If true, should remove bearer authentication */
    noAuth?: boolean;
    /** Pass any additional parameters in this data field */
    data?: {
        [key: string]: any;
    };
}
/**
 * A generic, minimal type for providing an HTTP client function.
 * This gets the necessary config provided as an argument, and then
 * should produce a promise for the parsed JSON as a result. The API
 * helper functions will use this to return the right type.
 */
export declare type RcHttpClient = <T>(config: RcHttpClientConfig) => Observable<T>;
