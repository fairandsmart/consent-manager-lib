import { Observable } from 'rxjs';

export const defaultHttpClient: RcHttpClient = (config: RcHttpClientConfig) => {
    return new Observable((obs) => {
        const xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url + (config.params ? jsonToQueryString(config.params) : ''));
        let body;
        if (config.body) {
            body = JSON.stringify(config.body);
        }
        if (config.headers) {
            for (let header in config.headers) {
                if (Object.prototype.hasOwnProperty.call(config.headers, header)) {
                    xhr.setRequestHeader(header, config.headers[header]);
                }
            }
        }
        xhr.onload = function() {
            if (xhr.status >= 400) {
                obs.error(config.responseType !== 'json' ? xhr.response : JSON.parse(xhr.response));
                return;
            }
            if (config.responseType && config.responseType !== 'json') {
                obs.next(xhr.response);
            } else {
                obs.next(JSON.parse(xhr.response));
            }
            obs.complete();
        };

        xhr.onerror = function(err) {
            obs.error(err);
        };

        xhr.send(body);
    });

    function jsonToQueryString(json: any) {
        return '?' +
            Object.keys(json).map(function(key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    }
}

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
    data?: { [key: string]: any; };
}

/**
 * A generic, minimal type for providing an HTTP client function.
 * This gets the necessary config provided as an argument, and then
 * should produce a promise for the parsed JSON as a result. The API
 * helper functions will use this to return the right type.
 */
export declare type RcHttpClient = <T>(config: RcHttpClientConfig) => Observable<T>;

