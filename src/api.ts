import { defaultHttpClient, RcHttpClient } from './http';
import { Observable } from 'rxjs';

export interface RightConsentsApiConfig {
    catalogRoot: string;
    httpClient: RcHttpClient;
    apiRoot: string;
}

class RightConsentsApi {
    // @ts-ignore
    private _config: RightConsentsApiConfig & { default?: boolean } = {
        httpClient: defaultHttpClient,
        catalogRoot: 'no_endpoint',
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
        this._config = {...this._config, ...config, ...{default: false}};
    }

    public reset() {
        this._config = {
            httpClient: defaultHttpClient,
            apiRoot: 'no_endpoint',
            catalogRoot: 'no_endpoint',
            default: true
        };
    }
}

export const RightConsents = new RightConsentsApi();
