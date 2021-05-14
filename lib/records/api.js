"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractRecordsCsv =
  exports.extractRecords =
  exports.listRecordsOfSubject =
    void 0;
var api_1 = require("../api");
function listRecordsOfSubject(subject) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/records",
    params: { subject: subject },
  });
}
exports.listRecordsOfSubject = listRecordsOfSubject;
function extractRecords(config) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/records/extraction",
    body: config,
  });
}
exports.extractRecords = extractRecords;
function extractRecordsCsv(config) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/records/extraction",
    body: config,
    headers: {
      Accept: "text/csv",
    },
    responseType: "text",
  });
}
exports.extractRecordsCsv = extractRecordsCsv;
