/*-
 * #%L
 * Right Consents, a Universal Consents & Preferences Management Platform.
 * %%
 * Copyright (C) 2020 - 2021 Fair And Smart
 * %%
 * This file is part of Right Consents Community Edition.
 *
 * Right Consents Community Edition is published by FAIR AND SMART under the
 * GNU GENERAL PUBLIC LICENCE Version 3 (GPLv3) and a set of additional terms.
 *
 * For more information, please see the “LICENSE” and “LICENSE.FAIRANDSMART”
 * files, or see https://www.fairandsmart.com/opensource/.
 * #L%
 */

import {ModelData, ModelEntryStatus, ModelVersionStatus} from './models/entry';
import {ModelEntryDto, ModelVersionDtoLight} from './dto';


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
