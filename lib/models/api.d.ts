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
import { RCApiOptions } from "../http";
export declare const NEW_VERSION_UUID = "11111111-9999-1111-9999-111111111111";
export declare function listEntries(
  filter: ModelFilter,
  options?: RCApiOptions
): Observable<CollectionPage<ModelEntryDto>>;
export declare function createEntry(
  dto: CreateModelDto,
  options?: RCApiOptions
): Observable<ModelEntryDto>;
export declare function getEntry(
  id: string,
  options?: RCApiOptions
): Observable<ModelEntryDto>;
export declare function updateEntry(
  id: string,
  dto: UpdateModelDto,
  options?: RCApiOptions
): Observable<ModelEntryDto>;
export declare function deleteEntry(
  id: string,
  options?: RCApiOptions
): Observable<void>;
export declare function listVersions<T extends ModelData = ModelData>(
  id: string,
  options?: RCApiOptions
): Observable<ModelVersionDtoLight<T>[]>;
export declare function createVersion<T extends ModelData = ModelData>(
  id: string,
  dto: ModelVersionDto<T>,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function getLatestVersion<T extends ModelData = ModelData>(
  id: string,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function getActiveVersion<T extends ModelData = ModelData>(
  id: string,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function getVersion<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function updateVersion<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  dto: ModelVersionDto<T>,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function updateVersionStatus<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  status: ModelVersionStatus,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function updateVersionType<T extends ModelData = ModelData>(
  id: string,
  versionId: string,
  type: ModelVersionType,
  options?: RCApiOptions
): Observable<ModelVersionDto<T>>;
export declare function getVersionPreview(
  id: string,
  vid: string,
  dto: PreviewDto,
  options?: RCApiOptions
): Observable<string>;
export declare function deleteVersion(
  id: string,
  versionId: string,
  options?: RCApiOptions
): Observable<void>;
