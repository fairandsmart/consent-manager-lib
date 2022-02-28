import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { ConsentContext } from './interfaces';
import { RCApiOptions } from '../http';

export function createTransactionJson(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents`,
    body: ctx,
    responseType: 'text',
    resolveHeaders: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    options
  });
}

export function getTransactionJson(transactionId: string, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/consents/${transactionId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    options
  });
}

export function postSubmissionValuesHtml(txid: string, values: {[key: string]: string}, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents/${txid}/submit`,
    body: Object.keys(values).map((key) => `${key}=${encodeURIComponent(values[key])}`).join('&'),
    responseType: 'text',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    options
  });
}

export function getSubmitFormPreview(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents/preview`,
    body: ctx,
    responseType: 'text',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    options
  });
}
