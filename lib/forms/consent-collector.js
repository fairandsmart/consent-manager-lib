"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentCollector = void 0;
var api_1 = require("../api");
var ConsentCollector = /** @class */ (function () {
  function ConsentCollector(config) {
    this.config = config;
  }
  ConsentCollector.prototype.collect = function (callback) {
    var _this = this;
    var resolve;
    var reject;
    var promise = new Promise(function (a, b) {
      resolve = a;
      reject = b;
    });
    this.getTokenFromBroker()
      .toPromise()
      .then(function (response) {
        if (
          !(response === null || response === void 0 ? void 0 : response.token)
        ) {
          throw new Error("Could not retrieve token");
        }
        switch (_this.config.mode) {
          case "embed":
            return _this.replaceElement(response.location);
          case "iframe":
            return _this.openInIframe(response.location);
          case "window":
          default:
            return _this.openInNewWindow(response.location);
        }
      })
      .then(function (result) {
        if (callback) {
          callback();
        } else {
          resolve();
        }
      });
    if (!callback) {
      return promise;
    }
  };
  ConsentCollector.prototype.getTokenFromBroker = function () {
    return api_1.RightConsents.http({
      method: "POST",
      url: this.config.tokenBrokerEndpoint,
      body: this.config.consentContext,
      options: {
        noAuth: true,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  ConsentCollector.prototype.openInNewWindow = function (location) {
    return new Promise(function (resolve) {
      var newWindow = window.open(
        location,
        "com_fs_window_consentCollect",
        "menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=900px,height=600px",
        true
      );
      if (!newWindow) {
        throw new Error("Could not open window");
      }
      var interval = setInterval(function () {
        if (newWindow.closed) {
          resolve();
          clearInterval(interval);
        }
      }, 1500);
    });
  };
  ConsentCollector.prototype.openInIframe = function (token, callback) {
    return new Promise(function (resolve) {
      return resolve();
    });
  };
  ConsentCollector.prototype.replaceElement = function (token, callback) {
    return new Promise(function (resolve) {
      return resolve();
    });
  };
  return ConsentCollector;
})();
exports.ConsentCollector = ConsentCollector;
