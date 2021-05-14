"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationReportType =
  exports.NotificationReportStatus =
  exports.RecordStatusExplanation =
  exports.RecordStatus =
  exports.RecordStates =
    void 0;
var RecordStates;
(function (RecordStates) {
  RecordStates["PENDING"] = "PENDING";
  RecordStates["COMMITTED"] = "COMMITTED";
  RecordStates["DELETED"] = "DELETED";
})((RecordStates = exports.RecordStates || (exports.RecordStates = {})));
var RecordStatus;
(function (RecordStatus) {
  RecordStatus["VALID"] = "VALID";
  RecordStatus["OBSOLETE"] = "OBSOLETE";
  RecordStatus["EXPIRED"] = "EXPIRED";
  RecordStatus["IRRELEVANT"] = "IRRELEVANT";
  RecordStatus["UNKNOWN"] = "UNKNOWN";
})((RecordStatus = exports.RecordStatus || (exports.RecordStatus = {})));
var RecordStatusExplanation;
(function (RecordStatusExplanation) {
  RecordStatusExplanation["LATEST_VALID"] = "LATEST_VALID";
  RecordStatusExplanation["OBSOLETE"] = "OBSOLETE";
  RecordStatusExplanation["EXPIRED"] = "EXPIRED";
  RecordStatusExplanation["INFO_SERIAL_ARCHIVED"] = "INFO_SERIAL_ARCHIVED";
  RecordStatusExplanation["BODY_SERIAL_ARCHIVED"] = "BODY_SERIAL_ARCHIVED";
  RecordStatusExplanation["STILL_PENDING"] = "STILL_PENDING";
  RecordStatusExplanation["ENTRY_DELETED"] = "ENTRY_DELETED";
})(
  (RecordStatusExplanation =
    exports.RecordStatusExplanation || (exports.RecordStatusExplanation = {}))
);
var NotificationReportStatus;
(function (NotificationReportStatus) {
  NotificationReportStatus["SENT"] = "SENT";
  NotificationReportStatus["DELIVERED"] = "DELIVERED";
  NotificationReportStatus["OPENED"] = "OPENED";
  NotificationReportStatus["INVALID_RECIPIENT"] = "INVALID_RECIPIENT";
  NotificationReportStatus["MAILBOX_FULL"] = "MAILBOX_FULL";
  NotificationReportStatus["ERROR"] = "ERROR";
  NotificationReportStatus["PENDING"] = "PENDING";
  NotificationReportStatus["NONE"] = "NONE";
})(
  (NotificationReportStatus =
    exports.NotificationReportStatus || (exports.NotificationReportStatus = {}))
);
var NotificationReportType;
(function (NotificationReportType) {
  NotificationReportType["SMS"] = "SMS";
  NotificationReportType["EMAIL"] = "EMAIL";
  NotificationReportType["FCM"] = "FCM";
  NotificationReportType["XMPP"] = "XMPP";
  NotificationReportType["NONE"] = "NONE";
})(
  (NotificationReportType =
    exports.NotificationReportType || (exports.NotificationReportType = {}))
);
