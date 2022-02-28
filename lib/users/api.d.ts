import { Observable } from 'rxjs';
import { RecordDto } from '../records';
import { UserStatusDto } from './interfaces';
import { RCApiOptions } from '../http';
export declare function getMe(options?: RCApiOptions): Observable<string>;
export declare function getRecordsForUser(options?: RCApiOptions): Observable<{
    [key: string]: RecordDto[];
}>;
export declare function getUserStatus(options?: RCApiOptions): Observable<UserStatusDto>;
