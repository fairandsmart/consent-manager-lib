import { Observable } from 'rxjs';
import { ExtractionConfigDto, ExtractionResultDto, RecordsMap } from './interfaces';
import { RCApiOptions } from '../http';
export declare function listRecordsOfSubject(subject: string, options?: RCApiOptions): Observable<RecordsMap>;
export declare function extractRecords(config: ExtractionConfigDto, options?: RCApiOptions): Observable<ExtractionResultDto[]>;
export declare function extractRecordsCsv(config: ExtractionConfigDto, options?: RCApiOptions): Observable<string>;
