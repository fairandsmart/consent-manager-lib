import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { SubjectDto } from './interfaces';
import { RecordsMap } from '../records';

export function listSubjects(name: string): Observable<SubjectDto[]> {
    return RightConsents.http<SubjectDto[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects`,
        params: { name }
    });
}

export function getSubject(name: string): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${name}`
    });
}

export function createSubject(subject: SubjectDto): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/subjects`,
        body: subject
    });
}

export function updateSubject(subject: SubjectDto): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/subjects/${subject.id}`,
        body: subject
    });
}

export function listSubjectRecords(subject: string): Observable<RecordsMap> {
    return RightConsents.http<RecordsMap>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${subject}/records`
    });
}
