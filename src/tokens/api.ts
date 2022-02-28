import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { AccessToken } from './interfaces';
import { RCApiOptions } from '../http';

export function createToken(accessToken: AccessToken, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/tokens`,
    body: accessToken,
    responseType: 'text',
    options
  });
}
