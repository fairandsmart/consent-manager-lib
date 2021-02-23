"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelEntryHelper = void 0;
var interfaces_1 = require("./interfaces");
var ModelEntryHelper = /** @class */ (function () {
  function ModelEntryHelper() {}
  ModelEntryHelper.getActiveVersionIdentifier = function (model) {
    var activeVersion = ModelEntryHelper.getActiveVersion(model);
    return activeVersion != null
      ? model.type + "/" + model.key + "/" + activeVersion.serial
      : null;
  };
  ModelEntryHelper.getActiveVersion = function (model) {
    return model.versions.find(function (v) {
      return v.status === interfaces_1.ModelVersionStatus.ACTIVE;
    });
  };
  ModelEntryHelper.hasActiveVersion = function (model) {
    return (
      model.status !== interfaces_1.ModelEntryStatus.DELETED &&
      ModelEntryHelper.getActiveVersion(model) != null
    );
  };
  return ModelEntryHelper;
})();
exports.ModelEntryHelper = ModelEntryHelper;
