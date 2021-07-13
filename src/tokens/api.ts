import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { AccessToken } from './interfaces';

export function createToken(accessToken: AccessToken): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/tokens`,
    body: accessToken,
    responseType: 'text'
  });
}
