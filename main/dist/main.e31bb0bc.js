// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/qiankun/node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

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
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"node_modules/qiankun/node_modules/single-spa/lib/esm/single-spa.min.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addErrorHandler = s;
exports.checkActivityFunctions = Mt;
exports.ensureJQuerySupport = gt;
exports.getAppNames = _t;
exports.getAppStatus = jt;
exports.getMountedApps = Nt;
exports.mountRootParcel = Q;
exports.navigateToUrl = st;
exports.registerApplication = Dt;
exports.removeErrorHandler = f;
exports.setBootstrapMaxTime = Y;
exports.setMountMaxTime = Z;
exports.setUnloadMaxTime = nt;
exports.setUnmountMaxTime = tt;
exports.start = kt;
exports.triggerAppChange = Ct;
exports.unloadApplication = Rt;
exports.UPDATING = exports.UNMOUNTING = exports.SKIP_BECAUSE_BROKEN = exports.NOT_MOUNTED = exports.NOT_LOADED = exports.NOT_BOOTSTRAPPED = exports.MOUNTING = exports.MOUNTED = exports.LOAD_ERROR = exports.LOADING_SOURCE_CODE = exports.BOOTSTRAPPING = void 0;

/* single-spa@5.3.4 - ESM - prod */
var t = Object.freeze({
  __proto__: null,

  get start() {
    return kt;
  },

  get ensureJQuerySupport() {
    return gt;
  },

  get setBootstrapMaxTime() {
    return Y;
  },

  get setMountMaxTime() {
    return Z;
  },

  get setUnmountMaxTime() {
    return tt;
  },

  get setUnloadMaxTime() {
    return nt;
  },

  get registerApplication() {
    return Dt;
  },

  get getMountedApps() {
    return Nt;
  },

  get getAppStatus() {
    return jt;
  },

  get unloadApplication() {
    return Rt;
  },

  get checkActivityFunctions() {
    return Mt;
  },

  get getAppNames() {
    return _t;
  },

  get navigateToUrl() {
    return st;
  },

  get triggerAppChange() {
    return Ct;
  },

  get addErrorHandler() {
    return s;
  },

  get removeErrorHandler() {
    return f;
  },

  get mountRootParcel() {
    return Q;
  },

  get NOT_LOADED() {
    return h;
  },

  get LOADING_SOURCE_CODE() {
    return m;
  },

  get NOT_BOOTSTRAPPED() {
    return d;
  },

  get BOOTSTRAPPING() {
    return v;
  },

  get NOT_MOUNTED() {
    return w;
  },

  get MOUNTING() {
    return g;
  },

  get UPDATING() {
    return E;
  },

  get LOAD_ERROR() {
    return b;
  },

  get MOUNTED() {
    return y;
  },

  get UNMOUNTING() {
    return O;
  },

  get SKIP_BECAUSE_BROKEN() {
    return P;
  }

});

function n(t) {
  return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}

function r(t, n, r) {
  return n in t ? Object.defineProperty(t, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = r, t;
}

function e(t) {
  return function (t) {
    if (Array.isArray(t)) return o(t);
  }(t) || function (t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
  }(t) || function (t, n) {
    if (t) {
      if ("string" == typeof t) return o(t, void 0);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(t, void 0) : void 0;
    }
  }(t) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function o(t, n) {
  (null == n || n > t.length) && (n = t.length);

  for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];

  return e;
}

var i = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}).CustomEvent,
    u = function () {
  try {
    var t = new i("cat", {
      detail: {
        foo: "bar"
      }
    });
    return "cat" === t.type && "bar" === t.detail.foo;
  } catch (t) {}

  return !1;
}() ? i : "undefined" != typeof document && "function" == typeof document.createEvent ? function (t, n) {
  var r = document.createEvent("CustomEvent");
  return n ? r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : r.initCustomEvent(t, !1, !1, void 0), r;
} : function (t, n) {
  var r = document.createEventObject();
  return r.type = t, n ? (r.bubbles = Boolean(n.bubbles), r.cancelable = Boolean(n.cancelable), r.detail = n.detail) : (r.bubbles = !1, r.cancelable = !1, r.detail = void 0), r;
},
    a = [];

function c(t, n, r) {
  var e = p(t, n, r);
  a.length ? a.forEach(function (t) {
    return t(e);
  }) : setTimeout(function () {
    throw e;
  });
}

function s(t) {
  if ("function" != typeof t) throw Error(l(28, !1));
  a.push(t);
}

function f(t) {
  if ("function" != typeof t) throw Error(l(29, !1));
  var n = !1;
  return a = a.filter(function (r) {
    var e = r === t;
    return n = n || e, !e;
  }), n;
}

function l(t, n) {
  for (var r = arguments.length, e = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) e[o - 2] = arguments[o];

  return "single-spa minified message #".concat(t, ": ").concat(n ? n + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(e.length ? "&arg=".concat(e.join("&arg=")) : "");
}

function p(t, n, r) {
  var e,
      o = "".concat(I(n), " '").concat(U(n), "' died in status ").concat(n.status, ": ");

  if (t instanceof Error) {
    try {
      t.message = o + t.message;
    } catch (t) {}

    e = t;
  } else {
    console.warn(l(30, !1, n.status, U(n)));

    try {
      e = Error(o + JSON.stringify(t));
    } catch (n) {
      e = t;
    }
  }

  return e.appOrParcelName = U(n), n.status = r, e;
}

var h = "NOT_LOADED",
    m = "LOADING_SOURCE_CODE",
    d = "NOT_BOOTSTRAPPED",
    v = "BOOTSTRAPPING",
    w = "NOT_MOUNTED",
    g = "MOUNTING",
    y = "MOUNTED",
    E = "UPDATING",
    O = "UNMOUNTING",
    b = "LOAD_ERROR",
    P = "SKIP_BECAUSE_BROKEN";
exports.SKIP_BECAUSE_BROKEN = P;
exports.LOAD_ERROR = b;
exports.UNMOUNTING = O;
exports.UPDATING = E;
exports.MOUNTED = y;
exports.MOUNTING = g;
exports.NOT_MOUNTED = w;
exports.BOOTSTRAPPING = v;
exports.NOT_BOOTSTRAPPED = d;
exports.LOADING_SOURCE_CODE = m;
exports.NOT_LOADED = h;

function T(t) {
  return t.status === y;
}

function A(t) {
  return !T(t);
}

function S(t) {
  return t.status !== h && t.status !== m && t.status !== b;
}

function N(t) {
  return !S(t);
}

function _(t) {
  try {
    return t.activeWhen(window.location);
  } catch (n) {
    c(n, t, P);
  }
}

function j(t) {
  try {
    return !_(t);
  } catch (n) {
    c(n, t, P);
  }
}

function D(t) {
  return t !== P && (!t || t.status !== P);
}

function M(t) {
  return t.status !== b || new Date().getTime() - t.loadErrorTime >= 200;
}

function U(t) {
  return t.name;
}

function L(t) {
  return Boolean(t.unmountThisParcel);
}

function I(t) {
  return L(t) ? "parcel" : "application";
}

function R() {
  for (var t = arguments.length - 1; t > 0; t--) for (var n in arguments[t]) "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);

  return arguments[0];
}

function x(t, n) {
  for (var r = 0; r < t.length; r++) if (n(t[r])) return t[r];

  return null;
}

function B(t) {
  return t && ("function" == typeof t || (n = t, Array.isArray(n) && !x(n, function (t) {
    return "function" != typeof t;
  })));
  var n;
}

function G(t, n) {
  var r = t[n] || [];
  0 === (r = Array.isArray(r) ? r : [r]).length && (r = [function () {
    return Promise.resolve();
  }]);
  var e = I(t),
      o = U(t);
  return function (t) {
    return r.reduce(function (r, i, u) {
      return r.then(function () {
        var r = i(t);
        return C(r) ? r : Promise.reject(l(15, !1, e, o, n, u));
      });
    }, Promise.resolve());
  };
}

function C(t) {
  return t && "function" == typeof t.then && "function" == typeof t.catch;
}

function W(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== d ? t : (t.status = v, rt(t, "bootstrap").then(function () {
      return t.status = w, t;
    }).catch(function (r) {
      if (n) throw p(r, t, P);
      return c(r, t, P), t;
    }));
  });
}

function $(t, n) {
  return Promise.resolve().then(function () {
    if (t.status !== y) return t;
    t.status = O;
    var r = Object.keys(t.parcels).map(function (n) {
      return t.parcels[n].unmountThisParcel();
    });
    return Promise.all(r).then(e, function (r) {
      return e().then(function () {
        var e = Error(r.message);
        if (n) throw p(e, t, P);
        c(e, t, P);
      });
    }).then(function () {
      return t;
    });

    function e() {
      return rt(t, "unmount").then(function () {
        t.status = w;
      }).catch(function (r) {
        if (n) throw p(r, t, P);
        c(r, t, P);
      });
    }
  });
}

var k = !1,
    K = !1;

function F(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== w ? t : (k || (window.dispatchEvent(new u("single-spa:before-first-mount")), k = !0), rt(t, "mount").then(function () {
      return t.status = y, K || (window.dispatchEvent(new u("single-spa:first-mount")), K = !0), t;
    }).catch(function (r) {
      return t.status = y, $(t, !0).then(e, e);

      function e() {
        if (n) throw p(r, t, P);
        return c(r, t, P), t;
      }
    }));
  });
}

var J = 0,
    H = {
  parcels: {}
};

function Q() {
  return V.apply(H, arguments);
}

function V(t, r) {
  var e = this;
  if (!t || "object" !== n(t) && "function" != typeof t) throw Error(l(2, !1));
  if (t.name && "string" != typeof t.name) throw Error(l(3, !1, n(t.name)));
  if ("object" !== n(r)) throw Error(l(4, !1, name, n(r)));
  if (!r.domElement) throw Error(l(5, !1, name));
  var o,
      i = J++,
      u = "function" == typeof t,
      a = u ? t : function () {
    return Promise.resolve(t);
  },
      c = {
    id: i,
    parcels: {},
    status: u ? m : d,
    customProps: r,
    parentName: U(e),
    unmountThisParcel: function () {
      if (c.status !== y) throw Error(l(6, !1, name, c.status));
      return $(c, !0).then(function (t) {
        return c.parentName && delete e.parcels[c.id], t;
      }).then(function (t) {
        return f(t), t;
      }).catch(function (t) {
        throw c.status = P, h(t), t;
      });
    }
  };
  e.parcels[i] = c;
  var s = a();
  if (!s || "function" != typeof s.then) throw Error(l(7, !1));
  var f,
      h,
      v = (s = s.then(function (t) {
    if (!t) throw Error(l(8, !1));
    var n = t.name || "parcel-".concat(i);
    if (!B(t.bootstrap)) throw Error(l(9, !1, n));
    if (!B(t.mount)) throw Error(l(10, !1, n));
    if (!B(t.unmount)) throw Error(l(11, !1, n));
    if (t.update && !B(t.update)) throw Error(l(12, !1, n));
    var r = G(t, "bootstrap"),
        e = G(t, "mount"),
        u = G(t, "unmount");
    c.status = d, c.name = n, c.bootstrap = r, c.mount = e, c.unmount = u, c.timeouts = et(t.timeouts), t.update && (c.update = G(t, "update"), o.update = function (t) {
      return c.customProps = t, q(function (t) {
        return Promise.resolve().then(function () {
          if (t.status !== y) throw Error(l(32, !1, U(t)));
          return t.status = E, rt(t, "update").then(function () {
            return t.status = y, t;
          }).catch(function (n) {
            throw p(n, t, P);
          });
        });
      }(c));
    });
  })).then(function () {
    return W(c, !0);
  }),
      g = v.then(function () {
    return F(c, !0);
  }),
      O = new Promise(function (t, n) {
    f = t, h = n;
  });
  return o = {
    mount: function () {
      return q(Promise.resolve().then(function () {
        if (c.status !== w) throw Error(l(13, !1, name, c.status));
        return e.parcels[i] = c, F(c);
      }));
    },
    unmount: function () {
      return q(c.unmountThisParcel());
    },
    getStatus: function () {
      return c.status;
    },
    loadPromise: q(s),
    bootstrapPromise: q(v),
    mountPromise: q(g),
    unmountPromise: q(O)
  };
}

function q(t) {
  return t.then(function () {
    return null;
  });
}

function z(n) {
  var r = R({}, n.customProps, {
    name: U(n),
    mountParcel: V.bind(n),
    singleSpa: t
  });
  return L(n) && (r.unmountSelf = n.unmountThisParcel), r;
}

var X = {
  bootstrap: {
    millis: 4e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  mount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unmount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unload: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  update: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  }
};

function Y(t, n, r) {
  if ("number" != typeof t || t <= 0) throw Error(l(16, !1));
  X.bootstrap = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: r || 1e3
  };
}

function Z(t, n, r) {
  if ("number" != typeof t || t <= 0) throw Error(l(17, !1));
  X.mount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: r || 1e3
  };
}

function tt(t, n, r) {
  if ("number" != typeof t || t <= 0) throw Error(l(18, !1));
  X.unmount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: r || 1e3
  };
}

function nt(t, n, r) {
  if ("number" != typeof t || t <= 0) throw Error(l(19, !1));
  X.unload = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: r || 1e3
  };
}

function rt(t, n) {
  var r = t.timeouts[n],
      e = r.warningMillis,
      o = I(t);
  return new Promise(function (i, u) {
    var a = !1,
        c = !1;
    t[n](z(t)).then(function (t) {
      a = !0, i(t);
    }).catch(function (t) {
      a = !0, u(t);
    }), setTimeout(function () {
      return f(1);
    }, e), setTimeout(function () {
      return f(!0);
    }, r.millis);
    var s = l(31, !1, n, o, U(t), r.millis);

    function f(t) {
      if (!a) if (!0 === t) c = !0, r.dieOnTimeout ? u(Error(s)) : console.error(s);else if (!c) {
        var n = t,
            o = n * e;
        console.warn(s), o + e < r.millis && setTimeout(function () {
          return f(n + 1);
        }, e);
      }
    }
  });
}

function et(t) {
  var n = {};

  for (var r in X) n[r] = R({}, X[r], t && t[r] || {});

  return n;
}

function ot(t) {
  return Promise.resolve().then(function () {
    return t.loadPromise ? t.loadPromise : t.status !== h && t.status !== b ? t : (t.status = m, t.loadPromise = Promise.resolve().then(function () {
      var o = t.loadApp(z(t));
      if (!C(o)) throw e = !0, Error(l(33, !1, U(t)));
      return o.then(function (e) {
        var o;
        t.loadErrorTime = null, "object" !== n(r = e) && (o = 34), B(r.bootstrap) || (o = 35), B(r.mount) || (o = 36), B(r.unmount) || (o = 37);
        var i = I(r);

        if (o) {
          var u;

          try {
            u = JSON.stringify(r);
          } catch (t) {}

          return console.error(l(o, !1, i, U(t), u), r), c(void 0, t, P), t;
        }

        return r.devtools && r.devtools.overlays && (t.devtools.overlays = R({}, t.devtools.overlays, r.devtools.overlays)), t.status = d, t.bootstrap = G(r, "bootstrap"), t.mount = G(r, "mount"), t.unmount = G(r, "unmount"), t.unload = G(r, "unload"), t.timeouts = et(r.timeouts), delete t.loadPromise, t;
      });
    }).catch(function (n) {
      var r;
      return delete t.loadPromise, e ? r = P : (r = b, t.loadErrorTime = new Date().getTime()), c(n, t, r), t;
    }));
    var r, e;
  });
}

var it,
    ut = "undefined" != typeof window,
    at = {
  hashchange: [],
  popstate: []
},
    ct = ["hashchange", "popstate"];

function st(t) {
  var n;
  if ("string" == typeof t) n = t;else if (this && this.href) n = this.href;else {
    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(l(14, !1));
    n = t.currentTarget.href, t.preventDefault();
  }
  var r = vt(window.location.href),
      e = vt(n);
  0 === n.indexOf("#") ? window.location.hash = e.hash : r.host !== e.host && e.host ? window.location.href = n : e.pathname === r.pathname && e.search === r.search ? window.location.hash = e.hash : window.history.pushState(null, null, n);
}

function ft(t) {
  var n = this;

  if (t) {
    var r = t[0].type;
    ct.indexOf(r) >= 0 && at[r].forEach(function (r) {
      try {
        r.apply(n, t);
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    });
  }
}

function lt() {
  Wt([], arguments);
}

if (ut) {
  let mt = function (t) {
    return function () {
      var n = window.location.href,
          r = t.apply(this, arguments),
          e = window.location.href;
      return it && n === e || lt(dt(window.history.state)), r;
    };
  };

  let dt = function (t) {
    try {
      return new PopStateEvent("popstate", {
        state: t
      });
    } catch (r) {
      var n = document.createEvent("PopStateEvent");
      return n.initPopStateEvent("popstate", !1, !1, t), n;
    }
  };

  window.addEventListener("hashchange", lt), window.addEventListener("popstate", lt);
  var pt = window.addEventListener,
      ht = window.removeEventListener;
  window.addEventListener = function (t, n) {
    if (!("function" == typeof n && ct.indexOf(t) >= 0) || x(at[t], function (t) {
      return t === n;
    })) return pt.apply(this, arguments);
    at[t].push(n);
  }, window.removeEventListener = function (t, n) {
    if (!("function" == typeof n && ct.indexOf(t) >= 0)) return ht.apply(this, arguments);
    at[t] = at[t].filter(function (t) {
      return t !== n;
    });
  }, window.history.pushState = mt(window.history.pushState), window.history.replaceState = mt(window.history.replaceState), window.singleSpaNavigate = st;
}

function vt(t) {
  var n = document.createElement("a");
  return n.href = t, n;
}

var wt = !1;

function gt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;

  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !wt) {
    var n = t.fn.on,
        r = t.fn.off;
    t.fn.on = function (t, r) {
      return yt.call(this, n, window.addEventListener, t, r, arguments);
    }, t.fn.off = function (t, n) {
      return yt.call(this, r, window.removeEventListener, t, n, arguments);
    }, wt = !0;
  }
}

function yt(t, n, r, e, o) {
  return "string" != typeof r ? t.apply(this, o) : (r.split(/\s+/).forEach(function (t) {
    ct.indexOf(t) >= 0 && (n(t, e), r = r.replace(t, ""));
  }), "" === r.trim() ? this : t.apply(this, o));
}

var Et = {};

function Ot(t) {
  return Promise.resolve().then(function () {
    var n = Et[U(t)];
    return n ? t.status === h ? (bt(t, n), t) : "UNLOADING" === t.status ? n.promise.then(function () {
      return t;
    }) : t.status !== w ? t : (t.status = "UNLOADING", rt(t, "unload").then(function () {
      return bt(t, n), t;
    }).catch(function (r) {
      return function (t, n, r) {
        delete Et[U(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, c(r, t, P), n.reject(r);
      }(t, n, r), t;
    })) : t;
  });
}

function bt(t, n) {
  delete Et[U(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = h, n.resolve();
}

function Pt(t, n, r, e) {
  Et[U(t)] = {
    app: t,
    resolve: r,
    reject: e
  }, Object.defineProperty(Et[U(t)], "promise", {
    get: n
  });
}

function Tt(t) {
  return Et[t];
}

function At() {
  return Object.keys(Et).map(function (t) {
    return Et[t].app;
  }).filter(A);
}

var St = [];

function Nt() {
  return St.filter(T).map(U);
}

function _t() {
  return St.map(U);
}

function jt(t) {
  var n = x(St, function (n) {
    return U(n) === t;
  });
  return n ? n.status : null;
}

function Dt(t, r, e, o) {
  var i = function (t, r, e, o) {
    var i,
        u = {
      name: null,
      loadApp: null,
      activeWhen: null,
      customProps: null
    };
    return "object" === n(t) ? (function (t) {
      if (Array.isArray(t) || null === t) throw Error(l(39, !1));
      var r = ["name", "app", "activeWhen", "customProps"],
          e = Object.keys(t).reduce(function (t, n) {
        return r.includes(n) ? t : t.concat(n);
      }, []);
      if (0 !== e.length) throw Error(l(38, !1, r.join(", "), e.join(", ")));
      if ("string" != typeof t.name || 0 === t.name.length) throw Error(l(20, !1));
      if ("object" !== n(t.app) && "function" != typeof t.app) throw Error(l(20, !1));

      var o = function (t) {
        return "string" == typeof t || "function" == typeof t;
      };

      if (!(o(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(o))) throw Error(l(24, !1));
      if (t.customProps && ("object" !== n(t.customProps) || Array.isArray(t.customProps))) throw Error(l(22, !1));
    }(t), u.name = t.name, u.loadApp = t.app, u.activeWhen = t.activeWhen, u.customProps = t.customProps) : (function (t, r, e, o) {
      if ("string" != typeof t || 0 === t.length) throw Error(l(20, !1));
      if (!r) throw Error(l(23, !1));
      if ("function" != typeof e) throw Error(l(24, !1));
      if (o && ("object" !== n(o) || Array.isArray(o))) throw Error(l(22, !1));
    }(t, r, e, o), u.name = t, u.loadApp = r, u.activeWhen = e, u.customProps = o), u.loadApp = "function" != typeof (i = u.loadApp) ? function () {
      return Promise.resolve(i);
    } : i, u.customProps = function (t) {
      return t || {};
    }(u.customProps), u.activeWhen = function (t) {
      var n = Array.isArray(t) ? t : [t];
      return n = n.map(function (t) {
        return "function" == typeof t ? t : (n = function (t) {
          for (var n = 0, r = !1, e = "^", o = 0; o < t.length; o++) {
            var i = t[o];
            (!r && ":" === i || r && "/" === i) && u(o);
          }

          return u(t.length), new RegExp(e, "i");

          function u(o) {
            var i = t.slice(n, o).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
            e += r ? "[^/]+/?" : i, r = !r, n = o;
          }
        }(t), function (t) {
          var r = t.href.replace(t.origin, "");
          return n.test(r);
        });
        var n;
      }), function (t) {
        return n.some(function (n) {
          return n(t);
        });
      };
    }(u.activeWhen), u;
  }(t, r, e, o);

  if (-1 !== _t().indexOf(i.name)) throw Error(l(21, !1, i.name));
  St.push(R({
    loadErrorTime: null,
    status: h,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: []
      }
    }
  }, i)), ut && (gt(), Wt());
}

function Mt(t) {
  return St.filter(function (n) {
    return n.activeWhen(t);
  }).map(U);
}

function Ut() {
  return St.filter(D).filter(M).filter(N).filter(_);
}

function Lt() {
  return St.filter(D).filter(T).filter(j);
}

function It() {
  return St.filter(D).filter(A).filter(S).filter(_);
}

function Rt(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    waitForUnmount: !1
  };
  if ("string" != typeof t) throw Error(l(26, !1));
  var r = x(St, function (n) {
    return U(n) === t;
  });
  if (!r) throw Error(l(27, !1, t));
  var e,
      o = Tt(U(r));

  if (n && n.waitForUnmount) {
    if (o) return o.promise;
    var i = new Promise(function (t, n) {
      Pt(r, function () {
        return i;
      }, t, n);
    });
    return i;
  }

  return o ? (e = o.promise, xt(r, o.resolve, o.reject)) : e = new Promise(function (t, n) {
    Pt(r, function () {
      return e;
    }, t, n), xt(r, t, n);
  }), e;
}

function xt(t, n, r) {
  $(t).then(Ot).then(function () {
    n(), setTimeout(function () {
      Wt();
    });
  }).catch(r);
}

var Bt = !1,
    Gt = [];

function Ct() {
  return Wt();
}

function Wt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 ? arguments[1] : void 0;
  if (Bt) return new Promise(function (t, r) {
    Gt.push({
      resolve: t,
      reject: r,
      eventArguments: n
    });
  });
  var o = [];
  return Kt() ? (Bt = !0, c()) : a();

  function i(t) {
    return o.push.apply(o, e(t)), t;
  }

  function a() {
    return Promise.resolve().then(function () {
      var t = i(Ut()).map(ot);
      return Promise.all(t).then(f).then(function () {
        return [];
      }).catch(function (t) {
        throw f(), t;
      });
    });
  }

  function c() {
    return Promise.resolve().then(function () {
      window.dispatchEvent(new u("single-spa:before-routing-event", l()));
      var n = i(At()).map(Ot),
          r = i(Lt()).map($).map(function (t) {
        return t.then(Ot);
      }).concat(n),
          e = Promise.all(r),
          a = i(Ut()),
          c = a.map(function (t) {
        return ot(t).then(W).then(function (t) {
          return e.then(function () {
            return F(t);
          });
        });
      }),
          p = It().filter(function (t) {
        return a.indexOf(t) < 0;
      }).map(function (t) {
        return o.push(t), W(t).then(function () {
          return e;
        }).then(function () {
          return F(t);
        });
      });
      return e.catch(function (t) {
        throw f(), t;
      }).then(function () {
        return f(), Promise.all(c.concat(p)).catch(function (n) {
          throw t.forEach(function (t) {
            return t.reject(n);
          }), n;
        }).then(s);
      });
    });
  }

  function s() {
    var n = Nt();
    t.forEach(function (t) {
      return t.resolve(n);
    });

    try {
      var r = 0 === o.length ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new u(r, l())), window.dispatchEvent(new u("single-spa:routing-event", l()));
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }

    if (Bt = !1, Gt.length > 0) {
      var e = Gt;
      Gt = [], Wt(e);
    }

    return n;
  }

  function f() {
    t.forEach(function (t) {
      ft(t.eventArguments);
    }), ft(n);
  }

  function l() {
    var t,
        e = {},
        i = (r(t = {}, y, []), r(t, w, []), r(t, h, []), r(t, P, []), t);
    return o.forEach(function (t) {
      var n = U(t),
          r = jt(n);
      e[n] = r, (i[r] = i[r] || []).push(n);
    }), {
      detail: {
        newAppStatuses: e,
        appsByNewStatus: i,
        totalAppChanges: o.length,
        originalEvent: null == n ? void 0 : n[0]
      }
    };
  }
}

var $t = !1;

function kt(t) {
  var n;
  $t = !0, t && t.urlRerouteOnly && (n = t.urlRerouteOnly, it = n), ut && Wt();
}

function Kt() {
  return $t;
}

ut && setTimeout(function () {
  $t || console.warn(l(1, !1));
}, 5e3);
var Ft = {
  getRawAppData: function () {
    return [].concat(St);
  },
  reroute: Wt,
  NOT_LOADED: h,
  toLoadPromise: ot,
  toBootstrapPromise: W,
  unregisterApplication: function (t) {
    if (!St.find(function (n) {
      return U(n) === t;
    })) throw Error(l(25, !1, t));
    return Rt(t).then(function () {
      var n = St.findIndex(function (n) {
        return U(n) === t;
      });
      St.splice(n, 1);
    });
  }
};
ut && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ft);
},{}],"node_modules/qiankun/node_modules/lodash/_arrayPush.js":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

},{}],"node_modules/qiankun/node_modules/lodash/_freeGlobal.js":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

},{}],"node_modules/qiankun/node_modules/lodash/_root.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

},{"./_freeGlobal":"node_modules/qiankun/node_modules/lodash/_freeGlobal.js"}],"node_modules/qiankun/node_modules/lodash/_Symbol.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

},{"./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_getRawTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

},{"./_Symbol":"node_modules/qiankun/node_modules/lodash/_Symbol.js"}],"node_modules/qiankun/node_modules/lodash/_objectToString.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

},{}],"node_modules/qiankun/node_modules/lodash/_baseGetTag.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    getRawTag = require('./_getRawTag'),
    objectToString = require('./_objectToString');

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;

},{"./_Symbol":"node_modules/qiankun/node_modules/lodash/_Symbol.js","./_getRawTag":"node_modules/qiankun/node_modules/lodash/_getRawTag.js","./_objectToString":"node_modules/qiankun/node_modules/lodash/_objectToString.js"}],"node_modules/qiankun/node_modules/lodash/isObjectLike.js":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],"node_modules/qiankun/node_modules/lodash/_baseIsArguments.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

},{"./_baseGetTag":"node_modules/qiankun/node_modules/lodash/_baseGetTag.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/isArguments.js":[function(require,module,exports) {
var baseIsArguments = require('./_baseIsArguments'),
    isObjectLike = require('./isObjectLike');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

},{"./_baseIsArguments":"node_modules/qiankun/node_modules/lodash/_baseIsArguments.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/isArray.js":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

},{}],"node_modules/qiankun/node_modules/lodash/_isFlattenable.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray');

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

},{"./_Symbol":"node_modules/qiankun/node_modules/lodash/_Symbol.js","./isArguments":"node_modules/qiankun/node_modules/lodash/isArguments.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js"}],"node_modules/qiankun/node_modules/lodash/_baseFlatten.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    isFlattenable = require('./_isFlattenable');

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

},{"./_arrayPush":"node_modules/qiankun/node_modules/lodash/_arrayPush.js","./_isFlattenable":"node_modules/qiankun/node_modules/lodash/_isFlattenable.js"}],"node_modules/qiankun/node_modules/lodash/_copyArray.js":[function(require,module,exports) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

},{}],"node_modules/qiankun/node_modules/lodash/concat.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    baseFlatten = require('./_baseFlatten'),
    copyArray = require('./_copyArray'),
    isArray = require('./isArray');

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;

},{"./_arrayPush":"node_modules/qiankun/node_modules/lodash/_arrayPush.js","./_baseFlatten":"node_modules/qiankun/node_modules/lodash/_baseFlatten.js","./_copyArray":"node_modules/qiankun/node_modules/lodash/_copyArray.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js"}],"node_modules/qiankun/node_modules/lodash/_listCacheClear.js":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

},{}],"node_modules/qiankun/node_modules/lodash/eq.js":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;

},{}],"node_modules/qiankun/node_modules/lodash/_assocIndexOf.js":[function(require,module,exports) {
var eq = require('./eq');

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

},{"./eq":"node_modules/qiankun/node_modules/lodash/eq.js"}],"node_modules/qiankun/node_modules/lodash/_listCacheDelete.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

},{"./_assocIndexOf":"node_modules/qiankun/node_modules/lodash/_assocIndexOf.js"}],"node_modules/qiankun/node_modules/lodash/_listCacheGet.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

},{"./_assocIndexOf":"node_modules/qiankun/node_modules/lodash/_assocIndexOf.js"}],"node_modules/qiankun/node_modules/lodash/_listCacheHas.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

},{"./_assocIndexOf":"node_modules/qiankun/node_modules/lodash/_assocIndexOf.js"}],"node_modules/qiankun/node_modules/lodash/_listCacheSet.js":[function(require,module,exports) {
var assocIndexOf = require('./_assocIndexOf');

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

},{"./_assocIndexOf":"node_modules/qiankun/node_modules/lodash/_assocIndexOf.js"}],"node_modules/qiankun/node_modules/lodash/_ListCache.js":[function(require,module,exports) {
var listCacheClear = require('./_listCacheClear'),
    listCacheDelete = require('./_listCacheDelete'),
    listCacheGet = require('./_listCacheGet'),
    listCacheHas = require('./_listCacheHas'),
    listCacheSet = require('./_listCacheSet');

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

},{"./_listCacheClear":"node_modules/qiankun/node_modules/lodash/_listCacheClear.js","./_listCacheDelete":"node_modules/qiankun/node_modules/lodash/_listCacheDelete.js","./_listCacheGet":"node_modules/qiankun/node_modules/lodash/_listCacheGet.js","./_listCacheHas":"node_modules/qiankun/node_modules/lodash/_listCacheHas.js","./_listCacheSet":"node_modules/qiankun/node_modules/lodash/_listCacheSet.js"}],"node_modules/qiankun/node_modules/lodash/_stackClear.js":[function(require,module,exports) {
var ListCache = require('./_ListCache');

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;

},{"./_ListCache":"node_modules/qiankun/node_modules/lodash/_ListCache.js"}],"node_modules/qiankun/node_modules/lodash/_stackDelete.js":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

},{}],"node_modules/qiankun/node_modules/lodash/_stackGet.js":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

},{}],"node_modules/qiankun/node_modules/lodash/_stackHas.js":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

},{}],"node_modules/qiankun/node_modules/lodash/isObject.js":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],"node_modules/qiankun/node_modules/lodash/isFunction.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObject = require('./isObject');

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

},{"./_baseGetTag":"node_modules/qiankun/node_modules/lodash/_baseGetTag.js","./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js"}],"node_modules/qiankun/node_modules/lodash/_coreJsData.js":[function(require,module,exports) {
var root = require('./_root');

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

},{"./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_isMasked.js":[function(require,module,exports) {
var coreJsData = require('./_coreJsData');

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;

},{"./_coreJsData":"node_modules/qiankun/node_modules/lodash/_coreJsData.js"}],"node_modules/qiankun/node_modules/lodash/_toSource.js":[function(require,module,exports) {
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

},{}],"node_modules/qiankun/node_modules/lodash/_baseIsNative.js":[function(require,module,exports) {
var isFunction = require('./isFunction'),
    isMasked = require('./_isMasked'),
    isObject = require('./isObject'),
    toSource = require('./_toSource');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

},{"./isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","./_isMasked":"node_modules/qiankun/node_modules/lodash/_isMasked.js","./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js","./_toSource":"node_modules/qiankun/node_modules/lodash/_toSource.js"}],"node_modules/qiankun/node_modules/lodash/_getValue.js":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

},{}],"node_modules/qiankun/node_modules/lodash/_getNative.js":[function(require,module,exports) {
var baseIsNative = require('./_baseIsNative'),
    getValue = require('./_getValue');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

},{"./_baseIsNative":"node_modules/qiankun/node_modules/lodash/_baseIsNative.js","./_getValue":"node_modules/qiankun/node_modules/lodash/_getValue.js"}],"node_modules/qiankun/node_modules/lodash/_Map.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js","./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_nativeCreate.js":[function(require,module,exports) {
var getNative = require('./_getNative');

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js"}],"node_modules/qiankun/node_modules/lodash/_hashClear.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

},{"./_nativeCreate":"node_modules/qiankun/node_modules/lodash/_nativeCreate.js"}],"node_modules/qiankun/node_modules/lodash/_hashDelete.js":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

},{}],"node_modules/qiankun/node_modules/lodash/_hashGet.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

},{"./_nativeCreate":"node_modules/qiankun/node_modules/lodash/_nativeCreate.js"}],"node_modules/qiankun/node_modules/lodash/_hashHas.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

},{"./_nativeCreate":"node_modules/qiankun/node_modules/lodash/_nativeCreate.js"}],"node_modules/qiankun/node_modules/lodash/_hashSet.js":[function(require,module,exports) {
var nativeCreate = require('./_nativeCreate');

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

},{"./_nativeCreate":"node_modules/qiankun/node_modules/lodash/_nativeCreate.js"}],"node_modules/qiankun/node_modules/lodash/_Hash.js":[function(require,module,exports) {
var hashClear = require('./_hashClear'),
    hashDelete = require('./_hashDelete'),
    hashGet = require('./_hashGet'),
    hashHas = require('./_hashHas'),
    hashSet = require('./_hashSet');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

},{"./_hashClear":"node_modules/qiankun/node_modules/lodash/_hashClear.js","./_hashDelete":"node_modules/qiankun/node_modules/lodash/_hashDelete.js","./_hashGet":"node_modules/qiankun/node_modules/lodash/_hashGet.js","./_hashHas":"node_modules/qiankun/node_modules/lodash/_hashHas.js","./_hashSet":"node_modules/qiankun/node_modules/lodash/_hashSet.js"}],"node_modules/qiankun/node_modules/lodash/_mapCacheClear.js":[function(require,module,exports) {
var Hash = require('./_Hash'),
    ListCache = require('./_ListCache'),
    Map = require('./_Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;

},{"./_Hash":"node_modules/qiankun/node_modules/lodash/_Hash.js","./_ListCache":"node_modules/qiankun/node_modules/lodash/_ListCache.js","./_Map":"node_modules/qiankun/node_modules/lodash/_Map.js"}],"node_modules/qiankun/node_modules/lodash/_isKeyable.js":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;

},{}],"node_modules/qiankun/node_modules/lodash/_getMapData.js":[function(require,module,exports) {
var isKeyable = require('./_isKeyable');

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;

},{"./_isKeyable":"node_modules/qiankun/node_modules/lodash/_isKeyable.js"}],"node_modules/qiankun/node_modules/lodash/_mapCacheDelete.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

},{"./_getMapData":"node_modules/qiankun/node_modules/lodash/_getMapData.js"}],"node_modules/qiankun/node_modules/lodash/_mapCacheGet.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

},{"./_getMapData":"node_modules/qiankun/node_modules/lodash/_getMapData.js"}],"node_modules/qiankun/node_modules/lodash/_mapCacheHas.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

},{"./_getMapData":"node_modules/qiankun/node_modules/lodash/_getMapData.js"}],"node_modules/qiankun/node_modules/lodash/_mapCacheSet.js":[function(require,module,exports) {
var getMapData = require('./_getMapData');

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

},{"./_getMapData":"node_modules/qiankun/node_modules/lodash/_getMapData.js"}],"node_modules/qiankun/node_modules/lodash/_MapCache.js":[function(require,module,exports) {
var mapCacheClear = require('./_mapCacheClear'),
    mapCacheDelete = require('./_mapCacheDelete'),
    mapCacheGet = require('./_mapCacheGet'),
    mapCacheHas = require('./_mapCacheHas'),
    mapCacheSet = require('./_mapCacheSet');

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

},{"./_mapCacheClear":"node_modules/qiankun/node_modules/lodash/_mapCacheClear.js","./_mapCacheDelete":"node_modules/qiankun/node_modules/lodash/_mapCacheDelete.js","./_mapCacheGet":"node_modules/qiankun/node_modules/lodash/_mapCacheGet.js","./_mapCacheHas":"node_modules/qiankun/node_modules/lodash/_mapCacheHas.js","./_mapCacheSet":"node_modules/qiankun/node_modules/lodash/_mapCacheSet.js"}],"node_modules/qiankun/node_modules/lodash/_stackSet.js":[function(require,module,exports) {
var ListCache = require('./_ListCache'),
    Map = require('./_Map'),
    MapCache = require('./_MapCache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

},{"./_ListCache":"node_modules/qiankun/node_modules/lodash/_ListCache.js","./_Map":"node_modules/qiankun/node_modules/lodash/_Map.js","./_MapCache":"node_modules/qiankun/node_modules/lodash/_MapCache.js"}],"node_modules/qiankun/node_modules/lodash/_Stack.js":[function(require,module,exports) {
var ListCache = require('./_ListCache'),
    stackClear = require('./_stackClear'),
    stackDelete = require('./_stackDelete'),
    stackGet = require('./_stackGet'),
    stackHas = require('./_stackHas'),
    stackSet = require('./_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

},{"./_ListCache":"node_modules/qiankun/node_modules/lodash/_ListCache.js","./_stackClear":"node_modules/qiankun/node_modules/lodash/_stackClear.js","./_stackDelete":"node_modules/qiankun/node_modules/lodash/_stackDelete.js","./_stackGet":"node_modules/qiankun/node_modules/lodash/_stackGet.js","./_stackHas":"node_modules/qiankun/node_modules/lodash/_stackHas.js","./_stackSet":"node_modules/qiankun/node_modules/lodash/_stackSet.js"}],"node_modules/qiankun/node_modules/lodash/_defineProperty.js":[function(require,module,exports) {
var getNative = require('./_getNative');

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js"}],"node_modules/qiankun/node_modules/lodash/_baseAssignValue.js":[function(require,module,exports) {
var defineProperty = require('./_defineProperty');

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

},{"./_defineProperty":"node_modules/qiankun/node_modules/lodash/_defineProperty.js"}],"node_modules/qiankun/node_modules/lodash/_assignMergeValue.js":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

},{"./_baseAssignValue":"node_modules/qiankun/node_modules/lodash/_baseAssignValue.js","./eq":"node_modules/qiankun/node_modules/lodash/eq.js"}],"node_modules/qiankun/node_modules/lodash/_createBaseFor.js":[function(require,module,exports) {
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{}],"node_modules/qiankun/node_modules/lodash/_baseFor.js":[function(require,module,exports) {
var createBaseFor = require('./_createBaseFor');

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./_createBaseFor":"node_modules/qiankun/node_modules/lodash/_createBaseFor.js"}],"node_modules/qiankun/node_modules/lodash/_cloneBuffer.js":[function(require,module,exports) {

var root = require('./_root');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

},{"./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_Uint8Array.js":[function(require,module,exports) {
var root = require('./_root');

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

},{"./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_cloneArrayBuffer.js":[function(require,module,exports) {
var Uint8Array = require('./_Uint8Array');

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

},{"./_Uint8Array":"node_modules/qiankun/node_modules/lodash/_Uint8Array.js"}],"node_modules/qiankun/node_modules/lodash/_cloneTypedArray.js":[function(require,module,exports) {
var cloneArrayBuffer = require('./_cloneArrayBuffer');

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

},{"./_cloneArrayBuffer":"node_modules/qiankun/node_modules/lodash/_cloneArrayBuffer.js"}],"node_modules/qiankun/node_modules/lodash/_baseCreate.js":[function(require,module,exports) {
var isObject = require('./isObject');

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;

},{"./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js"}],"node_modules/qiankun/node_modules/lodash/_overArg.js":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

},{}],"node_modules/qiankun/node_modules/lodash/_getPrototype.js":[function(require,module,exports) {
var overArg = require('./_overArg');

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

},{"./_overArg":"node_modules/qiankun/node_modules/lodash/_overArg.js"}],"node_modules/qiankun/node_modules/lodash/_isPrototype.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;

},{}],"node_modules/qiankun/node_modules/lodash/_initCloneObject.js":[function(require,module,exports) {
var baseCreate = require('./_baseCreate'),
    getPrototype = require('./_getPrototype'),
    isPrototype = require('./_isPrototype');

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;

},{"./_baseCreate":"node_modules/qiankun/node_modules/lodash/_baseCreate.js","./_getPrototype":"node_modules/qiankun/node_modules/lodash/_getPrototype.js","./_isPrototype":"node_modules/qiankun/node_modules/lodash/_isPrototype.js"}],"node_modules/qiankun/node_modules/lodash/isLength.js":[function(require,module,exports) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],"node_modules/qiankun/node_modules/lodash/isArrayLike.js":[function(require,module,exports) {
var isFunction = require('./isFunction'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

},{"./isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","./isLength":"node_modules/qiankun/node_modules/lodash/isLength.js"}],"node_modules/qiankun/node_modules/lodash/isArrayLikeObject.js":[function(require,module,exports) {
var isArrayLike = require('./isArrayLike'),
    isObjectLike = require('./isObjectLike');

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

},{"./isArrayLike":"node_modules/qiankun/node_modules/lodash/isArrayLike.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/stubFalse.js":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

},{}],"node_modules/qiankun/node_modules/lodash/isBuffer.js":[function(require,module,exports) {

var root = require('./_root'),
    stubFalse = require('./stubFalse');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

},{"./_root":"node_modules/qiankun/node_modules/lodash/_root.js","./stubFalse":"node_modules/qiankun/node_modules/lodash/stubFalse.js"}],"node_modules/qiankun/node_modules/lodash/isPlainObject.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    getPrototype = require('./_getPrototype'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

},{"./_baseGetTag":"node_modules/qiankun/node_modules/lodash/_baseGetTag.js","./_getPrototype":"node_modules/qiankun/node_modules/lodash/_getPrototype.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/_baseIsTypedArray.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

},{"./_baseGetTag":"node_modules/qiankun/node_modules/lodash/_baseGetTag.js","./isLength":"node_modules/qiankun/node_modules/lodash/isLength.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/_baseUnary.js":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;

},{}],"node_modules/qiankun/node_modules/lodash/_nodeUtil.js":[function(require,module,exports) {
var freeGlobal = require('./_freeGlobal');

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

},{"./_freeGlobal":"node_modules/qiankun/node_modules/lodash/_freeGlobal.js"}],"node_modules/qiankun/node_modules/lodash/isTypedArray.js":[function(require,module,exports) {
var baseIsTypedArray = require('./_baseIsTypedArray'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

},{"./_baseIsTypedArray":"node_modules/qiankun/node_modules/lodash/_baseIsTypedArray.js","./_baseUnary":"node_modules/qiankun/node_modules/lodash/_baseUnary.js","./_nodeUtil":"node_modules/qiankun/node_modules/lodash/_nodeUtil.js"}],"node_modules/qiankun/node_modules/lodash/_safeGet.js":[function(require,module,exports) {
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

},{}],"node_modules/qiankun/node_modules/lodash/_assignValue.js":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'),
    eq = require('./eq');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

},{"./_baseAssignValue":"node_modules/qiankun/node_modules/lodash/_baseAssignValue.js","./eq":"node_modules/qiankun/node_modules/lodash/eq.js"}],"node_modules/qiankun/node_modules/lodash/_copyObject.js":[function(require,module,exports) {
var assignValue = require('./_assignValue'),
    baseAssignValue = require('./_baseAssignValue');

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

},{"./_assignValue":"node_modules/qiankun/node_modules/lodash/_assignValue.js","./_baseAssignValue":"node_modules/qiankun/node_modules/lodash/_baseAssignValue.js"}],"node_modules/qiankun/node_modules/lodash/_baseTimes.js":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

},{}],"node_modules/qiankun/node_modules/lodash/_isIndex.js":[function(require,module,exports) {
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;

},{}],"node_modules/qiankun/node_modules/lodash/_arrayLikeKeys.js":[function(require,module,exports) {
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isIndex = require('./_isIndex'),
    isTypedArray = require('./isTypedArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

},{"./_baseTimes":"node_modules/qiankun/node_modules/lodash/_baseTimes.js","./isArguments":"node_modules/qiankun/node_modules/lodash/isArguments.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js","./isBuffer":"node_modules/qiankun/node_modules/lodash/isBuffer.js","./_isIndex":"node_modules/qiankun/node_modules/lodash/_isIndex.js","./isTypedArray":"node_modules/qiankun/node_modules/lodash/isTypedArray.js"}],"node_modules/qiankun/node_modules/lodash/_nativeKeysIn.js":[function(require,module,exports) {
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

},{}],"node_modules/qiankun/node_modules/lodash/_baseKeysIn.js":[function(require,module,exports) {
var isObject = require('./isObject'),
    isPrototype = require('./_isPrototype'),
    nativeKeysIn = require('./_nativeKeysIn');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

},{"./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js","./_isPrototype":"node_modules/qiankun/node_modules/lodash/_isPrototype.js","./_nativeKeysIn":"node_modules/qiankun/node_modules/lodash/_nativeKeysIn.js"}],"node_modules/qiankun/node_modules/lodash/keysIn.js":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeysIn = require('./_baseKeysIn'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

},{"./_arrayLikeKeys":"node_modules/qiankun/node_modules/lodash/_arrayLikeKeys.js","./_baseKeysIn":"node_modules/qiankun/node_modules/lodash/_baseKeysIn.js","./isArrayLike":"node_modules/qiankun/node_modules/lodash/isArrayLike.js"}],"node_modules/qiankun/node_modules/lodash/toPlainObject.js":[function(require,module,exports) {
var copyObject = require('./_copyObject'),
    keysIn = require('./keysIn');

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

},{"./_copyObject":"node_modules/qiankun/node_modules/lodash/_copyObject.js","./keysIn":"node_modules/qiankun/node_modules/lodash/keysIn.js"}],"node_modules/qiankun/node_modules/lodash/_baseMergeDeep.js":[function(require,module,exports) {
var assignMergeValue = require('./_assignMergeValue'),
    cloneBuffer = require('./_cloneBuffer'),
    cloneTypedArray = require('./_cloneTypedArray'),
    copyArray = require('./_copyArray'),
    initCloneObject = require('./_initCloneObject'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    isBuffer = require('./isBuffer'),
    isFunction = require('./isFunction'),
    isObject = require('./isObject'),
    isPlainObject = require('./isPlainObject'),
    isTypedArray = require('./isTypedArray'),
    safeGet = require('./_safeGet'),
    toPlainObject = require('./toPlainObject');

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

},{"./_assignMergeValue":"node_modules/qiankun/node_modules/lodash/_assignMergeValue.js","./_cloneBuffer":"node_modules/qiankun/node_modules/lodash/_cloneBuffer.js","./_cloneTypedArray":"node_modules/qiankun/node_modules/lodash/_cloneTypedArray.js","./_copyArray":"node_modules/qiankun/node_modules/lodash/_copyArray.js","./_initCloneObject":"node_modules/qiankun/node_modules/lodash/_initCloneObject.js","./isArguments":"node_modules/qiankun/node_modules/lodash/isArguments.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js","./isArrayLikeObject":"node_modules/qiankun/node_modules/lodash/isArrayLikeObject.js","./isBuffer":"node_modules/qiankun/node_modules/lodash/isBuffer.js","./isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js","./isPlainObject":"node_modules/qiankun/node_modules/lodash/isPlainObject.js","./isTypedArray":"node_modules/qiankun/node_modules/lodash/isTypedArray.js","./_safeGet":"node_modules/qiankun/node_modules/lodash/_safeGet.js","./toPlainObject":"node_modules/qiankun/node_modules/lodash/toPlainObject.js"}],"node_modules/qiankun/node_modules/lodash/_baseMerge.js":[function(require,module,exports) {
var Stack = require('./_Stack'),
    assignMergeValue = require('./_assignMergeValue'),
    baseFor = require('./_baseFor'),
    baseMergeDeep = require('./_baseMergeDeep'),
    isObject = require('./isObject'),
    keysIn = require('./keysIn'),
    safeGet = require('./_safeGet');

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

},{"./_Stack":"node_modules/qiankun/node_modules/lodash/_Stack.js","./_assignMergeValue":"node_modules/qiankun/node_modules/lodash/_assignMergeValue.js","./_baseFor":"node_modules/qiankun/node_modules/lodash/_baseFor.js","./_baseMergeDeep":"node_modules/qiankun/node_modules/lodash/_baseMergeDeep.js","./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js","./keysIn":"node_modules/qiankun/node_modules/lodash/keysIn.js","./_safeGet":"node_modules/qiankun/node_modules/lodash/_safeGet.js"}],"node_modules/qiankun/node_modules/lodash/identity.js":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],"node_modules/qiankun/node_modules/lodash/_apply.js":[function(require,module,exports) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

},{}],"node_modules/qiankun/node_modules/lodash/_overRest.js":[function(require,module,exports) {
var apply = require('./_apply');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

},{"./_apply":"node_modules/qiankun/node_modules/lodash/_apply.js"}],"node_modules/qiankun/node_modules/lodash/constant.js":[function(require,module,exports) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;

},{}],"node_modules/qiankun/node_modules/lodash/_baseSetToString.js":[function(require,module,exports) {
var constant = require('./constant'),
    defineProperty = require('./_defineProperty'),
    identity = require('./identity');

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

},{"./constant":"node_modules/qiankun/node_modules/lodash/constant.js","./_defineProperty":"node_modules/qiankun/node_modules/lodash/_defineProperty.js","./identity":"node_modules/qiankun/node_modules/lodash/identity.js"}],"node_modules/qiankun/node_modules/lodash/_shortOut.js":[function(require,module,exports) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

},{}],"node_modules/qiankun/node_modules/lodash/_setToString.js":[function(require,module,exports) {
var baseSetToString = require('./_baseSetToString'),
    shortOut = require('./_shortOut');

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

},{"./_baseSetToString":"node_modules/qiankun/node_modules/lodash/_baseSetToString.js","./_shortOut":"node_modules/qiankun/node_modules/lodash/_shortOut.js"}],"node_modules/qiankun/node_modules/lodash/_baseRest.js":[function(require,module,exports) {
var identity = require('./identity'),
    overRest = require('./_overRest'),
    setToString = require('./_setToString');

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

},{"./identity":"node_modules/qiankun/node_modules/lodash/identity.js","./_overRest":"node_modules/qiankun/node_modules/lodash/_overRest.js","./_setToString":"node_modules/qiankun/node_modules/lodash/_setToString.js"}],"node_modules/qiankun/node_modules/lodash/_isIterateeCall.js":[function(require,module,exports) {
var eq = require('./eq'),
    isArrayLike = require('./isArrayLike'),
    isIndex = require('./_isIndex'),
    isObject = require('./isObject');

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

},{"./eq":"node_modules/qiankun/node_modules/lodash/eq.js","./isArrayLike":"node_modules/qiankun/node_modules/lodash/isArrayLike.js","./_isIndex":"node_modules/qiankun/node_modules/lodash/_isIndex.js","./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js"}],"node_modules/qiankun/node_modules/lodash/_createAssigner.js":[function(require,module,exports) {
var baseRest = require('./_baseRest'),
    isIterateeCall = require('./_isIterateeCall');

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"./_baseRest":"node_modules/qiankun/node_modules/lodash/_baseRest.js","./_isIterateeCall":"node_modules/qiankun/node_modules/lodash/_isIterateeCall.js"}],"node_modules/qiankun/node_modules/lodash/mergeWith.js":[function(require,module,exports) {
var baseMerge = require('./_baseMerge'),
    createAssigner = require('./_createAssigner');

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;

},{"./_baseMerge":"node_modules/qiankun/node_modules/lodash/_baseMerge.js","./_createAssigner":"node_modules/qiankun/node_modules/lodash/_createAssigner.js"}],"node_modules/qiankun/node_modules/@babel/runtime/helpers/esm/typeof.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _typeof;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    exports.default = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    exports.default = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
},{}],"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit":"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray":"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest":"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"node_modules/qiankun/node_modules/import-html-entry/esm/utils.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalProp = getGlobalProp;
exports.noteGlobalProps = noteGlobalProps;
exports.getInlineCode = getInlineCode;
exports.defaultGetPublicPath = defaultGetPublicPath;
exports.requestIdleCallback = void 0;

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2019-02-25
 * fork from https://github.com/systemjs/systemjs/blob/master/src/extras/global.js
 */
var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

function shouldSkipProperty(global, p) {
  if (!global.hasOwnProperty(p) || !isNaN(p) && p < global.length) return true;

  if (isIE11) {
    // https://github.com/kuitos/import-html-entry/pull/32，最小化 try 范围
    try {
      return global[p] && global[p].parent === window;
    } catch (err) {
      return true;
    }
  } else {
    return false;
  }
} // safari unpredictably lists some new globals first or second in object order


var firstGlobalProp, secondGlobalProp, lastGlobalProp;

function getGlobalProp(global) {
  var cnt = 0;
  var lastProp;
  var hasIframe = false;

  for (var p in global) {
    if (shouldSkipProperty(global, p)) continue; // 遍历 iframe，检查 window 上的属性值是否是 iframe，是则跳过后面的 first 和 second 判断

    for (var i = 0; i < window.frames.length && !hasIframe; i++) {
      var frame = window.frames[i];

      if (frame === global[p]) {
        hasIframe = true;
        break;
      }
    }

    if (!hasIframe && (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)) return p;
    cnt++;
    lastProp = p;
  }

  if (lastProp !== lastGlobalProp) return lastProp;
}

function noteGlobalProps(global) {
  // alternatively Object.keys(global).pop()
  // but this may be faster (pending benchmarks)
  firstGlobalProp = secondGlobalProp = undefined;

  for (var p in global) {
    if (shouldSkipProperty(global, p)) continue;
    if (!firstGlobalProp) firstGlobalProp = p;else if (!secondGlobalProp) secondGlobalProp = p;
    lastGlobalProp = p;
  }

  return lastGlobalProp;
}

function getInlineCode(match) {
  var start = match.indexOf('>') + 1;
  var end = match.lastIndexOf('<');
  return match.substring(start, end);
}

function defaultGetPublicPath(url) {
  try {
    // URL 构造函数不支持使用 // 前缀的 url
    var _URL = new URL(url.startsWith('//') ? "".concat(location.protocol).concat(url) : url, location.href),
        origin = _URL.origin,
        pathname = _URL.pathname;

    var paths = pathname.split('/'); // 移除最后一个元素

    paths.pop();
    return "".concat(origin).concat(paths.join('/'), "/");
  } catch (e) {
    console.warn(e);
    return '';
  }
} // RIC and shim for browsers setTimeout() without it


var requestIdleCallback = window.requestIdleCallback || function requestIdleCallback(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;
},{}],"node_modules/qiankun/node_modules/import-html-entry/esm/process-tpl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = processTpl;
exports.genIgnoreAssetReplaceSymbol = exports.inlineScriptReplaceSymbol = exports.genScriptReplaceSymbol = exports.genLinkReplaceSymbol = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-09-03 15:04
 */
var ALL_SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var SCRIPT_TAG_REGEX = /<(script)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+((?!type=('|')text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i;
var SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
var SCRIPT_ASYNC_REGEX = /.*\sasync\s*.*/;
var LINK_TAG_REGEX = /<(link)\s+.*?>/gi;
var LINK_IGNORE_REGEX = /.*ignore\s*.*/;
var LINK_PRELOAD_OR_PREFETCH_REGEX = /\srel=('|")?(preload|prefetch)\1/;
var LINK_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
var STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
var STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
var STYLE_IGNORE_REGEX = /<style(\s+|\s+.+\s+)ignore(\s*|\s+.*)>/i;
var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
var SCRIPT_IGNORE_REGEX = /<script(\s+|\s+.+\s+)ignore(\s*|\s+.*)>/i;

function hasProtocol(url) {
  return url.startsWith('//') || url.startsWith('http://') || url.startsWith('https://');
}

function getEntirePath(path, baseURI) {
  return new URL(path, baseURI).toString();
}

var genLinkReplaceSymbol = function genLinkReplaceSymbol(linkHref) {
  var preloadOrPrefetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(preloadOrPrefetch ? 'prefetch/preload' : '', " link ").concat(linkHref, " replaced by import-html-entry -->");
};

exports.genLinkReplaceSymbol = genLinkReplaceSymbol;

var genScriptReplaceSymbol = function genScriptReplaceSymbol(scriptSrc) {
  var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return "<!-- ".concat(async ? 'async' : '', " script ").concat(scriptSrc, " replaced by import-html-entry -->");
};

exports.genScriptReplaceSymbol = genScriptReplaceSymbol;
var inlineScriptReplaceSymbol = "<!-- inline scripts replaced by import-html-entry -->";
exports.inlineScriptReplaceSymbol = inlineScriptReplaceSymbol;

var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol(url) {
  return "<!-- ignore asset ".concat(url || 'file', " replaced by import-html-entry -->");
};
/**
 * parse the script link from the template
 * 1. collect stylesheets
 * 2. use global eval to evaluate the inline scripts
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Difference_between_Function_constructor_and_function_declaration
 *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
 * @param tpl
 * @param baseURI
 * @stripStyles whether to strip the css links
 * @returns {{template: void | string | *, scripts: *[], entry: *}}
 */


exports.genIgnoreAssetReplaceSymbol = genIgnoreAssetReplaceSymbol;

function processTpl(tpl, baseURI) {
  var scripts = [];
  var styles = [];
  var entry = null;
  var template = tpl
  /*
  remove html comment first
  */
  .replace(HTML_COMMENT_REGEX, '').replace(LINK_TAG_REGEX, function (match) {
    /*
    change the css link
    */
    var styleType = !!match.match(STYLE_TYPE_REGEX);

    if (styleType) {
      var styleHref = match.match(STYLE_HREF_REGEX);
      var styleIgnore = match.match(LINK_IGNORE_REGEX);

      if (styleHref) {
        var href = styleHref && styleHref[2];
        var newHref = href;

        if (href && !hasProtocol(href)) {
          newHref = getEntirePath(href, baseURI);
        }

        if (styleIgnore) {
          return genIgnoreAssetReplaceSymbol(newHref);
        }

        styles.push(newHref);
        return genLinkReplaceSymbol(newHref);
      }
    }

    var preloadOrPrefetchType = match.match(LINK_PRELOAD_OR_PREFETCH_REGEX) && match.match(LINK_HREF_REGEX);

    if (preloadOrPrefetchType) {
      var _match$match = match.match(LINK_HREF_REGEX),
          _match$match2 = (0, _slicedToArray2.default)(_match$match, 3),
          linkHref = _match$match2[2];

      return genLinkReplaceSymbol(linkHref, true);
    }

    return match;
  }).replace(STYLE_TAG_REGEX, function (match) {
    if (STYLE_IGNORE_REGEX.test(match)) {
      return genIgnoreAssetReplaceSymbol('style file');
    }

    return match;
  }).replace(ALL_SCRIPT_REGEX, function (match) {
    var scriptIgnore = match.match(SCRIPT_IGNORE_REGEX); // in order to keep the exec order of all javascripts
    // if it is a external script

    if (SCRIPT_TAG_REGEX.test(match) && match.match(SCRIPT_SRC_REGEX)) {
      /*
      collect scripts and replace the ref
      */
      var matchedScriptEntry = match.match(SCRIPT_ENTRY_REGEX);
      var matchedScriptSrcMatch = match.match(SCRIPT_SRC_REGEX);
      var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];

      if (entry && matchedScriptEntry) {
        throw new SyntaxError('You should not set multiply entry script!');
      } else {
        // append the domain while the script not have an protocol prefix
        if (matchedScriptSrc && !hasProtocol(matchedScriptSrc)) {
          matchedScriptSrc = getEntirePath(matchedScriptSrc, baseURI);
        }

        entry = entry || matchedScriptEntry && matchedScriptSrc;
      }

      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol(matchedScriptSrc || 'js file');
      }

      if (matchedScriptSrc) {
        var asyncScript = !!match.match(SCRIPT_ASYNC_REGEX);
        scripts.push(asyncScript ? {
          async: true,
          src: matchedScriptSrc
        } : matchedScriptSrc);
        return genScriptReplaceSymbol(matchedScriptSrc, asyncScript);
      }

      return match;
    } else {
      if (scriptIgnore) {
        return genIgnoreAssetReplaceSymbol('js file');
      } // if it is an inline script


      var code = (0, _utils.getInlineCode)(match); // remove script blocks when all of these lines are comments.

      var isPureCommentBlock = code.split(/[\r\n]+/).every(function (line) {
        return !line.trim() || line.trim().startsWith('//');
      });

      if (!isPureCommentBlock) {
        scripts.push(match);
      }

      return inlineScriptReplaceSymbol;
    }
  });
  scripts = scripts.filter(function (script) {
    // filter empty script
    return !!script;
  });
  return {
    template: template,
    scripts: scripts,
    styles: styles,
    // set the last script as entry if have not set
    entry: entry || scripts[scripts.length - 1]
  };
}
},{"@babel/runtime/helpers/slicedToArray":"node_modules/qiankun/node_modules/import-html-entry/node_modules/@babel/runtime/helpers/slicedToArray.js","./utils":"node_modules/qiankun/node_modules/import-html-entry/esm/utils.js"}],"node_modules/qiankun/node_modules/import-html-entry/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExternalStyleSheets = _getExternalStyleSheets;
exports.getExternalScripts = _getExternalScripts;
exports.execScripts = _execScripts;
exports.default = importHTML;
exports.importEntry = importEntry;

var _processTpl2 = _interopRequireWildcard(require("./process-tpl"));

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-08-15 11:37
 */
var styleCache = {};
var scriptCache = {};
var embedHTMLCache = {};

if (!window.fetch) {
  throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');
}

var defaultFetch = window.fetch.bind(window);

function defaultGetTemplate(tpl) {
  return tpl;
}
/**
 * convert external css link to inline style for performance optimization
 * @param template
 * @param styles
 * @param opts
 * @return embedHTML
 */


function getEmbedHTML(template, styles) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _opts$fetch = opts.fetch,
      fetch = _opts$fetch === void 0 ? defaultFetch : _opts$fetch;
  var embedHTML = template;
  return _getExternalStyleSheets(styles, fetch).then(function (styleSheets) {
    embedHTML = styles.reduce(function (html, styleSrc, i) {
      html = html.replace((0, _processTpl2.genLinkReplaceSymbol)(styleSrc), "<style>/* ".concat(styleSrc, " */").concat(styleSheets[i], "</style>"));
      return html;
    }, embedHTML);
    return embedHTML;
  });
}

function getExecutableScript(scriptText, proxy, strictGlobal) {
  window.proxy = proxy; // TODO 通过 strictGlobal 方式切换切换 with 闭包，待 with 方式坑趟平后再合并

  return strictGlobal ? ";(function(window, self){with(window){;".concat(scriptText, "\n}}).bind(window.proxy)(window.proxy, window.proxy);") : ";(function(window, self){;".concat(scriptText, "\n}).bind(window.proxy)(window.proxy, window.proxy);");
} // for prefetch


function _getExternalStyleSheets(styles) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
  return Promise.all(styles.map(function (styleLink) {
    if (styleLink.startsWith('<')) {
      // if it is inline style
      return (0, _utils.getInlineCode)(styleLink);
    } else {
      // external styles
      return styleCache[styleLink] || (styleCache[styleLink] = fetch(styleLink).then(function (response) {
        return response.text();
      }));
    }
  }));
} // for prefetch


function _getExternalScripts(scripts) {
  var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;

  var fetchScript = function fetchScript(scriptUrl) {
    return scriptCache[scriptUrl] || (scriptCache[scriptUrl] = fetch(scriptUrl).then(function (response) {
      return response.text();
    }));
  };

  return Promise.all(scripts.map(function (script) {
    if (typeof script === 'string') {
      if (script.startsWith('<')) {
        // if it is inline script
        return (0, _utils.getInlineCode)(script);
      } else {
        // external script
        return fetchScript(script);
      }
    } else {
      // use idle time to load async script
      var src = script.src,
          async = script.async;

      if (async) {
        return {
          async: true,
          content: new Promise(function (resolve, reject) {
            return (0, _utils.requestIdleCallback)(function () {
              return fetchScript(src).then(resolve, reject);
            });
          })
        };
      }

      return fetchScript(src);
    }
  }));
}

var supportsUserTiming = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';

function _execScripts(entry, scripts) {
  var proxy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _opts$fetch2 = opts.fetch,
      fetch = _opts$fetch2 === void 0 ? defaultFetch : _opts$fetch2,
      _opts$strictGlobal = opts.strictGlobal,
      strictGlobal = _opts$strictGlobal === void 0 ? false : _opts$strictGlobal;
  return _getExternalScripts(scripts, fetch).then(function (scriptsText) {
    var geval = eval;

    function exec(scriptSrc, inlineScript, resolve) {
      var markName = "Evaluating script ".concat(scriptSrc);
      var measureName = "Evaluating Time Consuming: ".concat(scriptSrc);

      if ("development" === 'development' && supportsUserTiming) {
        performance.mark(markName);
      }

      if (scriptSrc === entry) {
        (0, _utils.noteGlobalProps)(strictGlobal ? proxy : window);

        try {
          // bind window.proxy to change `this` reference in script
          geval(getExecutableScript(inlineScript, proxy, strictGlobal));
        } catch (e) {
          console.error("error occurs while executing the entry ".concat(scriptSrc));
          throw e;
        }

        var exports = proxy[(0, _utils.getGlobalProp)(strictGlobal ? proxy : window)] || {};
        resolve(exports);
      } else {
        if (typeof inlineScript === 'string') {
          try {
            // bind window.proxy to change `this` reference in script
            geval(getExecutableScript(inlineScript, proxy, strictGlobal));
          } catch (e) {
            console.error("error occurs while executing ".concat(scriptSrc));
            throw e;
          }
        } else {
          // external script marked with async
          inlineScript.async && (inlineScript === null || inlineScript === void 0 ? void 0 : inlineScript.content.then(function (downloadedScriptText) {
            return geval(getExecutableScript(downloadedScriptText, proxy));
          })["catch"](function (e) {
            console.error("error occurs while executing async script ".concat(scriptSrc === null || scriptSrc === void 0 ? void 0 : scriptSrc.src));
            throw e;
          }));
        }
      }

      if ("development" === 'development' && supportsUserTiming) {
        performance.measure(measureName, markName);
        performance.clearMarks(markName);
        performance.clearMeasures(measureName);
      }
    }

    function schedule(i, resolvePromise) {
      if (i < scripts.length) {
        var scriptSrc = scripts[i];
        var inlineScript = scriptsText[i];
        exec(scriptSrc, inlineScript, resolvePromise); // resolve the promise while the last script executed and entry not provided

        if (!entry && i === scripts.length - 1) {
          resolvePromise();
        } else {
          schedule(i + 1, resolvePromise);
        }
      }
    }

    return new Promise(function (resolve) {
      return schedule(0, resolve);
    });
  });
}

function importHTML(url) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetch = defaultFetch;
  var getPublicPath = _utils.defaultGetPublicPath;
  var getTemplate = defaultGetTemplate; // compatible with the legacy importHTML api

  if (typeof opts === 'function') {
    fetch = opts;
  } else {
    fetch = opts.fetch || defaultFetch;
    getPublicPath = opts.getPublicPath || opts.getDomain || _utils.defaultGetPublicPath;
    getTemplate = opts.getTemplate || defaultGetTemplate;
  }

  return embedHTMLCache[url] || (embedHTMLCache[url] = fetch(url).then(function (response) {
    return response.text();
  }).then(function (html) {
    var assetPublicPath = getPublicPath(url);

    var _processTpl = (0, _processTpl2.default)(getTemplate(html), assetPublicPath),
        template = _processTpl.template,
        scripts = _processTpl.scripts,
        entry = _processTpl.entry,
        styles = _processTpl.styles;

    return getEmbedHTML(template, styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        assetPublicPath: assetPublicPath,
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts, fetch);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles, fetch);
        },
        execScripts: function execScripts(proxy, strictGlobal) {
          if (!scripts.length) {
            return Promise.resolve();
          }

          return _execScripts(entry, scripts, proxy, {
            fetch: fetch,
            strictGlobal: strictGlobal
          });
        }
      };
    });
  }));
}

;

function importEntry(entry) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$fetch3 = opts.fetch,
      fetch = _opts$fetch3 === void 0 ? defaultFetch : _opts$fetch3,
      _opts$getTemplate = opts.getTemplate,
      getTemplate = _opts$getTemplate === void 0 ? defaultGetTemplate : _opts$getTemplate;
  var getPublicPath = opts.getPublicPath || opts.getDomain || _utils.defaultGetPublicPath;

  if (!entry) {
    throw new SyntaxError('entry should not be empty!');
  } // html entry


  if (typeof entry === 'string') {
    return importHTML(entry, {
      fetch: fetch,
      getPublicPath: getPublicPath,
      getTemplate: getTemplate
    });
  } // config entry


  if (Array.isArray(entry.scripts) || Array.isArray(entry.styles)) {
    var _entry$scripts = entry.scripts,
        scripts = _entry$scripts === void 0 ? [] : _entry$scripts,
        _entry$styles = entry.styles,
        styles = _entry$styles === void 0 ? [] : _entry$styles,
        _entry$html = entry.html,
        html = _entry$html === void 0 ? '' : _entry$html;
    return getEmbedHTML(getTemplate(html), styles, {
      fetch: fetch
    }).then(function (embedHTML) {
      return {
        template: embedHTML,
        assetPublicPath: getPublicPath('/'),
        getExternalScripts: function getExternalScripts() {
          return _getExternalScripts(scripts, fetch);
        },
        getExternalStyleSheets: function getExternalStyleSheets() {
          return _getExternalStyleSheets(styles, fetch);
        },
        execScripts: function execScripts(proxy, strictGlobal) {
          if (!scripts.length) {
            return Promise.resolve();
          }

          return _execScripts(scripts[scripts.length - 1], scripts, proxy, {
            fetch: fetch,
            strictGlobal: strictGlobal
          });
        }
      };
    });
  } else {
    throw new SyntaxError('entry scripts or styles should be array!');
  }
}
},{"./process-tpl":"node_modules/qiankun/node_modules/import-html-entry/esm/process-tpl.js","./utils":"node_modules/qiankun/node_modules/import-html-entry/esm/utils.js"}],"node_modules/qiankun/es/addons/runtimePublicPath.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAddOn;

var _tslib = require("tslib");

var rawPublicPath = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ || '/';

function getAddOn(global, publicPath) {
  if (publicPath === void 0) {
    publicPath = '/';
  }

  var hasMountedOnce = false;
  return {
    beforeLoad: function beforeLoad() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (_a) {
          // eslint-disable-next-line no-param-reassign
          global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = publicPath;
          return [2
          /*return*/
          ];
        });
      });
    },
    beforeMount: function beforeMount() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (_a) {
          if (hasMountedOnce) {
            // eslint-disable-next-line no-param-reassign
            global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = publicPath;
          }

          return [2
          /*return*/
          ];
        });
      });
    },
    beforeUnmount: function beforeUnmount() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (_a) {
          if (rawPublicPath === undefined) {
            // eslint-disable-next-line no-param-reassign
            delete global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
          } else {
            // eslint-disable-next-line no-param-reassign
            global.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = rawPublicPath;
          }

          hasMountedOnce = true;
          return [2
          /*return*/
          ];
        });
      });
    }
  };
}
},{"tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js"}],"node_modules/qiankun/es/addons/index.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAddOns;

var _concat2 = _interopRequireDefault(require("lodash/concat"));

var _mergeWith2 = _interopRequireDefault(require("lodash/mergeWith"));

var _runtimePublicPath = _interopRequireDefault(require("./runtimePublicPath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAddOns(global, publicPath) {
  return (0, _mergeWith2.default)({}, (0, _runtimePublicPath.default)(global, publicPath), function (v1, v2) {
    return (0, _concat2.default)(v1 !== null && v1 !== void 0 ? v1 : [], v2 !== null && v2 !== void 0 ? v2 : []);
  });
}
},{"lodash/concat":"node_modules/qiankun/node_modules/lodash/concat.js","lodash/mergeWith":"node_modules/qiankun/node_modules/lodash/mergeWith.js","./runtimePublicPath":"node_modules/qiankun/es/addons/runtimePublicPath.js"}],"node_modules/qiankun/node_modules/lodash/_arrayEach.js":[function(require,module,exports) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],"node_modules/qiankun/node_modules/lodash/_nativeKeys.js":[function(require,module,exports) {
var overArg = require('./_overArg');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

},{"./_overArg":"node_modules/qiankun/node_modules/lodash/_overArg.js"}],"node_modules/qiankun/node_modules/lodash/_baseKeys.js":[function(require,module,exports) {
var isPrototype = require('./_isPrototype'),
    nativeKeys = require('./_nativeKeys');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

},{"./_isPrototype":"node_modules/qiankun/node_modules/lodash/_isPrototype.js","./_nativeKeys":"node_modules/qiankun/node_modules/lodash/_nativeKeys.js"}],"node_modules/qiankun/node_modules/lodash/keys.js":[function(require,module,exports) {
var arrayLikeKeys = require('./_arrayLikeKeys'),
    baseKeys = require('./_baseKeys'),
    isArrayLike = require('./isArrayLike');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

},{"./_arrayLikeKeys":"node_modules/qiankun/node_modules/lodash/_arrayLikeKeys.js","./_baseKeys":"node_modules/qiankun/node_modules/lodash/_baseKeys.js","./isArrayLike":"node_modules/qiankun/node_modules/lodash/isArrayLike.js"}],"node_modules/qiankun/node_modules/lodash/_baseAssign.js":[function(require,module,exports) {
var copyObject = require('./_copyObject'),
    keys = require('./keys');

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

},{"./_copyObject":"node_modules/qiankun/node_modules/lodash/_copyObject.js","./keys":"node_modules/qiankun/node_modules/lodash/keys.js"}],"node_modules/qiankun/node_modules/lodash/_baseAssignIn.js":[function(require,module,exports) {
var copyObject = require('./_copyObject'),
    keysIn = require('./keysIn');

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

},{"./_copyObject":"node_modules/qiankun/node_modules/lodash/_copyObject.js","./keysIn":"node_modules/qiankun/node_modules/lodash/keysIn.js"}],"node_modules/qiankun/node_modules/lodash/_arrayFilter.js":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],"node_modules/qiankun/node_modules/lodash/stubArray.js":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

},{}],"node_modules/qiankun/node_modules/lodash/_getSymbols.js":[function(require,module,exports) {
var arrayFilter = require('./_arrayFilter'),
    stubArray = require('./stubArray');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

},{"./_arrayFilter":"node_modules/qiankun/node_modules/lodash/_arrayFilter.js","./stubArray":"node_modules/qiankun/node_modules/lodash/stubArray.js"}],"node_modules/qiankun/node_modules/lodash/_copySymbols.js":[function(require,module,exports) {
var copyObject = require('./_copyObject'),
    getSymbols = require('./_getSymbols');

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

},{"./_copyObject":"node_modules/qiankun/node_modules/lodash/_copyObject.js","./_getSymbols":"node_modules/qiankun/node_modules/lodash/_getSymbols.js"}],"node_modules/qiankun/node_modules/lodash/_getSymbolsIn.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    getPrototype = require('./_getPrototype'),
    getSymbols = require('./_getSymbols'),
    stubArray = require('./stubArray');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;

},{"./_arrayPush":"node_modules/qiankun/node_modules/lodash/_arrayPush.js","./_getPrototype":"node_modules/qiankun/node_modules/lodash/_getPrototype.js","./_getSymbols":"node_modules/qiankun/node_modules/lodash/_getSymbols.js","./stubArray":"node_modules/qiankun/node_modules/lodash/stubArray.js"}],"node_modules/qiankun/node_modules/lodash/_copySymbolsIn.js":[function(require,module,exports) {
var copyObject = require('./_copyObject'),
    getSymbolsIn = require('./_getSymbolsIn');

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

},{"./_copyObject":"node_modules/qiankun/node_modules/lodash/_copyObject.js","./_getSymbolsIn":"node_modules/qiankun/node_modules/lodash/_getSymbolsIn.js"}],"node_modules/qiankun/node_modules/lodash/_baseGetAllKeys.js":[function(require,module,exports) {
var arrayPush = require('./_arrayPush'),
    isArray = require('./isArray');

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

},{"./_arrayPush":"node_modules/qiankun/node_modules/lodash/_arrayPush.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js"}],"node_modules/qiankun/node_modules/lodash/_getAllKeys.js":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbols = require('./_getSymbols'),
    keys = require('./keys');

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

},{"./_baseGetAllKeys":"node_modules/qiankun/node_modules/lodash/_baseGetAllKeys.js","./_getSymbols":"node_modules/qiankun/node_modules/lodash/_getSymbols.js","./keys":"node_modules/qiankun/node_modules/lodash/keys.js"}],"node_modules/qiankun/node_modules/lodash/_getAllKeysIn.js":[function(require,module,exports) {
var baseGetAllKeys = require('./_baseGetAllKeys'),
    getSymbolsIn = require('./_getSymbolsIn'),
    keysIn = require('./keysIn');

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

},{"./_baseGetAllKeys":"node_modules/qiankun/node_modules/lodash/_baseGetAllKeys.js","./_getSymbolsIn":"node_modules/qiankun/node_modules/lodash/_getSymbolsIn.js","./keysIn":"node_modules/qiankun/node_modules/lodash/keysIn.js"}],"node_modules/qiankun/node_modules/lodash/_DataView.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js","./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_Promise.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js","./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_Set.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js","./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_WeakMap.js":[function(require,module,exports) {
var getNative = require('./_getNative'),
    root = require('./_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

},{"./_getNative":"node_modules/qiankun/node_modules/lodash/_getNative.js","./_root":"node_modules/qiankun/node_modules/lodash/_root.js"}],"node_modules/qiankun/node_modules/lodash/_getTag.js":[function(require,module,exports) {
var DataView = require('./_DataView'),
    Map = require('./_Map'),
    Promise = require('./_Promise'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap'),
    baseGetTag = require('./_baseGetTag'),
    toSource = require('./_toSource');

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

},{"./_DataView":"node_modules/qiankun/node_modules/lodash/_DataView.js","./_Map":"node_modules/qiankun/node_modules/lodash/_Map.js","./_Promise":"node_modules/qiankun/node_modules/lodash/_Promise.js","./_Set":"node_modules/qiankun/node_modules/lodash/_Set.js","./_WeakMap":"node_modules/qiankun/node_modules/lodash/_WeakMap.js","./_baseGetTag":"node_modules/qiankun/node_modules/lodash/_baseGetTag.js","./_toSource":"node_modules/qiankun/node_modules/lodash/_toSource.js"}],"node_modules/qiankun/node_modules/lodash/_initCloneArray.js":[function(require,module,exports) {
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

},{}],"node_modules/qiankun/node_modules/lodash/_cloneDataView.js":[function(require,module,exports) {
var cloneArrayBuffer = require('./_cloneArrayBuffer');

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

},{"./_cloneArrayBuffer":"node_modules/qiankun/node_modules/lodash/_cloneArrayBuffer.js"}],"node_modules/qiankun/node_modules/lodash/_cloneRegExp.js":[function(require,module,exports) {
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

},{}],"node_modules/qiankun/node_modules/lodash/_cloneSymbol.js":[function(require,module,exports) {
var Symbol = require('./_Symbol');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

},{"./_Symbol":"node_modules/qiankun/node_modules/lodash/_Symbol.js"}],"node_modules/qiankun/node_modules/lodash/_initCloneByTag.js":[function(require,module,exports) {
var cloneArrayBuffer = require('./_cloneArrayBuffer'),
    cloneDataView = require('./_cloneDataView'),
    cloneRegExp = require('./_cloneRegExp'),
    cloneSymbol = require('./_cloneSymbol'),
    cloneTypedArray = require('./_cloneTypedArray');

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

},{"./_cloneArrayBuffer":"node_modules/qiankun/node_modules/lodash/_cloneArrayBuffer.js","./_cloneDataView":"node_modules/qiankun/node_modules/lodash/_cloneDataView.js","./_cloneRegExp":"node_modules/qiankun/node_modules/lodash/_cloneRegExp.js","./_cloneSymbol":"node_modules/qiankun/node_modules/lodash/_cloneSymbol.js","./_cloneTypedArray":"node_modules/qiankun/node_modules/lodash/_cloneTypedArray.js"}],"node_modules/qiankun/node_modules/lodash/_baseIsMap.js":[function(require,module,exports) {
var getTag = require('./_getTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

},{"./_getTag":"node_modules/qiankun/node_modules/lodash/_getTag.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/isMap.js":[function(require,module,exports) {
var baseIsMap = require('./_baseIsMap'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;

},{"./_baseIsMap":"node_modules/qiankun/node_modules/lodash/_baseIsMap.js","./_baseUnary":"node_modules/qiankun/node_modules/lodash/_baseUnary.js","./_nodeUtil":"node_modules/qiankun/node_modules/lodash/_nodeUtil.js"}],"node_modules/qiankun/node_modules/lodash/_baseIsSet.js":[function(require,module,exports) {
var getTag = require('./_getTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

},{"./_getTag":"node_modules/qiankun/node_modules/lodash/_getTag.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/isSet.js":[function(require,module,exports) {
var baseIsSet = require('./_baseIsSet'),
    baseUnary = require('./_baseUnary'),
    nodeUtil = require('./_nodeUtil');

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;

},{"./_baseIsSet":"node_modules/qiankun/node_modules/lodash/_baseIsSet.js","./_baseUnary":"node_modules/qiankun/node_modules/lodash/_baseUnary.js","./_nodeUtil":"node_modules/qiankun/node_modules/lodash/_nodeUtil.js"}],"node_modules/qiankun/node_modules/lodash/_baseClone.js":[function(require,module,exports) {
var Stack = require('./_Stack'),
    arrayEach = require('./_arrayEach'),
    assignValue = require('./_assignValue'),
    baseAssign = require('./_baseAssign'),
    baseAssignIn = require('./_baseAssignIn'),
    cloneBuffer = require('./_cloneBuffer'),
    copyArray = require('./_copyArray'),
    copySymbols = require('./_copySymbols'),
    copySymbolsIn = require('./_copySymbolsIn'),
    getAllKeys = require('./_getAllKeys'),
    getAllKeysIn = require('./_getAllKeysIn'),
    getTag = require('./_getTag'),
    initCloneArray = require('./_initCloneArray'),
    initCloneByTag = require('./_initCloneByTag'),
    initCloneObject = require('./_initCloneObject'),
    isArray = require('./isArray'),
    isBuffer = require('./isBuffer'),
    isMap = require('./isMap'),
    isObject = require('./isObject'),
    isSet = require('./isSet'),
    keys = require('./keys');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

},{"./_Stack":"node_modules/qiankun/node_modules/lodash/_Stack.js","./_arrayEach":"node_modules/qiankun/node_modules/lodash/_arrayEach.js","./_assignValue":"node_modules/qiankun/node_modules/lodash/_assignValue.js","./_baseAssign":"node_modules/qiankun/node_modules/lodash/_baseAssign.js","./_baseAssignIn":"node_modules/qiankun/node_modules/lodash/_baseAssignIn.js","./_cloneBuffer":"node_modules/qiankun/node_modules/lodash/_cloneBuffer.js","./_copyArray":"node_modules/qiankun/node_modules/lodash/_copyArray.js","./_copySymbols":"node_modules/qiankun/node_modules/lodash/_copySymbols.js","./_copySymbolsIn":"node_modules/qiankun/node_modules/lodash/_copySymbolsIn.js","./_getAllKeys":"node_modules/qiankun/node_modules/lodash/_getAllKeys.js","./_getAllKeysIn":"node_modules/qiankun/node_modules/lodash/_getAllKeysIn.js","./_getTag":"node_modules/qiankun/node_modules/lodash/_getTag.js","./_initCloneArray":"node_modules/qiankun/node_modules/lodash/_initCloneArray.js","./_initCloneByTag":"node_modules/qiankun/node_modules/lodash/_initCloneByTag.js","./_initCloneObject":"node_modules/qiankun/node_modules/lodash/_initCloneObject.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js","./isBuffer":"node_modules/qiankun/node_modules/lodash/isBuffer.js","./isMap":"node_modules/qiankun/node_modules/lodash/isMap.js","./isObject":"node_modules/qiankun/node_modules/lodash/isObject.js","./isSet":"node_modules/qiankun/node_modules/lodash/isSet.js","./keys":"node_modules/qiankun/node_modules/lodash/keys.js"}],"node_modules/qiankun/node_modules/lodash/cloneDeep.js":[function(require,module,exports) {
var baseClone = require('./_baseClone');

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

},{"./_baseClone":"node_modules/qiankun/node_modules/lodash/_baseClone.js"}],"node_modules/qiankun/es/globalState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGlobalState = initGlobalState;
exports.getMicroAppStateActions = getMicroAppStateActions;

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gloabalState = {};
var deps = {}; // 触发全局监听

function emitGloabl(state, prevState) {
  Object.keys(deps).forEach(function (id) {
    if (deps[id] instanceof Function) {
      deps[id]((0, _cloneDeep2.default)(state), (0, _cloneDeep2.default)(prevState));
    }
  });
}

function initGlobalState(state) {
  if (state === void 0) {
    state = {};
  }

  if (state === gloabalState) {
    console.warn('[qiankun] state has not changed！');
  } else {
    var prevGloabalState = (0, _cloneDeep2.default)(gloabalState);
    gloabalState = (0, _cloneDeep2.default)(state);
    emitGloabl(gloabalState, prevGloabalState);
  }

  return getMicroAppStateActions("gloabal-" + +new Date(), true);
}

function getMicroAppStateActions(id, isMaster) {
  return {
    /**
     * onStateChange 全局依赖监听
     *
     * 收集 setState 时所需要触发的依赖
     *
     * 限制条件：每个子应用只有一个激活状态的全局监听，新监听覆盖旧监听，若只是监听部分属性，请使用 onStateChange
     *
     * 这么设计是为了减少全局监听滥用导致的内存爆炸
     *
     * 依赖数据结构为：
     * {
     *   {id}: callback
     * }
     *
     * @param callback
     * @param fireImmediately
     */
    onGlobalStateChange: function onGlobalStateChange(callback, fireImmediately) {
      if (!(callback instanceof Function)) {
        console.error('[qiankun] callback must be function!');
        return;
      }

      if (deps[id]) {
        console.warn("[qiankun] '" + id + "' gloabal listener already exists before this, new listener will overwrite it.");
      }

      deps[id] = callback;
      var cloneState = (0, _cloneDeep2.default)(gloabalState);

      if (fireImmediately) {
        callback(cloneState, cloneState);
      }
    },

    /**
     * setGlobalState 更新 store 数据
     *
     * 1. 对输入 state 的第一层属性做校验，只有初始化时声明过的第一层（bucket）属性才会被更改
     * 2. 修改 store 并触发全局监听
     *
     * @param state
     */
    setGlobalState: function setGlobalState(state) {
      if (state === void 0) {
        state = {};
      }

      if (state === gloabalState) {
        console.warn('[qiankun] state has not changed！');
        return false;
      }

      var changeKeys = [];
      var prevGloabalState = (0, _cloneDeep2.default)(gloabalState);
      gloabalState = (0, _cloneDeep2.default)(Object.keys(state).reduce(function (_gloabalState, changeKey) {
        var _a;

        if (isMaster || changeKey in _gloabalState) {
          changeKeys.push(changeKey);
          return Object.assign(_gloabalState, (_a = {}, _a[changeKey] = state[changeKey], _a));
        }

        console.warn("[qiankun] '" + changeKey + "' not declared when init state\uFF01");
        return _gloabalState;
      }, gloabalState));

      if (changeKeys.length === 0) {
        console.warn('[qiankun] state has not changed！');
        return false;
      }

      emitGloabl(gloabalState, prevGloabalState);
      return true;
    },
    // 注销该应用下的依赖
    offGlobalStateChange: function offGlobalStateChange() {
      delete deps[id];
      return true;
    }
  };
}
},{"lodash/cloneDeep":"node_modules/qiankun/node_modules/lodash/cloneDeep.js"}],"node_modules/qiankun/node_modules/lodash/_arrayReduce.js":[function(require,module,exports) {
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

},{}],"node_modules/qiankun/node_modules/lodash/_basePropertyOf.js":[function(require,module,exports) {
/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;

},{}],"node_modules/qiankun/node_modules/lodash/_deburrLetter.js":[function(require,module,exports) {
var basePropertyOf = require('./_basePropertyOf');

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;

},{"./_basePropertyOf":"node_modules/qiankun/node_modules/lodash/_basePropertyOf.js"}],"node_modules/qiankun/node_modules/lodash/_arrayMap.js":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],"node_modules/qiankun/node_modules/lodash/isSymbol.js":[function(require,module,exports) {
var baseGetTag = require('./_baseGetTag'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;

},{"./_baseGetTag":"node_modules/qiankun/node_modules/lodash/_baseGetTag.js","./isObjectLike":"node_modules/qiankun/node_modules/lodash/isObjectLike.js"}],"node_modules/qiankun/node_modules/lodash/_baseToString.js":[function(require,module,exports) {
var Symbol = require('./_Symbol'),
    arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;

},{"./_Symbol":"node_modules/qiankun/node_modules/lodash/_Symbol.js","./_arrayMap":"node_modules/qiankun/node_modules/lodash/_arrayMap.js","./isArray":"node_modules/qiankun/node_modules/lodash/isArray.js","./isSymbol":"node_modules/qiankun/node_modules/lodash/isSymbol.js"}],"node_modules/qiankun/node_modules/lodash/toString.js":[function(require,module,exports) {
var baseToString = require('./_baseToString');

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

},{"./_baseToString":"node_modules/qiankun/node_modules/lodash/_baseToString.js"}],"node_modules/qiankun/node_modules/lodash/deburr.js":[function(require,module,exports) {
var deburrLetter = require('./_deburrLetter'),
    toString = require('./toString');

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;

},{"./_deburrLetter":"node_modules/qiankun/node_modules/lodash/_deburrLetter.js","./toString":"node_modules/qiankun/node_modules/lodash/toString.js"}],"node_modules/qiankun/node_modules/lodash/_asciiWords.js":[function(require,module,exports) {
/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;

},{}],"node_modules/qiankun/node_modules/lodash/_hasUnicodeWord.js":[function(require,module,exports) {
/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;

},{}],"node_modules/qiankun/node_modules/lodash/_unicodeWords.js":[function(require,module,exports) {
/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;

},{}],"node_modules/qiankun/node_modules/lodash/words.js":[function(require,module,exports) {
var asciiWords = require('./_asciiWords'),
    hasUnicodeWord = require('./_hasUnicodeWord'),
    toString = require('./toString'),
    unicodeWords = require('./_unicodeWords');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;

},{"./_asciiWords":"node_modules/qiankun/node_modules/lodash/_asciiWords.js","./_hasUnicodeWord":"node_modules/qiankun/node_modules/lodash/_hasUnicodeWord.js","./toString":"node_modules/qiankun/node_modules/lodash/toString.js","./_unicodeWords":"node_modules/qiankun/node_modules/lodash/_unicodeWords.js"}],"node_modules/qiankun/node_modules/lodash/_createCompounder.js":[function(require,module,exports) {
var arrayReduce = require('./_arrayReduce'),
    deburr = require('./deburr'),
    words = require('./words');

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;

},{"./_arrayReduce":"node_modules/qiankun/node_modules/lodash/_arrayReduce.js","./deburr":"node_modules/qiankun/node_modules/lodash/deburr.js","./words":"node_modules/qiankun/node_modules/lodash/words.js"}],"node_modules/qiankun/node_modules/lodash/snakeCase.js":[function(require,module,exports) {
var createCompounder = require('./_createCompounder');

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;

},{"./_createCompounder":"node_modules/qiankun/node_modules/lodash/_createCompounder.js"}],"node_modules/qiankun/es/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = sleep;
exports.isConstructable = isConstructable;
exports.getDefaultTplWrapper = getDefaultTplWrapper;
exports.getWrapperId = getWrapperId;
exports.validateExportLifecycle = validateExportLifecycle;
exports.Deferred = void 0;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _snakeCase2 = _interopRequireDefault(require("lodash/snakeCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function isConstructable(fn) {
  var constructableFunctionRegex = /^function\b\s[A-Z].*/;
  var classRegex = /^class\b/; // 有 prototype 并且 prototype 上有定义一系列非 constructor 属性，则可以认为是一个构造函数

  return fn.prototype && Object.getOwnPropertyNames(fn.prototype).filter(function (k) {
    return k !== 'constructor';
  }).length || constructableFunctionRegex.test(fn.toString()) || classRegex.test(fn.toString());
}

function getDefaultTplWrapper(id) {
  return function (tpl) {
    return "<div id=\"" + getWrapperId(id) + "\">" + tpl + "</div>";
  };
}

function getWrapperId(id) {
  return "__qiankun_microapp_wrapper_for_" + (0, _snakeCase2.default)(id) + "__";
}
/** 校验子应用导出的 生命周期 对象是否正确 */


function validateExportLifecycle(exports) {
  var _a = exports !== null && exports !== void 0 ? exports : {},
      bootstrap = _a.bootstrap,
      mount = _a.mount,
      unmount = _a.unmount;

  return (0, _isFunction2.default)(bootstrap) && (0, _isFunction2.default)(mount) && (0, _isFunction2.default)(unmount);
}

var Deferred =
/** @class */
function () {
  function Deferred() {
    var _this = this;

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }

  return Deferred;
}();

exports.Deferred = Deferred;
},{"lodash/isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","lodash/snakeCase":"node_modules/qiankun/node_modules/lodash/snakeCase.js"}],"node_modules/qiankun/es/sandbox/legacy/sandbox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/typeof"));

var _tslib = require("tslib");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPropConfigurable(target, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(target, prop);
  return descriptor ? descriptor.configurable : true;
}

function setWindowProp(prop, value, toDelete) {
  if (value === undefined && toDelete) {
    delete window[prop];
  } else if (isPropConfigurable(window, prop) && (0, _typeof2.default)(prop) !== 'symbol') {
    Object.defineProperty(window, prop, {
      writable: true,
      configurable: true
    });
    window[prop] = value;
  }
}
/**
 * 基于 Proxy 实现的沙箱
 * TODO: 为了兼容性 singular 模式下依旧使用该沙箱，等新沙箱稳定之后再切换
 */


var SingularProxySandbox =
/** @class */
function () {
  function SingularProxySandbox(name) {
    /** 沙箱期间新增的全局变量 */
    this.addedPropsMapInSandbox = new Map();
    /** 沙箱期间更新的全局变量 */

    this.modifiedPropsOriginalValueMapInSandbox = new Map();
    /** 持续记录更新的(新增和修改的)全局变量的 map，用于在任意时刻做 snapshot */

    this.currentUpdatedPropsValueMap = new Map();
    this.sandboxRunning = true;
    this.name = name;

    var _a = this,
        sandboxRunning = _a.sandboxRunning,
        addedPropsMapInSandbox = _a.addedPropsMapInSandbox,
        modifiedPropsOriginalValueMapInSandbox = _a.modifiedPropsOriginalValueMapInSandbox,
        currentUpdatedPropsValueMap = _a.currentUpdatedPropsValueMap;

    var boundValueSymbol = Symbol('bound value');
    var rawWindow = window;
    var fakeWindow = Object.create(null);
    var proxy = new Proxy(fakeWindow, {
      set: function set(_, p, value) {
        if (sandboxRunning) {
          if (!rawWindow.hasOwnProperty(p)) {
            addedPropsMapInSandbox.set(p, value);
          } else if (!modifiedPropsOriginalValueMapInSandbox.has(p)) {
            // 如果当前 window 对象存在该属性，且 record map 中未记录过，则记录该属性初始值
            var originalValue = rawWindow[p];
            modifiedPropsOriginalValueMapInSandbox.set(p, originalValue);
          }

          currentUpdatedPropsValueMap.set(p, value); // 必须重新设置 window 对象保证下次 get 时能拿到已更新的数据
          // eslint-disable-next-line no-param-reassign

          rawWindow[p] = value;
          return true;
        }

        if ("development" === 'development') {
          console.warn("[qiankun] Set window." + p.toString() + " while sandbox destroyed or inactive in " + name + "!");
        } // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误


        return true;
      },
      get: function get(_, p) {
        // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
        // or use window.top to check if an iframe context
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13
        if (p === 'top' || p === 'window' || p === 'self') {
          return proxy;
        }

        var value = rawWindow[p];
        /*
        仅绑定 !isConstructable && isCallable 的函数对象，如 window.console、window.atob 这类。目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
        @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
         */

        if (typeof value === 'function' && !(0, _utils.isConstructable)(value)) {
          if (value[boundValueSymbol]) {
            return value[boundValueSymbol];
          }

          var boundValue_1 = value.bind(rawWindow); // some callable function has custom fields, we need to copy the enumerable props to boundValue. such as moment function.

          Object.keys(value).forEach(function (key) {
            return boundValue_1[key] = value[key];
          });
          Object.defineProperty(value, boundValueSymbol, {
            enumerable: false,
            value: boundValue_1
          });
          return boundValue_1;
        }

        return value;
      },
      // trap in operator
      // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
      has: function has(_, p) {
        return p in rawWindow;
      }
    });
    this.proxy = proxy;
  }

  SingularProxySandbox.prototype.active = function () {
    if (!this.sandboxRunning) {
      this.currentUpdatedPropsValueMap.forEach(function (v, p) {
        return setWindowProp(p, v);
      });
    }

    this.sandboxRunning = true;
  };

  SingularProxySandbox.prototype.inactive = function () {
    if ("development" === 'development') {
      console.info("[qiankun:sandbox] " + this.name + " modified global properties restore...", (0, _tslib.__spread)(this.addedPropsMapInSandbox.keys(), this.modifiedPropsOriginalValueMapInSandbox.keys()));
    } // renderSandboxSnapshot = snapshot(currentUpdatedPropsValueMapForSnapshot);
    // restore global props to initial snapshot


    this.modifiedPropsOriginalValueMapInSandbox.forEach(function (v, p) {
      return setWindowProp(p, v);
    });
    this.addedPropsMapInSandbox.forEach(function (_, p) {
      return setWindowProp(p, undefined, true);
    });
    this.sandboxRunning = false;
  };

  return SingularProxySandbox;
}();

var _default = SingularProxySandbox;
exports.default = _default;
},{"@babel/runtime/helpers/esm/typeof":"node_modules/qiankun/node_modules/@babel/runtime/helpers/esm/typeof.js","tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","../../utils":"node_modules/qiankun/es/utils.js"}],"node_modules/qiankun/es/sandbox/common.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetValue = getTargetValue;
exports.getProxyPropertyGetter = getProxyPropertyGetter;
exports.setProxyPropertyGetter = setProxyPropertyGetter;

var _tslib = require("tslib");

var _utils = require("../utils");

/**
 * @author Kuitos
 * @since 2020-04-13
 */
var boundValueSymbol = Symbol('bound value');

function getTargetValue(target, value) {
  /*
    仅绑定 !isConstructable && isCallable 的函数对象，如 window.console、window.atob 这类。目前没有完美的检测方式，这里通过 prototype 中是否还有可枚举的拓展方法的方式来判断
    @warning 这里不要随意替换成别的判断方式，因为可能触发一些 edge case（比如在 lodash.isFunction 在 iframe 上下文中可能由于调用了 top window 对象触发的安全异常）
   */
  if (typeof value === 'function' && !(0, _utils.isConstructable)(value)) {
    if (value[boundValueSymbol]) {
      return value[boundValueSymbol];
    }

    var boundValue_1 = value.bind(target); // some callable function has custom fields, we need to copy the enumerable props to boundValue. such as moment function.

    Object.keys(value).forEach(function (key) {
      return boundValue_1[key] = value[key];
    });
    Object.defineProperty(value, boundValueSymbol, {
      enumerable: false,
      value: boundValue_1
    });
    return boundValue_1;
  }

  return value;
}

var proxyGetterMap = new Map();

function getProxyPropertyGetter(proxy, property) {
  var getters = proxyGetterMap.get(proxy) || {};
  return getters[property];
}

function setProxyPropertyGetter(proxy, property, getter) {
  var _a;

  var prevGetters = proxyGetterMap.get(proxy) || {};
  proxyGetterMap.set(proxy, (0, _tslib.__assign)((0, _tslib.__assign)({}, prevGetters), (_a = {}, _a[property] = getter, _a)));
}
},{"tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","../utils":"node_modules/qiankun/es/utils.js"}],"node_modules/qiankun/es/sandbox/patchers/dynamicHeadAppend.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = patch;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _importHtmlEntry = require("import-html-entry");

var _singleSpa = require("single-spa");

var _apis = require("../../apis");

var _common = require("../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2019-10-21
 */
var styledComponentSymbol = 'Symbol(styled-component-qiankun)';
var attachProxySymbol = 'Symbol(attach-proxy-qiankun)';
var rawHeadAppendChild = HTMLHeadElement.prototype.appendChild;
var rawHeadRemoveChild = HTMLHeadElement.prototype.removeChild;
var rawAppendChild = HTMLElement.prototype.appendChild;
var rawRemoveChild = HTMLElement.prototype.removeChild;
var SCRIPT_TAG_NAME = 'SCRIPT';
var LINK_TAG_NAME = 'LINK';
var STYLE_TAG_NAME = 'STYLE';
/**
 * Check if a style element is a styled-component liked.
 * A styled-components liked element is which not have textContext but keep the rules in its styleSheet.cssRules.
 * Such as the style element generated by styled-components and emotion.
 * @param element
 */

function isStyledComponentsLike(element) {
  var _a, _b;

  return !element.textContent && (((_a = element.sheet) === null || _a === void 0 ? void 0 : _a.cssRules.length) || ((_b = getCachedRules(element)) === null || _b === void 0 ? void 0 : _b.length));
}

function getCachedRules(element) {
  return element[styledComponentSymbol];
}

function setCachedRules(element, cssRules) {
  Object.defineProperty(element, styledComponentSymbol, {
    value: cssRules,
    configurable: true,
    enumerable: false
  });
}
/**
 * Just hijack dynamic head append, that could avoid accidentally hijacking the insertion of elements except in head.
 * Such a case: ReactDOM.createPortal(<style>.test{color:blue}</style>, container),
 * this could made we append the style element into app wrapper but it will cause an error while the react portal unmounting, as ReactDOM could not find the style in body children list.
 * @param appName
 * @param appWrapperGetter
 * @param proxy
 * @param mounting
 * @param singular
 */


function patch(appName, appWrapperGetter, proxy, mounting, singular) {
  if (mounting === void 0) {
    mounting = true;
  }

  if (singular === void 0) {
    singular = true;
  }

  var dynamicStyleSheetElements = [];

  HTMLHeadElement.prototype.appendChild = function appendChild(newChild) {
    var element = newChild;

    if (element.tagName) {
      switch (element.tagName) {
        case LINK_TAG_NAME:
        case STYLE_TAG_NAME:
          {
            var stylesheetElement = newChild;

            if (!singular) {
              var storedContainerInfo = element[attachProxySymbol];

              if (storedContainerInfo) {
                // eslint-disable-next-line no-shadow
                var appWrapperGetter_1 = storedContainerInfo.appWrapperGetter,
                    dynamicStyleSheetElements_1 = storedContainerInfo.dynamicStyleSheetElements;
                dynamicStyleSheetElements_1.push(stylesheetElement);
                return rawAppendChild.call(appWrapperGetter_1(), stylesheetElement);
              }
            } // check if the currently specified application is active
            // While we switch page from qiankun app to a normal react routing page, the normal one may load stylesheet dynamically while page rendering,
            // but the url change listener must to wait until the current call stack is flushed.
            // This scenario may cause we record the stylesheet from react routing page dynamic injection,
            // and remove them after the url change triggered and qiankun app is unmouting
            // see https://github.com/ReactTraining/history/blob/master/modules/createHashHistory.js#L222-L230


            var activated = (0, _singleSpa.checkActivityFunctions)(window.location).some(function (name) {
              return name === appName;
            }); // only hijack dynamic style injection when app activated

            if (activated) {
              dynamicStyleSheetElements.push(stylesheetElement);
              return rawAppendChild.call(appWrapperGetter(), stylesheetElement);
            }

            return rawHeadAppendChild.call(this, element);
          }

        case SCRIPT_TAG_NAME:
          {
            var _a = element,
                src = _a.src,
                text = _a.text;
            var realAppWrapperGetter = appWrapperGetter;
            var realProxy = proxy;

            if (!singular) {
              // eslint-disable-next-line no-shadow
              var _b = element[attachProxySymbol],
                  appWrapperGetter_2 = _b.appWrapperGetter,
                  proxy_1 = _b.proxy;
              realAppWrapperGetter = appWrapperGetter_2;
              realProxy = proxy_1;
            }

            var fetch_1 = _apis.frameworkConfiguration.fetch;

            if (src) {
              (0, _importHtmlEntry.execScripts)(null, [src], realProxy, {
                fetch: fetch_1,
                strictGlobal: !singular
              }).then(function () {
                // we need to invoke the onload event manually to notify the event listener that the script was completed
                // here are the two typical ways of dynamic script loading
                // 1. element.onload callback way, which webpack and loadjs used, see https://github.com/muicss/loadjs/blob/master/src/loadjs.js#L138
                // 2. addEventListener way, which toast-loader used, see https://github.com/pyrsmk/toast/blob/master/src/Toast.ts#L64
                var loadEvent = new CustomEvent('load');

                if ((0, _isFunction2.default)(element.onload)) {
                  element.onload(loadEvent);
                } else {
                  element.dispatchEvent(loadEvent);
                }
              }, function () {
                var errorEvent = new CustomEvent('error');

                if ((0, _isFunction2.default)(element.onerror)) {
                  element.onerror(errorEvent);
                } else {
                  element.dispatchEvent(errorEvent);
                }
              });
              var dynamicScriptCommentElement = document.createComment("dynamic script " + src + " replaced by qiankun");
              return rawAppendChild.call(realAppWrapperGetter(), dynamicScriptCommentElement);
            }

            (0, _importHtmlEntry.execScripts)(null, ["<script>" + text + "</script>"], realProxy, {
              strictGlobal: !singular
            }).then(element.onload, element.onerror);
            var dynamicInlineScriptCommentElement = document.createComment('dynamic inline script replaced by qiankun');
            return rawAppendChild.call(realAppWrapperGetter(), dynamicInlineScriptCommentElement);
          }

        default:
          break;
      }
    }

    return rawHeadAppendChild.call(this, element);
  };

  HTMLHeadElement.prototype.removeChild = function removeChild(child) {
    if (appWrapperGetter().contains(child)) {
      return rawRemoveChild.call(appWrapperGetter(), child);
    }

    return rawHeadRemoveChild.call(this, child);
  };

  if (!singular) {
    (0, _common.setProxyPropertyGetter)(proxy, 'document', function () {
      return new Proxy(document, {
        get: function get(target, property) {
          if (property === 'createElement') {
            return function createElement(tagName, options) {
              var element = document.createElement(tagName, options);

              if ((tagName === null || tagName === void 0 ? void 0 : tagName.toLowerCase()) === 'style' || (tagName === null || tagName === void 0 ? void 0 : tagName.toLowerCase()) === 'script') {
                Object.defineProperty(element, attachProxySymbol, {
                  value: {
                    name: appName,
                    proxy: proxy,
                    appWrapperGetter: appWrapperGetter,
                    dynamicStyleSheetElements: dynamicStyleSheetElements
                  },
                  enumerable: false
                });
              }

              return element;
            };
          }

          return (0, _common.getTargetValue)(document, target[property]);
        }
      });
    });
  }

  return function free() {
    HTMLHeadElement.prototype.appendChild = rawHeadAppendChild;
    HTMLHeadElement.prototype.removeChild = rawHeadRemoveChild;
    dynamicStyleSheetElements.forEach(function (stylesheetElement) {
      /*
         With a styled-components generated style element, we need to record its cssRules for restore next re-mounting time.
         We're doing this because the sheet of style element is going to be cleaned automatically by browser after the style element dom removed from document.
         see https://www.w3.org/TR/cssom-1/#associated-css-style-sheet
         */
      if (stylesheetElement instanceof HTMLStyleElement && isStyledComponentsLike(stylesheetElement)) {
        if (stylesheetElement.sheet) {
          // record the original css rules of the style element for restore
          setCachedRules(stylesheetElement, stylesheetElement.sheet.cssRules);
        }
      } // As now the sub app content all wrapped with a special id container,
      // the dynamic style sheet would be removed automatically while unmoutting

    });
    return function rebuild() {
      dynamicStyleSheetElements.forEach(function (stylesheetElement) {
        // re-append the dynamic stylesheet to sub-app container
        // Using document.head.appendChild ensures that appendChild calls
        // can also directly use the HTMLHeadElement.prototype.appendChild method which is overwritten at mounting phase
        document.head.appendChild.call(appWrapperGetter(), stylesheetElement);
        /*
        get the stored css rules from styled-components generated element, and the re-insert rules for them.
        note that we must do this after style element had been added to document, which stylesheet would be associated to the document automatically.
        check the spec https://www.w3.org/TR/cssom-1/#associated-css-style-sheet
         */

        if (stylesheetElement instanceof HTMLStyleElement && isStyledComponentsLike(stylesheetElement)) {
          var cssRules = getCachedRules(stylesheetElement);

          if (cssRules) {
            // eslint-disable-next-line no-plusplus
            for (var i = 0; i < cssRules.length; i++) {
              var cssRule = cssRules[i];
              stylesheetElement.sheet.insertRule(cssRule.cssText);
            }
          }
        }
      }); // As the hijacker will be invoked every mounting phase, we could release the cache for gc after rebuilding

      if (mounting) {
        dynamicStyleSheetElements = [];
      }
    };
  };
}
},{"lodash/isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","import-html-entry":"node_modules/qiankun/node_modules/import-html-entry/esm/index.js","single-spa":"node_modules/qiankun/node_modules/single-spa/lib/esm/single-spa.min.js","../../apis":"node_modules/qiankun/es/apis.js","../common":"node_modules/qiankun/es/sandbox/common.js"}],"node_modules/qiankun/node_modules/lodash/noop.js":[function(require,module,exports) {
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;

},{}],"node_modules/qiankun/es/sandbox/patchers/historyListener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = patch;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patch() {
  // FIXME umi unmount feature request
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var rawHistoryListen = function rawHistoryListen(_) {
    return _noop2.default;
  };

  var historyListeners = [];
  var historyUnListens = [];

  if (window.g_history && (0, _isFunction2.default)(window.g_history.listen)) {
    rawHistoryListen = window.g_history.listen.bind(window.g_history);

    window.g_history.listen = function (listener) {
      historyListeners.push(listener);
      var unListen = rawHistoryListen(listener);
      historyUnListens.push(unListen);
      return function () {
        unListen();
        historyUnListens.splice(historyUnListens.indexOf(unListen), 1);
        historyListeners.splice(historyListeners.indexOf(listener), 1);
      };
    };
  }

  return function free() {
    var rebuild = _noop2.default;
    /*
     还存在余量 listener 表明未被卸载，存在两种情况
     1. 应用在 unmout 时未正确卸载 listener
     2. listener 是应用 mount 之前绑定的，
     第二种情况下应用在下次 mount 之前需重新绑定该 listener
     */

    if (historyListeners.length) {
      rebuild = function rebuild() {
        // 必须使用 window.g_history.listen 的方式重新绑定 listener，从而能保证 rebuild 这部分也能被捕获到，否则在应用卸载后无法正确的移除这部分副作用
        historyListeners.forEach(function (listener) {
          return window.g_history.listen(listener);
        });
      };
    } // 卸载余下的 listener


    historyUnListens.forEach(function (unListen) {
      return unListen();
    }); // restore

    if (window.g_history && (0, _isFunction2.default)(window.g_history.listen)) {
      window.g_history.listen = rawHistoryListen;
    }

    return rebuild;
  };
}
},{"lodash/isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","lodash/noop":"node_modules/qiankun/node_modules/lodash/noop.js"}],"node_modules/qiankun/es/sandbox/patchers/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = patch;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _tslib = require("tslib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2019-04-11
 */
var rawWindowInterval = window.setInterval;
var rawWindowClearInterval = window.clearInterval;

function patch() {
  var intervals = []; // @ts-ignore

  window.clearInterval = function (intervalId) {
    intervals = intervals.filter(function (id) {
      return id !== intervalId;
    });
    return rawWindowClearInterval(intervalId);
  }; // @ts-ignore


  window.setInterval = function (handler, timeout) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    var intervalId = rawWindowInterval.apply(void 0, (0, _tslib.__spread)([handler, timeout], args));
    intervals = (0, _tslib.__spread)(intervals, [intervalId]);
    return intervalId;
  };

  return function free() {
    intervals.forEach(function (id) {
      return window.clearInterval(id);
    });
    window.setInterval = rawWindowInterval;
    window.clearInterval = rawWindowClearInterval;
    return _noop2.default;
  };
}
},{"lodash/noop":"node_modules/qiankun/node_modules/lodash/noop.js","tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js"}],"node_modules/qiankun/es/sandbox/patchers/windowListener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = patch;

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _tslib = require("tslib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2019-04-11
 */
var rawAddEventListener = window.addEventListener;
var rawRemoveEventListener = window.removeEventListener;

function patch() {
  var listenerMap = new Map();

  window.addEventListener = function (type, listener, options) {
    var listeners = listenerMap.get(type) || [];
    listenerMap.set(type, (0, _tslib.__spread)(listeners, [listener]));
    return rawAddEventListener.call(window, type, listener, options);
  };

  window.removeEventListener = function (type, listener, options) {
    var storedTypeListeners = listenerMap.get(type);

    if (storedTypeListeners && storedTypeListeners.length && storedTypeListeners.indexOf(listener) !== -1) {
      storedTypeListeners.splice(storedTypeListeners.indexOf(listener), 1);
    }

    return rawRemoveEventListener.call(window, type, listener, options);
  };

  return function free() {
    listenerMap.forEach(function (listeners, type) {
      return (0, _tslib.__spread)(listeners).forEach(function (listener) {
        return window.removeEventListener(type, listener);
      });
    });
    window.addEventListener = rawAddEventListener;
    window.removeEventListener = rawRemoveEventListener;
    return _noop2.default;
  };
}
},{"lodash/noop":"node_modules/qiankun/node_modules/lodash/noop.js","tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js"}],"node_modules/qiankun/es/sandbox/patchers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchAtMounting = patchAtMounting;
exports.patchAtBootstrapping = patchAtBootstrapping;

var _dynamicHeadAppend = _interopRequireDefault(require("./dynamicHeadAppend"));

var _historyListener = _interopRequireDefault(require("./historyListener"));

var _interval = _interopRequireDefault(require("./interval"));

var _windowListener = _interopRequireDefault(require("./windowListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2019-04-11
 */
function patchAtMounting(appName, elementGetter, proxy, singular) {
  return [(0, _interval.default)(), (0, _windowListener.default)(), (0, _historyListener.default)(), (0, _dynamicHeadAppend.default)(appName, elementGetter, proxy, true, singular)];
}

function patchAtBootstrapping(appName, elementGetter, proxy, singular) {
  return [(0, _dynamicHeadAppend.default)(appName, elementGetter, proxy, false, singular)];
}
},{"./dynamicHeadAppend":"node_modules/qiankun/es/sandbox/patchers/dynamicHeadAppend.js","./historyListener":"node_modules/qiankun/es/sandbox/patchers/historyListener.js","./interval":"node_modules/qiankun/es/sandbox/patchers/interval.js","./windowListener":"node_modules/qiankun/es/sandbox/patchers/windowListener.js"}],"node_modules/qiankun/node_modules/lodash/_setCacheAdd.js":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

},{}],"node_modules/qiankun/node_modules/lodash/_setCacheHas.js":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

},{}],"node_modules/qiankun/node_modules/lodash/_SetCache.js":[function(require,module,exports) {
var MapCache = require('./_MapCache'),
    setCacheAdd = require('./_setCacheAdd'),
    setCacheHas = require('./_setCacheHas');

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

},{"./_MapCache":"node_modules/qiankun/node_modules/lodash/_MapCache.js","./_setCacheAdd":"node_modules/qiankun/node_modules/lodash/_setCacheAdd.js","./_setCacheHas":"node_modules/qiankun/node_modules/lodash/_setCacheHas.js"}],"node_modules/qiankun/node_modules/lodash/_baseFindIndex.js":[function(require,module,exports) {
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],"node_modules/qiankun/node_modules/lodash/_baseIsNaN.js":[function(require,module,exports) {
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

},{}],"node_modules/qiankun/node_modules/lodash/_strictIndexOf.js":[function(require,module,exports) {
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

},{}],"node_modules/qiankun/node_modules/lodash/_baseIndexOf.js":[function(require,module,exports) {
var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

},{"./_baseFindIndex":"node_modules/qiankun/node_modules/lodash/_baseFindIndex.js","./_baseIsNaN":"node_modules/qiankun/node_modules/lodash/_baseIsNaN.js","./_strictIndexOf":"node_modules/qiankun/node_modules/lodash/_strictIndexOf.js"}],"node_modules/qiankun/node_modules/lodash/_arrayIncludes.js":[function(require,module,exports) {
var baseIndexOf = require('./_baseIndexOf');

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;

},{"./_baseIndexOf":"node_modules/qiankun/node_modules/lodash/_baseIndexOf.js"}],"node_modules/qiankun/node_modules/lodash/_arrayIncludesWith.js":[function(require,module,exports) {
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;

},{}],"node_modules/qiankun/node_modules/lodash/_cacheHas.js":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

},{}],"node_modules/qiankun/node_modules/lodash/_setToArray.js":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

},{}],"node_modules/qiankun/node_modules/lodash/_createSet.js":[function(require,module,exports) {
var Set = require('./_Set'),
    noop = require('./noop'),
    setToArray = require('./_setToArray');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;

},{"./_Set":"node_modules/qiankun/node_modules/lodash/_Set.js","./noop":"node_modules/qiankun/node_modules/lodash/noop.js","./_setToArray":"node_modules/qiankun/node_modules/lodash/_setToArray.js"}],"node_modules/qiankun/node_modules/lodash/_baseUniq.js":[function(require,module,exports) {
var SetCache = require('./_SetCache'),
    arrayIncludes = require('./_arrayIncludes'),
    arrayIncludesWith = require('./_arrayIncludesWith'),
    cacheHas = require('./_cacheHas'),
    createSet = require('./_createSet'),
    setToArray = require('./_setToArray');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;

},{"./_SetCache":"node_modules/qiankun/node_modules/lodash/_SetCache.js","./_arrayIncludes":"node_modules/qiankun/node_modules/lodash/_arrayIncludes.js","./_arrayIncludesWith":"node_modules/qiankun/node_modules/lodash/_arrayIncludesWith.js","./_cacheHas":"node_modules/qiankun/node_modules/lodash/_cacheHas.js","./_createSet":"node_modules/qiankun/node_modules/lodash/_createSet.js","./_setToArray":"node_modules/qiankun/node_modules/lodash/_setToArray.js"}],"node_modules/qiankun/node_modules/lodash/uniq.js":[function(require,module,exports) {
var baseUniq = require('./_baseUniq');

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;

},{"./_baseUniq":"node_modules/qiankun/node_modules/lodash/_baseUniq.js"}],"node_modules/qiankun/es/sandbox/proxySandbox.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _tslib = require("tslib");

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2020-3-31
 */
// zone.js will overwrite Object.defineProperty
var rawObjectDefineProperty = Object.defineProperty;

function createFakeWindow(global) {
  var fakeWindow = {};
  /*
   copy the non-configurable property of global to fakeWindow
   see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
   > A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.
   */

  Object.getOwnPropertyNames(global).filter(function (p) {
    var descriptor = Object.getOwnPropertyDescriptor(global, p);
    return !(descriptor === null || descriptor === void 0 ? void 0 : descriptor.configurable);
  }).forEach(function (p) {
    var descriptor = Object.getOwnPropertyDescriptor(global, p);

    if (descriptor) {
      /*
       make top/self/window property configurable and writable, otherwise it will cause TypeError while get trap return.
       see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get
       > The value reported for a property must be the same as the value of the corresponding target object property if the target object property is a non-writable, non-configurable data property.
       */
      if (p === 'top' || p === 'self' || p === 'window') {
        descriptor.configurable = true;
        descriptor.writable = true;
      } // just for test


      if ("development" === 'test' && p === 'mockTop') {
        descriptor.configurable = true;
        descriptor.writable = true;
      } // freeze the descriptor to avoid being modified by zone.js
      // see https://github.com/angular/zone.js/blob/a5fe09b0fac27ac5df1fa746042f96f05ccb6a00/lib/browser/define-property.ts#L71


      rawObjectDefineProperty(fakeWindow, p, Object.freeze(descriptor));
    }
  });
  return fakeWindow;
}
/**
 * 基于 Proxy 实现的沙箱
 */


var ProxySandbox =
/** @class */
function () {
  function ProxySandbox(name) {
    /** window 值变更的记录快照 */
    this.updateValueMap = new Map();
    this.sandboxRunning = true;
    this.name = name;

    var _a = this,
        sandboxRunning = _a.sandboxRunning,
        updateValueMap = _a.updateValueMap; // https://github.com/umijs/qiankun/pull/192


    var rawWindow = window;
    var fakeWindow = createFakeWindow(rawWindow);
    var proxy = new Proxy(fakeWindow, {
      set: function set(_, p, value) {
        if (sandboxRunning) {
          updateValueMap.set(p, value);
          return true;
        }

        if ("development" === 'development') {
          console.warn("[qiankun] Set window." + p.toString() + " while sandbox destroyed or inactive in " + name + "!");
        } // 在 strict-mode 下，Proxy 的 handler.set 返回 false 会抛出 TypeError，在沙箱卸载的情况下应该忽略错误


        return true;
      },
      get: function get(_, p) {
        // just for test
        if ("development" === 'test' && p === 'mockTop') {
          return proxy;
        } // avoid who using window.window or window.self to escape the sandbox environment to touch the really window
        // or use window.top to check if an iframe context
        // see https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js#L13


        if (p === 'top' || p === 'window' || p === 'self') {
          return proxy;
        } // proxy.hasOwnProperty would invoke getter firstly, then its value represented as rawWindow.hasOwnProperty


        if (p === 'hasOwnProperty') {
          return function (key) {
            return updateValueMap.has(key) || rawWindow.hasOwnProperty(key);
          };
        } // call proxy getter interceptors


        var proxyPropertyGetter = (0, _common.getProxyPropertyGetter)(proxy, p);

        if (proxyPropertyGetter) {
          return proxyPropertyGetter();
        } // Take priority from the updateValueMap, or fallback to window


        var value = updateValueMap.get(p) || rawWindow[p];
        return (0, _common.getTargetValue)(rawWindow, value);
      },
      // trap in operator
      // see https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/constants.js#L12
      has: function has(_, p) {
        return updateValueMap.has(p) || p in rawWindow;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, p) {
        if (updateValueMap.has(p)) {
          // if the property is existed on raw window, use it original descriptor
          var descriptor = Object.getOwnPropertyDescriptor(rawWindow, p);

          if (descriptor) {
            return descriptor;
          }

          return {
            configurable: true,
            enumerable: true,
            writable: true,
            value: updateValueMap.get(p)
          };
        }
        /*
         as the descriptor of top/self/window/mockTop in raw window are configurable but not in proxy target, we need to get it from target to avoid TypeError
         see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor
         > A property cannot be reported as non-configurable, if it does not exists as an own property of the target object or if it exists as a configurable own property of the target object.
         */


        if (target.hasOwnProperty(p)) {
          return Object.getOwnPropertyDescriptor(target, p);
        }

        if (rawWindow.hasOwnProperty(p)) {
          return Object.getOwnPropertyDescriptor(rawWindow, p);
        }

        return undefined;
      },
      // trap to support iterator with sandbox
      ownKeys: function ownKeys() {
        return (0, _uniq2.default)((0, _tslib.__spread)(Reflect.ownKeys(rawWindow), updateValueMap.keys()));
      },
      deleteProperty: function deleteProperty(_, p) {
        if (updateValueMap.has(p)) {
          updateValueMap.delete(p);
          return true;
        }

        return true;
      }
    });
    this.proxy = proxy;
  }

  ProxySandbox.prototype.active = function () {
    this.sandboxRunning = true;
  };

  ProxySandbox.prototype.inactive = function () {
    if ("development" === 'development') {
      console.info("[qiankun:sandbox] " + this.name + " modified global properties restore...", (0, _tslib.__spread)(this.updateValueMap.keys()));
    }

    this.sandboxRunning = false;
  };

  return ProxySandbox;
}();

var _default = ProxySandbox;
exports.default = _default;
},{"lodash/uniq":"node_modules/qiankun/node_modules/lodash/uniq.js","tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","./common":"node_modules/qiankun/es/sandbox/common.js"}],"node_modules/qiankun/es/sandbox/snapshotSandbox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function iter(obj, callbackFn) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      callbackFn(prop);
    }
  }
}
/**
 * 基于 diff 方式实现的沙箱，用于不支持 Proxy 的低版本浏览器
 */


var SnapshotSandbox =
/** @class */
function () {
  function SnapshotSandbox(name) {
    this.sandboxRunning = false;
    this.modifyPropsMap = {};
    this.name = name;
    this.proxy = window;
    this.active();
  }

  SnapshotSandbox.prototype.active = function () {
    var _this = this;

    if (this.sandboxRunning) {
      return;
    } // 记录当前快照


    this.windowSnapshot = {};
    iter(window, function (prop) {
      _this.windowSnapshot[prop] = window[prop];
    }); // 恢复之前的变更

    Object.keys(this.modifyPropsMap).forEach(function (p) {
      window[p] = _this.modifyPropsMap[p];
    });
    this.sandboxRunning = true;
  };

  SnapshotSandbox.prototype.inactive = function () {
    var _this = this;

    this.modifyPropsMap = {};
    iter(window, function (prop) {
      if (window[prop] !== _this.windowSnapshot[prop]) {
        // 记录变更，恢复环境
        _this.modifyPropsMap[prop] = window[prop];
        window[prop] = _this.windowSnapshot[prop];
      }
    });

    if ("development" === 'development') {
      console.info("[qiankun:sandbox] " + this.name + " origin window restore...", Object.keys(this.modifyPropsMap));
    }

    this.sandboxRunning = false;
  };

  return SnapshotSandbox;
}();

var _default = SnapshotSandbox;
exports.default = _default;
},{}],"node_modules/qiankun/es/sandbox/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSandbox = createSandbox;

var _tslib = require("tslib");

var _sandbox = _interopRequireDefault(require("./legacy/sandbox"));

var _patchers = require("./patchers");

var _proxySandbox = _interopRequireDefault(require("./proxySandbox"));

var _snapshotSandbox = _interopRequireDefault(require("./snapshotSandbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 生成应用运行时沙箱
 *
 * 沙箱分两个类型：
 * 1. app 环境沙箱
 *  app 环境沙箱是指应用初始化过之后，应用会在什么样的上下文环境运行。每个应用的环境沙箱只会初始化一次，因为子应用只会触发一次 bootstrap 。
 *  子应用在切换时，实际上切换的是 app 环境沙箱。
 * 2. render 沙箱
 *  子应用在 app mount 开始前生成好的的沙箱。每次子应用切换过后，render 沙箱都会重现初始化。
 *
 * 这么设计的目的是为了保证每个子应用切换回来之后，还能运行在应用 bootstrap 之后的环境下。
 *
 * @param appName
 * @param elementGetter
 * @param singular
 */
function createSandbox(appName, elementGetter, singular) {
  // mounting freers are one-off and should be re-init at every mounting time
  var mountingFreers = [];
  var sideEffectsRebuilders = [];
  var sandbox;

  if (window.Proxy) {
    sandbox = singular ? new _sandbox.default(appName) : new _proxySandbox.default(appName);
  } else {
    sandbox = new _snapshotSandbox.default(appName);
  } // some side effect could be be invoked while bootstrapping, such as dynamic stylesheet injection with style-loader, especially during the development phase


  var bootstrappingFreers = (0, _patchers.patchAtBootstrapping)(appName, elementGetter, sandbox.proxy, singular);
  return {
    proxy: sandbox.proxy,

    /**
     * 沙箱被 mount
     * 可能是从 bootstrap 状态进入的 mount
     * 也可能是从 unmount 之后再次唤醒进入 mount
     */
    mount: function mount() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        var sideEffectsRebuildersAtBootstrapping, sideEffectsRebuildersAtMounting;
        return (0, _tslib.__generator)(this, function (_a) {
          sideEffectsRebuildersAtBootstrapping = sideEffectsRebuilders.slice(0, bootstrappingFreers.length);
          sideEffectsRebuildersAtMounting = sideEffectsRebuilders.slice(bootstrappingFreers.length); // must rebuild the side effects which added at bootstrapping firstly to recovery to nature state

          if (sideEffectsRebuildersAtBootstrapping.length) {
            sideEffectsRebuildersAtBootstrapping.forEach(function (rebuild) {
              return rebuild();
            });
          }
          /* ------------------------------------------ 因为有上下文依赖（window），以下代码执行顺序不能变 ------------------------------------------ */

          /* ------------------------------------------ 1. 启动/恢复 沙箱------------------------------------------ */


          sandbox.active();
          /* ------------------------------------------ 2. 开启全局变量补丁 ------------------------------------------*/
          // render 沙箱启动时开始劫持各类全局监听，尽量不要在应用初始化阶段有 事件监听/定时器 等副作用

          mountingFreers = (0, _patchers.patchAtMounting)(appName, elementGetter, sandbox.proxy, singular);
          /* ------------------------------------------ 3. 重置一些初始化时的副作用 ------------------------------------------*/
          // 存在 rebuilder 则表明有些副作用需要重建

          if (sideEffectsRebuildersAtMounting.length) {
            sideEffectsRebuildersAtMounting.forEach(function (rebuild) {
              return rebuild();
            });
          } // clean up rebuilders


          sideEffectsRebuilders = [];
          return [2
          /*return*/
          ];
        });
      });
    },

    /**
     * 恢复 global 状态，使其能回到应用加载之前的状态
     */
    unmount: function unmount() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (_a) {
          // record the rebuilders of window side effects (event listeners or timers)
          // note that the frees of mounting phase are one-off as it will be re-init at next mounting
          sideEffectsRebuilders = (0, _tslib.__spread)(bootstrappingFreers, mountingFreers).map(function (free) {
            return free();
          });
          sandbox.inactive();
          return [2
          /*return*/
          ];
        });
      });
    }
  };
}
},{"tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","./legacy/sandbox":"node_modules/qiankun/es/sandbox/legacy/sandbox.js","./patchers":"node_modules/qiankun/es/sandbox/patchers/index.js","./proxySandbox":"node_modules/qiankun/es/sandbox/proxySandbox.js","./snapshotSandbox":"node_modules/qiankun/es/sandbox/snapshotSandbox.js"}],"node_modules/qiankun/es/loader.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApp = loadApp;

var _concat2 = _interopRequireDefault(require("lodash/concat"));

var _mergeWith2 = _interopRequireDefault(require("lodash/mergeWith"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/typeof"));

var _tslib = require("tslib");

var _importHtmlEntry = require("import-html-entry");

var _addons = _interopRequireDefault(require("./addons"));

var _globalState = require("./globalState");

var _sandbox = require("./sandbox");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2020-04-01
 */
function assertElementExist(element, msg) {
  if (!element) {
    if (msg) {
      throw new Error(msg);
    }

    throw new Error('[qiankun] element not existed!');
  }
}

function toArray(array) {
  return Array.isArray(array) ? array : [array];
}

function execHooksChain(hooks, app) {
  if (hooks.length) {
    return hooks.reduce(function (chain, hook) {
      return chain.then(function () {
        return hook(app);
      });
    }, Promise.resolve());
  }

  return Promise.resolve();
}

function validateSingularMode(validate, app) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (_a) {
      return [2
      /*return*/
      , typeof validate === 'function' ? validate(app) : !!validate];
    });
  });
}

function createElement(appContent, strictStyleIsolation) {
  var containerElement = document.createElement('div');
  containerElement.innerHTML = appContent; // appContent always wrapped with a singular div

  var appElement = containerElement.firstChild;

  if (strictStyleIsolation) {
    var innerHTML = appElement.innerHTML;
    appElement.innerHTML = '';
    var shadow = appElement.attachShadow({
      mode: 'open'
    });
    shadow.innerHTML = innerHTML;
  }

  return appElement;
}
/** generate app wrapper dom getter */


function getAppWrapperGetter(appName, appInstanceId, useLegacyRender, strictStyleIsolation, elementGetter) {
  return function () {
    if (useLegacyRender) {
      if (strictStyleIsolation) throw new Error('[qiankun]: strictStyleIsolation can not be used with legacy render!');
      var appWrapper = document.getElementById((0, _utils.getWrapperId)(appInstanceId));
      assertElementExist(appWrapper, "[qiankun] Wrapper element for " + appName + " with instance " + appInstanceId + " is not existed!");
      return appWrapper;
    }

    var element = elementGetter();
    assertElementExist(element, "[qiankun] Wrapper element for " + appName + " with instance " + appInstanceId + " is not existed!");

    if (strictStyleIsolation) {
      return element.shadowRoot;
    }

    return element;
  };
}

var rawAppendChild = HTMLElement.prototype.appendChild;
var rawRemoveChild = HTMLElement.prototype.removeChild;
/**
 * Get the render function
 * If the legacy render function is provide, used as it, otherwise we will insert the app element to target container by qiankun
 * @param appName
 * @param appContent
 * @param container
 * @param legacyRender
 */

function getRender(appName, appContent, container, legacyRender) {
  var render = function render(_a, phase) {
    var element = _a.element,
        loading = _a.loading;

    if (legacyRender) {
      if ("development" === 'development') {
        console.warn('[qiankun] Custom rendering function is deprecated, you can use the container element setting instead!');
      }

      return legacyRender({
        loading: loading,
        appContent: element ? appContent : ''
      });
    }

    var containerElement = typeof container === 'string' ? document.querySelector(container) : container; // The container might have be removed after micro app unmounted.
    // Such as the micro app unmount lifecycle called by a react componentWillUnmount lifecycle, after micro app unmounted, the react component might also be removed

    if (phase !== 'unmounted') {
      var errorMsg = function () {
        switch (phase) {
          case 'loading':
          case 'mounting':
            return "[qiankun] Target container with " + container + " not existed while " + appName + " " + phase + "!";

          case 'mounted':
            return "[qiankun] Target container with " + container + " not existed after " + appName + " " + phase + "!";

          default:
            return "[qiankun] Target container with " + container + " not existed while " + appName + " rendering!";
        }
      }();

      assertElementExist(containerElement, errorMsg);
    }

    if (containerElement && !containerElement.contains(element)) {
      // clear the container
      while (containerElement.firstChild) {
        rawRemoveChild.call(containerElement, containerElement.firstChild);
      } // append the element to container if it exist


      if (element) {
        rawAppendChild.call(containerElement, element);
      }
    }

    return undefined;
  };

  return render;
}

function getLifecyclesFromExports(scriptExports, appName, global) {
  if ((0, _utils.validateExportLifecycle)(scriptExports)) {
    return scriptExports;
  }

  if ("development" === 'development') {
    console.warn("[qiankun] lifecycle not found from " + appName + " entry exports, fallback to get from window['" + appName + "']");
  } // fallback to global variable who named with ${appName} while module exports not found


  var globalVariableExports = global[appName];

  if ((0, _utils.validateExportLifecycle)(globalVariableExports)) {
    return globalVariableExports;
  }

  throw new Error("[qiankun] You need to export lifecycle functions in " + appName + " entry");
}

var appInstanceCounts = {};
var prevAppUnmountedDeferred;

function loadApp(app, configuration, lifeCycles) {
  if (configuration === void 0) {
    configuration = {};
  }

  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var entry, appName, _a, singular, _b, sandbox, importEntryOpts, _c, template, execScripts, assetPublicPath, appInstanceId, strictStyleIsolation, appContent, element, container, legacyRender, render, containerGetter, global, mountSandbox, unmountSandbox, sandboxInstance, _d, _e, beforeUnmount, _f, afterUnmount, _g, afterMount, _h, beforeMount, _j, beforeLoad, scriptExports, _k, bootstrap, mount, unmount, update, _l, onGlobalStateChange, setGlobalState, offGlobalStateChange, parcelConfig;

    var _this = this;

    return (0, _tslib.__generator)(this, function (_m) {
      switch (_m.label) {
        case 0:
          entry = app.entry, appName = app.name;
          _a = configuration.singular, singular = _a === void 0 ? false : _a, _b = configuration.sandbox, sandbox = _b === void 0 ? true : _b, importEntryOpts = (0, _tslib.__rest)(configuration, ["singular", "sandbox"]);
          return [4
          /*yield*/
          , (0, _importHtmlEntry.importEntry)(entry, importEntryOpts)];

        case 1:
          _c = _m.sent(), template = _c.template, execScripts = _c.execScripts, assetPublicPath = _c.assetPublicPath;
          return [4
          /*yield*/
          , validateSingularMode(singular, app)];

        case 2:
          if (!_m.sent()) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , prevAppUnmountedDeferred && prevAppUnmountedDeferred.promise];

        case 3:
          _m.sent();

          _m.label = 4;

        case 4:
          appInstanceId = appName + "_" + (appInstanceCounts.hasOwnProperty(appName) ? appInstanceCounts[appName] += 1 : appInstanceCounts[appName] = 0);
          strictStyleIsolation = (0, _typeof2.default)(sandbox) === 'object' && !!sandbox.strictStyleIsolation;
          appContent = (0, _utils.getDefaultTplWrapper)(appInstanceId)(template);
          element = createElement(appContent, strictStyleIsolation);
          container = 'container' in app ? app.container : undefined;
          legacyRender = 'render' in app ? app.render : undefined;
          render = getRender(appName, appContent, container, legacyRender); // 第一次加载设置应用可见区域 dom 结构
          // 确保每次应用加载前容器 dom 结构已经设置完毕

          render({
            element: element,
            loading: true
          }, 'loading');
          containerGetter = getAppWrapperGetter(appName, appInstanceId, !!legacyRender, strictStyleIsolation, function () {
            return element;
          });
          global = window;

          mountSandbox = function mountSandbox() {
            return Promise.resolve();
          };

          unmountSandbox = function unmountSandbox() {
            return Promise.resolve();
          };

          if (sandbox) {
            sandboxInstance = (0, _sandbox.createSandbox)(appName, containerGetter, Boolean(singular)); // 用沙箱的代理对象作为接下来使用的全局对象

            global = sandboxInstance.proxy;
            mountSandbox = sandboxInstance.mount;
            unmountSandbox = sandboxInstance.unmount;
          }

          _d = (0, _mergeWith2.default)({}, (0, _addons.default)(global, assetPublicPath), lifeCycles, function (v1, v2) {
            return (0, _concat2.default)(v1 !== null && v1 !== void 0 ? v1 : [], v2 !== null && v2 !== void 0 ? v2 : []);
          }), _e = _d.beforeUnmount, beforeUnmount = _e === void 0 ? [] : _e, _f = _d.afterUnmount, afterUnmount = _f === void 0 ? [] : _f, _g = _d.afterMount, afterMount = _g === void 0 ? [] : _g, _h = _d.beforeMount, beforeMount = _h === void 0 ? [] : _h, _j = _d.beforeLoad, beforeLoad = _j === void 0 ? [] : _j;
          return [4
          /*yield*/
          , execHooksChain(toArray(beforeLoad), app)];

        case 5:
          _m.sent();

          return [4
          /*yield*/
          , execScripts(global, !singular)];

        case 6:
          scriptExports = _m.sent();
          _k = getLifecyclesFromExports(scriptExports, appName, global), bootstrap = _k.bootstrap, mount = _k.mount, unmount = _k.unmount, update = _k.update;
          _l = (0, _globalState.getMicroAppStateActions)(appInstanceId), onGlobalStateChange = _l.onGlobalStateChange, setGlobalState = _l.setGlobalState, offGlobalStateChange = _l.offGlobalStateChange;
          parcelConfig = {
            name: appInstanceId,
            bootstrap: bootstrap,
            mount: [function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , validateSingularMode(singular, app)];

                    case 1:
                      if (_a.sent() && prevAppUnmountedDeferred) {
                        return [2
                        /*return*/
                        , prevAppUnmountedDeferred.promise];
                      }

                      return [2
                      /*return*/
                      , undefined];
                  }
                });
              });
            }, // 添加 mount hook, 确保每次应用加载前容器 dom 结构已经设置完毕
            function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  // element would be destroyed after unmounted, we need to recreate it if it not exist
                  element = element || createElement(appContent, strictStyleIsolation);
                  render({
                    element: element,
                    loading: true
                  }, 'mounting');
                  return [2
                  /*return*/
                  ];
                });
              });
            }, // exec the chain after rendering to keep the behavior with beforeLoad
            function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , execHooksChain(toArray(beforeMount), app)];
                });
              });
            }, mountSandbox, function (props) {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , mount((0, _tslib.__assign)((0, _tslib.__assign)({}, props), {
                    container: containerGetter(),
                    setGlobalState: setGlobalState,
                    onGlobalStateChange: onGlobalStateChange
                  }))];
                });
              });
            }, // 应用 mount 完成后结束 loading
            function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , render({
                    element: element,
                    loading: false
                  }, 'mounted')];
                });
              });
            }, function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , execHooksChain(toArray(afterMount), app)];
                });
              });
            }, // initialize the unmount defer after app mounted and resolve the defer after it unmounted
            function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , validateSingularMode(singular, app)];

                    case 1:
                      if (_a.sent()) {
                        prevAppUnmountedDeferred = new _utils.Deferred();
                      }

                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }],
            unmount: [function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , execHooksChain(toArray(beforeUnmount), app)];
                });
              });
            }, function (props) {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , unmount((0, _tslib.__assign)((0, _tslib.__assign)({}, props), {
                    container: containerGetter()
                  }))];
                });
              });
            }, unmountSandbox, function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  return [2
                  /*return*/
                  , execHooksChain(toArray(afterUnmount), app)];
                });
              });
            }, function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  render({
                    element: null,
                    loading: false
                  }, 'unmounted');
                  offGlobalStateChange(appInstanceId); // for gc

                  element = null;
                  return [2
                  /*return*/
                  ];
                });
              });
            }, function () {
              return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , validateSingularMode(singular, app)];

                    case 1:
                      if (_a.sent() && prevAppUnmountedDeferred) {
                        prevAppUnmountedDeferred.resolve();
                      }

                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }]
          };

          if (typeof update === 'function') {
            parcelConfig.update = update;
          }

          return [2
          /*return*/
          , parcelConfig];
      }
    });
  });
}
},{"lodash/concat":"node_modules/qiankun/node_modules/lodash/concat.js","lodash/mergeWith":"node_modules/qiankun/node_modules/lodash/mergeWith.js","@babel/runtime/helpers/esm/typeof":"node_modules/qiankun/node_modules/@babel/runtime/helpers/esm/typeof.js","tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","import-html-entry":"node_modules/qiankun/node_modules/import-html-entry/esm/index.js","./addons":"node_modules/qiankun/es/addons/index.js","./globalState":"node_modules/qiankun/es/globalState.js","./sandbox":"node_modules/qiankun/es/sandbox/index.js","./utils":"node_modules/qiankun/es/utils.js"}],"node_modules/qiankun/es/prefetch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefetchImmediately = prefetchImmediately;
exports.doPrefetchStrategy = doPrefetchStrategy;

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _tslib = require("tslib");

var _importHtmlEntry = require("import-html-entry");

var _singleSpa = require("single-spa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author Kuitos
 * @since 2019-02-26
 */
// RIC and shim for browsers setTimeout() without it
var requestIdleCallback = window.requestIdleCallback || function requestIdleCallback(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
}; // https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var isSlowNetwork = navigator.connection ? navigator.connection.saveData || /(2|3)g/.test(navigator.connection.effectiveType) : false;
/**
 * prefetch assets, do nothing while in mobile network
 * @param entry
 * @param opts
 */

function prefetch(entry, opts) {
  var _this = this;

  if (isMobile || isSlowNetwork) {
    // Don't prefetch if an mobile device or in a slow network.
    return;
  }

  requestIdleCallback(function () {
    return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
      var _a, getExternalScripts, getExternalStyleSheets;

      return (0, _tslib.__generator)(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , (0, _importHtmlEntry.importEntry)(entry, opts)];

          case 1:
            _a = _b.sent(), getExternalScripts = _a.getExternalScripts, getExternalStyleSheets = _a.getExternalStyleSheets;
            requestIdleCallback(getExternalStyleSheets);
            requestIdleCallback(getExternalScripts);
            return [2
            /*return*/
            ];
        }
      });
    });
  });
}

function prefetchAfterFirstMounted(apps, opts) {
  window.addEventListener('single-spa:first-mount', function listener() {
    var mountedApps = (0, _singleSpa.getMountedApps)();
    var notMountedApps = apps.filter(function (app) {
      return mountedApps.indexOf(app.name) === -1;
    });

    if ("development" === 'development') {
      console.log("[qiankun] prefetch starting after " + mountedApps + " mounted...", notMountedApps);
    }

    notMountedApps.forEach(function (_a) {
      var entry = _a.entry;
      return prefetch(entry, opts);
    });
    window.removeEventListener('single-spa:first-mount', listener);
  });
}

function prefetchImmediately(apps, opts) {
  if ("development" === 'development') {
    console.log('[qiankun] prefetch starting for apps...', apps);
  }

  apps.forEach(function (_a) {
    var entry = _a.entry;
    return prefetch(entry, opts);
  });
}

function doPrefetchStrategy(apps, prefetchStrategy, importEntryOpts) {
  var _this = this;

  var appsName2Apps = function appsName2Apps(names) {
    return apps.filter(function (app) {
      return names.includes(app.name);
    });
  };

  if (Array.isArray(prefetchStrategy)) {
    prefetchAfterFirstMounted(appsName2Apps(prefetchStrategy), importEntryOpts);
  } else if ((0, _isFunction2.default)(prefetchStrategy)) {
    (function () {
      return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
        var _a, _b, criticalAppNames, _c, minorAppsName;

        return (0, _tslib.__generator)(this, function (_d) {
          switch (_d.label) {
            case 0:
              return [4
              /*yield*/
              , prefetchStrategy(apps)];

            case 1:
              _a = _d.sent(), _b = _a.criticalAppNames, criticalAppNames = _b === void 0 ? [] : _b, _c = _a.minorAppsName, minorAppsName = _c === void 0 ? [] : _c;
              prefetchImmediately(appsName2Apps(criticalAppNames), importEntryOpts);
              prefetchAfterFirstMounted(appsName2Apps(minorAppsName), importEntryOpts);
              return [2
              /*return*/
              ];
          }
        });
      });
    })();
  } else {
    switch (prefetchStrategy) {
      case true:
        prefetchAfterFirstMounted(apps, importEntryOpts);
        break;

      case 'all':
        prefetchImmediately(apps, importEntryOpts);
        break;

      default:
        break;
    }
  }
}
},{"lodash/isFunction":"node_modules/qiankun/node_modules/lodash/isFunction.js","tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","import-html-entry":"node_modules/qiankun/node_modules/import-html-entry/esm/index.js","single-spa":"node_modules/qiankun/node_modules/single-spa/lib/esm/single-spa.min.js"}],"node_modules/qiankun/es/apis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMicroApps = registerMicroApps;
exports.loadMicroApp = loadMicroApp;
exports.start = start;
exports.frameworkConfiguration = void 0;

var _tslib = require("tslib");

var _singleSpa = require("single-spa");

var _loader = require("./loader");

var _prefetch = require("./prefetch");

var _utils = require("./utils");

window.__POWERED_BY_QIANKUN__ = true;
var microApps = []; // eslint-disable-next-line import/no-mutable-exports

var frameworkConfiguration = {};
exports.frameworkConfiguration = frameworkConfiguration;
var frameworkStartedDefer = new _utils.Deferred();

function registerMicroApps(apps, lifeCycles) {
  var _this = this; // Each app only needs to be registered once


  var unregisteredApps = apps.filter(function (app) {
    return !microApps.some(function (registeredApp) {
      return registeredApp.name === app.name;
    });
  });
  microApps = (0, _tslib.__spread)(microApps, unregisteredApps);
  unregisteredApps.forEach(function (app) {
    var name = app.name,
        activeRule = app.activeRule,
        props = app.props,
        appConfig = (0, _tslib.__rest)(app, ["name", "activeRule", "props"]);
    (0, _singleSpa.registerApplication)({
      name: name,
      app: function app() {
        return (0, _tslib.__awaiter)(_this, void 0, void 0, function () {
          return (0, _tslib.__generator)(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , frameworkStartedDefer.promise];

              case 1:
                _a.sent();

                return [2
                /*return*/
                , (0, _loader.loadApp)((0, _tslib.__assign)({
                  name: name,
                  props: props
                }, appConfig), frameworkConfiguration, lifeCycles)];
            }
          });
        });
      },
      activeWhen: activeRule,
      customProps: props
    });
  });
}

function loadMicroApp(app, configuration) {
  if (configuration === void 0) {
    configuration = frameworkConfiguration;
  }

  var props = app.props,
      appConfig = (0, _tslib.__rest)(app, ["props"]);
  return (0, _singleSpa.mountRootParcel)(function () {
    return (0, _loader.loadApp)(appConfig, configuration);
  }, (0, _tslib.__assign)({
    domElement: document.createElement('div')
  }, props));
}

function start(opts) {
  if (opts === void 0) {
    opts = {};
  }

  exports.frameworkConfiguration = frameworkConfiguration = (0, _tslib.__assign)({
    prefetch: true,
    singular: true,
    sandbox: true
  }, opts);
  var prefetch = frameworkConfiguration.prefetch,
      sandbox = frameworkConfiguration.sandbox,
      singular = frameworkConfiguration.singular,
      urlRerouteOnly = frameworkConfiguration.urlRerouteOnly,
      importEntryOpts = (0, _tslib.__rest)(frameworkConfiguration, ["prefetch", "sandbox", "singular", "urlRerouteOnly"]);

  if (prefetch) {
    (0, _prefetch.doPrefetchStrategy)(microApps, prefetch, importEntryOpts);
  }

  if (sandbox) {
    if (!window.Proxy) {
      console.warn('[qiankun] Miss window.Proxy, proxySandbox will degenerate into snapshotSandbox'); // 快照沙箱不支持非 singular 模式

      if (!singular) {
        console.error('[qiankun] singular is forced to be true when sandbox enable but proxySandbox unavailable');
        frameworkConfiguration.singular = true;
      }
    }
  }

  (0, _singleSpa.start)({
    urlRerouteOnly: urlRerouteOnly
  });
  frameworkStartedDefer.resolve();
}
},{"tslib":"node_modules/qiankun/node_modules/tslib/tslib.es6.js","single-spa":"node_modules/qiankun/node_modules/single-spa/lib/esm/single-spa.min.js","./loader":"node_modules/qiankun/es/loader.js","./prefetch":"node_modules/qiankun/es/prefetch.js","./utils":"node_modules/qiankun/es/utils.js"}],"node_modules/qiankun/es/errorHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGlobalUncaughtErrorHandler = addGlobalUncaughtErrorHandler;
exports.removeGlobalUncaughtErrorHandler = removeGlobalUncaughtErrorHandler;
Object.defineProperty(exports, "addErrorHandler", {
  enumerable: true,
  get: function () {
    return _singleSpa.addErrorHandler;
  }
});
Object.defineProperty(exports, "removeErrorHandler", {
  enumerable: true,
  get: function () {
    return _singleSpa.removeErrorHandler;
  }
});

var _singleSpa = require("single-spa");

/**
 * @author Kuitos
 * @since 2020-02-21
 */
function addGlobalUncaughtErrorHandler(errorHandler) {
  window.addEventListener('error', errorHandler);
  window.addEventListener('unhandledrejection', errorHandler);
}

function removeGlobalUncaughtErrorHandler(errorHandler) {
  window.removeEventListener('error', errorHandler);
  window.removeEventListener('unhandledrejection', errorHandler);
}
},{"single-spa":"node_modules/qiankun/node_modules/single-spa/lib/esm/single-spa.min.js"}],"node_modules/qiankun/es/effects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultMountApp = setDefaultMountApp;
exports.runDefaultMountEffects = runDefaultMountEffects;
exports.runAfterFirstMounted = runAfterFirstMounted;

var _singleSpa = require("single-spa");

/**
 * @author Kuitos
 * @since 2019-02-19
 */
var firstMountLogLabel = '[qiankun] first app mounted';

if ("development" === 'development') {
  console.time(firstMountLogLabel);
}

function setDefaultMountApp(defaultAppLink) {
  // can not use addEventListener once option for ie support
  window.addEventListener('single-spa:no-app-change', function listener() {
    var mountedApps = (0, _singleSpa.getMountedApps)();

    if (!mountedApps.length) {
      (0, _singleSpa.navigateToUrl)(defaultAppLink);
    }

    window.removeEventListener('single-spa:no-app-change', listener);
  });
}

function runDefaultMountEffects(defaultAppLink) {
  console.warn('[qiankun] runDefaultMountEffects will be removed in next version, please use setDefaultMountApp instead');
  setDefaultMountApp(defaultAppLink);
}

function runAfterFirstMounted(effect) {
  // can not use addEventListener once option for ie support
  window.addEventListener('single-spa:first-mount', function listener() {
    if ("development" === 'development') {
      console.timeEnd(firstMountLogLabel);
    }

    effect();
    window.removeEventListener('single-spa:first-mount', listener);
  });
}
},{"single-spa":"node_modules/qiankun/node_modules/single-spa/lib/esm/single-spa.min.js"}],"node_modules/qiankun/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  loadMicroApp: true,
  registerMicroApps: true,
  start: true,
  initGlobalState: true,
  prefetchApps: true
};
Object.defineProperty(exports, "loadMicroApp", {
  enumerable: true,
  get: function () {
    return _apis.loadMicroApp;
  }
});
Object.defineProperty(exports, "registerMicroApps", {
  enumerable: true,
  get: function () {
    return _apis.registerMicroApps;
  }
});
Object.defineProperty(exports, "start", {
  enumerable: true,
  get: function () {
    return _apis.start;
  }
});
Object.defineProperty(exports, "initGlobalState", {
  enumerable: true,
  get: function () {
    return _globalState.initGlobalState;
  }
});
Object.defineProperty(exports, "prefetchApps", {
  enumerable: true,
  get: function () {
    return _prefetch.prefetchImmediately;
  }
});

var _apis = require("./apis");

var _globalState = require("./globalState");

var _errorHandler = require("./errorHandler");

Object.keys(_errorHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _errorHandler[key];
    }
  });
});

var _effects = require("./effects");

Object.keys(_effects).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _effects[key];
    }
  });
});

var _prefetch = require("./prefetch");
},{"./apis":"node_modules/qiankun/es/apis.js","./globalState":"node_modules/qiankun/es/globalState.js","./errorHandler":"node_modules/qiankun/es/errorHandler.js","./effects":"node_modules/qiankun/es/effects.js","./prefetch":"node_modules/qiankun/es/prefetch.js"}],"node_modules/.1.12.4@parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/.1.12.4@parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/.1.12.4@parcel-bundler/src/builtins/bundle-url.js"}],"index.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/.1.12.4@parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _qiankun = require("qiankun");

require("./index.less");

/**
 * Step2 注册子应用
 */
(0, _qiankun.registerMicroApps)([{
  name: 'html',
  entry: '//localhost:7100',
  container: '#subapp-container',
  activeRule: '/'
}], {
  beforeLoad: [function (app) {
    console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
  }],
  beforeMount: [function (app) {
    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
  }],
  afterUnmount: [function (app) {
    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
  }]
});

var _initGlobalState = (0, _qiankun.initGlobalState)({
  user: 'qiankun'
}),
    onGlobalStateChange = _initGlobalState.onGlobalStateChange,
    setGlobalState = _initGlobalState.setGlobalState;

onGlobalStateChange(function (value, prev) {
  return console.log('[onGlobalStateChange - master]:', value, prev);
});
setGlobalState({
  ignore: 'master',
  user: {
    name: 'master'
  }
});
/**
 * Step3 设置默认进入的子应用
 */

(0, _qiankun.setDefaultMountApp)('/');
/**
 * Step4 启动应用
 */

(0, _qiankun.start)();
(0, _qiankun.runAfterFirstMounted)(function () {
  console.log('[MainApp] first app mounted');
});
},{"qiankun":"node_modules/qiankun/es/index.js","./index.less":"index.less"}],"node_modules/.1.12.4@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58560" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/.1.12.4@parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/main.e31bb0bc.js.map