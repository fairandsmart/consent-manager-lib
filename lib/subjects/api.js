"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSubjectRecords =
  exports.updateSubject =
  exports.createSubject =
  exports.getSubject =
  exports.listSubjects =
    void 0;
var api_1 = require("../api");
function listSubjects(name) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/subjects",
    params: { name: name },
  });
}
exports.listSubjects = listSubjects;
function getSubject(name) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/subjects/" + name,
  });
}
exports.getSubject = getSubject;
function createSubject(subject) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/subjects",
    body: subject,
  });
}
exports.createSubject = createSubject;
function updateSubject(subject) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: api_1.RightConsents.config.apiRoot + "/subjects/" + subject.id,
    body: subject,
  });
}
exports.updateSubject = updateSubject;
function listSubjectRecords(subject) {
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot + "/subjects/" + subject + "/records",
  });
}
exports.listSubjectRecords = listSubjectRecords;
