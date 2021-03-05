import { SortDirection } from '../common';
import { ConsentFormOrientation } from '../consents';

export enum ModelEntryStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DELETED = 'DELETED'
}

export type ModelEntryStatuses = keyof ModelEntryStatus;
export const MODEL_ENTRY_STATUSES: ModelEntryStatuses[] = Object.keys(ModelEntryStatus) as ModelEntryStatuses[];

export interface ModelData {
    type: ModelDataType;
}

export enum ModelVersionStatus {
    DRAFT = 'DRAFT',
    ACTIVE = 'ACTIVE',
    ARCHIVED = 'ARCHIVED'
}

export enum ModelVersionType {
    MAJOR = 'MAJOR',
    MINOR = 'MINOR'
}

export interface BasicInfo extends ModelData {
    type: 'basicinfo';
    title: string;
    header: string;
    footer: string;
    jurisdiction: string;
    jurisdictionVisible: boolean;
    collectionMethod: string;
    collectionMethodVisible: boolean;
    dataController: Controller;
    dataControllerVisible: boolean;
    scope: string;
    scopeVisible: boolean;
    shortNoticeLink: string;
    shortNoticeLinkVisible: boolean;
    privacyPolicyUrl: string;
    customPrivacyPolicyText: string;
}

export interface Controller {
    company: string;
    info: string;
    address: string;
    email: string;
    phoneNumber: string;
}

export enum RetentionUnit {
    YEAR = 'YEAR',
    MONTH = 'MONTH',
    WEEK = 'WEEK'
}

export const RETENTION_UNITS = Object.keys(RetentionUnit);

export enum ProcessingPurpose {
    CONSENT_CORE_SERVICE = 'CONSENT_CORE_SERVICE',
    CONSENT_IMPROVED_SERVICE = 'CONSENT_IMPROVED_SERVICE',
    CONSENT_MARKETING = 'CONSENT_MARKETING',
    CONSENT_THIRD_PART_SHARING = 'CONSENT_THIRD_PART_SHARING',
    CONSENT_RESEARCH = 'CONSENT_RESEARCH'
}

export const PROCESSING_PURPOSES = Object.keys(ProcessingPurpose);

export interface RetentionInfo {
    label: string;
    value: number;
    unit: RetentionUnit;
    fullText: string;
}

export interface Processing extends ModelData {
    type: 'processing';
    title: string;
    data: string;
    retention: RetentionInfo;
    usage: string;
    purposes: ProcessingPurpose[];
    containsSensitiveData: boolean;
    containsMedicalData: boolean;
    dataController: Controller;
    dataControllerVisible: boolean;
    thirdParties: { name: string, value: string }[];
}

export enum PreferenceValueType {
    TOGGLE = 'TOGGLE',
    CHECKBOXES = 'CHECKBOXES',
    RADIO_BUTTONS = 'RADIO_BUTTONS',
    LIST_SINGLE = 'LIST_SINGLE',
    LIST_MULTI = 'LIST_MULTI',
    FREE_TEXT = 'FREE_TEXT'
}

export const PREFERENCE_VALUE_TYPES: PreferenceValueType[] = Object.keys(PreferenceValueType) as PreferenceValueType[];

export interface Preference extends ModelData {
    type: 'preference';
    label: string;
    description: string;
    options: string[];
    valueType: PreferenceValueType;
    includeDefault: boolean;
    defaultValues: string[];
    optional: boolean;
}

export interface Conditions extends ModelData {
    type: 'conditions';
    title: string;
    body: string;
    acceptLabel?: string; // deprecated
    rejectLabel?: string; // deprecated
}

export enum LogoPosition {
    LEFT = 'LEFT',
    CENTER = 'CENTER',
    RIGHT = 'RIGHT'
}

export const LOGO_POSITIONS = Object.keys(LogoPosition);

export interface Theme extends ModelData {
    type: 'theme';
    name: string;
    icon: string;
    css: string;
    logoPath?: string;
    logoAltText?: string;
    logoPosition?: LogoPosition;
}

export interface Email extends ModelData {
    type: 'email';
    sender: string;
    subject: string;
    title: string;
    body: string;
    buttonLabel: string;
    footer: string;
    signature: string;
}

export type ModelDataType = 'basicinfo' | 'processing' | 'conditions' | 'theme' | 'email' | 'preference';

export enum PreviewType {
    FORM = 'FORM',
    RECEIPT = 'RECEIPT',
    EMAIL = 'EMAIL'
}

export const PREVIEW_TYPES = Object.keys(PreviewType);

export interface ModelFilter {
    types?: ModelDataType[];
    keys?: string[];
    keyword?: string;
    statuses?: ModelEntryStatus[];
    languages?: string[];
    page?: number;
    size?: number;
    order?: string;
    direction?: SortDirection;
}

export interface PreviewDto {
    language: string;
    orientation: ConsentFormOrientation;
    data?: ModelData;
    previewType?: PreviewType;
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
