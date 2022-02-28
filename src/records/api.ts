import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { ExtractionConfigDto, ExtractionResultDto, RecordsMap } from './interfaces';
import { RCApiOptions } from '../http';

export function listRecordsOfSubject(subject: string, options?: RCApiOptions): Observable<RecordsMap> {
    return RightConsents.http<RecordsMap>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/records`,
        params: { subject },
        options
    });
}

export function extractRecords(config: ExtractionConfigDto, options?: RCApiOptions): Observable<ExtractionResultDto[]> {
    return RightConsents.http<ExtractionResultDto[]>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/extraction`,
        body: config,
        options
    });
}

export function extractRecordsCsv(config: ExtractionConfigDto, options?: RCApiOptions): Observable<string> {
    return RightConsents.http<string>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/extraction`,
        body: config,
        headers: {
            Accept: 'text/csv'
        },
        responseType: 'text',
        options
    });
}
