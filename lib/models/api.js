"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVersion =
  exports.getVersionPreview =
  exports.updateVersionType =
  exports.updateVersionStatus =
  exports.updateVersion =
  exports.getVersion =
  exports.getActiveVersion =
  exports.getLatestVersion =
  exports.createVersion =
  exports.listVersions =
  exports.deleteEntry =
  exports.updateEntry =
  exports.getEntry =
  exports.createEntry =
  exports.listEntries =
  exports.NEW_VERSION_UUID =
    void 0;
var api_1 = require("../api");
exports.NEW_VERSION_UUID = "11111111-9999-1111-9999-111111111111";
function listEntries(filter) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models",
    params: filter,
  });
}
exports.listEntries = listEntries;
function createEntry(dto) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/models",
    body: dto,
  });
}
exports.createEntry = createEntry;
function getEntry(id) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id,
  });
}
exports.getEntry = getEntry;
function updateEntry(id, dto) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id,
    body: dto,
  });
}
exports.updateEntry = updateEntry;
function deleteEntry(id) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id,
  });
}
exports.deleteEntry = deleteEntry;
function listVersions(id) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions",
  });
}
exports.listVersions = listVersions;
function createVersion(id, dto) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions",
    body: dto,
  });
}
exports.createVersion = createVersion;
function getLatestVersion(id) {
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions/latest",
  });
}
exports.getLatestVersion = getLatestVersion;
function getActiveVersion(id) {
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions/active",
  });
}
exports.getActiveVersion = getActiveVersion;
function getVersion(id, versionId) {
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId,
  });
}
exports.getVersion = getVersion;
function updateVersion(id, versionId, dto) {
  return api_1.RightConsents.http({
    method: "PUT",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId,
    body: dto,
  });
}
exports.updateVersion = updateVersion;
function updateVersionStatus(id, versionId, status) {
  return api_1.RightConsents.http({
    method: "PUT",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId +
      "/status",
    body: { status: status },
  });
}
exports.updateVersionStatus = updateVersionStatus;
function updateVersionType(id, versionId, type) {
  return api_1.RightConsents.http({
    method: "PUT",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId +
      "/type",
    body: { type: type },
  });
}
exports.updateVersionType = updateVersionType;
function getVersionPreview(id, vid, dto) {
  return api_1.RightConsents.http({
    method: "POST",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      vid +
      "/preview",
    body: dto,
    responseType: "text",
  });
}
exports.getVersionPreview = getVersionPreview;
function deleteVersion(id, versionId) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId,
  });
}
exports.deleteVersion = deleteVersion;
