import { Observable } from "rxjs";
import {
  CreateModelDto,
  ModelData,
  ModelEntryDto,
  ModelFilter,
  ModelVersionDto,
  ModelVersionDtoLight,
  ModelVersionStatus,
  ModelVersionType,
  PreviewDto,
  UpdateModelDto,
} from "./interfaces";
import { CollectionPage } from "../common";
export declare const NEW_VERSION_UUID = "11111111-9999-1111-9999-111111111111";
export declare function listEntries(
  filter: ModelFilter
): Observable<CollectionPage<ModelEntryDto>>;
export declare function createEntry(
  dto: CreateModelDto
): Observable<ModelEntryDto>;
export declare function getEntry(id: string): Observable<ModelEntryDto>;
export declare function updateEntry(
  id: string,
  dto: UpdateModelDto
): Observable<ModelEntryDto>;
export declare function deleteEntry(id: string): Observable<void>;
export declare function listVersions<T extends ModelData = ModelData>(
  id: string
): Observable<ModelVersionDtoLight<T>[]>;
export declare function createVersion<T extends ModelData = ModelData>(
  id: string,
  dto: ModelVersionDto<T>
): Observable<ModelVersionDto<T>>;
export declare function getLatestVersion<T extends ModelData = ModelData>(
  id: string
): Observable<ModelVersionDto<T>>;
export declare function getActiveVersion<T extends ModelData = ModelData>(
  id: string
): Observable<ModelVersionDto<T>>;
export declare function getVersion<T extends ModelData = ModelData>(
  id: string,
  versionId: string
): Observable<ModelVersionDto<T>>;
export declare function updateVersion<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  dto: ModelVersionDto<T>
): Observable<ModelVersionDto<T>>;
export declare function updateVersionStatus<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  status: ModelVersionStatus
): Observable<ModelVersionDto<T>>;
export declare function updateVersionType<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  type: ModelVersionType
): Observable<ModelVersionDto<T>>;
export declare function getVersionPreview(
  id: string,
  vid: string,
  dto: PreviewDto
): Observable<string>;
export declare function deleteVersion(
  id: string,
  versionId: string
): Observable<void>;
