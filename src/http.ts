import { Observable } from 'rxjs';

export interface RcHttpClientConfig {
    method: 'GET' | 'POST' | 'DELETE' | 'PUT';
    url: string;
    /** Query string params */
    params?: any;
    /** Request body */
    body?: any;
    /** HTTP Headers */
    headers?: { [key: string]: string };
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    noAuth?: boolean;
}
/**
 * A generic, minimal type for providing an HTTP client function.
 * This gets the necessary config provided as an argument, and then
 * should produce a promise for the parsed JSON as a result. The API
 * helper functions will use this to return the right type.
 */
export declare type RcHttpClient = <T>(config: RcHttpClientConfig) => Observable<T>;

