"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCollector = void 0;
var api_1 = require("../api");
var types_1 = require("@fairandsmart/types");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var DataCollector = /** @class */ (function () {
  function DataCollector(config) {
    this.config = config;
    this.parentFormElement = null;
    this.dataStore = new types_1.DataStoreHelper();
    this.rendered = false;
    this.onSend$ = new rxjs_1.Subject();
    this.formId = (Math.random() + 1).toString(36).substring(4);
  }
  DataCollector.prototype.render = function () {
    if (!this.rendered) {
      this.transformElement();
    }
    return this;
  };
  DataCollector.prototype.onSend = function () {
    return this.onSend$;
  };
  DataCollector.prototype.transformElement = function () {
    var _this = this;
    this.parentFormElement = document.getElementById(this.config.elementId);
    if (this.parentFormElement !== null) {
      this.parentFormElement.innerHTML = "Loading...";
      this.loadSchema().then(function () {
        var element = document.createElement("div");
        element.classList.add("fs-form-container");
        element.innerHTML = _this.buildForm();
        element.appendChild(_this.createSubmitButton());
        _this.parentFormElement.innerHTML = "";
        _this.parentFormElement.append(element);
        _this.rendered = true;
      });
    } else {
      throw new Error(
        "[F&S Data Form Wrapper] Element with id " +
          this.config.elementId +
          " not found"
      );
    }
  };
  DataCollector.prototype.destroyForm = function () {
    if (this.parentFormElement !== null) {
      this.parentFormElement.innerHTML =
        this.config.dataSentTemplate || "Form Sent";
      this.rendered = false;
    }
  };
  DataCollector.prototype.loadSchema = function () {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
      var _c;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            if (
              !((_a = this.config.schemaPrefix) === null || _a === void 0
                ? void 0
                : _a.length) ||
              !((_b = this.config.schemaName) === null || _b === void 0
                ? void 0
                : _b.length)
            ) {
              throw new Error(
                "[F&S Data Form Wrapper] Element with id " +
                  this.config.elementId +
                  ' has no "data-schema-name" of "data-schema-id"'
              );
            }
            _c = this;
            return [
              4 /*yield*/,
              api_1.RightConsents.http({
                method: "GET",
                url:
                  api_1.RightConsents.config.catalogRoot +
                  "/" +
                  this.config.schemaPrefix +
                  "/schemas/" +
                  this.config.schemaName +
                  "/view/formly",
              }).toPromise(),
            ];
          case 1:
            _c.schema = _d.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  DataCollector.prototype.buildForm = function () {
    var _this = this;
    var _a, _b;
    var entriesHtml = [];
    (_a = this.schema) === null || _a === void 0
      ? void 0
      : _a.entries.sort(function (a, b) {
          return a.index - b.index;
        });
    (_b = this.schema) === null || _b === void 0
      ? void 0
      : _b.entries.forEach(function (entry) {
          var _a;
          var formMask =
            (_a = entry.decoration.formMask) === null || _a === void 0
              ? void 0
              : _a[0];
          if (!formMask) {
            return;
          }
          var content =
            '\n                    <div class="entry" id="fsentry-' +
            entry.id +
            '">\n                        <label for="' +
            entry.id +
            '" id="fsentry-' +
            entry.id +
            '-label">' +
            formMask.templateOptions.label +
            "</label>\n                        " +
            _this.generateInput(entry) +
            "\n                    </div>\n                ";
          entriesHtml.push(content);
        });
    return entriesHtml.join("\n");
  };
  DataCollector.prototype.generateInput = function (entry) {
    var formMask = entry.decoration.formMask[0]; // TODO classes ?
    switch (formMask.type) {
      case types_1.RegistryPropertyType.STRING:
        return (
          '\n                    <input class="form-input" type="text" name="' +
          entry.id +
          '" id="' +
          entry.id +
          '" ' +
          (formMask.templateOptions.placeholder
            ? 'placeholder="' + formMask.templateOptions.placeholder + '"'
            : "") +
          " " +
          (formMask.templateOptions.required ? "required=true" : "") +
          ">\n                "
        );
      case types_1.RegistryPropertyType.CHOICE:
      case types_1.RegistryPropertyType.MULTIPLE:
      case types_1.RegistryPropertyType.DATE:
      case types_1.RegistryPropertyType.CLASS:
      default:
        return "<span>Unsupported media type</span>";
    }
  };
  DataCollector.prototype.createSubmitButton = function () {
    var _this = this;
    var button = document.createElement("button");
    button.setAttribute("class", "submit-btn");
    button.id = "submit-btn-" + this.formId;
    button.textContent = "Submit";
    button.onclick = function (e) {
      e.preventDefault();
      _this.submitForm();
    };
    return button;
  };
  DataCollector.prototype.submitForm = function () {
    this.dataStore = new types_1.DataStoreHelper();
    if (this.parentFormElement) {
      var fields = this.parentFormElement.getElementsByClassName("form-input");
      for (var fieldIndex in fields) {
        if (fields.hasOwnProperty(fieldIndex)) {
          this.populateDataStore(fields[fieldIndex]);
        }
      }
      if (!this.getSubject()) {
        throw new Error(
          'Missing user information. Either provide a "user" or "userFieldId" field in the DataFormWrapper configuration. See documentation for more information'
        );
      }
      this.onSend$.next(this.dataStore);
    } else {
      throw new Error("Could not find a valid form element");
    }
  };
  DataCollector.prototype.getSubject = function () {
    var _this = this;
    var _a;
    if (this.config.user) {
      this.finalSubject = this.config.user;
    }
    if (this.config.userFieldId) {
      var entry =
        (_a = this.schema) === null || _a === void 0
          ? void 0
          : _a.entries.find(function (e) {
              return e.id === _this.config.userFieldId;
            });
      if (entry) {
        var result = types_1.FairQueryHelper.apply(
          this.dataStore.store,
          entry.query
        );
        if (!(result === null || result === void 0 ? void 0 : result.length)) {
          throw new Error(
            "Could not find subject for entry id " +
              this.config.userFieldId +
              " in form data"
          );
        }
        var dataEntry = result[0].value;
        this.finalSubject = dataEntry;
        if (!!this.config.userFieldName) {
          if (
            typeof dataEntry !== "object" ||
            !this.config.userFieldName ||
            !Object.prototype.hasOwnProperty.call(
              dataEntry,
              this.config.userFieldName
            )
          ) {
            throw new Error(
              "Could not find subject for field " +
                this.config.userFieldName +
                " in data entry"
            );
          }
          this.finalSubject = dataEntry[this.config.userFieldName];
        }
      }
    }
    return this.finalSubject;
  };
  DataCollector.prototype.populateDataStore = function (field) {
    var _a;
    var _b;
    var entry =
      (_b = this.schema) === null || _b === void 0
        ? void 0
        : _b.entries.find(function (e) {
            return e.id === field.id;
          });
    var toAdd =
      ((_a = {}),
      (_a[types_1.FairQueryHelper.getPropertyFromExp(entry.query)] =
        field.value),
      _a);
    if (this.dataStore.dirty) {
      if (types_1.FairQueryHelper.getParentQuery(entry.query)) {
        var matches = types_1.FairQueryHelper.apply(
          this.dataStore.store,
          types_1.FairQueryHelper.getParentQuery(entry.query)
        );
        if (
          (matches === null || matches === void 0 ? void 0 : matches.length) > 0
        ) {
          toAdd.id = matches[0].value.id;
        }
      }
    }
    this.dataStore.mergeEntry(
      types_1.FairQueryHelper.getClassFromExp(entry.query),
      toAdd.id,
      toAdd
    );
  };
  DataCollector.prototype.pushData = function () {
    var _this = this;
    if (!this.schema) {
      throw new Error("Data schema was not loaded");
    }
    return api_1.RightConsents.http({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: this.dataStore.store,
      url:
        this.config.dataCreationEndpoint +
        "?format=" +
        this.schema.name +
        "%3A" +
        this.schema.serial +
        "&userId=" +
        this.getSubject(),
    })
      .pipe(
        operators_1.tap(function () {
          return _this.destroyForm();
        })
      )
      .toPromise();
  };
  return DataCollector;
})();
exports.DataCollector = DataCollector;
