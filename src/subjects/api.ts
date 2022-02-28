import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { SubjectDto } from './interfaces';
import { RecordsMap } from '../records';
import { RCApiOptions } from '../http';

export function listSubjects(name: string, options?: RCApiOptions): Observable<SubjectDto[]> {
    return RightConsents.http<SubjectDto[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects`,
        params: { name },
        options
    });
}

export function getSubject(name: string, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${name}`,
        options
    });
}

export function createSubject(subject: SubjectDto, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/subjects`,
        body: subject,
        options
    });
}

export function updateSubject(subject: SubjectDto, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/subjects/${subject.id}`,
        body: subject,
        options
    });
}

export function listSubjectRecords(subject: string, options?: RCApiOptions): Observable<RecordsMap> {
    return RightConsents.http<RecordsMap>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${subject}/records`,
        options
    });
}
