"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentFormWrapper = void 0;
var ConsentFormWrapper = /** @class */ (function () {
  function ConsentFormWrapper(config) {
    this.config = config;
    this.formId = (Math.random() + 1).toString(36).substring(4);
  }
  ConsentFormWrapper.prototype.collect = function () {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.config.dataFormWrapper
        .render()
        .onSend()
        .subscribe(function (dataStore) {
          if (dataStore) {
            if (_this.config.subjectFieldId) {
              _this.config.consentCollector.overrideSubject(
                _this.config.dataFormWrapper.getSubject(
                  _this.config.subjectFieldId,
                  _this.config.subjectFieldName
                )
              );
            }
            _this.config.consentCollector
              .collect()
              .then(function () {
                return _this.config.dataFormWrapper.pushData();
              })
              .then(resolve)
              .catch(reject);
          } else {
            reject("No data provided in DataFormWrapper result");
          }
        });
    });
  };
  return ConsentFormWrapper;
})();
exports.ConsentFormWrapper = ConsentFormWrapper;
