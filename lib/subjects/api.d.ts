import { Observable } from "rxjs";
import { SubjectDto } from "./interfaces";
import { RecordsMap } from "../records";
export declare function listSubjects(name: string): Observable<SubjectDto[]>;
export declare function getSubject(name: string): Observable<SubjectDto>;
export declare function createSubject(
  subject: SubjectDto
): Observable<SubjectDto>;
export declare function updateSubject(
  subject: SubjectDto
): Observable<SubjectDto>;
export declare function listSubjectRecords(
  subject: string
): Observable<RecordsMap>;
