"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemResource = exports.SubjectsResource = exports.StatsResource = exports.RecordsResource = exports.ReceiptsResource = exports.ModelsResource = exports.KeysResource = exports.ConsentsResource = void 0;
__exportStar(require("./http"), exports);
__exportStar(require("./common"), exports);
__exportStar(require("./api"), exports);
exports.ConsentsResource = __importStar(require("./consents"));
exports.KeysResource = __importStar(require("./keys"));
exports.ModelsResource = __importStar(require("./models"));
exports.ReceiptsResource = __importStar(require("./receipts"));
exports.RecordsResource = __importStar(require("./records"));
exports.StatsResource = __importStar(require("./statistics"));
exports.SubjectsResource = __importStar(require("./subjects"));
exports.SystemResource = __importStar(require("./system"));
