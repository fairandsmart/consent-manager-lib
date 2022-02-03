import { Observable } from 'rxjs';
import { ConsentContext } from './interfaces';
import { RCApiOptions } from '../http';
export declare function createTransactionJson(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<string>;
export declare function getTransactionJson(transactionId: string, options?: RCApiOptions): Observable<string>;
export declare function postSubmissionValuesHtml(txid: string, values: {
    [key: string]: string;
}, options?: RCApiOptions): Observable<string>;
export declare function getSubmitFormPreview(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<string>;
