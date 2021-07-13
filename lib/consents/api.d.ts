import { Observable } from "rxjs";
import { ConsentContext } from "./interfaces";
export declare function createTransactionJson(
  ctx: ConsentContext,
  lang: string
): Observable<string>;
export declare function postSubmissionValuesHtml(
  txid: string,
  values: {
    [key: string]: string;
  }
): Observable<string>;
export declare function getSubmitFormPreview(
  ctx: ConsentContext,
  lang: string
): Observable<string>;
