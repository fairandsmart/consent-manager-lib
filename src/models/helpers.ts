import { ModelData, ModelEntryDto, ModelEntryStatus, ModelVersionDtoLight, ModelVersionStatus } from './interfaces';

export class ModelEntryHelper {
    static getActiveVersionIdentifier(model: ModelEntryDto): string | null {
        const activeVersion = ModelEntryHelper.getActiveVersion(model);
        return activeVersion != null ? `${model.type}/${model.key}/${activeVersion.serial}` : null;
    }

    static getActiveVersion<T extends ModelData = ModelData>(model: ModelEntryDto): ModelVersionDtoLight<T> | undefined {
        return model.versions.find(v => v.status === ModelVersionStatus.ACTIVE);
    }

    static hasActiveVersion(model: ModelEntryDto): boolean {
        return model.status !== ModelEntryStatus.DELETED && ModelEntryHelper.getActiveVersion(model) != null;
    }
}
