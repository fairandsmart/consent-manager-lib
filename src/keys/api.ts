import { Observable } from 'rxjs';
import { Key } from './interfaces';
import { RightConsents } from '../api';

export function listKeys(): Observable<Key[]> {
    return RightConsents.http<Key[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/keys`
    });
}

export function createKey(name: string): Observable<Key> {
    return RightConsents.http<Key>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/keys`,
        body: { name }
    });
}

export function deleteKey(id: string): Observable<void> {
    return RightConsents.http<void>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/keys/${id}`
    });
}
