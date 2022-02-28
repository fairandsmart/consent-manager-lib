"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserStatus = exports.getRecordsForUser = exports.getMe = void 0;
var api_1 = require("../api");
function getMe(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/user",
    options: options,
  });
}
exports.getMe = getMe;
function getRecordsForUser(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/user/records",
    options: options,
  });
}
exports.getRecordsForUser = getRecordsForUser;
function getUserStatus(options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/user/status",
    options: options,
  });
}
exports.getUserStatus = getUserStatus;
