import { RecordDto } from '../records';
import { ConsentContext } from './interfaces';
import { ModelEntryDto } from '../models';
export declare class ConsentHelper {
    static generateContextFromRecord(entry: ModelEntryDto, record: RecordDto, lang?: string): ConsentContext;
}
