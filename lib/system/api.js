"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientConfig = exports.getSupportInfo = void 0;
var api_1 = require("../api");
function getSupportInfo(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/system/support/infos",
    options: options,
  });
}
exports.getSupportInfo = getSupportInfo;
function getClientConfig(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/system/config",
    options: options,
  });
}
exports.getClientConfig = getClientConfig;
