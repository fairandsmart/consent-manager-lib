import { RightConsents } from '../api';
import { Observable } from 'rxjs';

export function getReceiptPdf(transactionId: string, theme?: string): Observable<ArrayBuffer> {
    return RightConsents.http<ArrayBuffer>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/receipts/${transactionId}`,
        params: {theme: theme, format: 'application/pdf'},
        responseType: 'arraybuffer'
    });
}
