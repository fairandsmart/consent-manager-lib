import { Observable } from 'rxjs';
import { RCApiOptions } from '../http';
export declare function getReceiptPdf(transactionId: string, theme?: string, options?: RCApiOptions): Observable<ArrayBuffer>;
