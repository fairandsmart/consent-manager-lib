import { Observable } from "rxjs";
import { ClientConfigDto, SupportInfoDto } from "./interfaces";
export declare function getSupportInfo(): Observable<SupportInfoDto>;
export declare function getClientConfig(): Observable<ClientConfigDto>;
