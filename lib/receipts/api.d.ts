import { Observable } from "rxjs";
import { ConsentTransaction } from "../consents";
export declare function generateReceiptToken(
  transaction: ConsentTransaction
): Observable<string>;
export declare function getReceiptPdf(
  token: string,
  transactionId: string
): Observable<ArrayBuffer>;
