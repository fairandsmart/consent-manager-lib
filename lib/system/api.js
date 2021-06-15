"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientConfig = exports.getSupportInfo = void 0;
var api_1 = require("../api");
function getSupportInfo() {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/system/support/infos",
  });
}
exports.getSupportInfo = getSupportInfo;
function getClientConfig() {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/system/config",
  });
}
exports.getClientConfig = getClientConfig;
