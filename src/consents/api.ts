import { ConsentContext } from './interfaces';
import { RightConsents } from '../api';
import { Observable } from 'rxjs';

export namespace ConsentsResource {

    export function generateToken(ctx: ConsentContext): Observable<string> {
        return RightConsents.http<string>({
            method: 'POST',
            url: `${RightConsents.config.apiRoot}/consents/token`,
            body: ctx,
            responseType: 'text'
        });
    }

    export function getFormUrl(token: string): string {
        return `${RightConsents.config.apiRoot}/consents?t=` + encodeURIComponent(token)
    }

    export function postConsent(values: {[key: string]: string}): Observable<string> {
        return RightConsents.http<string>({
            method: 'POST',
            url: `${RightConsents.config.apiRoot}/consents`,
            body: Object.keys(values).map((key) => `${key}=${encodeURIComponent(values[key])}`).join('&'),
            responseType: 'text',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
        });
    }
}
