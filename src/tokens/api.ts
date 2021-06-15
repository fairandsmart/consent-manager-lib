import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { ConsentContext } from '../consents';
import { ReceiptContext, SubjectContext } from './interfaces';

export function generateFormToken(context: ConsentContext): Observable<string> {
    return RightConsents.http<string>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/tokens/consent`,
        body: context,
        responseType: 'text'
    });
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
