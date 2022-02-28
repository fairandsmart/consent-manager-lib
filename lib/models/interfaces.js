"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREVIEW_TYPES =
  exports.PreviewType =
  exports.CONSENT_ORIGIN =
  exports.ConsentOrigin =
  exports.CONSENT_FORM_ORIENTATIONS =
  exports.FormLayoutOrientation =
  exports.LOGO_POSITIONS =
  exports.LogoPosition =
  exports.PREFERENCE_VALUE_TYPES =
  exports.PreferenceValueType =
  exports.PROCESSING_LEGAL_BASES =
  exports.ProcessingLegalBasis =
  exports.PROCESSING_PURPOSES =
  exports.ProcessingPurpose =
  exports.RETENTION_UNITS =
  exports.RetentionUnit =
  exports.DEFAULT_INFO_TAGS =
  exports.DefaultInfoTag =
  exports.ModelVersionType =
  exports.ModelVersionStatus =
  exports.MODEL_ENTRY_STATUSES =
  exports.ModelEntryStatus =
    void 0;
var ModelEntryStatus;
(function (ModelEntryStatus) {
  ModelEntryStatus["ACTIVE"] = "ACTIVE";
  ModelEntryStatus["INACTIVE"] = "INACTIVE";
  ModelEntryStatus["DELETED"] = "DELETED";
})(
  (ModelEntryStatus =
    exports.ModelEntryStatus || (exports.ModelEntryStatus = {}))
);
exports.MODEL_ENTRY_STATUSES = Object.keys(ModelEntryStatus);
var ModelVersionStatus;
(function (ModelVersionStatus) {
  ModelVersionStatus["DRAFT"] = "DRAFT";
  ModelVersionStatus["ACTIVE"] = "ACTIVE";
  ModelVersionStatus["ARCHIVED"] = "ARCHIVED";
})(
  (ModelVersionStatus =
    exports.ModelVersionStatus || (exports.ModelVersionStatus = {}))
);
var ModelVersionType;
(function (ModelVersionType) {
  ModelVersionType["MAJOR"] = "MAJOR";
  ModelVersionType["MINOR"] = "MINOR";
})(
  (ModelVersionType =
    exports.ModelVersionType || (exports.ModelVersionType = {}))
);
var DefaultInfoTag;
(function (DefaultInfoTag) {
  DefaultInfoTag["DEFAULT_INFO_USER"] = "DEFAULT_INFO_USER";
  DefaultInfoTag["DEFAULT_INFO_OPERATOR"] = "DEFAULT_INFO_OPERATOR";
  DefaultInfoTag["DEFAULT_INFO_FORM"] = "DEFAULT_INFO_FORM";
})((DefaultInfoTag = exports.DefaultInfoTag || (exports.DefaultInfoTag = {})));
exports.DEFAULT_INFO_TAGS = Object.keys(DefaultInfoTag);
var RetentionUnit;
(function (RetentionUnit) {
  RetentionUnit["YEAR"] = "YEAR";
  RetentionUnit["MONTH"] = "MONTH";
  RetentionUnit["WEEK"] = "WEEK";
})((RetentionUnit = exports.RetentionUnit || (exports.RetentionUnit = {})));
exports.RETENTION_UNITS = Object.keys(RetentionUnit);
var ProcessingPurpose;
(function (ProcessingPurpose) {
  ProcessingPurpose["CONSENT_CORE_SERVICE"] = "CONSENT_CORE_SERVICE";
  ProcessingPurpose["CONSENT_IMPROVED_SERVICE"] = "CONSENT_IMPROVED_SERVICE";
  ProcessingPurpose["CONSENT_MARKETING"] = "CONSENT_MARKETING";
  ProcessingPurpose["CONSENT_THIRD_PART_SHARING"] =
    "CONSENT_THIRD_PART_SHARING";
  ProcessingPurpose["CONSENT_RESEARCH"] = "CONSENT_RESEARCH";
})(
  (ProcessingPurpose =
    exports.ProcessingPurpose || (exports.ProcessingPurpose = {}))
);
exports.PROCESSING_PURPOSES = Object.keys(ProcessingPurpose);
var ProcessingLegalBasis;
(function (ProcessingLegalBasis) {
  ProcessingLegalBasis["LEGAL_BASIS_CONSENT"] = "LEGAL_BASIS_CONSENT";
  ProcessingLegalBasis["LEGAL_BASIS_CONTRACT"] = "LEGAL_BASIS_CONTRACT";
  ProcessingLegalBasis["LEGAL_BASIS_LEGITIMATE_INTEREST"] =
    "LEGAL_BASIS_LEGITIMATE_INTEREST";
  ProcessingLegalBasis["LEGAL_BASIS_LEGAL_OBLIGATION"] =
    "LEGAL_BASIS_LEGAL_OBLIGATION";
  ProcessingLegalBasis["LEGAL_BASIS_PUBLIC_INTEREST"] =
    "LEGAL_BASIS_PUBLIC_INTEREST";
  ProcessingLegalBasis["LEGAL_BASIS_VITAL_INTEREST"] =
    "LEGAL_BASIS_VITAL_INTEREST";
})(
  (ProcessingLegalBasis =
    exports.ProcessingLegalBasis || (exports.ProcessingLegalBasis = {}))
);
exports.PROCESSING_LEGAL_BASES = Object.keys(ProcessingLegalBasis);
var PreferenceValueType;
(function (PreferenceValueType) {
  PreferenceValueType["TOGGLE"] = "TOGGLE";
  PreferenceValueType["CHECKBOXES"] = "CHECKBOXES";
  PreferenceValueType["RADIO_BUTTONS"] = "RADIO_BUTTONS";
  PreferenceValueType["LIST_SINGLE"] = "LIST_SINGLE";
  PreferenceValueType["LIST_MULTI"] = "LIST_MULTI";
  PreferenceValueType["FREE_TEXT"] = "FREE_TEXT";
})(
  (PreferenceValueType =
    exports.PreferenceValueType || (exports.PreferenceValueType = {}))
);
exports.PREFERENCE_VALUE_TYPES = Object.keys(PreferenceValueType);
var LogoPosition;
(function (LogoPosition) {
  LogoPosition["LEFT"] = "LEFT";
  LogoPosition["CENTER"] = "CENTER";
  LogoPosition["RIGHT"] = "RIGHT";
})((LogoPosition = exports.LogoPosition || (exports.LogoPosition = {})));
exports.LOGO_POSITIONS = Object.keys(LogoPosition);
var FormLayoutOrientation;
(function (FormLayoutOrientation) {
  FormLayoutOrientation["HORIZONTAL"] = "HORIZONTAL";
  FormLayoutOrientation["VERTICAL"] = "VERTICAL";
})(
  (FormLayoutOrientation =
    exports.FormLayoutOrientation || (exports.FormLayoutOrientation = {}))
);
exports.CONSENT_FORM_ORIENTATIONS = Object.keys(FormLayoutOrientation);
var ConsentOrigin;
(function (ConsentOrigin) {
  ConsentOrigin["WEBFORM"] = "WEBFORM";
  ConsentOrigin["OPERATOR"] = "OPERATOR";
  ConsentOrigin["USER"] = "USER";
})((ConsentOrigin = exports.ConsentOrigin || (exports.ConsentOrigin = {})));
exports.CONSENT_ORIGIN = Object.keys(ConsentOrigin);
var PreviewType;
(function (PreviewType) {
  PreviewType["FORM"] = "FORM";
  PreviewType["RECEIPT"] = "RECEIPT";
  PreviewType["EMAIL"] = "EMAIL";
})((PreviewType = exports.PreviewType || (exports.PreviewType = {})));
exports.PREVIEW_TYPES = Object.keys(PreviewType);
