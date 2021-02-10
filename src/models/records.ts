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

import { CollectionMethod, SortDirection } from '../common';

export enum RecordStates {
  PENDING = 'PENDING',
  COMMITTED = 'COMMITTED',
  DELETED = 'DELETED'
}

export enum RecordStatus {
  VALID = 'VALID',
  OBSOLETE = 'OBSOLETE',
  EXPIRED = 'EXPIRED',
  IRRELEVANT = 'IRRELEVANT',
  UNKNOWN = 'UNKNOWN'
}

export enum RecordStatusExplanation {
  LATEST_VALID = 'LATEST_VALID',
  OBSOLETE = 'OBSOLETE',
  EXPIRED = 'EXPIRED',
  INFO_SERIAL_ARCHIVED = 'INFO_SERIAL_ARCHIVED',
  BODY_SERIAL_ARCHIVED = 'BODY_SERIAL_ARCHIVED',
  STILL_PENDING = 'STILL_PENDING',
  ENTRY_DELETED = 'ENTRY_DELETED'
}

export interface RecordFilter {
  page?: number;
  size?: number;
  subject?: string;
  states?: RecordStates[];
  infos?: string[];
  elements?: string[];
  collectionMethods?: CollectionMethod[];
  after?: number;
  before?: number;
  value?: string;
  order?: string;
  direction?: SortDirection;
}

export interface Key {
  id?: string;
  name: string;
  key?: string;
  creationDate?: number;
  lastAccessDate?: number;
}

export interface EntryRecord {
  id: string;
  key: string;
  type: string;
  name: string;
  identifier: string;
  value?: string;
  recordCreation?: number;
  recordExpiration?: number;
  comment?: string;
  collectionMethod?: CollectionMethod;
  status?: RecordStatus;
  active: boolean;
  versionIndex: number;
}

export interface OperatorLogElement {
  type: string;
  key: string;
  identifier: string;
  value: string;
}

export interface ExtractionConfigCondition {
  key: string;
  value: string;
  regexpValue: boolean;
}

