"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceiptPdf = void 0;
var api_1 = require("../api");
function getReceiptPdf(transactionId, theme) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/receipts/" + transactionId,
    params: { theme: theme, format: "application/pdf" },
    responseType: "arraybuffer",
  });
}
exports.getReceiptPdf = getReceiptPdf;
