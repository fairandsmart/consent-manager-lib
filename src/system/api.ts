import { Observable } from 'rxjs';
import { ClientConfigDto, SupportInfoDto, UserDto } from './interfaces';
import { RightConsents } from '../api';

export namespace SystemResource {

    export function getConnectedUser(): Observable<UserDto> {
        return RightConsents.http<UserDto>({
           method: 'GET',
           url: `${RightConsents.config.apiRoot}/system/users/me`
        });
    }

    export function getSupportInfo(): Observable<SupportInfoDto> {
        return RightConsents.http<SupportInfoDto>({
            method: 'GET',
            url: `${RightConsents.config.apiRoot}/system/support/infos`
        });
    }

    export function getClientConfig(): Observable<ClientConfigDto> {
        return RightConsents.http<ClientConfigDto>({
            method: 'GET',
            url: `${RightConsents.config.apiRoot}/system/config`
        });
    }

}
