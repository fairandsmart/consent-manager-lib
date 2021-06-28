import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { RecordDto } from '../records';
import { UserStatusDto } from './interfaces';

export function getMe(token: string): Observable<string> {
  return RightConsents.http<string>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/user/me`,
    params: { t: token },
    noAuth: true
  });
}

export function getRecordsForUser(token: string): Observable<{ [key: string]: RecordDto[] }> {
  return RightConsents.http<{ [key: string]: RecordDto[] }>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/user/records`,
    params: { t: token },
    noAuth: true
  });
}

export function getUserStatus(token: string): Observable<UserStatusDto> {
  return RightConsents.http<UserStatusDto>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/user/status`,
    params: { t: token },
    noAuth: true
  })
}
