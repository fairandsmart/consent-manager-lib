"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
var api_1 = require("../api");
function createToken(accessToken, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/tokens",
    body: accessToken,
    responseType: "text",
    options: options,
  });
}
exports.createToken = createToken;
