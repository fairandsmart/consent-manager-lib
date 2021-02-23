"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKey = exports.createKey = exports.listKeys = void 0;
var api_1 = require("../api");
function listKeys() {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/keys",
  });
}
exports.listKeys = listKeys;
function createKey(name) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/keys",
    body: { name: name },
  });
}
exports.createKey = createKey;
function deleteKey(id) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: api_1.RightConsents.config.apiRoot + "/keys/" + id,
  });
}
exports.deleteKey = deleteKey;
