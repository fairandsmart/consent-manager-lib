import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { RCApiOptions } from '../http';

export function getReceiptPdf(transactionId: string, theme?: string, options?: RCApiOptions): Observable<ArrayBuffer> {
    return RightConsents.http<ArrayBuffer>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/receipts/${transactionId}`,
        params: {theme: theme, format: 'application/pdf'},
        responseType: 'arraybuffer',
        options
    });
}
