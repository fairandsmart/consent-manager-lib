"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractRecordsCsv =
  exports.extractRecords =
  exports.listRecordsOfSubject =
    void 0;
var api_1 = require("../api");
function listRecordsOfSubject(subject, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/records",
    params: { subject: subject },
    options: options,
  });
}
exports.listRecordsOfSubject = listRecordsOfSubject;
function extractRecords(config, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/records/extraction",
    body: config,
    options: options,
  });
}
exports.extractRecords = extractRecords;
function extractRecordsCsv(config, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/records/extraction",
    body: config,
    headers: {
      Accept: "text/csv",
    },
    responseType: "text",
    options: options,
  });
}
exports.extractRecordsCsv = extractRecordsCsv;
