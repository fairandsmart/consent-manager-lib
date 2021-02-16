import { RcHttpClient } from './http';
import { Observable } from 'rxjs';

export interface RightConsentsApiConfig {
    httpClient: RcHttpClient;
    apiRoot: string;
}

class RightConsentsApi {
    // @ts-ignore
    private _config: RightConsentsApiConfig & { default?: boolean } = {
        httpClient: (_c) => new Observable() as any,
        apiRoot: 'no_endpoint',
        default: true
    };

    /**
     * Returns the http client setup in the init function. If none are present, warns the user and returns default handler
     */
    get http(): RcHttpClient {
        if (!this._config || this._config.default) {
            console.warn('No HTTP client was registered in `@fairandsmart/consent-manager`');
        }
        return this._config.httpClient;
    }

    get config(): RightConsentsApiConfig {
        if (!this._config || this._config.default) {
            console.warn('You must call RightConsents.init before you can use the API features of `@fairandsmart/consent-manager` ');
        }
        return this._config;
    }

    get initialized(): boolean {
        return !this._config.default && !!this._config.httpClient && this._config.apiRoot !== 'no_endpoint'
    }

    constructor() {}

    public init(config: RightConsentsApiConfig) {
        this._config = config;
    }

    public reset() {
        this._config = {
            httpClient: (_c) => new Observable() as any,
            apiRoot: 'no_endpoint',
            default: true
        };
    }
}

export const RightConsents = new RightConsentsApi();
