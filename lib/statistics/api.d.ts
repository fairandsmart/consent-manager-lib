import { Observable } from 'rxjs';
import { StatsBag } from './interfaces';
import { RCApiOptions } from '../http';
export declare function getStats(options?: RCApiOptions): Observable<StatsBag>;
