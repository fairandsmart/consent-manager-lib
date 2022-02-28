import { Observable } from 'rxjs';
import { AccessToken } from './interfaces';
import { RCApiOptions } from '../http';
export declare function createToken(accessToken: AccessToken, options?: RCApiOptions): Observable<string>;
