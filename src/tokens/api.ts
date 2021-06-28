import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { ConsentContext } from '../consents';
import { ReceiptContext, SubjectContext } from './interfaces';
import { RcHttpClientConfig } from '../http';

export function generateFormToken(context: ConsentContext, subjectToken?: string): Observable<string> {
  const params: RcHttpClientConfig = {
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/tokens/consent`,
    body: context,
    responseType: 'text',
  };
  if (subjectToken) {
    params.params = { t: subjectToken };
    params.noAuth = true;
  }
  return RightConsents.http<string>(params);
}

export function createSubjectToken(subjectContext: SubjectContext): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/tokens/subject`,
    body: subjectContext,
    responseType: 'text'
  });
}

export function createSubjectTokenFromReceipt(receiptContext: ReceiptContext): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/tokens/receipt`,
    body: receiptContext,
    responseType: 'text'
  });
}
