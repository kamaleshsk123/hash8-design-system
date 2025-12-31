import * as u from "react";
import P, { forwardRef as vr, createElement as En, useState as yt, createContext as Vn, useContext as Tn, useEffect as ft, useLayoutEffect as Ii, useRef as it, useCallback as dt, isValidElement as Ua, PureComponent as $i, useImperativeHandle as Lc, useMemo as Fc, cloneElement as s_ } from "react";
import * as ea from "react-dom";
import Bc from "react-dom";
var Na = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nl = { exports: {} }, go = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function l_() {
  if (Zd) return go;
  Zd = 1;
  var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var d, p = {}, m = null, h = null;
    c !== void 0 && (m = "" + c), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (d in l) r.call(l, d) && !a.hasOwnProperty(d) && (p[d] = l[d]);
    if (s && s.defaultProps) for (d in l = s.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: s, key: m, ref: h, props: p, _owner: o.current };
  }
  return go.Fragment = n, go.jsx = i, go.jsxs = i, go;
}
var bo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;
function c_() {
  return Qd || (Qd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = P, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, v = "@@iterator";
    function g(R) {
      if (R === null || typeof R != "object")
        return null;
      var ee = b && R[b] || R[v];
      return typeof ee == "function" ? ee : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(R) {
      {
        for (var ee = arguments.length, ie = new Array(ee > 1 ? ee - 1 : 0), he = 1; he < ee; he++)
          ie[he - 1] = arguments[he];
        x("error", R, ie);
      }
    }
    function x(R, ee, ie) {
      {
        var he = y.ReactDebugCurrentFrame, Me = he.getStackAddendum();
        Me !== "" && (ee += "%s", ie = ie.concat([Me]));
        var ke = ie.map(function(_e) {
          return String(_e);
        });
        ke.unshift("Warning: " + ee), Function.prototype.apply.call(console[R], console, ke);
      }
    }
    var S = !1, C = !1, E = !1, _ = !1, O = !1, N;
    N = Symbol.for("react.module.reference");
    function B(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === a || O || R === o || R === c || R === d || _ || R === h || S || C || E || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === p || R.$$typeof === i || R.$$typeof === s || R.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === N || R.getModuleId !== void 0));
    }
    function M(R, ee, ie) {
      var he = R.displayName;
      if (he)
        return he;
      var Me = ee.displayName || ee.name || "";
      return Me !== "" ? ie + "(" + Me + ")" : ie;
    }
    function k(R) {
      return R.displayName || "Context";
    }
    function V(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case s:
            var ee = R;
            return k(ee) + ".Consumer";
          case i:
            var ie = R;
            return k(ie._context) + ".Provider";
          case l:
            return M(R, R.render, "ForwardRef");
          case p:
            var he = R.displayName || null;
            return he !== null ? he : V(R.type) || "Memo";
          case m: {
            var Me = R, ke = Me._payload, _e = Me._init;
            try {
              return V(_e(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, K = 0, G, F, I, L, ne, re, j;
    function D() {
    }
    D.__reactDisabledLog = !0;
    function H() {
      {
        if (K === 0) {
          G = console.log, F = console.info, I = console.warn, L = console.error, ne = console.group, re = console.groupCollapsed, j = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: D,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        K++;
      }
    }
    function U() {
      {
        if (K--, K === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, R, {
              value: G
            }),
            info: $({}, R, {
              value: F
            }),
            warn: $({}, R, {
              value: I
            }),
            error: $({}, R, {
              value: L
            }),
            group: $({}, R, {
              value: ne
            }),
            groupCollapsed: $({}, R, {
              value: re
            }),
            groupEnd: $({}, R, {
              value: j
            })
          });
        }
        K < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = y.ReactCurrentDispatcher, A;
    function Y(R, ee, ie) {
      {
        if (A === void 0)
          try {
            throw Error();
          } catch (Me) {
            var he = Me.stack.trim().match(/\n( *(at )?)/);
            A = he && he[1] || "";
          }
        return `
` + A + R;
      }
    }
    var Q = !1, te;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new oe();
    }
    function J(R, ee) {
      if (!R || Q)
        return "";
      {
        var ie = te.get(R);
        if (ie !== void 0)
          return ie;
      }
      var he;
      Q = !0;
      var Me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ke;
      ke = X.current, X.current = null, H();
      try {
        if (ee) {
          var _e = function() {
            throw Error();
          };
          if (Object.defineProperty(_e.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_e, []);
            } catch (St) {
              he = St;
            }
            Reflect.construct(R, [], _e);
          } else {
            try {
              _e.call();
            } catch (St) {
              he = St;
            }
            R.call(_e.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            he = St;
          }
          R();
        }
      } catch (St) {
        if (St && he && typeof St.stack == "string") {
          for (var Ce = St.stack.split(`
`), gt = he.stack.split(`
`), et = Ce.length - 1, nt = gt.length - 1; et >= 1 && nt >= 0 && Ce[et] !== gt[nt]; )
            nt--;
          for (; et >= 1 && nt >= 0; et--, nt--)
            if (Ce[et] !== gt[nt]) {
              if (et !== 1 || nt !== 1)
                do
                  if (et--, nt--, nt < 0 || Ce[et] !== gt[nt]) {
                    var jt = `
` + Ce[et].replace(" at new ", " at ");
                    return R.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", R.displayName)), typeof R == "function" && te.set(R, jt), jt;
                  }
                while (et >= 1 && nt >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = ke, U(), Error.prepareStackTrace = Me;
      }
      var Pr = R ? R.displayName || R.name : "", Qn = Pr ? Y(Pr) : "";
      return typeof R == "function" && te.set(R, Qn), Qn;
    }
    function q(R, ee, ie) {
      return J(R, !1);
    }
    function z(R) {
      var ee = R.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function ae(R, ee, ie) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return J(R, z(R));
      if (typeof R == "string")
        return Y(R);
      switch (R) {
        case c:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case l:
            return q(R.render);
          case p:
            return ae(R.type, ee, ie);
          case m: {
            var he = R, Me = he._payload, ke = he._init;
            try {
              return ae(ke(Me), ee, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, ve = {}, pe = y.ReactDebugCurrentFrame;
    function ue(R) {
      if (R) {
        var ee = R._owner, ie = ae(R.type, R._source, ee ? ee.type : null);
        pe.setExtraStackFrame(ie);
      } else
        pe.setExtraStackFrame(null);
    }
    function Re(R, ee, ie, he, Me) {
      {
        var ke = Function.call.bind(ce);
        for (var _e in R)
          if (ke(R, _e)) {
            var Ce = void 0;
            try {
              if (typeof R[_e] != "function") {
                var gt = Error((he || "React class") + ": " + ie + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              Ce = R[_e](ee, _e, he, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Ce = et;
            }
            Ce && !(Ce instanceof Error) && (ue(Me), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", ie, _e, typeof Ce), ue(null)), Ce instanceof Error && !(Ce.message in ve) && (ve[Ce.message] = !0, ue(Me), w("Failed %s type: %s", ie, Ce.message), ue(null));
          }
      }
    }
    var Be = Array.isArray;
    function Ne(R) {
      return Be(R);
    }
    function We(R) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, ie = ee && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ie;
      }
    }
    function rt(R) {
      try {
        return st(R), !1;
      } catch {
        return !0;
      }
    }
    function st(R) {
      return "" + R;
    }
    function Ie(R) {
      if (rt(R))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(R)), st(R);
    }
    var $e = y.ReactCurrentOwner, an = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, lt, ct;
    ct = {};
    function Tt(R) {
      if (ce.call(R, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function tt(R) {
      if (ce.call(R, "key")) {
        var ee = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function ut(R, ee) {
      if (typeof R.ref == "string" && $e.current && ee && $e.current.stateNode !== ee) {
        var ie = V($e.current.type);
        ct[ie] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V($e.current.type), R.ref), ct[ie] = !0);
      }
    }
    function sn(R, ee) {
      {
        var ie = function() {
          wt || (wt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function It(R, ee) {
      {
        var ie = function() {
          lt || (lt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ie.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var Zn = function(R, ee, ie, he, Me, ke, _e) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: ee,
        ref: ie,
        props: _e,
        // Record the component responsible for creating this element.
        _owner: ke
      };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function de(R, ee, ie, he, Me) {
      {
        var ke, _e = {}, Ce = null, gt = null;
        ie !== void 0 && (Ie(ie), Ce = "" + ie), tt(ee) && (Ie(ee.key), Ce = "" + ee.key), Tt(ee) && (gt = ee.ref, ut(ee, Me));
        for (ke in ee)
          ce.call(ee, ke) && !an.hasOwnProperty(ke) && (_e[ke] = ee[ke]);
        if (R && R.defaultProps) {
          var et = R.defaultProps;
          for (ke in et)
            _e[ke] === void 0 && (_e[ke] = et[ke]);
        }
        if (Ce || gt) {
          var nt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ce && sn(_e, nt), gt && It(_e, nt);
        }
        return Zn(R, Ce, gt, Me, he, $e.current, _e);
      }
    }
    var we = y.ReactCurrentOwner, Ee = y.ReactDebugCurrentFrame;
    function xe(R) {
      if (R) {
        var ee = R._owner, ie = ae(R.type, R._source, ee ? ee.type : null);
        Ee.setExtraStackFrame(ie);
      } else
        Ee.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function je(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function Ze() {
      {
        if (we.current) {
          var R = V(we.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function le(R) {
      return "";
    }
    var me = {};
    function Se(R) {
      {
        var ee = Ze();
        if (!ee) {
          var ie = typeof R == "string" ? R : R.displayName || R.name;
          ie && (ee = `

Check the top-level render call using <` + ie + ">.");
        }
        return ee;
      }
    }
    function qe(R, ee) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ie = Se(ee);
        if (me[ie])
          return;
        me[ie] = !0;
        var he = "";
        R && R._owner && R._owner !== we.current && (he = " It was passed a child from " + V(R._owner.type) + "."), xe(R), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, he), xe(null);
      }
    }
    function Ve(R, ee) {
      {
        if (typeof R != "object")
          return;
        if (Ne(R))
          for (var ie = 0; ie < R.length; ie++) {
            var he = R[ie];
            je(he) && qe(he, ee);
          }
        else if (je(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Me = g(R);
          if (typeof Me == "function" && Me !== R.entries)
            for (var ke = Me.call(R), _e; !(_e = ke.next()).done; )
              je(_e.value) && qe(_e.value, ee);
        }
      }
    }
    function vt(R) {
      {
        var ee = R.type;
        if (ee == null || typeof ee == "string")
          return;
        var ie;
        if (typeof ee == "function")
          ie = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === p))
          ie = ee.propTypes;
        else
          return;
        if (ie) {
          var he = V(ee);
          Re(ie, R.props, "prop", he, R);
        } else if (ee.PropTypes !== void 0 && !ye) {
          ye = !0;
          var Me = V(ee);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Me || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $t(R) {
      {
        for (var ee = Object.keys(R.props), ie = 0; ie < ee.length; ie++) {
          var he = ee[ie];
          if (he !== "children" && he !== "key") {
            xe(R), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), xe(null);
            break;
          }
        }
        R.ref !== null && (xe(R), w("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    var xt = {};
    function Wt(R, ee, ie, he, Me, ke) {
      {
        var _e = B(R);
        if (!_e) {
          var Ce = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = le();
          gt ? Ce += gt : Ce += Ze();
          var et;
          R === null ? et = "null" : Ne(R) ? et = "array" : R !== void 0 && R.$$typeof === t ? (et = "<" + (V(R.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : et = typeof R, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Ce);
        }
        var nt = de(R, ee, ie, Me, ke);
        if (nt == null)
          return nt;
        if (_e) {
          var jt = ee.children;
          if (jt !== void 0)
            if (he)
              if (Ne(jt)) {
                for (var Pr = 0; Pr < jt.length; Pr++)
                  Ve(jt[Pr], R);
                Object.freeze && Object.freeze(jt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(jt, R);
        }
        if (ce.call(ee, "key")) {
          var Qn = V(R), St = Object.keys(ee).filter(function(i_) {
            return i_ !== "key";
          }), js = St.length > 0 ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xt[Qn + js]) {
            var a_ = St.length > 0 ? "{" + St.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, js, Qn, a_, Qn), xt[Qn + js] = !0;
          }
        }
        return R === r ? $t(nt) : vt(nt), nt;
      }
    }
    function t_(R, ee, ie) {
      return Wt(R, ee, ie, !0);
    }
    function n_(R, ee, ie) {
      return Wt(R, ee, ie, !1);
    }
    var r_ = n_, o_ = t_;
    bo.Fragment = r, bo.jsx = r_, bo.jsxs = o_;
  }()), bo;
}
process.env.NODE_ENV === "production" ? Nl.exports = l_() : Nl.exports = c_();
var f = Nl.exports;
function u_(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: i, ...s } = a, l = u.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ f.jsx(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const i = u.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Fe(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = u.createContext(i), l = n.length;
    n = [...n, i];
    const c = (p) => {
      var y;
      const { scope: m, children: h, ...b } = p, v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, g = u.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ f.jsx(v.Provider, { value: g, children: h });
    };
    c.displayName = a + "Provider";
    function d(p, m) {
      var v;
      const h = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || s, b = u.useContext(h);
      if (b) return b;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [c, d];
  }
  const o = () => {
    const a = n.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, d_(o, ...t)];
}
function d_(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: l, scopeName: c }) => {
        const p = l(a)[`__scope${c}`];
        return { ...s, ...p };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ef(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function fn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = ef(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : ef(e[o], null);
        }
      };
  };
}
function se(...e) {
  return u.useCallback(fn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  const t = /* @__PURE__ */ f_(e), n = u.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = u.Children.toArray(a), l = s.find(p_);
    if (l) {
      const c = l.props.children, d = s.map((p) => p === l ? u.Children.count(c) > 1 ? u.Children.only(null) : u.isValidElement(c) ? c.props.children : null : p);
      return /* @__PURE__ */ f.jsx(t, { ...i, ref: o, children: u.isValidElement(c) ? u.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ f.jsx(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Gn = /* @__PURE__ */ Bn("Slot");
// @__NO_SIDE_EFFECTS__
function f_(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const i = h_(o), s = m_(a, o.props);
      return o.type !== u.Fragment && (s.ref = r ? fn(r, i) : i), u.cloneElement(o, s);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Rm = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Nm(e) {
  const t = ({ children: n }) => /* @__PURE__ */ f.jsx(f.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Rm, t;
}
function p_(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Rm;
}
function m_(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const l = a(...s);
      return o(...s), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function h_(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Mn(e) {
  const t = e + "CollectionProvider", [n, r] = Fe(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: g, children: y } = v, w = P.useRef(null), x = P.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f.jsx(o, { scope: g, itemMap: x, collectionRef: w, children: y });
  };
  i.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ Bn(s), c = P.forwardRef(
    (v, g) => {
      const { scope: y, children: w } = v, x = a(s, y), S = se(g, x.collectionRef);
      return /* @__PURE__ */ f.jsx(l, { ref: S, children: w });
    }
  );
  c.displayName = s;
  const d = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Bn(d), h = P.forwardRef(
    (v, g) => {
      const { scope: y, children: w, ...x } = v, S = P.useRef(null), C = se(g, S), E = a(d, y);
      return P.useEffect(() => (E.itemMap.set(S, { ref: S, ...x }), () => void E.itemMap.delete(S))), /* @__PURE__ */ f.jsx(m, { [p]: "", ref: C, children: w });
    }
  );
  h.displayName = d;
  function b(v) {
    const g = a(e + "CollectionConsumer", v);
    return P.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${p}]`));
      return Array.from(g.itemMap.values()).sort(
        (E, _) => x.indexOf(E.ref.current) - x.indexOf(_.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: h },
    b,
    r
  ];
}
function W(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Ke = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, v_ = u[" useInsertionEffect ".trim().toString()] || Ke;
function ze({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = g_({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const d = u.useRef(e !== void 0);
    u.useEffect(() => {
      const p = d.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = s;
    }, [s, r]);
  }
  const c = u.useCallback(
    (d) => {
      var p;
      if (s) {
        const m = b_(d) ? d(e) : d;
        m !== e && ((p = i.current) == null || p.call(i, m));
      } else
        a(d);
    },
    [s, e, a, i]
  );
  return [l, c];
}
function g_({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return v_(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var i;
    o.current !== n && ((i = a.current) == null || i.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function b_(e) {
  return typeof e == "function";
}
var y_ = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Z = y_.reduce((e, t) => {
  const n = /* @__PURE__ */ Bn(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f.jsx(l, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function jo(e, t) {
  e && ea.flushSync(() => e.dispatchEvent(t));
}
function w_(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ye = (e) => {
  const { present: t, children: n } = e, r = x_(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = se(r.ref, S_(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Ye.displayName = "Presence";
function x_(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, l] = w_(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    const c = Ta(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), Ke(() => {
    const c = r.current, d = o.current;
    if (d !== e) {
      const m = a.current, h = Ta(c);
      e ? l("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(d && m !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ke(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, p = (h) => {
        const v = Ta(r.current).includes(h.animationName);
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (h) => {
        h.target === t && (a.current = Ta(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: u.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function Ta(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function S_(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var C_ = u[" useId ".trim().toString()] || (() => {
}), __ = 0;
function Le(e) {
  const [t, n] = u.useState(C_());
  return Ke(() => {
    n((r) => r ?? String(__++));
  }, [e]), t ? `radix-${t}` : "";
}
var ji = "Collapsible", [E_, Tm] = Fe(ji), [P_, zc] = E_(ji), Mm = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...s
    } = e, [l, c] = ze({
      prop: r,
      defaultProp: o ?? !1,
      onChange: i,
      caller: ji
    });
    return /* @__PURE__ */ f.jsx(
      P_,
      {
        scope: n,
        disabled: a,
        contentId: Le(),
        open: l,
        onOpenToggle: u.useCallback(() => c((d) => !d), [c]),
        children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            "data-state": Gc(l),
            "data-disabled": a ? "" : void 0,
            ...s,
            ref: t
          }
        )
      }
    );
  }
);
Mm.displayName = ji;
var Om = "CollapsibleTrigger", Hc = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = zc(Om, n);
    return /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Gc(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: W(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Hc.displayName = Om;
var Wc = "CollapsibleContent", Vc = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = zc(Wc, e.__scopeCollapsible);
    return /* @__PURE__ */ f.jsx(Ye, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ f.jsx(R_, { ...r, ref: t, present: a }) });
  }
);
Vc.displayName = Wc;
var R_ = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, i = zc(Wc, n), [s, l] = u.useState(r), c = u.useRef(null), d = se(t, c), p = u.useRef(0), m = p.current, h = u.useRef(0), b = h.current, v = i.open || s, g = u.useRef(v), y = u.useRef(void 0);
  return u.useEffect(() => {
    const w = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(w);
  }, []), Ke(() => {
    const w = c.current;
    if (w) {
      y.current = y.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const x = w.getBoundingClientRect();
      p.current = x.height, h.current = x.width, g.current || (w.style.transitionDuration = y.current.transitionDuration, w.style.animationName = y.current.animationName), l(r);
    }
  }, [i.open, r]), /* @__PURE__ */ f.jsx(
    Z.div,
    {
      "data-state": Gc(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...a,
      ref: d,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Gc(e) {
  return e ? "open" : "closed";
}
var Am = Mm, N_ = Hc, T_ = Vc, M_ = u.createContext(void 0);
function Qt(e) {
  const t = u.useContext(M_);
  return e || t || "ltr";
}
var en = "Accordion", O_ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Uc, A_, D_] = Mn(en), [ki, Q9] = Fe(en, [
  D_,
  Tm
]), Kc = Tm(), Dm = P.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ f.jsx(Uc.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ f.jsx(k_, { ...a, ref: t }) : /* @__PURE__ */ f.jsx(j_, { ...o, ref: t }) });
  }
);
Dm.displayName = en;
var [Im, I_] = ki(en), [$m, $_] = ki(
  en,
  { collapsible: !1 }
), j_ = P.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...i
    } = e, [s, l] = ze({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: en
    });
    return /* @__PURE__ */ f.jsx(
      Im,
      {
        scope: e.__scopeAccordion,
        value: P.useMemo(() => s ? [s] : [], [s]),
        onItemOpen: l,
        onItemClose: P.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ f.jsx($m, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ f.jsx(jm, { ...i, ref: t }) })
      }
    );
  }
), k_ = P.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = ze({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: en
  }), l = P.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), c = P.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ f.jsx(
    Im,
    {
      scope: e.__scopeAccordion,
      value: i,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ f.jsx($m, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ f.jsx(jm, { ...a, ref: t }) })
    }
  );
}), [L_, Li] = ki(en), jm = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...i } = e, s = P.useRef(null), l = se(s, t), c = A_(n), p = Qt(o) === "ltr", m = W(e.onKeyDown, (h) => {
      var O;
      if (!O_.includes(h.key)) return;
      const b = h.target, v = c().filter((N) => {
        var B;
        return !((B = N.ref.current) != null && B.disabled);
      }), g = v.findIndex((N) => N.ref.current === b), y = v.length;
      if (g === -1) return;
      h.preventDefault();
      let w = g;
      const x = 0, S = y - 1, C = () => {
        w = g + 1, w > S && (w = x);
      }, E = () => {
        w = g - 1, w < x && (w = S);
      };
      switch (h.key) {
        case "Home":
          w = x;
          break;
        case "End":
          w = S;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? C() : E());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? E() : C());
          break;
        case "ArrowUp":
          a === "vertical" && E();
          break;
      }
      const _ = w % y;
      (O = v[_].ref.current) == null || O.focus();
    });
    return /* @__PURE__ */ f.jsx(
      L_,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ f.jsx(Uc.Slot, { scope: n, children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            ...i,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : m
          }
        ) })
      }
    );
  }
), ti = "AccordionItem", [F_, Yc] = ki(ti), km = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Li(ti, n), i = I_(ti, n), s = Kc(n), l = Le(), c = r && i.value.includes(r) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ f.jsx(
      F_,
      {
        scope: n,
        open: c,
        disabled: d,
        triggerId: l,
        children: /* @__PURE__ */ f.jsx(
          Am,
          {
            "data-orientation": a.orientation,
            "data-state": Wm(c),
            ...s,
            ...o,
            ref: t,
            disabled: d,
            open: c,
            onOpenChange: (p) => {
              p ? i.onItemOpen(r) : i.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
km.displayName = ti;
var Lm = "AccordionHeader", Fm = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Li(en, n), a = Yc(Lm, n);
    return /* @__PURE__ */ f.jsx(
      Z.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Wm(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Fm.displayName = Lm;
var Tl = "AccordionTrigger", Bm = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Li(en, n), a = Yc(Tl, n), i = $_(Tl, n), s = Kc(n);
    return /* @__PURE__ */ f.jsx(Uc.ItemSlot, { scope: n, children: /* @__PURE__ */ f.jsx(
      N_,
      {
        "aria-disabled": a.open && !i.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...s,
        ...r,
        ref: t
      }
    ) });
  }
);
Bm.displayName = Tl;
var zm = "AccordionContent", Hm = P.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Li(en, n), a = Yc(zm, n), i = Kc(n);
    return /* @__PURE__ */ f.jsx(
      T_,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...i,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
Hm.displayName = zm;
function Wm(e) {
  return e ? "open" : "closed";
}
var B_ = Dm, z_ = km, H_ = Fm, Vm = Bm, Gm = Hm;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Um = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var V_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G_ = vr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => En(
    "svg",
    {
      ref: l,
      ...V_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Um("lucide", o),
      ...s
    },
    [
      ...i.map(([c, d]) => En(c, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = (e, t) => {
  const n = vr(
    ({ className: r, ...o }, a) => En(G_, {
      ref: a,
      iconNode: t,
      className: Um(`lucide-${W_(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = Rt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K_ = Rt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = Rt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = Rt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Km = Rt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = Rt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y_ = Rt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = Rt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q_ = Rt("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = Rt("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X_ = Rt("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J_ = Rt("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z_ = Rt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = Rt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function qm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qm(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Pn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qm(e)) && (r && (r += " "), r += t);
  return r;
}
const Xc = "-", Q_ = (e) => {
  const t = tE(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Xc);
      return s[0] === "" && s.length !== 1 && s.shift(), Xm(s, t) || eE(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = n[i] || [];
      return s && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, Xm = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Xm(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Xc);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, tf = /^\[(.+)\]$/, eE = (e) => {
  if (tf.test(e)) {
    const t = tf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tE = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rE(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    Ml(i, r, a, t);
  }), r;
}, Ml = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : nf(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (nE(o)) {
        Ml(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      Ml(i, nf(t, a), n, r);
    });
  });
}, nf = (e, t) => {
  let n = e;
  return t.split(Xc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, nE = (e) => e.isThemeGetter, rE = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
  return [n, o];
}) : e, oE = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, Jm = "!", aE = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, i = (s) => {
    const l = [];
    let c = 0, d = 0, p;
    for (let g = 0; g < s.length; g++) {
      let y = s[g];
      if (c === 0) {
        if (y === o && (r || s.slice(g, g + a) === t)) {
          l.push(s.slice(d, g)), d = g + a;
          continue;
        }
        if (y === "/") {
          p = g;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    const m = l.length === 0 ? s : s.substring(d), h = m.startsWith(Jm), b = h ? m.substring(1) : m, v = p && p > d ? p - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, iE = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, sE = (e) => ({
  cache: oE(e.cacheSize),
  parseClassName: aE(e),
  ...Q_(e)
}), lE = /\s+/, cE = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], i = e.trim().split(lE);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const c = i[l], {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    } = n(c);
    let b = !!h, v = r(b ? m.substring(0, h) : m);
    if (!v) {
      if (!b) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = r(m), !v) {
        s = c + (s.length > 0 ? " " + s : s);
        continue;
      }
      b = !1;
    }
    const g = iE(d).join(":"), y = p ? g + Jm : g, w = y + v;
    if (a.includes(w))
      continue;
    a.push(w);
    const x = o(v, b);
    for (let S = 0; S < x.length; ++S) {
      const C = x[S];
      a.push(y + C);
    }
    s = c + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function uE() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Zm(t)) && (r && (r += " "), r += n);
  return r;
}
const Zm = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Zm(e[r])) && (n && (n += " "), n += t);
  return n;
};
function dE(e, ...t) {
  let n, r, o, a = i;
  function i(l) {
    const c = t.reduce((d, p) => p(d), e());
    return n = sE(c), r = n.cache.get, o = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const d = cE(l, n);
    return o(l, d), d;
  }
  return function() {
    return a(uE.apply(null, arguments));
  };
}
const Ge = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Qm = /^\[(?:([a-z-]+):)?(.+)\]$/i, fE = /^\d+\/\d+$/, pE = /* @__PURE__ */ new Set(["px", "full", "screen"]), mE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, gE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xn = (e) => jr(e) || pE.has(e) || fE.test(e), In = (e) => Qr(e, "length", PE), jr = (e) => !!e && !Number.isNaN(Number(e)), ks = (e) => Qr(e, "number", jr), yo = (e) => !!e && Number.isInteger(Number(e)), yE = (e) => e.endsWith("%") && jr(e.slice(0, -1)), ge = (e) => Qm.test(e), $n = (e) => mE.test(e), wE = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xE = (e) => Qr(e, wE, eh), SE = (e) => Qr(e, "position", eh), CE = /* @__PURE__ */ new Set(["image", "url"]), _E = (e) => Qr(e, CE, NE), EE = (e) => Qr(e, "", RE), wo = () => !0, Qr = (e, t, n) => {
  const r = Qm.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, PE = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hE.test(e) && !vE.test(e)
), eh = () => !1, RE = (e) => gE.test(e), NE = (e) => bE.test(e), TE = () => {
  const e = Ge("colors"), t = Ge("spacing"), n = Ge("blur"), r = Ge("brightness"), o = Ge("borderColor"), a = Ge("borderRadius"), i = Ge("borderSpacing"), s = Ge("borderWidth"), l = Ge("contrast"), c = Ge("grayscale"), d = Ge("hueRotate"), p = Ge("invert"), m = Ge("gap"), h = Ge("gradientColorStops"), b = Ge("gradientColorStopPositions"), v = Ge("inset"), g = Ge("margin"), y = Ge("opacity"), w = Ge("padding"), x = Ge("saturate"), S = Ge("scale"), C = Ge("sepia"), E = Ge("skew"), _ = Ge("space"), O = Ge("translate"), N = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", ge, t], k = () => [ge, t], V = () => ["", xn, In], $ = () => ["auto", jr, ge], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], L = () => ["", "0", ge], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], re = () => [jr, ge];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [wo],
      spacing: [xn, In],
      blur: ["none", "", $n, ge],
      brightness: re(),
      borderColor: [e],
      borderRadius: ["none", "", "full", $n, ge],
      borderSpacing: k(),
      borderWidth: V(),
      contrast: re(),
      grayscale: L(),
      hueRotate: re(),
      invert: L(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [yE, In],
      inset: M(),
      margin: M(),
      opacity: re(),
      padding: k(),
      saturate: re(),
      scale: re(),
      sepia: L(),
      skew: re(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ge]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [$n]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...K(), ge]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", yo, ge]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ge]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: L()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: L()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", yo, ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [wo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", yo, ge]
        }, ge]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [wo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [yo, ge]
        }, ge]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ge]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ge]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...I()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...I(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...I(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [_]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [_]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ge, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ge, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ge, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [$n]
        }, $n]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ge, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ge, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ge, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ge, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", $n, In]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ks]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ge]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", jr, ks]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xn, ge]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ge]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ge]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xn, In]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xn, ge]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ge]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ge]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...K(), SE]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xE]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, _E]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...G()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [xn, ge]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xn, In]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xn, In]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", $n, EE]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [wo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", $n, ge]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ge]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ge]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ge]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [yo, ge]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [O]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [O]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ge]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ge]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ge]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [xn, In, ks]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ME = /* @__PURE__ */ dE(TE);
function T(...e) {
  return ME(Pn(e));
}
const e7 = B_, OE = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(z_, { ref: n, className: T("border-b", e), ...t }));
OE.displayName = "AccordionItem";
const AE = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsx(H_, { className: "flex", children: /* @__PURE__ */ f.jsxs(
  Vm,
  {
    ref: r,
    className: T(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.jsx(Fi, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AE.displayName = Vm.displayName;
const DE = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  Gm,
  {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ f.jsx("div", { className: T("pb-4 pt-0", e), children: t })
  }
));
DE.displayName = Gm.displayName;
function Te(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function IE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var $E = "DismissableLayer", Ol = "dismissableLayer.update", jE = "dismissableLayer.pointerDownOutside", kE = "dismissableLayer.focusOutside", rf, th = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), On = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...l
    } = e, c = u.useContext(th), [d, p] = u.useState(null), m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), b = se(t, (_) => p(_)), v = Array.from(c.layers), [g] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), y = v.indexOf(g), w = d ? v.indexOf(d) : -1, x = c.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= y, C = FE((_) => {
      const O = _.target, N = [...c.branches].some((B) => B.contains(O));
      !S || N || (o == null || o(_), i == null || i(_), _.defaultPrevented || s == null || s());
    }, m), E = BE((_) => {
      const O = _.target;
      [...c.branches].some((B) => B.contains(O)) || (a == null || a(_), i == null || i(_), _.defaultPrevented || s == null || s());
    }, m);
    return IE((_) => {
      w === c.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && s && (_.preventDefault(), s()));
    }, m), u.useEffect(() => {
      if (d)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (rf = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), of(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = rf);
        };
    }, [d, m, n, c]), u.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), of());
    }, [d, c]), u.useEffect(() => {
      const _ = () => h({});
      return document.addEventListener(Ol, _), () => document.removeEventListener(Ol, _);
    }, []), /* @__PURE__ */ f.jsx(
      Z.div,
      {
        ...l,
        ref: b,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: W(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: W(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: W(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
On.displayName = $E;
var LE = "DismissableLayerBranch", nh = u.forwardRef((e, t) => {
  const n = u.useContext(th), r = u.useRef(null), o = se(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ f.jsx(Z.div, { ...e, ref: o });
});
nh.displayName = LE;
function FE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          rh(
            jE,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function BE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && rh(kE, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function of() {
  const e = new CustomEvent(Ol);
  document.dispatchEvent(e);
}
function rh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? jo(o, a) : o.dispatchEvent(a);
}
var zE = On, HE = nh, Ls = "focusScope.autoFocusOnMount", Fs = "focusScope.autoFocusOnUnmount", af = { bubbles: !1, cancelable: !0 }, WE = "FocusScope", na = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, l] = u.useState(null), c = Te(o), d = Te(a), p = u.useRef(null), m = se(t, (v) => l(v)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(x) {
        if (h.paused || !s) return;
        const S = x.target;
        s.contains(S) ? p.current = S : kn(p.current, { select: !0 });
      }, g = function(x) {
        if (h.paused || !s) return;
        const S = x.relatedTarget;
        S !== null && (s.contains(S) || kn(p.current, { select: !0 }));
      }, y = function(x) {
        if (document.activeElement === document.body)
          for (const C of x)
            C.removedNodes.length > 0 && kn(s);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const w = new MutationObserver(y);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), w.disconnect();
      };
    }
  }, [r, s, h.paused]), u.useEffect(() => {
    if (s) {
      lf.add(h);
      const v = document.activeElement;
      if (!s.contains(v)) {
        const y = new CustomEvent(Ls, af);
        s.addEventListener(Ls, c), s.dispatchEvent(y), y.defaultPrevented || (VE(qE(oh(s)), { select: !0 }), document.activeElement === v && kn(s));
      }
      return () => {
        s.removeEventListener(Ls, c), setTimeout(() => {
          const y = new CustomEvent(Fs, af);
          s.addEventListener(Fs, d), s.dispatchEvent(y), y.defaultPrevented || kn(v ?? document.body, { select: !0 }), s.removeEventListener(Fs, d), lf.remove(h);
        }, 0);
      };
    }
  }, [s, c, d, h]);
  const b = u.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, y = document.activeElement;
      if (g && y) {
        const w = v.currentTarget, [x, S] = GE(w);
        x && S ? !v.shiftKey && y === S ? (v.preventDefault(), n && kn(x, { select: !0 })) : v.shiftKey && y === x && (v.preventDefault(), n && kn(S, { select: !0 })) : y === w && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ f.jsx(Z.div, { tabIndex: -1, ...i, ref: m, onKeyDown: b });
});
na.displayName = WE;
function VE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (kn(r, { select: t }), document.activeElement !== n) return;
}
function GE(e) {
  const t = oh(e), n = sf(t, e), r = sf(t.reverse(), e);
  return [n, r];
}
function oh(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function sf(e, t) {
  for (const n of e)
    if (!UE(n, { upTo: t })) return n;
}
function UE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function KE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function kn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && KE(e) && t && e.select();
  }
}
var lf = YE();
function YE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = cf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = cf(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function cf(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qE(e) {
  return e.filter((t) => t.tagName !== "A");
}
var XE = "Portal", eo = u.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Ke(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Bc.createPortal(/* @__PURE__ */ f.jsx(Z.div, { ...r, ref: t }), i) : null;
});
eo.displayName = XE;
var Bs = 0;
function zi() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? uf()), document.body.insertAdjacentElement("beforeend", e[1] ?? uf()), Bs++, () => {
      Bs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Bs--;
    };
  }, []);
}
function uf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ln = function() {
  return ln = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ln.apply(this, arguments);
};
function ah(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function JE(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ka = "right-scroll-bar-position", Ya = "width-before-scroll-bar", ZE = "with-scroll-bars-hidden", QE = "--removed-body-scroll-bar-size";
function zs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function e1(e, t) {
  var n = yt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var t1 = typeof window < "u" ? u.useLayoutEffect : u.useEffect, df = /* @__PURE__ */ new WeakMap();
function n1(e, t) {
  var n = e1(null, function(r) {
    return e.forEach(function(o) {
      return zs(o, r);
    });
  });
  return t1(function() {
    var r = df.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || zs(s, null);
      }), a.forEach(function(s) {
        o.has(s) || zs(s, i);
      });
    }
    df.set(n, e);
  }, [e]), n;
}
function r1(e) {
  return e;
}
function o1(e, t) {
  t === void 0 && (t = r1);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var d = i;
        i = [], d.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(d) {
          i.push(d), c();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function a1(e) {
  e === void 0 && (e = {});
  var t = o1(null);
  return t.options = ln({ async: !0, ssr: !1 }, e), t;
}
var ih = function(e) {
  var t = e.sideCar, n = ah(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, ln({}, n));
};
ih.isSideCarExport = !0;
function i1(e, t) {
  return e.useMedium(t), ih;
}
var sh = a1(), Hs = function() {
}, Hi = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Hs,
    onWheelCapture: Hs,
    onTouchMoveCapture: Hs
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, d = e.enabled, p = e.shards, m = e.sideCar, h = e.noRelative, b = e.noIsolation, v = e.inert, g = e.allowPinchZoom, y = e.as, w = y === void 0 ? "div" : y, x = e.gapMode, S = ah(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = m, E = n1([n, t]), _ = ln(ln({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    d && u.createElement(C, { sideCar: sh, removeScrollBar: c, shards: p, noRelative: h, noIsolation: b, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: x }),
    i ? u.cloneElement(u.Children.only(s), ln(ln({}, _), { ref: E })) : u.createElement(w, ln({}, _, { className: l, ref: E }), s)
  );
});
Hi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hi.classNames = {
  fullWidth: Ya,
  zeroRight: Ka
};
var s1 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function l1() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = s1();
  return t && e.setAttribute("nonce", t), e;
}
function c1(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function u1(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var d1 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = l1()) && (c1(t, n), u1(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, f1 = function() {
  var e = d1();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, lh = function() {
  var e = f1(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, p1 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ws = function(e) {
  return parseInt(e || "", 10) || 0;
}, m1 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ws(n), Ws(r), Ws(o)];
}, h1 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return p1;
  var t = m1(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, v1 = lh(), kr = "data-scroll-locked", g1 = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ZE, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(kr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ka, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ya, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ka, " .").concat(Ka, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ya, " .").concat(Ya, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(kr, `] {
    `).concat(QE, ": ").concat(s, `px;
  }
`);
}, ff = function() {
  var e = parseInt(document.body.getAttribute(kr) || "0", 10);
  return isFinite(e) ? e : 0;
}, b1 = function() {
  u.useEffect(function() {
    return document.body.setAttribute(kr, (ff() + 1).toString()), function() {
      var e = ff() - 1;
      e <= 0 ? document.body.removeAttribute(kr) : document.body.setAttribute(kr, e.toString());
    };
  }, []);
}, y1 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  b1();
  var a = u.useMemo(function() {
    return h1(o);
  }, [o]);
  return u.createElement(v1, { styles: g1(a, !t, o, n ? "" : "!important") });
}, Al = !1;
if (typeof window < "u")
  try {
    var Ma = Object.defineProperty({}, "passive", {
      get: function() {
        return Al = !0, !0;
      }
    });
    window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
  } catch {
    Al = !1;
  }
var Rr = Al ? { passive: !1 } : !1, w1 = function(e) {
  return e.tagName === "TEXTAREA";
}, ch = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !w1(e) && n[t] === "visible")
  );
}, x1 = function(e) {
  return ch(e, "overflowY");
}, S1 = function(e) {
  return ch(e, "overflowX");
}, pf = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = uh(e, r);
    if (o) {
      var a = dh(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, C1 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, _1 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, uh = function(e, t) {
  return e === "v" ? x1(t) : S1(t);
}, dh = function(e, t) {
  return e === "v" ? C1(t) : _1(t);
}, E1 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, P1 = function(e, t, n, r, o) {
  var a = E1(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, l = t.contains(s), c = !1, d = i > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var h = dh(e, s), b = h[0], v = h[1], g = h[2], y = v - g - a * b;
    (b || y) && uh(e, s) && (p += y, m += b);
    var w = s.parentNode;
    s = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(m) < 1 || !o)) && (c = !0), c;
}, Oa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mf = function(e) {
  return [e.deltaX, e.deltaY];
}, hf = function(e) {
  return e && "current" in e ? e.current : e;
}, R1 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, N1 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, T1 = 0, Nr = [];
function M1(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(T1++)[0], a = u.useState(lh)[0], i = u.useRef(e);
  u.useEffect(function() {
    i.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = JE([e.lockRef.current], (e.shards || []).map(hf), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = u.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var y = Oa(v), w = n.current, x = "deltaX" in v ? v.deltaX : w[0] - y[0], S = "deltaY" in v ? v.deltaY : w[1] - y[1], C, E = v.target, _ = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && _ === "h" && E.type === "range")
      return !1;
    var O = pf(_, E);
    if (!O)
      return !0;
    if (O ? C = _ : (C = _ === "v" ? "h" : "v", O = pf(_, E)), !O)
      return !1;
    if (!r.current && "changedTouches" in v && (x || S) && (r.current = C), !C)
      return !0;
    var N = r.current || C;
    return P1(N, g, v, N === "h" ? x : S, !0);
  }, []), l = u.useCallback(function(v) {
    var g = v;
    if (!(!Nr.length || Nr[Nr.length - 1] !== a)) {
      var y = "deltaY" in g ? mf(g) : Oa(g), w = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && R1(C.delta, y);
      })[0];
      if (w && w.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!w) {
        var x = (i.current.shards || []).map(hf).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), S = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(v, g, y, w) {
    var x = { name: v, delta: g, target: y, should: w, shadowParent: O1(y) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), d = u.useCallback(function(v) {
    n.current = Oa(v), r.current = void 0;
  }, []), p = u.useCallback(function(v) {
    c(v.type, mf(v), v.target, s(v, e.lockRef.current));
  }, []), m = u.useCallback(function(v) {
    c(v.type, Oa(v), v.target, s(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Nr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, Rr), document.addEventListener("touchmove", l, Rr), document.addEventListener("touchstart", d, Rr), function() {
      Nr = Nr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, Rr), document.removeEventListener("touchmove", l, Rr), document.removeEventListener("touchstart", d, Rr);
    };
  }, []);
  var h = e.removeScrollBar, b = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    b ? u.createElement(a, { styles: N1(o) }) : null,
    h ? u.createElement(y1, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function O1(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const A1 = i1(sh, M1);
var ra = u.forwardRef(function(e, t) {
  return u.createElement(Hi, ln({}, e, { ref: t, sideCar: A1 }));
});
ra.classNames = Hi.classNames;
var D1 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tr = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Da = {}, Vs = 0, fh = function(e) {
  return e && (e.host || fh(e.parentNode));
}, I1 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fh(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $1 = function(e, t, n, r) {
  var o = I1(t, Array.isArray(e) ? e : [e]);
  Da[n] || (Da[n] = /* @__PURE__ */ new WeakMap());
  var a = Da[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(p) {
    !p || s.has(p) || (s.add(p), c(p.parentNode));
  };
  o.forEach(c);
  var d = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        d(m);
      else
        try {
          var h = m.getAttribute(r), b = h !== null && h !== "false", v = (Tr.get(m) || 0) + 1, g = (a.get(m) || 0) + 1;
          Tr.set(m, v), a.set(m, g), i.push(m), v === 1 && b && Aa.set(m, !0), g === 1 && m.setAttribute(n, "true"), b || m.setAttribute(r, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return d(t), s.clear(), Vs++, function() {
    i.forEach(function(p) {
      var m = Tr.get(p) - 1, h = a.get(p) - 1;
      Tr.set(p, m), a.set(p, h), m || (Aa.has(p) || p.removeAttribute(r), Aa.delete(p)), h || p.removeAttribute(n);
    }), Vs--, Vs || (Tr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, Wi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = D1(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), $1(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Vi = "Dialog", [ph, mh] = Fe(Vi), [j1, tn] = ph(Vi), hh = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !0
  } = e, s = u.useRef(null), l = u.useRef(null), [c, d] = ze({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Vi
  });
  return /* @__PURE__ */ f.jsx(
    j1,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Le(),
      titleId: Le(),
      descriptionId: Le(),
      open: c,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((p) => !p), [d]),
      modal: i,
      children: n
    }
  );
};
hh.displayName = Vi;
var vh = "DialogTrigger", gh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tn(vh, n), a = se(t, o.triggerRef);
    return /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Qc(o.open),
        ...r,
        ref: a,
        onClick: W(e.onClick, o.onOpenToggle)
      }
    );
  }
);
gh.displayName = vh;
var Jc = "DialogPortal", [k1, bh] = ph(Jc, {
  forceMount: void 0
}), yh = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = tn(Jc, t);
  return /* @__PURE__ */ f.jsx(k1, { scope: t, forceMount: n, children: u.Children.map(r, (i) => /* @__PURE__ */ f.jsx(Ye, { present: n || a.open, children: /* @__PURE__ */ f.jsx(eo, { asChild: !0, container: o, children: i }) })) });
};
yh.displayName = Jc;
var ni = "DialogOverlay", wh = u.forwardRef(
  (e, t) => {
    const n = bh(ni, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tn(ni, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ f.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ f.jsx(F1, { ...o, ref: t }) }) : null;
  }
);
wh.displayName = ni;
var L1 = /* @__PURE__ */ Bn("DialogOverlay.RemoveScroll"), F1 = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tn(ni, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f.jsx(ra, { as: L1, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f.jsx(
        Z.div,
        {
          "data-state": Qc(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), sr = "DialogContent", xh = u.forwardRef(
  (e, t) => {
    const n = bh(sr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = tn(sr, e.__scopeDialog);
    return /* @__PURE__ */ f.jsx(Ye, { present: r || a.open, children: a.modal ? /* @__PURE__ */ f.jsx(B1, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(z1, { ...o, ref: t }) });
  }
);
xh.displayName = sr;
var B1 = u.forwardRef(
  (e, t) => {
    const n = tn(sr, e.__scopeDialog), r = u.useRef(null), o = se(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Wi(a);
    }, []), /* @__PURE__ */ f.jsx(
      Sh,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: W(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: W(e.onPointerDownOutside, (a) => {
          const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: W(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), z1 = u.forwardRef(
  (e, t) => {
    const n = tn(sr, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      Sh,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Sh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i } = e, s = tn(sr, n), l = u.useRef(null), c = se(t, l);
    return zi(), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        na,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ f.jsx(
            On,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Qc(s.open),
              ...i,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx(W1, { titleId: s.titleId }),
        /* @__PURE__ */ f.jsx(G1, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Zc = "DialogTitle", Ch = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tn(Zc, n);
    return /* @__PURE__ */ f.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Ch.displayName = Zc;
var _h = "DialogDescription", Eh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tn(_h, n);
    return /* @__PURE__ */ f.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Eh.displayName = _h;
var Ph = "DialogClose", Rh = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = tn(Ph, n);
    return /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: W(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Rh.displayName = Ph;
function Qc(e) {
  return e ? "open" : "closed";
}
var Nh = "DialogTitleWarning", [H1, Th] = u_(Nh, {
  contentName: sr,
  titleName: Zc,
  docsSlug: "dialog"
}), W1 = ({ titleId: e }) => {
  const t = Th(Nh), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, V1 = "DialogDescriptionWarning", G1 = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Th(V1).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, oa = hh, Gi = gh, aa = yh, gr = wh, br = xh, to = Ch, no = Eh, yr = Rh, Mh = "AlertDialog", [U1, t7] = Fe(Mh, [
  mh
]), An = mh(), Oh = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = An(t);
  return /* @__PURE__ */ f.jsx(oa, { ...r, ...n, modal: !0 });
};
Oh.displayName = Mh;
var K1 = "AlertDialogTrigger", Ah = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = An(n);
    return /* @__PURE__ */ f.jsx(Gi, { ...o, ...r, ref: t });
  }
);
Ah.displayName = K1;
var Y1 = "AlertDialogPortal", Dh = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = An(t);
  return /* @__PURE__ */ f.jsx(aa, { ...r, ...n });
};
Dh.displayName = Y1;
var q1 = "AlertDialogOverlay", Ih = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = An(n);
    return /* @__PURE__ */ f.jsx(gr, { ...o, ...r, ref: t });
  }
);
Ih.displayName = q1;
var Lr = "AlertDialogContent", [X1, J1] = U1(Lr), Z1 = /* @__PURE__ */ Nm("AlertDialogContent"), $h = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = An(n), i = u.useRef(null), s = se(t, i), l = u.useRef(null);
    return /* @__PURE__ */ f.jsx(
      H1,
      {
        contentName: Lr,
        titleName: jh,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ f.jsx(X1, { scope: n, cancelRef: l, children: /* @__PURE__ */ f.jsxs(
          br,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: s,
            onOpenAutoFocus: W(o.onOpenAutoFocus, (c) => {
              var d;
              c.preventDefault(), (d = l.current) == null || d.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (c) => c.preventDefault(),
            onInteractOutside: (c) => c.preventDefault(),
            children: [
              /* @__PURE__ */ f.jsx(Z1, { children: r }),
              /* @__PURE__ */ f.jsx(eP, { contentRef: i })
            ]
          }
        ) })
      }
    );
  }
);
$h.displayName = Lr;
var jh = "AlertDialogTitle", kh = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = An(n);
    return /* @__PURE__ */ f.jsx(to, { ...o, ...r, ref: t });
  }
);
kh.displayName = jh;
var Lh = "AlertDialogDescription", Fh = u.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = An(n);
  return /* @__PURE__ */ f.jsx(no, { ...o, ...r, ref: t });
});
Fh.displayName = Lh;
var Q1 = "AlertDialogAction", Bh = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = An(n);
    return /* @__PURE__ */ f.jsx(yr, { ...o, ...r, ref: t });
  }
);
Bh.displayName = Q1;
var zh = "AlertDialogCancel", Hh = u.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = J1(zh, n), a = An(n), i = se(t, o);
    return /* @__PURE__ */ f.jsx(yr, { ...a, ...r, ref: i });
  }
);
Hh.displayName = zh;
var eP = ({ contentRef: e }) => {
  const t = `\`${Lr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Lr}\` by passing a \`${Lh}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Lr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return u.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, tP = Oh, nP = Ah, rP = Dh, Wh = Ih, Vh = $h, Gh = Bh, Uh = Hh, Kh = kh, Yh = Fh;
const vf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, gf = Pn, Dn = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return gf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((c) => {
    const d = n == null ? void 0 : n[c], p = a == null ? void 0 : a[c];
    if (d === null) return null;
    const m = vf(d) || vf(p);
    return o[c][m];
  }), s = n && Object.entries(n).reduce((c, d) => {
    let [p, m] = d;
    return m === void 0 || (c[p] = m), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, d) => {
    let { class: p, className: m, ...h } = d;
    return Object.entries(h).every((b) => {
      let [v, g] = b;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...s
      }[v]) : {
        ...a,
        ...s
      }[v] === g;
    }) ? [
      ...c,
      p,
      m
    ] : c;
  }, []);
  return gf(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, zr = Dn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ui = u.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const i = r ? Gn : "button";
    return /* @__PURE__ */ f.jsx(i, { className: T(zr({ variant: t, size: n, className: e })), ref: a, ...o });
  }
);
Ui.displayName = "Button";
const n7 = tP, r7 = nP, oP = rP, qh = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Wh,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
qh.displayName = Wh.displayName;
const aP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsxs(oP, { children: [
  /* @__PURE__ */ f.jsx(qh, {}),
  /* @__PURE__ */ f.jsx(
    Vh,
    {
      ref: n,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
aP.displayName = Vh.displayName;
const iP = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
iP.displayName = "AlertDialogHeader";
const sP = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
sP.displayName = "AlertDialogFooter";
const lP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(Kh, { ref: n, className: T("text-lg font-semibold", e), ...t }));
lP.displayName = Kh.displayName;
const cP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(Yh, { ref: n, className: T("text-sm text-muted-foreground", e), ...t }));
cP.displayName = Yh.displayName;
const uP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(Gh, { ref: n, className: T(zr(), e), ...t }));
uP.displayName = Gh.displayName;
const dP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Uh,
  {
    ref: n,
    className: T(zr({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t
  }
));
dP.displayName = Uh.displayName;
const fP = Dn(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), pP = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, role: "alert", className: T(fP({ variant: t }), e), ...n }));
pP.displayName = "Alert";
const mP = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("h5", { ref: n, className: T("mb-1 font-medium leading-none tracking-tight", e), ...t })
);
mP.displayName = "AlertTitle";
const hP = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, className: T("text-sm [&_p]:leading-relaxed", e), ...t })
);
hP.displayName = "AlertDescription";
var vP = "AspectRatio", Xh = u.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ f.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
Xh.displayName = vP;
var gP = Xh;
const o7 = gP;
var Dl = { exports: {} }, Gs = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function bP() {
  if (bf) return Gs;
  bf = 1;
  var e = P;
  function t(p, m) {
    return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function s(p, m) {
    var h = m(), b = r({ inst: { value: h, getSnapshot: m } }), v = b[0].inst, g = b[1];
    return a(
      function() {
        v.value = h, v.getSnapshot = m, l(v) && g({ inst: v });
      },
      [p, h, m]
    ), o(
      function() {
        return l(v) && g({ inst: v }), p(function() {
          l(v) && g({ inst: v });
        });
      },
      [p]
    ), i(h), h;
  }
  function l(p) {
    var m = p.getSnapshot;
    p = p.value;
    try {
      var h = m();
      return !n(p, h);
    } catch {
      return !0;
    }
  }
  function c(p, m) {
    return m();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : s;
  return Gs.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Gs;
}
var Us = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function yP() {
  return yf || (yf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, b) {
      return h === b && (h !== 0 || 1 / h === 1 / b) || h !== h && b !== b;
    }
    function t(h, b) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = b();
      if (!p) {
        var g = b();
        a(v, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      g = i({
        inst: { value: v, getSnapshot: b }
      });
      var y = g[0].inst, w = g[1];
      return l(
        function() {
          y.value = v, y.getSnapshot = b, n(y) && w({ inst: y });
        },
        [h, v, b]
      ), s(
        function() {
          return n(y) && w({ inst: y }), h(function() {
            n(y) && w({ inst: y });
          });
        },
        [h]
      ), c(v), v;
    }
    function n(h) {
      var b = h.getSnapshot;
      h = h.value;
      try {
        var v = b();
        return !a(h, v);
      } catch {
        return !0;
      }
    }
    function r(h, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = P, a = typeof Object.is == "function" ? Object.is : e, i = o.useState, s = o.useEffect, l = o.useLayoutEffect, c = o.useDebugValue, d = !1, p = !1, m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Us.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : m, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Us;
}
process.env.NODE_ENV === "production" ? Dl.exports = bP() : Dl.exports = yP();
var wP = Dl.exports;
function xP() {
  return wP.useSyncExternalStore(
    SP,
    () => !0,
    () => !1
  );
}
function SP() {
  return () => {
  };
}
var eu = "Avatar", [CP, a7] = Fe(eu), [_P, Jh] = CP(eu), Zh = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = u.useState("idle");
    return /* @__PURE__ */ f.jsx(
      _P,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ f.jsx(Z.span, { ...r, ref: t })
      }
    );
  }
);
Zh.displayName = eu;
var Qh = "AvatarImage", ev = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, i = Jh(Qh, n), s = EP(r, a), l = Te((c) => {
      o(c), i.onImageLoadingStatusChange(c);
    });
    return Ke(() => {
      s !== "idle" && l(s);
    }, [s, l]), s === "loaded" ? /* @__PURE__ */ f.jsx(Z.img, { ...a, ref: t, src: r }) : null;
  }
);
ev.displayName = Qh;
var tv = "AvatarFallback", nv = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Jh(tv, n), [i, s] = u.useState(r === void 0);
    return u.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ f.jsx(Z.span, { ...o, ref: t }) : null;
  }
);
nv.displayName = tv;
function wf(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function EP(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = xP(), o = u.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [i, s] = u.useState(
    () => wf(a, e)
  );
  return Ke(() => {
    s(wf(a, e));
  }, [a, e]), Ke(() => {
    const l = (p) => () => {
      s(p);
    };
    if (!a) return;
    const c = l("loaded"), d = l("error");
    return a.addEventListener("load", c), a.addEventListener("error", d), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", c), a.removeEventListener("error", d);
    };
  }, [a, n, t]), i;
}
var rv = Zh, ov = ev, av = nv;
const PP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  rv,
  {
    ref: n,
    className: T("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
  }
));
PP.displayName = rv.displayName;
const RP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(ov, { ref: n, className: T("aspect-square h-full w-full", e), ...t }));
RP.displayName = ov.displayName;
const NP = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  av,
  {
    ref: n,
    className: T("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
  }
));
NP.displayName = av.displayName;
const TP = Dn(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function i7({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.jsx("div", { className: T(TP({ variant: t }), e), ...n });
}
const MP = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
MP.displayName = "Breadcrumb";
const OP = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    "ol",
    {
      ref: n,
      className: T(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        e
      ),
      ...t
    }
  )
);
OP.displayName = "BreadcrumbList";
const AP = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("li", { ref: n, className: T("inline-flex items-center gap-1.5", e), ...t })
);
AP.displayName = "BreadcrumbItem";
const DP = u.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? Gn : "a";
  return /* @__PURE__ */ f.jsx(o, { ref: r, className: T("transition-colors hover:text-foreground", t), ...n });
});
DP.displayName = "BreadcrumbLink";
const IP = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    "span",
    {
      ref: n,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: T("font-normal text-foreground", e),
      ...t
    }
  )
);
IP.displayName = "BreadcrumbPage";
const $P = ({ children: e, className: t, ...n }) => /* @__PURE__ */ f.jsx("li", { role: "presentation", "aria-hidden": "true", className: T("[&>svg]:size-3.5", t), ...n, children: e ?? /* @__PURE__ */ f.jsx(Zr, {}) });
$P.displayName = "BreadcrumbSeparator";
const jP = ({ className: e, ...t }) => /* @__PURE__ */ f.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.jsx(Ym, { className: "h-4 w-4" }),
      /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
jP.displayName = "BreadcrumbElipssis";
function Pe(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Dt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function bt(e, t) {
  const n = Pe(e);
  return isNaN(t) ? Dt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function qt(e, t) {
  const n = Pe(e);
  if (isNaN(t)) return Dt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Dt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const tu = 6048e5, kP = 864e5;
let LP = {};
function ia() {
  return LP;
}
function pn(e, t) {
  var s, l, c, d;
  const n = ia(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = Pe(e), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function lr(e) {
  return pn(e, { weekStartsOn: 1 });
}
function iv(e) {
  const t = Pe(e), n = t.getFullYear(), r = Dt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = lr(r), a = Dt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = lr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Hr(e) {
  const t = Pe(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ri(e) {
  const t = Pe(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function cn(e, t) {
  const n = Hr(e), r = Hr(t), o = +n - ri(n), a = +r - ri(r);
  return Math.round((o - a) / kP);
}
function FP(e) {
  const t = iv(e), n = Dt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), lr(n);
}
function Il(e, t) {
  const n = t * 7;
  return bt(e, n);
}
function BP(e, t) {
  return qt(e, t * 12);
}
function zP(e) {
  let t;
  return e.forEach(function(n) {
    const r = Pe(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function HP(e) {
  let t;
  return e.forEach((n) => {
    const r = Pe(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Et(e, t) {
  const n = Hr(e), r = Hr(t);
  return +n == +r;
}
function nu(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function WP(e) {
  if (!nu(e) && typeof e != "number")
    return !1;
  const t = Pe(e);
  return !isNaN(Number(t));
}
function ko(e, t) {
  const n = Pe(e), r = Pe(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function VP(e, t, n) {
  const r = pn(e, n), o = pn(t, n), a = +r - ri(r), i = +o - ri(o);
  return Math.round((a - i) / tu);
}
function ru(e) {
  const t = Pe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Pt(e) {
  const t = Pe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function sv(e) {
  const t = Pe(e), n = Dt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ou(e, t) {
  var s, l, c, d;
  const n = ia(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = Pe(e), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function lv(e) {
  return ou(e, { weekStartsOn: 1 });
}
const GP = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, UP = (e, t, n) => {
  let r;
  const o = GP[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ks(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const KP = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, YP = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, qP = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, XP = {
  date: Ks({
    formats: KP,
    defaultWidth: "full"
  }),
  time: Ks({
    formats: YP,
    defaultWidth: "full"
  }),
  dateTime: Ks({
    formats: qP,
    defaultWidth: "full"
  })
}, JP = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ZP = (e, t, n, r) => JP[e];
function xo(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const QP = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, eR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, tR = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, nR = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, rR = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, oR = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, aR = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, iR = {
  ordinalNumber: aR,
  era: xo({
    values: QP,
    defaultWidth: "wide"
  }),
  quarter: xo({
    values: eR,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: xo({
    values: tR,
    defaultWidth: "wide"
  }),
  day: xo({
    values: nR,
    defaultWidth: "wide"
  }),
  dayPeriod: xo({
    values: rR,
    defaultWidth: "wide",
    formattingValues: oR,
    defaultFormattingWidth: "wide"
  })
};
function So(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? lR(s, (p) => p.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      sR(s, (p) => p.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const d = t.slice(i.length);
    return { value: c, rest: d };
  };
}
function sR(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function lR(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function cR(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const uR = /^(\d+)(th|st|nd|rd)?/i, dR = /\d+/i, fR = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, pR = {
  any: [/^b/i, /^(a|c)/i]
}, mR = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, hR = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vR = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gR = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, bR = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yR = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, wR = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xR = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, SR = {
  ordinalNumber: cR({
    matchPattern: uR,
    parsePattern: dR,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: So({
    matchPatterns: fR,
    defaultMatchWidth: "wide",
    parsePatterns: pR,
    defaultParseWidth: "any"
  }),
  quarter: So({
    matchPatterns: mR,
    defaultMatchWidth: "wide",
    parsePatterns: hR,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: So({
    matchPatterns: vR,
    defaultMatchWidth: "wide",
    parsePatterns: gR,
    defaultParseWidth: "any"
  }),
  day: So({
    matchPatterns: bR,
    defaultMatchWidth: "wide",
    parsePatterns: yR,
    defaultParseWidth: "any"
  }),
  dayPeriod: So({
    matchPatterns: wR,
    defaultMatchWidth: "any",
    parsePatterns: xR,
    defaultParseWidth: "any"
  })
}, cv = {
  code: "en-US",
  formatDistance: UP,
  formatLong: XP,
  formatRelative: ZP,
  localize: iR,
  match: SR,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function CR(e) {
  const t = Pe(e);
  return cn(t, sv(t)) + 1;
}
function uv(e) {
  const t = Pe(e), n = +lr(t) - +FP(t);
  return Math.round(n / tu) + 1;
}
function dv(e, t) {
  var d, p, m, h;
  const n = Pe(e), r = n.getFullYear(), o = ia(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = Dt(e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = pn(i, t), l = Dt(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = pn(l, t);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function _R(e, t) {
  var s, l, c, d;
  const n = ia(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = dv(e, t), a = Dt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), pn(a, t);
}
function fv(e, t) {
  const n = Pe(e), r = +pn(n, t) - +_R(n, t);
  return Math.round(r / tu) + 1;
}
function De(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const jn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return De(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : De(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return De(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return De(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return De(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return De(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return De(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return De(o, t.length);
  }
}, Mr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, xf = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return jn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = dv(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return De(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : De(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = iv(e);
    return De(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return De(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return De(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return De(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return jn.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return De(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = fv(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : De(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = uv(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : De(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : jn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = CR(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : De(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return De(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return De(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return De(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Mr.noon : r === 0 ? o = Mr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Mr.evening : r >= 12 ? o = Mr.afternoon : r >= 4 ? o = Mr.morning : o = Mr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return jn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : jn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : De(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : De(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : jn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : jn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return jn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Cf(r);
      case "XXXX":
      case "XX":
        return nr(r);
      case "XXXXX":
      case "XXX":
      default:
        return nr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Cf(r);
      case "xxxx":
      case "xx":
        return nr(r);
      case "xxxxx":
      case "xxx":
      default:
        return nr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Sf(r, ":");
      case "OOOO":
      default:
        return "GMT" + nr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Sf(r, ":");
      case "zzzz":
      default:
        return "GMT" + nr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return De(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return De(r, t.length);
  }
};
function Sf(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + De(a, 2);
}
function Cf(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + De(Math.abs(e) / 60, 2) : nr(e, t);
}
function nr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = De(Math.trunc(r / 60), 2), a = De(r % 60, 2);
  return n + o + t + a;
}
const _f = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, pv = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, ER = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return _f(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", _f(r, t)).replace("{{time}}", pv(o, t));
}, PR = {
  p: pv,
  P: ER
}, RR = /^D+$/, NR = /^Y+$/, TR = ["D", "DD", "YY", "YYYY"];
function MR(e) {
  return RR.test(e);
}
function OR(e) {
  return NR.test(e);
}
function AR(e, t, n) {
  const r = DR(e, t, n);
  if (console.warn(r), TR.includes(e)) throw new RangeError(r);
}
function DR(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const IR = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $R = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jR = /^'([^]*?)'?$/, kR = /''/g, LR = /[a-zA-Z]/;
function wr(e, t, n) {
  var d, p, m, h, b, v, g, y;
  const r = ia(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? cv, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((y = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? 0, s = Pe(e);
  if (!WP(s))
    throw new RangeError("Invalid time value");
  let l = t.match($R).map((w) => {
    const x = w[0];
    if (x === "p" || x === "P") {
      const S = PR[x];
      return S(w, o.formatLong);
    }
    return w;
  }).join("").match(IR).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const x = w[0];
    if (x === "'")
      return { isToken: !1, value: FR(w) };
    if (xf[x])
      return { isToken: !0, value: w };
    if (x.match(LR))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: w };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return l.map((w) => {
    if (!w.isToken) return w.value;
    const x = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && OR(x) || !(n != null && n.useAdditionalDayOfYearTokens) && MR(x)) && AR(x, t, String(e));
    const S = xf[x[0]];
    return S(s, x, o.localize, c);
  }).join("");
}
function FR(e) {
  const t = e.match(jR);
  return t ? t[1].replace(kR, "'") : e;
}
function BR(e) {
  const t = Pe(e), n = t.getFullYear(), r = t.getMonth(), o = Dt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function zR(e) {
  return Math.trunc(+Pe(e) / 1e3);
}
function HR(e) {
  const t = Pe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function WR(e, t) {
  return VP(
    HR(e),
    Pt(e),
    t
  ) + 1;
}
function $l(e, t) {
  const n = Pe(e), r = Pe(t);
  return n.getTime() > r.getTime();
}
function mv(e, t) {
  const n = Pe(e), r = Pe(t);
  return +n < +r;
}
function au(e, t) {
  const n = Pe(e), r = Pe(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function VR(e, t) {
  const n = Pe(e), r = Pe(t);
  return n.getFullYear() === r.getFullYear();
}
function Ys(e, t) {
  return bt(e, -t);
}
function qs(e, t) {
  const n = Pe(e), r = n.getFullYear(), o = n.getDate(), a = Dt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const i = BR(a);
  return n.setMonth(t, Math.min(o, i)), n;
}
function Ef(e, t) {
  const n = Pe(e);
  return isNaN(+n) ? Dt(e, NaN) : (n.setFullYear(t), n);
}
var fe = function() {
  return fe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, fe.apply(this, arguments);
};
function GR(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function hv(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function sa(e) {
  return e.mode === "multiple";
}
function la(e) {
  return e.mode === "range";
}
function Ki(e) {
  return e.mode === "single";
}
var UR = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function KR(e, t) {
  return wr(e, "LLLL y", t);
}
function YR(e, t) {
  return wr(e, "d", t);
}
function qR(e, t) {
  return wr(e, "LLLL", t);
}
function XR(e) {
  return "".concat(e);
}
function JR(e, t) {
  return wr(e, "cccccc", t);
}
function ZR(e, t) {
  return wr(e, "yyyy", t);
}
var QR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: KR,
  formatDay: YR,
  formatMonthCaption: qR,
  formatWeekNumber: XR,
  formatWeekdayName: JR,
  formatYearCaption: ZR
}), eN = function(e, t, n) {
  return wr(e, "do MMMM (EEEE)", n);
}, tN = function() {
  return "Month: ";
}, nN = function() {
  return "Go to next month";
}, rN = function() {
  return "Go to previous month";
}, oN = function(e, t) {
  return wr(e, "cccc", t);
}, aN = function(e) {
  return "Week n. ".concat(e);
}, iN = function() {
  return "Year: ";
}, sN = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: eN,
  labelMonthDropdown: tN,
  labelNext: nN,
  labelPrevious: rN,
  labelWeekNumber: aN,
  labelWeekday: oN,
  labelYearDropdown: iN
});
function lN() {
  var e = "buttons", t = UR, n = cv, r = {}, o = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: QR,
    labels: sN,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function cN(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, i = e.toDate;
  return r ? a = Pt(r) : t && (a = new Date(t, 0, 1)), o ? i = ru(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Hr(a) : void 0,
    toDate: i ? Hr(i) : void 0
  };
}
var vv = Vn(void 0);
function uN(e) {
  var t, n = e.initialProps, r = lN(), o = cN(n), a = o.fromDate, i = o.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (Ki(n) || sa(n) || la(n)) && (l = n.onSelect);
  var c = fe(fe(fe({}, r), n), { captionLayout: s, classNames: fe(fe({}, r.classNames), n.classNames), components: fe({}, n.components), formatters: fe(fe({}, r.formatters), n.formatters), fromDate: a, labels: fe(fe({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: fe(fe({}, r.modifiers), n.modifiers), modifiersClassNames: fe(fe({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: fe(fe({}, r.styles), n.styles), toDate: i });
  return f.jsx(vv.Provider, { value: c, children: e.children });
}
function He() {
  var e = Tn(vv);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function gv(e) {
  var t = He(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return f.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function dN(e) {
  return f.jsx("svg", fe({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: f.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function bv(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, c = He(), d = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : dN;
  return f.jsxs("div", { className: s, style: l, children: [f.jsx("span", { className: c.classNames.vhidden, children: e["aria-label"] }), f.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: o, onChange: r, children: a }), f.jsxs("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, f.jsx(d, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function fN(e) {
  var t, n = He(), r = n.fromDate, o = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return f.jsx(f.Fragment, {});
  if (!o)
    return f.jsx(f.Fragment, {});
  var p = [];
  if (VR(r, o))
    for (var m = Pt(r), h = r.getMonth(); h <= o.getMonth(); h++)
      p.push(qs(m, h));
  else
    for (var m = Pt(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      p.push(qs(m, h));
  var b = function(g) {
    var y = Number(g.target.value), w = qs(Pt(e.displayMonth), y);
    e.onChange(w);
  }, v = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : bv;
  return f.jsx(v, { name: "months", "aria-label": d(), className: l.dropdown_month, style: a.dropdown_month, onChange: b, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: p.map(function(g) {
    return f.jsx("option", { value: g.getMonth(), children: s(g, { locale: i }) }, g.getMonth());
  }) });
}
function pN(e) {
  var t, n = e.displayMonth, r = He(), o = r.fromDate, a = r.toDate, i = r.locale, s = r.styles, l = r.classNames, c = r.components, d = r.formatters.formatYearCaption, p = r.labels.labelYearDropdown, m = [];
  if (!o)
    return f.jsx(f.Fragment, {});
  if (!a)
    return f.jsx(f.Fragment, {});
  for (var h = o.getFullYear(), b = a.getFullYear(), v = h; v <= b; v++)
    m.push(Ef(sv(/* @__PURE__ */ new Date()), v));
  var g = function(w) {
    var x = Ef(Pt(n), Number(w.target.value));
    e.onChange(x);
  }, y = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : bv;
  return f.jsx(y, { name: "years", "aria-label": p(), className: l.dropdown_year, style: s.dropdown_year, onChange: g, value: n.getFullYear(), caption: d(n, { locale: i }), children: m.map(function(w) {
    return f.jsx("option", { value: w.getFullYear(), children: d(w, { locale: i }) }, w.getFullYear());
  }) });
}
function mN(e, t) {
  var n = yt(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function hN(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && ko(a, o) < 0) {
    var c = -1 * (l - 1);
    o = qt(a, c);
  }
  return i && ko(o, i) < 0 && (o = i), Pt(o);
}
function vN() {
  var e = He(), t = hN(e), n = mN(t, e.month), r = n[0], o = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = Pt(i);
      o(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [r, a];
}
function gN(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Pt(e), a = Pt(qt(o, r)), i = ko(a, o), s = [], l = 0; l < i; l++) {
    var c = qt(o, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function bN(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Pt(e);
    if (!n)
      return qt(s, i);
    var l = ko(n, e);
    if (!(l < a))
      return qt(s, i);
  }
}
function yN(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, i = r ? a : 1, s = Pt(e);
    if (!n)
      return qt(s, -i);
    var l = ko(s, n);
    if (!(l <= 0))
      return qt(s, -i);
  }
}
var yv = Vn(void 0);
function wN(e) {
  var t = He(), n = vN(), r = n[0], o = n[1], a = gN(r, t), i = bN(r, t), s = yN(r, t), l = function(p) {
    return a.some(function(m) {
      return au(p, m);
    });
  }, c = function(p, m) {
    l(p) || (m && mv(p, m) ? o(qt(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return f.jsx(yv.Provider, { value: d, children: e.children });
}
function ca() {
  var e = Tn(yv);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Pf(e) {
  var t, n = He(), r = n.classNames, o = n.styles, a = n.components, i = ca().goToMonth, s = function(d) {
    i(qt(d, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : gv, c = f.jsx(l, { id: e.id, displayMonth: e.displayMonth });
  return f.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [f.jsx("div", { className: r.vhidden, children: c }), f.jsx(fN, { onChange: s, displayMonth: e.displayMonth }), f.jsx(pN, { onChange: s, displayMonth: e.displayMonth })] });
}
function xN(e) {
  return f.jsx("svg", fe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function SN(e) {
  return f.jsx("svg", fe({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: f.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var oi = vr(function(e, t) {
  var n = He(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = fe(fe({}, o.button_reset), o.button);
  return e.style && Object.assign(s, e.style), f.jsx("button", fe({}, e, { ref: t, type: "button", className: i, style: s }));
});
function CN(e) {
  var t, n, r = He(), o = r.dir, a = r.locale, i = r.classNames, s = r.styles, l = r.labels, c = l.labelPrevious, d = l.labelNext, p = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return f.jsx(f.Fragment, {});
  var m = c(e.previousMonth, { locale: a }), h = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), b = d(e.nextMonth, { locale: a }), v = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), g = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : SN, y = (n = p == null ? void 0 : p.IconLeft) !== null && n !== void 0 ? n : xN;
  return f.jsxs("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && f.jsx(oi, { name: "previous-month", "aria-label": m, className: h, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? f.jsx(g, { className: i.nav_icon, style: s.nav_icon }) : f.jsx(y, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && f.jsx(oi, { name: "next-month", "aria-label": b, className: v, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? f.jsx(y, { className: i.nav_icon, style: s.nav_icon }) : f.jsx(g, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function Rf(e) {
  var t = He().numberOfMonths, n = ca(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(b) {
    return au(e.displayMonth, b);
  }), l = s === 0, c = s === i.length - 1, d = t > 1 && (l || !c), p = t > 1 && (c || !l), m = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return f.jsx(CN, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: p, nextMonth: o, previousMonth: r, onPreviousClick: m, onNextClick: h });
}
function _N(e) {
  var t, n = He(), r = n.classNames, o = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : gv, c;
  return o ? c = f.jsx(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = f.jsx(Pf, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = f.jsxs(f.Fragment, { children: [f.jsx(Pf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), f.jsx(Rf, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = f.jsxs(f.Fragment, { children: [f.jsx(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f.jsx(Rf, { displayMonth: e.displayMonth, id: e.id })] }), f.jsx("div", { className: r.caption, style: a.caption, children: c });
}
function EN(e) {
  var t = He(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? f.jsx("tfoot", { className: o, style: r.tfoot, children: f.jsx("tr", { children: f.jsx("td", { colSpan: 8, children: n }) }) }) : f.jsx(f.Fragment, {});
}
function PN(e, t, n) {
  for (var r = n ? lr(/* @__PURE__ */ new Date()) : pn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var i = bt(r, a);
    o.push(i);
  }
  return o;
}
function RN() {
  var e = He(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = PN(o, a, i);
  return f.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && f.jsx("td", { style: n.head_cell, className: t.head_cell }), c.map(function(d, p) {
    return f.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(d, { locale: o }), children: s(d, { locale: o }) }, p);
  })] });
}
function NN() {
  var e, t = He(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : RN;
  return f.jsx("thead", { style: r.head, className: n.head, children: f.jsx(a, {}) });
}
function TN(e) {
  var t = He(), n = t.locale, r = t.formatters.formatDay;
  return f.jsx(f.Fragment, { children: r(e.date, { locale: n }) });
}
var iu = Vn(void 0);
function MN(e) {
  if (!sa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return f.jsx(iu.Provider, { value: t, children: e.children });
  }
  return f.jsx(ON, { initialProps: e.initialProps, children: e.children });
}
function ON(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, i = function(c, d, p) {
    var m, h;
    (m = t.onDayClick) === null || m === void 0 || m.call(t, c, d, p);
    var b = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!b) {
      var v = !!(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? hv([], r) : [];
        if (d.selected) {
          var y = g.findIndex(function(w) {
            return Et(c, w);
          });
          g.splice(y, 1);
        } else
          g.push(c);
        (h = t.onSelect) === null || h === void 0 || h.call(t, g, c, d, p);
      }
    }
  }, s = {
    disabled: []
  };
  r && s.disabled.push(function(c) {
    var d = a && r.length > a - 1, p = r.some(function(m) {
      return Et(m, c);
    });
    return !!(d && !p);
  });
  var l = {
    selected: r,
    onDayClick: i,
    modifiers: s
  };
  return f.jsx(iu.Provider, { value: l, children: n });
}
function su() {
  var e = Tn(iu);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function AN(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Et(o, e) && Et(r, e) ? void 0 : Et(o, e) ? { from: o, to: void 0 } : Et(r, e) ? void 0 : $l(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? $l(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? mv(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var lu = Vn(void 0);
function DN(e) {
  if (!la(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return f.jsx(lu.Provider, { value: t, children: e.children });
  }
  return f.jsx(IN, { initialProps: e.initialProps, children: e.children });
}
function IN(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, i = o.to, s = t.min, l = t.max, c = function(h, b, v) {
    var g, y;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, h, b, v);
    var w = AN(h, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, w, h, b, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (d.range_start = [a], i ? (d.range_end = [i], Et(a, i) || (d.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : d.range_end = [a]) : i && (d.range_start = [i], d.range_end = [i]), s && (a && !i && d.disabled.push({
    after: Ys(a, s - 1),
    before: bt(a, s - 1)
  }), a && i && d.disabled.push({
    after: a,
    before: bt(a, s - 1)
  }), !a && i && d.disabled.push({
    after: Ys(i, s - 1),
    before: bt(i, s - 1)
  })), l) {
    if (a && !i && (d.disabled.push({
      before: bt(a, -l + 1)
    }), d.disabled.push({
      after: bt(a, l - 1)
    })), a && i) {
      var p = cn(i, a) + 1, m = l - p;
      d.disabled.push({
        before: Ys(a, m)
      }), d.disabled.push({
        after: bt(i, m)
      });
    }
    !a && i && (d.disabled.push({
      before: bt(i, -l + 1)
    }), d.disabled.push({
      after: bt(i, l - 1)
    }));
  }
  return f.jsx(lu.Provider, { value: { selected: r, onDayClick: c, modifiers: d }, children: n });
}
function cu() {
  var e = Tn(lu);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function qa(e) {
  return Array.isArray(e) ? hv([], e) : e !== void 0 ? [e] : [];
}
function $N(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = qa(o);
  }), t;
}
var Xt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Xt || (Xt = {}));
var jN = Xt.Selected, Sn = Xt.Disabled, kN = Xt.Hidden, LN = Xt.Today, Xs = Xt.RangeEnd, Js = Xt.RangeMiddle, Zs = Xt.RangeStart, FN = Xt.Outside;
function BN(e, t, n) {
  var r, o = (r = {}, r[jN] = qa(e.selected), r[Sn] = qa(e.disabled), r[kN] = qa(e.hidden), r[LN] = [e.today], r[Xs] = [], r[Js] = [], r[Zs] = [], r[FN] = [], r);
  return e.fromDate && o[Sn].push({ before: e.fromDate }), e.toDate && o[Sn].push({ after: e.toDate }), sa(e) ? o[Sn] = o[Sn].concat(t.modifiers[Sn]) : la(e) && (o[Sn] = o[Sn].concat(n.modifiers[Sn]), o[Zs] = n.modifiers[Zs], o[Js] = n.modifiers[Js], o[Xs] = n.modifiers[Xs]), o;
}
var wv = Vn(void 0);
function zN(e) {
  var t = He(), n = su(), r = cu(), o = BN(t, n, r), a = $N(t.modifiers), i = fe(fe({}, o), a);
  return f.jsx(wv.Provider, { value: i, children: e.children });
}
function xv() {
  var e = Tn(wv);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function HN(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function WN(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function VN(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function GN(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function UN(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function KN(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = cn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var i = cn(e, r) >= 0 && cn(o, e) >= 0;
    return i;
  }
  return o ? Et(o, e) : r ? Et(r, e) : !1;
}
function YN(e) {
  return nu(e);
}
function qN(e) {
  return Array.isArray(e) && e.every(nu);
}
function XN(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (YN(n))
      return Et(e, n);
    if (qN(n))
      return n.includes(e);
    if (WN(n))
      return KN(e, n);
    if (UN(n))
      return n.dayOfWeek.includes(e.getDay());
    if (HN(n)) {
      var r = cn(n.before, e), o = cn(n.after, e), a = r > 0, i = o < 0, s = $l(n.before, n.after);
      return s ? i && a : a || i;
    }
    return VN(n) ? cn(e, n.after) > 0 : GN(n) ? cn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function uu(e, t, n) {
  var r = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return XN(e, s) && a.push(i), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !au(e, n) && (o.outside = !0), o;
}
function JN(e, t) {
  for (var n = Pt(e[0]), r = ru(e[e.length - 1]), o, a, i = n; i <= r; ) {
    var s = uu(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = bt(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), o || (o = i), i = bt(i, 1);
  }
  return a || o;
}
var ZN = 365;
function Sv(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = o.weekStartsOn, c = o.fromDate, d = o.toDate, p = o.locale, m = {
    day: bt,
    week: Il,
    month: qt,
    year: BP,
    startOfWeek: function(g) {
      return o.ISOWeek ? lr(g) : pn(g, { locale: p, weekStartsOn: l });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? lv(g) : ou(g, { locale: p, weekStartsOn: l });
    }
  }, h = m[n](e, r === "after" ? 1 : -1);
  r === "before" && c ? h = zP([c, h]) : r === "after" && d && (h = HP([d, h]));
  var b = !0;
  if (a) {
    var v = uu(h, a);
    b = !v.disabled && !v.hidden;
  }
  return b ? h : s.count > ZN ? s.lastFocused : Sv(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: fe(fe({}, s), { count: s.count + 1 })
  });
}
var Cv = Vn(void 0);
function QN(e) {
  var t = ca(), n = xv(), r = yt(), o = r[0], a = r[1], i = yt(), s = i[0], l = i[1], c = JN(t.displayMonths, n), d = o ?? (s && t.isDateDisplayed(s)) ? s : c, p = function() {
    l(o), a(void 0);
  }, m = function(g) {
    a(g);
  }, h = He(), b = function(g, y) {
    if (o) {
      var w = Sv(o, {
        moveBy: g,
        direction: y,
        context: h,
        modifiers: n
      });
      Et(o, w) || (t.goToDate(w, o), m(w));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: p,
    focus: m,
    focusDayAfter: function() {
      return b("day", "after");
    },
    focusDayBefore: function() {
      return b("day", "before");
    },
    focusWeekAfter: function() {
      return b("week", "after");
    },
    focusWeekBefore: function() {
      return b("week", "before");
    },
    focusMonthBefore: function() {
      return b("month", "before");
    },
    focusMonthAfter: function() {
      return b("month", "after");
    },
    focusYearBefore: function() {
      return b("year", "before");
    },
    focusYearAfter: function() {
      return b("year", "after");
    },
    focusStartOfWeek: function() {
      return b("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return b("endOfWeek", "after");
    }
  };
  return f.jsx(Cv.Provider, { value: v, children: e.children });
}
function du() {
  var e = Tn(Cv);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function eT(e, t) {
  var n = xv(), r = uu(e, n, t);
  return r;
}
var fu = Vn(void 0);
function tT(e) {
  if (!Ki(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return f.jsx(fu.Provider, { value: t, children: e.children });
  }
  return f.jsx(nT, { initialProps: e.initialProps, children: e.children });
}
function nT(e) {
  var t = e.initialProps, n = e.children, r = function(a, i, s) {
    var l, c, d;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s), i.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, a, i, s);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, i, s);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return f.jsx(fu.Provider, { value: o, children: n });
}
function _v() {
  var e = Tn(fu);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function rT(e, t) {
  var n = He(), r = _v(), o = su(), a = cu(), i = du(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, d = i.focusWeekBefore, p = i.blur, m = i.focus, h = i.focusMonthBefore, b = i.focusMonthAfter, v = i.focusYearBefore, g = i.focusYearAfter, y = i.focusStartOfWeek, w = i.focusEndOfWeek, x = function(F) {
    var I, L, ne, re;
    Ki(n) ? (I = r.onDayClick) === null || I === void 0 || I.call(r, e, t, F) : sa(n) ? (L = o.onDayClick) === null || L === void 0 || L.call(o, e, t, F) : la(n) ? (ne = a.onDayClick) === null || ne === void 0 || ne.call(a, e, t, F) : (re = n.onDayClick) === null || re === void 0 || re.call(n, e, t, F);
  }, S = function(F) {
    var I;
    m(e), (I = n.onDayFocus) === null || I === void 0 || I.call(n, e, t, F);
  }, C = function(F) {
    var I;
    p(), (I = n.onDayBlur) === null || I === void 0 || I.call(n, e, t, F);
  }, E = function(F) {
    var I;
    (I = n.onDayMouseEnter) === null || I === void 0 || I.call(n, e, t, F);
  }, _ = function(F) {
    var I;
    (I = n.onDayMouseLeave) === null || I === void 0 || I.call(n, e, t, F);
  }, O = function(F) {
    var I;
    (I = n.onDayPointerEnter) === null || I === void 0 || I.call(n, e, t, F);
  }, N = function(F) {
    var I;
    (I = n.onDayPointerLeave) === null || I === void 0 || I.call(n, e, t, F);
  }, B = function(F) {
    var I;
    (I = n.onDayTouchCancel) === null || I === void 0 || I.call(n, e, t, F);
  }, M = function(F) {
    var I;
    (I = n.onDayTouchEnd) === null || I === void 0 || I.call(n, e, t, F);
  }, k = function(F) {
    var I;
    (I = n.onDayTouchMove) === null || I === void 0 || I.call(n, e, t, F);
  }, V = function(F) {
    var I;
    (I = n.onDayTouchStart) === null || I === void 0 || I.call(n, e, t, F);
  }, $ = function(F) {
    var I;
    (I = n.onDayKeyUp) === null || I === void 0 || I.call(n, e, t, F);
  }, K = function(F) {
    var I;
    switch (F.key) {
      case "ArrowLeft":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        F.preventDefault(), F.stopPropagation(), c();
        break;
      case "ArrowUp":
        F.preventDefault(), F.stopPropagation(), d();
        break;
      case "PageUp":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? v() : h();
        break;
      case "PageDown":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? g() : b();
        break;
      case "Home":
        F.preventDefault(), F.stopPropagation(), y();
        break;
      case "End":
        F.preventDefault(), F.stopPropagation(), w();
        break;
    }
    (I = n.onDayKeyDown) === null || I === void 0 || I.call(n, e, t, F);
  }, G = {
    onClick: x,
    onFocus: S,
    onBlur: C,
    onKeyDown: K,
    onKeyUp: $,
    onMouseEnter: E,
    onMouseLeave: _,
    onPointerEnter: O,
    onPointerLeave: N,
    onTouchCancel: B,
    onTouchEnd: M,
    onTouchMove: k,
    onTouchStart: V
  };
  return G;
}
function oT() {
  var e = He(), t = _v(), n = su(), r = cu(), o = Ki(e) ? t.selected : sa(e) ? n.selected : la(e) ? r.selected : void 0;
  return o;
}
function aT(e) {
  return Object.values(Xt).includes(e);
}
function iT(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (aT(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function sT(e, t) {
  var n = fe({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = fe(fe({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function lT(e, t, n) {
  var r, o, a, i = He(), s = du(), l = eT(e, t), c = rT(e, l), d = oT(), p = !!(i.onDayClick || i.mode !== "default");
  ft(function() {
    var E;
    l.outside || s.focusedDay && p && Et(s.focusedDay, e) && ((E = n.current) === null || E === void 0 || E.focus());
  }, [
    s.focusedDay,
    e,
    n,
    p,
    l.outside
  ]);
  var m = iT(i, l).join(" "), h = sT(i, l), b = !!(l.outside && !i.showOutsideDays || l.hidden), v = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : TN, g = f.jsx(v, { date: e, displayMonth: t, activeModifiers: l }), y = {
    style: h,
    className: m,
    children: g,
    role: "gridcell"
  }, w = s.focusTarget && Et(s.focusTarget, e) && !l.outside, x = s.focusedDay && Et(s.focusedDay, e), S = fe(fe(fe({}, y), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = x || w ? 0 : -1, r)), c), C = {
    isButton: p,
    isHidden: b,
    activeModifiers: l,
    selectedDays: d,
    buttonProps: S,
    divProps: y
  };
  return C;
}
function cT(e) {
  var t = it(null), n = lT(e.date, e.displayMonth, t);
  return n.isHidden ? f.jsx("div", { role: "gridcell" }) : n.isButton ? f.jsx(oi, fe({ name: "day", ref: t }, n.buttonProps)) : f.jsx("div", fe({}, n.divProps));
}
function uT(e) {
  var t = e.number, n = e.dates, r = He(), o = r.onWeekNumberClick, a = r.styles, i = r.classNames, s = r.locale, l = r.labels.labelWeekNumber, c = r.formatters.formatWeekNumber, d = c(Number(t), { locale: s });
  if (!o)
    return f.jsx("span", { className: i.weeknumber, style: a.weeknumber, children: d });
  var p = l(Number(t), { locale: s }), m = function(h) {
    o(t, n, h);
  };
  return f.jsx(oi, { name: "week-number", "aria-label": p, className: i.weeknumber, style: a.weeknumber, onClick: m, children: d });
}
function dT(e) {
  var t, n, r = He(), o = r.styles, a = r.classNames, i = r.showWeekNumber, s = r.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : cT, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : uT, d;
  return i && (d = f.jsx("td", { className: a.cell, style: o.cell, children: f.jsx(c, { number: e.weekNumber, dates: e.dates }) })), f.jsxs("tr", { className: a.row, style: o.row, children: [d, e.dates.map(function(p) {
    return f.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: f.jsx(l, { displayMonth: e.displayMonth, date: p }) }, zR(p));
  })] });
}
function Nf(e, t, n) {
  for (var r = n != null && n.ISOWeek ? lv(t) : ou(t, n), o = n != null && n.ISOWeek ? lr(e) : pn(e, n), a = cn(r, o), i = [], s = 0; s <= a; s++)
    i.push(bt(o, s));
  var l = i.reduce(function(c, d) {
    var p = n != null && n.ISOWeek ? uv(d) : fv(d, n), m = c.find(function(h) {
      return h.weekNumber === p;
    });
    return m ? (m.dates.push(d), c) : (c.push({
      weekNumber: p,
      dates: [d]
    }), c);
  }, []);
  return l;
}
function fT(e, t) {
  var n = Nf(Pt(e), ru(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = WR(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], i = Il(a, 6 - r), s = Nf(Il(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function pT(e) {
  var t, n, r, o = He(), a = o.locale, i = o.classNames, s = o.styles, l = o.hideHead, c = o.fixedWeeks, d = o.components, p = o.weekStartsOn, m = o.firstWeekContainsDate, h = o.ISOWeek, b = fT(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: h,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: m
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : NN, g = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : dT, y = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : EN;
  return f.jsxs("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && f.jsx(v, {}), f.jsx("tbody", { className: i.tbody, style: s.tbody, children: b.map(function(w) {
    return f.jsx(g, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), f.jsx(y, { displayMonth: e.displayMonth })] });
}
function mT() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var hT = mT() ? Ii : ft, Qs = !1, vT = 0;
function Tf() {
  return "react-day-picker-".concat(++vT);
}
function gT(e) {
  var t, n = e ?? (Qs ? Tf() : null), r = yt(n), o = r[0], a = r[1];
  return hT(function() {
    o === null && a(Tf());
  }, []), ft(function() {
    Qs === !1 && (Qs = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function bT(e) {
  var t, n, r = He(), o = r.dir, a = r.classNames, i = r.styles, s = r.components, l = ca().displayMonths, c = gT(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], m = i.month, h = e.displayIndex === 0, b = e.displayIndex === l.length - 1, v = !h && !b;
  o === "rtl" && (t = [h, b], b = t[0], h = t[1]), h && (p.push(a.caption_start), m = fe(fe({}, m), i.caption_start)), b && (p.push(a.caption_end), m = fe(fe({}, m), i.caption_end)), v && (p.push(a.caption_between), m = fe(fe({}, m), i.caption_between));
  var g = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : _N;
  return f.jsxs("div", { className: p.join(" "), style: m, children: [f.jsx(g, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), f.jsx(pT, { id: d, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function yT(e) {
  var t = He(), n = t.classNames, r = t.styles;
  return f.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function wT(e) {
  var t, n, r = e.initialProps, o = He(), a = du(), i = ca(), s = yt(!1), l = s[0], c = s[1];
  ft(function() {
    o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), c(!0)));
  }, [
    o.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var p = fe(fe({}, o.styles.root), o.style), m = Object.keys(r).filter(function(b) {
    return b.startsWith("data-");
  }).reduce(function(b, v) {
    var g;
    return fe(fe({}, b), (g = {}, g[v] = r[v], g));
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : yT;
  return f.jsx("div", fe({ className: d.join(" "), style: p, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, m, { children: f.jsx(h, { children: i.displayMonths.map(function(b, v) {
    return f.jsx(bT, { displayIndex: v, displayMonth: b }, v);
  }) }) }));
}
function xT(e) {
  var t = e.children, n = GR(e, ["children"]);
  return f.jsx(uN, { initialProps: n, children: f.jsx(wN, { children: f.jsx(tT, { initialProps: n, children: f.jsx(MN, { initialProps: n, children: f.jsx(DN, { initialProps: n, children: f.jsx(zN, { children: f.jsx(QN, { children: t }) }) }) }) }) }) });
}
function ST(e) {
  return f.jsx(xT, fe({}, e, { children: f.jsx(wT, { initialProps: e }) }));
}
function CT({ className: e, classNames: t, showOutsideDays: n = !0, ...r }) {
  return /* @__PURE__ */ f.jsx(
    ST,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          zr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: T(zr({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.jsx(Km, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.jsx(Zr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
CT.displayName = "Calendar";
const _T = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, className: T("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
_T.displayName = "Card";
const ET = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, className: T("flex flex-col space-y-1.5 p-6", e), ...t })
);
ET.displayName = "CardHeader";
const PT = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("h3", { ref: n, className: T("text-2xl font-semibold leading-none tracking-tight", e), ...t })
);
PT.displayName = "CardTitle";
const RT = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("p", { ref: n, className: T("text-sm text-muted-foreground", e), ...t })
);
RT.displayName = "CardDescription";
const NT = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, className: T("p-6 pt-0", e), ...t })
);
NT.displayName = "CardContent";
const TT = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, className: T("flex items-center p-6 pt-0", e), ...t })
);
TT.displayName = "CardFooter";
function MT(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Mf(e) {
  return MT(e) || Array.isArray(e);
}
function OT() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function pu(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !Mf(s) || !Mf(l) ? s === l : pu(s, l);
  });
}
function Of(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function AT(e, t) {
  if (e.length !== t.length) return !1;
  const n = Of(e), r = Of(t);
  return n.every((o, a) => {
    const i = r[a];
    return pu(o, i);
  });
}
function mu(e) {
  return typeof e == "number";
}
function jl(e) {
  return typeof e == "string";
}
function Yi(e) {
  return typeof e == "boolean";
}
function Af(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Je(e) {
  return Math.abs(e);
}
function hu(e) {
  return Math.sign(e);
}
function $o(e, t) {
  return Je(e - t);
}
function DT(e, t) {
  if (e === 0 || t === 0 || Je(e) <= Je(t)) return 0;
  const n = $o(Je(e), Je(t));
  return Je(n / e);
}
function IT(e) {
  return Math.round(e * 100) / 100;
}
function Lo(e) {
  return Fo(e).map(Number);
}
function Kt(e) {
  return e[ua(e)];
}
function ua(e) {
  return Math.max(0, e.length - 1);
}
function vu(e, t) {
  return t === ua(e);
}
function Df(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Fo(e) {
  return Object.keys(e);
}
function Ev(e, t) {
  return [e, t].reduce((n, r) => (Fo(r).forEach((o) => {
    const a = n[o], i = r[o], s = Af(a) && Af(i);
    n[o] = s ? Ev(a, i) : i;
  }), n), {});
}
function kl(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function $T(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function i(l, c) {
    return jl(e) ? n[e](l) : e(t, l, c);
  }
  return {
    measure: i
  };
}
function Bo() {
  let e = [];
  function t(o, a, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(a, i, s), l = () => o.removeEventListener(a, i, s);
    else {
      const c = o;
      c.addListener(i), l = () => c.removeListener(i);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function jT(e, t, n, r) {
  const o = Bo(), a = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function c() {
    o.add(e, "visibilitychange", () => {
      e.hidden && b();
    });
  }
  function d() {
    h(), o.clear();
  }
  function p(g) {
    if (!l) return;
    i || (i = g, n(), n());
    const y = g - i;
    for (i = g, s += y; s >= a; )
      n(), s -= a;
    const w = s / a;
    r(w), l && (l = t.requestAnimationFrame(p));
  }
  function m() {
    l || (l = t.requestAnimationFrame(p));
  }
  function h() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function b() {
    i = null, s = 0;
  }
  return {
    init: c,
    destroy: d,
    start: m,
    stop: h,
    update: n,
    render: r
  };
}
function kT(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", i = !r && n ? -1 : 1, s = d(), l = p();
  function c(b) {
    const {
      height: v,
      width: g
    } = b;
    return r ? v : g;
  }
  function d() {
    return r ? "top" : n ? "right" : "left";
  }
  function p() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function m(b) {
    return b * i;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: c,
    direction: m
  };
}
function cr(e = 0, t = 0) {
  const n = Je(e - t);
  function r(c) {
    return c < e;
  }
  function o(c) {
    return c > t;
  }
  function a(c) {
    return r(c) || o(c);
  }
  function i(c) {
    return a(c) ? r(c) ? e : t : c;
  }
  function s(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: s
  };
}
function Pv(e, t, n) {
  const {
    constrain: r
  } = cr(0, e), o = e + 1;
  let a = i(t);
  function i(m) {
    return n ? Je((o + m) % o) : r(m);
  }
  function s() {
    return a;
  }
  function l(m) {
    return a = i(m), p;
  }
  function c(m) {
    return d().set(s() + m);
  }
  function d() {
    return Pv(e, s(), n);
  }
  const p = {
    get: s,
    set: l,
    add: c,
    clone: d
  };
  return p;
}
function LT(e, t, n, r, o, a, i, s, l, c, d, p, m, h, b, v, g, y, w) {
  const {
    cross: x,
    direction: S
  } = e, C = ["INPUT", "SELECT", "TEXTAREA"], E = {
    passive: !1
  }, _ = Bo(), O = Bo(), N = cr(50, 225).constrain(h.measure(20)), B = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, k = b ? 43 : 25;
  let V = !1, $ = 0, K = 0, G = !1, F = !1, I = !1, L = !1;
  function ne(J) {
    if (!w) return;
    function q(ae) {
      (Yi(w) || w(J, ae)) && X(ae);
    }
    const z = t;
    _.add(z, "dragstart", (ae) => ae.preventDefault(), E).add(z, "touchmove", () => {
    }, E).add(z, "touchend", () => {
    }).add(z, "touchstart", q).add(z, "mousedown", q).add(z, "touchcancel", Y).add(z, "contextmenu", Y).add(z, "click", Q, !0);
  }
  function re() {
    _.clear(), O.clear();
  }
  function j() {
    const J = L ? n : t;
    O.add(J, "touchmove", A, E).add(J, "touchend", Y).add(J, "mousemove", A, E).add(J, "mouseup", Y);
  }
  function D(J) {
    const q = J.nodeName || "";
    return C.includes(q);
  }
  function H() {
    return (b ? M : B)[L ? "mouse" : "touch"];
  }
  function U(J, q) {
    const z = p.add(hu(J) * -1), ae = d.byDistance(J, !b).distance;
    return b || Je(J) < N ? ae : g && q ? ae * 0.5 : d.byIndex(z.get(), 0).distance;
  }
  function X(J) {
    const q = kl(J, r);
    L = q, I = b && q && !J.buttons && V, V = $o(o.get(), i.get()) >= 2, !(q && J.button !== 0) && (D(J.target) || (G = !0, a.pointerDown(J), c.useFriction(0).useDuration(0), o.set(i), j(), $ = a.readPoint(J), K = a.readPoint(J, x), m.emit("pointerDown")));
  }
  function A(J) {
    if (!kl(J, r) && J.touches.length >= 2) return Y(J);
    const z = a.readPoint(J), ae = a.readPoint(J, x), ce = $o(z, $), ve = $o(ae, K);
    if (!F && !L && (!J.cancelable || (F = ce > ve, !F)))
      return Y(J);
    const pe = a.pointerMove(J);
    ce > v && (I = !0), c.useFriction(0.3).useDuration(0.75), s.start(), o.add(S(pe)), J.preventDefault();
  }
  function Y(J) {
    const z = d.byDistance(0, !1).index !== p.get(), ae = a.pointerUp(J) * H(), ce = U(S(ae), z), ve = DT(ae, ce), pe = k - 10 * ve, ue = y + ve / 50;
    F = !1, G = !1, O.clear(), c.useDuration(pe).useFriction(ue), l.distance(ce, !b), L = !1, m.emit("pointerUp");
  }
  function Q(J) {
    I && (J.stopPropagation(), J.preventDefault(), I = !1);
  }
  function te() {
    return G;
  }
  return {
    init: ne,
    destroy: re,
    pointerDown: te
  };
}
function FT(e, t) {
  let r, o;
  function a(p) {
    return p.timeStamp;
  }
  function i(p, m) {
    const b = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (kl(p, t) ? p : p.touches[0])[b];
  }
  function s(p) {
    return r = p, o = p, i(p);
  }
  function l(p) {
    const m = i(p) - i(o), h = a(p) - a(r) > 170;
    return o = p, h && (r = p), m;
  }
  function c(p) {
    if (!r || !o) return 0;
    const m = i(o) - i(r), h = a(p) - a(r), b = a(p) - a(o) > 170, v = m / h;
    return h && !b && Je(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: c,
    readPoint: i
  };
}
function BT() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + i,
      left: o,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function zT(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function HT(e, t, n, r, o, a, i) {
  const s = [e].concat(r);
  let l, c, d = [], p = !1;
  function m(g) {
    return o.measureSize(i.measure(g));
  }
  function h(g) {
    if (!a) return;
    c = m(e), d = r.map(m);
    function y(w) {
      for (const x of w) {
        if (p) return;
        const S = x.target === e, C = r.indexOf(x.target), E = S ? c : d[C], _ = m(S ? e : r[C]);
        if (Je(_ - E) >= 0.5) {
          g.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((w) => {
      (Yi(a) || a(g, w)) && y(w);
    }), n.requestAnimationFrame(() => {
      s.forEach((w) => l.observe(w));
    });
  }
  function b() {
    p = !0, l && l.disconnect();
  }
  return {
    init: h,
    destroy: b
  };
}
function WT(e, t, n, r, o, a) {
  let i = 0, s = 0, l = o, c = a, d = e.get(), p = 0;
  function m() {
    const E = r.get() - e.get(), _ = !l;
    let O = 0;
    return _ ? (i = 0, n.set(r), e.set(r), O = E) : (n.set(e), i += E / l, i *= c, d += i, e.add(i), O = d - p), s = hu(O), p = d, C;
  }
  function h() {
    const E = r.get() - t.get();
    return Je(E) < 1e-3;
  }
  function b() {
    return l;
  }
  function v() {
    return s;
  }
  function g() {
    return i;
  }
  function y() {
    return x(o);
  }
  function w() {
    return S(a);
  }
  function x(E) {
    return l = E, C;
  }
  function S(E) {
    return c = E, C;
  }
  const C = {
    direction: v,
    duration: b,
    velocity: g,
    seek: m,
    settled: h,
    useBaseFriction: w,
    useBaseDuration: y,
    useFriction: S,
    useDuration: x
  };
  return C;
}
function VT(e, t, n, r, o) {
  const a = o.measure(10), i = o.measure(50), s = cr(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(h) {
    if (!c()) return;
    const b = e.reachedMin(t.get()) ? "min" : "max", v = Je(e[b] - t.get()), g = n.get() - t.get(), y = s.constrain(v / i);
    n.subtract(g * y), !h && Je(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function p(h) {
    l = !h;
  }
  return {
    shouldConstrain: c,
    constrain: d,
    toggleActive: p
  };
}
function GT(e, t, n, r, o) {
  const a = cr(-t + e, 0), i = p(), s = d(), l = m();
  function c(b, v) {
    return $o(b, v) <= 1;
  }
  function d() {
    const b = i[0], v = Kt(i), g = i.lastIndexOf(b), y = i.indexOf(v) + 1;
    return cr(g, y);
  }
  function p() {
    return n.map((b, v) => {
      const {
        min: g,
        max: y
      } = a, w = a.constrain(b), x = !v, S = vu(n, v);
      return x ? y : S || c(g, w) ? g : c(y, w) ? y : w;
    }).map((b) => parseFloat(b.toFixed(3)));
  }
  function m() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return i;
    const {
      min: b,
      max: v
    } = s;
    return i.slice(b, v);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function UT(e, t, n) {
  const r = t[0], o = n ? r - e : Kt(t);
  return {
    limit: cr(o, r)
  };
}
function KT(e, t, n, r) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = cr(a, i);
  function c(m) {
    return m === 1 ? l(n.get()) : m === -1 ? s(n.get()) : !1;
  }
  function d(m) {
    if (!c(m)) return;
    const h = e * (m * -1);
    r.forEach((b) => b.add(h));
  }
  return {
    loop: d
  };
}
function YT(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: r
  };
}
function qT(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = o, l = p().map(t.measure), c = m(), d = h();
  function p() {
    return s(r).map((v) => Kt(v)[i] - v[0][a]).map(Je);
  }
  function m() {
    return r.map((v) => n[a] - v[a]).map((v) => -Je(v));
  }
  function h() {
    return s(c).map((v) => v[0]).map((v, g) => v + l[g]);
  }
  return {
    snaps: c,
    snapsAligned: d
  };
}
function XT(e, t, n, r, o, a) {
  const {
    groupSlides: i
  } = o, {
    min: s,
    max: l
  } = r, c = d();
  function d() {
    const m = i(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? m : m.slice(s, l).map((b, v, g) => {
      const y = !v, w = vu(g, v);
      if (y) {
        const x = Kt(g[0]) + 1;
        return Df(x);
      }
      if (w) {
        const x = ua(a) - Kt(g)[0] + 1;
        return Df(x, Kt(g)[0]);
      }
      return b;
    });
  }
  return {
    slideRegistry: c
  };
}
function JT(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = r;
  function l(b) {
    return b.concat().sort((v, g) => Je(v) - Je(g))[0];
  }
  function c(b) {
    const v = e ? i(b) : s(b), g = t.map((w, x) => ({
      diff: d(w - v, 0),
      index: x
    })).sort((w, x) => Je(w.diff) - Je(x.diff)), {
      index: y
    } = g[0];
    return {
      index: y,
      distance: v
    };
  }
  function d(b, v) {
    const g = [b, b + n, b - n];
    if (!e) return b;
    if (!v) return l(g);
    const y = g.filter((w) => hu(w) === v);
    return y.length ? l(y) : Kt(g) - n;
  }
  function p(b, v) {
    const g = t[b] - o.get(), y = d(g, v);
    return {
      index: b,
      distance: y
    };
  }
  function m(b, v) {
    const g = o.get() + b, {
      index: y,
      distance: w
    } = c(g), x = !e && a(g);
    if (!v || x) return {
      index: y,
      distance: b
    };
    const S = t[y] - w, C = b + d(S, 0);
    return {
      index: y,
      distance: C
    };
  }
  return {
    byDistance: m,
    byIndex: p,
    shortcut: d
  };
}
function ZT(e, t, n, r, o, a, i) {
  function s(p) {
    const m = p.distance, h = p.index !== t.get();
    a.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(p.index), i.emit("select"));
  }
  function l(p, m) {
    const h = o.byDistance(p, m);
    s(h);
  }
  function c(p, m) {
    const h = t.clone().set(p), b = o.byIndex(h.get(), m);
    s(b);
  }
  return {
    distance: l,
    index: c
  };
}
function QT(e, t, n, r, o, a, i, s) {
  const l = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function d(h) {
    if (!s) return;
    function b(v) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const w = n.findIndex((x) => x.includes(v));
      mu(w) && (o.useDuration(0), r.index(w, 0), i.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((v, g) => {
      a.add(v, "focus", (y) => {
        (Yi(s) || s(h, y)) && b(g);
      }, l);
    });
  }
  function p(h) {
    h.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function To(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = i(l);
  }
  function o(l) {
    t += i(l);
  }
  function a(l) {
    t -= i(l);
  }
  function i(l) {
    return mu(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function Rv(e, t) {
  const n = e.scroll === "x" ? i : s, r = t.style;
  let o = null, a = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function s(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function l(m) {
    if (a) return;
    const h = IT(e.direction(m));
    h !== o && (r.transform = n(h), o = h);
  }
  function c(m) {
    a = !m;
  }
  function d() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: l,
    toggleActive: c
  };
}
function eM(e, t, n, r, o, a, i, s, l) {
  const d = Lo(o), p = Lo(o).reverse(), m = y().concat(w());
  function h(_, O) {
    return _.reduce((N, B) => N - o[B], O);
  }
  function b(_, O) {
    return _.reduce((N, B) => h(N, O) > 0 ? N.concat([B]) : N, []);
  }
  function v(_) {
    return a.map((O, N) => ({
      start: O - r[N] + 0.5 + _,
      end: O + t - 0.5 + _
    }));
  }
  function g(_, O, N) {
    const B = v(O);
    return _.map((M) => {
      const k = N ? 0 : -n, V = N ? n : 0, $ = N ? "end" : "start", K = B[M][$];
      return {
        index: M,
        loopPoint: K,
        slideLocation: To(-1),
        translate: Rv(e, l[M]),
        target: () => s.get() > K ? k : V
      };
    });
  }
  function y() {
    const _ = i[0], O = b(p, _);
    return g(O, n, !1);
  }
  function w() {
    const _ = t - i[0] - 1, O = b(d, _);
    return g(O, -n, !0);
  }
  function x() {
    return m.every(({
      index: _
    }) => {
      const O = d.filter((N) => N !== _);
      return h(O, t) <= 0.1;
    });
  }
  function S() {
    m.forEach((_) => {
      const {
        target: O,
        translate: N,
        slideLocation: B
      } = _, M = O();
      M !== B.get() && (N.to(M), B.set(M));
    });
  }
  function C() {
    m.forEach((_) => _.translate.clear());
  }
  return {
    canLoop: x,
    clear: C,
    loop: S,
    loopPoints: m
  };
}
function tM(e, t, n) {
  let r, o = !1;
  function a(l) {
    if (!n) return;
    function c(d) {
      for (const p of d)
        if (p.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((d) => {
      o || (Yi(n) || n(l, d)) && c(d);
    }), r.observe(e, {
      childList: !0
    });
  }
  function i() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function nM(e, t, n, r) {
  const o = {};
  let a = null, i = null, s, l = !1;
  function c() {
    s = new IntersectionObserver((b) => {
      l || (b.forEach((v) => {
        const g = t.indexOf(v.target);
        o[g] = v;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((b) => s.observe(b));
  }
  function d() {
    s && s.disconnect(), l = !0;
  }
  function p(b) {
    return Fo(o).reduce((v, g) => {
      const y = parseInt(g), {
        isIntersecting: w
      } = o[y];
      return (b && w || !b && !w) && v.push(y), v;
    }, []);
  }
  function m(b = !0) {
    if (b && a) return a;
    if (!b && i) return i;
    const v = p(b);
    return b && (a = v), b || (i = v), v;
  }
  return {
    init: c,
    destroy: d,
    get: m
  };
}
function rM(e, t, n, r, o, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, c = n[0] && o, d = b(), p = v(), m = n.map(i), h = g();
  function b() {
    if (!c) return 0;
    const w = n[0];
    return Je(t[s] - w[s]);
  }
  function v() {
    if (!c) return 0;
    const w = a.getComputedStyle(Kt(r));
    return parseFloat(w.getPropertyValue(`margin-${l}`));
  }
  function g() {
    return n.map((w, x, S) => {
      const C = !x, E = vu(S, x);
      return C ? m[x] + d : E ? m[x] + p : S[x + 1][s] - w[s];
    }).map(Je);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: h,
    startGap: d,
    endGap: p
  };
}
function oM(e, t, n, r, o, a, i, s, l) {
  const {
    startEdge: c,
    endEdge: d,
    direction: p
  } = e, m = mu(n);
  function h(y, w) {
    return Lo(y).filter((x) => x % w === 0).map((x) => y.slice(x, x + w));
  }
  function b(y) {
    return y.length ? Lo(y).reduce((w, x, S) => {
      const C = Kt(w) || 0, E = C === 0, _ = x === ua(y), O = o[c] - a[C][c], N = o[c] - a[x][d], B = !r && E ? p(i) : 0, M = !r && _ ? p(s) : 0, k = Je(N - M - (O + B));
      return S && k > t + l && w.push(x), _ && w.push(y.length), w;
    }, []).map((w, x, S) => {
      const C = Math.max(S[x - 1] || 0);
      return y.slice(C, w);
    }) : [];
  }
  function v(y) {
    return m ? h(y, n) : b(y);
  }
  return {
    groupSlides: v
  };
}
function aM(e, t, n, r, o, a, i) {
  const {
    align: s,
    axis: l,
    direction: c,
    startIndex: d,
    loop: p,
    duration: m,
    dragFree: h,
    dragThreshold: b,
    inViewThreshold: v,
    slidesToScroll: g,
    skipSnaps: y,
    containScroll: w,
    watchResize: x,
    watchSlides: S,
    watchDrag: C,
    watchFocus: E
  } = a, _ = 2, O = BT(), N = O.measure(t), B = n.map(O.measure), M = kT(l, c), k = M.measureSize(N), V = zT(k), $ = $T(s, k), K = !p && !!w, G = p || !!w, {
    slideSizes: F,
    slideSizesWithGaps: I,
    startGap: L,
    endGap: ne
  } = rM(M, N, B, n, G, o), re = oM(M, k, g, p, N, B, L, ne, _), {
    snaps: j,
    snapsAligned: D
  } = qT(M, $, N, B, re), H = -Kt(j) + Kt(I), {
    snapsContained: U,
    scrollContainLimit: X
  } = GT(k, H, D, w, _), A = K ? U : D, {
    limit: Y
  } = UT(H, A, p), Q = Pv(ua(A), d, p), te = Q.clone(), oe = Lo(n), J = ({
    dragHandler: lt,
    scrollBody: ct,
    scrollBounds: Tt,
    options: {
      loop: tt
    }
  }) => {
    tt || Tt.constrain(lt.pointerDown()), ct.seek();
  }, q = ({
    scrollBody: lt,
    translate: ct,
    location: Tt,
    offsetLocation: tt,
    previousLocation: ut,
    scrollLooper: sn,
    slideLooper: It,
    dragHandler: Zn,
    animation: de,
    eventHandler: we,
    scrollBounds: Ee,
    options: {
      loop: xe
    }
  }, ye) => {
    const je = lt.settled(), Ze = !Ee.shouldConstrain(), le = xe ? je : je && Ze, me = le && !Zn.pointerDown();
    me && de.stop();
    const Se = Tt.get() * ye + ut.get() * (1 - ye);
    tt.set(Se), xe && (sn.loop(lt.direction()), It.loop()), ct.to(tt.get()), me && we.emit("settle"), le || we.emit("scroll");
  }, z = jT(r, o, () => J(wt), (lt) => q(wt, lt)), ae = 0.68, ce = A[Q.get()], ve = To(ce), pe = To(ce), ue = To(ce), Re = To(ce), Be = WT(ve, ue, pe, Re, m, ae), Ne = JT(p, A, H, Y, Re), We = ZT(z, Q, te, Be, Ne, Re, i), rt = YT(Y), st = Bo(), Ie = nM(t, n, i, v), {
    slideRegistry: $e
  } = XT(K, w, A, X, re, oe), an = QT(e, n, $e, We, Be, st, i, E), wt = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: i,
    containerRect: N,
    slideRects: B,
    animation: z,
    axis: M,
    dragHandler: LT(M, e, r, o, Re, FT(M, o), ve, z, We, Be, Ne, Q, i, V, h, b, y, ae, C),
    eventStore: st,
    percentOfView: V,
    index: Q,
    indexPrevious: te,
    limit: Y,
    location: ve,
    offsetLocation: ue,
    previousLocation: pe,
    options: a,
    resizeHandler: HT(t, i, o, n, M, x, O),
    scrollBody: Be,
    scrollBounds: VT(Y, ue, Re, Be, V),
    scrollLooper: KT(H, Y, ue, [ve, ue, pe, Re]),
    scrollProgress: rt,
    scrollSnapList: A.map(rt.get),
    scrollSnaps: A,
    scrollTarget: Ne,
    scrollTo: We,
    slideLooper: eM(M, k, H, F, I, j, A, ue, n),
    slideFocus: an,
    slidesHandler: tM(t, i, S),
    slidesInView: Ie,
    slideIndexes: oe,
    slideRegistry: $e,
    slidesToScroll: re,
    target: Re,
    translate: Rv(M, t)
  };
  return wt;
}
function iM() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((d) => d(t, c)), l;
  }
  function a(c, d) {
    return e[c] = r(c).concat([d]), l;
  }
  function i(c, d) {
    return e[c] = r(c).filter((p) => p !== d), l;
  }
  function s() {
    e = {};
  }
  const l = {
    init: n,
    emit: o,
    off: i,
    on: a,
    clear: s
  };
  return l;
}
const sM = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function lM(e) {
  function t(a, i) {
    return Ev(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = Fo(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, c) => t(l, c), {});
    return t(a, s);
  }
  function r(a) {
    return a.map((i) => Fo(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function cM(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function ai(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = lM(o), i = cM(a), s = Bo(), l = iM(), {
    mergeOptions: c,
    optionsAtMedia: d,
    optionsMediaQueries: p
  } = a, {
    on: m,
    off: h,
    emit: b
  } = l, v = M;
  let g = !1, y, w = c(sM, ai.globalOptions), x = c(w), S = [], C, E, _;
  function O() {
    const {
      container: oe,
      slides: J
    } = x;
    E = (jl(oe) ? e.querySelector(oe) : oe) || e.children[0];
    const z = jl(J) ? E.querySelectorAll(J) : J;
    _ = [].slice.call(z || E.children);
  }
  function N(oe) {
    const J = aM(e, E, _, r, o, oe, l);
    if (oe.loop && !J.slideLooper.canLoop()) {
      const q = Object.assign({}, oe, {
        loop: !1
      });
      return N(q);
    }
    return J;
  }
  function B(oe, J) {
    g || (w = c(w, oe), x = d(w), S = J || S, O(), y = N(x), p([w, ...S.map(({
      options: q
    }) => q)]).forEach((q) => s.add(q, "change", M)), x.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(te), y.eventHandler.init(te), y.resizeHandler.init(te), y.slidesHandler.init(te), y.options.loop && y.slideLooper.loop(), E.offsetParent && _.length && y.dragHandler.init(te), C = i.init(te, S)));
  }
  function M(oe, J) {
    const q = re();
    k(), B(c({
      startIndex: q
    }, oe), J), l.emit("reInit");
  }
  function k() {
    y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), i.destroy(), s.clear();
  }
  function V() {
    g || (g = !0, s.clear(), k(), l.emit("destroy"), l.clear());
  }
  function $(oe, J, q) {
    !x.active || g || (y.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : x.duration), y.scrollTo.index(oe, q || 0));
  }
  function K(oe) {
    const J = y.index.add(1).get();
    $(J, oe, -1);
  }
  function G(oe) {
    const J = y.index.add(-1).get();
    $(J, oe, 1);
  }
  function F() {
    return y.index.add(1).get() !== re();
  }
  function I() {
    return y.index.add(-1).get() !== re();
  }
  function L() {
    return y.scrollSnapList;
  }
  function ne() {
    return y.scrollProgress.get(y.offsetLocation.get());
  }
  function re() {
    return y.index.get();
  }
  function j() {
    return y.indexPrevious.get();
  }
  function D() {
    return y.slidesInView.get();
  }
  function H() {
    return y.slidesInView.get(!1);
  }
  function U() {
    return C;
  }
  function X() {
    return y;
  }
  function A() {
    return e;
  }
  function Y() {
    return E;
  }
  function Q() {
    return _;
  }
  const te = {
    canScrollNext: F,
    canScrollPrev: I,
    containerNode: Y,
    internalEngine: X,
    destroy: V,
    off: h,
    on: m,
    emit: b,
    plugins: U,
    previousScrollSnap: j,
    reInit: v,
    rootNode: A,
    scrollNext: K,
    scrollPrev: G,
    scrollProgress: ne,
    scrollSnapList: L,
    scrollTo: $,
    selectedScrollSnap: re,
    slideNodes: Q,
    slidesInView: D,
    slidesNotInView: H
  };
  return B(t, n), setTimeout(() => l.emit("init"), 0), te;
}
ai.globalOptions = void 0;
function gu(e = {}, t = []) {
  const n = it(e), r = it(t), [o, a] = yt(), [i, s] = yt(), l = dt(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return ft(() => {
    pu(n.current, e) || (n.current = e, l());
  }, [e, l]), ft(() => {
    AT(r.current, t) || (r.current = t, l());
  }, [t, l]), ft(() => {
    if (OT() && i) {
      ai.globalOptions = gu.globalOptions;
      const c = ai(i, n.current, r.current);
      return a(c), () => c.destroy();
    } else
      a(void 0);
  }, [i, a]), [s, o];
}
gu.globalOptions = void 0;
const Nv = u.createContext(null);
function qi() {
  const e = u.useContext(Nv);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const uM = u.forwardRef(
  ({ orientation: e = "horizontal", opts: t, setApi: n, plugins: r, className: o, children: a, ...i }, s) => {
    const [l, c] = gu(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [d, p] = u.useState(!1), [m, h] = u.useState(!1), b = u.useCallback((w) => {
      w && (p(w.canScrollPrev()), h(w.canScrollNext()));
    }, []), v = u.useCallback(() => {
      c == null || c.scrollPrev();
    }, [c]), g = u.useCallback(() => {
      c == null || c.scrollNext();
    }, [c]), y = u.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), v()) : w.key === "ArrowRight" && (w.preventDefault(), g());
      },
      [v, g]
    );
    return u.useEffect(() => {
      !c || !n || n(c);
    }, [c, n]), u.useEffect(() => {
      if (c)
        return b(c), c.on("reInit", b), c.on("select", b), () => {
          c == null || c.off("select", b);
        };
    }, [c, b]), /* @__PURE__ */ f.jsx(
      Nv.Provider,
      {
        value: {
          carouselRef: l,
          api: c,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: d,
          canScrollNext: m
        },
        children: /* @__PURE__ */ f.jsx(
          "div",
          {
            ref: s,
            onKeyDownCapture: y,
            className: T("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: a
          }
        )
      }
    );
  }
);
uM.displayName = "Carousel";
const dM = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { carouselRef: r, orientation: o } = qi();
    return /* @__PURE__ */ f.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: n,
        className: T("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
        ...t
      }
    ) });
  }
);
dM.displayName = "CarouselContent";
const fM = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { orientation: r } = qi();
    return /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: n,
        role: "group",
        "aria-roledescription": "slide",
        className: T("min-w-0 shrink-0 grow-0 basis-full", r === "horizontal" ? "pl-4" : "pt-4", e),
        ...t
      }
    );
  }
);
fM.displayName = "CarouselItem";
const pM = u.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: a, scrollPrev: i, canScrollPrev: s } = qi();
    return /* @__PURE__ */ f.jsxs(
      Ui,
      {
        ref: o,
        variant: t,
        size: n,
        className: T(
          "absolute h-8 w-8 rounded-full",
          a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          e
        ),
        disabled: !s,
        onClick: i,
        ...r,
        children: [
          /* @__PURE__ */ f.jsx(U_, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
pM.displayName = "CarouselPrevious";
const mM = u.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: a, scrollNext: i, canScrollNext: s } = qi();
    return /* @__PURE__ */ f.jsxs(
      Ui,
      {
        ref: o,
        variant: t,
        size: n,
        className: T(
          "absolute h-8 w-8 rounded-full",
          a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          e
        ),
        disabled: !s,
        onClick: i,
        ...r,
        children: [
          /* @__PURE__ */ f.jsx(K_, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
mM.displayName = "CarouselNext";
var hM = Array.isArray, nn = hM, vM = typeof Na == "object" && Na && Na.Object === Object && Na, Tv = vM, gM = Tv, bM = typeof self == "object" && self && self.Object === Object && self, yM = gM || bM || Function("return this")(), vn = yM, wM = vn, xM = wM.Symbol, da = xM, If = da, Mv = Object.prototype, SM = Mv.hasOwnProperty, CM = Mv.toString, Co = If ? If.toStringTag : void 0;
function _M(e) {
  var t = SM.call(e, Co), n = e[Co];
  try {
    e[Co] = void 0;
    var r = !0;
  } catch {
  }
  var o = CM.call(e);
  return r && (t ? e[Co] = n : delete e[Co]), o;
}
var EM = _M, PM = Object.prototype, RM = PM.toString;
function NM(e) {
  return RM.call(e);
}
var TM = NM, $f = da, MM = EM, OM = TM, AM = "[object Null]", DM = "[object Undefined]", jf = $f ? $f.toStringTag : void 0;
function IM(e) {
  return e == null ? e === void 0 ? DM : AM : jf && jf in Object(e) ? MM(e) : OM(e);
}
var xr = IM;
function $M(e) {
  return e != null && typeof e == "object";
}
var Sr = $M, jM = xr, kM = Sr, LM = "[object Symbol]";
function FM(e) {
  return typeof e == "symbol" || kM(e) && jM(e) == LM;
}
var fa = FM, BM = nn, zM = fa, HM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, WM = /^\w*$/;
function VM(e, t) {
  if (BM(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || zM(e) ? !0 : WM.test(e) || !HM.test(e) || t != null && e in Object(t);
}
var bu = VM;
function GM(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Un = GM;
const Ov = /* @__PURE__ */ hn(Un);
var UM = xr, KM = Un, YM = "[object AsyncFunction]", qM = "[object Function]", XM = "[object GeneratorFunction]", JM = "[object Proxy]";
function ZM(e) {
  if (!KM(e))
    return !1;
  var t = UM(e);
  return t == qM || t == XM || t == YM || t == JM;
}
var yu = ZM;
const ii = /* @__PURE__ */ hn(yu);
var QM = vn, eO = QM["__core-js_shared__"], tO = eO, el = tO, kf = function() {
  var e = /[^.]+$/.exec(el && el.keys && el.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nO(e) {
  return !!kf && kf in e;
}
var rO = nO, oO = Function.prototype, aO = oO.toString;
function iO(e) {
  if (e != null) {
    try {
      return aO.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Av = iO, sO = yu, lO = rO, cO = Un, uO = Av, dO = /[\\^$.*+?()[\]{}|]/g, fO = /^\[object .+?Constructor\]$/, pO = Function.prototype, mO = Object.prototype, hO = pO.toString, vO = mO.hasOwnProperty, gO = RegExp(
  "^" + hO.call(vO).replace(dO, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bO(e) {
  if (!cO(e) || lO(e))
    return !1;
  var t = sO(e) ? gO : fO;
  return t.test(uO(e));
}
var yO = bO;
function wO(e, t) {
  return e == null ? void 0 : e[t];
}
var xO = wO, SO = yO, CO = xO;
function _O(e, t) {
  var n = CO(e, t);
  return SO(n) ? n : void 0;
}
var Cr = _O, EO = Cr, PO = EO(Object, "create"), Xi = PO, Lf = Xi;
function RO() {
  this.__data__ = Lf ? Lf(null) : {}, this.size = 0;
}
var NO = RO;
function TO(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var MO = TO, OO = Xi, AO = "__lodash_hash_undefined__", DO = Object.prototype, IO = DO.hasOwnProperty;
function $O(e) {
  var t = this.__data__;
  if (OO) {
    var n = t[e];
    return n === AO ? void 0 : n;
  }
  return IO.call(t, e) ? t[e] : void 0;
}
var jO = $O, kO = Xi, LO = Object.prototype, FO = LO.hasOwnProperty;
function BO(e) {
  var t = this.__data__;
  return kO ? t[e] !== void 0 : FO.call(t, e);
}
var zO = BO, HO = Xi, WO = "__lodash_hash_undefined__";
function VO(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = HO && t === void 0 ? WO : t, this;
}
var GO = VO, UO = NO, KO = MO, YO = jO, qO = zO, XO = GO;
function ro(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ro.prototype.clear = UO;
ro.prototype.delete = KO;
ro.prototype.get = YO;
ro.prototype.has = qO;
ro.prototype.set = XO;
var JO = ro;
function ZO() {
  this.__data__ = [], this.size = 0;
}
var QO = ZO;
function eA(e, t) {
  return e === t || e !== e && t !== t;
}
var wu = eA, tA = wu;
function nA(e, t) {
  for (var n = e.length; n--; )
    if (tA(e[n][0], t))
      return n;
  return -1;
}
var Ji = nA, rA = Ji, oA = Array.prototype, aA = oA.splice;
function iA(e) {
  var t = this.__data__, n = rA(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : aA.call(t, n, 1), --this.size, !0;
}
var sA = iA, lA = Ji;
function cA(e) {
  var t = this.__data__, n = lA(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var uA = cA, dA = Ji;
function fA(e) {
  return dA(this.__data__, e) > -1;
}
var pA = fA, mA = Ji;
function hA(e, t) {
  var n = this.__data__, r = mA(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var vA = hA, gA = QO, bA = sA, yA = uA, wA = pA, xA = vA;
function oo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
oo.prototype.clear = gA;
oo.prototype.delete = bA;
oo.prototype.get = yA;
oo.prototype.has = wA;
oo.prototype.set = xA;
var Zi = oo, SA = Cr, CA = vn, _A = SA(CA, "Map"), xu = _A, Ff = JO, EA = Zi, PA = xu;
function RA() {
  this.size = 0, this.__data__ = {
    hash: new Ff(),
    map: new (PA || EA)(),
    string: new Ff()
  };
}
var NA = RA;
function TA(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var MA = TA, OA = MA;
function AA(e, t) {
  var n = e.__data__;
  return OA(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Qi = AA, DA = Qi;
function IA(e) {
  var t = DA(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var $A = IA, jA = Qi;
function kA(e) {
  return jA(this, e).get(e);
}
var LA = kA, FA = Qi;
function BA(e) {
  return FA(this, e).has(e);
}
var zA = BA, HA = Qi;
function WA(e, t) {
  var n = HA(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var VA = WA, GA = NA, UA = $A, KA = LA, YA = zA, qA = VA;
function ao(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ao.prototype.clear = GA;
ao.prototype.delete = UA;
ao.prototype.get = KA;
ao.prototype.has = YA;
ao.prototype.set = qA;
var Su = ao, Dv = Su, XA = "Expected a function";
function Cu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(XA);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Cu.Cache || Dv)(), n;
}
Cu.Cache = Dv;
var JA = Cu, ZA = JA, QA = 500;
function eD(e) {
  var t = ZA(e, function(r) {
    return n.size === QA && n.clear(), r;
  }), n = t.cache;
  return t;
}
var tD = eD, nD = tD, rD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oD = /\\(\\)?/g, aD = nD(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(rD, function(n, r, o, a) {
    t.push(o ? a.replace(oD, "$1") : r || n);
  }), t;
}), iD = aD;
function sD(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Iv = sD, Bf = da, lD = Iv, cD = nn, uD = fa, dD = 1 / 0, zf = Bf ? Bf.prototype : void 0, Hf = zf ? zf.toString : void 0;
function $v(e) {
  if (typeof e == "string")
    return e;
  if (cD(e))
    return lD(e, $v) + "";
  if (uD(e))
    return Hf ? Hf.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -dD ? "-0" : t;
}
var fD = $v, pD = fD;
function mD(e) {
  return e == null ? "" : pD(e);
}
var jv = mD, hD = nn, vD = bu, gD = iD, bD = jv;
function yD(e, t) {
  return hD(e) ? e : vD(e, t) ? [e] : gD(bD(e));
}
var kv = yD, wD = fa, xD = 1 / 0;
function SD(e) {
  if (typeof e == "string" || wD(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -xD ? "-0" : t;
}
var es = SD, CD = kv, _D = es;
function ED(e, t) {
  t = CD(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[_D(t[n++])];
  return n && n == r ? e : void 0;
}
var _u = ED, PD = _u;
function RD(e, t, n) {
  var r = e == null ? void 0 : PD(e, t);
  return r === void 0 ? n : r;
}
var ND = RD;
function TD(e) {
  return e == null;
}
var MD = TD;
const OD = /* @__PURE__ */ hn(MD);
var AD = xr, DD = nn, ID = Sr, $D = "[object String]";
function jD(e) {
  return typeof e == "string" || !DD(e) && ID(e) && AD(e) == $D;
}
var kD = jD;
const Lv = /* @__PURE__ */ hn(kD);
var Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf;
function LD() {
  if (Wf) return Oe;
  Wf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var y = g.$$typeof;
      switch (y) {
        case e:
          switch (g = g.type, g) {
            case n:
            case o:
            case r:
            case c:
            case d:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case i:
                case l:
                case m:
                case p:
                case a:
                  return g;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Oe.ContextConsumer = i, Oe.ContextProvider = a, Oe.Element = e, Oe.ForwardRef = l, Oe.Fragment = n, Oe.Lazy = m, Oe.Memo = p, Oe.Portal = t, Oe.Profiler = o, Oe.StrictMode = r, Oe.Suspense = c, Oe.SuspenseList = d, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(g) {
    return v(g) === i;
  }, Oe.isContextProvider = function(g) {
    return v(g) === a;
  }, Oe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Oe.isForwardRef = function(g) {
    return v(g) === l;
  }, Oe.isFragment = function(g) {
    return v(g) === n;
  }, Oe.isLazy = function(g) {
    return v(g) === m;
  }, Oe.isMemo = function(g) {
    return v(g) === p;
  }, Oe.isPortal = function(g) {
    return v(g) === t;
  }, Oe.isProfiler = function(g) {
    return v(g) === o;
  }, Oe.isStrictMode = function(g) {
    return v(g) === r;
  }, Oe.isSuspense = function(g) {
    return v(g) === c;
  }, Oe.isSuspenseList = function(g) {
    return v(g) === d;
  }, Oe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === o || g === r || g === c || g === d || g === h || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === p || g.$$typeof === a || g.$$typeof === i || g.$$typeof === l || g.$$typeof === b || g.getModuleId !== void 0);
  }, Oe.typeOf = v, Oe;
}
var Ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vf;
function FD() {
  return Vf || (Vf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = !1, v = !1, g = !1, y = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function S(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === n || z === o || w || z === r || z === c || z === d || y || z === h || b || v || g || typeof z == "object" && z !== null && (z.$$typeof === m || z.$$typeof === p || z.$$typeof === a || z.$$typeof === i || z.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === x || z.getModuleId !== void 0));
    }
    function C(z) {
      if (typeof z == "object" && z !== null) {
        var ae = z.$$typeof;
        switch (ae) {
          case e:
            var ce = z.type;
            switch (ce) {
              case n:
              case o:
              case r:
              case c:
              case d:
                return ce;
              default:
                var ve = ce && ce.$$typeof;
                switch (ve) {
                  case s:
                  case i:
                  case l:
                  case m:
                  case p:
                  case a:
                    return ve;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var E = i, _ = a, O = e, N = l, B = n, M = m, k = p, V = t, $ = o, K = r, G = c, F = d, I = !1, L = !1;
    function ne(z) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function re(z) {
      return L || (L = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(z) {
      return C(z) === i;
    }
    function D(z) {
      return C(z) === a;
    }
    function H(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function U(z) {
      return C(z) === l;
    }
    function X(z) {
      return C(z) === n;
    }
    function A(z) {
      return C(z) === m;
    }
    function Y(z) {
      return C(z) === p;
    }
    function Q(z) {
      return C(z) === t;
    }
    function te(z) {
      return C(z) === o;
    }
    function oe(z) {
      return C(z) === r;
    }
    function J(z) {
      return C(z) === c;
    }
    function q(z) {
      return C(z) === d;
    }
    Ae.ContextConsumer = E, Ae.ContextProvider = _, Ae.Element = O, Ae.ForwardRef = N, Ae.Fragment = B, Ae.Lazy = M, Ae.Memo = k, Ae.Portal = V, Ae.Profiler = $, Ae.StrictMode = K, Ae.Suspense = G, Ae.SuspenseList = F, Ae.isAsyncMode = ne, Ae.isConcurrentMode = re, Ae.isContextConsumer = j, Ae.isContextProvider = D, Ae.isElement = H, Ae.isForwardRef = U, Ae.isFragment = X, Ae.isLazy = A, Ae.isMemo = Y, Ae.isPortal = Q, Ae.isProfiler = te, Ae.isStrictMode = oe, Ae.isSuspense = J, Ae.isSuspenseList = q, Ae.isValidElementType = S, Ae.typeOf = C;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? LD() : FD();
var BD = xr, zD = Sr, HD = "[object Number]";
function WD(e) {
  return typeof e == "number" || zD(e) && BD(e) == HD;
}
var Fv = WD;
const VD = /* @__PURE__ */ hn(Fv);
var GD = Fv;
function UD(e) {
  return GD(e) && e != +e;
}
var KD = UD;
const YD = /* @__PURE__ */ hn(KD);
var Ia = function(t) {
  return Lv(t) && t.indexOf("%") === t.length - 1;
}, Ut = function(t) {
  return VD(t) && !YD(t);
}, si = function(t) {
  return Ut(t) || Lv(t);
};
function Ll(e) {
  "@babel/helpers - typeof";
  return Ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ll(e);
}
var qD = ["viewBox", "children"], XD = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Gf = ["points", "pathLength"], tl = {
  svg: qD,
  polygon: Gf,
  polyline: Gf
}, Bv = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], JD = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, ZD = function(t, n, r) {
  if (!Ov(t) || Ll(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var i = t[a];
    Bv.includes(a) && typeof i == "function" && (o || (o = {}), o[a] = JD(i, n, r));
  }), o;
}, QD = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, eI = function(t, n, r, o) {
  var a, i = (a = tl == null ? void 0 : tl[o]) !== null && a !== void 0 ? a : [];
  return n.startsWith("data-") || !ii(t) && (o && i.includes(n) || XD.includes(n)) || Bv.includes(n);
}, zv = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Ua(t) && (o = t.props), !Ov(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(i) {
    var s;
    eI((s = o) === null || s === void 0 ? void 0 : s[i], i, n, r) && (a[i] = o[i]);
  }), a;
}, tI = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Fl() {
  return Fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Fl.apply(this, arguments);
}
function nI(e, t) {
  if (e == null) return {};
  var n = rI(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function rI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function oI(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, i = e.style, s = e.title, l = e.desc, c = nI(e, tI), d = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, p = Pn("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", Fl({}, zv(c, !0, "svg"), {
    className: p,
    width: n,
    height: r,
    style: i,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ P.createElement("title", null, s), /* @__PURE__ */ P.createElement("desc", null, l), t);
}
var aI = process.env.NODE_ENV !== "production", Xa = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (aI && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var i = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[i++];
      }));
    }
};
function iI(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var sI = iI, lI = sI;
function cI(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : lI(e, t, n);
}
var uI = cI, dI = "\\ud800-\\udfff", fI = "\\u0300-\\u036f", pI = "\\ufe20-\\ufe2f", mI = "\\u20d0-\\u20ff", hI = fI + pI + mI, vI = "\\ufe0e\\ufe0f", gI = "\\u200d", bI = RegExp("[" + gI + dI + hI + vI + "]");
function yI(e) {
  return bI.test(e);
}
var Hv = yI;
function wI(e) {
  return e.split("");
}
var xI = wI, Wv = "\\ud800-\\udfff", SI = "\\u0300-\\u036f", CI = "\\ufe20-\\ufe2f", _I = "\\u20d0-\\u20ff", EI = SI + CI + _I, PI = "\\ufe0e\\ufe0f", RI = "[" + Wv + "]", Bl = "[" + EI + "]", zl = "\\ud83c[\\udffb-\\udfff]", NI = "(?:" + Bl + "|" + zl + ")", Vv = "[^" + Wv + "]", Gv = "(?:\\ud83c[\\udde6-\\uddff]){2}", Uv = "[\\ud800-\\udbff][\\udc00-\\udfff]", TI = "\\u200d", Kv = NI + "?", Yv = "[" + PI + "]?", MI = "(?:" + TI + "(?:" + [Vv, Gv, Uv].join("|") + ")" + Yv + Kv + ")*", OI = Yv + Kv + MI, AI = "(?:" + [Vv + Bl + "?", Bl, Gv, Uv, RI].join("|") + ")", DI = RegExp(zl + "(?=" + zl + ")|" + AI + OI, "g");
function II(e) {
  return e.match(DI) || [];
}
var $I = II, jI = xI, kI = Hv, LI = $I;
function FI(e) {
  return kI(e) ? LI(e) : jI(e);
}
var BI = FI, zI = uI, HI = Hv, WI = BI, VI = jv;
function GI(e) {
  return function(t) {
    t = VI(t);
    var n = HI(t) ? WI(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? zI(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var UI = GI, KI = UI, YI = KI("toUpperCase"), qI = YI;
const qv = /* @__PURE__ */ hn(qI);
function $a(e) {
  return function() {
    return e;
  };
}
const Xv = Math.cos, li = Math.sin, rn = Math.sqrt, ci = Math.PI, ts = 2 * ci, Hl = Math.PI, Wl = 2 * Hl, rr = 1e-6, XI = Wl - rr;
function Jv(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function JI(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Jv;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class ZI {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Jv : JI(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, i) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +i}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let i = this._x1, s = this._y1, l = r - t, c = o - n, d = i - t, p = s - n, m = d * d + p * p;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (m > rr) if (!(Math.abs(p * l - c * d) > rr) || !a)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let h = r - i, b = o - s, v = l * l + c * c, g = h * h + b * b, y = Math.sqrt(v), w = Math.sqrt(m), x = a * Math.tan((Hl - Math.acos((v + m - g) / (2 * y * w))) / 2), S = x / w, C = x / y;
      Math.abs(S - 1) > rr && this._append`L${t + S * d},${n + S * p}`, this._append`A${a},${a},0,0,${+(p * h > d * b)},${this._x1 = t + C * l},${this._y1 = n + C * c}`;
    }
  }
  arc(t, n, r, o, a, i) {
    if (t = +t, n = +n, r = +r, i = !!i, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(o), l = r * Math.sin(o), c = t + s, d = n + l, p = 1 ^ i, m = i ? o - a : a - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > rr || Math.abs(this._y1 - d) > rr) && this._append`L${c},${d}`, r && (m < 0 && (m = m % Wl + Wl), m > XI ? this._append`A${r},${r},0,1,${p},${t - s},${n - l}A${r},${r},0,1,${p},${this._x1 = c},${this._y1 = d}` : m > rr && this._append`A${r},${r},0,${+(m >= Hl)},${p},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function QI(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new ZI(t);
}
const Eu = {
  draw(e, t) {
    const n = rn(t / ci);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, ts);
  }
}, e$ = {
  draw(e, t) {
    const n = rn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, Zv = rn(1 / 3), t$ = Zv * 2, n$ = {
  draw(e, t) {
    const n = rn(t / t$), r = n * Zv;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, r$ = {
  draw(e, t) {
    const n = rn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, o$ = 0.8908130915292852, Qv = li(ci / 10) / li(7 * ci / 10), a$ = li(ts / 10) * Qv, i$ = -Xv(ts / 10) * Qv, s$ = {
  draw(e, t) {
    const n = rn(t * o$), r = a$ * n, o = i$ * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const i = ts * a / 5, s = Xv(i), l = li(i);
      e.lineTo(l * n, -s * n), e.lineTo(s * r - l * o, l * r + s * o);
    }
    e.closePath();
  }
}, nl = rn(3), l$ = {
  draw(e, t) {
    const n = -rn(t / (nl * 3));
    e.moveTo(0, n * 2), e.lineTo(-nl * n, -n), e.lineTo(nl * n, -n), e.closePath();
  }
}, kt = -0.5, Lt = rn(3) / 2, Vl = 1 / rn(12), c$ = (Vl / 2 + 1) * 3, u$ = {
  draw(e, t) {
    const n = rn(t / c$), r = n / 2, o = n * Vl, a = r, i = n * Vl + n, s = -a, l = i;
    e.moveTo(r, o), e.lineTo(a, i), e.lineTo(s, l), e.lineTo(kt * r - Lt * o, Lt * r + kt * o), e.lineTo(kt * a - Lt * i, Lt * a + kt * i), e.lineTo(kt * s - Lt * l, Lt * s + kt * l), e.lineTo(kt * r + Lt * o, kt * o - Lt * r), e.lineTo(kt * a + Lt * i, kt * i - Lt * a), e.lineTo(kt * s + Lt * l, kt * l - Lt * s), e.closePath();
  }
};
function d$(e, t) {
  let n = null, r = QI(o);
  e = typeof e == "function" ? e : $a(e || Eu), t = typeof t == "function" ? t : $a(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a) return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : $a(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : $a(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function zo(e) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e);
}
var f$ = ["type", "size", "sizeType"];
function Gl() {
  return Gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gl.apply(this, arguments);
}
function Uf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uf(Object(n), !0).forEach(function(r) {
      p$(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function p$(e, t, n) {
  return t = m$(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function m$(e) {
  var t = h$(e, "string");
  return zo(t) == "symbol" ? t : t + "";
}
function h$(e, t) {
  if (zo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (zo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v$(e, t) {
  if (e == null) return {};
  var n = g$(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function g$(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
var eg = {
  symbolCircle: Eu,
  symbolCross: e$,
  symbolDiamond: n$,
  symbolSquare: r$,
  symbolStar: s$,
  symbolTriangle: l$,
  symbolWye: u$
}, b$ = Math.PI / 180, y$ = function(t) {
  var n = "symbol".concat(qv(t));
  return eg[n] || Eu;
}, w$ = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * b$;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, x$ = function(t, n) {
  eg["symbol".concat(qv(t))] = n;
}, tg = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, i = t.sizeType, s = i === void 0 ? "area" : i, l = v$(t, f$), c = Kf(Kf({}, l), {}, {
    type: r,
    size: a,
    sizeType: s
  }), d = function() {
    var g = y$(r), y = d$().type(g).size(w$(a, s, r));
    return y();
  }, p = c.className, m = c.cx, h = c.cy, b = zv(c, !0);
  return m === +m && h === +h && a === +a ? /* @__PURE__ */ P.createElement("path", Gl({}, b, {
    className: Pn("recharts-symbols", p),
    transform: "translate(".concat(m, ", ").concat(h, ")"),
    d: d()
  })) : null;
};
tg.registerSymbol = x$;
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function Ul() {
  return Ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ul.apply(this, arguments);
}
function Yf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function S$(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(n), !0).forEach(function(r) {
      Ho(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yf(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function C$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _$(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, rg(r.key), r);
  }
}
function E$(e, t, n) {
  return t && _$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function P$(e, t, n) {
  return t = ui(t), R$(e, ng() ? Reflect.construct(t, n || [], ui(e).constructor) : t.apply(e, n));
}
function R$(e, t) {
  if (t && (Wr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return N$(e);
}
function N$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ng() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ng = function() {
    return !!e;
  })();
}
function ui(e) {
  return ui = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ui(e);
}
function T$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kl(e, t);
}
function Kl(e, t) {
  return Kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Kl(e, t);
}
function Ho(e, t, n) {
  return t = rg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function rg(e) {
  var t = M$(e, "string");
  return Wr(t) == "symbol" ? t : t + "";
}
function M$(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Wr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ft = 32, Pu = /* @__PURE__ */ function(e) {
  function t() {
    return C$(this, t), P$(this, t, arguments);
  }
  return T$(t, e), E$(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = Ft / 2, i = Ft / 6, s = Ft / 3, l = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ P.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Ft,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ P.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(s, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(2 * s, ",").concat(a, `
            H`).concat(Ft, "M").concat(2 * s, ",").concat(a, `
            A`).concat(i, ",").concat(i, ",0,1,1,").concat(s, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ P.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat(Ft / 8, "h").concat(Ft, "v").concat(Ft * 3 / 4, "h").concat(-Ft, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ P.isValidElement(r.legendIcon)) {
          var c = S$({}, r);
          return delete c.legendIcon, /* @__PURE__ */ P.cloneElement(r.legendIcon, c);
        }
        return /* @__PURE__ */ P.createElement(tg, {
          fill: l,
          cx: a,
          cy: a,
          size: Ft,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, i = o.iconSize, s = o.layout, l = o.formatter, c = o.inactiveColor, d = {
        x: 0,
        y: 0,
        width: Ft,
        height: Ft
      }, p = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, m = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, b) {
        var v = h.formatter || l, g = Pn(Ho(Ho({
          "recharts-legend-item": !0
        }, "legend-item-".concat(b), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var y = ii(h.value) ? null : h.value;
        Xa(
          !ii(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var w = h.inactive ? c : h.color;
        return /* @__PURE__ */ P.createElement("li", Ul({
          className: g,
          style: p,
          key: "legend-item-".concat(b)
        }, ZD(r.props, h, b)), /* @__PURE__ */ P.createElement(oI, {
          width: i,
          height: i,
          viewBox: d,
          style: m
        }, r.renderIcon(h)), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: w
          }
        }, v ? v(y, h, b) : y));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, i = r.align;
      if (!o || !o.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? i : "left"
      };
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
}($i);
Ho(Pu, "displayName", "Legend");
Ho(Pu, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var O$ = Zi;
function A$() {
  this.__data__ = new O$(), this.size = 0;
}
var D$ = A$;
function I$(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var $$ = I$;
function j$(e) {
  return this.__data__.get(e);
}
var k$ = j$;
function L$(e) {
  return this.__data__.has(e);
}
var F$ = L$, B$ = Zi, z$ = xu, H$ = Su, W$ = 200;
function V$(e, t) {
  var n = this.__data__;
  if (n instanceof B$) {
    var r = n.__data__;
    if (!z$ || r.length < W$ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new H$(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var G$ = V$, U$ = Zi, K$ = D$, Y$ = $$, q$ = k$, X$ = F$, J$ = G$;
function io(e) {
  var t = this.__data__ = new U$(e);
  this.size = t.size;
}
io.prototype.clear = K$;
io.prototype.delete = Y$;
io.prototype.get = q$;
io.prototype.has = X$;
io.prototype.set = J$;
var og = io, Z$ = "__lodash_hash_undefined__";
function Q$(e) {
  return this.__data__.set(e, Z$), this;
}
var ej = Q$;
function tj(e) {
  return this.__data__.has(e);
}
var nj = tj, rj = Su, oj = ej, aj = nj;
function di(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new rj(); ++t < n; )
    this.add(e[t]);
}
di.prototype.add = di.prototype.push = oj;
di.prototype.has = aj;
var ag = di;
function ij(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var sj = ij;
function lj(e, t) {
  return e.has(t);
}
var ig = lj, cj = ag, uj = sj, dj = ig, fj = 1, pj = 2;
function mj(e, t, n, r, o, a) {
  var i = n & fj, s = e.length, l = t.length;
  if (s != l && !(i && l > s))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, m = !0, h = n & pj ? new cj() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < s; ) {
    var b = e[p], v = t[p];
    if (r)
      var g = i ? r(v, b, p, t, e, a) : r(b, v, p, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!uj(t, function(y, w) {
        if (!dj(h, w) && (b === y || o(b, y, n, r, a)))
          return h.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(b === v || o(b, v, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
var sg = mj, hj = vn, vj = hj.Uint8Array, gj = vj;
function bj(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var yj = bj;
function wj(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Ru = wj, qf = da, Xf = gj, xj = wu, Sj = sg, Cj = yj, _j = Ru, Ej = 1, Pj = 2, Rj = "[object Boolean]", Nj = "[object Date]", Tj = "[object Error]", Mj = "[object Map]", Oj = "[object Number]", Aj = "[object RegExp]", Dj = "[object Set]", Ij = "[object String]", $j = "[object Symbol]", jj = "[object ArrayBuffer]", kj = "[object DataView]", Jf = qf ? qf.prototype : void 0, rl = Jf ? Jf.valueOf : void 0;
function Lj(e, t, n, r, o, a, i) {
  switch (n) {
    case kj:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case jj:
      return !(e.byteLength != t.byteLength || !a(new Xf(e), new Xf(t)));
    case Rj:
    case Nj:
    case Oj:
      return xj(+e, +t);
    case Tj:
      return e.name == t.name && e.message == t.message;
    case Aj:
    case Ij:
      return e == t + "";
    case Mj:
      var s = Cj;
    case Dj:
      var l = r & Ej;
      if (s || (s = _j), e.size != t.size && !l)
        return !1;
      var c = i.get(e);
      if (c)
        return c == t;
      r |= Pj, i.set(e, t);
      var d = Sj(s(e), s(t), r, o, a, i);
      return i.delete(e), d;
    case $j:
      if (rl)
        return rl.call(e) == rl.call(t);
  }
  return !1;
}
var Fj = Lj;
function Bj(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var lg = Bj, zj = lg, Hj = nn;
function Wj(e, t, n) {
  var r = t(e);
  return Hj(e) ? r : zj(r, n(e));
}
var Vj = Wj;
function Gj(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
var Uj = Gj;
function Kj() {
  return [];
}
var Yj = Kj, qj = Uj, Xj = Yj, Jj = Object.prototype, Zj = Jj.propertyIsEnumerable, Zf = Object.getOwnPropertySymbols, Qj = Zf ? function(e) {
  return e == null ? [] : (e = Object(e), qj(Zf(e), function(t) {
    return Zj.call(e, t);
  }));
} : Xj, ek = Qj;
function tk(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var nk = tk, rk = xr, ok = Sr, ak = "[object Arguments]";
function ik(e) {
  return ok(e) && rk(e) == ak;
}
var sk = ik, Qf = sk, lk = Sr, cg = Object.prototype, ck = cg.hasOwnProperty, uk = cg.propertyIsEnumerable, dk = Qf(/* @__PURE__ */ function() {
  return arguments;
}()) ? Qf : function(e) {
  return lk(e) && ck.call(e, "callee") && !uk.call(e, "callee");
}, Nu = dk, fi = { exports: {} };
function fk() {
  return !1;
}
var pk = fk;
fi.exports;
(function(e, t) {
  var n = vn, r = pk, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, i = a && a.exports === o, s = i ? n.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || r;
  e.exports = c;
})(fi, fi.exports);
var ug = fi.exports, mk = 9007199254740991, hk = /^(?:0|[1-9]\d*)$/;
function vk(e, t) {
  var n = typeof e;
  return t = t ?? mk, !!t && (n == "number" || n != "symbol" && hk.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Tu = vk, gk = 9007199254740991;
function bk(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gk;
}
var Mu = bk, yk = xr, wk = Mu, xk = Sr, Sk = "[object Arguments]", Ck = "[object Array]", _k = "[object Boolean]", Ek = "[object Date]", Pk = "[object Error]", Rk = "[object Function]", Nk = "[object Map]", Tk = "[object Number]", Mk = "[object Object]", Ok = "[object RegExp]", Ak = "[object Set]", Dk = "[object String]", Ik = "[object WeakMap]", $k = "[object ArrayBuffer]", jk = "[object DataView]", kk = "[object Float32Array]", Lk = "[object Float64Array]", Fk = "[object Int8Array]", Bk = "[object Int16Array]", zk = "[object Int32Array]", Hk = "[object Uint8Array]", Wk = "[object Uint8ClampedArray]", Vk = "[object Uint16Array]", Gk = "[object Uint32Array]", Ue = {};
Ue[kk] = Ue[Lk] = Ue[Fk] = Ue[Bk] = Ue[zk] = Ue[Hk] = Ue[Wk] = Ue[Vk] = Ue[Gk] = !0;
Ue[Sk] = Ue[Ck] = Ue[$k] = Ue[_k] = Ue[jk] = Ue[Ek] = Ue[Pk] = Ue[Rk] = Ue[Nk] = Ue[Tk] = Ue[Mk] = Ue[Ok] = Ue[Ak] = Ue[Dk] = Ue[Ik] = !1;
function Uk(e) {
  return xk(e) && wk(e.length) && !!Ue[yk(e)];
}
var Kk = Uk;
function Yk(e) {
  return function(t) {
    return e(t);
  };
}
var dg = Yk, pi = { exports: {} };
pi.exports;
(function(e, t) {
  var n = Tv, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, i = a && n.process, s = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(pi, pi.exports);
var qk = pi.exports, Xk = Kk, Jk = dg, ep = qk, tp = ep && ep.isTypedArray, Zk = tp ? Jk(tp) : Xk, fg = Zk, Qk = nk, eL = Nu, tL = nn, nL = ug, rL = Tu, oL = fg, aL = Object.prototype, iL = aL.hasOwnProperty;
function sL(e, t) {
  var n = tL(e), r = !n && eL(e), o = !n && !r && nL(e), a = !n && !r && !o && oL(e), i = n || r || o || a, s = i ? Qk(e.length, String) : [], l = s.length;
  for (var c in e)
    (t || iL.call(e, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    rL(c, l))) && s.push(c);
  return s;
}
var lL = sL, cL = Object.prototype;
function uL(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || cL;
  return e === n;
}
var dL = uL;
function fL(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var pL = fL, mL = pL, hL = mL(Object.keys, Object), vL = hL, gL = dL, bL = vL, yL = Object.prototype, wL = yL.hasOwnProperty;
function xL(e) {
  if (!gL(e))
    return bL(e);
  var t = [];
  for (var n in Object(e))
    wL.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var SL = xL, CL = yu, _L = Mu;
function EL(e) {
  return e != null && _L(e.length) && !CL(e);
}
var ns = EL, PL = lL, RL = SL, NL = ns;
function TL(e) {
  return NL(e) ? PL(e) : RL(e);
}
var Ou = TL, ML = Vj, OL = ek, AL = Ou;
function DL(e) {
  return ML(e, AL, OL);
}
var IL = DL, np = IL, $L = 1, jL = Object.prototype, kL = jL.hasOwnProperty;
function LL(e, t, n, r, o, a) {
  var i = n & $L, s = np(e), l = s.length, c = np(t), d = c.length;
  if (l != d && !i)
    return !1;
  for (var p = l; p--; ) {
    var m = s[p];
    if (!(i ? m in t : kL.call(t, m)))
      return !1;
  }
  var h = a.get(e), b = a.get(t);
  if (h && b)
    return h == t && b == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = i; ++p < l; ) {
    m = s[p];
    var y = e[m], w = t[m];
    if (r)
      var x = i ? r(w, y, m, t, e, a) : r(y, w, m, e, t, a);
    if (!(x === void 0 ? y === w || o(y, w, n, r, a) : x)) {
      v = !1;
      break;
    }
    g || (g = m == "constructor");
  }
  if (v && !g) {
    var S = e.constructor, C = t.constructor;
    S != C && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof C == "function" && C instanceof C) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var FL = LL, BL = Cr, zL = vn, HL = BL(zL, "DataView"), WL = HL, VL = Cr, GL = vn, UL = VL(GL, "Promise"), KL = UL, YL = Cr, qL = vn, XL = YL(qL, "Set"), pg = XL, JL = Cr, ZL = vn, QL = JL(ZL, "WeakMap"), e2 = QL, Yl = WL, ql = xu, Xl = KL, Jl = pg, Zl = e2, mg = xr, so = Av, rp = "[object Map]", t2 = "[object Object]", op = "[object Promise]", ap = "[object Set]", ip = "[object WeakMap]", sp = "[object DataView]", n2 = so(Yl), r2 = so(ql), o2 = so(Xl), a2 = so(Jl), i2 = so(Zl), or = mg;
(Yl && or(new Yl(new ArrayBuffer(1))) != sp || ql && or(new ql()) != rp || Xl && or(Xl.resolve()) != op || Jl && or(new Jl()) != ap || Zl && or(new Zl()) != ip) && (or = function(e) {
  var t = mg(e), n = t == t2 ? e.constructor : void 0, r = n ? so(n) : "";
  if (r)
    switch (r) {
      case n2:
        return sp;
      case r2:
        return rp;
      case o2:
        return op;
      case a2:
        return ap;
      case i2:
        return ip;
    }
  return t;
});
var s2 = or, ol = og, l2 = sg, c2 = Fj, u2 = FL, lp = s2, cp = nn, up = ug, d2 = fg, f2 = 1, dp = "[object Arguments]", fp = "[object Array]", ja = "[object Object]", p2 = Object.prototype, pp = p2.hasOwnProperty;
function m2(e, t, n, r, o, a) {
  var i = cp(e), s = cp(t), l = i ? fp : lp(e), c = s ? fp : lp(t);
  l = l == dp ? ja : l, c = c == dp ? ja : c;
  var d = l == ja, p = c == ja, m = l == c;
  if (m && up(e)) {
    if (!up(t))
      return !1;
    i = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new ol()), i || d2(e) ? l2(e, t, n, r, o, a) : c2(e, t, l, n, r, o, a);
  if (!(n & f2)) {
    var h = d && pp.call(e, "__wrapped__"), b = p && pp.call(t, "__wrapped__");
    if (h || b) {
      var v = h ? e.value() : e, g = b ? t.value() : t;
      return a || (a = new ol()), o(v, g, n, r, a);
    }
  }
  return m ? (a || (a = new ol()), u2(e, t, n, r, o, a)) : !1;
}
var h2 = m2, v2 = h2, mp = Sr;
function hg(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !mp(e) && !mp(t) ? e !== e && t !== t : v2(e, t, n, r, hg, o);
}
var vg = hg, g2 = og, b2 = vg, y2 = 1, w2 = 2;
function x2(e, t, n, r) {
  var o = n.length, a = o, i = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (i && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var l = s[0], c = e[l], d = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e))
        return !1;
    } else {
      var p = new g2();
      if (r)
        var m = r(c, d, l, e, t, p);
      if (!(m === void 0 ? b2(d, c, y2 | w2, r, p) : m))
        return !1;
    }
  }
  return !0;
}
var S2 = x2, C2 = Un;
function _2(e) {
  return e === e && !C2(e);
}
var gg = _2, E2 = gg, P2 = Ou;
function R2(e) {
  for (var t = P2(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, E2(o)];
  }
  return t;
}
var N2 = R2;
function T2(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var bg = T2, M2 = S2, O2 = N2, A2 = bg;
function D2(e) {
  var t = O2(e);
  return t.length == 1 && t[0][2] ? A2(t[0][0], t[0][1]) : function(n) {
    return n === e || M2(n, e, t);
  };
}
var I2 = D2;
function $2(e, t) {
  return e != null && t in Object(e);
}
var j2 = $2, k2 = kv, L2 = Nu, F2 = nn, B2 = Tu, z2 = Mu, H2 = es;
function W2(e, t, n) {
  t = k2(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = H2(t[r]);
    if (!(a = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && z2(o) && B2(i, o) && (F2(e) || L2(e)));
}
var V2 = W2, G2 = j2, U2 = V2;
function K2(e, t) {
  return e != null && U2(e, t, G2);
}
var Y2 = K2, q2 = vg, X2 = ND, J2 = Y2, Z2 = bu, Q2 = gg, eF = bg, tF = es, nF = 1, rF = 2;
function oF(e, t) {
  return Z2(e) && Q2(t) ? eF(tF(e), t) : function(n) {
    var r = X2(n, e);
    return r === void 0 && r === t ? J2(n, e) : q2(t, r, nF | rF);
  };
}
var aF = oF;
function iF(e) {
  return e;
}
var rs = iF;
function sF(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var lF = sF, cF = _u;
function uF(e) {
  return function(t) {
    return cF(t, e);
  };
}
var dF = uF, fF = lF, pF = dF, mF = bu, hF = es;
function vF(e) {
  return mF(e) ? fF(hF(e)) : pF(e);
}
var gF = vF, bF = I2, yF = aF, wF = rs, xF = nn, SF = gF;
function CF(e) {
  return typeof e == "function" ? e : e == null ? wF : typeof e == "object" ? xF(e) ? yF(e[0], e[1]) : bF(e) : SF(e);
}
var yg = CF;
function _F(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var EF = _F;
function PF(e) {
  return e !== e;
}
var RF = PF;
function NF(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var TF = NF, MF = EF, OF = RF, AF = TF;
function DF(e, t, n) {
  return t === t ? AF(e, t, n) : MF(e, OF, n);
}
var IF = DF, $F = IF;
function jF(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && $F(e, t, 0) > -1;
}
var kF = jF;
function LF(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var FF = LF;
function BF() {
}
var zF = BF, al = pg, HF = zF, WF = Ru, VF = 1 / 0, GF = al && 1 / WF(new al([, -0]))[1] == VF ? function(e) {
  return new al(e);
} : HF, UF = GF, KF = ag, YF = kF, qF = FF, XF = ig, JF = UF, ZF = Ru, QF = 200;
function eB(e, t, n) {
  var r = -1, o = YF, a = e.length, i = !0, s = [], l = s;
  if (n)
    i = !1, o = qF;
  else if (a >= QF) {
    var c = t ? null : JF(e);
    if (c)
      return ZF(c);
    i = !1, o = XF, l = new KF();
  } else
    l = t ? [] : s;
  e:
    for (; ++r < a; ) {
      var d = e[r], p = t ? t(d) : d;
      if (d = n || d !== 0 ? d : 0, i && p === p) {
        for (var m = l.length; m--; )
          if (l[m] === p)
            continue e;
        t && l.push(p), s.push(d);
      } else o(l, p, n) || (l !== s && l.push(p), s.push(d));
    }
  return s;
}
var tB = eB, nB = yg, rB = tB;
function oB(e, t) {
  return e && e.length ? rB(e, nB(t)) : [];
}
var aB = oB;
const hp = /* @__PURE__ */ hn(aB);
function wg(e, t, n) {
  return t === !0 ? hp(e, n) : ii(t) ? hp(e, t) : e;
}
function Vr(e) {
  "@babel/helpers - typeof";
  return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vr(e);
}
var iB = ["ref"];
function vp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vp(Object(n), !0).forEach(function(r) {
      os(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function sB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Sg(r.key), r);
  }
}
function lB(e, t, n) {
  return t && gp(e.prototype, t), n && gp(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cB(e, t, n) {
  return t = mi(t), uB(e, xg() ? Reflect.construct(t, n || [], mi(e).constructor) : t.apply(e, n));
}
function uB(e, t) {
  if (t && (Vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dB(e);
}
function dB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xg = function() {
    return !!e;
  })();
}
function mi(e) {
  return mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, mi(e);
}
function fB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ql(e, t);
}
function Ql(e, t) {
  return Ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ql(e, t);
}
function os(e, t, n) {
  return t = Sg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Sg(e) {
  var t = pB(e, "string");
  return Vr(t) == "symbol" ? t : t + "";
}
function pB(e, t) {
  if (Vr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mB(e, t) {
  if (e == null) return {};
  var n = hB(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function hB(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function vB(e) {
  return e.value;
}
function gB(e, t) {
  if (/* @__PURE__ */ P.isValidElement(e))
    return /* @__PURE__ */ P.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ P.createElement(e, t);
  t.ref;
  var n = mB(t, iB);
  return /* @__PURE__ */ P.createElement(Pu, n);
}
var bp = 1, Au = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    sB(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = cB(this, t, [].concat(o)), os(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return fB(t, e), lB(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > bp || Math.abs(o.height - this.lastBoundingBox.height) > bp) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Cn({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, i = o.align, s = o.verticalAlign, l = o.margin, c = o.chartWidth, d = o.chartHeight, p, m;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (i === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          p = {
            left: ((c || 0) - h.width) / 2
          };
        } else
          p = i === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (s === "middle") {
          var b = this.getBBoxSnapshot();
          m = {
            top: ((d || 0) - b.height) / 2
          };
        } else
          m = s === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return Cn(Cn({}, p), m);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, i = o.width, s = o.height, l = o.wrapperStyle, c = o.payloadUniqBy, d = o.payload, p = Cn(Cn({
        position: "absolute",
        width: i || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ P.createElement("div", {
        className: "recharts-legend-wrapper",
        style: p,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, gB(a, Cn(Cn({}, this.props), {}, {
        payload: wg(d, c, vB)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = Cn(Cn({}, this.defaultProps), r.props), i = a.layout;
      return i === "vertical" && Ut(r.props.height) ? {
        height: r.props.height
      } : i === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
}($i);
os(Au, "displayName", "Legend");
os(Au, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var yp = da, bB = Nu, yB = nn, wp = yp ? yp.isConcatSpreadable : void 0;
function wB(e) {
  return yB(e) || bB(e) || !!(wp && e && e[wp]);
}
var xB = wB, SB = lg, CB = xB;
function Cg(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = CB), o || (o = []); ++a < i; ) {
    var s = e[a];
    t > 0 && n(s) ? t > 1 ? Cg(s, t - 1, n, r, o) : SB(o, s) : r || (o[o.length] = s);
  }
  return o;
}
var _B = Cg;
function EB(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--; ) {
      var l = i[e ? s : ++o];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var PB = EB, RB = PB, NB = RB(), TB = NB, MB = TB, OB = Ou;
function AB(e, t) {
  return e && MB(e, t, OB);
}
var DB = AB, IB = ns;
function $B(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!IB(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, i = Object(n); (t ? a-- : ++a < o) && r(i[a], a, i) !== !1; )
      ;
    return n;
  };
}
var jB = $B, kB = DB, LB = jB, FB = LB(kB), BB = FB, zB = BB, HB = ns;
function WB(e, t) {
  var n = -1, r = HB(e) ? Array(e.length) : [];
  return zB(e, function(o, a, i) {
    r[++n] = t(o, a, i);
  }), r;
}
var VB = WB;
function GB(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var UB = GB, xp = fa;
function KB(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = xp(e), i = t !== void 0, s = t === null, l = t === t, c = xp(t);
    if (!s && !c && !a && e > t || a && i && l && !s && !c || r && i && l || !n && l || !o)
      return 1;
    if (!r && !a && !c && e < t || c && n && o && !r && !a || s && n && o || !i && o || !l)
      return -1;
  }
  return 0;
}
var YB = KB, qB = YB;
function XB(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, i = o.length, s = n.length; ++r < i; ) {
    var l = qB(o[r], a[r]);
    if (l) {
      if (r >= s)
        return l;
      var c = n[r];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var JB = XB, il = Iv, ZB = _u, QB = yg, e5 = VB, t5 = UB, n5 = dg, r5 = JB, o5 = rs, a5 = nn;
function i5(e, t, n) {
  t.length ? t = il(t, function(a) {
    return a5(a) ? function(i) {
      return ZB(i, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [o5];
  var r = -1;
  t = il(t, n5(QB));
  var o = e5(e, function(a, i, s) {
    var l = il(t, function(c) {
      return c(a);
    });
    return { criteria: l, index: ++r, value: a };
  });
  return t5(o, function(a, i) {
    return r5(a, i, n);
  });
}
var s5 = i5;
function l5(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var c5 = l5, u5 = c5, Sp = Math.max;
function d5(e, t, n) {
  return t = Sp(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Sp(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), u5(e, this, s);
  };
}
var f5 = d5;
function p5(e) {
  return function() {
    return e;
  };
}
var m5 = p5, h5 = Cr, v5 = function() {
  try {
    var e = h5(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), g5 = v5, b5 = m5, Cp = g5, y5 = rs, w5 = Cp ? function(e, t) {
  return Cp(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: b5(t),
    writable: !0
  });
} : y5, x5 = w5, S5 = 800, C5 = 16, _5 = Date.now;
function E5(e) {
  var t = 0, n = 0;
  return function() {
    var r = _5(), o = C5 - (r - n);
    if (n = r, o > 0) {
      if (++t >= S5)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var P5 = E5, R5 = x5, N5 = P5, T5 = N5(R5), M5 = T5, O5 = rs, A5 = f5, D5 = M5;
function I5(e, t) {
  return D5(A5(e, t, O5), e + "");
}
var $5 = I5, j5 = wu, k5 = ns, L5 = Tu, F5 = Un;
function B5(e, t, n) {
  if (!F5(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? k5(n) && L5(t, n.length) : r == "string" && t in n) ? j5(n[t], e) : !1;
}
var z5 = B5, H5 = _B, W5 = s5, V5 = $5, _p = z5, G5 = V5(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && _p(e, t[0], t[1]) ? t = [] : n > 2 && _p(t[0], t[1], t[2]) && (t = [t[0]]), W5(e, H5(t, 1), []);
}), U5 = G5;
const K5 = /* @__PURE__ */ hn(U5);
function Wo(e) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e);
}
function ec() {
  return ec = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ec.apply(this, arguments);
}
function Y5(e, t) {
  return Z5(e) || J5(e, t) || X5(e, t) || q5();
}
function q5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X5(e, t) {
  if (e) {
    if (typeof e == "string") return Ep(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ep(e, t);
  }
}
function Ep(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function J5(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function Z5(e) {
  if (Array.isArray(e)) return e;
}
function Pp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pp(Object(n), !0).forEach(function(r) {
      Q5(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Q5(e, t, n) {
  return t = ez(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ez(e) {
  var t = tz(e, "string");
  return Wo(t) == "symbol" ? t : t + "";
}
function tz(e, t) {
  if (Wo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Wo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nz(e) {
  return Array.isArray(e) && si(e[0]) && si(e[1]) ? e.join(" ~ ") : e;
}
var rz = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, i = t.itemStyle, s = i === void 0 ? {} : i, l = t.labelStyle, c = l === void 0 ? {} : l, d = t.payload, p = t.formatter, m = t.itemSorter, h = t.wrapperClassName, b = t.labelClassName, v = t.label, g = t.labelFormatter, y = t.accessibilityLayer, w = y === void 0 ? !1 : y, x = function() {
    if (d && d.length) {
      var k = {
        padding: 0,
        margin: 0
      }, V = (m ? K5(d, m) : d).map(function($, K) {
        if ($.type === "none")
          return null;
        var G = sl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: $.color || "#000"
        }, s), F = $.formatter || p || nz, I = $.value, L = $.name, ne = I, re = L;
        if (F && ne != null && re != null) {
          var j = F(I, L, $, K, d);
          if (Array.isArray(j)) {
            var D = Y5(j, 2);
            ne = D[0], re = D[1];
          } else
            ne = j;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ P.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(K),
            style: G
          }, si(re) ? /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, re) : null, si(re) ? /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, ne), /* @__PURE__ */ P.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, $.unit || ""))
        );
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: k
      }, V);
    }
    return null;
  }, S = sl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), C = sl({
    margin: 0
  }, c), E = !OD(v), _ = E ? v : "", O = Pn("recharts-default-tooltip", h), N = Pn("recharts-tooltip-label", b);
  E && g && d !== void 0 && d !== null && (_ = g(v, d));
  var B = w ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", ec({
    className: O,
    style: S
  }, B), /* @__PURE__ */ P.createElement("p", {
    className: N,
    style: C
  }, /* @__PURE__ */ P.isValidElement(_) ? _ : "".concat(_)), x());
};
function Vo(e) {
  "@babel/helpers - typeof";
  return Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vo(e);
}
function ka(e, t, n) {
  return t = oz(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function oz(e) {
  var t = az(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function az(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Vo(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _o = "recharts-tooltip-wrapper", iz = {
  visibility: "hidden"
};
function sz(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return Pn(_o, ka(ka(ka(ka({}, "".concat(_o, "-right"), Ut(n) && t && Ut(t.x) && n >= t.x), "".concat(_o, "-left"), Ut(n) && t && Ut(t.x) && n < t.x), "".concat(_o, "-bottom"), Ut(r) && t && Ut(t.y) && r >= t.y), "".concat(_o, "-top"), Ut(r) && t && Ut(t.y) && r < t.y));
}
function Rp(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, i = e.reverseDirection, s = e.tooltipDimension, l = e.viewBox, c = e.viewBoxDimension;
  if (a && Ut(a[r]))
    return a[r];
  var d = n[r] - s - o, p = n[r] + o;
  if (t[r])
    return i[r] ? d : p;
  if (i[r]) {
    var m = d, h = l[r];
    return m < h ? Math.max(p, l[r]) : Math.max(d, l[r]);
  }
  var b = p + s, v = l[r] + c;
  return b > v ? Math.max(d, l[r]) : Math.max(p, l[r]);
}
function lz(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function cz(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, i = e.tooltipBox, s = e.useTranslate3d, l = e.viewBox, c, d, p;
  return i.height > 0 && i.width > 0 && n ? (d = Rp({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), p = Rp({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: i.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), c = lz({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : c = iz, {
    cssProperties: c,
    cssClasses: sz({
      translateX: d,
      translateY: p,
      coordinate: n
    })
  };
}
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function Np(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Np(Object(n), !0).forEach(function(r) {
      nc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Np(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function uz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dz(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Eg(r.key), r);
  }
}
function fz(e, t, n) {
  return t && dz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function pz(e, t, n) {
  return t = hi(t), mz(e, _g() ? Reflect.construct(t, n || [], hi(e).constructor) : t.apply(e, n));
}
function mz(e, t) {
  if (t && (Gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hz(e);
}
function hz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _g() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_g = function() {
    return !!e;
  })();
}
function hi(e) {
  return hi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, hi(e);
}
function vz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tc(e, t);
}
function tc(e, t) {
  return tc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, tc(e, t);
}
function nc(e, t, n) {
  return t = Eg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Eg(e) {
  var t = gz(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function gz(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Gr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mp = 1, bz = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    uz(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = pz(this, t, [].concat(o)), nc(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), nc(n, "handleKeyDown", function(i) {
      if (i.key === "Escape") {
        var s, l, c, d;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && s !== void 0 ? s : 0,
            y: (c = (d = n.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), n;
  }
  return vz(t, e), fz(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Mp || Math.abs(r.height - this.state.lastBoundingBox.height) > Mp) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.children, d = o.coordinate, p = o.hasPayload, m = o.isAnimationActive, h = o.offset, b = o.position, v = o.reverseDirection, g = o.useTranslate3d, y = o.viewBox, w = o.wrapperStyle, x = cz({
        allowEscapeViewBox: i,
        coordinate: d,
        offsetTopLeft: h,
        position: b,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: y
      }), S = x.cssClasses, C = x.cssProperties, E = Tp(Tp({
        transition: m && a ? "transform ".concat(s, "ms ").concat(l) : void 0
      }, C), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && p ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, w);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ P.createElement("div", {
          tabIndex: -1,
          className: S,
          style: E,
          ref: function(O) {
            r.wrapperNode = O;
          }
        }, c)
      );
    }
  }]);
}($i), yz = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Ja = {
  isSsr: yz(),
  get: function(t) {
    return Ja[t];
  },
  set: function(t, n) {
    if (typeof t == "string")
      Ja[t] = n;
    else {
      var r = Object.keys(t);
      r && r.length && r.forEach(function(o) {
        Ja[o] = t[o];
      });
    }
  }
};
function Ur(e) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(e);
}
function Op(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ap(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Op(Object(n), !0).forEach(function(r) {
      Du(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Op(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wz(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xz(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Rg(r.key), r);
  }
}
function Sz(e, t, n) {
  return t && xz(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Cz(e, t, n) {
  return t = vi(t), _z(e, Pg() ? Reflect.construct(t, n || [], vi(e).constructor) : t.apply(e, n));
}
function _z(e, t) {
  if (t && (Ur(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ez(e);
}
function Ez(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pg = function() {
    return !!e;
  })();
}
function vi(e) {
  return vi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vi(e);
}
function Pz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rc(e, t);
}
function rc(e, t) {
  return rc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, rc(e, t);
}
function Du(e, t, n) {
  return t = Rg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Rg(e) {
  var t = Rz(e, "string");
  return Ur(t) == "symbol" ? t : t + "";
}
function Rz(e, t) {
  if (Ur(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ur(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nz(e) {
  return e.dataKey;
}
function Tz(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(rz, t);
}
var Iu = /* @__PURE__ */ function(e) {
  function t() {
    return wz(this, t), Cz(this, t, arguments);
  }
  return Pz(t, e), Sz(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, i = o.allowEscapeViewBox, s = o.animationDuration, l = o.animationEasing, c = o.content, d = o.coordinate, p = o.filterNull, m = o.isAnimationActive, h = o.offset, b = o.payload, v = o.payloadUniqBy, g = o.position, y = o.reverseDirection, w = o.useTranslate3d, x = o.viewBox, S = o.wrapperStyle, C = b ?? [];
      p && C.length && (C = wg(b.filter(function(_) {
        return _.value != null && (_.hide !== !0 || r.props.includeHidden);
      }), v, Nz));
      var E = C.length > 0;
      return /* @__PURE__ */ P.createElement(bz, {
        allowEscapeViewBox: i,
        animationDuration: s,
        animationEasing: l,
        isAnimationActive: m,
        active: a,
        coordinate: d,
        hasPayload: E,
        offset: h,
        position: g,
        reverseDirection: y,
        useTranslate3d: w,
        viewBox: x,
        wrapperStyle: S
      }, Tz(c, Ap(Ap({}, this.props), {}, {
        payload: C
      })));
    }
  }]);
}($i);
Du(Iu, "displayName", "Tooltip");
Du(Iu, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Ja.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Mz = vn, Oz = function() {
  return Mz.Date.now();
}, Az = Oz, Dz = /\s/;
function Iz(e) {
  for (var t = e.length; t-- && Dz.test(e.charAt(t)); )
    ;
  return t;
}
var $z = Iz, jz = $z, kz = /^\s+/;
function Lz(e) {
  return e && e.slice(0, jz(e) + 1).replace(kz, "");
}
var Fz = Lz, Bz = Fz, Dp = Un, zz = fa, Ip = NaN, Hz = /^[-+]0x[0-9a-f]+$/i, Wz = /^0b[01]+$/i, Vz = /^0o[0-7]+$/i, Gz = parseInt;
function Uz(e) {
  if (typeof e == "number")
    return e;
  if (zz(e))
    return Ip;
  if (Dp(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Dp(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Bz(e);
  var n = Wz.test(e);
  return n || Vz.test(e) ? Gz(e.slice(2), n ? 2 : 8) : Hz.test(e) ? Ip : +e;
}
var Kz = Uz, Yz = Un, ll = Az, $p = Kz, qz = "Expected a function", Xz = Math.max, Jz = Math.min;
function Zz(e, t, n) {
  var r, o, a, i, s, l, c = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(qz);
  t = $p(t) || 0, Yz(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? Xz($p(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function h(E) {
    var _ = r, O = o;
    return r = o = void 0, c = E, i = e.apply(O, _), i;
  }
  function b(E) {
    return c = E, s = setTimeout(y, t), d ? h(E) : i;
  }
  function v(E) {
    var _ = E - l, O = E - c, N = t - _;
    return p ? Jz(N, a - O) : N;
  }
  function g(E) {
    var _ = E - l, O = E - c;
    return l === void 0 || _ >= t || _ < 0 || p && O >= a;
  }
  function y() {
    var E = ll();
    if (g(E))
      return w(E);
    s = setTimeout(y, v(E));
  }
  function w(E) {
    return s = void 0, m && r ? h(E) : (r = o = void 0, i);
  }
  function x() {
    s !== void 0 && clearTimeout(s), c = 0, r = l = o = s = void 0;
  }
  function S() {
    return s === void 0 ? i : w(ll());
  }
  function C() {
    var E = ll(), _ = g(E);
    if (r = arguments, o = this, l = E, _) {
      if (s === void 0)
        return b(l);
      if (p)
        return clearTimeout(s), s = setTimeout(y, t), h(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), i;
  }
  return C.cancel = x, C.flush = S, C;
}
var Qz = Zz, eH = Qz, tH = Un, nH = "Expected a function";
function rH(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(nH);
  return tH(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), eH(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var oH = rH;
const aH = /* @__PURE__ */ hn(oH);
function Go(e) {
  "@babel/helpers - typeof";
  return Go = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Go(e);
}
function jp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function La(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(n), !0).forEach(function(r) {
      iH(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function iH(e, t, n) {
  return t = sH(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sH(e) {
  var t = lH(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function lH(e, t) {
  if (Go(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Go(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cH(e, t) {
  return pH(e) || fH(e, t) || dH(e, t) || uH();
}
function uH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dH(e, t) {
  if (e) {
    if (typeof e == "string") return kp(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return kp(e, t);
  }
}
function kp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fH(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], l = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (d) {
      c = !0, o = d;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function pH(e) {
  if (Array.isArray(e)) return e;
}
var mH = /* @__PURE__ */ vr(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, i = a === void 0 ? "100%" : a, s = e.height, l = s === void 0 ? "100%" : s, c = e.minWidth, d = c === void 0 ? 0 : c, p = e.minHeight, m = e.maxHeight, h = e.children, b = e.debounce, v = b === void 0 ? 0 : b, g = e.id, y = e.className, w = e.onResize, x = e.style, S = x === void 0 ? {} : x, C = it(null), E = it();
  E.current = w, Lc(t, function() {
    return Object.defineProperty(C.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), C.current;
      },
      configurable: !0
    });
  });
  var _ = yt({
    containerWidth: o.width,
    containerHeight: o.height
  }), O = cH(_, 2), N = O[0], B = O[1], M = dt(function(V, $) {
    B(function(K) {
      var G = Math.round(V), F = Math.round($);
      return K.containerWidth === G && K.containerHeight === F ? K : {
        containerWidth: G,
        containerHeight: F
      };
    });
  }, []);
  ft(function() {
    var V = function(L) {
      var ne, re = L[0].contentRect, j = re.width, D = re.height;
      M(j, D), (ne = E.current) === null || ne === void 0 || ne.call(E, j, D);
    };
    v > 0 && (V = aH(V, v, {
      trailing: !0,
      leading: !1
    }));
    var $ = new ResizeObserver(V), K = C.current.getBoundingClientRect(), G = K.width, F = K.height;
    return M(G, F), $.observe(C.current), function() {
      $.disconnect();
    };
  }, [M, v]);
  var k = Fc(function() {
    var V = N.containerWidth, $ = N.containerHeight;
    if (V < 0 || $ < 0)
      return null;
    Xa(Ia(i) || Ia(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, l), Xa(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var K = Ia(i) ? V : i, G = Ia(l) ? $ : l;
    n && n > 0 && (K ? G = K / n : G && (K = G * n), m && G > m && (G = m)), Xa(K > 0 || G > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, K, G, i, l, d, p, n);
    var F = !Array.isArray(h) && QD(h.type).endsWith("Chart");
    return P.Children.map(h, function(I) {
      return /* @__PURE__ */ P.isValidElement(I) ? /* @__PURE__ */ s_(I, La({
        width: K,
        height: G
      }, F ? {
        style: La({
          height: "100%",
          width: "100%",
          maxHeight: G,
          maxWidth: K
        }, I.props.style)
      } : {})) : I;
    });
  }, [n, h, l, m, p, d, N, i]);
  return /* @__PURE__ */ P.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: Pn("recharts-responsive-container", y),
    style: La(La({}, S), {}, {
      width: i,
      height: l,
      minWidth: d,
      minHeight: p,
      maxHeight: m
    }),
    ref: C
  }, k);
});
const hH = { light: "", dark: ".dark" }, Ng = u.createContext(null);
function Tg() {
  const e = u.useContext(Ng);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const vH = u.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const i = u.useId(), s = `chart-${e || i.replace(/:/g, "")}`;
  return /* @__PURE__ */ f.jsx(Ng.Provider, { value: { config: r }, children: /* @__PURE__ */ f.jsxs(
    "div",
    {
      "data-chart": s,
      ref: a,
      className: T(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ f.jsx(gH, { id: s, config: r }),
        /* @__PURE__ */ f.jsx(mH, { children: n })
      ]
    }
  ) });
});
vH.displayName = "Chart";
const gH = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(([r, o]) => o.theme || o.color);
  return n.length ? /* @__PURE__ */ f.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(hH).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, i]) => {
            var l;
            const s = ((l = i.theme) == null ? void 0 : l[r]) || i.color;
            return s ? `  --color-${a}: ${s};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, s7 = Iu, bH = u.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: i,
    labelFormatter: s,
    labelClassName: l,
    formatter: c,
    color: d,
    nameKey: p,
    labelKey: m
  }, h) => {
    const { config: b } = Tg(), v = u.useMemo(() => {
      var C;
      if (o || !(t != null && t.length))
        return null;
      const [y] = t, w = `${m || y.dataKey || y.name || "value"}`, x = oc(b, y, w), S = !m && typeof i == "string" ? ((C = b[i]) == null ? void 0 : C.label) || i : x == null ? void 0 : x.label;
      return s ? /* @__PURE__ */ f.jsx("div", { className: T("font-medium", l), children: s(S, t) }) : S ? /* @__PURE__ */ f.jsx("div", { className: T("font-medium", l), children: S }) : null;
    }, [i, s, t, o, l, b, m]);
    if (!e || !(t != null && t.length))
      return null;
    const g = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ f.jsxs(
      "div",
      {
        ref: h,
        className: T(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          g ? null : v,
          /* @__PURE__ */ f.jsx("div", { className: "grid gap-1.5", children: t.map((y, w) => {
            const x = `${p || y.name || y.dataKey || "value"}`, S = oc(b, y, x), C = d || y.payload.fill || y.color;
            return /* @__PURE__ */ f.jsx(
              "div",
              {
                className: T(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: c && (y == null ? void 0 : y.value) !== void 0 && y.name ? c(y.value, y.name, y, w, y.payload) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                  S != null && S.icon ? /* @__PURE__ */ f.jsx(S.icon, {}) : !a && /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      className: T("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": g && r === "dashed"
                      }),
                      style: {
                        "--color-bg": C,
                        "--color-border": C
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      className: T(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ f.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? v : null,
                          /* @__PURE__ */ f.jsx("span", { className: "text-muted-foreground", children: (S == null ? void 0 : S.label) || y.name })
                        ] }),
                        y.value && /* @__PURE__ */ f.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: y.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              y.dataKey
            );
          }) })
        ]
      }
    );
  }
);
bH.displayName = "ChartTooltip";
const l7 = Au, yH = u.forwardRef(({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
  const { config: i } = Tg();
  return n != null && n.length ? /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: a,
      className: T("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
      children: n.map((s) => {
        const l = `${o || s.dataKey || "value"}`, c = oc(i, s, l);
        return /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: T("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              c != null && c.icon && !t ? /* @__PURE__ */ f.jsx(c.icon, {}) : /* @__PURE__ */ f.jsx(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: s.color
                  }
                }
              ),
              c == null ? void 0 : c.label
            ]
          },
          s.value
        );
      })
    }
  ) : null;
});
yH.displayName = "ChartLegend";
function oc(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function lo(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function pa(e) {
  const [t, n] = u.useState(void 0);
  return Ke(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var as = "Checkbox", [wH, c7] = Fe(as), [xH, $u] = wH(as);
function SH(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: i,
    name: s,
    onCheckedChange: l,
    required: c,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, h] = ze({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: as
  }), [b, v] = u.useState(null), [g, y] = u.useState(null), w = u.useRef(!1), x = b ? !!i || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: m,
    disabled: a,
    setChecked: h,
    control: b,
    setControl: v,
    name: s,
    form: i,
    value: d,
    hasConsumerStoppedPropagationRef: w,
    required: c,
    defaultChecked: Fn(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: g,
    setBubbleInput: y
  };
  return /* @__PURE__ */ f.jsx(
    xH,
    {
      scope: t,
      ...S,
      children: CH(p) ? p(S) : r
    }
  );
}
var Mg = "CheckboxTrigger", Og = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: i,
      disabled: s,
      checked: l,
      required: c,
      setControl: d,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: h,
      bubbleInput: b
    } = $u(Mg, e), v = se(o, d), g = u.useRef(l);
    return u.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const w = () => p(g.current);
        return y.addEventListener("reset", w), () => y.removeEventListener("reset", w);
      }
    }, [a, p]), /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Fn(l) ? "mixed" : l,
        "aria-required": c,
        "data-state": jg(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: i,
        ...r,
        ref: v,
        onKeyDown: W(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: W(n, (y) => {
          p((w) => Fn(w) ? !0 : !w), b && h && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
        })
      }
    );
  }
);
Og.displayName = Mg;
var ju = u.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l,
      onCheckedChange: c,
      form: d,
      ...p
    } = e;
    return /* @__PURE__ */ f.jsx(
      SH,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: s,
        required: i,
        onCheckedChange: c,
        name: r,
        form: d,
        value: l,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx(
            Og,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ f.jsx(
            $g,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ju.displayName = as;
var Ag = "CheckboxIndicator", Dg = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = $u(Ag, n);
    return /* @__PURE__ */ f.jsx(
      Ye,
      {
        present: r || Fn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ f.jsx(
          Z.span,
          {
            "data-state": jg(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Dg.displayName = Ag;
var Ig = "CheckboxBubbleInput", $g = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: i,
      required: s,
      disabled: l,
      name: c,
      value: d,
      form: p,
      bubbleInput: m,
      setBubbleInput: h
    } = $u(Ig, e), b = se(n, h), v = lo(a), g = pa(r);
    u.useEffect(() => {
      const w = m;
      if (!w) return;
      const x = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, E = !o.current;
      if (v !== a && C) {
        const _ = new Event("click", { bubbles: E });
        w.indeterminate = Fn(a), C.call(w, Fn(a) ? !1 : a), w.dispatchEvent(_);
      }
    }, [m, v, a, o]);
    const y = u.useRef(Fn(a) ? !1 : a);
    return /* @__PURE__ */ f.jsx(
      Z.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: i ?? y.current,
        required: s,
        disabled: l,
        name: c,
        value: d,
        form: p,
        ...t,
        tabIndex: -1,
        ref: b,
        style: {
          ...t.style,
          ...g,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
$g.displayName = Ig;
function CH(e) {
  return typeof e == "function";
}
function Fn(e) {
  return e === "indeterminate";
}
function jg(e) {
  return Fn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const _H = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  ju,
  {
    ref: n,
    className: T(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(Dg, { className: T("flex items-center justify-center text-current"), children: /* @__PURE__ */ f.jsx(ta, { className: "h-4 w-4" }) })
  }
));
_H.displayName = ju.displayName;
const u7 = Am, d7 = Hc, f7 = Vc;
var Lp = 1, EH = 0.9, PH = 0.8, RH = 0.17, cl = 0.1, ul = 0.999, NH = 0.9999, TH = 0.99, MH = /[\\\/_+.#"@\[\(\{&]/, OH = /[\\\/_+.#"@\[\(\{&]/g, AH = /[\s-]/, kg = /[\s-]/g;
function ac(e, t, n, r, o, a, i) {
  if (a === t.length) return o === e.length ? Lp : TH;
  var s = `${o},${a}`;
  if (i[s] !== void 0) return i[s];
  for (var l = r.charAt(a), c = n.indexOf(l, o), d = 0, p, m, h, b; c >= 0; ) p = ac(e, t, n, r, c + 1, a + 1, i), p > d && (c === o ? p *= Lp : MH.test(e.charAt(c - 1)) ? (p *= PH, h = e.slice(o, c - 1).match(OH), h && o > 0 && (p *= Math.pow(ul, h.length))) : AH.test(e.charAt(c - 1)) ? (p *= EH, b = e.slice(o, c - 1).match(kg), b && o > 0 && (p *= Math.pow(ul, b.length))) : (p *= RH, o > 0 && (p *= Math.pow(ul, c - o))), e.charAt(c) !== t.charAt(a) && (p *= NH)), (p < cl && n.charAt(c - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(c - 1) !== r.charAt(a)) && (m = ac(e, t, n, r, c + 1, a + 2, i), m * cl > p && (p = m * cl)), p > d && (d = p), c = n.indexOf(l, c + 1);
  return i[s] = d, d;
}
function Fp(e) {
  return e.toLowerCase().replace(kg, " ");
}
function DH(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ac(e, t, Fp(e), Fp(t), 0, 0, {});
}
var Eo = '[cmdk-group=""]', dl = '[cmdk-group-items=""]', IH = '[cmdk-group-heading=""]', Lg = '[cmdk-item=""]', Bp = `${Lg}:not([aria-disabled="true"])`, ic = "cmdk-item-select", Ar = "data-value", $H = (e, t, n) => DH(e, t, n), Fg = u.createContext(void 0), ma = () => u.useContext(Fg), Bg = u.createContext(void 0), ku = () => u.useContext(Bg), zg = u.createContext(void 0), Hg = u.forwardRef((e, t) => {
  let n = Dr(() => {
    var j, D;
    return { search: "", value: (D = (j = e.value) != null ? j : e.defaultValue) != null ? D : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = Dr(() => /* @__PURE__ */ new Set()), o = Dr(() => /* @__PURE__ */ new Map()), a = Dr(() => /* @__PURE__ */ new Map()), i = Dr(() => /* @__PURE__ */ new Set()), s = Wg(e), { label: l, children: c, value: d, onValueChange: p, filter: m, shouldFilter: h, loop: b, disablePointerSelection: v = !1, vimBindings: g = !0, ...y } = e, w = Le(), x = Le(), S = Le(), C = u.useRef(null), E = UH();
  ur(() => {
    if (d !== void 0) {
      let j = d.trim();
      n.current.value = j, _.emit();
    }
  }, [d]), ur(() => {
    E(6, V);
  }, []);
  let _ = u.useMemo(() => ({ subscribe: (j) => (i.current.add(j), () => i.current.delete(j)), snapshot: () => n.current, setState: (j, D, H) => {
    var U, X, A, Y;
    if (!Object.is(n.current[j], D)) {
      if (n.current[j] = D, j === "search") k(), B(), E(1, M);
      else if (j === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(S);
          Q ? Q.focus() : (U = document.getElementById(w)) == null || U.focus();
        }
        if (E(7, () => {
          var Q;
          n.current.selectedItemId = (Q = $()) == null ? void 0 : Q.id, _.emit();
        }), H || E(5, V), ((X = s.current) == null ? void 0 : X.value) !== void 0) {
          let Q = D ?? "";
          (Y = (A = s.current).onValueChange) == null || Y.call(A, Q);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((j) => j());
  } }), []), O = u.useMemo(() => ({ value: (j, D, H) => {
    var U;
    D !== ((U = a.current.get(j)) == null ? void 0 : U.value) && (a.current.set(j, { value: D, keywords: H }), n.current.filtered.items.set(j, N(D, H)), E(2, () => {
      B(), _.emit();
    }));
  }, item: (j, D) => (r.current.add(j), D && (o.current.has(D) ? o.current.get(D).add(j) : o.current.set(D, /* @__PURE__ */ new Set([j]))), E(3, () => {
    k(), B(), n.current.value || M(), _.emit();
  }), () => {
    a.current.delete(j), r.current.delete(j), n.current.filtered.items.delete(j);
    let H = $();
    E(4, () => {
      k(), (H == null ? void 0 : H.getAttribute("id")) === j && M(), _.emit();
    });
  }), group: (j) => (o.current.has(j) || o.current.set(j, /* @__PURE__ */ new Set()), () => {
    a.current.delete(j), o.current.delete(j);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: w, inputId: S, labelId: x, listInnerRef: C }), []);
  function N(j, D) {
    var H, U;
    let X = (U = (H = s.current) == null ? void 0 : H.filter) != null ? U : $H;
    return j ? X(j, n.current.search, D) : 0;
  }
  function B() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let j = n.current.filtered.items, D = [];
    n.current.filtered.groups.forEach((U) => {
      let X = o.current.get(U), A = 0;
      X.forEach((Y) => {
        let Q = j.get(Y);
        A = Math.max(Q, A);
      }), D.push([U, A]);
    });
    let H = C.current;
    K().sort((U, X) => {
      var A, Y;
      let Q = U.getAttribute("id"), te = X.getAttribute("id");
      return ((A = j.get(te)) != null ? A : 0) - ((Y = j.get(Q)) != null ? Y : 0);
    }).forEach((U) => {
      let X = U.closest(dl);
      X ? X.appendChild(U.parentElement === X ? U : U.closest(`${dl} > *`)) : H.appendChild(U.parentElement === H ? U : U.closest(`${dl} > *`));
    }), D.sort((U, X) => X[1] - U[1]).forEach((U) => {
      var X;
      let A = (X = C.current) == null ? void 0 : X.querySelector(`${Eo}[${Ar}="${encodeURIComponent(U[0])}"]`);
      A == null || A.parentElement.appendChild(A);
    });
  }
  function M() {
    let j = K().find((H) => H.getAttribute("aria-disabled") !== "true"), D = j == null ? void 0 : j.getAttribute(Ar);
    _.setState("value", D || void 0);
  }
  function k() {
    var j, D, H, U;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let X = 0;
    for (let A of r.current) {
      let Y = (D = (j = a.current.get(A)) == null ? void 0 : j.value) != null ? D : "", Q = (U = (H = a.current.get(A)) == null ? void 0 : H.keywords) != null ? U : [], te = N(Y, Q);
      n.current.filtered.items.set(A, te), te > 0 && X++;
    }
    for (let [A, Y] of o.current) for (let Q of Y) if (n.current.filtered.items.get(Q) > 0) {
      n.current.filtered.groups.add(A);
      break;
    }
    n.current.filtered.count = X;
  }
  function V() {
    var j, D, H;
    let U = $();
    U && (((j = U.parentElement) == null ? void 0 : j.firstChild) === U && ((H = (D = U.closest(Eo)) == null ? void 0 : D.querySelector(IH)) == null || H.scrollIntoView({ block: "nearest" })), U.scrollIntoView({ block: "nearest" }));
  }
  function $() {
    var j;
    return (j = C.current) == null ? void 0 : j.querySelector(`${Lg}[aria-selected="true"]`);
  }
  function K() {
    var j;
    return Array.from(((j = C.current) == null ? void 0 : j.querySelectorAll(Bp)) || []);
  }
  function G(j) {
    let D = K()[j];
    D && _.setState("value", D.getAttribute(Ar));
  }
  function F(j) {
    var D;
    let H = $(), U = K(), X = U.findIndex((Y) => Y === H), A = U[X + j];
    (D = s.current) != null && D.loop && (A = X + j < 0 ? U[U.length - 1] : X + j === U.length ? U[0] : U[X + j]), A && _.setState("value", A.getAttribute(Ar));
  }
  function I(j) {
    let D = $(), H = D == null ? void 0 : D.closest(Eo), U;
    for (; H && !U; ) H = j > 0 ? VH(H, Eo) : GH(H, Eo), U = H == null ? void 0 : H.querySelector(Bp);
    U ? _.setState("value", U.getAttribute(Ar)) : F(j);
  }
  let L = () => G(K().length - 1), ne = (j) => {
    j.preventDefault(), j.metaKey ? L() : j.altKey ? I(1) : F(1);
  }, re = (j) => {
    j.preventDefault(), j.metaKey ? G(0) : j.altKey ? I(-1) : F(-1);
  };
  return u.createElement(Z.div, { ref: t, tabIndex: -1, ...y, "cmdk-root": "", onKeyDown: (j) => {
    var D;
    (D = y.onKeyDown) == null || D.call(y, j);
    let H = j.nativeEvent.isComposing || j.keyCode === 229;
    if (!(j.defaultPrevented || H)) switch (j.key) {
      case "n":
      case "j": {
        g && j.ctrlKey && ne(j);
        break;
      }
      case "ArrowDown": {
        ne(j);
        break;
      }
      case "p":
      case "k": {
        g && j.ctrlKey && re(j);
        break;
      }
      case "ArrowUp": {
        re(j);
        break;
      }
      case "Home": {
        j.preventDefault(), G(0);
        break;
      }
      case "End": {
        j.preventDefault(), L();
        break;
      }
      case "Enter": {
        j.preventDefault();
        let U = $();
        if (U) {
          let X = new Event(ic);
          U.dispatchEvent(X);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: O.inputId, id: O.labelId, style: YH }, l), is(e, (j) => u.createElement(Bg.Provider, { value: _ }, u.createElement(Fg.Provider, { value: O }, j))));
}), jH = u.forwardRef((e, t) => {
  var n, r;
  let o = Le(), a = u.useRef(null), i = u.useContext(zg), s = ma(), l = Wg(e), c = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : i == null ? void 0 : i.forceMount;
  ur(() => {
    if (!c) return s.item(o, i == null ? void 0 : i.id);
  }, [c]);
  let d = Vg(o, a, [e.value, e.children, a], e.keywords), p = ku(), m = zn((E) => E.value && E.value === d.current), h = zn((E) => c || s.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let E = a.current;
    if (!(!E || e.disabled)) return E.addEventListener(ic, b), () => E.removeEventListener(ic, b);
  }, [h, e.onSelect, e.disabled]);
  function b() {
    var E, _;
    v(), (_ = (E = l.current).onSelect) == null || _.call(E, d.current);
  }
  function v() {
    p.setState("value", d.current, !0);
  }
  if (!h) return null;
  let { disabled: g, value: y, onSelect: w, forceMount: x, keywords: S, ...C } = e;
  return u.createElement(Z.div, { ref: fn(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!m, "data-disabled": !!g, "data-selected": !!m, onPointerMove: g || s.getDisablePointerSelection() ? void 0 : v, onClick: g ? void 0 : b }, e.children);
}), kH = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, i = Le(), s = u.useRef(null), l = u.useRef(null), c = Le(), d = ma(), p = zn((h) => o || d.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(i) : !0);
  ur(() => d.group(i), []), Vg(i, s, [e.value, e.heading, l]);
  let m = u.useMemo(() => ({ id: i, forceMount: o }), [o]);
  return u.createElement(Z.div, { ref: fn(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), is(e, (h) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u.createElement(zg.Provider, { value: m }, h))));
}), LH = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = zn((i) => !i.search);
  return !n && !a ? null : u.createElement(Z.div, { ref: fn(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), FH = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = ku(), i = zn((c) => c.search), s = zn((c) => c.selectedItemId), l = ma();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Z.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": s, id: l.inputId, type: "text", value: o ? e.value : i, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), BH = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), i = u.useRef(null), s = zn((c) => c.selectedItemId), l = ma();
  return u.useEffect(() => {
    if (i.current && a.current) {
      let c = i.current, d = a.current, p, m = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return m.observe(c), () => {
        cancelAnimationFrame(p), m.unobserve(c);
      };
    }
  }, []), u.createElement(Z.div, { ref: fn(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: l.listId }, is(e, (c) => u.createElement("div", { ref: fn(i, l.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), zH = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: i, ...s } = e;
  return u.createElement(oa, { open: n, onOpenChange: r }, u.createElement(aa, { container: i }, u.createElement(gr, { "cmdk-overlay": "", className: o }), u.createElement(br, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(Hg, { ref: t, ...s }))));
}), HH = u.forwardRef((e, t) => zn((n) => n.filtered.count === 0) ? u.createElement(Z.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), WH = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(Z.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, is(e, (i) => u.createElement("div", { "aria-hidden": !0 }, i)));
}), Nt = Object.assign(Hg, { List: BH, Item: jH, Input: FH, Group: kH, Separator: LH, Dialog: zH, Empty: HH, Loading: WH });
function VH(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function GH(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Wg(e) {
  let t = u.useRef(e);
  return ur(() => {
    t.current = e;
  }), t;
}
var ur = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function Dr(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function zn(e) {
  let t = ku(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function Vg(e, t, n, r = []) {
  let o = u.useRef(), a = ma();
  return ur(() => {
    var i;
    let s = (() => {
      var c;
      for (let d of n) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : o.current;
      }
    })(), l = r.map((c) => c.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(Ar, s), o.current = s;
  }), o;
}
var UH = () => {
  let [e, t] = u.useState(), n = Dr(() => /* @__PURE__ */ new Map());
  return ur(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function KH(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function is({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(KH(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var YH = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const qH = oa, p7 = Gi, XH = aa, m7 = yr, Gg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  gr,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Gg.displayName = gr.displayName;
const Ug = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(XH, { children: [
  /* @__PURE__ */ f.jsx(Gg, {}),
  /* @__PURE__ */ f.jsxs(
    br,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ f.jsxs(yr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ f.jsx(qc, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ug.displayName = br.displayName;
const JH = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
JH.displayName = "DialogHeader";
const ZH = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
ZH.displayName = "DialogFooter";
const QH = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  to,
  {
    ref: n,
    className: T("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
QH.displayName = to.displayName;
const eW = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(no, { ref: n, className: T("text-sm text-muted-foreground", e), ...t }));
eW.displayName = no.displayName;
const Kg = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Nt,
  {
    ref: n,
    className: T(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Kg.displayName = Nt.displayName;
const h7 = ({ children: e, ...t }) => /* @__PURE__ */ f.jsx(qH, { ...t, children: /* @__PURE__ */ f.jsx(Ug, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ f.jsx(Kg, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), tW = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.jsx(Z_, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.jsx(
    Nt.Input,
    {
      ref: n,
      className: T(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
tW.displayName = Nt.Input.displayName;
const nW = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Nt.List,
  {
    ref: n,
    className: T("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
nW.displayName = Nt.List.displayName;
const rW = u.forwardRef((e, t) => /* @__PURE__ */ f.jsx(Nt.Empty, { ref: t, className: "py-6 text-center text-sm", ...e }));
rW.displayName = Nt.Empty.displayName;
const oW = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Nt.Group,
  {
    ref: n,
    className: T(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
oW.displayName = Nt.Group.displayName;
const aW = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(Nt.Separator, { ref: n, className: T("-mx-1 h-px bg-border", e), ...t }));
aW.displayName = Nt.Separator.displayName;
const iW = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Nt.Item,
  {
    ref: n,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      e
    ),
    ...t
  }
));
iW.displayName = Nt.Item.displayName;
const sW = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("span", { className: T("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
sW.displayName = "CommandShortcut";
const lW = ["top", "right", "bottom", "left"], Hn = Math.min, Ot = Math.max, gi = Math.round, Fa = Math.floor, dn = (e) => ({
  x: e,
  y: e
}), cW = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uW = {
  start: "end",
  end: "start"
};
function sc(e, t, n) {
  return Ot(e, Hn(t, n));
}
function Rn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nn(e) {
  return e.split("-")[0];
}
function co(e) {
  return e.split("-")[1];
}
function Lu(e) {
  return e === "x" ? "y" : "x";
}
function Fu(e) {
  return e === "y" ? "height" : "width";
}
const dW = /* @__PURE__ */ new Set(["top", "bottom"]);
function un(e) {
  return dW.has(Nn(e)) ? "y" : "x";
}
function Bu(e) {
  return Lu(un(e));
}
function fW(e, t, n) {
  n === void 0 && (n = !1);
  const r = co(e), o = Bu(e), a = Fu(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = bi(i)), [i, bi(i)];
}
function pW(e) {
  const t = bi(e);
  return [lc(e), t, lc(t)];
}
function lc(e) {
  return e.replace(/start|end/g, (t) => uW[t]);
}
const zp = ["left", "right"], Hp = ["right", "left"], mW = ["top", "bottom"], hW = ["bottom", "top"];
function vW(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Hp : zp : t ? zp : Hp;
    case "left":
    case "right":
      return t ? mW : hW;
    default:
      return [];
  }
}
function gW(e, t, n, r) {
  const o = co(e);
  let a = vW(Nn(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(lc)))), a;
}
function bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => cW[t]);
}
function bW(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yg(e) {
  return typeof e != "number" ? bW(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yi(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Wp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = un(t), i = Bu(t), s = Fu(i), l = Nn(t), c = a === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (co(t)) {
    case "start":
      h[i] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += m * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const yW = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = Wp(c, r, l), m = r, h = {}, b = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: g,
      fn: y
    } = s[v], {
      x: w,
      y: x,
      data: S,
      reset: C
    } = await y({
      x: d,
      y: p,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, p = x ?? p, h = {
      ...h,
      [g]: {
        ...h[g],
        ...S
      }
    }, C && b <= 50 && (b++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (c = C.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: d,
      y: p
    } = Wp(c, m, l)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: h
  };
};
async function Uo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: h = 0
  } = Rn(t, e), b = Yg(h), g = s[m ? p === "floating" ? "reference" : "floating" : p], y = yi(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = yi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: x,
    strategy: l
  }) : w);
  return {
    top: (y.top - C.top + b.top) / S.y,
    bottom: (C.bottom - y.bottom + b.bottom) / S.y,
    left: (y.left - C.left + b.left) / S.x,
    right: (C.right - y.right + b.right) / S.x
  };
}
const wW = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = Rn(e, t) || {};
    if (c == null)
      return {};
    const p = Yg(d), m = {
      x: n,
      y: r
    }, h = Bu(o), b = Fu(h), v = await i.getDimensions(c), g = h === "y", y = g ? "top" : "left", w = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", S = a.reference[b] + a.reference[h] - m[h] - a.floating[b], C = m[h] - a.reference[h], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let _ = E ? E[x] : 0;
    (!_ || !await (i.isElement == null ? void 0 : i.isElement(E))) && (_ = s.floating[x] || a.floating[b]);
    const O = S / 2 - C / 2, N = _ / 2 - v[b] / 2 - 1, B = Hn(p[y], N), M = Hn(p[w], N), k = B, V = _ - v[b] - M, $ = _ / 2 - v[b] / 2 + O, K = sc(k, $, V), G = !l.arrow && co(o) != null && $ !== K && a.reference[b] / 2 - ($ < k ? B : M) - v[b] / 2 < 0, F = G ? $ < k ? $ - k : $ - V : 0;
    return {
      [h]: m[h] + F,
      data: {
        [h]: K,
        centerOffset: $ - K - F,
        ...G && {
          alignmentOffset: F
        }
      },
      reset: G
    };
  }
}), xW = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: v = !0,
        ...g
      } = Rn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = Nn(o), w = un(s), x = Nn(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = m || (x || !v ? [bi(s)] : pW(s)), E = b !== "none";
      !m && E && C.push(...gW(s, v, b, S));
      const _ = [s, ...C], O = await Uo(t, g), N = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && N.push(O[y]), p) {
        const $ = fW(o, i, S);
        N.push(O[$[0]], O[$[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: N
      }], !N.every(($) => $ <= 0)) {
        var M, k;
        const $ = (((M = a.flip) == null ? void 0 : M.index) || 0) + 1, K = _[$];
        if (K && (!(p === "alignment" ? w !== un(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((I) => I.overflows[0] > 0 && un(I.placement) === w)))
          return {
            data: {
              index: $,
              overflows: B
            },
            reset: {
              placement: K
            }
          };
        let G = (k = B.filter((F) => F.overflows[0] <= 0).sort((F, I) => F.overflows[1] - I.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!G)
          switch (h) {
            case "bestFit": {
              var V;
              const F = (V = B.filter((I) => {
                if (E) {
                  const L = un(I.placement);
                  return L === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((L) => L > 0).reduce((L, ne) => L + ne, 0)]).sort((I, L) => I[1] - L[1])[0]) == null ? void 0 : V[0];
              F && (G = F);
              break;
            }
            case "initialPlacement":
              G = s;
              break;
          }
        if (o !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function Vp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Gp(e) {
  return lW.some((t) => e[t] >= 0);
}
const SW = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Rn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Uo(t, {
            ...o,
            elementContext: "reference"
          }), i = Vp(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Gp(i)
            }
          };
        }
        case "escaped": {
          const a = await Uo(t, {
            ...o,
            altBoundary: !0
          }), i = Vp(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Gp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, qg = /* @__PURE__ */ new Set(["left", "top"]);
async function CW(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Nn(n), s = co(n), l = un(n) === "y", c = qg.has(i) ? -1 : 1, d = a && l ? -1 : 1, p = Rn(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: b
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof b == "number" && (h = s === "end" ? b * -1 : b), l ? {
    x: h * d,
    y: m * c
  } : {
    x: m * c,
    y: h * d
  };
}
const _W = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await CW(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, EW = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: y,
              y: w
            } = g;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Rn(e, t), c = {
        x: n,
        y: r
      }, d = await Uo(t, l), p = un(Nn(o)), m = Lu(p);
      let h = c[m], b = c[p];
      if (a) {
        const g = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = h + d[g], x = h - d[y];
        h = sc(w, h, x);
      }
      if (i) {
        const g = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = b + d[g], x = b - d[y];
        b = sc(w, b, x);
      }
      const v = s.fn({
        ...t,
        [m]: h,
        [p]: b
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [m]: a,
            [p]: i
          }
        }
      };
    }
  };
}, PW = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Rn(e, t), d = {
        x: n,
        y: r
      }, p = un(o), m = Lu(p);
      let h = d[m], b = d[p];
      const v = Rn(s, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const x = m === "y" ? "height" : "width", S = a.reference[m] - a.floating[x] + g.mainAxis, C = a.reference[m] + a.reference[x] - g.mainAxis;
        h < S ? h = S : h > C && (h = C);
      }
      if (c) {
        var y, w;
        const x = m === "y" ? "width" : "height", S = qg.has(Nn(o)), C = a.reference[p] - a.floating[x] + (S && ((y = i.offset) == null ? void 0 : y[p]) || 0) + (S ? 0 : g.crossAxis), E = a.reference[p] + a.reference[x] + (S ? 0 : ((w = i.offset) == null ? void 0 : w[p]) || 0) - (S ? g.crossAxis : 0);
        b < C ? b = C : b > E && (b = E);
      }
      return {
        [m]: h,
        [p]: b
      };
    }
  };
}, RW = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Rn(e, t), d = await Uo(t, c), p = Nn(o), m = co(o), h = un(o) === "y", {
        width: b,
        height: v
      } = a.floating;
      let g, y;
      p === "top" || p === "bottom" ? (g = p, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = p, g = m === "end" ? "top" : "bottom");
      const w = v - d.top - d.bottom, x = b - d.left - d.right, S = Hn(v - d[g], w), C = Hn(b - d[y], x), E = !t.middlewareData.shift;
      let _ = S, O = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = x), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = w), E && !m) {
        const B = Ot(d.left, 0), M = Ot(d.right, 0), k = Ot(d.top, 0), V = Ot(d.bottom, 0);
        h ? O = b - 2 * (B !== 0 || M !== 0 ? B + M : Ot(d.left, d.right)) : _ = v - 2 * (k !== 0 || V !== 0 ? k + V : Ot(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: O,
        availableHeight: _
      });
      const N = await i.getDimensions(s.floating);
      return b !== N.width || v !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ss() {
  return typeof window < "u";
}
function uo(e) {
  return Xg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function At(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gn(e) {
  var t;
  return (t = (Xg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xg(e) {
  return ss() ? e instanceof Node || e instanceof At(e).Node : !1;
}
function Jt(e) {
  return ss() ? e instanceof Element || e instanceof At(e).Element : !1;
}
function mn(e) {
  return ss() ? e instanceof HTMLElement || e instanceof At(e).HTMLElement : !1;
}
function Up(e) {
  return !ss() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof At(e).ShadowRoot;
}
const NW = /* @__PURE__ */ new Set(["inline", "contents"]);
function ha(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !NW.has(o);
}
const TW = /* @__PURE__ */ new Set(["table", "td", "th"]);
function MW(e) {
  return TW.has(uo(e));
}
const OW = [":popover-open", ":modal"];
function ls(e) {
  return OW.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const AW = ["transform", "translate", "scale", "rotate", "perspective"], DW = ["transform", "translate", "scale", "rotate", "perspective", "filter"], IW = ["paint", "layout", "strict", "content"];
function zu(e) {
  const t = Hu(), n = Jt(e) ? Zt(e) : e;
  return AW.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || DW.some((r) => (n.willChange || "").includes(r)) || IW.some((r) => (n.contain || "").includes(r));
}
function $W(e) {
  let t = Wn(e);
  for (; mn(t) && !Kr(t); ) {
    if (zu(t))
      return t;
    if (ls(t))
      return null;
    t = Wn(t);
  }
  return null;
}
function Hu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jW = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Kr(e) {
  return jW.has(uo(e));
}
function Zt(e) {
  return At(e).getComputedStyle(e);
}
function cs(e) {
  return Jt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Wn(e) {
  if (uo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Up(e) && e.host || // Fallback.
    gn(e)
  );
  return Up(t) ? t.host : t;
}
function Jg(e) {
  const t = Wn(e);
  return Kr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mn(t) && ha(t) ? t : Jg(t);
}
function Ko(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Jg(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = At(o);
  if (a) {
    const s = cc(i);
    return t.concat(i, i.visualViewport || [], ha(o) ? o : [], s && n ? Ko(s) : []);
  }
  return t.concat(o, Ko(o, [], n));
}
function cc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Zg(e) {
  const t = Zt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mn(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = gi(n) !== a || gi(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function Wu(e) {
  return Jt(e) ? e : e.contextElement;
}
function Fr(e) {
  const t = Wu(e);
  if (!mn(t))
    return dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Zg(t);
  let i = (a ? gi(n.width) : n.width) / r, s = (a ? gi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const kW = /* @__PURE__ */ dn(0);
function Qg(e) {
  const t = At(e);
  return !Hu() || !t.visualViewport ? kW : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function LW(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== At(e) ? !1 : t;
}
function dr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Wu(e);
  let i = dn(1);
  t && (r ? Jt(r) && (i = Fr(r)) : i = Fr(e));
  const s = LW(a, n, r) ? Qg(a) : dn(0);
  let l = (o.left + s.x) / i.x, c = (o.top + s.y) / i.y, d = o.width / i.x, p = o.height / i.y;
  if (a) {
    const m = At(a), h = r && Jt(r) ? At(r) : r;
    let b = m, v = cc(b);
    for (; v && r && h !== b; ) {
      const g = Fr(v), y = v.getBoundingClientRect(), w = Zt(v), x = y.left + (v.clientLeft + parseFloat(w.paddingLeft)) * g.x, S = y.top + (v.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, c *= g.y, d *= g.x, p *= g.y, l += x, c += S, b = At(v), v = cc(b);
    }
  }
  return yi({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function Vu(e, t) {
  const n = cs(e).scrollLeft;
  return t ? t.left + n : dr(gn(e)).left + n;
}
function eb(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Vu(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function FW(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = gn(r), s = t ? ls(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = dn(1);
  const d = dn(0), p = mn(r);
  if ((p || !p && !a) && ((uo(r) !== "body" || ha(i)) && (l = cs(r)), mn(r))) {
    const h = dr(r);
    c = Fr(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop;
  }
  const m = i && !p && !a ? eb(i, l, !0) : dn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + m.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + m.y
  };
}
function BW(e) {
  return Array.from(e.getClientRects());
}
function zW(e) {
  const t = gn(e), n = cs(e), r = e.ownerDocument.body, o = Ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Vu(e);
  const s = -n.scrollTop;
  return Zt(r).direction === "rtl" && (i += Ot(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function HW(e, t) {
  const n = At(e), r = gn(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    const c = Hu();
    (!c || c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
const WW = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function VW(e, t) {
  const n = dr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = mn(e) ? Fr(e) : dn(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = o * a.x, c = r * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function Kp(e, t, n) {
  let r;
  if (t === "viewport")
    r = HW(e, n);
  else if (t === "document")
    r = zW(gn(e));
  else if (Jt(t))
    r = VW(t, n);
  else {
    const o = Qg(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return yi(r);
}
function tb(e, t) {
  const n = Wn(e);
  return n === t || !Jt(n) || Kr(n) ? !1 : Zt(n).position === "fixed" || tb(n, t);
}
function GW(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ko(e, [], !1).filter((s) => Jt(s) && uo(s) !== "body"), o = null;
  const a = Zt(e).position === "fixed";
  let i = a ? Wn(e) : e;
  for (; Jt(i) && !Kr(i); ) {
    const s = Zt(i), l = zu(i);
    !l && s.position === "fixed" && (o = null), (a ? !l && !o : !l && s.position === "static" && !!o && WW.has(o.position) || ha(i) && !l && tb(e, i)) ? r = r.filter((d) => d !== i) : o = s, i = Wn(i);
  }
  return t.set(e, r), r;
}
function UW(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ls(t) ? [] : GW(t, this._c) : [].concat(n), r], s = i[0], l = i.reduce((c, d) => {
    const p = Kp(t, d, o);
    return c.top = Ot(p.top, c.top), c.right = Hn(p.right, c.right), c.bottom = Hn(p.bottom, c.bottom), c.left = Ot(p.left, c.left), c;
  }, Kp(t, s, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function KW(e) {
  const {
    width: t,
    height: n
  } = Zg(e);
  return {
    width: t,
    height: n
  };
}
function YW(e, t, n) {
  const r = mn(t), o = gn(t), a = n === "fixed", i = dr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  function c() {
    l.x = Vu(o);
  }
  if (r || !r && !a)
    if ((uo(t) !== "body" || ha(o)) && (s = cs(t)), r) {
      const h = dr(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && c();
  a && !r && o && c();
  const d = o && !r && !a ? eb(o, s) : dn(0), p = i.left + s.scrollLeft - l.x - d.x, m = i.top + s.scrollTop - l.y - d.y;
  return {
    x: p,
    y: m,
    width: i.width,
    height: i.height
  };
}
function fl(e) {
  return Zt(e).position === "static";
}
function Yp(e, t) {
  if (!mn(e) || Zt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return gn(e) === n && (n = n.ownerDocument.body), n;
}
function nb(e, t) {
  const n = At(e);
  if (ls(e))
    return n;
  if (!mn(e)) {
    let o = Wn(e);
    for (; o && !Kr(o); ) {
      if (Jt(o) && !fl(o))
        return o;
      o = Wn(o);
    }
    return n;
  }
  let r = Yp(e, t);
  for (; r && MW(r) && fl(r); )
    r = Yp(r, t);
  return r && Kr(r) && fl(r) && !zu(r) ? n : r || $W(e) || n;
}
const qW = async function(e) {
  const t = this.getOffsetParent || nb, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: YW(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function XW(e) {
  return Zt(e).direction === "rtl";
}
const JW = {
  convertOffsetParentRelativeRectToViewportRelativeRect: FW,
  getDocumentElement: gn,
  getClippingRect: UW,
  getOffsetParent: nb,
  getElementRects: qW,
  getClientRects: BW,
  getDimensions: KW,
  getScale: Fr,
  isElement: Jt,
  isRTL: XW
};
function rb(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ZW(e, t) {
  let n = null, r;
  const o = gn(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: p,
      width: m,
      height: h
    } = c;
    if (s || t(), !m || !h)
      return;
    const b = Fa(p), v = Fa(o.clientWidth - (d + m)), g = Fa(o.clientHeight - (p + h)), y = Fa(d), x = {
      rootMargin: -b + "px " + -v + "px " + -g + "px " + -y + "px",
      threshold: Ot(0, Hn(1, l)) || 1
    };
    let S = !0;
    function C(E) {
      const _ = E[0].intersectionRatio;
      if (_ !== l) {
        if (!S)
          return i();
        _ ? i(!1, _) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !rb(c, e.getBoundingClientRect()) && i(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function QW(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Wu(e), d = o || a ? [...c ? Ko(c) : [], ...Ko(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const p = c && s ? ZW(c, n) : null;
  let m = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && h && (h.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let b, v = l ? dr(e) : null;
  l && g();
  function g() {
    const y = dr(e);
    v && !rb(v, y) && n(), v = y, b = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    d.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), p == null || p(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(b);
  };
}
const e4 = _W, t4 = EW, n4 = xW, r4 = RW, o4 = SW, qp = wW, a4 = PW, i4 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: JW,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return yW(e, t, {
    ...o,
    platform: a
  });
};
var s4 = typeof document < "u", l4 = function() {
}, Za = s4 ? Ii : l4;
function wi(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!wi(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !wi(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ob(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xp(e, t) {
  const n = ob(e);
  return Math.round(t * n) / n;
}
function pl(e) {
  const t = u.useRef(e);
  return Za(() => {
    t.current = e;
  }), t;
}
function c4(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [d, p] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, h] = u.useState(r);
  wi(m, r) || h(r);
  const [b, v] = u.useState(null), [g, y] = u.useState(null), w = u.useCallback((I) => {
    I !== E.current && (E.current = I, v(I));
  }, []), x = u.useCallback((I) => {
    I !== _.current && (_.current = I, y(I));
  }, []), S = a || b, C = i || g, E = u.useRef(null), _ = u.useRef(null), O = u.useRef(d), N = l != null, B = pl(l), M = pl(o), k = pl(c), V = u.useCallback(() => {
    if (!E.current || !_.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: m
    };
    M.current && (I.platform = M.current), i4(E.current, _.current, I).then((L) => {
      const ne = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      $.current && !wi(O.current, ne) && (O.current = ne, ea.flushSync(() => {
        p(ne);
      }));
    });
  }, [m, t, n, M, k]);
  Za(() => {
    c === !1 && O.current.isPositioned && (O.current.isPositioned = !1, p((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [c]);
  const $ = u.useRef(!1);
  Za(() => ($.current = !0, () => {
    $.current = !1;
  }), []), Za(() => {
    if (S && (E.current = S), C && (_.current = C), S && C) {
      if (B.current)
        return B.current(S, C, V);
      V();
    }
  }, [S, C, V, B, N]);
  const K = u.useMemo(() => ({
    reference: E,
    floating: _,
    setReference: w,
    setFloating: x
  }), [w, x]), G = u.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), F = u.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return I;
    const L = Xp(G.floating, d.x), ne = Xp(G.floating, d.y);
    return s ? {
      ...I,
      transform: "translate(" + L + "px, " + ne + "px)",
      ...ob(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: ne
    };
  }, [n, s, G.floating, d.x, d.y]);
  return u.useMemo(() => ({
    ...d,
    update: V,
    refs: K,
    elements: G,
    floatingStyles: F
  }), [d, V, K, G, F]);
}
const u4 = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? qp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? qp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, d4 = (e, t) => ({
  ...e4(e),
  options: [e, t]
}), f4 = (e, t) => ({
  ...t4(e),
  options: [e, t]
}), p4 = (e, t) => ({
  ...a4(e),
  options: [e, t]
}), m4 = (e, t) => ({
  ...n4(e),
  options: [e, t]
}), h4 = (e, t) => ({
  ...r4(e),
  options: [e, t]
}), v4 = (e, t) => ({
  ...o4(e),
  options: [e, t]
}), g4 = (e, t) => ({
  ...u4(e),
  options: [e, t]
});
var b4 = "Arrow", ab = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ f.jsx(
    Z.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ab.displayName = b4;
var y4 = ab, Gu = "Popper", [ib, bn] = Fe(Gu), [w4, sb] = ib(Gu), lb = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ f.jsx(w4, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
lb.displayName = Gu;
var cb = "PopperAnchor", ub = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = sb(cb, n), i = u.useRef(null), s = se(t, i);
    return u.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ f.jsx(Z.div, { ...o, ref: s });
  }
);
ub.displayName = cb;
var Uu = "PopperContent", [x4, S4] = ib(Uu), db = u.forwardRef(
  (e, t) => {
    var A, Y, Q, te, oe, J;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: d = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: b,
      ...v
    } = e, g = sb(Uu, n), [y, w] = u.useState(null), x = se(t, (q) => w(q)), [S, C] = u.useState(null), E = pa(S), _ = (E == null ? void 0 : E.width) ?? 0, O = (E == null ? void 0 : E.height) ?? 0, N = r + (a !== "center" ? "-" + a : ""), B = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, M = Array.isArray(c) ? c : [c], k = M.length > 0, V = {
      padding: B,
      boundary: M.filter(_4),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: $, floatingStyles: K, placement: G, isPositioned: F, middlewareData: I } = c4({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...q) => QW(...q, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        d4({ mainAxis: o + O, alignmentAxis: i }),
        l && f4({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? p4() : void 0,
          ...V
        }),
        l && m4({ ...V }),
        h4({
          ...V,
          apply: ({ elements: q, rects: z, availableWidth: ae, availableHeight: ce }) => {
            const { width: ve, height: pe } = z.reference, ue = q.floating.style;
            ue.setProperty("--radix-popper-available-width", `${ae}px`), ue.setProperty("--radix-popper-available-height", `${ce}px`), ue.setProperty("--radix-popper-anchor-width", `${ve}px`), ue.setProperty("--radix-popper-anchor-height", `${pe}px`);
          }
        }),
        S && g4({ element: S, padding: s }),
        E4({ arrowWidth: _, arrowHeight: O }),
        m && v4({ strategy: "referenceHidden", ...V })
      ]
    }), [L, ne] = mb(G), re = Te(b);
    Ke(() => {
      F && (re == null || re());
    }, [F, re]);
    const j = (A = I.arrow) == null ? void 0 : A.x, D = (Y = I.arrow) == null ? void 0 : Y.y, H = ((Q = I.arrow) == null ? void 0 : Q.centerOffset) !== 0, [U, X] = u.useState();
    return Ke(() => {
      y && X(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: F ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (te = I.transformOrigin) == null ? void 0 : te.x,
            (oe = I.transformOrigin) == null ? void 0 : oe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = I.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f.jsx(
          x4,
          {
            scope: n,
            placedSide: L,
            onArrowChange: C,
            arrowX: j,
            arrowY: D,
            shouldHideArrow: H,
            children: /* @__PURE__ */ f.jsx(
              Z.div,
              {
                "data-side": L,
                "data-align": ne,
                ...v,
                ref: x,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: F ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
db.displayName = Uu;
var fb = "PopperArrow", C4 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, pb = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = S4(fb, r), i = C4[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f.jsx(
          y4,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
pb.displayName = fb;
function _4(e) {
  return e !== null;
}
var E4 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, y, w;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [c, d] = mb(n), p = { start: "0%", center: "50%", end: "100%" }[d], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, h = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let b = "", v = "";
    return c === "bottom" ? (b = i ? p : `${m}px`, v = `${-l}px`) : c === "top" ? (b = i ? p : `${m}px`, v = `${r.floating.height + l}px`) : c === "right" ? (b = `${-l}px`, v = i ? p : `${h}px`) : c === "left" && (b = `${r.floating.width + l}px`, v = i ? p : `${h}px`), { data: { x: b, y: v } };
  }
});
function mb(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fo = lb, po = ub, va = db, ga = pb, ml = "rovingFocusGroup.onEntryFocus", P4 = { bubbles: !1, cancelable: !0 }, ba = "RovingFocusGroup", [uc, hb, R4] = Mn(ba), [N4, yn] = Fe(
  ba,
  [R4]
), [T4, M4] = N4(ba), vb = u.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(uc.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(uc.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f.jsx(O4, { ...e, ref: t }) }) })
);
vb.displayName = ba;
var O4 = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: i,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = e, m = u.useRef(null), h = se(t, m), b = Qt(a), [v, g] = ze({
    prop: i,
    defaultProp: s ?? null,
    onChange: l,
    caller: ba
  }), [y, w] = u.useState(!1), x = Te(c), S = hb(n), C = u.useRef(!1), [E, _] = u.useState(0);
  return u.useEffect(() => {
    const O = m.current;
    if (O)
      return O.addEventListener(ml, x), () => O.removeEventListener(ml, x);
  }, [x]), /* @__PURE__ */ f.jsx(
    T4,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: v,
      onItemFocus: u.useCallback(
        (O) => g(O),
        [g]
      ),
      onItemShiftTab: u.useCallback(() => w(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => _((O) => O + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => _((O) => O - 1),
        []
      ),
      children: /* @__PURE__ */ f.jsx(
        Z.div,
        {
          tabIndex: y || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: W(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: W(e.onFocus, (O) => {
            const N = !C.current;
            if (O.target === O.currentTarget && N && !y) {
              const B = new CustomEvent(ml, P4);
              if (O.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const M = S().filter((G) => G.focusable), k = M.find((G) => G.active), V = M.find((G) => G.id === v), K = [k, V, ...M].filter(
                  Boolean
                ).map((G) => G.ref.current);
                yb(K, d);
              }
            }
            C.current = !1;
          }),
          onBlur: W(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), gb = "RovingFocusGroupItem", bb = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: i,
      ...s
    } = e, l = Le(), c = a || l, d = M4(gb, n), p = d.currentTabStopId === c, m = hb(n), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: v } = d;
    return u.useEffect(() => {
      if (r)
        return h(), () => b();
    }, [r, h, b]), /* @__PURE__ */ f.jsx(
      uc.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f.jsx(
          Z.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: W(e.onMouseDown, (g) => {
              r ? d.onItemFocus(c) : g.preventDefault();
            }),
            onFocus: W(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: W(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const y = I4(g, d.orientation, d.dir);
              if (y !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let x = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const S = x.indexOf(g.currentTarget);
                  x = d.loop ? $4(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => yb(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: p, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
bb.displayName = gb;
var A4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function D4(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function I4(e, t, n) {
  const r = D4(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return A4[r];
}
function yb(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function $4(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ya = vb, wa = bb, dc = ["Enter", " "], j4 = ["ArrowDown", "PageUp", "Home"], wb = ["ArrowUp", "PageDown", "End"], k4 = [...j4, ...wb], L4 = {
  ltr: [...dc, "ArrowRight"],
  rtl: [...dc, "ArrowLeft"]
}, F4 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, xa = "Menu", [Yo, B4, z4] = Mn(xa), [_r, Sa] = Fe(xa, [
  z4,
  bn,
  yn
]), Ca = bn(), xb = yn(), [Sb, Kn] = _r(xa), [H4, _a] = _r(xa), Cb = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: i = !0 } = e, s = Ca(t), [l, c] = u.useState(null), d = u.useRef(!1), p = Te(a), m = Qt(o);
  return u.useEffect(() => {
    const h = () => {
      d.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => d.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ f.jsx(fo, { ...s, children: /* @__PURE__ */ f.jsx(
    Sb,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ f.jsx(
        H4,
        {
          scope: t,
          onClose: u.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: d,
          dir: m,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Cb.displayName = xa;
var W4 = "MenuAnchor", Ku = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ca(n);
    return /* @__PURE__ */ f.jsx(po, { ...o, ...r, ref: t });
  }
);
Ku.displayName = W4;
var Yu = "MenuPortal", [V4, _b] = _r(Yu, {
  forceMount: void 0
}), Eb = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Kn(Yu, t);
  return /* @__PURE__ */ f.jsx(V4, { scope: t, forceMount: n, children: /* @__PURE__ */ f.jsx(Ye, { present: n || a.open, children: /* @__PURE__ */ f.jsx(eo, { asChild: !0, container: o, children: r }) }) });
};
Eb.displayName = Yu;
var Bt = "MenuContent", [G4, qu] = _r(Bt), Pb = u.forwardRef(
  (e, t) => {
    const n = _b(Bt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Kn(Bt, e.__scopeMenu), i = _a(Bt, e.__scopeMenu);
    return /* @__PURE__ */ f.jsx(Yo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ f.jsx(Yo.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ f.jsx(U4, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(K4, { ...o, ref: t }) }) }) });
  }
), U4 = u.forwardRef(
  (e, t) => {
    const n = Kn(Bt, e.__scopeMenu), r = u.useRef(null), o = se(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return Wi(a);
    }, []), /* @__PURE__ */ f.jsx(
      Xu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: W(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), K4 = u.forwardRef((e, t) => {
  const n = Kn(Bt, e.__scopeMenu);
  return /* @__PURE__ */ f.jsx(
    Xu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Y4 = /* @__PURE__ */ Bn("MenuContent.ScrollLock"), Xu = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: h,
      disableOutsideScroll: b,
      ...v
    } = e, g = Kn(Bt, n), y = _a(Bt, n), w = Ca(n), x = xb(n), S = B4(n), [C, E] = u.useState(null), _ = u.useRef(null), O = se(t, _, g.onContentChange), N = u.useRef(0), B = u.useRef(""), M = u.useRef(0), k = u.useRef(null), V = u.useRef("right"), $ = u.useRef(0), K = b ? ra : u.Fragment, G = b ? { as: Y4, allowPinchZoom: !0 } : void 0, F = (L) => {
      var A, Y;
      const ne = B.current + L, re = S().filter((Q) => !Q.disabled), j = document.activeElement, D = (A = re.find((Q) => Q.ref.current === j)) == null ? void 0 : A.textValue, H = re.map((Q) => Q.textValue), U = i3(H, ne, D), X = (Y = re.find((Q) => Q.textValue === U)) == null ? void 0 : Y.ref.current;
      (function Q(te) {
        B.current = te, window.clearTimeout(N.current), te !== "" && (N.current = window.setTimeout(() => Q(""), 1e3));
      })(ne), X && setTimeout(() => X.focus());
    };
    u.useEffect(() => () => window.clearTimeout(N.current), []), zi();
    const I = u.useCallback((L) => {
      var re, j;
      return V.current === ((re = k.current) == null ? void 0 : re.side) && l3(L, (j = k.current) == null ? void 0 : j.area);
    }, []);
    return /* @__PURE__ */ f.jsx(
      G4,
      {
        scope: n,
        searchRef: B,
        onItemEnter: u.useCallback(
          (L) => {
            I(L) && L.preventDefault();
          },
          [I]
        ),
        onItemLeave: u.useCallback(
          (L) => {
            var ne;
            I(L) || ((ne = _.current) == null || ne.focus(), E(null));
          },
          [I]
        ),
        onTriggerLeave: u.useCallback(
          (L) => {
            I(L) && L.preventDefault();
          },
          [I]
        ),
        pointerGraceTimerRef: M,
        onPointerGraceIntentChange: u.useCallback((L) => {
          k.current = L;
        }, []),
        children: /* @__PURE__ */ f.jsx(K, { ...G, children: /* @__PURE__ */ f.jsx(
          na,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: W(a, (L) => {
              var ne;
              L.preventDefault(), (ne = _.current) == null || ne.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ f.jsx(
              On,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: h,
                children: /* @__PURE__ */ f.jsx(
                  ya,
                  {
                    asChild: !0,
                    ...x,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: W(l, (L) => {
                      y.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f.jsx(
                      va,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Wb(g.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...w,
                        ...v,
                        ref: O,
                        style: { outline: "none", ...v.style },
                        onKeyDown: W(v.onKeyDown, (L) => {
                          const re = L.target.closest("[data-radix-menu-content]") === L.currentTarget, j = L.ctrlKey || L.altKey || L.metaKey, D = L.key.length === 1;
                          re && (L.key === "Tab" && L.preventDefault(), !j && D && F(L.key));
                          const H = _.current;
                          if (L.target !== H || !k4.includes(L.key)) return;
                          L.preventDefault();
                          const X = S().filter((A) => !A.disabled).map((A) => A.ref.current);
                          wb.includes(L.key) && X.reverse(), o3(X);
                        }),
                        onBlur: W(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(N.current), B.current = "");
                        }),
                        onPointerMove: W(
                          e.onPointerMove,
                          qo((L) => {
                            const ne = L.target, re = $.current !== L.clientX;
                            if (L.currentTarget.contains(ne) && re) {
                              const j = L.clientX > $.current ? "right" : "left";
                              V.current = j, $.current = L.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Pb.displayName = Bt;
var q4 = "MenuGroup", Ju = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { role: "group", ...r, ref: t });
  }
);
Ju.displayName = q4;
var X4 = "MenuLabel", Rb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { ...r, ref: t });
  }
);
Rb.displayName = X4;
var xi = "MenuItem", Jp = "menu.itemSelect", us = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), i = _a(xi, e.__scopeMenu), s = qu(xi, e.__scopeMenu), l = se(t, a), c = u.useRef(!1), d = () => {
      const p = a.current;
      if (!n && p) {
        const m = new CustomEvent(Jp, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Jp, (h) => r == null ? void 0 : r(h), { once: !0 }), jo(p, m), m.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ f.jsx(
      Nb,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: W(e.onClick, d),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), c.current = !0;
        },
        onPointerUp: W(e.onPointerUp, (p) => {
          var m;
          c.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: W(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          n || m && p.key === " " || dc.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
us.displayName = xi;
var Nb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, i = qu(xi, n), s = xb(n), l = u.useRef(null), c = se(t, l), [d, p] = u.useState(!1), [m, h] = u.useState("");
    return u.useEffect(() => {
      const b = l.current;
      b && h((b.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ f.jsx(
      Yo.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: /* @__PURE__ */ f.jsx(wa, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: c,
            onPointerMove: W(
              e.onPointerMove,
              qo((b) => {
                r ? i.onItemLeave(b) : (i.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: W(
              e.onPointerLeave,
              qo((b) => i.onItemLeave(b))
            ),
            onFocus: W(e.onFocus, () => p(!0)),
            onBlur: W(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), J4 = "MenuCheckboxItem", Tb = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ f.jsx(Ib, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ f.jsx(
      us,
      {
        role: "menuitemcheckbox",
        "aria-checked": Si(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ed(n),
        onSelect: W(
          o.onSelect,
          () => r == null ? void 0 : r(Si(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Tb.displayName = J4;
var Mb = "MenuRadioGroup", [Z4, Q4] = _r(
  Mb,
  { value: void 0, onValueChange: () => {
  } }
), Ob = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Te(r);
    return /* @__PURE__ */ f.jsx(Z4, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ f.jsx(Ju, { ...o, ref: t }) });
  }
);
Ob.displayName = Mb;
var Ab = "MenuRadioItem", Db = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Q4(Ab, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ f.jsx(Ib, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ f.jsx(
      us,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": ed(a),
        onSelect: W(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Db.displayName = Ab;
var Zu = "MenuItemIndicator", [Ib, e3] = _r(
  Zu,
  { checked: !1 }
), $b = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = e3(Zu, n);
    return /* @__PURE__ */ f.jsx(
      Ye,
      {
        present: r || Si(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ f.jsx(
          Z.span,
          {
            ...o,
            ref: t,
            "data-state": ed(a.checked)
          }
        )
      }
    );
  }
);
$b.displayName = Zu;
var t3 = "MenuSeparator", jb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(
      Z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
jb.displayName = t3;
var n3 = "MenuArrow", kb = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ca(n);
    return /* @__PURE__ */ f.jsx(ga, { ...o, ...r, ref: t });
  }
);
kb.displayName = n3;
var Qu = "MenuSub", [r3, Lb] = _r(Qu), Fb = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Kn(Qu, t), i = Ca(t), [s, l] = u.useState(null), [c, d] = u.useState(null), p = Te(o);
  return u.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ f.jsx(fo, { ...i, children: /* @__PURE__ */ f.jsx(
    Sb,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: c,
      onContentChange: d,
      children: /* @__PURE__ */ f.jsx(
        r3,
        {
          scope: t,
          contentId: Le(),
          triggerId: Le(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
Fb.displayName = Qu;
var Mo = "MenuSubTrigger", Bb = u.forwardRef(
  (e, t) => {
    const n = Kn(Mo, e.__scopeMenu), r = _a(Mo, e.__scopeMenu), o = Lb(Mo, e.__scopeMenu), a = qu(Mo, e.__scopeMenu), i = u.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, c = { __scopeMenu: e.__scopeMenu }, d = u.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return u.useEffect(() => d, [d]), u.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [s, l]), /* @__PURE__ */ f.jsx(Ku, { asChild: !0, ...c, children: /* @__PURE__ */ f.jsx(
      Nb,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Wb(n.open),
        ...e,
        ref: fn(t, o.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: W(
          e.onPointerMove,
          qo((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: W(
          e.onPointerLeave,
          qo((p) => {
            var h, b;
            d();
            const m = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (m) {
              const v = (b = n.content) == null ? void 0 : b.dataset.side, g = v === "right", y = g ? -5 : 5, w = m[g ? "left" : "right"], x = m[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + y, y: p.clientY },
                  { x: w, y: m.top },
                  { x, y: m.top },
                  { x, y: m.bottom },
                  { x: w, y: m.bottom }
                ],
                side: v
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: W(e.onKeyDown, (p) => {
          var h;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || L4[r.dir].includes(p.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
Bb.displayName = Mo;
var zb = "MenuSubContent", Hb = u.forwardRef(
  (e, t) => {
    const n = _b(Bt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Kn(Bt, e.__scopeMenu), i = _a(Bt, e.__scopeMenu), s = Lb(zb, e.__scopeMenu), l = u.useRef(null), c = se(t, l);
    return /* @__PURE__ */ f.jsx(Yo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ f.jsx(Yo.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ f.jsx(
      Xu,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var p;
          i.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: W(e.onFocusOutside, (d) => {
          d.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: W(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: W(e.onKeyDown, (d) => {
          var h;
          const p = d.currentTarget.contains(d.target), m = F4[i.dir].includes(d.key);
          p && m && (a.onOpenChange(!1), (h = s.trigger) == null || h.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Hb.displayName = zb;
function Wb(e) {
  return e ? "open" : "closed";
}
function Si(e) {
  return e === "indeterminate";
}
function ed(e) {
  return Si(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function o3(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function a3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function i3(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = a3(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function s3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], c = s.x, d = s.y, p = l.x, m = l.y;
    d > r != m > r && n < (p - c) * (r - d) / (m - d) + c && (o = !o);
  }
  return o;
}
function l3(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return s3(n, t);
}
function qo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var td = Cb, nd = Ku, rd = Eb, od = Pb, ad = Ju, id = Rb, sd = us, ld = Tb, cd = Ob, ud = Db, dd = $b, fd = jb, pd = kb, md = Fb, hd = Bb, vd = Hb, gd = "ContextMenu", [c3, v7] = Fe(gd, [
  Sa
]), pt = Sa(), [u3, Vb] = c3(gd), Gb = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [i, s] = u.useState(!1), l = pt(t), c = Te(r), d = u.useCallback(
    (p) => {
      s(p), c(p);
    },
    [c]
  );
  return /* @__PURE__ */ f.jsx(
    u3,
    {
      scope: t,
      open: i,
      onOpenChange: d,
      modal: a,
      children: /* @__PURE__ */ f.jsx(
        td,
        {
          ...l,
          dir: o,
          open: i,
          onOpenChange: d,
          modal: a,
          children: n
        }
      )
    }
  );
};
Gb.displayName = gd;
var Ub = "ContextMenuTrigger", Kb = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Vb(Ub, n), i = pt(n), s = u.useRef({ x: 0, y: 0 }), l = u.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), c = u.useRef(0), d = u.useCallback(
      () => window.clearTimeout(c.current),
      []
    ), p = (m) => {
      s.current = { x: m.clientX, y: m.clientY }, a.onOpenChange(!0);
    };
    return u.useEffect(() => d, [d]), u.useEffect(() => void (r && d()), [r, d]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(nd, { ...i, virtualRef: l }),
      /* @__PURE__ */ f.jsx(
        Z.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : W(e.onContextMenu, (m) => {
            d(), p(m), m.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : W(
            e.onPointerDown,
            Ba((m) => {
              d(), c.current = window.setTimeout(() => p(m), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : W(e.onPointerMove, Ba(d)),
          onPointerCancel: r ? e.onPointerCancel : W(e.onPointerCancel, Ba(d)),
          onPointerUp: r ? e.onPointerUp : W(e.onPointerUp, Ba(d))
        }
      )
    ] });
  }
);
Kb.displayName = Ub;
var d3 = "ContextMenuPortal", Yb = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = pt(t);
  return /* @__PURE__ */ f.jsx(rd, { ...r, ...n });
};
Yb.displayName = d3;
var qb = "ContextMenuContent", Xb = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Vb(qb, n), a = pt(n), i = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      od,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
        },
        onInteractOutside: (s) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, s), !s.defaultPrevented && !o.modal && (i.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Xb.displayName = qb;
var f3 = "ContextMenuGroup", Jb = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ f.jsx(ad, { ...o, ...r, ref: t });
  }
);
Jb.displayName = f3;
var p3 = "ContextMenuLabel", Zb = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ f.jsx(id, { ...o, ...r, ref: t });
  }
);
Zb.displayName = p3;
var m3 = "ContextMenuItem", Qb = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ f.jsx(sd, { ...o, ...r, ref: t });
  }
);
Qb.displayName = m3;
var h3 = "ContextMenuCheckboxItem", ey = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(ld, { ...o, ...r, ref: t });
});
ey.displayName = h3;
var v3 = "ContextMenuRadioGroup", ty = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(cd, { ...o, ...r, ref: t });
});
ty.displayName = v3;
var g3 = "ContextMenuRadioItem", ny = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(ud, { ...o, ...r, ref: t });
});
ny.displayName = g3;
var b3 = "ContextMenuItemIndicator", ry = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(dd, { ...o, ...r, ref: t });
});
ry.displayName = b3;
var y3 = "ContextMenuSeparator", oy = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(fd, { ...o, ...r, ref: t });
});
oy.displayName = y3;
var w3 = "ContextMenuArrow", x3 = u.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ f.jsx(pd, { ...o, ...r, ref: t });
  }
);
x3.displayName = w3;
var ay = "ContextMenuSub", iy = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, i = pt(t), [s, l] = ze({
    prop: o,
    defaultProp: a ?? !1,
    onChange: r,
    caller: ay
  });
  return /* @__PURE__ */ f.jsx(md, { ...i, open: s, onOpenChange: l, children: n });
};
iy.displayName = ay;
var S3 = "ContextMenuSubTrigger", sy = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(hd, { ...o, ...r, ref: t });
});
sy.displayName = S3;
var C3 = "ContextMenuSubContent", ly = u.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ f.jsx(
    vd,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ly.displayName = C3;
function Ba(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var _3 = Gb, E3 = Kb, cy = Yb, uy = Xb, P3 = Jb, dy = Zb, fy = Qb, py = ey, R3 = ty, my = ny, hy = ry, vy = oy, N3 = iy, gy = sy, by = ly;
const g7 = _3, b7 = E3, y7 = P3, w7 = cy, x7 = N3, S7 = R3, T3 = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  gy,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.jsx(Zr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
T3.displayName = gy.displayName;
const M3 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  by,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
M3.displayName = by.displayName;
const O3 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(cy, { children: /* @__PURE__ */ f.jsx(
  uy,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
) }));
O3.displayName = uy.displayName;
const A3 = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  fy,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
A3.displayName = fy.displayName;
const D3 = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  py,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(hy, { children: /* @__PURE__ */ f.jsx(ta, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
D3.displayName = py.displayName;
const I3 = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  my,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(hy, { children: /* @__PURE__ */ f.jsx(Bi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
I3.displayName = my.displayName;
const $3 = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  dy,
  {
    ref: r,
    className: T("px-2 py-1.5 text-sm font-semibold text-foreground", t && "pl-8", e),
    ...n
  }
));
$3.displayName = dy.displayName;
const j3 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(vy, { ref: n, className: T("-mx-1 my-1 h-px bg-border", e), ...t }));
j3.displayName = vy.displayName;
const k3 = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("span", { className: T("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
k3.displayName = "ContextMenuShortcut";
function L3(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const yy = P.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), mo = () => {
  const e = P.useContext(yy);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
L3(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}`);
const F3 = 24, B3 = typeof window < "u" ? Ii : ft;
function Zp(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function z3() {
  return bd(/^Mac/);
}
function H3() {
  return bd(/^iPhone/);
}
function Qp() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function W3() {
  return bd(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  z3() && navigator.maxTouchPoints > 1;
}
function wy() {
  return H3() || W3();
}
function bd(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const hl = typeof document < "u" && window.visualViewport;
function em(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function xy(e) {
  for (em(e) && (e = e.parentElement); e && !em(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const V3 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let za = 0, vl;
function G3(e = {}) {
  let { isDisabled: t } = e;
  B3(() => {
    if (!t)
      return za++, za === 1 && wy() && (vl = U3()), () => {
        za--, za === 0 && (vl == null || vl());
      };
  }, [
    t
  ]);
}
function U3() {
  let e, t = 0, n = (p) => {
    e = xy(p.target), !(e === document.documentElement && e === document.body) && (t = p.changedTouches[0].pageY);
  }, r = (p) => {
    if (!e || e === document.documentElement || e === document.body) {
      p.preventDefault();
      return;
    }
    let m = p.changedTouches[0].pageY, h = e.scrollTop, b = e.scrollHeight - e.clientHeight;
    b !== 0 && ((h <= 0 && m > t || h >= b && m < t) && p.preventDefault(), t = m);
  }, o = (p) => {
    let m = p.target;
    fc(m) && m !== document.activeElement && (p.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
      m.style.transform = "";
    }));
  }, a = (p) => {
    let m = p.target;
    fc(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      m.style.transform = "", hl && (hl.height < window.innerHeight ? requestAnimationFrame(() => {
        tm(m);
      }) : hl.addEventListener("resize", () => tm(m), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = Zp(K3(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Zp(Po(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Po(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), Po(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), Po(document, "focus", a, !0), Po(window, "scroll", i));
  return () => {
    c(), d(), window.scrollTo(s, l);
  };
}
function K3(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function Po(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function tm(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = xy(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom + F3;
      a > i && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function fc(e) {
  return e instanceof HTMLInputElement && !V3.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Y3(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function q3(...e) {
  return (t) => e.forEach((n) => Y3(n, t));
}
function Sy(...e) {
  return u.useCallback(q3(...e), e);
}
const Cy = /* @__PURE__ */ new WeakMap();
function ot(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && Cy.set(e, r);
}
function X3(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = Cy.get(e);
  n && (e.style[t] = n[t]);
}
const at = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function Ha(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[at(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[at(t) ? 5 : 4]) : null);
}
function J3(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function gl(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Z3(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const Xe = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, _y = 0.4, Q3 = 0.25, eV = 100, Ey = 8, er = 16, pc = 26, bl = "vaul-dragging";
function Py(e) {
  const t = P.useRef(e);
  return P.useEffect(() => {
    t.current = e;
  }), P.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function tV({ defaultProp: e, onChange: t }) {
  const n = P.useState(e), [r] = n, o = P.useRef(r), a = Py(t);
  return P.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Ry({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = tV({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : r, s = Py(n), l = P.useCallback((c) => {
    if (a) {
      const p = typeof c == "function" ? c(e) : c;
      p !== e && s(p);
    } else
      o(c);
  }, [
    a,
    e,
    o,
    s
  ]);
  return [
    i,
    l
  ];
}
function nV({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom", container: l, snapToSequentialPoint: c }) {
  const [d, p] = Ry({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [m, h] = P.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  P.useEffect(() => {
    function _() {
      h({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, []);
  const b = P.useMemo(() => d === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    d
  ]), v = P.useMemo(() => n == null ? void 0 : n.findIndex((_) => _ === d), [
    n,
    d
  ]), g = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === d || !n, y = P.useMemo(() => {
    const _ = l ? {
      width: l.getBoundingClientRect().width,
      height: l.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var O;
    return (O = n == null ? void 0 : n.map((N) => {
      const B = typeof N == "string";
      let M = 0;
      if (B && (M = parseInt(N, 10)), at(s)) {
        const V = B ? M : m ? N * _.height : 0;
        return m ? s === "bottom" ? _.height - V : -_.height + V : V;
      }
      const k = B ? M : m ? N * _.width : 0;
      return m ? s === "right" ? _.width - k : -_.width + k : k;
    })) != null ? O : [];
  }, [
    n,
    m,
    l
  ]), w = P.useMemo(() => v !== null ? y == null ? void 0 : y[v] : null, [
    y,
    v
  ]), x = P.useCallback((_) => {
    var O;
    const N = (O = y == null ? void 0 : y.findIndex((B) => B === _)) != null ? O : null;
    i(N), ot(r.current, {
      transition: `transform ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`,
      transform: at(s) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
    }), y && N !== y.length - 1 && N !== a && N < a ? ot(o.current, {
      transition: `opacity ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`,
      opacity: "0"
    }) : ot(o.current, {
      transition: `opacity ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`,
      opacity: "1"
    }), p(n == null ? void 0 : n[Math.max(N, 0)]);
  }, [
    r.current,
    n,
    y,
    a,
    o,
    p
  ]);
  P.useEffect(() => {
    if (d || e) {
      var _;
      const O = (_ = n == null ? void 0 : n.findIndex((N) => N === e || N === d)) != null ? _ : -1;
      y && O !== -1 && typeof y[O] == "number" && x(y[O]);
    }
  }, [
    d,
    e,
    n,
    y,
    x
  ]);
  function S({ draggedDistance: _, closeDrawer: O, velocity: N, dismissible: B }) {
    if (a === void 0) return;
    const M = s === "bottom" || s === "right" ? (w ?? 0) - _ : (w ?? 0) + _, k = v === a - 1, V = v === 0, $ = _ > 0;
    if (k && ot(o.current, {
      transition: `opacity ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`
    }), !c && N > 2 && !$) {
      B ? O() : x(y[0]);
      return;
    }
    if (!c && N > 2 && $ && y && n) {
      x(y[n.length - 1]);
      return;
    }
    const K = y == null ? void 0 : y.reduce((F, I) => typeof F != "number" || typeof I != "number" ? F : Math.abs(I - M) < Math.abs(F - M) ? I : F), G = at(s) ? window.innerHeight : window.innerWidth;
    if (N > _y && Math.abs(_) < G * 0.4) {
      const F = $ ? 1 : -1;
      if (F > 0 && b) {
        x(y[n.length - 1]);
        return;
      }
      if (V && F < 0 && B && O(), v === null) return;
      x(y[v + F]);
      return;
    }
    x(K);
  }
  function C({ draggedDistance: _ }) {
    if (w === null) return;
    const O = s === "bottom" || s === "right" ? w - _ : w + _;
    (s === "bottom" || s === "right") && O < y[y.length - 1] || (s === "top" || s === "left") && O > y[y.length - 1] || ot(r.current, {
      transform: at(s) ? `translate3d(0, ${O}px, 0)` : `translate3d(${O}px, 0, 0)`
    });
  }
  function E(_, O) {
    if (!n || typeof v != "number" || !y || a === void 0) return null;
    const N = v === a - 1;
    if (v >= a && O)
      return 0;
    if (N && !O) return 1;
    if (!g && !N) return null;
    const M = N ? v + 1 : v - 1, k = N ? y[M] - y[M - 1] : y[M + 1] - y[M], V = _ / Math.abs(k);
    return N ? 1 - V : V;
  }
  return {
    isLastSnapPoint: b,
    activeSnapPoint: d,
    shouldFade: g,
    getPercentageDragged: E,
    setActiveSnapPoint: p,
    activeSnapPointIndex: v,
    onRelease: S,
    onDrag: C,
    snapPointsOffset: y
  };
}
const rV = () => () => {
};
function oV() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = mo(), a = P.useRef(null), i = Fc(() => document.body.style.backgroundColor, []);
  function s() {
    return (window.innerWidth - pc) / window.innerWidth;
  }
  P.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      Z3(r && !o ? gl(document.body, {
        background: "black"
      }) : rV, gl(l, {
        transformOrigin: at(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Xe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Xe.EASE.join(",")})`
      }));
      const c = gl(l, {
        borderRadius: `${Ey}px`,
        overflow: "hidden",
        ...at(e) ? {
          transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        c(), a.current = window.setTimeout(() => {
          i ? document.body.style.background = i : document.body.style.removeProperty("background");
        }, Xe.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    i
  ]);
}
let Ro = null;
function aV({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [i, s] = P.useState(() => typeof window < "u" ? window.location.href : ""), l = P.useRef(0), c = P.useCallback(() => {
    if (Qp() && Ro === null && e && !a) {
      Ro = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const h = m - window.innerHeight;
        h && l.current >= m && (document.body.style.top = `${-(l.current + h)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = P.useCallback(() => {
    if (Qp() && Ro !== null && !a) {
      const p = -parseInt(document.body.style.top, 10), m = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ro), window.requestAnimationFrame(() => {
        if (o && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(m, p);
      }), Ro = null;
    }
  }, [
    i
  ]);
  return P.useEffect(() => {
    function p() {
      l.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), P.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    i,
    t,
    n,
    c,
    d
  ]), {
    restorePositionSetting: d
  };
}
function Ny({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: i = !1, setBackgroundColorOnScale: s = !0, closeThreshold: l = Q3, scrollLockTimeout: c = eV, dismissible: d = !0, handleOnly: p = !1, fadeFromIndex: m = a && a.length - 1, activeSnapPoint: h, setActiveSnapPoint: b, fixed: v, modal: g = !0, onClose: y, nested: w, noBodyStyles: x, direction: S = "bottom", defaultOpen: C = !1, disablePreventScroll: E = !0, snapToSequentialPoint: _ = !1, preventScrollRestoration: O = !1, repositionInputs: N = !0, onAnimationEnd: B, container: M, autoFocus: k = !1 }) {
  var V, $;
  const [K = !1, G] = Ry({
    defaultProp: C,
    prop: e,
    onChange: (de) => {
      t == null || t(de), !de && !w && Ie(), setTimeout(() => {
        B == null || B(de);
      }, Xe.DURATION * 1e3), de && !g && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), de || (document.body.style.pointerEvents = "auto");
    }
  }), [F, I] = P.useState(!1), [L, ne] = P.useState(!1), [re, j] = P.useState(!1), D = P.useRef(null), H = P.useRef(null), U = P.useRef(null), X = P.useRef(null), A = P.useRef(null), Y = P.useRef(!1), Q = P.useRef(null), te = P.useRef(0), oe = P.useRef(!1), J = P.useRef(0), q = P.useRef(null), z = P.useRef(((V = q.current) == null ? void 0 : V.getBoundingClientRect().height) || 0), ae = P.useRef((($ = q.current) == null ? void 0 : $.getBoundingClientRect().width) || 0), ce = P.useRef(0), ve = P.useCallback((de) => {
    a && de === Ne.length - 1 && (H.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: pe, activeSnapPointIndex: ue, setActiveSnapPoint: Re, onRelease: Be, snapPointsOffset: Ne, onDrag: We, shouldFade: rt, getPercentageDragged: st } = nV({
    snapPoints: a,
    activeSnapPointProp: h,
    setActiveSnapPointProp: b,
    drawerRef: q,
    fadeFromIndex: m,
    overlayRef: D,
    onSnapPointChange: ve,
    direction: S,
    container: M,
    snapToSequentialPoint: _
  });
  G3({
    isDisabled: !K || L || !g || re || !F || !N || !E
  });
  const { restorePositionSetting: Ie } = aV({
    isOpen: K,
    modal: g,
    nested: w,
    hasBeenOpened: F,
    preventScrollRestoration: O,
    noBodyStyles: x
  });
  function $e() {
    return (window.innerWidth - pc) / window.innerWidth;
  }
  function an(de) {
    var we, Ee;
    !d && !a || q.current && !q.current.contains(de.target) || (z.current = ((we = q.current) == null ? void 0 : we.getBoundingClientRect().height) || 0, ae.current = ((Ee = q.current) == null ? void 0 : Ee.getBoundingClientRect().width) || 0, ne(!0), U.current = /* @__PURE__ */ new Date(), wy() && window.addEventListener("touchend", () => Y.current = !1, {
      once: !0
    }), de.target.setPointerCapture(de.pointerId), te.current = at(S) ? de.pageY : de.pageX);
  }
  function wt(de, we) {
    var Ee, xe;
    let ye = de;
    const je = (Ee = window.getSelection()) == null ? void 0 : Ee.toString(), Ze = q.current ? Ha(q.current, S) : null, le = /* @__PURE__ */ new Date();
    if (ye.hasAttribute("data-vaul-no-drag") || ye.closest("[data-vaul-no-drag]"))
      return !1;
    if (S === "right" || S === "left")
      return !0;
    if (H.current && le.getTime() - H.current.getTime() < 500)
      return !1;
    if (Ze !== null && (S === "bottom" ? Ze > 0 : Ze < 0))
      return !0;
    if (je && je.length > 0)
      return !1;
    if (le.getTime() - ((xe = A.current) == null ? void 0 : xe.getTime()) < c && Ze === 0 || we)
      return A.current = le, !1;
    for (; ye; ) {
      if (ye.scrollHeight > ye.clientHeight) {
        if (ye.scrollTop !== 0)
          return A.current = /* @__PURE__ */ new Date(), !1;
        if (ye.getAttribute("role") === "dialog")
          return !0;
      }
      ye = ye.parentNode;
    }
    return !0;
  }
  function lt(de) {
    if (q.current && L) {
      const we = S === "bottom" || S === "right" ? 1 : -1, Ee = (te.current - (at(S) ? de.pageY : de.pageX)) * we, xe = Ee > 0, ye = a && !d && !xe;
      if (ye && ue === 0) return;
      const je = Math.abs(Ee), Ze = document.querySelector("[data-vaul-drawer-wrapper]"), le = S === "bottom" || S === "top" ? z.current : ae.current;
      let me = je / le;
      const Se = st(je, xe);
      if (Se !== null && (me = Se), ye && me >= 1 || !Y.current && !wt(de.target, xe)) return;
      if (q.current.classList.add(bl), Y.current = !0, ot(q.current, {
        transition: "none"
      }), ot(D.current, {
        transition: "none"
      }), a && We({
        draggedDistance: Ee
      }), xe && !a) {
        const Ve = J3(Ee), vt = Math.min(Ve * -1, 0) * we;
        ot(q.current, {
          transform: at(S) ? `translate3d(0, ${vt}px, 0)` : `translate3d(${vt}px, 0, 0)`
        });
        return;
      }
      const qe = 1 - me;
      if ((rt || m && ue === m - 1) && (r == null || r(de, me), ot(D.current, {
        opacity: `${qe}`,
        transition: "none"
      }, !0)), Ze && D.current && i) {
        const Ve = Math.min($e() + me * (1 - $e()), 1), vt = 8 - me * 8, $t = Math.max(0, 14 - me * 14);
        ot(Ze, {
          borderRadius: `${vt}px`,
          transform: at(S) ? `scale(${Ve}) translate3d(0, ${$t}px, 0)` : `scale(${Ve}) translate3d(${$t}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Ve = je * we;
        ot(q.current, {
          transform: at(S) ? `translate3d(0, ${Ve}px, 0)` : `translate3d(${Ve}px, 0, 0)`
        });
      }
    }
  }
  P.useEffect(() => {
    var de;
    function we() {
      if (!q.current || !N) return;
      const Ee = document.activeElement;
      if (fc(Ee) || oe.current) {
        var xe;
        const ye = ((xe = window.visualViewport) == null ? void 0 : xe.height) || 0, je = window.innerHeight;
        let Ze = je - ye;
        const le = q.current.getBoundingClientRect().height || 0, me = le > je * 0.8;
        ce.current || (ce.current = le);
        const Se = q.current.getBoundingClientRect().top;
        if (Math.abs(J.current - Ze) > 60 && (oe.current = !oe.current), a && a.length > 0 && Ne && ue) {
          const qe = Ne[ue] || 0;
          Ze += qe;
        }
        if (J.current = Ze, le > ye || oe.current) {
          const qe = q.current.getBoundingClientRect().height;
          let Ve = qe;
          qe > ye && (Ve = ye - (me ? Se : pc)), v ? q.current.style.height = `${qe - Math.max(Ze, 0)}px` : q.current.style.height = `${Math.max(Ve, ye - Se)}px`;
        } else
          q.current.style.height = `${ce.current}px`;
        a && a.length > 0 && !oe.current ? q.current.style.bottom = "0px" : q.current.style.bottom = `${Math.max(Ze, 0)}px`;
      }
    }
    return (de = window.visualViewport) == null || de.addEventListener("resize", we), () => {
      var Ee;
      return (Ee = window.visualViewport) == null ? void 0 : Ee.removeEventListener("resize", we);
    };
  }, [
    ue,
    a,
    Ne
  ]);
  function ct(de) {
    tt(), y == null || y(), de || G(!1), setTimeout(() => {
      a && Re(a[0]);
    }, Xe.DURATION * 1e3);
  }
  function Tt() {
    if (!q.current) return;
    const de = document.querySelector("[data-vaul-drawer-wrapper]"), we = Ha(q.current, S);
    ot(q.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`
    }), ot(D.current, {
      transition: `opacity ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`,
      opacity: "1"
    }), i && we && we > 0 && K && ot(de, {
      borderRadius: `${Ey}px`,
      overflow: "hidden",
      ...at(S) ? {
        transform: `scale(${$e()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${$e()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Xe.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Xe.EASE.join(",")})`
    }, !0);
  }
  function tt() {
    !L || !q.current || (q.current.classList.remove(bl), Y.current = !1, ne(!1), X.current = /* @__PURE__ */ new Date());
  }
  function ut(de) {
    if (!L || !q.current) return;
    q.current.classList.remove(bl), Y.current = !1, ne(!1), X.current = /* @__PURE__ */ new Date();
    const we = Ha(q.current, S);
    if (!wt(de.target, !1) || !we || Number.isNaN(we) || U.current === null) return;
    const Ee = X.current.getTime() - U.current.getTime(), xe = te.current - (at(S) ? de.pageY : de.pageX), ye = Math.abs(xe) / Ee;
    if (ye > 0.05 && (j(!0), setTimeout(() => {
      j(!1);
    }, 200)), a) {
      Be({
        draggedDistance: xe * (S === "bottom" || S === "right" ? 1 : -1),
        closeDrawer: ct,
        velocity: ye,
        dismissible: d
      }), o == null || o(de, !0);
      return;
    }
    if (S === "bottom" || S === "right" ? xe > 0 : xe < 0) {
      Tt(), o == null || o(de, !0);
      return;
    }
    if (ye > _y) {
      ct(), o == null || o(de, !1);
      return;
    }
    var je;
    const Ze = Math.min((je = q.current.getBoundingClientRect().height) != null ? je : 0, window.innerHeight);
    var le;
    const me = Math.min((le = q.current.getBoundingClientRect().width) != null ? le : 0, window.innerWidth), Se = S === "left" || S === "right";
    if (Math.abs(we) >= (Se ? me : Ze) * l) {
      ct(), o == null || o(de, !1);
      return;
    }
    o == null || o(de, !0), Tt();
  }
  P.useEffect(() => (K && (ot(document.documentElement, {
    scrollBehavior: "auto"
  }), H.current = /* @__PURE__ */ new Date()), () => {
    X3(document.documentElement, "scrollBehavior");
  }), [
    K
  ]);
  function sn(de) {
    const we = de ? (window.innerWidth - er) / window.innerWidth : 1, Ee = de ? -er : 0;
    Q.current && window.clearTimeout(Q.current), ot(q.current, {
      transition: `transform ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`,
      transform: `scale(${we}) translate3d(0, ${Ee}px, 0)`
    }), !de && q.current && (Q.current = setTimeout(() => {
      const xe = Ha(q.current, S);
      ot(q.current, {
        transition: "none",
        transform: at(S) ? `translate3d(0, ${xe}px, 0)` : `translate3d(${xe}px, 0, 0)`
      });
    }, 500));
  }
  function It(de, we) {
    if (we < 0) return;
    const Ee = (window.innerWidth - er) / window.innerWidth, xe = Ee + we * (1 - Ee), ye = -er + we * er;
    ot(q.current, {
      transform: at(S) ? `scale(${xe}) translate3d(0, ${ye}px, 0)` : `scale(${xe}) translate3d(${ye}px, 0, 0)`,
      transition: "none"
    });
  }
  function Zn(de, we) {
    const Ee = at(S) ? window.innerHeight : window.innerWidth, xe = we ? (Ee - er) / Ee : 1, ye = we ? -er : 0;
    we && ot(q.current, {
      transition: `transform ${Xe.DURATION}s cubic-bezier(${Xe.EASE.join(",")})`,
      transform: at(S) ? `scale(${xe}) translate3d(0, ${ye}px, 0)` : `scale(${xe}) translate3d(${ye}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ P.createElement(oa, {
    defaultOpen: C,
    onOpenChange: (de) => {
      !d && !de || (de ? I(!0) : ct(!0), G(de));
    },
    open: K
  }, /* @__PURE__ */ P.createElement(yy.Provider, {
    value: {
      activeSnapPoint: pe,
      snapPoints: a,
      setActiveSnapPoint: Re,
      drawerRef: q,
      overlayRef: D,
      onOpenChange: t,
      onPress: an,
      onRelease: ut,
      onDrag: lt,
      dismissible: d,
      handleOnly: p,
      isOpen: K,
      isDragging: L,
      shouldFade: rt,
      closeDrawer: ct,
      onNestedDrag: It,
      onNestedOpenChange: sn,
      onNestedRelease: Zn,
      keyboardIsOpen: oe,
      modal: g,
      snapPointsOffset: Ne,
      direction: S,
      shouldScaleBackground: i,
      setBackgroundColorOnScale: s,
      noBodyStyles: x,
      container: M,
      autoFocus: k
    }
  }, n));
}
const Ty = /* @__PURE__ */ P.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: i, modal: s } = mo(), l = Sy(t, n), c = r && r.length > 0;
  return s ? /* @__PURE__ */ P.createElement(gr, {
    onMouseUp: o,
    ref: l,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": i && c ? "true" : "false",
    "data-vaul-snap-points-overlay": i && a ? "true" : "false",
    ...e
  }) : (typeof window < "u" && window.requestAnimationFrame(() => {
    document.body.style.pointerEvents = "auto";
  }), null);
});
Ty.displayName = "Drawer.Overlay";
const My = /* @__PURE__ */ P.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: i, onRelease: s, onDrag: l, keyboardIsOpen: c, snapPointsOffset: d, modal: p, isOpen: m, direction: h, snapPoints: b, container: v, handleOnly: g, autoFocus: y } = mo(), [w, x] = P.useState(!1), S = Sy(o, a), C = P.useRef(null), E = P.useRef(null), _ = P.useRef(!1), O = b && b.length > 0;
  oV();
  const N = (M, k, V = 0) => {
    if (_.current) return !0;
    const $ = Math.abs(M.y), K = Math.abs(M.x), G = K > $, F = [
      "bottom",
      "right"
    ].includes(k) ? 1 : -1;
    if (k === "left" || k === "right") {
      if (!(M.x * F < 0) && K >= 0 && K <= V)
        return G;
    } else if (!(M.y * F < 0) && $ >= 0 && $ <= V)
      return !G;
    return _.current = !0, !0;
  };
  P.useEffect(() => {
    O && window.requestAnimationFrame(() => {
      x(!0);
    });
  }, []);
  function B(M) {
    C.current = null, _.current = !1, s(M);
  }
  return /* @__PURE__ */ P.createElement(br, {
    "data-vaul-drawer-direction": h,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": w ? "true" : "false",
    "data-vaul-snap-points": m && O ? "true" : "false",
    "data-vaul-custom-container": v ? "true" : "false",
    ...r,
    ref: S,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[0]}px`,
      ...t
    } : t,
    onPointerDown: (M) => {
      g || (r.onPointerDown == null || r.onPointerDown.call(r, M), C.current = {
        x: M.pageX,
        y: M.pageY
      }, i(M));
    },
    onOpenAutoFocus: (M) => {
      n == null || n(M), y || M.preventDefault();
    },
    onPointerDownOutside: (M) => {
      if (e == null || e(M), !p || M.defaultPrevented) {
        M.preventDefault();
        return;
      }
      c.current && (c.current = !1);
    },
    onFocusOutside: (M) => {
      if (!p) {
        M.preventDefault();
        return;
      }
    },
    onPointerMove: (M) => {
      if (E.current = M, g || (r.onPointerMove == null || r.onPointerMove.call(r, M), !C.current)) return;
      const k = M.pageY - C.current.y, V = M.pageX - C.current.x, $ = M.pointerType === "touch" ? 10 : 2;
      N({
        x: V,
        y: k
      }, h, $) ? l(M) : (Math.abs(V) > $ || Math.abs(k) > $) && (C.current = null);
    },
    onPointerUp: (M) => {
      r.onPointerUp == null || r.onPointerUp.call(r, M), C.current = null, _.current = !1, s(M);
    },
    onPointerOut: (M) => {
      r.onPointerOut == null || r.onPointerOut.call(r, M), B(E.current);
    },
    onContextMenu: (M) => {
      r.onContextMenu == null || r.onContextMenu.call(r, M), B(E.current);
    }
  });
});
My.displayName = "Drawer.Content";
const iV = 250, sV = 120, Oy = /* @__PURE__ */ P.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: i, activeSnapPoint: s, setActiveSnapPoint: l, dismissible: c, handleOnly: d, isOpen: p, onPress: m, onDrag: h } = mo(), b = P.useRef(null), v = P.useRef(!1);
  function g() {
    if (v.current) {
      x();
      return;
    }
    window.setTimeout(() => {
      y();
    }, sV);
  }
  function y() {
    if (a || e || v.current) {
      x();
      return;
    }
    if (x(), (!i || i.length === 0) && c) {
      o();
      return;
    }
    if (s === i[i.length - 1] && c) {
      o();
      return;
    }
    const C = i.findIndex((_) => _ === s);
    if (C === -1) return;
    const E = i[C + 1];
    l(E);
  }
  function w() {
    b.current = window.setTimeout(() => {
      v.current = !0;
    }, iV);
  }
  function x() {
    window.clearTimeout(b.current), v.current = !1;
  }
  return /* @__PURE__ */ P.createElement("div", {
    onClick: g,
    onPointerCancel: x,
    onPointerDown: (S) => {
      d && m(S), w();
    },
    onPointerMove: (S) => {
      d && h(S);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": p ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ P.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Oy.displayName = "Drawer.Handle";
function lV({ onDrag: e, onOpenChange: t, ...n }) {
  const { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = mo();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ P.createElement(Ny, {
    nested: !0,
    onClose: () => {
      o(!1);
    },
    onDrag: (i, s) => {
      r(i, s), e == null || e(i, s);
    },
    onOpenChange: (i) => {
      i && o(i);
    },
    onRelease: a,
    ...n
  });
}
function cV(e) {
  const t = mo(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ P.createElement(aa, {
    container: n,
    ...r
  });
}
const on = {
  Root: Ny,
  NestedRoot: lV,
  Content: My,
  Overlay: Ty,
  Trigger: Gi,
  Portal: cV,
  Handle: Oy,
  Close: yr,
  Title: to,
  Description: no
}, uV = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ f.jsx(on.Root, { shouldScaleBackground: e, ...t });
uV.displayName = "Drawer";
const C7 = on.Trigger, dV = on.Portal, _7 = on.Close, Ay = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(on.Overlay, { ref: n, className: T("fixed inset-0 z-50 bg-black/80", e), ...t }));
Ay.displayName = on.Overlay.displayName;
const fV = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(dV, { children: [
  /* @__PURE__ */ f.jsx(Ay, {}),
  /* @__PURE__ */ f.jsxs(
    on.Content,
    {
      ref: r,
      className: T(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
fV.displayName = "DrawerContent";
const pV = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("grid gap-1.5 p-4 text-center sm:text-left", e), ...t });
pV.displayName = "DrawerHeader";
const mV = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("mt-auto flex flex-col gap-2 p-4", e), ...t });
mV.displayName = "DrawerFooter";
const hV = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  on.Title,
  {
    ref: n,
    className: T("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
hV.displayName = on.Title.displayName;
const vV = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(on.Description, { ref: n, className: T("text-sm text-muted-foreground", e), ...t }));
vV.displayName = on.Description.displayName;
var ds = "DropdownMenu", [gV, E7] = Fe(
  ds,
  [Sa]
), mt = Sa(), [bV, Dy] = gV(ds), Iy = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: i,
    modal: s = !0
  } = e, l = mt(t), c = u.useRef(null), [d, p] = ze({
    prop: o,
    defaultProp: a ?? !1,
    onChange: i,
    caller: ds
  });
  return /* @__PURE__ */ f.jsx(
    bV,
    {
      scope: t,
      triggerId: Le(),
      triggerRef: c,
      contentId: Le(),
      open: d,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ f.jsx(td, { ...l, open: d, onOpenChange: p, dir: r, modal: s, children: n })
    }
  );
};
Iy.displayName = ds;
var $y = "DropdownMenuTrigger", jy = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Dy($y, n), i = mt(n);
    return /* @__PURE__ */ f.jsx(nd, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: fn(t, a.triggerRef),
        onPointerDown: W(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: W(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
jy.displayName = $y;
var yV = "DropdownMenuPortal", ky = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = mt(t);
  return /* @__PURE__ */ f.jsx(rd, { ...r, ...n });
};
ky.displayName = yV;
var Ly = "DropdownMenuContent", Fy = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Dy(Ly, n), a = mt(n), i = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      od,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: W(e.onCloseAutoFocus, (s) => {
          var l;
          i.current || (l = o.triggerRef.current) == null || l.focus(), i.current = !1, s.preventDefault();
        }),
        onInteractOutside: W(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, d = l.button === 2 || c;
          (!o.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Fy.displayName = Ly;
var wV = "DropdownMenuGroup", By = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f.jsx(ad, { ...o, ...r, ref: t });
  }
);
By.displayName = wV;
var xV = "DropdownMenuLabel", zy = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f.jsx(id, { ...o, ...r, ref: t });
  }
);
zy.displayName = xV;
var SV = "DropdownMenuItem", Hy = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f.jsx(sd, { ...o, ...r, ref: t });
  }
);
Hy.displayName = SV;
var CV = "DropdownMenuCheckboxItem", Wy = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(ld, { ...o, ...r, ref: t });
});
Wy.displayName = CV;
var _V = "DropdownMenuRadioGroup", Vy = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(cd, { ...o, ...r, ref: t });
});
Vy.displayName = _V;
var EV = "DropdownMenuRadioItem", Gy = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(ud, { ...o, ...r, ref: t });
});
Gy.displayName = EV;
var PV = "DropdownMenuItemIndicator", Uy = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(dd, { ...o, ...r, ref: t });
});
Uy.displayName = PV;
var RV = "DropdownMenuSeparator", Ky = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(fd, { ...o, ...r, ref: t });
});
Ky.displayName = RV;
var NV = "DropdownMenuArrow", TV = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ f.jsx(pd, { ...o, ...r, ref: t });
  }
);
TV.displayName = NV;
var MV = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = mt(t), [s, l] = ze({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ f.jsx(md, { ...i, open: s, onOpenChange: l, children: n });
}, OV = "DropdownMenuSubTrigger", Yy = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(hd, { ...o, ...r, ref: t });
});
Yy.displayName = OV;
var AV = "DropdownMenuSubContent", qy = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ f.jsx(
    vd,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
qy.displayName = AV;
var DV = Iy, IV = jy, Xy = ky, Jy = Fy, $V = By, Zy = zy, Qy = Hy, ew = Wy, jV = Vy, tw = Gy, nw = Uy, rw = Ky, kV = MV, ow = Yy, aw = qy;
const P7 = DV, R7 = IV, N7 = $V, T7 = Xy, M7 = kV, O7 = jV, LV = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  ow,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.jsx(Zr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
LV.displayName = ow.displayName;
const FV = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  aw,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
FV.displayName = aw.displayName;
const BV = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.jsx(Xy, { children: /* @__PURE__ */ f.jsx(
  Jy,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
BV.displayName = Jy.displayName;
const zV = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  Qy,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
zV.displayName = Qy.displayName;
const HV = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  ew,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(nw, { children: /* @__PURE__ */ f.jsx(ta, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
HV.displayName = ew.displayName;
const WV = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  tw,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(nw, { children: /* @__PURE__ */ f.jsx(Bi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
WV.displayName = tw.displayName;
const VV = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  Zy,
  {
    ref: r,
    className: T("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
  }
));
VV.displayName = Zy.displayName;
const GV = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(rw, { ref: n, className: T("-mx-1 my-1 h-px bg-muted", e), ...t }));
GV.displayName = rw.displayName;
const UV = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("span", { className: T("ml-auto text-xs tracking-widest opacity-60", e), ...t });
UV.displayName = "DropdownMenuShortcut";
var KV = (e) => e.type === "checkbox", Oo = (e) => e instanceof Date, yd = (e) => e == null;
const iw = (e) => typeof e == "object";
var fr = (e) => !yd(e) && !Array.isArray(e) && iw(e) && !Oo(e), YV = (e) => fr(e) && e.target ? KV(e.target) ? e.target.checked : e.target.value : e, qV = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, XV = (e, t) => e.has(qV(t)), JV = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return fr(t) && t.hasOwnProperty("isPrototypeOf");
}, ZV = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function sw(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(ZV && (e instanceof Blob || r)) && (n || fr(e)))
    if (t = n ? [] : {}, !n && !JV(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = sw(e[o]));
  else
    return e;
  return t;
}
var lw = (e) => /^\w*$/.test(e), mc = (e) => e === void 0, QV = (e) => Array.isArray(e) ? e.filter(Boolean) : [], cw = (e) => QV(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ct = (e, t, n) => {
  if (!t || !fr(e))
    return n;
  const r = (lw(t) ? [t] : cw(t)).reduce((o, a) => yd(o) ? o : o[a], e);
  return mc(r) || r === e ? mc(e[t]) ? n : e[t] : r;
}, yl = (e) => typeof e == "boolean", nm = (e, t, n) => {
  let r = -1;
  const o = lw(t) ? [t] : cw(t), a = o.length, i = a - 1;
  for (; ++r < a; ) {
    const s = o[r];
    let l = n;
    if (r !== i) {
      const c = e[s];
      l = fr(c) || Array.isArray(c) ? c : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
};
const rm = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, om = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, wd = P.createContext(null);
wd.displayName = "HookFormContext";
const fs = () => P.useContext(wd), eG = (e) => {
  const { children: t, ...n } = e;
  return P.createElement(wd.Provider, { value: n }, t);
};
var tG = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== om.all && (t._proxyFormState[i] = !r || om.all), n && (n[i] = !0), e[i];
      }
    });
  return o;
};
const uw = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function nG(e) {
  const t = fs(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [i, s] = P.useState(n._formState), l = P.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return uw(() => n._subscribe({
    name: o,
    formState: l.current,
    exact: a,
    callback: (c) => {
      !r && s({
        ...n._formState,
        ...c
      });
    }
  }), [o, r, a]), P.useEffect(() => {
    l.current.isValid && n._setValid(!0);
  }, [n]), P.useMemo(() => tG(i, n, l.current, !1), [i, n]);
}
var rG = (e) => typeof e == "string", oG = (e, t, n, r, o) => rG(e) ? Ct(n, e, o) : Array.isArray(e) ? e.map((a) => Ct(n, a)) : n, am = (e) => yd(e) || !iw(e);
function dw(e, t, n = /* @__PURE__ */ new WeakSet()) {
  if (am(e) || am(t))
    return e === t;
  if (Oo(e) && Oo(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), o = Object.keys(t);
  if (r.length !== o.length)
    return !1;
  if (n.has(e) || n.has(t))
    return !0;
  n.add(e), n.add(t);
  for (const a of r) {
    const i = e[a];
    if (!o.includes(a))
      return !1;
    if (a !== "ref") {
      const s = t[a];
      if (Oo(i) && Oo(s) || fr(i) && fr(s) || Array.isArray(i) && Array.isArray(s) ? !dw(i, s, n) : i !== s)
        return !1;
    }
  }
  return !0;
}
function aG(e) {
  const t = fs(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: i, compute: s } = e || {}, l = P.useRef(o), c = P.useRef(s), d = P.useRef(void 0);
  c.current = s;
  const p = P.useMemo(() => n._getWatch(r, l.current), [n, r]), [m, h] = P.useState(c.current ? c.current(p) : p);
  return uw(() => n._subscribe({
    name: r,
    formState: {
      values: !0
    },
    exact: i,
    callback: (b) => {
      if (!a) {
        const v = oG(r, n._names, b.values || n._formValues, !1, l.current);
        if (c.current) {
          const g = c.current(v);
          dw(g, d.current) || (h(g), d.current = g);
        } else
          h(v);
      }
    }
  }), [n, a, r, i]), P.useEffect(() => n._removeUnmounted()), m;
}
function iG(e) {
  const t = fs(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a, defaultValue: i } = e, s = XV(o._names.array, n), l = P.useMemo(() => Ct(o._formValues, n, Ct(o._defaultValues, n, i)), [o, n, i]), c = aG({
    control: o,
    name: n,
    defaultValue: l,
    exact: !0
  }), d = nG({
    control: o,
    name: n,
    exact: !0
  }), p = P.useRef(e), m = P.useRef(o.register(n, {
    ...e.rules,
    value: c,
    ...yl(e.disabled) ? { disabled: e.disabled } : {}
  }));
  p.current = e;
  const h = P.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!Ct(d.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!Ct(d.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!Ct(d.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!Ct(d.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => Ct(d.errors, n)
    }
  }), [d, n]), b = P.useCallback((w) => m.current.onChange({
    target: {
      value: YV(w),
      name: n
    },
    type: rm.CHANGE
  }), [n]), v = P.useCallback(() => m.current.onBlur({
    target: {
      value: Ct(o._formValues, n),
      name: n
    },
    type: rm.BLUR
  }), [n, o._formValues]), g = P.useCallback((w) => {
    const x = Ct(o._fields, n);
    x && w && (x._f.ref = {
      focus: () => w.focus && w.focus(),
      select: () => w.select && w.select(),
      setCustomValidity: (S) => w.setCustomValidity(S),
      reportValidity: () => w.reportValidity()
    });
  }, [o._fields, n]), y = P.useMemo(() => ({
    name: n,
    value: c,
    ...yl(r) || d.disabled ? { disabled: d.disabled || r } : {},
    onChange: b,
    onBlur: v,
    ref: g
  }), [n, r, d.disabled, b, v, g, c]);
  return P.useEffect(() => {
    const w = o._options.shouldUnregister || a;
    o.register(n, {
      ...p.current.rules,
      ...yl(p.current.disabled) ? { disabled: p.current.disabled } : {}
    });
    const x = (S, C) => {
      const E = Ct(o._fields, S);
      E && E._f && (E._f.mount = C);
    };
    if (x(n, !0), w) {
      const S = sw(Ct(o._options.defaultValues, n));
      nm(o._defaultValues, n, S), mc(Ct(o._formValues, n)) && nm(o._formValues, n, S);
    }
    return !s && o.register(n), () => {
      (s ? w && !o._state.action : w) ? o.unregister(n) : x(n, !1);
    };
  }, [n, o, s, a]), P.useEffect(() => {
    o._setDisabledField({
      disabled: r,
      name: n
    });
  }, [r, n, o]), P.useMemo(() => ({
    field: y,
    formState: d,
    fieldState: h
  }), [y, d, h]);
}
const sG = (e) => e.render(iG(e));
var lG = "Label", fw = u.forwardRef((e, t) => /* @__PURE__ */ f.jsx(
  Z.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
fw.displayName = lG;
var pw = fw;
const cG = Dn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), mw = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(pw, { ref: n, className: T(cG(), e), ...t }));
mw.displayName = pw.displayName;
const A7 = eG, hw = u.createContext({}), D7 = ({
  ...e
}) => /* @__PURE__ */ f.jsx(hw.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.jsx(sG, { ...e }) }), ps = () => {
  const e = u.useContext(hw), t = u.useContext(vw), { getFieldState: n, formState: r } = fs(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, vw = u.createContext({}), uG = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = u.useId();
    return /* @__PURE__ */ f.jsx(vw.Provider, { value: { id: r }, children: /* @__PURE__ */ f.jsx("div", { ref: n, className: T("space-y-2", e), ...t }) });
  }
);
uG.displayName = "FormItem";
const dG = u.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ps();
  return /* @__PURE__ */ f.jsx(mw, { ref: n, className: T(r && "text-destructive", e), htmlFor: o, ...t });
});
dG.displayName = "FormLabel";
const fG = u.forwardRef(
  ({ ...e }, t) => {
    const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = ps();
    return /* @__PURE__ */ f.jsx(
      Gn,
      {
        ref: t,
        id: r,
        "aria-describedby": n ? `${o} ${a}` : `${o}`,
        "aria-invalid": !!n,
        ...e
      }
    );
  }
);
fG.displayName = "FormControl";
const pG = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { formDescriptionId: r } = ps();
    return /* @__PURE__ */ f.jsx("p", { ref: n, id: r, className: T("text-sm text-muted-foreground", e), ...t });
  }
);
pG.displayName = "FormDescription";
const mG = u.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const { error: o, formMessageId: a } = ps(), i = o ? String(o == null ? void 0 : o.message) : t;
    return i ? /* @__PURE__ */ f.jsx("p", { ref: r, id: a, className: T("text-sm font-medium text-destructive", e), ...n, children: i }) : null;
  }
);
mG.displayName = "FormMessage";
var wl, ms = "HoverCard", [gw, I7] = Fe(ms, [
  bn
]), hs = bn(), [hG, xd] = gw(ms), bw = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: i = 700,
    closeDelay: s = 300
  } = e, l = hs(t), c = u.useRef(0), d = u.useRef(0), p = u.useRef(!1), m = u.useRef(!1), [h, b] = ze({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ms
  }), v = u.useCallback(() => {
    clearTimeout(d.current), c.current = window.setTimeout(() => b(!0), i);
  }, [i, b]), g = u.useCallback(() => {
    clearTimeout(c.current), !p.current && !m.current && (d.current = window.setTimeout(() => b(!1), s));
  }, [s, b]), y = u.useCallback(() => b(!1), [b]);
  return u.useEffect(() => () => {
    clearTimeout(c.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ f.jsx(
    hG,
    {
      scope: t,
      open: h,
      onOpenChange: b,
      onOpen: v,
      onClose: g,
      onDismiss: y,
      hasSelectionRef: p,
      isPointerDownOnContentRef: m,
      children: /* @__PURE__ */ f.jsx(fo, { ...l, children: n })
    }
  );
};
bw.displayName = ms;
var yw = "HoverCardTrigger", ww = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = xd(yw, n), a = hs(n);
    return /* @__PURE__ */ f.jsx(po, { asChild: !0, ...a, children: /* @__PURE__ */ f.jsx(
      Z.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: W(e.onPointerEnter, _i(o.onOpen)),
        onPointerLeave: W(e.onPointerLeave, _i(o.onClose)),
        onFocus: W(e.onFocus, o.onOpen),
        onBlur: W(e.onBlur, o.onClose),
        onTouchStart: W(e.onTouchStart, (i) => i.preventDefault())
      }
    ) });
  }
);
ww.displayName = yw;
var vG = "HoverCardPortal", [$7, gG] = gw(vG, {
  forceMount: void 0
}), Ci = "HoverCardContent", xw = u.forwardRef(
  (e, t) => {
    const n = gG(Ci, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = xd(Ci, e.__scopeHoverCard);
    return /* @__PURE__ */ f.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ f.jsx(
      bG,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: W(e.onPointerEnter, _i(a.onOpen)),
        onPointerLeave: W(e.onPointerLeave, _i(a.onClose)),
        ref: t
      }
    ) });
  }
);
xw.displayName = Ci;
var bG = u.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: i,
    ...s
  } = e, l = xd(Ci, n), c = hs(n), d = u.useRef(null), p = se(t, d), [m, h] = u.useState(!1);
  return u.useEffect(() => {
    if (m) {
      const b = document.body;
      return wl = b.style.userSelect || b.style.webkitUserSelect, b.style.userSelect = "none", b.style.webkitUserSelect = "none", () => {
        b.style.userSelect = wl, b.style.webkitUserSelect = wl;
      };
    }
  }, [m]), u.useEffect(() => {
    if (d.current) {
      const b = () => {
        h(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var g;
          ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", b), () => {
        document.removeEventListener("pointerup", b), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), u.useEffect(() => {
    d.current && xG(d.current).forEach((v) => v.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ f.jsx(
    On,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: i,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: W(a, (b) => {
        b.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ f.jsx(
        va,
        {
          ...c,
          ...s,
          onPointerDown: W(s.onPointerDown, (b) => {
            b.currentTarget.contains(b.target) && h(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: p,
          style: {
            ...s.style,
            userSelect: m ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: m ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), yG = "HoverCardArrow", wG = u.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = hs(n);
    return /* @__PURE__ */ f.jsx(ga, { ...o, ...r, ref: t });
  }
);
wG.displayName = yG;
function _i(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function xG(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var SG = bw, CG = ww, Sw = xw;
const j7 = SG, k7 = CG, _G = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.jsx(
  Sw,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
_G.displayName = Sw.displayName;
var EG = Object.defineProperty, PG = Object.defineProperties, RG = Object.getOwnPropertyDescriptors, Ei = Object.getOwnPropertySymbols, Cw = Object.prototype.hasOwnProperty, _w = Object.prototype.propertyIsEnumerable, im = (e, t, n) => t in e ? EG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, NG = (e, t) => {
  for (var n in t || (t = {})) Cw.call(t, n) && im(e, n, t[n]);
  if (Ei) for (var n of Ei(t)) _w.call(t, n) && im(e, n, t[n]);
  return e;
}, TG = (e, t) => PG(e, RG(t)), MG = (e, t) => {
  var n = {};
  for (var r in e) Cw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ei) for (var r of Ei(e)) t.indexOf(r) < 0 && _w.call(e, r) && (n[r] = e[r]);
  return n;
};
function OG(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function AG(e) {
  let t = u.useRef();
  return u.useEffect(() => {
    t.current = e;
  }), t.current;
}
var DG = 18, Ew = 40, IG = `${Ew}px`, $G = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function jG({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = u.useState(!1), [i, s] = u.useState(!1), [l, c] = u.useState(!1), d = u.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && i, [o, i, n]), p = u.useCallback(() => {
    let m = e.current, h = t.current;
    if (!m || !h || l || n === "none") return;
    let b = m, v = b.getBoundingClientRect().left + b.offsetWidth, g = b.getBoundingClientRect().top + b.offsetHeight / 2, y = v - DG, w = g;
    document.querySelectorAll($G).length === 0 && document.elementFromPoint(y, w) === m || (a(!0), c(!0));
  }, [e, t, l, n]);
  return u.useEffect(() => {
    let m = e.current;
    if (!m || n === "none") return;
    function h() {
      let v = window.innerWidth - m.getBoundingClientRect().right;
      s(v >= Ew);
    }
    h();
    let b = setInterval(h, 1e3);
    return () => {
      clearInterval(b);
    };
  }, [e, n]), u.useEffect(() => {
    let m = r || document.activeElement === t.current;
    if (n === "none" || !m) return;
    let h = setTimeout(p, 0), b = setTimeout(p, 2e3), v = setTimeout(p, 5e3), g = setTimeout(() => {
      c(!0);
    }, 6e3);
    return () => {
      clearTimeout(h), clearTimeout(b), clearTimeout(v), clearTimeout(g);
    };
  }, [t, r, n, p]), { hasPWMBadge: o, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: IG };
}
var Pw = u.createContext({}), Rw = u.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: i = "left", pattern: s, placeholder: l, inputMode: c = "numeric", onComplete: d, pushPasswordManagerStrategy: p = "increase-width", pasteTransformer: m, containerClassName: h, noScriptCSSFallback: b = kG, render: v, children: g } = n, y = MG(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), w, x, S, C, E;
  let [_, O] = u.useState(typeof y.defaultValue == "string" ? y.defaultValue : ""), N = r ?? _, B = AG(N), M = u.useCallback((z) => {
    o == null || o(z), O(z);
  }, [o]), k = u.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), V = u.useRef(null), $ = u.useRef(null), K = u.useRef({ value: N, onChange: M, isIOS: typeof window < "u" && ((x = (w = window == null ? void 0 : window.CSS) == null ? void 0 : w.supports) == null ? void 0 : x.call(w, "-webkit-touch-callout", "none")) }), G = u.useRef({ prev: [(S = V.current) == null ? void 0 : S.selectionStart, (C = V.current) == null ? void 0 : C.selectionEnd, (E = V.current) == null ? void 0 : E.selectionDirection] });
  u.useImperativeHandle(t, () => V.current, []), u.useEffect(() => {
    let z = V.current, ae = $.current;
    if (!z || !ae) return;
    K.current.value !== z.value && K.current.onChange(z.value), G.current.prev = [z.selectionStart, z.selectionEnd, z.selectionDirection];
    function ce() {
      if (document.activeElement !== z) {
        j(null), H(null);
        return;
      }
      let ue = z.selectionStart, Re = z.selectionEnd, Be = z.selectionDirection, Ne = z.maxLength, We = z.value, rt = G.current.prev, st = -1, Ie = -1, $e;
      if (We.length !== 0 && ue !== null && Re !== null) {
        let ct = ue === Re, Tt = ue === We.length && We.length < Ne;
        if (ct && !Tt) {
          let tt = ue;
          if (tt === 0) st = 0, Ie = 1, $e = "forward";
          else if (tt === Ne) st = tt - 1, Ie = tt, $e = "backward";
          else if (Ne > 1 && We.length > 1) {
            let ut = 0;
            if (rt[0] !== null && rt[1] !== null) {
              $e = tt < rt[1] ? "backward" : "forward";
              let sn = rt[0] === rt[1] && rt[0] < Ne;
              $e === "backward" && !sn && (ut = -1);
            }
            st = ut + tt, Ie = ut + tt + 1;
          }
        }
        st !== -1 && Ie !== -1 && st !== Ie && V.current.setSelectionRange(st, Ie, $e);
      }
      let an = st !== -1 ? st : ue, wt = Ie !== -1 ? Ie : Re, lt = $e ?? Be;
      j(an), H(wt), G.current.prev = [an, wt, lt];
    }
    if (document.addEventListener("selectionchange", ce, { capture: !0 }), ce(), document.activeElement === z && ne(!0), !document.getElementById("input-otp-style")) {
      let ue = document.createElement("style");
      if (ue.id = "input-otp-style", document.head.appendChild(ue), ue.sheet) {
        let Re = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        No(ue.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), No(ue.sheet, `[data-input-otp]:autofill { ${Re} }`), No(ue.sheet, `[data-input-otp]:-webkit-autofill { ${Re} }`), No(ue.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), No(ue.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ve = () => {
      ae && ae.style.setProperty("--root-height", `${z.clientHeight}px`);
    };
    ve();
    let pe = new ResizeObserver(ve);
    return pe.observe(z), () => {
      document.removeEventListener("selectionchange", ce, { capture: !0 }), pe.disconnect();
    };
  }, []);
  let [F, I] = u.useState(!1), [L, ne] = u.useState(!1), [re, j] = u.useState(null), [D, H] = u.useState(null);
  u.useEffect(() => {
    OG(() => {
      var z, ae, ce, ve;
      (z = V.current) == null || z.dispatchEvent(new Event("input"));
      let pe = (ae = V.current) == null ? void 0 : ae.selectionStart, ue = (ce = V.current) == null ? void 0 : ce.selectionEnd, Re = (ve = V.current) == null ? void 0 : ve.selectionDirection;
      pe !== null && ue !== null && (j(pe), H(ue), G.current.prev = [pe, ue, Re]);
    });
  }, [N, L]), u.useEffect(() => {
    B !== void 0 && N !== B && B.length < a && N.length === a && (d == null || d(N));
  }, [a, d, B, N]);
  let U = jG({ containerRef: $, inputRef: V, pushPasswordManagerStrategy: p, isFocused: L }), X = u.useCallback((z) => {
    let ae = z.currentTarget.value.slice(0, a);
    if (ae.length > 0 && k && !k.test(ae)) {
      z.preventDefault();
      return;
    }
    typeof B == "string" && ae.length < B.length && document.dispatchEvent(new Event("selectionchange")), M(ae);
  }, [a, M, B, k]), A = u.useCallback(() => {
    var z;
    if (V.current) {
      let ae = Math.min(V.current.value.length, a - 1), ce = V.current.value.length;
      (z = V.current) == null || z.setSelectionRange(ae, ce), j(ae), H(ce);
    }
    ne(!0);
  }, [a]), Y = u.useCallback((z) => {
    var ae, ce;
    let ve = V.current;
    if (!m && (!K.current.isIOS || !z.clipboardData || !ve)) return;
    let pe = z.clipboardData.getData("text/plain"), ue = m ? m(pe) : pe;
    z.preventDefault();
    let Re = (ae = V.current) == null ? void 0 : ae.selectionStart, Be = (ce = V.current) == null ? void 0 : ce.selectionEnd, Ne = (Re !== Be ? N.slice(0, Re) + ue + N.slice(Be) : N.slice(0, Re) + ue + N.slice(Re)).slice(0, a);
    if (Ne.length > 0 && k && !k.test(Ne)) return;
    ve.value = Ne, M(Ne);
    let We = Math.min(Ne.length, a - 1), rt = Ne.length;
    ve.setSelectionRange(We, rt), j(We), H(rt);
  }, [a, M, k, N]), Q = u.useMemo(() => ({ position: "relative", cursor: y.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [y.disabled]), te = u.useMemo(() => ({ position: "absolute", inset: 0, width: U.willPushPWMBadge ? `calc(100% + ${U.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: U.willPushPWMBadge ? `inset(0 ${U.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [U.PWM_BADGE_SPACE_WIDTH, U.willPushPWMBadge, i]), oe = u.useMemo(() => u.createElement("input", TG(NG({ autoComplete: y.autoComplete || "one-time-code" }, y), { "data-input-otp": !0, "data-input-otp-placeholder-shown": N.length === 0 || void 0, "data-input-otp-mss": re, "data-input-otp-mse": D, inputMode: c, pattern: k == null ? void 0 : k.source, "aria-placeholder": l, style: te, maxLength: a, value: N, ref: V, onPaste: (z) => {
    var ae;
    Y(z), (ae = y.onPaste) == null || ae.call(y, z);
  }, onChange: X, onMouseOver: (z) => {
    var ae;
    I(!0), (ae = y.onMouseOver) == null || ae.call(y, z);
  }, onMouseLeave: (z) => {
    var ae;
    I(!1), (ae = y.onMouseLeave) == null || ae.call(y, z);
  }, onFocus: (z) => {
    var ae;
    A(), (ae = y.onFocus) == null || ae.call(y, z);
  }, onBlur: (z) => {
    var ae;
    ne(!1), (ae = y.onBlur) == null || ae.call(y, z);
  } })), [X, A, Y, c, te, a, D, re, y, k == null ? void 0 : k.source, N]), J = u.useMemo(() => ({ slots: Array.from({ length: a }).map((z, ae) => {
    var ce;
    let ve = L && re !== null && D !== null && (re === D && ae === re || ae >= re && ae < D), pe = N[ae] !== void 0 ? N[ae] : null, ue = N[0] !== void 0 ? null : (ce = l == null ? void 0 : l[ae]) != null ? ce : null;
    return { char: pe, placeholderChar: ue, isActive: ve, hasFakeCaret: ve && pe === null };
  }), isFocused: L, isHovering: !y.disabled && F }), [L, F, a, D, re, y.disabled, N]), q = u.useMemo(() => v ? v(J) : u.createElement(Pw.Provider, { value: J }, g), [g, J, v]);
  return u.createElement(u.Fragment, null, b !== null && u.createElement("noscript", null, u.createElement("style", null, b)), u.createElement("div", { ref: $, "data-input-otp-container": !0, style: Q, className: h }, q, u.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, oe)));
});
Rw.displayName = "Input";
function No(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var kG = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const LG = u.forwardRef(
  ({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ f.jsx(
    Rw,
    {
      ref: r,
      containerClassName: T("flex items-center gap-2 has-[:disabled]:opacity-50", t),
      className: T("disabled:cursor-not-allowed", e),
      ...n
    }
  )
);
LG.displayName = "InputOTP";
const FG = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, className: T("flex items-center", e), ...t })
);
FG.displayName = "InputOTPGroup";
const BG = u.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = u.useContext(Pw), { char: a, hasFakeCaret: i, isActive: s } = o.slots[e];
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: r,
      className: T(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        s && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        i && /* @__PURE__ */ f.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f.jsx("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
BG.displayName = "InputOTPSlot";
const zG = u.forwardRef(
  ({ ...e }, t) => /* @__PURE__ */ f.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ f.jsx(q_, {}) })
);
zG.displayName = "InputOTPSeparator";
const Nw = u.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.jsx(
    "input",
    {
      type: t,
      className: T(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Nw.displayName = "Input";
var Ea = "Menubar", [hc, HG, WG] = Mn(Ea), [Tw, L7] = Fe(Ea, [
  WG,
  yn
]), ht = Sa(), Mw = yn(), [VG, Sd] = Tw(Ea), Ow = u.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: i = !0,
      dir: s,
      ...l
    } = e, c = Qt(s), d = Mw(n), [p, m] = ze({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Ea
    }), [h, b] = u.useState(null);
    return /* @__PURE__ */ f.jsx(
      VG,
      {
        scope: n,
        value: p,
        onMenuOpen: u.useCallback(
          (v) => {
            m(v), b(v);
          },
          [m]
        ),
        onMenuClose: u.useCallback(() => m(""), [m]),
        onMenuToggle: u.useCallback(
          (v) => {
            m((g) => g ? "" : v), b(v);
          },
          [m]
        ),
        dir: c,
        loop: i,
        children: /* @__PURE__ */ f.jsx(hc.Provider, { scope: n, children: /* @__PURE__ */ f.jsx(hc.Slot, { scope: n, children: /* @__PURE__ */ f.jsx(
          ya,
          {
            asChild: !0,
            ...d,
            orientation: "horizontal",
            loop: i,
            dir: c,
            currentTabStopId: h,
            onCurrentTabStopIdChange: b,
            children: /* @__PURE__ */ f.jsx(Z.div, { role: "menubar", ...l, ref: t })
          }
        ) }) })
      }
    );
  }
);
Ow.displayName = Ea;
var Cd = "MenubarMenu", [GG, Aw] = Tw(Cd), Dw = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = Le(), a = n || o || "LEGACY_REACT_AUTO_VALUE", i = Sd(Cd, t), s = ht(t), l = u.useRef(null), c = u.useRef(!1), d = i.value === a;
  return u.useEffect(() => {
    d || (c.current = !1);
  }, [d]), /* @__PURE__ */ f.jsx(
    GG,
    {
      scope: t,
      value: a,
      triggerId: Le(),
      triggerRef: l,
      contentId: Le(),
      wasKeyboardTriggerOpenRef: c,
      children: /* @__PURE__ */ f.jsx(
        td,
        {
          ...s,
          open: d,
          onOpenChange: (p) => {
            p || i.onMenuClose();
          },
          modal: !1,
          dir: i.dir,
          ...r
        }
      )
    }
  );
};
Dw.displayName = Cd;
var vc = "MenubarTrigger", Iw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = Mw(n), i = ht(n), s = Sd(vc, n), l = Aw(vc, n), c = u.useRef(null), d = se(t, c, l.triggerRef), [p, m] = u.useState(!1), h = s.value === l.value;
    return /* @__PURE__ */ f.jsx(hc.ItemSlot, { scope: n, value: l.value, disabled: r, children: /* @__PURE__ */ f.jsx(
      wa,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: l.value,
        children: /* @__PURE__ */ f.jsx(nd, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
          Z.button,
          {
            type: "button",
            role: "menuitem",
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": h,
            "aria-controls": h ? l.contentId : void 0,
            "data-highlighted": p ? "" : void 0,
            "data-state": h ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: d,
            onPointerDown: W(e.onPointerDown, (b) => {
              !r && b.button === 0 && b.ctrlKey === !1 && (s.onMenuOpen(l.value), h || b.preventDefault());
            }),
            onPointerEnter: W(e.onPointerEnter, () => {
              var v;
              !!s.value && !h && (s.onMenuOpen(l.value), (v = c.current) == null || v.focus());
            }),
            onKeyDown: W(e.onKeyDown, (b) => {
              r || (["Enter", " "].includes(b.key) && s.onMenuToggle(l.value), b.key === "ArrowDown" && s.onMenuOpen(l.value), ["Enter", " ", "ArrowDown"].includes(b.key) && (l.wasKeyboardTriggerOpenRef.current = !0, b.preventDefault()));
            }),
            onFocus: W(e.onFocus, () => m(!0)),
            onBlur: W(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
Iw.displayName = vc;
var UG = "MenubarPortal", $w = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = ht(t);
  return /* @__PURE__ */ f.jsx(rd, { ...r, ...n });
};
$w.displayName = UG;
var gc = "MenubarContent", jw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = ht(n), i = Sd(gc, n), s = Aw(gc, n), l = HG(n), c = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      od,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: W(e.onCloseAutoFocus, (d) => {
          var m;
          !!!i.value && !c.current && ((m = s.triggerRef.current) == null || m.focus()), c.current = !1, d.preventDefault();
        }),
        onFocusOutside: W(e.onFocusOutside, (d) => {
          const p = d.target;
          l().some((h) => {
            var b;
            return (b = h.ref.current) == null ? void 0 : b.contains(p);
          }) && d.preventDefault();
        }),
        onInteractOutside: W(e.onInteractOutside, () => {
          c.current = !0;
        }),
        onEntryFocus: (d) => {
          s.wasKeyboardTriggerOpenRef.current || d.preventDefault();
        },
        onKeyDown: W(
          e.onKeyDown,
          (d) => {
            if (["ArrowRight", "ArrowLeft"].includes(d.key)) {
              const p = d.target, m = p.hasAttribute("data-radix-menubar-subtrigger"), h = p.closest("[data-radix-menubar-content]") !== d.currentTarget, v = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
              if (!v && m || h && v) return;
              let w = l().filter((C) => !C.disabled).map((C) => C.value);
              v && w.reverse();
              const x = w.indexOf(s.value);
              w = i.loop ? aU(w, x + 1) : w.slice(x + 1);
              const [S] = w;
              S && i.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
jw.displayName = gc;
var KG = "MenubarGroup", kw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(ad, { ...o, ...r, ref: t });
  }
);
kw.displayName = KG;
var YG = "MenubarLabel", Lw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(id, { ...o, ...r, ref: t });
  }
);
Lw.displayName = YG;
var qG = "MenubarItem", Fw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(sd, { ...o, ...r, ref: t });
  }
);
Fw.displayName = qG;
var XG = "MenubarCheckboxItem", Bw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(ld, { ...o, ...r, ref: t });
  }
);
Bw.displayName = XG;
var JG = "MenubarRadioGroup", zw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(cd, { ...o, ...r, ref: t });
  }
);
zw.displayName = JG;
var ZG = "MenubarRadioItem", Hw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(ud, { ...o, ...r, ref: t });
  }
);
Hw.displayName = ZG;
var QG = "MenubarItemIndicator", Ww = u.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = ht(n);
  return /* @__PURE__ */ f.jsx(dd, { ...o, ...r, ref: t });
});
Ww.displayName = QG;
var eU = "MenubarSeparator", Vw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(fd, { ...o, ...r, ref: t });
  }
);
Vw.displayName = eU;
var tU = "MenubarArrow", nU = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(pd, { ...o, ...r, ref: t });
  }
);
nU.displayName = tU;
var Gw = "MenubarSub", Uw = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, i = ht(t), [s, l] = ze({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: Gw
  });
  return /* @__PURE__ */ f.jsx(md, { ...i, open: s, onOpenChange: l, children: n });
};
Uw.displayName = Gw;
var rU = "MenubarSubTrigger", Kw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(
      hd,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
Kw.displayName = rU;
var oU = "MenubarSubContent", Yw = u.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = ht(n);
    return /* @__PURE__ */ f.jsx(
      vd,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Yw.displayName = oU;
function aU(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var qw = Ow, iU = Dw, Xw = Iw, Jw = $w, Zw = jw, sU = kw, Qw = Lw, ex = Fw, tx = Bw, lU = zw, nx = Hw, rx = Ww, ox = Vw, cU = Uw, ax = Kw, ix = Yw;
const F7 = iU, B7 = sU, z7 = Jw, H7 = cU, W7 = lU, uU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  qw,
  {
    ref: n,
    className: T("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", e),
    ...t
  }
));
uU.displayName = qw.displayName;
const dU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Xw,
  {
    ref: n,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...t
  }
));
dU.displayName = Xw.displayName;
const fU = u.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  ax,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.jsx(Zr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
fU.displayName = ax.displayName;
const pU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  ix,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
pU.displayName = ix.displayName;
const mU = u.forwardRef(({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.jsx(Jw, { children: /* @__PURE__ */ f.jsx(
  Zw,
  {
    ref: a,
    align: t,
    alignOffset: n,
    sideOffset: r,
    className: T(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...o
  }
) }));
mU.displayName = Zw.displayName;
const hU = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  ex,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
hU.displayName = ex.displayName;
const vU = u.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.jsxs(
  tx,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(rx, { children: /* @__PURE__ */ f.jsx(ta, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
vU.displayName = tx.displayName;
const gU = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  nx,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(rx, { children: /* @__PURE__ */ f.jsx(Bi, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
gU.displayName = nx.displayName;
const bU = u.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  Qw,
  {
    ref: r,
    className: T("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
  }
));
bU.displayName = Qw.displayName;
const yU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(ox, { ref: n, className: T("-mx-1 my-1 h-px bg-muted", e), ...t }));
yU.displayName = ox.displayName;
const wU = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("span", { className: T("ml-auto text-xs tracking-widest text-muted-foreground", e), ...t });
wU.displayname = "MenubarShortcut";
var sx = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), xU = "VisuallyHidden", vs = u.forwardRef(
  (e, t) => /* @__PURE__ */ f.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...sx, ...e.style }
    }
  )
);
vs.displayName = xU;
var lx = vs, Er = "NavigationMenu", [_d, cx, SU] = Mn(Er), [bc, CU, _U] = Mn(Er), [Ed, V7] = Fe(
  Er,
  [SU, _U]
), [EU, zt] = Ed(Er), [PU, RU] = Ed(Er), ux = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: c,
      ...d
    } = e, [p, m] = u.useState(null), h = se(t, (N) => m(N)), b = Qt(c), v = u.useRef(0), g = u.useRef(0), y = u.useRef(0), [w, x] = u.useState(!0), [S, C] = ze({
      prop: r,
      onChange: (N) => {
        const B = N !== "", M = s > 0;
        B ? (window.clearTimeout(y.current), M && x(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
          () => x(!0),
          s
        )), o == null || o(N);
      },
      defaultProp: a ?? "",
      caller: Er
    }), E = u.useCallback(() => {
      window.clearTimeout(g.current), g.current = window.setTimeout(() => C(""), 150);
    }, [C]), _ = u.useCallback(
      (N) => {
        window.clearTimeout(g.current), C(N);
      },
      [C]
    ), O = u.useCallback(
      (N) => {
        S === N ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(g.current), C(N);
        }, i);
      },
      [S, C, i]
    );
    return u.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(y.current);
    }, []), /* @__PURE__ */ f.jsx(
      dx,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: b,
        orientation: l,
        rootNavigationMenu: p,
        onTriggerEnter: (N) => {
          window.clearTimeout(v.current), w ? O(N) : _(N);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), E();
        },
        onContentEnter: () => window.clearTimeout(g.current),
        onContentLeave: E,
        onItemSelect: (N) => {
          C((B) => B === N ? "" : N);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ f.jsx(
          Z.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: b,
            ...d,
            ref: h
          }
        )
      }
    );
  }
);
ux.displayName = Er;
var yc = "NavigationMenuSub", NU = u.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...s
    } = e, l = zt(yc, n), [c, d] = ze({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: yc
    });
    return /* @__PURE__ */ f.jsx(
      dx,
      {
        scope: n,
        isRootMenu: !1,
        value: c,
        dir: l.dir,
        orientation: i,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (p) => d(p),
        onItemSelect: (p) => d(p),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ f.jsx(Z.div, { "data-orientation": i, ...s, ref: t })
      }
    );
  }
);
NU.displayName = yc;
var dx = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: i,
    value: s,
    onItemSelect: l,
    onItemDismiss: c,
    onTriggerEnter: d,
    onTriggerLeave: p,
    onContentEnter: m,
    onContentLeave: h
  } = e, [b, v] = u.useState(null), [g, y] = u.useState(/* @__PURE__ */ new Map()), [w, x] = u.useState(null);
  return /* @__PURE__ */ f.jsx(
    EU,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: lo(s),
      baseId: Le(),
      dir: o,
      orientation: a,
      viewport: b,
      onViewportChange: v,
      indicatorTrack: w,
      onIndicatorTrackChange: x,
      onTriggerEnter: Te(d),
      onTriggerLeave: Te(p),
      onContentEnter: Te(m),
      onContentLeave: Te(h),
      onItemSelect: Te(l),
      onItemDismiss: Te(c),
      onViewportContentChange: u.useCallback((S, C) => {
        y((E) => (E.set(S, C), new Map(E)));
      }, []),
      onViewportContentRemove: u.useCallback((S) => {
        y((C) => C.has(S) ? (C.delete(S), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ f.jsx(_d.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(PU, { scope: t, items: g, children: i }) })
    }
  );
}, fx = "NavigationMenuList", px = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = zt(fx, n), a = /* @__PURE__ */ f.jsx(Z.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ f.jsx(Z.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ f.jsx(_d.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ f.jsx(Cx, { asChild: !0, children: a }) : a }) });
  }
);
px.displayName = fx;
var mx = "NavigationMenuItem", [TU, hx] = Ed(mx), vx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = Le(), i = r || a || "LEGACY_REACT_AUTO_VALUE", s = u.useRef(null), l = u.useRef(null), c = u.useRef(null), d = u.useRef(() => {
    }), p = u.useRef(!1), m = u.useCallback((b = "start") => {
      if (s.current) {
        d.current();
        const v = xc(s.current);
        v.length && Nd(b === "start" ? v : v.reverse());
      }
    }, []), h = u.useCallback(() => {
      if (s.current) {
        const b = xc(s.current);
        b.length && (d.current = jU(b));
      }
    }, []);
    return /* @__PURE__ */ f.jsx(
      TU,
      {
        scope: n,
        value: i,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: c,
        wasEscapeCloseRef: p,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: h,
        onContentFocusOutside: h,
        children: /* @__PURE__ */ f.jsx(Z.li, { ...o, ref: t })
      }
    );
  }
);
vx.displayName = mx;
var wc = "NavigationMenuTrigger", gx = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = zt(wc, e.__scopeNavigationMenu), i = hx(wc, e.__scopeNavigationMenu), s = u.useRef(null), l = se(s, i.triggerRef, t), c = Ex(a.baseId, i.value), d = Px(a.baseId, i.value), p = u.useRef(!1), m = u.useRef(!1), h = i.value === a.value;
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(_d.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ f.jsx(_x, { asChild: !0, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        id: c,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Td(h),
        "aria-expanded": h,
        "aria-controls": d,
        ...o,
        ref: l,
        onPointerEnter: W(e.onPointerEnter, () => {
          m.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: W(
          e.onPointerMove,
          Pi(() => {
            r || m.current || i.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(i.value), p.current = !0);
          })
        ),
        onPointerLeave: W(
          e.onPointerLeave,
          Pi(() => {
            r || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: W(e.onClick, () => {
          a.onItemSelect(i.value), m.current = h;
        }),
        onKeyDown: W(e.onKeyDown, (b) => {
          const g = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          h && b.key === g && (i.onEntryKeyDown(), b.preventDefault());
        })
      }
    ) }) }),
    h && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        lx,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (b) => {
            const v = i.contentRef.current, g = b.relatedTarget, y = g === s.current, w = v == null ? void 0 : v.contains(g);
            (y || !w) && i.onFocusProxyEnter(y ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ f.jsx("span", { "aria-owns": d })
    ] })
  ] });
});
gx.displayName = wc;
var MU = "NavigationMenuLink", sm = "navigationMenu.linkSelect", bx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ f.jsx(_x, { asChild: !0, children: /* @__PURE__ */ f.jsx(
      Z.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: W(
          e.onClick,
          (i) => {
            const s = i.target, l = new CustomEvent(sm, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(sm, (c) => o == null ? void 0 : o(c), { once: !0 }), jo(s, l), !l.defaultPrevented && !i.metaKey) {
              const c = new CustomEvent(Qa, {
                bubbles: !0,
                cancelable: !0
              });
              jo(s, c);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
bx.displayName = MU;
var Pd = "NavigationMenuIndicator", yx = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(Pd, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Bc.createPortal(
    /* @__PURE__ */ f.jsx(Ye, { present: n || a, children: /* @__PURE__ */ f.jsx(OU, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
yx.displayName = Pd;
var OU = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = zt(Pd, n), a = cx(n), [i, s] = u.useState(
    null
  ), [l, c] = u.useState(null), d = o.orientation === "horizontal", p = !!o.value;
  u.useEffect(() => {
    var v;
    const b = (v = a().find((g) => g.value === o.value)) == null ? void 0 : v.ref.current;
    b && s(b);
  }, [a, o.value]);
  const m = () => {
    i && c({
      size: d ? i.offsetWidth : i.offsetHeight,
      offset: d ? i.offsetLeft : i.offsetTop
    });
  };
  return Sc(i, m), Sc(o.indicatorTrack, m), l ? /* @__PURE__ */ f.jsx(
    Z.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...d ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Yr = "NavigationMenuContent", wx = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(Yr, e.__scopeNavigationMenu), a = hx(Yr, e.__scopeNavigationMenu), i = se(a.contentRef, t), s = a.value === o.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ f.jsx(AU, { forceMount: n, ...l, ref: i }) : /* @__PURE__ */ f.jsx(Ye, { present: n || s, children: /* @__PURE__ */ f.jsx(
    xx,
    {
      "data-state": Td(s),
      ...l,
      ref: i,
      onPointerEnter: W(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: W(
        e.onPointerLeave,
        Pi(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
wx.displayName = Yr;
var AU = u.forwardRef((e, t) => {
  const n = zt(Yr, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ke(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Ke(() => () => o(e.value), [e.value, o]), null;
}), Qa = "navigationMenu.rootContentDismiss", xx = u.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...c
  } = e, d = zt(Yr, n), p = u.useRef(null), m = se(p, t), h = Ex(d.baseId, r), b = Px(d.baseId, r), v = cx(n), g = u.useRef(null), { onItemDismiss: y } = d;
  u.useEffect(() => {
    const x = p.current;
    if (d.isRootMenu && x) {
      const S = () => {
        var C;
        y(), s(), x.contains(document.activeElement) && ((C = o.current) == null || C.focus());
      };
      return x.addEventListener(Qa, S), () => x.removeEventListener(Qa, S);
    }
  }, [d.isRootMenu, e.value, o, y, s]);
  const w = u.useMemo(() => {
    const S = v().map((B) => B.value);
    d.dir === "rtl" && S.reverse();
    const C = S.indexOf(d.value), E = S.indexOf(d.previousValue), _ = r === d.value, O = E === S.indexOf(r);
    if (!_ && !O) return g.current;
    const N = (() => {
      if (C !== E) {
        if (_ && E !== -1) return C > E ? "from-end" : "from-start";
        if (O && C !== -1) return C > E ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = N, N;
  }, [d.previousValue, d.value, d.dir, v, r]);
  return /* @__PURE__ */ f.jsx(Cx, { asChild: !0, children: /* @__PURE__ */ f.jsx(
    On,
    {
      id: b,
      "aria-labelledby": h,
      "data-motion": w,
      "data-orientation": d.orientation,
      ...c,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var S;
        const x = new Event(Qa, {
          bubbles: !0,
          cancelable: !0
        });
        (S = p.current) == null || S.dispatchEvent(x);
      },
      onFocusOutside: W(e.onFocusOutside, (x) => {
        var C;
        l();
        const S = x.target;
        (C = d.rootNavigationMenu) != null && C.contains(S) && x.preventDefault();
      }),
      onPointerDownOutside: W(e.onPointerDownOutside, (x) => {
        var _;
        const S = x.target, C = v().some((O) => {
          var N;
          return (N = O.ref.current) == null ? void 0 : N.contains(S);
        }), E = d.isRootMenu && ((_ = d.viewport) == null ? void 0 : _.contains(S));
        (C || E || !d.isRootMenu) && x.preventDefault();
      }),
      onKeyDown: W(e.onKeyDown, (x) => {
        var E;
        const S = x.altKey || x.ctrlKey || x.metaKey;
        if (x.key === "Tab" && !S) {
          const _ = xc(x.currentTarget), O = document.activeElement, N = _.findIndex((k) => k === O), M = x.shiftKey ? _.slice(0, N).reverse() : _.slice(N + 1, _.length);
          Nd(M) ? x.preventDefault() : (E = a.current) == null || E.focus();
        }
      }),
      onEscapeKeyDown: W(e.onEscapeKeyDown, (x) => {
        i.current = !0;
      })
    }
  ) });
}), Rd = "NavigationMenuViewport", Sx = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!zt(Rd, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ f.jsx(Ye, { present: n || a, children: /* @__PURE__ */ f.jsx(DU, { ...r, ref: t }) });
});
Sx.displayName = Rd;
var DU = u.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = zt(Rd, n), i = se(t, a.onViewportChange), s = RU(
    Yr,
    e.__scopeNavigationMenu
  ), [l, c] = u.useState(null), [d, p] = u.useState(null), m = l ? (l == null ? void 0 : l.width) + "px" : void 0, h = l ? (l == null ? void 0 : l.height) + "px" : void 0, b = !!a.value, v = b ? a.value : a.previousValue;
  return Sc(d, () => {
    d && c({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ f.jsx(
    Z.div,
    {
      "data-state": Td(b),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !b && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": h,
        ...o.style
      },
      onPointerEnter: W(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: W(e.onPointerLeave, Pi(a.onContentLeave)),
      children: Array.from(s.items).map(([y, { ref: w, forceMount: x, ...S }]) => {
        const C = v === y;
        return /* @__PURE__ */ f.jsx(Ye, { present: x || C, children: /* @__PURE__ */ f.jsx(
          xx,
          {
            ...S,
            ref: fn(w, (E) => {
              C && E && p(E);
            })
          }
        ) }, y);
      })
    }
  );
}), IU = "FocusGroup", Cx = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = zt(IU, n);
    return /* @__PURE__ */ f.jsx(bc.Provider, { scope: n, children: /* @__PURE__ */ f.jsx(bc.Slot, { scope: n, children: /* @__PURE__ */ f.jsx(Z.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), lm = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], $U = "FocusGroupItem", _x = u.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = CU(n), a = zt($U, n);
    return /* @__PURE__ */ f.jsx(bc.ItemSlot, { scope: n, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        ...r,
        ref: t,
        onKeyDown: W(e.onKeyDown, (i) => {
          if (["Home", "End", ...lm].includes(i.key)) {
            let l = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && l.reverse(), lm.includes(i.key)) {
              const p = l.indexOf(i.currentTarget);
              l = l.slice(p + 1);
            }
            setTimeout(() => Nd(l)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function xc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Nd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function jU(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Sc(e, t) {
  const n = Te(t);
  Ke(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Td(e) {
  return e ? "open" : "closed";
}
function Ex(e, t) {
  return `${e}-trigger-${t}`;
}
function Px(e, t) {
  return `${e}-content-${t}`;
}
function Pi(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Rx = ux, Nx = px, kU = vx, Tx = gx, LU = bx, Mx = yx, Ox = wx, Ax = Sx;
const FU = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  Rx,
  {
    ref: r,
    className: T("relative z-10 flex max-w-max flex-1 items-center justify-center", e),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.jsx(Dx, {})
    ]
  }
));
FU.displayName = Rx.displayName;
const BU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Nx,
  {
    ref: n,
    className: T("group flex flex-1 list-none items-center justify-center space-x-1", e),
    ...t
  }
));
BU.displayName = Nx.displayName;
const G7 = kU, zU = Dn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), HU = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  Tx,
  {
    ref: r,
    className: T(zU(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.jsx(
        Fi,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
HU.displayName = Tx.displayName;
const WU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Ox,
  {
    ref: n,
    className: T(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      e
    ),
    ...t
  }
));
WU.displayName = Ox.displayName;
const U7 = LU, Dx = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { className: T("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.jsx(
  Ax,
  {
    className: T(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Dx.displayName = Ax.displayName;
const VU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  Mx,
  {
    ref: n,
    className: T(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
VU.displayName = Mx.displayName;
const GU = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: T("mx-auto flex w-full justify-center", e),
    ...t
  }
);
GU.displayName = "Pagination";
const UU = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("ul", { ref: n, className: T("flex flex-row items-center gap-1", e), ...t })
);
UU.displayName = "PaginationContent";
const KU = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("li", { ref: n, className: T("", e), ...t }));
KU.displayName = "PaginationItem";
const Md = ({ className: e, isActive: t, size: n = "icon", ...r }) => /* @__PURE__ */ f.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: T(
      zr({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
Md.displayName = "PaginationLink";
const YU = ({ className: e, ...t }) => /* @__PURE__ */ f.jsxs(Md, { "aria-label": "Go to previous page", size: "default", className: T("gap-1 pl-2.5", e), ...t, children: [
  /* @__PURE__ */ f.jsx(Km, { className: "h-4 w-4" }),
  /* @__PURE__ */ f.jsx("span", { children: "Previous" })
] });
YU.displayName = "PaginationPrevious";
const qU = ({ className: e, ...t }) => /* @__PURE__ */ f.jsxs(Md, { "aria-label": "Go to next page", size: "default", className: T("gap-1 pr-2.5", e), ...t, children: [
  /* @__PURE__ */ f.jsx("span", { children: "Next" }),
  /* @__PURE__ */ f.jsx(Zr, { className: "h-4 w-4" })
] });
qU.displayName = "PaginationNext";
const XU = ({ className: e, ...t }) => /* @__PURE__ */ f.jsxs("span", { "aria-hidden": !0, className: T("flex h-9 w-9 items-center justify-center", e), ...t, children: [
  /* @__PURE__ */ f.jsx(Ym, { className: "h-4 w-4" }),
  /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "More pages" })
] });
XU.displayName = "PaginationEllipsis";
var gs = "Popover", [Ix, K7] = Fe(gs, [
  bn
]), Pa = bn(), [JU, Yn] = Ix(gs), $x = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Pa(t), l = u.useRef(null), [c, d] = u.useState(!1), [p, m] = ze({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: gs
  });
  return /* @__PURE__ */ f.jsx(fo, { ...s, children: /* @__PURE__ */ f.jsx(
    JU,
    {
      scope: t,
      contentId: Le(),
      triggerRef: l,
      open: p,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((h) => !h), [m]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: u.useCallback(() => d(!0), []),
      onCustomAnchorRemove: u.useCallback(() => d(!1), []),
      modal: i,
      children: n
    }
  ) });
};
$x.displayName = gs;
var jx = "PopoverAnchor", ZU = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Yn(jx, n), a = Pa(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return u.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ f.jsx(po, { ...a, ...r, ref: t });
  }
);
ZU.displayName = jx;
var kx = "PopoverTrigger", Lx = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Yn(kx, n), a = Pa(n), i = se(t, o.triggerRef), s = /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Wx(o.open),
        ...r,
        ref: i,
        onClick: W(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ f.jsx(po, { asChild: !0, ...a, children: s });
  }
);
Lx.displayName = kx;
var Od = "PopoverPortal", [QU, e8] = Ix(Od, {
  forceMount: void 0
}), Fx = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Yn(Od, t);
  return /* @__PURE__ */ f.jsx(QU, { scope: t, forceMount: n, children: /* @__PURE__ */ f.jsx(Ye, { present: n || a.open, children: /* @__PURE__ */ f.jsx(eo, { asChild: !0, container: o, children: r }) }) });
};
Fx.displayName = Od;
var qr = "PopoverContent", Bx = u.forwardRef(
  (e, t) => {
    const n = e8(qr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Yn(qr, e.__scopePopover);
    return /* @__PURE__ */ f.jsx(Ye, { present: r || a.open, children: a.modal ? /* @__PURE__ */ f.jsx(n8, { ...o, ref: t }) : /* @__PURE__ */ f.jsx(r8, { ...o, ref: t }) });
  }
);
Bx.displayName = qr;
var t8 = /* @__PURE__ */ Bn("PopoverContent.RemoveScroll"), n8 = u.forwardRef(
  (e, t) => {
    const n = Yn(qr, e.__scopePopover), r = u.useRef(null), o = se(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const i = r.current;
      if (i) return Wi(i);
    }, []), /* @__PURE__ */ f.jsx(ra, { as: t8, allowPinchZoom: !0, children: /* @__PURE__ */ f.jsx(
      zx,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: W(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: W(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, c = s.button === 2 || l;
            a.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: W(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), r8 = u.forwardRef(
  (e, t) => {
    const n = Yn(qr, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ f.jsx(
      zx,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), zx = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: d,
      ...p
    } = e, m = Yn(qr, n), h = Pa(n);
    return zi(), /* @__PURE__ */ f.jsx(
      na,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ f.jsx(
          On,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: d,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ f.jsx(
              va,
              {
                "data-state": Wx(m.open),
                role: "dialog",
                id: m.contentId,
                ...h,
                ...p,
                ref: t,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Hx = "PopoverClose", o8 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Yn(Hx, n);
    return /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: W(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
o8.displayName = Hx;
var a8 = "PopoverArrow", i8 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Pa(n);
    return /* @__PURE__ */ f.jsx(ga, { ...o, ...r, ref: t });
  }
);
i8.displayName = a8;
function Wx(e) {
  return e ? "open" : "closed";
}
var s8 = $x, l8 = Lx, c8 = Fx, Vx = Bx;
const Y7 = s8, q7 = l8, u8 = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.jsx(c8, { children: /* @__PURE__ */ f.jsx(
  Vx,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
u8.displayName = Vx.displayName;
var Ad = "Progress", Dd = 100, [d8, X7] = Fe(Ad), [f8, p8] = d8(Ad), Gx = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = m8,
      ...i
    } = e;
    (o || o === 0) && !cm(o) && console.error(h8(`${o}`, "Progress"));
    const s = cm(o) ? o : Dd;
    r !== null && !um(r, s) && console.error(v8(`${r}`, "Progress"));
    const l = um(r, s) ? r : null, c = Ri(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ f.jsx(f8, { scope: n, value: l, max: s, children: /* @__PURE__ */ f.jsx(
      Z.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Ri(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": Yx(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...i,
        ref: t
      }
    ) });
  }
);
Gx.displayName = Ad;
var Ux = "ProgressIndicator", Kx = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = p8(Ux, n);
    return /* @__PURE__ */ f.jsx(
      Z.div,
      {
        "data-state": Yx(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Kx.displayName = Ux;
function m8(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Yx(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ri(e) {
  return typeof e == "number";
}
function cm(e) {
  return Ri(e) && !isNaN(e) && e > 0;
}
function um(e, t) {
  return Ri(e) && !isNaN(e) && e <= t && e >= 0;
}
function h8(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Dd}\`.`;
}
function v8(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Dd} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var qx = Gx, g8 = Kx;
const b8 = u.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.jsx(
  qx,
  {
    ref: r,
    className: T("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
    ...n,
    children: /* @__PURE__ */ f.jsx(
      g8,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
b8.displayName = qx.displayName;
var Id = "Radio", [y8, Xx] = Fe(Id), [w8, x8] = y8(Id), Jx = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: i,
      value: s = "on",
      onCheck: l,
      form: c,
      ...d
    } = e, [p, m] = u.useState(null), h = se(t, (g) => m(g)), b = u.useRef(!1), v = p ? c || !!p.closest("form") : !0;
    return /* @__PURE__ */ f.jsxs(w8, { scope: n, checked: o, disabled: i, children: [
      /* @__PURE__ */ f.jsx(
        Z.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": t0(o),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...d,
          ref: h,
          onClick: W(e.onClick, (g) => {
            o || l == null || l(), v && (b.current = g.isPropagationStopped(), b.current || g.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ f.jsx(
        e0,
        {
          control: p,
          bubbles: !b.current,
          name: r,
          value: s,
          checked: o,
          required: a,
          disabled: i,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Jx.displayName = Id;
var Zx = "RadioIndicator", Qx = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = x8(Zx, n);
    return /* @__PURE__ */ f.jsx(Ye, { present: r || a.checked, children: /* @__PURE__ */ f.jsx(
      Z.span,
      {
        "data-state": t0(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Qx.displayName = Zx;
var S8 = "RadioBubbleInput", e0 = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = se(i, a), l = lo(n), c = pa(t);
    return u.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && h) {
        const b = new Event("click", { bubbles: r });
        h.call(d, n), d.dispatchEvent(b);
      }
    }, [l, n, r]), /* @__PURE__ */ f.jsx(
      Z.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
e0.displayName = S8;
function t0(e) {
  return e ? "checked" : "unchecked";
}
var C8 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], bs = "RadioGroup", [_8, J7] = Fe(bs, [
  yn,
  Xx
]), n0 = yn(), r0 = Xx(), [E8, P8] = _8(bs), o0 = u.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: i = !1,
      disabled: s = !1,
      orientation: l,
      dir: c,
      loop: d = !0,
      onValueChange: p,
      ...m
    } = e, h = n0(n), b = Qt(c), [v, g] = ze({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: bs
    });
    return /* @__PURE__ */ f.jsx(
      E8,
      {
        scope: n,
        name: r,
        required: i,
        disabled: s,
        value: v,
        onValueChange: g,
        children: /* @__PURE__ */ f.jsx(
          ya,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: b,
            loop: d,
            children: /* @__PURE__ */ f.jsx(
              Z.div,
              {
                role: "radiogroup",
                "aria-required": i,
                "aria-orientation": l,
                "data-disabled": s ? "" : void 0,
                dir: b,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
o0.displayName = bs;
var a0 = "RadioGroupItem", i0 = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = P8(a0, n), i = a.disabled || r, s = n0(n), l = r0(n), c = u.useRef(null), d = se(t, c), p = a.value === o.value, m = u.useRef(!1);
    return u.useEffect(() => {
      const h = (v) => {
        C8.includes(v.key) && (m.current = !0);
      }, b = () => m.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ f.jsx(
      wa,
      {
        asChild: !0,
        ...s,
        focusable: !i,
        active: p,
        children: /* @__PURE__ */ f.jsx(
          Jx,
          {
            disabled: i,
            required: a.required,
            checked: p,
            ...l,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: W((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: W(o.onFocus, () => {
              var h;
              m.current && ((h = c.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
i0.displayName = a0;
var R8 = "RadioGroupIndicator", s0 = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = r0(n);
    return /* @__PURE__ */ f.jsx(Qx, { ...o, ...r, ref: t });
  }
);
s0.displayName = R8;
var l0 = o0, c0 = i0, N8 = s0;
const T8 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(l0, { className: T("grid gap-2", e), ...t, ref: n }));
T8.displayName = l0.displayName;
const M8 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  c0,
  {
    ref: n,
    className: T(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.jsx(N8, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.jsx(Bi, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
M8.displayName = c0.displayName;
const ys = Vn(null);
ys.displayName = "PanelGroupContext";
const Qe = {
  group: "data-panel-group",
  groupDirection: "data-panel-group-direction",
  groupId: "data-panel-group-id",
  panel: "data-panel",
  panelCollapsible: "data-panel-collapsible",
  panelId: "data-panel-id",
  panelSize: "data-panel-size",
  resizeHandle: "data-resize-handle",
  resizeHandleActive: "data-resize-handle-active",
  resizeHandleEnabled: "data-panel-resize-handle-enabled",
  resizeHandleId: "data-panel-resize-handle-id",
  resizeHandleState: "data-resize-handle-state"
}, $d = 10, ir = Ii, dm = u.useId, O8 = typeof dm == "function" ? dm : () => null;
let A8 = 0;
function jd(e = null) {
  const t = O8(), n = it(e || t || null);
  return n.current === null && (n.current = "" + A8++), e ?? n.current;
}
function u0({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: d,
  onResize: p,
  order: m,
  style: h,
  tagName: b = "div",
  ...v
}) {
  const g = Tn(ys);
  if (g === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: y,
    expandPanel: w,
    getPanelSize: x,
    getPanelStyle: S,
    groupId: C,
    isPanelCollapsed: E,
    reevaluatePanelConstraints: _,
    registerPanel: O,
    resizePanel: N,
    unregisterPanel: B
  } = g, M = jd(i), k = it({
    callbacks: {
      onCollapse: c,
      onExpand: d,
      onResize: p
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: l
    },
    id: M,
    idIsFromProps: i !== void 0,
    order: m
  });
  it({
    didLogMissingDefaultSizeWarning: !1
  }), ir(() => {
    const {
      callbacks: $,
      constraints: K
    } = k.current, G = {
      ...K
    };
    k.current.id = M, k.current.idIsFromProps = i !== void 0, k.current.order = m, $.onCollapse = c, $.onExpand = d, $.onResize = p, K.collapsedSize = n, K.collapsible = r, K.defaultSize = o, K.maxSize = s, K.minSize = l, (G.collapsedSize !== K.collapsedSize || G.collapsible !== K.collapsible || G.maxSize !== K.maxSize || G.minSize !== K.minSize) && _(k.current, G);
  }), ir(() => {
    const $ = k.current;
    return O($), () => {
      B($);
    };
  }, [m, M, O, B]), Lc(a, () => ({
    collapse: () => {
      y(k.current);
    },
    expand: ($) => {
      w(k.current, $);
    },
    getId() {
      return M;
    },
    getSize() {
      return x(k.current);
    },
    isCollapsed() {
      return E(k.current);
    },
    isExpanded() {
      return !E(k.current);
    },
    resize: ($) => {
      N(k.current, $);
    }
  }), [y, w, x, E, M, N]);
  const V = S(k.current, o);
  return En(b, {
    ...v,
    children: e,
    className: t,
    id: M,
    style: {
      ...V,
      ...h
    },
    // CSS selectors
    [Qe.groupId]: C,
    [Qe.panel]: "",
    [Qe.panelCollapsible]: r || void 0,
    [Qe.panelId]: M,
    [Qe.panelSize]: parseFloat("" + V.flexGrow).toFixed(1)
  });
}
const d0 = vr((e, t) => En(u0, {
  ...e,
  forwardedRef: t
}));
u0.displayName = "Panel";
d0.displayName = "forwardRef(Panel)";
let Cc = null, ei = -1, Ln = null;
function D8(e, t) {
  if (t) {
    const n = (t & v0) !== 0, r = (t & g0) !== 0, o = (t & b0) !== 0, a = (t & y0) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function I8() {
  Ln !== null && (document.head.removeChild(Ln), Cc = null, Ln = null, ei = -1);
}
function xl(e, t) {
  var n, r;
  const o = D8(e, t);
  if (Cc !== o) {
    if (Cc = o, Ln === null && (Ln = document.createElement("style"), document.head.appendChild(Ln)), ei >= 0) {
      var a;
      (a = Ln.sheet) === null || a === void 0 || a.removeRule(ei);
    }
    ei = (n = (r = Ln.sheet) === null || r === void 0 ? void 0 : r.insertRule(`*{cursor: ${o} !important;}`)) !== null && n !== void 0 ? n : -1;
  }
}
function f0(e) {
  return e.type === "keydown";
}
function p0(e) {
  return e.type.startsWith("pointer");
}
function m0(e) {
  return e.type.startsWith("mouse");
}
function ws(e) {
  if (p0(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (m0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function $8() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function j8(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function k8(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: mm(e),
    b: mm(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  be(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: pm(fm(n.a)),
    b: pm(fm(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const l = a[s];
      if (l === i.a) return 1;
      if (l === i.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const L8 = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function F8(e) {
  var t;
  const n = getComputedStyle((t = h0(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function B8(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || F8(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || L8.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function fm(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (be(n, "Missing node"), B8(n)) return n;
  }
  return null;
}
function pm(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function mm(e) {
  const t = [];
  for (; e; )
    t.push(e), e = h0(e);
  return t;
}
function h0(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const v0 = 1, g0 = 2, b0 = 4, y0 = 8, z8 = $8() === "coarse";
let Yt = [], Br = !1, ar = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map();
const Xo = /* @__PURE__ */ new Set();
function H8(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, l = (a = ar.get(i)) !== null && a !== void 0 ? a : 0;
  return ar.set(i, l + 1), Xo.add(s), Ni(), function() {
    var d;
    xs.delete(e), Xo.delete(s);
    const p = (d = ar.get(i)) !== null && d !== void 0 ? d : 1;
    if (ar.set(i, p - 1), Ni(), p === 1 && ar.delete(i), Yt.includes(s)) {
      const m = Yt.indexOf(s);
      m >= 0 && Yt.splice(m, 1), Ld(), o("up", !0, null);
    }
  };
}
function W8(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ws(e);
  Br = !0, kd({
    target: t,
    x: n,
    y: r
  }), Ni(), Yt.length > 0 && (Ti("down", e), e.preventDefault(), w0(t) || e.stopImmediatePropagation());
}
function Sl(e) {
  const {
    x: t,
    y: n
  } = ws(e);
  if (Br && e.buttons === 0 && (Br = !1, Ti("up", e)), !Br) {
    const {
      target: r
    } = e;
    kd({
      target: r,
      x: t,
      y: n
    });
  }
  Ti("move", e), Ld(), Yt.length > 0 && e.preventDefault();
}
function Cl(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ws(e);
  xs.clear(), Br = !1, Yt.length > 0 && (e.preventDefault(), w0(t) || e.stopImmediatePropagation()), Ti("up", e), kd({
    target: t,
    x: n,
    y: r
  }), Ld(), Ni();
}
function w0(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute(Qe.resizeHandle))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function kd({
  target: e,
  x: t,
  y: n
}) {
  Yt.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), Xo.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: i
    } = o, s = a.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: d,
      top: p
    } = s, m = z8 ? i.coarse : i.fine;
    if (t >= c - m && t <= d + m && n >= p - m && n <= l + m) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      k8(r, a) > 0) {
        let b = r, v = !1;
        for (; b && !b.contains(a); ) {
          if (j8(b.getBoundingClientRect(), s)) {
            v = !0;
            break;
          }
          b = b.parentElement;
        }
        if (v)
          return;
      }
      Yt.push(o);
    }
  });
}
function _l(e, t) {
  xs.set(e, t);
}
function Ld() {
  let e = !1, t = !1;
  Yt.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  xs.forEach((r) => {
    n |= r;
  }), e && t ? xl("intersection", n) : e ? xl("horizontal", n) : t ? xl("vertical", n) : I8();
}
let El = new AbortController();
function Ni() {
  El.abort(), El = new AbortController();
  const e = {
    capture: !0,
    signal: El.signal
  };
  Xo.size && (Br ? (Yt.length > 0 && ar.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("contextmenu", Cl, e), r.addEventListener("pointerleave", Sl, e), r.addEventListener("pointermove", Sl, e));
  }), window.addEventListener("pointerup", Cl, e), window.addEventListener("pointercancel", Cl, e)) : ar.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("pointerdown", W8, e), r.addEventListener("pointermove", Sl, e));
  }));
}
function Ti(e, t) {
  Xo.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = Yt.includes(n);
    r(e, o, t);
  });
}
function V8() {
  const [e, t] = yt(0);
  return dt(() => t((n) => n + 1), []);
}
function be(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
function pr(e, t, n = $d) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function _n(e, t, n = $d) {
  return pr(e, t, n) === 0;
}
function Mt(e, t, n) {
  return pr(e, t, n) === 0;
}
function G8(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!Mt(o, a, n))
      return !1;
  }
  return !0;
}
function $r({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  be(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = r;
  if (pr(n, s) < 0)
    if (a) {
      const l = (o + s) / 2;
      pr(n, l) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed($d)), n;
}
function Ao({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (Mt(e, 0))
    return t;
  const i = [...t], [s, l] = r;
  be(s != null, "Invalid first pivot index"), be(l != null, "Invalid second pivot index");
  let c = 0;
  if (a === "keyboard") {
    {
      const p = e < 0 ? l : s, m = n[p];
      be(m, `Panel constraints not found for index ${p}`);
      const {
        collapsedSize: h = 0,
        collapsible: b,
        minSize: v = 0
      } = m;
      if (b) {
        const g = t[p];
        if (be(g != null, `Previous layout not found for panel index ${p}`), Mt(g, h)) {
          const y = v - g;
          pr(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
    {
      const p = e < 0 ? s : l, m = n[p];
      be(m, `No panel constraints found for index ${p}`);
      const {
        collapsedSize: h = 0,
        collapsible: b,
        minSize: v = 0
      } = m;
      if (b) {
        const g = t[p];
        if (be(g != null, `Previous layout not found for panel index ${p}`), Mt(g, v)) {
          const y = g - h;
          pr(y, Math.abs(e)) > 0 && (e = e < 0 ? 0 - y : y);
        }
      }
    }
  }
  {
    const p = e < 0 ? 1 : -1;
    let m = e < 0 ? l : s, h = 0;
    for (; ; ) {
      const v = t[m];
      be(v != null, `Previous layout not found for panel index ${m}`);
      const y = $r({
        panelConstraints: n,
        panelIndex: m,
        size: 100
      }) - v;
      if (h += y, m += p, m < 0 || m >= n.length)
        break;
    }
    const b = Math.min(Math.abs(e), Math.abs(h));
    e = e < 0 ? 0 - b : b;
  }
  {
    let m = e < 0 ? s : l;
    for (; m >= 0 && m < n.length; ) {
      const h = Math.abs(e) - Math.abs(c), b = t[m];
      be(b != null, `Previous layout not found for panel index ${m}`);
      const v = b - h, g = $r({
        panelConstraints: n,
        panelIndex: m,
        size: v
      });
      if (!Mt(b, g) && (c += b - g, i[m] = g, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? m-- : m++;
    }
  }
  if (G8(o, i))
    return o;
  {
    const p = e < 0 ? l : s, m = t[p];
    be(m != null, `Previous layout not found for panel index ${p}`);
    const h = m + c, b = $r({
      panelConstraints: n,
      panelIndex: p,
      size: h
    });
    if (i[p] = b, !Mt(b, h)) {
      let v = h - b, y = e < 0 ? l : s;
      for (; y >= 0 && y < n.length; ) {
        const w = i[y];
        be(w != null, `Previous layout not found for panel index ${y}`);
        const x = w + v, S = $r({
          panelConstraints: n,
          panelIndex: y,
          size: x
        });
        if (Mt(w, S) || (v -= S - w, i[y] = S), Mt(v, 0))
          break;
        e > 0 ? y-- : y++;
      }
    }
  }
  const d = i.reduce((p, m) => m + p, 0);
  return Mt(d, 100) ? i : o;
}
function U8({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, i = 0;
  const s = n[0];
  be(s != null, "No pivot index found"), t.forEach((p, m) => {
    const {
      constraints: h
    } = p, {
      maxSize: b = 100,
      minSize: v = 0
    } = h;
    m === s ? (r = v, o = b) : (a += v, i += b);
  });
  const l = Math.min(o, 100 - a), c = Math.max(r, 100 - i), d = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: d
  };
}
function Jo(e, t = document) {
  return Array.from(t.querySelectorAll(`[${Qe.resizeHandleId}][data-panel-group-id="${e}"]`));
}
function x0(e, t, n = document) {
  const o = Jo(e, n).findIndex((a) => a.getAttribute(Qe.resizeHandleId) === t);
  return o ?? null;
}
function S0(e, t, n) {
  const r = x0(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function C0(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function Ss(e, t = document) {
  const n = t.querySelector(`[${Qe.resizeHandleId}="${e}"]`);
  return n || null;
}
function K8(e, t, n, r = document) {
  var o, a, i, s;
  const l = Ss(t, r), c = Jo(e, r), d = l ? c.indexOf(l) : -1, p = (o = (a = n[d]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, m = (i = (s = n[d + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [p, m];
}
function Y8({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: i
}) {
  it({
    didWarnAboutMissingResizeHandle: !1
  }), ir(() => {
    if (!a)
      return;
    const s = Jo(n, a);
    for (let l = 0; l < o.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: d,
        valueNow: p
      } = U8({
        layout: r,
        panelsArray: o,
        pivotIndices: [l, l + 1]
      }), m = s[l];
      if (m != null) {
        const h = o[l];
        be(h, `No panel data found for index "${l}"`), m.setAttribute("aria-controls", h.id), m.setAttribute("aria-valuemax", "" + Math.round(c)), m.setAttribute("aria-valuemin", "" + Math.round(d)), m.setAttribute("aria-valuenow", p != null ? "" + Math.round(p) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), ft(() => {
    if (!a)
      return;
    const s = t.current;
    be(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = C0(n, a);
    be(c != null, `No group found for id "${n}"`);
    const d = Jo(n, a);
    be(d, `No resize handles found for group id "${n}"`);
    const p = d.map((m) => {
      const h = m.getAttribute(Qe.resizeHandleId);
      be(h, "Resize handle element has no handle id attribute");
      const [b, v] = K8(n, h, l, a);
      if (b == null || v == null)
        return () => {
        };
      const g = (y) => {
        if (!y.defaultPrevented)
          switch (y.key) {
            case "Enter": {
              y.preventDefault();
              const w = l.findIndex((x) => x.id === b);
              if (w >= 0) {
                const x = l[w];
                be(x, `No panel data found for index ${w}`);
                const S = r[w], {
                  collapsedSize: C = 0,
                  collapsible: E,
                  minSize: _ = 0
                } = x.constraints;
                if (S != null && E) {
                  const O = Ao({
                    delta: Mt(S, C) ? _ - C : C - S,
                    initialLayout: r,
                    panelConstraints: l.map((N) => N.constraints),
                    pivotIndices: S0(n, h, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== O && i(O);
                }
              }
              break;
            }
          }
      };
      return m.addEventListener("keydown", g), () => {
        m.removeEventListener("keydown", g);
      };
    });
    return () => {
      p.forEach((m) => m());
    };
  }, [a, e, t, n, r, o, i]);
}
function hm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function _0(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = ws(t);
  return n ? r : o;
}
function q8(e, t, n, r, o) {
  const a = n === "horizontal", i = Ss(t, o);
  be(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute(Qe.groupId);
  be(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const c = _0(n, e), d = C0(s, o);
  be(d, `No group element found for id "${s}"`);
  const p = d.getBoundingClientRect(), m = a ? p.width : p.height;
  return (c - l) / m * 100;
}
function X8(e, t, n, r, o, a) {
  if (f0(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = i ? 0 : s;
        break;
      case "ArrowLeft":
        l = i ? -s : 0;
        break;
      case "ArrowRight":
        l = i ? s : 0;
        break;
      case "ArrowUp":
        l = i ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return r == null ? 0 : q8(e, t, n, r, a);
}
function J8({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    be(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (r++, t[a] = s, o -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    be(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - r, c = o / l;
    r++, t[a] = c, o -= c;
  }
  return t;
}
function Or(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    be(a, `Panel data not found for index ${o}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = a, {
      collapsedSize: c = 0,
      collapsible: d
    } = s, p = n[l];
    if (p == null || r !== p) {
      n[l] = r;
      const {
        onCollapse: m,
        onExpand: h,
        onResize: b
      } = i;
      b && b(r, p), d && (m || h) && (h && (p == null || _n(p, c)) && !_n(r, c) && h(), m && (p == null || !_n(p, c)) && _n(r, c) && m());
    }
  });
}
function Wa(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function Z8({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const i = n[o];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function Q8(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function vm(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function E0(e) {
  return `react-resizable-panels:${e}`;
}
function P0(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function R0(e, t) {
  try {
    const n = E0(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function eK(e, t, n) {
  var r, o;
  const a = (r = R0(e, n)) !== null && r !== void 0 ? r : {}, i = P0(t);
  return (o = a[i]) !== null && o !== void 0 ? o : null;
}
function tK(e, t, n, r, o) {
  var a;
  const i = E0(e), s = P0(t), l = (a = R0(e, o)) !== null && a !== void 0 ? a : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(i, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function gm({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!Mt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      be(i != null, `No layout data found for index ${a}`);
      const s = 100 / r * i;
      n[a] = s;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    be(i != null, `No layout data found for index ${a}`);
    const s = $r({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (o += i - s, n[a] = s);
  }
  if (!Mt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      be(i != null, `No layout data found for index ${a}`);
      const s = i + o, l = $r({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== l && (o -= l - i, n[a] = l, Mt(o, 0)))
        break;
    }
  return n;
}
const nK = 100, Do = {
  getItem: (e) => (vm(Do), Do.getItem(e)),
  setItem: (e, t) => {
    vm(Do), Do.setItem(e, t);
  }
}, bm = {};
function N0({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = Do,
  style: c,
  tagName: d = "div",
  ...p
}) {
  const m = jd(a), h = it(null), [b, v] = yt(null), [g, y] = yt([]), w = V8(), x = it({}), S = it(/* @__PURE__ */ new Map()), C = it(0), E = it({
    autoSaveId: e,
    direction: r,
    dragState: b,
    id: m,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), _ = it({
    layout: g,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  it({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Lc(o, () => ({
    getId: () => E.current.id,
    getLayout: () => {
      const {
        layout: D
      } = _.current;
      return D;
    },
    setLayout: (D) => {
      const {
        onLayout: H
      } = E.current, {
        layout: U,
        panelDataArray: X
      } = _.current, A = gm({
        layout: D,
        panelConstraints: X.map((Y) => Y.constraints)
      });
      hm(U, A) || (y(A), _.current.layout = A, H && H(A), Or(X, A, x.current));
    }
  }), []), ir(() => {
    E.current.autoSaveId = e, E.current.direction = r, E.current.dragState = b, E.current.id = m, E.current.onLayout = i, E.current.storage = l;
  }), Y8({
    committedValuesRef: E,
    eagerValuesRef: _,
    groupId: m,
    layout: g,
    panelDataArray: _.current.panelDataArray,
    setLayout: y,
    panelGroupElement: h.current
  }), ft(() => {
    const {
      panelDataArray: D
    } = _.current;
    if (e) {
      if (g.length === 0 || g.length !== D.length)
        return;
      let H = bm[e];
      H == null && (H = Q8(tK, nK), bm[e] = H);
      const U = [...D], X = new Map(S.current);
      H(e, U, X, g, l);
    }
  }, [e, g, l]), ft(() => {
  });
  const O = dt((D) => {
    const {
      onLayout: H
    } = E.current, {
      layout: U,
      panelDataArray: X
    } = _.current;
    if (D.constraints.collapsible) {
      const A = X.map((oe) => oe.constraints), {
        collapsedSize: Y = 0,
        panelSize: Q,
        pivotIndices: te
      } = tr(X, D, U);
      if (be(Q != null, `Panel size not found for panel "${D.id}"`), !_n(Q, Y)) {
        S.current.set(D.id, Q);
        const J = Ir(X, D) === X.length - 1 ? Q - Y : Y - Q, q = Ao({
          delta: J,
          initialLayout: U,
          panelConstraints: A,
          pivotIndices: te,
          prevLayout: U,
          trigger: "imperative-api"
        });
        Wa(U, q) || (y(q), _.current.layout = q, H && H(q), Or(X, q, x.current));
      }
    }
  }, []), N = dt((D, H) => {
    const {
      onLayout: U
    } = E.current, {
      layout: X,
      panelDataArray: A
    } = _.current;
    if (D.constraints.collapsible) {
      const Y = A.map((z) => z.constraints), {
        collapsedSize: Q = 0,
        panelSize: te = 0,
        minSize: oe = 0,
        pivotIndices: J
      } = tr(A, D, X), q = H ?? oe;
      if (_n(te, Q)) {
        const z = S.current.get(D.id), ae = z != null && z >= q ? z : q, ve = Ir(A, D) === A.length - 1 ? te - ae : ae - te, pe = Ao({
          delta: ve,
          initialLayout: X,
          panelConstraints: Y,
          pivotIndices: J,
          prevLayout: X,
          trigger: "imperative-api"
        });
        Wa(X, pe) || (y(pe), _.current.layout = pe, U && U(pe), Or(A, pe, x.current));
      }
    }
  }, []), B = dt((D) => {
    const {
      layout: H,
      panelDataArray: U
    } = _.current, {
      panelSize: X
    } = tr(U, D, H);
    return be(X != null, `Panel size not found for panel "${D.id}"`), X;
  }, []), M = dt((D, H) => {
    const {
      panelDataArray: U
    } = _.current, X = Ir(U, D);
    return Z8({
      defaultSize: H,
      dragState: b,
      layout: g,
      panelData: U,
      panelIndex: X
    });
  }, [b, g]), k = dt((D) => {
    const {
      layout: H,
      panelDataArray: U
    } = _.current, {
      collapsedSize: X = 0,
      collapsible: A,
      panelSize: Y
    } = tr(U, D, H);
    return be(Y != null, `Panel size not found for panel "${D.id}"`), A === !0 && _n(Y, X);
  }, []), V = dt((D) => {
    const {
      layout: H,
      panelDataArray: U
    } = _.current, {
      collapsedSize: X = 0,
      collapsible: A,
      panelSize: Y
    } = tr(U, D, H);
    return be(Y != null, `Panel size not found for panel "${D.id}"`), !A || pr(Y, X) > 0;
  }, []), $ = dt((D) => {
    const {
      panelDataArray: H
    } = _.current;
    H.push(D), H.sort((U, X) => {
      const A = U.order, Y = X.order;
      return A == null && Y == null ? 0 : A == null ? -1 : Y == null ? 1 : A - Y;
    }), _.current.panelDataArrayChanged = !0, w();
  }, [w]);
  ir(() => {
    if (_.current.panelDataArrayChanged) {
      _.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: D,
        onLayout: H,
        storage: U
      } = E.current, {
        layout: X,
        panelDataArray: A
      } = _.current;
      let Y = null;
      if (D) {
        const te = eK(D, A, U);
        te && (S.current = new Map(Object.entries(te.expandToSizes)), Y = te.layout);
      }
      Y == null && (Y = J8({
        panelDataArray: A
      }));
      const Q = gm({
        layout: Y,
        panelConstraints: A.map((te) => te.constraints)
      });
      hm(X, Q) || (y(Q), _.current.layout = Q, H && H(Q), Or(A, Q, x.current));
    }
  }), ir(() => {
    const D = _.current;
    return () => {
      D.layout = [];
    };
  }, []);
  const K = dt((D) => {
    let H = !1;
    const U = h.current;
    return U && window.getComputedStyle(U, null).getPropertyValue("direction") === "rtl" && (H = !0), function(A) {
      A.preventDefault();
      const Y = h.current;
      if (!Y)
        return () => null;
      const {
        direction: Q,
        dragState: te,
        id: oe,
        keyboardResizeBy: J,
        onLayout: q
      } = E.current, {
        layout: z,
        panelDataArray: ae
      } = _.current, {
        initialLayout: ce
      } = te ?? {}, ve = S0(oe, D, Y);
      let pe = X8(A, D, Q, te, J, Y);
      const ue = Q === "horizontal";
      ue && H && (pe = -pe);
      const Re = ae.map((We) => We.constraints), Be = Ao({
        delta: pe,
        initialLayout: ce ?? z,
        panelConstraints: Re,
        pivotIndices: ve,
        prevLayout: z,
        trigger: f0(A) ? "keyboard" : "mouse-or-touch"
      }), Ne = !Wa(z, Be);
      (p0(A) || m0(A)) && C.current != pe && (C.current = pe, !Ne && pe !== 0 ? ue ? _l(D, pe < 0 ? v0 : g0) : _l(D, pe < 0 ? b0 : y0) : _l(D, 0)), Ne && (y(Be), _.current.layout = Be, q && q(Be), Or(ae, Be, x.current));
    };
  }, []), G = dt((D, H) => {
    const {
      onLayout: U
    } = E.current, {
      layout: X,
      panelDataArray: A
    } = _.current, Y = A.map((z) => z.constraints), {
      panelSize: Q,
      pivotIndices: te
    } = tr(A, D, X);
    be(Q != null, `Panel size not found for panel "${D.id}"`);
    const J = Ir(A, D) === A.length - 1 ? Q - H : H - Q, q = Ao({
      delta: J,
      initialLayout: X,
      panelConstraints: Y,
      pivotIndices: te,
      prevLayout: X,
      trigger: "imperative-api"
    });
    Wa(X, q) || (y(q), _.current.layout = q, U && U(q), Or(A, q, x.current));
  }, []), F = dt((D, H) => {
    const {
      layout: U,
      panelDataArray: X
    } = _.current, {
      collapsedSize: A = 0,
      collapsible: Y
    } = H, {
      collapsedSize: Q = 0,
      collapsible: te,
      maxSize: oe = 100,
      minSize: J = 0
    } = D.constraints, {
      panelSize: q
    } = tr(X, D, U);
    q != null && (Y && te && _n(q, A) ? _n(A, Q) || G(D, Q) : q < J ? G(D, J) : q > oe && G(D, oe));
  }, [G]), I = dt((D, H) => {
    const {
      direction: U
    } = E.current, {
      layout: X
    } = _.current;
    if (!h.current)
      return;
    const A = Ss(D, h.current);
    be(A, `Drag handle element not found for id "${D}"`);
    const Y = _0(U, H);
    v({
      dragHandleId: D,
      dragHandleRect: A.getBoundingClientRect(),
      initialCursorPosition: Y,
      initialLayout: X
    });
  }, []), L = dt(() => {
    v(null);
  }, []), ne = dt((D) => {
    const {
      panelDataArray: H
    } = _.current, U = Ir(H, D);
    U >= 0 && (H.splice(U, 1), delete x.current[D.id], _.current.panelDataArrayChanged = !0, w());
  }, [w]), re = Fc(() => ({
    collapsePanel: O,
    direction: r,
    dragState: b,
    expandPanel: N,
    getPanelSize: B,
    getPanelStyle: M,
    groupId: m,
    isPanelCollapsed: k,
    isPanelExpanded: V,
    reevaluatePanelConstraints: F,
    registerPanel: $,
    registerResizeHandle: K,
    resizePanel: G,
    startDragging: I,
    stopDragging: L,
    unregisterPanel: ne,
    panelGroupElement: h.current
  }), [O, b, r, N, B, M, m, k, V, F, $, K, G, I, L, ne]), j = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return En(ys.Provider, {
    value: re
  }, En(d, {
    ...p,
    children: t,
    className: n,
    id: a,
    ref: h,
    style: {
      ...j,
      ...c
    },
    // CSS selectors
    [Qe.group]: "",
    [Qe.groupDirection]: r,
    [Qe.groupId]: m
  }));
}
const T0 = vr((e, t) => En(N0, {
  ...e,
  forwardedRef: t
}));
N0.displayName = "PanelGroup";
T0.displayName = "forwardRef(PanelGroup)";
function Ir(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function tr(e, t, n) {
  const r = Ir(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], i = n[r];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function rK({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  ft(() => {
    if (e || n == null || r == null)
      return;
    const o = Ss(t, r);
    if (o == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = o.getAttribute(Qe.groupId);
            be(s, `No group element found for id "${s}"`);
            const l = Jo(s, r), c = x0(s, t, r);
            be(c !== null, `No resize element found for id "${t}"`);
            const d = i.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[d].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function M0({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onClick: i,
  onDragging: s,
  onFocus: l,
  onPointerDown: c,
  onPointerUp: d,
  style: p = {},
  tabIndex: m = 0,
  tagName: h = "div",
  ...b
}) {
  var v, g;
  const y = it(null), w = it({
    onClick: i,
    onDragging: s,
    onPointerDown: c,
    onPointerUp: d
  });
  ft(() => {
    w.current.onClick = i, w.current.onDragging = s, w.current.onPointerDown = c, w.current.onPointerUp = d;
  });
  const x = Tn(ys);
  if (x === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: S,
    groupId: C,
    registerResizeHandle: E,
    startDragging: _,
    stopDragging: O,
    panelGroupElement: N
  } = x, B = jd(o), [M, k] = yt("inactive"), [V, $] = yt(!1), [K, G] = yt(null), F = it({
    state: M
  });
  ir(() => {
    F.current.state = M;
  }), ft(() => {
    if (n)
      G(null);
    else {
      const re = E(B);
      G(() => re);
    }
  }, [n, B, E]);
  const I = (v = r == null ? void 0 : r.coarse) !== null && v !== void 0 ? v : 15, L = (g = r == null ? void 0 : r.fine) !== null && g !== void 0 ? g : 5;
  return ft(() => {
    if (n || K == null)
      return;
    const re = y.current;
    be(re, "Element ref not attached");
    let j = !1;
    return H8(B, re, S, {
      coarse: I,
      fine: L
    }, (H, U, X) => {
      if (!U) {
        k("inactive");
        return;
      }
      switch (H) {
        case "down": {
          k("drag"), j = !1, be(X, 'Expected event to be defined for "down" action'), _(B, X);
          const {
            onDragging: A,
            onPointerDown: Y
          } = w.current;
          A == null || A(!0), Y == null || Y();
          break;
        }
        case "move": {
          const {
            state: A
          } = F.current;
          j = !0, A !== "drag" && k("hover"), be(X, 'Expected event to be defined for "move" action'), K(X);
          break;
        }
        case "up": {
          k("hover"), O();
          const {
            onClick: A,
            onDragging: Y,
            onPointerUp: Q
          } = w.current;
          Y == null || Y(!1), Q == null || Q(), j || A == null || A();
          break;
        }
      }
    });
  }, [I, S, n, L, E, B, K, _, O]), rK({
    disabled: n,
    handleId: B,
    resizeHandler: K,
    panelGroupElement: N
  }), En(h, {
    ...b,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      $(!1), a == null || a();
    },
    onFocus: () => {
      $(!0), l == null || l();
    },
    ref: y,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...p
    },
    tabIndex: m,
    // CSS selectors
    [Qe.groupDirection]: S,
    [Qe.groupId]: C,
    [Qe.resizeHandle]: "",
    [Qe.resizeHandleActive]: M === "drag" ? "pointer" : V ? "keyboard" : void 0,
    [Qe.resizeHandleEnabled]: !n,
    [Qe.resizeHandleId]: B,
    [Qe.resizeHandleState]: M
  });
}
M0.displayName = "PanelResizeHandle";
const Z7 = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx(
  T0,
  {
    className: T("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
    ...t
  }
), Q7 = d0, eq = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ f.jsx(
  M0,
  {
    className: T(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ f.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ f.jsx(X_, { className: "h-2.5 w-2.5" }) })
  }
);
function Zo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function oK(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fd = "ScrollArea", [O0, tq] = Fe(Fd), [aK, Ht] = O0(Fd), A0 = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...i
    } = e, [s, l] = u.useState(null), [c, d] = u.useState(null), [p, m] = u.useState(null), [h, b] = u.useState(null), [v, g] = u.useState(null), [y, w] = u.useState(0), [x, S] = u.useState(0), [C, E] = u.useState(!1), [_, O] = u.useState(!1), N = se(t, (M) => l(M)), B = Qt(o);
    return /* @__PURE__ */ f.jsx(
      aK,
      {
        scope: n,
        type: r,
        dir: B,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: c,
        onViewportChange: d,
        content: p,
        onContentChange: m,
        scrollbarX: h,
        onScrollbarXChange: b,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: E,
        scrollbarY: v,
        onScrollbarYChange: g,
        scrollbarYEnabled: _,
        onScrollbarYEnabledChange: O,
        onCornerWidthChange: w,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            dir: B,
            ...i,
            ref: N,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": x + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
A0.displayName = Fd;
var D0 = "ScrollAreaViewport", I0 = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, i = Ht(D0, n), s = u.useRef(null), l = se(t, s, i.onViewportChange);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ f.jsx(
        Z.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ f.jsx("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
I0.displayName = D0;
var wn = "ScrollAreaScrollbar", Bd = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ht(wn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
    return u.useEffect(() => (s ? a(!0) : i(!0), () => {
      s ? a(!1) : i(!1);
    }), [s, a, i]), o.type === "hover" ? /* @__PURE__ */ f.jsx(iK, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ f.jsx(sK, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ f.jsx($0, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ f.jsx(zd, { ...r, ref: t }) : null;
  }
);
Bd.displayName = wn;
var iK = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ht(wn, e.__scopeScrollArea), [a, i] = u.useState(!1);
  return u.useEffect(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, d = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", d), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f.jsx(Ye, { present: n || a, children: /* @__PURE__ */ f.jsx(
    $0,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), sK = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Ht(wn, e.__scopeScrollArea), a = e.orientation === "horizontal", i = _s(() => l("SCROLL_END"), 100), [s, l] = oK("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return u.useEffect(() => {
    if (s === "idle") {
      const c = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(c);
    }
  }, [s, o.scrollHideDelay, l]), u.useEffect(() => {
    const c = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let p = c[d];
      const m = () => {
        const h = c[d];
        p !== h && (l("SCROLL"), i()), p = h;
      };
      return c.addEventListener("scroll", m), () => c.removeEventListener("scroll", m);
    }
  }, [o.viewport, a, l, i]), /* @__PURE__ */ f.jsx(Ye, { present: n || s !== "hidden", children: /* @__PURE__ */ f.jsx(
    zd,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: W(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: W(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), $0 = u.forwardRef((e, t) => {
  const n = Ht(wn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, i] = u.useState(!1), s = e.orientation === "horizontal", l = _s(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : d);
    }
  }, 10);
  return Xr(n.viewport, l), Xr(n.content, l), /* @__PURE__ */ f.jsx(Ye, { present: r || a, children: /* @__PURE__ */ f.jsx(
    zd,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), zd = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Ht(wn, e.__scopeScrollArea), a = u.useRef(null), i = u.useRef(0), [s, l] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), c = B0(s.viewport, s.content), d = {
    ...r,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (m) => i.current = m
  };
  function p(m, h) {
    return pK(m, i.current, s, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ f.jsx(
    lK,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollLeft, h = ym(m, s, o.dir);
          a.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = p(m, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ f.jsx(
    cK,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const m = o.viewport.scrollTop, h = ym(m, s);
          a.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = p(m));
      }
    }
  ) : null;
}), lK = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Ht(wn, e.__scopeScrollArea), [i, s] = u.useState(), l = u.useRef(null), c = se(t, l, a.onScrollbarXChange);
  return u.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ f.jsx(
    k0,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: c,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Cs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(m), H0(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Oi(i.paddingLeft),
            paddingEnd: Oi(i.paddingRight)
          }
        });
      }
    }
  );
}), cK = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Ht(wn, e.__scopeScrollArea), [i, s] = u.useState(), l = u.useRef(null), c = se(t, l, a.onScrollbarYChange);
  return u.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ f.jsx(
    k0,
    {
      "data-orientation": "vertical",
      ...o,
      ref: c,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Cs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(m), H0(m, p) && d.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && i && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Oi(i.paddingTop),
            paddingEnd: Oi(i.paddingBottom)
          }
        });
      }
    }
  );
}), [uK, j0] = O0(wn), k0 = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: c,
    onWheelScroll: d,
    onResize: p,
    ...m
  } = e, h = Ht(wn, n), [b, v] = u.useState(null), g = se(t, (N) => v(N)), y = u.useRef(null), w = u.useRef(""), x = h.viewport, S = r.content - r.viewport, C = Te(d), E = Te(l), _ = _s(p, 10);
  function O(N) {
    if (y.current) {
      const B = N.clientX - y.current.left, M = N.clientY - y.current.top;
      c({ x: B, y: M });
    }
  }
  return u.useEffect(() => {
    const N = (B) => {
      const M = B.target;
      (b == null ? void 0 : b.contains(M)) && C(B, S);
    };
    return document.addEventListener("wheel", N, { passive: !1 }), () => document.removeEventListener("wheel", N, { passive: !1 });
  }, [x, b, S, C]), u.useEffect(E, [r, E]), Xr(b, _), Xr(h.content, _), /* @__PURE__ */ f.jsx(
    uK,
    {
      scope: n,
      scrollbar: b,
      hasThumb: o,
      onThumbChange: Te(a),
      onThumbPointerUp: Te(i),
      onThumbPositionChange: E,
      onThumbPointerDown: Te(s),
      children: /* @__PURE__ */ f.jsx(
        Z.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: W(e.onPointerDown, (N) => {
            N.button === 0 && (N.target.setPointerCapture(N.pointerId), y.current = b.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), O(N));
          }),
          onPointerMove: W(e.onPointerMove, O),
          onPointerUp: W(e.onPointerUp, (N) => {
            const B = N.target;
            B.hasPointerCapture(N.pointerId) && B.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = w.current, h.viewport && (h.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), Mi = "ScrollAreaThumb", L0 = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = j0(Mi, e.__scopeScrollArea);
    return /* @__PURE__ */ f.jsx(Ye, { present: n || o.hasThumb, children: /* @__PURE__ */ f.jsx(dK, { ref: t, ...r }) });
  }
), dK = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Ht(Mi, n), i = j0(Mi, n), { onThumbPositionChange: s } = i, l = se(
      t,
      (p) => i.onThumbChange(p)
    ), c = u.useRef(void 0), d = _s(() => {
      c.current && (c.current(), c.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (d(), !c.current) {
            const h = mK(p, s);
            c.current = h, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, d, s]), /* @__PURE__ */ f.jsx(
      Z.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: W(e.onPointerDownCapture, (p) => {
          const h = p.target.getBoundingClientRect(), b = p.clientX - h.left, v = p.clientY - h.top;
          i.onThumbPointerDown({ x: b, y: v });
        }),
        onPointerUp: W(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
L0.displayName = Mi;
var Hd = "ScrollAreaCorner", F0 = u.forwardRef(
  (e, t) => {
    const n = Ht(Hd, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ f.jsx(fK, { ...e, ref: t }) : null;
  }
);
F0.displayName = Hd;
var fK = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Ht(Hd, n), [a, i] = u.useState(0), [s, l] = u.useState(0), c = !!(a && s);
  return Xr(o.scrollbarX, () => {
    var p;
    const d = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(d), l(d);
  }), Xr(o.scrollbarY, () => {
    var p;
    const d = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), c ? /* @__PURE__ */ f.jsx(
    Z.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Oi(e) {
  return e ? parseInt(e, 10) : 0;
}
function B0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Cs(e) {
  const t = B0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function pK(e, t, n, r = "ltr") {
  const o = Cs(n), a = o / 2, i = t || a, s = o - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, d = n.content - n.viewport, p = r === "ltr" ? [0, d] : [d * -1, 0];
  return z0([l, c], p)(e);
}
function ym(e, t, n = "ltr") {
  const r = Cs(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, i = t.content - t.viewport, s = a - r, l = n === "ltr" ? [0, i] : [i * -1, 0], c = Zo(e, l);
  return z0([0, i], [0, s])(c);
}
function z0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function H0(e, t) {
  return e > 0 && e < t;
}
var mK = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function _s(e, t) {
  const n = Te(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Xr(e, t) {
  const n = Te(t);
  Ke(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var W0 = A0, hK = I0, vK = F0;
const gK = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(W0, { ref: r, className: T("relative overflow-hidden", e), ...n, children: [
  /* @__PURE__ */ f.jsx(hK, { className: "h-full w-full rounded-[inherit]", children: t }),
  /* @__PURE__ */ f.jsx(V0, {}),
  /* @__PURE__ */ f.jsx(vK, {})
] }));
gK.displayName = W0.displayName;
const V0 = u.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.jsx(
  Bd,
  {
    ref: r,
    orientation: t,
    className: T(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.jsx(L0, { className: "relative flex-1 rounded-full bg-border" })
  }
));
V0.displayName = Bd.displayName;
var bK = [" ", "Enter", "ArrowUp", "ArrowDown"], yK = [" ", "Enter"], mr = "Select", [Es, Ps, wK] = Mn(mr), [ho, nq] = Fe(mr, [
  wK,
  bn
]), Rs = bn(), [xK, qn] = ho(mr), [SK, CK] = ho(mr), G0 = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: i,
    defaultValue: s,
    onValueChange: l,
    dir: c,
    name: d,
    autoComplete: p,
    disabled: m,
    required: h,
    form: b
  } = e, v = Rs(t), [g, y] = u.useState(null), [w, x] = u.useState(null), [S, C] = u.useState(!1), E = Qt(c), [_, O] = ze({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: mr
  }), [N, B] = ze({
    prop: i,
    defaultProp: s,
    onChange: l,
    caller: mr
  }), M = u.useRef(null), k = g ? b || !!g.closest("form") : !0, [V, $] = u.useState(/* @__PURE__ */ new Set()), K = Array.from(V).map((G) => G.props.value).join(";");
  return /* @__PURE__ */ f.jsx(fo, { ...v, children: /* @__PURE__ */ f.jsxs(
    xK,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: y,
      valueNode: w,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: Le(),
      value: N,
      onValueChange: B,
      open: _,
      onOpenChange: O,
      dir: E,
      triggerPointerDownPosRef: M,
      disabled: m,
      children: [
        /* @__PURE__ */ f.jsx(Es.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
          SK,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((G) => {
              $((F) => new Set(F).add(G));
            }, []),
            onNativeOptionRemove: u.useCallback((G) => {
              $((F) => {
                const I = new Set(F);
                return I.delete(G), I;
              });
            }, []),
            children: n
          }
        ) }),
        k ? /* @__PURE__ */ f.jsxs(
          vS,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: d,
            autoComplete: p,
            value: N,
            onChange: (G) => B(G.target.value),
            disabled: m,
            form: b,
            children: [
              N === void 0 ? /* @__PURE__ */ f.jsx("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
G0.displayName = mr;
var U0 = "SelectTrigger", K0 = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Rs(n), i = qn(U0, n), s = i.disabled || r, l = se(t, i.onTriggerChange), c = Ps(n), d = u.useRef("touch"), [p, m, h] = bS((v) => {
      const g = c().filter((x) => !x.disabled), y = g.find((x) => x.value === i.value), w = yS(g, v, y);
      w !== void 0 && i.onValueChange(w.value);
    }), b = (v) => {
      s || (i.onOpenChange(!0), h()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ f.jsx(po, { asChild: !0, ...a, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": gS(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: W(o.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && b(v);
        }),
        onPointerDown: W(o.onPointerDown, (v) => {
          d.current = v.pointerType;
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (b(v), v.preventDefault());
        }),
        onKeyDown: W(o.onKeyDown, (v) => {
          const g = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && m(v.key), !(g && v.key === " ") && bK.includes(v.key) && (b(), v.preventDefault());
        })
      }
    ) });
  }
);
K0.displayName = U0;
var Y0 = "SelectValue", q0 = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: i = "", ...s } = e, l = qn(Y0, n), { onValueNodeHasChildrenChange: c } = l, d = a !== void 0, p = se(t, l.onValueNodeChange);
    return Ke(() => {
      c(d);
    }, [c, d]), /* @__PURE__ */ f.jsx(
      Z.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: gS(l.value) ? /* @__PURE__ */ f.jsx(f.Fragment, { children: i }) : a
      }
    );
  }
);
q0.displayName = Y0;
var _K = "SelectIcon", X0 = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
X0.displayName = _K;
var EK = "SelectPortal", J0 = (e) => /* @__PURE__ */ f.jsx(eo, { asChild: !0, ...e });
J0.displayName = EK;
var hr = "SelectContent", Z0 = u.forwardRef(
  (e, t) => {
    const n = qn(hr, e.__scopeSelect), [r, o] = u.useState();
    if (Ke(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? ea.createPortal(
        /* @__PURE__ */ f.jsx(Q0, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx(Es.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ f.jsx(eS, { ...e, ref: t });
  }
);
Z0.displayName = hr;
var Gt = 10, [Q0, Xn] = ho(hr), PK = "SelectContentImpl", RK = /* @__PURE__ */ Bn("SelectContent.RemoveScroll"), eS = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: b,
      hideWhenDetached: v,
      avoidCollisions: g,
      //
      ...y
    } = e, w = qn(hr, n), [x, S] = u.useState(null), [C, E] = u.useState(null), _ = se(t, (A) => S(A)), [O, N] = u.useState(null), [B, M] = u.useState(
      null
    ), k = Ps(n), [V, $] = u.useState(!1), K = u.useRef(!1);
    u.useEffect(() => {
      if (x) return Wi(x);
    }, [x]), zi();
    const G = u.useCallback(
      (A) => {
        const [Y, ...Q] = k().map((J) => J.ref.current), [te] = Q.slice(-1), oe = document.activeElement;
        for (const J of A)
          if (J === oe || (J == null || J.scrollIntoView({ block: "nearest" }), J === Y && C && (C.scrollTop = 0), J === te && C && (C.scrollTop = C.scrollHeight), J == null || J.focus(), document.activeElement !== oe)) return;
      },
      [k, C]
    ), F = u.useCallback(
      () => G([O, x]),
      [G, O, x]
    );
    u.useEffect(() => {
      V && F();
    }, [V, F]);
    const { onOpenChange: I, triggerPointerDownPosRef: L } = w;
    u.useEffect(() => {
      if (x) {
        let A = { x: 0, y: 0 };
        const Y = (te) => {
          var oe, J;
          A = {
            x: Math.abs(Math.round(te.pageX) - (((oe = L.current) == null ? void 0 : oe.x) ?? 0)),
            y: Math.abs(Math.round(te.pageY) - (((J = L.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Q = (te) => {
          A.x <= 10 && A.y <= 10 ? te.preventDefault() : x.contains(te.target) || I(!1), document.removeEventListener("pointermove", Y), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [x, I, L]), u.useEffect(() => {
      const A = () => I(!1);
      return window.addEventListener("blur", A), window.addEventListener("resize", A), () => {
        window.removeEventListener("blur", A), window.removeEventListener("resize", A);
      };
    }, [I]);
    const [ne, re] = bS((A) => {
      const Y = k().filter((oe) => !oe.disabled), Q = Y.find((oe) => oe.ref.current === document.activeElement), te = yS(Y, A, Q);
      te && setTimeout(() => te.ref.current.focus());
    }), j = u.useCallback(
      (A, Y, Q) => {
        const te = !K.current && !Q;
        (w.value !== void 0 && w.value === Y || te) && (N(A), te && (K.current = !0));
      },
      [w.value]
    ), D = u.useCallback(() => x == null ? void 0 : x.focus(), [x]), H = u.useCallback(
      (A, Y, Q) => {
        const te = !K.current && !Q;
        (w.value !== void 0 && w.value === Y || te) && M(A);
      },
      [w.value]
    ), U = r === "popper" ? _c : tS, X = U === _c ? {
      side: s,
      sideOffset: l,
      align: c,
      alignOffset: d,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: h,
      sticky: b,
      hideWhenDetached: v,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ f.jsx(
      Q0,
      {
        scope: n,
        content: x,
        viewport: C,
        onViewportChange: E,
        itemRefCallback: j,
        selectedItem: O,
        onItemLeave: D,
        itemTextRefCallback: H,
        focusSelectedItem: F,
        selectedItemText: B,
        position: r,
        isPositioned: V,
        searchRef: ne,
        children: /* @__PURE__ */ f.jsx(ra, { as: RK, allowPinchZoom: !0, children: /* @__PURE__ */ f.jsx(
          na,
          {
            asChild: !0,
            trapped: w.open,
            onMountAutoFocus: (A) => {
              A.preventDefault();
            },
            onUnmountAutoFocus: W(o, (A) => {
              var Y;
              (Y = w.trigger) == null || Y.focus({ preventScroll: !0 }), A.preventDefault();
            }),
            children: /* @__PURE__ */ f.jsx(
              On,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: i,
                onFocusOutside: (A) => A.preventDefault(),
                onDismiss: () => w.onOpenChange(!1),
                children: /* @__PURE__ */ f.jsx(
                  U,
                  {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: (A) => A.preventDefault(),
                    ...y,
                    ...X,
                    onPlaced: () => $(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: W(y.onKeyDown, (A) => {
                      const Y = A.ctrlKey || A.altKey || A.metaKey;
                      if (A.key === "Tab" && A.preventDefault(), !Y && A.key.length === 1 && re(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
                        let te = k().filter((oe) => !oe.disabled).map((oe) => oe.ref.current);
                        if (["ArrowUp", "End"].includes(A.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
                          const oe = A.target, J = te.indexOf(oe);
                          te = te.slice(J + 1);
                        }
                        setTimeout(() => G(te)), A.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
eS.displayName = PK;
var NK = "SelectItemAlignedPosition", tS = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = qn(hr, n), i = Xn(hr, n), [s, l] = u.useState(null), [c, d] = u.useState(null), p = se(t, (_) => d(_)), m = Ps(n), h = u.useRef(!1), b = u.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: y, focusSelectedItem: w } = i, x = u.useCallback(() => {
    if (a.trigger && a.valueNode && s && c && v && g && y) {
      const _ = a.trigger.getBoundingClientRect(), O = c.getBoundingClientRect(), N = a.valueNode.getBoundingClientRect(), B = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const oe = B.left - O.left, J = N.left - oe, q = _.left - J, z = _.width + q, ae = Math.max(z, O.width), ce = window.innerWidth - Gt, ve = Zo(J, [
          Gt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Gt, ce - ae)
        ]);
        s.style.minWidth = z + "px", s.style.left = ve + "px";
      } else {
        const oe = O.right - B.right, J = window.innerWidth - N.right - oe, q = window.innerWidth - _.right - J, z = _.width + q, ae = Math.max(z, O.width), ce = window.innerWidth - Gt, ve = Zo(J, [
          Gt,
          Math.max(Gt, ce - ae)
        ]);
        s.style.minWidth = z + "px", s.style.right = ve + "px";
      }
      const M = m(), k = window.innerHeight - Gt * 2, V = v.scrollHeight, $ = window.getComputedStyle(c), K = parseInt($.borderTopWidth, 10), G = parseInt($.paddingTop, 10), F = parseInt($.borderBottomWidth, 10), I = parseInt($.paddingBottom, 10), L = K + G + V + I + F, ne = Math.min(g.offsetHeight * 5, L), re = window.getComputedStyle(v), j = parseInt(re.paddingTop, 10), D = parseInt(re.paddingBottom, 10), H = _.top + _.height / 2 - Gt, U = k - H, X = g.offsetHeight / 2, A = g.offsetTop + X, Y = K + G + A, Q = L - Y;
      if (Y <= H) {
        const oe = M.length > 0 && g === M[M.length - 1].ref.current;
        s.style.bottom = "0px";
        const J = c.clientHeight - v.offsetTop - v.offsetHeight, q = Math.max(
          U,
          X + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (oe ? D : 0) + J + F
        ), z = Y + q;
        s.style.height = z + "px";
      } else {
        const oe = M.length > 0 && g === M[0].ref.current;
        s.style.top = "0px";
        const q = Math.max(
          H,
          K + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (oe ? j : 0) + X
        ) + Q;
        s.style.height = q + "px", v.scrollTop = Y - H + v.offsetTop;
      }
      s.style.margin = `${Gt}px 0`, s.style.minHeight = ne + "px", s.style.maxHeight = k + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    c,
    v,
    g,
    y,
    a.dir,
    r
  ]);
  Ke(() => x(), [x]);
  const [S, C] = u.useState();
  Ke(() => {
    c && C(window.getComputedStyle(c).zIndex);
  }, [c]);
  const E = u.useCallback(
    (_) => {
      _ && b.current === !0 && (x(), w == null || w(), b.current = !1);
    },
    [x, w]
  );
  return /* @__PURE__ */ f.jsx(
    MK,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ f.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ f.jsx(
            Z.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
tS.displayName = NK;
var TK = "SelectPopperPosition", _c = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Gt,
    ...a
  } = e, i = Rs(n);
  return /* @__PURE__ */ f.jsx(
    va,
    {
      ...i,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
_c.displayName = TK;
var [MK, Wd] = ho(hr, {}), Ec = "SelectViewport", nS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Xn(Ec, n), i = Wd(Ec, n), s = se(t, a.onViewportChange), l = u.useRef(0);
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f.jsx(Es.Slot, { scope: n, children: /* @__PURE__ */ f.jsx(
        Z.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: W(o.onScroll, (c) => {
            const d = c.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = i;
            if (m != null && m.current && p) {
              const h = Math.abs(l.current - d.scrollTop);
              if (h > 0) {
                const b = window.innerHeight - Gt * 2, v = parseFloat(p.style.minHeight), g = parseFloat(p.style.height), y = Math.max(v, g);
                if (y < b) {
                  const w = y + h, x = Math.min(b, w), S = w - x;
                  p.style.height = x + "px", p.style.bottom === "0px" && (d.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
nS.displayName = Ec;
var rS = "SelectGroup", [OK, AK] = ho(rS), oS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Le();
    return /* @__PURE__ */ f.jsx(OK, { scope: n, id: o, children: /* @__PURE__ */ f.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
oS.displayName = rS;
var aS = "SelectLabel", iS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = AK(aS, n);
    return /* @__PURE__ */ f.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
iS.displayName = aS;
var Ai = "SelectItem", [DK, sS] = ho(Ai), lS = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...i
    } = e, s = qn(Ai, n), l = Xn(Ai, n), c = s.value === r, [d, p] = u.useState(a ?? ""), [m, h] = u.useState(!1), b = se(
      t,
      (w) => {
        var x;
        return (x = l.itemRefCallback) == null ? void 0 : x.call(l, w, r, o);
      }
    ), v = Le(), g = u.useRef("touch"), y = () => {
      o || (s.onValueChange(r), s.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f.jsx(
      DK,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: c,
        onItemTextChange: u.useCallback((w) => {
          p((x) => x || ((w == null ? void 0 : w.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f.jsx(
          Es.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ f.jsx(
              Z.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": c && m,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: b,
                onFocus: W(i.onFocus, () => h(!0)),
                onBlur: W(i.onBlur, () => h(!1)),
                onClick: W(i.onClick, () => {
                  g.current !== "mouse" && y();
                }),
                onPointerUp: W(i.onPointerUp, () => {
                  g.current === "mouse" && y();
                }),
                onPointerDown: W(i.onPointerDown, (w) => {
                  g.current = w.pointerType;
                }),
                onPointerMove: W(i.onPointerMove, (w) => {
                  var x;
                  g.current = w.pointerType, o ? (x = l.onItemLeave) == null || x.call(l) : g.current === "mouse" && w.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: W(i.onPointerLeave, (w) => {
                  var x;
                  w.currentTarget === document.activeElement && ((x = l.onItemLeave) == null || x.call(l));
                }),
                onKeyDown: W(i.onKeyDown, (w) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && w.key === " " || (yK.includes(w.key) && y(), w.key === " " && w.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
lS.displayName = Ai;
var Io = "SelectItemText", cS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, i = qn(Io, n), s = Xn(Io, n), l = sS(Io, n), c = CK(Io, n), [d, p] = u.useState(null), m = se(
      t,
      (y) => p(y),
      l.onItemTextChange,
      (y) => {
        var w;
        return (w = s.itemTextRefCallback) == null ? void 0 : w.call(s, y, l.value, l.disabled);
      }
    ), h = d == null ? void 0 : d.textContent, b = u.useMemo(
      () => /* @__PURE__ */ f.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = c;
    return Ke(() => (v(b), () => g(b)), [v, g, b]), /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(Z.span, { id: l.textId, ...a, ref: m }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? ea.createPortal(a.children, i.valueNode) : null
    ] });
  }
);
cS.displayName = Io;
var uS = "SelectItemIndicator", dS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return sS(uS, n).isSelected ? /* @__PURE__ */ f.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
dS.displayName = uS;
var Pc = "SelectScrollUpButton", fS = u.forwardRef((e, t) => {
  const n = Xn(Pc, e.__scopeSelect), r = Wd(Pc, e.__scopeSelect), [o, a] = u.useState(!1), i = se(t, r.onScrollButtonChange);
  return Ke(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollTop > 0;
        a(c);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    mS,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
fS.displayName = Pc;
var Rc = "SelectScrollDownButton", pS = u.forwardRef((e, t) => {
  const n = Xn(Rc, e.__scopeSelect), r = Wd(Rc, e.__scopeSelect), [o, a] = u.useState(!1), i = se(t, r.onScrollButtonChange);
  return Ke(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const c = l.scrollHeight - l.clientHeight, d = Math.ceil(l.scrollTop) < c;
        a(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f.jsx(
    mS,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
pS.displayName = Rc;
var mS = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Xn("SelectScrollButton", n), i = u.useRef(null), s = Ps(n), l = u.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Ke(() => {
    var d;
    const c = s().find((p) => p.ref.current === document.activeElement);
    (d = c == null ? void 0 : c.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ f.jsx(
    Z.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: W(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: W(o.onPointerMove, () => {
        var c;
        (c = a.onItemLeave) == null || c.call(a), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: W(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), IK = "SelectSeparator", hS = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
hS.displayName = IK;
var Nc = "SelectArrow", $K = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Rs(n), a = qn(Nc, n), i = Xn(Nc, n);
    return a.open && i.position === "popper" ? /* @__PURE__ */ f.jsx(ga, { ...o, ...r, ref: t }) : null;
  }
);
$K.displayName = Nc;
var jK = "SelectBubbleInput", vS = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = se(r, o), i = lo(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && d) {
        const p = new Event("change", { bubbles: !0 });
        d.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ f.jsx(
      Z.select,
      {
        ...n,
        style: { ...sx, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
vS.displayName = jK;
function gS(e) {
  return e === "" || e === void 0;
}
function bS(e) {
  const t = Te(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (i) => {
      const s = n.current + i;
      t(s), function l(c) {
        n.current = c, window.clearTimeout(r.current), c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(s);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function yS(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = kK(e, Math.max(a, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function kK(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var LK = G0, wS = K0, FK = q0, BK = X0, zK = J0, xS = Z0, HK = nS, WK = oS, SS = iS, CS = lS, VK = cS, GK = dS, _S = fS, ES = pS, PS = hS;
const rq = LK, oq = WK, aq = FK, UK = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  wS,
  {
    ref: r,
    className: T(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.jsx(BK, { asChild: !0, children: /* @__PURE__ */ f.jsx(Fi, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
UK.displayName = wS.displayName;
const RS = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  _S,
  {
    ref: n,
    className: T("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f.jsx(Y_, { className: "h-4 w-4" })
  }
));
RS.displayName = _S.displayName;
const NS = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  ES,
  {
    ref: n,
    className: T("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f.jsx(Fi, { className: "h-4 w-4" })
  }
));
NS.displayName = ES.displayName;
const KK = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.jsx(zK, { children: /* @__PURE__ */ f.jsxs(
  xS,
  {
    ref: o,
    className: T(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ f.jsx(RS, {}),
      /* @__PURE__ */ f.jsx(
        HK,
        {
          className: T(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f.jsx(NS, {})
    ]
  }
) }));
KK.displayName = xS.displayName;
const YK = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(SS, { ref: n, className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e), ...t }));
YK.displayName = SS.displayName;
const qK = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.jsxs(
  CS,
  {
    ref: r,
    className: T(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.jsx(GK, { children: /* @__PURE__ */ f.jsx(ta, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.jsx(VK, { children: t })
    ]
  }
));
qK.displayName = CS.displayName;
const XK = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(PS, { ref: n, className: T("-mx-1 my-1 h-px bg-muted", e), ...t }));
XK.displayName = PS.displayName;
var JK = "Separator", wm = "horizontal", ZK = ["horizontal", "vertical"], TS = u.forwardRef((e, t) => {
  const { decorative: n, orientation: r = wm, ...o } = e, a = QK(r) ? r : wm, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ f.jsx(
    Z.div,
    {
      "data-orientation": a,
      ...s,
      ...o,
      ref: t
    }
  );
});
TS.displayName = JK;
function QK(e) {
  return ZK.includes(e);
}
var MS = TS;
const OS = u.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.jsx(
  MS,
  {
    ref: o,
    decorative: n,
    orientation: t,
    className: T("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
  }
));
OS.displayName = MS.displayName;
const eY = oa, iq = Gi, sq = yr, tY = aa, AS = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  gr,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
AS.displayName = gr.displayName;
const nY = Dn(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), DS = u.forwardRef(
  ({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.jsxs(tY, { children: [
    /* @__PURE__ */ f.jsx(AS, {}),
    /* @__PURE__ */ f.jsxs(br, { ref: o, className: T(nY({ side: e }), t), ...r, children: [
      n,
      /* @__PURE__ */ f.jsxs(yr, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ f.jsx(qc, { className: "h-4 w-4" }),
        /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
DS.displayName = br.displayName;
const rY = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("flex flex-col space-y-2 text-center sm:text-left", e), ...t });
rY.displayName = "SheetHeader";
const oY = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: T("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
oY.displayName = "SheetFooter";
const aY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(to, { ref: n, className: T("text-lg font-semibold text-foreground", e), ...t }));
aY.displayName = to.displayName;
const iY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(no, { ref: n, className: T("text-sm text-muted-foreground", e), ...t }));
iY.displayName = no.displayName;
const Pl = 768;
function sY() {
  const [e, t] = u.useState(void 0);
  return u.useEffect(() => {
    const n = window.matchMedia(`(max-width: ${Pl - 1}px)`), r = () => {
      t(window.innerWidth < Pl);
    };
    return n.addEventListener("change", r), t(window.innerWidth < Pl), () => n.removeEventListener("change", r);
  }, []), !!e;
}
function xm({ className: e, ...t }) {
  return /* @__PURE__ */ f.jsx("div", { className: T("animate-pulse rounded-md bg-muted", e), ...t });
}
var [Ns, lq] = Fe("Tooltip", [
  bn
]), Ts = bn(), IS = "TooltipProvider", lY = 700, Tc = "tooltip.open", [cY, Vd] = Ns(IS), $S = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = lY,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, i = u.useRef(!0), s = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ f.jsx(
    cY,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), i.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: s,
      onPointerInTransitChange: u.useCallback((c) => {
        s.current = c;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
$S.displayName = IS;
var Qo = "Tooltip", [uY, Ms] = Ns(Qo), jS = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: i,
    delayDuration: s
  } = e, l = Vd(Qo, e.__scopeTooltip), c = Ts(t), [d, p] = u.useState(null), m = Le(), h = u.useRef(0), b = i ?? l.disableHoverableContent, v = s ?? l.delayDuration, g = u.useRef(!1), [y, w] = ze({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (_) => {
      _ ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Tc))) : l.onClose(), a == null || a(_);
    },
    caller: Qo
  }), x = u.useMemo(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [y]), S = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, w(!0);
  }, [w]), C = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, w(!1);
  }, [w]), E = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, w(!0), h.current = 0;
    }, v);
  }, [v, w]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ f.jsx(fo, { ...c, children: /* @__PURE__ */ f.jsx(
    uY,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: x,
      trigger: d,
      onTriggerChange: p,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? E() : S();
      }, [l.isOpenDelayedRef, E, S]),
      onTriggerLeave: u.useCallback(() => {
        b ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, b]),
      onOpen: S,
      onClose: C,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
jS.displayName = Qo;
var Mc = "TooltipTrigger", kS = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ms(Mc, n), a = Vd(Mc, n), i = Ts(n), s = u.useRef(null), l = se(t, s, o.onTriggerChange), c = u.useRef(!1), d = u.useRef(!1), p = u.useCallback(() => c.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ f.jsx(po, { asChild: !0, ...i, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: W(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: W(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: W(e.onPointerDown, () => {
          o.open && o.onClose(), c.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: W(e.onFocus, () => {
          c.current || o.onOpen();
        }),
        onBlur: W(e.onBlur, o.onClose),
        onClick: W(e.onClick, o.onClose)
      }
    ) });
  }
);
kS.displayName = Mc;
var dY = "TooltipPortal", [cq, fY] = Ns(dY, {
  forceMount: void 0
}), Jr = "TooltipContent", LS = u.forwardRef(
  (e, t) => {
    const n = fY(Jr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, i = Ms(Jr, e.__scopeTooltip);
    return /* @__PURE__ */ f.jsx(Ye, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ f.jsx(FS, { side: o, ...a, ref: t }) : /* @__PURE__ */ f.jsx(pY, { side: o, ...a, ref: t }) });
  }
), pY = u.forwardRef((e, t) => {
  const n = Ms(Jr, e.__scopeTooltip), r = Vd(Jr, e.__scopeTooltip), o = u.useRef(null), a = se(t, o), [i, s] = u.useState(null), { trigger: l, onClose: c } = n, d = o.current, { onPointerInTransitChange: p } = r, m = u.useCallback(() => {
    s(null), p(!1);
  }, [p]), h = u.useCallback(
    (b, v) => {
      const g = b.currentTarget, y = { x: b.clientX, y: b.clientY }, w = bY(y, g.getBoundingClientRect()), x = yY(y, w), S = wY(v.getBoundingClientRect()), C = SY([...x, ...S]);
      s(C), p(!0);
    },
    [p]
  );
  return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
    if (l && d) {
      const b = (g) => h(g, d), v = (g) => h(g, l);
      return l.addEventListener("pointerleave", b), d.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", b), d.removeEventListener("pointerleave", v);
      };
    }
  }, [l, d, h, m]), u.useEffect(() => {
    if (i) {
      const b = (v) => {
        const g = v.target, y = { x: v.clientX, y: v.clientY }, w = (l == null ? void 0 : l.contains(g)) || (d == null ? void 0 : d.contains(g)), x = !xY(y, i);
        w ? m() : x && (m(), c());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [l, d, i, c, m]), /* @__PURE__ */ f.jsx(FS, { ...e, ref: a });
}), [mY, hY] = Ns(Qo, { isInside: !1 }), vY = /* @__PURE__ */ Nm("TooltipContent"), FS = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: i,
      ...s
    } = e, l = Ms(Jr, n), c = Ts(n), { onClose: d } = l;
    return u.useEffect(() => (document.addEventListener(Tc, d), () => document.removeEventListener(Tc, d)), [d]), u.useEffect(() => {
      if (l.trigger) {
        const p = (m) => {
          const h = m.target;
          h != null && h.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ f.jsx(
      On,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: i,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ f.jsxs(
          va,
          {
            "data-state": l.stateAttribute,
            ...c,
            ...s,
            ref: t,
            style: {
              ...s.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ f.jsx(vY, { children: r }),
              /* @__PURE__ */ f.jsx(mY, { scope: n, isInside: !0, children: /* @__PURE__ */ f.jsx(lx, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
LS.displayName = Jr;
var BS = "TooltipArrow", gY = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ts(n);
    return hY(
      BS,
      n
    ).isInside ? null : /* @__PURE__ */ f.jsx(ga, { ...o, ...r, ref: t });
  }
);
gY.displayName = BS;
function bY(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function yY(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function wY(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function xY(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a], l = t[i], c = s.x, d = s.y, p = l.x, m = l.y;
    d > r != m > r && n < (p - c) * (r - d) / (m - d) + c && (o = !o);
  }
  return o;
}
function SY(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), CY(t);
}
function CY(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var _Y = $S, EY = jS, PY = kS, zS = LS;
const RY = _Y, NY = EY, TY = PY, HS = u.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.jsx(
  zS,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
HS.displayName = zS.displayName;
const MY = "sidebar:state", OY = 60 * 60 * 24 * 7, AY = "16rem", DY = "18rem", IY = "3rem", $Y = "b", WS = u.createContext(null);
function Os() {
  const e = u.useContext(WS);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const jY = u.forwardRef(({ defaultOpen: e = !0, open: t, onOpenChange: n, className: r, style: o, children: a, ...i }, s) => {
  const l = sY(), [c, d] = u.useState(!1), [p, m] = u.useState(e), h = t ?? p, b = u.useCallback(
    (w) => {
      const x = typeof w == "function" ? w(h) : w;
      n ? n(x) : m(x), document.cookie = `${MY}=${x}; path=/; max-age=${OY}`;
    },
    [n, h]
  ), v = u.useCallback(() => l ? d((w) => !w) : b((w) => !w), [l, b, d]);
  u.useEffect(() => {
    const w = (x) => {
      x.key === $Y && (x.metaKey || x.ctrlKey) && (x.preventDefault(), v());
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, [v]);
  const g = h ? "expanded" : "collapsed", y = u.useMemo(
    () => ({
      state: g,
      open: h,
      setOpen: b,
      isMobile: l,
      openMobile: c,
      setOpenMobile: d,
      toggleSidebar: v
    }),
    [g, h, b, l, c, d, v]
  );
  return /* @__PURE__ */ f.jsx(WS.Provider, { value: y, children: /* @__PURE__ */ f.jsx(RY, { delayDuration: 0, children: /* @__PURE__ */ f.jsx(
    "div",
    {
      style: {
        "--sidebar-width": AY,
        "--sidebar-width-icon": IY,
        ...o
      },
      className: T("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", r),
      ref: s,
      ...i,
      children: a
    }
  ) }) });
});
jY.displayName = "SidebarProvider";
const kY = u.forwardRef(({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: o, ...a }, i) => {
  const { isMobile: s, state: l, openMobile: c, setOpenMobile: d } = Os();
  return n === "none" ? /* @__PURE__ */ f.jsx(
    "div",
    {
      className: T("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", r),
      ref: i,
      ...a,
      children: o
    }
  ) : s ? /* @__PURE__ */ f.jsx(eY, { open: c, onOpenChange: d, ...a, children: /* @__PURE__ */ f.jsx(
    DS,
    {
      "data-sidebar": "sidebar",
      "data-mobile": "true",
      className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": DY
      },
      side: e,
      children: /* @__PURE__ */ f.jsx("div", { className: "flex h-full w-full flex-col", children: o })
    }
  ) }) : /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: i,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": l,
      "data-collapsible": l === "collapsed" ? n : "",
      "data-variant": t,
      "data-side": e,
      children: [
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: T(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ f.jsx(
          "div",
          {
            className: T(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              e === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              r
            ),
            ...a,
            children: /* @__PURE__ */ f.jsx(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children: o
              }
            )
          }
        )
      ]
    }
  );
});
kY.displayName = "Sidebar";
const LY = u.forwardRef(
  ({ className: e, onClick: t, ...n }, r) => {
    const { toggleSidebar: o } = Os();
    return /* @__PURE__ */ f.jsxs(
      Ui,
      {
        ref: r,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: T("h-7 w-7", e),
        onClick: (a) => {
          t == null || t(a), o();
        },
        ...n,
        children: [
          /* @__PURE__ */ f.jsx(J_, {}),
          /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
LY.displayName = "SidebarTrigger";
const FY = u.forwardRef(
  ({ className: e, ...t }, n) => {
    const { toggleSidebar: r } = Os();
    return /* @__PURE__ */ f.jsx(
      "button",
      {
        ref: n,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: r,
        title: "Toggle Sidebar",
        className: T(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          e
        ),
        ...t
      }
    );
  }
);
FY.displayName = "SidebarRail";
const BY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  "main",
  {
    ref: n,
    className: T(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e
    ),
    ...t
  }
));
BY.displayName = "SidebarInset";
const zY = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    Nw,
    {
      ref: n,
      "data-sidebar": "input",
      className: T(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        e
      ),
      ...t
    }
  )
);
zY.displayName = "SidebarInput";
const HY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, "data-sidebar": "header", className: T("flex flex-col gap-2 p-2", e), ...t }));
HY.displayName = "SidebarHeader";
const WY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, "data-sidebar": "footer", className: T("flex flex-col gap-2 p-2", e), ...t }));
WY.displayName = "SidebarFooter";
const VY = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    OS,
    {
      ref: n,
      "data-sidebar": "separator",
      className: T("mx-2 w-auto bg-sidebar-border", e),
      ...t
    }
  )
);
VY.displayName = "SidebarSeparator";
const GY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: n,
    "data-sidebar": "content",
    className: T(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e
    ),
    ...t
  }
));
GY.displayName = "SidebarContent";
const UY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: n,
    "data-sidebar": "group",
    className: T("relative flex w-full min-w-0 flex-col p-2", e),
    ...t
  }
));
UY.displayName = "SidebarGroup";
const KY = u.forwardRef(
  ({ className: e, asChild: t = !1, ...n }, r) => {
    const o = t ? Gn : "div";
    return /* @__PURE__ */ f.jsx(
      o,
      {
        ref: r,
        "data-sidebar": "group-label",
        className: T(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          e
        ),
        ...n
      }
    );
  }
);
KY.displayName = "SidebarGroupLabel";
const YY = u.forwardRef(
  ({ className: e, asChild: t = !1, ...n }, r) => {
    const o = t ? Gn : "button";
    return /* @__PURE__ */ f.jsx(
      o,
      {
        ref: r,
        "data-sidebar": "group-action",
        className: T(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          e
        ),
        ...n
      }
    );
  }
);
YY.displayName = "SidebarGroupAction";
const qY = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { ref: n, "data-sidebar": "group-content", className: T("w-full text-sm", e), ...t })
);
qY.displayName = "SidebarGroupContent";
const XY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("ul", { ref: n, "data-sidebar": "menu", className: T("flex w-full min-w-0 flex-col gap-1", e), ...t }));
XY.displayName = "SidebarMenu";
const JY = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("li", { ref: n, "data-sidebar": "menu-item", className: T("group/menu-item relative", e), ...t }));
JY.displayName = "SidebarMenuItem";
const ZY = Dn(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), QY = u.forwardRef(({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: o, className: a, ...i }, s) => {
  const l = e ? Gn : "button", { isMobile: c, state: d } = Os(), p = /* @__PURE__ */ f.jsx(
    l,
    {
      ref: s,
      "data-sidebar": "menu-button",
      "data-size": r,
      "data-active": t,
      className: T(ZY({ variant: n, size: r }), a),
      ...i
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ f.jsxs(NY, { children: [
    /* @__PURE__ */ f.jsx(TY, { asChild: !0, children: p }),
    /* @__PURE__ */ f.jsx(HS, { side: "right", align: "center", hidden: d !== "collapsed" || c, ...o })
  ] })) : p;
});
QY.displayName = "SidebarMenuButton";
const e6 = u.forwardRef(({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }, o) => {
  const a = t ? Gn : "button";
  return /* @__PURE__ */ f.jsx(
    a,
    {
      ref: o,
      "data-sidebar": "menu-action",
      className: T(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        e
      ),
      ...r
    }
  );
});
e6.displayName = "SidebarMenuAction";
const t6 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    "div",
    {
      ref: n,
      "data-sidebar": "menu-badge",
      className: T(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  )
);
t6.displayName = "SidebarMenuBadge";
const n6 = u.forwardRef(({ className: e, showIcon: t = !1, ...n }, r) => {
  const o = u.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      ref: r,
      "data-sidebar": "menu-skeleton",
      className: T("flex h-8 items-center gap-2 rounded-md px-2", e),
      ...n,
      children: [
        t && /* @__PURE__ */ f.jsx(xm, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ f.jsx(
          xm,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": o
            }
          }
        )
      ]
    }
  );
});
n6.displayName = "SidebarMenuSkeleton";
const r6 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    "ul",
    {
      ref: n,
      "data-sidebar": "menu-sub",
      className: T(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      ...t
    }
  )
);
r6.displayName = "SidebarMenuSub";
const o6 = u.forwardRef(({ ...e }, t) => /* @__PURE__ */ f.jsx("li", { ref: t, ...e }));
o6.displayName = "SidebarMenuSubItem";
const a6 = u.forwardRef(({ asChild: e = !1, size: t = "md", isActive: n, className: r, ...o }, a) => {
  const i = e ? Gn : "a";
  return /* @__PURE__ */ f.jsx(
    i,
    {
      ref: a,
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: T(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        r
      ),
      ...o
    }
  );
});
a6.displayName = "SidebarMenuSubButton";
var VS = ["PageUp", "PageDown"], GS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], US = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, vo = "Slider", [Oc, i6, s6] = Mn(vo), [KS, uq] = Fe(vo, [
  s6
]), [l6, As] = KS(vo), YS = u.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: i = "horizontal",
      disabled: s = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: d,
      onValueChange: p = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: h = !1,
      form: b,
      ...v
    } = e, g = u.useRef(/* @__PURE__ */ new Set()), y = u.useRef(0), x = i === "horizontal" ? c6 : u6, [S = [], C] = ze({
      prop: d,
      defaultProp: c,
      onChange: (M) => {
        var V;
        (V = [...g.current][y.current]) == null || V.focus(), p(M);
      }
    }), E = u.useRef(S);
    function _(M) {
      const k = h6(S, M);
      B(M, k);
    }
    function O(M) {
      B(M, y.current);
    }
    function N() {
      const M = E.current[y.current];
      S[y.current] !== M && m(S);
    }
    function B(M, k, { commit: V } = { commit: !1 }) {
      const $ = y6(a), K = w6(Math.round((M - r) / a) * a + r, $), G = Zo(K, [r, o]);
      C((F = []) => {
        const I = p6(F, G, k);
        if (b6(I, l * a)) {
          y.current = I.indexOf(G);
          const L = String(I) !== String(F);
          return L && V && m(I), L ? I : F;
        } else
          return F;
      });
    }
    return /* @__PURE__ */ f.jsx(
      l6,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: s,
        min: r,
        max: o,
        valueIndexToChangeRef: y,
        thumbs: g.current,
        values: S,
        orientation: i,
        form: b,
        children: /* @__PURE__ */ f.jsx(Oc.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ f.jsx(Oc.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f.jsx(
          x,
          {
            "aria-disabled": s,
            "data-disabled": s ? "" : void 0,
            ...v,
            ref: t,
            onPointerDown: W(v.onPointerDown, () => {
              s || (E.current = S);
            }),
            min: r,
            max: o,
            inverted: h,
            onSlideStart: s ? void 0 : _,
            onSlideMove: s ? void 0 : O,
            onSlideEnd: s ? void 0 : N,
            onHomeKeyDown: () => !s && B(r, 0, { commit: !0 }),
            onEndKeyDown: () => !s && B(o, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: M, direction: k }) => {
              if (!s) {
                const K = VS.includes(M.key) || M.shiftKey && GS.includes(M.key) ? 10 : 1, G = y.current, F = S[G], I = a * K * k;
                B(F + I, G, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
YS.displayName = vo;
var [qS, XS] = KS(vo, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), c6 = u.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...d
    } = e, [p, m] = u.useState(null), h = se(t, (x) => m(x)), b = u.useRef(void 0), v = Qt(o), g = v === "ltr", y = g && !a || !g && a;
    function w(x) {
      const S = b.current || p.getBoundingClientRect(), C = [0, S.width], _ = Gd(C, y ? [n, r] : [r, n]);
      return b.current = S, _(x - S.left);
    }
    return /* @__PURE__ */ f.jsx(
      qS,
      {
        scope: e.__scopeSlider,
        startEdge: y ? "left" : "right",
        endEdge: y ? "right" : "left",
        direction: y ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ f.jsx(
          JS,
          {
            dir: v,
            "data-orientation": "horizontal",
            ...d,
            ref: h,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (x) => {
              const S = w(x.clientX);
              i == null || i(S);
            },
            onSlideMove: (x) => {
              const S = w(x.clientX);
              s == null || s(S);
            },
            onSlideEnd: () => {
              b.current = void 0, l == null || l();
            },
            onStepKeyDown: (x) => {
              const C = US[y ? "from-left" : "from-right"].includes(x.key);
              c == null || c({ event: x, direction: C ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), u6 = u.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: s,
      onStepKeyDown: l,
      ...c
    } = e, d = u.useRef(null), p = se(t, d), m = u.useRef(void 0), h = !o;
    function b(v) {
      const g = m.current || d.current.getBoundingClientRect(), y = [0, g.height], x = Gd(y, h ? [r, n] : [n, r]);
      return m.current = g, x(v - g.top);
    }
    return /* @__PURE__ */ f.jsx(
      qS,
      {
        scope: e.__scopeSlider,
        startEdge: h ? "bottom" : "top",
        endEdge: h ? "top" : "bottom",
        size: "height",
        direction: h ? 1 : -1,
        children: /* @__PURE__ */ f.jsx(
          JS,
          {
            "data-orientation": "vertical",
            ...c,
            ref: p,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (v) => {
              const g = b(v.clientY);
              a == null || a(g);
            },
            onSlideMove: (v) => {
              const g = b(v.clientY);
              i == null || i(g);
            },
            onSlideEnd: () => {
              m.current = void 0, s == null || s();
            },
            onStepKeyDown: (v) => {
              const y = US[h ? "from-bottom" : "from-top"].includes(v.key);
              l == null || l({ event: v, direction: y ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), JS = u.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: i,
      onEndKeyDown: s,
      onStepKeyDown: l,
      ...c
    } = e, d = As(vo, n);
    return /* @__PURE__ */ f.jsx(
      Z.span,
      {
        ...c,
        ref: t,
        onKeyDown: W(e.onKeyDown, (p) => {
          p.key === "Home" ? (i(p), p.preventDefault()) : p.key === "End" ? (s(p), p.preventDefault()) : VS.concat(GS).includes(p.key) && (l(p), p.preventDefault());
        }),
        onPointerDown: W(e.onPointerDown, (p) => {
          const m = p.target;
          m.setPointerCapture(p.pointerId), p.preventDefault(), d.thumbs.has(m) ? m.focus() : r(p);
        }),
        onPointerMove: W(e.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && o(p);
        }),
        onPointerUp: W(e.onPointerUp, (p) => {
          const m = p.target;
          m.hasPointerCapture(p.pointerId) && (m.releasePointerCapture(p.pointerId), a(p));
        })
      }
    );
  }
), ZS = "SliderTrack", QS = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = As(ZS, n);
    return /* @__PURE__ */ f.jsx(
      Z.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
QS.displayName = ZS;
var Ac = "SliderRange", eC = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = As(Ac, n), a = XS(Ac, n), i = u.useRef(null), s = se(t, i), l = o.values.length, c = o.values.map(
      (m) => rC(m, o.min, o.max)
    ), d = l > 1 ? Math.min(...c) : 0, p = 100 - Math.max(...c);
    return /* @__PURE__ */ f.jsx(
      Z.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: s,
        style: {
          ...e.style,
          [a.startEdge]: d + "%",
          [a.endEdge]: p + "%"
        }
      }
    );
  }
);
eC.displayName = Ac;
var Dc = "SliderThumb", tC = u.forwardRef(
  (e, t) => {
    const n = i6(e.__scopeSlider), [r, o] = u.useState(null), a = se(t, (s) => o(s)), i = u.useMemo(
      () => r ? n().findIndex((s) => s.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ f.jsx(d6, { ...e, ref: a, index: i });
  }
), d6 = u.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, i = As(Dc, n), s = XS(Dc, n), [l, c] = u.useState(null), d = se(t, (w) => c(w)), p = l ? i.form || !!l.closest("form") : !0, m = pa(l), h = i.values[r], b = h === void 0 ? 0 : rC(h, i.min, i.max), v = m6(r, i.values.length), g = m == null ? void 0 : m[s.size], y = g ? v6(g, b, s.direction) : 0;
    return u.useEffect(() => {
      if (l)
        return i.thumbs.add(l), () => {
          i.thumbs.delete(l);
        };
    }, [l, i.thumbs]), /* @__PURE__ */ f.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [s.startEdge]: `calc(${b}% + ${y}px)`
        },
        children: [
          /* @__PURE__ */ f.jsx(Oc.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ f.jsx(
            Z.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || v,
              "aria-valuemin": i.min,
              "aria-valuenow": h,
              "aria-valuemax": i.max,
              "aria-orientation": i.orientation,
              "data-orientation": i.orientation,
              "data-disabled": i.disabled ? "" : void 0,
              tabIndex: i.disabled ? void 0 : 0,
              ...a,
              ref: d,
              style: h === void 0 ? { display: "none" } : e.style,
              onFocus: W(e.onFocus, () => {
                i.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          p && /* @__PURE__ */ f.jsx(
            nC,
            {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              form: i.form,
              value: h
            },
            r
          )
        ]
      }
    );
  }
);
tC.displayName = Dc;
var f6 = "RadioBubbleInput", nC = u.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = se(o, r), i = lo(t);
    return u.useEffect(() => {
      const s = o.current;
      if (!s) return;
      const l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (i !== t && d) {
        const p = new Event("input", { bubbles: !0 });
        d.call(s, t), s.dispatchEvent(p);
      }
    }, [i, t]), /* @__PURE__ */ f.jsx(
      Z.input,
      {
        style: { display: "none" },
        ...n,
        ref: a,
        defaultValue: t
      }
    );
  }
);
nC.displayName = f6;
function p6(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function rC(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Zo(a, [0, 100]);
}
function m6(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function h6(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function v6(e, t, n) {
  const r = e / 2, a = Gd([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function g6(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function b6(e, t) {
  if (t > 0) {
    const n = g6(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Gd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function y6(e) {
  return (String(e).split(".")[1] || "").length;
}
function w6(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var oC = YS, x6 = QS, S6 = eC, C6 = tC;
const _6 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsxs(
  oC,
  {
    ref: n,
    className: T("relative flex w-full touch-none select-none items-center", e),
    ...t,
    children: [
      /* @__PURE__ */ f.jsx(x6, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.jsx(S6, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.jsx(C6, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
_6.displayName = oC.displayName;
var Sm = ["light", "dark"], E6 = "(prefers-color-scheme: dark)";
u.createContext(void 0);
u.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: i, attrs: s, nonce: l }) => {
  let c = a === "system", d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((b) => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, p = o ? Sm.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", m = (b, v = !1, g = !0) => {
    let y = i ? i[b] : b, w = v ? b + "|| ''" : `'${y}'`, x = "";
    return o && g && !v && Sm.includes(b) && (x += `d.style.colorScheme = '${b}';`), n === "class" ? v || y ? x += `c.add(${w})` : x += "null" : y && (x += `d[s](n,${w})`), x;
  }, h = e ? `!function(){${d}${m(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${E6}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}${c ? "" : "else{" + m(a, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${m(i ? "x[e]" : "e", !0)}}else{${m(a, !1, !1)};}${p}}catch(t){}}();`;
  return u.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: h } });
});
var P6 = (e) => {
  switch (e) {
    case "success":
      return T6;
    case "info":
      return O6;
    case "warning":
      return M6;
    case "error":
      return A6;
    default:
      return null;
  }
}, R6 = Array(12).fill(0), N6 = ({ visible: e, className: t }) => P.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, P.createElement("div", { className: "sonner-spinner" }, R6.map((n, r) => P.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), T6 = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), M6 = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), O6 = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), A6 = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, P.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), D6 = P.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, P.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), P.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), I6 = () => {
  let [e, t] = P.useState(document.hidden);
  return P.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, Ic = 1, $6 = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ic++, a = this.toasts.find((s) => s.id === o), i = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), a ? this.toasts = this.toasts.map((s) => s.id === o ? (this.publish({ ...s, ...e, id: o, title: n }), { ...s, ...e, id: o, dismissible: i, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: i, id: o }), o;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), o = n !== void 0, a, i = r.then(async (l) => {
        if (a = ["resolve", l], P.isValidElement(l)) o = !1, this.create({ id: n, type: "default", message: l });
        else if (k6(l) && !l.ok) {
          o = !1;
          let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: n, type: "error", message: c, description: d });
        } else if (t.success !== void 0) {
          o = !1;
          let c = typeof t.success == "function" ? await t.success(l) : t.success, d = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: n, type: "success", message: c, description: d });
        }
      }).catch(async (l) => {
        if (a = ["reject", l], t.error !== void 0) {
          o = !1;
          let c = typeof t.error == "function" ? await t.error(l) : t.error, d = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: n, type: "error", message: c, description: d });
        }
      }).finally(() => {
        var l;
        o && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t);
      }), s = () => new Promise((l, c) => i.then(() => a[0] === "reject" ? c(a[1]) : l(a[1])).catch(c));
      return typeof n != "string" && typeof n != "number" ? { unwrap: s } : Object.assign(n, { unwrap: s });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || Ic++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, _t = new $6(), j6 = (e, t) => {
  let n = (t == null ? void 0 : t.id) || Ic++;
  return _t.addToast({ title: e, ...t, id: n }), n;
}, k6 = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", L6 = j6, F6 = () => _t.toasts, B6 = () => _t.getActiveToasts(), dq = Object.assign(L6, { success: _t.success, info: _t.info, warning: _t.warning, error: _t.error, custom: _t.custom, message: _t.message, promise: _t.promise, dismiss: _t.dismiss, loading: _t.loading }, { getHistory: F6, getToasts: B6 });
function z6(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
z6(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Va(e) {
  return e.label !== void 0;
}
var H6 = 3, W6 = "32px", V6 = "16px", Cm = 4e3, G6 = 356, U6 = 14, K6 = 20, Y6 = 200;
function Vt(...e) {
  return e.filter(Boolean).join(" ");
}
function q6(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
var X6 = (e) => {
  var t, n, r, o, a, i, s, l, c, d, p;
  let { invert: m, toast: h, unstyled: b, interacting: v, setHeights: g, visibleToasts: y, heights: w, index: x, toasts: S, expanded: C, removeToast: E, defaultRichColors: _, closeButton: O, style: N, cancelButtonStyle: B, actionButtonStyle: M, className: k = "", descriptionClassName: V = "", duration: $, position: K, gap: G, loadingIcon: F, expandByDefault: I, classNames: L, icons: ne, closeButtonAriaLabel: re = "Close toast", pauseWhenPageIsHidden: j } = e, [D, H] = P.useState(null), [U, X] = P.useState(null), [A, Y] = P.useState(!1), [Q, te] = P.useState(!1), [oe, J] = P.useState(!1), [q, z] = P.useState(!1), [ae, ce] = P.useState(!1), [ve, pe] = P.useState(0), [ue, Re] = P.useState(0), Be = P.useRef(h.duration || $ || Cm), Ne = P.useRef(null), We = P.useRef(null), rt = x === 0, st = x + 1 <= y, Ie = h.type, $e = h.dismissible !== !1, an = h.className || "", wt = h.descriptionClassName || "", lt = P.useMemo(() => w.findIndex((le) => le.toastId === h.id) || 0, [w, h.id]), ct = P.useMemo(() => {
    var le;
    return (le = h.closeButton) != null ? le : O;
  }, [h.closeButton, O]), Tt = P.useMemo(() => h.duration || $ || Cm, [h.duration, $]), tt = P.useRef(0), ut = P.useRef(0), sn = P.useRef(0), It = P.useRef(null), [Zn, de] = K.split("-"), we = P.useMemo(() => w.reduce((le, me, Se) => Se >= lt ? le : le + me.height, 0), [w, lt]), Ee = I6(), xe = h.invert || m, ye = Ie === "loading";
  ut.current = P.useMemo(() => lt * G + we, [lt, we]), P.useEffect(() => {
    Be.current = Tt;
  }, [Tt]), P.useEffect(() => {
    Y(!0);
  }, []), P.useEffect(() => {
    let le = We.current;
    if (le) {
      let me = le.getBoundingClientRect().height;
      return Re(me), g((Se) => [{ toastId: h.id, height: me, position: h.position }, ...Se]), () => g((Se) => Se.filter((qe) => qe.toastId !== h.id));
    }
  }, [g, h.id]), P.useLayoutEffect(() => {
    if (!A) return;
    let le = We.current, me = le.style.height;
    le.style.height = "auto";
    let Se = le.getBoundingClientRect().height;
    le.style.height = me, Re(Se), g((qe) => qe.find((Ve) => Ve.toastId === h.id) ? qe.map((Ve) => Ve.toastId === h.id ? { ...Ve, height: Se } : Ve) : [{ toastId: h.id, height: Se, position: h.position }, ...qe]);
  }, [A, h.title, h.description, g, h.id]);
  let je = P.useCallback(() => {
    te(!0), pe(ut.current), g((le) => le.filter((me) => me.toastId !== h.id)), setTimeout(() => {
      E(h);
    }, Y6);
  }, [h, E, g, ut]);
  P.useEffect(() => {
    if (h.promise && Ie === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
    let le;
    return C || v || j && Ee ? (() => {
      if (sn.current < tt.current) {
        let me = (/* @__PURE__ */ new Date()).getTime() - tt.current;
        Be.current = Be.current - me;
      }
      sn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Be.current !== 1 / 0 && (tt.current = (/* @__PURE__ */ new Date()).getTime(), le = setTimeout(() => {
      var me;
      (me = h.onAutoClose) == null || me.call(h, h), je();
    }, Be.current)), () => clearTimeout(le);
  }, [C, v, h, Ie, j, Ee, je]), P.useEffect(() => {
    h.delete && je();
  }, [je, h.delete]);
  function Ze() {
    var le, me, Se;
    return ne != null && ne.loading ? P.createElement("div", { className: Vt(L == null ? void 0 : L.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader, "sonner-loader"), "data-visible": Ie === "loading" }, ne.loading) : F ? P.createElement("div", { className: Vt(L == null ? void 0 : L.loader, (me = h == null ? void 0 : h.classNames) == null ? void 0 : me.loader, "sonner-loader"), "data-visible": Ie === "loading" }, F) : P.createElement(N6, { className: Vt(L == null ? void 0 : L.loader, (Se = h == null ? void 0 : h.classNames) == null ? void 0 : Se.loader), visible: Ie === "loading" });
  }
  return P.createElement("li", { tabIndex: 0, ref: We, className: Vt(k, an, L == null ? void 0 : L.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, L == null ? void 0 : L.default, L == null ? void 0 : L[Ie], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[Ie]), "data-sonner-toast": "", "data-rich-colors": (r = h.richColors) != null ? r : _, "data-styled": !(h.jsx || h.unstyled || b), "data-mounted": A, "data-promise": !!h.promise, "data-swiped": ae, "data-removed": Q, "data-visible": st, "data-y-position": Zn, "data-x-position": de, "data-index": x, "data-front": rt, "data-swiping": oe, "data-dismissible": $e, "data-type": Ie, "data-invert": xe, "data-swipe-out": q, "data-swipe-direction": U, "data-expanded": !!(C || I && A), style: { "--index": x, "--toasts-before": x, "--z-index": S.length - x, "--offset": `${Q ? ve : ut.current}px`, "--initial-height": I ? "auto" : `${ue}px`, ...N, ...h.style }, onDragEnd: () => {
    J(!1), H(null), It.current = null;
  }, onPointerDown: (le) => {
    ye || !$e || (Ne.current = /* @__PURE__ */ new Date(), pe(ut.current), le.target.setPointerCapture(le.pointerId), le.target.tagName !== "BUTTON" && (J(!0), It.current = { x: le.clientX, y: le.clientY }));
  }, onPointerUp: () => {
    var le, me, Se, qe;
    if (q || !$e) return;
    It.current = null;
    let Ve = Number(((le = We.current) == null ? void 0 : le.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), vt = Number(((me = We.current) == null ? void 0 : me.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), $t = (/* @__PURE__ */ new Date()).getTime() - ((Se = Ne.current) == null ? void 0 : Se.getTime()), xt = D === "x" ? Ve : vt, Wt = Math.abs(xt) / $t;
    if (Math.abs(xt) >= K6 || Wt > 0.11) {
      pe(ut.current), (qe = h.onDismiss) == null || qe.call(h, h), X(D === "x" ? Ve > 0 ? "right" : "left" : vt > 0 ? "down" : "up"), je(), z(!0), ce(!1);
      return;
    }
    J(!1), H(null);
  }, onPointerMove: (le) => {
    var me, Se, qe, Ve;
    if (!It.current || !$e || ((me = window.getSelection()) == null ? void 0 : me.toString().length) > 0) return;
    let vt = le.clientY - It.current.y, $t = le.clientX - It.current.x, xt = (Se = e.swipeDirections) != null ? Se : q6(K);
    !D && (Math.abs($t) > 1 || Math.abs(vt) > 1) && H(Math.abs($t) > Math.abs(vt) ? "x" : "y");
    let Wt = { x: 0, y: 0 };
    D === "y" ? (xt.includes("top") || xt.includes("bottom")) && (xt.includes("top") && vt < 0 || xt.includes("bottom") && vt > 0) && (Wt.y = vt) : D === "x" && (xt.includes("left") || xt.includes("right")) && (xt.includes("left") && $t < 0 || xt.includes("right") && $t > 0) && (Wt.x = $t), (Math.abs(Wt.x) > 0 || Math.abs(Wt.y) > 0) && ce(!0), (qe = We.current) == null || qe.style.setProperty("--swipe-amount-x", `${Wt.x}px`), (Ve = We.current) == null || Ve.style.setProperty("--swipe-amount-y", `${Wt.y}px`);
  } }, ct && !h.jsx ? P.createElement("button", { "aria-label": re, "data-disabled": ye, "data-close-button": !0, onClick: ye || !$e ? () => {
  } : () => {
    var le;
    je(), (le = h.onDismiss) == null || le.call(h, h);
  }, className: Vt(L == null ? void 0 : L.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton) }, (a = ne == null ? void 0 : ne.close) != null ? a : D6) : null, h.jsx || Ua(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : P.createElement(P.Fragment, null, Ie || h.icon || h.promise ? P.createElement("div", { "data-icon": "", className: Vt(L == null ? void 0 : L.icon, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.icon) }, h.promise || h.type === "loading" && !h.icon ? h.icon || Ze() : null, h.type !== "loading" ? h.icon || (ne == null ? void 0 : ne[Ie]) || P6(Ie) : null) : null, P.createElement("div", { "data-content": "", className: Vt(L == null ? void 0 : L.content, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.content) }, P.createElement("div", { "data-title": "", className: Vt(L == null ? void 0 : L.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title) }, typeof h.title == "function" ? h.title() : h.title), h.description ? P.createElement("div", { "data-description": "", className: Vt(V, wt, L == null ? void 0 : L.description, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.description) }, typeof h.description == "function" ? h.description() : h.description) : null), Ua(h.cancel) ? h.cancel : h.cancel && Va(h.cancel) ? P.createElement("button", { "data-button": !0, "data-cancel": !0, style: h.cancelButtonStyle || B, onClick: (le) => {
    var me, Se;
    Va(h.cancel) && $e && ((Se = (me = h.cancel).onClick) == null || Se.call(me, le), je());
  }, className: Vt(L == null ? void 0 : L.cancelButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.cancelButton) }, h.cancel.label) : null, Ua(h.action) ? h.action : h.action && Va(h.action) ? P.createElement("button", { "data-button": !0, "data-action": !0, style: h.actionButtonStyle || M, onClick: (le) => {
    var me, Se;
    Va(h.action) && ((Se = (me = h.action).onClick) == null || Se.call(me, le), !le.defaultPrevented && je());
  }, className: Vt(L == null ? void 0 : L.actionButton, (p = h == null ? void 0 : h.classNames) == null ? void 0 : p.actionButton) }, h.action.label) : null));
};
function _m() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function J6(e, t) {
  let n = {};
  return [e, t].forEach((r, o) => {
    let a = o === 1, i = a ? "--mobile-offset" : "--offset", s = a ? V6 : W6;
    function l(c) {
      ["top", "right", "bottom", "left"].forEach((d) => {
        n[`${i}-${d}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach((c) => {
      r[c] === void 0 ? n[`${i}-${c}`] = s : n[`${i}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c];
    }) : l(s);
  }), n;
}
vr(function(e, t) {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: a, closeButton: i, className: s, offset: l, mobileOffset: c, theme: d = "light", richColors: p, duration: m, style: h, visibleToasts: b = H6, toastOptions: v, dir: g = _m(), gap: y = U6, loadingIcon: w, icons: x, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: C } = e, [E, _] = P.useState([]), O = P.useMemo(() => Array.from(new Set([r].concat(E.filter((j) => j.position).map((j) => j.position)))), [E, r]), [N, B] = P.useState([]), [M, k] = P.useState(!1), [V, $] = P.useState(!1), [K, G] = P.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), F = P.useRef(null), I = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = P.useRef(null), ne = P.useRef(!1), re = P.useCallback((j) => {
    _((D) => {
      var H;
      return (H = D.find((U) => U.id === j.id)) != null && H.delete || _t.dismiss(j.id), D.filter(({ id: U }) => U !== j.id);
    });
  }, []);
  return P.useEffect(() => _t.subscribe((j) => {
    if (j.dismiss) {
      _((D) => D.map((H) => H.id === j.id ? { ...H, delete: !0 } : H));
      return;
    }
    setTimeout(() => {
      Bc.flushSync(() => {
        _((D) => {
          let H = D.findIndex((U) => U.id === j.id);
          return H !== -1 ? [...D.slice(0, H), { ...D[H], ...j }, ...D.slice(H + 1)] : [j, ...D];
        });
      });
    });
  }), []), P.useEffect(() => {
    if (d !== "system") {
      G(d);
      return;
    }
    if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? G("dark") : G("light")), typeof window > "u") return;
    let j = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      j.addEventListener("change", ({ matches: D }) => {
        G(D ? "dark" : "light");
      });
    } catch {
      j.addListener(({ matches: H }) => {
        try {
          G(H ? "dark" : "light");
        } catch (U) {
          console.error(U);
        }
      });
    }
  }, [d]), P.useEffect(() => {
    E.length <= 1 && k(!1);
  }, [E]), P.useEffect(() => {
    let j = (D) => {
      var H, U;
      o.every((X) => D[X] || D.code === X) && (k(!0), (H = F.current) == null || H.focus()), D.code === "Escape" && (document.activeElement === F.current || (U = F.current) != null && U.contains(document.activeElement)) && k(!1);
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [o]), P.useEffect(() => {
    if (F.current) return () => {
      L.current && (L.current.focus({ preventScroll: !0 }), L.current = null, ne.current = !1);
    };
  }, [F.current]), P.createElement("section", { ref: t, "aria-label": `${S} ${I}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, O.map((j, D) => {
    var H;
    let [U, X] = j.split("-");
    return E.length ? P.createElement("ol", { key: j, dir: g === "auto" ? _m() : g, tabIndex: -1, ref: F, className: s, "data-sonner-toaster": !0, "data-theme": K, "data-y-position": U, "data-lifted": M && E.length > 1 && !a, "data-x-position": X, style: { "--front-toast-height": `${((H = N[0]) == null ? void 0 : H.height) || 0}px`, "--width": `${G6}px`, "--gap": `${y}px`, ...h, ...J6(l, c) }, onBlur: (A) => {
      ne.current && !A.currentTarget.contains(A.relatedTarget) && (ne.current = !1, L.current && (L.current.focus({ preventScroll: !0 }), L.current = null));
    }, onFocus: (A) => {
      A.target instanceof HTMLElement && A.target.dataset.dismissible === "false" || ne.current || (ne.current = !0, L.current = A.relatedTarget);
    }, onMouseEnter: () => k(!0), onMouseMove: () => k(!0), onMouseLeave: () => {
      V || k(!1);
    }, onDragEnd: () => k(!1), onPointerDown: (A) => {
      A.target instanceof HTMLElement && A.target.dataset.dismissible === "false" || $(!0);
    }, onPointerUp: () => $(!1) }, E.filter((A) => !A.position && D === 0 || A.position === j).map((A, Y) => {
      var Q, te;
      return P.createElement(X6, { key: A.id, icons: x, index: Y, toast: A, defaultRichColors: p, duration: (Q = v == null ? void 0 : v.duration) != null ? Q : m, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: n, visibleToasts: b, closeButton: (te = v == null ? void 0 : v.closeButton) != null ? te : i, interacting: V, position: j, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: re, toasts: E.filter((oe) => oe.position == A.position), heights: N.filter((oe) => oe.position == A.position), setHeights: B, expandByDefault: a, gap: y, loadingIcon: w, expanded: M, pauseWhenPageIsHidden: C, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
var Ds = "Switch", [Z6, fq] = Fe(Ds), [Q6, e9] = Z6(Ds), aC = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: s,
      value: l = "on",
      onCheckedChange: c,
      form: d,
      ...p
    } = e, [m, h] = u.useState(null), b = se(t, (x) => h(x)), v = u.useRef(!1), g = m ? d || !!m.closest("form") : !0, [y, w] = ze({
      prop: o,
      defaultProp: a ?? !1,
      onChange: c,
      caller: Ds
    });
    return /* @__PURE__ */ f.jsxs(Q6, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ f.jsx(
        Z.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": i,
          "data-state": cC(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...p,
          ref: b,
          onClick: W(e.onClick, (x) => {
            w((S) => !S), g && (v.current = x.isPropagationStopped(), v.current || x.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ f.jsx(
        lC,
        {
          control: m,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: y,
          required: i,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
aC.displayName = Ds;
var iC = "SwitchThumb", sC = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = e9(iC, n);
    return /* @__PURE__ */ f.jsx(
      Z.span,
      {
        "data-state": cC(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
sC.displayName = iC;
var t9 = "SwitchBubbleInput", lC = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const i = u.useRef(null), s = se(i, a), l = lo(n), c = pa(t);
    return u.useEffect(() => {
      const d = i.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && h) {
        const b = new Event("click", { bubbles: r });
        h.call(d, n), d.dispatchEvent(b);
      }
    }, [l, n, r]), /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
lC.displayName = t9;
function cC(e) {
  return e ? "checked" : "unchecked";
}
var uC = aC, n9 = sC;
const r9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  uC,
  {
    className: T(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.jsx(
      n9,
      {
        className: T(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
r9.displayName = uC.displayName;
const o9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ f.jsx("table", { ref: n, className: T("w-full caption-bottom text-sm", e), ...t }) })
);
o9.displayName = "Table";
const a9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("thead", { ref: n, className: T("[&_tr]:border-b", e), ...t })
);
a9.displayName = "TableHeader";
const i9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("tbody", { ref: n, className: T("[&_tr:last-child]:border-0", e), ...t })
);
i9.displayName = "TableBody";
const s9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("tfoot", { ref: n, className: T("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e), ...t })
);
s9.displayName = "TableFooter";
const l9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    "tr",
    {
      ref: n,
      className: T("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", e),
      ...t
    }
  )
);
l9.displayName = "TableRow";
const c9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
    "th",
    {
      ref: n,
      className: T(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        e
      ),
      ...t
    }
  )
);
c9.displayName = "TableHead";
const u9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("td", { ref: n, className: T("p-4 align-middle [&:has([role=checkbox])]:pr-0", e), ...t })
);
u9.displayName = "TableCell";
const d9 = u.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx("caption", { ref: n, className: T("mt-4 text-sm text-muted-foreground", e), ...t })
);
d9.displayName = "TableCaption";
var Is = "Tabs", [f9, pq] = Fe(Is, [
  yn
]), dC = yn(), [p9, Ud] = f9(Is), fC = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...c
    } = e, d = Qt(s), [p, m] = ze({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Is
    });
    return /* @__PURE__ */ f.jsx(
      p9,
      {
        scope: n,
        baseId: Le(),
        value: p,
        onValueChange: m,
        orientation: i,
        dir: d,
        activationMode: l,
        children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            dir: d,
            "data-orientation": i,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
fC.displayName = Is;
var pC = "TabsList", mC = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Ud(pC, n), i = dC(n);
    return /* @__PURE__ */ f.jsx(
      ya,
      {
        asChild: !0,
        ...i,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ f.jsx(
          Z.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
mC.displayName = pC;
var hC = "TabsTrigger", vC = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, i = Ud(hC, n), s = dC(n), l = yC(i.baseId, r), c = wC(i.baseId, r), d = r === i.value;
    return /* @__PURE__ */ f.jsx(
      wa,
      {
        asChild: !0,
        ...s,
        focusable: !o,
        active: d,
        children: /* @__PURE__ */ f.jsx(
          Z.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": c,
            "data-state": d ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: W(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? i.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: W(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && i.onValueChange(r);
            }),
            onFocus: W(e.onFocus, () => {
              const p = i.activationMode !== "manual";
              !d && !o && p && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
vC.displayName = hC;
var gC = "TabsContent", bC = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...i } = e, s = Ud(gC, n), l = yC(s.baseId, r), c = wC(s.baseId, r), d = r === s.value, p = u.useRef(d);
    return u.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ f.jsx(Ye, { present: o || d, children: ({ present: m }) => /* @__PURE__ */ f.jsx(
      Z.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !m,
        id: c,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
bC.displayName = gC;
function yC(e, t) {
  return `${e}-trigger-${t}`;
}
function wC(e, t) {
  return `${e}-content-${t}`;
}
var m9 = fC, xC = mC, SC = vC, CC = bC;
const mq = m9, h9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  xC,
  {
    ref: n,
    className: T(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
h9.displayName = xC.displayName;
const v9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  SC,
  {
    ref: n,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
v9.displayName = SC.displayName;
const g9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  CC,
  {
    ref: n,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
g9.displayName = CC.displayName;
const b9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  "textarea",
  {
    className: T(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t
  }
));
b9.displayName = "Textarea";
var Kd = "ToastProvider", [Yd, y9, w9] = Mn("Toast"), [_C, hq] = Fe("Toast", [w9]), [x9, $s] = _C(Kd), EC = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: i
  } = e, [s, l] = u.useState(null), [c, d] = u.useState(0), p = u.useRef(!1), m = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Kd}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ f.jsx(Yd.Provider, { scope: t, children: /* @__PURE__ */ f.jsx(
    x9,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: c,
      viewport: s,
      onViewportChange: l,
      onToastAdd: u.useCallback(() => d((h) => h + 1), []),
      onToastRemove: u.useCallback(() => d((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: p,
      isClosePausedRef: m,
      children: i
    }
  ) });
};
EC.displayName = Kd;
var PC = "ToastViewport", S9 = ["F8"], $c = "toast.viewportPause", jc = "toast.viewportResume", RC = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = S9,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, i = $s(PC, n), s = y9(n), l = u.useRef(null), c = u.useRef(null), d = u.useRef(null), p = u.useRef(null), m = se(t, p, i.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = i.toastCount > 0;
    u.useEffect(() => {
      const g = (y) => {
        var x;
        r.length !== 0 && r.every((S) => y[S] || y.code === S) && ((x = p.current) == null || x.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), u.useEffect(() => {
      const g = l.current, y = p.current;
      if (b && g && y) {
        const w = () => {
          if (!i.isClosePausedRef.current) {
            const E = new CustomEvent($c);
            y.dispatchEvent(E), i.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (i.isClosePausedRef.current) {
            const E = new CustomEvent(jc);
            y.dispatchEvent(E), i.isClosePausedRef.current = !1;
          }
        }, S = (E) => {
          !g.contains(E.relatedTarget) && x();
        }, C = () => {
          g.contains(document.activeElement) || x();
        };
        return g.addEventListener("focusin", w), g.addEventListener("focusout", S), g.addEventListener("pointermove", w), g.addEventListener("pointerleave", C), window.addEventListener("blur", w), window.addEventListener("focus", x), () => {
          g.removeEventListener("focusin", w), g.removeEventListener("focusout", S), g.removeEventListener("pointermove", w), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", w), window.removeEventListener("focus", x);
        };
      }
    }, [b, i.isClosePausedRef]);
    const v = u.useCallback(
      ({ tabbingDirection: g }) => {
        const w = s().map((x) => {
          const S = x.ref.current, C = [S, ...$9(S)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return u.useEffect(() => {
      const g = p.current;
      if (g) {
        const y = (w) => {
          var C, E, _;
          const x = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !x) {
            const O = document.activeElement, N = w.shiftKey;
            if (w.target === g && N) {
              (C = c.current) == null || C.focus();
              return;
            }
            const k = v({ tabbingDirection: N ? "backwards" : "forwards" }), V = k.findIndex(($) => $ === O);
            Rl(k.slice(V + 1)) ? w.preventDefault() : N ? (E = c.current) == null || E.focus() : (_ = d.current) == null || _.focus();
          }
        };
        return g.addEventListener("keydown", y), () => g.removeEventListener("keydown", y);
      }
    }, [s, v]), /* @__PURE__ */ f.jsxs(
      HE,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b && /* @__PURE__ */ f.jsx(
            kc,
            {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                Rl(g);
              }
            }
          ),
          /* @__PURE__ */ f.jsx(Yd.Slot, { scope: n, children: /* @__PURE__ */ f.jsx(Z.ol, { tabIndex: -1, ...a, ref: m }) }),
          b && /* @__PURE__ */ f.jsx(
            kc,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                Rl(g);
              }
            }
          )
        ]
      }
    );
  }
);
RC.displayName = PC;
var NC = "ToastFocusProxy", kc = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = $s(NC, n);
    return /* @__PURE__ */ f.jsx(
      vs,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (i) => {
          var c;
          const s = i.relatedTarget;
          !((c = a.viewport) != null && c.contains(s)) && r();
        }
      }
    );
  }
);
kc.displayName = NC;
var Ra = "Toast", C9 = "toast.swipeStart", _9 = "toast.swipeMove", E9 = "toast.swipeCancel", P9 = "toast.swipeEnd", TC = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...i } = e, [s, l] = ze({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: Ra
    });
    return /* @__PURE__ */ f.jsx(Ye, { present: n || s, children: /* @__PURE__ */ f.jsx(
      T9,
      {
        open: s,
        ...i,
        ref: t,
        onClose: () => l(!1),
        onPause: Te(e.onPause),
        onResume: Te(e.onResume),
        onSwipeStart: W(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: W(e.onSwipeMove, (c) => {
          const { x: d, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: W(e.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: W(e.onSwipeEnd, (c) => {
          const { x: d, y: p } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), l(!1);
        })
      }
    ) });
  }
);
TC.displayName = Ra;
var [R9, N9] = _C(Ra, {
  onClose() {
  }
}), T9 = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: i,
      onEscapeKeyDown: s,
      onPause: l,
      onResume: c,
      onSwipeStart: d,
      onSwipeMove: p,
      onSwipeCancel: m,
      onSwipeEnd: h,
      ...b
    } = e, v = $s(Ra, n), [g, y] = u.useState(null), w = se(t, ($) => y($)), x = u.useRef(null), S = u.useRef(null), C = o || v.duration, E = u.useRef(0), _ = u.useRef(C), O = u.useRef(0), { onToastAdd: N, onToastRemove: B } = v, M = Te(() => {
      var K;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((K = v.viewport) == null || K.focus()), i();
    }), k = u.useCallback(
      ($) => {
        !$ || $ === 1 / 0 || (window.clearTimeout(O.current), E.current = (/* @__PURE__ */ new Date()).getTime(), O.current = window.setTimeout(M, $));
      },
      [M]
    );
    u.useEffect(() => {
      const $ = v.viewport;
      if ($) {
        const K = () => {
          k(_.current), c == null || c();
        }, G = () => {
          const F = (/* @__PURE__ */ new Date()).getTime() - E.current;
          _.current = _.current - F, window.clearTimeout(O.current), l == null || l();
        };
        return $.addEventListener($c, G), $.addEventListener(jc, K), () => {
          $.removeEventListener($c, G), $.removeEventListener(jc, K);
        };
      }
    }, [v.viewport, C, l, c, k]), u.useEffect(() => {
      a && !v.isClosePausedRef.current && k(C);
    }, [a, C, v.isClosePausedRef, k]), u.useEffect(() => (N(), () => B()), [N, B]);
    const V = u.useMemo(() => g ? jC(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      V && /* @__PURE__ */ f.jsx(
        M9,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: V
        }
      ),
      /* @__PURE__ */ f.jsx(R9, { scope: n, onClose: M, children: ea.createPortal(
        /* @__PURE__ */ f.jsx(Yd.ItemSlot, { scope: n, children: /* @__PURE__ */ f.jsx(
          zE,
          {
            asChild: !0,
            onEscapeKeyDown: W(s, () => {
              v.isFocusedToastEscapeKeyDownRef.current || M(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ f.jsx(
              Z.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...b,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: W(e.onKeyDown, ($) => {
                  $.key === "Escape" && (s == null || s($.nativeEvent), $.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, M()));
                }),
                onPointerDown: W(e.onPointerDown, ($) => {
                  $.button === 0 && (x.current = { x: $.clientX, y: $.clientY });
                }),
                onPointerMove: W(e.onPointerMove, ($) => {
                  if (!x.current) return;
                  const K = $.clientX - x.current.x, G = $.clientY - x.current.y, F = !!S.current, I = ["left", "right"].includes(v.swipeDirection), L = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, ne = I ? L(0, K) : 0, re = I ? 0 : L(0, G), j = $.pointerType === "touch" ? 10 : 2, D = { x: ne, y: re }, H = { originalEvent: $, delta: D };
                  F ? (S.current = D, Ga(_9, p, H, {
                    discrete: !1
                  })) : Em(D, v.swipeDirection, j) ? (S.current = D, Ga(C9, d, H, {
                    discrete: !1
                  }), $.target.setPointerCapture($.pointerId)) : (Math.abs(K) > j || Math.abs(G) > j) && (x.current = null);
                }),
                onPointerUp: W(e.onPointerUp, ($) => {
                  const K = S.current, G = $.target;
                  if (G.hasPointerCapture($.pointerId) && G.releasePointerCapture($.pointerId), S.current = null, x.current = null, K) {
                    const F = $.currentTarget, I = { originalEvent: $, delta: K };
                    Em(K, v.swipeDirection, v.swipeThreshold) ? Ga(P9, h, I, {
                      discrete: !0
                    }) : Ga(
                      E9,
                      m,
                      I,
                      {
                        discrete: !0
                      }
                    ), F.addEventListener("click", (L) => L.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }
), M9 = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = $s(Ra, t), [a, i] = u.useState(!1), [s, l] = u.useState(!1);
  return D9(() => i(!0)), u.useEffect(() => {
    const c = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(c);
  }, []), s ? null : /* @__PURE__ */ f.jsx(eo, { asChild: !0, children: /* @__PURE__ */ f.jsx(vs, { ...r, children: a && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, O9 = "ToastTitle", MC = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { ...r, ref: t });
  }
);
MC.displayName = O9;
var A9 = "ToastDescription", OC = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ f.jsx(Z.div, { ...r, ref: t });
  }
);
OC.displayName = A9;
var AC = "ToastAction", DC = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ f.jsx($C, { altText: n, asChild: !0, children: /* @__PURE__ */ f.jsx(qd, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${AC}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
DC.displayName = AC;
var IC = "ToastClose", qd = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = N9(IC, n);
    return /* @__PURE__ */ f.jsx($C, { asChild: !0, children: /* @__PURE__ */ f.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: W(e.onClick, o.onClose)
      }
    ) });
  }
);
qd.displayName = IC;
var $C = u.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ f.jsx(
    Z.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function jC(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), I9(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...jC(r));
    }
  }), t;
}
function Ga(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? jo(o, a) : o.dispatchEvent(a);
}
var Em = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function D9(e = () => {
}) {
  const t = Te(e);
  Ke(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function I9(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $9(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Rl(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var j9 = EC, kC = RC, LC = TC, FC = MC, BC = OC, zC = DC, HC = qd;
const vq = j9, k9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  kC,
  {
    ref: n,
    className: T(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
k9.displayName = kC.displayName;
const L9 = Dn(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), F9 = u.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ f.jsx(LC, { ref: r, className: T(L9({ variant: t }), e), ...n }));
F9.displayName = LC.displayName;
const B9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  zC,
  {
    ref: n,
    className: T(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t
  }
));
B9.displayName = zC.displayName;
const z9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(
  HC,
  {
    ref: n,
    className: T(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ f.jsx(qc, { className: "h-4 w-4" })
  }
));
z9.displayName = HC.displayName;
const H9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(FC, { ref: n, className: T("text-sm font-semibold", e), ...t }));
H9.displayName = FC.displayName;
const W9 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.jsx(BC, { ref: n, className: T("text-sm opacity-90", e), ...t }));
W9.displayName = BC.displayName;
var WC = "Toggle", Xd = u.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e, [i, s] = ze({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: WC
  });
  return /* @__PURE__ */ f.jsx(
    Z.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: W(e.onClick, () => {
        e.disabled || s(!i);
      })
    }
  );
});
Xd.displayName = WC;
var VC = Xd, Jn = "ToggleGroup", [GC, gq] = Fe(Jn, [
  yn
]), UC = yn(), Jd = P.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ f.jsx(V9, { ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ f.jsx(G9, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Jn}\``);
});
Jd.displayName = Jn;
var [KC, YC] = GC(Jn), V9 = P.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = ze({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Jn
  });
  return /* @__PURE__ */ f.jsx(
    KC,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: P.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: s,
      onItemDeactivate: P.useCallback(() => s(""), [s]),
      children: /* @__PURE__ */ f.jsx(qC, { ...a, ref: t })
    }
  );
}), G9 = P.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [i, s] = ze({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Jn
  }), l = P.useCallback(
    (d) => s((p = []) => [...p, d]),
    [s]
  ), c = P.useCallback(
    (d) => s((p = []) => p.filter((m) => m !== d)),
    [s]
  );
  return /* @__PURE__ */ f.jsx(
    KC,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: c,
      children: /* @__PURE__ */ f.jsx(qC, { ...a, ref: t })
    }
  );
});
Jd.displayName = Jn;
var [U9, K9] = GC(Jn), qC = P.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: i,
      loop: s = !0,
      ...l
    } = e, c = UC(n), d = Qt(i), p = { role: "group", dir: d, ...l };
    return /* @__PURE__ */ f.jsx(U9, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ f.jsx(
      ya,
      {
        asChild: !0,
        ...c,
        orientation: a,
        dir: d,
        loop: s,
        children: /* @__PURE__ */ f.jsx(Z.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ f.jsx(Z.div, { ...p, ref: t }) });
  }
), Di = "ToggleGroupItem", XC = P.forwardRef(
  (e, t) => {
    const n = YC(Di, e.__scopeToggleGroup), r = K9(Di, e.__scopeToggleGroup), o = UC(e.__scopeToggleGroup), a = n.value.includes(e.value), i = r.disabled || e.disabled, s = { ...e, pressed: a, disabled: i }, l = P.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ f.jsx(
      wa,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: a,
        ref: l,
        children: /* @__PURE__ */ f.jsx(Pm, { ...s, ref: t })
      }
    ) : /* @__PURE__ */ f.jsx(Pm, { ...s, ref: t });
  }
);
XC.displayName = Di;
var Pm = P.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = YC(Di, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, s = a.type === "single" ? i : void 0;
    return /* @__PURE__ */ f.jsx(
      Xd,
      {
        ...s,
        ...o,
        ref: t,
        onPressedChange: (l) => {
          l ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), JC = Jd, ZC = XC;
const QC = Dn(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Y9 = u.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.jsx(VC, { ref: o, className: T(QC({ variant: t, size: n, className: e })), ...r }));
Y9.displayName = VC.displayName;
const e_ = u.createContext({
  size: "default",
  variant: "default"
}), q9 = u.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, a) => /* @__PURE__ */ f.jsx(JC, { ref: a, className: T("flex items-center justify-center gap-1", e), ...o, children: /* @__PURE__ */ f.jsx(e_.Provider, { value: { variant: t, size: n }, children: r }) }));
q9.displayName = JC.displayName;
const X9 = u.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, a) => {
  const i = u.useContext(e_);
  return /* @__PURE__ */ f.jsx(
    ZC,
    {
      ref: a,
      className: T(
        QC({
          variant: i.variant || n,
          size: i.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
X9.displayName = ZC.displayName;
export {
  e7 as Accordion,
  DE as AccordionContent,
  OE as AccordionItem,
  AE as AccordionTrigger,
  pP as Alert,
  hP as AlertDescription,
  n7 as AlertDialog,
  uP as AlertDialogAction,
  dP as AlertDialogCancel,
  aP as AlertDialogContent,
  cP as AlertDialogDescription,
  sP as AlertDialogFooter,
  iP as AlertDialogHeader,
  qh as AlertDialogOverlay,
  oP as AlertDialogPortal,
  lP as AlertDialogTitle,
  r7 as AlertDialogTrigger,
  mP as AlertTitle,
  o7 as AspectRatio,
  PP as Avatar,
  NP as AvatarFallback,
  RP as AvatarImage,
  i7 as Badge,
  MP as Breadcrumb,
  jP as BreadcrumbEllipsis,
  AP as BreadcrumbItem,
  DP as BreadcrumbLink,
  OP as BreadcrumbList,
  IP as BreadcrumbPage,
  $P as BreadcrumbSeparator,
  Ui as Button,
  CT as Calendar,
  _T as Card,
  NT as CardContent,
  RT as CardDescription,
  TT as CardFooter,
  ET as CardHeader,
  PT as CardTitle,
  uM as Carousel,
  dM as CarouselContent,
  fM as CarouselItem,
  mM as CarouselNext,
  pM as CarouselPrevious,
  vH as ChartContainer,
  l7 as ChartLegend,
  yH as ChartLegendContent,
  gH as ChartStyle,
  s7 as ChartTooltip,
  bH as ChartTooltipContent,
  _H as Checkbox,
  u7 as Collapsible,
  f7 as CollapsibleContent,
  d7 as CollapsibleTrigger,
  Kg as Command,
  h7 as CommandDialog,
  rW as CommandEmpty,
  oW as CommandGroup,
  tW as CommandInput,
  iW as CommandItem,
  nW as CommandList,
  aW as CommandSeparator,
  sW as CommandShortcut,
  g7 as ContextMenu,
  D3 as ContextMenuCheckboxItem,
  O3 as ContextMenuContent,
  y7 as ContextMenuGroup,
  A3 as ContextMenuItem,
  $3 as ContextMenuLabel,
  w7 as ContextMenuPortal,
  S7 as ContextMenuRadioGroup,
  I3 as ContextMenuRadioItem,
  j3 as ContextMenuSeparator,
  k3 as ContextMenuShortcut,
  x7 as ContextMenuSub,
  M3 as ContextMenuSubContent,
  T3 as ContextMenuSubTrigger,
  b7 as ContextMenuTrigger,
  qH as Dialog,
  m7 as DialogClose,
  Ug as DialogContent,
  eW as DialogDescription,
  ZH as DialogFooter,
  JH as DialogHeader,
  Gg as DialogOverlay,
  XH as DialogPortal,
  QH as DialogTitle,
  p7 as DialogTrigger,
  uV as Drawer,
  _7 as DrawerClose,
  fV as DrawerContent,
  vV as DrawerDescription,
  mV as DrawerFooter,
  pV as DrawerHeader,
  Ay as DrawerOverlay,
  dV as DrawerPortal,
  hV as DrawerTitle,
  C7 as DrawerTrigger,
  P7 as DropdownMenu,
  HV as DropdownMenuCheckboxItem,
  BV as DropdownMenuContent,
  N7 as DropdownMenuGroup,
  zV as DropdownMenuItem,
  VV as DropdownMenuLabel,
  T7 as DropdownMenuPortal,
  O7 as DropdownMenuRadioGroup,
  WV as DropdownMenuRadioItem,
  GV as DropdownMenuSeparator,
  UV as DropdownMenuShortcut,
  M7 as DropdownMenuSub,
  FV as DropdownMenuSubContent,
  LV as DropdownMenuSubTrigger,
  R7 as DropdownMenuTrigger,
  A7 as Form,
  fG as FormControl,
  pG as FormDescription,
  D7 as FormField,
  uG as FormItem,
  dG as FormLabel,
  mG as FormMessage,
  j7 as HoverCard,
  _G as HoverCardContent,
  k7 as HoverCardTrigger,
  Nw as Input,
  LG as InputOTP,
  FG as InputOTPGroup,
  zG as InputOTPSeparator,
  BG as InputOTPSlot,
  mw as Label,
  uU as Menubar,
  vU as MenubarCheckboxItem,
  mU as MenubarContent,
  B7 as MenubarGroup,
  hU as MenubarItem,
  bU as MenubarLabel,
  F7 as MenubarMenu,
  z7 as MenubarPortal,
  W7 as MenubarRadioGroup,
  gU as MenubarRadioItem,
  yU as MenubarSeparator,
  wU as MenubarShortcut,
  H7 as MenubarSub,
  pU as MenubarSubContent,
  fU as MenubarSubTrigger,
  dU as MenubarTrigger,
  FU as NavigationMenu,
  WU as NavigationMenuContent,
  VU as NavigationMenuIndicator,
  G7 as NavigationMenuItem,
  U7 as NavigationMenuLink,
  BU as NavigationMenuList,
  HU as NavigationMenuTrigger,
  Dx as NavigationMenuViewport,
  GU as Pagination,
  UU as PaginationContent,
  XU as PaginationEllipsis,
  KU as PaginationItem,
  Md as PaginationLink,
  qU as PaginationNext,
  YU as PaginationPrevious,
  Y7 as Popover,
  u8 as PopoverContent,
  q7 as PopoverTrigger,
  b8 as Progress,
  T8 as RadioGroup,
  M8 as RadioGroupItem,
  eq as ResizableHandle,
  Q7 as ResizablePanel,
  Z7 as ResizablePanelGroup,
  gK as ScrollArea,
  V0 as ScrollBar,
  rq as Select,
  KK as SelectContent,
  oq as SelectGroup,
  qK as SelectItem,
  YK as SelectLabel,
  NS as SelectScrollDownButton,
  RS as SelectScrollUpButton,
  XK as SelectSeparator,
  UK as SelectTrigger,
  aq as SelectValue,
  OS as Separator,
  eY as Sheet,
  sq as SheetClose,
  DS as SheetContent,
  iY as SheetDescription,
  oY as SheetFooter,
  rY as SheetHeader,
  AS as SheetOverlay,
  tY as SheetPortal,
  aY as SheetTitle,
  iq as SheetTrigger,
  kY as Sidebar,
  GY as SidebarContent,
  WY as SidebarFooter,
  UY as SidebarGroup,
  YY as SidebarGroupAction,
  qY as SidebarGroupContent,
  KY as SidebarGroupLabel,
  HY as SidebarHeader,
  zY as SidebarInput,
  BY as SidebarInset,
  XY as SidebarMenu,
  e6 as SidebarMenuAction,
  t6 as SidebarMenuBadge,
  QY as SidebarMenuButton,
  JY as SidebarMenuItem,
  n6 as SidebarMenuSkeleton,
  r6 as SidebarMenuSub,
  a6 as SidebarMenuSubButton,
  o6 as SidebarMenuSubItem,
  jY as SidebarProvider,
  FY as SidebarRail,
  VY as SidebarSeparator,
  LY as SidebarTrigger,
  xm as Skeleton,
  _6 as Slider,
  r9 as Switch,
  o9 as Table,
  i9 as TableBody,
  d9 as TableCaption,
  u9 as TableCell,
  s9 as TableFooter,
  c9 as TableHead,
  a9 as TableHeader,
  l9 as TableRow,
  mq as Tabs,
  g9 as TabsContent,
  h9 as TabsList,
  v9 as TabsTrigger,
  b9 as Textarea,
  F9 as Toast,
  B9 as ToastAction,
  z9 as ToastClose,
  W9 as ToastDescription,
  vq as ToastProvider,
  H9 as ToastTitle,
  k9 as ToastViewport,
  Y9 as Toggle,
  q9 as ToggleGroup,
  X9 as ToggleGroupItem,
  NY as Tooltip,
  HS as TooltipContent,
  RY as TooltipProvider,
  TY as TooltipTrigger,
  TP as badgeVariants,
  zr as buttonVariants,
  zU as navigationMenuTriggerStyle,
  dq as toast,
  QC as toggleVariants,
  ps as useFormField,
  Os as useSidebar
};
