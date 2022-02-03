"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHttpClient = void 0;
var rxjs_1 = require("rxjs");
var defaultHttpClient = function (config) {
    return new rxjs_1.Observable(function (obs) {
        var xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url + (config.params ? jsonToQueryString(config.params) : ''));
        var body;
        if (config.body) {
            body = JSON.stringify(config.body);
        }
        if (config.headers) {
            for (var header in config.headers) {
                if (Object.prototype.hasOwnProperty.call(config.headers, header)) {
                    xhr.setRequestHeader(header, config.headers[header]);
                }
            }
        }
        xhr.onload = function () {
            if (xhr.status >= 400) {
                obs.error(config.responseType !== 'json' ? xhr.response : JSON.parse(xhr.response));
                return;
            }
            if (config.responseType && config.responseType !== 'json') {
                obs.next(xhr.response);
            }
            else {
                obs.next(JSON.parse(xhr.response));
            }
            obs.complete();
        };
        xhr.onerror = function (err) {
            obs.error(err);
        };
        xhr.send(body);
    });
    function jsonToQueryString(json) {
        return '?' +
            Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    }
};
exports.defaultHttpClient = defaultHttpClient;
