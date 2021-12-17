"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentFormWrapper = void 0;
var models_1 = require("../models");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ConsentFormWrapper = /** @class */ (function () {
  function ConsentFormWrapper(config) {
    this.config = config;
    this.parentFormElement = null;
    this.formId = (Math.random() + 1).toString(36).substring(4);
    this.transformElement();
  }
  ConsentFormWrapper.prototype.transformElement = function () {
    var _this = this;
    this.parentFormElement = document.getElementById(this.config.elementId);
    if (this.parentFormElement !== null) {
      this.parentFormElement.innerHTML = "Loading...";
      this.loadLayout().then(function (layout) {
        if (!layout) {
          _this.parentFormElement.innerHTML =
            "Error while loading consent layout...";
        }
        console.log("Layout version loaded", layout);
      });
    } else {
      throw new Error(
        "[F&S Consent Form Wrapper] Element with id " +
          this.config.elementId +
          " not found"
      );
    }
  };
  ConsentFormWrapper.prototype.loadLayout = function () {
    var _this = this;
    return models_1
      .listEntries({
        types: ["layout"],
        keys: [this.config.layoutId],
        statuses: [models_1.ModelEntryStatus.ACTIVE],
      })
      .pipe(
        operators_1.map(function (response) {
          return response.totalCount > 0 ? response.values[0] : null;
        }),
        operators_1.mergeMap(function (layout) {
          if (!layout) {
            return rxjs_1.throwError(
              "No active layout with id " + _this.config.layoutId
            );
          }
          var version = models_1.ModelEntryHelper.getActiveVersion(layout);
          if (!version) {
            return rxjs_1.throwError(
              "No active version for this layout with id " +
                _this.config.layoutId
            );
          }
          return models_1.getVersion(layout.id, version.id);
        })
      )
      .toPromise();
  };
  ConsentFormWrapper.prototype.submitForm = function () {};
  return ConsentFormWrapper;
})();
exports.ConsentFormWrapper = ConsentFormWrapper;
