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

import { ExtractionConfigCondition, RecordStatus, RecordStatusExplanation } from './records';
import { ModelData, ModelDataType, ModelEntryStatus, ModelVersionStatus, ModelVersionType, PreviewType } from './entry';
import { NotificationReport } from './notifications';
import { ConsentFormOrientation } from './processings';
import { CollectionMethod } from './common';

export interface ExtractionConfigDto {
  condition: ExtractionConfigCondition;
}

export interface ExtractionResultDto {
  subjectId: string;
  subjectName: string;
  subjectEmail: string;
  recordKey: string;
  recordSerial: string;
  recordValue: string;
}

export interface UserDto {
  username: string;
  admin: boolean;
  operator: boolean;
  roles: string[];
}

export interface SupportInfoDto {
  status: string;
  latestVersion: string;
  currentVersion: string;
}

export interface ClientConfigDto {
  userPageEnabled: boolean;
  userPageElements: string[];
  language: string;
}

export interface PreviewDto {
  language: string;
  orientation: ConsentFormOrientation;
  data?: ModelData;
  previewType?: PreviewType;
}

export interface ModelEntryDto {
  id: string;
  key: string;
  name: string;
  description: string;
  type: ModelDataType;
  versions: ModelVersionDtoLight[];
  creationDate: number;
  modificationDate: number;
  status: ModelEntryStatus;
  defaultLanguage: string;
  availableLanguages: string[];
}

export interface CreateModelDto {
  key: string;
  name: string;
  description: string;
  type: ModelDataType;
}

export interface UpdateModelDto {
  name: string;
  description: string;
}

export interface ModelVersionDtoLight<T extends ModelData = ModelData> {
  id?: string;
  serial?: string;
  parent?: string;
  child?: string;
  author?: string;
  defaultLanguage?: string;
  availableLanguages?: string[];
  status?: ModelVersionStatus;
  type?: ModelVersionType;
  creationDate?: number;
  modificationDate?: number;
  identifier?: string;
}

export interface ModelVersionDto<T extends ModelData = ModelData> extends ModelVersionDtoLight {
  data: { [language: string]: T };
}
export interface RecordDto {
  serial: string;
  infoKey?: string;
  bodyKey: string;
  subject: string;
  creationTimestamp: number;
  expirationTimestamp: number;
  type: string;
  value: string;
  status: RecordStatus;
  statusExplanation: RecordStatusExplanation;
  collectionMethod: CollectionMethod;
  comment: string;
  transaction: string;
  notificationReports: NotificationReport[];
}
export interface SubjectDto {
  id: string;
  name: string;
  emailAddress: string;
  creationTimestamp: number;
}

export interface RecordsMap {
  [key: string]: RecordDto[];
}
