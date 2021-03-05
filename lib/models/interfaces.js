"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREVIEW_TYPES = exports.PreviewType = exports.LOGO_POSITIONS = exports.LogoPosition = exports.PREFERENCE_VALUE_TYPES = exports.PreferenceValueType = exports.PROCESSING_PURPOSES = exports.ProcessingPurpose = exports.RETENTION_UNITS = exports.RetentionUnit = exports.ModelVersionType = exports.ModelVersionStatus = exports.MODEL_ENTRY_STATUSES = exports.ModelEntryStatus = void 0;
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
var PreviewType;
(function (PreviewType) {
  PreviewType["FORM"] = "FORM";
  PreviewType["RECEIPT"] = "RECEIPT";
  PreviewType["EMAIL"] = "EMAIL";
})((PreviewType = exports.PreviewType || (exports.PreviewType = {})));
exports.PREVIEW_TYPES = Object.keys(PreviewType);
