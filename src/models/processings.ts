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

import { CollectionMethod } from '../common';

export interface ConsentContext {
  subject: string;
  orientation: ConsentFormOrientation;
  info: string;
  elements: string[];
  callback: string;
  language: string;
  validity?: string;
  formType: ConsentFormType;
  receiptDisplayType?: ReceiptDisplayType;
  userinfos: { [key: string]: string };
  attributes: { [key: string]: string };
  notificationModel: string;
  notificationRecipient: string;
  collectionMethod: CollectionMethod;
  author: string;
  preview: boolean;
  iframe: boolean;
  theme?: string;
  acceptAllVisible?: boolean;
  validityVisible?: boolean;
  acceptAllText?: string;
  footerOnTop?: boolean;
}

export enum ConsentFormOrientation {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL'
}

export const CONSENT_FORM_ORIENTATIONS: ConsentFormOrientation[] = Object.keys(ConsentFormOrientation) as ConsentFormOrientation[];

export enum ConsentFormType {
  PARTIAL = 'PARTIAL',
  FULL = 'FULL'
}

export type ReceiptDisplayType = 'HTML' | 'XML' | 'PDF' | 'TEXT';

export const RECEIPT_DISPLAY_TYPES: ReceiptDisplayType[] = ['HTML', 'XML', 'PDF', 'TEXT'];

export interface ConsentTransaction {
  subject: string;
  transaction: string;
  claims: {[key: string]: string};
}
