import { SortDirection } from '../common';

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

export interface Information extends ModelData {
    type: 'information';
    title: string;
    header: string;
    footer: string;
    jurisdiction: string;
    jurisdictionVisible: boolean;
    dataController: Controller;
    dataControllerVisible: boolean;
    scope: string;
    scopeVisible: boolean;
    shortNoticeLink: string;
    shortNoticeLinkVisible: boolean;
    privacyPolicyUrl: string;
    customPrivacyPolicyText: string;
}

export enum DefaultInfoTag {
    DEFAULT_INFO_USER = 'DEFAULT_INFO_USER',
    DEFAULT_INFO_OPERATOR = 'DEFAULT_INFO_OPERATOR',
    DEFAULT_INFO_FORM = 'DEFAULT_INFO_FORM',
}

export const DEFAULT_INFO_TAGS = Object.keys(DefaultInfoTag);

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

export enum ProcessingLegalBasis {
    LEGAL_BASIS_CONSENT = 'LEGAL_BASIS_CONSENT',
    LEGAL_BASIS_CONTRACT = 'LEGAL_BASIS_CONTRACT',
    LEGAL_BASIS_LEGITIMATE_INTEREST = 'LEGAL_BASIS_LEGITIMATE_INTEREST',
    LEGAL_BASIS_LEGAL_OBLIGATION = 'LEGAL_BASIS_LEGAL_OBLIGATION',
    LEGAL_BASIS_PUBLIC_INTEREST = 'LEGAL_BASIS_PUBLIC_INTEREST',
    LEGAL_BASIS_VITAL_INTEREST = 'LEGAL_BASIS_VITAL_INTEREST'
}

export const PROCESSING_LEGAL_BASES = Object.keys(ProcessingLegalBasis);

export interface RetentionInfo {
    label: string;
    value: number;
    unit: RetentionUnit;
    fullText: string;
}

export interface Processing extends ModelData {
    type: 'processing';
    title: string;
    legalBasis: ProcessingLegalBasis;
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
    refusable?: boolean;
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

export interface FormLayout extends ModelData {
    type: 'layout';
    info: string;
    elements: string[];
    theme?: string;
    notification?: string;
    orientation?: FormLayoutOrientation;
    existingElementsVisible?: boolean;
    validityVisible?: boolean;
    includeIFrameResizer?: boolean;
    acceptAllVisible?: boolean;
    acceptAllText?: string;
    submitText?: string;
    cancelVisible?: boolean;
    cancelText?: string;
    footerOnTop?: boolean;
}

export enum FormLayoutOrientation {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL'
}

export const CONSENT_FORM_ORIENTATIONS: FormLayoutOrientation[] = Object.keys(FormLayoutOrientation) as FormLayoutOrientation[];

export enum ConsentOrigin {
    WEBFORM = 'WEBFORM',
    OPERATOR = 'OPERATOR',
    USER = 'USER'
}

export const CONSENT_ORIGIN: ConsentOrigin[] = Object.keys(ConsentOrigin) as ConsentOrigin[];

export type ModelDataType = 'information' | 'processing' | 'conditions' | 'theme' | 'email' | 'preference' | 'layout';

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
    tags?: string[];
    languages?: string[];
    page?: number;
    size?: number;
    order?: string;
    direction?: SortDirection;
}

export interface PreviewDto {
    language: string;
    orientation: FormLayoutOrientation;
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

export interface ModelEntryDtoPartial {
    id: string;
    key: string;
    name: string;
    description: string;
    type: ModelDataType;
    creationDate: number;
    modificationDate: number;
    status: ModelEntryStatus;
    defaultLanguage: string;
    availableLanguages: string[];
    tags?: string[];
}

export interface ModelEntryDto extends ModelEntryDtoPartial {
    versions: ModelVersionDtoLight[];
}

export interface ModelEntryExportDto extends ModelEntryDtoPartial {
    versions: ModelVersionDto[];
}
