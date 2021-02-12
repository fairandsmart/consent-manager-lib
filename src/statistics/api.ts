import { Observable } from 'rxjs';
import { StatsBag } from './interfaces';
import { RightConsents } from '../api';

export function getStats(): Observable<StatsBag> {
    return RightConsents.http<StatsBag>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/stats`
    });
}
