import { ModelEntryDto } from '../models';
import { RecordDto } from '../records';

export interface UserStatusDto {
  username: string;
  infos: ModelEntryDto;
  entries: ModelEntryDto[];
  records: {[key: string]: RecordDto};
}
