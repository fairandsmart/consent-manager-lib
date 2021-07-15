import { Observable } from 'rxjs';
import { StatsBag } from './interfaces';
import { RightConsents } from '../api';
import { RCApiOptions } from '../http';

export function getStats(options?: RCApiOptions): Observable<StatsBag> {
    return RightConsents.http<StatsBag>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/stats`,
        options
    });
}
