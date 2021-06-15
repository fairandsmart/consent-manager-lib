import { Observable } from "rxjs";
import { ConsentContext } from "../consents";
import { ReceiptContext, SubjectContext } from "./interfaces";
export declare function generateFormToken(
  context: ConsentContext
): Observable<string>;
export declare function createSubjectToken(
  subjectContext: SubjectContext
): Observable<string>;
export declare function createSubjectTokenFromReceipt(
  receiptContext: ReceiptContext
): Observable<string>;
