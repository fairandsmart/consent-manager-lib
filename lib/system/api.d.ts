import { Observable } from "rxjs";
import { ClientConfigDto, SupportInfoDto, UserDto } from "./interfaces";
export declare function getConnectedUser(): Observable<UserDto>;
export declare function getSupportInfo(): Observable<SupportInfoDto>;
export declare function getClientConfig(): Observable<ClientConfigDto>;
