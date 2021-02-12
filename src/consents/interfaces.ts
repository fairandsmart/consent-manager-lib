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
