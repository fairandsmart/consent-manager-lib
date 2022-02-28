import { Observable } from 'rxjs';
import { SubjectDto } from './interfaces';
import { RecordsMap } from '../records';
import { RCApiOptions } from '../http';
export declare function listSubjects(name: string, options?: RCApiOptions): Observable<SubjectDto[]>;
export declare function getSubject(name: string, options?: RCApiOptions): Observable<SubjectDto>;
export declare function createSubject(subject: SubjectDto, options?: RCApiOptions): Observable<SubjectDto>;
export declare function updateSubject(subject: SubjectDto, options?: RCApiOptions): Observable<SubjectDto>;
export declare function listSubjectRecords(subject: string, options?: RCApiOptions): Observable<RecordsMap>;
