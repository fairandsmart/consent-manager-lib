import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { RecordDto } from '../records';
import { UserStatusDto } from './interfaces';
import { RCApiOptions } from '../http';

export function getMe(options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/user`,
    options,
  });
}

export function getRecordsForUser(options?: RCApiOptions): Observable<{ [key: string]: RecordDto[] }> {
  return RightConsents.http<{ [key: string]: RecordDto[] }>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/user/records`,
    options,
  });
}

export function getUserStatus(options?: RCApiOptions): Observable<UserStatusDto> {
  return RightConsents.http<UserStatusDto>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/user/status`,
    options,
  })
}
