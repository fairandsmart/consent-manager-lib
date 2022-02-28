import { Observable } from 'rxjs';
import { Key } from './interfaces';
import { RightConsents } from '../api';
import { AccessToken } from '../tokens';
import { RCApiOptions } from '../http';

export function listKeys(options?: RCApiOptions): Observable<Key[]> {
    return RightConsents.http<Key[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/keys`,
        options
    });
}

export function createKey(name: string, options?: RCApiOptions): Observable<Key> {
    return RightConsents.http<Key>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/keys`,
        body: { name },
        options
    });
}

export function deleteKey(id: string, options?: RCApiOptions): Observable<void> {
    return RightConsents.http<void>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/keys/${id}`,
        options
    });
}
