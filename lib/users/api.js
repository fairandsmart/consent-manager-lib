"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserStatus = exports.getRecordsForUser = exports.getMe = void 0;
var api_1 = require("../api");
function getMe(token) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/user/me",
    headers: { Authorization: token },
  });
}
exports.getMe = getMe;
function getRecordsForUser(token) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/user/records",
    headers: { Authorization: token },
  });
}
exports.getRecordsForUser = getRecordsForUser;
function getUserStatus(token) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/user/status",
    headers: { Authorization: token },
  });
}
exports.getUserStatus = getUserStatus;
