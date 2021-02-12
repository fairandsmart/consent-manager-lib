import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { ConsentTransaction } from '../consents';

export namespace ReceiptsResource {

    export function generateReceiptToken(transaction: ConsentTransaction): Observable<string> {
        return RightConsents.http<string>({
            method: 'POST',
            url: `${RightConsents.config.apiRoot}/receipts/token`,
            body: transaction,
            responseType: 'text'
        });
    }

    export function getReceiptPdf(token: string, transactionId: string): Observable<ArrayBuffer> {
        return RightConsents.http<ArrayBuffer>({
            method: 'GET',
            url: `${RightConsents.config.apiRoot}/receipts/${transactionId}`,
            params: {t: token, format: 'application/pdf'},
            responseType: 'arraybuffer'
        });
    }


}
