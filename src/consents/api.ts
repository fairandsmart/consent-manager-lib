import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { ConsentContext } from './interfaces';

export function createTransactionJson(ctx: ConsentContext, lang: string): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents`,
    body: ctx,
    responseType: 'text',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    noAuth: true
  });
}

export function postSubmissionValuesHtml(txid: string, values: {[key: string]: string}): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents/${txid}/submit`,
    body: Object.keys(values).map((key) => `${key}=${encodeURIComponent(values[key])}`).join('&'),
    responseType: 'text',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    noAuth: true
  });
}

export function getSubmitFormPreview(ctx: ConsentContext, lang: string): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents/preview`,
    body: ctx,
    responseType: 'text',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    noAuth: true
  });
}
