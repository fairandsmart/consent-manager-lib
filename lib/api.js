"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightConsents = void 0;
var http_1 = require("./http");
var RightConsentsApi = /** @class */ (function () {
    function RightConsentsApi() {
        // @ts-ignore
        this._config = {
            httpClient: http_1.defaultHttpClient,
            catalogRoot: 'no_endpoint',
            apiRoot: 'no_endpoint',
            default: true
        };
    }
    Object.defineProperty(RightConsentsApi.prototype, "http", {
        /**
         * Returns the http client setup in the init function. If none are present, warns the user and returns default handler
         */
        get: function () {
            if (!this._config || this._config.default) {
                console.warn('No HTTP client was registered in `@fairandsmart/consent-manager`');
            }
            return this._config.httpClient;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RightConsentsApi.prototype, "config", {
        get: function () {
            if (!this._config || this._config.default) {
                console.warn('You must call RightConsents.init before you can use the API features of `@fairandsmart/consent-manager` ');
            }
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RightConsentsApi.prototype, "initialized", {
        get: function () {
            return !this._config.default && !!this._config.httpClient && this._config.apiRoot !== 'no_endpoint';
        },
        enumerable: false,
        configurable: true
    });
    RightConsentsApi.prototype.init = function (config) {
        this._config = __assign(__assign(__assign({}, this._config), config), { default: false });
    };
    RightConsentsApi.prototype.reset = function () {
        this._config = {
            httpClient: http_1.defaultHttpClient,
            apiRoot: 'no_endpoint',
            catalogRoot: 'no_endpoint',
            default: true
        };
    };
    return RightConsentsApi;
}());
exports.RightConsents = new RightConsentsApi();
