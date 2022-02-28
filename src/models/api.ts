import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import {
  CreateModelDto,
  ModelData,
  ModelEntryDto,
  ModelEntryExportDto,
  ModelFilter,
  ModelVersionDto,
  ModelVersionDtoLight,
  ModelVersionStatus,
  ModelVersionType,
  PreviewDto,
  UpdateModelDto
} from './interfaces';
import { CollectionPage } from '../common';
import { RCApiOptions } from '../http';

export const NEW_VERSION_UUID = '11111111-9999-1111-9999-111111111111';

export function listEntries(filter: ModelFilter, options: RCApiOptions = { noAuth: true }): Observable<CollectionPage<ModelEntryDto>> {
  return RightConsents.http<CollectionPage<ModelEntryDto>>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models`,
    params: filter,
    options
  });
}

export function createEntry(dto: CreateModelDto, options?: RCApiOptions): Observable<ModelEntryDto> {
  return RightConsents.http<ModelEntryDto>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/models`,
    body: dto,
    options
  });
}

export function getEntry(id: string, options: RCApiOptions = { noAuth: true }): Observable<ModelEntryDto> {
  return RightConsents.http<ModelEntryDto>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models/${id}`,
    options
  });
}

export function updateEntry(id: string, dto: UpdateModelDto, options?: RCApiOptions): Observable<ModelEntryDto> {
  return RightConsents.http<ModelEntryDto>({
    method: 'PUT',
    url: `${RightConsents.config.apiRoot}/models/${id}`,
    body: dto,
    options
  });
}

export function deleteEntry(id: string, options?: RCApiOptions): Observable<void> {
  return RightConsents.http<void>({
    method: 'DELETE',
    url: `${RightConsents.config.apiRoot}/models/${id}`,
    options
  });
}

export function setDefaultInfoModel(user: string, operator: string, form: string, options?: RCApiOptions): Observable<void> {
  return RightConsents.http<void>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/models/defaultinfo`,
    params: { user: user, operator: operator, form: form },
    options
  });
}

export function listVersions<T extends ModelData = ModelData>(id: string, options: RCApiOptions = { noAuth: true }): Observable<ModelVersionDtoLight<T>[]> {
  return RightConsents.http<ModelVersionDtoLight[]>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions`,
    options
  });
}

export function createVersion<T extends ModelData = ModelData>(id: string, dto: ModelVersionDto<T>, options?: RCApiOptions): Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions`,
    body: dto,
    options
  });
}

export function getLatestVersion<T extends ModelData = ModelData>(id: string, options: RCApiOptions = { noAuth: true }): Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/latest`,
    options
  });
}

export function getActiveVersion<T extends ModelData = ModelData>(id: string, options: RCApiOptions = { noAuth: true }): Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/active`,
    options
  });
}

export function getVersion<T extends ModelData = ModelData>(id: string, versionId: string, options: RCApiOptions = { noAuth: true }): Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}`,
    options
  });
}

export function updateVersion<T extends ModelData = ModelData>(id: string, versionId: string, dto: ModelVersionDto<T>, options?: RCApiOptions): Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'PUT',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}`,
    body: dto,
    options
  });
}

export function updateVersionStatus<T extends ModelData = ModelData>(id: string, versionId: string, status: ModelVersionStatus, options?: RCApiOptions)
    : Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'PUT',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}/status`,
    body: { status },
    options
  });
}

export function updateVersionType<T extends ModelData = ModelData>(id: string, versionId: string, type: ModelVersionType, options?: RCApiOptions):
    Observable<ModelVersionDto<T>> {
  return RightConsents.http<ModelVersionDto<T>>({
    method: 'PUT',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}/type`,
    body: { type },
    options
  });
}

export function getVersionPreview(id: string, vid: string, dto: PreviewDto, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/${vid}/preview`,
    body: dto,
    responseType: 'text',
    options
  });
}

export function deleteVersion(id: string, versionId: string, options?: RCApiOptions): Observable<void> {
  return RightConsents.http<void>({
    method: 'DELETE',
    url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}`,
    options
  });
}

export function exportEntry(id: string, options: RCApiOptions = { noAuth: true }): Observable<ModelEntryExportDto> {
  return RightConsents.http<ModelEntryExportDto>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/models/${id}/export`,
    options
  });
}

export function importEntry(dto: ModelEntryExportDto, options?: RCApiOptions): Observable<ModelEntryDto> {
  return RightConsents.http<ModelEntryDto>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/models/import`,
    body: dto,
    options
  });
}
