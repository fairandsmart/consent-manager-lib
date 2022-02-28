"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentFormWrapper = void 0;
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ConsentFormWrapper = /** @class */ (function () {
  function ConsentFormWrapper(config) {
    this.config = config;
    this.formId = (Math.random() + 1).toString(36).substring(4);
    if (!this.config.dataCollector) {
      throw new Error("No DataCollector provided for this ConsentFormWrapper");
    }
    if (!this.config.consentCollector) {
      throw new Error(
        "No ConsentCollector provided for this ConsentFormWrapper"
      );
    }
  }
  ConsentFormWrapper.prototype.collect = function () {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.config.dataCollector
        .render()
        .onSend()
        .pipe(
          operators_1.mergeMap(function (dataStore) {
            if (dataStore) {
              if (_this.config.dataCollector.getSubject() !== undefined) {
                _this.config.consentCollector.overrideSubject(
                  _this.config.dataCollector.getSubject()
                );
              }
              return _this.config.consentCollector.collect();
            } else {
              return rxjs_1.throwError(
                "No data provided in DataFormWrapper result"
              );
            }
          }),
          operators_1.mergeMap(function () {
            return _this.config.dataCollector.pushData();
          })
        )
        .subscribe({
          next: function (data) {
            return resolve(data);
          },
          error: function (err) {
            return reject(err);
          },
        });
    });
  };
  return ConsentFormWrapper;
})();
exports.ConsentFormWrapper = ConsentFormWrapper;
