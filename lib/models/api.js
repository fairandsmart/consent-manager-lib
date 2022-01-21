"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importEntry =
  exports.exportEntry =
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
  exports.setDefaultInfoModel =
  exports.deleteEntry =
  exports.updateEntry =
  exports.getEntry =
  exports.createEntry =
  exports.listEntries =
  exports.NEW_VERSION_UUID =
    void 0;
var api_1 = require("../api");
exports.NEW_VERSION_UUID = "11111111-9999-1111-9999-111111111111";
function listEntries(filter, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models",
    params: filter,
    options: options,
  });
}
exports.listEntries = listEntries;
function createEntry(dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/models",
    body: dto,
    options: options,
  });
}
exports.createEntry = createEntry;
function getEntry(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id,
    options: options,
  });
}
exports.getEntry = getEntry;
function updateEntry(id, dto, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id,
    body: dto,
    options: options,
  });
}
exports.updateEntry = updateEntry;
function deleteEntry(id, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id,
    options: options,
  });
}
exports.deleteEntry = deleteEntry;
function setDefaultInfoModel(user, operator, form, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/models/defaultinfo",
    params: { user: user, operator: operator, form: form },
    options: options,
  });
}
exports.setDefaultInfoModel = setDefaultInfoModel;
function listVersions(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions",
    options: options,
  });
}
exports.listVersions = listVersions;
function createVersion(id, dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions",
    body: dto,
    options: options,
  });
}
exports.createVersion = createVersion;
function getLatestVersion(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions/latest",
    options: options,
  });
}
exports.getLatestVersion = getLatestVersion;
function getActiveVersion(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot + "/models/" + id + "/versions/active",
    options: options,
  });
}
exports.getActiveVersion = getActiveVersion;
function getVersion(id, versionId, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId,
    options: options,
  });
}
exports.getVersion = getVersion;
function updateVersion(id, versionId, dto, options) {
  return api_1.RightConsents.http({
    method: "PUT",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId,
    body: dto,
    options: options,
  });
}
exports.updateVersion = updateVersion;
function updateVersionStatus(id, versionId, status, options) {
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
    options: options,
  });
}
exports.updateVersionStatus = updateVersionStatus;
function updateVersionType(id, versionId, type, options) {
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
    options: options,
  });
}
exports.updateVersionType = updateVersionType;
function getVersionPreview(id, vid, dto, options) {
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
    options: options,
  });
}
exports.getVersionPreview = getVersionPreview;
function deleteVersion(id, versionId, options) {
  return api_1.RightConsents.http({
    method: "DELETE",
    url:
      api_1.RightConsents.config.apiRoot +
      "/models/" +
      id +
      "/versions/" +
      versionId,
    options: options,
  });
}
exports.deleteVersion = deleteVersion;
function exportEntry(id, options) {
  if (options === void 0) {
    options = { noAuth: true };
  }
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/models/" + id + "/export",
    options: options,
  });
}
exports.exportEntry = exportEntry;
function importEntry(dto, options) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/models/import",
    body: dto,
    options: options,
  });
}
exports.importEntry = importEntry;
