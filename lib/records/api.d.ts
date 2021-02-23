import { Observable } from "rxjs";
import {
  ExtractionConfigDto,
  ExtractionResultDto,
  RecordsMap,
} from "./interfaces";
export declare function listRecordsOfSubject(
  subject: string
): Observable<RecordsMap>;
export declare function extractRecords(
  config: ExtractionConfigDto
): Observable<ExtractionResultDto[]>;
export declare function extractRecordsCsv(
  config: ExtractionConfigDto
): Observable<string>;
