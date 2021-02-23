"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECEIPT_DISPLAY_TYPES = exports.ConsentFormType = exports.CONSENT_FORM_ORIENTATIONS = exports.ConsentFormOrientation = void 0;
/** Indicates the orientation the form will be displayed. Either VERTICAL or HORIZONTAL. */
var ConsentFormOrientation;
(function (ConsentFormOrientation) {
  ConsentFormOrientation["HORIZONTAL"] = "HORIZONTAL";
  ConsentFormOrientation["VERTICAL"] = "VERTICAL";
})(
  (ConsentFormOrientation =
    exports.ConsentFormOrientation || (exports.ConsentFormOrientation = {}))
);
/** Indicates the orientation the form will be displayed. Either VERTICAL or HORIZONTAL. */
exports.CONSENT_FORM_ORIENTATIONS = Object.keys(ConsentFormOrientation);
/**
 * Indicates if the form should be displayed FULL or PARTIAL.
 * FULL: display all entries
 * PARTIAL : only display the entries that don't have any collected value for the user yet
 */
var ConsentFormType;
(function (ConsentFormType) {
  ConsentFormType["PARTIAL"] = "PARTIAL";
  ConsentFormType["FULL"] = "FULL";
})(
  (ConsentFormType = exports.ConsentFormType || (exports.ConsentFormType = {}))
);
/** All the valid format the receipt can be displayed in */
exports.RECEIPT_DISPLAY_TYPES = ["HTML", "XML", "PDF", "TEXT"];
