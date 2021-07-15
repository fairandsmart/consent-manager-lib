"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSubjectRecords =
  exports.updateSubject =
  exports.createSubject =
  exports.getSubject =
  exports.listSubjects =
    void 0;
var api_1 = require("../api");
function listSubjects(name, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/subjects",
    params: { name: name },
    options: options,
  });
}
exports.listSubjects = listSubjects;
function getSubject(name, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/subjects/" + name,
    options: options,
  });
}
exports.getSubject = getSubject;
function createSubject(subject, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/subjects",
    body: subject,
    options: options,
  });
}
exports.createSubject = createSubject;
function updateSubject(subject, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: api_1.RightConsents.config.apiRoot + "/subjects/" + subject.id,
    body: subject,
    options: options,
  });
}
exports.updateSubject = updateSubject;
function listSubjectRecords(subject, options) {
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot + "/subjects/" + subject + "/records",
    options: options,
  });
}
exports.listSubjectRecords = listSubjectRecords;
