"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIRMATION_TYPES = exports.Confirmation = void 0;
var Confirmation;
(function (Confirmation) {
  Confirmation["NONE"] = "NONE";
  Confirmation["FORM_CODE"] = "FORM_CODE";
  Confirmation["EMAIL_CODE"] = "EMAIL_CODE";
  Confirmation["SMS_CODE"] = "SMS_CODE";
  Confirmation["SIGNATURE"] = "SIGNATURE";
  Confirmation["AUDIO_RECORD"] = "AUDIO_RECORD";
  Confirmation["VIDEO_RECORD"] = "VIDEO_RECORD";
  Confirmation["DIGITAL_SIGNATURE"] = "DIGITAL_SIGNATURE";
})((Confirmation = exports.Confirmation || (exports.Confirmation = {})));
exports.CONFIRMATION_TYPES = Object.keys(Confirmation);
