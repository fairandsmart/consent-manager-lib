"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReceiptPdf = exports.generateReceiptToken = void 0;
var api_1 = require("../api");
function generateReceiptToken(transaction) {
  return api_1.RightConsents.http({
    method: "POST",
    url: api_1.RightConsents.config.apiRoot + "/receipts/token",
    body: transaction,
    responseType: "text",
  });
}
exports.generateReceiptToken = generateReceiptToken;
function getReceiptPdf(token, transactionId) {
  return api_1.RightConsents.http({
    method: "GET",
    url: api_1.RightConsents.config.apiRoot + "/receipts/" + transactionId,
    params: { t: token, format: "application/pdf" },
    responseType: "arraybuffer",
  });
}
exports.getReceiptPdf = getReceiptPdf;
