"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubmitFormPreview =
  exports.postSubmissionValuesHtml =
  exports.createTransactionJson =
    void 0;
var api_1 = require("../api");
function createTransactionJson(ctx, lang, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents",
    body: ctx,
    responseType: "text",
    resolveHeaders: true,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    options: options,
  });
}
exports.createTransactionJson = createTransactionJson;
function postSubmissionValuesHtml(txid, values, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents/" + txid + "/submit",
    body: Object.keys(values)
      .map(function (key) {
        return key + "=" + encodeURIComponent(values[key]);
      })
      .join("&"),
    responseType: "text",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    options: options,
  });
}
exports.postSubmissionValuesHtml = postSubmissionValuesHtml;
function getSubmitFormPreview(ctx, lang, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents/preview",
    body: ctx,
    responseType: "text",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    options: options,
  });
}
exports.getSubmitFormPreview = getSubmitFormPreview;
