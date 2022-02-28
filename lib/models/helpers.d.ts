import { ModelData, ModelEntryDto, ModelVersionDtoLight } from './interfaces';
export declare class ModelEntryHelper {
    static getActiveVersionIdentifier(model: ModelEntryDto): string | null;
    static getActiveVersion<T extends ModelData = ModelData>(model: ModelEntryDto): ModelVersionDtoLight<T> | undefined;
    static hasActiveVersion(model: ModelEntryDto): boolean;
}
