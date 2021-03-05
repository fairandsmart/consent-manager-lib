"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
var api_1 = require("../api");
function getStats() {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/stats",
  });
}
exports.getStats = getStats;
