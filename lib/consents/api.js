"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubmitFormPreview =
  exports.postSubmissionValuesHtml =
  exports.createTransactionJson =
    void 0;
var api_1 = require("../api");
function createTransactionJson(ctx, lang) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents",
    body: ctx,
    responseType: "text",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    noAuth: true,
  });
}
exports.createTransactionJson = createTransactionJson;
function postSubmissionValuesHtml(txid, values) {
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
    noAuth: true,
  });
}
exports.postSubmissionValuesHtml = postSubmissionValuesHtml;
function getSubmitFormPreview(ctx, lang) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents/preview",
    body: ctx,
    responseType: "text",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    noAuth: true,
  });
}
exports.getSubmitFormPreview = getSubmitFormPreview;
