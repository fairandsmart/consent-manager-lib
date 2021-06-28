"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postConsent = exports.getFormUrl = exports.generateToken = void 0;
var api_1 = require("../api");
function generateToken(ctx) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents/token",
    body: ctx,
    responseType: "text",
  });
}
exports.generateToken = generateToken;
function getFormUrl(token) {
  return (
    api_1.RightConsents.config.apiRoot +
    "/consents?t=" +
    encodeURIComponent(token)
  );
}
exports.getFormUrl = getFormUrl;
function postConsent(values) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/consents",
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
exports.postConsent = postConsent;
