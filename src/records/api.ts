import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { ExtractionConfigDto, ExtractionResultDto, RecordsMap } from './interfaces';

export function listRecordsOfSubject(subject: string): Observable<RecordsMap> {
    return RightConsents.http<RecordsMap>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/records`,
        params: { subject }
    });
}

export function extractRecords(config: ExtractionConfigDto): Observable<ExtractionResultDto[]> {
    return RightConsents.http<ExtractionResultDto[]>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/extraction`,
        body: config
    });
}

export function extractRecordsCsv(config: ExtractionConfigDto): Observable<string> {
    return RightConsents.http<string>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/extraction`,
        body: config,
        headers: {
            Accept: 'text/csv'
        },
        responseType: 'text'
    });
}
