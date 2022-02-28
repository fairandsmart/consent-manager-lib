"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentHelper = void 0;
var models_1 = require("../models");
var ConsentHelper = /** @class */ (function () {
  function ConsentHelper() {}
  ConsentHelper.generateContextFromRecord = function (entry, record, lang) {
    if (lang === void 0) {
      lang = entry.defaultLanguage;
    }
    return {
      language: lang,
      subject: record.subject,
      origin: models_1.ConsentOrigin.USER,
      layoutData: {
        info: "",
        elements: [entry.key],
        type: "layout",
      },
    };
  };
  return ConsentHelper;
})();
exports.ConsentHelper = ConsentHelper;
