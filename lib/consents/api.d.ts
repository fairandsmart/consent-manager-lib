import { ConsentContext } from "./interfaces";
import { Observable } from "rxjs";
export declare function generateToken(ctx: ConsentContext): Observable<string>;
export declare function getFormUrl(token: string): string;
export declare function postConsent(values: {
  [key: string]: string;
}): Observable<string>;
