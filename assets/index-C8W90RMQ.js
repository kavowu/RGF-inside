function U2(n, i) {
  for (var l = 0; l < i.length; l++) {
    const o = i[l];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const c in o)
        if (c !== "default" && !(c in n)) {
          const d = Object.getOwnPropertyDescriptor(o, c);
          d &&
            Object.defineProperty(
              n,
              c,
              d.get ? d : { enumerable: !0, get: () => o[c] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const f of d.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = l(c);
    fetch(c.href, d);
  }
})();
function Yy(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var tf = { exports: {} },
  Sl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qg;
function G2() {
  if (qg) return Sl;
  qg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function l(o, c, d) {
    var f = null;
    if (
      (d !== void 0 && (f = "" + d),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      d = {};
      for (var p in c) p !== "key" && (d[p] = c[p]);
    } else d = c;
    return (
      (c = d.ref),
      { $$typeof: n, type: o, key: f, ref: c !== void 0 ? c : null, props: d }
    );
  }
  return ((Sl.Fragment = i), (Sl.jsx = l), (Sl.jsxs = l), Sl);
}
var Xg;
function Y2() {
  return (Xg || ((Xg = 1), (tf.exports = G2())), tf.exports);
}
var S = Y2(),
  ef = { exports: {} },
  wl = {},
  nf = { exports: {} },
  af = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pg;
function q2() {
  return (
    Pg ||
      ((Pg = 1),
      (function (n) {
        function i(N, B) {
          var H = N.length;
          N.push(B);
          t: for (; 0 < H; ) {
            var et = (H - 1) >>> 1,
              lt = N[et];
            if (0 < c(lt, B)) ((N[et] = B), (N[H] = lt), (H = et));
            else break t;
          }
        }
        function l(N) {
          return N.length === 0 ? null : N[0];
        }
        function o(N) {
          if (N.length === 0) return null;
          var B = N[0],
            H = N.pop();
          if (H !== B) {
            N[0] = H;
            t: for (var et = 0, lt = N.length, E = lt >>> 1; et < E; ) {
              var q = 2 * (et + 1) - 1,
                Y = N[q],
                J = q + 1,
                I = N[J];
              if (0 > c(Y, H))
                J < lt && 0 > c(I, Y)
                  ? ((N[et] = I), (N[J] = H), (et = J))
                  : ((N[et] = Y), (N[q] = H), (et = q));
              else if (J < lt && 0 > c(I, H))
                ((N[et] = I), (N[J] = H), (et = J));
              else break t;
            }
          }
          return B;
        }
        function c(N, B) {
          var H = N.sortIndex - B.sortIndex;
          return H !== 0 ? H : N.id - B.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          n.unstable_now = function () {
            return d.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var m = [],
          h = [],
          v = 1,
          g = null,
          b = 3,
          w = !1,
          A = !1,
          D = !1,
          z = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function F(N) {
          for (var B = l(h); B !== null; ) {
            if (B.callback === null) o(h);
            else if (B.startTime <= N)
              (o(h), (B.sortIndex = B.expirationTime), i(m, B));
            else break;
            B = l(h);
          }
        }
        function Z(N) {
          if (((D = !1), F(N), !A))
            if (l(m) !== null) ((A = !0), W || ((W = !0), pt()));
            else {
              var B = l(h);
              B !== null && bt(Z, B.startTime - N);
            }
        }
        var W = !1,
          Q = -1,
          G = 5,
          ot = -1;
        function ft() {
          return z ? !0 : !(n.unstable_now() - ot < G);
        }
        function wt() {
          if (((z = !1), W)) {
            var N = n.unstable_now();
            ot = N;
            var B = !0;
            try {
              t: {
                ((A = !1), D && ((D = !1), P(Q), (Q = -1)), (w = !0));
                var H = b;
                try {
                  e: {
                    for (
                      F(N), g = l(m);
                      g !== null && !(g.expirationTime > N && ft());
                    ) {
                      var et = g.callback;
                      if (typeof et == "function") {
                        ((g.callback = null), (b = g.priorityLevel));
                        var lt = et(g.expirationTime <= N);
                        if (((N = n.unstable_now()), typeof lt == "function")) {
                          ((g.callback = lt), F(N), (B = !0));
                          break e;
                        }
                        (g === l(m) && o(m), F(N));
                      } else o(m);
                      g = l(m);
                    }
                    if (g !== null) B = !0;
                    else {
                      var E = l(h);
                      (E !== null && bt(Z, E.startTime - N), (B = !1));
                    }
                  }
                  break t;
                } finally {
                  ((g = null), (b = H), (w = !1));
                }
                B = void 0;
              }
            } finally {
              B ? pt() : (W = !1);
            }
          }
        }
        var pt;
        if (typeof L == "function")
          pt = function () {
            L(wt);
          };
        else if (typeof MessageChannel < "u") {
          var yt = new MessageChannel(),
            vt = yt.port2;
          ((yt.port1.onmessage = wt),
            (pt = function () {
              vt.postMessage(null);
            }));
        } else
          pt = function () {
            O(wt, 0);
          };
        function bt(N, B) {
          Q = O(function () {
            N(n.unstable_now());
          }, B);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (n.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (G = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_next = function (N) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = b;
            }
            var H = b;
            b = B;
            try {
              return N();
            } finally {
              b = H;
            }
          }),
          (n.unstable_requestPaint = function () {
            z = !0;
          }),
          (n.unstable_runWithPriority = function (N, B) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var H = b;
            b = N;
            try {
              return B();
            } finally {
              b = H;
            }
          }),
          (n.unstable_scheduleCallback = function (N, B, H) {
            var et = n.unstable_now();
            switch (
              (typeof H == "object" && H !== null
                ? ((H = H.delay),
                  (H = typeof H == "number" && 0 < H ? et + H : et))
                : (H = et),
              N)
            ) {
              case 1:
                var lt = -1;
                break;
              case 2:
                lt = 250;
                break;
              case 5:
                lt = 1073741823;
                break;
              case 4:
                lt = 1e4;
                break;
              default:
                lt = 5e3;
            }
            return (
              (lt = H + lt),
              (N = {
                id: v++,
                callback: B,
                priorityLevel: N,
                startTime: H,
                expirationTime: lt,
                sortIndex: -1,
              }),
              H > et
                ? ((N.sortIndex = H),
                  i(h, N),
                  l(m) === null &&
                    N === l(h) &&
                    (D ? (P(Q), (Q = -1)) : (D = !0), bt(Z, H - et)))
                : ((N.sortIndex = lt),
                  i(m, N),
                  A || w || ((A = !0), W || ((W = !0), pt()))),
              N
            );
          }),
          (n.unstable_shouldYield = ft),
          (n.unstable_wrapCallback = function (N) {
            var B = b;
            return function () {
              var H = b;
              b = B;
              try {
                return N.apply(this, arguments);
              } finally {
                b = H;
              }
            };
          }));
      })(af)),
    af
  );
}
var Kg;
function X2() {
  return (Kg || ((Kg = 1), (nf.exports = q2())), nf.exports);
}
var sf = { exports: {} },
  gt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qg;
function P2() {
  if (Qg) return gt;
  Qg = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function w(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (b && E[b]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    z = {};
  function O(E, q, Y) {
    ((this.props = E),
      (this.context = q),
      (this.refs = z),
      (this.updater = Y || A));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (E, q) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, q, "setState");
    }),
    (O.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function P() {}
  P.prototype = O.prototype;
  function L(E, q, Y) {
    ((this.props = E),
      (this.context = q),
      (this.refs = z),
      (this.updater = Y || A));
  }
  var F = (L.prototype = new P());
  ((F.constructor = L), D(F, O.prototype), (F.isPureReactComponent = !0));
  var Z = Array.isArray;
  function W() {}
  var Q = { H: null, A: null, T: null, S: null },
    G = Object.prototype.hasOwnProperty;
  function ot(E, q, Y) {
    var J = Y.ref;
    return {
      $$typeof: n,
      type: E,
      key: q,
      ref: J !== void 0 ? J : null,
      props: Y,
    };
  }
  function ft(E, q) {
    return ot(E.type, q, E.props);
  }
  function wt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === n;
  }
  function pt(E) {
    var q = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (Y) {
        return q[Y];
      })
    );
  }
  var yt = /\/+/g;
  function vt(E, q) {
    return typeof E == "object" && E !== null && E.key != null
      ? pt("" + E.key)
      : q.toString(36);
  }
  function bt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(W, W)
            : ((E.status = "pending"),
              E.then(
                function (q) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = q));
                },
                function (q) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = q));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function N(E, q, Y, J, I) {
    var rt = typeof E;
    (rt === "undefined" || rt === "boolean") && (E = null);
    var it = !1;
    if (E === null) it = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          it = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case n:
            case i:
              it = !0;
              break;
            case v:
              return ((it = E._init), N(it(E._payload), q, Y, J, I));
          }
      }
    if (it)
      return (
        (I = I(E)),
        (it = J === "" ? "." + vt(E, 0) : J),
        Z(I)
          ? ((Y = ""),
            it != null && (Y = it.replace(yt, "$&/") + "/"),
            N(I, q, Y, "", function (ce) {
              return ce;
            }))
          : I != null &&
            (wt(I) &&
              (I = ft(
                I,
                Y +
                  (I.key == null || (E && E.key === I.key)
                    ? ""
                    : ("" + I.key).replace(yt, "$&/") + "/") +
                  it,
              )),
            q.push(I)),
        1
      );
    it = 0;
    var ht = J === "" ? "." : J + ":";
    if (Z(E))
      for (var Nt = 0; Nt < E.length; Nt++)
        ((J = E[Nt]), (rt = ht + vt(J, Nt)), (it += N(J, q, Y, rt, I)));
    else if (((Nt = w(E)), typeof Nt == "function"))
      for (E = Nt.call(E), Nt = 0; !(J = E.next()).done; )
        ((J = J.value), (rt = ht + vt(J, Nt++)), (it += N(J, q, Y, rt, I)));
    else if (rt === "object") {
      if (typeof E.then == "function") return N(bt(E), q, Y, J, I);
      throw (
        (q = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (q === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : q) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return it;
  }
  function B(E, q, Y) {
    if (E == null) return E;
    var J = [],
      I = 0;
    return (
      N(E, J, "", "", function (rt) {
        return q.call(Y, rt, I++);
      }),
      J
    );
  }
  function H(E) {
    if (E._status === -1) {
      var q = E._result;
      ((q = q()),
        q.then(
          function (Y) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = Y));
          },
          function (Y) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = Y));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = q)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var et =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var q = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(q)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    lt = {
      map: B,
      forEach: function (E, q, Y) {
        B(
          E,
          function () {
            q.apply(this, arguments);
          },
          Y,
        );
      },
      count: function (E) {
        var q = 0;
        return (
          B(E, function () {
            q++;
          }),
          q
        );
      },
      toArray: function (E) {
        return (
          B(E, function (q) {
            return q;
          }) || []
        );
      },
      only: function (E) {
        if (!wt(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (gt.Activity = g),
    (gt.Children = lt),
    (gt.Component = O),
    (gt.Fragment = l),
    (gt.Profiler = c),
    (gt.PureComponent = L),
    (gt.StrictMode = o),
    (gt.Suspense = m),
    (gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (gt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return Q.H.useMemoCache(E);
      },
    }),
    (gt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (gt.cacheSignal = function () {
      return null;
    }),
    (gt.cloneElement = function (E, q, Y) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var J = D({}, E.props),
        I = E.key;
      if (q != null)
        for (rt in (q.key !== void 0 && (I = "" + q.key), q))
          !G.call(q, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && q.ref === void 0) ||
            (J[rt] = q[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) J.children = Y;
      else if (1 < rt) {
        for (var it = Array(rt), ht = 0; ht < rt; ht++)
          it[ht] = arguments[ht + 2];
        J.children = it;
      }
      return ot(E.type, I, J);
    }),
    (gt.createContext = function (E) {
      return (
        (E = {
          $$typeof: f,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: d, _context: E }),
        E
      );
    }),
    (gt.createElement = function (E, q, Y) {
      var J,
        I = {},
        rt = null;
      if (q != null)
        for (J in (q.key !== void 0 && (rt = "" + q.key), q))
          G.call(q, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (I[J] = q[J]);
      var it = arguments.length - 2;
      if (it === 1) I.children = Y;
      else if (1 < it) {
        for (var ht = Array(it), Nt = 0; Nt < it; Nt++)
          ht[Nt] = arguments[Nt + 2];
        I.children = ht;
      }
      if (E && E.defaultProps)
        for (J in ((it = E.defaultProps), it))
          I[J] === void 0 && (I[J] = it[J]);
      return ot(E, rt, I);
    }),
    (gt.createRef = function () {
      return { current: null };
    }),
    (gt.forwardRef = function (E) {
      return { $$typeof: p, render: E };
    }),
    (gt.isValidElement = wt),
    (gt.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: H };
    }),
    (gt.memo = function (E, q) {
      return { $$typeof: h, type: E, compare: q === void 0 ? null : q };
    }),
    (gt.startTransition = function (E) {
      var q = Q.T,
        Y = {};
      Q.T = Y;
      try {
        var J = E(),
          I = Q.S;
        (I !== null && I(Y, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(W, et));
      } catch (rt) {
        et(rt);
      } finally {
        (q !== null && Y.types !== null && (q.types = Y.types), (Q.T = q));
      }
    }),
    (gt.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (gt.use = function (E) {
      return Q.H.use(E);
    }),
    (gt.useActionState = function (E, q, Y) {
      return Q.H.useActionState(E, q, Y);
    }),
    (gt.useCallback = function (E, q) {
      return Q.H.useCallback(E, q);
    }),
    (gt.useContext = function (E) {
      return Q.H.useContext(E);
    }),
    (gt.useDebugValue = function () {}),
    (gt.useDeferredValue = function (E, q) {
      return Q.H.useDeferredValue(E, q);
    }),
    (gt.useEffect = function (E, q) {
      return Q.H.useEffect(E, q);
    }),
    (gt.useEffectEvent = function (E) {
      return Q.H.useEffectEvent(E);
    }),
    (gt.useId = function () {
      return Q.H.useId();
    }),
    (gt.useImperativeHandle = function (E, q, Y) {
      return Q.H.useImperativeHandle(E, q, Y);
    }),
    (gt.useInsertionEffect = function (E, q) {
      return Q.H.useInsertionEffect(E, q);
    }),
    (gt.useLayoutEffect = function (E, q) {
      return Q.H.useLayoutEffect(E, q);
    }),
    (gt.useMemo = function (E, q) {
      return Q.H.useMemo(E, q);
    }),
    (gt.useOptimistic = function (E, q) {
      return Q.H.useOptimistic(E, q);
    }),
    (gt.useReducer = function (E, q, Y) {
      return Q.H.useReducer(E, q, Y);
    }),
    (gt.useRef = function (E) {
      return Q.H.useRef(E);
    }),
    (gt.useState = function (E) {
      return Q.H.useState(E);
    }),
    (gt.useSyncExternalStore = function (E, q, Y) {
      return Q.H.useSyncExternalStore(E, q, Y);
    }),
    (gt.useTransition = function () {
      return Q.H.useTransition();
    }),
    (gt.version = "19.2.1"),
    gt
  );
}
var Zg;
function Rr() {
  return (Zg || ((Zg = 1), (sf.exports = P2())), sf.exports);
}
var lf = { exports: {} },
  xe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fg;
function K2() {
  if (Fg) return xe;
  Fg = 1;
  var n = Rr();
  function i(m) {
    var h = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        h += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var o = {
      d: {
        f: l,
        r: function () {
          throw Error(i(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(m, h, v) {
    var g =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: g == null ? null : "" + g,
      children: m,
      containerInfo: h,
      implementation: v,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(m, h) {
    if (m === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (xe.createPortal = function (m, h) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(i(299));
      return d(m, h, null, v);
    }),
    (xe.flushSync = function (m) {
      var h = f.T,
        v = o.p;
      try {
        if (((f.T = null), (o.p = 2), m)) return m();
      } finally {
        ((f.T = h), (o.p = v), o.d.f());
      }
    }),
    (xe.preconnect = function (m, h) {
      typeof m == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        o.d.C(m, h));
    }),
    (xe.prefetchDNS = function (m) {
      typeof m == "string" && o.d.D(m);
    }),
    (xe.preinit = function (m, h) {
      if (typeof m == "string" && h && typeof h.as == "string") {
        var v = h.as,
          g = p(v, h.crossOrigin),
          b = typeof h.integrity == "string" ? h.integrity : void 0,
          w = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        v === "style"
          ? o.d.S(m, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: g,
              integrity: b,
              fetchPriority: w,
            })
          : v === "script" &&
            o.d.X(m, {
              crossOrigin: g,
              integrity: b,
              fetchPriority: w,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (xe.preinitModule = function (m, h) {
      if (typeof m == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var v = p(h.as, h.crossOrigin);
            o.d.M(m, {
              crossOrigin: v,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && o.d.M(m);
    }),
    (xe.preload = function (m, h) {
      if (
        typeof m == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var v = h.as,
          g = p(v, h.crossOrigin);
        o.d.L(m, v, {
          crossOrigin: g,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (xe.preloadModule = function (m, h) {
      if (typeof m == "string")
        if (h) {
          var v = p(h.as, h.crossOrigin);
          o.d.m(m, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: v,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else o.d.m(m);
    }),
    (xe.requestFormReset = function (m) {
      o.d.r(m);
    }),
    (xe.unstable_batchedUpdates = function (m, h) {
      return m(h);
    }),
    (xe.useFormState = function (m, h, v) {
      return f.H.useFormState(m, h, v);
    }),
    (xe.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (xe.version = "19.2.1"),
    xe
  );
}
var Jg;
function qy() {
  if (Jg) return lf.exports;
  Jg = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (lf.exports = K2()), lf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wg;
function Q2() {
  if (Wg) return wl;
  Wg = 1;
  var n = X2(),
    i = Rr(),
    l = qy();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      a = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (a = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? a : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (d(t) !== t) throw Error(o(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var a = t, s = e; ; ) {
      var r = a.return;
      if (r === null) break;
      var u = r.alternate;
      if (u === null) {
        if (((s = r.return), s !== null)) {
          a = s;
          continue;
        }
        break;
      }
      if (r.child === u.child) {
        for (u = r.child; u; ) {
          if (u === a) return (m(r), t);
          if (u === s) return (m(r), e);
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== s.return) ((a = r), (s = u));
      else {
        for (var y = !1, x = r.child; x; ) {
          if (x === a) {
            ((y = !0), (a = r), (s = u));
            break;
          }
          if (x === s) {
            ((y = !0), (s = r), (a = u));
            break;
          }
          x = x.sibling;
        }
        if (!y) {
          for (x = u.child; x; ) {
            if (x === a) {
              ((y = !0), (a = u), (s = r));
              break;
            }
            if (x === s) {
              ((y = !0), (s = u), (a = r));
              break;
            }
            x = x.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (a.alternate !== s) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    b = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    z = Symbol.for("react.strict_mode"),
    O = Symbol.for("react.profiler"),
    P = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    F = Symbol.for("react.forward_ref"),
    Z = Symbol.for("react.suspense"),
    W = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    G = Symbol.for("react.lazy"),
    ot = Symbol.for("react.activity"),
    ft = Symbol.for("react.memo_cache_sentinel"),
    wt = Symbol.iterator;
  function pt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (wt && t[wt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var yt = Symbol.for("react.client.reference");
  function vt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === yt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case D:
        return "Fragment";
      case O:
        return "Profiler";
      case z:
        return "StrictMode";
      case Z:
        return "Suspense";
      case W:
        return "SuspenseList";
      case ot:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case A:
          return "Portal";
        case L:
          return t.displayName || "Context";
        case P:
          return (t._context.displayName || "Context") + ".Consumer";
        case F:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Q:
          return (
            (e = t.displayName || null),
            e !== null ? e : vt(t.type) || "Memo"
          );
        case G:
          ((e = t._payload), (t = t._init));
          try {
            return vt(t(e));
          } catch {}
      }
    return null;
  }
  var bt = Array.isArray,
    N = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = { pending: !1, data: null, method: null, action: null },
    et = [],
    lt = -1;
  function E(t) {
    return { current: t };
  }
  function q(t) {
    0 > lt || ((t.current = et[lt]), (et[lt] = null), lt--);
  }
  function Y(t, e) {
    (lt++, (et[lt] = t.current), (t.current = e));
  }
  var J = E(null),
    I = E(null),
    rt = E(null),
    it = E(null);
  function ht(t, e) {
    switch ((Y(rt, e), Y(I, t), Y(J, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? dg(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = dg(e)), (t = hg(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (q(J), Y(J, t));
  }
  function Nt() {
    (q(J), q(I), q(rt));
  }
  function ce(t) {
    t.memoizedState !== null && Y(it, t);
    var e = J.current,
      a = hg(e, t.type);
    e !== a && (Y(I, t), Y(J, a));
  }
  function Se(t) {
    (I.current === t && (q(J), q(I)),
      it.current === t && (q(it), (yl._currentValue = H)));
  }
  var ue, _n;
  function fn(t) {
    if (ue === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        ((ue = (e && e[1]) || ""),
          (_n =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ue +
      t +
      _n
    );
  }
  var Ms = !1;
  function vi(t, e) {
    if (!t || Ms) return "";
    Ms = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (V) {
                  var k = V;
                }
                Reflect.construct(t, [], K);
              } else {
                try {
                  K.call();
                } catch (V) {
                  k = V;
                }
                t.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                k = V;
              }
              (K = t()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (V) {
            if (V && k && typeof V.stack == "string") return [V.stack, k.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name",
      );
      r &&
        r.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = s.DetermineComponentFrameRoot(),
        y = u[0],
        x = u[1];
      if (y && x) {
        var T = y.split(`
`),
          _ = x.split(`
`);
        for (
          r = s = 0;
          s < T.length && !T[s].includes("DetermineComponentFrameRoot");
        )
          s++;
        for (; r < _.length && !_[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (s === T.length || r === _.length)
          for (
            s = T.length - 1, r = _.length - 1;
            1 <= s && 0 <= r && T[s] !== _[r];
          )
            r--;
        for (; 1 <= s && 0 <= r; s--, r--)
          if (T[s] !== _[r]) {
            if (s !== 1 || r !== 1)
              do
                if ((s--, r--, 0 > r || T[s] !== _[r])) {
                  var U =
                    `
` + T[s].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", t.displayName)),
                    U
                  );
                }
              while (1 <= s && 0 <= r);
            break;
          }
      }
    } finally {
      ((Ms = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? fn(a) : "";
  }
  function La(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return fn(t.type);
      case 16:
        return fn("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? fn("Suspense Fallback")
          : fn("Suspense");
      case 19:
        return fn("SuspenseList");
      case 0:
      case 15:
        return vi(t.type, !1);
      case 11:
        return vi(t.type.render, !1);
      case 1:
        return vi(t.type, !0);
      case 31:
        return fn("Activity");
      default:
        return "";
    }
  }
  function Cs(t) {
    try {
      var e = "",
        a = null;
      do ((e += La(t, a)), (a = t), (t = t.return));
      while (t);
      return e;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  var Ue = Object.prototype.hasOwnProperty,
    Ns = n.unstable_scheduleCallback,
    Rs = n.unstable_cancelCallback,
    we = n.unstable_shouldYield,
    sa = n.unstable_requestPaint,
    Te = n.unstable_now,
    Yr = n.unstable_getCurrentPriorityLevel,
    Ua = n.unstable_ImmediatePriority,
    Kl = n.unstable_UserBlockingPriority,
    Ga = n.unstable_NormalPriority,
    Ds = n.unstable_LowPriority,
    zn = n.unstable_IdlePriority,
    Ql = n.log,
    la = n.unstable_setDisableYieldValue,
    Ya = null,
    Ae = null;
  function dn(t) {
    if (
      (typeof Ql == "function" && la(t),
      Ae && typeof Ae.setStrictMode == "function")
    )
      try {
        Ae.setStrictMode(Ya, t);
      } catch {}
  }
  var ye = Math.clz32 ? Math.clz32 : bn,
    qr = Math.log,
    Os = Math.LN2;
  function bn(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((qr(t) / Os) | 0)) | 0);
  }
  var xi = 256,
    bi = 262144,
    qa = 4194304;
  function Sn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function mt(t, e, a) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var r = 0,
      u = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var x = s & 134217727;
    return (
      x !== 0
        ? ((s = x & ~u),
          s !== 0
            ? (r = Sn(s))
            : ((y &= x),
              y !== 0
                ? (r = Sn(y))
                : a || ((a = x & ~t), a !== 0 && (r = Sn(a)))))
        : ((x = s & ~u),
          x !== 0
            ? (r = Sn(x))
            : y !== 0
              ? (r = Sn(y))
              : a || ((a = s & ~t), a !== 0 && (r = Sn(a)))),
      r === 0
        ? 0
        : e !== 0 &&
            e !== r &&
            (e & u) === 0 &&
            ((u = r & -r),
            (a = e & -e),
            u >= a || (u === 32 && (a & 4194048) !== 0))
          ? e
          : r
    );
  }
  function Yt(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function le(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ve() {
    var t = qa;
    return ((qa <<= 1), (qa & 62914560) === 0 && (qa = 4194304), t);
  }
  function oa(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function Pt(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Ne(t, e, a, s, r, u) {
    var y = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var x = t.entanglements,
      T = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var U = 31 - ye(a),
        K = 1 << U;
      ((x[U] = 0), (T[U] = -1));
      var k = _[U];
      if (k !== null)
        for (_[U] = null, U = 0; U < k.length; U++) {
          var V = k[U];
          V !== null && (V.lane &= -536870913);
        }
      a &= ~K;
    }
    (s !== 0 && Xa(t, s, 0),
      u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(y & ~e)));
  }
  function Xa(t, e, a) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var s = 31 - ye(e);
    ((t.entangledLanes |= e),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (a & 261930)));
  }
  function Re(t, e) {
    var a = (t.entangledLanes |= e);
    for (t = t.entanglements; a; ) {
      var s = 31 - ye(a),
        r = 1 << s;
      ((r & e) | (t[s] & e) && (t[s] |= e), (a &= ~r));
    }
  }
  function De(t, e) {
    var a = e & -e;
    return (
      (a = (a & 42) !== 0 ? 1 : Si(a)),
      (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    );
  }
  function Si(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function hn(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Xr() {
    var t = B.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : kg(t.type));
  }
  function $d(t, e) {
    var a = B.p;
    try {
      return ((B.p = t), e());
    } finally {
      B.p = a;
    }
  }
  var ra = Math.random().toString(36).slice(2),
    fe = "__reactFiber$" + ra,
    Oe = "__reactProps$" + ra,
    wi = "__reactContainer$" + ra,
    Pr = "__reactEvents$" + ra,
    Rb = "__reactListeners$" + ra,
    Db = "__reactHandles$" + ra,
    Id = "__reactResources$" + ra,
    js = "__reactMarker$" + ra;
  function Kr(t) {
    (delete t[fe], delete t[Oe], delete t[Pr], delete t[Rb], delete t[Db]);
  }
  function Ti(t) {
    var e = t[fe];
    if (e) return e;
    for (var a = t.parentNode; a; ) {
      if ((e = a[wi] || a[fe])) {
        if (
          ((a = e.alternate),
          e.child !== null || (a !== null && a.child !== null))
        )
          for (t = bg(t); t !== null; ) {
            if ((a = t[fe])) return a;
            t = bg(t);
          }
        return e;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function Ai(t) {
    if ((t = t[fe] || t[wi])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function _s(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Ei(t) {
    var e = t[Id];
    return (
      e ||
        (e = t[Id] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function oe(t) {
    t[js] = !0;
  }
  var th = new Set(),
    eh = {};
  function Pa(t, e) {
    (Mi(t, e), Mi(t + "Capture", e));
  }
  function Mi(t, e) {
    for (eh[t] = e, t = 0; t < e.length; t++) th.add(e[t]);
  }
  var Ob = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    nh = {},
    ah = {};
  function jb(t) {
    return Ue.call(ah, t)
      ? !0
      : Ue.call(nh, t)
        ? !1
        : Ob.test(t)
          ? (ah[t] = !0)
          : ((nh[t] = !0), !1);
  }
  function Zl(t, e, a) {
    if (jb(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + a);
      }
  }
  function Fl(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + a);
    }
  }
  function Hn(t, e, a, s) {
    if (s === null) t.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, "" + s);
    }
  }
  function Je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ih(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function _b(t, e, a) {
    var s = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var r = s.get,
        u = s.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (y) {
            ((a = "" + y), u.call(this, y));
          },
        }),
        Object.defineProperty(t, e, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (y) {
            a = "" + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Qr(t) {
    if (!t._valueTracker) {
      var e = ih(t) ? "checked" : "value";
      t._valueTracker = _b(t, e, "" + t[e]);
    }
  }
  function sh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(),
      s = "";
    return (
      t && (s = ih(t) ? (t.checked ? "true" : "false") : t.value),
      (t = s),
      t !== a ? (e.setValue(t), !0) : !1
    );
  }
  function Jl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var zb = /[\n"\\]/g;
  function We(t) {
    return t.replace(zb, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Zr(t, e, a, s, r, u, y, x) {
    ((t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      e != null
        ? y === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Je(e))
          : t.value !== "" + Je(e) && (t.value = "" + Je(e))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      e != null
        ? Fr(t, y, Je(e))
        : a != null
          ? Fr(t, y, Je(a))
          : s != null && t.removeAttribute("value"),
      r == null && u != null && (t.defaultChecked = !!u),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (t.name = "" + Je(x))
        : t.removeAttribute("name"));
  }
  function lh(t, e, a, s, r, u, y, x) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        Qr(t);
        return;
      }
      ((a = a != null ? "" + Je(a) : ""),
        (e = e != null ? "" + Je(e) : a),
        x || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((s = s ?? r),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (t.checked = x ? t.checked : !!s),
      (t.defaultChecked = !!s),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y),
      Qr(t));
  }
  function Fr(t, e, a) {
    (e === "number" && Jl(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function Ci(t, e, a, s) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < a.length; r++) e["$" + a[r]] = !0;
      for (a = 0; a < t.length; a++)
        ((r = e.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== r && (t[a].selected = r),
          r && s && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + Je(a), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === a) {
          ((t[r].selected = !0), s && (t[r].defaultSelected = !0));
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function oh(t, e, a) {
    if (
      e != null &&
      ((e = "" + Je(e)), e !== t.value && (t.value = e), a == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + Je(a) : "";
  }
  function rh(t, e, a, s) {
    if (e == null) {
      if (s != null) {
        if (a != null) throw Error(o(92));
        if (bt(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        a = s;
      }
      (a == null && (a = ""), (e = a));
    }
    ((a = Je(e)),
      (t.defaultValue = a),
      (s = t.textContent),
      s === a && s !== "" && s !== null && (t.value = s),
      Qr(t));
  }
  function Ni(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Hb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ch(t, e, a) {
    var s = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? s
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : s
        ? t.setProperty(e, a)
        : typeof a != "number" || a === 0 || Hb.has(e)
          ? e === "float"
            ? (t.cssFloat = a)
            : (t[e] = ("" + a).trim())
          : (t[e] = a + "px");
  }
  function uh(t, e, a) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), a != null)) {
      for (var s in a)
        !a.hasOwnProperty(s) ||
          (e != null && e.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? t.setProperty(s, "")
            : s === "float"
              ? (t.cssFloat = "")
              : (t[s] = ""));
      for (var r in e)
        ((s = e[r]), e.hasOwnProperty(r) && a[r] !== s && ch(t, r, s));
    } else for (var u in e) e.hasOwnProperty(u) && ch(t, u, e[u]);
  }
  function Jr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kb = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Vb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wl(t) {
    return Vb.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function kn() {}
  var Wr = null;
  function $r(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ri = null,
    Di = null;
  function fh(t) {
    var e = Ai(t);
    if (e && (t = e.stateNode)) {
      var a = t[Oe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Zr(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (e = a.name),
            a.type === "radio" && e != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + We("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < a.length;
              e++
            ) {
              var s = a[e];
              if (s !== t && s.form === t.form) {
                var r = s[Oe] || null;
                if (!r) throw Error(o(90));
                Zr(
                  s,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                );
              }
            }
            for (e = 0; e < a.length; e++)
              ((s = a[e]), s.form === t.form && sh(s));
          }
          break t;
        case "textarea":
          oh(t, a.value, a.defaultValue);
          break t;
        case "select":
          ((e = a.value), e != null && Ci(t, !!a.multiple, e, !1));
      }
    }
  }
  var Ir = !1;
  function dh(t, e, a) {
    if (Ir) return t(e, a);
    Ir = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (
        ((Ir = !1),
        (Ri !== null || Di !== null) &&
          (Lo(), Ri && ((e = Ri), (t = Di), (Di = Ri = null), fh(e), t)))
      )
        for (e = 0; e < t.length; e++) fh(t[e]);
    }
  }
  function zs(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var s = a[Oe] || null;
    if (s === null) return null;
    a = s[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((s = !s.disabled) ||
          ((t = t.type),
          (s = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !s));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(o(231, e, typeof a));
    return a;
  }
  var Vn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    tc = !1;
  if (Vn)
    try {
      var Hs = {};
      (Object.defineProperty(Hs, "passive", {
        get: function () {
          tc = !0;
        },
      }),
        window.addEventListener("test", Hs, Hs),
        window.removeEventListener("test", Hs, Hs));
    } catch {
      tc = !1;
    }
  var ca = null,
    ec = null,
    $l = null;
  function hh() {
    if ($l) return $l;
    var t,
      e = ec,
      a = e.length,
      s,
      r = "value" in ca ? ca.value : ca.textContent,
      u = r.length;
    for (t = 0; t < a && e[t] === r[t]; t++);
    var y = a - t;
    for (s = 1; s <= y && e[a - s] === r[u - s]; s++);
    return ($l = r.slice(t, 1 < s ? 1 - s : void 0));
  }
  function Il(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function to() {
    return !0;
  }
  function mh() {
    return !1;
  }
  function je(t) {
    function e(a, s, r, u, y) {
      ((this._reactName = a),
        (this._targetInst = r),
        (this.type = s),
        (this.nativeEvent = u),
        (this.target = y),
        (this.currentTarget = null));
      for (var x in t)
        t.hasOwnProperty(x) && ((a = t[x]), (this[x] = a ? a(u) : u[x]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? to
          : mh),
        (this.isPropagationStopped = mh),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = to));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = to));
        },
        persist: function () {},
        isPersistent: to,
      }),
      e
    );
  }
  var Ka = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eo = je(Ka),
    ks = g({}, Ka, { view: 0, detail: 0 }),
    Bb = je(ks),
    nc,
    ac,
    Vs,
    no = g({}, ks, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: sc,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Vs &&
              (Vs && t.type === "mousemove"
                ? ((nc = t.screenX - Vs.screenX), (ac = t.screenY - Vs.screenY))
                : (ac = nc = 0),
              (Vs = t)),
            nc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ac;
      },
    }),
    ph = je(no),
    Lb = g({}, no, { dataTransfer: 0 }),
    Ub = je(Lb),
    Gb = g({}, ks, { relatedTarget: 0 }),
    ic = je(Gb),
    Yb = g({}, Ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qb = je(Yb),
    Xb = g({}, Ka, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Pb = je(Xb),
    Kb = g({}, Ka, { data: 0 }),
    gh = je(Kb),
    Qb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Zb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Fb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jb(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Fb[t])
        ? !!e[t]
        : !1;
  }
  function sc() {
    return Jb;
  }
  var Wb = g({}, ks, {
      key: function (t) {
        if (t.key) {
          var e = Qb[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Il(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Zb[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sc,
      charCode: function (t) {
        return t.type === "keypress" ? Il(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Il(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    $b = je(Wb),
    Ib = g({}, no, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yh = je(Ib),
    t1 = g({}, ks, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sc,
    }),
    e1 = je(t1),
    n1 = g({}, Ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    a1 = je(n1),
    i1 = g({}, no, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    s1 = je(i1),
    l1 = g({}, Ka, { newState: 0, oldState: 0 }),
    o1 = je(l1),
    r1 = [9, 13, 27, 32],
    lc = Vn && "CompositionEvent" in window,
    Bs = null;
  Vn && "documentMode" in document && (Bs = document.documentMode);
  var c1 = Vn && "TextEvent" in window && !Bs,
    vh = Vn && (!lc || (Bs && 8 < Bs && 11 >= Bs)),
    xh = " ",
    bh = !1;
  function Sh(t, e) {
    switch (t) {
      case "keyup":
        return r1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wh(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Oi = !1;
  function u1(t, e) {
    switch (t) {
      case "compositionend":
        return wh(e);
      case "keypress":
        return e.which !== 32 ? null : ((bh = !0), xh);
      case "textInput":
        return ((t = e.data), t === xh && bh ? null : t);
      default:
        return null;
    }
  }
  function f1(t, e) {
    if (Oi)
      return t === "compositionend" || (!lc && Sh(t, e))
        ? ((t = hh()), ($l = ec = ca = null), (Oi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return vh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var d1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Th(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!d1[t.type] : e === "textarea";
  }
  function Ah(t, e, a, s) {
    (Ri ? (Di ? Di.push(s) : (Di = [s])) : (Ri = s),
      (e = Ko(e, "onChange")),
      0 < e.length &&
        ((a = new eo("onChange", "change", null, a, s)),
        t.push({ event: a, listeners: e })));
  }
  var Ls = null,
    Us = null;
  function h1(t) {
    lg(t, 0);
  }
  function ao(t) {
    var e = _s(t);
    if (sh(e)) return t;
  }
  function Eh(t, e) {
    if (t === "change") return e;
  }
  var Mh = !1;
  if (Vn) {
    var oc;
    if (Vn) {
      var rc = "oninput" in document;
      if (!rc) {
        var Ch = document.createElement("div");
        (Ch.setAttribute("oninput", "return;"),
          (rc = typeof Ch.oninput == "function"));
      }
      oc = rc;
    } else oc = !1;
    Mh = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function Nh() {
    Ls && (Ls.detachEvent("onpropertychange", Rh), (Us = Ls = null));
  }
  function Rh(t) {
    if (t.propertyName === "value" && ao(Us)) {
      var e = [];
      (Ah(e, Us, t, $r(t)), dh(h1, e));
    }
  }
  function m1(t, e, a) {
    t === "focusin"
      ? (Nh(), (Ls = e), (Us = a), Ls.attachEvent("onpropertychange", Rh))
      : t === "focusout" && Nh();
  }
  function p1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ao(Us);
  }
  function g1(t, e) {
    if (t === "click") return ao(e);
  }
  function y1(t, e) {
    if (t === "input" || t === "change") return ao(e);
  }
  function v1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ge = typeof Object.is == "function" ? Object.is : v1;
  function Gs(t, e) {
    if (Ge(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var a = Object.keys(t),
      s = Object.keys(e);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var r = a[s];
      if (!Ue.call(e, r) || !Ge(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Dh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Oh(t, e) {
    var a = Dh(t);
    t = 0;
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (((s = t + a.textContent.length), t <= e && s >= e))
          return { node: a, offset: e - t };
        t = s;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Dh(a);
    }
  }
  function jh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? jh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function _h(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Jl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Jl(t.document);
    }
    return e;
  }
  function cc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var x1 = Vn && "documentMode" in document && 11 >= document.documentMode,
    ji = null,
    uc = null,
    Ys = null,
    fc = !1;
  function zh(t, e, a) {
    var s =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fc ||
      ji == null ||
      ji !== Jl(s) ||
      ((s = ji),
      "selectionStart" in s && cc(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Ys && Gs(Ys, s)) ||
        ((Ys = s),
        (s = Ko(uc, "onSelect")),
        0 < s.length &&
          ((e = new eo("onSelect", "select", null, e, a)),
          t.push({ event: e, listeners: s }),
          (e.target = ji))));
  }
  function Qa(t, e) {
    var a = {};
    return (
      (a[t.toLowerCase()] = e.toLowerCase()),
      (a["Webkit" + t] = "webkit" + e),
      (a["Moz" + t] = "moz" + e),
      a
    );
  }
  var _i = {
      animationend: Qa("Animation", "AnimationEnd"),
      animationiteration: Qa("Animation", "AnimationIteration"),
      animationstart: Qa("Animation", "AnimationStart"),
      transitionrun: Qa("Transition", "TransitionRun"),
      transitionstart: Qa("Transition", "TransitionStart"),
      transitioncancel: Qa("Transition", "TransitionCancel"),
      transitionend: Qa("Transition", "TransitionEnd"),
    },
    dc = {},
    Hh = {};
  Vn &&
    ((Hh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _i.animationend.animation,
      delete _i.animationiteration.animation,
      delete _i.animationstart.animation),
    "TransitionEvent" in window || delete _i.transitionend.transition);
  function Za(t) {
    if (dc[t]) return dc[t];
    if (!_i[t]) return t;
    var e = _i[t],
      a;
    for (a in e) if (e.hasOwnProperty(a) && a in Hh) return (dc[t] = e[a]);
    return t;
  }
  var kh = Za("animationend"),
    Vh = Za("animationiteration"),
    Bh = Za("animationstart"),
    b1 = Za("transitionrun"),
    S1 = Za("transitionstart"),
    w1 = Za("transitioncancel"),
    Lh = Za("transitionend"),
    Uh = new Map(),
    hc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  hc.push("scrollEnd");
  function mn(t, e) {
    (Uh.set(t, e), Pa(e, [t]));
  }
  var io =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    $e = [],
    zi = 0,
    mc = 0;
  function so() {
    for (var t = zi, e = (mc = zi = 0); e < t; ) {
      var a = $e[e];
      $e[e++] = null;
      var s = $e[e];
      $e[e++] = null;
      var r = $e[e];
      $e[e++] = null;
      var u = $e[e];
      if ((($e[e++] = null), s !== null && r !== null)) {
        var y = s.pending;
        (y === null ? (r.next = r) : ((r.next = y.next), (y.next = r)),
          (s.pending = r));
      }
      u !== 0 && Gh(a, r, u);
    }
  }
  function lo(t, e, a, s) {
    (($e[zi++] = t),
      ($e[zi++] = e),
      ($e[zi++] = a),
      ($e[zi++] = s),
      (mc |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s));
  }
  function pc(t, e, a, s) {
    return (lo(t, e, a, s), oo(t));
  }
  function Fa(t, e) {
    return (lo(t, null, null, e), oo(t));
  }
  function Gh(t, e, a) {
    t.lanes |= a;
    var s = t.alternate;
    s !== null && (s.lanes |= a);
    for (var r = !1, u = t.return; u !== null; )
      ((u.childLanes |= a),
        (s = u.alternate),
        s !== null && (s.childLanes |= a),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - ye(a)),
          (t = u.hiddenUpdates),
          (s = t[r]),
          s === null ? (t[r] = [e]) : s.push(e),
          (e.lane = a | 536870912)),
        u)
      : null;
  }
  function oo(t) {
    if (50 < ul) throw ((ul = 0), (Au = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Hi = {};
  function T1(t, e, a, s) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ye(t, e, a, s) {
    return new T1(t, e, a, s);
  }
  function gc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Bn(t, e) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = Ye(t.tag, e, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = e),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (a.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function Yh(t, e) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (e = a.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ro(t, e, a, s, r, u) {
    var y = 0;
    if (((s = t), typeof t == "function")) gc(t) && (y = 1);
    else if (typeof t == "string")
      y = N2(t, a, J.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case ot:
          return (
            (t = Ye(31, a, e, r)),
            (t.elementType = ot),
            (t.lanes = u),
            t
          );
        case D:
          return Ja(a.children, r, u, e);
        case z:
          ((y = 8), (r |= 24));
          break;
        case O:
          return (
            (t = Ye(12, a, e, r | 2)),
            (t.elementType = O),
            (t.lanes = u),
            t
          );
        case Z:
          return ((t = Ye(13, a, e, r)), (t.elementType = Z), (t.lanes = u), t);
        case W:
          return ((t = Ye(19, a, e, r)), (t.elementType = W), (t.lanes = u), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case L:
                y = 10;
                break t;
              case P:
                y = 9;
                break t;
              case F:
                y = 11;
                break t;
              case Q:
                y = 14;
                break t;
              case G:
                ((y = 16), (s = null));
                break t;
            }
          ((y = 29),
            (a = Error(o(130, t === null ? "null" : typeof t, ""))),
            (s = null));
      }
    return (
      (e = Ye(y, a, e, r)),
      (e.elementType = t),
      (e.type = s),
      (e.lanes = u),
      e
    );
  }
  function Ja(t, e, a, s) {
    return ((t = Ye(7, t, s, e)), (t.lanes = a), t);
  }
  function yc(t, e, a) {
    return ((t = Ye(6, t, null, e)), (t.lanes = a), t);
  }
  function qh(t) {
    var e = Ye(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function vc(t, e, a) {
    return (
      (e = Ye(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = a),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Xh = new WeakMap();
  function Ie(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = Xh.get(t);
      return a !== void 0
        ? a
        : ((e = { value: t, source: e, stack: Cs(e) }), Xh.set(t, e), e);
    }
    return { value: t, source: e, stack: Cs(e) };
  }
  var ki = [],
    Vi = 0,
    co = null,
    qs = 0,
    tn = [],
    en = 0,
    ua = null,
    wn = 1,
    Tn = "";
  function Ln(t, e) {
    ((ki[Vi++] = qs), (ki[Vi++] = co), (co = t), (qs = e));
  }
  function Ph(t, e, a) {
    ((tn[en++] = wn), (tn[en++] = Tn), (tn[en++] = ua), (ua = t));
    var s = wn;
    t = Tn;
    var r = 32 - ye(s) - 1;
    ((s &= ~(1 << r)), (a += 1));
    var u = 32 - ye(e) + r;
    if (30 < u) {
      var y = r - (r % 5);
      ((u = (s & ((1 << y) - 1)).toString(32)),
        (s >>= y),
        (r -= y),
        (wn = (1 << (32 - ye(e) + r)) | (a << r) | s),
        (Tn = u + t));
    } else ((wn = (1 << u) | (a << r) | s), (Tn = t));
  }
  function xc(t) {
    t.return !== null && (Ln(t, 1), Ph(t, 1, 0));
  }
  function bc(t) {
    for (; t === co; )
      ((co = ki[--Vi]), (ki[Vi] = null), (qs = ki[--Vi]), (ki[Vi] = null));
    for (; t === ua; )
      ((ua = tn[--en]),
        (tn[en] = null),
        (Tn = tn[--en]),
        (tn[en] = null),
        (wn = tn[--en]),
        (tn[en] = null));
  }
  function Kh(t, e) {
    ((tn[en++] = wn),
      (tn[en++] = Tn),
      (tn[en++] = ua),
      (wn = e.id),
      (Tn = e.overflow),
      (ua = t));
  }
  var de = null,
    Lt = null,
    Rt = !1,
    fa = null,
    nn = !1,
    Sc = Error(o(519));
  function da(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Xs(Ie(e, t)), Sc);
  }
  function Qh(t) {
    var e = t.stateNode,
      a = t.type,
      s = t.memoizedProps;
    switch (((e[fe] = t), (e[Oe] = s), a)) {
      case "dialog":
        (Et("cancel", e), Et("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Et("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < dl.length; a++) Et(dl[a], e);
        break;
      case "source":
        Et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Et("error", e), Et("load", e));
        break;
      case "details":
        Et("toggle", e);
        break;
      case "input":
        (Et("invalid", e),
          lh(
            e,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ));
        break;
      case "select":
        Et("invalid", e);
        break;
      case "textarea":
        (Et("invalid", e), rh(e, s.value, s.defaultValue, s.children));
    }
    ((a = s.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      e.textContent === "" + a ||
      s.suppressHydrationWarning === !0 ||
      ug(e.textContent, a)
        ? (s.popover != null && (Et("beforetoggle", e), Et("toggle", e)),
          s.onScroll != null && Et("scroll", e),
          s.onScrollEnd != null && Et("scrollend", e),
          s.onClick != null && (e.onclick = kn),
          (e = !0))
        : (e = !1),
      e || da(t, !0));
  }
  function Zh(t) {
    for (de = t.return; de; )
      switch (de.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          de = de.return;
      }
  }
  function Bi(t) {
    if (t !== de) return !1;
    if (!Rt) return (Zh(t), (Rt = !0), !1);
    var e = t.tag,
      a;
    if (
      ((a = e !== 3 && e !== 27) &&
        ((a = e === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Lu(t.type, t.memoizedProps))),
        (a = !a)),
      a && Lt && da(t),
      Zh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Lt = xg(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Lt = xg(t);
    } else
      e === 27
        ? ((e = Lt), Ma(t.type) ? ((t = Xu), (Xu = null), (Lt = t)) : (Lt = e))
        : (Lt = de ? sn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Wa() {
    ((Lt = de = null), (Rt = !1));
  }
  function wc() {
    var t = fa;
    return (
      t !== null &&
        (ke === null ? (ke = t) : ke.push.apply(ke, t), (fa = null)),
      t
    );
  }
  function Xs(t) {
    fa === null ? (fa = [t]) : fa.push(t);
  }
  var Tc = E(null),
    $a = null,
    Un = null;
  function ha(t, e, a) {
    (Y(Tc, e._currentValue), (e._currentValue = a));
  }
  function Gn(t) {
    ((t._currentValue = Tc.current), q(Tc));
  }
  function Ac(t, e, a) {
    for (; t !== null; ) {
      var s = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
          : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Ec(t, e, a, s) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var u = r.dependencies;
      if (u !== null) {
        var y = r.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var x = u;
          u = r;
          for (var T = 0; T < e.length; T++)
            if (x.context === e[T]) {
              ((u.lanes |= a),
                (x = u.alternate),
                x !== null && (x.lanes |= a),
                Ac(u.return, a, t),
                s || (y = null));
              break t;
            }
          u = x.next;
        }
      } else if (r.tag === 18) {
        if (((y = r.return), y === null)) throw Error(o(341));
        ((y.lanes |= a),
          (u = y.alternate),
          u !== null && (u.lanes |= a),
          Ac(y, a, t),
          (y = null));
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((r = y.sibling), r !== null)) {
            ((r.return = y.return), (y = r));
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function Li(t, e, a, s) {
    t = null;
    for (var r = e, u = !1; r !== null; ) {
      if (!u) {
        if ((r.flags & 524288) !== 0) u = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(o(387));
        if (((y = y.memoizedProps), y !== null)) {
          var x = r.type;
          Ge(r.pendingProps.value, y.value) ||
            (t !== null ? t.push(x) : (t = [x]));
        }
      } else if (r === it.current) {
        if (((y = r.alternate), y === null)) throw Error(o(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(yl) : (t = [yl]));
      }
      r = r.return;
    }
    (t !== null && Ec(e, t, a, s), (e.flags |= 262144));
  }
  function uo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ge(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ia(t) {
    (($a = t),
      (Un = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function he(t) {
    return Fh($a, t);
  }
  function fo(t, e) {
    return ($a === null && Ia(t), Fh(t, e));
  }
  function Fh(t, e) {
    var a = e._currentValue;
    if (((e = { context: e, memoizedValue: a, next: null }), Un === null)) {
      if (t === null) throw Error(o(308));
      ((Un = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Un = Un.next = e;
    return a;
  }
  var A1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (a, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    E1 = n.unstable_scheduleCallback,
    M1 = n.unstable_NormalPriority,
    It = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mc() {
    return { controller: new A1(), data: new Map(), refCount: 0 };
  }
  function Ps(t) {
    (t.refCount--,
      t.refCount === 0 &&
        E1(M1, function () {
          t.controller.abort();
        }));
  }
  var Ks = null,
    Cc = 0,
    Ui = 0,
    Gi = null;
  function C1(t, e) {
    if (Ks === null) {
      var a = (Ks = []);
      ((Cc = 0),
        (Ui = Du()),
        (Gi = {
          status: "pending",
          value: void 0,
          then: function (s) {
            a.push(s);
          },
        }));
    }
    return (Cc++, e.then(Jh, Jh), e);
  }
  function Jh() {
    if (--Cc === 0 && Ks !== null) {
      Gi !== null && (Gi.status = "fulfilled");
      var t = Ks;
      ((Ks = null), (Ui = 0), (Gi = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function N1(t, e) {
    var a = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          a.push(r);
        },
      };
    return (
      t.then(
        function () {
          ((s.status = "fulfilled"), (s.value = e));
          for (var r = 0; r < a.length; r++) (0, a[r])(e);
        },
        function (r) {
          for (s.status = "rejected", s.reason = r, r = 0; r < a.length; r++)
            (0, a[r])(void 0);
        },
      ),
      s
    );
  }
  var Wh = N.S;
  N.S = function (t, e) {
    ((zp = Te()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        C1(t, e),
      Wh !== null && Wh(t, e));
  };
  var ti = E(null);
  function Nc() {
    var t = ti.current;
    return t !== null ? t : Bt.pooledCache;
  }
  function ho(t, e) {
    e === null ? Y(ti, ti.current) : Y(ti, e.pool);
  }
  function $h() {
    var t = Nc();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var Yi = Error(o(460)),
    Rc = Error(o(474)),
    mo = Error(o(542)),
    po = { then: function () {} };
  function Ih(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function tm(t, e, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(e) : a !== e && (e.then(kn, kn), (e = a)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), nm(t), t);
      default:
        if (typeof e.status == "string") e.then(kn, kn);
        else {
          if (((t = Bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (s) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "fulfilled"), (r.value = s));
                }
              },
              function (s) {
                if (e.status === "pending") {
                  var r = e;
                  ((r.status = "rejected"), (r.reason = s));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), nm(t), t);
        }
        throw ((ni = e), Yi);
    }
  }
  function ei(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((ni = a), Yi)
        : a;
    }
  }
  var ni = null;
  function em() {
    if (ni === null) throw Error(o(459));
    var t = ni;
    return ((ni = null), t);
  }
  function nm(t) {
    if (t === Yi || t === mo) throw Error(o(483));
  }
  var qi = null,
    Qs = 0;
  function go(t) {
    var e = Qs;
    return ((Qs += 1), qi === null && (qi = []), tm(qi, t, e));
  }
  function Zs(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function yo(t, e) {
    throw e.$$typeof === b
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function am(t) {
    function e(R, M) {
      if (t) {
        var j = R.deletions;
        j === null ? ((R.deletions = [M]), (R.flags |= 16)) : j.push(M);
      }
    }
    function a(R, M) {
      if (!t) return null;
      for (; M !== null; ) (e(R, M), (M = M.sibling));
      return null;
    }
    function s(R) {
      for (var M = new Map(); R !== null; )
        (R.key !== null ? M.set(R.key, R) : M.set(R.index, R), (R = R.sibling));
      return M;
    }
    function r(R, M) {
      return ((R = Bn(R, M)), (R.index = 0), (R.sibling = null), R);
    }
    function u(R, M, j) {
      return (
        (R.index = j),
        t
          ? ((j = R.alternate),
            j !== null
              ? ((j = j.index), j < M ? ((R.flags |= 67108866), M) : j)
              : ((R.flags |= 67108866), M))
          : ((R.flags |= 1048576), M)
      );
    }
    function y(R) {
      return (t && R.alternate === null && (R.flags |= 67108866), R);
    }
    function x(R, M, j, X) {
      return M === null || M.tag !== 6
        ? ((M = yc(j, R.mode, X)), (M.return = R), M)
        : ((M = r(M, j)), (M.return = R), M);
    }
    function T(R, M, j, X) {
      var ct = j.type;
      return ct === D
        ? U(R, M, j.props.children, X, j.key)
        : M !== null &&
            (M.elementType === ct ||
              (typeof ct == "object" &&
                ct !== null &&
                ct.$$typeof === G &&
                ei(ct) === M.type))
          ? ((M = r(M, j.props)), Zs(M, j), (M.return = R), M)
          : ((M = ro(j.type, j.key, j.props, null, R.mode, X)),
            Zs(M, j),
            (M.return = R),
            M);
    }
    function _(R, M, j, X) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== j.containerInfo ||
        M.stateNode.implementation !== j.implementation
        ? ((M = vc(j, R.mode, X)), (M.return = R), M)
        : ((M = r(M, j.children || [])), (M.return = R), M);
    }
    function U(R, M, j, X, ct) {
      return M === null || M.tag !== 7
        ? ((M = Ja(j, R.mode, X, ct)), (M.return = R), M)
        : ((M = r(M, j)), (M.return = R), M);
    }
    function K(R, M, j) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return ((M = yc("" + M, R.mode, j)), (M.return = R), M);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case w:
            return (
              (j = ro(M.type, M.key, M.props, null, R.mode, j)),
              Zs(j, M),
              (j.return = R),
              j
            );
          case A:
            return ((M = vc(M, R.mode, j)), (M.return = R), M);
          case G:
            return ((M = ei(M)), K(R, M, j));
        }
        if (bt(M) || pt(M))
          return ((M = Ja(M, R.mode, j, null)), (M.return = R), M);
        if (typeof M.then == "function") return K(R, go(M), j);
        if (M.$$typeof === L) return K(R, fo(R, M), j);
        yo(R, M);
      }
      return null;
    }
    function k(R, M, j, X) {
      var ct = M !== null ? M.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return ct !== null ? null : x(R, M, "" + j, X);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case w:
            return j.key === ct ? T(R, M, j, X) : null;
          case A:
            return j.key === ct ? _(R, M, j, X) : null;
          case G:
            return ((j = ei(j)), k(R, M, j, X));
        }
        if (bt(j) || pt(j)) return ct !== null ? null : U(R, M, j, X, null);
        if (typeof j.then == "function") return k(R, M, go(j), X);
        if (j.$$typeof === L) return k(R, M, fo(R, j), X);
        yo(R, j);
      }
      return null;
    }
    function V(R, M, j, X, ct) {
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return ((R = R.get(j) || null), x(M, R, "" + X, ct));
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case w:
            return (
              (R = R.get(X.key === null ? j : X.key) || null),
              T(M, R, X, ct)
            );
          case A:
            return (
              (R = R.get(X.key === null ? j : X.key) || null),
              _(M, R, X, ct)
            );
          case G:
            return ((X = ei(X)), V(R, M, j, X, ct));
        }
        if (bt(X) || pt(X))
          return ((R = R.get(j) || null), U(M, R, X, ct, null));
        if (typeof X.then == "function") return V(R, M, j, go(X), ct);
        if (X.$$typeof === L) return V(R, M, j, fo(M, X), ct);
        yo(M, X);
      }
      return null;
    }
    function tt(R, M, j, X) {
      for (
        var ct = null, Dt = null, st = M, St = (M = 0), Ct = null;
        st !== null && St < j.length;
        St++
      ) {
        st.index > St ? ((Ct = st), (st = null)) : (Ct = st.sibling);
        var Ot = k(R, st, j[St], X);
        if (Ot === null) {
          st === null && (st = Ct);
          break;
        }
        (t && st && Ot.alternate === null && e(R, st),
          (M = u(Ot, M, St)),
          Dt === null ? (ct = Ot) : (Dt.sibling = Ot),
          (Dt = Ot),
          (st = Ct));
      }
      if (St === j.length) return (a(R, st), Rt && Ln(R, St), ct);
      if (st === null) {
        for (; St < j.length; St++)
          ((st = K(R, j[St], X)),
            st !== null &&
              ((M = u(st, M, St)),
              Dt === null ? (ct = st) : (Dt.sibling = st),
              (Dt = st)));
        return (Rt && Ln(R, St), ct);
      }
      for (st = s(st); St < j.length; St++)
        ((Ct = V(st, R, St, j[St], X)),
          Ct !== null &&
            (t &&
              Ct.alternate !== null &&
              st.delete(Ct.key === null ? St : Ct.key),
            (M = u(Ct, M, St)),
            Dt === null ? (ct = Ct) : (Dt.sibling = Ct),
            (Dt = Ct)));
      return (
        t &&
          st.forEach(function (Oa) {
            return e(R, Oa);
          }),
        Rt && Ln(R, St),
        ct
      );
    }
    function ut(R, M, j, X) {
      if (j == null) throw Error(o(151));
      for (
        var ct = null,
          Dt = null,
          st = M,
          St = (M = 0),
          Ct = null,
          Ot = j.next();
        st !== null && !Ot.done;
        St++, Ot = j.next()
      ) {
        st.index > St ? ((Ct = st), (st = null)) : (Ct = st.sibling);
        var Oa = k(R, st, Ot.value, X);
        if (Oa === null) {
          st === null && (st = Ct);
          break;
        }
        (t && st && Oa.alternate === null && e(R, st),
          (M = u(Oa, M, St)),
          Dt === null ? (ct = Oa) : (Dt.sibling = Oa),
          (Dt = Oa),
          (st = Ct));
      }
      if (Ot.done) return (a(R, st), Rt && Ln(R, St), ct);
      if (st === null) {
        for (; !Ot.done; St++, Ot = j.next())
          ((Ot = K(R, Ot.value, X)),
            Ot !== null &&
              ((M = u(Ot, M, St)),
              Dt === null ? (ct = Ot) : (Dt.sibling = Ot),
              (Dt = Ot)));
        return (Rt && Ln(R, St), ct);
      }
      for (st = s(st); !Ot.done; St++, Ot = j.next())
        ((Ot = V(st, R, St, Ot.value, X)),
          Ot !== null &&
            (t &&
              Ot.alternate !== null &&
              st.delete(Ot.key === null ? St : Ot.key),
            (M = u(Ot, M, St)),
            Dt === null ? (ct = Ot) : (Dt.sibling = Ot),
            (Dt = Ot)));
      return (
        t &&
          st.forEach(function (L2) {
            return e(R, L2);
          }),
        Rt && Ln(R, St),
        ct
      );
    }
    function Vt(R, M, j, X) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === D &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case w:
            t: {
              for (var ct = j.key; M !== null; ) {
                if (M.key === ct) {
                  if (((ct = j.type), ct === D)) {
                    if (M.tag === 7) {
                      (a(R, M.sibling),
                        (X = r(M, j.props.children)),
                        (X.return = R),
                        (R = X));
                      break t;
                    }
                  } else if (
                    M.elementType === ct ||
                    (typeof ct == "object" &&
                      ct !== null &&
                      ct.$$typeof === G &&
                      ei(ct) === M.type)
                  ) {
                    (a(R, M.sibling),
                      (X = r(M, j.props)),
                      Zs(X, j),
                      (X.return = R),
                      (R = X));
                    break t;
                  }
                  a(R, M);
                  break;
                } else e(R, M);
                M = M.sibling;
              }
              j.type === D
                ? ((X = Ja(j.props.children, R.mode, X, j.key)),
                  (X.return = R),
                  (R = X))
                : ((X = ro(j.type, j.key, j.props, null, R.mode, X)),
                  Zs(X, j),
                  (X.return = R),
                  (R = X));
            }
            return y(R);
          case A:
            t: {
              for (ct = j.key; M !== null; ) {
                if (M.key === ct)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === j.containerInfo &&
                    M.stateNode.implementation === j.implementation
                  ) {
                    (a(R, M.sibling),
                      (X = r(M, j.children || [])),
                      (X.return = R),
                      (R = X));
                    break t;
                  } else {
                    a(R, M);
                    break;
                  }
                else e(R, M);
                M = M.sibling;
              }
              ((X = vc(j, R.mode, X)), (X.return = R), (R = X));
            }
            return y(R);
          case G:
            return ((j = ei(j)), Vt(R, M, j, X));
        }
        if (bt(j)) return tt(R, M, j, X);
        if (pt(j)) {
          if (((ct = pt(j)), typeof ct != "function")) throw Error(o(150));
          return ((j = ct.call(j)), ut(R, M, j, X));
        }
        if (typeof j.then == "function") return Vt(R, M, go(j), X);
        if (j.$$typeof === L) return Vt(R, M, fo(R, j), X);
        yo(R, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          M !== null && M.tag === 6
            ? (a(R, M.sibling), (X = r(M, j)), (X.return = R), (R = X))
            : (a(R, M), (X = yc(j, R.mode, X)), (X.return = R), (R = X)),
          y(R))
        : a(R, M);
    }
    return function (R, M, j, X) {
      try {
        Qs = 0;
        var ct = Vt(R, M, j, X);
        return ((qi = null), ct);
      } catch (st) {
        if (st === Yi || st === mo) throw st;
        var Dt = Ye(29, st, null, R.mode);
        return ((Dt.lanes = X), (Dt.return = R), Dt);
      } finally {
      }
    };
  }
  var ai = am(!0),
    im = am(!1),
    ma = !1;
  function Dc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Oc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function pa(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(t, e, a) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (jt & 2) !== 0)) {
      var r = s.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (s.pending = e),
        (e = oo(t)),
        Gh(t, null, a),
        e
      );
    }
    return (lo(t, s, e, a), oo(t));
  }
  function Fs(t, e, a) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
    ) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (a |= s), (e.lanes = a), Re(t, a));
    }
  }
  function jc(t, e) {
    var a = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), a === s)) {
      var r = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (u === null ? (r = u = y) : (u = u.next = y), (a = a.next));
        } while (a !== null);
        u === null ? (r = u = e) : (u = u.next = e);
      } else r = u = e;
      ((a = {
        baseState: s.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: u,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = e) : (t.next = e),
      (a.lastBaseUpdate = e));
  }
  var _c = !1;
  function Js() {
    if (_c) {
      var t = Gi;
      if (t !== null) throw t;
    }
  }
  function Ws(t, e, a, s) {
    _c = !1;
    var r = t.updateQueue;
    ma = !1;
    var u = r.firstBaseUpdate,
      y = r.lastBaseUpdate,
      x = r.shared.pending;
    if (x !== null) {
      r.shared.pending = null;
      var T = x,
        _ = T.next;
      ((T.next = null), y === null ? (u = _) : (y.next = _), (y = T));
      var U = t.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (x = U.lastBaseUpdate),
        x !== y &&
          (x === null ? (U.firstBaseUpdate = _) : (x.next = _),
          (U.lastBaseUpdate = T)));
    }
    if (u !== null) {
      var K = r.baseState;
      ((y = 0), (U = _ = T = null), (x = u));
      do {
        var k = x.lane & -536870913,
          V = k !== x.lane;
        if (V ? (Mt & k) === k : (s & k) === k) {
          (k !== 0 && k === Ui && (_c = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var tt = t,
              ut = x;
            k = e;
            var Vt = a;
            switch (ut.tag) {
              case 1:
                if (((tt = ut.payload), typeof tt == "function")) {
                  K = tt.call(Vt, K, k);
                  break t;
                }
                K = tt;
                break t;
              case 3:
                tt.flags = (tt.flags & -65537) | 128;
              case 0:
                if (
                  ((tt = ut.payload),
                  (k = typeof tt == "function" ? tt.call(Vt, K, k) : tt),
                  k == null)
                )
                  break t;
                K = g({}, K, k);
                break t;
              case 2:
                ma = !0;
            }
          }
          ((k = x.callback),
            k !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = r.callbacks),
              V === null ? (r.callbacks = [k]) : V.push(k)));
        } else
          ((V = {
            lane: k,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            U === null ? ((_ = U = V), (T = K)) : (U = U.next = V),
            (y |= k));
        if (((x = x.next), x === null)) {
          if (((x = r.shared.pending), x === null)) break;
          ((V = x),
            (x = V.next),
            (V.next = null),
            (r.lastBaseUpdate = V),
            (r.shared.pending = null));
        }
      } while (!0);
      (U === null && (T = K),
        (r.baseState = T),
        (r.firstBaseUpdate = _),
        (r.lastBaseUpdate = U),
        u === null && (r.shared.lanes = 0),
        (Sa |= y),
        (t.lanes = y),
        (t.memoizedState = K));
    }
  }
  function sm(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function lm(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) sm(a[t], e);
  }
  var Xi = E(null),
    vo = E(0);
  function om(t, e) {
    ((t = Jn), Y(vo, t), Y(Xi, e), (Jn = t | e.baseLanes));
  }
  function zc() {
    (Y(vo, Jn), Y(Xi, Xi.current));
  }
  function Hc() {
    ((Jn = vo.current), q(Xi), q(vo));
  }
  var qe = E(null),
    an = null;
  function ya(t) {
    var e = t.alternate;
    (Y(Jt, Jt.current & 1),
      Y(qe, t),
      an === null &&
        (e === null || Xi.current !== null || e.memoizedState !== null) &&
        (an = t));
  }
  function kc(t) {
    (Y(Jt, Jt.current), Y(qe, t), an === null && (an = t));
  }
  function rm(t) {
    t.tag === 22
      ? (Y(Jt, Jt.current), Y(qe, t), an === null && (an = t))
      : va();
  }
  function va() {
    (Y(Jt, Jt.current), Y(qe, qe.current));
  }
  function Xe(t) {
    (q(qe), an === t && (an = null), q(Jt));
  }
  var Jt = E(0);
  function xo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Yu(a) || qu(a)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Yn = 0,
    xt = null,
    Ht = null,
    te = null,
    bo = !1,
    Pi = !1,
    ii = !1,
    So = 0,
    $s = 0,
    Ki = null,
    R1 = 0;
  function Qt() {
    throw Error(o(321));
  }
  function Vc(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!Ge(t[a], e[a])) return !1;
    return !0;
  }
  function Bc(t, e, a, s, r, u) {
    return (
      (Yn = u),
      (xt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Pm : Ic),
      (ii = !1),
      (u = a(s, r)),
      (ii = !1),
      Pi && (u = um(e, a, s, r)),
      cm(t),
      u
    );
  }
  function cm(t) {
    N.H = el;
    var e = Ht !== null && Ht.next !== null;
    if (((Yn = 0), (te = Ht = xt = null), (bo = !1), ($s = 0), (Ki = null), e))
      throw Error(o(300));
    t === null ||
      ee ||
      ((t = t.dependencies), t !== null && uo(t) && (ee = !0));
  }
  function um(t, e, a, s) {
    xt = t;
    var r = 0;
    do {
      if ((Pi && (Ki = null), ($s = 0), (Pi = !1), 25 <= r))
        throw Error(o(301));
      if (((r += 1), (te = Ht = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((N.H = Km), (u = e(a, s)));
    } while (Pi);
    return u;
  }
  function D1() {
    var t = N.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Is(e) : e),
      (t = t.useState()[0]),
      (Ht !== null ? Ht.memoizedState : null) !== t && (xt.flags |= 1024),
      e
    );
  }
  function Lc() {
    var t = So !== 0;
    return ((So = 0), t);
  }
  function Uc(t, e, a) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~a));
  }
  function Gc(t) {
    if (bo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      bo = !1;
    }
    ((Yn = 0), (te = Ht = xt = null), (Pi = !1), ($s = So = 0), (Ki = null));
  }
  function Ee() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (te === null ? (xt.memoizedState = te = t) : (te = te.next = t), te);
  }
  function Wt() {
    if (Ht === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ht.next;
    var e = te === null ? xt.memoizedState : te.next;
    if (e !== null) ((te = e), (Ht = t));
    else {
      if (t === null)
        throw xt.alternate === null ? Error(o(467)) : Error(o(310));
      ((Ht = t),
        (t = {
          memoizedState: Ht.memoizedState,
          baseState: Ht.baseState,
          baseQueue: Ht.baseQueue,
          queue: Ht.queue,
          next: null,
        }),
        te === null ? (xt.memoizedState = te = t) : (te = te.next = t));
    }
    return te;
  }
  function wo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Is(t) {
    var e = $s;
    return (
      ($s += 1),
      Ki === null && (Ki = []),
      (t = tm(Ki, t, e)),
      (e = xt),
      (te === null ? e.memoizedState : te.next) === null &&
        ((e = e.alternate),
        (N.H = e === null || e.memoizedState === null ? Pm : Ic)),
      t
    );
  }
  function To(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Is(t);
      if (t.$$typeof === L) return he(t);
    }
    throw Error(o(438, String(t)));
  }
  function Yc(t) {
    var e = null,
      a = xt.updateQueue;
    if ((a !== null && (e = a.memoCache), e == null)) {
      var s = xt.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (e = {
              data: s.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      a === null && ((a = wo()), (xt.updateQueue = a)),
      (a.memoCache = e),
      (a = e.data[e.index]),
      a === void 0)
    )
      for (a = e.data[e.index] = Array(t), s = 0; s < t; s++) a[s] = ft;
    return (e.index++, a);
  }
  function qn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ao(t) {
    var e = Wt();
    return qc(e, Ht, t);
  }
  function qc(t, e, a) {
    var s = t.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = a;
    var r = t.baseQueue,
      u = s.pending;
    if (u !== null) {
      if (r !== null) {
        var y = r.next;
        ((r.next = u.next), (u.next = y));
      }
      ((e.baseQueue = r = u), (s.pending = null));
    }
    if (((u = t.baseState), r === null)) t.memoizedState = u;
    else {
      e = r.next;
      var x = (y = null),
        T = null,
        _ = e,
        U = !1;
      do {
        var K = _.lane & -536870913;
        if (K !== _.lane ? (Mt & K) === K : (Yn & K) === K) {
          var k = _.revertLane;
          if (k === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              K === Ui && (U = !0));
          else if ((Yn & k) === k) {
            ((_ = _.next), k === Ui && (U = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              T === null ? ((x = T = K), (y = u)) : (T = T.next = K),
              (xt.lanes |= k),
              (Sa |= k));
          ((K = _.action),
            ii && a(u, K),
            (u = _.hasEagerState ? _.eagerState : a(u, K)));
        } else
          ((k = {
            lane: K,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            T === null ? ((x = T = k), (y = u)) : (T = T.next = k),
            (xt.lanes |= K),
            (Sa |= K));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (
        (T === null ? (y = u) : (T.next = x),
        !Ge(u, t.memoizedState) && ((ee = !0), U && ((a = Gi), a !== null)))
      )
        throw a;
      ((t.memoizedState = u),
        (t.baseState = y),
        (t.baseQueue = T),
        (s.lastRenderedState = u));
    }
    return (r === null && (s.lanes = 0), [t.memoizedState, s.dispatch]);
  }
  function Xc(t) {
    var e = Wt(),
      a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = t;
    var s = a.dispatch,
      r = a.pending,
      u = e.memoizedState;
    if (r !== null) {
      a.pending = null;
      var y = (r = r.next);
      do ((u = t(u, y.action)), (y = y.next));
      while (y !== r);
      (Ge(u, e.memoizedState) || (ee = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, s];
  }
  function fm(t, e, a) {
    var s = xt,
      r = Wt(),
      u = Rt;
    if (u) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = e();
    var y = !Ge((Ht || r).memoizedState, a);
    if (
      (y && ((r.memoizedState = a), (ee = !0)),
      (r = r.queue),
      Qc(mm.bind(null, s, r, t), [t]),
      r.getSnapshot !== e || y || (te !== null && te.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Qi(9, { destroy: void 0 }, hm.bind(null, s, r, a, e), null),
        Bt === null)
      )
        throw Error(o(349));
      u || (Yn & 127) !== 0 || dm(s, e, a);
    }
    return a;
  }
  function dm(t, e, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: a }),
      (e = xt.updateQueue),
      e === null
        ? ((e = wo()), (xt.updateQueue = e), (e.stores = [t]))
        : ((a = e.stores), a === null ? (e.stores = [t]) : a.push(t)));
  }
  function hm(t, e, a, s) {
    ((e.value = a), (e.getSnapshot = s), pm(e) && gm(t));
  }
  function mm(t, e, a) {
    return a(function () {
      pm(e) && gm(t);
    });
  }
  function pm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !Ge(t, a);
    } catch {
      return !0;
    }
  }
  function gm(t) {
    var e = Fa(t, 2);
    e !== null && Ve(e, t, 2);
  }
  function Pc(t) {
    var e = Ee();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), ii)) {
        dn(!0);
        try {
          a();
        } finally {
          dn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ym(t, e, a, s) {
    return ((t.baseState = a), qc(t, Ht, typeof s == "function" ? s : qn));
  }
  function O1(t, e, a, s, r) {
    if (Co(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          u.listeners.push(y);
        },
      };
      (N.T !== null ? a(!0) : (u.isTransition = !1),
        s(u),
        (a = e.pending),
        a === null
          ? ((u.next = e.pending = u), vm(e, u))
          : ((u.next = a.next), (e.pending = a.next = u)));
    }
  }
  function vm(t, e) {
    var a = e.action,
      s = e.payload,
      r = t.state;
    if (e.isTransition) {
      var u = N.T,
        y = {};
      N.T = y;
      try {
        var x = a(r, s),
          T = N.S;
        (T !== null && T(y, x), xm(t, e, x));
      } catch (_) {
        Kc(t, e, _);
      } finally {
        (u !== null && y.types !== null && (u.types = y.types), (N.T = u));
      }
    } else
      try {
        ((u = a(r, s)), xm(t, e, u));
      } catch (_) {
        Kc(t, e, _);
      }
  }
  function xm(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (s) {
            bm(t, e, s);
          },
          function (s) {
            return Kc(t, e, s);
          },
        )
      : bm(t, e, a);
  }
  function bm(t, e, a) {
    ((e.status = "fulfilled"),
      (e.value = a),
      Sm(e),
      (t.state = a),
      (e = t.pending),
      e !== null &&
        ((a = e.next),
        a === e ? (t.pending = null) : ((a = a.next), (e.next = a), vm(t, a))));
  }
  function Kc(t, e, a) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do ((e.status = "rejected"), (e.reason = a), Sm(e), (e = e.next));
      while (e !== s);
    }
    t.action = null;
  }
  function Sm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function wm(t, e) {
    return e;
  }
  function Tm(t, e) {
    if (Rt) {
      var a = Bt.formState;
      if (a !== null) {
        t: {
          var s = xt;
          if (Rt) {
            if (Lt) {
              e: {
                for (var r = Lt, u = nn; r.nodeType !== 8; ) {
                  if (!u) {
                    r = null;
                    break e;
                  }
                  if (((r = sn(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                ((u = r.data), (r = u === "F!" || u === "F" ? r : null));
              }
              if (r) {
                ((Lt = sn(r.nextSibling)), (s = r.data === "F!"));
                break t;
              }
            }
            da(s);
          }
          s = !1;
        }
        s && (e = a[0]);
      }
    }
    return (
      (a = Ee()),
      (a.memoizedState = a.baseState = e),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wm,
        lastRenderedState: e,
      }),
      (a.queue = s),
      (a = Ym.bind(null, xt, s)),
      (s.dispatch = a),
      (s = Pc(!1)),
      (u = $c.bind(null, xt, !1, s.queue)),
      (s = Ee()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (s.queue = r),
      (a = O1.bind(null, xt, r, u, a)),
      (r.dispatch = a),
      (s.memoizedState = t),
      [e, a, !1]
    );
  }
  function Am(t) {
    var e = Wt();
    return Em(e, Ht, t);
  }
  function Em(t, e, a) {
    if (
      ((e = qc(t, e, wm)[0]),
      (t = Ao(qn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var s = Is(e);
      } catch (y) {
        throw y === Yi ? mo : y;
      }
    else s = e;
    e = Wt();
    var r = e.queue,
      u = r.dispatch;
    return (
      a !== e.memoizedState &&
        ((xt.flags |= 2048),
        Qi(9, { destroy: void 0 }, j1.bind(null, r, a), null)),
      [s, u, t]
    );
  }
  function j1(t, e) {
    t.action = e;
  }
  function Mm(t) {
    var e = Wt(),
      a = Ht;
    if (a !== null) return Em(e, a, t);
    (Wt(), (e = e.memoizedState), (a = Wt()));
    var s = a.queue.dispatch;
    return ((a.memoizedState = t), [e, s, !1]);
  }
  function Qi(t, e, a, s) {
    return (
      (t = { tag: t, create: a, deps: s, inst: e, next: null }),
      (e = xt.updateQueue),
      e === null && ((e = wo()), (xt.updateQueue = e)),
      (a = e.lastEffect),
      a === null
        ? (e.lastEffect = t.next = t)
        : ((s = a.next), (a.next = t), (t.next = s), (e.lastEffect = t)),
      t
    );
  }
  function Cm() {
    return Wt().memoizedState;
  }
  function Eo(t, e, a, s) {
    var r = Ee();
    ((xt.flags |= t),
      (r.memoizedState = Qi(
        1 | e,
        { destroy: void 0 },
        a,
        s === void 0 ? null : s,
      )));
  }
  function Mo(t, e, a, s) {
    var r = Wt();
    s = s === void 0 ? null : s;
    var u = r.memoizedState.inst;
    Ht !== null && s !== null && Vc(s, Ht.memoizedState.deps)
      ? (r.memoizedState = Qi(e, u, a, s))
      : ((xt.flags |= t), (r.memoizedState = Qi(1 | e, u, a, s)));
  }
  function Nm(t, e) {
    Eo(8390656, 8, t, e);
  }
  function Qc(t, e) {
    Mo(2048, 8, t, e);
  }
  function _1(t) {
    xt.flags |= 4;
    var e = xt.updateQueue;
    if (e === null) ((e = wo()), (xt.updateQueue = e), (e.events = [t]));
    else {
      var a = e.events;
      a === null ? (e.events = [t]) : a.push(t);
    }
  }
  function Rm(t) {
    var e = Wt().memoizedState;
    return (
      _1({ ref: e, nextImpl: t }),
      function () {
        if ((jt & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Dm(t, e) {
    return Mo(4, 2, t, e);
  }
  function Om(t, e) {
    return Mo(4, 4, t, e);
  }
  function jm(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function () {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function _m(t, e, a) {
    ((a = a != null ? a.concat([t]) : null), Mo(4, 4, jm.bind(null, e, t), a));
  }
  function Zc() {}
  function zm(t, e) {
    var a = Wt();
    e = e === void 0 ? null : e;
    var s = a.memoizedState;
    return e !== null && Vc(e, s[1]) ? s[0] : ((a.memoizedState = [t, e]), t);
  }
  function Hm(t, e) {
    var a = Wt();
    e = e === void 0 ? null : e;
    var s = a.memoizedState;
    if (e !== null && Vc(e, s[1])) return s[0];
    if (((s = t()), ii)) {
      dn(!0);
      try {
        t();
      } finally {
        dn(!1);
      }
    }
    return ((a.memoizedState = [s, e]), s);
  }
  function Fc(t, e, a) {
    return a === void 0 || ((Yn & 1073741824) !== 0 && (Mt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = a), (t = kp()), (xt.lanes |= t), (Sa |= t), a);
  }
  function km(t, e, a, s) {
    return Ge(a, e)
      ? a
      : Xi.current !== null
        ? ((t = Fc(t, a, s)), Ge(t, e) || (ee = !0), t)
        : (Yn & 42) === 0 || ((Yn & 1073741824) !== 0 && (Mt & 261930) === 0)
          ? ((ee = !0), (t.memoizedState = a))
          : ((t = kp()), (xt.lanes |= t), (Sa |= t), e);
  }
  function Vm(t, e, a, s, r) {
    var u = B.p;
    B.p = u !== 0 && 8 > u ? u : 8;
    var y = N.T,
      x = {};
    ((N.T = x), $c(t, !1, e, a));
    try {
      var T = r(),
        _ = N.S;
      if (
        (_ !== null && _(x, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var U = N1(T, s);
        tl(t, e, U, Qe(t));
      } else tl(t, e, s, Qe(t));
    } catch (K) {
      tl(t, e, { then: function () {}, status: "rejected", reason: K }, Qe());
    } finally {
      ((B.p = u),
        y !== null && x.types !== null && (y.types = x.types),
        (N.T = y));
    }
  }
  function z1() {}
  function Jc(t, e, a, s) {
    if (t.tag !== 5) throw Error(o(476));
    var r = Bm(t).queue;
    Vm(
      t,
      r,
      e,
      H,
      a === null
        ? z1
        : function () {
            return (Lm(t), a(s));
          },
    );
  }
  function Bm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: H,
      },
      next: null,
    };
    var a = {};
    return (
      (e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Lm(t) {
    var e = Bm(t);
    (e.next === null && (e = t.alternate.memoizedState),
      tl(t, e.next.queue, {}, Qe()));
  }
  function Wc() {
    return he(yl);
  }
  function Um() {
    return Wt().memoizedState;
  }
  function Gm() {
    return Wt().memoizedState;
  }
  function H1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = Qe();
          t = pa(a);
          var s = ga(e, t, a);
          (s !== null && (Ve(s, e, a), Fs(s, e, a)),
            (e = { cache: Mc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function k1(t, e, a) {
    var s = Qe();
    ((a = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Co(t)
        ? qm(e, a)
        : ((a = pc(t, e, a, s)), a !== null && (Ve(a, t, s), Xm(a, e, s))));
  }
  function Ym(t, e, a) {
    var s = Qe();
    tl(t, e, a, s);
  }
  function tl(t, e, a, s) {
    var r = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Co(t)) qm(e, r);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var y = e.lastRenderedState,
            x = u(y, a);
          if (((r.hasEagerState = !0), (r.eagerState = x), Ge(x, y)))
            return (lo(t, e, r, 0), Bt === null && so(), !1);
        } catch {
        } finally {
        }
      if (((a = pc(t, e, r, s)), a !== null))
        return (Ve(a, t, s), Xm(a, e, s), !0);
    }
    return !1;
  }
  function $c(t, e, a, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: Du(),
        gesture: null,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Co(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = pc(t, a, s, 2)), e !== null && Ve(e, t, 2));
  }
  function Co(t) {
    var e = t.alternate;
    return t === xt || (e !== null && e === xt);
  }
  function qm(t, e) {
    Pi = bo = !0;
    var a = t.pending;
    (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
      (t.pending = e));
  }
  function Xm(t, e, a) {
    if ((a & 4194048) !== 0) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (a |= s), (e.lanes = a), Re(t, a));
    }
  }
  var el = {
    readContext: he,
    use: To,
    useCallback: Qt,
    useContext: Qt,
    useEffect: Qt,
    useImperativeHandle: Qt,
    useLayoutEffect: Qt,
    useInsertionEffect: Qt,
    useMemo: Qt,
    useReducer: Qt,
    useRef: Qt,
    useState: Qt,
    useDebugValue: Qt,
    useDeferredValue: Qt,
    useTransition: Qt,
    useSyncExternalStore: Qt,
    useId: Qt,
    useHostTransitionStatus: Qt,
    useFormState: Qt,
    useActionState: Qt,
    useOptimistic: Qt,
    useMemoCache: Qt,
    useCacheRefresh: Qt,
  };
  el.useEffectEvent = Qt;
  var Pm = {
      readContext: he,
      use: To,
      useCallback: function (t, e) {
        return ((Ee().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: he,
      useEffect: Nm,
      useImperativeHandle: function (t, e, a) {
        ((a = a != null ? a.concat([t]) : null),
          Eo(4194308, 4, jm.bind(null, e, t), a));
      },
      useLayoutEffect: function (t, e) {
        return Eo(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Eo(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var a = Ee();
        e = e === void 0 ? null : e;
        var s = t();
        if (ii) {
          dn(!0);
          try {
            t();
          } finally {
            dn(!1);
          }
        }
        return ((a.memoizedState = [s, e]), s);
      },
      useReducer: function (t, e, a) {
        var s = Ee();
        if (a !== void 0) {
          var r = a(e);
          if (ii) {
            dn(!0);
            try {
              a(e);
            } finally {
              dn(!1);
            }
          }
        } else r = e;
        return (
          (s.memoizedState = s.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (s.queue = t),
          (t = t.dispatch = k1.bind(null, xt, t)),
          [s.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ee();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Pc(t);
        var e = t.queue,
          a = Ym.bind(null, xt, e);
        return ((e.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: Zc,
      useDeferredValue: function (t, e) {
        var a = Ee();
        return Fc(a, t, e);
      },
      useTransition: function () {
        var t = Pc(!1);
        return (
          (t = Vm.bind(null, xt, t.queue, !0, !1)),
          (Ee().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, a) {
        var s = xt,
          r = Ee();
        if (Rt) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = e()), Bt === null)) throw Error(o(349));
          (Mt & 127) !== 0 || dm(s, e, a);
        }
        r.memoizedState = a;
        var u = { value: a, getSnapshot: e };
        return (
          (r.queue = u),
          Nm(mm.bind(null, s, u, t), [t]),
          (s.flags |= 2048),
          Qi(9, { destroy: void 0 }, hm.bind(null, s, u, a, e), null),
          a
        );
      },
      useId: function () {
        var t = Ee(),
          e = Bt.identifierPrefix;
        if (Rt) {
          var a = Tn,
            s = wn;
          ((a = (s & ~(1 << (32 - ye(s) - 1))).toString(32) + a),
            (e = "_" + e + "R_" + a),
            (a = So++),
            0 < a && (e += "H" + a.toString(32)),
            (e += "_"));
        } else ((a = R1++), (e = "_" + e + "r_" + a.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Wc,
      useFormState: Tm,
      useActionState: Tm,
      useOptimistic: function (t) {
        var e = Ee();
        e.memoizedState = e.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = a),
          (e = $c.bind(null, xt, !0, a)),
          (a.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Yc,
      useCacheRefresh: function () {
        return (Ee().memoizedState = H1.bind(null, xt));
      },
      useEffectEvent: function (t) {
        var e = Ee(),
          a = { impl: t };
        return (
          (e.memoizedState = a),
          function () {
            if ((jt & 2) !== 0) throw Error(o(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ic = {
      readContext: he,
      use: To,
      useCallback: zm,
      useContext: he,
      useEffect: Qc,
      useImperativeHandle: _m,
      useInsertionEffect: Dm,
      useLayoutEffect: Om,
      useMemo: Hm,
      useReducer: Ao,
      useRef: Cm,
      useState: function () {
        return Ao(qn);
      },
      useDebugValue: Zc,
      useDeferredValue: function (t, e) {
        var a = Wt();
        return km(a, Ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ao(qn)[0],
          e = Wt().memoizedState;
        return [typeof t == "boolean" ? t : Is(t), e];
      },
      useSyncExternalStore: fm,
      useId: Um,
      useHostTransitionStatus: Wc,
      useFormState: Am,
      useActionState: Am,
      useOptimistic: function (t, e) {
        var a = Wt();
        return ym(a, Ht, t, e);
      },
      useMemoCache: Yc,
      useCacheRefresh: Gm,
    };
  Ic.useEffectEvent = Rm;
  var Km = {
    readContext: he,
    use: To,
    useCallback: zm,
    useContext: he,
    useEffect: Qc,
    useImperativeHandle: _m,
    useInsertionEffect: Dm,
    useLayoutEffect: Om,
    useMemo: Hm,
    useReducer: Xc,
    useRef: Cm,
    useState: function () {
      return Xc(qn);
    },
    useDebugValue: Zc,
    useDeferredValue: function (t, e) {
      var a = Wt();
      return Ht === null ? Fc(a, t, e) : km(a, Ht.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Xc(qn)[0],
        e = Wt().memoizedState;
      return [typeof t == "boolean" ? t : Is(t), e];
    },
    useSyncExternalStore: fm,
    useId: Um,
    useHostTransitionStatus: Wc,
    useFormState: Mm,
    useActionState: Mm,
    useOptimistic: function (t, e) {
      var a = Wt();
      return Ht !== null
        ? ym(a, Ht, t, e)
        : ((a.baseState = t), [t, a.queue.dispatch]);
    },
    useMemoCache: Yc,
    useCacheRefresh: Gm,
  };
  Km.useEffectEvent = Rm;
  function tu(t, e, a, s) {
    ((e = t.memoizedState),
      (a = a(s, e)),
      (a = a == null ? e : g({}, e, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var eu = {
    enqueueSetState: function (t, e, a) {
      t = t._reactInternals;
      var s = Qe(),
        r = pa(s);
      ((r.payload = e),
        a != null && (r.callback = a),
        (e = ga(t, r, s)),
        e !== null && (Ve(e, t, s), Fs(e, t, s)));
    },
    enqueueReplaceState: function (t, e, a) {
      t = t._reactInternals;
      var s = Qe(),
        r = pa(s);
      ((r.tag = 1),
        (r.payload = e),
        a != null && (r.callback = a),
        (e = ga(t, r, s)),
        e !== null && (Ve(e, t, s), Fs(e, t, s)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var a = Qe(),
        s = pa(a);
      ((s.tag = 2),
        e != null && (s.callback = e),
        (e = ga(t, s, a)),
        e !== null && (Ve(e, t, a), Fs(e, t, a)));
    },
  };
  function Qm(t, e, a, s, r, u, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(s, u, y)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Gs(a, s) || !Gs(r, u)
          : !0
    );
  }
  function Zm(t, e, a, s) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(a, s),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(a, s),
      e.state !== t && eu.enqueueReplaceState(e, e.state, null));
  }
  function si(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var s in e) s !== "ref" && (a[s] = e[s]);
    }
    if ((t = t.defaultProps)) {
      a === e && (a = g({}, a));
      for (var r in t) a[r] === void 0 && (a[r] = t[r]);
    }
    return a;
  }
  function Fm(t) {
    io(t);
  }
  function Jm(t) {
    console.error(t);
  }
  function Wm(t) {
    io(t);
  }
  function No(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function $m(t, e, a) {
    try {
      var s = t.onCaughtError;
      s(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function nu(t, e, a) {
    return (
      (a = pa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        No(t, e);
      }),
      a
    );
  }
  function Im(t) {
    return ((t = pa(t)), (t.tag = 3), t);
  }
  function tp(t, e, a, s) {
    var r = a.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var u = s.value;
      ((t.payload = function () {
        return r(u);
      }),
        (t.callback = function () {
          $m(e, a, s);
        }));
    }
    var y = a.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        ($m(e, a, s),
          typeof r != "function" &&
            (wa === null ? (wa = new Set([this])) : wa.add(this)));
        var x = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: x !== null ? x : "",
        });
      });
  }
  function V1(t, e, a, s, r) {
    if (
      ((a.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((e = a.alternate),
        e !== null && Li(e, a, r, !0),
        (a = qe.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              an === null ? Uo() : a.alternate === null && Zt === 0 && (Zt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = r),
              s === po
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null ? (a.updateQueue = new Set([s])) : e.add(s),
                  Cu(t, s, r)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              s === po
                ? (a.flags |= 16384)
                : ((e = a.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (a.updateQueue = e))
                    : ((a = e.retryQueue),
                      a === null ? (e.retryQueue = new Set([s])) : a.add(s)),
                  Cu(t, s, r)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Cu(t, s, r), Uo(), !1);
    }
    if (Rt)
      return (
        (e = qe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            s !== Sc && ((t = Error(o(422), { cause: s })), Xs(Ie(t, a))))
          : (s !== Sc && ((e = Error(o(423), { cause: s })), Xs(Ie(e, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (s = Ie(s, a)),
            (r = nu(t.stateNode, s, r)),
            jc(t, r),
            Zt !== 4 && (Zt = 2)),
        !1
      );
    var u = Error(o(520), { cause: s });
    if (
      ((u = Ie(u, a)),
      cl === null ? (cl = [u]) : cl.push(u),
      Zt !== 4 && (Zt = 2),
      e === null)
    )
      return !0;
    ((s = Ie(s, a)), (a = e));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = r & -r),
            (a.lanes |= t),
            (t = nu(a.stateNode, s, t)),
            jc(a, t),
            !1
          );
        case 1:
          if (
            ((e = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (wa === null || !wa.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (r &= -r),
              (a.lanes |= r),
              (r = Im(r)),
              tp(r, t, a, s),
              jc(a, r),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var au = Error(o(461)),
    ee = !1;
  function me(t, e, a, s) {
    e.child = t === null ? im(e, null, a, s) : ai(e, t.child, a, s);
  }
  function ep(t, e, a, s, r) {
    a = a.render;
    var u = e.ref;
    if ("ref" in s) {
      var y = {};
      for (var x in s) x !== "ref" && (y[x] = s[x]);
    } else y = s;
    return (
      Ia(e),
      (s = Bc(t, e, a, y, u, r)),
      (x = Lc()),
      t !== null && !ee
        ? (Uc(t, e, r), Xn(t, e, r))
        : (Rt && x && xc(e), (e.flags |= 1), me(t, e, s, r), e.child)
    );
  }
  function np(t, e, a, s, r) {
    if (t === null) {
      var u = a.type;
      return typeof u == "function" &&
        !gc(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((e.tag = 15), (e.type = u), ap(t, e, u, s, r))
        : ((t = ro(a.type, null, s, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !fu(t, r))) {
      var y = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Gs), a(y, s) && t.ref === e.ref)
      )
        return Xn(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = Bn(u, s)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function ap(t, e, a, s, r) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Gs(u, s) && t.ref === e.ref)
        if (((ee = !1), (e.pendingProps = s = u), fu(t, r)))
          (t.flags & 131072) !== 0 && (ee = !0);
        else return ((e.lanes = t.lanes), Xn(t, e, r));
    }
    return iu(t, e, a, s, r);
  }
  function ip(t, e, a, s) {
    var r = s.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      s.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | a : a), t !== null)) {
          for (s = e.child = t.child, r = 0; s !== null; )
            ((r = r | s.lanes | s.childLanes), (s = s.sibling));
          s = r & ~u;
        } else ((s = 0), (e.child = null));
        return sp(t, e, u, a, s);
      }
      if ((a & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ho(e, u !== null ? u.cachePool : null),
          u !== null ? om(e, u) : zc(),
          rm(e));
      else
        return (
          (s = e.lanes = 536870912),
          sp(t, e, u !== null ? u.baseLanes | a : a, a, s)
        );
    } else
      u !== null
        ? (ho(e, u.cachePool), om(e, u), va(), (e.memoizedState = null))
        : (t !== null && ho(e, null), zc(), va());
    return (me(t, e, r, a), e.child);
  }
  function nl(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function sp(t, e, a, s, r) {
    var u = Nc();
    return (
      (u = u === null ? null : { parent: It._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: a, cachePool: u }),
      t !== null && ho(e, null),
      zc(),
      rm(e),
      t !== null && Li(t, e, s, !0),
      (e.childLanes = r),
      null
    );
  }
  function Ro(t, e) {
    return (
      (e = Oo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function lp(t, e, a) {
    return (
      ai(e, t.child, null, a),
      (t = Ro(e, e.pendingProps)),
      (t.flags |= 2),
      Xe(e),
      (e.memoizedState = null),
      t
    );
  }
  function B1(t, e, a) {
    var s = e.pendingProps,
      r = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Rt) {
        if (s.mode === "hidden")
          return ((t = Ro(e, s)), (e.lanes = 536870912), nl(null, t));
        if (
          (kc(e),
          (t = Lt)
            ? ((t = vg(t, nn)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ua !== null ? { id: wn, overflow: Tn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = qh(t)),
                (a.return = e),
                (e.child = a),
                (de = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw da(e);
        return ((e.lanes = 536870912), null);
      }
      return Ro(e, s);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var y = u.dehydrated;
      if ((kc(e), r))
        if (e.flags & 256) ((e.flags &= -257), (e = lp(t, e, a)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(o(558));
      else if (
        (ee || Li(t, e, a, !1), (r = (a & t.childLanes) !== 0), ee || r)
      ) {
        if (
          ((s = Bt),
          s !== null && ((y = De(s, a)), y !== 0 && y !== u.retryLane))
        )
          throw ((u.retryLane = y), Fa(t, y), Ve(s, t, y), au);
        (Uo(), (e = lp(t, e, a)));
      } else
        ((t = u.treeContext),
          (Lt = sn(y.nextSibling)),
          (de = e),
          (Rt = !0),
          (fa = null),
          (nn = !1),
          t !== null && Kh(e, t),
          (e = Ro(e, s)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Bn(t.child, { mode: s.mode, children: s.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Do(t, e) {
    var a = e.ref;
    if (a === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function iu(t, e, a, s, r) {
    return (
      Ia(e),
      (a = Bc(t, e, a, s, void 0, r)),
      (s = Lc()),
      t !== null && !ee
        ? (Uc(t, e, r), Xn(t, e, r))
        : (Rt && s && xc(e), (e.flags |= 1), me(t, e, a, r), e.child)
    );
  }
  function op(t, e, a, s, r, u) {
    return (
      Ia(e),
      (e.updateQueue = null),
      (a = um(e, s, a, r)),
      cm(t),
      (s = Lc()),
      t !== null && !ee
        ? (Uc(t, e, u), Xn(t, e, u))
        : (Rt && s && xc(e), (e.flags |= 1), me(t, e, a, u), e.child)
    );
  }
  function rp(t, e, a, s, r) {
    if ((Ia(e), e.stateNode === null)) {
      var u = Hi,
        y = a.contextType;
      (typeof y == "object" && y !== null && (u = he(y)),
        (u = new a(s, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = eu),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = s),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Dc(e),
        (y = a.contextType),
        (u.context = typeof y == "object" && y !== null ? he(y) : Hi),
        (u.state = e.memoizedState),
        (y = a.getDerivedStateFromProps),
        typeof y == "function" && (tu(e, a, y, s), (u.state = e.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((y = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          y !== u.state && eu.enqueueReplaceState(u, u.state, null),
          Ws(e, s, u, r),
          Js(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (s = !0));
    } else if (t === null) {
      u = e.stateNode;
      var x = e.memoizedProps,
        T = si(a, x);
      u.props = T;
      var _ = u.context,
        U = a.contextType;
      ((y = Hi), typeof U == "object" && U !== null && (y = he(U)));
      var K = a.getDerivedStateFromProps;
      ((U =
        typeof K == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (x = e.pendingProps !== x),
        U ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((x || _ !== y) && Zm(e, u, s, y)),
        (ma = !1));
      var k = e.memoizedState;
      ((u.state = k),
        Ws(e, s, u, r),
        Js(),
        (_ = e.memoizedState),
        x || k !== _ || ma
          ? (typeof K == "function" && (tu(e, a, K, s), (_ = e.memoizedState)),
            (T = ma || Qm(e, a, T, s, k, _, y))
              ? (U ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = s),
                (e.memoizedState = _)),
            (u.props = s),
            (u.state = _),
            (u.context = y),
            (s = T))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (s = !1)));
    } else {
      ((u = e.stateNode),
        Oc(t, e),
        (y = e.memoizedProps),
        (U = si(a, y)),
        (u.props = U),
        (K = e.pendingProps),
        (k = u.context),
        (_ = a.contextType),
        (T = Hi),
        typeof _ == "object" && _ !== null && (T = he(_)),
        (x = a.getDerivedStateFromProps),
        (_ =
          typeof x == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((y !== K || k !== T) && Zm(e, u, s, T)),
        (ma = !1),
        (k = e.memoizedState),
        (u.state = k),
        Ws(e, s, u, r),
        Js());
      var V = e.memoizedState;
      y !== K ||
      k !== V ||
      ma ||
      (t !== null && t.dependencies !== null && uo(t.dependencies))
        ? (typeof x == "function" && (tu(e, a, x, s), (V = e.memoizedState)),
          (U =
            ma ||
            Qm(e, a, U, s, k, V, T) ||
            (t !== null && t.dependencies !== null && uo(t.dependencies)))
            ? (_ ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(s, V, T),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(s, V, T)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (y === t.memoizedProps && k === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && k === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = s),
              (e.memoizedState = V)),
          (u.props = s),
          (u.state = V),
          (u.context = T),
          (s = U))
        : (typeof u.componentDidUpdate != "function" ||
            (y === t.memoizedProps && k === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && k === t.memoizedState) ||
            (e.flags |= 1024),
          (s = !1));
    }
    return (
      (u = s),
      Do(t, e),
      (s = (e.flags & 128) !== 0),
      u || s
        ? ((u = e.stateNode),
          (a =
            s && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && s
            ? ((e.child = ai(e, t.child, null, r)),
              (e.child = ai(e, null, a, r)))
            : me(t, e, a, r),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = Xn(t, e, r)),
      t
    );
  }
  function cp(t, e, a, s) {
    return (Wa(), (e.flags |= 256), me(t, e, a, s), e.child);
  }
  var su = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function lu(t) {
    return { baseLanes: t, cachePool: $h() };
  }
  function ou(t, e, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), e && (t |= Ke), t);
  }
  function up(t, e, a) {
    var s = e.pendingProps,
      r = !1,
      u = (e.flags & 128) !== 0,
      y;
    if (
      ((y = u) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (Jt.current & 2) !== 0),
      y && ((r = !0), (e.flags &= -129)),
      (y = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Rt) {
        if (
          (r ? ya(e) : va(),
          (t = Lt)
            ? ((t = vg(t, nn)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ua !== null ? { id: wn, overflow: Tn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = qh(t)),
                (a.return = e),
                (e.child = a),
                (de = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw da(e);
        return (qu(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var x = s.children;
      return (
        (s = s.fallback),
        r
          ? (va(),
            (r = e.mode),
            (x = Oo({ mode: "hidden", children: x }, r)),
            (s = Ja(s, r, a, null)),
            (x.return = e),
            (s.return = e),
            (x.sibling = s),
            (e.child = x),
            (s = e.child),
            (s.memoizedState = lu(a)),
            (s.childLanes = ou(t, y, a)),
            (e.memoizedState = su),
            nl(null, s))
          : (ya(e), ru(e, x))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((x = T.dehydrated), x !== null)) {
      if (u)
        e.flags & 256
          ? (ya(e), (e.flags &= -257), (e = cu(t, e, a)))
          : e.memoizedState !== null
            ? (va(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (va(),
              (x = s.fallback),
              (r = e.mode),
              (s = Oo({ mode: "visible", children: s.children }, r)),
              (x = Ja(x, r, a, null)),
              (x.flags |= 2),
              (s.return = e),
              (x.return = e),
              (s.sibling = x),
              (e.child = s),
              ai(e, t.child, null, a),
              (s = e.child),
              (s.memoizedState = lu(a)),
              (s.childLanes = ou(t, y, a)),
              (e.memoizedState = su),
              (e = nl(null, s)));
      else if ((ya(e), qu(x))) {
        if (((y = x.nextSibling && x.nextSibling.dataset), y)) var _ = y.dgst;
        ((y = _),
          (s = Error(o(419))),
          (s.stack = ""),
          (s.digest = y),
          Xs({ value: s, source: null, stack: null }),
          (e = cu(t, e, a)));
      } else if (
        (ee || Li(t, e, a, !1), (y = (a & t.childLanes) !== 0), ee || y)
      ) {
        if (
          ((y = Bt),
          y !== null && ((s = De(y, a)), s !== 0 && s !== T.retryLane))
        )
          throw ((T.retryLane = s), Fa(t, s), Ve(y, t, s), au);
        (Yu(x) || Uo(), (e = cu(t, e, a)));
      } else
        Yu(x)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Lt = sn(x.nextSibling)),
            (de = e),
            (Rt = !0),
            (fa = null),
            (nn = !1),
            t !== null && Kh(e, t),
            (e = ru(e, s.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (va(),
        (x = s.fallback),
        (r = e.mode),
        (T = t.child),
        (_ = T.sibling),
        (s = Bn(T, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = T.subtreeFlags & 65011712),
        _ !== null ? (x = Bn(_, x)) : ((x = Ja(x, r, a, null)), (x.flags |= 2)),
        (x.return = e),
        (s.return = e),
        (s.sibling = x),
        (e.child = s),
        nl(null, s),
        (s = e.child),
        (x = t.child.memoizedState),
        x === null
          ? (x = lu(a))
          : ((r = x.cachePool),
            r !== null
              ? ((T = It._currentValue),
                (r = r.parent !== T ? { parent: T, pool: T } : r))
              : (r = $h()),
            (x = { baseLanes: x.baseLanes | a, cachePool: r })),
        (s.memoizedState = x),
        (s.childLanes = ou(t, y, a)),
        (e.memoizedState = su),
        nl(t.child, s))
      : (ya(e),
        (a = t.child),
        (t = a.sibling),
        (a = Bn(a, { mode: "visible", children: s.children })),
        (a.return = e),
        (a.sibling = null),
        t !== null &&
          ((y = e.deletions),
          y === null ? ((e.deletions = [t]), (e.flags |= 16)) : y.push(t)),
        (e.child = a),
        (e.memoizedState = null),
        a);
  }
  function ru(t, e) {
    return (
      (e = Oo({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Oo(t, e) {
    return ((t = Ye(22, t, null, e)), (t.lanes = 0), t);
  }
  function cu(t, e, a) {
    return (
      ai(e, t.child, null, a),
      (t = ru(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function fp(t, e, a) {
    t.lanes |= e;
    var s = t.alternate;
    (s !== null && (s.lanes |= e), Ac(t.return, e, a));
  }
  function uu(t, e, a, s, r, u) {
    var y = t.memoizedState;
    y === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: a,
          tailMode: r,
          treeForkCount: u,
        })
      : ((y.isBackwards = e),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = s),
        (y.tail = a),
        (y.tailMode = r),
        (y.treeForkCount = u));
  }
  function dp(t, e, a) {
    var s = e.pendingProps,
      r = s.revealOrder,
      u = s.tail;
    s = s.children;
    var y = Jt.current,
      x = (y & 2) !== 0;
    if (
      (x ? ((y = (y & 1) | 2), (e.flags |= 128)) : (y &= 1),
      Y(Jt, y),
      me(t, e, s, a),
      (s = Rt ? qs : 0),
      !x && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && fp(t, a, e);
        else if (t.tag === 19) fp(t, a, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (r) {
      case "forwards":
        for (a = e.child, r = null; a !== null; )
          ((t = a.alternate),
            t !== null && xo(t) === null && (r = a),
            (a = a.sibling));
        ((a = r),
          a === null
            ? ((r = e.child), (e.child = null))
            : ((r = a.sibling), (a.sibling = null)),
          uu(e, !1, r, a, u, s));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && xo(t) === null)) {
            e.child = r;
            break;
          }
          ((t = r.sibling), (r.sibling = a), (a = r), (r = t));
        }
        uu(e, !0, a, null, u, s);
        break;
      case "together":
        uu(e, !1, null, null, void 0, s);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Xn(t, e, a) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Sa |= e.lanes),
      (a & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Li(t, e, a, !1), (a & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, a = Bn(t, t.pendingProps), e.child = a, a.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (a = a.sibling = Bn(t, t.pendingProps)),
          (a.return = e));
      a.sibling = null;
    }
    return e.child;
  }
  function fu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && uo(t)));
  }
  function L1(t, e, a) {
    switch (e.tag) {
      case 3:
        (ht(e, e.stateNode.containerInfo),
          ha(e, It, t.memoizedState.cache),
          Wa());
        break;
      case 27:
      case 5:
        ce(e);
        break;
      case 4:
        ht(e, e.stateNode.containerInfo);
        break;
      case 10:
        ha(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), kc(e), null);
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (ya(e), (e.flags |= 128), null)
            : (a & e.child.childLanes) !== 0
              ? up(t, e, a)
              : (ya(e), (t = Xn(t, e, a)), t !== null ? t.sibling : null);
        ya(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((s = (a & e.childLanes) !== 0),
          s || (Li(t, e, a, !1), (s = (a & e.childLanes) !== 0)),
          r)
        ) {
          if (s) return dp(t, e, a);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          Y(Jt, Jt.current),
          s)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), ip(t, e, a, e.pendingProps));
      case 24:
        ha(e, It, t.memoizedState.cache);
    }
    return Xn(t, e, a);
  }
  function hp(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) ee = !0;
      else {
        if (!fu(t, a) && (e.flags & 128) === 0) return ((ee = !1), L1(t, e, a));
        ee = (t.flags & 131072) !== 0;
      }
    else ((ee = !1), Rt && (e.flags & 1048576) !== 0 && Ph(e, qs, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var s = e.pendingProps;
          if (((t = ei(e.elementType)), (e.type = t), typeof t == "function"))
            gc(t)
              ? ((s = si(t, s)), (e.tag = 1), (e = rp(null, e, t, s, a)))
              : ((e.tag = 0), (e = iu(null, e, t, s, a)));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === F) {
                ((e.tag = 11), (e = ep(null, e, t, s, a)));
                break t;
              } else if (r === Q) {
                ((e.tag = 14), (e = np(null, e, t, s, a)));
                break t;
              }
            }
            throw ((e = vt(t) || t), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return iu(t, e, e.type, e.pendingProps, a);
      case 1:
        return ((s = e.type), (r = si(s, e.pendingProps)), rp(t, e, s, r, a));
      case 3:
        t: {
          if ((ht(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          s = e.pendingProps;
          var u = e.memoizedState;
          ((r = u.element), Oc(t, e), Ws(e, s, null, a));
          var y = e.memoizedState;
          if (
            ((s = y.cache),
            ha(e, It, s),
            s !== u.cache && Ec(e, [It], a, !0),
            Js(),
            (s = y.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: s, isDehydrated: !1, cache: y.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = cp(t, e, s, a);
              break t;
            } else if (s !== r) {
              ((r = Ie(Error(o(424)), e)), Xs(r), (e = cp(t, e, s, a)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Lt = sn(t.firstChild),
                  de = e,
                  Rt = !0,
                  fa = null,
                  nn = !0,
                  a = im(e, null, s, a),
                  e.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Wa(), s === r)) {
              e = Xn(t, e, a);
              break t;
            }
            me(t, e, s, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Do(t, e),
          t === null
            ? (a = Ag(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = a)
              : Rt ||
                ((a = e.type),
                (t = e.pendingProps),
                (s = Qo(rt.current).createElement(a)),
                (s[fe] = e),
                (s[Oe] = t),
                pe(s, a, t),
                oe(s),
                (e.stateNode = s))
            : (e.memoizedState = Ag(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ce(e),
          t === null &&
            Rt &&
            ((s = e.stateNode = Sg(e.type, e.pendingProps, rt.current)),
            (de = e),
            (nn = !0),
            (r = Lt),
            Ma(e.type) ? ((Xu = r), (Lt = sn(s.firstChild))) : (Lt = r)),
          me(t, e, e.pendingProps.children, a),
          Do(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Rt &&
            ((r = s = Lt) &&
              ((s = p2(s, e.type, e.pendingProps, nn)),
              s !== null
                ? ((e.stateNode = s),
                  (de = e),
                  (Lt = sn(s.firstChild)),
                  (nn = !1),
                  (r = !0))
                : (r = !1)),
            r || da(e)),
          ce(e),
          (r = e.type),
          (u = e.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (s = u.children),
          Lu(r, u) ? (s = null) : y !== null && Lu(r, y) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = Bc(t, e, D1, null, null, a)), (yl._currentValue = r)),
          Do(t, e),
          me(t, e, s, a),
          e.child
        );
      case 6:
        return (
          t === null &&
            Rt &&
            ((t = a = Lt) &&
              ((a = g2(a, e.pendingProps, nn)),
              a !== null
                ? ((e.stateNode = a), (de = e), (Lt = null), (t = !0))
                : (t = !1)),
            t || da(e)),
          null
        );
      case 13:
        return up(t, e, a);
      case 4:
        return (
          ht(e, e.stateNode.containerInfo),
          (s = e.pendingProps),
          t === null ? (e.child = ai(e, null, s, a)) : me(t, e, s, a),
          e.child
        );
      case 11:
        return ep(t, e, e.type, e.pendingProps, a);
      case 7:
        return (me(t, e, e.pendingProps, a), e.child);
      case 8:
        return (me(t, e, e.pendingProps.children, a), e.child);
      case 12:
        return (me(t, e, e.pendingProps.children, a), e.child);
      case 10:
        return (
          (s = e.pendingProps),
          ha(e, e.type, s.value),
          me(t, e, s.children, a),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (s = e.pendingProps.children),
          Ia(e),
          (r = he(r)),
          (s = s(r)),
          (e.flags |= 1),
          me(t, e, s, a),
          e.child
        );
      case 14:
        return np(t, e, e.type, e.pendingProps, a);
      case 15:
        return ap(t, e, e.type, e.pendingProps, a);
      case 19:
        return dp(t, e, a);
      case 31:
        return B1(t, e, a);
      case 22:
        return ip(t, e, a, e.pendingProps);
      case 24:
        return (
          Ia(e),
          (s = he(It)),
          t === null
            ? ((r = Nc()),
              r === null &&
                ((r = Bt),
                (u = Mc()),
                (r.pooledCache = u),
                u.refCount++,
                u !== null && (r.pooledCacheLanes |= a),
                (r = u)),
              (e.memoizedState = { parent: s, cache: r }),
              Dc(e),
              ha(e, It, r))
            : ((t.lanes & a) !== 0 && (Oc(t, e), Ws(e, null, null, a), Js()),
              (r = t.memoizedState),
              (u = e.memoizedState),
              r.parent !== s
                ? ((r = { parent: s, cache: s }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  ha(e, It, s))
                : ((s = u.cache),
                  ha(e, It, s),
                  s !== r.cache && Ec(e, [It], a, !0))),
          me(t, e, e.pendingProps.children, a),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Pn(t) {
    t.flags |= 4;
  }
  function du(t, e, a, s, r) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (r & 335544128) === r))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Up()) t.flags |= 8192;
        else throw ((ni = po), Rc);
    } else t.flags &= -16777217;
  }
  function mp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Rg(e)))
      if (Up()) t.flags |= 8192;
      else throw ((ni = po), Rc);
  }
  function jo(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ve() : 536870912), (t.lanes |= e), (Wi |= e)));
  }
  function al(t, e) {
    if (!Rt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var s = null; a !== null; )
            (a.alternate !== null && (s = a), (a = a.sibling));
          s === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Ut(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      s = 0;
    if (e)
      for (var r = t.child; r !== null; )
        ((a |= r.lanes | r.childLanes),
          (s |= r.subtreeFlags & 65011712),
          (s |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling));
    else
      for (r = t.child; r !== null; )
        ((a |= r.lanes | r.childLanes),
          (s |= r.subtreeFlags),
          (s |= r.flags),
          (r.return = t),
          (r = r.sibling));
    return ((t.subtreeFlags |= s), (t.childLanes = a), e);
  }
  function U1(t, e, a) {
    var s = e.pendingProps;
    switch ((bc(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ut(e), null);
      case 1:
        return (Ut(e), null);
      case 3:
        return (
          (a = e.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          e.memoizedState.cache !== s && (e.flags |= 2048),
          Gn(It),
          Nt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Bi(e)
              ? Pn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), wc())),
          Ut(e),
          null
        );
      case 26:
        var r = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? (Pn(e),
              u !== null ? (Ut(e), mp(e, u)) : (Ut(e), du(e, r, null, s, a)))
            : u
              ? u !== t.memoizedState
                ? (Pn(e), Ut(e), mp(e, u))
                : (Ut(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== s && Pn(e),
                Ut(e),
                du(e, r, t, s, a)),
          null
        );
      case 27:
        if (
          (Se(e),
          (a = rt.current),
          (r = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== s && Pn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(o(166));
            return (Ut(e), null);
          }
          ((t = J.current),
            Bi(e) ? Qh(e) : ((t = Sg(r, s, a)), (e.stateNode = t), Pn(e)));
        }
        return (Ut(e), null);
      case 5:
        if ((Se(e), (r = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== s && Pn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(o(166));
            return (Ut(e), null);
          }
          if (((u = J.current), Bi(e))) Qh(e);
          else {
            var y = Qo(rt.current);
            switch (u) {
              case 1:
                u = y.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                u = y.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    u = y.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    u = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r,
                    );
                    break;
                  case "script":
                    ((u = y.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof s.is == "string"
                        ? y.createElement("select", { is: s.is })
                        : y.createElement("select")),
                      s.multiple
                        ? (u.multiple = !0)
                        : s.size && (u.size = s.size));
                    break;
                  default:
                    u =
                      typeof s.is == "string"
                        ? y.createElement(r, { is: s.is })
                        : y.createElement(r);
                }
            }
            ((u[fe] = e), (u[Oe] = s));
            t: for (y = e.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) u.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                ((y.child.return = y), (y = y.child));
                continue;
              }
              if (y === e) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === e) break t;
                y = y.return;
              }
              ((y.sibling.return = y.return), (y = y.sibling));
            }
            e.stateNode = u;
            t: switch ((pe(u, r, s), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break t;
              case "img":
                s = !0;
                break t;
              default:
                s = !1;
            }
            s && Pn(e);
          }
        }
        return (
          Ut(e),
          du(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== s && Pn(e);
        else {
          if (typeof s != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = rt.current), Bi(e))) {
            if (
              ((t = e.stateNode),
              (a = e.memoizedProps),
              (s = null),
              (r = de),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  s = r.memoizedProps;
              }
            ((t[fe] = e),
              (t = !!(
                t.nodeValue === a ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                ug(t.nodeValue, a)
              )),
              t || da(e, !0));
          } else
            ((t = Qo(t).createTextNode(s)), (t[fe] = e), (e.stateNode = t));
        }
        return (Ut(e), null);
      case 31:
        if (((a = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((s = Bi(e)), a !== null)) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[fe] = e;
            } else
              (Wa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Ut(e), (t = !1));
          } else
            ((a = wc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = a),
              (t = !0));
          if (!t) return e.flags & 256 ? (Xe(e), e) : (Xe(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return (Ut(e), null);
      case 13:
        if (
          ((s = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = Bi(e)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(o(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(o(317));
              r[fe] = e;
            } else
              (Wa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Ut(e), (r = !1));
          } else
            ((r = wc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (r = !0));
          if (!r) return e.flags & 256 ? (Xe(e), e) : (Xe(e), null);
        }
        return (
          Xe(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = a), e)
            : ((a = s !== null),
              (t = t !== null && t.memoizedState !== null),
              a &&
                ((s = e.child),
                (r = null),
                s.alternate !== null &&
                  s.alternate.memoizedState !== null &&
                  s.alternate.memoizedState.cachePool !== null &&
                  (r = s.alternate.memoizedState.cachePool.pool),
                (u = null),
                s.memoizedState !== null &&
                  s.memoizedState.cachePool !== null &&
                  (u = s.memoizedState.cachePool.pool),
                u !== r && (s.flags |= 2048)),
              a !== t && a && (e.child.flags |= 8192),
              jo(e, e.updateQueue),
              Ut(e),
              null)
        );
      case 4:
        return (Nt(), t === null && zu(e.stateNode.containerInfo), Ut(e), null);
      case 10:
        return (Gn(e.type), Ut(e), null);
      case 19:
        if ((q(Jt), (s = e.memoizedState), s === null)) return (Ut(e), null);
        if (((r = (e.flags & 128) !== 0), (u = s.rendering), u === null))
          if (r) al(s, !1);
          else {
            if (Zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = xo(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      al(s, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      jo(e, t),
                      e.subtreeFlags = 0,
                      t = a,
                      a = e.child;
                    a !== null;
                  )
                    (Yh(a, t), (a = a.sibling));
                  return (
                    Y(Jt, (Jt.current & 1) | 2),
                    Rt && Ln(e, s.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Te() > Vo &&
              ((e.flags |= 128), (r = !0), al(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = xo(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (r = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                jo(e, t),
                al(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !u.alternate &&
                  !Rt)
              )
                return (Ut(e), null);
            } else
              2 * Te() - s.renderingStartTime > Vo &&
                a !== 536870912 &&
                ((e.flags |= 128), (r = !0), al(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = s.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (s.last = u));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Te()),
            (t.sibling = null),
            (a = Jt.current),
            Y(Jt, r ? (a & 1) | 2 : a & 1),
            Rt && Ln(e, s.treeForkCount),
            t)
          : (Ut(e), null);
      case 22:
      case 23:
        return (
          Xe(e),
          Hc(),
          (s = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
            : s && (e.flags |= 8192),
          s
            ? (a & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ut(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ut(e),
          (a = e.updateQueue),
          a !== null && jo(e, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (s = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          s !== a && (e.flags |= 2048),
          t !== null && q(ti),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Gn(It),
          Ut(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function G1(t, e) {
    switch ((bc(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Gn(It),
          Nt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Se(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Xe(e), e.alternate === null)) throw Error(o(340));
          Wa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Xe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          Wa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (q(Jt), null);
      case 4:
        return (Nt(), null);
      case 10:
        return (Gn(e.type), null);
      case 22:
      case 23:
        return (
          Xe(e),
          Hc(),
          t !== null && q(ti),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Gn(It), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pp(t, e) {
    switch ((bc(e), e.tag)) {
      case 3:
        (Gn(It), Nt());
        break;
      case 26:
      case 27:
      case 5:
        Se(e);
        break;
      case 4:
        Nt();
        break;
      case 31:
        e.memoizedState !== null && Xe(e);
        break;
      case 13:
        Xe(e);
        break;
      case 19:
        q(Jt);
        break;
      case 10:
        Gn(e.type);
        break;
      case 22:
      case 23:
        (Xe(e), Hc(), t !== null && q(ti));
        break;
      case 24:
        Gn(It);
    }
  }
  function il(t, e) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            s = void 0;
            var u = a.create,
              y = a.inst;
            ((s = u()), (y.destroy = s));
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (x) {
      zt(e, e.return, x);
    }
  }
  function xa(t, e, a) {
    try {
      var s = e.updateQueue,
        r = s !== null ? s.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        s = u;
        do {
          if ((s.tag & t) === t) {
            var y = s.inst,
              x = y.destroy;
            if (x !== void 0) {
              ((y.destroy = void 0), (r = e));
              var T = a,
                _ = x;
              try {
                _();
              } catch (U) {
                zt(r, T, U);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    } catch (U) {
      zt(e, e.return, U);
    }
  }
  function gp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        lm(e, a);
      } catch (s) {
        zt(t, t.return, s);
      }
    }
  }
  function yp(t, e, a) {
    ((a.props = si(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (s) {
      zt(t, e, s);
    }
  }
  function sl(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(s)) : (a.current = s);
      }
    } catch (r) {
      zt(t, e, r);
    }
  }
  function An(t, e) {
    var a = t.ref,
      s = t.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (r) {
          zt(t, e, r);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (r) {
          zt(t, e, r);
        }
      else a.current = null;
  }
  function vp(t) {
    var e = t.type,
      a = t.memoizedProps,
      s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && s.focus();
          break t;
        case "img":
          a.src ? (s.src = a.src) : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (r) {
      zt(t, t.return, r);
    }
  }
  function hu(t, e, a) {
    try {
      var s = t.stateNode;
      (c2(s, t.type, a, e), (s[Oe] = e));
    } catch (r) {
      zt(t, t.return, r);
    }
  }
  function xp(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Ma(t.type)) ||
      t.tag === 4
    );
  }
  function mu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || xp(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Ma(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function pu(t, e, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode),
        e
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, e)
          : ((e =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            e.appendChild(t),
            (a = a._reactRootContainer),
            a != null || e.onclick !== null || (e.onclick = kn)));
    else if (
      s !== 4 &&
      (s === 27 && Ma(t.type) && ((a = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (pu(t, e, a), t = t.sibling; t !== null; )
        (pu(t, e, a), (t = t.sibling));
  }
  function _o(t, e, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode), e ? a.insertBefore(t, e) : a.appendChild(t));
    else if (
      s !== 4 &&
      (s === 27 && Ma(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (_o(t, e, a), t = t.sibling; t !== null; )
        (_o(t, e, a), (t = t.sibling));
  }
  function bp(t) {
    var e = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var s = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      (pe(e, s, a), (e[fe] = t), (e[Oe] = a));
    } catch (u) {
      zt(t, t.return, u);
    }
  }
  var Kn = !1,
    ne = !1,
    gu = !1,
    Sp = typeof WeakSet == "function" ? WeakSet : Set,
    re = null;
  function Y1(t, e) {
    if (((t = t.containerInfo), (Vu = tr), (t = _h(t)), cc(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var r = s.anchorOffset,
              u = s.focusNode;
            s = s.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch {
              a = null;
              break t;
            }
            var y = 0,
              x = -1,
              T = -1,
              _ = 0,
              U = 0,
              K = t,
              k = null;
            e: for (;;) {
              for (
                var V;
                K !== a || (r !== 0 && K.nodeType !== 3) || (x = y + r),
                  K !== u || (s !== 0 && K.nodeType !== 3) || (T = y + s),
                  K.nodeType === 3 && (y += K.nodeValue.length),
                  (V = K.firstChild) !== null;
              )
                ((k = K), (K = V));
              for (;;) {
                if (K === t) break e;
                if (
                  (k === a && ++_ === r && (x = y),
                  k === u && ++U === s && (T = y),
                  (V = K.nextSibling) !== null)
                )
                  break;
                ((K = k), (k = K.parentNode));
              }
              K = V;
            }
            a = x === -1 || T === -1 ? null : { start: x, end: T };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Bu = { focusedElem: t, selectionRange: a }, tr = !1, re = e;
      re !== null;
    )
      if (
        ((e = re), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (re = t));
      else
        for (; re !== null; ) {
          switch (((e = re), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (a = 0; a < t.length; a++)
                  ((r = t[a]), (r.ref.impl = r.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (a = e),
                  (r = u.memoizedProps),
                  (u = u.memoizedState),
                  (s = a.stateNode));
                try {
                  var tt = si(a.type, r);
                  ((t = s.getSnapshotBeforeUpdate(tt, u)),
                    (s.__reactInternalSnapshotBeforeUpdate = t));
                } catch (ut) {
                  zt(a, a.return, ut);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Gu(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Gu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (re = t));
            break;
          }
          re = e.return;
        }
  }
  function wp(t, e, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Zn(t, a), s & 4 && il(5, a));
        break;
      case 1:
        if ((Zn(t, a), s & 4))
          if (((t = a.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (y) {
              zt(a, a.return, y);
            }
          else {
            var r = si(a.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              zt(a, a.return, y);
            }
          }
        (s & 64 && gp(a), s & 512 && sl(a, a.return));
        break;
      case 3:
        if ((Zn(t, a), s & 64 && ((t = a.updateQueue), t !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            lm(t, e);
          } catch (y) {
            zt(a, a.return, y);
          }
        }
        break;
      case 27:
        e === null && s & 4 && bp(a);
      case 26:
      case 5:
        (Zn(t, a), e === null && s & 4 && vp(a), s & 512 && sl(a, a.return));
        break;
      case 12:
        Zn(t, a);
        break;
      case 31:
        (Zn(t, a), s & 4 && Ep(t, a));
        break;
      case 13:
        (Zn(t, a),
          s & 4 && Mp(t, a),
          s & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = W1.bind(null, a)), y2(t, a)))));
        break;
      case 22:
        if (((s = a.memoizedState !== null || Kn), !s)) {
          ((e = (e !== null && e.memoizedState !== null) || ne), (r = Kn));
          var u = ne;
          ((Kn = s),
            (ne = e) && !u ? Fn(t, a, (a.subtreeFlags & 8772) !== 0) : Zn(t, a),
            (Kn = r),
            (ne = u));
        }
        break;
      case 30:
        break;
      default:
        Zn(t, a);
    }
  }
  function Tp(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Tp(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Kr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var qt = null,
    _e = !1;
  function Qn(t, e, a) {
    for (a = a.child; a !== null; ) (Ap(t, e, a), (a = a.sibling));
  }
  function Ap(t, e, a) {
    if (Ae && typeof Ae.onCommitFiberUnmount == "function")
      try {
        Ae.onCommitFiberUnmount(Ya, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ne || An(a, e),
          Qn(t, e, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ne || An(a, e);
        var s = qt,
          r = _e;
        (Ma(a.type) && ((qt = a.stateNode), (_e = !1)),
          Qn(t, e, a),
          ml(a.stateNode),
          (qt = s),
          (_e = r));
        break;
      case 5:
        ne || An(a, e);
      case 6:
        if (
          ((s = qt),
          (r = _e),
          (qt = null),
          Qn(t, e, a),
          (qt = s),
          (_e = r),
          qt !== null)
        )
          if (_e)
            try {
              (qt.nodeType === 9
                ? qt.body
                : qt.nodeName === "HTML"
                  ? qt.ownerDocument.body
                  : qt
              ).removeChild(a.stateNode);
            } catch (u) {
              zt(a, e, u);
            }
          else
            try {
              qt.removeChild(a.stateNode);
            } catch (u) {
              zt(a, e, u);
            }
        break;
      case 18:
        qt !== null &&
          (_e
            ? ((t = qt),
              gg(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                a.stateNode,
              ),
              ss(t))
            : gg(qt, a.stateNode));
        break;
      case 4:
        ((s = qt),
          (r = _e),
          (qt = a.stateNode.containerInfo),
          (_e = !0),
          Qn(t, e, a),
          (qt = s),
          (_e = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (xa(2, a, e), ne || xa(4, a, e), Qn(t, e, a));
        break;
      case 1:
        (ne ||
          (An(a, e),
          (s = a.stateNode),
          typeof s.componentWillUnmount == "function" && yp(a, e, s)),
          Qn(t, e, a));
        break;
      case 21:
        Qn(t, e, a);
        break;
      case 22:
        ((ne = (s = ne) || a.memoizedState !== null), Qn(t, e, a), (ne = s));
        break;
      default:
        Qn(t, e, a);
    }
  }
  function Ep(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ss(t);
      } catch (a) {
        zt(e, e.return, a);
      }
    }
  }
  function Mp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ss(t);
      } catch (a) {
        zt(e, e.return, a);
      }
  }
  function q1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Sp()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Sp()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function zo(t, e) {
    var a = q1(t);
    e.forEach(function (s) {
      if (!a.has(s)) {
        a.add(s);
        var r = $1.bind(null, t, s);
        s.then(r, r);
      }
    });
  }
  function ze(t, e) {
    var a = e.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var r = a[s],
          u = t,
          y = e,
          x = y;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Ma(x.type)) {
                ((qt = x.stateNode), (_e = !1));
                break t;
              }
              break;
            case 5:
              ((qt = x.stateNode), (_e = !1));
              break t;
            case 3:
            case 4:
              ((qt = x.stateNode.containerInfo), (_e = !0));
              break t;
          }
          x = x.return;
        }
        if (qt === null) throw Error(o(160));
        (Ap(u, y, r),
          (qt = null),
          (_e = !1),
          (u = r.alternate),
          u !== null && (u.return = null),
          (r.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (Cp(e, t), (e = e.sibling));
  }
  var pn = null;
  function Cp(t, e) {
    var a = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ze(e, t),
          He(t),
          s & 4 && (xa(3, t, t.return), il(3, t), xa(5, t, t.return)));
        break;
      case 1:
        (ze(e, t),
          He(t),
          s & 512 && (ne || a === null || An(a, a.return)),
          s & 64 &&
            Kn &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? s : a.concat(s))))));
        break;
      case 26:
        var r = pn;
        if (
          (ze(e, t),
          He(t),
          s & 512 && (ne || a === null || An(a, a.return)),
          s & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((s = t.memoizedState), a === null))
            if (s === null)
              if (t.stateNode === null) {
                t: {
                  ((s = t.type),
                    (a = t.memoizedProps),
                    (r = r.ownerDocument || r));
                  e: switch (s) {
                    case "title":
                      ((u = r.getElementsByTagName("title")[0]),
                        (!u ||
                          u[js] ||
                          u[fe] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = r.createElement(s)),
                          r.head.insertBefore(
                            u,
                            r.querySelector("head > title"),
                          )),
                        pe(u, s, a),
                        (u[fe] = t),
                        oe(u),
                        (s = u));
                      break t;
                    case "link":
                      var y = Cg("link", "href", r).get(s + (a.href || ""));
                      if (y) {
                        for (var x = 0; x < y.length; x++)
                          if (
                            ((u = y[x]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            y.splice(x, 1);
                            break e;
                          }
                      }
                      ((u = r.createElement(s)),
                        pe(u, s, a),
                        r.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (y = Cg("meta", "content", r).get(
                          s + (a.content || ""),
                        ))
                      ) {
                        for (x = 0; x < y.length; x++)
                          if (
                            ((u = y[x]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            y.splice(x, 1);
                            break e;
                          }
                      }
                      ((u = r.createElement(s)),
                        pe(u, s, a),
                        r.head.appendChild(u));
                      break;
                    default:
                      throw Error(o(468, s));
                  }
                  ((u[fe] = t), oe(u), (s = u));
                }
                t.stateNode = s;
              } else Ng(r, t.type, t.stateNode);
            else t.stateNode = Mg(r, s, t.memoizedProps);
          else
            u !== s
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                s === null
                  ? Ng(r, t.type, t.stateNode)
                  : Mg(r, s, t.memoizedProps))
              : s === null &&
                t.stateNode !== null &&
                hu(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ze(e, t),
          He(t),
          s & 512 && (ne || a === null || An(a, a.return)),
          a !== null && s & 4 && hu(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ze(e, t),
          He(t),
          s & 512 && (ne || a === null || An(a, a.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            Ni(r, "");
          } catch (tt) {
            zt(t, t.return, tt);
          }
        }
        (s & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), hu(t, r, a !== null ? a.memoizedProps : r)),
          s & 1024 && (gu = !0));
        break;
      case 6:
        if ((ze(e, t), He(t), s & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((s = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = s;
          } catch (tt) {
            zt(t, t.return, tt);
          }
        }
        break;
      case 3:
        if (
          ((Jo = null),
          (r = pn),
          (pn = Zo(e.containerInfo)),
          ze(e, t),
          (pn = r),
          He(t),
          s & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            ss(e.containerInfo);
          } catch (tt) {
            zt(t, t.return, tt);
          }
        gu && ((gu = !1), Np(t));
        break;
      case 4:
        ((s = pn),
          (pn = Zo(t.stateNode.containerInfo)),
          ze(e, t),
          He(t),
          (pn = s));
        break;
      case 12:
        (ze(e, t), He(t));
        break;
      case 31:
        (ze(e, t),
          He(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), zo(t, s))));
        break;
      case 13:
        (ze(e, t),
          He(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (ko = Te()),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), zo(t, s))));
        break;
      case 22:
        r = t.memoizedState !== null;
        var T = a !== null && a.memoizedState !== null,
          _ = Kn,
          U = ne;
        if (
          ((Kn = _ || r),
          (ne = U || T),
          ze(e, t),
          (ne = U),
          (Kn = _),
          He(t),
          s & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (a === null || T || Kn || ne || li(t)),
              a = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (a === null) {
                T = a = e;
                try {
                  if (((u = T.stateNode), r))
                    ((y = u.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none"));
                  else {
                    x = T.stateNode;
                    var K = T.memoizedProps.style,
                      k =
                        K != null && K.hasOwnProperty("display")
                          ? K.display
                          : null;
                    x.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (tt) {
                  zt(T, T.return, tt);
                }
              }
            } else if (e.tag === 6) {
              if (a === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = r ? "" : T.memoizedProps;
                } catch (tt) {
                  zt(T, T.return, tt);
                }
              }
            } else if (e.tag === 18) {
              if (a === null) {
                T = e;
                try {
                  var V = T.stateNode;
                  r ? yg(V, !0) : yg(T.stateNode, !1);
                } catch (tt) {
                  zt(T, T.return, tt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (a === e && (a = null), (e = e.return));
            }
            (a === e && (a = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null &&
            ((a = s.retryQueue),
            a !== null && ((s.retryQueue = null), zo(t, a))));
        break;
      case 19:
        (ze(e, t),
          He(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), zo(t, s))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ze(e, t), He(t));
    }
  }
  function He(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, s = t.return; s !== null; ) {
          if (xp(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var r = a.stateNode,
              u = mu(t);
            _o(t, u, r);
            break;
          case 5:
            var y = a.stateNode;
            a.flags & 32 && (Ni(y, ""), (a.flags &= -33));
            var x = mu(t);
            _o(t, x, y);
            break;
          case 3:
          case 4:
            var T = a.stateNode.containerInfo,
              _ = mu(t);
            pu(t, _, T);
            break;
          default:
            throw Error(o(161));
        }
      } catch (U) {
        zt(t, t.return, U);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Np(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (Np(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Zn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (wp(t, e.alternate, e), (e = e.sibling));
  }
  function li(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (xa(4, e, e.return), li(e));
          break;
        case 1:
          An(e, e.return);
          var a = e.stateNode;
          (typeof a.componentWillUnmount == "function" && yp(e, e.return, a),
            li(e));
          break;
        case 27:
          ml(e.stateNode);
        case 26:
        case 5:
          (An(e, e.return), li(e));
          break;
        case 22:
          e.memoizedState === null && li(e);
          break;
        case 30:
          li(e);
          break;
        default:
          li(e);
      }
      t = t.sibling;
    }
  }
  function Fn(t, e, a) {
    for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var s = e.alternate,
        r = t,
        u = e,
        y = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Fn(r, u, a), il(4, u));
          break;
        case 1:
          if (
            (Fn(r, u, a),
            (s = u),
            (r = s.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (_) {
              zt(s, s.return, _);
            }
          if (((s = u), (r = s.updateQueue), r !== null)) {
            var x = s.stateNode;
            try {
              var T = r.shared.hiddenCallbacks;
              if (T !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < T.length; r++)
                  sm(T[r], x);
            } catch (_) {
              zt(s, s.return, _);
            }
          }
          (a && y & 64 && gp(u), sl(u, u.return));
          break;
        case 27:
          bp(u);
        case 26:
        case 5:
          (Fn(r, u, a), a && s === null && y & 4 && vp(u), sl(u, u.return));
          break;
        case 12:
          Fn(r, u, a);
          break;
        case 31:
          (Fn(r, u, a), a && y & 4 && Ep(r, u));
          break;
        case 13:
          (Fn(r, u, a), a && y & 4 && Mp(r, u));
          break;
        case 22:
          (u.memoizedState === null && Fn(r, u, a), sl(u, u.return));
          break;
        case 30:
          break;
        default:
          Fn(r, u, a);
      }
      e = e.sibling;
    }
  }
  function yu(t, e) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Ps(a)));
  }
  function vu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ps(t)));
  }
  function gn(t, e, a, s) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Rp(t, e, a, s), (e = e.sibling));
  }
  function Rp(t, e, a, s) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (gn(t, e, a, s), r & 2048 && il(9, e));
        break;
      case 1:
        gn(t, e, a, s);
        break;
      case 3:
        (gn(t, e, a, s),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ps(t))));
        break;
      case 12:
        if (r & 2048) {
          (gn(t, e, a, s), (t = e.stateNode));
          try {
            var u = e.memoizedProps,
              y = u.id,
              x = u.onPostCommit;
            typeof x == "function" &&
              x(
                y,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            zt(e, e.return, T);
          }
        } else gn(t, e, a, s);
        break;
      case 31:
        gn(t, e, a, s);
        break;
      case 13:
        gn(t, e, a, s);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (y = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? gn(t, e, a, s)
              : ll(t, e)
            : u._visibility & 2
              ? gn(t, e, a, s)
              : ((u._visibility |= 2),
                Zi(t, e, a, s, (e.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && yu(y, e));
        break;
      case 24:
        (gn(t, e, a, s), r & 2048 && vu(e.alternate, e));
        break;
      default:
        gn(t, e, a, s);
    }
  }
  function Zi(t, e, a, s, r) {
    for (
      r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = t,
        y = e,
        x = a,
        T = s,
        _ = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (Zi(u, y, x, T, r), il(8, y));
          break;
        case 23:
          break;
        case 22:
          var U = y.stateNode;
          (y.memoizedState !== null
            ? U._visibility & 2
              ? Zi(u, y, x, T, r)
              : ll(u, y)
            : ((U._visibility |= 2), Zi(u, y, x, T, r)),
            r && _ & 2048 && yu(y.alternate, y));
          break;
        case 24:
          (Zi(u, y, x, T, r), r && _ & 2048 && vu(y.alternate, y));
          break;
        default:
          Zi(u, y, x, T, r);
      }
      e = e.sibling;
    }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t,
          s = e,
          r = s.flags;
        switch (s.tag) {
          case 22:
            (ll(a, s), r & 2048 && yu(s.alternate, s));
            break;
          case 24:
            (ll(a, s), r & 2048 && vu(s.alternate, s));
            break;
          default:
            ll(a, s);
        }
        e = e.sibling;
      }
  }
  var ol = 8192;
  function Fi(t, e, a) {
    if (t.subtreeFlags & ol)
      for (t = t.child; t !== null; ) (Dp(t, e, a), (t = t.sibling));
  }
  function Dp(t, e, a) {
    switch (t.tag) {
      case 26:
        (Fi(t, e, a),
          t.flags & ol &&
            t.memoizedState !== null &&
            R2(a, pn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Fi(t, e, a);
        break;
      case 3:
      case 4:
        var s = pn;
        ((pn = Zo(t.stateNode.containerInfo)), Fi(t, e, a), (pn = s));
        break;
      case 22:
        t.memoizedState === null &&
          ((s = t.alternate),
          s !== null && s.memoizedState !== null
            ? ((s = ol), (ol = 16777216), Fi(t, e, a), (ol = s))
            : Fi(t, e, a));
        break;
      default:
        Fi(t, e, a);
    }
  }
  function Op(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function rl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          ((re = s), _p(s, t));
        }
      Op(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (jp(t), (t = t.sibling));
  }
  function jp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (rl(t), t.flags & 2048 && xa(9, t, t.return));
        break;
      case 3:
        rl(t);
        break;
      case 12:
        rl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Ho(t))
          : rl(t);
        break;
      default:
        rl(t);
    }
  }
  function Ho(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var s = e[a];
          ((re = s), _p(s, t));
        }
      Op(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (xa(8, e, e.return), Ho(e));
          break;
        case 22:
          ((a = e.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Ho(e)));
          break;
        default:
          Ho(e);
      }
      t = t.sibling;
    }
  }
  function _p(t, e) {
    for (; re !== null; ) {
      var a = re;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Ps(a.memoizedState.cache);
      }
      if (((s = a.child), s !== null)) ((s.return = a), (re = s));
      else
        t: for (a = t; re !== null; ) {
          s = re;
          var r = s.sibling,
            u = s.return;
          if ((Tp(s), s === a)) {
            re = null;
            break t;
          }
          if (r !== null) {
            ((r.return = u), (re = r));
            break t;
          }
          re = u;
        }
    }
  }
  var X1 = {
      getCacheForType: function (t) {
        var e = he(It),
          a = e.data.get(t);
        return (a === void 0 && ((a = t()), e.data.set(t, a)), a);
      },
      cacheSignal: function () {
        return he(It).controller.signal;
      },
    },
    P1 = typeof WeakMap == "function" ? WeakMap : Map,
    jt = 0,
    Bt = null,
    At = null,
    Mt = 0,
    _t = 0,
    Pe = null,
    ba = !1,
    Ji = !1,
    xu = !1,
    Jn = 0,
    Zt = 0,
    Sa = 0,
    oi = 0,
    bu = 0,
    Ke = 0,
    Wi = 0,
    cl = null,
    ke = null,
    Su = !1,
    ko = 0,
    zp = 0,
    Vo = 1 / 0,
    Bo = null,
    wa = null,
    ie = 0,
    Ta = null,
    $i = null,
    Wn = 0,
    wu = 0,
    Tu = null,
    Hp = null,
    ul = 0,
    Au = null;
  function Qe() {
    return (jt & 2) !== 0 && Mt !== 0 ? Mt & -Mt : N.T !== null ? Du() : Xr();
  }
  function kp() {
    if (Ke === 0)
      if ((Mt & 536870912) === 0 || Rt) {
        var t = bi;
        ((bi <<= 1), (bi & 3932160) === 0 && (bi = 262144), (Ke = t));
      } else Ke = 536870912;
    return ((t = qe.current), t !== null && (t.flags |= 32), Ke);
  }
  function Ve(t, e, a) {
    (((t === Bt && (_t === 2 || _t === 9)) || t.cancelPendingCommit !== null) &&
      (Ii(t, 0), Aa(t, Mt, Ke, !1)),
      Pt(t, a),
      ((jt & 2) === 0 || t !== Bt) &&
        (t === Bt &&
          ((jt & 2) === 0 && (oi |= a), Zt === 4 && Aa(t, Mt, Ke, !1)),
        En(t)));
  }
  function Vp(t, e, a) {
    if ((jt & 6) !== 0) throw Error(o(327));
    var s = (!a && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Yt(t, e),
      r = s ? Z1(t, e) : Mu(t, e, !0),
      u = s;
    do {
      if (r === 0) {
        Ji && !s && Aa(t, e, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), u && !K1(a))) {
          ((r = Mu(t, e, !1)), (u = !1));
          continue;
        }
        if (r === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            e = y;
            t: {
              var x = t;
              r = cl;
              var T = x.current.memoizedState.isDehydrated;
              if ((T && (Ii(x, y).flags |= 256), (y = Mu(x, y, !1)), y !== 2)) {
                if (xu && !T) {
                  ((x.errorRecoveryDisabledLanes |= u), (oi |= u), (r = 4));
                  break t;
                }
                ((u = ke),
                  (ke = r),
                  u !== null &&
                    (ke === null ? (ke = u) : ke.push.apply(ke, u)));
              }
              r = y;
            }
            if (((u = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (Ii(t, 0), Aa(t, e, 0, !0));
          break;
        }
        t: {
          switch (((s = t), (u = r), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Aa(s, e, Ke, !ba);
              break t;
            case 2:
              ke = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((r = ko + 300 - Te()), 10 < r)) {
            if ((Aa(s, e, Ke, !ba), mt(s, 0, !0) !== 0)) break t;
            ((Wn = e),
              (s.timeoutHandle = mg(
                Bp.bind(
                  null,
                  s,
                  a,
                  ke,
                  Bo,
                  Su,
                  e,
                  Ke,
                  oi,
                  Wi,
                  ba,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                r,
              )));
            break t;
          }
          Bp(s, a, ke, Bo, Su, e, Ke, oi, Wi, ba, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    En(t);
  }
  function Bp(t, e, a, s, r, u, y, x, T, _, U, K, k, V) {
    if (
      ((t.timeoutHandle = -1),
      (K = e.subtreeFlags),
      K & 8192 || (K & 16785408) === 16785408)
    ) {
      ((K = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: kn,
      }),
        Dp(e, u, K));
      var tt =
        (u & 62914560) === u ? ko - Te() : (u & 4194048) === u ? zp - Te() : 0;
      if (((tt = D2(K, tt)), tt !== null)) {
        ((Wn = u),
          (t.cancelPendingCommit = tt(
            Kp.bind(null, t, e, u, a, s, r, y, x, T, U, K, null, k, V),
          )),
          Aa(t, u, y, !_));
        return;
      }
    }
    Kp(t, e, u, a, s, r, y, x, T);
  }
  function K1(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        e.flags & 16384 &&
        ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var s = 0; s < a.length; s++) {
          var r = a[s],
            u = r.getSnapshot;
          r = r.value;
          try {
            if (!Ge(u(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
        ((a.return = e), (e = a));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Aa(t, e, a, s) {
    ((e &= ~bu),
      (e &= ~oi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      s && (t.warmLanes |= e),
      (s = t.expirationTimes));
    for (var r = e; 0 < r; ) {
      var u = 31 - ye(r),
        y = 1 << u;
      ((s[u] = -1), (r &= ~y));
    }
    a !== 0 && Xa(t, a, e);
  }
  function Lo() {
    return (jt & 6) === 0 ? (fl(0), !1) : !0;
  }
  function Eu() {
    if (At !== null) {
      if (_t === 0) var t = At.return;
      else ((t = At), (Un = $a = null), Gc(t), (qi = null), (Qs = 0), (t = At));
      for (; t !== null; ) (pp(t.alternate, t), (t = t.return));
      At = null;
    }
  }
  function Ii(t, e) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), d2(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      (Wn = 0),
      Eu(),
      (Bt = t),
      (At = a = Bn(t.current, null)),
      (Mt = e),
      (_t = 0),
      (Pe = null),
      (ba = !1),
      (Ji = Yt(t, e)),
      (xu = !1),
      (Wi = Ke = bu = oi = Sa = Zt = 0),
      (ke = cl = null),
      (Su = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= e; 0 < s; ) {
        var r = 31 - ye(s),
          u = 1 << r;
        ((e |= t[r]), (s &= ~u));
      }
    return ((Jn = e), so(), a);
  }
  function Lp(t, e) {
    ((xt = null),
      (N.H = el),
      e === Yi || e === mo
        ? ((e = em()), (_t = 3))
        : e === Rc
          ? ((e = em()), (_t = 4))
          : (_t =
              e === au
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Pe = e),
      At === null && ((Zt = 1), No(t, Ie(e, t.current))));
  }
  function Up() {
    var t = qe.current;
    return t === null
      ? !0
      : (Mt & 4194048) === Mt
        ? an === null
        : (Mt & 62914560) === Mt || (Mt & 536870912) !== 0
          ? t === an
          : !1;
  }
  function Gp() {
    var t = N.H;
    return ((N.H = el), t === null ? el : t);
  }
  function Yp() {
    var t = N.A;
    return ((N.A = X1), t);
  }
  function Uo() {
    ((Zt = 4),
      ba || ((Mt & 4194048) !== Mt && qe.current !== null) || (Ji = !0),
      ((Sa & 134217727) === 0 && (oi & 134217727) === 0) ||
        Bt === null ||
        Aa(Bt, Mt, Ke, !1));
  }
  function Mu(t, e, a) {
    var s = jt;
    jt |= 2;
    var r = Gp(),
      u = Yp();
    ((Bt !== t || Mt !== e) && ((Bo = null), Ii(t, e)), (e = !1));
    var y = Zt;
    t: do
      try {
        if (_t !== 0 && At !== null) {
          var x = At,
            T = Pe;
          switch (_t) {
            case 8:
              (Eu(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              qe.current === null && (e = !0);
              var _ = _t;
              if (((_t = 0), (Pe = null), ts(t, x, T, _), a && Ji)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((_ = _t), (_t = 0), (Pe = null), ts(t, x, T, _));
          }
        }
        (Q1(), (y = Zt));
        break;
      } catch (U) {
        Lp(t, U);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Un = $a = null),
      (jt = s),
      (N.H = r),
      (N.A = u),
      At === null && ((Bt = null), (Mt = 0), so()),
      y
    );
  }
  function Q1() {
    for (; At !== null; ) qp(At);
  }
  function Z1(t, e) {
    var a = jt;
    jt |= 2;
    var s = Gp(),
      r = Yp();
    Bt !== t || Mt !== e
      ? ((Bo = null), (Vo = Te() + 500), Ii(t, e))
      : (Ji = Yt(t, e));
    t: do
      try {
        if (_t !== 0 && At !== null) {
          e = At;
          var u = Pe;
          e: switch (_t) {
            case 1:
              ((_t = 0), (Pe = null), ts(t, e, u, 1));
              break;
            case 2:
            case 9:
              if (Ih(u)) {
                ((_t = 0), (Pe = null), Xp(e));
                break;
              }
              ((e = function () {
                ((_t !== 2 && _t !== 9) || Bt !== t || (_t = 7), En(t));
              }),
                u.then(e, e));
              break t;
            case 3:
              _t = 7;
              break t;
            case 4:
              _t = 5;
              break t;
            case 7:
              Ih(u)
                ? ((_t = 0), (Pe = null), Xp(e))
                : ((_t = 0), (Pe = null), ts(t, e, u, 7));
              break;
            case 5:
              var y = null;
              switch (At.tag) {
                case 26:
                  y = At.memoizedState;
                case 5:
                case 27:
                  var x = At;
                  if (y ? Rg(y) : x.stateNode.complete) {
                    ((_t = 0), (Pe = null));
                    var T = x.sibling;
                    if (T !== null) At = T;
                    else {
                      var _ = x.return;
                      _ !== null ? ((At = _), Go(_)) : (At = null);
                    }
                    break e;
                  }
              }
              ((_t = 0), (Pe = null), ts(t, e, u, 5));
              break;
            case 6:
              ((_t = 0), (Pe = null), ts(t, e, u, 6));
              break;
            case 8:
              (Eu(), (Zt = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        F1();
        break;
      } catch (U) {
        Lp(t, U);
      }
    while (!0);
    return (
      (Un = $a = null),
      (N.H = s),
      (N.A = r),
      (jt = a),
      At !== null ? 0 : ((Bt = null), (Mt = 0), so(), Zt)
    );
  }
  function F1() {
    for (; At !== null && !we(); ) qp(At);
  }
  function qp(t) {
    var e = hp(t.alternate, t, Jn);
    ((t.memoizedProps = t.pendingProps), e === null ? Go(t) : (At = e));
  }
  function Xp(t) {
    var e = t,
      a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = op(a, e, e.pendingProps, e.type, void 0, Mt);
        break;
      case 11:
        e = op(a, e, e.pendingProps, e.type.render, e.ref, Mt);
        break;
      case 5:
        Gc(e);
      default:
        (pp(a, e), (e = At = Yh(e, Jn)), (e = hp(a, e, Jn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Go(t) : (At = e));
  }
  function ts(t, e, a, s) {
    ((Un = $a = null), Gc(e), (qi = null), (Qs = 0));
    var r = e.return;
    try {
      if (V1(t, r, e, a, Mt)) {
        ((Zt = 1), No(t, Ie(a, t.current)), (At = null));
        return;
      }
    } catch (u) {
      if (r !== null) throw ((At = r), u);
      ((Zt = 1), No(t, Ie(a, t.current)), (At = null));
      return;
    }
    e.flags & 32768
      ? (Rt || s === 1
          ? (t = !0)
          : Ji || (Mt & 536870912) !== 0
            ? (t = !1)
            : ((ba = t = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = qe.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        Pp(e, t))
      : Go(e);
  }
  function Go(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Pp(e, ba);
        return;
      }
      t = e.return;
      var a = U1(e.alternate, e, Jn);
      if (a !== null) {
        At = a;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        At = e;
        return;
      }
      At = e = t;
    } while (e !== null);
    Zt === 0 && (Zt = 5);
  }
  function Pp(t, e) {
    do {
      var a = G1(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (At = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        At = t;
        return;
      }
      At = t = a;
    } while (t !== null);
    ((Zt = 6), (At = null));
  }
  function Kp(t, e, a, s, r, u, y, x, T) {
    t.cancelPendingCommit = null;
    do Yo();
    while (ie !== 0);
    if ((jt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= mc),
        Ne(t, a, u, y, x, T),
        t === Bt && ((At = Bt = null), (Mt = 0)),
        ($i = e),
        (Ta = t),
        (Wn = a),
        (wu = u),
        (Tu = r),
        (Hp = s),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            I1(Ga, function () {
              return (Wp(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (s = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || s)
      ) {
        ((s = N.T), (N.T = null), (r = B.p), (B.p = 2), (y = jt), (jt |= 4));
        try {
          Y1(t, e, a);
        } finally {
          ((jt = y), (B.p = r), (N.T = s));
        }
      }
      ((ie = 1), Qp(), Zp(), Fp());
    }
  }
  function Qp() {
    if (ie === 1) {
      ie = 0;
      var t = Ta,
        e = $i,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = N.T), (N.T = null));
        var s = B.p;
        B.p = 2;
        var r = jt;
        jt |= 4;
        try {
          Cp(e, t);
          var u = Bu,
            y = _h(t.containerInfo),
            x = u.focusedElem,
            T = u.selectionRange;
          if (
            y !== x &&
            x &&
            x.ownerDocument &&
            jh(x.ownerDocument.documentElement, x)
          ) {
            if (T !== null && cc(x)) {
              var _ = T.start,
                U = T.end;
              if ((U === void 0 && (U = _), "selectionStart" in x))
                ((x.selectionStart = _),
                  (x.selectionEnd = Math.min(U, x.value.length)));
              else {
                var K = x.ownerDocument || document,
                  k = (K && K.defaultView) || window;
                if (k.getSelection) {
                  var V = k.getSelection(),
                    tt = x.textContent.length,
                    ut = Math.min(T.start, tt),
                    Vt = T.end === void 0 ? ut : Math.min(T.end, tt);
                  !V.extend && ut > Vt && ((y = Vt), (Vt = ut), (ut = y));
                  var R = Oh(x, ut),
                    M = Oh(x, Vt);
                  if (
                    R &&
                    M &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== R.node ||
                      V.anchorOffset !== R.offset ||
                      V.focusNode !== M.node ||
                      V.focusOffset !== M.offset)
                  ) {
                    var j = K.createRange();
                    (j.setStart(R.node, R.offset),
                      V.removeAllRanges(),
                      ut > Vt
                        ? (V.addRange(j), V.extend(M.node, M.offset))
                        : (j.setEnd(M.node, M.offset), V.addRange(j)));
                  }
                }
              }
            }
            for (K = [], V = x; (V = V.parentNode); )
              V.nodeType === 1 &&
                K.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (
              typeof x.focus == "function" && x.focus(), x = 0;
              x < K.length;
              x++
            ) {
              var X = K[x];
              ((X.element.scrollLeft = X.left), (X.element.scrollTop = X.top));
            }
          }
          ((tr = !!Vu), (Bu = Vu = null));
        } finally {
          ((jt = r), (B.p = s), (N.T = a));
        }
      }
      ((t.current = e), (ie = 2));
    }
  }
  function Zp() {
    if (ie === 2) {
      ie = 0;
      var t = Ta,
        e = $i,
        a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        ((a = N.T), (N.T = null));
        var s = B.p;
        B.p = 2;
        var r = jt;
        jt |= 4;
        try {
          wp(t, e.alternate, e);
        } finally {
          ((jt = r), (B.p = s), (N.T = a));
        }
      }
      ie = 3;
    }
  }
  function Fp() {
    if (ie === 4 || ie === 3) {
      ((ie = 0), sa());
      var t = Ta,
        e = $i,
        a = Wn,
        s = Hp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ie = 5)
        : ((ie = 0), ($i = Ta = null), Jp(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (wa = null),
        hn(a),
        (e = e.stateNode),
        Ae && typeof Ae.onCommitFiberRoot == "function")
      )
        try {
          Ae.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((e = N.T), (r = B.p), (B.p = 2), (N.T = null));
        try {
          for (var u = t.onRecoverableError, y = 0; y < s.length; y++) {
            var x = s[y];
            u(x.value, { componentStack: x.stack });
          }
        } finally {
          ((N.T = e), (B.p = r));
        }
      }
      ((Wn & 3) !== 0 && Yo(),
        En(t),
        (r = t.pendingLanes),
        (a & 261930) !== 0 && (r & 42) !== 0
          ? t === Au
            ? ul++
            : ((ul = 0), (Au = t))
          : (ul = 0),
        fl(0));
    }
  }
  function Jp(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ps(e)));
  }
  function Yo() {
    return (Qp(), Zp(), Fp(), Wp());
  }
  function Wp() {
    if (ie !== 5) return !1;
    var t = Ta,
      e = wu;
    wu = 0;
    var a = hn(Wn),
      s = N.T,
      r = B.p;
    try {
      ((B.p = 32 > a ? 32 : a), (N.T = null), (a = Tu), (Tu = null));
      var u = Ta,
        y = Wn;
      if (((ie = 0), ($i = Ta = null), (Wn = 0), (jt & 6) !== 0))
        throw Error(o(331));
      var x = jt;
      if (
        ((jt |= 4),
        jp(u.current),
        Rp(u, u.current, y, a),
        (jt = x),
        fl(0, !1),
        Ae && typeof Ae.onPostCommitFiberRoot == "function")
      )
        try {
          Ae.onPostCommitFiberRoot(Ya, u);
        } catch {}
      return !0;
    } finally {
      ((B.p = r), (N.T = s), Jp(t, e));
    }
  }
  function $p(t, e, a) {
    ((e = Ie(a, e)),
      (e = nu(t.stateNode, e, 2)),
      (t = ga(t, e, 2)),
      t !== null && (Pt(t, 2), En(t)));
  }
  function zt(t, e, a) {
    if (t.tag === 3) $p(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          $p(e, t, a);
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (wa === null || !wa.has(s)))
          ) {
            ((t = Ie(a, t)),
              (a = Im(2)),
              (s = ga(e, a, 2)),
              s !== null && (tp(a, s, e, t), Pt(s, 2), En(s)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Cu(t, e, a) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new P1();
      var r = new Set();
      s.set(e, r);
    } else ((r = s.get(e)), r === void 0 && ((r = new Set()), s.set(e, r)));
    r.has(a) ||
      ((xu = !0), r.add(a), (t = J1.bind(null, t, e, a)), e.then(t, t));
  }
  function J1(t, e, a) {
    var s = t.pingCache;
    (s !== null && s.delete(e),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Bt === t &&
        (Mt & a) === a &&
        (Zt === 4 || (Zt === 3 && (Mt & 62914560) === Mt && 300 > Te() - ko)
          ? (jt & 2) === 0 && Ii(t, 0)
          : (bu |= a),
        Wi === Mt && (Wi = 0)),
      En(t));
  }
  function Ip(t, e) {
    (e === 0 && (e = ve()), (t = Fa(t, e)), t !== null && (Pt(t, e), En(t)));
  }
  function W1(t) {
    var e = t.memoizedState,
      a = 0;
    (e !== null && (a = e.retryLane), Ip(t, a));
  }
  function $1(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var s = t.stateNode,
          r = t.memoizedState;
        r !== null && (a = r.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (s !== null && s.delete(e), Ip(t, a));
  }
  function I1(t, e) {
    return Ns(t, e);
  }
  var qo = null,
    es = null,
    Nu = !1,
    Xo = !1,
    Ru = !1,
    Ea = 0;
  function En(t) {
    (t !== es &&
      t.next === null &&
      (es === null ? (qo = es = t) : (es = es.next = t)),
      (Xo = !0),
      Nu || ((Nu = !0), e2()));
  }
  function fl(t, e) {
    if (!Ru && Xo) {
      Ru = !0;
      do
        for (var a = !1, s = qo; s !== null; ) {
          if (t !== 0) {
            var r = s.pendingLanes;
            if (r === 0) var u = 0;
            else {
              var y = s.suspendedLanes,
                x = s.pingedLanes;
              ((u = (1 << (31 - ye(42 | t) + 1)) - 1),
                (u &= r & ~(y & ~x)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((a = !0), ag(s, u));
          } else
            ((u = Mt),
              (u = mt(
                s,
                s === Bt ? u : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Yt(s, u) || ((a = !0), ag(s, u)));
          s = s.next;
        }
      while (a);
      Ru = !1;
    }
  }
  function t2() {
    tg();
  }
  function tg() {
    Xo = Nu = !1;
    var t = 0;
    Ea !== 0 && f2() && (t = Ea);
    for (var e = Te(), a = null, s = qo; s !== null; ) {
      var r = s.next,
        u = eg(s, e);
      (u === 0
        ? ((s.next = null),
          a === null ? (qo = r) : (a.next = r),
          r === null && (es = a))
        : ((a = s), (t !== 0 || (u & 3) !== 0) && (Xo = !0)),
        (s = r));
    }
    ((ie !== 0 && ie !== 5) || fl(t), Ea !== 0 && (Ea = 0));
  }
  function eg(t, e) {
    for (
      var a = t.suspendedLanes,
        s = t.pingedLanes,
        r = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var y = 31 - ye(u),
        x = 1 << y,
        T = r[y];
      (T === -1
        ? ((x & a) === 0 || (x & s) !== 0) && (r[y] = le(x, e))
        : T <= e && (t.expiredLanes |= x),
        (u &= ~x));
    }
    if (
      ((e = Bt),
      (a = Mt),
      (a = mt(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (s = t.callbackNode),
      a === 0 ||
        (t === e && (_t === 2 || _t === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && Rs(s),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Yt(t, a)) {
      if (((e = a & -a), e === t.callbackPriority)) return e;
      switch ((s !== null && Rs(s), hn(a))) {
        case 2:
        case 8:
          a = Kl;
          break;
        case 32:
          a = Ga;
          break;
        case 268435456:
          a = zn;
          break;
        default:
          a = Ga;
      }
      return (
        (s = ng.bind(null, t)),
        (a = Ns(a, s)),
        (t.callbackPriority = e),
        (t.callbackNode = a),
        e
      );
    }
    return (
      s !== null && s !== null && Rs(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ng(t, e) {
    if (ie !== 0 && ie !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (Yo() && t.callbackNode !== a) return null;
    var s = Mt;
    return (
      (s = mt(
        t,
        t === Bt ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (Vp(t, s, e),
          eg(t, Te()),
          t.callbackNode != null && t.callbackNode === a
            ? ng.bind(null, t)
            : null)
    );
  }
  function ag(t, e) {
    if (Yo()) return null;
    Vp(t, e, !0);
  }
  function e2() {
    h2(function () {
      (jt & 6) !== 0 ? Ns(Ua, t2) : tg();
    });
  }
  function Du() {
    if (Ea === 0) {
      var t = Ui;
      (t === 0 && ((t = xi), (xi <<= 1), (xi & 261888) === 0 && (xi = 256)),
        (Ea = t));
    }
    return Ea;
  }
  function ig(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Wl("" + t);
  }
  function sg(t, e) {
    var a = e.ownerDocument.createElement("input");
    return (
      (a.name = e.name),
      (a.value = e.value),
      t.id && a.setAttribute("form", t.id),
      e.parentNode.insertBefore(a, e),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function n2(t, e, a, s, r) {
    if (e === "submit" && a && a.stateNode === r) {
      var u = ig((r[Oe] || null).action),
        y = s.submitter;
      y &&
        ((e = (e = y[Oe] || null)
          ? ig(e.formAction)
          : y.getAttribute("formAction")),
        e !== null && ((u = e), (y = null)));
      var x = new eo("action", "action", null, s, r);
      t.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (Ea !== 0) {
                  var T = y ? sg(r, y) : new FormData(r);
                  Jc(
                    a,
                    { pending: !0, data: T, method: r.method, action: u },
                    null,
                    T,
                  );
                }
              } else
                typeof u == "function" &&
                  (x.preventDefault(),
                  (T = y ? sg(r, y) : new FormData(r)),
                  Jc(
                    a,
                    { pending: !0, data: T, method: r.method, action: u },
                    u,
                    T,
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Ou = 0; Ou < hc.length; Ou++) {
    var ju = hc[Ou],
      a2 = ju.toLowerCase(),
      i2 = ju[0].toUpperCase() + ju.slice(1);
    mn(a2, "on" + i2);
  }
  (mn(kh, "onAnimationEnd"),
    mn(Vh, "onAnimationIteration"),
    mn(Bh, "onAnimationStart"),
    mn("dblclick", "onDoubleClick"),
    mn("focusin", "onFocus"),
    mn("focusout", "onBlur"),
    mn(b1, "onTransitionRun"),
    mn(S1, "onTransitionStart"),
    mn(w1, "onTransitionCancel"),
    mn(Lh, "onTransitionEnd"),
    Mi("onMouseEnter", ["mouseout", "mouseover"]),
    Mi("onMouseLeave", ["mouseout", "mouseover"]),
    Mi("onPointerEnter", ["pointerout", "pointerover"]),
    Mi("onPointerLeave", ["pointerout", "pointerover"]),
    Pa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Pa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Pa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Pa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Pa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var dl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    s2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(dl),
    );
  function lg(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var s = t[a],
        r = s.event;
      s = s.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var y = s.length - 1; 0 <= y; y--) {
            var x = s[y],
              T = x.instance,
              _ = x.currentTarget;
            if (((x = x.listener), T !== u && r.isPropagationStopped()))
              break t;
            ((u = x), (r.currentTarget = _));
            try {
              u(r);
            } catch (U) {
              io(U);
            }
            ((r.currentTarget = null), (u = T));
          }
        else
          for (y = 0; y < s.length; y++) {
            if (
              ((x = s[y]),
              (T = x.instance),
              (_ = x.currentTarget),
              (x = x.listener),
              T !== u && r.isPropagationStopped())
            )
              break t;
            ((u = x), (r.currentTarget = _));
            try {
              u(r);
            } catch (U) {
              io(U);
            }
            ((r.currentTarget = null), (u = T));
          }
      }
    }
  }
  function Et(t, e) {
    var a = e[Pr];
    a === void 0 && (a = e[Pr] = new Set());
    var s = t + "__bubble";
    a.has(s) || (og(e, t, 2, !1), a.add(s));
  }
  function _u(t, e, a) {
    var s = 0;
    (e && (s |= 4), og(a, t, s, e));
  }
  var Po = "_reactListening" + Math.random().toString(36).slice(2);
  function zu(t) {
    if (!t[Po]) {
      ((t[Po] = !0),
        th.forEach(function (a) {
          a !== "selectionchange" && (s2.has(a) || _u(a, !1, t), _u(a, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Po] || ((e[Po] = !0), _u("selectionchange", !1, e));
    }
  }
  function og(t, e, a, s) {
    switch (kg(e)) {
      case 2:
        var r = _2;
        break;
      case 8:
        r = z2;
        break;
      default:
        r = Fu;
    }
    ((a = r.bind(null, e, a, t)),
      (r = void 0),
      !tc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      s
        ? r !== void 0
          ? t.addEventListener(e, a, { capture: !0, passive: r })
          : t.addEventListener(e, a, !0)
        : r !== void 0
          ? t.addEventListener(e, a, { passive: r })
          : t.addEventListener(e, a, !1));
  }
  function Hu(t, e, a, s, r) {
    var u = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (;;) {
        if (s === null) return;
        var y = s.tag;
        if (y === 3 || y === 4) {
          var x = s.stateNode.containerInfo;
          if (x === r) break;
          if (y === 4)
            for (y = s.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === r)
                return;
              y = y.return;
            }
          for (; x !== null; ) {
            if (((y = Ti(x)), y === null)) return;
            if (((T = y.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              s = u = y;
              continue t;
            }
            x = x.parentNode;
          }
        }
        s = s.return;
      }
    dh(function () {
      var _ = u,
        U = $r(a),
        K = [];
      t: {
        var k = Uh.get(t);
        if (k !== void 0) {
          var V = eo,
            tt = t;
          switch (t) {
            case "keypress":
              if (Il(a) === 0) break t;
            case "keydown":
            case "keyup":
              V = $b;
              break;
            case "focusin":
              ((tt = "focus"), (V = ic));
              break;
            case "focusout":
              ((tt = "blur"), (V = ic));
              break;
            case "beforeblur":
            case "afterblur":
              V = ic;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = ph;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Ub;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = e1;
              break;
            case kh:
            case Vh:
            case Bh:
              V = qb;
              break;
            case Lh:
              V = a1;
              break;
            case "scroll":
            case "scrollend":
              V = Bb;
              break;
            case "wheel":
              V = s1;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Pb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = yh;
              break;
            case "toggle":
            case "beforetoggle":
              V = o1;
          }
          var ut = (e & 4) !== 0,
            Vt = !ut && (t === "scroll" || t === "scrollend"),
            R = ut ? (k !== null ? k + "Capture" : null) : k;
          ut = [];
          for (var M = _, j; M !== null; ) {
            var X = M;
            if (
              ((j = X.stateNode),
              (X = X.tag),
              (X !== 5 && X !== 26 && X !== 27) ||
                j === null ||
                R === null ||
                ((X = zs(M, R)), X != null && ut.push(hl(M, X, j))),
              Vt)
            )
              break;
            M = M.return;
          }
          0 < ut.length &&
            ((k = new V(k, tt, null, a, U)),
            K.push({ event: k, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((k = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            k &&
              a !== Wr &&
              (tt = a.relatedTarget || a.fromElement) &&
              (Ti(tt) || tt[wi]))
          )
            break t;
          if (
            (V || k) &&
            ((k =
              U.window === U
                ? U
                : (k = U.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            V
              ? ((tt = a.relatedTarget || a.toElement),
                (V = _),
                (tt = tt ? Ti(tt) : null),
                tt !== null &&
                  ((Vt = d(tt)),
                  (ut = tt.tag),
                  tt !== Vt || (ut !== 5 && ut !== 27 && ut !== 6)) &&
                  (tt = null))
              : ((V = null), (tt = _)),
            V !== tt)
          ) {
            if (
              ((ut = ph),
              (X = "onMouseLeave"),
              (R = "onMouseEnter"),
              (M = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ut = yh),
                (X = "onPointerLeave"),
                (R = "onPointerEnter"),
                (M = "pointer")),
              (Vt = V == null ? k : _s(V)),
              (j = tt == null ? k : _s(tt)),
              (k = new ut(X, M + "leave", V, a, U)),
              (k.target = Vt),
              (k.relatedTarget = j),
              (X = null),
              Ti(U) === _ &&
                ((ut = new ut(R, M + "enter", tt, a, U)),
                (ut.target = j),
                (ut.relatedTarget = Vt),
                (X = ut)),
              (Vt = X),
              V && tt)
            )
              e: {
                for (ut = l2, R = V, M = tt, j = 0, X = R; X; X = ut(X)) j++;
                X = 0;
                for (var ct = M; ct; ct = ut(ct)) X++;
                for (; 0 < j - X; ) ((R = ut(R)), j--);
                for (; 0 < X - j; ) ((M = ut(M)), X--);
                for (; j--; ) {
                  if (R === M || (M !== null && R === M.alternate)) {
                    ut = R;
                    break e;
                  }
                  ((R = ut(R)), (M = ut(M)));
                }
                ut = null;
              }
            else ut = null;
            (V !== null && rg(K, k, V, ut, !1),
              tt !== null && Vt !== null && rg(K, Vt, tt, ut, !0));
          }
        }
        t: {
          if (
            ((k = _ ? _s(_) : window),
            (V = k.nodeName && k.nodeName.toLowerCase()),
            V === "select" || (V === "input" && k.type === "file"))
          )
            var Dt = Eh;
          else if (Th(k))
            if (Mh) Dt = y1;
            else {
              Dt = p1;
              var st = m1;
            }
          else
            ((V = k.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? _ && Jr(_.elementType) && (Dt = Eh)
                : (Dt = g1));
          if (Dt && (Dt = Dt(t, _))) {
            Ah(K, Dt, a, U);
            break t;
          }
          (st && st(t, k, _),
            t === "focusout" &&
              _ &&
              k.type === "number" &&
              _.memoizedProps.value != null &&
              Fr(k, "number", k.value));
        }
        switch (((st = _ ? _s(_) : window), t)) {
          case "focusin":
            (Th(st) || st.contentEditable === "true") &&
              ((ji = st), (uc = _), (Ys = null));
            break;
          case "focusout":
            Ys = uc = ji = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fc = !1), zh(K, a, U));
            break;
          case "selectionchange":
            if (x1) break;
          case "keydown":
          case "keyup":
            zh(K, a, U);
        }
        var St;
        if (lc)
          t: {
            switch (t) {
              case "compositionstart":
                var Ct = "onCompositionStart";
                break t;
              case "compositionend":
                Ct = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Ct = "onCompositionUpdate";
                break t;
            }
            Ct = void 0;
          }
        else
          Oi
            ? Sh(t, a) && (Ct = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (Ct = "onCompositionStart");
        (Ct &&
          (vh &&
            a.locale !== "ko" &&
            (Oi || Ct !== "onCompositionStart"
              ? Ct === "onCompositionEnd" && Oi && (St = hh())
              : ((ca = U),
                (ec = "value" in ca ? ca.value : ca.textContent),
                (Oi = !0))),
          (st = Ko(_, Ct)),
          0 < st.length &&
            ((Ct = new gh(Ct, t, null, a, U)),
            K.push({ event: Ct, listeners: st }),
            St
              ? (Ct.data = St)
              : ((St = wh(a)), St !== null && (Ct.data = St)))),
          (St = c1 ? u1(t, a) : f1(t, a)) &&
            ((Ct = Ko(_, "onBeforeInput")),
            0 < Ct.length &&
              ((st = new gh("onBeforeInput", "beforeinput", null, a, U)),
              K.push({ event: st, listeners: Ct }),
              (st.data = St))),
          n2(K, t, _, a, U));
      }
      lg(K, e);
    });
  }
  function hl(t, e, a) {
    return { instance: t, listener: e, currentTarget: a };
  }
  function Ko(t, e) {
    for (var a = e + "Capture", s = []; t !== null; ) {
      var r = t,
        u = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          u === null ||
          ((r = zs(t, a)),
          r != null && s.unshift(hl(t, r, u)),
          (r = zs(t, e)),
          r != null && s.push(hl(t, r, u))),
        t.tag === 3)
      )
        return s;
      t = t.return;
    }
    return [];
  }
  function l2(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function rg(t, e, a, s, r) {
    for (var u = e._reactName, y = []; a !== null && a !== s; ) {
      var x = a,
        T = x.alternate,
        _ = x.stateNode;
      if (((x = x.tag), T !== null && T === s)) break;
      ((x !== 5 && x !== 26 && x !== 27) ||
        _ === null ||
        ((T = _),
        r
          ? ((_ = zs(a, u)), _ != null && y.unshift(hl(a, _, T)))
          : r || ((_ = zs(a, u)), _ != null && y.push(hl(a, _, T)))),
        (a = a.return));
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var o2 = /\r\n?/g,
    r2 = /\u0000|\uFFFD/g;
  function cg(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        o2,
        `
`,
      )
      .replace(r2, "");
  }
  function ug(t, e) {
    return ((e = cg(e)), cg(t) === e);
  }
  function kt(t, e, a, s, r, u) {
    switch (a) {
      case "children":
        typeof s == "string"
          ? e === "body" || (e === "textarea" && s === "") || Ni(t, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            e !== "body" &&
            Ni(t, "" + s);
        break;
      case "className":
        Fl(t, "class", s);
        break;
      case "tabIndex":
        Fl(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fl(t, a, s);
        break;
      case "style":
        uh(t, s, u);
        break;
      case "data":
        if (e !== "object") {
          Fl(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        ((s = Wl("" + s)), t.setAttribute(a, s));
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (e !== "input" && kt(t, e, "name", r.name, r, null),
                kt(t, e, "formEncType", r.formEncType, r, null),
                kt(t, e, "formMethod", r.formMethod, r, null),
                kt(t, e, "formTarget", r.formTarget, r, null))
              : (kt(t, e, "encType", r.encType, r, null),
                kt(t, e, "method", r.method, r, null),
                kt(t, e, "target", r.target, r, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((s = Wl("" + s)), t.setAttribute(a, s));
        break;
      case "onClick":
        s != null && (t.onclick = kn);
        break;
      case "onScroll":
        s != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        s != null && Et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
          if (((a = s.__html), a != null)) {
            if (r.children != null) throw Error(o(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = Wl("" + s)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(a, "" + s)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        s === !0
          ? t.setAttribute(a, "")
          : s !== !1 &&
              s != null &&
              typeof s != "function" &&
              typeof s != "symbol"
            ? t.setAttribute(a, s)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? t.setAttribute(a, s)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? t.removeAttribute(a)
          : t.setAttribute(a, s);
        break;
      case "popover":
        (Et("beforetoggle", t), Et("toggle", t), Zl(t, "popover", s));
        break;
      case "xlinkActuate":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        Hn(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        Hn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        Hn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        Hn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        Zl(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = kb.get(a) || a), Zl(t, a, s));
    }
  }
  function ku(t, e, a, s, r, u) {
    switch (a) {
      case "style":
        uh(t, s, u);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
          if (((a = s.__html), a != null)) {
            if (r.children != null) throw Error(o(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? Ni(t, s)
          : (typeof s == "number" || typeof s == "bigint") && Ni(t, "" + s);
        break;
      case "onScroll":
        s != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        s != null && Et("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = kn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!eh.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((r = a.endsWith("Capture")),
              (e = a.slice(2, r ? a.length - 7 : void 0)),
              (u = t[Oe] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && t.removeEventListener(e, u, r),
              typeof s == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(e, s, r));
              break t;
            }
            a in t
              ? (t[a] = s)
              : s === !0
                ? t.setAttribute(a, "")
                : Zl(t, a, s);
          }
    }
  }
  function pe(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Et("error", t), Et("load", t));
        var s = !1,
          r = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var y = a[u];
            if (y != null)
              switch (u) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  kt(t, e, u, y, a, null);
              }
          }
        (r && kt(t, e, "srcSet", a.srcSet, a, null),
          s && kt(t, e, "src", a.src, a, null));
        return;
      case "input":
        Et("invalid", t);
        var x = (u = y = r = null),
          T = null,
          _ = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var U = a[s];
            if (U != null)
              switch (s) {
                case "name":
                  r = U;
                  break;
                case "type":
                  y = U;
                  break;
                case "checked":
                  T = U;
                  break;
                case "defaultChecked":
                  _ = U;
                  break;
                case "value":
                  u = U;
                  break;
                case "defaultValue":
                  x = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(o(137, e));
                  break;
                default:
                  kt(t, e, s, U, a, null);
              }
          }
        lh(t, u, x, T, _, y, r, !1);
        return;
      case "select":
        (Et("invalid", t), (s = y = u = null));
        for (r in a)
          if (a.hasOwnProperty(r) && ((x = a[r]), x != null))
            switch (r) {
              case "value":
                u = x;
                break;
              case "defaultValue":
                y = x;
                break;
              case "multiple":
                s = x;
              default:
                kt(t, e, r, x, a, null);
            }
        ((e = u),
          (a = y),
          (t.multiple = !!s),
          e != null ? Ci(t, !!s, e, !1) : a != null && Ci(t, !!s, a, !0));
        return;
      case "textarea":
        (Et("invalid", t), (u = r = s = null));
        for (y in a)
          if (a.hasOwnProperty(y) && ((x = a[y]), x != null))
            switch (y) {
              case "value":
                s = x;
                break;
              case "defaultValue":
                r = x;
                break;
              case "children":
                u = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(o(91));
                break;
              default:
                kt(t, e, y, x, a, null);
            }
        rh(t, s, r, u);
        return;
      case "option":
        for (T in a)
          if (a.hasOwnProperty(T) && ((s = a[T]), s != null))
            switch (T) {
              case "selected":
                t.selected =
                  s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                kt(t, e, T, s, a, null);
            }
        return;
      case "dialog":
        (Et("beforetoggle", t),
          Et("toggle", t),
          Et("cancel", t),
          Et("close", t));
        break;
      case "iframe":
      case "object":
        Et("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < dl.length; s++) Et(dl[s], t);
        break;
      case "image":
        (Et("error", t), Et("load", t));
        break;
      case "details":
        Et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Et("error", t), Et("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in a)
          if (a.hasOwnProperty(_) && ((s = a[_]), s != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                kt(t, e, _, s, a, null);
            }
        return;
      default:
        if (Jr(e)) {
          for (U in a)
            a.hasOwnProperty(U) &&
              ((s = a[U]), s !== void 0 && ku(t, e, U, s, a, void 0));
          return;
        }
    }
    for (x in a)
      a.hasOwnProperty(x) && ((s = a[x]), s != null && kt(t, e, x, s, a, null));
  }
  function c2(t, e, a, s) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null,
          u = null,
          y = null,
          x = null,
          T = null,
          _ = null,
          U = null;
        for (V in a) {
          var K = a[V];
          if (a.hasOwnProperty(V) && K != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = K;
              default:
                s.hasOwnProperty(V) || kt(t, e, V, null, s, K);
            }
        }
        for (var k in s) {
          var V = s[k];
          if (((K = a[k]), s.hasOwnProperty(k) && (V != null || K != null)))
            switch (k) {
              case "type":
                u = V;
                break;
              case "name":
                r = V;
                break;
              case "checked":
                _ = V;
                break;
              case "defaultChecked":
                U = V;
                break;
              case "value":
                y = V;
                break;
              case "defaultValue":
                x = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(o(137, e));
                break;
              default:
                V !== K && kt(t, e, k, V, s, K);
            }
        }
        Zr(t, y, x, T, _, U, u, r);
        return;
      case "select":
        V = y = x = k = null;
        for (u in a)
          if (((T = a[u]), a.hasOwnProperty(u) && T != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                V = T;
              default:
                s.hasOwnProperty(u) || kt(t, e, u, null, s, T);
            }
        for (r in s)
          if (
            ((u = s[r]),
            (T = a[r]),
            s.hasOwnProperty(r) && (u != null || T != null))
          )
            switch (r) {
              case "value":
                k = u;
                break;
              case "defaultValue":
                x = u;
                break;
              case "multiple":
                y = u;
              default:
                u !== T && kt(t, e, r, u, s, T);
            }
        ((e = x),
          (a = y),
          (s = V),
          k != null
            ? Ci(t, !!a, k, !1)
            : !!s != !!a &&
              (e != null ? Ci(t, !!a, e, !0) : Ci(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        V = k = null;
        for (x in a)
          if (
            ((r = a[x]),
            a.hasOwnProperty(x) && r != null && !s.hasOwnProperty(x))
          )
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                kt(t, e, x, null, s, r);
            }
        for (y in s)
          if (
            ((r = s[y]),
            (u = a[y]),
            s.hasOwnProperty(y) && (r != null || u != null))
          )
            switch (y) {
              case "value":
                k = r;
                break;
              case "defaultValue":
                V = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== u && kt(t, e, y, r, s, u);
            }
        oh(t, k, V);
        return;
      case "option":
        for (var tt in a)
          if (
            ((k = a[tt]),
            a.hasOwnProperty(tt) && k != null && !s.hasOwnProperty(tt))
          )
            switch (tt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                kt(t, e, tt, null, s, k);
            }
        for (T in s)
          if (
            ((k = s[T]),
            (V = a[T]),
            s.hasOwnProperty(T) && k !== V && (k != null || V != null))
          )
            switch (T) {
              case "selected":
                t.selected =
                  k && typeof k != "function" && typeof k != "symbol";
                break;
              default:
                kt(t, e, T, k, s, V);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ut in a)
          ((k = a[ut]),
            a.hasOwnProperty(ut) &&
              k != null &&
              !s.hasOwnProperty(ut) &&
              kt(t, e, ut, null, s, k));
        for (_ in s)
          if (
            ((k = s[_]),
            (V = a[_]),
            s.hasOwnProperty(_) && k !== V && (k != null || V != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(o(137, e));
                break;
              default:
                kt(t, e, _, k, s, V);
            }
        return;
      default:
        if (Jr(e)) {
          for (var Vt in a)
            ((k = a[Vt]),
              a.hasOwnProperty(Vt) &&
                k !== void 0 &&
                !s.hasOwnProperty(Vt) &&
                ku(t, e, Vt, void 0, s, k));
          for (U in s)
            ((k = s[U]),
              (V = a[U]),
              !s.hasOwnProperty(U) ||
                k === V ||
                (k === void 0 && V === void 0) ||
                ku(t, e, U, k, s, V));
          return;
        }
    }
    for (var R in a)
      ((k = a[R]),
        a.hasOwnProperty(R) &&
          k != null &&
          !s.hasOwnProperty(R) &&
          kt(t, e, R, null, s, k));
    for (K in s)
      ((k = s[K]),
        (V = a[K]),
        !s.hasOwnProperty(K) ||
          k === V ||
          (k == null && V == null) ||
          kt(t, e, K, k, s, V));
  }
  function fg(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function u2() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, a = performance.getEntriesByType("resource"), s = 0;
        s < a.length;
        s++
      ) {
        var r = a[s],
          u = r.transferSize,
          y = r.initiatorType,
          x = r.duration;
        if (u && x && fg(y)) {
          for (y = 0, x = r.responseEnd, s += 1; s < a.length; s++) {
            var T = a[s],
              _ = T.startTime;
            if (_ > x) break;
            var U = T.transferSize,
              K = T.initiatorType;
            U &&
              fg(K) &&
              ((T = T.responseEnd), (y += U * (T < x ? 1 : (x - _) / (T - _))));
          }
          if ((--s, (e += (8 * (u + y)) / (r.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Vu = null,
    Bu = null;
  function Qo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function dg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hg(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Lu(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Uu = null;
  function f2() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Uu
        ? !1
        : ((Uu = t), !0)
      : ((Uu = null), !1);
  }
  var mg = typeof setTimeout == "function" ? setTimeout : void 0,
    d2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pg = typeof Promise == "function" ? Promise : void 0,
    h2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof pg < "u"
          ? function (t) {
              return pg.resolve(null).then(t).catch(m2);
            }
          : mg;
  function m2(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ma(t) {
    return t === "head";
  }
  function gg(t, e) {
    var a = e,
      s = 0;
    do {
      var r = a.nextSibling;
      if ((t.removeChild(a), r && r.nodeType === 8))
        if (((a = r.data), a === "/$" || a === "/&")) {
          if (s === 0) {
            (t.removeChild(r), ss(e));
            return;
          }
          s--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          s++;
        else if (a === "html") ml(t.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = t.ownerDocument.head), ml(a));
          for (var u = a.firstChild; u; ) {
            var y = u.nextSibling,
              x = u.nodeName;
            (u[js] ||
              x === "SCRIPT" ||
              x === "STYLE" ||
              (x === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(u),
              (u = y));
          }
        } else a === "body" && ml(t.ownerDocument.body);
      a = r;
    } while (a);
    ss(e);
  }
  function yg(t, e) {
    var a = t;
    t = 0;
    do {
      var s = a.nextSibling;
      if (
        (a.nodeType === 1
          ? e
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (e
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        s && s.nodeType === 8)
      )
        if (((a = s.data), a === "/$")) {
          if (t === 0) break;
          t--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
      a = s;
    } while (a);
  }
  function Gu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (((e = e.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Gu(a), Kr(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function p2(t, e, a, s) {
    for (; t.nodeType === 1; ) {
      var r = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (s) {
        if (!t[js])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== r.rel ||
                t.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = sn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function g2(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = sn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function vg(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = sn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Yu(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function qu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function y2(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading") e();
    else {
      var s = function () {
        (e(), a.removeEventListener("DOMContentLoaded", s));
      };
      (a.addEventListener("DOMContentLoaded", s), (t._reactRetry = s));
    }
  }
  function sn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Xu = null;
  function xg(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0) return sn(t.nextSibling);
          e--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function bg(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else (a !== "/$" && a !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Sg(t, e, a) {
    switch (((e = Qo(a)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function ml(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Kr(t);
  }
  var ln = new Map(),
    wg = new Set();
  function Zo(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var $n = B.d;
  B.d = { f: v2, r: x2, D: b2, C: S2, L: w2, m: T2, X: E2, S: A2, M: M2 };
  function v2() {
    var t = $n.f(),
      e = Lo();
    return t || e;
  }
  function x2(t) {
    var e = Ai(t);
    e !== null && e.tag === 5 && e.type === "form" ? Lm(e) : $n.r(t);
  }
  var ns = typeof document > "u" ? null : document;
  function Tg(t, e, a) {
    var s = ns;
    if (s && typeof e == "string" && e) {
      var r = We(e);
      ((r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
        wg.has(r) ||
          (wg.add(r),
          (t = { rel: t, crossOrigin: a, href: e }),
          s.querySelector(r) === null &&
            ((e = s.createElement("link")),
            pe(e, "link", t),
            oe(e),
            s.head.appendChild(e))));
    }
  }
  function b2(t) {
    ($n.D(t), Tg("dns-prefetch", t, null));
  }
  function S2(t, e) {
    ($n.C(t, e), Tg("preconnect", t, e));
  }
  function w2(t, e, a) {
    $n.L(t, e, a);
    var s = ns;
    if (s && t && e) {
      var r = 'link[rel="preload"][as="' + We(e) + '"]';
      e === "image" && a && a.imageSrcSet
        ? ((r += '[imagesrcset="' + We(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (r += '[imagesizes="' + We(a.imageSizes) + '"]'))
        : (r += '[href="' + We(t) + '"]');
      var u = r;
      switch (e) {
        case "style":
          u = as(t);
          break;
        case "script":
          u = is(t);
      }
      ln.has(u) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && a && a.imageSrcSet ? void 0 : t,
            as: e,
          },
          a,
        )),
        ln.set(u, t),
        s.querySelector(r) !== null ||
          (e === "style" && s.querySelector(pl(u))) ||
          (e === "script" && s.querySelector(gl(u))) ||
          ((e = s.createElement("link")),
          pe(e, "link", t),
          oe(e),
          s.head.appendChild(e)));
    }
  }
  function T2(t, e) {
    $n.m(t, e);
    var a = ns;
    if (a && t) {
      var s = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + We(s) + '"][href="' + We(t) + '"]',
        u = r;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = is(t);
      }
      if (
        !ln.has(u) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        ln.set(u, t),
        a.querySelector(r) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(gl(u))) return;
        }
        ((s = a.createElement("link")),
          pe(s, "link", t),
          oe(s),
          a.head.appendChild(s));
      }
    }
  }
  function A2(t, e, a) {
    $n.S(t, e, a);
    var s = ns;
    if (s && t) {
      var r = Ei(s).hoistableStyles,
        u = as(t);
      e = e || "default";
      var y = r.get(u);
      if (!y) {
        var x = { loading: 0, preload: null };
        if ((y = s.querySelector(pl(u)))) x.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": e }, a)),
            (a = ln.get(u)) && Pu(t, a));
          var T = (y = s.createElement("link"));
          (oe(T),
            pe(T, "link", t),
            (T._p = new Promise(function (_, U) {
              ((T.onload = _), (T.onerror = U));
            })),
            T.addEventListener("load", function () {
              x.loading |= 1;
            }),
            T.addEventListener("error", function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            Fo(y, e, s));
        }
        ((y = { type: "stylesheet", instance: y, count: 1, state: x }),
          r.set(u, y));
      }
    }
  }
  function E2(t, e) {
    $n.X(t, e);
    var a = ns;
    if (a && t) {
      var s = Ei(a).hoistableScripts,
        r = is(t),
        u = s.get(r);
      u ||
        ((u = a.querySelector(gl(r))),
        u ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = ln.get(r)) && Ku(t, e),
          (u = a.createElement("script")),
          oe(u),
          pe(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        s.set(r, u));
    }
  }
  function M2(t, e) {
    $n.M(t, e);
    var a = ns;
    if (a && t) {
      var s = Ei(a).hoistableScripts,
        r = is(t),
        u = s.get(r);
      u ||
        ((u = a.querySelector(gl(r))),
        u ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = ln.get(r)) && Ku(t, e),
          (u = a.createElement("script")),
          oe(u),
          pe(u, "link", t),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        s.set(r, u));
    }
  }
  function Ag(t, e, a, s) {
    var r = (r = rt.current) ? Zo(r) : null;
    if (!r) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((e = as(a.href)),
            (a = Ei(r).hoistableStyles),
            (s = a.get(e)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              a.set(e, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = as(a.href);
          var u = Ei(r).hoistableStyles,
            y = u.get(t);
          if (
            (y ||
              ((r = r.ownerDocument || r),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, y),
              (u = r.querySelector(pl(t))) &&
                !u._p &&
                ((y.instance = u), (y.state.loading = 5)),
              ln.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                ln.set(t, a),
                u || C2(r, t, a, y.state))),
            e && s === null)
          )
            throw Error(o(528, ""));
          return y;
        }
        if (e && s !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = a.async),
          (a = a.src),
          typeof a == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = is(a)),
              (a = Ei(r).hoistableScripts),
              (s = a.get(e)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(e, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function as(t) {
    return 'href="' + We(t) + '"';
  }
  function pl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Eg(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function C2(t, e, a, s) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (s.loading = 1)
      : ((e = t.createElement("link")),
        (s.preload = e),
        e.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        pe(e, "link", a),
        oe(e),
        t.head.appendChild(e));
  }
  function is(t) {
    return '[src="' + We(t) + '"]';
  }
  function gl(t) {
    return "script[async]" + t;
  }
  function Mg(t, e, a) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var s = t.querySelector('style[data-href~="' + We(a.href) + '"]');
          if (s) return ((e.instance = s), oe(s), s);
          var r = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement("style")),
            oe(s),
            pe(s, "style", r),
            Fo(s, a.precedence, t),
            (e.instance = s)
          );
        case "stylesheet":
          r = as(a.href);
          var u = t.querySelector(pl(r));
          if (u) return ((e.state.loading |= 4), (e.instance = u), oe(u), u);
          ((s = Eg(a)),
            (r = ln.get(r)) && Pu(s, r),
            (u = (t.ownerDocument || t).createElement("link")),
            oe(u));
          var y = u;
          return (
            (y._p = new Promise(function (x, T) {
              ((y.onload = x), (y.onerror = T));
            })),
            pe(u, "link", s),
            (e.state.loading |= 4),
            Fo(u, a.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = is(a.src)),
            (r = t.querySelector(gl(u)))
              ? ((e.instance = r), oe(r), r)
              : ((s = a),
                (r = ln.get(u)) && ((s = g({}, a)), Ku(s, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                oe(r),
                pe(r, "link", s),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((s = e.instance), (e.state.loading |= 4), Fo(s, a.precedence, t));
    return e.instance;
  }
  function Fo(t, e, a) {
    for (
      var s = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        r = s.length ? s[s.length - 1] : null,
        u = r,
        y = 0;
      y < s.length;
      y++
    ) {
      var x = s[y];
      if (x.dataset.precedence === e) u = x;
      else if (u !== r) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(t, e.firstChild));
  }
  function Pu(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Ku(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Jo = null;
  function Cg(t, e, a) {
    if (Jo === null) {
      var s = new Map(),
        r = (Jo = new Map());
      r.set(a, s);
    } else ((r = Jo), (s = r.get(a)), s || ((s = new Map()), r.set(a, s)));
    if (s.has(t)) return s;
    for (
      s.set(t, null), a = a.getElementsByTagName(t), r = 0;
      r < a.length;
      r++
    ) {
      var u = a[r];
      if (
        !(
          u[js] ||
          u[fe] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = u.getAttribute(e) || "";
        y = t + y;
        var x = s.get(y);
        x ? x.push(u) : s.set(y, [u]);
      }
    }
    return s;
  }
  function Ng(t, e, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function N2(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Rg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function R2(t, e, a, s) {
    if (
      a.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var r = as(s.href),
          u = e.querySelector(pl(r));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Wo.bind(t)), e.then(t, t)),
            (a.state.loading |= 4),
            (a.instance = u),
            oe(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (s = Eg(s)),
          (r = ln.get(r)) && Pu(s, r),
          (u = u.createElement("link")),
          oe(u));
        var y = u;
        ((y._p = new Promise(function (x, T) {
          ((y.onload = x), (y.onerror = T));
        })),
          pe(u, "link", s),
          (a.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(a, e),
        (e = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (t.count++,
          (a = Wo.bind(t)),
          e.addEventListener("load", a),
          e.addEventListener("error", a)));
    }
  }
  var Qu = 0;
  function D2(t, e) {
    return (
      t.stylesheets && t.count === 0 && Io(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (a) {
            var s = setTimeout(function () {
              if ((t.stylesheets && Io(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Qu === 0 && (Qu = 62500 * u2());
            var r = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Io(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > Qu ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = a),
              function () {
                ((t.unsuspend = null), clearTimeout(s), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function Wo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Io(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var $o = null;
  function Io(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        ($o = new Map()),
        e.forEach(O2, t),
        ($o = null),
        Wo.call(t)));
  }
  function O2(t, e) {
    if (!(e.state.loading & 4)) {
      var a = $o.get(t);
      if (a) var s = a.get(null);
      else {
        ((a = new Map()), $o.set(t, a));
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < r.length;
          u++
        ) {
          var y = r[u];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (a.set(y.dataset.precedence, y), (s = y));
        }
        s && a.set(null, s);
      }
      ((r = e.instance),
        (y = r.getAttribute("data-precedence")),
        (u = a.get(y) || s),
        u === s && a.set(null, r),
        a.set(y, r),
        this.count++,
        (s = Wo.bind(this)),
        r.addEventListener("load", s),
        r.addEventListener("error", s),
        u
          ? u.parentNode.insertBefore(r, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var yl = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0,
  };
  function j2(t, e, a, s, r, u, y, x, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = oa(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = oa(0)),
      (this.hiddenUpdates = oa(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = r),
      (this.onCaughtError = u),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function Dg(t, e, a, s, r, u, y, x, T, _, U, K) {
    return (
      (t = new j2(t, e, a, y, T, _, U, K, x)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = Ye(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Mc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: s, isDehydrated: a, cache: e }),
      Dc(u),
      t
    );
  }
  function Og(t) {
    return t ? ((t = Hi), t) : Hi;
  }
  function jg(t, e, a, s, r, u) {
    ((r = Og(r)),
      s.context === null ? (s.context = r) : (s.pendingContext = r),
      (s = pa(e)),
      (s.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (s.callback = u),
      (a = ga(t, s, e)),
      a !== null && (Ve(a, t, e), Fs(a, t, e)));
  }
  function _g(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function Zu(t, e) {
    (_g(t, e), (t = t.alternate) && _g(t, e));
  }
  function zg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fa(t, 67108864);
      (e !== null && Ve(e, t, 67108864), Zu(t, 67108864));
    }
  }
  function Hg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Qe();
      e = Si(e);
      var a = Fa(t, e);
      (a !== null && Ve(a, t, e), Zu(t, e));
    }
  }
  var tr = !0;
  function _2(t, e, a, s) {
    var r = N.T;
    N.T = null;
    var u = B.p;
    try {
      ((B.p = 2), Fu(t, e, a, s));
    } finally {
      ((B.p = u), (N.T = r));
    }
  }
  function z2(t, e, a, s) {
    var r = N.T;
    N.T = null;
    var u = B.p;
    try {
      ((B.p = 8), Fu(t, e, a, s));
    } finally {
      ((B.p = u), (N.T = r));
    }
  }
  function Fu(t, e, a, s) {
    if (tr) {
      var r = Ju(s);
      if (r === null) (Hu(t, e, s, er, a), Vg(t, s));
      else if (k2(r, t, e, a, s)) s.stopPropagation();
      else if ((Vg(t, s), e & 4 && -1 < H2.indexOf(t))) {
        for (; r !== null; ) {
          var u = Ai(r);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var y = Sn(u.pendingLanes);
                  if (y !== 0) {
                    var x = u;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; y; ) {
                      var T = 1 << (31 - ye(y));
                      ((x.entanglements[1] |= T), (y &= ~T));
                    }
                    (En(u), (jt & 6) === 0 && ((Vo = Te() + 500), fl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((x = Fa(u, 2)), x !== null && Ve(x, u, 2), Lo(), Zu(u, 2));
            }
          if (((u = Ju(s)), u === null && Hu(t, e, s, er, a), u === r)) break;
          r = u;
        }
        r !== null && s.stopPropagation();
      } else Hu(t, e, s, null, a);
    }
  }
  function Ju(t) {
    return ((t = $r(t)), Wu(t));
  }
  var er = null;
  function Wu(t) {
    if (((er = null), (t = Ti(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (a === 31) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((er = t), null);
  }
  function kg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Yr()) {
          case Ua:
            return 2;
          case Kl:
            return 8;
          case Ga:
          case Ds:
            return 32;
          case zn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $u = !1,
    Ca = null,
    Na = null,
    Ra = null,
    vl = new Map(),
    xl = new Map(),
    Da = [],
    H2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Vg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ca = null;
        break;
      case "dragenter":
      case "dragleave":
        Na = null;
        break;
      case "mouseover":
      case "mouseout":
        Ra = null;
        break;
      case "pointerover":
      case "pointerout":
        vl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xl.delete(e.pointerId);
    }
  }
  function bl(t, e, a, s, r, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: a,
          eventSystemFlags: s,
          nativeEvent: u,
          targetContainers: [r],
        }),
        e !== null && ((e = Ai(e)), e !== null && zg(e)),
        t)
      : ((t.eventSystemFlags |= s),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function k2(t, e, a, s, r) {
    switch (e) {
      case "focusin":
        return ((Ca = bl(Ca, t, e, a, s, r)), !0);
      case "dragenter":
        return ((Na = bl(Na, t, e, a, s, r)), !0);
      case "mouseover":
        return ((Ra = bl(Ra, t, e, a, s, r)), !0);
      case "pointerover":
        var u = r.pointerId;
        return (vl.set(u, bl(vl.get(u) || null, t, e, a, s, r)), !0);
      case "gotpointercapture":
        return (
          (u = r.pointerId),
          xl.set(u, bl(xl.get(u) || null, t, e, a, s, r)),
          !0
        );
    }
    return !1;
  }
  function Bg(t) {
    var e = Ti(t.target);
    if (e !== null) {
      var a = d(e);
      if (a !== null) {
        if (((e = a.tag), e === 13)) {
          if (((e = f(a)), e !== null)) {
            ((t.blockedOn = e),
              $d(t.priority, function () {
                Hg(a);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = p(a)), e !== null)) {
            ((t.blockedOn = e),
              $d(t.priority, function () {
                Hg(a);
              }));
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function nr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = Ju(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var s = new a.constructor(a.type, a);
        ((Wr = s), a.target.dispatchEvent(s), (Wr = null));
      } else return ((e = Ai(a)), e !== null && zg(e), (t.blockedOn = a), !1);
      e.shift();
    }
    return !0;
  }
  function Lg(t, e, a) {
    nr(t) && a.delete(e);
  }
  function V2() {
    (($u = !1),
      Ca !== null && nr(Ca) && (Ca = null),
      Na !== null && nr(Na) && (Na = null),
      Ra !== null && nr(Ra) && (Ra = null),
      vl.forEach(Lg),
      xl.forEach(Lg));
  }
  function ar(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      $u ||
        (($u = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, V2)));
  }
  var ir = null;
  function Ug(t) {
    ir !== t &&
      ((ir = t),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        ir === t && (ir = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e],
            s = t[e + 1],
            r = t[e + 2];
          if (typeof s != "function") {
            if (Wu(s || a) === null) continue;
            break;
          }
          var u = Ai(a);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Jc(u, { pending: !0, data: r, method: a.method, action: s }, s, r));
        }
      }));
  }
  function ss(t) {
    function e(T) {
      return ar(T, t);
    }
    (Ca !== null && ar(Ca, t),
      Na !== null && ar(Na, t),
      Ra !== null && ar(Ra, t),
      vl.forEach(e),
      xl.forEach(e));
    for (var a = 0; a < Da.length; a++) {
      var s = Da[a];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Da.length && ((a = Da[0]), a.blockedOn === null); )
      (Bg(a), a.blockedOn === null && Da.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (s = 0; s < a.length; s += 3) {
        var r = a[s],
          u = a[s + 1],
          y = r[Oe] || null;
        if (typeof u == "function") y || Ug(a);
        else if (y) {
          var x = null;
          if (u && u.hasAttribute("formAction")) {
            if (((r = u), (y = u[Oe] || null))) x = y.formAction;
            else if (Wu(r) !== null) continue;
          } else x = y.action;
          (typeof x == "function" ? (a[s + 1] = x) : (a.splice(s, 3), (s -= 3)),
            Ug(a));
        }
      }
  }
  function Gg() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (r = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (r !== null && (r(), (r = null)), s || setTimeout(a, 20));
    }
    function a() {
      if (!s && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var s = !1,
        r = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(a, 100),
        function () {
          ((s = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            r !== null && (r(), (r = null)));
        }
      );
    }
  }
  function Iu(t) {
    this._internalRoot = t;
  }
  ((sr.prototype.render = Iu.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var a = e.current,
        s = Qe();
      jg(a, s, t, e, null, null);
    }),
    (sr.prototype.unmount = Iu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (jg(t.current, 2, null, t, null, null), Lo(), (e[wi] = null));
        }
      }));
  function sr(t) {
    this._internalRoot = t;
  }
  sr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Xr();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < Da.length && e !== 0 && e < Da[a].priority; a++);
      (Da.splice(a, 0, t), a === 0 && Bg(t));
    }
  };
  var Yg = i.version;
  if (Yg !== "19.2.1") throw Error(o(527, Yg, "19.2.1"));
  B.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = h(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var B2 = {
    bundleType: 0,
    version: "19.2.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lr.isDisabled && lr.supportsFiber)
      try {
        ((Ya = lr.inject(B2)), (Ae = lr));
      } catch {}
  }
  return (
    (wl.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var a = !1,
        s = "",
        r = Fm,
        u = Jm,
        y = Wm;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (y = e.onRecoverableError)),
        (e = Dg(t, 1, !1, null, null, a, s, null, r, u, y, Gg)),
        (t[wi] = e.current),
        zu(t),
        new Iu(e)
      );
    }),
    (wl.hydrateRoot = function (t, e, a) {
      if (!c(t)) throw Error(o(299));
      var s = !1,
        r = "",
        u = Fm,
        y = Jm,
        x = Wm,
        T = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (y = a.onCaughtError),
          a.onRecoverableError !== void 0 && (x = a.onRecoverableError),
          a.formState !== void 0 && (T = a.formState)),
        (e = Dg(t, 1, !0, e, a ?? null, s, r, T, u, y, x, Gg)),
        (e.context = Og(null)),
        (a = e.current),
        (s = Qe()),
        (s = Si(s)),
        (r = pa(s)),
        (r.callback = null),
        ga(a, r, s),
        (a = s),
        (e.current.lanes = a),
        Pt(e, a),
        En(e),
        (t[wi] = e.current),
        zu(t),
        new sr(e)
      );
    }),
    (wl.version = "19.2.1"),
    wl
  );
}
var $g;
function Z2() {
  if ($g) return ef.exports;
  $g = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (ef.exports = Q2()), ef.exports);
}
var F2 = Z2(),
  C = Rr();
const $ = Yy(C),
  J2 = U2({ __proto__: null, default: $ }, [C]);
var W2 = (n, i, l, o, c, d, f, p) => {
    let m = document.documentElement,
      h = ["light", "dark"];
    function v(w) {
      ((Array.isArray(n) ? n : [n]).forEach((A) => {
        let D = A === "class",
          z = D && d ? c.map((O) => d[O] || O) : c;
        D
          ? (m.classList.remove(...z), m.classList.add(d && d[w] ? d[w] : w))
          : m.setAttribute(A, w);
      }),
        g(w));
    }
    function g(w) {
      p && h.includes(w) && (m.style.colorScheme = w);
    }
    function b() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (o) v(o);
    else
      try {
        let w = localStorage.getItem(i) || l,
          A = f && w === "system" ? b() : w;
        v(A);
      } catch {}
  },
  $2 = C.createContext(void 0),
  I2 = { setTheme: (n) => {}, themes: [] },
  tS = () => {
    var n;
    return (n = C.useContext($2)) != null ? n : I2;
  };
C.memo(
  ({
    forcedTheme: n,
    storageKey: i,
    attribute: l,
    enableSystem: o,
    enableColorScheme: c,
    defaultTheme: d,
    value: f,
    themes: p,
    nonce: m,
    scriptProps: h,
  }) => {
    let v = JSON.stringify([l, i, d, n, p, f, o, c]).slice(1, -1);
    return C.createElement("script", {
      ...h,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? m : "",
      dangerouslySetInnerHTML: { __html: `(${W2.toString()})(${v})` },
    });
  },
);
var rd = qy();
const eS = Yy(rd);
function nS(n) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    l = document.createElement("style");
  ((l.type = "text/css"),
    i.appendChild(l),
    l.styleSheet
      ? (l.styleSheet.cssText = n)
      : l.appendChild(document.createTextNode(n)));
}
const aS = (n) => {
    switch (n) {
      case "success":
        return lS;
      case "info":
        return rS;
      case "warning":
        return oS;
      case "error":
        return cS;
      default:
        return null;
    }
  },
  iS = Array(12).fill(0),
  sS = ({ visible: n, className: i }) =>
    $.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "),
        "data-visible": n,
      },
      $.createElement(
        "div",
        { className: "sonner-spinner" },
        iS.map((l, o) =>
          $.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${o}`,
          }),
        ),
      ),
    ),
  lS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  oS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  rS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  cS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  uS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    $.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    $.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  fS = () => {
    const [n, i] = $.useState(document.hidden);
    return (
      $.useEffect(() => {
        const l = () => {
          i(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", l),
          () => window.removeEventListener("visibilitychange", l)
        );
      }, []),
      n
    );
  };
let Of = 1;
class dS {
  constructor() {
    ((this.subscribe = (i) => (
      this.subscribers.push(i),
      () => {
        const l = this.subscribers.indexOf(i);
        this.subscribers.splice(l, 1);
      }
    )),
      (this.publish = (i) => {
        this.subscribers.forEach((l) => l(i));
      }),
      (this.addToast = (i) => {
        (this.publish(i), (this.toasts = [...this.toasts, i]));
      }),
      (this.create = (i) => {
        var l;
        const { message: o, ...c } = i,
          d =
            typeof i?.id == "number" ||
            ((l = i.id) == null ? void 0 : l.length) > 0
              ? i.id
              : Of++,
          f = this.toasts.find((m) => m.id === d),
          p = i.dismissible === void 0 ? !0 : i.dismissible;
        return (
          this.dismissedToasts.has(d) && this.dismissedToasts.delete(d),
          f
            ? (this.toasts = this.toasts.map((m) =>
                m.id === d
                  ? (this.publish({ ...m, ...i, id: d, title: o }),
                    { ...m, ...i, id: d, dismissible: p, title: o })
                  : m,
              ))
            : this.addToast({ title: o, ...c, dismissible: p, id: d }),
          d
        );
      }),
      (this.dismiss = (i) => (
        i
          ? (this.dismissedToasts.add(i),
            requestAnimationFrame(() =>
              this.subscribers.forEach((l) => l({ id: i, dismiss: !0 })),
            ))
          : this.toasts.forEach((l) => {
              this.subscribers.forEach((o) => o({ id: l.id, dismiss: !0 }));
            }),
        i
      )),
      (this.message = (i, l) => this.create({ ...l, message: i })),
      (this.error = (i, l) => this.create({ ...l, message: i, type: "error" })),
      (this.success = (i, l) =>
        this.create({ ...l, type: "success", message: i })),
      (this.info = (i, l) => this.create({ ...l, type: "info", message: i })),
      (this.warning = (i, l) =>
        this.create({ ...l, type: "warning", message: i })),
      (this.loading = (i, l) =>
        this.create({ ...l, type: "loading", message: i })),
      (this.promise = (i, l) => {
        if (!l) return;
        let o;
        l.loading !== void 0 &&
          (o = this.create({
            ...l,
            promise: i,
            type: "loading",
            message: l.loading,
            description:
              typeof l.description != "function" ? l.description : void 0,
          }));
        const c = Promise.resolve(i instanceof Function ? i() : i);
        let d = o !== void 0,
          f;
        const p = c
            .then(async (h) => {
              if (((f = ["resolve", h]), $.isValidElement(h)))
                ((d = !1), this.create({ id: o, type: "default", message: h }));
              else if (mS(h) && !h.ok) {
                d = !1;
                const g =
                    typeof l.error == "function"
                      ? await l.error(`HTTP error! status: ${h.status}`)
                      : l.error,
                  b =
                    typeof l.description == "function"
                      ? await l.description(`HTTP error! status: ${h.status}`)
                      : l.description,
                  A =
                    typeof g == "object" && !$.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: o, type: "error", description: b, ...A });
              } else if (h instanceof Error) {
                d = !1;
                const g =
                    typeof l.error == "function" ? await l.error(h) : l.error,
                  b =
                    typeof l.description == "function"
                      ? await l.description(h)
                      : l.description,
                  A =
                    typeof g == "object" && !$.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: o, type: "error", description: b, ...A });
              } else if (l.success !== void 0) {
                d = !1;
                const g =
                    typeof l.success == "function"
                      ? await l.success(h)
                      : l.success,
                  b =
                    typeof l.description == "function"
                      ? await l.description(h)
                      : l.description,
                  A =
                    typeof g == "object" && !$.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: o, type: "success", description: b, ...A });
              }
            })
            .catch(async (h) => {
              if (((f = ["reject", h]), l.error !== void 0)) {
                d = !1;
                const v =
                    typeof l.error == "function" ? await l.error(h) : l.error,
                  g =
                    typeof l.description == "function"
                      ? await l.description(h)
                      : l.description,
                  w =
                    typeof v == "object" && !$.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: o, type: "error", description: g, ...w });
              }
            })
            .finally(() => {
              (d && (this.dismiss(o), (o = void 0)),
                l.finally == null || l.finally.call(l));
            }),
          m = () =>
            new Promise((h, v) =>
              p.then(() => (f[0] === "reject" ? v(f[1]) : h(f[1]))).catch(v),
            );
        return typeof o != "string" && typeof o != "number"
          ? { unwrap: m }
          : Object.assign(o, { unwrap: m });
      }),
      (this.custom = (i, l) => {
        const o = l?.id || Of++;
        return (this.create({ jsx: i(o), id: o, ...l }), o);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((i) => !this.dismissedToasts.has(i.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const Be = new dS(),
  hS = (n, i) => {
    const l = i?.id || Of++;
    return (Be.addToast({ title: n, ...i, id: l }), l);
  },
  mS = (n) =>
    n &&
    typeof n == "object" &&
    "ok" in n &&
    typeof n.ok == "boolean" &&
    "status" in n &&
    typeof n.status == "number",
  pS = hS,
  gS = () => Be.toasts,
  yS = () => Be.getActiveToasts();
Object.assign(
  pS,
  {
    success: Be.success,
    info: Be.info,
    warning: Be.warning,
    error: Be.error,
    custom: Be.custom,
    message: Be.message,
    promise: Be.promise,
    dismiss: Be.dismiss,
    loading: Be.loading,
  },
  { getHistory: gS, getToasts: yS },
);
nS(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function or(n) {
  return n.label !== void 0;
}
const vS = 3,
  xS = "24px",
  bS = "16px",
  Ig = 4e3,
  SS = 356,
  wS = 14,
  TS = 45,
  AS = 200;
function Mn(...n) {
  return n.filter(Boolean).join(" ");
}
function ES(n) {
  const [i, l] = n.split("-"),
    o = [];
  return (i && o.push(i), l && o.push(l), o);
}
const MS = (n) => {
  var i, l, o, c, d, f, p, m, h;
  const {
      invert: v,
      toast: g,
      unstyled: b,
      interacting: w,
      setHeights: A,
      visibleToasts: D,
      heights: z,
      index: O,
      toasts: P,
      expanded: L,
      removeToast: F,
      defaultRichColors: Z,
      closeButton: W,
      style: Q,
      cancelButtonStyle: G,
      actionButtonStyle: ot,
      className: ft = "",
      descriptionClassName: wt = "",
      duration: pt,
      position: yt,
      gap: vt,
      expandByDefault: bt,
      classNames: N,
      icons: B,
      closeButtonAriaLabel: H = "Close toast",
    } = n,
    [et, lt] = $.useState(null),
    [E, q] = $.useState(null),
    [Y, J] = $.useState(!1),
    [I, rt] = $.useState(!1),
    [it, ht] = $.useState(!1),
    [Nt, ce] = $.useState(!1),
    [Se, ue] = $.useState(!1),
    [_n, fn] = $.useState(0),
    [Ms, vi] = $.useState(0),
    La = $.useRef(g.duration || pt || Ig),
    Cs = $.useRef(null),
    Ue = $.useRef(null),
    Ns = O === 0,
    Rs = O + 1 <= D,
    we = g.type,
    sa = g.dismissible !== !1,
    Te = g.className || "",
    Yr = g.descriptionClassName || "",
    Ua = $.useMemo(
      () => z.findIndex((mt) => mt.toastId === g.id) || 0,
      [z, g.id],
    ),
    Kl = $.useMemo(() => {
      var mt;
      return (mt = g.closeButton) != null ? mt : W;
    }, [g.closeButton, W]),
    Ga = $.useMemo(() => g.duration || pt || Ig, [g.duration, pt]),
    Ds = $.useRef(0),
    zn = $.useRef(0),
    Ql = $.useRef(0),
    la = $.useRef(null),
    [Ya, Ae] = yt.split("-"),
    dn = $.useMemo(
      () => z.reduce((mt, Yt, le) => (le >= Ua ? mt : mt + Yt.height), 0),
      [z, Ua],
    ),
    ye = fS(),
    qr = g.invert || v,
    Os = we === "loading";
  ((zn.current = $.useMemo(() => Ua * vt + dn, [Ua, dn])),
    $.useEffect(() => {
      La.current = Ga;
    }, [Ga]),
    $.useEffect(() => {
      J(!0);
    }, []),
    $.useEffect(() => {
      const mt = Ue.current;
      if (mt) {
        const Yt = mt.getBoundingClientRect().height;
        return (
          vi(Yt),
          A((le) => [
            { toastId: g.id, height: Yt, position: g.position },
            ...le,
          ]),
          () => A((le) => le.filter((ve) => ve.toastId !== g.id))
        );
      }
    }, [A, g.id]),
    $.useLayoutEffect(() => {
      if (!Y) return;
      const mt = Ue.current,
        Yt = mt.style.height;
      mt.style.height = "auto";
      const le = mt.getBoundingClientRect().height;
      ((mt.style.height = Yt),
        vi(le),
        A((ve) =>
          ve.find((Pt) => Pt.toastId === g.id)
            ? ve.map((Pt) => (Pt.toastId === g.id ? { ...Pt, height: le } : Pt))
            : [{ toastId: g.id, height: le, position: g.position }, ...ve],
        ));
    }, [Y, g.title, g.description, A, g.id, g.jsx, g.action, g.cancel]));
  const bn = $.useCallback(() => {
    (rt(!0),
      fn(zn.current),
      A((mt) => mt.filter((Yt) => Yt.toastId !== g.id)),
      setTimeout(() => {
        F(g);
      }, AS));
  }, [g, F, A, zn]);
  ($.useEffect(() => {
    if (
      (g.promise && we === "loading") ||
      g.duration === 1 / 0 ||
      g.type === "loading"
    )
      return;
    let mt;
    return (
      L || w || ye
        ? (() => {
            if (Ql.current < Ds.current) {
              const ve = new Date().getTime() - Ds.current;
              La.current = La.current - ve;
            }
            Ql.current = new Date().getTime();
          })()
        : (() => {
            La.current !== 1 / 0 &&
              ((Ds.current = new Date().getTime()),
              (mt = setTimeout(() => {
                (g.onAutoClose == null || g.onAutoClose.call(g, g), bn());
              }, La.current)));
          })(),
      () => clearTimeout(mt)
    );
  }, [L, w, g, we, ye, bn]),
    $.useEffect(() => {
      g.delete && (bn(), g.onDismiss == null || g.onDismiss.call(g, g));
    }, [bn, g.delete]));
  function xi() {
    var mt;
    if (B?.loading) {
      var Yt;
      return $.createElement(
        "div",
        {
          className: Mn(
            N?.loader,
            g == null || (Yt = g.classNames) == null ? void 0 : Yt.loader,
            "sonner-loader",
          ),
          "data-visible": we === "loading",
        },
        B.loading,
      );
    }
    return $.createElement(sS, {
      className: Mn(
        N?.loader,
        g == null || (mt = g.classNames) == null ? void 0 : mt.loader,
      ),
      visible: we === "loading",
    });
  }
  const bi = g.icon || B?.[we] || aS(we);
  var qa, Sn;
  return $.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Ue,
      className: Mn(
        ft,
        Te,
        N?.toast,
        g == null || (i = g.classNames) == null ? void 0 : i.toast,
        N?.default,
        N?.[we],
        g == null || (l = g.classNames) == null ? void 0 : l[we],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (qa = g.richColors) != null ? qa : Z,
      "data-styled": !(g.jsx || g.unstyled || b),
      "data-mounted": Y,
      "data-promise": !!g.promise,
      "data-swiped": Se,
      "data-removed": I,
      "data-visible": Rs,
      "data-y-position": Ya,
      "data-x-position": Ae,
      "data-index": O,
      "data-front": Ns,
      "data-swiping": it,
      "data-dismissible": sa,
      "data-type": we,
      "data-invert": qr,
      "data-swipe-out": Nt,
      "data-swipe-direction": E,
      "data-expanded": !!(L || (bt && Y)),
      "data-testid": g.testId,
      style: {
        "--index": O,
        "--toasts-before": O,
        "--z-index": P.length - O,
        "--offset": `${I ? _n : zn.current}px`,
        "--initial-height": bt ? "auto" : `${Ms}px`,
        ...Q,
        ...g.style,
      },
      onDragEnd: () => {
        (ht(!1), lt(null), (la.current = null));
      },
      onPointerDown: (mt) => {
        mt.button !== 2 &&
          (Os ||
            !sa ||
            ((Cs.current = new Date()),
            fn(zn.current),
            mt.target.setPointerCapture(mt.pointerId),
            mt.target.tagName !== "BUTTON" &&
              (ht(!0), (la.current = { x: mt.clientX, y: mt.clientY }))));
      },
      onPointerUp: () => {
        var mt, Yt, le;
        if (Nt || !sa) return;
        la.current = null;
        const ve = Number(
            ((mt = Ue.current) == null
              ? void 0
              : mt.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          oa = Number(
            ((Yt = Ue.current) == null
              ? void 0
              : Yt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Pt =
            new Date().getTime() -
            ((le = Cs.current) == null ? void 0 : le.getTime()),
          Ne = et === "x" ? ve : oa,
          Xa = Math.abs(Ne) / Pt;
        if (Math.abs(Ne) >= TS || Xa > 0.11) {
          (fn(zn.current),
            g.onDismiss == null || g.onDismiss.call(g, g),
            q(
              et === "x" ? (ve > 0 ? "right" : "left") : oa > 0 ? "down" : "up",
            ),
            bn(),
            ce(!0));
          return;
        } else {
          var Re, De;
          ((Re = Ue.current) == null ||
            Re.style.setProperty("--swipe-amount-x", "0px"),
            (De = Ue.current) == null ||
              De.style.setProperty("--swipe-amount-y", "0px"));
        }
        (ue(!1), ht(!1), lt(null));
      },
      onPointerMove: (mt) => {
        var Yt, le, ve;
        if (
          !la.current ||
          !sa ||
          ((Yt = window.getSelection()) == null
            ? void 0
            : Yt.toString().length) > 0
        )
          return;
        const Pt = mt.clientY - la.current.y,
          Ne = mt.clientX - la.current.x;
        var Xa;
        const Re = (Xa = n.swipeDirections) != null ? Xa : ES(yt);
        !et &&
          (Math.abs(Ne) > 1 || Math.abs(Pt) > 1) &&
          lt(Math.abs(Ne) > Math.abs(Pt) ? "x" : "y");
        let De = { x: 0, y: 0 };
        const Si = (hn) => 1 / (1.5 + Math.abs(hn) / 20);
        if (et === "y") {
          if (Re.includes("top") || Re.includes("bottom"))
            if (
              (Re.includes("top") && Pt < 0) ||
              (Re.includes("bottom") && Pt > 0)
            )
              De.y = Pt;
            else {
              const hn = Pt * Si(Pt);
              De.y = Math.abs(hn) < Math.abs(Pt) ? hn : Pt;
            }
        } else if (et === "x" && (Re.includes("left") || Re.includes("right")))
          if (
            (Re.includes("left") && Ne < 0) ||
            (Re.includes("right") && Ne > 0)
          )
            De.x = Ne;
          else {
            const hn = Ne * Si(Ne);
            De.x = Math.abs(hn) < Math.abs(Ne) ? hn : Ne;
          }
        ((Math.abs(De.x) > 0 || Math.abs(De.y) > 0) && ue(!0),
          (le = Ue.current) == null ||
            le.style.setProperty("--swipe-amount-x", `${De.x}px`),
          (ve = Ue.current) == null ||
            ve.style.setProperty("--swipe-amount-y", `${De.y}px`));
      },
    },
    Kl && !g.jsx && we !== "loading"
      ? $.createElement(
          "button",
          {
            "aria-label": H,
            "data-disabled": Os,
            "data-close-button": !0,
            onClick:
              Os || !sa
                ? () => {}
                : () => {
                    (bn(), g.onDismiss == null || g.onDismiss.call(g, g));
                  },
            className: Mn(
              N?.closeButton,
              g == null || (o = g.classNames) == null ? void 0 : o.closeButton,
            ),
          },
          (Sn = B?.close) != null ? Sn : uS,
        )
      : null,
    (we || g.icon || g.promise) &&
      g.icon !== null &&
      (B?.[we] !== null || g.icon)
      ? $.createElement(
          "div",
          {
            "data-icon": "",
            className: Mn(
              N?.icon,
              g == null || (c = g.classNames) == null ? void 0 : c.icon,
            ),
          },
          g.promise || (g.type === "loading" && !g.icon)
            ? g.icon || xi()
            : null,
          g.type !== "loading" ? bi : null,
        )
      : null,
    $.createElement(
      "div",
      {
        "data-content": "",
        className: Mn(
          N?.content,
          g == null || (d = g.classNames) == null ? void 0 : d.content,
        ),
      },
      $.createElement(
        "div",
        {
          "data-title": "",
          className: Mn(
            N?.title,
            g == null || (f = g.classNames) == null ? void 0 : f.title,
          ),
        },
        g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title,
      ),
      g.description
        ? $.createElement(
            "div",
            {
              "data-description": "",
              className: Mn(
                wt,
                Yr,
                N?.description,
                g == null || (p = g.classNames) == null
                  ? void 0
                  : p.description,
              ),
            },
            typeof g.description == "function"
              ? g.description()
              : g.description,
          )
        : null,
    ),
    $.isValidElement(g.cancel)
      ? g.cancel
      : g.cancel && or(g.cancel)
        ? $.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: g.cancelButtonStyle || G,
              onClick: (mt) => {
                or(g.cancel) &&
                  sa &&
                  (g.cancel.onClick == null ||
                    g.cancel.onClick.call(g.cancel, mt),
                  bn());
              },
              className: Mn(
                N?.cancelButton,
                g == null || (m = g.classNames) == null
                  ? void 0
                  : m.cancelButton,
              ),
            },
            g.cancel.label,
          )
        : null,
    $.isValidElement(g.action)
      ? g.action
      : g.action && or(g.action)
        ? $.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: g.actionButtonStyle || ot,
              onClick: (mt) => {
                or(g.action) &&
                  (g.action.onClick == null ||
                    g.action.onClick.call(g.action, mt),
                  !mt.defaultPrevented && bn());
              },
              className: Mn(
                N?.actionButton,
                g == null || (h = g.classNames) == null
                  ? void 0
                  : h.actionButton,
              ),
            },
            g.action.label,
          )
        : null,
  );
};
function t0() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n
    ? window.getComputedStyle(document.documentElement).direction
    : n;
}
function CS(n, i) {
  const l = {};
  return (
    [n, i].forEach((o, c) => {
      const d = c === 1,
        f = d ? "--mobile-offset" : "--offset",
        p = d ? bS : xS;
      function m(h) {
        ["top", "right", "bottom", "left"].forEach((v) => {
          l[`${f}-${v}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof o == "number" || typeof o == "string"
        ? m(o)
        : typeof o == "object"
          ? ["top", "right", "bottom", "left"].forEach((h) => {
              o[h] === void 0
                ? (l[`${f}-${h}`] = p)
                : (l[`${f}-${h}`] =
                    typeof o[h] == "number" ? `${o[h]}px` : o[h]);
            })
          : m(p);
    }),
    l
  );
}
const NS = $.forwardRef(function (i, l) {
    const {
        id: o,
        invert: c,
        position: d = "bottom-right",
        hotkey: f = ["altKey", "KeyT"],
        expand: p,
        closeButton: m,
        className: h,
        offset: v,
        mobileOffset: g,
        theme: b = "light",
        richColors: w,
        duration: A,
        style: D,
        visibleToasts: z = vS,
        toastOptions: O,
        dir: P = t0(),
        gap: L = wS,
        icons: F,
        containerAriaLabel: Z = "Notifications",
      } = i,
      [W, Q] = $.useState([]),
      G = $.useMemo(
        () =>
          o
            ? W.filter((Y) => Y.toasterId === o)
            : W.filter((Y) => !Y.toasterId),
        [W, o],
      ),
      ot = $.useMemo(
        () =>
          Array.from(
            new Set(
              [d].concat(G.filter((Y) => Y.position).map((Y) => Y.position)),
            ),
          ),
        [G, d],
      ),
      [ft, wt] = $.useState([]),
      [pt, yt] = $.useState(!1),
      [vt, bt] = $.useState(!1),
      [N, B] = $.useState(
        b !== "system"
          ? b
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      H = $.useRef(null),
      et = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      lt = $.useRef(null),
      E = $.useRef(!1),
      q = $.useCallback((Y) => {
        Q((J) => {
          var I;
          return (
            ((I = J.find((rt) => rt.id === Y.id)) != null && I.delete) ||
              Be.dismiss(Y.id),
            J.filter(({ id: rt }) => rt !== Y.id)
          );
        });
      }, []);
    return (
      $.useEffect(
        () =>
          Be.subscribe((Y) => {
            if (Y.dismiss) {
              requestAnimationFrame(() => {
                Q((J) =>
                  J.map((I) => (I.id === Y.id ? { ...I, delete: !0 } : I)),
                );
              });
              return;
            }
            setTimeout(() => {
              eS.flushSync(() => {
                Q((J) => {
                  const I = J.findIndex((rt) => rt.id === Y.id);
                  return I !== -1
                    ? [...J.slice(0, I), { ...J[I], ...Y }, ...J.slice(I + 1)]
                    : [Y, ...J];
                });
              });
            });
          }),
        [W],
      ),
      $.useEffect(() => {
        if (b !== "system") {
          B(b);
          return;
        }
        if (
          (b === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? B("dark")
              : B("light")),
          typeof window > "u")
        )
          return;
        const Y = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          Y.addEventListener("change", ({ matches: J }) => {
            B(J ? "dark" : "light");
          });
        } catch {
          Y.addListener(({ matches: I }) => {
            try {
              B(I ? "dark" : "light");
            } catch (rt) {
              console.error(rt);
            }
          });
        }
      }, [b]),
      $.useEffect(() => {
        W.length <= 1 && yt(!1);
      }, [W]),
      $.useEffect(() => {
        const Y = (J) => {
          var I;
          if (f.every((ht) => J[ht] || J.code === ht)) {
            var it;
            (yt(!0), (it = H.current) == null || it.focus());
          }
          J.code === "Escape" &&
            (document.activeElement === H.current ||
              ((I = H.current) != null &&
                I.contains(document.activeElement))) &&
            yt(!1);
        };
        return (
          document.addEventListener("keydown", Y),
          () => document.removeEventListener("keydown", Y)
        );
      }, [f]),
      $.useEffect(() => {
        if (H.current)
          return () => {
            lt.current &&
              (lt.current.focus({ preventScroll: !0 }),
              (lt.current = null),
              (E.current = !1));
          };
      }, [H.current]),
      $.createElement(
        "section",
        {
          ref: l,
          "aria-label": `${Z} ${et}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        ot.map((Y, J) => {
          var I;
          const [rt, it] = Y.split("-");
          return G.length
            ? $.createElement(
                "ol",
                {
                  key: Y,
                  dir: P === "auto" ? t0() : P,
                  tabIndex: -1,
                  ref: H,
                  className: h,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": N,
                  "data-y-position": rt,
                  "data-x-position": it,
                  style: {
                    "--front-toast-height": `${((I = ft[0]) == null ? void 0 : I.height) || 0}px`,
                    "--width": `${SS}px`,
                    "--gap": `${L}px`,
                    ...D,
                    ...CS(v, g),
                  },
                  onBlur: (ht) => {
                    E.current &&
                      !ht.currentTarget.contains(ht.relatedTarget) &&
                      ((E.current = !1),
                      lt.current &&
                        (lt.current.focus({ preventScroll: !0 }),
                        (lt.current = null)));
                  },
                  onFocus: (ht) => {
                    (ht.target instanceof HTMLElement &&
                      ht.target.dataset.dismissible === "false") ||
                      E.current ||
                      ((E.current = !0), (lt.current = ht.relatedTarget));
                  },
                  onMouseEnter: () => yt(!0),
                  onMouseMove: () => yt(!0),
                  onMouseLeave: () => {
                    vt || yt(!1);
                  },
                  onDragEnd: () => yt(!1),
                  onPointerDown: (ht) => {
                    (ht.target instanceof HTMLElement &&
                      ht.target.dataset.dismissible === "false") ||
                      bt(!0);
                  },
                  onPointerUp: () => bt(!1),
                },
                G.filter(
                  (ht) => (!ht.position && J === 0) || ht.position === Y,
                ).map((ht, Nt) => {
                  var ce, Se;
                  return $.createElement(MS, {
                    key: ht.id,
                    icons: F,
                    index: Nt,
                    toast: ht,
                    defaultRichColors: w,
                    duration: (ce = O?.duration) != null ? ce : A,
                    className: O?.className,
                    descriptionClassName: O?.descriptionClassName,
                    invert: c,
                    visibleToasts: z,
                    closeButton: (Se = O?.closeButton) != null ? Se : m,
                    interacting: vt,
                    position: Y,
                    style: O?.style,
                    unstyled: O?.unstyled,
                    classNames: O?.classNames,
                    cancelButtonStyle: O?.cancelButtonStyle,
                    actionButtonStyle: O?.actionButtonStyle,
                    closeButtonAriaLabel: O?.closeButtonAriaLabel,
                    removeToast: q,
                    toasts: G.filter((ue) => ue.position == ht.position),
                    heights: ft.filter((ue) => ue.position == ht.position),
                    setHeights: wt,
                    expandByDefault: p,
                    gap: L,
                    expanded: pt,
                    swipeDirections: i.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  RS = ({ ...n }) => {
    const { theme: i = "system" } = tS();
    return S.jsx(NS, {
      "data-loc": "client/src/components/ui/sonner.tsx:8",
      theme: i,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...n,
    });
  };
function ta(n, i, { checkForDefaultPrevented: l = !0 } = {}) {
  return function (c) {
    if ((n?.(c), l === !1 || !c.defaultPrevented)) return i?.(c);
  };
}
function e0(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function Xy(...n) {
  return (i) => {
    let l = !1;
    const o = n.map((c) => {
      const d = e0(c, i);
      return (!l && typeof d == "function" && (l = !0), d);
    });
    if (l)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : e0(n[c], null);
        }
      };
  };
}
function gi(...n) {
  return C.useCallback(Xy(...n), n);
}
function Py(n, i = []) {
  let l = [];
  function o(d, f) {
    const p = C.createContext(f),
      m = l.length;
    l = [...l, f];
    const h = (g) => {
      const { scope: b, children: w, ...A } = g,
        D = b?.[n]?.[m] || p,
        z = C.useMemo(() => A, Object.values(A));
      return S.jsx(D.Provider, { value: z, children: w });
    };
    h.displayName = d + "Provider";
    function v(g, b) {
      const w = b?.[n]?.[m] || p,
        A = C.useContext(w);
      if (A) return A;
      if (f !== void 0) return f;
      throw new Error(`\`${g}\` must be used within \`${d}\``);
    }
    return [h, v];
  }
  const c = () => {
    const d = l.map((f) => C.createContext(f));
    return function (p) {
      const m = p?.[n] || d;
      return C.useMemo(() => ({ [`__scope${n}`]: { ...p, [n]: m } }), [p, m]);
    };
  };
  return ((c.scopeName = n), [o, DS(c, ...i)]);
}
function DS(...n) {
  const i = n[0];
  if (n.length === 1) return i;
  const l = () => {
    const o = n.map((c) => ({ useScope: c(), scopeName: c.scopeName }));
    return function (d) {
      const f = o.reduce((p, { useScope: m, scopeName: h }) => {
        const g = m(d)[`__scope${h}`];
        return { ...p, ...g };
      }, {});
      return C.useMemo(() => ({ [`__scope${i.scopeName}`]: f }), [f]);
    };
  };
  return ((l.scopeName = i.scopeName), l);
}
function Ky(n) {
  const i = jS(n),
    l = C.forwardRef((o, c) => {
      const { children: d, ...f } = o,
        p = C.Children.toArray(d),
        m = p.find(zS);
      if (m) {
        const h = m.props.children,
          v = p.map((g) =>
            g === m
              ? C.Children.count(h) > 1
                ? C.Children.only(null)
                : C.isValidElement(h)
                  ? h.props.children
                  : null
              : g,
          );
        return S.jsx(i, {
          ...f,
          ref: c,
          children: C.isValidElement(h) ? C.cloneElement(h, void 0, v) : null,
        });
      }
      return S.jsx(i, { ...f, ref: c, children: d });
    });
  return ((l.displayName = `${n}.Slot`), l);
}
var OS = Ky("Slot");
function jS(n) {
  const i = C.forwardRef((l, o) => {
    const { children: c, ...d } = l;
    if (C.isValidElement(c)) {
      const f = kS(c),
        p = HS(d, c.props);
      return (
        c.type !== C.Fragment && (p.ref = o ? Xy(o, f) : f),
        C.cloneElement(c, p)
      );
    }
    return C.Children.count(c) > 1 ? C.Children.only(null) : null;
  });
  return ((i.displayName = `${n}.SlotClone`), i);
}
var Qy = Symbol("radix.slottable");
function _S(n) {
  const i = ({ children: l }) => S.jsx(S.Fragment, { children: l });
  return ((i.displayName = `${n}.Slottable`), (i.__radixId = Qy), i);
}
function zS(n) {
  return (
    C.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === Qy
  );
}
function HS(n, i) {
  const l = { ...i };
  for (const o in i) {
    const c = n[o],
      d = i[o];
    /^on[A-Z]/.test(o)
      ? c && d
        ? (l[o] = (...p) => {
            const m = d(...p);
            return (c(...p), m);
          })
        : c && (l[o] = c)
      : o === "style"
        ? (l[o] = { ...c, ...d })
        : o === "className" && (l[o] = [c, d].filter(Boolean).join(" "));
  }
  return { ...n, ...l };
}
function kS(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    l = i && "isReactWarning" in i && i.isReactWarning;
  return l
    ? n.ref
    : ((i = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (l = i && "isReactWarning" in i && i.isReactWarning),
      l ? n.props.ref : n.props.ref || n.ref);
}
var VS = [
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
    "ul",
  ],
  yi = VS.reduce((n, i) => {
    const l = Ky(`Primitive.${i}`),
      o = C.forwardRef((c, d) => {
        const { asChild: f, ...p } = c,
          m = f ? l : i;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          S.jsx(m, { ...p, ref: d })
        );
      });
    return ((o.displayName = `Primitive.${i}`), { ...n, [i]: o });
  }, {});
function BS(n, i) {
  n && rd.flushSync(() => n.dispatchEvent(i));
}
function Dr(n) {
  const i = C.useRef(n);
  return (
    C.useEffect(() => {
      i.current = n;
    }),
    C.useMemo(
      () =>
        (...l) =>
          i.current?.(...l),
      [],
    )
  );
}
function LS(n, i = globalThis?.document) {
  const l = Dr(n);
  C.useEffect(() => {
    const o = (c) => {
      c.key === "Escape" && l(c);
    };
    return (
      i.addEventListener("keydown", o, { capture: !0 }),
      () => i.removeEventListener("keydown", o, { capture: !0 })
    );
  }, [l, i]);
}
var US = "DismissableLayer",
  jf = "dismissableLayer.update",
  GS = "dismissableLayer.pointerDownOutside",
  YS = "dismissableLayer.focusOutside",
  n0,
  Zy = C.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Fy = C.forwardRef((n, i) => {
    const {
        disableOutsidePointerEvents: l = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: c,
        onFocusOutside: d,
        onInteractOutside: f,
        onDismiss: p,
        ...m
      } = n,
      h = C.useContext(Zy),
      [v, g] = C.useState(null),
      b = v?.ownerDocument ?? globalThis?.document,
      [, w] = C.useState({}),
      A = gi(i, (Q) => g(Q)),
      D = Array.from(h.layers),
      [z] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      O = D.indexOf(z),
      P = v ? D.indexOf(v) : -1,
      L = h.layersWithOutsidePointerEventsDisabled.size > 0,
      F = P >= O,
      Z = PS((Q) => {
        const G = Q.target,
          ot = [...h.branches].some((ft) => ft.contains(G));
        !F || ot || (c?.(Q), f?.(Q), Q.defaultPrevented || p?.());
      }, b),
      W = KS((Q) => {
        const G = Q.target;
        [...h.branches].some((ft) => ft.contains(G)) ||
          (d?.(Q), f?.(Q), Q.defaultPrevented || p?.());
      }, b);
    return (
      LS((Q) => {
        P === h.layers.size - 1 &&
          (o?.(Q), !Q.defaultPrevented && p && (Q.preventDefault(), p()));
      }, b),
      C.useEffect(() => {
        if (v)
          return (
            l &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((n0 = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(v)),
            h.layers.add(v),
            a0(),
            () => {
              l &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = n0);
            }
          );
      }, [v, b, l, h]),
      C.useEffect(
        () => () => {
          v &&
            (h.layers.delete(v),
            h.layersWithOutsidePointerEventsDisabled.delete(v),
            a0());
        },
        [v, h],
      ),
      C.useEffect(() => {
        const Q = () => w({});
        return (
          document.addEventListener(jf, Q),
          () => document.removeEventListener(jf, Q)
        );
      }, []),
      S.jsx(yi.div, {
        ...m,
        ref: A,
        style: {
          pointerEvents: L ? (F ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: ta(n.onFocusCapture, W.onFocusCapture),
        onBlurCapture: ta(n.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: ta(
          n.onPointerDownCapture,
          Z.onPointerDownCapture,
        ),
      })
    );
  });
Fy.displayName = US;
var qS = "DismissableLayerBranch",
  XS = C.forwardRef((n, i) => {
    const l = C.useContext(Zy),
      o = C.useRef(null),
      c = gi(i, o);
    return (
      C.useEffect(() => {
        const d = o.current;
        if (d)
          return (
            l.branches.add(d),
            () => {
              l.branches.delete(d);
            }
          );
      }, [l.branches]),
      S.jsx(yi.div, { ...n, ref: c })
    );
  });
XS.displayName = qS;
function PS(n, i = globalThis?.document) {
  const l = Dr(n),
    o = C.useRef(!1),
    c = C.useRef(() => {});
  return (
    C.useEffect(() => {
      const d = (p) => {
          if (p.target && !o.current) {
            let m = function () {
              Jy(GS, l, h, { discrete: !0 });
            };
            const h = { originalEvent: p };
            p.pointerType === "touch"
              ? (i.removeEventListener("click", c.current),
                (c.current = m),
                i.addEventListener("click", c.current, { once: !0 }))
              : m();
          } else i.removeEventListener("click", c.current);
          o.current = !1;
        },
        f = window.setTimeout(() => {
          i.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        (window.clearTimeout(f),
          i.removeEventListener("pointerdown", d),
          i.removeEventListener("click", c.current));
      };
    }, [i, l]),
    { onPointerDownCapture: () => (o.current = !0) }
  );
}
function KS(n, i = globalThis?.document) {
  const l = Dr(n),
    o = C.useRef(!1);
  return (
    C.useEffect(() => {
      const c = (d) => {
        d.target &&
          !o.current &&
          Jy(YS, l, { originalEvent: d }, { discrete: !1 });
      };
      return (
        i.addEventListener("focusin", c),
        () => i.removeEventListener("focusin", c)
      );
    }, [i, l]),
    {
      onFocusCapture: () => (o.current = !0),
      onBlurCapture: () => (o.current = !1),
    }
  );
}
function a0() {
  const n = new CustomEvent(jf);
  document.dispatchEvent(n);
}
function Jy(n, i, l, { discrete: o }) {
  const c = l.originalEvent.target,
    d = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l });
  (i && c.addEventListener(n, i, { once: !0 }),
    o ? BS(c, d) : c.dispatchEvent(d));
}
var Ol = globalThis?.document ? C.useLayoutEffect : () => {};
const QS = ["top", "right", "bottom", "left"],
  za = Math.min,
  Ze = Math.max,
  br = Math.round,
  rr = Math.floor,
  Nn = (n) => ({ x: n, y: n }),
  ZS = { left: "right", right: "left", bottom: "top", top: "bottom" },
  FS = { start: "end", end: "start" };
function _f(n, i, l) {
  return Ze(n, za(i, l));
}
function ea(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function na(n) {
  return n.split("-")[0];
}
function xs(n) {
  return n.split("-")[1];
}
function cd(n) {
  return n === "x" ? "y" : "x";
}
function ud(n) {
  return n === "y" ? "height" : "width";
}
const JS = new Set(["top", "bottom"]);
function Cn(n) {
  return JS.has(na(n)) ? "y" : "x";
}
function fd(n) {
  return cd(Cn(n));
}
function WS(n, i, l) {
  l === void 0 && (l = !1);
  const o = xs(n),
    c = fd(n),
    d = ud(c);
  let f =
    c === "x"
      ? o === (l ? "end" : "start")
        ? "right"
        : "left"
      : o === "start"
        ? "bottom"
        : "top";
  return (i.reference[d] > i.floating[d] && (f = Sr(f)), [f, Sr(f)]);
}
function $S(n) {
  const i = Sr(n);
  return [zf(n), i, zf(i)];
}
function zf(n) {
  return n.replace(/start|end/g, (i) => FS[i]);
}
const i0 = ["left", "right"],
  s0 = ["right", "left"],
  IS = ["top", "bottom"],
  tw = ["bottom", "top"];
function ew(n, i, l) {
  switch (n) {
    case "top":
    case "bottom":
      return l ? (i ? s0 : i0) : i ? i0 : s0;
    case "left":
    case "right":
      return i ? IS : tw;
    default:
      return [];
  }
}
function nw(n, i, l, o) {
  const c = xs(n);
  let d = ew(na(n), l === "start", o);
  return (
    c && ((d = d.map((f) => f + "-" + c)), i && (d = d.concat(d.map(zf)))),
    d
  );
}
function Sr(n) {
  return n.replace(/left|right|bottom|top/g, (i) => ZS[i]);
}
function aw(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function Wy(n) {
  return typeof n != "number"
    ? aw(n)
    : { top: n, right: n, bottom: n, left: n };
}
function wr(n) {
  const { x: i, y: l, width: o, height: c } = n;
  return {
    width: o,
    height: c,
    top: l,
    left: i,
    right: i + o,
    bottom: l + c,
    x: i,
    y: l,
  };
}
function l0(n, i, l) {
  let { reference: o, floating: c } = n;
  const d = Cn(i),
    f = fd(i),
    p = ud(f),
    m = na(i),
    h = d === "y",
    v = o.x + o.width / 2 - c.width / 2,
    g = o.y + o.height / 2 - c.height / 2,
    b = o[p] / 2 - c[p] / 2;
  let w;
  switch (m) {
    case "top":
      w = { x: v, y: o.y - c.height };
      break;
    case "bottom":
      w = { x: v, y: o.y + o.height };
      break;
    case "right":
      w = { x: o.x + o.width, y: g };
      break;
    case "left":
      w = { x: o.x - c.width, y: g };
      break;
    default:
      w = { x: o.x, y: o.y };
  }
  switch (xs(i)) {
    case "start":
      w[f] -= b * (l && h ? -1 : 1);
      break;
    case "end":
      w[f] += b * (l && h ? -1 : 1);
      break;
  }
  return w;
}
const iw = async (n, i, l) => {
  const {
      placement: o = "bottom",
      strategy: c = "absolute",
      middleware: d = [],
      platform: f,
    } = l,
    p = d.filter(Boolean),
    m = await (f.isRTL == null ? void 0 : f.isRTL(i));
  let h = await f.getElementRects({ reference: n, floating: i, strategy: c }),
    { x: v, y: g } = l0(h, o, m),
    b = o,
    w = {},
    A = 0;
  for (let D = 0; D < p.length; D++) {
    const { name: z, fn: O } = p[D],
      {
        x: P,
        y: L,
        data: F,
        reset: Z,
      } = await O({
        x: v,
        y: g,
        initialPlacement: o,
        placement: b,
        strategy: c,
        middlewareData: w,
        rects: h,
        platform: f,
        elements: { reference: n, floating: i },
      });
    ((v = P ?? v),
      (g = L ?? g),
      (w = { ...w, [z]: { ...w[z], ...F } }),
      Z &&
        A <= 50 &&
        (A++,
        typeof Z == "object" &&
          (Z.placement && (b = Z.placement),
          Z.rects &&
            (h =
              Z.rects === !0
                ? await f.getElementRects({
                    reference: n,
                    floating: i,
                    strategy: c,
                  })
                : Z.rects),
          ({ x: v, y: g } = l0(h, b, m))),
        (D = -1)));
  }
  return { x: v, y: g, placement: b, strategy: c, middlewareData: w };
};
async function jl(n, i) {
  var l;
  i === void 0 && (i = {});
  const { x: o, y: c, platform: d, rects: f, elements: p, strategy: m } = n,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: g = "floating",
      altBoundary: b = !1,
      padding: w = 0,
    } = ea(i, n),
    A = Wy(w),
    z = p[b ? (g === "floating" ? "reference" : "floating") : g],
    O = wr(
      await d.getClippingRect({
        element:
          (l = await (d.isElement == null ? void 0 : d.isElement(z))) == null ||
          l
            ? z
            : z.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(p.floating))),
        boundary: h,
        rootBoundary: v,
        strategy: m,
      }),
    ),
    P =
      g === "floating"
        ? { x: o, y: c, width: f.floating.width, height: f.floating.height }
        : f.reference,
    L = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(p.floating)),
    F = (await (d.isElement == null ? void 0 : d.isElement(L)))
      ? (await (d.getScale == null ? void 0 : d.getScale(L))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    Z = wr(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: p,
            rect: P,
            offsetParent: L,
            strategy: m,
          })
        : P,
    );
  return {
    top: (O.top - Z.top + A.top) / F.y,
    bottom: (Z.bottom - O.bottom + A.bottom) / F.y,
    left: (O.left - Z.left + A.left) / F.x,
    right: (Z.right - O.right + A.right) / F.x,
  };
}
const sw = (n) => ({
    name: "arrow",
    options: n,
    async fn(i) {
      const {
          x: l,
          y: o,
          placement: c,
          rects: d,
          platform: f,
          elements: p,
          middlewareData: m,
        } = i,
        { element: h, padding: v = 0 } = ea(n, i) || {};
      if (h == null) return {};
      const g = Wy(v),
        b = { x: l, y: o },
        w = fd(c),
        A = ud(w),
        D = await f.getDimensions(h),
        z = w === "y",
        O = z ? "top" : "left",
        P = z ? "bottom" : "right",
        L = z ? "clientHeight" : "clientWidth",
        F = d.reference[A] + d.reference[w] - b[w] - d.floating[A],
        Z = b[w] - d.reference[w],
        W = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(h));
      let Q = W ? W[L] : 0;
      (!Q || !(await (f.isElement == null ? void 0 : f.isElement(W)))) &&
        (Q = p.floating[L] || d.floating[A]);
      const G = F / 2 - Z / 2,
        ot = Q / 2 - D[A] / 2 - 1,
        ft = za(g[O], ot),
        wt = za(g[P], ot),
        pt = ft,
        yt = Q - D[A] - wt,
        vt = Q / 2 - D[A] / 2 + G,
        bt = _f(pt, vt, yt),
        N =
          !m.arrow &&
          xs(c) != null &&
          vt !== bt &&
          d.reference[A] / 2 - (vt < pt ? ft : wt) - D[A] / 2 < 0,
        B = N ? (vt < pt ? vt - pt : vt - yt) : 0;
      return {
        [w]: b[w] + B,
        data: {
          [w]: bt,
          centerOffset: vt - bt - B,
          ...(N && { alignmentOffset: B }),
        },
        reset: N,
      };
    },
  }),
  lw = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(i) {
          var l, o;
          const {
              placement: c,
              middlewareData: d,
              rects: f,
              initialPlacement: p,
              platform: m,
              elements: h,
            } = i,
            {
              mainAxis: v = !0,
              crossAxis: g = !0,
              fallbackPlacements: b,
              fallbackStrategy: w = "bestFit",
              fallbackAxisSideDirection: A = "none",
              flipAlignment: D = !0,
              ...z
            } = ea(n, i);
          if ((l = d.arrow) != null && l.alignmentOffset) return {};
          const O = na(c),
            P = Cn(p),
            L = na(p) === p,
            F = await (m.isRTL == null ? void 0 : m.isRTL(h.floating)),
            Z = b || (L || !D ? [Sr(p)] : $S(p)),
            W = A !== "none";
          !b && W && Z.push(...nw(p, D, A, F));
          const Q = [p, ...Z],
            G = await jl(i, z),
            ot = [];
          let ft = ((o = d.flip) == null ? void 0 : o.overflows) || [];
          if ((v && ot.push(G[O]), g)) {
            const vt = WS(c, f, F);
            ot.push(G[vt[0]], G[vt[1]]);
          }
          if (
            ((ft = [...ft, { placement: c, overflows: ot }]),
            !ot.every((vt) => vt <= 0))
          ) {
            var wt, pt;
            const vt = (((wt = d.flip) == null ? void 0 : wt.index) || 0) + 1,
              bt = Q[vt];
            if (
              bt &&
              (!(g === "alignment" ? P !== Cn(bt) : !1) ||
                ft.every((H) =>
                  Cn(H.placement) === P ? H.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: vt, overflows: ft },
                reset: { placement: bt },
              };
            let N =
              (pt = ft
                .filter((B) => B.overflows[0] <= 0)
                .sort((B, H) => B.overflows[1] - H.overflows[1])[0]) == null
                ? void 0
                : pt.placement;
            if (!N)
              switch (w) {
                case "bestFit": {
                  var yt;
                  const B =
                    (yt = ft
                      .filter((H) => {
                        if (W) {
                          const et = Cn(H.placement);
                          return et === P || et === "y";
                        }
                        return !0;
                      })
                      .map((H) => [
                        H.placement,
                        H.overflows
                          .filter((et) => et > 0)
                          .reduce((et, lt) => et + lt, 0),
                      ])
                      .sort((H, et) => H[1] - et[1])[0]) == null
                      ? void 0
                      : yt[0];
                  B && (N = B);
                  break;
                }
                case "initialPlacement":
                  N = p;
                  break;
              }
            if (c !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function o0(n, i) {
  return {
    top: n.top - i.height,
    right: n.right - i.width,
    bottom: n.bottom - i.height,
    left: n.left - i.width,
  };
}
function r0(n) {
  return QS.some((i) => n[i] >= 0);
}
const ow = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(i) {
          const { rects: l } = i,
            { strategy: o = "referenceHidden", ...c } = ea(n, i);
          switch (o) {
            case "referenceHidden": {
              const d = await jl(i, { ...c, elementContext: "reference" }),
                f = o0(d, l.reference);
              return {
                data: { referenceHiddenOffsets: f, referenceHidden: r0(f) },
              };
            }
            case "escaped": {
              const d = await jl(i, { ...c, altBoundary: !0 }),
                f = o0(d, l.floating);
              return { data: { escapedOffsets: f, escaped: r0(f) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  $y = new Set(["left", "top"]);
async function rw(n, i) {
  const { placement: l, platform: o, elements: c } = n,
    d = await (o.isRTL == null ? void 0 : o.isRTL(c.floating)),
    f = na(l),
    p = xs(l),
    m = Cn(l) === "y",
    h = $y.has(f) ? -1 : 1,
    v = d && m ? -1 : 1,
    g = ea(i, n);
  let {
    mainAxis: b,
    crossAxis: w,
    alignmentAxis: A,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: g.mainAxis || 0,
        crossAxis: g.crossAxis || 0,
        alignmentAxis: g.alignmentAxis,
      };
  return (
    p && typeof A == "number" && (w = p === "end" ? A * -1 : A),
    m ? { x: w * v, y: b * h } : { x: b * h, y: w * v }
  );
}
const cw = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(i) {
          var l, o;
          const { x: c, y: d, placement: f, middlewareData: p } = i,
            m = await rw(i, n);
          return f === ((l = p.offset) == null ? void 0 : l.placement) &&
            (o = p.arrow) != null &&
            o.alignmentOffset
            ? {}
            : { x: c + m.x, y: d + m.y, data: { ...m, placement: f } };
        },
      }
    );
  },
  uw = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(i) {
          const { x: l, y: o, placement: c } = i,
            {
              mainAxis: d = !0,
              crossAxis: f = !1,
              limiter: p = {
                fn: (z) => {
                  let { x: O, y: P } = z;
                  return { x: O, y: P };
                },
              },
              ...m
            } = ea(n, i),
            h = { x: l, y: o },
            v = await jl(i, m),
            g = Cn(na(c)),
            b = cd(g);
          let w = h[b],
            A = h[g];
          if (d) {
            const z = b === "y" ? "top" : "left",
              O = b === "y" ? "bottom" : "right",
              P = w + v[z],
              L = w - v[O];
            w = _f(P, w, L);
          }
          if (f) {
            const z = g === "y" ? "top" : "left",
              O = g === "y" ? "bottom" : "right",
              P = A + v[z],
              L = A - v[O];
            A = _f(P, A, L);
          }
          const D = p.fn({ ...i, [b]: w, [g]: A });
          return {
            ...D,
            data: { x: D.x - l, y: D.y - o, enabled: { [b]: d, [g]: f } },
          };
        },
      }
    );
  },
  fw = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(i) {
          const { x: l, y: o, placement: c, rects: d, middlewareData: f } = i,
            { offset: p = 0, mainAxis: m = !0, crossAxis: h = !0 } = ea(n, i),
            v = { x: l, y: o },
            g = Cn(c),
            b = cd(g);
          let w = v[b],
            A = v[g];
          const D = ea(p, i),
            z =
              typeof D == "number"
                ? { mainAxis: D, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...D };
          if (m) {
            const L = b === "y" ? "height" : "width",
              F = d.reference[b] - d.floating[L] + z.mainAxis,
              Z = d.reference[b] + d.reference[L] - z.mainAxis;
            w < F ? (w = F) : w > Z && (w = Z);
          }
          if (h) {
            var O, P;
            const L = b === "y" ? "width" : "height",
              F = $y.has(na(c)),
              Z =
                d.reference[g] -
                d.floating[L] +
                ((F && ((O = f.offset) == null ? void 0 : O[g])) || 0) +
                (F ? 0 : z.crossAxis),
              W =
                d.reference[g] +
                d.reference[L] +
                (F ? 0 : ((P = f.offset) == null ? void 0 : P[g]) || 0) -
                (F ? z.crossAxis : 0);
            A < Z ? (A = Z) : A > W && (A = W);
          }
          return { [b]: w, [g]: A };
        },
      }
    );
  },
  dw = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(i) {
          var l, o;
          const { placement: c, rects: d, platform: f, elements: p } = i,
            { apply: m = () => {}, ...h } = ea(n, i),
            v = await jl(i, h),
            g = na(c),
            b = xs(c),
            w = Cn(c) === "y",
            { width: A, height: D } = d.floating;
          let z, O;
          g === "top" || g === "bottom"
            ? ((z = g),
              (O =
                b ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(p.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((O = g), (z = b === "end" ? "top" : "bottom"));
          const P = D - v.top - v.bottom,
            L = A - v.left - v.right,
            F = za(D - v[z], P),
            Z = za(A - v[O], L),
            W = !i.middlewareData.shift;
          let Q = F,
            G = Z;
          if (
            ((l = i.middlewareData.shift) != null && l.enabled.x && (G = L),
            (o = i.middlewareData.shift) != null && o.enabled.y && (Q = P),
            W && !b)
          ) {
            const ft = Ze(v.left, 0),
              wt = Ze(v.right, 0),
              pt = Ze(v.top, 0),
              yt = Ze(v.bottom, 0);
            w
              ? (G =
                  A -
                  2 * (ft !== 0 || wt !== 0 ? ft + wt : Ze(v.left, v.right)))
              : (Q =
                  D -
                  2 * (pt !== 0 || yt !== 0 ? pt + yt : Ze(v.top, v.bottom)));
          }
          await m({ ...i, availableWidth: G, availableHeight: Q });
          const ot = await f.getDimensions(p.floating);
          return A !== ot.width || D !== ot.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Or() {
  return typeof window < "u";
}
function bs(n) {
  return Iy(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Fe(n) {
  var i;
  return (
    (n == null || (i = n.ownerDocument) == null ? void 0 : i.defaultView) ||
    window
  );
}
function jn(n) {
  var i;
  return (i = (Iy(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : i.documentElement;
}
function Iy(n) {
  return Or() ? n instanceof Node || n instanceof Fe(n).Node : !1;
}
function vn(n) {
  return Or() ? n instanceof Element || n instanceof Fe(n).Element : !1;
}
function On(n) {
  return Or() ? n instanceof HTMLElement || n instanceof Fe(n).HTMLElement : !1;
}
function c0(n) {
  return !Or() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof Fe(n).ShadowRoot;
}
const hw = new Set(["inline", "contents"]);
function Ul(n) {
  const { overflow: i, overflowX: l, overflowY: o, display: c } = xn(n);
  return /auto|scroll|overlay|hidden|clip/.test(i + o + l) && !hw.has(c);
}
const mw = new Set(["table", "td", "th"]);
function pw(n) {
  return mw.has(bs(n));
}
const gw = [":popover-open", ":modal"];
function jr(n) {
  return gw.some((i) => {
    try {
      return n.matches(i);
    } catch {
      return !1;
    }
  });
}
const yw = ["transform", "translate", "scale", "rotate", "perspective"],
  vw = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  xw = ["paint", "layout", "strict", "content"];
function dd(n) {
  const i = hd(),
    l = vn(n) ? xn(n) : n;
  return (
    yw.some((o) => (l[o] ? l[o] !== "none" : !1)) ||
    (l.containerType ? l.containerType !== "normal" : !1) ||
    (!i && (l.backdropFilter ? l.backdropFilter !== "none" : !1)) ||
    (!i && (l.filter ? l.filter !== "none" : !1)) ||
    vw.some((o) => (l.willChange || "").includes(o)) ||
    xw.some((o) => (l.contain || "").includes(o))
  );
}
function bw(n) {
  let i = Ha(n);
  for (; On(i) && !ps(i); ) {
    if (dd(i)) return i;
    if (jr(i)) return null;
    i = Ha(i);
  }
  return null;
}
function hd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Sw = new Set(["html", "body", "#document"]);
function ps(n) {
  return Sw.has(bs(n));
}
function xn(n) {
  return Fe(n).getComputedStyle(n);
}
function _r(n) {
  return vn(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Ha(n) {
  if (bs(n) === "html") return n;
  const i = n.assignedSlot || n.parentNode || (c0(n) && n.host) || jn(n);
  return c0(i) ? i.host : i;
}
function tv(n) {
  const i = Ha(n);
  return ps(i)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : On(i) && Ul(i)
      ? i
      : tv(i);
}
function _l(n, i, l) {
  var o;
  (i === void 0 && (i = []), l === void 0 && (l = !0));
  const c = tv(n),
    d = c === ((o = n.ownerDocument) == null ? void 0 : o.body),
    f = Fe(c);
  if (d) {
    const p = Hf(f);
    return i.concat(
      f,
      f.visualViewport || [],
      Ul(c) ? c : [],
      p && l ? _l(p) : [],
    );
  }
  return i.concat(c, _l(c, [], l));
}
function Hf(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function ev(n) {
  const i = xn(n);
  let l = parseFloat(i.width) || 0,
    o = parseFloat(i.height) || 0;
  const c = On(n),
    d = c ? n.offsetWidth : l,
    f = c ? n.offsetHeight : o,
    p = br(l) !== d || br(o) !== f;
  return (p && ((l = d), (o = f)), { width: l, height: o, $: p });
}
function md(n) {
  return vn(n) ? n : n.contextElement;
}
function hs(n) {
  const i = md(n);
  if (!On(i)) return Nn(1);
  const l = i.getBoundingClientRect(),
    { width: o, height: c, $: d } = ev(i);
  let f = (d ? br(l.width) : l.width) / o,
    p = (d ? br(l.height) : l.height) / c;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!p || !Number.isFinite(p)) && (p = 1),
    { x: f, y: p }
  );
}
const ww = Nn(0);
function nv(n) {
  const i = Fe(n);
  return !hd() || !i.visualViewport
    ? ww
    : { x: i.visualViewport.offsetLeft, y: i.visualViewport.offsetTop };
}
function Tw(n, i, l) {
  return (i === void 0 && (i = !1), !l || (i && l !== Fe(n)) ? !1 : i);
}
function pi(n, i, l, o) {
  (i === void 0 && (i = !1), l === void 0 && (l = !1));
  const c = n.getBoundingClientRect(),
    d = md(n);
  let f = Nn(1);
  i && (o ? vn(o) && (f = hs(o)) : (f = hs(n)));
  const p = Tw(d, l, o) ? nv(d) : Nn(0);
  let m = (c.left + p.x) / f.x,
    h = (c.top + p.y) / f.y,
    v = c.width / f.x,
    g = c.height / f.y;
  if (d) {
    const b = Fe(d),
      w = o && vn(o) ? Fe(o) : o;
    let A = b,
      D = Hf(A);
    for (; D && o && w !== A; ) {
      const z = hs(D),
        O = D.getBoundingClientRect(),
        P = xn(D),
        L = O.left + (D.clientLeft + parseFloat(P.paddingLeft)) * z.x,
        F = O.top + (D.clientTop + parseFloat(P.paddingTop)) * z.y;
      ((m *= z.x),
        (h *= z.y),
        (v *= z.x),
        (g *= z.y),
        (m += L),
        (h += F),
        (A = Fe(D)),
        (D = Hf(A)));
    }
  }
  return wr({ width: v, height: g, x: m, y: h });
}
function zr(n, i) {
  const l = _r(n).scrollLeft;
  return i ? i.left + l : pi(jn(n)).left + l;
}
function av(n, i) {
  const l = n.getBoundingClientRect(),
    o = l.left + i.scrollLeft - zr(n, l),
    c = l.top + i.scrollTop;
  return { x: o, y: c };
}
function Aw(n) {
  let { elements: i, rect: l, offsetParent: o, strategy: c } = n;
  const d = c === "fixed",
    f = jn(o),
    p = i ? jr(i.floating) : !1;
  if (o === f || (p && d)) return l;
  let m = { scrollLeft: 0, scrollTop: 0 },
    h = Nn(1);
  const v = Nn(0),
    g = On(o);
  if (
    (g || (!g && !d)) &&
    ((bs(o) !== "body" || Ul(f)) && (m = _r(o)), On(o))
  ) {
    const w = pi(o);
    ((h = hs(o)), (v.x = w.x + o.clientLeft), (v.y = w.y + o.clientTop));
  }
  const b = f && !g && !d ? av(f, m) : Nn(0);
  return {
    width: l.width * h.x,
    height: l.height * h.y,
    x: l.x * h.x - m.scrollLeft * h.x + v.x + b.x,
    y: l.y * h.y - m.scrollTop * h.y + v.y + b.y,
  };
}
function Ew(n) {
  return Array.from(n.getClientRects());
}
function Mw(n) {
  const i = jn(n),
    l = _r(n),
    o = n.ownerDocument.body,
    c = Ze(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth),
    d = Ze(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight);
  let f = -l.scrollLeft + zr(n);
  const p = -l.scrollTop;
  return (
    xn(o).direction === "rtl" && (f += Ze(i.clientWidth, o.clientWidth) - c),
    { width: c, height: d, x: f, y: p }
  );
}
const u0 = 25;
function Cw(n, i) {
  const l = Fe(n),
    o = jn(n),
    c = l.visualViewport;
  let d = o.clientWidth,
    f = o.clientHeight,
    p = 0,
    m = 0;
  if (c) {
    ((d = c.width), (f = c.height));
    const v = hd();
    (!v || (v && i === "fixed")) && ((p = c.offsetLeft), (m = c.offsetTop));
  }
  const h = zr(o);
  if (h <= 0) {
    const v = o.ownerDocument,
      g = v.body,
      b = getComputedStyle(g),
      w =
        (v.compatMode === "CSS1Compat" &&
          parseFloat(b.marginLeft) + parseFloat(b.marginRight)) ||
        0,
      A = Math.abs(o.clientWidth - g.clientWidth - w);
    A <= u0 && (d -= A);
  } else h <= u0 && (d += h);
  return { width: d, height: f, x: p, y: m };
}
const Nw = new Set(["absolute", "fixed"]);
function Rw(n, i) {
  const l = pi(n, !0, i === "fixed"),
    o = l.top + n.clientTop,
    c = l.left + n.clientLeft,
    d = On(n) ? hs(n) : Nn(1),
    f = n.clientWidth * d.x,
    p = n.clientHeight * d.y,
    m = c * d.x,
    h = o * d.y;
  return { width: f, height: p, x: m, y: h };
}
function f0(n, i, l) {
  let o;
  if (i === "viewport") o = Cw(n, l);
  else if (i === "document") o = Mw(jn(n));
  else if (vn(i)) o = Rw(i, l);
  else {
    const c = nv(n);
    o = { x: i.x - c.x, y: i.y - c.y, width: i.width, height: i.height };
  }
  return wr(o);
}
function iv(n, i) {
  const l = Ha(n);
  return l === i || !vn(l) || ps(l)
    ? !1
    : xn(l).position === "fixed" || iv(l, i);
}
function Dw(n, i) {
  const l = i.get(n);
  if (l) return l;
  let o = _l(n, [], !1).filter((p) => vn(p) && bs(p) !== "body"),
    c = null;
  const d = xn(n).position === "fixed";
  let f = d ? Ha(n) : n;
  for (; vn(f) && !ps(f); ) {
    const p = xn(f),
      m = dd(f);
    (!m && p.position === "fixed" && (c = null),
      (
        d
          ? !m && !c
          : (!m && p.position === "static" && !!c && Nw.has(c.position)) ||
            (Ul(f) && !m && iv(n, f))
      )
        ? (o = o.filter((v) => v !== f))
        : (c = p),
      (f = Ha(f)));
  }
  return (i.set(n, o), o);
}
function Ow(n) {
  let { element: i, boundary: l, rootBoundary: o, strategy: c } = n;
  const f = [
      ...(l === "clippingAncestors"
        ? jr(i)
          ? []
          : Dw(i, this._c)
        : [].concat(l)),
      o,
    ],
    p = f[0],
    m = f.reduce(
      (h, v) => {
        const g = f0(i, v, c);
        return (
          (h.top = Ze(g.top, h.top)),
          (h.right = za(g.right, h.right)),
          (h.bottom = za(g.bottom, h.bottom)),
          (h.left = Ze(g.left, h.left)),
          h
        );
      },
      f0(i, p, c),
    );
  return {
    width: m.right - m.left,
    height: m.bottom - m.top,
    x: m.left,
    y: m.top,
  };
}
function jw(n) {
  const { width: i, height: l } = ev(n);
  return { width: i, height: l };
}
function _w(n, i, l) {
  const o = On(i),
    c = jn(i),
    d = l === "fixed",
    f = pi(n, !0, d, i);
  let p = { scrollLeft: 0, scrollTop: 0 };
  const m = Nn(0);
  function h() {
    m.x = zr(c);
  }
  if (o || (!o && !d))
    if (((bs(i) !== "body" || Ul(c)) && (p = _r(i)), o)) {
      const w = pi(i, !0, d, i);
      ((m.x = w.x + i.clientLeft), (m.y = w.y + i.clientTop));
    } else c && h();
  d && !o && c && h();
  const v = c && !o && !d ? av(c, p) : Nn(0),
    g = f.left + p.scrollLeft - m.x - v.x,
    b = f.top + p.scrollTop - m.y - v.y;
  return { x: g, y: b, width: f.width, height: f.height };
}
function of(n) {
  return xn(n).position === "static";
}
function d0(n, i) {
  if (!On(n) || xn(n).position === "fixed") return null;
  if (i) return i(n);
  let l = n.offsetParent;
  return (jn(n) === l && (l = l.ownerDocument.body), l);
}
function sv(n, i) {
  const l = Fe(n);
  if (jr(n)) return l;
  if (!On(n)) {
    let c = Ha(n);
    for (; c && !ps(c); ) {
      if (vn(c) && !of(c)) return c;
      c = Ha(c);
    }
    return l;
  }
  let o = d0(n, i);
  for (; o && pw(o) && of(o); ) o = d0(o, i);
  return o && ps(o) && of(o) && !dd(o) ? l : o || bw(n) || l;
}
const zw = async function (n) {
  const i = this.getOffsetParent || sv,
    l = this.getDimensions,
    o = await l(n.floating);
  return {
    reference: _w(n.reference, await i(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Hw(n) {
  return xn(n).direction === "rtl";
}
const kw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Aw,
  getDocumentElement: jn,
  getClippingRect: Ow,
  getOffsetParent: sv,
  getElementRects: zw,
  getClientRects: Ew,
  getDimensions: jw,
  getScale: hs,
  isElement: vn,
  isRTL: Hw,
};
function lv(n, i) {
  return (
    n.x === i.x && n.y === i.y && n.width === i.width && n.height === i.height
  );
}
function Vw(n, i) {
  let l = null,
    o;
  const c = jn(n);
  function d() {
    var p;
    (clearTimeout(o), (p = l) == null || p.disconnect(), (l = null));
  }
  function f(p, m) {
    (p === void 0 && (p = !1), m === void 0 && (m = 1), d());
    const h = n.getBoundingClientRect(),
      { left: v, top: g, width: b, height: w } = h;
    if ((p || i(), !b || !w)) return;
    const A = rr(g),
      D = rr(c.clientWidth - (v + b)),
      z = rr(c.clientHeight - (g + w)),
      O = rr(v),
      L = {
        rootMargin: -A + "px " + -D + "px " + -z + "px " + -O + "px",
        threshold: Ze(0, za(1, m)) || 1,
      };
    let F = !0;
    function Z(W) {
      const Q = W[0].intersectionRatio;
      if (Q !== m) {
        if (!F) return f();
        Q
          ? f(!1, Q)
          : (o = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      (Q === 1 && !lv(h, n.getBoundingClientRect()) && f(), (F = !1));
    }
    try {
      l = new IntersectionObserver(Z, { ...L, root: c.ownerDocument });
    } catch {
      l = new IntersectionObserver(Z, L);
    }
    l.observe(n);
  }
  return (f(!0), d);
}
function Bw(n, i, l, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: c = !0,
      ancestorResize: d = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: p = typeof IntersectionObserver == "function",
      animationFrame: m = !1,
    } = o,
    h = md(n),
    v = c || d ? [...(h ? _l(h) : []), ..._l(i)] : [];
  v.forEach((O) => {
    (c && O.addEventListener("scroll", l, { passive: !0 }),
      d && O.addEventListener("resize", l));
  });
  const g = h && p ? Vw(h, l) : null;
  let b = -1,
    w = null;
  f &&
    ((w = new ResizeObserver((O) => {
      let [P] = O;
      (P &&
        P.target === h &&
        w &&
        (w.unobserve(i),
        cancelAnimationFrame(b),
        (b = requestAnimationFrame(() => {
          var L;
          (L = w) == null || L.observe(i);
        }))),
        l());
    })),
    h && !m && w.observe(h),
    w.observe(i));
  let A,
    D = m ? pi(n) : null;
  m && z();
  function z() {
    const O = pi(n);
    (D && !lv(D, O) && l(), (D = O), (A = requestAnimationFrame(z)));
  }
  return (
    l(),
    () => {
      var O;
      (v.forEach((P) => {
        (c && P.removeEventListener("scroll", l),
          d && P.removeEventListener("resize", l));
      }),
        g?.(),
        (O = w) == null || O.disconnect(),
        (w = null),
        m && cancelAnimationFrame(A));
    }
  );
}
const Lw = cw,
  Uw = uw,
  Gw = lw,
  Yw = dw,
  qw = ow,
  h0 = sw,
  Xw = fw,
  Pw = (n, i, l) => {
    const o = new Map(),
      c = { platform: kw, ...l },
      d = { ...c.platform, _c: o };
    return iw(n, i, { ...c, platform: d });
  };
var Kw = typeof document < "u",
  Qw = function () {},
  pr = Kw ? C.useLayoutEffect : Qw;
function Tr(n, i) {
  if (n === i) return !0;
  if (typeof n != typeof i) return !1;
  if (typeof n == "function" && n.toString() === i.toString()) return !0;
  let l, o, c;
  if (n && i && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((l = n.length), l !== i.length)) return !1;
      for (o = l; o-- !== 0; ) if (!Tr(n[o], i[o])) return !1;
      return !0;
    }
    if (((c = Object.keys(n)), (l = c.length), l !== Object.keys(i).length))
      return !1;
    for (o = l; o-- !== 0; ) if (!{}.hasOwnProperty.call(i, c[o])) return !1;
    for (o = l; o-- !== 0; ) {
      const d = c[o];
      if (!(d === "_owner" && n.$$typeof) && !Tr(n[d], i[d])) return !1;
    }
    return !0;
  }
  return n !== n && i !== i;
}
function ov(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function m0(n, i) {
  const l = ov(n);
  return Math.round(i * l) / l;
}
function rf(n) {
  const i = C.useRef(n);
  return (
    pr(() => {
      i.current = n;
    }),
    i
  );
}
function Zw(n) {
  n === void 0 && (n = {});
  const {
      placement: i = "bottom",
      strategy: l = "absolute",
      middleware: o = [],
      platform: c,
      elements: { reference: d, floating: f } = {},
      transform: p = !0,
      whileElementsMounted: m,
      open: h,
    } = n,
    [v, g] = C.useState({
      x: 0,
      y: 0,
      strategy: l,
      placement: i,
      middlewareData: {},
      isPositioned: !1,
    }),
    [b, w] = C.useState(o);
  Tr(b, o) || w(o);
  const [A, D] = C.useState(null),
    [z, O] = C.useState(null),
    P = C.useCallback((H) => {
      H !== W.current && ((W.current = H), D(H));
    }, []),
    L = C.useCallback((H) => {
      H !== Q.current && ((Q.current = H), O(H));
    }, []),
    F = d || A,
    Z = f || z,
    W = C.useRef(null),
    Q = C.useRef(null),
    G = C.useRef(v),
    ot = m != null,
    ft = rf(m),
    wt = rf(c),
    pt = rf(h),
    yt = C.useCallback(() => {
      if (!W.current || !Q.current) return;
      const H = { placement: i, strategy: l, middleware: b };
      (wt.current && (H.platform = wt.current),
        Pw(W.current, Q.current, H).then((et) => {
          const lt = { ...et, isPositioned: pt.current !== !1 };
          vt.current &&
            !Tr(G.current, lt) &&
            ((G.current = lt),
            rd.flushSync(() => {
              g(lt);
            }));
        }));
    }, [b, i, l, wt, pt]);
  pr(() => {
    h === !1 &&
      G.current.isPositioned &&
      ((G.current.isPositioned = !1), g((H) => ({ ...H, isPositioned: !1 })));
  }, [h]);
  const vt = C.useRef(!1);
  (pr(
    () => (
      (vt.current = !0),
      () => {
        vt.current = !1;
      }
    ),
    [],
  ),
    pr(() => {
      if ((F && (W.current = F), Z && (Q.current = Z), F && Z)) {
        if (ft.current) return ft.current(F, Z, yt);
        yt();
      }
    }, [F, Z, yt, ft, ot]));
  const bt = C.useMemo(
      () => ({ reference: W, floating: Q, setReference: P, setFloating: L }),
      [P, L],
    ),
    N = C.useMemo(() => ({ reference: F, floating: Z }), [F, Z]),
    B = C.useMemo(() => {
      const H = { position: l, left: 0, top: 0 };
      if (!N.floating) return H;
      const et = m0(N.floating, v.x),
        lt = m0(N.floating, v.y);
      return p
        ? {
            ...H,
            transform: "translate(" + et + "px, " + lt + "px)",
            ...(ov(N.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: l, left: et, top: lt };
    }, [l, p, N.floating, v.x, v.y]);
  return C.useMemo(
    () => ({ ...v, update: yt, refs: bt, elements: N, floatingStyles: B }),
    [v, yt, bt, N, B],
  );
}
const Fw = (n) => {
    function i(l) {
      return {}.hasOwnProperty.call(l, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(l) {
        const { element: o, padding: c } = typeof n == "function" ? n(l) : n;
        return o && i(o)
          ? o.current != null
            ? h0({ element: o.current, padding: c }).fn(l)
            : {}
          : o
            ? h0({ element: o, padding: c }).fn(l)
            : {};
      },
    };
  },
  Jw = (n, i) => ({ ...Lw(n), options: [n, i] }),
  Ww = (n, i) => ({ ...Uw(n), options: [n, i] }),
  $w = (n, i) => ({ ...Xw(n), options: [n, i] }),
  Iw = (n, i) => ({ ...Gw(n), options: [n, i] }),
  tT = (n, i) => ({ ...Yw(n), options: [n, i] }),
  eT = (n, i) => ({ ...qw(n), options: [n, i] }),
  nT = (n, i) => ({ ...Fw(n), options: [n, i] });
var aT = "Arrow",
  rv = C.forwardRef((n, i) => {
    const { children: l, width: o = 10, height: c = 5, ...d } = n;
    return S.jsx(yi.svg, {
      ...d,
      ref: i,
      width: o,
      height: c,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? l : S.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
rv.displayName = aT;
var iT = rv;
function sT(n) {
  const [i, l] = C.useState(void 0);
  return (
    Ol(() => {
      if (n) {
        l({ width: n.offsetWidth, height: n.offsetHeight });
        const o = new ResizeObserver((c) => {
          if (!Array.isArray(c) || !c.length) return;
          const d = c[0];
          let f, p;
          if ("borderBoxSize" in d) {
            const m = d.borderBoxSize,
              h = Array.isArray(m) ? m[0] : m;
            ((f = h.inlineSize), (p = h.blockSize));
          } else ((f = n.offsetWidth), (p = n.offsetHeight));
          l({ width: f, height: p });
        });
        return (o.observe(n, { box: "border-box" }), () => o.unobserve(n));
      } else l(void 0);
    }, [n]),
    i
  );
}
var cv = "Popper",
  [uv, fv] = Py(cv),
  [l8, dv] = uv(cv),
  hv = "PopperAnchor",
  mv = C.forwardRef((n, i) => {
    const { __scopePopper: l, virtualRef: o, ...c } = n,
      d = dv(hv, l),
      f = C.useRef(null),
      p = gi(i, f),
      m = C.useRef(null);
    return (
      C.useEffect(() => {
        const h = m.current;
        ((m.current = o?.current || f.current),
          h !== m.current && d.onAnchorChange(m.current));
      }),
      o ? null : S.jsx(yi.div, { ...c, ref: p })
    );
  });
mv.displayName = hv;
var pd = "PopperContent",
  [lT, oT] = uv(pd),
  pv = C.forwardRef((n, i) => {
    const {
        __scopePopper: l,
        side: o = "bottom",
        sideOffset: c = 0,
        align: d = "center",
        alignOffset: f = 0,
        arrowPadding: p = 0,
        avoidCollisions: m = !0,
        collisionBoundary: h = [],
        collisionPadding: v = 0,
        sticky: g = "partial",
        hideWhenDetached: b = !1,
        updatePositionStrategy: w = "optimized",
        onPlaced: A,
        ...D
      } = n,
      z = dv(pd, l),
      [O, P] = C.useState(null),
      L = gi(i, (it) => P(it)),
      [F, Z] = C.useState(null),
      W = sT(F),
      Q = W?.width ?? 0,
      G = W?.height ?? 0,
      ot = o + (d !== "center" ? "-" + d : ""),
      ft =
        typeof v == "number"
          ? v
          : { top: 0, right: 0, bottom: 0, left: 0, ...v },
      wt = Array.isArray(h) ? h : [h],
      pt = wt.length > 0,
      yt = { padding: ft, boundary: wt.filter(cT), altBoundary: pt },
      {
        refs: vt,
        floatingStyles: bt,
        placement: N,
        isPositioned: B,
        middlewareData: H,
      } = Zw({
        strategy: "fixed",
        placement: ot,
        whileElementsMounted: (...it) =>
          Bw(...it, { animationFrame: w === "always" }),
        elements: { reference: z.anchor },
        middleware: [
          Jw({ mainAxis: c + G, alignmentAxis: f }),
          m &&
            Ww({
              mainAxis: !0,
              crossAxis: !1,
              limiter: g === "partial" ? $w() : void 0,
              ...yt,
            }),
          m && Iw({ ...yt }),
          tT({
            ...yt,
            apply: ({
              elements: it,
              rects: ht,
              availableWidth: Nt,
              availableHeight: ce,
            }) => {
              const { width: Se, height: ue } = ht.reference,
                _n = it.floating.style;
              (_n.setProperty("--radix-popper-available-width", `${Nt}px`),
                _n.setProperty("--radix-popper-available-height", `${ce}px`),
                _n.setProperty("--radix-popper-anchor-width", `${Se}px`),
                _n.setProperty("--radix-popper-anchor-height", `${ue}px`));
            },
          }),
          F && nT({ element: F, padding: p }),
          uT({ arrowWidth: Q, arrowHeight: G }),
          b && eT({ strategy: "referenceHidden", ...yt }),
        ],
      }),
      [et, lt] = vv(N),
      E = Dr(A);
    Ol(() => {
      B && E?.();
    }, [B, E]);
    const q = H.arrow?.x,
      Y = H.arrow?.y,
      J = H.arrow?.centerOffset !== 0,
      [I, rt] = C.useState();
    return (
      Ol(() => {
        O && rt(window.getComputedStyle(O).zIndex);
      }, [O]),
      S.jsx("div", {
        ref: vt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...bt,
          transform: B ? bt.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: I,
          "--radix-popper-transform-origin": [
            H.transformOrigin?.x,
            H.transformOrigin?.y,
          ].join(" "),
          ...(H.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: S.jsx(lT, {
          scope: l,
          placedSide: et,
          onArrowChange: Z,
          arrowX: q,
          arrowY: Y,
          shouldHideArrow: J,
          children: S.jsx(yi.div, {
            "data-side": et,
            "data-align": lt,
            ...D,
            ref: L,
            style: { ...D.style, animation: B ? void 0 : "none" },
          }),
        }),
      })
    );
  });
pv.displayName = pd;
var gv = "PopperArrow",
  rT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  yv = C.forwardRef(function (i, l) {
    const { __scopePopper: o, ...c } = i,
      d = oT(gv, o),
      f = rT[d.placedSide];
    return S.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: S.jsx(iT, {
        ...c,
        ref: l,
        style: { ...c.style, display: "block" },
      }),
    });
  });
yv.displayName = gv;
function cT(n) {
  return n !== null;
}
var uT = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(i) {
    const { placement: l, rects: o, middlewareData: c } = i,
      f = c.arrow?.centerOffset !== 0,
      p = f ? 0 : n.arrowWidth,
      m = f ? 0 : n.arrowHeight,
      [h, v] = vv(l),
      g = { start: "0%", center: "50%", end: "100%" }[v],
      b = (c.arrow?.x ?? 0) + p / 2,
      w = (c.arrow?.y ?? 0) + m / 2;
    let A = "",
      D = "";
    return (
      h === "bottom"
        ? ((A = f ? g : `${b}px`), (D = `${-m}px`))
        : h === "top"
          ? ((A = f ? g : `${b}px`), (D = `${o.floating.height + m}px`))
          : h === "right"
            ? ((A = `${-m}px`), (D = f ? g : `${w}px`))
            : h === "left" &&
              ((A = `${o.floating.width + m}px`), (D = f ? g : `${w}px`)),
      { data: { x: A, y: D } }
    );
  },
});
function vv(n) {
  const [i, l = "center"] = n.split("-");
  return [i, l];
}
var fT = mv,
  dT = pv,
  hT = yv;
function mT(n, i) {
  return C.useReducer((l, o) => i[l][o] ?? l, n);
}
var xv = (n) => {
  const { present: i, children: l } = n,
    o = pT(i),
    c =
      typeof l == "function" ? l({ present: o.isPresent }) : C.Children.only(l),
    d = gi(o.ref, gT(c));
  return typeof l == "function" || o.isPresent
    ? C.cloneElement(c, { ref: d })
    : null;
};
xv.displayName = "Presence";
function pT(n) {
  const [i, l] = C.useState(),
    o = C.useRef(null),
    c = C.useRef(n),
    d = C.useRef("none"),
    f = n ? "mounted" : "unmounted",
    [p, m] = mT(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    C.useEffect(() => {
      const h = cr(o.current);
      d.current = p === "mounted" ? h : "none";
    }, [p]),
    Ol(() => {
      const h = o.current,
        v = c.current;
      if (v !== n) {
        const b = d.current,
          w = cr(h);
        (n
          ? m("MOUNT")
          : w === "none" || h?.display === "none"
            ? m("UNMOUNT")
            : m(v && b !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (c.current = n));
      }
    }, [n, m]),
    Ol(() => {
      if (i) {
        let h;
        const v = i.ownerDocument.defaultView ?? window,
          g = (w) => {
            const D = cr(o.current).includes(CSS.escape(w.animationName));
            if (w.target === i && D && (m("ANIMATION_END"), !c.current)) {
              const z = i.style.animationFillMode;
              ((i.style.animationFillMode = "forwards"),
                (h = v.setTimeout(() => {
                  i.style.animationFillMode === "forwards" &&
                    (i.style.animationFillMode = z);
                })));
            }
          },
          b = (w) => {
            w.target === i && (d.current = cr(o.current));
          };
        return (
          i.addEventListener("animationstart", b),
          i.addEventListener("animationcancel", g),
          i.addEventListener("animationend", g),
          () => {
            (v.clearTimeout(h),
              i.removeEventListener("animationstart", b),
              i.removeEventListener("animationcancel", g),
              i.removeEventListener("animationend", g));
          }
        );
      } else m("ANIMATION_END");
    }, [i, m]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(p),
      ref: C.useCallback((h) => {
        ((o.current = h ? getComputedStyle(h) : null), l(h));
      }, []),
    }
  );
}
function cr(n) {
  return n?.animationName || "none";
}
function gT(n) {
  let i = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    l = i && "isReactWarning" in i && i.isReactWarning;
  return l
    ? n.ref
    : ((i = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (l = i && "isReactWarning" in i && i.isReactWarning),
      l ? n.props.ref : n.props.ref || n.ref);
}
var yT = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  vT = "VisuallyHidden",
  bv = C.forwardRef((n, i) =>
    S.jsx(yi.span, { ...n, ref: i, style: { ...yT, ...n.style } }),
  );
bv.displayName = vT;
var xT = bv,
  [Hr] = Py("Tooltip", [fv]),
  gd = fv(),
  Sv = "TooltipProvider",
  bT = 700,
  p0 = "tooltip.open",
  [ST, wv] = Hr(Sv),
  Tv = (n) => {
    const {
        __scopeTooltip: i,
        delayDuration: l = bT,
        skipDelayDuration: o = 300,
        disableHoverableContent: c = !1,
        children: d,
      } = n,
      f = C.useRef(!0),
      p = C.useRef(!1),
      m = C.useRef(0);
    return (
      C.useEffect(() => {
        const h = m.current;
        return () => window.clearTimeout(h);
      }, []),
      S.jsx(ST, {
        scope: i,
        isOpenDelayedRef: f,
        delayDuration: l,
        onOpen: C.useCallback(() => {
          (window.clearTimeout(m.current), (f.current = !1));
        }, []),
        onClose: C.useCallback(() => {
          (window.clearTimeout(m.current),
            (m.current = window.setTimeout(() => (f.current = !0), o)));
        }, [o]),
        isPointerInTransitRef: p,
        onPointerInTransitChange: C.useCallback((h) => {
          p.current = h;
        }, []),
        disableHoverableContent: c,
        children: d,
      })
    );
  };
Tv.displayName = Sv;
var Av = "Tooltip",
  [o8, kr] = Hr(Av),
  kf = "TooltipTrigger",
  wT = C.forwardRef((n, i) => {
    const { __scopeTooltip: l, ...o } = n,
      c = kr(kf, l),
      d = wv(kf, l),
      f = gd(l),
      p = C.useRef(null),
      m = gi(i, p, c.onTriggerChange),
      h = C.useRef(!1),
      v = C.useRef(!1),
      g = C.useCallback(() => (h.current = !1), []);
    return (
      C.useEffect(
        () => () => document.removeEventListener("pointerup", g),
        [g],
      ),
      S.jsx(fT, {
        asChild: !0,
        ...f,
        children: S.jsx(yi.button, {
          "aria-describedby": c.open ? c.contentId : void 0,
          "data-state": c.stateAttribute,
          ...o,
          ref: m,
          onPointerMove: ta(n.onPointerMove, (b) => {
            b.pointerType !== "touch" &&
              !v.current &&
              !d.isPointerInTransitRef.current &&
              (c.onTriggerEnter(), (v.current = !0));
          }),
          onPointerLeave: ta(n.onPointerLeave, () => {
            (c.onTriggerLeave(), (v.current = !1));
          }),
          onPointerDown: ta(n.onPointerDown, () => {
            (c.open && c.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", g, { once: !0 }));
          }),
          onFocus: ta(n.onFocus, () => {
            h.current || c.onOpen();
          }),
          onBlur: ta(n.onBlur, c.onClose),
          onClick: ta(n.onClick, c.onClose),
        }),
      })
    );
  });
wT.displayName = kf;
var TT = "TooltipPortal",
  [r8, AT] = Hr(TT, { forceMount: void 0 }),
  gs = "TooltipContent",
  ET = C.forwardRef((n, i) => {
    const l = AT(gs, n.__scopeTooltip),
      { forceMount: o = l.forceMount, side: c = "top", ...d } = n,
      f = kr(gs, n.__scopeTooltip);
    return S.jsx(xv, {
      present: o || f.open,
      children: f.disableHoverableContent
        ? S.jsx(Ev, { side: c, ...d, ref: i })
        : S.jsx(MT, { side: c, ...d, ref: i }),
    });
  }),
  MT = C.forwardRef((n, i) => {
    const l = kr(gs, n.__scopeTooltip),
      o = wv(gs, n.__scopeTooltip),
      c = C.useRef(null),
      d = gi(i, c),
      [f, p] = C.useState(null),
      { trigger: m, onClose: h } = l,
      v = c.current,
      { onPointerInTransitChange: g } = o,
      b = C.useCallback(() => {
        (p(null), g(!1));
      }, [g]),
      w = C.useCallback(
        (A, D) => {
          const z = A.currentTarget,
            O = { x: A.clientX, y: A.clientY },
            P = OT(O, z.getBoundingClientRect()),
            L = jT(O, P),
            F = _T(D.getBoundingClientRect()),
            Z = HT([...L, ...F]);
          (p(Z), g(!0));
        },
        [g],
      );
    return (
      C.useEffect(() => () => b(), [b]),
      C.useEffect(() => {
        if (m && v) {
          const A = (z) => w(z, v),
            D = (z) => w(z, m);
          return (
            m.addEventListener("pointerleave", A),
            v.addEventListener("pointerleave", D),
            () => {
              (m.removeEventListener("pointerleave", A),
                v.removeEventListener("pointerleave", D));
            }
          );
        }
      }, [m, v, w, b]),
      C.useEffect(() => {
        if (f) {
          const A = (D) => {
            const z = D.target,
              O = { x: D.clientX, y: D.clientY },
              P = m?.contains(z) || v?.contains(z),
              L = !zT(O, f);
            P ? b() : L && (b(), h());
          };
          return (
            document.addEventListener("pointermove", A),
            () => document.removeEventListener("pointermove", A)
          );
        }
      }, [m, v, f, h, b]),
      S.jsx(Ev, { ...n, ref: d })
    );
  }),
  [CT, NT] = Hr(Av, { isInside: !1 }),
  RT = _S("TooltipContent"),
  Ev = C.forwardRef((n, i) => {
    const {
        __scopeTooltip: l,
        children: o,
        "aria-label": c,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        ...p
      } = n,
      m = kr(gs, l),
      h = gd(l),
      { onClose: v } = m;
    return (
      C.useEffect(
        () => (
          document.addEventListener(p0, v),
          () => document.removeEventListener(p0, v)
        ),
        [v],
      ),
      C.useEffect(() => {
        if (m.trigger) {
          const g = (b) => {
            b.target?.contains(m.trigger) && v();
          };
          return (
            window.addEventListener("scroll", g, { capture: !0 }),
            () => window.removeEventListener("scroll", g, { capture: !0 })
          );
        }
      }, [m.trigger, v]),
      S.jsx(Fy, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: f,
        onFocusOutside: (g) => g.preventDefault(),
        onDismiss: v,
        children: S.jsxs(dT, {
          "data-state": m.stateAttribute,
          ...h,
          ...p,
          ref: i,
          style: {
            ...p.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            S.jsx(RT, { children: o }),
            S.jsx(CT, {
              scope: l,
              isInside: !0,
              children: S.jsx(xT, {
                id: m.contentId,
                role: "tooltip",
                children: c || o,
              }),
            }),
          ],
        }),
      })
    );
  });
ET.displayName = gs;
var Mv = "TooltipArrow",
  DT = C.forwardRef((n, i) => {
    const { __scopeTooltip: l, ...o } = n,
      c = gd(l);
    return NT(Mv, l).isInside ? null : S.jsx(hT, { ...c, ...o, ref: i });
  });
DT.displayName = Mv;
function OT(n, i) {
  const l = Math.abs(i.top - n.y),
    o = Math.abs(i.bottom - n.y),
    c = Math.abs(i.right - n.x),
    d = Math.abs(i.left - n.x);
  switch (Math.min(l, o, c, d)) {
    case d:
      return "left";
    case c:
      return "right";
    case l:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function jT(n, i, l = 5) {
  const o = [];
  switch (i) {
    case "top":
      o.push({ x: n.x - l, y: n.y + l }, { x: n.x + l, y: n.y + l });
      break;
    case "bottom":
      o.push({ x: n.x - l, y: n.y - l }, { x: n.x + l, y: n.y - l });
      break;
    case "left":
      o.push({ x: n.x + l, y: n.y - l }, { x: n.x + l, y: n.y + l });
      break;
    case "right":
      o.push({ x: n.x - l, y: n.y - l }, { x: n.x - l, y: n.y + l });
      break;
  }
  return o;
}
function _T(n) {
  const { top: i, right: l, bottom: o, left: c } = n;
  return [
    { x: c, y: i },
    { x: l, y: i },
    { x: l, y: o },
    { x: c, y: o },
  ];
}
function zT(n, i) {
  const { x: l, y: o } = n;
  let c = !1;
  for (let d = 0, f = i.length - 1; d < i.length; f = d++) {
    const p = i[d],
      m = i[f],
      h = p.x,
      v = p.y,
      g = m.x,
      b = m.y;
    v > o != b > o && l < ((g - h) * (o - v)) / (b - v) + h && (c = !c);
  }
  return c;
}
function HT(n) {
  const i = n.slice();
  return (
    i.sort((l, o) =>
      l.x < o.x ? -1 : l.x > o.x ? 1 : l.y < o.y ? -1 : l.y > o.y ? 1 : 0,
    ),
    kT(i)
  );
}
function kT(n) {
  if (n.length <= 1) return n.slice();
  const i = [];
  for (let o = 0; o < n.length; o++) {
    const c = n[o];
    for (; i.length >= 2; ) {
      const d = i[i.length - 1],
        f = i[i.length - 2];
      if ((d.x - f.x) * (c.y - f.y) >= (d.y - f.y) * (c.x - f.x)) i.pop();
      else break;
    }
    i.push(c);
  }
  i.pop();
  const l = [];
  for (let o = n.length - 1; o >= 0; o--) {
    const c = n[o];
    for (; l.length >= 2; ) {
      const d = l[l.length - 1],
        f = l[l.length - 2];
      if ((d.x - f.x) * (c.y - f.y) >= (d.y - f.y) * (c.x - f.x)) l.pop();
      else break;
    }
    l.push(c);
  }
  return (
    l.pop(),
    i.length === 1 && l.length === 1 && i[0].x === l[0].x && i[0].y === l[0].y
      ? i
      : i.concat(l)
  );
}
var VT = Tv;
function Cv(n) {
  var i,
    l,
    o = "";
  if (typeof n == "string" || typeof n == "number") o += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var c = n.length;
      for (i = 0; i < c; i++)
        n[i] && (l = Cv(n[i])) && (o && (o += " "), (o += l));
    } else for (l in n) n[l] && (o && (o += " "), (o += l));
  return o;
}
function Nv() {
  for (var n, i, l = 0, o = "", c = arguments.length; l < c; l++)
    (n = arguments[l]) && (i = Cv(n)) && (o && (o += " "), (o += i));
  return o;
}
const yd = "-",
  BT = (n) => {
    const i = UT(n),
      { conflictingClassGroups: l, conflictingClassGroupModifiers: o } = n;
    return {
      getClassGroupId: (f) => {
        const p = f.split(yd);
        return (p[0] === "" && p.length !== 1 && p.shift(), Rv(p, i) || LT(f));
      },
      getConflictingClassGroupIds: (f, p) => {
        const m = l[f] || [];
        return p && o[f] ? [...m, ...o[f]] : m;
      },
    };
  },
  Rv = (n, i) => {
    if (n.length === 0) return i.classGroupId;
    const l = n[0],
      o = i.nextPart.get(l),
      c = o ? Rv(n.slice(1), o) : void 0;
    if (c) return c;
    if (i.validators.length === 0) return;
    const d = n.join(yd);
    return i.validators.find(({ validator: f }) => f(d))?.classGroupId;
  },
  g0 = /^\[(.+)\]$/,
  LT = (n) => {
    if (g0.test(n)) {
      const i = g0.exec(n)[1],
        l = i?.substring(0, i.indexOf(":"));
      if (l) return "arbitrary.." + l;
    }
  },
  UT = (n) => {
    const { theme: i, classGroups: l } = n,
      o = { nextPart: new Map(), validators: [] };
    for (const c in l) Vf(l[c], o, c, i);
    return o;
  },
  Vf = (n, i, l, o) => {
    n.forEach((c) => {
      if (typeof c == "string") {
        const d = c === "" ? i : y0(i, c);
        d.classGroupId = l;
        return;
      }
      if (typeof c == "function") {
        if (GT(c)) {
          Vf(c(o), i, l, o);
          return;
        }
        i.validators.push({ validator: c, classGroupId: l });
        return;
      }
      Object.entries(c).forEach(([d, f]) => {
        Vf(f, y0(i, d), l, o);
      });
    });
  },
  y0 = (n, i) => {
    let l = n;
    return (
      i.split(yd).forEach((o) => {
        (l.nextPart.has(o) ||
          l.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (l = l.nextPart.get(o)));
      }),
      l
    );
  },
  GT = (n) => n.isThemeGetter,
  YT = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let i = 0,
      l = new Map(),
      o = new Map();
    const c = (d, f) => {
      (l.set(d, f), i++, i > n && ((i = 0), (o = l), (l = new Map())));
    };
    return {
      get(d) {
        let f = l.get(d);
        if (f !== void 0) return f;
        if ((f = o.get(d)) !== void 0) return (c(d, f), f);
      },
      set(d, f) {
        l.has(d) ? l.set(d, f) : c(d, f);
      },
    };
  },
  Bf = "!",
  Lf = ":",
  qT = Lf.length,
  XT = (n) => {
    const { prefix: i, experimentalParseClassName: l } = n;
    let o = (c) => {
      const d = [];
      let f = 0,
        p = 0,
        m = 0,
        h;
      for (let A = 0; A < c.length; A++) {
        let D = c[A];
        if (f === 0 && p === 0) {
          if (D === Lf) {
            (d.push(c.slice(m, A)), (m = A + qT));
            continue;
          }
          if (D === "/") {
            h = A;
            continue;
          }
        }
        D === "[" ? f++ : D === "]" ? f-- : D === "(" ? p++ : D === ")" && p--;
      }
      const v = d.length === 0 ? c : c.substring(m),
        g = PT(v),
        b = g !== v,
        w = h && h > m ? h - m : void 0;
      return {
        modifiers: d,
        hasImportantModifier: b,
        baseClassName: g,
        maybePostfixModifierPosition: w,
      };
    };
    if (i) {
      const c = i + Lf,
        d = o;
      o = (f) =>
        f.startsWith(c)
          ? d(f.substring(c.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: f,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (l) {
      const c = o;
      o = (d) => l({ className: d, parseClassName: c });
    }
    return o;
  },
  PT = (n) =>
    n.endsWith(Bf)
      ? n.substring(0, n.length - 1)
      : n.startsWith(Bf)
        ? n.substring(1)
        : n,
  KT = (n) => {
    const i = Object.fromEntries(n.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const c = [];
      let d = [];
      return (
        o.forEach((f) => {
          f[0] === "[" || i[f] ? (c.push(...d.sort(), f), (d = [])) : d.push(f);
        }),
        c.push(...d.sort()),
        c
      );
    };
  },
  QT = (n) => ({
    cache: YT(n.cacheSize),
    parseClassName: XT(n),
    sortModifiers: KT(n),
    ...BT(n),
  }),
  ZT = /\s+/,
  FT = (n, i) => {
    const {
        parseClassName: l,
        getClassGroupId: o,
        getConflictingClassGroupIds: c,
        sortModifiers: d,
      } = i,
      f = [],
      p = n.trim().split(ZT);
    let m = "";
    for (let h = p.length - 1; h >= 0; h -= 1) {
      const v = p[h],
        {
          isExternal: g,
          modifiers: b,
          hasImportantModifier: w,
          baseClassName: A,
          maybePostfixModifierPosition: D,
        } = l(v);
      if (g) {
        m = v + (m.length > 0 ? " " + m : m);
        continue;
      }
      let z = !!D,
        O = o(z ? A.substring(0, D) : A);
      if (!O) {
        if (!z) {
          m = v + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((O = o(A)), !O)) {
          m = v + (m.length > 0 ? " " + m : m);
          continue;
        }
        z = !1;
      }
      const P = d(b).join(":"),
        L = w ? P + Bf : P,
        F = L + O;
      if (f.includes(F)) continue;
      f.push(F);
      const Z = c(O, z);
      for (let W = 0; W < Z.length; ++W) {
        const Q = Z[W];
        f.push(L + Q);
      }
      m = v + (m.length > 0 ? " " + m : m);
    }
    return m;
  };
function JT() {
  let n = 0,
    i,
    l,
    o = "";
  for (; n < arguments.length; )
    (i = arguments[n++]) && (l = Dv(i)) && (o && (o += " "), (o += l));
  return o;
}
const Dv = (n) => {
  if (typeof n == "string") return n;
  let i,
    l = "";
  for (let o = 0; o < n.length; o++)
    n[o] && (i = Dv(n[o])) && (l && (l += " "), (l += i));
  return l;
};
function WT(n, ...i) {
  let l,
    o,
    c,
    d = f;
  function f(m) {
    const h = i.reduce((v, g) => g(v), n());
    return ((l = QT(h)), (o = l.cache.get), (c = l.cache.set), (d = p), p(m));
  }
  function p(m) {
    const h = o(m);
    if (h) return h;
    const v = FT(m, l);
    return (c(m, v), v);
  }
  return function () {
    return d(JT.apply(null, arguments));
  };
}
const se = (n) => {
    const i = (l) => l[n] || [];
    return ((i.isThemeGetter = !0), i);
  },
  Ov = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  jv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  $T = /^\d+\/\d+$/,
  IT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  t5 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  e5 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  n5 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  a5 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  ls = (n) => $T.test(n),
  Tt = (n) => !!n && !Number.isNaN(Number(n)),
  ja = (n) => !!n && Number.isInteger(Number(n)),
  cf = (n) => n.endsWith("%") && Tt(n.slice(0, -1)),
  In = (n) => IT.test(n),
  i5 = () => !0,
  s5 = (n) => t5.test(n) && !e5.test(n),
  _v = () => !1,
  l5 = (n) => n5.test(n),
  o5 = (n) => a5.test(n),
  r5 = (n) => !nt(n) && !at(n),
  c5 = (n) => Ss(n, kv, _v),
  nt = (n) => Ov.test(n),
  ri = (n) => Ss(n, Vv, s5),
  uf = (n) => Ss(n, m5, Tt),
  v0 = (n) => Ss(n, zv, _v),
  u5 = (n) => Ss(n, Hv, o5),
  ur = (n) => Ss(n, Bv, l5),
  at = (n) => jv.test(n),
  Tl = (n) => ws(n, Vv),
  f5 = (n) => ws(n, p5),
  x0 = (n) => ws(n, zv),
  d5 = (n) => ws(n, kv),
  h5 = (n) => ws(n, Hv),
  fr = (n) => ws(n, Bv, !0),
  Ss = (n, i, l) => {
    const o = Ov.exec(n);
    return o ? (o[1] ? i(o[1]) : l(o[2])) : !1;
  },
  ws = (n, i, l = !1) => {
    const o = jv.exec(n);
    return o ? (o[1] ? i(o[1]) : l) : !1;
  },
  zv = (n) => n === "position" || n === "percentage",
  Hv = (n) => n === "image" || n === "url",
  kv = (n) => n === "length" || n === "size" || n === "bg-size",
  Vv = (n) => n === "length",
  m5 = (n) => n === "number",
  p5 = (n) => n === "family-name",
  Bv = (n) => n === "shadow",
  g5 = () => {
    const n = se("color"),
      i = se("font"),
      l = se("text"),
      o = se("font-weight"),
      c = se("tracking"),
      d = se("leading"),
      f = se("breakpoint"),
      p = se("container"),
      m = se("spacing"),
      h = se("radius"),
      v = se("shadow"),
      g = se("inset-shadow"),
      b = se("text-shadow"),
      w = se("drop-shadow"),
      A = se("blur"),
      D = se("perspective"),
      z = se("aspect"),
      O = se("ease"),
      P = se("animate"),
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      Z = () => [...F(), at, nt],
      W = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      G = () => [at, nt, m],
      ot = () => [ls, "full", "auto", ...G()],
      ft = () => [ja, "none", "subgrid", at, nt],
      wt = () => ["auto", { span: ["full", ja, at, nt] }, ja, at, nt],
      pt = () => [ja, "auto", at, nt],
      yt = () => ["auto", "min", "max", "fr", at, nt],
      vt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      bt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      N = () => ["auto", ...G()],
      B = () => [
        ls,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...G(),
      ],
      H = () => [n, at, nt],
      et = () => [...F(), x0, v0, { position: [at, nt] }],
      lt = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      E = () => ["auto", "cover", "contain", d5, c5, { size: [at, nt] }],
      q = () => [cf, Tl, ri],
      Y = () => ["", "none", "full", h, at, nt],
      J = () => ["", Tt, Tl, ri],
      I = () => ["solid", "dashed", "dotted", "double"],
      rt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      it = () => [Tt, cf, x0, v0],
      ht = () => ["", "none", A, at, nt],
      Nt = () => ["none", Tt, at, nt],
      ce = () => ["none", Tt, at, nt],
      Se = () => [Tt, at, nt],
      ue = () => [ls, "full", ...G()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [In],
        breakpoint: [In],
        color: [i5],
        container: [In],
        "drop-shadow": [In],
        ease: ["in", "out", "in-out"],
        font: [r5],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [In],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [In],
        shadow: [In],
        spacing: ["px", Tt],
        text: [In],
        "text-shadow": [In],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", ls, nt, at, z] }],
        container: ["container"],
        columns: [{ columns: [Tt, nt, at, p] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: Z() }],
        overflow: [{ overflow: W() }],
        "overflow-x": [{ "overflow-x": W() }],
        "overflow-y": [{ "overflow-y": W() }],
        overscroll: [{ overscroll: Q() }],
        "overscroll-x": [{ "overscroll-x": Q() }],
        "overscroll-y": [{ "overscroll-y": Q() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ot() }],
        "inset-x": [{ "inset-x": ot() }],
        "inset-y": [{ "inset-y": ot() }],
        start: [{ start: ot() }],
        end: [{ end: ot() }],
        top: [{ top: ot() }],
        right: [{ right: ot() }],
        bottom: [{ bottom: ot() }],
        left: [{ left: ot() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ja, "auto", at, nt] }],
        basis: [{ basis: [ls, "full", "auto", p, ...G()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Tt, ls, "auto", "initial", "none", nt] }],
        grow: [{ grow: ["", Tt, at, nt] }],
        shrink: [{ shrink: ["", Tt, at, nt] }],
        order: [{ order: [ja, "first", "last", "none", at, nt] }],
        "grid-cols": [{ "grid-cols": ft() }],
        "col-start-end": [{ col: wt() }],
        "col-start": [{ "col-start": pt() }],
        "col-end": [{ "col-end": pt() }],
        "grid-rows": [{ "grid-rows": ft() }],
        "row-start-end": [{ row: wt() }],
        "row-start": [{ "row-start": pt() }],
        "row-end": [{ "row-end": pt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": yt() }],
        "auto-rows": [{ "auto-rows": yt() }],
        gap: [{ gap: G() }],
        "gap-x": [{ "gap-x": G() }],
        "gap-y": [{ "gap-y": G() }],
        "justify-content": [{ justify: [...vt(), "normal"] }],
        "justify-items": [{ "justify-items": [...bt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...bt()] }],
        "align-content": [{ content: ["normal", ...vt()] }],
        "align-items": [{ items: [...bt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...bt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": vt() }],
        "place-items": [{ "place-items": [...bt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...bt()] }],
        p: [{ p: G() }],
        px: [{ px: G() }],
        py: [{ py: G() }],
        ps: [{ ps: G() }],
        pe: [{ pe: G() }],
        pt: [{ pt: G() }],
        pr: [{ pr: G() }],
        pb: [{ pb: G() }],
        pl: [{ pl: G() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        "space-x": [{ "space-x": G() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": G() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: B() }],
        w: [{ w: [p, "screen", ...B()] }],
        "min-w": [{ "min-w": [p, "screen", "none", ...B()] }],
        "max-w": [
          { "max-w": [p, "screen", "none", "prose", { screen: [f] }, ...B()] },
        ],
        h: [{ h: ["screen", "lh", ...B()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...B()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...B()] }],
        "font-size": [{ text: ["base", l, Tl, ri] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, at, uf] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              cf,
              nt,
            ],
          },
        ],
        "font-family": [{ font: [f5, nt, i] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [c, at, nt] }],
        "line-clamp": [{ "line-clamp": [Tt, "none", at, uf] }],
        leading: [{ leading: [d, ...G()] }],
        "list-image": [{ "list-image": ["none", at, nt] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", at, nt] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: H() }],
        "text-color": [{ text: H() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...I(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Tt, "from-font", "auto", at, ri] },
        ],
        "text-decoration-color": [{ decoration: H() }],
        "underline-offset": [{ "underline-offset": [Tt, "auto", at, nt] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: G() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              at,
              nt,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", at, nt] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: et() }],
        "bg-repeat": [{ bg: lt() }],
        "bg-size": [{ bg: E() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ja,
                  at,
                  nt,
                ],
                radial: ["", at, nt],
                conic: [ja, at, nt],
              },
              h5,
              u5,
            ],
          },
        ],
        "bg-color": [{ bg: H() }],
        "gradient-from-pos": [{ from: q() }],
        "gradient-via-pos": [{ via: q() }],
        "gradient-to-pos": [{ to: q() }],
        "gradient-from": [{ from: H() }],
        "gradient-via": [{ via: H() }],
        "gradient-to": [{ to: H() }],
        rounded: [{ rounded: Y() }],
        "rounded-s": [{ "rounded-s": Y() }],
        "rounded-e": [{ "rounded-e": Y() }],
        "rounded-t": [{ "rounded-t": Y() }],
        "rounded-r": [{ "rounded-r": Y() }],
        "rounded-b": [{ "rounded-b": Y() }],
        "rounded-l": [{ "rounded-l": Y() }],
        "rounded-ss": [{ "rounded-ss": Y() }],
        "rounded-se": [{ "rounded-se": Y() }],
        "rounded-ee": [{ "rounded-ee": Y() }],
        "rounded-es": [{ "rounded-es": Y() }],
        "rounded-tl": [{ "rounded-tl": Y() }],
        "rounded-tr": [{ "rounded-tr": Y() }],
        "rounded-br": [{ "rounded-br": Y() }],
        "rounded-bl": [{ "rounded-bl": Y() }],
        "border-w": [{ border: J() }],
        "border-w-x": [{ "border-x": J() }],
        "border-w-y": [{ "border-y": J() }],
        "border-w-s": [{ "border-s": J() }],
        "border-w-e": [{ "border-e": J() }],
        "border-w-t": [{ "border-t": J() }],
        "border-w-r": [{ "border-r": J() }],
        "border-w-b": [{ "border-b": J() }],
        "border-w-l": [{ "border-l": J() }],
        "divide-x": [{ "divide-x": J() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": J() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...I(), "hidden", "none"] }],
        "divide-style": [{ divide: [...I(), "hidden", "none"] }],
        "border-color": [{ border: H() }],
        "border-color-x": [{ "border-x": H() }],
        "border-color-y": [{ "border-y": H() }],
        "border-color-s": [{ "border-s": H() }],
        "border-color-e": [{ "border-e": H() }],
        "border-color-t": [{ "border-t": H() }],
        "border-color-r": [{ "border-r": H() }],
        "border-color-b": [{ "border-b": H() }],
        "border-color-l": [{ "border-l": H() }],
        "divide-color": [{ divide: H() }],
        "outline-style": [{ outline: [...I(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Tt, at, nt] }],
        "outline-w": [{ outline: ["", Tt, Tl, ri] }],
        "outline-color": [{ outline: H() }],
        shadow: [{ shadow: ["", "none", v, fr, ur] }],
        "shadow-color": [{ shadow: H() }],
        "inset-shadow": [{ "inset-shadow": ["none", g, fr, ur] }],
        "inset-shadow-color": [{ "inset-shadow": H() }],
        "ring-w": [{ ring: J() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: H() }],
        "ring-offset-w": [{ "ring-offset": [Tt, ri] }],
        "ring-offset-color": [{ "ring-offset": H() }],
        "inset-ring-w": [{ "inset-ring": J() }],
        "inset-ring-color": [{ "inset-ring": H() }],
        "text-shadow": [{ "text-shadow": ["none", b, fr, ur] }],
        "text-shadow-color": [{ "text-shadow": H() }],
        opacity: [{ opacity: [Tt, at, nt] }],
        "mix-blend": [
          { "mix-blend": [...rt(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": rt() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Tt] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": it() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": it() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": H() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": H() }],
        "mask-image-t-from-pos": [{ "mask-t-from": it() }],
        "mask-image-t-to-pos": [{ "mask-t-to": it() }],
        "mask-image-t-from-color": [{ "mask-t-from": H() }],
        "mask-image-t-to-color": [{ "mask-t-to": H() }],
        "mask-image-r-from-pos": [{ "mask-r-from": it() }],
        "mask-image-r-to-pos": [{ "mask-r-to": it() }],
        "mask-image-r-from-color": [{ "mask-r-from": H() }],
        "mask-image-r-to-color": [{ "mask-r-to": H() }],
        "mask-image-b-from-pos": [{ "mask-b-from": it() }],
        "mask-image-b-to-pos": [{ "mask-b-to": it() }],
        "mask-image-b-from-color": [{ "mask-b-from": H() }],
        "mask-image-b-to-color": [{ "mask-b-to": H() }],
        "mask-image-l-from-pos": [{ "mask-l-from": it() }],
        "mask-image-l-to-pos": [{ "mask-l-to": it() }],
        "mask-image-l-from-color": [{ "mask-l-from": H() }],
        "mask-image-l-to-color": [{ "mask-l-to": H() }],
        "mask-image-x-from-pos": [{ "mask-x-from": it() }],
        "mask-image-x-to-pos": [{ "mask-x-to": it() }],
        "mask-image-x-from-color": [{ "mask-x-from": H() }],
        "mask-image-x-to-color": [{ "mask-x-to": H() }],
        "mask-image-y-from-pos": [{ "mask-y-from": it() }],
        "mask-image-y-to-pos": [{ "mask-y-to": it() }],
        "mask-image-y-from-color": [{ "mask-y-from": H() }],
        "mask-image-y-to-color": [{ "mask-y-to": H() }],
        "mask-image-radial": [{ "mask-radial": [at, nt] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": it() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": it() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": H() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": H() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": F() }],
        "mask-image-conic-pos": [{ "mask-conic": [Tt] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": it() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": it() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": H() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": H() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: et() }],
        "mask-repeat": [{ mask: lt() }],
        "mask-size": [{ mask: E() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", at, nt] }],
        filter: [{ filter: ["", "none", at, nt] }],
        blur: [{ blur: ht() }],
        brightness: [{ brightness: [Tt, at, nt] }],
        contrast: [{ contrast: [Tt, at, nt] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", w, fr, ur] }],
        "drop-shadow-color": [{ "drop-shadow": H() }],
        grayscale: [{ grayscale: ["", Tt, at, nt] }],
        "hue-rotate": [{ "hue-rotate": [Tt, at, nt] }],
        invert: [{ invert: ["", Tt, at, nt] }],
        saturate: [{ saturate: [Tt, at, nt] }],
        sepia: [{ sepia: ["", Tt, at, nt] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", at, nt] }],
        "backdrop-blur": [{ "backdrop-blur": ht() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Tt, at, nt] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Tt, at, nt] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Tt, at, nt] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Tt, at, nt] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Tt, at, nt] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Tt, at, nt] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Tt, at, nt] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Tt, at, nt] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": G() }],
        "border-spacing-x": [{ "border-spacing-x": G() }],
        "border-spacing-y": [{ "border-spacing-y": G() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              at,
              nt,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Tt, "initial", at, nt] }],
        ease: [{ ease: ["linear", "initial", O, at, nt] }],
        delay: [{ delay: [Tt, at, nt] }],
        animate: [{ animate: ["none", P, at, nt] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [D, at, nt] }],
        "perspective-origin": [{ "perspective-origin": Z() }],
        rotate: [{ rotate: Nt() }],
        "rotate-x": [{ "rotate-x": Nt() }],
        "rotate-y": [{ "rotate-y": Nt() }],
        "rotate-z": [{ "rotate-z": Nt() }],
        scale: [{ scale: ce() }],
        "scale-x": [{ "scale-x": ce() }],
        "scale-y": [{ "scale-y": ce() }],
        "scale-z": [{ "scale-z": ce() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Se() }],
        "skew-x": [{ "skew-x": Se() }],
        "skew-y": [{ "skew-y": Se() }],
        transform: [{ transform: [at, nt, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Z() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ue() }],
        "translate-x": [{ "translate-x": ue() }],
        "translate-y": [{ "translate-y": ue() }],
        "translate-z": [{ "translate-z": ue() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: H() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: H() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              at,
              nt,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": G() }],
        "scroll-mx": [{ "scroll-mx": G() }],
        "scroll-my": [{ "scroll-my": G() }],
        "scroll-ms": [{ "scroll-ms": G() }],
        "scroll-me": [{ "scroll-me": G() }],
        "scroll-mt": [{ "scroll-mt": G() }],
        "scroll-mr": [{ "scroll-mr": G() }],
        "scroll-mb": [{ "scroll-mb": G() }],
        "scroll-ml": [{ "scroll-ml": G() }],
        "scroll-p": [{ "scroll-p": G() }],
        "scroll-px": [{ "scroll-px": G() }],
        "scroll-py": [{ "scroll-py": G() }],
        "scroll-ps": [{ "scroll-ps": G() }],
        "scroll-pe": [{ "scroll-pe": G() }],
        "scroll-pt": [{ "scroll-pt": G() }],
        "scroll-pr": [{ "scroll-pr": G() }],
        "scroll-pb": [{ "scroll-pb": G() }],
        "scroll-pl": [{ "scroll-pl": G() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", at, nt],
          },
        ],
        fill: [{ fill: ["none", ...H()] }],
        "stroke-w": [{ stroke: [Tt, Tl, ri, uf] }],
        stroke: [{ stroke: ["none", ...H()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
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
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  y5 = WT(g5);
function Vr(...n) {
  return y5(Nv(n));
}
function v5({ delayDuration: n = 0, ...i }) {
  return S.jsx(VT, {
    "data-loc": "client/src/components/ui/tooltip.tsx:11",
    "data-slot": "tooltip-provider",
    delayDuration: n,
    ...i,
  });
}
const b0 = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  S0 = Nv,
  x5 = (n, i) => (l) => {
    var o;
    if (i?.variants == null) return S0(n, l?.class, l?.className);
    const { variants: c, defaultVariants: d } = i,
      f = Object.keys(c).map((h) => {
        const v = l?.[h],
          g = d?.[h];
        if (v === null) return null;
        const b = b0(v) || b0(g);
        return c[h][b];
      }),
      p =
        l &&
        Object.entries(l).reduce((h, v) => {
          let [g, b] = v;
          return (b === void 0 || (h[g] = b), h);
        }, {}),
      m =
        i == null || (o = i.compoundVariants) === null || o === void 0
          ? void 0
          : o.reduce((h, v) => {
              let { class: g, className: b, ...w } = v;
              return Object.entries(w).every((A) => {
                let [D, z] = A;
                return Array.isArray(z)
                  ? z.includes({ ...d, ...p }[D])
                  : { ...d, ...p }[D] === z;
              })
                ? [...h, g, b]
                : h;
            }, []);
    return S0(n, f, m, l?.class, l?.className);
  },
  b5 = x5(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  );
function S5({ className: n, variant: i, size: l, asChild: o = !1, ...c }) {
  const d = o ? OS : "button";
  return S.jsx(d, {
    "data-loc": "client/src/components/ui/button.tsx:52",
    "data-slot": "button",
    className: Vr(b5({ variant: i, size: l, className: n })),
    ...c,
  });
}
function w5({ className: n, ...i }) {
  return S.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:7",
    "data-slot": "card",
    className: Vr(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      n,
    ),
    ...i,
  });
}
function T5({ className: n, ...i }) {
  return S.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:66",
    "data-slot": "card-content",
    className: Vr("px-6", n),
    ...i,
  });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A5 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Lv = (...n) => n.filter((i, l, o) => !!i && o.indexOf(i) === l).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var E5 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M5 = C.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: o,
      className: c = "",
      children: d,
      iconNode: f,
      ...p
    },
    m,
  ) =>
    C.createElement(
      "svg",
      {
        ref: m,
        ...E5,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: o ? (Number(l) * 24) / Number(i) : l,
        className: Lv("lucide", c),
        ...p,
      },
      [
        ...f.map(([h, v]) => C.createElement(h, v)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gt = (n, i) => {
  const l = C.forwardRef(({ className: o, ...c }, d) =>
    C.createElement(M5, {
      ref: d,
      iconNode: i,
      className: Lv(`lucide-${A5(n)}`, o),
      ...c,
    }),
  );
  return ((l.displayName = `${n}`), l);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C5 = Gt("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N5 = Gt("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R5 = Gt("Biohazard", [
  ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
  [
    "path",
    { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" },
  ],
  ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
  [
    "path",
    {
      d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",
      key: "wtwa5u",
    },
  ],
  ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
  [
    "path",
    {
      d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",
      key: "m7qszh",
    },
  ],
  ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
  ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
  ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
  ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D5 = Gt("BookOpenCheck", [
  ["path", { d: "M12 21V7", key: "gj6g52" }],
  ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
  [
    "path",
    {
      d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",
      key: "8arnkb",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uv = Gt("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O5 = Gt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j5 = Gt("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _5 = Gt("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = Gt("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa",
    },
  ],
  [
    "path",
    {
      d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
      key: "14pb5j",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ff = Gt("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z5 = Gt("FileCheck2", [
  [
    "path",
    { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gv = Gt("Hospital", [
  ["path", { d: "M12 6v4", key: "16clxf" }],
  ["path", { d: "M14 14h-4", key: "esezmu" }],
  ["path", { d: "M14 18h-4", key: "16mqa2" }],
  ["path", { d: "M14 8h-4", key: "z8ypaz" }],
  [
    "path",
    {
      d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
      key: "b1k337",
    },
  ],
  ["path", { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18", key: "16g51d" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H5 = Gt("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k5 = Gt("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V5 = Gt("Network", [
  [
    "rect",
    { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
  ],
  [
    "rect",
    { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
  ],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yv = Gt("PackageCheck", [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h",
    },
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B5 = Gt("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L5 = Gt("ScrollText", [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qv = Gt("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U5 = Gt("Ship", [
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "iegodh",
    },
  ],
  [
    "path",
    {
      d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",
      key: "fp8vka",
    },
  ],
  ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G5 = Gt("Siren", [
  ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
  [
    "path",
    {
      d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
      key: "1b4s83",
    },
  ],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y5 = Gt("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q5 = Gt("Stethoscope", [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  [
    "path",
    {
      d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      key: "rb5t3r",
    },
  ],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X5 = Gt("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P5 = Gt("Wind", [
  ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
  ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
  ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }],
]);
function K5(n, i) {
  if (n instanceof RegExp) return { keys: !1, pattern: n };
  var l,
    o,
    c,
    d,
    f = [],
    p = "",
    m = n.split("/");
  for (m[0] || m.shift(); (c = m.shift()); )
    ((l = c[0]),
      l === "*"
        ? (f.push(l), (p += c[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : l === ":"
          ? ((o = c.indexOf("?", 1)),
            (d = c.indexOf(".", 1)),
            f.push(c.substring(1, ~o ? o : ~d ? d : c.length)),
            (p += ~o && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (p += (~o ? "?" : "") + "\\" + c.substring(d)))
          : (p += "/" + c));
  return {
    keys: f,
    pattern: new RegExp("^" + p + (i ? "(?=$|/)" : "/?$"), "i"),
  };
}
var df = { exports: {} },
  hf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var T0;
function Q5() {
  if (T0) return hf;
  T0 = 1;
  var n = Rr();
  function i(g, b) {
    return (g === b && (g !== 0 || 1 / g === 1 / b)) || (g !== g && b !== b);
  }
  var l = typeof Object.is == "function" ? Object.is : i,
    o = n.useState,
    c = n.useEffect,
    d = n.useLayoutEffect,
    f = n.useDebugValue;
  function p(g, b) {
    var w = b(),
      A = o({ inst: { value: w, getSnapshot: b } }),
      D = A[0].inst,
      z = A[1];
    return (
      d(
        function () {
          ((D.value = w), (D.getSnapshot = b), m(D) && z({ inst: D }));
        },
        [g, w, b],
      ),
      c(
        function () {
          return (
            m(D) && z({ inst: D }),
            g(function () {
              m(D) && z({ inst: D });
            })
          );
        },
        [g],
      ),
      f(w),
      w
    );
  }
  function m(g) {
    var b = g.getSnapshot;
    g = g.value;
    try {
      var w = b();
      return !l(g, w);
    } catch {
      return !0;
    }
  }
  function h(g, b) {
    return b();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : p;
  return (
    (hf.useSyncExternalStore =
      n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : v),
    hf
  );
}
var A0;
function Z5() {
  return (A0 || ((A0 = 1), (df.exports = Q5())), df.exports);
}
var F5 = Z5();
const J5 = J2.useInsertionEffect,
  W5 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $5 = W5 ? C.useLayoutEffect : C.useEffect,
  I5 = J5 || $5,
  Xv = (n) => {
    const i = C.useRef([n, (...l) => i[0](...l)]).current;
    return (
      I5(() => {
        i[0] = n;
      }),
      i[1]
    );
  },
  tA = "popstate",
  vd = "pushState",
  xd = "replaceState",
  eA = "hashchange",
  E0 = [tA, vd, xd, eA],
  nA = (n) => {
    for (const i of E0) addEventListener(i, n);
    return () => {
      for (const i of E0) removeEventListener(i, n);
    };
  },
  Pv = (n, i) => F5.useSyncExternalStore(nA, n, i),
  aA = () => location.search,
  iA = ({ ssrSearch: n = "" } = {}) => Pv(aA, () => n),
  M0 = () => location.pathname,
  sA = ({ ssrPath: n } = {}) => Pv(M0, n ? () => n : M0),
  lA = (n, { replace: i = !1, state: l = null } = {}) =>
    history[i ? xd : vd](l, "", n),
  oA = (n = {}) => [sA(n), lA],
  C0 = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[C0] > "u") {
  for (const n of [vd, xd]) {
    const i = history[n];
    history[n] = function () {
      const l = i.apply(this, arguments),
        o = new Event(n);
      return ((o.arguments = arguments), dispatchEvent(o), l);
    };
  }
  Object.defineProperty(window, C0, { value: !0 });
}
const rA = (n, i) =>
    i.toLowerCase().indexOf(n.toLowerCase())
      ? "~" + i
      : i.slice(n.length) || "/",
  Kv = (n = "") => (n === "/" ? "" : n),
  cA = (n, i) => (n[0] === "~" ? n.slice(1) : Kv(i) + n),
  uA = (n = "", i) => rA(N0(Kv(n)), N0(i)),
  N0 = (n) => {
    try {
      return decodeURI(n);
    } catch {
      return n;
    }
  },
  Qv = {
    hook: oA,
    searchHook: iA,
    parser: K5,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (n) => n,
  },
  Zv = C.createContext(Qv),
  Gl = () => C.useContext(Zv),
  Fv = {},
  Jv = C.createContext(Fv),
  fA = () => C.useContext(Jv),
  Br = (n) => {
    const [i, l] = n.hook(n);
    return [uA(n.base, i), Xv((o, c) => l(cA(o, n.base), c))];
  },
  dA = () => Br(Gl()),
  Wv = (n, i, l, o) => {
    const { pattern: c, keys: d } =
        i instanceof RegExp ? { keys: !1, pattern: i } : n(i || "*", o),
      f = c.exec(l) || [],
      [p, ...m] = f;
    return p !== void 0
      ? [
          !0,
          (() => {
            const h =
              d !== !1
                ? Object.fromEntries(d.map((g, b) => [g, m[b]]))
                : f.groups;
            let v = { ...m };
            return (h && Object.assign(v, h), v);
          })(),
          ...(o ? [p] : []),
        ]
      : [!1, null];
  },
  hA = ({ children: n, ...i }) => {
    const l = Gl(),
      o = i.hook ? Qv : l;
    let c = o;
    const [d, f] = i.ssrPath?.split("?") ?? [];
    (f && ((i.ssrSearch = f), (i.ssrPath = d)),
      (i.hrefs = i.hrefs ?? i.hook?.hrefs));
    let p = C.useRef({}),
      m = p.current,
      h = m;
    for (let v in o) {
      const g = v === "base" ? o[v] + (i[v] || "") : i[v] || o[v];
      (m === h && g !== h[v] && (p.current = h = { ...h }),
        (h[v] = g),
        (g !== o[v] || g !== c[v]) && (c = h));
    }
    return C.createElement(Zv.Provider, { value: c, children: n });
  },
  R0 = ({ children: n, component: i }, l) =>
    i ? C.createElement(i, { params: l }) : typeof n == "function" ? n(l) : n,
  mA = (n) => {
    let i = C.useRef(Fv);
    const l = i.current;
    return (i.current =
      Object.keys(n).length !== Object.keys(l).length ||
      Object.entries(n).some(([o, c]) => c !== l[o])
        ? n
        : l);
  },
  mf = ({ path: n, nest: i, match: l, ...o }) => {
    const c = Gl(),
      [d] = Br(c),
      [f, p, m] = l ?? Wv(c.parser, n, d, i),
      h = mA({ ...fA(), ...p });
    if (!f) return null;
    const v = m ? C.createElement(hA, { base: m }, R0(o, h)) : R0(o, h);
    return C.createElement(Jv.Provider, { value: h, children: v });
  };
C.forwardRef((n, i) => {
  const l = Gl(),
    [o, c] = Br(l),
    {
      to: d = "",
      href: f = d,
      onClick: p,
      asChild: m,
      children: h,
      className: v,
      replace: g,
      state: b,
      ...w
    } = n,
    A = Xv((z) => {
      z.ctrlKey ||
        z.metaKey ||
        z.altKey ||
        z.shiftKey ||
        z.button !== 0 ||
        (p?.(z), z.defaultPrevented || (z.preventDefault(), c(f, n)));
    }),
    D = l.hrefs(f[0] === "~" ? f.slice(1) : l.base + f, l);
  return m && C.isValidElement(h)
    ? C.cloneElement(h, { onClick: A, href: D })
    : C.createElement("a", {
        ...w,
        onClick: A,
        href: D,
        className: v?.call ? v(o === f) : v,
        children: h,
        ref: i,
      });
});
const Uf = (n) =>
    Array.isArray(n)
      ? n.flatMap((i) => Uf(i && i.type === C.Fragment ? i.props.children : i))
      : [n],
  pA = ({ children: n, location: i }) => {
    const l = Gl(),
      [o] = Br(l);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      Uf(n).forEach((d) => {
        if (C.isValidElement(d) && d.props.path) {
          const f = d.props.path;
          window.__WOUTER_ROUTES__.includes(f) ||
            window.__WOUTER_ROUTES__.push(f);
        }
      }));
    for (const c of Uf(n)) {
      let d = 0;
      if (
        C.isValidElement(c) &&
        (d = Wv(l.parser, c.props.path, i || o, c.props.nest))[0]
      )
        return C.cloneElement(c, { match: d });
    }
    return null;
  };
function D0() {
  const [, n] = dA(),
    i = () => {
      n("/");
    };
  return S.jsx("div", {
    "data-loc": "client/src/pages/NotFound.tsx:14",
    className:
      "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
    children: S.jsx(w5, {
      "data-loc": "client/src/pages/NotFound.tsx:15",
      className:
        "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
      children: S.jsxs(T5, {
        "data-loc": "client/src/pages/NotFound.tsx:16",
        className: "pt-8 pb-8 text-center",
        children: [
          S.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:17",
            className: "flex justify-center mb-6",
            children: S.jsxs("div", {
              "data-loc": "client/src/pages/NotFound.tsx:18",
              className: "relative",
              children: [
                S.jsx("div", {
                  "data-loc": "client/src/pages/NotFound.tsx:19",
                  className:
                    "absolute inset-0 bg-red-100 rounded-full animate-pulse",
                }),
                S.jsx(j5, {
                  "data-loc": "client/src/pages/NotFound.tsx:20",
                  className: "relative h-16 w-16 text-red-500",
                }),
              ],
            }),
          }),
          S.jsx("h1", {
            "data-loc": "client/src/pages/NotFound.tsx:24",
            className: "text-4xl font-bold text-slate-900 mb-2",
            children: "404",
          }),
          S.jsx("h2", {
            "data-loc": "client/src/pages/NotFound.tsx:26",
            className: "text-xl font-semibold text-slate-700 mb-4",
            children: "Page Not Found",
          }),
          S.jsxs("p", {
            "data-loc": "client/src/pages/NotFound.tsx:30",
            className: "text-slate-600 mb-8 leading-relaxed",
            children: [
              "Sorry, the page you are looking for doesn't exist.",
              S.jsx("br", { "data-loc": "client/src/pages/NotFound.tsx:32" }),
              "It may have been moved or deleted.",
            ],
          }),
          S.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:36",
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: S.jsxs(S5, {
              "data-loc": "client/src/pages/NotFound.tsx:37",
              onClick: i,
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                S.jsx(H5, {
                  "data-loc": "client/src/pages/NotFound.tsx:41",
                  className: "w-4 h-4 mr-2",
                }),
                "Go Home",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
class gA extends C.Component {
  constructor(i) {
    (super(i), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(i) {
    return { hasError: !0, error: i };
  }
  render() {
    return this.state.hasError
      ? S.jsx("div", {
          "data-loc": "client/src/components/ErrorBoundary.tsx:27",
          className:
            "flex items-center justify-center min-h-screen p-8 bg-background",
          children: S.jsxs("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:28",
            className: "flex flex-col items-center w-full max-w-2xl p-8",
            children: [
              S.jsx(X5, {
                "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                size: 48,
                className: "text-destructive mb-6 flex-shrink-0",
              }),
              S.jsx("h2", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                className: "text-xl mb-4",
                children: "An unexpected error occurred.",
              }),
              S.jsx("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                children: S.jsx("pre", {
                  "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                  className:
                    "text-sm text-muted-foreground whitespace-break-spaces",
                  children: this.state.error?.stack,
                }),
              }),
              S.jsxs("button", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                onClick: () => window.location.reload(),
                className: Vr(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer",
                ),
                children: [
                  S.jsx(B5, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                    size: 16,
                  }),
                  "Reload Page",
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const yA = C.createContext(void 0);
function vA({ children: n, defaultTheme: i = "light", switchable: l = !1 }) {
  const [o, c] = C.useState(() => (l && localStorage.getItem("theme")) || i);
  C.useEffect(() => {
    const f = document.documentElement;
    (o === "dark" ? f.classList.add("dark") : f.classList.remove("dark"),
      l && localStorage.setItem("theme", o));
  }, [o, l]);
  const d = l
    ? () => {
        c((f) => (f === "light" ? "dark" : "light"));
      }
    : void 0;
  return S.jsx(yA.Provider, {
    "data-loc": "client/src/contexts/ThemeContext.tsx:52",
    value: { theme: o, toggleTheme: d, switchable: l },
    children: n,
  });
}
const $v = C.createContext({});
function xA(n) {
  const i = C.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const bd = typeof window < "u",
  bA = bd ? C.useLayoutEffect : C.useEffect,
  Sd = C.createContext(null);
function wd(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function Td(n, i) {
  const l = n.indexOf(i);
  l > -1 && n.splice(l, 1);
}
const aa = (n, i, l) => (l > i ? i : l < n ? n : l);
let Ad = () => {};
const ia = {},
  Iv = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function tx(n) {
  return typeof n == "object" && n !== null;
}
const ex = (n) => /^0[^.\s]+$/u.test(n);
function Ed(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const un = (n) => n,
  SA = (n, i) => (l) => i(n(l)),
  Yl = (...n) => n.reduce(SA),
  zl = (n, i, l) => {
    const o = i - n;
    return o === 0 ? 1 : (l - n) / o;
  };
class Md {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (wd(this.subscriptions, i), () => Td(this.subscriptions, i));
  }
  notify(i, l, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, l, o);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(i, l, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Rn = (n) => n * 1e3,
  cn = (n) => n / 1e3;
function nx(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const ax = (n, i, l) =>
    (((1 - 3 * l + 3 * i) * n + (3 * l - 6 * i)) * n + 3 * i) * n,
  wA = 1e-7,
  TA = 12;
function AA(n, i, l, o, c) {
  let d,
    f,
    p = 0;
  do ((f = i + (l - i) / 2), (d = ax(f, o, c) - n), d > 0 ? (l = f) : (i = f));
  while (Math.abs(d) > wA && ++p < TA);
  return f;
}
function ql(n, i, l, o) {
  if (n === i && l === o) return un;
  const c = (d) => AA(d, 0, 1, n, l);
  return (d) => (d === 0 || d === 1 ? d : ax(c(d), i, o));
}
const ix = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  sx = (n) => (i) => 1 - n(1 - i),
  lx = ql(0.33, 1.53, 0.69, 0.99),
  Cd = sx(lx),
  ox = ix(Cd),
  rx = (n) =>
    (n *= 2) < 1 ? 0.5 * Cd(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  Nd = (n) => 1 - Math.sin(Math.acos(n)),
  cx = sx(Nd),
  ux = ix(Nd),
  EA = ql(0.42, 0, 1, 1),
  MA = ql(0, 0, 0.58, 1),
  fx = ql(0.42, 0, 0.58, 1),
  CA = (n) => Array.isArray(n) && typeof n[0] != "number",
  dx = (n) => Array.isArray(n) && typeof n[0] == "number",
  NA = {
    linear: un,
    easeIn: EA,
    easeInOut: fx,
    easeOut: MA,
    circIn: Nd,
    circInOut: ux,
    circOut: cx,
    backIn: Cd,
    backInOut: ox,
    backOut: lx,
    anticipate: rx,
  },
  RA = (n) => typeof n == "string",
  O0 = (n) => {
    if (dx(n)) {
      Ad(n.length === 4);
      const [i, l, o, c] = n;
      return ql(i, l, o, c);
    } else if (RA(n)) return NA[n];
    return n;
  },
  dr = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function DA(n, i) {
  let l = new Set(),
    o = new Set(),
    c = !1,
    d = !1;
  const f = new WeakSet();
  let p = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(v) {
    (f.has(v) && (h.schedule(v), n()), v(p));
  }
  const h = {
    schedule: (v, g = !1, b = !1) => {
      const A = b && c ? l : o;
      return (g && f.add(v), A.has(v) || A.add(v), v);
    },
    cancel: (v) => {
      (o.delete(v), f.delete(v));
    },
    process: (v) => {
      if (((p = v), c)) {
        d = !0;
        return;
      }
      ((c = !0),
        ([l, o] = [o, l]),
        l.forEach(m),
        l.clear(),
        (c = !1),
        d && ((d = !1), h.process(v)));
    },
  };
  return h;
}
const OA = 40;
function hx(n, i) {
  let l = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (l = !0),
    f = dr.reduce((L, F) => ((L[F] = DA(d)), L), {}),
    {
      setup: p,
      read: m,
      resolveKeyframes: h,
      preUpdate: v,
      update: g,
      preRender: b,
      render: w,
      postRender: A,
    } = f,
    D = () => {
      const L = ia.useManualTiming ? c.timestamp : performance.now();
      ((l = !1),
        ia.useManualTiming ||
          (c.delta = o ? 1e3 / 60 : Math.max(Math.min(L - c.timestamp, OA), 1)),
        (c.timestamp = L),
        (c.isProcessing = !0),
        p.process(c),
        m.process(c),
        h.process(c),
        v.process(c),
        g.process(c),
        b.process(c),
        w.process(c),
        A.process(c),
        (c.isProcessing = !1),
        l && i && ((o = !1), n(D)));
    },
    z = () => {
      ((l = !0), (o = !0), c.isProcessing || n(D));
    };
  return {
    schedule: dr.reduce((L, F) => {
      const Z = f[F];
      return (
        (L[F] = (W, Q = !1, G = !1) => (l || z(), Z.schedule(W, Q, G))),
        L
      );
    }, {}),
    cancel: (L) => {
      for (let F = 0; F < dr.length; F++) f[dr[F]].cancel(L);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: Xt,
  cancel: ka,
  state: ge,
  steps: pf,
} = hx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : un, !0);
let gr;
function jA() {
  gr = void 0;
}
const Le = {
    now: () => (
      gr === void 0 &&
        Le.set(
          ge.isProcessing || ia.useManualTiming
            ? ge.timestamp
            : performance.now(),
        ),
      gr
    ),
    set: (n) => {
      ((gr = n), queueMicrotask(jA));
    },
  },
  mx = (n) => (i) => typeof i == "string" && i.startsWith(n),
  Rd = mx("--"),
  _A = mx("var(--"),
  Dd = (n) => (_A(n) ? zA.test(n.split("/*")[0].trim()) : !1),
  zA =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ts = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  Hl = { ...Ts, transform: (n) => aa(0, 1, n) },
  hr = { ...Ts, default: 1 },
  Ml = (n) => Math.round(n * 1e5) / 1e5,
  Od = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function HA(n) {
  return n == null;
}
const kA =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  jd = (n, i) => (l) =>
    !!(
      (typeof l == "string" && kA.test(l) && l.startsWith(n)) ||
      (i && !HA(l) && Object.prototype.hasOwnProperty.call(l, i))
    ),
  px = (n, i, l) => (o) => {
    if (typeof o != "string") return o;
    const [c, d, f, p] = o.match(Od);
    return {
      [n]: parseFloat(c),
      [i]: parseFloat(d),
      [l]: parseFloat(f),
      alpha: p !== void 0 ? parseFloat(p) : 1,
    };
  },
  VA = (n) => aa(0, 255, n),
  gf = { ...Ts, transform: (n) => Math.round(VA(n)) },
  fi = {
    test: jd("rgb", "red"),
    parse: px("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: l, alpha: o = 1 }) =>
      "rgba(" +
      gf.transform(n) +
      ", " +
      gf.transform(i) +
      ", " +
      gf.transform(l) +
      ", " +
      Ml(Hl.transform(o)) +
      ")",
  };
function BA(n) {
  let i = "",
    l = "",
    o = "",
    c = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (l = n.substring(3, 5)),
        (o = n.substring(5, 7)),
        (c = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (l = n.substring(2, 3)),
        (o = n.substring(3, 4)),
        (c = n.substring(4, 5)),
        (i += i),
        (l += l),
        (o += o),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(l, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Gf = { test: jd("#"), parse: BA, transform: fi.transform },
  Xl = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  _a = Xl("deg"),
  Dn = Xl("%"),
  dt = Xl("px"),
  LA = Xl("vh"),
  UA = Xl("vw"),
  j0 = {
    ...Dn,
    parse: (n) => Dn.parse(n) / 100,
    transform: (n) => Dn.transform(n * 100),
  },
  rs = {
    test: jd("hsl", "hue"),
    parse: px("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: l, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Dn.transform(Ml(i)) +
      ", " +
      Dn.transform(Ml(l)) +
      ", " +
      Ml(Hl.transform(o)) +
      ")",
  },
  ae = {
    test: (n) => fi.test(n) || Gf.test(n) || rs.test(n),
    parse: (n) =>
      fi.test(n) ? fi.parse(n) : rs.test(n) ? rs.parse(n) : Gf.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
          ? fi.transform(n)
          : rs.transform(n),
    getAnimatableNone: (n) => {
      const i = ae.parse(n);
      return ((i.alpha = 0), ae.transform(i));
    },
  },
  GA =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function YA(n) {
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (n.match(Od)?.length || 0) + (n.match(GA)?.length || 0) > 0
  );
}
const gx = "number",
  yx = "color",
  qA = "var",
  XA = "var(",
  _0 = "${}",
  PA =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function kl(n) {
  const i = n.toString(),
    l = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const p = i
    .replace(
      PA,
      (m) => (
        ae.test(m)
          ? (o.color.push(d), c.push(yx), l.push(ae.parse(m)))
          : m.startsWith(XA)
            ? (o.var.push(d), c.push(qA), l.push(m))
            : (o.number.push(d), c.push(gx), l.push(parseFloat(m))),
        ++d,
        _0
      ),
    )
    .split(_0);
  return { values: l, split: p, indexes: o, types: c };
}
function vx(n) {
  return kl(n).values;
}
function xx(n) {
  const { split: i, types: l } = kl(n),
    o = i.length;
  return (c) => {
    let d = "";
    for (let f = 0; f < o; f++)
      if (((d += i[f]), c[f] !== void 0)) {
        const p = l[f];
        p === gx
          ? (d += Ml(c[f]))
          : p === yx
            ? (d += ae.transform(c[f]))
            : (d += c[f]);
      }
    return d;
  };
}
const KA = (n) =>
  typeof n == "number" ? 0 : ae.test(n) ? ae.getAnimatableNone(n) : n;
function QA(n) {
  const i = vx(n);
  return xx(n)(i.map(KA));
}
const Va = {
  test: YA,
  parse: vx,
  createTransformer: xx,
  getAnimatableNone: QA,
};
function yf(n, i, l) {
  return (
    l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6
      ? n + (i - n) * 6 * l
      : l < 1 / 2
        ? i
        : l < 2 / 3
          ? n + (i - n) * (2 / 3 - l) * 6
          : n
  );
}
function ZA({ hue: n, saturation: i, lightness: l, alpha: o }) {
  ((n /= 360), (i /= 100), (l /= 100));
  let c = 0,
    d = 0,
    f = 0;
  if (!i) c = d = f = l;
  else {
    const p = l < 0.5 ? l * (1 + i) : l + i - l * i,
      m = 2 * l - p;
    ((c = yf(m, p, n + 1 / 3)), (d = yf(m, p, n)), (f = yf(m, p, n - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: o,
  };
}
function Ar(n, i) {
  return (l) => (l > 0 ? i : n);
}
const Kt = (n, i, l) => n + (i - n) * l,
  vf = (n, i, l) => {
    const o = n * n,
      c = l * (i * i - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  FA = [Gf, fi, rs],
  JA = (n) => FA.find((i) => i.test(n));
function z0(n) {
  const i = JA(n);
  if (!i) return !1;
  let l = i.parse(n);
  return (i === rs && (l = ZA(l)), l);
}
const H0 = (n, i) => {
    const l = z0(n),
      o = z0(i);
    if (!l || !o) return Ar(n, i);
    const c = { ...l };
    return (d) => (
      (c.red = vf(l.red, o.red, d)),
      (c.green = vf(l.green, o.green, d)),
      (c.blue = vf(l.blue, o.blue, d)),
      (c.alpha = Kt(l.alpha, o.alpha, d)),
      fi.transform(c)
    );
  },
  Yf = new Set(["none", "hidden"]);
function WA(n, i) {
  return Yf.has(n) ? (l) => (l <= 0 ? n : i) : (l) => (l >= 1 ? i : n);
}
function $A(n, i) {
  return (l) => Kt(n, i, l);
}
function _d(n) {
  return typeof n == "number"
    ? $A
    : typeof n == "string"
      ? Dd(n)
        ? Ar
        : ae.test(n)
          ? H0
          : eE
      : Array.isArray(n)
        ? bx
        : typeof n == "object"
          ? ae.test(n)
            ? H0
            : IA
          : Ar;
}
function bx(n, i) {
  const l = [...n],
    o = l.length,
    c = n.map((d, f) => _d(d)(d, i[f]));
  return (d) => {
    for (let f = 0; f < o; f++) l[f] = c[f](d);
    return l;
  };
}
function IA(n, i) {
  const l = { ...n, ...i },
    o = {};
  for (const c in l)
    n[c] !== void 0 && i[c] !== void 0 && (o[c] = _d(n[c])(n[c], i[c]));
  return (c) => {
    for (const d in o) l[d] = o[d](c);
    return l;
  };
}
function tE(n, i) {
  const l = [],
    o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const d = i.types[c],
      f = n.indexes[d][o[d]],
      p = n.values[f] ?? 0;
    ((l[c] = p), o[d]++);
  }
  return l;
}
const eE = (n, i) => {
  const l = Va.createTransformer(i),
    o = kl(n),
    c = kl(i);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (Yf.has(n) && !c.values.length) || (Yf.has(i) && !o.values.length)
      ? WA(n, i)
      : Yl(bx(tE(o, c), c.values), l)
    : Ar(n, i);
};
function Sx(n, i, l) {
  return typeof n == "number" && typeof i == "number" && typeof l == "number"
    ? Kt(n, i, l)
    : _d(n)(n, i);
}
const nE = (n) => {
    const i = ({ timestamp: l }) => n(l);
    return {
      start: (l = !0) => Xt.update(i, l),
      stop: () => ka(i),
      now: () => (ge.isProcessing ? ge.timestamp : Le.now()),
    };
  },
  wx = (n, i, l = 10) => {
    let o = "";
    const c = Math.max(Math.round(i / l), 2);
    for (let d = 0; d < c; d++)
      o += Math.round(n(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  Er = 2e4;
function zd(n) {
  let i = 0;
  const l = 50;
  let o = n.next(i);
  for (; !o.done && i < Er; ) ((i += l), (o = n.next(i)));
  return i >= Er ? 1 / 0 : i;
}
function aE(n, i = 100, l) {
  const o = l({ ...n, keyframes: [0, i] }),
    c = Math.min(zd(o), Er);
  return {
    type: "keyframes",
    ease: (d) => o.next(c * d).value / i,
    duration: cn(c),
  };
}
const iE = 5;
function Tx(n, i, l) {
  const o = Math.max(i - iE, 0);
  return nx(l - n(o), i - o);
}
const Ft = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  xf = 0.001;
function sE({
  duration: n = Ft.duration,
  bounce: i = Ft.bounce,
  velocity: l = Ft.velocity,
  mass: o = Ft.mass,
}) {
  let c,
    d,
    f = 1 - i;
  ((f = aa(Ft.minDamping, Ft.maxDamping, f)),
    (n = aa(Ft.minDuration, Ft.maxDuration, cn(n))),
    f < 1
      ? ((c = (h) => {
          const v = h * f,
            g = v * n,
            b = v - l,
            w = qf(h, f),
            A = Math.exp(-g);
          return xf - (b / w) * A;
        }),
        (d = (h) => {
          const g = h * f * n,
            b = g * l + l,
            w = Math.pow(f, 2) * Math.pow(h, 2) * n,
            A = Math.exp(-g),
            D = qf(Math.pow(h, 2), f);
          return ((-c(h) + xf > 0 ? -1 : 1) * ((b - w) * A)) / D;
        }))
      : ((c = (h) => {
          const v = Math.exp(-h * n),
            g = (h - l) * n + 1;
          return -xf + v * g;
        }),
        (d = (h) => {
          const v = Math.exp(-h * n),
            g = (l - h) * (n * n);
          return v * g;
        })));
  const p = 5 / n,
    m = oE(c, d, p);
  if (((n = Rn(n)), isNaN(m)))
    return { stiffness: Ft.stiffness, damping: Ft.damping, duration: n };
  {
    const h = Math.pow(m, 2) * o;
    return { stiffness: h, damping: f * 2 * Math.sqrt(o * h), duration: n };
  }
}
const lE = 12;
function oE(n, i, l) {
  let o = l;
  for (let c = 1; c < lE; c++) o = o - n(o) / i(o);
  return o;
}
function qf(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const rE = ["duration", "bounce"],
  cE = ["stiffness", "damping", "mass"];
function k0(n, i) {
  return i.some((l) => n[l] !== void 0);
}
function uE(n) {
  let i = {
    velocity: Ft.velocity,
    stiffness: Ft.stiffness,
    damping: Ft.damping,
    mass: Ft.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!k0(n, cE) && k0(n, rE))
    if (n.visualDuration) {
      const l = n.visualDuration,
        o = (2 * Math.PI) / (l * 1.2),
        c = o * o,
        d = 2 * aa(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: Ft.mass, stiffness: c, damping: d };
    } else {
      const l = sE(n);
      ((i = { ...i, ...l, mass: Ft.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Mr(n = Ft.visualDuration, i = Ft.bounce) {
  const l =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: o, restDelta: c } = l;
  const d = l.keyframes[0],
    f = l.keyframes[l.keyframes.length - 1],
    p = { done: !1, value: d },
    {
      stiffness: m,
      damping: h,
      mass: v,
      duration: g,
      velocity: b,
      isResolvedFromDuration: w,
    } = uE({ ...l, velocity: -cn(l.velocity || 0) }),
    A = b || 0,
    D = h / (2 * Math.sqrt(m * v)),
    z = f - d,
    O = cn(Math.sqrt(m / v)),
    P = Math.abs(z) < 5;
  (o || (o = P ? Ft.restSpeed.granular : Ft.restSpeed.default),
    c || (c = P ? Ft.restDelta.granular : Ft.restDelta.default));
  let L;
  if (D < 1) {
    const Z = qf(O, D);
    L = (W) => {
      const Q = Math.exp(-D * O * W);
      return (
        f - Q * (((A + D * O * z) / Z) * Math.sin(Z * W) + z * Math.cos(Z * W))
      );
    };
  } else if (D === 1) L = (Z) => f - Math.exp(-O * Z) * (z + (A + O * z) * Z);
  else {
    const Z = O * Math.sqrt(D * D - 1);
    L = (W) => {
      const Q = Math.exp(-D * O * W),
        G = Math.min(Z * W, 300);
      return (
        f - (Q * ((A + D * O * z) * Math.sinh(G) + Z * z * Math.cosh(G))) / Z
      );
    };
  }
  const F = {
    calculatedDuration: (w && g) || null,
    next: (Z) => {
      const W = L(Z);
      if (w) p.done = Z >= g;
      else {
        let Q = Z === 0 ? A : 0;
        D < 1 && (Q = Z === 0 ? Rn(A) : Tx(L, Z, W));
        const G = Math.abs(Q) <= o,
          ot = Math.abs(f - W) <= c;
        p.done = G && ot;
      }
      return ((p.value = p.done ? f : W), p);
    },
    toString: () => {
      const Z = Math.min(zd(F), Er),
        W = wx((Q) => F.next(Z * Q).value, Z, 30);
      return Z + "ms " + W;
    },
    toTransition: () => {},
  };
  return F;
}
Mr.applyToOptions = (n) => {
  const i = aE(n, 100, Mr);
  return (
    (n.ease = i.ease),
    (n.duration = Rn(i.duration)),
    (n.type = "keyframes"),
    n
  );
};
function Xf({
  keyframes: n,
  velocity: i = 0,
  power: l = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: f,
  min: p,
  max: m,
  restDelta: h = 0.5,
  restSpeed: v,
}) {
  const g = n[0],
    b = { done: !1, value: g },
    w = (G) => (p !== void 0 && G < p) || (m !== void 0 && G > m),
    A = (G) =>
      p === void 0
        ? m
        : m === void 0 || Math.abs(p - G) < Math.abs(m - G)
          ? p
          : m;
  let D = l * i;
  const z = g + D,
    O = f === void 0 ? z : f(z);
  O !== z && (D = O - g);
  const P = (G) => -D * Math.exp(-G / o),
    L = (G) => O + P(G),
    F = (G) => {
      const ot = P(G),
        ft = L(G);
      ((b.done = Math.abs(ot) <= h), (b.value = b.done ? O : ft));
    };
  let Z, W;
  const Q = (G) => {
    w(b.value) &&
      ((Z = G),
      (W = Mr({
        keyframes: [b.value, A(b.value)],
        velocity: Tx(L, G, b.value),
        damping: c,
        stiffness: d,
        restDelta: h,
        restSpeed: v,
      })));
  };
  return (
    Q(0),
    {
      calculatedDuration: null,
      next: (G) => {
        let ot = !1;
        return (
          !W && Z === void 0 && ((ot = !0), F(G), Q(G)),
          Z !== void 0 && G >= Z ? W.next(G - Z) : (!ot && F(G), b)
        );
      },
    }
  );
}
function fE(n, i, l) {
  const o = [],
    c = l || ia.mix || Sx,
    d = n.length - 1;
  for (let f = 0; f < d; f++) {
    let p = c(n[f], n[f + 1]);
    if (i) {
      const m = Array.isArray(i) ? i[f] || un : i;
      p = Yl(m, p);
    }
    o.push(p);
  }
  return o;
}
function dE(n, i, { clamp: l = !0, ease: o, mixer: c } = {}) {
  const d = n.length;
  if ((Ad(d === i.length), d === 1)) return () => i[0];
  if (d === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[d - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const p = fE(i, o, c),
    m = p.length,
    h = (v) => {
      if (f && v < n[0]) return i[0];
      let g = 0;
      if (m > 1) for (; g < n.length - 2 && !(v < n[g + 1]); g++);
      const b = zl(n[g], n[g + 1], v);
      return p[g](b);
    };
  return l ? (v) => h(aa(n[0], n[d - 1], v)) : h;
}
function hE(n, i) {
  const l = n[n.length - 1];
  for (let o = 1; o <= i; o++) {
    const c = zl(0, i, o);
    n.push(Kt(l, 1, c));
  }
}
function mE(n) {
  const i = [0];
  return (hE(i, n.length - 1), i);
}
function pE(n, i) {
  return n.map((l) => l * i);
}
function gE(n, i) {
  return n.map(() => i || fx).splice(0, n.length - 1);
}
function Cl({
  duration: n = 300,
  keyframes: i,
  times: l,
  ease: o = "easeInOut",
}) {
  const c = CA(o) ? o.map(O0) : O0(o),
    d = { done: !1, value: i[0] },
    f = pE(l && l.length === i.length ? l : mE(i), n),
    p = dE(f, i, { ease: Array.isArray(c) ? c : gE(i, c) });
  return {
    calculatedDuration: n,
    next: (m) => ((d.value = p(m)), (d.done = m >= n), d),
  };
}
const yE = (n) => n !== null;
function Hd(n, { repeat: i, repeatType: l = "loop" }, o, c = 1) {
  const d = n.filter(yE),
    p = c < 0 || (i && l !== "loop" && i % 2 === 1) ? 0 : d.length - 1;
  return !p || o === void 0 ? d[p] : o;
}
const vE = { decay: Xf, inertia: Xf, tween: Cl, keyframes: Cl, spring: Mr };
function Ax(n) {
  typeof n.type == "string" && (n.type = vE[n.type]);
}
class kd {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, l) {
    return this.finished.then(i, l);
  }
}
const xE = (n) => n / 100;
class Vd extends kd {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: l } = this.options;
        (l && l.updatedAt !== Le.now() && this.tick(Le.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    Ax(i);
    const {
      type: l = Cl,
      repeat: o = 0,
      repeatDelay: c = 0,
      repeatType: d,
      velocity: f = 0,
    } = i;
    let { keyframes: p } = i;
    const m = l || Cl;
    m !== Cl &&
      typeof p[0] != "number" &&
      ((this.mixKeyframes = Yl(xE, Sx(p[0], p[1]))), (p = [0, 100]));
    const h = m({ ...i, keyframes: p });
    (d === "mirror" &&
      (this.mirroredGenerator = m({
        ...i,
        keyframes: [...p].reverse(),
        velocity: -f,
      })),
      h.calculatedDuration === null && (h.calculatedDuration = zd(h)));
    const { calculatedDuration: v } = h;
    ((this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (o + 1) - c),
      (this.generator = h));
  }
  updateTime(i) {
    const l = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = l);
  }
  tick(i, l = !1) {
    const {
      generator: o,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: f,
      resolvedDuration: p,
      calculatedDuration: m,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: h = 0,
      keyframes: v,
      repeat: g,
      repeatType: b,
      repeatDelay: w,
      type: A,
      onUpdate: D,
      finalKeyframe: z,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      l ? (this.currentTime = i) : this.updateTime(i));
    const O = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
      P = this.playbackSpeed >= 0 ? O < 0 : O > c;
    ((this.currentTime = Math.max(O, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let L = this.currentTime,
      F = o;
    if (g) {
      const G = Math.min(this.currentTime, c) / p;
      let ot = Math.floor(G),
        ft = G % 1;
      (!ft && G >= 1 && (ft = 1),
        ft === 1 && ot--,
        (ot = Math.min(ot, g + 1)),
        !!(ot % 2) &&
          (b === "reverse"
            ? ((ft = 1 - ft), w && (ft -= w / p))
            : b === "mirror" && (F = f)),
        (L = aa(0, 1, ft) * p));
    }
    const Z = P ? { done: !1, value: v[0] } : F.next(L);
    d && (Z.value = d(Z.value));
    let { done: W } = Z;
    !P &&
      m !== null &&
      (W =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const Q =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && W));
    return (
      Q && A !== Xf && (Z.value = Hd(v, this.options, z, this.speed)),
      D && D(Z.value),
      Q && this.finish(),
      Z
    );
  }
  then(i, l) {
    return this.finished.then(i, l);
  }
  get duration() {
    return cn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + cn(i);
  }
  get time() {
    return cn(this.currentTime);
  }
  set time(i) {
    ((i = Rn(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Le.now());
    const l = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), l && (this.time = cn(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = nE, startTime: l } = this.options;
    (this.driver || (this.driver = i((c) => this.tick(c))),
      this.options.onPlay?.());
    const o = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime || (this.startTime = l ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Le.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function bE(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const di = (n) => (n * 180) / Math.PI,
  Pf = (n) => {
    const i = di(Math.atan2(n[1], n[0]));
    return Kf(i);
  },
  SE = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: Pf,
    rotateZ: Pf,
    skewX: (n) => di(Math.atan(n[1])),
    skewY: (n) => di(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  Kf = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  V0 = Pf,
  B0 = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  L0 = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  wE = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: B0,
    scaleY: L0,
    scale: (n) => (B0(n) + L0(n)) / 2,
    rotateX: (n) => Kf(di(Math.atan2(n[6], n[5]))),
    rotateY: (n) => Kf(di(Math.atan2(-n[2], n[0]))),
    rotateZ: V0,
    rotate: V0,
    skewX: (n) => di(Math.atan(n[4])),
    skewY: (n) => di(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Qf(n) {
  return n.includes("scale") ? 1 : 0;
}
function Zf(n, i) {
  if (!n || n === "none") return Qf(i);
  const l = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (l) ((o = wE), (c = l));
  else {
    const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = SE), (c = p));
  }
  if (!c) return Qf(i);
  const d = o[i],
    f = c[1].split(",").map(AE);
  return typeof d == "function" ? d(f) : f[d];
}
const TE = (n, i) => {
  const { transform: l = "none" } = getComputedStyle(n);
  return Zf(l, i);
};
function AE(n) {
  return parseFloat(n.trim());
}
const As = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Es = new Set(As),
  U0 = (n) => n === Ts || n === dt,
  EE = new Set(["x", "y", "z"]),
  ME = As.filter((n) => !EE.has(n));
function CE(n) {
  const i = [];
  return (
    ME.forEach((l) => {
      const o = n.getValue(l);
      o !== void 0 &&
        (i.push([l, o.get()]), o.set(l.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const hi = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: l = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(l),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: l = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(l),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => Zf(i, "x"),
  y: (n, { transform: i }) => Zf(i, "y"),
};
hi.translateX = hi.x;
hi.translateY = hi.y;
const mi = new Set();
let Ff = !1,
  Jf = !1,
  Wf = !1;
function Ex() {
  if (Jf) {
    const n = Array.from(mi).filter((o) => o.needsMeasurement),
      i = new Set(n.map((o) => o.element)),
      l = new Map();
    (i.forEach((o) => {
      const c = CE(o);
      c.length && (l.set(o, c), o.render());
    }),
      n.forEach((o) => o.measureInitialState()),
      i.forEach((o) => {
        o.render();
        const c = l.get(o);
        c &&
          c.forEach(([d, f]) => {
            o.getValue(d)?.set(f);
          });
      }),
      n.forEach((o) => o.measureEndState()),
      n.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((Jf = !1), (Ff = !1), mi.forEach((n) => n.complete(Wf)), mi.clear());
}
function Mx() {
  mi.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Jf = !0));
  });
}
function NE() {
  ((Wf = !0), Mx(), Ex(), (Wf = !1));
}
class Bd {
  constructor(i, l, o, c, d, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = l),
      (this.name = o),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (mi.add(this),
          Ff || ((Ff = !0), Xt.read(Mx), Xt.resolveKeyframes(Ex)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: l,
      element: o,
      motionValue: c,
    } = this;
    if (i[0] === null) {
      const d = c?.get(),
        f = i[i.length - 1];
      if (d !== void 0) i[0] = d;
      else if (o && l) {
        const p = o.readValue(l, f);
        p != null && (i[0] = p);
      }
      (i[0] === void 0 && (i[0] = f), c && d === void 0 && c.set(i[0]));
    }
    bE(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      mi.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (mi.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const RE = (n) => n.startsWith("--");
function DE(n, i, l) {
  RE(i) ? n.style.setProperty(i, l) : (n.style[i] = l);
}
const OE = Ed(() => window.ScrollTimeline !== void 0),
  jE = {};
function _E(n, i) {
  const l = Ed(n);
  return () => jE[i] ?? l();
}
const Cx = _E(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  El = ([n, i, l, o]) => `cubic-bezier(${n}, ${i}, ${l}, ${o})`,
  G0 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: El([0, 0.65, 0.55, 1]),
    circOut: El([0.55, 0, 1, 0.45]),
    backIn: El([0.31, 0.01, 0.66, -0.59]),
    backOut: El([0.33, 1.53, 0.69, 0.99]),
  };
function Nx(n, i) {
  if (n)
    return typeof n == "function"
      ? Cx()
        ? wx(n, i)
        : "ease-out"
      : dx(n)
        ? El(n)
        : Array.isArray(n)
          ? n.map((l) => Nx(l, i) || G0.easeOut)
          : G0[n];
}
function zE(
  n,
  i,
  l,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: f = "loop",
    ease: p = "easeOut",
    times: m,
  } = {},
  h = void 0,
) {
  const v = { [i]: l };
  m && (v.offset = m);
  const g = Nx(p, c);
  Array.isArray(g) && (v.easing = g);
  const b = {
    delay: o,
    duration: c,
    easing: Array.isArray(g) ? "linear" : g,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (h && (b.pseudoElement = h), n.animate(v, b));
}
function Rx(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function HE({ type: n, ...i }) {
  return Rx(n) && Cx()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class kE extends kd {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: l,
      name: o,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: f = !1,
      finalKeyframe: p,
      onComplete: m,
    } = i;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = f),
      (this.options = i),
      Ad(typeof i.type != "string"));
    const h = HE(i);
    ((this.animation = zE(l, o, c, h, d)),
      h.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const v = Hd(c, this.options, p, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(v) : DE(l, o, v),
            this.animation.cancel());
        }
        (m?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return cn(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + cn(i);
  }
  get time() {
    return cn(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    ((this.finishedTime = null), (this.animation.currentTime = Rn(i)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: l }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && OE() ? ((this.animation.timeline = i), un) : l(this)
    );
  }
}
const Dx = { anticipate: rx, backInOut: ox, circInOut: ux };
function VE(n) {
  return n in Dx;
}
function BE(n) {
  typeof n.ease == "string" && VE(n.ease) && (n.ease = Dx[n.ease]);
}
const Y0 = 10;
class LE extends kE {
  constructor(i) {
    (BE(i),
      Ax(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: l,
      onUpdate: o,
      onComplete: c,
      element: d,
      ...f
    } = this.options;
    if (!l) return;
    if (i !== void 0) {
      l.set(i);
      return;
    }
    const p = new Vd({ ...f, autoplay: !1 }),
      m = Rn(this.finishedTime ?? this.time);
    (l.setWithVelocity(p.sample(m - Y0).value, p.sample(m).value, Y0),
      p.stop());
  }
}
const q0 = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          (Va.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function UE(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let l = 0; l < n.length; l++) if (n[l] !== i) return !0;
}
function GE(n, i, l, o) {
  const c = n[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const d = n[n.length - 1],
    f = q0(c, i),
    p = q0(d, i);
  return !f || !p ? !1 : UE(n) || ((l === "spring" || Rx(l)) && o);
}
function $f(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const YE = new Set(["opacity", "clipPath", "filter", "transform"]),
  qE = Ed(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function XE(n) {
  const {
    motionValue: i,
    name: l,
    repeatDelay: o,
    repeatType: c,
    damping: d,
    type: f,
  } = n;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: m, transformTemplate: h } = i.owner.getProps();
  return (
    qE() &&
    l &&
    YE.has(l) &&
    (l !== "transform" || !h) &&
    !m &&
    !o &&
    c !== "mirror" &&
    d !== 0 &&
    f !== "inertia"
  );
}
const PE = 40;
class KE extends kd {
  constructor({
    autoplay: i = !0,
    delay: l = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: f = "loop",
    keyframes: p,
    name: m,
    motionValue: h,
    element: v,
    ...g
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = Le.now()));
    const b = {
        autoplay: i,
        delay: l,
        type: o,
        repeat: c,
        repeatDelay: d,
        repeatType: f,
        name: m,
        motionValue: h,
        element: v,
        ...g,
      },
      w = v?.KeyframeResolver || Bd;
    ((this.keyframeResolver = new w(
      p,
      (A, D, z) => this.onKeyframesResolved(A, D, b, !z),
      m,
      h,
      v,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, l, o, c) {
    this.keyframeResolver = void 0;
    const {
      name: d,
      type: f,
      velocity: p,
      delay: m,
      isHandoff: h,
      onUpdate: v,
    } = o;
    ((this.resolvedAt = Le.now()),
      GE(i, d, f, p) ||
        ((ia.instantAnimations || !m) && v?.(Hd(i, o, l)),
        (i[0] = i[i.length - 1]),
        $f(o),
        (o.repeat = 0)));
    const b = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > PE
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: l,
        ...o,
        keyframes: i,
      },
      w =
        !h && XE(b)
          ? new LE({ ...b, element: b.motionValue.owner.current })
          : new Vd(b);
    (w.finished.then(() => this.notifyFinished()).catch(un),
      this.pendingTimeline &&
        ((this.stopTimeline = w.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = w));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, l) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), NE()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
const QE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ZE(n) {
  const i = QE.exec(n);
  if (!i) return [,];
  const [, l, o, c] = i;
  return [`--${l ?? o}`, c];
}
function Ox(n, i, l = 1) {
  const [o, c] = ZE(n);
  if (!o) return;
  const d = window.getComputedStyle(i).getPropertyValue(o);
  if (d) {
    const f = d.trim();
    return Iv(f) ? parseFloat(f) : f;
  }
  return Dd(c) ? Ox(c, i, l + 1) : c;
}
function Ld(n, i) {
  return n?.[i] ?? n?.default ?? n;
}
const jx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...As,
  ]),
  FE = { test: (n) => n === "auto", parse: (n) => n },
  _x = (n) => (i) => i.test(n),
  zx = [Ts, dt, Dn, _a, UA, LA, FE],
  X0 = (n) => zx.find(_x(n));
function JE(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
      ? n === "none" || n === "0" || ex(n)
      : !0;
}
const WE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function $E(n) {
  const [i, l] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [o] = l.match(Od) || [];
  if (!o) return n;
  const c = l.replace(o, "");
  let d = WE.has(i) ? 1 : 0;
  return (o !== l && (d *= 100), i + "(" + d + c + ")");
}
const IE = /\b([a-z-]*)\(.*?\)/gu,
  If = {
    ...Va,
    getAnimatableNone: (n) => {
      const i = n.match(IE);
      return i ? i.map($E).join(" ") : n;
    },
  },
  P0 = { ...Ts, transform: Math.round },
  t4 = {
    rotate: _a,
    rotateX: _a,
    rotateY: _a,
    rotateZ: _a,
    scale: hr,
    scaleX: hr,
    scaleY: hr,
    scaleZ: hr,
    skew: _a,
    skewX: _a,
    skewY: _a,
    distance: dt,
    translateX: dt,
    translateY: dt,
    translateZ: dt,
    x: dt,
    y: dt,
    z: dt,
    perspective: dt,
    transformPerspective: dt,
    opacity: Hl,
    originX: j0,
    originY: j0,
    originZ: dt,
  },
  Ud = {
    borderWidth: dt,
    borderTopWidth: dt,
    borderRightWidth: dt,
    borderBottomWidth: dt,
    borderLeftWidth: dt,
    borderRadius: dt,
    radius: dt,
    borderTopLeftRadius: dt,
    borderTopRightRadius: dt,
    borderBottomRightRadius: dt,
    borderBottomLeftRadius: dt,
    width: dt,
    maxWidth: dt,
    height: dt,
    maxHeight: dt,
    top: dt,
    right: dt,
    bottom: dt,
    left: dt,
    padding: dt,
    paddingTop: dt,
    paddingRight: dt,
    paddingBottom: dt,
    paddingLeft: dt,
    margin: dt,
    marginTop: dt,
    marginRight: dt,
    marginBottom: dt,
    marginLeft: dt,
    backgroundPositionX: dt,
    backgroundPositionY: dt,
    ...t4,
    zIndex: P0,
    fillOpacity: Hl,
    strokeOpacity: Hl,
    numOctaves: P0,
  },
  e4 = {
    ...Ud,
    color: ae,
    backgroundColor: ae,
    outlineColor: ae,
    fill: ae,
    stroke: ae,
    borderColor: ae,
    borderTopColor: ae,
    borderRightColor: ae,
    borderBottomColor: ae,
    borderLeftColor: ae,
    filter: If,
    WebkitFilter: If,
  },
  Hx = (n) => e4[n];
function kx(n, i) {
  let l = Hx(n);
  return (
    l !== If && (l = Va),
    l.getAnimatableNone ? l.getAnimatableNone(i) : void 0
  );
}
const n4 = new Set(["auto", "none", "0"]);
function a4(n, i, l) {
  let o = 0,
    c;
  for (; o < n.length && !c; ) {
    const d = n[o];
    (typeof d == "string" && !n4.has(d) && kl(d).values.length && (c = n[o]),
      o++);
  }
  if (c && l) for (const d of i) n[d] = kx(l, c);
}
class i4 extends Bd {
  constructor(i, l, o, c, d) {
    super(i, l, o, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: l, name: o } = this;
    if (!l || !l.current) return;
    super.readKeyframes();
    for (let m = 0; m < i.length; m++) {
      let h = i[m];
      if (typeof h == "string" && ((h = h.trim()), Dd(h))) {
        const v = Ox(h, l.current);
        (v !== void 0 && (i[m] = v),
          m === i.length - 1 && (this.finalKeyframe = h));
      }
    }
    if ((this.resolveNoneKeyframes(), !jx.has(o) || i.length !== 2)) return;
    const [c, d] = i,
      f = X0(c),
      p = X0(d);
    if (f !== p)
      if (U0(f) && U0(p))
        for (let m = 0; m < i.length; m++) {
          const h = i[m];
          typeof h == "string" && (i[m] = parseFloat(h));
        }
      else hi[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: l } = this,
      o = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || JE(i[c])) && o.push(c);
    o.length && a4(i, o, l);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: l, name: o } = this;
    if (!i || !i.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = hi[o](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (l[0] = this.measuredOrigin));
    const c = l[l.length - 1];
    c !== void 0 && i.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    const { element: i, name: l, unresolvedKeyframes: o } = this;
    if (!i || !i.current) return;
    const c = i.getValue(l);
    c && c.jump(this.measuredOrigin, !1);
    const d = o.length - 1,
      f = o[d];
    ((o[d] = hi[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([p, m]) => {
          i.getValue(p).set(m);
        }),
      this.resolveNoneKeyframes());
  }
}
function s4(n, i, l) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let o = document;
    const c = l?.[n] ?? o.querySelectorAll(n);
    return c ? Array.from(c) : [];
  }
  return Array.from(n);
}
const Vx = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function l4(n) {
  return tx(n) && "offsetHeight" in n;
}
const K0 = 30,
  o4 = (n) => !isNaN(parseFloat(n));
class r4 {
  constructor(i, l = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        const c = Le.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = l.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = Le.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = o4(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, l) {
    this.events[i] || (this.events[i] = new Md());
    const o = this.events[i].add(l);
    return i === "change"
      ? () => {
          (o(),
            Xt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, l) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = l));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, l, o) {
    (this.set(l),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(i, l = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      l && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Le.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > K0
    )
      return 0;
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, K0);
    return nx(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((l) => {
        ((this.hasAnimated = !0),
          (this.animation = i(l)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ys(n, i) {
  return new r4(n, i);
}
const { schedule: Gd } = hx(queueMicrotask, !1),
  yn = { x: !1, y: !1 };
function Bx() {
  return yn.x || yn.y;
}
function c4(n) {
  return n === "x" || n === "y"
    ? yn[n]
      ? null
      : ((yn[n] = !0),
        () => {
          yn[n] = !1;
        })
    : yn.x || yn.y
      ? null
      : ((yn.x = yn.y = !0),
        () => {
          yn.x = yn.y = !1;
        });
}
function Lx(n, i) {
  const l = s4(n),
    o = new AbortController(),
    c = { passive: !0, ...i, signal: o.signal };
  return [l, c, () => o.abort()];
}
function Q0(n) {
  return !(n.pointerType === "touch" || Bx());
}
function u4(n, i, l = {}) {
  const [o, c, d] = Lx(n, l),
    f = (p) => {
      if (!Q0(p)) return;
      const { target: m } = p,
        h = i(m, p);
      if (typeof h != "function" || !m) return;
      const v = (g) => {
        Q0(g) && (h(g), m.removeEventListener("pointerleave", v));
      };
      m.addEventListener("pointerleave", v, c);
    };
  return (
    o.forEach((p) => {
      p.addEventListener("pointerenter", f, c);
    }),
    d
  );
}
const Ux = (n, i) => (i ? (n === i ? !0 : Ux(n, i.parentElement)) : !1),
  Yd = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  f4 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function d4(n) {
  return f4.has(n.tagName) || n.tabIndex !== -1;
}
const yr = new WeakSet();
function Z0(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function bf(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const h4 = (n, i) => {
  const l = n.currentTarget;
  if (!l) return;
  const o = Z0(() => {
    if (yr.has(l)) return;
    bf(l, "down");
    const c = Z0(() => {
        bf(l, "up");
      }),
      d = () => bf(l, "cancel");
    (l.addEventListener("keyup", c, i), l.addEventListener("blur", d, i));
  });
  (l.addEventListener("keydown", o, i),
    l.addEventListener("blur", () => l.removeEventListener("keydown", o), i));
};
function F0(n) {
  return Yd(n) && !Bx();
}
function m4(n, i, l = {}) {
  const [o, c, d] = Lx(n, l),
    f = (p) => {
      const m = p.currentTarget;
      if (!F0(p)) return;
      yr.add(m);
      const h = i(m, p),
        v = (w, A) => {
          (window.removeEventListener("pointerup", g),
            window.removeEventListener("pointercancel", b),
            yr.has(m) && yr.delete(m),
            F0(w) && typeof h == "function" && h(w, { success: A }));
        },
        g = (w) => {
          v(
            w,
            m === window ||
              m === document ||
              l.useGlobalTarget ||
              Ux(m, w.target),
          );
        },
        b = (w) => {
          v(w, !1);
        };
      (window.addEventListener("pointerup", g, c),
        window.addEventListener("pointercancel", b, c));
    };
  return (
    o.forEach((p) => {
      ((l.useGlobalTarget ? window : p).addEventListener("pointerdown", f, c),
        l4(p) &&
          (p.addEventListener("focus", (h) => h4(h, c)),
          !d4(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0)));
    }),
    d
  );
}
function Gx(n) {
  return tx(n) && "ownerSVGElement" in n;
}
function p4(n) {
  return Gx(n) && n.tagName === "svg";
}
const be = (n) => !!(n && n.getVelocity),
  g4 = [...zx, ae, Va],
  y4 = (n) => g4.find(_x(n)),
  Yx = C.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function v4(n = !0) {
  const i = C.useContext(Sd);
  if (i === null) return [!0, null];
  const { isPresent: l, onExitComplete: o, register: c } = i,
    d = C.useId();
  C.useEffect(() => {
    if (n) return c(d);
  }, [n]);
  const f = C.useCallback(() => n && o && o(d), [d, o, n]);
  return !l && o ? [!1, f] : [!0];
}
const qx = C.createContext({ strict: !1 }),
  J0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  vs = {};
for (const n in J0) vs[n] = { isEnabled: (i) => J0[n].some((l) => !!i[l]) };
function x4(n) {
  for (const i in n) vs[i] = { ...vs[i], ...n[i] };
}
const b4 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Cr(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    b4.has(n)
  );
}
let Xx = (n) => !Cr(n);
function S4(n) {
  typeof n == "function" && (Xx = (i) => (i.startsWith("on") ? !Cr(i) : n(i)));
}
try {
  S4(require("@emotion/is-prop-valid").default);
} catch {}
function w4(n, i, l) {
  const o = {};
  for (const c in n)
    (c === "values" && typeof n.values == "object") ||
      ((Xx(c) ||
        (l === !0 && Cr(c)) ||
        (!i && !Cr(c)) ||
        (n.draggable && c.startsWith("onDrag"))) &&
        (o[c] = n[c]));
  return o;
}
const Lr = C.createContext({});
function Ur(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Vl(n) {
  return typeof n == "string" || Array.isArray(n);
}
const qd = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Xd = ["initial", ...qd];
function Gr(n) {
  return Ur(n.animate) || Xd.some((i) => Vl(n[i]));
}
function Px(n) {
  return !!(Gr(n) || n.variants);
}
function T4(n, i) {
  if (Gr(n)) {
    const { initial: l, animate: o } = n;
    return {
      initial: l === !1 || Vl(l) ? l : void 0,
      animate: Vl(o) ? o : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function A4(n) {
  const { initial: i, animate: l } = T4(n, C.useContext(Lr));
  return C.useMemo(() => ({ initial: i, animate: l }), [W0(i), W0(l)]);
}
function W0(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
const Bl = {};
function E4(n) {
  for (const i in n) ((Bl[i] = n[i]), Rd(i) && (Bl[i].isCSSVariable = !0));
}
function Kx(n, { layout: i, layoutId: l }) {
  return (
    Es.has(n) ||
    n.startsWith("origin") ||
    ((i || l !== void 0) && (!!Bl[n] || n === "opacity"))
  );
}
const M4 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  C4 = As.length;
function N4(n, i, l) {
  let o = "",
    c = !0;
  for (let d = 0; d < C4; d++) {
    const f = As[d],
      p = n[f];
    if (p === void 0) continue;
    let m = !0;
    if (
      (typeof p == "number"
        ? (m = p === (f.startsWith("scale") ? 1 : 0))
        : (m = parseFloat(p) === 0),
      !m || l)
    ) {
      const h = Vx(p, Ud[f]);
      if (!m) {
        c = !1;
        const v = M4[f] || f;
        o += `${v}(${h}) `;
      }
      l && (i[f] = h);
    }
  }
  return ((o = o.trim()), l ? (o = l(i, c ? "" : o)) : c && (o = "none"), o);
}
function Pd(n, i, l) {
  const { style: o, vars: c, transformOrigin: d } = n;
  let f = !1,
    p = !1;
  for (const m in i) {
    const h = i[m];
    if (Es.has(m)) {
      f = !0;
      continue;
    } else if (Rd(m)) {
      c[m] = h;
      continue;
    } else {
      const v = Vx(h, Ud[m]);
      m.startsWith("origin") ? ((p = !0), (d[m] = v)) : (o[m] = v);
    }
  }
  if (
    (i.transform ||
      (f || l
        ? (o.transform = N4(i, n.transform, l))
        : o.transform && (o.transform = "none")),
    p)
  ) {
    const { originX: m = "50%", originY: h = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${m} ${h} ${v}`;
  }
}
const Kd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Qx(n, i, l) {
  for (const o in i) !be(i[o]) && !Kx(o, l) && (n[o] = i[o]);
}
function R4({ transformTemplate: n }, i) {
  return C.useMemo(() => {
    const l = Kd();
    return (Pd(l, i, n), Object.assign({}, l.vars, l.style));
  }, [i]);
}
function D4(n, i) {
  const l = n.style || {},
    o = {};
  return (Qx(o, l, n), Object.assign(o, R4(n, i)), o);
}
function O4(n, i) {
  const l = {},
    o = D4(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((l.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (l.tabIndex = 0),
    (l.style = o),
    l
  );
}
const j4 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  _4 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function z4(n, i, l = 1, o = 0, c = !0) {
  n.pathLength = 1;
  const d = c ? j4 : _4;
  n[d.offset] = dt.transform(-o);
  const f = dt.transform(i),
    p = dt.transform(l);
  n[d.array] = `${f} ${p}`;
}
function Zx(
  n,
  {
    attrX: i,
    attrY: l,
    attrScale: o,
    pathLength: c,
    pathSpacing: d = 1,
    pathOffset: f = 0,
    ...p
  },
  m,
  h,
  v,
) {
  if ((Pd(n, p, h), m)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: g, style: b } = n;
  (g.transform && ((b.transform = g.transform), delete g.transform),
    (b.transform || g.transformOrigin) &&
      ((b.transformOrigin = g.transformOrigin ?? "50% 50%"),
      delete g.transformOrigin),
    b.transform &&
      ((b.transformBox = v?.transformBox ?? "fill-box"), delete g.transformBox),
    i !== void 0 && (g.x = i),
    l !== void 0 && (g.y = l),
    o !== void 0 && (g.scale = o),
    c !== void 0 && z4(g, c, d, f, !1));
}
const Fx = () => ({ ...Kd(), attrs: {} }),
  Jx = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function H4(n, i, l, o) {
  const c = C.useMemo(() => {
    const d = Fx();
    return (
      Zx(d, i, Jx(o), n.transformTemplate, n.style),
      { ...d.attrs, style: { ...d.style } }
    );
  }, [i]);
  if (n.style) {
    const d = {};
    (Qx(d, n.style, n), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const k4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Qd(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(k4.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function V4(n, i, l, { latestValues: o }, c, d = !1) {
  const p = (Qd(n) ? H4 : O4)(i, o, c, n),
    m = w4(i, typeof n == "string", d),
    h = n !== C.Fragment ? { ...m, ...p, ref: l } : {},
    { children: v } = i,
    g = C.useMemo(() => (be(v) ? v.get() : v), [v]);
  return C.createElement(n, { ...h, children: g });
}
function $0(n) {
  const i = [{}, {}];
  return (
    n?.values.forEach((l, o) => {
      ((i[0][o] = l.get()), (i[1][o] = l.getVelocity()));
    }),
    i
  );
}
function Zd(n, i, l, o) {
  if (typeof i == "function") {
    const [c, d] = $0(o);
    i = i(l !== void 0 ? l : n.custom, c, d);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [c, d] = $0(o);
    i = i(l !== void 0 ? l : n.custom, c, d);
  }
  return i;
}
function vr(n) {
  return be(n) ? n.get() : n;
}
function B4({ scrapeMotionValuesFromProps: n, createRenderState: i }, l, o, c) {
  return { latestValues: L4(l, o, c, n), renderState: i() };
}
function L4(n, i, l, o) {
  const c = {},
    d = o(n, {});
  for (const b in d) c[b] = vr(d[b]);
  let { initial: f, animate: p } = n;
  const m = Gr(n),
    h = Px(n);
  i &&
    h &&
    !m &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), p === void 0 && (p = i.animate));
  let v = l ? l.initial === !1 : !1;
  v = v || f === !1;
  const g = v ? p : f;
  if (g && typeof g != "boolean" && !Ur(g)) {
    const b = Array.isArray(g) ? g : [g];
    for (let w = 0; w < b.length; w++) {
      const A = Zd(n, b[w]);
      if (A) {
        const { transitionEnd: D, transition: z, ...O } = A;
        for (const P in O) {
          let L = O[P];
          if (Array.isArray(L)) {
            const F = v ? L.length - 1 : 0;
            L = L[F];
          }
          L !== null && (c[P] = L);
        }
        for (const P in D) c[P] = D[P];
      }
    }
  }
  return c;
}
const Wx = (n) => (i, l) => {
  const o = C.useContext(Lr),
    c = C.useContext(Sd),
    d = () => B4(n, i, o, c);
  return l ? d() : xA(d);
};
function Fd(n, i, l) {
  const { style: o } = n,
    c = {};
  for (const d in o)
    (be(o[d]) ||
      (i.style && be(i.style[d])) ||
      Kx(d, n) ||
      l?.getValue(d)?.liveStyle !== void 0) &&
      (c[d] = o[d]);
  return c;
}
const U4 = Wx({ scrapeMotionValuesFromProps: Fd, createRenderState: Kd });
function $x(n, i, l) {
  const o = Fd(n, i, l);
  for (const c in n)
    if (be(n[c]) || be(i[c])) {
      const d =
        As.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[d] = n[c];
    }
  return o;
}
const G4 = Wx({ scrapeMotionValuesFromProps: $x, createRenderState: Fx }),
  Y4 = Symbol.for("motionComponentSymbol");
function cs(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function q4(n, i, l) {
  return C.useCallback(
    (o) => {
      (o && n.onMount && n.onMount(o),
        i && (o ? i.mount(o) : i.unmount()),
        l && (typeof l == "function" ? l(o) : cs(l) && (l.current = o)));
    },
    [i],
  );
}
const Jd = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  X4 = "framerAppearId",
  Ix = "data-" + Jd(X4),
  tb = C.createContext({});
function P4(n, i, l, o, c) {
  const { visualElement: d } = C.useContext(Lr),
    f = C.useContext(qx),
    p = C.useContext(Sd),
    m = C.useContext(Yx).reducedMotion,
    h = C.useRef(null);
  ((o = o || f.renderer),
    !h.current &&
      o &&
      (h.current = o(n, {
        visualState: i,
        parent: d,
        props: l,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: m,
      })));
  const v = h.current,
    g = C.useContext(tb);
  v &&
    !v.projection &&
    c &&
    (v.type === "html" || v.type === "svg") &&
    K4(h.current, l, c, g);
  const b = C.useRef(!1);
  C.useInsertionEffect(() => {
    v && b.current && v.update(l, p);
  });
  const w = l[Ix],
    A = C.useRef(
      !!w &&
        !window.MotionHandoffIsComplete?.(w) &&
        window.MotionHasOptimisedAnimation?.(w),
    );
  return (
    bA(() => {
      v &&
        ((b.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        A.current && v.animationState && v.animationState.animateChanges());
    }),
    C.useEffect(() => {
      v &&
        (!A.current && v.animationState && v.animationState.animateChanges(),
        A.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(w);
          }),
          (A.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function K4(n, i, l, o) {
  const {
    layoutId: c,
    layout: d,
    drag: f,
    dragConstraints: p,
    layoutScroll: m,
    layoutRoot: h,
    layoutCrossfade: v,
  } = i;
  ((n.projection = new l(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : eb(n.parent),
  )),
    n.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!f || (p && cs(p)),
      visualElement: n,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: o,
      crossfade: v,
      layoutScroll: m,
      layoutRoot: h,
    }));
}
function eb(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : eb(n.parent);
}
function Sf(n, { forwardMotionProps: i = !1 } = {}, l, o) {
  l && x4(l);
  const c = Qd(n) ? G4 : U4;
  function d(p, m) {
    let h;
    const v = { ...C.useContext(Yx), ...p, layoutId: Q4(p) },
      { isStatic: g } = v,
      b = A4(p),
      w = c(p, g);
    if (!g && bd) {
      Z4();
      const A = F4(v);
      ((h = A.MeasureLayout),
        (b.visualElement = P4(n, w, v, o, A.ProjectionNode)));
    }
    return S.jsxs(Lr.Provider, {
      value: b,
      children: [
        h && b.visualElement
          ? S.jsx(h, { visualElement: b.visualElement, ...v })
          : null,
        V4(n, p, q4(w, b.visualElement, m), w, g, i),
      ],
    });
  }
  d.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const f = C.forwardRef(d);
  return ((f[Y4] = n), f);
}
function Q4({ layoutId: n }) {
  const i = C.useContext($v).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Z4(n, i) {
  C.useContext(qx).strict;
}
function F4(n) {
  const { drag: i, layout: l } = vs;
  if (!i && !l) return {};
  const o = { ...i, ...l };
  return {
    MeasureLayout:
      i?.isEnabled(n) || l?.isEnabled(n) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function J4(n, i) {
  if (typeof Proxy > "u") return Sf;
  const l = new Map(),
    o = (d, f) => Sf(d, f, n, i),
    c = (d, f) => o(d, f);
  return new Proxy(c, {
    get: (d, f) =>
      f === "create"
        ? o
        : (l.has(f) || l.set(f, Sf(f, void 0, n, i)), l.get(f)),
  });
}
function nb({ top: n, left: i, right: l, bottom: o }) {
  return { x: { min: i, max: l }, y: { min: n, max: o } };
}
function W4({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function $4(n, i) {
  if (!i) return n;
  const l = i({ x: n.left, y: n.top }),
    o = i({ x: n.right, y: n.bottom });
  return { top: l.y, left: l.x, bottom: o.y, right: o.x };
}
function wf(n) {
  return n === void 0 || n === 1;
}
function td({ scale: n, scaleX: i, scaleY: l }) {
  return !wf(n) || !wf(i) || !wf(l);
}
function ui(n) {
  return (
    td(n) ||
    ab(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function ab(n) {
  return I0(n.x) || I0(n.y);
}
function I0(n) {
  return n && n !== "0%";
}
function Nr(n, i, l) {
  const o = n - l,
    c = i * o;
  return l + c;
}
function ty(n, i, l, o, c) {
  return (c !== void 0 && (n = Nr(n, c, o)), Nr(n, l, o) + i);
}
function ed(n, i = 0, l = 1, o, c) {
  ((n.min = ty(n.min, i, l, o, c)), (n.max = ty(n.max, i, l, o, c)));
}
function ib(n, { x: i, y: l }) {
  (ed(n.x, i.translate, i.scale, i.originPoint),
    ed(n.y, l.translate, l.scale, l.originPoint));
}
const ey = 0.999999999999,
  ny = 1.0000000000001;
function I4(n, i, l, o = !1) {
  const c = l.length;
  if (!c) return;
  i.x = i.y = 1;
  let d, f;
  for (let p = 0; p < c; p++) {
    ((d = l[p]), (f = d.projectionDelta));
    const { visualElement: m } = d.options;
    (m && m.props.style && m.props.style.display === "contents") ||
      (o &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        fs(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), ib(n, f)),
      o && ui(d.latestValues) && fs(n, d.latestValues));
  }
  (i.x < ny && i.x > ey && (i.x = 1), i.y < ny && i.y > ey && (i.y = 1));
}
function us(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function ay(n, i, l, o, c = 0.5) {
  const d = Kt(n.min, n.max, c);
  ed(n, i, l, d, o);
}
function fs(n, i) {
  (ay(n.x, i.x, i.scaleX, i.scale, i.originX),
    ay(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function sb(n, i) {
  return nb($4(n.getBoundingClientRect(), i));
}
function t3(n, i, l) {
  const o = sb(n, l),
    { scroll: c } = i;
  return (c && (us(o.x, c.offset.x), us(o.y, c.offset.y)), o);
}
const iy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ds = () => ({ x: iy(), y: iy() }),
  sy = () => ({ min: 0, max: 0 }),
  $t = () => ({ x: sy(), y: sy() }),
  nd = { current: null },
  lb = { current: !1 };
function e3() {
  if (((lb.current = !0), !!bd))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (nd.current = n.matches);
      (n.addEventListener("change", i), i());
    } else nd.current = !1;
}
const n3 = new WeakMap();
function a3(n, i, l) {
  for (const o in i) {
    const c = i[o],
      d = l[o];
    if (be(c)) n.addValue(o, c);
    else if (be(d)) n.addValue(o, ys(c, { owner: n }));
    else if (d !== c)
      if (n.hasValue(o)) {
        const f = n.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = n.getStaticValue(o);
        n.addValue(o, ys(f !== void 0 ? f : c, { owner: n }));
      }
  }
  for (const o in l) i[o] === void 0 && n.removeValue(o);
  return i;
}
const ly = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class i3 {
  scrapeMotionValuesFromProps(i, l, o) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: l,
      presenceContext: o,
      reducedMotionConfig: c,
      blockInitialAnimation: d,
      visualState: f,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Bd),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const b = Le.now();
        this.renderScheduledAt < b &&
          ((this.renderScheduledAt = b), Xt.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: h } = f;
    ((this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = l.initial ? { ...m } : {}),
      (this.renderState = h),
      (this.parent = i),
      (this.props = l),
      (this.presenceContext = o),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.options = p),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = Gr(l)),
      (this.isVariantNode = Px(l)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: v, ...g } = this.scrapeMotionValuesFromProps(
      l,
      {},
      this,
    );
    for (const b in g) {
      const w = g[b];
      m[b] !== void 0 && be(w) && w.set(m[b]);
    }
  }
  mount(i) {
    ((this.current = i),
      n3.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((l, o) => this.bindToMotionValue(o, l)),
      lb.current || e3(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : nd.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      ka(this.notifyUpdate),
      ka(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const l = this.features[i];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, l) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const o = Es.has(i);
    o && this.onBindTransform && this.onBindTransform();
    const c = l.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && Xt.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, i, l)),
      this.valueSubscriptions.set(i, () => {
        (c(), d && d(), l.owner && l.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in vs) {
      const l = vs[i];
      if (!l) continue;
      const { isEnabled: o, Feature: c } = l;
      if (
        (!this.features[i] &&
          c &&
          o(this.props) &&
          (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const d = this.features[i];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : $t();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, l) {
    this.latestValues[i] = l;
  }
  update(i, l) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = l));
    for (let o = 0; o < ly.length; o++) {
      const c = ly[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        f = i[d];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = a3(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const l = this.getClosestVariantNode();
    if (l)
      return (
        l.variantChildren && l.variantChildren.add(i),
        () => l.variantChildren.delete(i)
      );
  }
  addValue(i, l) {
    const o = this.values.get(i);
    l !== o &&
      (o && this.removeValue(i),
      this.bindToMotionValue(i, l),
      this.values.set(i, l),
      (this.latestValues[i] = l.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const l = this.valueSubscriptions.get(i);
    (l && (l(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, l) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let o = this.values.get(i);
    return (
      o === void 0 &&
        l !== void 0 &&
        ((o = ys(l === null ? void 0 : l, { owner: this })),
        this.addValue(i, o)),
      o
    );
  }
  readValue(i, l) {
    let o =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      o != null &&
        (typeof o == "string" && (Iv(o) || ex(o))
          ? (o = parseFloat(o))
          : !y4(o) && Va.test(l) && (o = kx(i, l)),
        this.setBaseTarget(i, be(o) ? o.get() : o)),
      be(o) ? o.get() : o
    );
  }
  setBaseTarget(i, l) {
    this.baseTarget[i] = l;
  }
  getBaseTarget(i) {
    const { initial: l } = this.props;
    let o;
    if (typeof l == "string" || typeof l == "object") {
      const d = Zd(this.props, l, this.presenceContext?.custom);
      d && (o = d[i]);
    }
    if (l && o !== void 0) return o;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !be(c)
      ? c
      : this.initialValues[i] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, l) {
    return (
      this.events[i] || (this.events[i] = new Md()),
      this.events[i].add(l)
    );
  }
  notify(i, ...l) {
    this.events[i] && this.events[i].notify(...l);
  }
  scheduleRenderMicrotask() {
    Gd.render(this.render);
  }
}
class ob extends i3 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = i4));
  }
  sortInstanceNodePosition(i, l) {
    return i.compareDocumentPosition(l) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, l) {
    return i.style ? i.style[l] : void 0;
  }
  removeValueFromRenderState(i, { vars: l, style: o }) {
    (delete l[i], delete o[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    be(i) &&
      (this.childSubscription = i.on("change", (l) => {
        this.current && (this.current.textContent = `${l}`);
      }));
  }
}
function rb(n, { style: i, vars: l }, o, c) {
  const d = n.style;
  let f;
  for (f in i) d[f] = i[f];
  c?.applyProjectionStyles(d, o);
  for (f in l) d.setProperty(f, l[f]);
}
function s3(n) {
  return window.getComputedStyle(n);
}
class l3 extends ob {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = rb));
  }
  readValueFromInstance(i, l) {
    if (Es.has(l)) return this.projection?.isProjecting ? Qf(l) : TE(i, l);
    {
      const o = s3(i),
        c = (Rd(l) ? o.getPropertyValue(l) : o[l]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: l }) {
    return sb(i, l);
  }
  build(i, l, o) {
    Pd(i, l, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, l, o) {
    return Fd(i, l, o);
  }
}
const cb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function o3(n, i, l, o) {
  rb(n, i, void 0, o);
  for (const c in i.attrs) n.setAttribute(cb.has(c) ? c : Jd(c), i.attrs[c]);
}
class r3 extends ob {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = $t));
  }
  getBaseTargetFromProps(i, l) {
    return i[l];
  }
  readValueFromInstance(i, l) {
    if (Es.has(l)) {
      const o = Hx(l);
      return (o && o.default) || 0;
    }
    return ((l = cb.has(l) ? l : Jd(l)), i.getAttribute(l));
  }
  scrapeMotionValuesFromProps(i, l, o) {
    return $x(i, l, o);
  }
  build(i, l, o) {
    Zx(i, l, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(i, l, o, c) {
    o3(i, l, o, c);
  }
  mount(i) {
    ((this.isSVGTag = Jx(i.tagName)), super.mount(i));
  }
}
const c3 = (n, i) =>
  Qd(n) ? new r3(i) : new l3(i, { allowProjection: n !== C.Fragment });
function ms(n, i, l) {
  const o = n.getProps();
  return Zd(o, i, l !== void 0 ? l : o.custom, n);
}
const ad = (n) => Array.isArray(n);
function u3(n, i, l) {
  n.hasValue(i) ? n.getValue(i).set(l) : n.addValue(i, ys(l));
}
function f3(n) {
  return ad(n) ? n[n.length - 1] || 0 : n;
}
function d3(n, i) {
  const l = ms(n, i);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = l || {};
  d = { ...d, ...o };
  for (const f in d) {
    const p = f3(d[f]);
    u3(n, f, p);
  }
}
function h3(n) {
  return !!(be(n) && n.add);
}
function id(n, i) {
  const l = n.getValue("willChange");
  if (h3(l)) return l.add(i);
  if (!l && ia.WillChange) {
    const o = new ia.WillChange("auto");
    (n.addValue("willChange", o), o.add(i));
  }
}
function ub(n) {
  return n.props[Ix];
}
const m3 = (n) => n !== null;
function p3(n, { repeat: i, repeatType: l = "loop" }, o) {
  const c = n.filter(m3),
    d = i && l !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return c[d];
}
const g3 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  y3 = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  v3 = { type: "keyframes", duration: 0.8 },
  x3 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  b3 = (n, { keyframes: i }) =>
    i.length > 2
      ? v3
      : Es.has(n)
        ? n.startsWith("scale")
          ? y3(i[1])
          : g3
        : x3;
function S3({
  when: n,
  delay: i,
  delayChildren: l,
  staggerChildren: o,
  staggerDirection: c,
  repeat: d,
  repeatType: f,
  repeatDelay: p,
  from: m,
  elapsed: h,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Wd =
  (n, i, l, o = {}, c, d) =>
  (f) => {
    const p = Ld(o, n) || {},
      m = p.delay || o.delay || 0;
    let { elapsed: h = 0 } = o;
    h = h - Rn(m);
    const v = {
      keyframes: Array.isArray(l) ? l : [null, l],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...p,
      delay: -h,
      onUpdate: (b) => {
        (i.set(b), p.onUpdate && p.onUpdate(b));
      },
      onComplete: () => {
        (f(), p.onComplete && p.onComplete());
      },
      name: n,
      motionValue: i,
      element: d ? void 0 : c,
    };
    (S3(p) || Object.assign(v, b3(n, v)),
      v.duration && (v.duration = Rn(v.duration)),
      v.repeatDelay && (v.repeatDelay = Rn(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from));
    let g = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ($f(v), v.delay === 0 && (g = !0)),
      (ia.instantAnimations || ia.skipAnimations) &&
        ((g = !0), $f(v), (v.delay = 0)),
      (v.allowFlatten = !p.type && !p.ease),
      g && !d && i.get() !== void 0)
    ) {
      const b = p3(v.keyframes, p);
      if (b !== void 0) {
        Xt.update(() => {
          (v.onUpdate(b), v.onComplete());
        });
        return;
      }
    }
    return p.isSync ? new Vd(v) : new KE(v);
  };
function w3({ protectedKeys: n, needsAnimating: i }, l) {
  const o = n.hasOwnProperty(l) && i[l] !== !0;
  return ((i[l] = !1), o);
}
function fb(n, i, { delay: l = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d = n.getDefaultTransition(), transitionEnd: f, ...p } = i;
  o && (d = o);
  const m = [],
    h = c && n.animationState && n.animationState.getState()[c];
  for (const v in p) {
    const g = n.getValue(v, n.latestValues[v] ?? null),
      b = p[v];
    if (b === void 0 || (h && w3(h, v))) continue;
    const w = { delay: l, ...Ld(d || {}, v) },
      A = g.get();
    if (
      A !== void 0 &&
      !g.isAnimating &&
      !Array.isArray(b) &&
      b === A &&
      !w.velocity
    )
      continue;
    let D = !1;
    if (window.MotionHandoffAnimation) {
      const O = ub(n);
      if (O) {
        const P = window.MotionHandoffAnimation(O, v, Xt);
        P !== null && ((w.startTime = P), (D = !0));
      }
    }
    (id(n, v),
      g.start(
        Wd(v, g, b, n.shouldReduceMotion && jx.has(v) ? { type: !1 } : w, n, D),
      ));
    const z = g.animation;
    z && m.push(z);
  }
  return (
    f &&
      Promise.all(m).then(() => {
        Xt.update(() => {
          f && d3(n, f);
        });
      }),
    m
  );
}
function db(n, i, l, o = 0, c = 1) {
  const d = Array.from(n)
      .sort((h, v) => h.sortNodePosition(v))
      .indexOf(i),
    f = n.size,
    p = (f - 1) * o;
  return typeof l == "function" ? l(d, f) : c === 1 ? d * o : p - d * o;
}
function sd(n, i, l = {}) {
  const o = ms(n, i, l.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: c = n.getDefaultTransition() || {} } = o || {};
  l.transitionOverride && (c = l.transitionOverride);
  const d = o ? () => Promise.all(fb(n, o, l)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: h = 0,
              staggerChildren: v,
              staggerDirection: g,
            } = c;
            return T3(n, i, m, h, v, g, l);
          }
        : () => Promise.resolve(),
    { when: p } = c;
  if (p) {
    const [m, h] = p === "beforeChildren" ? [d, f] : [f, d];
    return m().then(() => h());
  } else return Promise.all([d(), f(l.delay)]);
}
function T3(n, i, l = 0, o = 0, c = 0, d = 1, f) {
  const p = [];
  for (const m of n.variantChildren)
    (m.notify("AnimationStart", i),
      p.push(
        sd(m, i, {
          ...f,
          delay:
            l +
            (typeof o == "function" ? 0 : o) +
            db(n.variantChildren, m, o, c, d),
        }).then(() => m.notify("AnimationComplete", i)),
      ));
  return Promise.all(p);
}
function A3(n, i, l = {}) {
  n.notify("AnimationStart", i);
  let o;
  if (Array.isArray(i)) {
    const c = i.map((d) => sd(n, d, l));
    o = Promise.all(c);
  } else if (typeof i == "string") o = sd(n, i, l);
  else {
    const c = typeof i == "function" ? ms(n, i, l.custom) : i;
    o = Promise.all(fb(n, c, l));
  }
  return o.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function hb(n, i) {
  if (!Array.isArray(i)) return !1;
  const l = i.length;
  if (l !== n.length) return !1;
  for (let o = 0; o < l; o++) if (i[o] !== n[o]) return !1;
  return !0;
}
const E3 = Xd.length;
function mb(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const l = n.parent ? mb(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (l.initial = n.props.initial), l);
  }
  const i = {};
  for (let l = 0; l < E3; l++) {
    const o = Xd[l],
      c = n.props[o];
    (Vl(c) || c === !1) && (i[o] = c);
  }
  return i;
}
const M3 = [...qd].reverse(),
  C3 = qd.length;
function N3(n) {
  return (i) =>
    Promise.all(i.map(({ animation: l, options: o }) => A3(n, l, o)));
}
function R3(n) {
  let i = N3(n),
    l = oy(),
    o = !0;
  const c = (m) => (h, v) => {
    const g = ms(n, v, m === "exit" ? n.presenceContext?.custom : void 0);
    if (g) {
      const { transition: b, transitionEnd: w, ...A } = g;
      h = { ...h, ...A, ...w };
    }
    return h;
  };
  function d(m) {
    i = m(n);
  }
  function f(m) {
    const { props: h } = n,
      v = mb(n.parent) || {},
      g = [],
      b = new Set();
    let w = {},
      A = 1 / 0;
    for (let z = 0; z < C3; z++) {
      const O = M3[z],
        P = l[O],
        L = h[O] !== void 0 ? h[O] : v[O],
        F = Vl(L),
        Z = O === m ? P.isActive : null;
      Z === !1 && (A = z);
      let W = L === v[O] && L !== h[O] && F;
      if (
        (W && o && n.manuallyAnimateOnMount && (W = !1),
        (P.protectedKeys = { ...w }),
        (!P.isActive && Z === null) ||
          (!L && !P.prevProp) ||
          Ur(L) ||
          typeof L == "boolean")
      )
        continue;
      const Q = D3(P.prevProp, L);
      let G = Q || (O === m && P.isActive && !W && F) || (z > A && F),
        ot = !1;
      const ft = Array.isArray(L) ? L : [L];
      let wt = ft.reduce(c(O), {});
      Z === !1 && (wt = {});
      const { prevResolvedValues: pt = {} } = P,
        yt = { ...pt, ...wt },
        vt = (B) => {
          ((G = !0),
            b.has(B) && ((ot = !0), b.delete(B)),
            (P.needsAnimating[B] = !0));
          const H = n.getValue(B);
          H && (H.liveStyle = !1);
        };
      for (const B in yt) {
        const H = wt[B],
          et = pt[B];
        if (w.hasOwnProperty(B)) continue;
        let lt = !1;
        (ad(H) && ad(et) ? (lt = !hb(H, et)) : (lt = H !== et),
          lt
            ? H != null
              ? vt(B)
              : b.add(B)
            : H !== void 0 && b.has(B)
              ? vt(B)
              : (P.protectedKeys[B] = !0));
      }
      ((P.prevProp = L),
        (P.prevResolvedValues = wt),
        P.isActive && (w = { ...w, ...wt }),
        o && n.blockInitialAnimation && (G = !1));
      const bt = W && Q;
      G &&
        (!bt || ot) &&
        g.push(
          ...ft.map((B) => {
            const H = { type: O };
            if (
              typeof B == "string" &&
              o &&
              !bt &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: et } = n,
                lt = ms(et, B);
              if (et.enteringChildren && lt) {
                const { delayChildren: E } = lt.transition || {};
                H.delay = db(et.enteringChildren, n, E);
              }
            }
            return { animation: B, options: H };
          }),
        );
    }
    if (b.size) {
      const z = {};
      if (typeof h.initial != "boolean") {
        const O = ms(n, Array.isArray(h.initial) ? h.initial[0] : h.initial);
        O && O.transition && (z.transition = O.transition);
      }
      (b.forEach((O) => {
        const P = n.getBaseTarget(O),
          L = n.getValue(O);
        (L && (L.liveStyle = !0), (z[O] = P ?? null));
      }),
        g.push({ animation: z }));
    }
    let D = !!g.length;
    return (
      o &&
        (h.initial === !1 || h.initial === h.animate) &&
        !n.manuallyAnimateOnMount &&
        (D = !1),
      (o = !1),
      D ? i(g) : Promise.resolve()
    );
  }
  function p(m, h) {
    if (l[m].isActive === h) return Promise.resolve();
    (n.variantChildren?.forEach((g) => g.animationState?.setActive(m, h)),
      (l[m].isActive = h));
    const v = f(m);
    for (const g in l) l[g].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: f,
    setActive: p,
    setAnimateFunction: d,
    getState: () => l,
    reset: () => {
      ((l = oy()), (o = !0));
    },
  };
}
function D3(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !hb(i, n) : !1;
}
function ci(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function oy() {
  return {
    animate: ci(!0),
    whileInView: ci(),
    whileHover: ci(),
    whileTap: ci(),
    whileDrag: ci(),
    whileFocus: ci(),
    exit: ci(),
  };
}
class Ba {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class O3 extends Ba {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = R3(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Ur(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: l } = this.node.prevProps || {};
    i !== l && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let j3 = 0;
class _3 extends Ba {
  constructor() {
    (super(...arguments), (this.id = j3++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: l } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === o) return;
    const c = this.node.animationState.setActive("exit", !i);
    l &&
      !i &&
      c.then(() => {
        l(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: l } = this.node.presenceContext || {};
    (l && l(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const z3 = { animation: { Feature: O3 }, exit: { Feature: _3 } };
function Ll(n, i, l, o = { passive: !0 }) {
  return (n.addEventListener(i, l, o), () => n.removeEventListener(i, l));
}
function Pl(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const H3 = (n) => (i) => Yd(i) && n(i, Pl(i));
function Nl(n, i, l, o) {
  return Ll(n, i, H3(l), o);
}
const pb = 1e-4,
  k3 = 1 - pb,
  V3 = 1 + pb,
  gb = 0.01,
  B3 = 0 - gb,
  L3 = 0 + gb;
function Ce(n) {
  return n.max - n.min;
}
function U3(n, i, l) {
  return Math.abs(n - i) <= l;
}
function ry(n, i, l, o = 0.5) {
  ((n.origin = o),
    (n.originPoint = Kt(i.min, i.max, n.origin)),
    (n.scale = Ce(l) / Ce(i)),
    (n.translate = Kt(l.min, l.max, n.origin) - n.originPoint),
    ((n.scale >= k3 && n.scale <= V3) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= B3 && n.translate <= L3) || isNaN(n.translate)) &&
      (n.translate = 0));
}
function Rl(n, i, l, o) {
  (ry(n.x, i.x, l.x, o ? o.originX : void 0),
    ry(n.y, i.y, l.y, o ? o.originY : void 0));
}
function cy(n, i, l) {
  ((n.min = l.min + i.min), (n.max = n.min + Ce(i)));
}
function G3(n, i, l) {
  (cy(n.x, i.x, l.x), cy(n.y, i.y, l.y));
}
function uy(n, i, l) {
  ((n.min = i.min - l.min), (n.max = n.min + Ce(i)));
}
function Dl(n, i, l) {
  (uy(n.x, i.x, l.x), uy(n.y, i.y, l.y));
}
function rn(n) {
  return [n("x"), n("y")];
}
const yb = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  fy = (n, i) => Math.abs(n - i);
function Y3(n, i) {
  const l = fy(n.x, i.x),
    o = fy(n.y, i.y);
  return Math.sqrt(l ** 2 + o ** 2);
}
class vb {
  constructor(
    i,
    l,
    {
      transformPagePoint: o,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: f = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = Af(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          A = Y3(b.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!w && !A) return;
        const { point: D } = b,
          { timestamp: z } = ge;
        this.history.push({ ...D, timestamp: z });
        const { onStart: O, onMove: P } = this.handlers;
        (w ||
          (O && O(this.lastMoveEvent, b),
          (this.startEvent = this.lastMoveEvent)),
          P && P(this.lastMoveEvent, b));
      }),
      (this.handlePointerMove = (b, w) => {
        ((this.lastMoveEvent = b),
          (this.lastMoveEventInfo = Tf(w, this.transformPagePoint)),
          Xt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (b, w) => {
        this.end();
        const { onEnd: A, onSessionEnd: D, resumeAnimation: z } = this.handlers;
        if (
          (this.dragSnapToOrigin && z && z(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const O = Af(
          b.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Tf(w, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && A && A(b, O), D && D(b, O));
      }),
      !Yd(i))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = l),
      (this.transformPagePoint = o),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const p = Pl(i),
      m = Tf(p, this.transformPagePoint),
      { point: h } = m,
      { timestamp: v } = ge;
    this.history = [{ ...h, timestamp: v }];
    const { onSessionStart: g } = l;
    (g && g(i, Af(m, this.history)),
      (this.removeListeners = Yl(
        Nl(this.contextWindow, "pointermove", this.handlePointerMove),
        Nl(this.contextWindow, "pointerup", this.handlePointerUp),
        Nl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), ka(this.updatePoint));
  }
}
function Tf(n, i) {
  return i ? { point: i(n.point) } : n;
}
function dy(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function Af({ point: n }, i) {
  return {
    point: n,
    delta: dy(n, xb(i)),
    offset: dy(n, q3(i)),
    velocity: X3(i, 0.1),
  };
}
function q3(n) {
  return n[0];
}
function xb(n) {
  return n[n.length - 1];
}
function X3(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let l = n.length - 1,
    o = null;
  const c = xb(n);
  for (; l >= 0 && ((o = n[l]), !(c.timestamp - o.timestamp > Rn(i))); ) l--;
  if (!o) return { x: 0, y: 0 };
  const d = cn(c.timestamp - o.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - o.x) / d, y: (c.y - o.y) / d };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function P3(n, { min: i, max: l }, o) {
  return (
    i !== void 0 && n < i
      ? (n = o ? Kt(i, n, o.min) : Math.max(n, i))
      : l !== void 0 && n > l && (n = o ? Kt(l, n, o.max) : Math.min(n, l)),
    n
  );
}
function hy(n, i, l) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0,
  };
}
function K3(n, { top: i, left: l, bottom: o, right: c }) {
  return { x: hy(n.x, l, c), y: hy(n.y, i, o) };
}
function my(n, i) {
  let l = i.min - n.min,
    o = i.max - n.max;
  return (
    i.max - i.min < n.max - n.min && ([l, o] = [o, l]),
    { min: l, max: o }
  );
}
function Q3(n, i) {
  return { x: my(n.x, i.x), y: my(n.y, i.y) };
}
function Z3(n, i) {
  let l = 0.5;
  const o = Ce(n),
    c = Ce(i);
  return (
    c > o
      ? (l = zl(i.min, i.max - o, n.min))
      : o > c && (l = zl(n.min, n.max - c, i.min)),
    aa(0, 1, l)
  );
}
function F3(n, i) {
  const l = {};
  return (
    i.min !== void 0 && (l.min = i.min - n.min),
    i.max !== void 0 && (l.max = i.max - n.min),
    l
  );
}
const ld = 0.35;
function J3(n = ld) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = ld),
    { x: py(n, "left", "right"), y: py(n, "top", "bottom") }
  );
}
function py(n, i, l) {
  return { min: gy(n, i), max: gy(n, l) };
}
function gy(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const W3 = new WeakMap();
class $3 {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = $t()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: l = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (g) => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b ? this.pauseAnimation() : this.stopAnimation(),
          l && this.snapToCursor(Pl(g).point));
      },
      f = (g, b) => {
        const { drag: w, dragPropagation: A, onDragStart: D } = this.getProps();
        if (
          w &&
          !A &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = c4(w)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = b),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          rn((O) => {
            let P = this.getAxisMotionValue(O).get() || 0;
            if (Dn.test(P)) {
              const { projection: L } = this.visualElement;
              if (L && L.layout) {
                const F = L.layout.layoutBox[O];
                F && (P = Ce(F) * (parseFloat(P) / 100));
              }
            }
            this.originPoint[O] = P;
          }),
          D && Xt.postRender(() => D(g, b)),
          id(this.visualElement, "transform"));
        const { animationState: z } = this.visualElement;
        z && z.setActive("whileDrag", !0);
      },
      p = (g, b) => {
        ((this.latestPointerEvent = g), (this.latestPanInfo = b));
        const {
          dragPropagation: w,
          dragDirectionLock: A,
          onDirectionLock: D,
          onDrag: z,
        } = this.getProps();
        if (!w && !this.openDragLock) return;
        const { offset: O } = b;
        if (A && this.currentDirection === null) {
          ((this.currentDirection = I3(O)),
            this.currentDirection !== null && D && D(this.currentDirection));
          return;
        }
        (this.updateAxis("x", b.point, O),
          this.updateAxis("y", b.point, O),
          this.visualElement.render(),
          z && z(g, b));
      },
      m = (g, b) => {
        ((this.latestPointerEvent = g),
          (this.latestPanInfo = b),
          this.stop(g, b),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      h = () =>
        rn(
          (g) =>
            this.getAnimationState(g) === "paused" &&
            this.getAxisMotionValue(g).animation?.play(),
        ),
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new vb(
      i,
      {
        onSessionStart: d,
        onStart: f,
        onMove: p,
        onSessionEnd: m,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: o,
        contextWindow: yb(this.visualElement),
      },
    );
  }
  stop(i, l) {
    const o = i || this.latestPointerEvent,
      c = l || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !o)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: p } = this.getProps();
    p && Xt.postRender(() => p(o, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: l } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: o } = this.getProps();
    (!o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      l && l.setActive("whileDrag", !1));
  }
  updateAxis(i, l, o) {
    const { drag: c } = this.getProps();
    if (!o || !mr(i, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + o[i];
    (this.constraints &&
      this.constraints[i] &&
      (f = P3(f, this.constraints[i], this.elastic[i])),
      d.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: l } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      c = this.constraints;
    (i && cs(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && o
        ? (this.constraints = K3(o.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = J3(l)),
      c !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        rn((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = F3(o.layoutBox[d], this.constraints[d]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: l } = this.getProps();
    if (!i || !cs(i)) return !1;
    const o = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const d = t3(o, c.root, this.visualElement.getTransformPagePoint());
    let f = Q3(c.layout.layoutBox, d);
    if (l) {
      const p = l(W4(f));
      ((this.hasMutatedConstraints = !!p), p && (f = nb(p)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: l,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: f,
        onDragTransitionEnd: p,
      } = this.getProps(),
      m = this.constraints || {},
      h = rn((v) => {
        if (!mr(v, l, this.currentDirection)) return;
        let g = (m && m[v]) || {};
        f && (g = { min: 0, max: 0 });
        const b = c ? 200 : 1e6,
          w = c ? 40 : 1e7,
          A = {
            type: "inertia",
            velocity: o ? i[v] : 0,
            bounceStiffness: b,
            bounceDamping: w,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...g,
          };
        return this.startAxisValueAnimation(v, A);
      });
    return Promise.all(h).then(p);
  }
  startAxisValueAnimation(i, l) {
    const o = this.getAxisMotionValue(i);
    return (
      id(this.visualElement, i),
      o.start(Wd(i, o, 0, l, this.visualElement, !1))
    );
  }
  stopAnimation() {
    rn((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    rn((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const l = `_drag${i.toUpperCase()}`,
      o = this.visualElement.getProps(),
      c = o[l];
    return (
      c ||
      this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    rn((l) => {
      const { drag: o } = this.getProps();
      if (!mr(l, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(l);
      if (c && c.layout) {
        const { min: f, max: p } = c.layout.layoutBox[l];
        d.set(i[l] - Kt(f, p, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: l } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!cs(l) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    rn((f) => {
      const p = this.getAxisMotionValue(f);
      if (p && this.constraints !== !1) {
        const m = p.get();
        c[f] = Z3({ min: m, max: m }, this.constraints[f]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      rn((f) => {
        if (!mr(f, i, null)) return;
        const p = this.getAxisMotionValue(f),
          { min: m, max: h } = this.constraints[f];
        p.set(Kt(m, h, c[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    W3.set(this.visualElement, this);
    const i = this.visualElement.current,
      l = Nl(i, "pointerdown", (m) => {
        const { drag: h, dragListener: v = !0 } = this.getProps();
        h && v && this.start(m);
      }),
      o = () => {
        const { dragConstraints: m } = this.getProps();
        cs(m) && m.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: c } = this.visualElement,
      d = c.addEventListener("measure", o);
    (c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()),
      Xt.read(o));
    const f = Ll(window, "resize", () => this.scalePositionWithinConstraints()),
      p = c.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: h }) => {
          this.isDragging &&
            h &&
            (rn((v) => {
              const g = this.getAxisMotionValue(v);
              g &&
                ((this.originPoint[v] += m[v].translate),
                g.set(g.get() + m[v].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (f(), l(), d(), p && p());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: l = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: f = ld,
        dragMomentum: p = !0,
      } = i;
    return {
      ...i,
      drag: l,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: p,
    };
  }
}
function mr(n, i, l) {
  return (i === !0 || i === n) && (l === null || l === n);
}
function I3(n, i = 10) {
  let l = null;
  return (Math.abs(n.y) > i ? (l = "y") : Math.abs(n.x) > i && (l = "x"), l);
}
class tM extends Ba {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = un),
      (this.removeListeners = un),
      (this.controls = new $3(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || un));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const yy = (n) => (i, l) => {
  n && Xt.postRender(() => n(i, l));
};
class eM extends Ba {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = un));
  }
  onPointerDown(i) {
    this.session = new vb(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: yb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: l,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: yy(i),
      onStart: yy(l),
      onMove: o,
      onEnd: (d, f) => {
        (delete this.session, c && Xt.postRender(() => c(d, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Nl(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const xr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function vy(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const Al = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (dt.test(n)) n = parseFloat(n);
        else return n;
      const l = vy(n, i.target.x),
        o = vy(n, i.target.y);
      return `${l}% ${o}%`;
    },
  },
  nM = {
    correct: (n, { treeScale: i, projectionDelta: l }) => {
      const o = n,
        c = Va.parse(n);
      if (c.length > 5) return o;
      const d = Va.createTransformer(n),
        f = typeof c[0] != "number" ? 1 : 0,
        p = l.x.scale * i.x,
        m = l.y.scale * i.y;
      ((c[0 + f] /= p), (c[1 + f] /= m));
      const h = Kt(p, m, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= h),
        typeof c[3 + f] == "number" && (c[3 + f] /= h),
        d(c)
      );
    },
  };
let Ef = !1;
class aM extends C.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: l,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: d } = i;
    (E4(iM),
      d &&
        (l.group && l.group.add(d),
        o && o.register && c && o.register(d),
        Ef && d.root.didUpdate(),
        d.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        d.setOptions({
          ...d.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (xr.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: l,
        visualElement: o,
        drag: c,
        isPresent: d,
      } = this.props,
      { projection: f } = o;
    return (
      f &&
        ((f.isPresent = d),
        (Ef = !0),
        c || i.layoutDependency !== l || l === void 0 || i.isPresent !== d
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== d &&
          (d
            ? f.promote()
            : f.relegate() ||
              Xt.postRender(() => {
                const p = f.getStack();
                (!p || !p.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Gd.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: l,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = i;
    ((Ef = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        l && l.group && l.group.remove(c),
        o && o.deregister && o.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function bb(n) {
  const [i, l] = v4(),
    o = C.useContext($v);
  return S.jsx(aM, {
    ...n,
    layoutGroup: o,
    switchLayoutGroup: C.useContext(tb),
    isPresent: i,
    safeToRemove: l,
  });
}
const iM = {
  borderRadius: {
    ...Al,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Al,
  borderTopRightRadius: Al,
  borderBottomLeftRadius: Al,
  borderBottomRightRadius: Al,
  boxShadow: nM,
};
function sM(n, i, l) {
  const o = be(n) ? n : ys(n);
  return (o.start(Wd("", o, i, l)), o.animation);
}
const lM = (n, i) => n.depth - i.depth;
class oM {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (wd(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Td(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(lM),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function rM(n, i) {
  const l = Le.now(),
    o = ({ timestamp: c }) => {
      const d = c - l;
      d >= i && (ka(o), n(d - i));
    };
  return (Xt.setup(o, !0), () => ka(o));
}
const Sb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cM = Sb.length,
  xy = (n) => (typeof n == "string" ? parseFloat(n) : n),
  by = (n) => typeof n == "number" || dt.test(n);
function uM(n, i, l, o, c, d) {
  c
    ? ((n.opacity = Kt(0, l.opacity ?? 1, fM(o))),
      (n.opacityExit = Kt(i.opacity ?? 1, 0, dM(o))))
    : d && (n.opacity = Kt(i.opacity ?? 1, l.opacity ?? 1, o));
  for (let f = 0; f < cM; f++) {
    const p = `border${Sb[f]}Radius`;
    let m = Sy(i, p),
      h = Sy(l, p);
    if (m === void 0 && h === void 0) continue;
    (m || (m = 0),
      h || (h = 0),
      m === 0 || h === 0 || by(m) === by(h)
        ? ((n[p] = Math.max(Kt(xy(m), xy(h), o), 0)),
          (Dn.test(h) || Dn.test(m)) && (n[p] += "%"))
        : (n[p] = h));
  }
  (i.rotate || l.rotate) && (n.rotate = Kt(i.rotate || 0, l.rotate || 0, o));
}
function Sy(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const fM = wb(0, 0.5, cx),
  dM = wb(0.5, 0.95, un);
function wb(n, i, l) {
  return (o) => (o < n ? 0 : o > i ? 1 : l(zl(n, i, o)));
}
function wy(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function on(n, i) {
  (wy(n.x, i.x), wy(n.y, i.y));
}
function Ty(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function Ay(n, i, l, o, c) {
  return (
    (n -= i),
    (n = Nr(n, 1 / l, o)),
    c !== void 0 && (n = Nr(n, 1 / c, o)),
    n
  );
}
function hM(n, i = 0, l = 1, o = 0.5, c, d = n, f = n) {
  if (
    (Dn.test(i) &&
      ((i = parseFloat(i)), (i = Kt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let p = Kt(d.min, d.max, o);
  (n === d && (p -= i),
    (n.min = Ay(n.min, i, l, p, c)),
    (n.max = Ay(n.max, i, l, p, c)));
}
function Ey(n, i, [l, o, c], d, f) {
  hM(n, i[l], i[o], i[c], i.scale, d, f);
}
const mM = ["x", "scaleX", "originX"],
  pM = ["y", "scaleY", "originY"];
function My(n, i, l, o) {
  (Ey(n.x, i, mM, l ? l.x : void 0, o ? o.x : void 0),
    Ey(n.y, i, pM, l ? l.y : void 0, o ? o.y : void 0));
}
function Cy(n) {
  return n.translate === 0 && n.scale === 1;
}
function Tb(n) {
  return Cy(n.x) && Cy(n.y);
}
function Ny(n, i) {
  return n.min === i.min && n.max === i.max;
}
function gM(n, i) {
  return Ny(n.x, i.x) && Ny(n.y, i.y);
}
function Ry(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function Ab(n, i) {
  return Ry(n.x, i.x) && Ry(n.y, i.y);
}
function Dy(n) {
  return Ce(n.x) / Ce(n.y);
}
function Oy(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class yM {
  constructor() {
    this.members = [];
  }
  add(i) {
    (wd(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if (
      (Td(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const l = this.members[this.members.length - 1];
      l && this.promote(l);
    }
  }
  relegate(i) {
    const l = this.members.findIndex((c) => i === c);
    if (l === 0) return !1;
    let o;
    for (let c = l; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== !1) {
        o = d;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(i, l) {
    const o = this.lead;
    if (i !== o && ((this.prevLead = o), (this.lead = i), i.show(), o)) {
      (o.instance && o.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = o),
        l && (i.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((i.snapshot = o.snapshot),
          (i.snapshot.latestValues = o.animationValues || o.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      const { crossfade: c } = i.options;
      c === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: l, resumingFrom: o } = i;
      (l.onExitComplete && l.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vM(n, i, l) {
  let o = "";
  const c = n.x.translate / i.x,
    d = n.y.translate / i.y,
    f = l?.z || 0;
  if (
    ((c || d || f) && (o = `translate3d(${c}px, ${d}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `),
    l)
  ) {
    const {
      transformPerspective: h,
      rotate: v,
      rotateX: g,
      rotateY: b,
      skewX: w,
      skewY: A,
    } = l;
    (h && (o = `perspective(${h}px) ${o}`),
      v && (o += `rotate(${v}deg) `),
      g && (o += `rotateX(${g}deg) `),
      b && (o += `rotateY(${b}deg) `),
      w && (o += `skewX(${w}deg) `),
      A && (o += `skewY(${A}deg) `));
  }
  const p = n.x.scale * i.x,
    m = n.y.scale * i.y;
  return ((p !== 1 || m !== 1) && (o += `scale(${p}, ${m})`), o || "none");
}
const Mf = ["", "X", "Y", "Z"],
  xM = 1e3;
let bM = 0;
function Cf(n, i, l, o) {
  const { latestValues: c } = i;
  c[n] && ((l[n] = c[n]), i.setStaticValue(n, 0), o && (o[n] = 0));
}
function Eb(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const l = ub(i);
  if (window.MotionHasOptimisedAnimation(l, "transform")) {
    const { layout: c, layoutId: d } = n.options;
    window.MotionCancelOptimisedAnimation(l, "transform", Xt, !(c || d));
  }
  const { parent: o } = n;
  o && !o.hasCheckedOptimisedAppear && Eb(o);
}
function Mb({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: l,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, p = i?.()) {
      ((this.id = bM++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(TM),
            this.nodes.forEach(CM),
            this.nodes.forEach(NM),
            this.nodes.forEach(AM));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = p ? p.root || p : this),
        (this.path = p ? [...p.path, p] : []),
        (this.parent = p),
        (this.depth = p ? p.depth + 1 : 0));
      for (let m = 0; m < this.path.length; m++)
        this.path[m].shouldResetTransform = !0;
      this.root === this && (this.nodes = new oM());
    }
    addEventListener(f, p) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Md()),
        this.eventHandlers.get(f).add(p)
      );
    }
    notifyListeners(f, ...p) {
      const m = this.eventHandlers.get(f);
      m && m.notify(...p);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = Gx(f) && !p4(f)), (this.instance = f));
      const { layoutId: p, layout: m, visualElement: h } = this.options;
      if (
        (h && !h.current && h.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (m || p) && (this.isLayoutDirty = !0),
        n)
      ) {
        let v,
          g = 0;
        const b = () => (this.root.updateBlockedByResize = !1);
        (Xt.read(() => {
          g = window.innerWidth;
        }),
          n(f, () => {
            const w = window.innerWidth;
            w !== g &&
              ((g = w),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = rM(b, 250)),
              xr.hasAnimatedSinceResize &&
                ((xr.hasAnimatedSinceResize = !1), this.nodes.forEach(zy)));
          }));
      }
      (p && this.root.registerSharedNode(p, this),
        this.options.animate !== !1 &&
          h &&
          (p || m) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: g,
              hasRelativeLayoutChanged: b,
              layout: w,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const A =
                  this.options.transition || h.getDefaultTransition() || _M,
                { onLayoutAnimationStart: D, onLayoutAnimationComplete: z } =
                  h.getProps(),
                O = !this.targetLayout || !Ab(this.targetLayout, w),
                P = !g && b;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                P ||
                (g && (O || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const L = { ...Ld(A, "layout"), onPlay: D, onComplete: z };
                ((h.shouldReduceMotion || this.options.layoutRoot) &&
                  ((L.delay = 0), (L.type = !1)),
                  this.startAnimation(L),
                  this.setAnimationOrigin(v, P));
              } else
                (g || zy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = w;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ka(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(RM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Eb(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v];
        ((g.shouldResetTransform = !0),
          g.updateScroll("snapshot"),
          g.options.layoutRoot && g.willUpdate(!1));
      }
      const { layoutId: p, layout: m } = this.options;
      if (p === void 0 && !m) return;
      const h = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = h
        ? h(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(jy));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(_y);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(MM),
            this.nodes.forEach(SM),
            this.nodes.forEach(wM))
          : this.nodes.forEach(_y),
        this.clearAllSnapshots());
      const p = Le.now();
      ((ge.delta = aa(0, 1e3 / 60, p - ge.timestamp)),
        (ge.timestamp = p),
        (ge.isProcessing = !0),
        pf.update.process(ge),
        pf.preRender.process(ge),
        pf.render.process(ge),
        (ge.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Gd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(EM), this.sharedNodes.forEach(DM));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Xt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Xt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ce(this.snapshot.measuredBox.x) &&
          !Ce(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let m = 0; m < this.path.length; m++) this.path[m].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = $t()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: p } = this.options;
      p &&
        p.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let p = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (p = !1),
        p && this.instance)
      ) {
        const m = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: m,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : m,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        p = this.projectionDelta && !Tb(this.projectionDelta),
        m = this.getTransformTemplate(),
        h = m ? m(this.latestValues, "") : void 0,
        v = h !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (p || ui(this.latestValues) || v) &&
        (c(this.instance, h),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const p = this.measurePageBox();
      let m = this.removeElementScroll(p);
      return (
        f && (m = this.removeTransform(m)),
        zM(m),
        {
          animationId: this.root.animationId,
          measuredBox: p,
          layoutBox: m,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return $t();
      const p = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(HM))) {
        const { scroll: h } = this.root;
        h && (us(p.x, h.offset.x), us(p.y, h.offset.y));
      }
      return p;
    }
    removeElementScroll(f) {
      const p = $t();
      if ((on(p, f), this.scroll?.wasRoot)) return p;
      for (let m = 0; m < this.path.length; m++) {
        const h = this.path[m],
          { scroll: v, options: g } = h;
        h !== this.root &&
          v &&
          g.layoutScroll &&
          (v.wasRoot && on(p, f), us(p.x, v.offset.x), us(p.y, v.offset.y));
      }
      return p;
    }
    applyTransform(f, p = !1) {
      const m = $t();
      on(m, f);
      for (let h = 0; h < this.path.length; h++) {
        const v = this.path[h];
        (!p &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          fs(m, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          ui(v.latestValues) && fs(m, v.latestValues));
      }
      return (ui(this.latestValues) && fs(m, this.latestValues), m);
    }
    removeTransform(f) {
      const p = $t();
      on(p, f);
      for (let m = 0; m < this.path.length; m++) {
        const h = this.path[m];
        if (!h.instance || !ui(h.latestValues)) continue;
        td(h.latestValues) && h.updateSnapshot();
        const v = $t(),
          g = h.measurePageBox();
        (on(v, g),
          My(p, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, v));
      }
      return (ui(this.latestValues) && My(p, this.latestValues), p);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const p = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = p.isSharedProjectionDirty));
      const m = !!this.resumingFrom || this !== p;
      if (
        !(
          f ||
          (m && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: g } = this.options;
      if (!(!this.layout || !(v || g))) {
        if (
          ((this.resolvedRelativeTargetAt = ge.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const b = this.getClosestProjectingParent();
          b && b.layout && this.animationProgress !== 1
            ? ((this.relativeParent = b),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = $t()),
              (this.relativeTargetOrigin = $t()),
              Dl(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                b.layout.layoutBox,
              ),
              on(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = $t()), (this.targetWithTransforms = $t())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              G3(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : on(this.target, this.layout.layoutBox),
                ib(this.target, this.targetDelta))
              : on(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const b = this.getClosestProjectingParent();
          b &&
          !!b.resumingFrom == !!this.resumingFrom &&
          !b.options.layoutScroll &&
          b.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = b),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = $t()),
              (this.relativeTargetOrigin = $t()),
              Dl(this.relativeTargetOrigin, this.target, b.target),
              on(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          td(this.parent.latestValues) ||
          ab(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      const f = this.getLead(),
        p = !!this.resumingFrom || this !== f;
      let m = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (m = !1),
        p &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (m = !1),
        this.resolvedRelativeTargetAt === ge.timestamp && (m = !1),
        m)
      )
        return;
      const { layout: h, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(h || v))
      )
        return;
      on(this.layoutCorrected, this.layout.layoutBox);
      const g = this.treeScale.x,
        b = this.treeScale.y;
      (I4(this.layoutCorrected, this.treeScale, this.path, p),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = $t())));
      const { target: w } = f;
      if (!w) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ty(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ty(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Rl(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.treeScale.x !== g ||
          this.treeScale.y !== b ||
          !Oy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Oy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", w)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ds()),
        (this.projectionDelta = ds()),
        (this.projectionDeltaWithTransform = ds()));
    }
    setAnimationOrigin(f, p = !1) {
      const m = this.snapshot,
        h = m ? m.latestValues : {},
        v = { ...this.latestValues },
        g = ds();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !p));
      const b = $t(),
        w = m ? m.source : void 0,
        A = this.layout ? this.layout.source : void 0,
        D = w !== A,
        z = this.getStack(),
        O = !z || z.members.length <= 1,
        P = !!(D && !O && this.options.crossfade === !0 && !this.path.some(jM));
      this.animationProgress = 0;
      let L;
      ((this.mixTargetDelta = (F) => {
        const Z = F / 1e3;
        (Hy(g.x, f.x, Z),
          Hy(g.y, f.y, Z),
          this.setTargetDelta(g),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Dl(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            OM(this.relativeTarget, this.relativeTargetOrigin, b, Z),
            L && gM(this.relativeTarget, L) && (this.isProjectionDirty = !1),
            L || (L = $t()),
            on(L, this.relativeTarget)),
          D &&
            ((this.animationValues = v), uM(v, h, this.latestValues, Z, P, O)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = Z));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (ka(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Xt.update(() => {
          ((xr.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ys(0)),
            (this.currentAnimation = sM(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (p) => {
                (this.mixTargetDelta(p), f.onUpdate && f.onUpdate(p));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(xM),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: p,
        target: m,
        layout: h,
        latestValues: v,
      } = f;
      if (!(!p || !m || !h)) {
        if (
          this !== f &&
          this.layout &&
          h &&
          Cb(this.options.animationType, this.layout.layoutBox, h.layoutBox)
        ) {
          m = this.target || $t();
          const g = Ce(this.layout.layoutBox.x);
          ((m.x.min = f.target.x.min), (m.x.max = m.x.min + g));
          const b = Ce(this.layout.layoutBox.y);
          ((m.y.min = f.target.y.min), (m.y.max = m.y.min + b));
        }
        (on(p, m),
          fs(p, v),
          Rl(this.projectionDeltaWithTransform, this.layoutCorrected, p, v));
      }
    }
    registerSharedNode(f, p) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new yM()),
        this.sharedNodes.get(f).add(p));
      const h = p.options.initialPromotionConfig;
      p.promote({
        transition: h ? h.transition : void 0,
        preserveFollowOpacity:
          h && h.shouldPreserveFollowOpacity
            ? h.shouldPreserveFollowOpacity(p)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: p, preserveFollowOpacity: m } = {}) {
      const h = this.getStack();
      (h && h.promote(this, m),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        p && this.setOptions({ transition: p }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let p = !1;
      const { latestValues: m } = f;
      if (
        ((m.z ||
          m.rotate ||
          m.rotateX ||
          m.rotateY ||
          m.rotateZ ||
          m.skewX ||
          m.skewY) &&
          (p = !0),
        !p)
      )
        return;
      const h = {};
      m.z && Cf("z", f, h, this.animationValues);
      for (let v = 0; v < Mf.length; v++)
        (Cf(`rotate${Mf[v]}`, f, h, this.animationValues),
          Cf(`skew${Mf[v]}`, f, h, this.animationValues));
      f.render();
      for (const v in h)
        (f.setStaticValue(v, h[v]),
          this.animationValues && (this.animationValues[v] = h[v]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, p) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const m = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = vr(p?.pointerEvents) || ""),
          (f.transform = m ? m(this.latestValues, "") : "none"));
        return;
      }
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = vr(p?.pointerEvents) || "")),
          this.hasProjected &&
            !ui(this.latestValues) &&
            ((f.transform = m ? m({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const v = h.animationValues || h.latestValues;
      this.applyTransformsToTarget();
      let g = vM(this.projectionDeltaWithTransform, this.treeScale, v);
      (m && (g = m(v, g)), (f.transform = g));
      const { x: b, y: w } = this.projectionDelta;
      ((f.transformOrigin = `${b.origin * 100}% ${w.origin * 100}% 0`),
        h.animationValues
          ? (f.opacity =
              h === this
                ? (v.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (f.opacity =
              h === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0));
      for (const A in Bl) {
        if (v[A] === void 0) continue;
        const { correct: D, applyTo: z, isCSSVariable: O } = Bl[A],
          P = g === "none" ? v[A] : D(v[A], h);
        if (z) {
          const L = z.length;
          for (let F = 0; F < L; F++) f[z[F]] = P;
        } else
          O ? (this.options.visualElement.renderState.vars[A] = P) : (f[A] = P);
      }
      this.options.layoutId &&
        (f.pointerEvents = h === this ? vr(p?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(jy),
        this.root.sharedNodes.clear());
    }
  };
}
function SM(n) {
  n.updateLayout();
}
function wM(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: o } = n.layout,
      { animationType: c } = n.options,
      d = i.source !== n.layout.source;
    c === "size"
      ? rn((v) => {
          const g = d ? i.measuredBox[v] : i.layoutBox[v],
            b = Ce(g);
          ((g.min = l[v].min), (g.max = g.min + b));
        })
      : Cb(c, i.layoutBox, l) &&
        rn((v) => {
          const g = d ? i.measuredBox[v] : i.layoutBox[v],
            b = Ce(l[v]);
          ((g.max = g.min + b),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[v].max = n.relativeTarget[v].min + b)));
        });
    const f = ds();
    Rl(f, l, i.layoutBox);
    const p = ds();
    d ? Rl(p, n.applyTransform(o, !0), i.measuredBox) : Rl(p, l, i.layoutBox);
    const m = !Tb(f);
    let h = !1;
    if (!n.resumeFrom) {
      const v = n.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: g, layout: b } = v;
        if (g && b) {
          const w = $t();
          Dl(w, i.layoutBox, g.layoutBox);
          const A = $t();
          (Dl(A, l, b.layoutBox),
            Ab(w, A) || (h = !0),
            v.options.layoutRoot &&
              ((n.relativeTarget = A),
              (n.relativeTargetOrigin = w),
              (n.relativeParent = v)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: i,
      delta: p,
      layoutDelta: f,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: h,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function TM(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function AM(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function EM(n) {
  n.clearSnapshot();
}
function jy(n) {
  n.clearMeasurements();
}
function _y(n) {
  n.isLayoutDirty = !1;
}
function MM(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform());
}
function zy(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function CM(n) {
  n.resolveTargetDelta();
}
function NM(n) {
  n.calcProjection();
}
function RM(n) {
  n.resetSkewAndRotation();
}
function DM(n) {
  n.removeLeadSnapshot();
}
function Hy(n, i, l) {
  ((n.translate = Kt(i.translate, 0, l)),
    (n.scale = Kt(i.scale, 1, l)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function ky(n, i, l, o) {
  ((n.min = Kt(i.min, l.min, o)), (n.max = Kt(i.max, l.max, o)));
}
function OM(n, i, l, o) {
  (ky(n.x, i.x, l.x, o), ky(n.y, i.y, l.y, o));
}
function jM(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const _M = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vy = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  By = Vy("applewebkit/") && !Vy("chrome/") ? Math.round : un;
function Ly(n) {
  ((n.min = By(n.min)), (n.max = By(n.max)));
}
function zM(n) {
  (Ly(n.x), Ly(n.y));
}
function Cb(n, i, l) {
  return (
    n === "position" || (n === "preserve-aspect" && !U3(Dy(i), Dy(l), 0.2))
  );
}
function HM(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const kM = Mb({
    attachResizeListener: (n, i) => Ll(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Nf = { current: void 0 },
  Nb = Mb({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Nf.current) {
        const n = new kM({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (Nf.current = n));
      }
      return Nf.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  VM = {
    pan: { Feature: eM },
    drag: { Feature: tM, ProjectionNode: Nb, MeasureLayout: bb },
  };
function Uy(n, i, l) {
  const { props: o } = n;
  n.animationState &&
    o.whileHover &&
    n.animationState.setActive("whileHover", l === "Start");
  const c = "onHover" + l,
    d = o[c];
  d && Xt.postRender(() => d(i, Pl(i)));
}
class BM extends Ba {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = u4(
        i,
        (l, o) => (Uy(this.node, o, "Start"), (c) => Uy(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class LM extends Ba {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Yl(
      Ll(this.node.current, "focus", () => this.onFocus()),
      Ll(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Gy(n, i, l) {
  const { props: o } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    o.whileTap &&
    n.animationState.setActive("whileTap", l === "Start");
  const c = "onTap" + (l === "End" ? "" : l),
    d = o[c];
  d && Xt.postRender(() => d(i, Pl(i)));
}
class UM extends Ba {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = m4(
        i,
        (l, o) => (
          Gy(this.node, o, "Start"),
          (c, { success: d }) => Gy(this.node, c, d ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const od = new WeakMap(),
  Rf = new WeakMap(),
  GM = (n) => {
    const i = od.get(n.target);
    i && i(n);
  },
  YM = (n) => {
    n.forEach(GM);
  };
function qM({ root: n, ...i }) {
  const l = n || document;
  Rf.has(l) || Rf.set(l, {});
  const o = Rf.get(l),
    c = JSON.stringify(i);
  return (
    o[c] || (o[c] = new IntersectionObserver(YM, { root: n, ...i })),
    o[c]
  );
}
function XM(n, i, l) {
  const o = qM(i);
  return (
    od.set(n, l),
    o.observe(n),
    () => {
      (od.delete(n), o.unobserve(n));
    }
  );
}
const PM = { some: 0, all: 1 };
class KM extends Ba {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: l, margin: o, amount: c = "some", once: d } = i,
      f = {
        root: l ? l.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : PM[c],
      },
      p = (m) => {
        const { isIntersecting: h } = m;
        if (
          this.isInView === h ||
          ((this.isInView = h), d && !h && this.hasEnteredView)
        )
          return;
        (h && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", h));
        const { onViewportEnter: v, onViewportLeave: g } = this.node.getProps(),
          b = h ? v : g;
        b && b(m);
      };
    return XM(this.node.current, f, p);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: l } = this.node;
    ["amount", "margin", "root"].some(QM(i, l)) && this.startObserver();
  }
  unmount() {}
}
function QM({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (l) => n[l] !== i[l];
}
const ZM = {
    inView: { Feature: KM },
    tap: { Feature: UM },
    focus: { Feature: LM },
    hover: { Feature: BM },
  },
  FM = { layout: { ProjectionNode: Nb, MeasureLayout: bb } },
  JM = { ...z3, ...ZM, ...VM, ...FM },
  os = J4(JM, c3),
  g8 =
    typeof window < "u" &&
    window.location.hostname.endsWith("github.io") &&
    window.location.pathname.split("/").filter(Boolean).length > 0
      ? `/${window.location.pathname.split("/").filter(Boolean)[0]}`
      : "",
  b8 = (n) => `${g8}/assets/${n}`,
  Me = {
    hero: "https://d2xsxph8kpxj0f.cloudfront.net/93925518/8e6bLCgVJsDtVouB5QqHN2/rgf-hero-military-cleanroom-4CxAqCgcdgrXYAXpu8cfxc.webp",
    virus:
      "https://d2xsxph8kpxj0f.cloudfront.net/93925518/8e6bLCgVJsDtVouB5QqHN2/rgf-virus-neutralization-QUKwmZUc2nwtUfRUp5agMP.webp",
    evidence:
      "https://d2xsxph8kpxj0f.cloudfront.net/93925518/8e6bLCgVJsDtVouB5QqHN2/rgf-evidence-wall-SHKK9ujhLAyAufePdAwrSM.webp",
    poster: b8("視覺圖.webp"),
    nbaf: b8("美國 NBAF 生物防禦.png"),
    pathogenBrochure:
      b8("多病原測試文宣.webp"),
    timeline: b8("RGF-環境淨化技術大事紀_0.jpg"),
    anthrax: b8("美國 NBAF 生物防禦.png"),
    tripleCertifications: b8("通過台美中三地防疫技術認證佐證圖.webp"),
    presidentialTrip:
      b8("指定場域防護.jpg"),
  },
  WM = [
    {
      icon: R5,
      label: "QUESTION 01",
      title: "何謂四級病毒／高等級病毒實驗室？",
      text: "這裡真正要說明的不是把某一種病毒粗略稱作『四級』，而是 BSL-4／四級生物安全實驗室代表最高等級的隔離、防護、工程控制與操作程序。當附件把 WHO／BSL-4 程序等級資料列入證據鏈時，重點是病原處理與滅活資料具備更高安全門檻，而非一般除味產品式宣稱。",
      evidence:
        "用語採穩健表述：附件包含 WHO／BSL-4 程序等級病原資料，也包含 BSL-3 第三方實驗室與實際房間尺度測試脈絡。",
    },
    {
      icon: k5,
      label: "QUESTION 02",
      title: "為何要從 K-State 追到 NBAF，才看得見真正高封閉層級？",
      text: "一般公開搜尋「堪薩斯州立大學實驗室」，多半只會看到 K-State BRI 這類 BSL-3／BSL3-Ag 高規格生物安全研究設施；真正牽涉四級高封閉、國家生物與農業防禦的關鍵字，是 NBAF。NBAF 同樣位於 Manhattan, Kansas、鄰近 K-State，具備 BSL-4 containment 能力。這種低可見度不是缺點，而是國安級生物防禦設施本來就不會以一般商業語言高調曝光。",
      evidence:
        "精準理解：K-State BRI 是公開資料較容易查到的三級高規格設施；NBAF 才是必須進一步查詢才會浮現的四級高封閉國家生物防禦核心。",
    },
    {
      icon: G5,
      label: "QUESTION 03",
      title: "SARS 中國實際使用經驗為何重要？",
      text: "實驗室數據回答的是可行性；疫情現場回答的是在公共交通、高人流、不可停機與恐慌壓力下，技術能否被納入應急環境控制。附件敘事提到 SARS 期間中國測試與北京地鐵、公共巴士採購安裝脈絡，其價值是提供真實場域的公共衛生壓力測試，而不是宣稱絕對阻斷感染。",
      evidence:
        "合理的防護期待，是降低環境與表面污染風險，補足人工消毒與被動過濾不足，而不是承諾絕對阻斷感染。",
    },
    {
      icon: D5,
      label: "QUESTION 04",
      title: "為何學術論文與可查閱實證很重要？",
      text: "高端採購、醫療院所、空調技師與風險管理者不只看品牌標語，而會檢查資料是否能被追溯、比較、質疑與交叉驗證。可查閱論文、第三方報告、毒理安全資料與場域測試資料，讓 RGF-inside 的敘事從『相信我』轉為『你可以審查我』。",
      evidence:
        "真正值得信任的防疫技術，應該能被攤開檢視，而不是只靠漂亮口號取得信任。",
    },
  ],
  $M = [
    {
      year: "1985",
      icon: qv,
      event: "技術背景進入美國國安與公共衛生研究脈絡",
      text: "RGF 的長期技術積累，與美國國土安全、CDC 等國安／公衛研究脈絡相互連結；其主要成員與技術背景已超過 35 年，代表這不是臨時疫情商品，而是長期投入密閉空間與病原防護的技術路線。",
    },
    {
      year: "2001",
      icon: Yv,
      event: "911 後反恐研討與炭疽郵包事件，郵政系統成為生物安全場域",
      text: "9/11 後，美國開始以國安層級看待生化病原與公共系統風險。附件敘事指出，PHI 淨化消毒設備提供給美國郵政相關場景作為炭疽郵件消毒使用，讓『軍武級』具有事件驅動的防生化需求脈絡。",
    },
    {
      year: "2002",
      icon: C5,
      event: "桑迪亞展示、K-State／國土安全研究與噴嚏模擬測試",
      text: "附件大事紀把飛機生化攻擊防護、國家實驗室展示、K-State 相關研究與噴嚏模擬測試並列；其中 3 呎內噴嚏傳播模型抑菌率 78% 以上的敘事，重點在於主動式淨化能介入飛沫傳播事件當下。",
    },
    {
      year: "2003",
      icon: w0,
      event: "SARS 期間 NBC 報導與中國公共交通使用經驗",
      text: "附件敘事指出，PHI 技術被報導與 SARS 防控脈絡連結，中國測試後於北京地鐵及公共巴士採購安裝。這個節點回答的是『真實疫情場域是否曾經使用』，而非只靠實驗室數據說服。",
    },
    {
      year: "2005",
      icon: U5,
      event: "船舶與密閉交通艙體場域測試",
      text: "大事紀提到船舶場域獨立測試，說明封閉、長時間、人群密集的交通與艙體環境，是環境淨化技術必須面對的真實防疫場景。",
    },
    {
      year: "2008",
      icon: Gv,
      event: "MRSA／REME 測試與醫療感染控制脈絡",
      text: "K-State 相關 REME 技術測試、MRSA 抑制與醫院現場研究，讓證據鏈延伸到醫療院感議題；真正重要的不是單一數字，而是跨病原、跨場域、跨年度的累積。",
    },
    {
      year: "2009",
      icon: Uv,
      event: "美國總統出訪北京，入住場域被納入高規格環境防護",
      text: "高敏感度人物出訪時，外界不可能知道白宮內部實際使用哪些防護設備；更合理、也更能被理解的重點，是總統出國入住的飯店與行程場域必須事前完成安全與環境防護配置。附件呈現 2009 年美國總統首次拜訪北京、入住北京國際俱樂部飯店的 RGF 室內環境防護敘事。",
    },
    {
      year: "2014",
      icon: w0,
      event: "APEC 北京會議與總統下榻飯店場域防護",
      text: "附件同時呈現 2014 年 APEC 期間，美國總統再次造訪北京並入住北京金茂威斯汀大酒店的案例脈絡。這類高敏感度行程不宜被解讀為白宮內部設備公開，而應理解為高規格國際行程中，指定入住場域的室內環境防護需求。",
    },
  ],
  IM = [
    {
      region: "TAIWAN",
      title: "台灣：SNQ／IBMI 醫療品質與防疫技術門檻",
      detail:
        "台灣端重視醫療品質、人體安全、防疫技術審查與第三方微生物滅活資料。能進入這類品質標章與防疫技術審查，不是只看外觀或家電規格，而是要求技術說得清楚、資料能被專業端審閱。",
    },
    {
      region: "UNITED STATES",
      title: "美國：DHS／國安與政府部署門檻",
      detail:
        "美國端最難之處在於它不是一般商業標章，而是國土安全、生化威脅、郵政系統與國防相關場域的部署脈絡。當一項民用空間淨化技術能被放進國安防護情境，代表它面對的是高風險場域與政府採用邏輯。",
    },
    {
      region: "CHINA",
      title: "中國：衛生部進口消毒器械行政許可",
      detail:
        "中國端的難度在於消毒器械行政許可必須交代殺菌因子、滅菌效能、毒理安全、空間淨化能力、適用對象、使用限制、技術來源、結構成分與授權資料。它檢查的是能否正式進入醫療級消毒技術管理框架。",
    },
  ],
  t8 = [
    {
      icon: Gv,
      label: "醫院與候診區",
      note: "面對高頻接觸、交叉感染與院感治理風險",
    },
    { icon: q5, label: "長照與護理機構", note: "守護免疫脆弱族群的日常空間" },
    {
      icon: Uv,
      label: "政府與公共建築",
      note: "支援不可停機、高人流的連續防護",
    },
    {
      icon: V5,
      label: "商辦與會議室",
      note: "改善密閉空間的飛沫、氣溶膠與表面污染風險",
    },
  ],
  e8 = [
    "主動式光水離子淨化因子擴散至空間，而非只在設備內部反應",
    "同步面對空氣、飛沫、氣溶膠與表面污染風險",
    "補足傳統濾網等待污染空氣被吸入後才處理的時間差",
    "以長時間人機共存的低濃度防護場，建立持續環境淨化能力",
  ],
  n8 = [
    {
      title: "台美中三地防疫技術認證",
      src: Me.tripleCertifications,
      text: "同一項 PHI 淨化技術同時跨過台灣醫療品質／防疫技術、美國國安部署與中國衛生部消毒器械許可三套門檻。",
    },
    {
      title: "NBAF／K-State 生物防禦脈絡",
      src: Me.nbaf,
      text: "公開資料容易看到的是 K-State BRI 的三級生物安全研究脈絡；再往深處查 NBAF，才會看見四級高封閉國家生物防禦設施與國安級防護需求。",
    },
    {
      title: "RGF PHI 多病原測試文宣",
      src: Me.pathogenBrochure,
      text: "彙整病原測試、噴嚏模型、Advanced Oxidation Test Results 與州政府文件等附件證據。",
    },
    {
      title: "郵包炭疽與物流表面污染故事",
      src: Me.anthrax,
      text: "2001 炭疽郵件事件提醒人們，包裹、郵政與物流表面污染同樣需要被納入環境防護思維。",
    },
    {
      title: "RGF 大事紀時間軸原圖",
      src: Me.timeline,
      text: "呈現 1985 至 2009 的關鍵事件鏈，讓每個年份都能回到明確的技術與場域脈絡。",
    },
    {
      title: "美國總統出訪指定場域防護",
      src: Me.presidentialTrip,
      text: "外界無法得知白宮內部防護配置；更可信的理解，是總統出訪入住飯店與活動場域需預先配置室內環境安全防護。附件呈現 2009 與 2014 北京行程場域案例。",
    },
  ];
function Df({ children: n, index: i, className: l = "" }) {
  return S.jsxs(os.div, {
    "data-loc": "client/src/pages/Home.tsx:198",
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: "-80px" },
    transition: { duration: 0.58, delay: i * 0.06 },
    className: `group relative overflow-hidden border border-sky-200/70 bg-white/90 p-6 shadow-[0_24px_80px_rgba(8,47,73,0.10)] backdrop-blur-xl ${l}`,
    children: [
      S.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:205",
        className:
          "absolute left-0 top-0 h-1 w-20 bg-[#155fb8] transition-all duration-500 group-hover:w-full",
      }),
      S.jsx("div", {
        "data-loc": "client/src/pages/Home.tsx:206",
        className:
          "absolute -right-16 -top-16 h-32 w-32 border border-sky-200/70",
      }),
      n,
    ],
  });
}
function a8() {
  return S.jsxs("main", {
    "data-loc": "client/src/pages/Home.tsx:214",
    className:
      "min-h-screen bg-[#f4f9fd] text-[#081f3a] selection:bg-[#0a4c9a] selection:text-white",
    children: [
      S.jsx("header", {
        "data-loc": "client/src/pages/Home.tsx:215",
        className:
          "fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/74 backdrop-blur-2xl",
        children: S.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:216",
          className:
            "mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10",
          children: [
            S.jsx("a", {
              "data-loc": "client/src/pages/Home.tsx:217",
              href: "#top",
              "aria-label": "回到首頁",
              children: S.jsx("img", {
                src: b8("RGF-inside.png"),
                alt: "RGF-inside Logo",
                className: "h-12 w-auto object-contain",
              }),
            }),
            S.jsxs("nav", {
              "data-loc": "client/src/pages/Home.tsx:226",
              className:
                "hidden items-center gap-6 text-sm font-bold text-[#284869] lg:flex",
              children: [
                S.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:227",
                  className: "transition hover:text-[#0b63ce]",
                  href: "#certifications",
                  children: "三地認證",
                }),
                S.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:228",
                  className: "transition hover:text-[#0b63ce]",
                  href: "#answers",
                  children: "為何可信",
                }),
                S.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:229",
                  className: "transition hover:text-[#0b63ce]",
                  href: "#timeline",
                  children: "技術里程碑",
                }),
                S.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:230",
                  className: "transition hover:text-[#0b63ce]",
                  href: "#anthrax",
                  children: "郵政防護",
                }),
                S.jsx("a", {
                  "data-loc": "client/src/pages/Home.tsx:231",
                  className: "transition hover:text-[#0b63ce]",
                  href: "#evidence-wall",
                  children: "原始證據",
                }),
              ],
            }),
            S.jsx("a", {
              "data-loc": "client/src/pages/Home.tsx:233",
              href: "#contact",
              className:
                "hidden border border-[#082b5f] bg-[#082b5f] px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_40px_rgba(8,43,95,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0a4c9a] md:inline-flex",
              children: "建立防護場域",
            }),
          ],
        }),
      }),
      S.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:242",
        id: "top",
        className: "relative isolate overflow-hidden pt-24 lg:pt-0",
        children: [
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:243",
            className: "absolute inset-0 -z-10 bg-[#edf6fb]",
          }),
          S.jsx("img", {
            "data-loc": "client/src/pages/Home.tsx:244",
            src: Me.hero,
            alt: "軍武級環境淨化技術英雄視覺",
            className: "absolute inset-0 -z-10 h-full w-full object-cover",
          }),
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:245",
            className:
              "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(244,249,253,0.98)_0%,rgba(244,249,253,0.92)_33%,rgba(244,249,253,0.48)_70%,rgba(244,249,253,0.16)_100%)]",
          }),
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:246",
            className: "scan-grid absolute inset-0 -z-10 opacity-70",
          }),
          S.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:248",
            className:
              "mx-auto grid min-h-[900px] max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:py-28",
            children: [
              S.jsxs(os.div, {
                "data-loc": "client/src/pages/Home.tsx:249",
                initial: { opacity: 0, y: 26 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.75 },
                className: "max-w-3xl",
                children: [
                  S.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:250",
                    className:
                      "mb-8 inline-flex items-center gap-3 border border-[#155fb8]/20 bg-white/72 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#155fb8] shadow-sm backdrop-blur-xl",
                    children: [
                      S.jsx(qv, {
                        "data-loc": "client/src/pages/Home.tsx:251",
                        className: "h-4 w-4",
                      }),
                      " 台・美・中三地防疫技術認證",
                    ],
                  }),
                  S.jsxs("h1", {
                    "data-loc": "client/src/pages/Home.tsx:253",
                    className:
                      "font-display text-[3.35rem] font-black leading-[0.98] tracking-[-0.06em] text-[#061b36] md:text-[5rem] lg:text-[6.25rem]",
                    children: [
                      "全球唯一",
                      S.jsx("span", {
                        "data-loc": "client/src/pages/Home.tsx:255",
                        className: "block text-[#155fb8]",
                        children: "三地認證淨化技術",
                      }),
                    ],
                  }),
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:257",
                    className:
                      "mt-8 max-w-2xl text-xl font-semibold leading-9 text-[#284869] md:text-2xl",
                    children:
                      "RGF-inside PHI 的稀有，不只在於抑菌數據，而在於同一項淨化技術同時跨過台灣醫療品質／防疫技術、美國國土安全／政府部署、中國衛生部進口消毒器械三套完全不同的審查邏輯。一般產品可能只取得單一市場標章；三地同時成立，代表技術必須經得起醫療、公衛、國安與法規的多重審視。",
                  }),
                  S.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:260",
                    className: "mt-8 grid max-w-2xl gap-3 sm:grid-cols-2",
                    children: [
                      "台灣 SNQ／IBMI",
                      "美國 DHS 國安脈絡",
                      "中國衛生部許可",
                      "跨制度防疫審查",
                    ].map((n) =>
                      S.jsx(
                        "div",
                        {
                          "data-loc": "client/src/pages/Home.tsx:262",
                          className:
                            "border border-sky-200/70 bg-white/74 px-4 py-3 text-sm font-black text-[#082b5f] backdrop-blur-xl",
                          children: n,
                        },
                        n,
                      ),
                    ),
                  }),
                  S.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:267",
                    className: "mt-10 flex flex-col gap-4 sm:flex-row",
                    children: [
                      S.jsxs("a", {
                        "data-loc": "client/src/pages/Home.tsx:268",
                        href: "#certifications",
                        className:
                          "inline-flex items-center justify-center gap-2 bg-[#082b5f] px-7 py-4 text-base font-black text-white shadow-[0_22px_60px_rgba(8,43,95,0.28)] transition hover:-translate-y-1 hover:bg-[#0a4c9a]",
                        children: [
                          "先看三地認證難度 ",
                          S.jsx(O5, {
                            "data-loc": "client/src/pages/Home.tsx:269",
                            className: "h-4 w-4",
                          }),
                        ],
                      }),
                      S.jsx("a", {
                        "data-loc": "client/src/pages/Home.tsx:271",
                        href: "#timeline",
                        className:
                          "inline-flex items-center justify-center gap-2 border border-[#155fb8]/30 bg-white/72 px-7 py-4 text-base font-black text-[#082b5f] backdrop-blur transition hover:-translate-y-1 hover:border-[#155fb8] hover:bg-white",
                        children: "查看技術里程碑",
                      }),
                    ],
                  }),
                ],
              }),
              S.jsxs(os.div, {
                "data-loc": "client/src/pages/Home.tsx:277",
                initial: { opacity: 0, x: 48 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.85, delay: 0.12 },
                className: "relative hidden lg:block",
                children: [
                  S.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:278",
                    className:
                      "absolute -left-8 top-10 z-10 w-80 border border-white/80 bg-white/82 p-5 shadow-[0_24px_80px_rgba(8,47,73,0.13)] backdrop-blur-xl",
                    children: [
                      S.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:279",
                        className:
                          "text-[11px] font-black uppercase tracking-[0.32em] text-[#155fb8]",
                        children: "Core Verdict",
                      }),
                      S.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:280",
                        className:
                          "mt-3 font-display text-3xl font-black tracking-tight text-[#082b5f]",
                        children: "真正難的是同時跨過三套制度",
                      }),
                      S.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:281",
                        className:
                          "mt-2 text-sm font-semibold leading-6 text-[#526d88]",
                        children:
                          "台灣看醫療品質，美國看國安部署，中國看消毒器械法規；三地同時成立，才是這項技術最該被看見的門檻。",
                      }),
                    ],
                  }),
                  S.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:283",
                    className:
                      "ml-auto aspect-[3/4] max-w-[500px] overflow-hidden border border-white/80 bg-white/60 p-3 shadow-[0_40px_100px_rgba(8,47,73,0.18)] backdrop-blur-xl",
                    children: S.jsx("img", {
                      "data-loc": "client/src/pages/Home.tsx:284",
                      src: Me.poster,
                      alt: "RGF-inside R1S 全方位光水離子環境淨化機原始視覺",
                      className: "h-full w-full object-cover object-top",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      S.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:290",
        id: "certifications",
        className: "relative overflow-hidden bg-white py-24 lg:py-32",
        children: [
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:291",
            className: "absolute left-0 top-0 h-full w-[38%] bg-[#eaf5fc]",
          }),
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:292",
            className: "relative mx-auto max-w-[1440px] px-5 lg:px-10",
            children: S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:293",
              className:
                "grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start",
              children: [
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:294",
                  className: "lg:sticky lg:top-28",
                  children: [
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:295",
                      className:
                        "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                      children: "Triple-Certified Defense Technology",
                    }),
                    S.jsxs("h2", {
                      "data-loc": "client/src/pages/Home.tsx:296",
                      className:
                        "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                      children: [
                        "不是多拿幾張標章，",
                        S.jsx("br", {
                          "data-loc": "client/src/pages/Home.tsx:296",
                        }),
                        "而是同時跨過三套防疫制度。",
                      ],
                    }),
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:297",
                      className:
                        "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                      children:
                        "「全球唯一同時擁有台、美、中三地防疫技術認證」之所以重要，是因為三地審查並不使用同一把尺。台灣端看醫療品質與防疫技術資料，美國端看國土安全、生化威脅與政府場域部署，中國端看進口消毒器械行政許可、毒理安全與滅菌效能。能同時被三種制度接住，代表它不是只在單一市場說得通，而是能被不同公衛、國安與法規邏輯反覆檢驗。",
                    }),
                    S.jsx("div", {
                      "data-loc": "client/src/pages/Home.tsx:300",
                      className:
                        "mt-8 overflow-hidden border border-sky-200 bg-white p-3 shadow-[0_30px_90px_rgba(8,47,73,0.12)]",
                      children: S.jsx("img", {
                        "data-loc": "client/src/pages/Home.tsx:301",
                        src: Me.tripleCertifications,
                        alt: "通過台美中三地防疫技術認證佐證圖",
                        className: "max-h-[640px] w-full object-contain",
                      }),
                    }),
                  ],
                }),
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:304",
                  className: "grid gap-5",
                  children: [
                    S.jsx(Df, {
                      "data-loc": "client/src/pages/Home.tsx:305",
                      index: 0,
                      className: "bg-[#f7fbff] text-gray-800 border border-gray-200",
                      children: S.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:306",
                        className: "grid gap-6 md:grid-cols-[180px_1fr]",
                        children: [
                          S.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:307",
                            children: [
                              S.jsx("p", {
                                "data-loc": "client/src/pages/Home.tsx:308",
                                className:
                                  "font-display text-6xl font-black tracking-[-0.05em] text-blue-600",
                                style: { color: "#0b3a6e" },
                                children: "3",
                              }),
                              S.jsx("p", {
                                "data-loc": "client/src/pages/Home.tsx:309",
                                className:
                                  "mt-2 text-xs font-black uppercase tracking-[0.28em] text-gray-700",
                                style: { color: "#123a63" },
                                children: "Systems",
                              }),
                            ],
                          }),
                          S.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:311",
                            children: [
                              S.jsx("h3", {
                                "data-loc": "client/src/pages/Home.tsx:312",
                                className:
                                  "font-display text-3xl font-black tracking-tight text-gray-800",
                                style: { color: "#0a1f38" },
                                children:
                                  "認證難度在於：三地要求完全不同，卻指向同一項技術。",
                              }),
                              S.jsx("p", {
                                "data-loc": "client/src/pages/Home.tsx:313",
                                className:
                                  "mt-4 text-base font-semibold leading-8 text-gray-700",
                                style: { color: "#1b3553" },
                                children:
                                  "一般空氣清淨產品常見的是單一國家、單一標章或單一測試報告；RGF-inside PHI 的主張應被放大，是因為它同時面對醫療品質、國安部署、消毒器械法規三種審查語言。這不是數量堆疊，而是跨制度驗證。",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    IM.map((n, i) =>
                      S.jsxs(
                        os.div,
                        {
                          "data-loc": "client/src/pages/Home.tsx:318",
                          initial: { opacity: 0, y: 24 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { duration: 0.52, delay: i * 0.08 },
                          className:
                            "grid gap-4 border border-sky-200 bg-[#f7fbff] p-6 md:grid-cols-[190px_1fr]",
                          children: [
                            S.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:326",
                              className:
                                "flex items-center gap-3 text-[#155fb8]",
                              children: [
                                S.jsx(N5, {
                                  "data-loc": "client/src/pages/Home.tsx:327",
                                  className: "h-6 w-6",
                                }),
                                S.jsx("span", {
                                  "data-loc": "client/src/pages/Home.tsx:328",
                                  className:
                                    "text-xs font-black uppercase tracking-[0.28em]",
                                  children: n.region,
                                }),
                              ],
                            }),
                            S.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:330",
                              children: [
                                S.jsx("h3", {
                                  "data-loc": "client/src/pages/Home.tsx:331",
                                  className:
                                    "font-display text-2xl font-black text-[#082b5f]",
                                  children: n.title,
                                }),
                                S.jsx("p", {
                                  "data-loc": "client/src/pages/Home.tsx:332",
                                  className:
                                    "mt-3 text-base font-medium leading-7 text-[#526d88]",
                                  children: n.detail,
                                }),
                              ],
                            }),
                          ],
                        },
                        n.region,
                      ),
                    ),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      S.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:341",
        id: "answers",
        className: "relative overflow-hidden bg-white py-24 lg:py-32",
        children: [
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:342",
            className: "absolute inset-y-0 left-0 w-2 bg-[#082b5f]",
          }),
          S.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:343",
            className:
              "mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 lg:grid-cols-[0.58fr_1.42fr] lg:px-10",
            children: [
              S.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:344",
                className: "sticky top-28 h-fit",
                children: [
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:345",
                    className:
                      "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                    children: "Four Questions Before Trust",
                  }),
                  S.jsxs("h2", {
                    "data-loc": "client/src/pages/Home.tsx:346",
                    className:
                      "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                    children: [
                      S.jsx("span", {
                        className: "whitespace-nowrap",
                        children: "先回答問題，",
                      }),
                      S.jsx("span", {
                        className: "whitespace-nowrap",
                        children: "才談軍武級。",
                      }),
                    ],
                  }),
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:347",
                    className:
                      "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                    children:
                      "真正的防疫技術不應只堆疊認證名詞，而要回答消費者與專業採購都會追問的四個問題：實驗室等級代表什麼、研究場域是否可信、真實疫情中是否有使用經驗，以及資料是否能被查閱與審查。",
                  }),
                ],
              }),
              S.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:351",
                className: "grid gap-5",
                children: WM.map((n, i) => {
                  const l = n.icon;
                  return S.jsxs(
                    Df,
                    {
                      "data-loc": "client/src/pages/Home.tsx:355",
                      index: i,
                      className: "grid gap-7 lg:grid-cols-[210px_1fr]",
                      children: [
                        S.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:356",
                          children: [
                            S.jsxs("div", {
                              "data-loc": "client/src/pages/Home.tsx:357",
                              className:
                                "flex items-center gap-3 text-[#155fb8]",
                              children: [
                                S.jsx(l, {
                                  "data-loc": "client/src/pages/Home.tsx:358",
                                  className: "h-8 w-8",
                                }),
                                S.jsx("span", {
                                  "data-loc": "client/src/pages/Home.tsx:359",
                                  className:
                                    "text-[11px] font-black uppercase tracking-[0.28em]",
                                  children: n.label,
                                }),
                              ],
                            }),
                            S.jsxs("p", {
                              "data-loc": "client/src/pages/Home.tsx:361",
                              className:
                                "mt-8 font-display text-5xl font-black tracking-[-0.04em] text-[#d7e8f6]",
                              children: ["0", i + 1],
                            }),
                          ],
                        }),
                        S.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:363",
                          children: [
                            S.jsx("h3", {
                              "data-loc": "client/src/pages/Home.tsx:364",
                              className:
                                "font-display text-2xl font-black tracking-tight text-[#082b5f] md:text-3xl",
                              children: n.title,
                            }),
                            S.jsx("p", {
                              "data-loc": "client/src/pages/Home.tsx:365",
                              className:
                                "mt-4 text-base font-medium leading-8 text-[#526d88]",
                              children: n.text,
                            }),
                            S.jsx("div", {
                              "data-loc": "client/src/pages/Home.tsx:366",
                              className:
                                "mt-5 border-l-4 border-[#155fb8] bg-[#f4f9fd] p-4 text-sm font-bold leading-7 text-[#284869]",
                              children: n.evidence,
                            }),
                          ],
                        }),
                      ],
                    },
                    n.title,
                  );
                }),
              }),
            ],
          }),
        ],
      }),
      S.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:377",
        id: "mechanism",
        className:
          "relative overflow-hidden bg-[#082b5f] py-24 text-white lg:py-32",
        children: [
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:378",
            className: "absolute inset-0 opacity-35",
            children: S.jsx("img", {
              "data-loc": "client/src/pages/Home.tsx:378",
              src: Me.virus,
              alt: "光水離子中和飛沫病毒示意",
              className: "h-full w-full object-cover",
            }),
          }),
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:379",
            className:
              "absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,95,0.98),rgba(8,43,95,0.88),rgba(8,43,95,0.50))]",
          }),
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:380",
            className: "scan-grid absolute inset-0 opacity-30",
          }),
          S.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:381",
            className:
              "relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 lg:grid-cols-[1.04fr_0.96fr] lg:px-10",
            children: [
              S.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:382",
                children: [
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:383",
                    className:
                      "text-xs font-black uppercase tracking-[0.35em] text-[#8bd8ff]",
                    children: "Active Defense Field",
                  }),
                  S.jsxs("h2", {
                    "data-loc": "client/src/pages/Home.tsx:384",
                    className:
                      "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] md:text-6xl",
                    children: [
                      "即時強效，",
                      S.jsx("br", {
                        "data-loc": "client/src/pages/Home.tsx:384",
                      }),
                      "從被動過濾升級為主動防護。",
                    ],
                  }),
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:385",
                    className:
                      "mt-7 max-w-3xl text-lg font-medium leading-8 text-sky-100/90",
                    children:
                      "傳統清淨機必須等待污染空氣被吸入機器；RGF-inside 的價值在於讓主動式淨化因子進入空間。當飛沫、氣溶膠或表面污染風險形成時，技術邏輯不是事後補救，而是在傳播鏈形成過程中降低環境污染風險。",
                  }),
                ],
              }),
              S.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:389",
                className: "space-y-4",
                children: e8.map((n, i) =>
                  S.jsxs(
                    os.div,
                    {
                      "data-loc": "client/src/pages/Home.tsx:391",
                      initial: { opacity: 0, x: 26 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.5, delay: i * 0.08 },
                      className:
                        "flex gap-4 border border-white/18 bg-white/10 p-5 backdrop-blur-xl",
                      children: [
                        S.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:399",
                          className:
                            "grid h-8 w-8 shrink-0 place-items-center bg-white text-sm font-black text-[#082b5f]",
                          children: i + 1,
                        }),
                        S.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:400",
                          className:
                            "text-base font-bold leading-7 text-white/92",
                          children: n,
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:407",
        id: "timeline",
        className: "relative overflow-hidden bg-[#f4f9fd] py-24 lg:py-32",
        children: S.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:408",
          className:
            "mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-10",
          children: [
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:409",
              className: "lg:sticky lg:top-28 lg:h-fit",
              children: [
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:410",
                  className:
                    "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                  children: "RGF Chronicle",
                }),
                S.jsxs("h2", {
                  "data-loc": "client/src/pages/Home.tsx:411",
                  className:
                    "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                  children: [
                    "RGF 大事紀：",
                    S.jsx("br", {
                      "data-loc": "client/src/pages/Home.tsx:411",
                    }),
                    "從國安研究到公共防疫。",
                  ],
                }),
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:412",
                  className:
                    "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                  children:
                    "RGF 的技術信任並非來自單一事件，而是沿著國安、生物防禦、郵政炭疽事件、噴嚏模型、SARS、船舶與 MRSA 醫療場域逐步累積。越接近國家安全與高封閉病原防護，公開資訊越少、查詢門檻越高；這正是消費者理解「軍武級」時不該忽略的背景。",
                }),
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:415",
                  className:
                    "mt-8 overflow-hidden border border-sky-200 bg-white p-3 shadow-[0_30px_90px_rgba(8,47,73,0.10)]",
                  children: S.jsx("img", {
                    "data-loc": "client/src/pages/Home.tsx:416",
                    src: Me.timeline,
                    alt: "RGF 大事紀原始附件圖",
                    className: "max-h-[640px] w-full object-contain",
                  }),
                }),
              ],
            }),
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:419",
              className: "relative",
              children: [
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:420",
                  className:
                    "absolute bottom-0 left-9 top-0 hidden w-px bg-[#155fb8]/30 md:block",
                }),
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:421",
                  className: "space-y-5",
                  children: $M.map((n, i) => {
                    const l = n.icon;
                    return S.jsxs(
                      os.article,
                      {
                        "data-loc": "client/src/pages/Home.tsx:425",
                        initial: { opacity: 0, y: 24 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0, margin: "-70px" },
                        transition: { duration: 0.5, delay: i * 0.04 },
                        className:
                          "relative grid gap-5 border border-sky-200 bg-white/92 p-6 shadow-[0_18px_60px_rgba(8,47,73,0.08)] backdrop-blur-xl md:grid-cols-[88px_1fr]",
                        children: [
                          S.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:433",
                            className: "relative z-10 flex md:block",
                            children: [
                              S.jsx("div", {
                                "data-loc": "client/src/pages/Home.tsx:434",
                                className:
                                  "grid h-18 w-18 place-items-center border border-[#155fb8]/20 bg-[#082b5f] p-4 text-white shadow-lg shadow-sky-900/15",
                                children: S.jsx(l, {
                                  "data-loc": "client/src/pages/Home.tsx:435",
                                  className: "h-8 w-8",
                                }),
                              }),
                              S.jsx("p", {
                                "data-loc": "client/src/pages/Home.tsx:437",
                                className:
                                  "ml-4 self-center font-display text-3xl font-black tracking-[-0.04em] text-[#155fb8] md:ml-0 md:mt-5",
                                children: n.year,
                              }),
                            ],
                          }),
                          S.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:439",
                            children: [
                              S.jsx("h3", {
                                "data-loc": "client/src/pages/Home.tsx:440",
                                className:
                                  "font-display text-2xl font-black leading-tight text-[#082b5f]",
                                children: n.event,
                              }),
                              S.jsx("p", {
                                "data-loc": "client/src/pages/Home.tsx:441",
                                className:
                                  "mt-4 text-base font-medium leading-8 text-[#526d88]",
                                children: n.text,
                              }),
                            ],
                          }),
                        ],
                      },
                      `${n.year}-${n.event}`,
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      S.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:451",
        id: "anthrax",
        className: "relative overflow-hidden bg-white py-24 lg:py-32",
        children: [
          S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:452",
            className: "absolute right-0 top-0 h-full w-1/3 bg-[#eaf5fc]",
          }),
          S.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:453",
            className:
              "relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[0.98fr_1.02fr] lg:px-10",
            children: [
              S.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:454",
                children: [
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:455",
                    className:
                      "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                    children: "Anthrax Mail Story",
                  }),
                  S.jsxs("h2", {
                    "data-loc": "client/src/pages/Home.tsx:456",
                    className:
                      "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                    children: [
                      "郵包炭疽故事：",
                      S.jsx("br", {
                        "data-loc": "client/src/pages/Home.tsx:456",
                      }),
                      "物流表面污染不是抽象風險。",
                    ],
                  }),
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:457",
                    className:
                      "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                    children:
                      "2001 年美國炭疽郵件事件，使郵件、包裹與物流系統被納入生物安全與國安應變討論。附件敘事將 PHI 放在郵政／反恐防護脈絡中，這讓「軍武級環境淨化」有了具體場景：不是只處理空氣異味，而是面對人流、物件表面、公共物流與生化病原風險交織的環境治理。",
                  }),
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:460",
                    className:
                      "mt-5 text-lg font-medium leading-8 text-[#526d88]",
                    children:
                      "這個故事也能對照北京 Omicron 外郵包裹感染疑慮。無論最後個案溯源如何，公共衛生體系一再重視包裹、接觸面與物流環境的污染風險。RGF-inside 的合理表述，是協助降低環境與表面污染風險，補足人工消毒與被動過濾的不足，而不是承諾絕對防止感染。",
                  }),
                  S.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:463",
                    className: "mt-8 grid gap-4 sm:grid-cols-3",
                    children: ["郵政系統", "包裹表面", "公共物流"].map((n) =>
                      S.jsxs(
                        "div",
                        {
                          "data-loc": "client/src/pages/Home.tsx:465",
                          className: "border border-sky-200 bg-[#f7fbff] p-5",
                          children: [
                            S.jsx(Yv, {
                              "data-loc": "client/src/pages/Home.tsx:466",
                              className: "h-7 w-7 text-[#155fb8]",
                            }),
                            S.jsx("p", {
                              "data-loc": "client/src/pages/Home.tsx:467",
                              className:
                                "mt-4 font-display text-xl font-black text-[#082b5f]",
                              children: n,
                            }),
                          ],
                        },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
              S.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:472",
                className: "relative",
                children: [
                  S.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:473",
                    className:
                      "absolute -left-5 -top-5 h-40 w-40 border-l-2 border-t-2 border-[#155fb8]",
                  }),
                  S.jsx("img", {
                    "data-loc": "client/src/pages/Home.tsx:474",
                    src: Me.anthrax,
                    alt: "軍武級環境淨化器郵包炭疽故事附件",
                    className:
                      "relative w-full border border-white bg-white p-3 shadow-[0_40px_110px_rgba(8,47,73,0.16)]",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:479",
        id: "lab",
        className: "bg-[#061b36] py-24 text-white lg:py-32",
        children: S.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:480",
          className:
            "mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[0.92fr_1.08fr] lg:px-10",
          children: [
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:481",
              className: "relative order-2 lg:order-1",
              children: [
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:482",
                  className:
                    "absolute -left-5 -top-5 h-40 w-40 border-l-2 border-t-2 border-[#8bd8ff]",
                }),
                S.jsx("img", {
                  "data-loc": "client/src/pages/Home.tsx:483",
                  src: Me.evidence,
                  alt: "實驗室報告與認證證據牆",
                  className:
                    "relative border border-white/18 bg-white/10 p-3 shadow-[0_40px_110px_rgba(0,0,0,0.24)]",
                }),
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:484",
                  className:
                    "absolute -bottom-8 right-4 max-w-xs border border-white/20 bg-[#082b5f]/92 p-5 shadow-xl backdrop-blur-xl",
                  children: [
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:485",
                      className:
                        "text-[11px] font-black uppercase tracking-[0.32em] text-[#8bd8ff]",
                      children: "Lab Review",
                    }),
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:486",
                      className:
                        "mt-2 font-display text-2xl font-black text-white",
                      children: "病毒實驗室測試報告",
                    }),
                  ],
                }),
              ],
            }),
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:489",
              className: "order-1 lg:order-2",
              children: [
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:490",
                  className:
                    "text-xs font-black uppercase tracking-[0.35em] text-[#8bd8ff]",
                  children: "BSL / Virus Report",
                }),
                S.jsxs("h2", {
                  "data-loc": "client/src/pages/Home.tsx:491",
                  className:
                    "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] md:text-6xl",
                  children: [
                    "高等級病毒資料，",
                    S.jsx("br", {
                      "data-loc": "client/src/pages/Home.tsx:491",
                    }),
                    "讓防疫主張可被審查。",
                  ],
                }),
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:492",
                  className:
                    "mt-7 text-lg font-medium leading-8 text-sky-100/90",
                  children:
                    "RGF-inside PHI 的信任證據包含 WHO／BSL-4 程序等級病原資料、SARS-CoV-2 實際房間尺度測試，以及 SARS、MRSA、H1N1、諾羅病毒與炭疽芽孢等多病原資料。其價值不在單一百分比，而在多種病原、空間尺度、毒理安全與實際應用共同構成的驗證框架。",
                }),
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:495",
                  className: "mt-8 grid gap-4 sm:grid-cols-2",
                  children: [
                    ["36m³", "實際房間尺度空氣測試脈絡"],
                    ["BSL", "高等級病原處理程序敘事"],
                    ["MRSA", "醫療感染控制證據"],
                    ["SARS", "公共防疫應用脈絡"],
                  ].map(([n, i]) =>
                    S.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/Home.tsx:502",
                        className:
                          "border border-white/16 bg-white/10 p-5 backdrop-blur-xl",
                        children: [
                          S.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:503",
                            className:
                              "font-display text-4xl font-black text-[#8bd8ff]",
                            children: n,
                          }),
                          S.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:504",
                            className:
                              "mt-2 text-sm font-bold leading-6 text-sky-100/90",
                            children: i,
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:512",
        className: "relative overflow-hidden bg-[#eaf5fc] py-24 lg:py-32",
        children: S.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:513",
          className:
            "mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-10",
          children: [
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:514",
              children: [
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:515",
                  className:
                    "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                  children: "Real Environments",
                }),
                S.jsxs("h2", {
                  "data-loc": "client/src/pages/Home.tsx:516",
                  className:
                    "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                  children: [
                    "真正的防護，",
                    S.jsx("br", {
                      "data-loc": "client/src/pages/Home.tsx:516",
                    }),
                    "必須走進真實場域。",
                  ],
                }),
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:517",
                  className:
                    "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                  children:
                    "RGF-inside PHI 不把防護停留在實驗室數據，而是延伸至醫院、長照、政府建物、公共交通、船舶艙體與高敏感度出訪場域。對高氣密建築而言，環境淨化不只是空氣品質問題，而是飛沫、氣溶膠與接觸污染共同治理的防疫課題。",
                }),
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:520",
                  className:
                    "mt-7 border-l-4 border-[#155fb8] bg-white/78 p-6 shadow-[0_24px_70px_rgba(8,47,73,0.08)] backdrop-blur-xl",
                  children: [
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:521",
                      className:
                        "text-xs font-black uppercase tracking-[0.28em] text-[#155fb8]",
                      children: "Presidential Trip Context",
                    }),
                    S.jsx("h3", {
                      "data-loc": "client/src/pages/Home.tsx:522",
                      className:
                        "mt-3 font-display text-2xl font-black leading-tight text-[#082b5f]",
                      children:
                        "不宣稱白宮內部設備；重點是總統出訪場域的指定防護。",
                    }),
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:523",
                      className:
                        "mt-3 text-sm font-semibold leading-7 text-[#526d88]",
                      children:
                        "高敏感度人物出國訪問時，外界不可能知道白宮或隨行安保內部採用哪些防護系統；真正可用於消費者理解的，是總統入住飯店、會議與接待場域必須事前完成環境安全配置。2009 北京國際俱樂部飯店與 2014 APEC 北京金茂威斯汀酒店案例，讓 RGF-inside 的價值從一般室內空氣管理，延伸到國際行程與指定場域防護。",
                    }),
                  ],
                }),
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:527",
                  className: "mt-10 grid gap-4 sm:grid-cols-2",
                  children: t8.map((n) => {
                    const i = n.icon;
                    return S.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/Home.tsx:531",
                        className:
                          "border border-white/80 bg-white/74 p-5 shadow-sm backdrop-blur-xl",
                        children: [
                          S.jsx(i, {
                            "data-loc": "client/src/pages/Home.tsx:532",
                            className: "h-7 w-7 text-[#155fb8]",
                          }),
                          S.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:533",
                            className:
                              "mt-5 font-display text-xl font-black text-[#082b5f]",
                            children: n.label,
                          }),
                          S.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:534",
                            className:
                              "mt-2 text-sm font-semibold leading-6 text-[#526d88]",
                            children: n.note,
                          }),
                        ],
                      },
                      n.label,
                    );
                  }),
                }),
              ],
            }),
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:540",
              className: "space-y-5",
              children: [
                S.jsx("img", {
                  "data-loc": "client/src/pages/Home.tsx:541",
                  src: Me.presidentialTrip,
                  alt: "RGF 保護室內環境與美國總統出訪指定場域案例",
                  className:
                    "border border-white bg-white p-3 shadow-[0_40px_110px_rgba(8,47,73,0.15)]",
                }),
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:542",
                  className: "text-sm font-semibold leading-7 text-[#526d88]",
                  children:
                    "北京國際俱樂部飯店與北京金茂威斯汀酒店，是總統出訪指定場域使用 RGF 的防護案例。",
                }),
              ],
            }),
          ],
        }),
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:549",
        id: "evidence-wall",
        className: "bg-white py-24 lg:py-32",
        children: S.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:550",
          className: "mx-auto max-w-[1440px] px-5 lg:px-10",
          children: S.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:551",
            className: "grid grid-cols-1 gap-10 lg:grid-cols-[0.62fr_1.38fr]",
            children: [
              S.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:552",
                children: [
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:553",
                    className:
                      "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                    children: "Original Attachments Wall",
                  }),
                  S.jsxs("h2", {
                    "data-loc": "client/src/pages/Home.tsx:554",
                    className:
                      "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                    children: [
                      S.jsx("span", {
                        className: "whitespace-nowrap",
                        children: "附件不是裝飾，",
                      }),
                      S.jsx("span", {
                        className: "whitespace-nowrap",
                        children: "是證據牆。",
                      }),
                    ],
                  }),
                  S.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:555",
                    className:
                      "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                    children:
                      "六張關鍵原始資料，分別對應三地防疫技術認證、生物防禦脈絡、多病原測試、郵包炭疽故事、RGF 大事紀與美國總統出訪指定場域防護。消費者不只看到結論，也能看見技術如何跨過不同制度、不同場域與不同風險情境的審視。",
                  }),
                ],
              }),
              S.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:559",
                className: "grid gap-5 md:grid-cols-2",
                children: n8.map((n, i) =>
                  S.jsxs(
                    Df,
                    {
                      "data-loc": "client/src/pages/Home.tsx:561",
                      index: i,
                      className: "p-0",
                      children: [
                        S.jsx("div", {
                          "data-loc": "client/src/pages/Home.tsx:562",
                          className:
                            "aspect-[4/3] overflow-hidden bg-[#eaf5fc]",
                          children: S.jsx("img", {
                            "data-loc": "client/src/pages/Home.tsx:563",
                            src: n.src,
                            alt: n.title,
                            className:
                              "h-full w-full object-cover transition duration-700 group-hover:scale-105",
                          }),
                        }),
                        S.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:565",
                          className: "p-6",
                          children: [
                            S.jsx("h3", {
                              "data-loc": "client/src/pages/Home.tsx:566",
                              className:
                                "font-display text-2xl font-black text-[#082b5f]",
                              children: n.title,
                            }),
                            S.jsx("p", {
                              "data-loc": "client/src/pages/Home.tsx:567",
                              className:
                                "mt-3 text-sm font-semibold leading-7 text-[#526d88]",
                              children: n.text,
                            }),
                          ],
                        }),
                      ],
                    },
                    n.title,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:576",
        id: "poster",
        className: "bg-[#061b36] py-24 text-white lg:py-32",
        children: S.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:577",
          className:
            "mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:px-10",
          children: [
            S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:578",
              children: [
                S.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:579",
                  className:
                    "text-xs font-black uppercase tracking-[0.35em] text-[#8bd8ff]",
                  children: "Original Value Poster",
                }),
                S.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:580",
                  className:
                    "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] md:text-6xl",
                  children: "五大價值，構成軍武級環境淨化的信任基礎。",
                }),
                S.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:581",
                  className: "mt-9 space-y-4",
                  children: [
                    "高等級病毒實驗室與病原處理程序資料",
                    "SARS、MRSA、炭疽、諾羅病毒等多病原與場域敘事",
                    "公開學術期刊、第三方測試與可審查資料",
                    "美、中大型醫院、政府、美國軍事／郵政與總統出訪指定場域案例",
                    "全球唯一台灣、美國、中國三地防疫技術認證與採用脈絡",
                  ].map((n) =>
                    S.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/Home.tsx:589",
                        className:
                          "flex gap-4 border border-white/14 bg-white/8 p-4 backdrop-blur-xl",
                        children: [
                          S.jsx(_5, {
                            "data-loc": "client/src/pages/Home.tsx:590",
                            className: "mt-0.5 h-5 w-5 shrink-0 text-[#8bd8ff]",
                          }),
                          S.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:591",
                            className: "font-bold leading-7 text-white/92",
                            children: n,
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            S.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:596",
              className: "relative",
              children: S.jsx("img", {
                "data-loc": "client/src/pages/Home.tsx:597",
                src: Me.poster,
                alt: "RGF-inside 軍武級環境淨化器原始附件圖",
                className:
                  "max-h-[860px] w-full border border-white/20 bg-white/10 object-contain p-3 shadow-[0_40px_120px_rgba(0,0,0,0.28)]",
              }),
            }),
          ],
        }),
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:602",
        id: "sources",
        className: "bg-[#f4f9fd] py-20",
        children: S.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:603",
          className: "mx-auto max-w-[1180px] px-5 lg:px-10",
          children: S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:604",
            className:
              "border border-sky-200 bg-white p-8 shadow-[0_22px_70px_rgba(8,47,73,0.08)]",
            children: S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:605",
              className: "flex items-start gap-4",
              children: [
                S.jsx(L5, {
                  "data-loc": "client/src/pages/Home.tsx:606",
                  className: "mt-1 h-7 w-7 shrink-0 text-[#155fb8]",
                }),
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:607",
                  children: [
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:608",
                      className:
                        "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                      children: "References & Caution",
                    }),
                    S.jsx("h2", {
                      "data-loc": "client/src/pages/Home.tsx:609",
                      className:
                        "mt-4 font-display text-3xl font-black tracking-tight text-[#082b5f]",
                      children: "以可查證資料，建立更負責任的防護承諾。",
                    }),
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:610",
                      className:
                        "mt-4 text-base font-medium leading-8 text-[#526d88]",
                      children:
                        "公開可查的 K-State BRI 官方資料顯示其為 BSL-3／BSL3-Ag 設施；若要追到四級高封閉國家生物防禦層級，必須進一步查詢 USDA NBAF。NBAF 位於 Manhattan, Kansas、鄰近 K-State BRI，並為美國具 BSL-4 containment 的大型家畜高封閉國家設施。因此，RGF-inside PHI 的高規格敘事不是把 K-State BRI 直接說成四級，而是讓消費者看懂：公開三級設施與低可見度四級 NBAF 共同構成堪薩斯生物防禦生態系；防護承諾則以降低環境與表面污染風險為核心，而非誇大為絕對防止感染。",
                    }),
                    S.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:613",
                      className:
                        "mt-6 grid gap-3 text-sm font-bold text-[#284869] md:grid-cols-3",
                      children: [
                        S.jsxs("a", {
                          "data-loc": "client/src/pages/Home.tsx:614",
                          className:
                            "inline-flex items-center gap-2 border border-sky-200 bg-[#f7fbff] p-4 transition hover:border-[#155fb8]",
                          href: "https://www.bri.k-state.edu/about/facility.html",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            "K-State BRI Facility ",
                            S.jsx(ff, {
                              "data-loc": "client/src/pages/Home.tsx:615",
                              className: "h-4 w-4",
                            }),
                          ],
                        }),
                        S.jsxs("a", {
                          "data-loc": "client/src/pages/Home.tsx:617",
                          className:
                            "inline-flex items-center gap-2 border border-sky-200 bg-[#f7fbff] p-4 transition hover:border-[#155fb8]",
                          href: "https://www.usda.gov/about-usda/general-information/initiatives-and-highlighted-programs/national-bio-and-agro-defense-facility",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            "USDA NBAF ",
                            S.jsx(ff, {
                              "data-loc": "client/src/pages/Home.tsx:618",
                              className: "h-4 w-4",
                            }),
                          ],
                        }),
                        S.jsxs("a", {
                          "data-loc": "client/src/pages/Home.tsx:620",
                          className:
                            "inline-flex items-center gap-2 border border-sky-200 bg-[#f7fbff] p-4 transition hover:border-[#155fb8]",
                          href: "https://www.cdc.gov/training/quicklearns/biosafety/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            "CDC Biosafety Levels ",
                            S.jsx(ff, {
                              "data-loc": "client/src/pages/Home.tsx:621",
                              className: "h-4 w-4",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      S.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:630",
        id: "contact",
        className: "relative overflow-hidden bg-white py-24 lg:py-32",
        children: S.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:631",
          className: "mx-auto max-w-[1180px] px-5 text-left lg:px-10",
          children: S.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:632",
            className:
              "border border-sky-200 bg-[#f7fbff] p-8 shadow-[0_30px_90px_rgba(8,47,73,0.10)] md:p-12",
            children: S.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:633",
              className: "grid gap-10 lg:grid-cols-[1.1fr_0.9fr]",
              children: [
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:634",
                  children: [
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:635",
                      className:
                        "text-xs font-black uppercase tracking-[0.35em] text-[#155fb8]",
                      children: "Deployment Ready Story",
                    }),
                    S.jsxs("h2", {
                      "data-loc": "client/src/pages/Home.tsx:636",
                      className:
                        "mt-5 font-display text-5xl font-black leading-tight tracking-[-0.045em] text-[#061b36] md:text-6xl",
                      children: [
                        "讓消費者看懂：",
                        S.jsx("br", {
                          "data-loc": "client/src/pages/Home.tsx:636",
                        }),
                        "這不是一般空氣清淨機。",
                      ],
                    }),
                    S.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:637",
                      className:
                        "mt-7 text-lg font-medium leading-8 text-[#526d88]",
                      children:
                        "所謂「軍武級淨化技術」，不只是強調殺菌數字，而是由台美中三地防疫技術認證、高等級病毒實驗、RGF 大事紀、郵包炭疽故事、真實場域經驗與原始證據資料共同支撐。三地認證的難度，正是它不同於一般空氣清淨機的第一層門檻。",
                    }),
                  ],
                }),
                S.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:641",
                  className: "flex flex-col justify-end gap-4",
                  children: [
                    S.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:642",
                      className: "border border-[#155fb8]/20 bg-white p-5",
                      children: [
                        S.jsx(z5, {
                          "data-loc": "client/src/pages/Home.tsx:643",
                          className: "h-8 w-8 text-[#155fb8]",
                        }),
                        S.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:644",
                          className:
                            "mt-5 font-display text-2xl font-black text-[#082b5f]",
                          children: "核心訊息",
                        }),
                        S.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:645",
                          className:
                            "mt-3 text-base font-semibold leading-7 text-[#526d88]",
                          children:
                            "源自美國密閉空間、生化威脅、反恐與軍事／政府設施防護需求所形成的驗證脈絡，結合主動式光水離子技術與跨地認證證據，為家庭、醫療與公共空間建立持續環境淨化能力。",
                        }),
                      ],
                    }),
                    S.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:647",
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        S.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:648",
                          className: "bg-[#082b5f] p-5 text-white",
                          children: [
                            S.jsx(P5, {
                              "data-loc": "client/src/pages/Home.tsx:648",
                              className: "h-6 w-6",
                            }),
                            S.jsx("p", {
                              "data-loc": "client/src/pages/Home.tsx:648",
                              className: "mt-4 font-black",
                              children: "主動淨化",
                            }),
                          ],
                        }),
                        S.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:649",
                          className: "bg-[#155fb8] p-5 text-white",
                          children: [
                            S.jsx(Y5, {
                              "data-loc": "client/src/pages/Home.tsx:649",
                              className: "h-6 w-6",
                            }),
                            S.jsx("p", {
                              "data-loc": "client/src/pages/Home.tsx:649",
                              className: "mt-4 font-black",
                              children: "證據防護",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    ],
  });
}
const y8 =
  typeof window < "u" && window.location.hostname.endsWith("github.io")
    ? (() => {
        const n = window.location.pathname.split("/").filter(Boolean)[0];
        return n ? `/${n}` : "";
      })()
    : "";
function i8() {
  return S.jsx(hA, {
    base: y8,
    children: S.jsxs(pA, {
      "data-loc": "client/src/App.tsx:12",
      children: [
        S.jsx(mf, {
          "data-loc": "client/src/App.tsx:13",
          path: "/",
          component: a8,
        }),
        S.jsx(mf, {
          "data-loc": "client/src/App.tsx:14",
          path: "/404",
          component: D0,
        }),
        S.jsx(mf, { "data-loc": "client/src/App.tsx:16", component: D0 }),
      ],
    }),
  });
}
function s8() {
  return S.jsx(gA, {
    "data-loc": "client/src/App.tsx:28",
    children: S.jsx(vA, {
      "data-loc": "client/src/App.tsx:29",
      defaultTheme: "light",
      children: S.jsxs(v5, {
        "data-loc": "client/src/App.tsx:33",
        children: [
          S.jsx(RS, { "data-loc": "client/src/App.tsx:34" }),
          S.jsx(i8, { "data-loc": "client/src/App.tsx:35" }),
        ],
      }),
    }),
  });
}
F2.createRoot(document.getElementById("root")).render(
  S.jsx(s8, { "data-loc": "client/src/main.tsx:5" }),
);
