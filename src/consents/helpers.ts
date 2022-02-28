import { RecordDto } from '../records';
import { ConsentContext } from './interfaces';
import { ConsentOrigin, ModelEntryDto, ModelEntryHelper } from '../models';

export class ConsentHelper {
  static generateContextFromRecord(entry: ModelEntryDto, record: RecordDto, lang = entry.defaultLanguage): ConsentContext {
    return {
      language: lang,
      subject: record.subject,
      origin: ConsentOrigin.USER,
      layoutData: {
        info: '',
        elements: [entry.key!],
        type: 'layout',
      }
    }
  }
}

