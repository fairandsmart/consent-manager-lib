import { Observable } from "rxjs";
import { AccessToken } from "./interfaces";
export declare function createToken(
  accessToken: AccessToken
): Observable<string>;
