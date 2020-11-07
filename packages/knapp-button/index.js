(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // ../../node_modules/object-assign/index.js
  var require_object_assign = __commonJS((exports, module) => {
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  });

  // ../../node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS((exports) => {
    /** @license React v16.14.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    "use strict";
    var l = require_object_assign();
    var n = typeof Symbol === "function" && Symbol.for;
    var p = n ? Symbol.for("react.element") : 60103;
    var q = n ? Symbol.for("react.portal") : 60106;
    var r = n ? Symbol.for("react.fragment") : 60107;
    var t = n ? Symbol.for("react.strict_mode") : 60108;
    var u = n ? Symbol.for("react.profiler") : 60114;
    var v = n ? Symbol.for("react.provider") : 60109;
    var w = n ? Symbol.for("react.context") : 60110;
    var x = n ? Symbol.for("react.forward_ref") : 60112;
    var y = n ? Symbol.for("react.suspense") : 60113;
    var z = n ? Symbol.for("react.memo") : 60115;
    var A = n ? Symbol.for("react.lazy") : 60116;
    var B = typeof Symbol === "function" && Symbol.iterator;
    function C(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var D = {isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    }};
    var E = {};
    function F(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = E;
      this.updater = c || D;
    }
    F.prototype.isReactComponent = {};
    F.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error(C(85));
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    F.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function G() {
    }
    G.prototype = F.prototype;
    function H(a, b, c) {
      this.props = a;
      this.context = b;
      this.refs = E;
      this.updater = c || D;
    }
    var I = H.prototype = new G();
    I.constructor = H;
    l(I, F.prototype);
    I.isPureReactComponent = true;
    var J = {current: null};
    var K = Object.prototype.hasOwnProperty;
    var L = {key: true, ref: true, __self: true, __source: true};
    function M(a, b, c) {
      var e, d = {}, g = null, k = null;
      if (b != null)
        for (e in b.ref !== void 0 && (k = b.ref), b.key !== void 0 && (g = "" + b.key), b)
          K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
      var f = arguments.length - 2;
      if (f === 1)
        d.children = c;
      else if (1 < f) {
        for (var h = Array(f), m = 0; m < f; m++)
          h[m] = arguments[m + 2];
        d.children = h;
      }
      if (a && a.defaultProps)
        for (e in f = a.defaultProps, f)
          d[e] === void 0 && (d[e] = f[e]);
      return {$$typeof: p, type: a, key: g, ref: k, props: d, _owner: J.current};
    }
    function N(a, b) {
      return {$$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
    }
    function O(a) {
      return typeof a === "object" && a !== null && a.$$typeof === p;
    }
    function escape(a) {
      var b = {"=": "=0", ":": "=2"};
      return "$" + ("" + a).replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    var Q = [];
    function R(a, b, c, e) {
      if (Q.length) {
        var d = Q.pop();
        d.result = a;
        d.keyPrefix = b;
        d.func = c;
        d.context = e;
        d.count = 0;
        return d;
      }
      return {result: a, keyPrefix: b, func: c, context: e, count: 0};
    }
    function S(a) {
      a.result = null;
      a.keyPrefix = null;
      a.func = null;
      a.context = null;
      a.count = 0;
      10 > Q.length && Q.push(a);
    }
    function T(a, b, c, e) {
      var d = typeof a;
      if (d === "undefined" || d === "boolean")
        a = null;
      var g = false;
      if (a === null)
        g = true;
      else
        switch (d) {
          case "string":
          case "number":
            g = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case p:
              case q:
                g = true;
            }
        }
      if (g)
        return c(e, a, b === "" ? "." + U(a, 0) : b), 1;
      g = 0;
      b = b === "" ? "." : b + ":";
      if (Array.isArray(a))
        for (var k = 0; k < a.length; k++) {
          d = a[k];
          var f = b + U(d, k);
          g += T(d, f, c, e);
        }
      else if (a === null || typeof a !== "object" ? f = null : (f = B && a[B] || a["@@iterator"], f = typeof f === "function" ? f : null), typeof f === "function")
        for (a = f.call(a), k = 0; !(d = a.next()).done; )
          d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
      else if (d === "object")
        throw c = "" + a, Error(C(31, c === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
      return g;
    }
    function V(a, b, c) {
      return a == null ? 0 : T(a, "", b, c);
    }
    function U(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape(a.key) : b.toString(36);
    }
    function W(a, b) {
      a.func.call(a.context, b, a.count++);
    }
    function aa(a, b, c) {
      var e = a.result, d = a.keyPrefix;
      a = a.func.call(a.context, b, a.count++);
      Array.isArray(a) ? X(a, e, c, function(a2) {
        return a2;
      }) : a != null && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
    }
    function X(a, b, c, e, d) {
      var g = "";
      c != null && (g = ("" + c).replace(P, "$&/") + "/");
      b = R(b, g, e, d);
      V(a, aa, b);
      S(b);
    }
    var Y = {current: null};
    function Z() {
      var a = Y.current;
      if (a === null)
        throw Error(C(321));
      return a;
    }
    var ba = {ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: {suspense: null}, ReactCurrentOwner: J, IsSomeRendererActing: {current: false}, assign: l};
    exports.Children = {map: function(a, b, c) {
      if (a == null)
        return a;
      var e = [];
      X(a, e, null, b, c);
      return e;
    }, forEach: function(a, b, c) {
      if (a == null)
        return a;
      b = R(null, null, b, c);
      V(a, W, b);
      S(b);
    }, count: function(a) {
      return V(a, function() {
        return null;
      }, null);
    }, toArray: function(a) {
      var b = [];
      X(a, b, null, function(a2) {
        return a2;
      });
      return b;
    }, only: function(a) {
      if (!O(a))
        throw Error(C(143));
      return a;
    }};
    exports.Component = F;
    exports.Fragment = r;
    exports.Profiler = u;
    exports.PureComponent = H;
    exports.StrictMode = t;
    exports.Suspense = y;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
    exports.cloneElement = function(a, b, c) {
      if (a === null || a === void 0)
        throw Error(C(267, a));
      var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner;
      if (b != null) {
        b.ref !== void 0 && (g = b.ref, k = J.current);
        b.key !== void 0 && (d = "" + b.key);
        if (a.type && a.type.defaultProps)
          var f = a.type.defaultProps;
        for (h in b)
          K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = b[h] === void 0 && f !== void 0 ? f[h] : b[h]);
      }
      var h = arguments.length - 2;
      if (h === 1)
        e.children = c;
      else if (1 < h) {
        f = Array(h);
        for (var m = 0; m < h; m++)
          f[m] = arguments[m + 2];
        e.children = f;
      }
      return {
        $$typeof: p,
        type: a.type,
        key: d,
        ref: g,
        props: e,
        _owner: k
      };
    };
    exports.createContext = function(a, b) {
      b === void 0 && (b = null);
      a = {$$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
      a.Provider = {$$typeof: v, _context: a};
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return {current: null};
    };
    exports.forwardRef = function(a) {
      return {$$typeof: x, render: a};
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return {$$typeof: A, _ctor: a, _status: -1, _result: null};
    };
    exports.memo = function(a, b) {
      return {$$typeof: z, type: a, compare: b === void 0 ? null : b};
    };
    exports.useCallback = function(a, b) {
      return Z().useCallback(a, b);
    };
    exports.useContext = function(a, b) {
      return Z().useContext(a, b);
    };
    exports.useDebugValue = function() {
    };
    exports.useEffect = function(a, b) {
      return Z().useEffect(a, b);
    };
    exports.useImperativeHandle = function(a, b, c) {
      return Z().useImperativeHandle(a, b, c);
    };
    exports.useLayoutEffect = function(a, b) {
      return Z().useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return Z().useMemo(a, b);
    };
    exports.useReducer = function(a, b, c) {
      return Z().useReducer(a, b, c);
    };
    exports.useRef = function(a) {
      return Z().useRef(a);
    };
    exports.useState = function(a) {
      return Z().useState(a);
    };
    exports.version = "16.14.0";
  });

  // ../../node_modules/react/index.js
  var require_react = __commonJS((exports, module) => {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  });

  // index.tsx
  var require_knapp_button = __commonJS((exports) => {
    __export(exports, {
      Button: () => Button
    });
    const react = __toModule(require_react());
    const Button = () => {
      return /* @__PURE__ */ react.default.createElement("button", {
        onClick: () => console.log("Clicked!")
      }, "Hello world");
    };
  });
  require_knapp_button();
})();
