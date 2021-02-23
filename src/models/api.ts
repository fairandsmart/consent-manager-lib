import { Observable } from 'rxjs';
import { RightConsents } from '../api';
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
    UpdateModelDto
} from './interfaces';
import { CollectionPage } from '../common';

export const NEW_VERSION_UUID = '11111111-9999-1111-9999-111111111111';

export function listEntries(filter: ModelFilter): Observable<CollectionPage<ModelEntryDto>> {
    return RightConsents.http<CollectionPage<ModelEntryDto>>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/models`,
        params: filter
    });
}

export function createEntry(dto: CreateModelDto): Observable<ModelEntryDto> {
    return RightConsents.http<ModelEntryDto>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/models`,
        body: dto
    });
}

export function getEntry(id: string): Observable<ModelEntryDto> {
    return RightConsents.http<ModelEntryDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/models/${id}`,
    });
}

export function updateEntry(id: string, dto: UpdateModelDto): Observable<ModelEntryDto> {
    return RightConsents.http<ModelEntryDto>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/models/${id}`,
        body: dto
    });
}

export function deleteEntry(id: string): Observable<void> {
    return RightConsents.http<void>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/models/${id}`,
    });
}

export function listVersions<T extends ModelData = ModelData>(id: string): Observable<ModelVersionDtoLight<T>[]> {
    return RightConsents.http<ModelVersionDtoLight[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions`,
    });
}

export function createVersion<T extends ModelData = ModelData>(id: string, dto: ModelVersionDto<T>): Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions`,
        body: dto
    });
}

export function getLatestVersion<T extends ModelData = ModelData>(id: string): Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/latest`,
    });
}

export function getActiveVersion<T extends ModelData = ModelData>(id: string): Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/active`,
    });
}

export function getVersion<T extends ModelData = ModelData>(id: string, versionId: string): Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}`,
    });
}

export function updateVersion<T extends ModelData = ModelData>(id: string, versionId: string, dto: ModelVersionDto<T>): Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}`,
        body: dto
    });
}

export function updateVersionStatus<T extends ModelData = ModelData>(id: string, versionId: string, status: ModelVersionStatus)
    : Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}/status`,
        body: { status }
    });
}

export function updateVersionType<T extends ModelData = ModelData>(id: string, versionId: string, type: ModelVersionType):
    Observable<ModelVersionDto<T>> {
    return RightConsents.http<ModelVersionDto<T>>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}/type`,
        body: { type }
    });
}

export function getVersionPreview(id: string, vid: string, dto: PreviewDto): Observable<string> {
    return RightConsents.http<string>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/${vid}/preview`,
        body: dto,
        responseType: 'text'
    });
}

export function deleteVersion(id: string, versionId: string): Observable<void> {
    return RightConsents.http<void>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/models/${id}/versions/${versionId}`,
    });
}

