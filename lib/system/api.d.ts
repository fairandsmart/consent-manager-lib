import { Observable } from 'rxjs';
import { ClientConfigDto, SupportInfoDto } from './interfaces';
import { RCApiOptions } from '../http';
export declare function getSupportInfo(options?: RCApiOptions): Observable<SupportInfoDto>;
export declare function getClientConfig(options?: RCApiOptions): Observable<ClientConfigDto>;
