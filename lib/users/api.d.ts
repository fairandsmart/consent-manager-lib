import { Observable } from "rxjs";
import { RecordDto } from "../records";
import { UserStatusDto } from "./interfaces";
export declare function getMe(token: string): Observable<string>;
export declare function getRecordsForUser(token: string): Observable<{
  [key: string]: RecordDto[];
}>;
export declare function getUserStatus(token: string): Observable<UserStatusDto>;
