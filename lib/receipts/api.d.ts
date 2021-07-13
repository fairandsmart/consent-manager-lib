import { Observable } from "rxjs";
export declare function getReceiptPdf(
  transactionId: string,
  theme?: string
): Observable<ArrayBuffer>;
