"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubjectTokenFromReceipt =
  exports.createSubjectToken =
  exports.generateFormToken =
    void 0;
var api_1 = require("../api");
function generateFormToken(context) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/tokens/consent",
    body: context,
    responseType: "text",
  });
}
exports.generateFormToken = generateFormToken;
function createSubjectToken(subjectContext) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/tokens/subject",
    body: subjectContext,
    responseType: "text",
  });
}
exports.createSubjectToken = createSubjectToken;
function createSubjectTokenFromReceipt(receiptContext) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/tokens/receipt",
    body: receiptContext,
    responseType: "text",
  });
}
exports.createSubjectTokenFromReceipt = createSubjectTokenFromReceipt;
