(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const i of l.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const l = r(o);
        fetch(o.href, l)
    }
})();
var $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Rf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Lf(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function (n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, o.get ? o : {
            enumerable: !0,
            get: function () {
                return e[n]
            }
        })
    }), r
}
var es = {
        exports: {}
    },
    R0 = {},
    ts = {
        exports: {}
    },
    Q = {};
var Dn = Symbol.for("react.element"),
    Tf = Symbol.for("react.portal"),
    Hf = Symbol.for("react.fragment"),
    Of = Symbol.for("react.strict_mode"),
    jf = Symbol.for("react.profiler"),
    If = Symbol.for("react.provider"),
    Mf = Symbol.for("react.context"),
    Uf = Symbol.for("react.forward_ref"),
    Wf = Symbol.for("react.suspense"),
    $f = Symbol.for("react.memo"),
    Vf = Symbol.for("react.lazy"),
    uu = Symbol.iterator;

function Qf(e) {
    return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var rs = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    ns = Object.assign,
    os = {};

function Pr(e, t, r) {
    this.props = e, this.context = t, this.refs = os, this.updater = r || rs
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Pr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ls() {}
ls.prototype = Pr.prototype;

function bl(e, t, r) {
    this.props = e, this.context = t, this.refs = os, this.updater = r || rs
}
var ei = bl.prototype = new ls;
ei.constructor = bl;
ns(ei, Pr.prototype);
ei.isPureReactComponent = !0;
var au = Array.isArray,
    is = Object.prototype.hasOwnProperty,
    ti = {
        current: null
    },
    us = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function as(e, t, r) {
    var n, o = {},
        l = null,
        i = null;
    if (t != null)
        for (n in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) is.call(t, n) && !us.hasOwnProperty(n) && (o[n] = t[n]);
    var a = arguments.length - 2;
    if (a === 1) o.children = r;
    else if (1 < a) {
        for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
        o.children = c
    }
    if (e && e.defaultProps)
        for (n in a = e.defaultProps, a) o[n] === void 0 && (o[n] = a[n]);
    return {
        $$typeof: Dn,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: ti.current
    }
}

function Kf(e, t) {
    return {
        $$typeof: Dn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ri(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Dn
}

function qf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (r) {
        return t[r]
    })
}
var su = /\/+/g;

function J0(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? qf("" + e.key) : t.toString(36)
}

function Zn(e, t, r, n, o) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (l) {
    case "string":
    case "number":
        i = !0;
        break;
    case "object":
        switch (e.$$typeof) {
        case Dn:
        case Tf:
            i = !0
        }
    }
    if (i) return i = e, o = o(i), e = n === "" ? "." + J0(i, 0) : n, au(o) ? (r = "", e != null && (r = e.replace(su, "$&/") + "/"), Zn(o, t, r, "", function (u) {
        return u
    })) : o != null && (ri(o) && (o = Kf(o, r + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(su, "$&/") + "/") + e)), t.push(o)), 1;
    if (i = 0, n = n === "" ? "." : n + ":", au(e))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var c = n + J0(l, a);
            i += Zn(l, t, r, c, o)
        } else if (c = Qf(e), typeof c == "function")
            for (e = c.call(e), a = 0; !(l = e.next()).done;) l = l.value, c = n + J0(l, a++), i += Zn(l, t, r, c, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function Ln(e, t, r) {
    if (e == null) return e;
    var n = [],
        o = 0;
    return Zn(e, n, "", "", function (l) {
        return t.call(r, l, o++)
    }), n
}

function Gf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function (r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Fe = {
        current: null
    },
    Jn = {
        transition: null
    },
    Xf = {
        ReactCurrentDispatcher: Fe,
        ReactCurrentBatchConfig: Jn,
        ReactCurrentOwner: ti
    };

function ss() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: Ln,
    forEach: function (e, t, r) {
        Ln(e, function () {
            t.apply(this, arguments)
        }, r)
    },
    count: function (e) {
        var t = 0;
        return Ln(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return Ln(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!ri(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = Pr;
Q.Fragment = Hf;
Q.Profiler = jf;
Q.PureComponent = bl;
Q.StrictMode = Of;
Q.Suspense = Wf;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
Q.act = ss;
Q.cloneElement = function (e, t, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = ns({}, e.props),
        o = e.key,
        l = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref, i = ti.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (c in t) is.call(t, c) && !us.hasOwnProperty(c) && (n[c] = t[c] === void 0 && a !== void 0 ? a[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1) n.children = r;
    else if (1 < c) {
        a = Array(c);
        for (var u = 0; u < c; u++) a[u] = arguments[u + 2];
        n.children = a
    }
    return {
        $$typeof: Dn,
        type: e.type,
        key: o,
        ref: l,
        props: n,
        _owner: i
    }
};
Q.createContext = function (e) {
    return e = {
        $$typeof: Mf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: If,
        _context: e
    }, e.Consumer = e
};
Q.createElement = as;
Q.createFactory = function (e) {
    var t = as.bind(null, e);
    return t.type = e, t
};
Q.createRef = function () {
    return {
        current: null
    }
};
Q.forwardRef = function (e) {
    return {
        $$typeof: Uf,
        render: e
    }
};
Q.isValidElement = ri;
Q.lazy = function (e) {
    return {
        $$typeof: Vf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gf
    }
};
Q.memo = function (e, t) {
    return {
        $$typeof: $f,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Q.startTransition = function (e) {
    var t = Jn.transition;
    Jn.transition = {};
    try {
        e()
    } finally {
        Jn.transition = t
    }
};
Q.unstable_act = ss;
Q.useCallback = function (e, t) {
    return Fe.current.useCallback(e, t)
};
Q.useContext = function (e) {
    return Fe.current.useContext(e)
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
    return Fe.current.useDeferredValue(e)
};
Q.useEffect = function (e, t) {
    return Fe.current.useEffect(e, t)
};
Q.useId = function () {
    return Fe.current.useId()
};
Q.useImperativeHandle = function (e, t, r) {
    return Fe.current.useImperativeHandle(e, t, r)
};
Q.useInsertionEffect = function (e, t) {
    return Fe.current.useInsertionEffect(e, t)
};
Q.useLayoutEffect = function (e, t) {
    return Fe.current.useLayoutEffect(e, t)
};
Q.useMemo = function (e, t) {
    return Fe.current.useMemo(e, t)
};
Q.useReducer = function (e, t, r) {
    return Fe.current.useReducer(e, t, r)
};
Q.useRef = function (e) {
    return Fe.current.useRef(e)
};
Q.useState = function (e) {
    return Fe.current.useState(e)
};
Q.useSyncExternalStore = function (e, t, r) {
    return Fe.current.useSyncExternalStore(e, t, r)
};
Q.useTransition = function () {
    return Fe.current.useTransition()
};
Q.version = "18.3.1";
ts.exports = Q;

// NOTE: tsRef
var tsRef = ts.exports;

var Yf = tsRef,
    Zf = Symbol.for("react.element"),
    Jf = Symbol.for("react.fragment"),
    bf = Object.prototype.hasOwnProperty,
    ex = Yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    tx = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function cs(e, t, r) {
    var n, o = {},
        l = null,
        i = null;
    r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (n in t) bf.call(t, n) && !tx.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
    return {
        $$typeof: Zf,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: ex.current
    }
}
R0.Fragment = Jf;
R0.jsx = cs;
R0.jsxs = cs;
es.exports = R0;
var U = es.exports,
    fs = {
        exports: {}
    },
    Oe = {},
    xs = {
        exports: {}
    },
    ds = {};
(function (e) {
    function t(L, H) {
        var O = L.length;
        L.push(H);
        e: for (; 0 < O;) {
            var _ = O - 1 >>> 1,
                S = L[_];
            if (0 < o(S, H)) L[_] = H, L[O] = S, O = _;
            else break e
        }
    }

    function r(L) {
        return L.length === 0 ? null : L[0]
    }

    function n(L) {
        if (L.length === 0) return null;
        var H = L[0],
            O = L.pop();
        if (O !== H) {
            L[0] = O;
            e: for (var _ = 0, S = L.length, R = S >>> 1; _ < R;) {
                var N = 2 * (_ + 1) - 1,
                    J = L[N],
                    q = N + 1,
                    se = L[q];
                if (0 > o(J, O)) q < S && 0 > o(se, J) ? (L[_] = se, L[q] = O, _ = q) : (L[_] = J, L[N] = O, _ = N);
                else if (q < S && 0 > o(se, O)) L[_] = se, L[q] = O, _ = q;
                else break e
            }
        }
        return H
    }

    function o(L, H) {
        var O = L.sortIndex - H.sortIndex;
        return O !== 0 ? O : L.id - H.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now()
        }
    } else {
        var i = Date,
            a = i.now();
        e.unstable_now = function () {
            return i.now() - a
        }
    }
    var c = [],
        u = [],
        d = 1,
        y = null,
        x = 3,
        m = !1,
        h = !1,
        g = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        s = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function f(L) {
        for (var H = r(u); H !== null;) {
            if (H.callback === null) n(u);
            else if (H.startTime <= L) n(u), H.sortIndex = H.expirationTime, t(c, H);
            else break;
            H = r(u)
        }
    }

    function v(L) {
        if (g = !1, f(L), !h)
            if (r(c) !== null) h = !0, W(C);
            else {
                var H = r(u);
                H !== null && X(v, H.startTime - L)
            }
    }

    function C(L, H) {
        h = !1, g && (g = !1, p(A), A = -1), m = !0;
        var O = x;
        try {
            for (f(H), y = r(c); y !== null && (!(y.expirationTime > H) || L && !D());) {
                var _ = y.callback;
                if (typeof _ == "function") {
                    y.callback = null, x = y.priorityLevel;
                    var S = _(y.expirationTime <= H);
                    H = e.unstable_now(), typeof S == "function" ? y.callback = S : y === r(c) && n(c), f(H)
                } else n(c);
                y = r(c)
            }
            if (y !== null) var R = !0;
            else {
                var N = r(u);
                N !== null && X(v, N.startTime - H), R = !1
            }
            return R
        } finally {
            y = null, x = O, m = !1
        }
    }
    var B = !1,
        w = null,
        A = -1,
        k = 5,
        F = -1;

    function D() {
        return !(e.unstable_now() - F < k)
    }

    function z() {
        if (w !== null) {
            var L = e.unstable_now();
            F = L;
            var H = !0;
            try {
                H = w(!0, L)
            } finally {
                H ? P() : (B = !1, w = null)
            }
        } else B = !1
    }
    var P;
    if (typeof s == "function") P = function () {
        s(z)
    };
    else if (typeof MessageChannel < "u") {
        var I = new MessageChannel,
            M = I.port2;
        I.port1.onmessage = z, P = function () {
            M.postMessage(null)
        }
    } else P = function () {
        E(z, 0)
    };

    function W(L) {
        w = L, B || (B = !0, P())
    }

    function X(L, H) {
        A = E(function () {
            L(e.unstable_now())
        }, H)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (L) {
        L.callback = null
    }, e.unstable_continueExecution = function () {
        h || m || (h = !0, W(C))
    }, e.unstable_forceFrameRate = function (L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < L ? Math.floor(1e3 / L) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return x
    }, e.unstable_getFirstCallbackNode = function () {
        return r(c)
    }, e.unstable_next = function (L) {
        switch (x) {
        case 1:
        case 2:
        case 3:
            var H = 3;
            break;
        default:
            H = x
        }
        var O = x;
        x = H;
        try {
            return L()
        } finally {
            x = O
        }
    }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (L, H) {
        switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            L = 3
        }
        var O = x;
        x = L;
        try {
            return H()
        } finally {
            x = O
        }
    }, e.unstable_scheduleCallback = function (L, H, O) {
        var _ = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? _ + O : _) : O = _, L) {
        case 1:
            var S = -1;
            break;
        case 2:
            S = 250;
            break;
        case 5:
            S = 1073741823;
            break;
        case 4:
            S = 1e4;
            break;
        default:
            S = 5e3
        }
        return S = O + S, L = {
            id: d++,
            callback: H,
            priorityLevel: L,
            startTime: O,
            expirationTime: S,
            sortIndex: -1
        }, O > _ ? (L.sortIndex = O, t(u, L), r(c) === null && L === r(u) && (g ? (p(A), A = -1) : g = !0, X(v, O - _))) : (L.sortIndex = S, t(c, L), h || m || (h = !0, W(C))), L
    }, e.unstable_shouldYield = D, e.unstable_wrapCallback = function (L) {
        var H = x;
        return function () {
            var O = x;
            x = H;
            try {
                return L.apply(this, arguments)
            } finally {
                x = O
            }
        }
    }
})(ds);
xs.exports = ds;
var rx = xs.exports;
var nx = tsRef,
    He = rx;

function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ps = new Set,
    sn = {};

function Jt(e, t) {
    Fr(e, t), Fr(e + "Capture", t)
}

function Fr(e, t) {
    for (sn[e] = t, e = 0; e < t.length; e++) ps.add(t[e])
}
var ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ul = Object.prototype.hasOwnProperty,
    ox = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    cu = {},
    fu = {};

function lx(e) {
    return ul.call(fu, e) ? !0 : ul.call(cu, e) ? !1 : ox.test(e) ? fu[e] = !0 : (cu[e] = !0, !1)
}

function ix(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}

function ux(e, t, r, n) {
    if (t === null || typeof t > "u" || ix(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
    case 3:
        return !t;
    case 4:
        return t === !1;
    case 5:
        return isNaN(t);
    case 6:
        return isNaN(t) || 1 > t
    }
    return !1
}

function Ae(e, t, r, n, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    me[e] = new Ae(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0];
    me[t] = new Ae(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    me[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    me[e] = new Ae(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    me[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    me[e] = new Ae(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    me[e] = new Ae(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    me[e] = new Ae(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    me[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ni = /[\-:]([a-z])/g;

function oi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(ni, oi);
    me[t] = new Ae(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(ni, oi);
    me[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(ni, oi);
    me[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    me[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
me.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    me[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function li(e, t, r, n) {
    var o = me.hasOwnProperty(t) ? me[t] : null;
    (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ux(t, r, o, n) && (r = null), n || o === null ? lx(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var vt = nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Tn = Symbol.for("react.element"),
    ir = Symbol.for("react.portal"),
    ur = Symbol.for("react.fragment"),
    ii = Symbol.for("react.strict_mode"),
    al = Symbol.for("react.profiler"),
    vs = Symbol.for("react.provider"),
    hs = Symbol.for("react.context"),
    ui = Symbol.for("react.forward_ref"),
    sl = Symbol.for("react.suspense"),
    cl = Symbol.for("react.suspense_list"),
    ai = Symbol.for("react.memo"),
    gt = Symbol.for("react.lazy"),
    ms = Symbol.for("react.offscreen"),
    xu = Symbol.iterator;

function Ur(e) {
    return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var le = Object.assign,
    b0;

function Xr(e) {
    if (b0 === void 0) try {
        throw Error()
    } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        b0 = t && t[1] || ""
    }
    return `
` + b0 + e
}
var eo = !1;

function to(e, t) {
    if (!e || eo) return "";
    eo = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), l = n.stack.split(`
`), i = o.length - 1, a = l.length - 1; 1 <= i && 0 <= a && o[i] !== l[a];) a--;
            for (; 1 <= i && 0 <= a; i--, a--)
                if (o[i] !== l[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--, a--, 0 > a || o[i] !== l[a]) {
                                var c = `
` + o[i].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                            } while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        eo = !1, Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? Xr(e) : ""
}

function ax(e) {
    switch (e.tag) {
    case 5:
        return Xr(e.type);
    case 16:
        return Xr("Lazy");
    case 13:
        return Xr("Suspense");
    case 19:
        return Xr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = to(e.type, !1), e;
    case 11:
        return e = to(e.type.render, !1), e;
    case 1:
        return e = to(e.type, !0), e;
    default:
        return ""
    }
}

function fl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
    case ur:
        return "Fragment";
    case ir:
        return "Portal";
    case al:
        return "Profiler";
    case ii:
        return "StrictMode";
    case sl:
        return "Suspense";
    case cl:
        return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
    case hs:
        return (e.displayName || "Context") + ".Consumer";
    case vs:
        return (e._context.displayName || "Context") + ".Provider";
    case ui:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ai:
        return t = e.displayName || null, t !== null ? t : fl(e.type) || "Memo";
    case gt:
        t = e._payload, e = e._init;
        try {
            return fl(e(t))
        } catch {}
    }
    return null
}

function sx(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return fl(t);
    case 8:
        return t === ii ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t
    }
    return null
}

function Rt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}

function ys(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function cx(e) {
    var t = ys(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get,
            l = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this)
            },
            set: function (i) {
                n = "" + i, l.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }), {
            getValue: function () {
                return n
            },
            setValue: function (i) {
                n = "" + i
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Hn(e) {
    e._valueTracker || (e._valueTracker = cx(e))
}

function gs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
        n = "";
    return e && (n = ys(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
}

function s0(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function xl(e, t) {
    var r = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked
    })
}

function du(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
    r = Rt(t.value != null ? t.value : r), e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Es(e, t) {
    t = t.checked, t != null && li(e, "checked", t, !1)
}

function dl(e, t) {
    Es(e, t);
    var r = Rt(t.value),
        n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? pl(e, t.type, r) : t.hasOwnProperty("defaultValue") && pl(e, t.type, Rt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function pu(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function pl(e, t, r) {
    (t !== "number" || s0(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var Yr = Array.isArray;

function yr(e, t, r, n) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++) o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + Rt(r), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0, n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function vl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function vu(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
            if (t != null) throw Error(T(92));
            if (Yr(r)) {
                if (1 < r.length) throw Error(T(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""), r = t
    }
    e._wrapperState = {
        initialValue: Rt(r)
    }
}

function Cs(e, t) {
    var r = Rt(t.value),
        n = Rt(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
}

function hu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Bs(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}

function hl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Bs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var On, ws = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (On = On || document.createElement("div"), On.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = On.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function cn(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var br = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    fx = ["Webkit", "ms", "Moz", "O"];
Object.keys(br).forEach(function (e) {
    fx.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e]
    })
});

function Fs(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px"
}

function As(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0,
                o = Fs(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o
        }
}
var xx = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ml(e, t) {
    if (t) {
        if (xx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62))
    }
}

function yl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var gl = null;

function si(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var El = null,
    gr = null,
    Er = null;

function mu(e) {
    if (e = Sn(e)) {
        if (typeof El != "function") throw Error(T(280));
        var t = e.stateNode;
        t && (t = j0(t), El(e.stateNode, e.type, t))
    }
}

function Ds(e) {
    gr ? Er ? Er.push(e) : Er = [e] : gr = e
}

function _s() {
    if (gr) {
        var e = gr,
            t = Er;
        if (Er = gr = null, mu(e), t)
            for (e = 0; e < t.length; e++) mu(t[e])
    }
}

function ks(e, t) {
    return e(t)
}

function Ss() {}
var ro = !1;

function zs(e, t, r) {
    if (ro) return e(t, r);
    ro = !0;
    try {
        return ks(e, t, r)
    } finally {
        ro = !1, (gr !== null || Er !== null) && (Ss(), _s())
    }
}

function fn(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = j0(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
    default:
        e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(T(231, t, typeof r));
    return r
}
var Cl = !1;
if (ft) try {
    var Wr = {};
    Object.defineProperty(Wr, "passive", {
        get: function () {
            Cl = !0
        }
    }), window.addEventListener("test", Wr, Wr), window.removeEventListener("test", Wr, Wr)
} catch {
    Cl = !1
}

function dx(e, t, r, n, o, l, i, a, c) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (d) {
        this.onError(d)
    }
}
var en = !1,
    c0 = null,
    f0 = !1,
    Bl = null,
    px = {
        onError: function (e) {
            en = !0, c0 = e
        }
    };

function vx(e, t, r, n, o, l, i, a, c) {
    en = !1, c0 = null, dx.apply(px, arguments)
}

function hx(e, t, r, n, o, l, i, a, c) {
    if (vx.apply(this, arguments), en) {
        if (en) {
            var u = c0;
            en = !1, c0 = null
        } else throw Error(T(198));
        f0 || (f0 = !0, Bl = u)
    }
}

function bt(e) {
    var t = e,
        r = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (r = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? r : null
}

function Ps(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function yu(e) {
    if (bt(e) !== e) throw Error(T(188))
}

function mx(e) {
    var t = e.alternate;
    if (!t) {
        if (t = bt(e), t === null) throw Error(T(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t;;) {
        var o = r.return;
        if (o === null) break;
        var l = o.alternate;
        if (l === null) {
            if (n = o.return, n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === l.child) {
            for (l = o.child; l;) {
                if (l === r) return yu(o), e;
                if (l === n) return yu(o), t;
                l = l.sibling
            }
            throw Error(T(188))
        }
        if (r.return !== n.return) r = o, n = l;
        else {
            for (var i = !1, a = o.child; a;) {
                if (a === r) {
                    i = !0, r = o, n = l;
                    break
                }
                if (a === n) {
                    i = !0, n = o, r = l;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = l.child; a;) {
                    if (a === r) {
                        i = !0, r = l, n = o;
                        break
                    }
                    if (a === n) {
                        i = !0, n = l, r = o;
                        break
                    }
                    a = a.sibling
                }
                if (!i) throw Error(T(189))
            }
        }
        if (r.alternate !== n) throw Error(T(190))
    }
    if (r.tag !== 3) throw Error(T(188));
    return r.stateNode.current === r ? e : t
}

function Ns(e) {
    return e = mx(e), e !== null ? Rs(e) : null
}

function Rs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Rs(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ls = He.unstable_scheduleCallback,
    gu = He.unstable_cancelCallback,
    yx = He.unstable_shouldYield,
    gx = He.unstable_requestPaint,
    ue = He.unstable_now,
    Ex = He.unstable_getCurrentPriorityLevel,
    ci = He.unstable_ImmediatePriority,
    Ts = He.unstable_UserBlockingPriority,
    x0 = He.unstable_NormalPriority,
    Cx = He.unstable_LowPriority,
    Hs = He.unstable_IdlePriority,
    L0 = null,
    ot = null;

function Bx(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function") try {
        ot.onCommitFiberRoot(L0, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : Ax,
    wx = Math.log,
    Fx = Math.LN2;

function Ax(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (wx(e) / Fx | 0) | 0
}
var jn = 64,
    In = 4194304;

function Zr(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}

function d0(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
        o = e.suspendedLanes,
        l = e.pingedLanes,
        i = r & 268435455;
    if (i !== 0) {
        var a = i & ~o;
        a !== 0 ? n = Zr(a) : (l &= i, l !== 0 && (n = Zr(l)))
    } else i = r & ~o, i !== 0 ? n = Zr(i) : l !== 0 && (n = Zr(l));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && !(t & o) && (o = n & -n, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
    if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= n; 0 < t;) r = 31 - Je(t), o = 1 << r, n |= e[r], t &= ~o;
    return n
}

function Dx(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}

function _x(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var i = 31 - Je(l),
            a = 1 << i,
            c = o[i];
        c === -1 ? (!(a & r) || a & n) && (o[i] = Dx(a, t)) : c <= t && (e.expiredLanes |= a), l &= ~a
    }
}

function wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Os() {
    var e = jn;
    return jn <<= 1, !(jn & 4194240) && (jn = 64), e
}

function no(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t
}

function _n(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = r
}

function kx(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
        var o = 31 - Je(r),
            l = 1 << o;
        t[o] = 0, n[o] = -1, e[o] = -1, r &= ~l
    }
}

function fi(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r;) {
        var n = 31 - Je(r),
            o = 1 << n;
        o & t | e[n] & t && (e[n] |= t), r &= ~o
    }
}
var Z = 0;

function js(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Is, xi, Ms, Us, Ws, Fl = !1,
    Mn = [],
    At = null,
    Dt = null,
    _t = null,
    xn = new Map,
    dn = new Map,
    Ct = [],
    Sx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Eu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        At = null;
        break;
    case "dragenter":
    case "dragleave":
        Dt = null;
        break;
    case "mouseover":
    case "mouseout":
        _t = null;
        break;
    case "pointerover":
    case "pointerout":
        xn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        dn.delete(t.pointerId)
    }
}

function $r(e, t, r, n, o, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: l,
        targetContainers: [o]
    }, t !== null && (t = Sn(t), t !== null && xi(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function zx(e, t, r, n, o) {
    switch (t) {
    case "focusin":
        return At = $r(At, e, t, r, n, o), !0;
    case "dragenter":
        return Dt = $r(Dt, e, t, r, n, o), !0;
    case "mouseover":
        return _t = $r(_t, e, t, r, n, o), !0;
    case "pointerover":
        var l = o.pointerId;
        return xn.set(l, $r(xn.get(l) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
        return l = o.pointerId, dn.set(l, $r(dn.get(l) || null, e, t, r, n, o)), !0
    }
    return !1
}

function $s(e) {
    var t = Wt(e.target);
    if (t !== null) {
        var r = bt(t);
        if (r !== null) {
            if (t = r.tag, t === 13) {
                if (t = Ps(r), t !== null) {
                    e.blockedOn = t, Ws(e.priority, function () {
                        Ms(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function bn(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var r = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type, r);
            gl = n, r.target.dispatchEvent(n), gl = null
        } else return t = Sn(r), t !== null && xi(t), e.blockedOn = r, !1;
        t.shift()
    }
    return !0
}

function Cu(e, t, r) {
    bn(e) && r.delete(t)
}

function Px() {
    Fl = !1, At !== null && bn(At) && (At = null), Dt !== null && bn(Dt) && (Dt = null), _t !== null && bn(_t) && (_t = null), xn.forEach(Cu), dn.forEach(Cu)
}

function Vr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fl || (Fl = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, Px)))
}

function pn(e) {
    function t(o) {
        return Vr(o, e)
    }
    if (0 < Mn.length) {
        Vr(Mn[0], e);
        for (var r = 1; r < Mn.length; r++) {
            var n = Mn[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (At !== null && Vr(At, e), Dt !== null && Vr(Dt, e), _t !== null && Vr(_t, e), xn.forEach(t), dn.forEach(t), r = 0; r < Ct.length; r++) n = Ct[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < Ct.length && (r = Ct[0], r.blockedOn === null);) $s(r), r.blockedOn === null && Ct.shift()
}
var Cr = vt.ReactCurrentBatchConfig,
    p0 = !0;

function Nx(e, t, r, n) {
    var o = Z,
        l = Cr.transition;
    Cr.transition = null;
    try {
        Z = 1, di(e, t, r, n)
    } finally {
        Z = o, Cr.transition = l
    }
}

function Rx(e, t, r, n) {
    var o = Z,
        l = Cr.transition;
    Cr.transition = null;
    try {
        Z = 4, di(e, t, r, n)
    } finally {
        Z = o, Cr.transition = l
    }
}

function di(e, t, r, n) {
    if (p0) {
        var o = Al(e, t, r, n);
        if (o === null) po(e, t, n, v0, r), Eu(e, n);
        else if (zx(o, e, t, r, n)) n.stopPropagation();
        else if (Eu(e, n), t & 4 && -1 < Sx.indexOf(e)) {
            for (; o !== null;) {
                var l = Sn(o);
                if (l !== null && Is(l), l = Al(e, t, r, n), l === null && po(e, t, n, v0, r), l === o) break;
                o = l
            }
            o !== null && n.stopPropagation()
        } else po(e, t, n, null, r)
    }
}
var v0 = null;

function Al(e, t, r, n) {
    if (v0 = null, e = si(n), e = Wt(e), e !== null)
        if (t = bt(e), t === null) e = null;
        else if (r = t.tag, r === 13) {
        if (e = Ps(t), e !== null) return e;
        e = null
    } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return v0 = e, null
}

function Vs(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ex()) {
        case ci:
            return 1;
        case Ts:
            return 4;
        case x0:
        case Cx:
            return 16;
        case Hs:
            return 536870912;
        default:
            return 16
        }
        default:
            return 16
    }
}
var wt = null,
    pi = null,
    e0 = null;

function Qs() {
    if (e0) return e0;
    var e, t = pi,
        r = t.length,
        n, o = "value" in wt ? wt.value : wt.textContent,
        l = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++);
    var i = r - e;
    for (n = 1; n <= i && t[r - n] === o[l - n]; n++);
    return e0 = o.slice(e, 1 < n ? 1 - n : void 0)
}

function t0(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Un() {
    return !0
}

function Bu() {
    return !1
}

function je(e) {
    function t(r, n, o, l, i) {
        this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = l, this.target = i, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (r = e[a], this[a] = r ? r(l) : l[a]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Un : Bu, this.isPropagationStopped = Bu, this
    }
    return le(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Un)
        },
        stopPropagation: function () {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Un)
        },
        persist: function () {},
        isPersistent: Un
    }), t
}
var Nr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    vi = je(Nr),
    kn = le({}, Nr, {
        view: 0,
        detail: 0
    }),
    Lx = je(kn),
    oo, lo, Qr, T0 = le({}, kn, {
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
        getModifierState: hi,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Qr && (Qr && e.type === "mousemove" ? (oo = e.screenX - Qr.screenX, lo = e.screenY - Qr.screenY) : lo = oo = 0, Qr = e), oo)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : lo
        }
    }),
    wu = je(T0),
    Tx = le({}, T0, {
        dataTransfer: 0
    }),
    Hx = je(Tx),
    Ox = le({}, kn, {
        relatedTarget: 0
    }),
    io = je(Ox),
    jx = le({}, Nr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Ix = je(jx),
    Mx = le({}, Nr, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Ux = je(Mx),
    Wx = le({}, Nr, {
        data: 0
    }),
    Fu = je(Wx),
    $x = {
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
        MozPrintableKey: "Unidentified"
    },
    Vx = {
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
        224: "Meta"
    },
    Qx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Kx(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qx[e]) ? !!t[e] : !1
}

function hi() {
    return Kx
}
var qx = le({}, kn, {
        key: function (e) {
            if (e.key) {
                var t = $x[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = t0(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vx[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: hi,
        charCode: function (e) {
            return e.type === "keypress" ? t0(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? t0(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Gx = je(qx),
    Xx = le({}, T0, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Au = je(Xx),
    Yx = le({}, kn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: hi
    }),
    Zx = je(Yx),
    Jx = le({}, Nr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    bx = je(Jx),
    e1 = le({}, T0, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    t1 = je(e1),
    r1 = [9, 13, 27, 32],
    mi = ft && "CompositionEvent" in window,
    tn = null;
ft && "documentMode" in document && (tn = document.documentMode);
var n1 = ft && "TextEvent" in window && !tn,
    Ks = ft && (!mi || tn && 8 < tn && 11 >= tn),
    Du = " ",
    _u = !1;

function qs(e, t) {
    switch (e) {
    case "keyup":
        return r1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}

function Gs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var ar = !1;

function o1(e, t) {
    switch (e) {
    case "compositionend":
        return Gs(t);
    case "keypress":
        return t.which !== 32 ? null : (_u = !0, Du);
    case "textInput":
        return e = t.data, e === Du && _u ? null : e;
    default:
        return null
    }
}

function l1(e, t) {
    if (ar) return e === "compositionend" || !mi && qs(e, t) ? (e = Qs(), e0 = pi = wt = null, ar = !1, e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ks && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var i1 = {
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
    week: !0
};

function ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!i1[e.type] : t === "textarea"
}

function Xs(e, t, r, n) {
    Ds(n), t = h0(t, "onChange"), 0 < t.length && (r = new vi("onChange", "change", null, r, n), e.push({
        event: r,
        listeners: t
    }))
}
var rn = null,
    vn = null;

function u1(e) {
    ic(e, 0)
}

function H0(e) {
    var t = fr(e);
    if (gs(t)) return e
}

function a1(e, t) {
    if (e === "change") return t
}
var Ys = !1;
if (ft) {
    var uo;
    if (ft) {
        var ao = "oninput" in document;
        if (!ao) {
            var Su = document.createElement("div");
            Su.setAttribute("oninput", "return;"), ao = typeof Su.oninput == "function"
        }
        uo = ao
    } else uo = !1;
    Ys = uo && (!document.documentMode || 9 < document.documentMode)
}

function zu() {
    rn && (rn.detachEvent("onpropertychange", Zs), vn = rn = null)
}

function Zs(e) {
    if (e.propertyName === "value" && H0(vn)) {
        var t = [];
        Xs(t, vn, e, si(e)), zs(u1, t)
    }
}

function s1(e, t, r) {
    e === "focusin" ? (zu(), rn = t, vn = r, rn.attachEvent("onpropertychange", Zs)) : e === "focusout" && zu()
}

function c1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return H0(vn)
}

function f1(e, t) {
    if (e === "click") return H0(t)
}

function x1(e, t) {
    if (e === "input" || e === "change") return H0(t)
}

function d1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var et = typeof Object.is == "function" ? Object.is : d1;

function hn(e, t) {
    if (et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!ul.call(t, o) || !et(e[o], t[o])) return !1
    }
    return !0
}

function Pu(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Nu(e, t) {
    var r = Pu(e);
    e = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
                node: r,
                offset: t - e
            };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Pu(r)
    }
}

function Js(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Js(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function bs() {
    for (var e = window, t = s0(); t instanceof e.HTMLIFrameElement;) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) e = t.contentWindow;
        else break;
        t = s0(e.document)
    }
    return t
}

function yi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function p1(e) {
    var t = bs(),
        r = e.focusedElem,
        n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && Js(r.ownerDocument.documentElement, r)) {
        if (n !== null && yi(r)) {
            if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = r.textContent.length,
                    l = Math.min(n.start, o);
                n = n.end === void 0 ? l : Math.min(n.end, o), !e.extend && l > n && (o = n, n = l, l = o), o = Nu(r, l);
                var i = Nu(r, n);
                o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > n ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = r; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var v1 = ft && "documentMode" in document && 11 >= document.documentMode,
    sr = null,
    Dl = null,
    nn = null,
    _l = !1;

function Ru(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    _l || sr == null || sr !== s0(n) || (n = sr, "selectionStart" in n && yi(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }), nn && hn(nn, n) || (nn = n, n = h0(Dl, "onSelect"), 0 < n.length && (t = new vi("onSelect", "select", null, t, r), e.push({
        event: t,
        listeners: n
    }), t.target = sr)))
}

function Wn(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
}
var cr = {
        animationend: Wn("Animation", "AnimationEnd"),
        animationiteration: Wn("Animation", "AnimationIteration"),
        animationstart: Wn("Animation", "AnimationStart"),
        transitionend: Wn("Transition", "TransitionEnd")
    },
    so = {},
    ec = {};
ft && (ec = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);

function O0(e) {
    if (so[e]) return so[e];
    if (!cr[e]) return e;
    var t = cr[e],
        r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in ec) return so[e] = t[r];
    return e
}
var tc = O0("animationend"),
    rc = O0("animationiteration"),
    nc = O0("animationstart"),
    oc = O0("transitionend"),
    lc = new Map,
    Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Tt(e, t) {
    lc.set(e, t), Jt(t, [e])
}
for (var co = 0; co < Lu.length; co++) {
    var fo = Lu[co],
        h1 = fo.toLowerCase(),
        m1 = fo[0].toUpperCase() + fo.slice(1);
    Tt(h1, "on" + m1)
}
Tt(tc, "onAnimationEnd");
Tt(rc, "onAnimationIteration");
Tt(nc, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(oc, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
Jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    y1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));

function Tu(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, hx(n, t, void 0, e), e.currentTarget = null
}

function ic(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r],
            o = n.event;
        n = n.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var i = n.length - 1; 0 <= i; i--) {
                    var a = n[i],
                        c = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, c !== l && o.isPropagationStopped()) break e;
                    Tu(o, a, u), l = c
                } else
                    for (i = 0; i < n.length; i++) {
                        if (a = n[i], c = a.instance, u = a.currentTarget, a = a.listener, c !== l && o.isPropagationStopped()) break e;
                        Tu(o, a, u), l = c
                    }
        }
    }
    if (f0) throw e = Bl, f0 = !1, Bl = null, e
}

function ee(e, t) {
    var r = t[Nl];
    r === void 0 && (r = t[Nl] = new Set);
    var n = e + "__bubble";
    r.has(n) || (uc(t, e, 2, !1), r.add(n))
}

function xo(e, t, r) {
    var n = 0;
    t && (n |= 4), uc(r, e, n, t)
}
var $n = "_reactListening" + Math.random().toString(36).slice(2);

function mn(e) {
    if (!e[$n]) {
        e[$n] = !0, ps.forEach(function (r) {
            r !== "selectionchange" && (y1.has(r) || xo(r, !1, e), xo(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$n] || (t[$n] = !0, xo("selectionchange", !1, t))
    }
}

function uc(e, t, r, n) {
    switch (Vs(t)) {
    case 1:
        var o = Nx;
        break;
    case 4:
        o = Rx;
        break;
    default:
        o = di
    }
    r = o.bind(null, t, r, e), o = void 0, !Cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
        passive: o
    }) : e.addEventListener(t, r, !1)
}

function po(e, t, r, n, o) {
    var l = n;
    if (!(t & 1) && !(t & 2) && n !== null) e: for (;;) {
        if (n === null) return;
        var i = n.tag;
        if (i === 3 || i === 4) {
            var a = n.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (i === 4)
                for (i = n.return; i !== null;) {
                    var c = i.tag;
                    if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o)) return;
                    i = i.return
                }
            for (; a !== null;) {
                if (i = Wt(a), i === null) return;
                if (c = i.tag, c === 5 || c === 6) {
                    n = l = i;
                    continue e
                }
                a = a.parentNode
            }
        }
        n = n.return
    }
    zs(function () {
        var u = l,
            d = si(r),
            y = [];
        e: {
            var x = lc.get(e);
            if (x !== void 0) {
                var m = vi,
                    h = e;
                switch (e) {
                case "keypress":
                    if (t0(r) === 0) break e;
                case "keydown":
                case "keyup":
                    m = Gx;
                    break;
                case "focusin":
                    h = "focus", m = io;
                    break;
                case "focusout":
                    h = "blur", m = io;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = io;
                    break;
                case "click":
                    if (r.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = wu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = Hx;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = Zx;
                    break;
                case tc:
                case rc:
                case nc:
                    m = Ix;
                    break;
                case oc:
                    m = bx;
                    break;
                case "scroll":
                    m = Lx;
                    break;
                case "wheel":
                    m = t1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = Ux;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Au
                }
                var g = (t & 4) !== 0,
                    E = !g && e === "scroll",
                    p = g ? x !== null ? x + "Capture" : null : x;
                g = [];
                for (var s = u, f; s !== null;) {
                    f = s;
                    var v = f.stateNode;
                    if (f.tag === 5 && v !== null && (f = v, p !== null && (v = fn(s, p), v != null && g.push(yn(s, v, f)))), E) break;
                    s = s.return
                }
                0 < g.length && (x = new m(x, h, null, r, d), y.push({
                    event: x,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (x = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", x && r !== gl && (h = r.relatedTarget || r.fromElement) && (Wt(h) || h[xt])) break e;
                if ((m || x) && (x = d.window === d ? d : (x = d.ownerDocument) ? x.defaultView || x.parentWindow : window, m ? (h = r.relatedTarget || r.toElement, m = u, h = h ? Wt(h) : null, h !== null && (E = bt(h), h !== E || h.tag !== 5 && h.tag !== 6) && (h = null)) : (m = null, h = u), m !== h)) {
                    if (g = wu, v = "onMouseLeave", p = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (g = Au, v = "onPointerLeave", p = "onPointerEnter", s = "pointer"), E = m == null ? x : fr(m), f = h == null ? x : fr(h), x = new g(v, s + "leave", m, r, d), x.target = E, x.relatedTarget = f, v = null, Wt(d) === u && (g = new g(p, s + "enter", h, r, d), g.target = f, g.relatedTarget = E, v = g), E = v, m && h) t: {
                        for (g = m, p = h, s = 0, f = g; f; f = lr(f)) s++;
                        for (f = 0, v = p; v; v = lr(v)) f++;
                        for (; 0 < s - f;) g = lr(g),
                        s--;
                        for (; 0 < f - s;) p = lr(p),
                        f--;
                        for (; s--;) {
                            if (g === p || p !== null && g === p.alternate) break t;
                            g = lr(g), p = lr(p)
                        }
                        g = null
                    }
                    else g = null;
                    m !== null && Hu(y, x, m, g, !1), h !== null && E !== null && Hu(y, E, h, g, !0)
                }
            }
            e: {
                if (x = u ? fr(u) : window, m = x.nodeName && x.nodeName.toLowerCase(), m === "select" || m === "input" && x.type === "file") var C = a1;
                else if (ku(x))
                    if (Ys) C = x1;
                    else {
                        C = c1;
                        var B = s1
                    }
                else(m = x.nodeName) && m.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (C = f1);
                if (C && (C = C(e, u))) {
                    Xs(y, C, r, d);
                    break e
                }
                B && B(e, x, u),
                e === "focusout" && (B = x._wrapperState) && B.controlled && x.type === "number" && pl(x, "number", x.value)
            }
            switch (B = u ? fr(u) : window, e) {
            case "focusin":
                (ku(B) || B.contentEditable === "true") && (sr = B, Dl = u, nn = null);
                break;
            case "focusout":
                nn = Dl = sr = null;
                break;
            case "mousedown":
                _l = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                _l = !1, Ru(y, r, d);
                break;
            case "selectionchange":
                if (v1) break;
            case "keydown":
            case "keyup":
                Ru(y, r, d)
            }
            var w;
            if (mi) e: {
                switch (e) {
                case "compositionstart":
                    var A = "onCompositionStart";
                    break e;
                case "compositionend":
                    A = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    A = "onCompositionUpdate";
                    break e
                }
                A = void 0
            }
            else ar ? qs(e, r) && (A = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (A = "onCompositionStart");A && (Ks && r.locale !== "ko" && (ar || A !== "onCompositionStart" ? A === "onCompositionEnd" && ar && (w = Qs()) : (wt = d, pi = "value" in wt ? wt.value : wt.textContent, ar = !0)), B = h0(u, A), 0 < B.length && (A = new Fu(A, e, null, r, d), y.push({
                event: A,
                listeners: B
            }), w ? A.data = w : (w = Gs(r), w !== null && (A.data = w)))),
            (w = n1 ? o1(e, r) : l1(e, r)) && (u = h0(u, "onBeforeInput"), 0 < u.length && (d = new Fu("onBeforeInput", "beforeinput", null, r, d), y.push({
                event: d,
                listeners: u
            }), d.data = w))
        }
        ic(y, t)
    })
}

function yn(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}

function h0(e, t) {
    for (var r = t + "Capture", n = []; e !== null;) {
        var o = e,
            l = o.stateNode;
        o.tag === 5 && l !== null && (o = l, l = fn(e, r), l != null && n.unshift(yn(e, l, o)), l = fn(e, t), l != null && n.push(yn(e, l, o))), e = e.return
    }
    return n
}

function lr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Hu(e, t, r, n, o) {
    for (var l = t._reactName, i = []; r !== null && r !== n;) {
        var a = r,
            c = a.alternate,
            u = a.stateNode;
        if (c !== null && c === n) break;
        a.tag === 5 && u !== null && (a = u, o ? (c = fn(r, l), c != null && i.unshift(yn(r, c, a))) : o || (c = fn(r, l), c != null && i.push(yn(r, c, a)))), r = r.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var g1 = /\r\n?/g,
    E1 = /\u0000|\uFFFD/g;

function Ou(e) {
    return (typeof e == "string" ? e : "" + e).replace(g1, `
`).replace(E1, "")
}

function Vn(e, t, r) {
    if (t = Ou(t), Ou(e) !== t && r) throw Error(T(425))
}

function m0() {}
var kl = null,
    Sl = null;

function zl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
    C1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ju = typeof Promise == "function" ? Promise : void 0,
    B1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ju < "u" ? function (e) {
        return ju.resolve(null).then(e).catch(w1)
    } : Pl;

function w1(e) {
    setTimeout(function () {
        throw e
    })
}

function vo(e, t) {
    var r = t,
        n = 0;
    do {
        var o = r.nextSibling;
        if (e.removeChild(r), o && o.nodeType === 8)
            if (r = o.data, r === "/$") {
                if (n === 0) {
                    e.removeChild(o), pn(t);
                    return
                }
                n--
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = o
    } while (r);
    pn(t)
}

function kt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Iu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e;
                t--
            } else r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Rr = Math.random().toString(36).slice(2),
    nt = "__reactFiber$" + Rr,
    gn = "__reactProps$" + Rr,
    xt = "__reactContainer$" + Rr,
    Nl = "__reactEvents$" + Rr,
    F1 = "__reactListeners$" + Rr,
    A1 = "__reactHandles$" + Rr;

function Wt(e) {
    var t = e[nt];
    if (t) return t;
    for (var r = e.parentNode; r;) {
        if (t = r[xt] || r[nt]) {
            if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                for (e = Iu(e); e !== null;) {
                    if (r = e[nt]) return r;
                    e = Iu(e)
                }
            return t
        }
        e = r, r = e.parentNode
    }
    return null
}

function Sn(e) {
    return e = e[nt] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33))
}

function j0(e) {
    return e[gn] || null
}
var Rl = [],
    xr = -1;

function Ht(e) {
    return {
        current: e
    }
}

function te(e) {
    0 > xr || (e.current = Rl[xr], Rl[xr] = null, xr--)
}

function b(e, t) {
    xr++, Rl[xr] = e.current, e.current = t
}
var Lt = {},
    Ce = Ht(Lt),
    ke = Ht(!1),
    qt = Lt;

function Ar(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Lt;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        l;
    for (l in r) o[l] = t[l];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Se(e) {
    return e = e.childContextTypes, e != null
}

function y0() {
    te(ke), te(Ce)
}

function Mu(e, t, r) {
    if (Ce.current !== Lt) throw Error(T(168));
    b(Ce, t), b(ke, r)
}

function ac(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var o in n)
        if (!(o in t)) throw Error(T(108, sx(e) || "Unknown", o));
    return le({}, r, n)
}

function g0(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lt, qt = Ce.current, b(Ce, e), b(ke, ke.current), !0
}

function Uu(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(T(169));
    r ? (e = ac(e, t, qt), n.__reactInternalMemoizedMergedChildContext = e, te(ke), te(Ce), b(Ce, e)) : te(ke), b(ke, r)
}
var ut = null,
    I0 = !1,
    ho = !1;

function sc(e) {
    ut === null ? ut = [e] : ut.push(e)
}

function D1(e) {
    I0 = !0, sc(e)
}

function Ot() {
    if (!ho && ut !== null) {
        ho = !0;
        var e = 0,
            t = Z;
        try {
            var r = ut;
            for (Z = 1; e < r.length; e++) {
                var n = r[e];
                do n = n(!0); while (n !== null)
            }
            ut = null, I0 = !1
        } catch (o) {
            throw ut !== null && (ut = ut.slice(e + 1)), Ls(ci, Ot), o
        } finally {
            Z = t, ho = !1
        }
    }
    return null
}
var dr = [],
    pr = 0,
    E0 = null,
    C0 = 0,
    Me = [],
    Ue = 0,
    Gt = null,
    at = 1,
    st = "";

function Mt(e, t) {
    dr[pr++] = C0, dr[pr++] = E0, E0 = e, C0 = t
}

function cc(e, t, r) {
    Me[Ue++] = at, Me[Ue++] = st, Me[Ue++] = Gt, Gt = e;
    var n = at;
    e = st;
    var o = 32 - Je(n) - 1;
    n &= ~(1 << o), r += 1;
    var l = 32 - Je(t) + o;
    if (30 < l) {
        var i = o - o % 5;
        l = (n & (1 << i) - 1).toString(32), n >>= i, o -= i, at = 1 << 32 - Je(t) + o | r << o | n, st = l + e
    } else at = 1 << l | r << o | n, st = e
}

function gi(e) {
    e.return !== null && (Mt(e, 1), cc(e, 1, 0))
}

function Ei(e) {
    for (; e === E0;) E0 = dr[--pr], dr[pr] = null, C0 = dr[--pr], dr[pr] = null;
    for (; e === Gt;) Gt = Me[--Ue], Me[Ue] = null, st = Me[--Ue], Me[Ue] = null, at = Me[--Ue], Me[Ue] = null
}
var Te = null,
    Le = null,
    re = !1,
    Ze = null;

function fc(e, t) {
    var r = We(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
}

function Wu(e, t) {
    switch (e.tag) {
    case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Te = e, Le = kt(t.firstChild), !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Te = e, Le = null, !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Gt !== null ? {
            id: at,
            overflow: st
        } : null, e.memoizedState = {
            dehydrated: t,
            treeContext: r,
            retryLane: 1073741824
        }, r = We(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, Te = e, Le = null, !0) : !1;
    default:
        return !1
    }
}

function Ll(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Tl(e) {
    if (re) {
        var t = Le;
        if (t) {
            var r = t;
            if (!Wu(e, t)) {
                if (Ll(e)) throw Error(T(418));
                t = kt(r.nextSibling);
                var n = Te;
                t && Wu(e, t) ? fc(n, r) : (e.flags = e.flags & -4097 | 2, re = !1, Te = e)
            }
        } else {
            if (Ll(e)) throw Error(T(418));
            e.flags = e.flags & -4097 | 2, re = !1, Te = e
        }
    }
}

function $u(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Te = e
}

function Qn(e) {
    if (e !== Te) return !1;
    if (!re) return $u(e), re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zl(e.type, e.memoizedProps)), t && (t = Le)) {
        if (Ll(e)) throw xc(), Error(T(418));
        for (; t;) fc(e, t), t = kt(t.nextSibling)
    }
    if ($u(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            Le = kt(e.nextSibling);
                            break e
                        }
                        t--
                    } else r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            Le = null
        }
    } else Le = Te ? kt(e.stateNode.nextSibling) : null;
    return !0
}

function xc() {
    for (var e = Le; e;) e = kt(e.nextSibling)
}

function Dr() {
    Le = Te = null, re = !1
}

function Ci(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}
var _1 = vt.ReactCurrentBatchConfig;

function Kr(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(T(309));
                var n = r.stateNode
            }
            if (!n) throw Error(T(147, e));
            var o = n,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function (i) {
                var a = o.refs;
                i === null ? delete a[l] : a[l] = i
            }, t._stringRef = l, t)
        }
        if (typeof e != "string") throw Error(T(284));
        if (!r._owner) throw Error(T(290, e))
    }
    return e
}

function Kn(e, t) {
    throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Vu(e) {
    var t = e._init;
    return t(e._payload)
}

function dc(e) {
    function t(p, s) {
        if (e) {
            var f = p.deletions;
            f === null ? (p.deletions = [s], p.flags |= 16) : f.push(s)
        }
    }

    function r(p, s) {
        if (!e) return null;
        for (; s !== null;) t(p, s), s = s.sibling;
        return null
    }

    function n(p, s) {
        for (p = new Map; s !== null;) s.key !== null ? p.set(s.key, s) : p.set(s.index, s), s = s.sibling;
        return p
    }

    function o(p, s) {
        return p = Nt(p, s), p.index = 0, p.sibling = null, p
    }

    function l(p, s, f) {
        return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < s ? (p.flags |= 2, s) : f) : (p.flags |= 2, s)) : (p.flags |= 1048576, s)
    }

    function i(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, s, f, v) {
        return s === null || s.tag !== 6 ? (s = wo(f, p.mode, v), s.return = p, s) : (s = o(s, f), s.return = p, s)
    }

    function c(p, s, f, v) {
        var C = f.type;
        return C === ur ? d(p, s, f.props.children, v, f.key) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === gt && Vu(C) === s.type) ? (v = o(s, f.props), v.ref = Kr(p, s, f), v.return = p, v) : (v = a0(f.type, f.key, f.props, null, p.mode, v), v.ref = Kr(p, s, f), v.return = p, v)
    }

    function u(p, s, f, v) {
        return s === null || s.tag !== 4 || s.stateNode.containerInfo !== f.containerInfo || s.stateNode.implementation !== f.implementation ? (s = Fo(f, p.mode, v), s.return = p, s) : (s = o(s, f.children || []), s.return = p, s)
    }

    function d(p, s, f, v, C) {
        return s === null || s.tag !== 7 ? (s = Kt(f, p.mode, v, C), s.return = p, s) : (s = o(s, f), s.return = p, s)
    }

    function y(p, s, f) {
        if (typeof s == "string" && s !== "" || typeof s == "number") return s = wo("" + s, p.mode, f), s.return = p, s;
        if (typeof s == "object" && s !== null) {
            switch (s.$$typeof) {
            case Tn:
                return f = a0(s.type, s.key, s.props, null, p.mode, f), f.ref = Kr(p, null, s), f.return = p, f;
            case ir:
                return s = Fo(s, p.mode, f), s.return = p, s;
            case gt:
                var v = s._init;
                return y(p, v(s._payload), f)
            }
            if (Yr(s) || Ur(s)) return s = Kt(s, p.mode, f, null), s.return = p, s;
            Kn(p, s)
        }
        return null
    }

    function x(p, s, f, v) {
        var C = s !== null ? s.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : a(p, s, "" + f, v);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Tn:
                return f.key === C ? c(p, s, f, v) : null;
            case ir:
                return f.key === C ? u(p, s, f, v) : null;
            case gt:
                return C = f._init, x(p, s, C(f._payload), v)
            }
            if (Yr(f) || Ur(f)) return C !== null ? null : d(p, s, f, v, null);
            Kn(p, f)
        }
        return null
    }

    function m(p, s, f, v, C) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return p = p.get(f) || null, a(s, p, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Tn:
                return p = p.get(v.key === null ? f : v.key) || null, c(s, p, v, C);
            case ir:
                return p = p.get(v.key === null ? f : v.key) || null, u(s, p, v, C);
            case gt:
                var B = v._init;
                return m(p, s, f, B(v._payload), C)
            }
            if (Yr(v) || Ur(v)) return p = p.get(f) || null, d(s, p, v, C, null);
            Kn(s, v)
        }
        return null
    }

    function h(p, s, f, v) {
        for (var C = null, B = null, w = s, A = s = 0, k = null; w !== null && A < f.length; A++) {
            w.index > A ? (k = w, w = null) : k = w.sibling;
            var F = x(p, w, f[A], v);
            if (F === null) {
                w === null && (w = k);
                break
            }
            e && w && F.alternate === null && t(p, w), s = l(F, s, A), B === null ? C = F : B.sibling = F, B = F, w = k
        }
        if (A === f.length) return r(p, w), re && Mt(p, A), C;
        if (w === null) {
            for (; A < f.length; A++) w = y(p, f[A], v), w !== null && (s = l(w, s, A), B === null ? C = w : B.sibling = w, B = w);
            return re && Mt(p, A), C
        }
        for (w = n(p, w); A < f.length; A++) k = m(w, p, A, f[A], v), k !== null && (e && k.alternate !== null && w.delete(k.key === null ? A : k.key), s = l(k, s, A), B === null ? C = k : B.sibling = k, B = k);
        return e && w.forEach(function (D) {
            return t(p, D)
        }), re && Mt(p, A), C
    }

    function g(p, s, f, v) {
        var C = Ur(f);
        if (typeof C != "function") throw Error(T(150));
        if (f = C.call(f), f == null) throw Error(T(151));
        for (var B = C = null, w = s, A = s = 0, k = null, F = f.next(); w !== null && !F.done; A++, F = f.next()) {
            w.index > A ? (k = w, w = null) : k = w.sibling;
            var D = x(p, w, F.value, v);
            if (D === null) {
                w === null && (w = k);
                break
            }
            e && w && D.alternate === null && t(p, w), s = l(D, s, A), B === null ? C = D : B.sibling = D, B = D, w = k
        }
        if (F.done) return r(p, w), re && Mt(p, A), C;
        if (w === null) {
            for (; !F.done; A++, F = f.next()) F = y(p, F.value, v), F !== null && (s = l(F, s, A), B === null ? C = F : B.sibling = F, B = F);
            return re && Mt(p, A), C
        }
        for (w = n(p, w); !F.done; A++, F = f.next()) F = m(w, p, A, F.value, v), F !== null && (e && F.alternate !== null && w.delete(F.key === null ? A : F.key), s = l(F, s, A), B === null ? C = F : B.sibling = F, B = F);
        return e && w.forEach(function (z) {
            return t(p, z)
        }), re && Mt(p, A), C
    }

    function E(p, s, f, v) {
        if (typeof f == "object" && f !== null && f.type === ur && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
            case Tn:
                e: {
                    for (var C = f.key, B = s; B !== null;) {
                        if (B.key === C) {
                            if (C = f.type, C === ur) {
                                if (B.tag === 7) {
                                    r(p, B.sibling), s = o(B, f.props.children), s.return = p, p = s;
                                    break e
                                }
                            } else if (B.elementType === C || typeof C == "object" && C !== null && C.$$typeof === gt && Vu(C) === B.type) {
                                r(p, B.sibling), s = o(B, f.props), s.ref = Kr(p, B, f), s.return = p, p = s;
                                break e
                            }
                            r(p, B);
                            break
                        } else t(p, B);
                        B = B.sibling
                    }
                    f.type === ur ? (s = Kt(f.props.children, p.mode, v, f.key), s.return = p, p = s) : (v = a0(f.type, f.key, f.props, null, p.mode, v), v.ref = Kr(p, s, f), v.return = p, p = v)
                }
                return i(p);
            case ir:
                e: {
                    for (B = f.key; s !== null;) {
                        if (s.key === B)
                            if (s.tag === 4 && s.stateNode.containerInfo === f.containerInfo && s.stateNode.implementation === f.implementation) {
                                r(p, s.sibling), s = o(s, f.children || []), s.return = p, p = s;
                                break e
                            } else {
                                r(p, s);
                                break
                            }
                        else t(p, s);
                        s = s.sibling
                    }
                    s = Fo(f, p.mode, v),
                    s.return = p,
                    p = s
                }
                return i(p);
            case gt:
                return B = f._init, E(p, s, B(f._payload), v)
            }
            if (Yr(f)) return h(p, s, f, v);
            if (Ur(f)) return g(p, s, f, v);
            Kn(p, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, s !== null && s.tag === 6 ? (r(p, s.sibling), s = o(s, f), s.return = p, p = s) : (r(p, s), s = wo(f, p.mode, v), s.return = p, p = s), i(p)) : r(p, s)
    }
    return E
}
var _r = dc(!0),
    pc = dc(!1),
    B0 = Ht(null),
    w0 = null,
    vr = null,
    Bi = null;

function wi() {
    Bi = vr = w0 = null
}

function Fi(e) {
    var t = B0.current;
    te(B0), e._currentValue = t
}

function Hl(e, t, r) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
        e = e.return
    }
}

function Br(e, t) {
    w0 = e, Bi = vr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null)
}

function Ve(e) {
    var t = e._currentValue;
    if (Bi !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, vr === null) {
            if (w0 === null) throw Error(T(308));
            vr = e, w0.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else vr = vr.next = e;
    return t
}
var $t = null;

function Ai(e) {
    $t === null ? $t = [e] : $t.push(e)
}

function vc(e, t, r, n) {
    var o = t.interleaved;
    return o === null ? (r.next = r, Ai(t)) : (r.next = o.next, o.next = r), t.interleaved = r, dt(e, n)
}

function dt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var Et = !1;

function Di(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function hc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function St(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, G & 2) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, dt(e, r)
    }
    return o = n.interleaved, o === null ? (t.next = t, Ai(n)) : (t.next = o.next, o.next = t), n.interleaved = t, dt(e, r)
}

function r0(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, fi(e, r)
    }
}

function Qu(e, t) {
    var r = e.updateQueue,
        n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var o = null,
            l = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var i = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                l === null ? o = l = i : l = l.next = i, r = r.next
            } while (r !== null);
            l === null ? o = l = t : l = l.next = t
        } else o = l = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: n.shared,
            effects: n.effects
        }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
}

function F0(e, t, r, n) {
    var o = e.updateQueue;
    Et = !1;
    var l = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var c = a,
            u = c.next;
        c.next = null, i === null ? l = u : i.next = u, i = c;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== i && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = c))
    }
    if (l !== null) {
        var y = o.baseState;
        i = 0, d = u = c = null, a = l;
        do {
            var x = a.lane,
                m = a.eventTime;
            if ((n & x) === x) {
                d !== null && (d = d.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var h = e,
                        g = a;
                    switch (x = t, m = r, g.tag) {
                    case 1:
                        if (h = g.payload, typeof h == "function") {
                            y = h.call(m, y, x);
                            break e
                        }
                        y = h;
                        break e;
                    case 3:
                        h.flags = h.flags & -65537 | 128;
                    case 0:
                        if (h = g.payload, x = typeof h == "function" ? h.call(m, y, x) : h, x == null) break e;
                        y = le({}, y, x);
                        break e;
                    case 2:
                        Et = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, x = o.effects, x === null ? o.effects = [a] : x.push(a))
            } else m = {
                eventTime: m,
                lane: x,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, d === null ? (u = d = m, c = y) : d = d.next = m, i |= x;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                x = a, a = x.next, x.next = null, o.lastBaseUpdate = x, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (c = y), o.baseState = c, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do i |= o.lane, o = o.next; while (o !== t)
        } else l === null && (o.shared.lanes = 0);
        Yt |= i, e.lanes = i, e.memoizedState = y
    }
}

function Ku(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                o = n.callback;
            if (o !== null) {
                if (n.callback = null, n = r, typeof o != "function") throw Error(T(191, o));
                o.call(n)
            }
        }
}
var zn = {},
    lt = Ht(zn),
    En = Ht(zn),
    Cn = Ht(zn);

function Vt(e) {
    if (e === zn) throw Error(T(174));
    return e
}

function _i(e, t) {
    switch (b(Cn, t), b(En, e), b(lt, zn), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : hl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = hl(t, e)
    }
    te(lt), b(lt, t)
}

function kr() {
    te(lt), te(En), te(Cn)
}

function mc(e) {
    Vt(Cn.current);
    var t = Vt(lt.current),
        r = hl(t, e.type);
    t !== r && (b(En, e), b(lt, r))
}

function ki(e) {
    En.current === e && (te(lt), te(En))
}
var ne = Ht(0);

function A0(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var mo = [];

function Si() {
    for (var e = 0; e < mo.length; e++) mo[e]._workInProgressVersionPrimary = null;
    mo.length = 0
}
var n0 = vt.ReactCurrentDispatcher,
    yo = vt.ReactCurrentBatchConfig,
    Xt = 0,
    oe = null,
    ce = null,
    xe = null,
    D0 = !1,
    on = !1,
    Bn = 0,
    k1 = 0;

function ye() {
    throw Error(T(321))
}

function zi(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!et(e[r], t[r])) return !1;
    return !0
}

function Pi(e, t, r, n, o, l) {
    if (Xt = l, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, n0.current = e === null || e.memoizedState === null ? N1 : R1, e = r(n, o), on) {
        l = 0;
        do {
            if (on = !1, Bn = 0, 25 <= l) throw Error(T(301));
            l += 1, xe = ce = null, t.updateQueue = null, n0.current = L1, e = r(n, o)
        } while (on)
    }
    if (n0.current = _0, t = ce !== null && ce.next !== null, Xt = 0, xe = ce = oe = null, D0 = !1, t) throw Error(T(300));
    return e
}

function Ni() {
    var e = Bn !== 0;
    return Bn = 0, e
}

function rt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? oe.memoizedState = xe = e : xe = xe.next = e, xe
}

function Qe() {
    if (ce === null) {
        var e = oe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ce.next;
    var t = xe === null ? oe.memoizedState : xe.next;
    if (t !== null) xe = t, ce = e;
    else {
        if (e === null) throw Error(T(310));
        ce = e, e = {
            memoizedState: ce.memoizedState,
            baseState: ce.baseState,
            baseQueue: ce.baseQueue,
            queue: ce.queue,
            next: null
        }, xe === null ? oe.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}

function wn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function go(e) {
    var t = Qe(),
        r = t.queue;
    if (r === null) throw Error(T(311));
    r.lastRenderedReducer = e;
    var n = ce,
        o = n.baseQueue,
        l = r.pending;
    if (l !== null) {
        if (o !== null) {
            var i = o.next;
            o.next = l.next, l.next = i
        }
        n.baseQueue = o = l, r.pending = null
    }
    if (o !== null) {
        l = o.next, n = n.baseState;
        var a = i = null,
            c = null,
            u = l;
        do {
            var d = u.lane;
            if ((Xt & d) === d) c !== null && (c = c.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var y = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                c === null ? (a = c = y, i = n) : c = c.next = y, oe.lanes |= d, Yt |= d
            }
            u = u.next
        } while (u !== null && u !== l);
        c === null ? i = n : c.next = a, et(n, t.memoizedState) || (_e = !0), t.memoizedState = n, t.baseState = i, t.baseQueue = c, r.lastRenderedState = n
    }
    if (e = r.interleaved, e !== null) {
        o = e;
        do l = o.lane, oe.lanes |= l, Yt |= l, o = o.next; while (o !== e)
    } else o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}

function Eo(e) {
    var t = Qe(),
        r = t.queue;
    if (r === null) throw Error(T(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
        o = r.pending,
        l = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var i = o = o.next;
        do l = e(l, i.action), i = i.next; while (i !== o);
        et(l, t.memoizedState) || (_e = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), r.lastRenderedState = l
    }
    return [l, n]
}

function yc() {}

function gc(e, t) {
    var r = oe,
        n = Qe(),
        o = t(),
        l = !et(n.memoizedState, o);
    if (l && (n.memoizedState = o, _e = !0), n = n.queue, Ri(Bc.bind(null, r, n, e), [e]), n.getSnapshot !== t || l || xe !== null && xe.memoizedState.tag & 1) {
        if (r.flags |= 2048, Fn(9, Cc.bind(null, r, n, o, t), void 0, null), de === null) throw Error(T(349));
        Xt & 30 || Ec(r, t, o)
    }
    return o
}

function Ec(e, t, r) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: r
    }, t = oe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, oe.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
}

function Cc(e, t, r, n) {
    t.value = r, t.getSnapshot = n, wc(t) && Fc(e)
}

function Bc(e, t, r) {
    return r(function () {
        wc(t) && Fc(e)
    })
}

function wc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !et(e, r)
    } catch {
        return !0
    }
}

function Fc(e) {
    var t = dt(e, 1);
    t !== null && be(t, e, 1, -1)
}

function qu(e) {
    var t = rt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = P1.bind(null, oe, e), [t.memoizedState, e]
}

function Fn(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    }, t = oe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, oe.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
}

function Ac() {
    return Qe().memoizedState
}

function o0(e, t, r, n) {
    var o = rt();
    oe.flags |= e, o.memoizedState = Fn(1 | t, r, void 0, n === void 0 ? null : n)
}

function M0(e, t, r, n) {
    var o = Qe();
    n = n === void 0 ? null : n;
    var l = void 0;
    if (ce !== null) {
        var i = ce.memoizedState;
        if (l = i.destroy, n !== null && zi(n, i.deps)) {
            o.memoizedState = Fn(t, r, l, n);
            return
        }
    }
    oe.flags |= e, o.memoizedState = Fn(1 | t, r, l, n)
}

function Gu(e, t) {
    return o0(8390656, 8, e, t)
}

function Ri(e, t) {
    return M0(2048, 8, e, t)
}

function Dc(e, t) {
    return M0(4, 2, e, t)
}

function _c(e, t) {
    return M0(4, 4, e, t)
}

function kc(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function () {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function () {
            t.current = null
        }
}

function Sc(e, t, r) {
    return r = r != null ? r.concat([e]) : null, M0(4, 4, kc.bind(null, t, e), r)
}

function Li() {}

function zc(e, t) {
    var r = Qe();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && zi(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
}

function Pc(e, t) {
    var r = Qe();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && zi(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
}

function Nc(e, t, r) {
    return Xt & 21 ? (et(r, t) || (r = Os(), oe.lanes |= r, Yt |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = r)
}

function S1(e, t) {
    var r = Z;
    Z = r !== 0 && 4 > r ? r : 4, e(!0);
    var n = yo.transition;
    yo.transition = {};
    try {
        e(!1), t()
    } finally {
        Z = r, yo.transition = n
    }
}

function Rc() {
    return Qe().memoizedState
}

function z1(e, t, r) {
    var n = Pt(e);
    if (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Lc(e)) Tc(t, r);
    else if (r = vc(e, t, r, n), r !== null) {
        var o = we();
        be(r, e, n, o), Hc(r, t, n)
    }
}

function P1(e, t, r) {
    var n = Pt(e),
        o = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Lc(e)) Tc(t, o);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var i = t.lastRenderedState,
                a = l(i, r);
            if (o.hasEagerState = !0, o.eagerState = a, et(a, i)) {
                var c = t.interleaved;
                c === null ? (o.next = o, Ai(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        r = vc(e, t, o, n), r !== null && (o = we(), be(r, e, n, o), Hc(r, t, n))
    }
}

function Lc(e) {
    var t = e.alternate;
    return e === oe || t !== null && t === oe
}

function Tc(e, t) {
    on = D0 = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
}

function Hc(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, fi(e, r)
    }
}
var _0 = {
        readContext: Ve,
        useCallback: ye,
        useContext: ye,
        useEffect: ye,
        useImperativeHandle: ye,
        useInsertionEffect: ye,
        useLayoutEffect: ye,
        useMemo: ye,
        useReducer: ye,
        useRef: ye,
        useState: ye,
        useDebugValue: ye,
        useDeferredValue: ye,
        useTransition: ye,
        useMutableSource: ye,
        useSyncExternalStore: ye,
        useId: ye,
        unstable_isNewReconciler: !1
    },
    N1 = {
        readContext: Ve,
        useCallback: function (e, t) {
            return rt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ve,
        useEffect: Gu,
        useImperativeHandle: function (e, t, r) {
            return r = r != null ? r.concat([e]) : null, o0(4194308, 4, kc.bind(null, t, e), r)
        },
        useLayoutEffect: function (e, t) {
            return o0(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return o0(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var r = rt();
            return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
        },
        useReducer: function (e, t, r) {
            var n = rt();
            return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, n.queue = e, e = e.dispatch = z1.bind(null, oe, e), [n.memoizedState, e]
        },
        useRef: function (e) {
            var t = rt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: qu,
        useDebugValue: Li,
        useDeferredValue: function (e) {
            return rt().memoizedState = e
        },
        useTransition: function () {
            var e = qu(!1),
                t = e[0];
            return e = S1.bind(null, e[1]), rt().memoizedState = e, [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
            var n = oe,
                o = rt();
            if (re) {
                if (r === void 0) throw Error(T(407));
                r = r()
            } else {
                if (r = t(), de === null) throw Error(T(349));
                Xt & 30 || Ec(n, t, r)
            }
            o.memoizedState = r;
            var l = {
                value: r,
                getSnapshot: t
            };
            return o.queue = l, Gu(Bc.bind(null, n, l, e), [e]), n.flags |= 2048, Fn(9, Cc.bind(null, n, l, r, t), void 0, null), r
        },
        useId: function () {
            var e = rt(),
                t = de.identifierPrefix;
            if (re) {
                var r = st,
                    n = at;
                r = (n & ~(1 << 32 - Je(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Bn++, 0 < r && (t += "H" + r.toString(32)), t += ":"
            } else r = k1++, t = ":" + t + "r" + r.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    R1 = {
        readContext: Ve,
        useCallback: zc,
        useContext: Ve,
        useEffect: Ri,
        useImperativeHandle: Sc,
        useInsertionEffect: Dc,
        useLayoutEffect: _c,
        useMemo: Pc,
        useReducer: go,
        useRef: Ac,
        useState: function () {
            return go(wn)
        },
        useDebugValue: Li,
        useDeferredValue: function (e) {
            var t = Qe();
            return Nc(t, ce.memoizedState, e)
        },
        useTransition: function () {
            var e = go(wn)[0],
                t = Qe().memoizedState;
            return [e, t]
        },
        useMutableSource: yc,
        useSyncExternalStore: gc,
        useId: Rc,
        unstable_isNewReconciler: !1
    },
    L1 = {
        readContext: Ve,
        useCallback: zc,
        useContext: Ve,
        useEffect: Ri,
        useImperativeHandle: Sc,
        useInsertionEffect: Dc,
        useLayoutEffect: _c,
        useMemo: Pc,
        useReducer: Eo,
        useRef: Ac,
        useState: function () {
            return Eo(wn)
        },
        useDebugValue: Li,
        useDeferredValue: function (e) {
            var t = Qe();
            return ce === null ? t.memoizedState = e : Nc(t, ce.memoizedState, e)
        },
        useTransition: function () {
            var e = Eo(wn)[0],
                t = Qe().memoizedState;
            return [e, t]
        },
        useMutableSource: yc,
        useSyncExternalStore: gc,
        useId: Rc,
        unstable_isNewReconciler: !1
    };

function Xe(e, t) {
    if (e && e.defaultProps) {
        t = le({}, t), e = e.defaultProps;
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}

function Ol(e, t, r, n) {
    t = e.memoizedState, r = r(n, t), r = r == null ? t : le({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}
var U0 = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? bt(e) === e : !1
    },
    enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = we(),
            o = Pt(e),
            l = ct(n, o);
        l.payload = t, r != null && (l.callback = r), t = St(e, l, o), t !== null && (be(t, e, o, n), r0(t, e, o))
    },
    enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = we(),
            o = Pt(e),
            l = ct(n, o);
        l.tag = 1, l.payload = t, r != null && (l.callback = r), t = St(e, l, o), t !== null && (be(t, e, o, n), r0(t, e, o))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = we(),
            n = Pt(e),
            o = ct(r, n);
        o.tag = 2, t != null && (o.callback = t), t = St(e, o, n), t !== null && (be(t, e, n, r), r0(t, e, n))
    }
};

function Xu(e, t, r, n, o, l, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, l, i) : t.prototype && t.prototype.isPureReactComponent ? !hn(r, n) || !hn(o, l) : !0
}

function Oc(e, t, r) {
    var n = !1,
        o = Lt,
        l = t.contextType;
    return typeof l == "object" && l !== null ? l = Ve(l) : (o = Se(t) ? qt : Ce.current, n = t.contextTypes, l = (n = n != null) ? Ar(e, o) : Lt), t = new t(r, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = U0, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Yu(e, t, r, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && U0.enqueueReplaceState(t, t.state, null)
}

function jl(e, t, r, n) {
    var o = e.stateNode;
    o.props = r, o.state = e.memoizedState, o.refs = {}, Di(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = Ve(l) : (l = Se(t) ? qt : Ce.current, o.context = Ar(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ol(e, t, l, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && U0.enqueueReplaceState(o, o.state, null), F0(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Sr(e, t) {
    try {
        var r = "",
            n = t;
        do r += ax(n), n = n.return; while (n);
        var o = r
    } catch (l) {
        o = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function Co(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ?? null,
        digest: t ?? null
    }
}

function Il(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function () {
            throw r
        })
    }
}
var T1 = typeof WeakMap == "function" ? WeakMap : Map;

function jc(e, t, r) {
    r = ct(-1, r), r.tag = 3, r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function () {
        S0 || (S0 = !0, Xl = n), Il(e, t)
    }, r
}

function Ic(e, t, r) {
    r = ct(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function () {
            return n(o)
        }, r.callback = function () {
            Il(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (r.callback = function () {
        Il(e, t), typeof n != "function" && (zt === null ? zt = new Set([this]) : zt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), r
}

function Zu(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new T1;
        var o = new Set;
        n.set(t, o)
    } else o = n.get(t), o === void 0 && (o = new Set, n.set(t, o));
    o.has(r) || (o.add(r), e = X1.bind(null, e, t, r), t.then(e, e))
}

function Ju(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function bu(e, t, r, n, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = ct(-1, 1), t.tag = 2, St(r, t, 1))), r.lanes |= 1), e)
}
var H1 = vt.ReactCurrentOwner,
    _e = !1;

function Be(e, t, r, n) {
    t.child = e === null ? pc(t, null, r, n) : _r(t, e.child, r, n)
}

function ea(e, t, r, n, o) {
    r = r.render;
    var l = t.ref;
    return Br(t, o), n = Pi(e, t, r, n, l, o), r = Ni(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pt(e, t, o)) : (re && r && gi(t), t.flags |= 1, Be(e, t, n, o), t.child)
}

function ta(e, t, r, n, o) {
    if (e === null) {
        var l = r.type;
        return typeof l == "function" && !Wi(l) && l.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = l, Mc(e, t, l, n, o)) : (e = a0(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (l = e.child, !(e.lanes & o)) {
        var i = l.memoizedProps;
        if (r = r.compare, r = r !== null ? r : hn, r(i, n) && e.ref === t.ref) return pt(e, t, o)
    }
    return t.flags |= 1, e = Nt(l, n), e.ref = t.ref, e.return = t, t.child = e
}

function Mc(e, t, r, n, o) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (hn(l, n) && e.ref === t.ref)
            if (_e = !1, t.pendingProps = n = l, (e.lanes & o) !== 0) e.flags & 131072 && (_e = !0);
            else return t.lanes = e.lanes, pt(e, t, o)
    }
    return Ml(e, t, r, n, o)
}

function Uc(e, t, r) {
    var n = t.pendingProps,
        o = n.children,
        l = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, b(mr, Re), Re |= r;
        else {
            if (!(r & 1073741824)) return e = l !== null ? l.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, b(mr, Re), Re |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, n = l !== null ? l.baseLanes : r, b(mr, Re), Re |= n
        }
    else l !== null ? (n = l.baseLanes | r, t.memoizedState = null) : n = r, b(mr, Re), Re |= n;
    return Be(e, t, o, r), t.child
}

function Wc(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
}

function Ml(e, t, r, n, o) {
    var l = Se(r) ? qt : Ce.current;
    return l = Ar(t, l), Br(t, o), r = Pi(e, t, r, n, l, o), n = Ni(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, pt(e, t, o)) : (re && n && gi(t), t.flags |= 1, Be(e, t, r, o), t.child)
}

function ra(e, t, r, n, o) {
    if (Se(r)) {
        var l = !0;
        g0(t)
    } else l = !1;
    if (Br(t, o), t.stateNode === null) l0(e, t), Oc(t, r, n), jl(t, r, n, o), n = !0;
    else if (e === null) {
        var i = t.stateNode,
            a = t.memoizedProps;
        i.props = a;
        var c = i.context,
            u = r.contextType;
        typeof u == "object" && u !== null ? u = Ve(u) : (u = Se(r) ? qt : Ce.current, u = Ar(t, u));
        var d = r.getDerivedStateFromProps,
            y = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== n || c !== u) && Yu(t, i, n, u), Et = !1;
        var x = t.memoizedState;
        i.state = x, F0(t, n, i, o), c = t.memoizedState, a !== n || x !== c || ke.current || Et ? (typeof d == "function" && (Ol(t, r, d, n), c = t.memoizedState), (a = Et || Xu(t, r, a, n, x, c, u)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = c), i.props = n, i.state = c, i.context = u, n = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
    } else {
        i = t.stateNode, hc(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Xe(t.type, a), i.props = u, y = t.pendingProps, x = i.context, c = r.contextType, typeof c == "object" && c !== null ? c = Ve(c) : (c = Se(r) ? qt : Ce.current, c = Ar(t, c));
        var m = r.getDerivedStateFromProps;
        (d = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== y || x !== c) && Yu(t, i, n, c), Et = !1, x = t.memoizedState, i.state = x, F0(t, n, i, o);
        var h = t.memoizedState;
        a !== y || x !== h || ke.current || Et ? (typeof m == "function" && (Ol(t, r, m, n), h = t.memoizedState), (u = Et || Xu(t, r, u, n, x, h, c) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, h, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, h, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = h), i.props = n, i.state = h, i.context = c, n = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), n = !1)
    }
    return Ul(e, t, r, n, l, o)
}

function Ul(e, t, r, n, o, l) {
    Wc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!n && !i) return o && Uu(t, r, !1), pt(e, t, l);
    n = t.stateNode, H1.current = t;
    var a = i && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && i ? (t.child = _r(t, e.child, null, l), t.child = _r(t, null, a, l)) : Be(e, t, a, l), t.memoizedState = n.state, o && Uu(t, r, !0), t.child
}

function $c(e) {
    var t = e.stateNode;
    t.pendingContext ? Mu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Mu(e, t.context, !1), _i(e, t.containerInfo)
}

function na(e, t, r, n, o) {
    return Dr(), Ci(o), t.flags |= 256, Be(e, t, r, n), t.child
}
var Wl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function $l(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Vc(e, t, r) {
    var n = t.pendingProps,
        o = ne.current,
        l = !1,
        i = (t.flags & 128) !== 0,
        a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), b(ne, o & 1), e === null) return Tl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = n.children, e = n.fallback, l ? (n = t.mode, l = t.child, i = {
        mode: "hidden",
        children: i
    }, !(n & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = V0(i, n, 0, null), e = Kt(e, n, r, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = $l(r), t.memoizedState = Wl, e) : Ti(t, i));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return O1(e, t, i, n, a, o, r);
    if (l) {
        l = n.fallback, i = t.mode, o = e.child, a = o.sibling;
        var c = {
            mode: "hidden",
            children: n.children
        };
        return !(i & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = c, t.deletions = null) : (n = Nt(o, c), n.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? l = Nt(a, l) : (l = Kt(l, i, r, null), l.flags |= 2), l.return = t, n.return = t, n.sibling = l, t.child = n, n = l, l = t.child, i = e.child.memoizedState, i = i === null ? $l(r) : {
            baseLanes: i.baseLanes | r,
            cachePool: null,
            transitions: i.transitions
        }, l.memoizedState = i, l.childLanes = e.childLanes & ~r, t.memoizedState = Wl, n
    }
    return l = e.child, e = l.sibling, n = Nt(l, {
        mode: "visible",
        children: n.children
    }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
}

function Ti(e, t) {
    return t = V0({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function qn(e, t, r, n) {
    return n !== null && Ci(n), _r(t, e.child, null, r), e = Ti(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function O1(e, t, r, n, o, l, i) {
    if (r) return t.flags & 256 ? (t.flags &= -257, n = Co(Error(T(422))), qn(e, t, i, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = n.fallback, o = t.mode, n = V0({
        mode: "visible",
        children: n.children
    }, o, 0, null), l = Kt(l, o, i, null), l.flags |= 2, n.return = t, l.return = t, n.sibling = l, t.child = n, t.mode & 1 && _r(t, e.child, null, i), t.child.memoizedState = $l(i), t.memoizedState = Wl, l);
    if (!(t.mode & 1)) return qn(e, t, i, null);
    if (o.data === "$!") {
        if (n = o.nextSibling && o.nextSibling.dataset, n) var a = n.dgst;
        return n = a, l = Error(T(419)), n = Co(l, n, void 0), qn(e, t, i, n)
    }
    if (a = (i & e.childLanes) !== 0, _e || a) {
        if (n = de, n !== null) {
            switch (i & -i) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (n.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, dt(e, o), be(n, e, o, -1))
        }
        return Ui(), n = Co(Error(T(421))), qn(e, t, i, n)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Y1.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Le = kt(o.nextSibling), Te = t, re = !0, Ze = null, e !== null && (Me[Ue++] = at, Me[Ue++] = st, Me[Ue++] = Gt, at = e.id, st = e.overflow, Gt = t), t = Ti(t, n.children), t.flags |= 4096, t)
}

function oa(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Hl(e.return, t, r)
}

function Bo(e, t, r, n, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = n, l.tail = r, l.tailMode = o)
}

function Qc(e, t, r) {
    var n = t.pendingProps,
        o = n.revealOrder,
        l = n.tail;
    if (Be(e, t, n.children, r), n = ne.current, n & 2) n = n & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && oa(e, r, t);
            else if (e.tag === 19) oa(e, r, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (b(ne, n), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
    case "forwards":
        for (r = t.child, o = null; r !== null;) e = r.alternate, e !== null && A0(e) === null && (o = r), r = r.sibling;
        r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), Bo(t, !1, o, r, l);
        break;
    case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null;) {
            if (e = o.alternate, e !== null && A0(e) === null) {
                t.child = o;
                break
            }
            e = o.sibling, o.sibling = r, r = o, o = e
        }
        Bo(t, !0, r, null, l);
        break;
    case "together":
        Bo(t, !1, null, null, void 0);
        break;
    default:
        t.memoizedState = null
    }
    return t.child
}

function l0(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function pt(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Yt |= t.lanes, !(r & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child, r = Nt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = Nt(e, e.pendingProps), r.return = t;
        r.sibling = null
    }
    return t.child
}

function j1(e, t, r) {
    switch (t.tag) {
    case 3:
        $c(t), Dr();
        break;
    case 5:
        mc(t);
        break;
    case 1:
        Se(t.type) && g0(t);
        break;
    case 4:
        _i(t, t.stateNode.containerInfo);
        break;
    case 10:
        var n = t.type._context,
            o = t.memoizedProps.value;
        b(B0, n._currentValue), n._currentValue = o;
        break;
    case 13:
        if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (b(ne, ne.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? Vc(e, t, r) : (b(ne, ne.current & 1), e = pt(e, t, r), e !== null ? e.sibling : null);
        b(ne, ne.current & 1);
        break;
    case 19:
        if (n = (r & t.childLanes) !== 0, e.flags & 128) {
            if (n) return Qc(e, t, r);
            t.flags |= 128
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), b(ne, ne.current), n) break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0, Uc(e, t, r)
    }
    return pt(e, t, r)
}
var Kc, Vl, qc, Gc;
Kc = function (e, t) {
    for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
Vl = function () {};
qc = function (e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode, Vt(lt.current);
        var l = null;
        switch (r) {
        case "input":
            o = xl(e, o), n = xl(e, n), l = [];
            break;
        case "select":
            o = le({}, o, {
                value: void 0
            }), n = le({}, n, {
                value: void 0
            }), l = [];
            break;
        case "textarea":
            o = vl(e, o), n = vl(e, n), l = [];
            break;
        default:
            typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = m0)
        }
        ml(r, n);
        var i;
        r = null;
        for (u in o)
            if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (i in a) a.hasOwnProperty(i) && (r || (r = {}), r[i] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (sn.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in n) {
            var c = n[u];
            if (a = o != null ? o[u] : void 0, n.hasOwnProperty(u) && c !== a && (c != null || a != null))
                if (u === "style")
                    if (a) {
                        for (i in a) !a.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (r || (r = {}), r[i] = "");
                        for (i in c) c.hasOwnProperty(i) && a[i] !== c[i] && (r || (r = {}), r[i] = c[i])
                    } else r || (l || (l = []), l.push(u, r)), r = c;
            else u === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, a = a ? a.__html : void 0, c != null && a !== c && (l = l || []).push(u, c)) : u === "children" ? typeof c != "string" && typeof c != "number" || (l = l || []).push(u, "" + c) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (sn.hasOwnProperty(u) ? (c != null && u === "onScroll" && ee("scroll", e), l || a === c || (l = [])) : (l = l || []).push(u, c))
        }
        r && (l = l || []).push("style", r);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Gc = function (e, t, r, n) {
    r !== n && (t.flags |= 4)
};

function qr(e, t) {
    if (!re) switch (e.tailMode) {
    case "hidden":
        t = e.tail;
        for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
    case "collapsed":
        r = e.tail;
        for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
        n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
    if (t)
        for (var o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= n, e.childLanes = r, t
}

function I1(e, t, r) {
    var n = t.pendingProps;
    switch (Ei(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ge(t), null;
    case 1:
        return Se(t.type) && y0(), ge(t), null;
    case 3:
        return n = t.stateNode, kr(), te(ke), te(Ce), Si(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Qn(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (Jl(Ze), Ze = null))), Vl(e, t), ge(t), null;
    case 5:
        ki(t);
        var o = Vt(Cn.current);
        if (r = t.type, e !== null && t.stateNode != null) qc(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!n) {
                if (t.stateNode === null) throw Error(T(166));
                return ge(t), null
            }
            if (e = Vt(lt.current), Qn(t)) {
                n = t.stateNode, r = t.type;
                var l = t.memoizedProps;
                switch (n[nt] = t, n[gn] = l, e = (t.mode & 1) !== 0, r) {
                case "dialog":
                    ee("cancel", n), ee("close", n);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ee("load", n);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Jr.length; o++) ee(Jr[o], n);
                    break;
                case "source":
                    ee("error", n);
                    break;
                case "img":
                case "image":
                case "link":
                    ee("error", n), ee("load", n);
                    break;
                case "details":
                    ee("toggle", n);
                    break;
                case "input":
                    du(n, l), ee("invalid", n);
                    break;
                case "select":
                    n._wrapperState = {
                        wasMultiple: !!l.multiple
                    }, ee("invalid", n);
                    break;
                case "textarea":
                    vu(n, l), ee("invalid", n)
                }
                ml(r, l), o = null;
                for (var i in l)
                    if (l.hasOwnProperty(i)) {
                        var a = l[i];
                        i === "children" ? typeof a == "string" ? n.textContent !== a && (l.suppressHydrationWarning !== !0 && Vn(n.textContent, a, e), o = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Vn(n.textContent, a, e), o = ["children", "" + a]) : sn.hasOwnProperty(i) && a != null && i === "onScroll" && ee("scroll", n)
                    } switch (r) {
                case "input":
                    Hn(n), pu(n, l, !0);
                    break;
                case "textarea":
                    Hn(n), hu(n);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof l.onClick == "function" && (n.onclick = m0)
                }
                n = o, t.updateQueue = n, n !== null && (t.flags |= 4)
            } else {
                i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Bs(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = i.createElement(r, {
                    is: n.is
                }) : (e = i.createElement(r), r === "select" && (i = e, n.multiple ? i.multiple = !0 : n.size && (i.size = n.size))) : e = i.createElementNS(e, r), e[nt] = t, e[gn] = n, Kc(e, t, !1, !1), t.stateNode = e;
                e: {
                    switch (i = yl(r, n), r) {
                    case "dialog":
                        ee("cancel", e), ee("close", e), o = n;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ee("load", e), o = n;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Jr.length; o++) ee(Jr[o], e);
                        o = n;
                        break;
                    case "source":
                        ee("error", e), o = n;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ee("error", e), ee("load", e), o = n;
                        break;
                    case "details":
                        ee("toggle", e), o = n;
                        break;
                    case "input":
                        du(e, n), o = xl(e, n), ee("invalid", e);
                        break;
                    case "option":
                        o = n;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!n.multiple
                        }, o = le({}, n, {
                            value: void 0
                        }), ee("invalid", e);
                        break;
                    case "textarea":
                        vu(e, n), o = vl(e, n), ee("invalid", e);
                        break;
                    default:
                        o = n
                    }
                    ml(r, o),
                    a = o;
                    for (l in a)
                        if (a.hasOwnProperty(l)) {
                            var c = a[l];
                            l === "style" ? As(e, c) : l === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && ws(e, c)) : l === "children" ? typeof c == "string" ? (r !== "textarea" || c !== "") && cn(e, c) : typeof c == "number" && cn(e, "" + c) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (sn.hasOwnProperty(l) ? c != null && l === "onScroll" && ee("scroll", e) : c != null && li(e, l, c, i))
                        } switch (r) {
                    case "input":
                        Hn(e), pu(e, n, !1);
                        break;
                    case "textarea":
                        Hn(e), hu(e);
                        break;
                    case "option":
                        n.value != null && e.setAttribute("value", "" + Rt(n.value));
                        break;
                    case "select":
                        e.multiple = !!n.multiple, l = n.value, l != null ? yr(e, !!n.multiple, l, !1) : n.defaultValue != null && yr(e, !!n.multiple, n.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = m0)
                    }
                    switch (r) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        n = !!n.autoFocus;
                        break e;
                    case "img":
                        n = !0;
                        break e;
                    default:
                        n = !1
                    }
                }
                n && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
        }
        return ge(t), null;
    case 6:
        if (e && t.stateNode != null) Gc(e, t, e.memoizedProps, n);
        else {
            if (typeof n != "string" && t.stateNode === null) throw Error(T(166));
            if (r = Vt(Cn.current), Vt(lt.current), Qn(t)) {
                if (n = t.stateNode, r = t.memoizedProps, n[nt] = t, (l = n.nodeValue !== r) && (e = Te, e !== null)) switch (e.tag) {
                case 3:
                    Vn(n.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 && Vn(n.nodeValue, r, (e.mode & 1) !== 0)
                }
                l && (t.flags |= 4)
            } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[nt] = t, t.stateNode = n
        }
        return ge(t), null;
    case 13:
        if (te(ne), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (re && Le !== null && t.mode & 1 && !(t.flags & 128)) xc(), Dr(), t.flags |= 98560, l = !1;
            else if (l = Qn(t), n !== null && n.dehydrated !== null) {
                if (e === null) {
                    if (!l) throw Error(T(318));
                    if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
                    l[nt] = t
                } else Dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                ge(t), l = !1
            } else Ze !== null && (Jl(Ze), Ze = null), l = !0;
            if (!l) return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? fe === 0 && (fe = 3) : Ui())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
    case 4:
        return kr(), Vl(e, t), e === null && mn(t.stateNode.containerInfo), ge(t), null;
    case 10:
        return Fi(t.type._context), ge(t), null;
    case 17:
        return Se(t.type) && y0(), ge(t), null;
    case 19:
        if (te(ne), l = t.memoizedState, l === null) return ge(t), null;
        if (n = (t.flags & 128) !== 0, i = l.rendering, i === null)
            if (n) qr(l, !1);
            else {
                if (fe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null;) {
                        if (i = A0(e), i !== null) {
                            for (t.flags |= 128, qr(l, !1), n = i.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) l = r, e = n, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), r = r.sibling;
                            return b(ne, ne.current & 1 | 2), t.child
                        }
                        e = e.sibling
                    }
                l.tail !== null && ue() > zr && (t.flags |= 128, n = !0, qr(l, !1), t.lanes = 4194304)
            }
        else {
            if (!n)
                if (e = A0(i), e !== null) {
                    if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), qr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !re) return ge(t), null
                } else 2 * ue() - l.renderingStartTime > zr && r !== 1073741824 && (t.flags |= 128, n = !0, qr(l, !1), t.lanes = 4194304);
            l.isBackwards ? (i.sibling = t.child, t.child = i) : (r = l.last, r !== null ? r.sibling = i : t.child = i, l.last = i)
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ue(), t.sibling = null, r = ne.current, b(ne, n ? r & 1 | 2 : r & 1), t) : (ge(t), null);
    case 22:
    case 23:
        return Mi(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? Re & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}

function M1(e, t) {
    switch (Ei(t), t.tag) {
    case 1:
        return Se(t.type) && y0(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
        return kr(), te(ke), te(Ce), Si(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
        return ki(t), null;
    case 13:
        if (te(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(T(340));
            Dr()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
        return te(ne), null;
    case 4:
        return kr(), null;
    case 10:
        return Fi(t.type._context), null;
    case 22:
    case 23:
        return Mi(), null;
    case 24:
        return null;
    default:
        return null
    }
}
var Gn = !1,
    Ee = !1,
    U1 = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function hr(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function") try {
            r(null)
        } catch (n) {
            ie(e, t, n)
        } else r.current = null
}

function Ql(e, t, r) {
    try {
        r()
    } catch (n) {
        ie(e, t, n)
    }
}
var la = !1;

function W1(e, t) {
    if (kl = p0, e = bs(), yi(e)) {
        if ("selectionStart" in e) var r = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            r = (r = e.ownerDocument) && r.defaultView || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var o = n.anchorOffset,
                    l = n.focusNode;
                n = n.focusOffset;
                try {
                    r.nodeType, l.nodeType
                } catch {
                    r = null;
                    break e
                }
                var i = 0,
                    a = -1,
                    c = -1,
                    u = 0,
                    d = 0,
                    y = e,
                    x = null;
                t: for (;;) {
                    for (var m; y !== r || o !== 0 && y.nodeType !== 3 || (a = i + o), y !== l || n !== 0 && y.nodeType !== 3 || (c = i + n), y.nodeType === 3 && (i += y.nodeValue.length), (m = y.firstChild) !== null;) x = y, y = m;
                    for (;;) {
                        if (y === e) break t;
                        if (x === r && ++u === o && (a = i), x === l && ++d === n && (c = i), (m = y.nextSibling) !== null) break;
                        y = x, x = y.parentNode
                    }
                    y = m
                }
                r = a === -1 || c === -1 ? null : {
                    start: a,
                    end: c
                }
            } else r = null
        }
        r = r || {
            start: 0,
            end: 0
        }
    } else r = null;
    for (Sl = {
            focusedElem: e,
            selectionRange: r
        }, p0 = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var h = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (h !== null) {
                            var g = h.memoizedProps,
                                E = h.memoizedState,
                                p = t.stateNode,
                                s = p.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Xe(t.type, g), E);
                            p.__reactInternalSnapshotBeforeUpdate = s
                        }
                        break;
                    case 3:
                        var f = t.stateNode.containerInfo;
                        f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(T(163))
                    }
                } catch (v) {
                    ie(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return h = la, la = !1, h
}

function ln(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var o = n = n.next;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0, l !== void 0 && Ql(t, r, l)
            }
            o = o.next
        } while (o !== n)
    }
}

function W0(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}

function Kl(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
        case 5:
            e = r;
            break;
        default:
            e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Xc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[gn], delete t[Nl], delete t[F1], delete t[A1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Yc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function ia(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Yc(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ql(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = m0));
    else if (n !== 4 && (e = e.child, e !== null))
        for (ql(e, t, r), e = e.sibling; e !== null;) ql(e, t, r), e = e.sibling
}

function Gl(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null))
        for (Gl(e, t, r), e = e.sibling; e !== null;) Gl(e, t, r), e = e.sibling
}
var ve = null,
    Ye = !1;

function yt(e, t, r) {
    for (r = r.child; r !== null;) Zc(e, t, r), r = r.sibling
}

function Zc(e, t, r) {
    if (ot && typeof ot.onCommitFiberUnmount == "function") try {
        ot.onCommitFiberUnmount(L0, r)
    } catch {}
    switch (r.tag) {
    case 5:
        Ee || hr(r, t);
    case 6:
        var n = ve,
            o = Ye;
        ve = null, yt(e, t, r), ve = n, Ye = o, ve !== null && (Ye ? (e = ve, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ve.removeChild(r.stateNode));
        break;
    case 18:
        ve !== null && (Ye ? (e = ve, r = r.stateNode, e.nodeType === 8 ? vo(e.parentNode, r) : e.nodeType === 1 && vo(e, r), pn(e)) : vo(ve, r.stateNode));
        break;
    case 4:
        n = ve, o = Ye, ve = r.stateNode.containerInfo, Ye = !0, yt(e, t, r), ve = n, Ye = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ee && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
            o = n = n.next;
            do {
                var l = o,
                    i = l.destroy;
                l = l.tag, i !== void 0 && (l & 2 || l & 4) && Ql(r, t, i), o = o.next
            } while (o !== n)
        }
        yt(e, t, r);
        break;
    case 1:
        if (!Ee && (hr(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
            n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
        } catch (a) {
            ie(r, t, a)
        }
        yt(e, t, r);
        break;
    case 21:
        yt(e, t, r);
        break;
    case 22:
        r.mode & 1 ? (Ee = (n = Ee) || r.memoizedState !== null, yt(e, t, r), Ee = n) : yt(e, t, r);
        break;
    default:
        yt(e, t, r)
    }
}

function ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new U1), t.forEach(function (n) {
            var o = Z1.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(o, o))
        })
    }
}

function Ge(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            try {
                var l = e,
                    i = t,
                    a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                    case 5:
                        ve = a.stateNode, Ye = !1;
                        break e;
                    case 3:
                        ve = a.stateNode.containerInfo, Ye = !0;
                        break e;
                    case 4:
                        ve = a.stateNode.containerInfo, Ye = !0;
                        break e
                    }
                    a = a.return
                }
                if (ve === null) throw Error(T(160));
                Zc(l, i, o), ve = null, Ye = !1;
                var c = o.alternate;
                c !== null && (c.return = null), o.return = null
            } catch (u) {
                ie(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Jc(t, e), t = t.sibling
}

function Jc(e, t) {
    var r = e.alternate,
        n = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ge(t, e), tt(e), n & 4) {
            try {
                ln(3, e, e.return), W0(3, e)
            } catch (g) {
                ie(e, e.return, g)
            }
            try {
                ln(5, e, e.return)
            } catch (g) {
                ie(e, e.return, g)
            }
        }
        break;
    case 1:
        Ge(t, e), tt(e), n & 512 && r !== null && hr(r, r.return);
        break;
    case 5:
        if (Ge(t, e), tt(e), n & 512 && r !== null && hr(r, r.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                cn(o, "")
            } catch (g) {
                ie(e, e.return, g)
            }
        }
        if (n & 4 && (o = e.stateNode, o != null)) {
            var l = e.memoizedProps,
                i = r !== null ? r.memoizedProps : l,
                a = e.type,
                c = e.updateQueue;
            if (e.updateQueue = null, c !== null) try {
                a === "input" && l.type === "radio" && l.name != null && Es(o, l), yl(a, i);
                var u = yl(a, l);
                for (i = 0; i < c.length; i += 2) {
                    var d = c[i],
                        y = c[i + 1];
                    d === "style" ? As(o, y) : d === "dangerouslySetInnerHTML" ? ws(o, y) : d === "children" ? cn(o, y) : li(o, d, y, u)
                }
                switch (a) {
                case "input":
                    dl(o, l);
                    break;
                case "textarea":
                    Cs(o, l);
                    break;
                case "select":
                    var x = o._wrapperState.wasMultiple;
                    o._wrapperState.wasMultiple = !!l.multiple;
                    var m = l.value;
                    m != null ? yr(o, !!l.multiple, m, !1) : x !== !!l.multiple && (l.defaultValue != null ? yr(o, !!l.multiple, l.defaultValue, !0) : yr(o, !!l.multiple, l.multiple ? [] : "", !1))
                }
                o[gn] = l
            } catch (g) {
                ie(e, e.return, g)
            }
        }
        break;
    case 6:
        if (Ge(t, e), tt(e), n & 4) {
            if (e.stateNode === null) throw Error(T(162));
            o = e.stateNode, l = e.memoizedProps;
            try {
                o.nodeValue = l
            } catch (g) {
                ie(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Ge(t, e), tt(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
            pn(t.containerInfo)
        } catch (g) {
            ie(e, e.return, g)
        }
        break;
    case 4:
        Ge(t, e), tt(e);
        break;
    case 13:
        Ge(t, e), tt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ji = ue())), n & 4 && ua(e);
        break;
    case 22:
        if (d = r !== null && r.memoizedState !== null, e.mode & 1 ? (Ee = (u = Ee) || d, Ge(t, e), Ee = u) : Ge(t, e), tt(e), n & 8192) {
            if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (j = e, d = e.child; d !== null;) {
                    for (y = j = d; j !== null;) {
                        switch (x = j, m = x.child, x.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ln(4, x, x.return);
                            break;
                        case 1:
                            hr(x, x.return);
                            var h = x.stateNode;
                            if (typeof h.componentWillUnmount == "function") {
                                n = x, r = x.return;
                                try {
                                    t = n, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                } catch (g) {
                                    ie(n, r, g)
                                }
                            }
                            break;
                        case 5:
                            hr(x, x.return);
                            break;
                        case 22:
                            if (x.memoizedState !== null) {
                                sa(y);
                                continue
                            }
                        }
                        m !== null ? (m.return = x, j = m) : sa(y)
                    }
                    d = d.sibling
                }
            e: for (d = null, y = e;;) {
                if (y.tag === 5) {
                    if (d === null) {
                        d = y;
                        try {
                            o = y.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = y.stateNode, c = y.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, a.style.display = Fs("display", i))
                        } catch (g) {
                            ie(e, e.return, g)
                        }
                    }
                } else if (y.tag === 6) {
                    if (d === null) try {
                        y.stateNode.nodeValue = u ? "" : y.memoizedProps
                    } catch (g) {
                        ie(e, e.return, g)
                    }
                } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
                    y.child.return = y, y = y.child;
                    continue
                }
                if (y === e) break e;
                for (; y.sibling === null;) {
                    if (y.return === null || y.return === e) break e;
                    d === y && (d = null), y = y.return
                }
                d === y && (d = null), y.sibling.return = y.return, y = y.sibling
            }
        }
        break;
    case 19:
        Ge(t, e), tt(e), n & 4 && ua(e);
        break;
    case 21:
        break;
    default:
        Ge(t, e), tt(e)
    }
}

function tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null;) {
                    if (Yc(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(T(160))
            }
            switch (n.tag) {
            case 5:
                var o = n.stateNode;
                n.flags & 32 && (cn(o, ""), n.flags &= -33);
                var l = ia(e);
                Gl(e, l, o);
                break;
            case 3:
            case 4:
                var i = n.stateNode.containerInfo,
                    a = ia(e);
                ql(e, a, i);
                break;
            default:
                throw Error(T(161))
            }
        }
        catch (c) {
            ie(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function $1(e, t, r) {
    j = e, bc(e)
}

function bc(e, t, r) {
    for (var n = (e.mode & 1) !== 0; j !== null;) {
        var o = j,
            l = o.child;
        if (o.tag === 22 && n) {
            var i = o.memoizedState !== null || Gn;
            if (!i) {
                var a = o.alternate,
                    c = a !== null && a.memoizedState !== null || Ee;
                a = Gn;
                var u = Ee;
                if (Gn = i, (Ee = c) && !u)
                    for (j = o; j !== null;) i = j, c = i.child, i.tag === 22 && i.memoizedState !== null ? ca(o) : c !== null ? (c.return = i, j = c) : ca(o);
                for (; l !== null;) j = l, bc(l), l = l.sibling;
                j = o, Gn = a, Ee = u
            }
            aa(e)
        } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, j = l) : aa(e)
    }
}

function aa(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    Ee || W0(5, t);
                    break;
                case 1:
                    var n = t.stateNode;
                    if (t.flags & 4 && !Ee)
                        if (r === null) n.componentDidMount();
                        else {
                            var o = t.elementType === t.type ? r.memoizedProps : Xe(t.type, r.memoizedProps);
                            n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                        } var l = t.updateQueue;
                    l !== null && Ku(t, l, n);
                    break;
                case 3:
                    var i = t.updateQueue;
                    if (i !== null) {
                        if (r = null, t.child !== null) switch (t.child.tag) {
                        case 5:
                            r = t.child.stateNode;
                            break;
                        case 1:
                            r = t.child.stateNode
                        }
                        Ku(t, i, r)
                    }
                    break;
                case 5:
                    var a = t.stateNode;
                    if (r === null && t.flags & 4) {
                        r = a;
                        var c = t.memoizedProps;
                        switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c.autoFocus && r.focus();
                            break;
                        case "img":
                            c.src && (r.src = c.src)
                        }
                    }
                    break;
                case 6:
                    break;
                case 4:
                    break;
                case 12:
                    break;
                case 13:
                    if (t.memoizedState === null) {
                        var u = t.alternate;
                        if (u !== null) {
                            var d = u.memoizedState;
                            if (d !== null) {
                                var y = d.dehydrated;
                                y !== null && pn(y)
                            }
                        }
                    }
                    break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                    break;
                default:
                    throw Error(T(163))
                }
                Ee || t.flags & 512 && Kl(t)
            } catch (x) {
                ie(t, t.return, x)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (r = t.sibling, r !== null) {
            r.return = t.return, j = r;
            break
        }
        j = t.return
    }
}

function sa(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return, j = r;
            break
        }
        j = t.return
    }
}

function ca(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var r = t.return;
                try {
                    W0(4, t)
                } catch (c) {
                    ie(t, r, c)
                }
                break;
            case 1:
                var n = t.stateNode;
                if (typeof n.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        n.componentDidMount()
                    } catch (c) {
                        ie(t, o, c)
                    }
                }
                var l = t.return;
                try {
                    Kl(t)
                } catch (c) {
                    ie(t, l, c)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Kl(t)
                } catch (c) {
                    ie(t, i, c)
                }
            }
        } catch (c) {
            ie(t, t.return, c)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, j = a;
            break
        }
        j = t.return
    }
}
var V1 = Math.ceil,
    k0 = vt.ReactCurrentDispatcher,
    Hi = vt.ReactCurrentOwner,
    $e = vt.ReactCurrentBatchConfig,
    G = 0,
    de = null,
    ae = null,
    he = 0,
    Re = 0,
    mr = Ht(0),
    fe = 0,
    An = null,
    Yt = 0,
    $0 = 0,
    Oi = 0,
    un = null,
    De = null,
    ji = 0,
    zr = 1 / 0,
    it = null,
    S0 = !1,
    Xl = null,
    zt = null,
    Xn = !1,
    Ft = null,
    z0 = 0,
    an = 0,
    Yl = null,
    i0 = -1,
    u0 = 0;

function we() {
    return G & 6 ? ue() : i0 !== -1 ? i0 : i0 = ue()
}

function Pt(e) {
    return e.mode & 1 ? G & 2 && he !== 0 ? he & -he : _1.transition !== null ? (u0 === 0 && (u0 = Os()), u0) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1
}

function be(e, t, r, n) {
    if (50 < an) throw an = 0, Yl = null, Error(T(185));
    _n(e, r, n), (!(G & 2) || e !== de) && (e === de && (!(G & 2) && ($0 |= r), fe === 4 && Bt(e, he)), ze(e, n), r === 1 && G === 0 && !(t.mode & 1) && (zr = ue() + 500, I0 && Ot()))
}

function ze(e, t) {
    var r = e.callbackNode;
    _x(e, t);
    var n = d0(e, e === de ? he : 0);
    if (n === 0) r !== null && gu(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
        if (r != null && gu(r), t === 1) e.tag === 0 ? D1(fa.bind(null, e)) : sc(fa.bind(null, e)), B1(function () {
            !(G & 6) && Ot()
        }), r = null;
        else {
            switch (js(n)) {
            case 1:
                r = ci;
                break;
            case 4:
                r = Ts;
                break;
            case 16:
                r = x0;
                break;
            case 536870912:
                r = Hs;
                break;
            default:
                r = x0
            }
            r = af(r, ef.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = r
    }
}

function ef(e, t) {
    if (i0 = -1, u0 = 0, G & 6) throw Error(T(327));
    var r = e.callbackNode;
    if (wr() && e.callbackNode !== r) return null;
    var n = d0(e, e === de ? he : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = P0(e, n);
    else {
        t = n;
        var o = G;
        G |= 2;
        var l = rf();
        (de !== e || he !== t) && (it = null, zr = ue() + 500, Qt(e, t));
        do try {
            q1();
            break
        } catch (a) {
            tf(e, a)
        }
        while (!0);
        wi(), k0.current = l, G = o, ae !== null ? t = 0 : (de = null, he = 0, t = fe)
    }
    if (t !== 0) {
        if (t === 2 && (o = wl(e), o !== 0 && (n = o, t = Zl(e, o))), t === 1) throw r = An, Qt(e, 0), Bt(e, n), ze(e, ue()), r;
        if (t === 6) Bt(e, n);
        else {
            if (o = e.current.alternate, !(n & 30) && !Q1(o) && (t = P0(e, n), t === 2 && (l = wl(e), l !== 0 && (n = l, t = Zl(e, l))), t === 1)) throw r = An, Qt(e, 0), Bt(e, n), ze(e, ue()), r;
            switch (e.finishedWork = o, e.finishedLanes = n, t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                Ut(e, De, it);
                break;
            case 3:
                if (Bt(e, n), (n & 130023424) === n && (t = ji + 500 - ue(), 10 < t)) {
                    if (d0(e, 0) !== 0) break;
                    if (o = e.suspendedLanes, (o & n) !== n) {
                        we(), e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Pl(Ut.bind(null, e, De, it), t);
                    break
                }
                Ut(e, De, it);
                break;
            case 4:
                if (Bt(e, n), (n & 4194240) === n) break;
                for (t = e.eventTimes, o = -1; 0 < n;) {
                    var i = 31 - Je(n);
                    l = 1 << i, i = t[i], i > o && (o = i), n &= ~l
                }
                if (n = o, n = ue() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * V1(n / 1960)) - n, 10 < n) {
                    e.timeoutHandle = Pl(Ut.bind(null, e, De, it), n);
                    break
                }
                Ut(e, De, it);
                break;
            case 5:
                Ut(e, De, it);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return ze(e, ue()), e.callbackNode === r ? ef.bind(null, e) : null
}

function Zl(e, t) {
    var r = un;
    return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256), e = P0(e, t), e !== 2 && (t = De, De = r, t !== null && Jl(t)), e
}

function Jl(e) {
    De === null ? De = e : De.push.apply(De, e)
}

function Q1(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var n = 0; n < r.length; n++) {
                    var o = r[n],
                        l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!et(l(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Bt(e, t) {
    for (t &= ~Oi, t &= ~$0, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var r = 31 - Je(t),
            n = 1 << r;
        e[r] = -1, t &= ~n
    }
}

function fa(e) {
    if (G & 6) throw Error(T(327));
    wr();
    var t = d0(e, 0);
    if (!(t & 1)) return ze(e, ue()), null;
    var r = P0(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = wl(e);
        n !== 0 && (t = n, r = Zl(e, n))
    }
    if (r === 1) throw r = An, Qt(e, 0), Bt(e, t), ze(e, ue()), r;
    if (r === 6) throw Error(T(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ut(e, De, it), ze(e, ue()), null
}

function Ii(e, t) {
    var r = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = r, G === 0 && (zr = ue() + 500, I0 && Ot())
    }
}

function Zt(e) {
    Ft !== null && Ft.tag === 0 && !(G & 6) && wr();
    var t = G;
    G |= 1;
    var r = $e.transition,
        n = Z;
    try {
        if ($e.transition = null, Z = 1, e) return e()
    } finally {
        Z = n, $e.transition = r, G = t, !(G & 6) && Ot()
    }
}

function Mi() {
    Re = mr.current, te(mr)
}

function Qt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, C1(r)), ae !== null)
        for (r = ae.return; r !== null;) {
            var n = r;
            switch (Ei(n), n.tag) {
            case 1:
                n = n.type.childContextTypes, n != null && y0();
                break;
            case 3:
                kr(), te(ke), te(Ce), Si();
                break;
            case 5:
                ki(n);
                break;
            case 4:
                kr();
                break;
            case 13:
                te(ne);
                break;
            case 19:
                te(ne);
                break;
            case 10:
                Fi(n.type._context);
                break;
            case 22:
            case 23:
                Mi()
            }
            r = r.return
        }
    if (de = e, ae = e = Nt(e.current, null), he = Re = t, fe = 0, An = null, Oi = $0 = Yt = 0, De = un = null, $t !== null) {
        for (t = 0; t < $t.length; t++)
            if (r = $t[t], n = r.interleaved, n !== null) {
                r.interleaved = null;
                var o = n.next,
                    l = r.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, n.next = i
                }
                r.pending = n
            } $t = null
    }
    return e
}

function tf(e, t) {
    do {
        var r = ae;
        try {
            if (wi(), n0.current = _0, D0) {
                for (var n = oe.memoizedState; n !== null;) {
                    var o = n.queue;
                    o !== null && (o.pending = null), n = n.next
                }
                D0 = !1
            }
            if (Xt = 0, xe = ce = oe = null, on = !1, Bn = 0, Hi.current = null, r === null || r.return === null) {
                fe = 1, An = t, ae = null;
                break
            }
            e: {
                var l = e,
                    i = r.return,
                    a = r,
                    c = t;
                if (t = he, a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                    var u = c,
                        d = a,
                        y = d.tag;
                    if (!(d.mode & 1) && (y === 0 || y === 11 || y === 15)) {
                        var x = d.alternate;
                        x ? (d.updateQueue = x.updateQueue, d.memoizedState = x.memoizedState, d.lanes = x.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var m = Ju(i);
                    if (m !== null) {
                        m.flags &= -257, bu(m, i, a, l, t), m.mode & 1 && Zu(l, u, t), t = m, c = u;
                        var h = t.updateQueue;
                        if (h === null) {
                            var g = new Set;
                            g.add(c), t.updateQueue = g
                        } else h.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Zu(l, u, t), Ui();
                            break e
                        }
                        c = Error(T(426))
                    }
                } else if (re && a.mode & 1) {
                    var E = Ju(i);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), bu(E, i, a, l, t), Ci(Sr(c, a));
                        break e
                    }
                }
                l = c = Sr(c, a),
                fe !== 4 && (fe = 2),
                un === null ? un = [l] : un.push(l),
                l = i;do {
                    switch (l.tag) {
                    case 3:
                        l.flags |= 65536, t &= -t, l.lanes |= t;
                        var p = jc(l, c, t);
                        Qu(l, p);
                        break e;
                    case 1:
                        a = c;
                        var s = l.type,
                            f = l.stateNode;
                        if (!(l.flags & 128) && (typeof s.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (zt === null || !zt.has(f)))) {
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var v = Ic(l, a, t);
                            Qu(l, v);
                            break e
                        }
                    }
                    l = l.return
                } while (l !== null)
            } of (r)
        } catch (C) {
            t = C, ae === r && r !== null && (ae = r = r.return);
            continue
        }
        break
    } while (!0)
}

function rf() {
    var e = k0.current;
    return k0.current = _0, e === null ? _0 : e
}

function Ui() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4), de === null || !(Yt & 268435455) && !($0 & 268435455) || Bt(de, he)
}

function P0(e, t) {
    var r = G;
    G |= 2;
    var n = rf();
    (de !== e || he !== t) && (it = null, Qt(e, t));
    do try {
        K1();
        break
    } catch (o) {
        tf(e, o)
    }
    while (!0);
    if (wi(), G = r, k0.current = n, ae !== null) throw Error(T(261));
    return de = null, he = 0, fe
}

function K1() {
    for (; ae !== null;) nf(ae)
}

function q1() {
    for (; ae !== null && !yx();) nf(ae)
}

function nf(e) {
    var t = uf(e.alternate, e, Re);
    e.memoizedProps = e.pendingProps, t === null ? of (e) : ae = t, Hi.current = null
}

function of (e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (r = M1(r, t), r !== null) {
                r.flags &= 32767, ae = r;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                fe = 6, ae = null;
                return
            }
        } else if (r = I1(r, t, Re), r !== null) {
            ae = r;
            return
        }
        if (t = t.sibling, t !== null) {
            ae = t;
            return
        }
        ae = t = e
    } while (t !== null);
    fe === 0 && (fe = 5)
}

function Ut(e, t, r) {
    var n = Z,
        o = $e.transition;
    try {
        $e.transition = null, Z = 1, G1(e, t, r, n)
    } finally {
        $e.transition = o, Z = n
    }
    return null
}

function G1(e, t, r, n) {
    do wr(); while (Ft !== null);
    if (G & 6) throw Error(T(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(T(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = r.lanes | r.childLanes;
    if (kx(e, l), e === de && (ae = de = null, he = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Xn || (Xn = !0, af(x0, function () {
            return wr(), null
        })), l = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || l) {
        l = $e.transition, $e.transition = null;
        var i = Z;
        Z = 1;
        var a = G;
        G |= 4, Hi.current = null, W1(e, r), Jc(r, e), p1(Sl), p0 = !!kl, Sl = kl = null, e.current = r, $1(r), gx(), G = a, Z = i, $e.transition = l
    } else e.current = r;
    if (Xn && (Xn = !1, Ft = e, z0 = o), l = e.pendingLanes, l === 0 && (zt = null), Bx(r.stateNode), ze(e, ue()), t !== null)
        for (n = e.onRecoverableError, r = 0; r < t.length; r++) o = t[r], n(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (S0) throw S0 = !1, e = Xl, Xl = null, e;
    return z0 & 1 && e.tag !== 0 && wr(), l = e.pendingLanes, l & 1 ? e === Yl ? an++ : (an = 0, Yl = e) : an = 0, Ot(), null
}

function wr() {
    if (Ft !== null) {
        var e = js(z0),
            t = $e.transition,
            r = Z;
        try {
            if ($e.transition = null, Z = 16 > e ? 16 : e, Ft === null) var n = !1;
            else {
                if (e = Ft, Ft = null, z0 = 0, G & 6) throw Error(T(331));
                var o = G;
                for (G |= 4, j = e.current; j !== null;) {
                    var l = j,
                        i = l.child;
                    if (j.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var c = 0; c < a.length; c++) {
                                var u = a[c];
                                for (j = u; j !== null;) {
                                    var d = j;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ln(8, d, l)
                                    }
                                    var y = d.child;
                                    if (y !== null) y.return = d, j = y;
                                    else
                                        for (; j !== null;) {
                                            d = j;
                                            var x = d.sibling,
                                                m = d.return;
                                            if (Xc(d), d === u) {
                                                j = null;
                                                break
                                            }
                                            if (x !== null) {
                                                x.return = m, j = x;
                                                break
                                            }
                                            j = m
                                        }
                                }
                            }
                            var h = l.alternate;
                            if (h !== null) {
                                var g = h.child;
                                if (g !== null) {
                                    h.child = null;
                                    do {
                                        var E = g.sibling;
                                        g.sibling = null, g = E
                                    } while (g !== null)
                                }
                            }
                            j = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && i !== null) i.return = l, j = i;
                    else e: for (; j !== null;) {
                        if (l = j, l.flags & 2048) switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ln(9, l, l.return)
                        }
                        var p = l.sibling;
                        if (p !== null) {
                            p.return = l.return, j = p;
                            break e
                        }
                        j = l.return
                    }
                }
                var s = e.current;
                for (j = s; j !== null;) {
                    i = j;
                    var f = i.child;
                    if (i.subtreeFlags & 2064 && f !== null) f.return = i, j = f;
                    else e: for (i = s; j !== null;) {
                        if (a = j, a.flags & 2048) try {
                            switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                W0(9, a)
                            }
                        } catch (C) {
                            ie(a, a.return, C)
                        }
                        if (a === i) {
                            j = null;
                            break e
                        }
                        var v = a.sibling;
                        if (v !== null) {
                            v.return = a.return, j = v;
                            break e
                        }
                        j = a.return
                    }
                }
                if (G = o, Ot(), ot && typeof ot.onPostCommitFiberRoot == "function") try {
                    ot.onPostCommitFiberRoot(L0, e)
                } catch {}
                n = !0
            }
            return n
        } finally {
            Z = r, $e.transition = t
        }
    }
    return !1
}

function xa(e, t, r) {
    t = Sr(r, t), t = jc(e, t, 1), e = St(e, t, 1), t = we(), e !== null && (_n(e, 1, t), ze(e, t))
}

function ie(e, t, r) {
    if (e.tag === 3) xa(e, e, r);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                xa(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (zt === null || !zt.has(n))) {
                    e = Sr(r, e), e = Ic(t, e, 1), t = St(t, e, 1), e = we(), t !== null && (_n(t, 1, e), ze(t, e));
                    break
                }
            }
            t = t.return
        }
}

function X1(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & r, de === e && (he & r) === r && (fe === 4 || fe === 3 && (he & 130023424) === he && 500 > ue() - ji ? Qt(e, 0) : Oi |= r), ze(e, t)
}

function lf(e, t) {
    t === 0 && (e.mode & 1 ? (t = In, In <<= 1, !(In & 130023424) && (In = 4194304)) : t = 1);
    var r = we();
    e = dt(e, t), e !== null && (_n(e, t, r), ze(e, r))
}

function Y1(e) {
    var t = e.memoizedState,
        r = 0;
    t !== null && (r = t.retryLane), lf(e, r)
}

function Z1(e, t) {
    var r = 0;
    switch (e.tag) {
    case 13:
        var n = e.stateNode,
            o = e.memoizedState;
        o !== null && (r = o.retryLane);
        break;
    case 19:
        n = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    n !== null && n.delete(t), lf(e, r)
}
var uf;
uf = function (e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ke.current) _e = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128)) return _e = !1, j1(e, t, r);
            _e = !!(e.flags & 131072)
        }
    else _e = !1, re && t.flags & 1048576 && cc(t, C0, t.index);
    switch (t.lanes = 0, t.tag) {
    case 2:
        var n = t.type;
        l0(e, t), e = t.pendingProps;
        var o = Ar(t, Ce.current);
        Br(t, r), o = Pi(null, t, n, e, o, r);
        var l = Ni();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Se(n) ? (l = !0, g0(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Di(t), o.updater = U0, t.stateNode = o, o._reactInternals = t, jl(t, n, e, r), t = Ul(null, t, n, !0, l, r)) : (t.tag = 0, re && l && gi(t), Be(null, t, o, r), t = t.child), t;
    case 16:
        n = t.elementType;
        e: {
            switch (l0(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = b1(n), e = Xe(n, e), o) {
            case 0:
                t = Ml(null, t, n, e, r);
                break e;
            case 1:
                t = ra(null, t, n, e, r);
                break e;
            case 11:
                t = ea(null, t, n, e, r);
                break e;
            case 14:
                t = ta(null, t, n, Xe(n.type, e), r);
                break e
            }
            throw Error(T(306, n, ""))
        }
        return t;
    case 0:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Xe(n, o), Ml(e, t, n, o, r);
    case 1:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Xe(n, o), ra(e, t, n, o, r);
    case 3:
        e: {
            if ($c(t), e === null) throw Error(T(387));n = t.pendingProps,
            l = t.memoizedState,
            o = l.element,
            hc(e, t),
            F0(t, n, null, r);
            var i = t.memoizedState;
            if (n = i.element, l.isDehydrated)
                if (l = {
                        element: n,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                    o = Sr(Error(T(423)), t), t = na(e, t, n, r, o);
                    break e
                } else if (n !== o) {
                o = Sr(Error(T(424)), t), t = na(e, t, n, r, o);
                break e
            } else
                for (Le = kt(t.stateNode.containerInfo.firstChild), Te = t, re = !0, Ze = null, r = pc(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
            else {
                if (Dr(), n === o) {
                    t = pt(e, t, r);
                    break e
                }
                Be(e, t, n, r)
            }
            t = t.child
        }
        return t;
    case 5:
        return mc(t), e === null && Tl(t), n = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, zl(n, o) ? i = null : l !== null && zl(n, l) && (t.flags |= 32), Wc(e, t), Be(e, t, i, r), t.child;
    case 6:
        return e === null && Tl(t), null;
    case 13:
        return Vc(e, t, r);
    case 4:
        return _i(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = _r(t, null, n, r) : Be(e, t, n, r), t.child;
    case 11:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Xe(n, o), ea(e, t, n, o, r);
    case 7:
        return Be(e, t, t.pendingProps, r), t.child;
    case 8:
        return Be(e, t, t.pendingProps.children, r), t.child;
    case 12:
        return Be(e, t, t.pendingProps.children, r), t.child;
    case 10:
        e: {
            if (n = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, b(B0, n._currentValue), n._currentValue = i, l !== null)
                if (et(l.value, i)) {
                    if (l.children === o.children && !ke.current) {
                        t = pt(e, t, r);
                        break e
                    }
                } else
                    for (l = t.child, l !== null && (l.return = t); l !== null;) {
                        var a = l.dependencies;
                        if (a !== null) {
                            i = l.child;
                            for (var c = a.firstContext; c !== null;) {
                                if (c.context === n) {
                                    if (l.tag === 1) {
                                        c = ct(-1, r & -r), c.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                                        }
                                    }
                                    l.lanes |= r, c = l.alternate, c !== null && (c.lanes |= r), Hl(l.return, r, t), a.lanes |= r;
                                    break
                                }
                                c = c.next
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(T(341));
                            i.lanes |= r, a = i.alternate, a !== null && (a.lanes |= r), Hl(i, r, t), i = l.sibling
                        } else i = l.child;
                        if (i !== null) i.return = l;
                        else
                            for (i = l; i !== null;) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (l = i.sibling, l !== null) {
                                    l.return = i.return, i = l;
                                    break
                                }
                                i = i.return
                            }
                        l = i
                    }
            Be(e, t, o.children, r),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type, n = t.pendingProps.children, Br(t, r), o = Ve(o), n = n(o), t.flags |= 1, Be(e, t, n, r), t.child;
    case 14:
        return n = t.type, o = Xe(n, t.pendingProps), o = Xe(n.type, o), ta(e, t, n, o, r);
    case 15:
        return Mc(e, t, t.type, t.pendingProps, r);
    case 17:
        return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Xe(n, o), l0(e, t), t.tag = 1, Se(n) ? (e = !0, g0(t)) : e = !1, Br(t, r), Oc(t, n, o), jl(t, n, o, r), Ul(null, t, n, !0, e, r);
    case 19:
        return Qc(e, t, r);
    case 22:
        return Uc(e, t, r)
    }
    throw Error(T(156, t.tag))
};

function af(e, t) {
    return Ls(e, t)
}

function J1(e, t, r, n) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function We(e, t, r, n) {
    return new J1(e, t, r, n)
}

function Wi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function b1(e) {
    if (typeof e == "function") return Wi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ui) return 11;
        if (e === ai) return 14
    }
    return 2
}

function Nt(e, t) {
    var r = e.alternate;
    return r === null ? (r = We(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function a0(e, t, r, n, o, l) {
    var i = 2;
    if (n = e, typeof e == "function") Wi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
    case ur:
        return Kt(r.children, o, l, t);
    case ii:
        i = 8, o |= 8;
        break;
    case al:
        return e = We(12, r, t, o | 2), e.elementType = al, e.lanes = l, e;
    case sl:
        return e = We(13, r, t, o), e.elementType = sl, e.lanes = l, e;
    case cl:
        return e = We(19, r, t, o), e.elementType = cl, e.lanes = l, e;
    case ms:
        return V0(r, o, l, t);
    default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vs:
            i = 10;
            break e;
        case hs:
            i = 9;
            break e;
        case ui:
            i = 11;
            break e;
        case ai:
            i = 14;
            break e;
        case gt:
            i = 16, n = null;
            break e
        }
        throw Error(T(130, e == null ? e : typeof e, ""))
    }
    return t = We(i, r, t, o), t.elementType = e, t.type = n, t.lanes = l, t
}

function Kt(e, t, r, n) {
    return e = We(7, e, n, t), e.lanes = r, e
}

function V0(e, t, r, n) {
    return e = We(22, e, n, t), e.elementType = ms, e.lanes = r, e.stateNode = {
        isHidden: !1
    }, e
}

function wo(e, t, r) {
    return e = We(6, e, null, t), e.lanes = r, e
}

function Fo(e, t, r) {
    return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function ed(e, t, r, n, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = no(0), this.expirationTimes = no(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = no(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function $i(e, t, r, n, o, l, i, a, c) {
    return e = new ed(e, t, r, a, c), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = We(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Di(l), e
}

function td(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ir,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}

function sf(e) {
    if (!e) return Lt;
    e = e._reactInternals;
    e: {
        if (bt(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Se(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (Se(r)) return ac(e, r, t)
    }
    return t
}

function cf(e, t, r, n, o, l, i, a, c) {
    return e = $i(r, n, !0, e, o, l, i, a, c), e.context = sf(null), r = e.current, n = we(), o = Pt(r), l = ct(n, o), l.callback = t ?? null, St(r, l, o), e.current.lanes = o, _n(e, o, n), ze(e, n), e
}

function Q0(e, t, r, n) {
    var o = t.current,
        l = we(),
        i = Pt(o);
    return r = sf(r), t.context === null ? t.context = r : t.pendingContext = r, t = ct(l, i), t.payload = {
        element: e
    }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = St(o, t, i), e !== null && (be(e, o, i, l), r0(e, o, i)), i
}

function N0(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}

function da(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}

function Vi(e, t) {
    da(e, t), (e = e.alternate) && da(e, t)
}

function rd() {
    return null
}
var ff = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Qi(e) {
    this._internalRoot = e
}
K0.prototype.render = Qi.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Q0(e, t, null, null)
};
K0.prototype.unmount = Qi.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zt(function () {
            Q0(null, e, null, null)
        }), t[xt] = null
    }
};

function K0(e) {
    this._internalRoot = e
}
K0.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Us();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < Ct.length && t !== 0 && t < Ct[r].priority; r++);
        Ct.splice(r, 0, e), r === 0 && $s(e)
    }
};

function Ki(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function q0(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function pa() {}

function nd(e, t, r, n, o) {
    if (o) {
        if (typeof n == "function") {
            var l = n;
            n = function () {
                var u = N0(i);
                l.call(u)
            }
        }
        var i = cf(t, n, e, 0, null, !1, !1, "", pa);
        return e._reactRootContainer = i, e[xt] = i.current, mn(e.nodeType === 8 ? e.parentNode : e), Zt(), i
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof n == "function") {
        var a = n;
        n = function () {
            var u = N0(c);
            a.call(u)
        }
    }
    var c = $i(e, 0, !1, null, null, !1, !1, "", pa);
    return e._reactRootContainer = c, e[xt] = c.current, mn(e.nodeType === 8 ? e.parentNode : e), Zt(function () {
        Q0(t, c, r, n)
    }), c
}

function G0(e, t, r, n, o) {
    var l = r._reactRootContainer;
    if (l) {
        var i = l;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var c = N0(i);
                a.call(c)
            }
        }
        Q0(t, i, e, o)
    } else i = nd(r, t, e, o, n);
    return N0(i)
}
Is = function (e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var r = Zr(t.pendingLanes);
            r !== 0 && (fi(t, r | 1), ze(t, ue()), !(G & 6) && (zr = ue() + 500, Ot()))
        }
        break;
    case 13:
        Zt(function () {
            var n = dt(e, 1);
            if (n !== null) {
                var o = we();
                be(n, e, 1, o)
            }
        }), Vi(e, 1)
    }
};
xi = function (e) {
    if (e.tag === 13) {
        var t = dt(e, 134217728);
        if (t !== null) {
            var r = we();
            be(t, e, 134217728, r)
        }
        Vi(e, 134217728)
    }
};
Ms = function (e) {
    if (e.tag === 13) {
        var t = Pt(e),
            r = dt(e, t);
        if (r !== null) {
            var n = we();
            be(r, e, t, n)
        }
        Vi(e, t)
    }
};
Us = function () {
    return Z
};
Ws = function (e, t) {
    var r = Z;
    try {
        return Z = e, t()
    } finally {
        Z = r
    }
};
El = function (e, t, r) {
    switch (t) {
    case "input":
        if (dl(e, r), t = r.name, r.type === "radio" && t != null) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                var n = r[t];
                if (n !== e && n.form === e.form) {
                    var o = j0(n);
                    if (!o) throw Error(T(90));
                    gs(n), dl(n, o)
                }
            }
        }
        break;
    case "textarea":
        Cs(e, r);
        break;
    case "select":
        t = r.value, t != null && yr(e, !!r.multiple, t, !1)
    }
};
ks = Ii;
Ss = Zt;
var od = {
        usingClientEntryPoint: !1,
        Events: [Sn, fr, j0, Ds, _s, Ii]
    },
    Gr = {
        findFiberByHostInstance: Wt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    ld = {
        bundleType: Gr.bundleType,
        version: Gr.version,
        rendererPackageName: Gr.rendererPackageName,
        rendererConfig: Gr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Ns(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Gr.findFiberByHostInstance || rd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yn.isDisabled && Yn.supportsFiber) try {
        L0 = Yn.inject(ld), ot = Yn
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = od;
Oe.createPortal = function (e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(t)) throw Error(T(200));
    return td(e, t, null, r)
};
Oe.createRoot = function (e, t) {
    if (!Ki(e)) throw Error(T(299));
    var r = !1,
        n = "",
        o = ff;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = $i(e, 1, !1, null, null, r, !1, n, o), e[xt] = t.current, mn(e.nodeType === 8 ? e.parentNode : e), new Qi(t)
};
Oe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
    return e = Ns(t), e = e === null ? null : e.stateNode, e
};
Oe.flushSync = function (e) {
    return Zt(e)
};
Oe.hydrate = function (e, t, r) {
    if (!q0(t)) throw Error(T(200));
    return G0(null, e, t, !0, r)
};
Oe.hydrateRoot = function (e, t, r) {
    if (!Ki(e)) throw Error(T(405));
    var n = r != null && r.hydratedSources || null,
        o = !1,
        l = "",
        i = ff;
    if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (l = r.identifierPrefix), r.onRecoverableError !== void 0 && (i = r.onRecoverableError)), t = cf(t, null, e, 1, r ?? null, o, !1, l, i), e[xt] = t.current, mn(e), n)
        for (e = 0; e < n.length; e++) r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
    return new K0(t)
};
Oe.render = function (e, t, r) {
    if (!q0(t)) throw Error(T(200));
    return G0(null, e, t, !1, r)
};
Oe.unmountComponentAtNode = function (e) {
    if (!q0(e)) throw Error(T(40));
    return e._reactRootContainer ? (Zt(function () {
        G0(null, null, e, !1, function () {
            e._reactRootContainer = null, e[xt] = null
        })
    }), !0) : !1
};
Oe.unstable_batchedUpdates = Ii;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!q0(r)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return G0(e, t, r, !1, n)
};
Oe.version = "18.3.1-next-f1338f8080-20240426";

function xf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xf)
    } catch (e) {
        console.error(e)
    }
}
xf(), fs.exports = Oe;
var id = fs.exports,
    df, va = id;
df = va.createRoot, va.hydrateRoot;
var ud = {
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
const ad = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    pf = (e, t) => {
        const r = tsRef.forwardRef(({
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: i,
            className: a = "",
            children: c,
            ...u
        }, d) => tsRef.createElement("svg", {
            ref: d,
            ...ud,
            width: o,
            height: o,
            stroke: n,
            strokeWidth: i ? Number(l) * 24 / Number(o) : l,
            className: ["lucide", `lucide-${ad(e)}`, a].join(" "),
            ...u
        }, [...t.map(([y, x]) => tsRef.createElement(y, x)), ...Array.isArray(c) ? c : [c]]));
        return r.displayName = `${e}`, r
    };
const vf = pf("Gift", [
    ["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }],
    ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }],
    ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }],
    ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]
]);
const sd = pf("Trophy", [
    ["path", {
        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
        key: "17hqa7"
    }],
    ["path", {
        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
        key: "lmptdp"
    }],
    ["path", {
        d: "M4 22h16",
        key: "57wxv0"
    }],
    ["path", {
        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
        key: "1nw9bq"
    }],
    ["path", {
        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
        key: "1np0yb"
    }],
    ["path", {
        d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
        key: "u46fv3"
    }]
]);

function cd({
    onStart: e
}) {
    const [t, r] = tsRef.useState(""), [n, o] = tsRef.useState(""), l = i => {
        if (i.preventDefault(), t.trim().length < 2) {
            o("The name must contain at least 2 characters");
            return
        }
        e(t.trim())
    };
    return U.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 flex items-center justify-center p-4",
        children: U.jsxs("div", {
            className: "bg-white rounded-xl shadow-2xl p-8 w-full max-w-md",
            children: [U.jsxs("div", {
                className: "text-center mb-8",
                children: [U.jsx(vf, {
                    className: "w-16 h-16 mx-auto text-red-500 mb-4"
                }), U.jsx("h1", {
                    className: "text-3xl font-bold text-gray-800 mb-2",
                    children: "Catch the gifts"
                }), U.jsx("p", {
                    className: "text-gray-600",
                    children: "Try to beat Santa to get the flag!"
                })]
            }), U.jsxs("form", {
                onSubmit: l,
                className: "space-y-6",
                children: [U.jsxs("div", {
                    children: [U.jsx("label", {
                        htmlFor: "playerName",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Your nickname"
                    }), U.jsx("input", {
                        type: "text",
                        id: "playerName",
                        value: t,
                        onChange: i => r(i.target.value),
                        className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        placeholder: "Enter your nickname ..."
                    }), n && U.jsx("p", {
                        className: "mt-2 text-sm text-red-600",
                        children: n
                    })]
                }), U.jsx("button", {
                    type: "submit",
                    className: "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors",
                    children: "Start the game"
                })]
            }), U.jsxs("div", {
                className: "mt-8 text-sm text-gray-600",
                children: [U.jsx("h3", {
                    className: "font-semibold mb-2",
                    children: "How to play:"
                }), U.jsxs("ul", {
                    className: "list-disc list-inside space-y-1",
                    children: [U.jsx("li", {
                        children: "Use the arrows ← → to move Santa Claus"
                    }), U.jsx("li", {
                        children: "Catch falling gifts"
                    }), U.jsx("li", {
                        children: "Each gift is worth 50 points"
                    }), U.jsx("li", {
                        children: "You've got 20 seconds to get the best score!"
                    })]
                })]
            })]
        })
    })
}
var hf = {
    exports: {}
};

function fd(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Ao = {
    exports: {}
};
const xd = {},
    dd = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xd
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pd = Lf(dd);
var ha;

function K() {
    return ha || (ha = 1, function (e, t) {
        (function (r, n) {
            e.exports = n()
        })($, function () {
            var r = r || function (n, o) {
                var l;
                if (typeof window < "u" && window.crypto && (l = window.crypto), typeof self < "u" && self.crypto && (l = self.crypto), typeof globalThis < "u" && globalThis.crypto && (l = globalThis.crypto), !l && typeof window < "u" && window.msCrypto && (l = window.msCrypto), !l && typeof $ < "u" && $.crypto && (l = $.crypto), !l && typeof fd == "function") try {
                    l = pd
                } catch {}
                var i = function () {
                        if (l) {
                            if (typeof l.getRandomValues == "function") try {
                                return l.getRandomValues(new Uint32Array(1))[0]
                            } catch {}
                            if (typeof l.randomBytes == "function") try {
                                return l.randomBytes(4).readInt32LE()
                            } catch {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    },
                    a = Object.create || function () {
                        function s() {}
                        return function (f) {
                            var v;
                            return s.prototype = f, v = new s, s.prototype = null, v
                        }
                    }(),
                    c = {},
                    u = c.lib = {},
                    d = u.Base = function () {
                        return {
                            extend: function (s) {
                                var f = a(this);
                                return s && f.mixIn(s), (!f.hasOwnProperty("init") || this.init === f.init) && (f.init = function () {
                                    f.$super.init.apply(this, arguments)
                                }), f.init.prototype = f, f.$super = this, f
                            },
                            create: function () {
                                var s = this.extend();
                                return s.init.apply(s, arguments), s
                            },
                            init: function () {},
                            mixIn: function (s) {
                                for (var f in s) s.hasOwnProperty(f) && (this[f] = s[f]);
                                s.hasOwnProperty("toString") && (this.toString = s.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }(),
                    y = u.WordArray = d.extend({
                        init: function (s, f) {
                            s = this.words = s || [], f != o ? this.sigBytes = f : this.sigBytes = s.length * 4
                        },
                        toString: function (s) {
                            return (s || m).stringify(this)
                        },
                        concat: function (s) {
                            var f = this.words,
                                v = s.words,
                                C = this.sigBytes,
                                B = s.sigBytes;
                            if (this.clamp(), C % 4)
                                for (var w = 0; w < B; w++) {
                                    var A = v[w >>> 2] >>> 24 - w % 4 * 8 & 255;
                                    f[C + w >>> 2] |= A << 24 - (C + w) % 4 * 8
                                } else
                                    for (var k = 0; k < B; k += 4) f[C + k >>> 2] = v[k >>> 2];
                            return this.sigBytes += B, this
                        },
                        clamp: function () {
                            var s = this.words,
                                f = this.sigBytes;
                            s[f >>> 2] &= 4294967295 << 32 - f % 4 * 8, s.length = n.ceil(f / 4)
                        },
                        clone: function () {
                            var s = d.clone.call(this);
                            return s.words = this.words.slice(0), s
                        },
                        random: function (s) {
                            for (var f = [], v = 0; v < s; v += 4) f.push(i());
                            return new y.init(f, s)
                        }
                    }),
                    x = c.enc = {},
                    m = x.Hex = {
                        stringify: function (s) {
                            for (var f = s.words, v = s.sigBytes, C = [], B = 0; B < v; B++) {
                                var w = f[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                                C.push((w >>> 4).toString(16)), C.push((w & 15).toString(16))
                            }
                            return C.join("")
                        },
                        parse: function (s) {
                            for (var f = s.length, v = [], C = 0; C < f; C += 2) v[C >>> 3] |= parseInt(s.substr(C, 2), 16) << 24 - C % 8 * 4;
                            return new y.init(v, f / 2)
                        }
                    },
                    h = x.Latin1 = {
                        stringify: function (s) {
                            for (var f = s.words, v = s.sigBytes, C = [], B = 0; B < v; B++) {
                                var w = f[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                                C.push(String.fromCharCode(w))
                            }
                            return C.join("")
                        },
                        parse: function (s) {
                            for (var f = s.length, v = [], C = 0; C < f; C++) v[C >>> 2] |= (s.charCodeAt(C) & 255) << 24 - C % 4 * 8;
                            return new y.init(v, f)
                        }
                    },
                    g = x.Utf8 = {
                        stringify: function (s) {
                            try {
                                return decodeURIComponent(escape(h.stringify(s)))
                            } catch {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function (s) {
                            return h.parse(unescape(encodeURIComponent(s)))
                        }
                    },
                    E = u.BufferedBlockAlgorithm = d.extend({
                        reset: function () {
                            this._data = new y.init, this._nDataBytes = 0
                        },
                        _append: function (s) {
                            typeof s == "string" && (s = g.parse(s)), this._data.concat(s), this._nDataBytes += s.sigBytes
                        },
                        _process: function (s) {
                            var f, v = this._data,
                                C = v.words,
                                B = v.sigBytes,
                                w = this.blockSize,
                                A = w * 4,
                                k = B / A;
                            s ? k = n.ceil(k) : k = n.max((k | 0) - this._minBufferSize, 0);
                            var F = k * w,
                                D = n.min(F * 4, B);
                            if (F) {
                                for (var z = 0; z < F; z += w) this._doProcessBlock(C, z);
                                f = C.splice(0, F), v.sigBytes -= D
                            }
                            return new y.init(f, D)
                        },
                        clone: function () {
                            var s = d.clone.call(this);
                            return s._data = this._data.clone(), s
                        },
                        _minBufferSize: 0
                    });
                u.Hasher = E.extend({
                    cfg: d.extend(),
                    init: function (s) {
                        this.cfg = this.cfg.extend(s), this.reset()
                    },
                    reset: function () {
                        E.reset.call(this), this._doReset()
                    },
                    update: function (s) {
                        return this._append(s), this._process(), this
                    },
                    finalize: function (s) {
                        s && this._append(s);
                        var f = this._doFinalize();
                        return f
                    },
                    blockSize: 16,
                    _createHelper: function (s) {
                        return function (f, v) {
                            return new s.init(v).finalize(f)
                        }
                    },
                    _createHmacHelper: function (s) {
                        return function (f, v) {
                            return new p.HMAC.init(s, v).finalize(f)
                        }
                    }
                });
                var p = c.algo = {};
                return c
            }(Math);
            return r
        })
    }(Ao)), Ao.exports
}
var Do = {
        exports: {}
    },
    ma;

function X0() {
    return ma || (ma = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function (n) {
                var o = r,
                    l = o.lib,
                    i = l.Base,
                    a = l.WordArray,
                    c = o.x64 = {};
                c.Word = i.extend({
                    init: function (u, d) {
                        this.high = u, this.low = d
                    }
                }), c.WordArray = i.extend({
                    init: function (u, d) {
                        u = this.words = u || [], d != n ? this.sigBytes = d : this.sigBytes = u.length * 8
                    },
                    toX32: function () {
                        for (var u = this.words, d = u.length, y = [], x = 0; x < d; x++) {
                            var m = u[x];
                            y.push(m.high), y.push(m.low)
                        }
                        return a.create(y, this.sigBytes)
                    },
                    clone: function () {
                        for (var u = i.clone.call(this), d = u.words = this.words.slice(0), y = d.length, x = 0; x < y; x++) d[x] = d[x].clone();
                        return u
                    }
                })
            }(), r
        })
    }(Do)), Do.exports
}
var _o = {
        exports: {}
    },
    ya;

function vd() {
    return ya || (ya = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function () {
                if (typeof ArrayBuffer == "function") {
                    var n = r,
                        o = n.lib,
                        l = o.WordArray,
                        i = l.init,
                        a = l.init = function (c) {
                            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
                                for (var u = c.byteLength, d = [], y = 0; y < u; y++) d[y >>> 2] |= c[y] << 24 - y % 4 * 8;
                                i.call(this, d, u)
                            } else i.apply(this, arguments)
                        };
                    a.prototype = l
                }
            }(), r.lib.WordArray
        })
    }(_o)), _o.exports
}
var ko = {
        exports: {}
    },
    ga;

function hd() {
    return ga || (ga = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.WordArray,
                    i = n.enc;
                i.Utf16 = i.Utf16BE = {
                    stringify: function (c) {
                        for (var u = c.words, d = c.sigBytes, y = [], x = 0; x < d; x += 2) {
                            var m = u[x >>> 2] >>> 16 - x % 4 * 8 & 65535;
                            y.push(String.fromCharCode(m))
                        }
                        return y.join("")
                    },
                    parse: function (c) {
                        for (var u = c.length, d = [], y = 0; y < u; y++) d[y >>> 1] |= c.charCodeAt(y) << 16 - y % 2 * 16;
                        return l.create(d, u * 2)
                    }
                }, i.Utf16LE = {
                    stringify: function (c) {
                        for (var u = c.words, d = c.sigBytes, y = [], x = 0; x < d; x += 2) {
                            var m = a(u[x >>> 2] >>> 16 - x % 4 * 8 & 65535);
                            y.push(String.fromCharCode(m))
                        }
                        return y.join("")
                    },
                    parse: function (c) {
                        for (var u = c.length, d = [], y = 0; y < u; y++) d[y >>> 1] |= a(c.charCodeAt(y) << 16 - y % 2 * 16);
                        return l.create(d, u * 2)
                    }
                };

                function a(c) {
                    return c << 8 & 4278255360 | c >>> 8 & 16711935
                }
            }(), r.enc.Utf16
        })
    }(ko)), ko.exports
}
var So = {
        exports: {}
    },
    Ea;

function er() {
    return Ea || (Ea = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.WordArray,
                    i = n.enc;
                i.Base64 = {
                    stringify: function (c) {
                        var u = c.words,
                            d = c.sigBytes,
                            y = this._map;
                        c.clamp();
                        for (var x = [], m = 0; m < d; m += 3)
                            for (var h = u[m >>> 2] >>> 24 - m % 4 * 8 & 255, g = u[m + 1 >>> 2] >>> 24 - (m + 1) % 4 * 8 & 255, E = u[m + 2 >>> 2] >>> 24 - (m + 2) % 4 * 8 & 255, p = h << 16 | g << 8 | E, s = 0; s < 4 && m + s * .75 < d; s++) x.push(y.charAt(p >>> 6 * (3 - s) & 63));
                        var f = y.charAt(64);
                        if (f)
                            for (; x.length % 4;) x.push(f);
                        return x.join("")
                    },
                    parse: function (c) {
                        var u = c.length,
                            d = this._map,
                            y = this._reverseMap;
                        if (!y) {
                            y = this._reverseMap = [];
                            for (var x = 0; x < d.length; x++) y[d.charCodeAt(x)] = x
                        }
                        var m = d.charAt(64);
                        if (m) {
                            var h = c.indexOf(m);
                            h !== -1 && (u = h)
                        }
                        return a(c, u, y)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                };

                function a(c, u, d) {
                    for (var y = [], x = 0, m = 0; m < u; m++)
                        if (m % 4) {
                            var h = d[c.charCodeAt(m - 1)] << m % 4 * 2,
                                g = d[c.charCodeAt(m)] >>> 6 - m % 4 * 2,
                                E = h | g;
                            y[x >>> 2] |= E << 24 - x % 4 * 8, x++
                        } return l.create(y, x)
                }
            }(), r.enc.Base64
        })
    }(So)), So.exports
}
var zo = {
        exports: {}
    },
    Ca;

function md() {
    return Ca || (Ca = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.WordArray,
                    i = n.enc;
                i.Base64url = {
                    stringify: function (c, u) {
                        u === void 0 && (u = !0);
                        var d = c.words,
                            y = c.sigBytes,
                            x = u ? this._safe_map : this._map;
                        c.clamp();
                        for (var m = [], h = 0; h < y; h += 3)
                            for (var g = d[h >>> 2] >>> 24 - h % 4 * 8 & 255, E = d[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, p = d[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, s = g << 16 | E << 8 | p, f = 0; f < 4 && h + f * .75 < y; f++) m.push(x.charAt(s >>> 6 * (3 - f) & 63));
                        var v = x.charAt(64);
                        if (v)
                            for (; m.length % 4;) m.push(v);
                        return m.join("")
                    },
                    parse: function (c, u) {
                        u === void 0 && (u = !0);
                        var d = c.length,
                            y = u ? this._safe_map : this._map,
                            x = this._reverseMap;
                        if (!x) {
                            x = this._reverseMap = [];
                            for (var m = 0; m < y.length; m++) x[y.charCodeAt(m)] = m
                        }
                        var h = y.charAt(64);
                        if (h) {
                            var g = c.indexOf(h);
                            g !== -1 && (d = g)
                        }
                        return a(c, d, x)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                };

                function a(c, u, d) {
                    for (var y = [], x = 0, m = 0; m < u; m++)
                        if (m % 4) {
                            var h = d[c.charCodeAt(m - 1)] << m % 4 * 2,
                                g = d[c.charCodeAt(m)] >>> 6 - m % 4 * 2,
                                E = h | g;
                            y[x >>> 2] |= E << 24 - x % 4 * 8, x++
                        } return l.create(y, x)
                }
            }(), r.enc.Base64url
        })
    }(zo)), zo.exports
}
var Po = {
        exports: {}
    },
    Ba;

function tr() {
    return Ba || (Ba = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function (n) {
                var o = r,
                    l = o.lib,
                    i = l.WordArray,
                    a = l.Hasher,
                    c = o.algo,
                    u = [];
                (function () {
                    for (var g = 0; g < 64; g++) u[g] = n.abs(n.sin(g + 1)) * 4294967296 | 0
                })();
                var d = c.MD5 = a.extend({
                    _doReset: function () {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function (g, E) {
                        for (var p = 0; p < 16; p++) {
                            var s = E + p,
                                f = g[s];
                            g[s] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360
                        }
                        var v = this._hash.words,
                            C = g[E + 0],
                            B = g[E + 1],
                            w = g[E + 2],
                            A = g[E + 3],
                            k = g[E + 4],
                            F = g[E + 5],
                            D = g[E + 6],
                            z = g[E + 7],
                            P = g[E + 8],
                            I = g[E + 9],
                            M = g[E + 10],
                            W = g[E + 11],
                            X = g[E + 12],
                            L = g[E + 13],
                            H = g[E + 14],
                            O = g[E + 15],
                            _ = v[0],
                            S = v[1],
                            R = v[2],
                            N = v[3];
                        _ = y(_, S, R, N, C, 7, u[0]), N = y(N, _, S, R, B, 12, u[1]), R = y(R, N, _, S, w, 17, u[2]), S = y(S, R, N, _, A, 22, u[3]), _ = y(_, S, R, N, k, 7, u[4]), N = y(N, _, S, R, F, 12, u[5]), R = y(R, N, _, S, D, 17, u[6]), S = y(S, R, N, _, z, 22, u[7]), _ = y(_, S, R, N, P, 7, u[8]), N = y(N, _, S, R, I, 12, u[9]), R = y(R, N, _, S, M, 17, u[10]), S = y(S, R, N, _, W, 22, u[11]), _ = y(_, S, R, N, X, 7, u[12]), N = y(N, _, S, R, L, 12, u[13]), R = y(R, N, _, S, H, 17, u[14]), S = y(S, R, N, _, O, 22, u[15]), _ = x(_, S, R, N, B, 5, u[16]), N = x(N, _, S, R, D, 9, u[17]), R = x(R, N, _, S, W, 14, u[18]), S = x(S, R, N, _, C, 20, u[19]), _ = x(_, S, R, N, F, 5, u[20]), N = x(N, _, S, R, M, 9, u[21]), R = x(R, N, _, S, O, 14, u[22]), S = x(S, R, N, _, k, 20, u[23]), _ = x(_, S, R, N, I, 5, u[24]), N = x(N, _, S, R, H, 9, u[25]), R = x(R, N, _, S, A, 14, u[26]), S = x(S, R, N, _, P, 20, u[27]), _ = x(_, S, R, N, L, 5, u[28]), N = x(N, _, S, R, w, 9, u[29]), R = x(R, N, _, S, z, 14, u[30]), S = x(S, R, N, _, X, 20, u[31]), _ = m(_, S, R, N, F, 4, u[32]), N = m(N, _, S, R, P, 11, u[33]), R = m(R, N, _, S, W, 16, u[34]), S = m(S, R, N, _, H, 23, u[35]), _ = m(_, S, R, N, B, 4, u[36]), N = m(N, _, S, R, k, 11, u[37]), R = m(R, N, _, S, z, 16, u[38]), S = m(S, R, N, _, M, 23, u[39]), _ = m(_, S, R, N, L, 4, u[40]), N = m(N, _, S, R, C, 11, u[41]), R = m(R, N, _, S, A, 16, u[42]), S = m(S, R, N, _, D, 23, u[43]), _ = m(_, S, R, N, I, 4, u[44]), N = m(N, _, S, R, X, 11, u[45]), R = m(R, N, _, S, O, 16, u[46]), S = m(S, R, N, _, w, 23, u[47]), _ = h(_, S, R, N, C, 6, u[48]), N = h(N, _, S, R, z, 10, u[49]), R = h(R, N, _, S, H, 15, u[50]), S = h(S, R, N, _, F, 21, u[51]), _ = h(_, S, R, N, X, 6, u[52]), N = h(N, _, S, R, A, 10, u[53]), R = h(R, N, _, S, M, 15, u[54]), S = h(S, R, N, _, B, 21, u[55]), _ = h(_, S, R, N, P, 6, u[56]), N = h(N, _, S, R, O, 10, u[57]), R = h(R, N, _, S, D, 15, u[58]), S = h(S, R, N, _, L, 21, u[59]), _ = h(_, S, R, N, k, 6, u[60]), N = h(N, _, S, R, W, 10, u[61]), R = h(R, N, _, S, w, 15, u[62]), S = h(S, R, N, _, I, 21, u[63]), v[0] = v[0] + _ | 0, v[1] = v[1] + S | 0, v[2] = v[2] + R | 0, v[3] = v[3] + N | 0
                    },
                    _doFinalize: function () {
                        var g = this._data,
                            E = g.words,
                            p = this._nDataBytes * 8,
                            s = g.sigBytes * 8;
                        E[s >>> 5] |= 128 << 24 - s % 32;
                        var f = n.floor(p / 4294967296),
                            v = p;
                        E[(s + 64 >>> 9 << 4) + 15] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360, E[(s + 64 >>> 9 << 4) + 14] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, g.sigBytes = (E.length + 1) * 4, this._process();
                        for (var C = this._hash, B = C.words, w = 0; w < 4; w++) {
                            var A = B[w];
                            B[w] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360
                        }
                        return C
                    },
                    clone: function () {
                        var g = a.clone.call(this);
                        return g._hash = this._hash.clone(), g
                    }
                });

                function y(g, E, p, s, f, v, C) {
                    var B = g + (E & p | ~E & s) + f + C;
                    return (B << v | B >>> 32 - v) + E
                }

                function x(g, E, p, s, f, v, C) {
                    var B = g + (E & s | p & ~s) + f + C;
                    return (B << v | B >>> 32 - v) + E
                }

                function m(g, E, p, s, f, v, C) {
                    var B = g + (E ^ p ^ s) + f + C;
                    return (B << v | B >>> 32 - v) + E
                }

                function h(g, E, p, s, f, v, C) {
                    var B = g + (p ^ (E | ~s)) + f + C;
                    return (B << v | B >>> 32 - v) + E
                }
                o.MD5 = a._createHelper(d), o.HmacMD5 = a._createHmacHelper(d)
            }(Math), r.MD5
        })
    }(Po)), Po.exports
}
var No = {
        exports: {}
    },
    wa;

function mf() {
    return wa || (wa = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.WordArray,
                    i = o.Hasher,
                    a = n.algo,
                    c = [],
                    u = a.SHA1 = i.extend({
                        _doReset: function () {
                            this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function (d, y) {
                            for (var x = this._hash.words, m = x[0], h = x[1], g = x[2], E = x[3], p = x[4], s = 0; s < 80; s++) {
                                if (s < 16) c[s] = d[y + s] | 0;
                                else {
                                    var f = c[s - 3] ^ c[s - 8] ^ c[s - 14] ^ c[s - 16];
                                    c[s] = f << 1 | f >>> 31
                                }
                                var v = (m << 5 | m >>> 27) + p + c[s];
                                s < 20 ? v += (h & g | ~h & E) + 1518500249 : s < 40 ? v += (h ^ g ^ E) + 1859775393 : s < 60 ? v += (h & g | h & E | g & E) - 1894007588 : v += (h ^ g ^ E) - 899497514, p = E, E = g, g = h << 30 | h >>> 2, h = m, m = v
                            }
                            x[0] = x[0] + m | 0, x[1] = x[1] + h | 0, x[2] = x[2] + g | 0, x[3] = x[3] + E | 0, x[4] = x[4] + p | 0
                        },
                        _doFinalize: function () {
                            var d = this._data,
                                y = d.words,
                                x = this._nDataBytes * 8,
                                m = d.sigBytes * 8;
                            return y[m >>> 5] |= 128 << 24 - m % 32, y[(m + 64 >>> 9 << 4) + 14] = Math.floor(x / 4294967296), y[(m + 64 >>> 9 << 4) + 15] = x, d.sigBytes = y.length * 4, this._process(), this._hash
                        },
                        clone: function () {
                            var d = i.clone.call(this);
                            return d._hash = this._hash.clone(), d
                        }
                    });
                n.SHA1 = i._createHelper(u), n.HmacSHA1 = i._createHmacHelper(u)
            }(), r.SHA1
        })
    }(No)), No.exports
}
var Ro = {
        exports: {}
    },
    Fa;

function qi() {
    return Fa || (Fa = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function (n) {
                var o = r,
                    l = o.lib,
                    i = l.WordArray,
                    a = l.Hasher,
                    c = o.algo,
                    u = [],
                    d = [];
                (function () {
                    function m(p) {
                        for (var s = n.sqrt(p), f = 2; f <= s; f++)
                            if (!(p % f)) return !1;
                        return !0
                    }

                    function h(p) {
                        return (p - (p | 0)) * 4294967296 | 0
                    }
                    for (var g = 2, E = 0; E < 64;) m(g) && (E < 8 && (u[E] = h(n.pow(g, 1 / 2))), d[E] = h(n.pow(g, 1 / 3)), E++), g++
                })();
                var y = [],
                    x = c.SHA256 = a.extend({
                        _doReset: function () {
                            this._hash = new i.init(u.slice(0))
                        },
                        _doProcessBlock: function (m, h) {
                            for (var g = this._hash.words, E = g[0], p = g[1], s = g[2], f = g[3], v = g[4], C = g[5], B = g[6], w = g[7], A = 0; A < 64; A++) {
                                if (A < 16) y[A] = m[h + A] | 0;
                                else {
                                    var k = y[A - 15],
                                        F = (k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3,
                                        D = y[A - 2],
                                        z = (D << 15 | D >>> 17) ^ (D << 13 | D >>> 19) ^ D >>> 10;
                                    y[A] = F + y[A - 7] + z + y[A - 16]
                                }
                                var P = v & C ^ ~v & B,
                                    I = E & p ^ E & s ^ p & s,
                                    M = (E << 30 | E >>> 2) ^ (E << 19 | E >>> 13) ^ (E << 10 | E >>> 22),
                                    W = (v << 26 | v >>> 6) ^ (v << 21 | v >>> 11) ^ (v << 7 | v >>> 25),
                                    X = w + W + P + d[A] + y[A],
                                    L = M + I;
                                w = B, B = C, C = v, v = f + X | 0, f = s, s = p, p = E, E = X + L | 0
                            }
                            g[0] = g[0] + E | 0, g[1] = g[1] + p | 0, g[2] = g[2] + s | 0, g[3] = g[3] + f | 0, g[4] = g[4] + v | 0, g[5] = g[5] + C | 0, g[6] = g[6] + B | 0, g[7] = g[7] + w | 0
                        },
                        _doFinalize: function () {
                            var m = this._data,
                                h = m.words,
                                g = this._nDataBytes * 8,
                                E = m.sigBytes * 8;
                            return h[E >>> 5] |= 128 << 24 - E % 32, h[(E + 64 >>> 9 << 4) + 14] = n.floor(g / 4294967296), h[(E + 64 >>> 9 << 4) + 15] = g, m.sigBytes = h.length * 4, this._process(), this._hash
                        },
                        clone: function () {
                            var m = a.clone.call(this);
                            return m._hash = this._hash.clone(), m
                        }
                    });
                o.SHA256 = a._createHelper(x), o.HmacSHA256 = a._createHmacHelper(x)
            }(Math), r.SHA256
        })
    }(Ro)), Ro.exports
}
var Lo = {
        exports: {}
    },
    Aa;

function yd() {
    return Aa || (Aa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), qi())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.WordArray,
                    i = n.algo,
                    a = i.SHA256,
                    c = i.SHA224 = a.extend({
                        _doReset: function () {
                            this._hash = new l.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                        },
                        _doFinalize: function () {
                            var u = a._doFinalize.call(this);
                            return u.sigBytes -= 4, u
                        }
                    });
                n.SHA224 = a._createHelper(c), n.HmacSHA224 = a._createHmacHelper(c)
            }(), r.SHA224
        })
    }(Lo)), Lo.exports
}
var To = {
        exports: {}
    },
    Da;

function yf() {
    return Da || (Da = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), X0())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.Hasher,
                    i = n.x64,
                    a = i.Word,
                    c = i.WordArray,
                    u = n.algo;

                function d() {
                    return a.create.apply(a, arguments)
                }
                var y = [d(1116352408, 3609767458), d(1899447441, 602891725), d(3049323471, 3964484399), d(3921009573, 2173295548), d(961987163, 4081628472), d(1508970993, 3053834265), d(2453635748, 2937671579), d(2870763221, 3664609560), d(3624381080, 2734883394), d(310598401, 1164996542), d(607225278, 1323610764), d(1426881987, 3590304994), d(1925078388, 4068182383), d(2162078206, 991336113), d(2614888103, 633803317), d(3248222580, 3479774868), d(3835390401, 2666613458), d(4022224774, 944711139), d(264347078, 2341262773), d(604807628, 2007800933), d(770255983, 1495990901), d(1249150122, 1856431235), d(1555081692, 3175218132), d(1996064986, 2198950837), d(2554220882, 3999719339), d(2821834349, 766784016), d(2952996808, 2566594879), d(3210313671, 3203337956), d(3336571891, 1034457026), d(3584528711, 2466948901), d(113926993, 3758326383), d(338241895, 168717936), d(666307205, 1188179964), d(773529912, 1546045734), d(1294757372, 1522805485), d(1396182291, 2643833823), d(1695183700, 2343527390), d(1986661051, 1014477480), d(2177026350, 1206759142), d(2456956037, 344077627), d(2730485921, 1290863460), d(2820302411, 3158454273), d(3259730800, 3505952657), d(3345764771, 106217008), d(3516065817, 3606008344), d(3600352804, 1432725776), d(4094571909, 1467031594), d(275423344, 851169720), d(430227734, 3100823752), d(506948616, 1363258195), d(659060556, 3750685593), d(883997877, 3785050280), d(958139571, 3318307427), d(1322822218, 3812723403), d(1537002063, 2003034995), d(1747873779, 3602036899), d(1955562222, 1575990012), d(2024104815, 1125592928), d(2227730452, 2716904306), d(2361852424, 442776044), d(2428436474, 593698344), d(2756734187, 3733110249), d(3204031479, 2999351573), d(3329325298, 3815920427), d(3391569614, 3928383900), d(3515267271, 566280711), d(3940187606, 3454069534), d(4118630271, 4000239992), d(116418474, 1914138554), d(174292421, 2731055270), d(289380356, 3203993006), d(460393269, 320620315), d(685471733, 587496836), d(852142971, 1086792851), d(1017036298, 365543100), d(1126000580, 2618297676), d(1288033470, 3409855158), d(1501505948, 4234509866), d(1607167915, 987167468), d(1816402316, 1246189591)],
                    x = [];
                (function () {
                    for (var h = 0; h < 80; h++) x[h] = d()
                })();
                var m = u.SHA512 = l.extend({
                    _doReset: function () {
                        this._hash = new c.init([new a.init(1779033703, 4089235720), new a.init(3144134277, 2227873595), new a.init(1013904242, 4271175723), new a.init(2773480762, 1595750129), new a.init(1359893119, 2917565137), new a.init(2600822924, 725511199), new a.init(528734635, 4215389547), new a.init(1541459225, 327033209)])
                    },
                    _doProcessBlock: function (h, g) {
                        for (var E = this._hash.words, p = E[0], s = E[1], f = E[2], v = E[3], C = E[4], B = E[5], w = E[6], A = E[7], k = p.high, F = p.low, D = s.high, z = s.low, P = f.high, I = f.low, M = v.high, W = v.low, X = C.high, L = C.low, H = B.high, O = B.low, _ = w.high, S = w.low, R = A.high, N = A.low, J = k, q = F, se = D, V = z, Lr = P, rr = I, Y0 = M, Tr = W, Ke = X, Pe = L, Pn = H, Hr = O, Nn = _, Or = S, Z0 = R, jr = N, qe = 0; qe < 80; qe++) {
                            var Ie, ht, Rn = x[qe];
                            if (qe < 16) ht = Rn.high = h[g + qe * 2] | 0, Ie = Rn.low = h[g + qe * 2 + 1] | 0;
                            else {
                                var Xi = x[qe - 15],
                                    nr = Xi.high,
                                    Ir = Xi.low,
                                    Ef = (nr >>> 1 | Ir << 31) ^ (nr >>> 8 | Ir << 24) ^ nr >>> 7,
                                    Yi = (Ir >>> 1 | nr << 31) ^ (Ir >>> 8 | nr << 24) ^ (Ir >>> 7 | nr << 25),
                                    Zi = x[qe - 2],
                                    or = Zi.high,
                                    Mr = Zi.low,
                                    Cf = (or >>> 19 | Mr << 13) ^ (or << 3 | Mr >>> 29) ^ or >>> 6,
                                    Ji = (Mr >>> 19 | or << 13) ^ (Mr << 3 | or >>> 29) ^ (Mr >>> 6 | or << 26),
                                    bi = x[qe - 7],
                                    Bf = bi.high,
                                    wf = bi.low,
                                    eu = x[qe - 16],
                                    Ff = eu.high,
                                    tu = eu.low;
                                Ie = Yi + wf, ht = Ef + Bf + (Ie >>> 0 < Yi >>> 0 ? 1 : 0), Ie = Ie + Ji, ht = ht + Cf + (Ie >>> 0 < Ji >>> 0 ? 1 : 0), Ie = Ie + tu, ht = ht + Ff + (Ie >>> 0 < tu >>> 0 ? 1 : 0), Rn.high = ht, Rn.low = Ie
                            }
                            var Af = Ke & Pn ^ ~Ke & Nn,
                                ru = Pe & Hr ^ ~Pe & Or,
                                Df = J & se ^ J & Lr ^ se & Lr,
                                _f = q & V ^ q & rr ^ V & rr,
                                kf = (J >>> 28 | q << 4) ^ (J << 30 | q >>> 2) ^ (J << 25 | q >>> 7),
                                nu = (q >>> 28 | J << 4) ^ (q << 30 | J >>> 2) ^ (q << 25 | J >>> 7),
                                Sf = (Ke >>> 14 | Pe << 18) ^ (Ke >>> 18 | Pe << 14) ^ (Ke << 23 | Pe >>> 9),
                                zf = (Pe >>> 14 | Ke << 18) ^ (Pe >>> 18 | Ke << 14) ^ (Pe << 23 | Ke >>> 9),
                                ou = y[qe],
                                Pf = ou.high,
                                lu = ou.low,
                                Ne = jr + zf,
                                mt = Z0 + Sf + (Ne >>> 0 < jr >>> 0 ? 1 : 0),
                                Ne = Ne + ru,
                                mt = mt + Af + (Ne >>> 0 < ru >>> 0 ? 1 : 0),
                                Ne = Ne + lu,
                                mt = mt + Pf + (Ne >>> 0 < lu >>> 0 ? 1 : 0),
                                Ne = Ne + Ie,
                                mt = mt + ht + (Ne >>> 0 < Ie >>> 0 ? 1 : 0),
                                iu = nu + _f,
                                Nf = kf + Df + (iu >>> 0 < nu >>> 0 ? 1 : 0);
                            Z0 = Nn, jr = Or, Nn = Pn, Or = Hr, Pn = Ke, Hr = Pe, Pe = Tr + Ne | 0, Ke = Y0 + mt + (Pe >>> 0 < Tr >>> 0 ? 1 : 0) | 0, Y0 = Lr, Tr = rr, Lr = se, rr = V, se = J, V = q, q = Ne + iu | 0, J = mt + Nf + (q >>> 0 < Ne >>> 0 ? 1 : 0) | 0
                        }
                        F = p.low = F + q, p.high = k + J + (F >>> 0 < q >>> 0 ? 1 : 0), z = s.low = z + V, s.high = D + se + (z >>> 0 < V >>> 0 ? 1 : 0), I = f.low = I + rr, f.high = P + Lr + (I >>> 0 < rr >>> 0 ? 1 : 0), W = v.low = W + Tr, v.high = M + Y0 + (W >>> 0 < Tr >>> 0 ? 1 : 0), L = C.low = L + Pe, C.high = X + Ke + (L >>> 0 < Pe >>> 0 ? 1 : 0), O = B.low = O + Hr, B.high = H + Pn + (O >>> 0 < Hr >>> 0 ? 1 : 0), S = w.low = S + Or, w.high = _ + Nn + (S >>> 0 < Or >>> 0 ? 1 : 0), N = A.low = N + jr, A.high = R + Z0 + (N >>> 0 < jr >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function () {
                        var h = this._data,
                            g = h.words,
                            E = this._nDataBytes * 8,
                            p = h.sigBytes * 8;
                        g[p >>> 5] |= 128 << 24 - p % 32, g[(p + 128 >>> 10 << 5) + 30] = Math.floor(E / 4294967296), g[(p + 128 >>> 10 << 5) + 31] = E, h.sigBytes = g.length * 4, this._process();
                        var s = this._hash.toX32();
                        return s
                    },
                    clone: function () {
                        var h = l.clone.call(this);
                        return h._hash = this._hash.clone(), h
                    },
                    blockSize: 1024 / 32
                });
                n.SHA512 = l._createHelper(m), n.HmacSHA512 = l._createHmacHelper(m)
            }(), r.SHA512
        })
    }(To)), To.exports
}
var Ho = {
        exports: {}
    },
    _a;

function gd() {
    return _a || (_a = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), X0(), yf())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.x64,
                    l = o.Word,
                    i = o.WordArray,
                    a = n.algo,
                    c = a.SHA512,
                    u = a.SHA384 = c.extend({
                        _doReset: function () {
                            this._hash = new i.init([new l.init(3418070365, 3238371032), new l.init(1654270250, 914150663), new l.init(2438529370, 812702999), new l.init(355462360, 4144912697), new l.init(1731405415, 4290775857), new l.init(2394180231, 1750603025), new l.init(3675008525, 1694076839), new l.init(1203062813, 3204075428)])
                        },
                        _doFinalize: function () {
                            var d = c._doFinalize.call(this);
                            return d.sigBytes -= 16, d
                        }
                    });
                n.SHA384 = c._createHelper(u), n.HmacSHA384 = c._createHmacHelper(u)
            }(), r.SHA384
        })
    }(Ho)), Ho.exports
}
var Oo = {
        exports: {}
    },
    ka;

function Ed() {
    return ka || (ka = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), X0())
        })($, function (r) {
            return function (n) {
                var o = r,
                    l = o.lib,
                    i = l.WordArray,
                    a = l.Hasher,
                    c = o.x64,
                    u = c.Word,
                    d = o.algo,
                    y = [],
                    x = [],
                    m = [];
                (function () {
                    for (var E = 1, p = 0, s = 0; s < 24; s++) {
                        y[E + 5 * p] = (s + 1) * (s + 2) / 2 % 64;
                        var f = p % 5,
                            v = (2 * E + 3 * p) % 5;
                        E = f, p = v
                    }
                    for (var E = 0; E < 5; E++)
                        for (var p = 0; p < 5; p++) x[E + 5 * p] = p + (2 * E + 3 * p) % 5 * 5;
                    for (var C = 1, B = 0; B < 24; B++) {
                        for (var w = 0, A = 0, k = 0; k < 7; k++) {
                            if (C & 1) {
                                var F = (1 << k) - 1;
                                F < 32 ? A ^= 1 << F : w ^= 1 << F - 32
                            }
                            C & 128 ? C = C << 1 ^ 113 : C <<= 1
                        }
                        m[B] = u.create(w, A)
                    }
                })();
                var h = [];
                (function () {
                    for (var E = 0; E < 25; E++) h[E] = u.create()
                })();
                var g = d.SHA3 = a.extend({
                    cfg: a.cfg.extend({
                        outputLength: 512
                    }),
                    _doReset: function () {
                        for (var E = this._state = [], p = 0; p < 25; p++) E[p] = new u.init;
                        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                    },
                    _doProcessBlock: function (E, p) {
                        for (var s = this._state, f = this.blockSize / 2, v = 0; v < f; v++) {
                            var C = E[p + 2 * v],
                                B = E[p + 2 * v + 1];
                            C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, B = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
                            var w = s[v];
                            w.high ^= B, w.low ^= C
                        }
                        for (var A = 0; A < 24; A++) {
                            for (var k = 0; k < 5; k++) {
                                for (var F = 0, D = 0, z = 0; z < 5; z++) {
                                    var w = s[k + 5 * z];
                                    F ^= w.high, D ^= w.low
                                }
                                var P = h[k];
                                P.high = F, P.low = D
                            }
                            for (var k = 0; k < 5; k++)
                                for (var I = h[(k + 4) % 5], M = h[(k + 1) % 5], W = M.high, X = M.low, F = I.high ^ (W << 1 | X >>> 31), D = I.low ^ (X << 1 | W >>> 31), z = 0; z < 5; z++) {
                                    var w = s[k + 5 * z];
                                    w.high ^= F, w.low ^= D
                                }
                            for (var L = 1; L < 25; L++) {
                                var F, D, w = s[L],
                                    H = w.high,
                                    O = w.low,
                                    _ = y[L];
                                _ < 32 ? (F = H << _ | O >>> 32 - _, D = O << _ | H >>> 32 - _) : (F = O << _ - 32 | H >>> 64 - _, D = H << _ - 32 | O >>> 64 - _);
                                var S = h[x[L]];
                                S.high = F, S.low = D
                            }
                            var R = h[0],
                                N = s[0];
                            R.high = N.high, R.low = N.low;
                            for (var k = 0; k < 5; k++)
                                for (var z = 0; z < 5; z++) {
                                    var L = k + 5 * z,
                                        w = s[L],
                                        J = h[L],
                                        q = h[(k + 1) % 5 + 5 * z],
                                        se = h[(k + 2) % 5 + 5 * z];
                                    w.high = J.high ^ ~q.high & se.high, w.low = J.low ^ ~q.low & se.low
                                }
                            var w = s[0],
                                V = m[A];
                            w.high ^= V.high, w.low ^= V.low
                        }
                    },
                    _doFinalize: function () {
                        var E = this._data,
                            p = E.words;
                        this._nDataBytes * 8;
                        var s = E.sigBytes * 8,
                            f = this.blockSize * 32;
                        p[s >>> 5] |= 1 << 24 - s % 32, p[(n.ceil((s + 1) / f) * f >>> 5) - 1] |= 128, E.sigBytes = p.length * 4, this._process();
                        for (var v = this._state, C = this.cfg.outputLength / 8, B = C / 8, w = [], A = 0; A < B; A++) {
                            var k = v[A],
                                F = k.high,
                                D = k.low;
                            F = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, D = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, w.push(D), w.push(F)
                        }
                        return new i.init(w, C)
                    },
                    clone: function () {
                        for (var E = a.clone.call(this), p = E._state = this._state.slice(0), s = 0; s < 25; s++) p[s] = p[s].clone();
                        return E
                    }
                });
                o.SHA3 = a._createHelper(g), o.HmacSHA3 = a._createHmacHelper(g)
            }(Math), r.SHA3
        })
    }(Oo)), Oo.exports
}
var jo = {
        exports: {}
    },
    Sa;

function Cd() {
    return Sa || (Sa = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            return function (n) {
                var o = r,
                    l = o.lib,
                    i = l.WordArray,
                    a = l.Hasher,
                    c = o.algo,
                    u = i.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
                    d = i.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
                    y = i.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
                    x = i.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
                    m = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
                    h = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
                    g = c.RIPEMD160 = a.extend({
                        _doReset: function () {
                            this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function (B, w) {
                            for (var A = 0; A < 16; A++) {
                                var k = w + A,
                                    F = B[k];
                                B[k] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360
                            }
                            var D = this._hash.words,
                                z = m.words,
                                P = h.words,
                                I = u.words,
                                M = d.words,
                                W = y.words,
                                X = x.words,
                                L, H, O, _, S, R, N, J, q, se;
                            R = L = D[0], N = H = D[1], J = O = D[2], q = _ = D[3], se = S = D[4];
                            for (var V, A = 0; A < 80; A += 1) V = L + B[w + I[A]] | 0, A < 16 ? V += E(H, O, _) + z[0] : A < 32 ? V += p(H, O, _) + z[1] : A < 48 ? V += s(H, O, _) + z[2] : A < 64 ? V += f(H, O, _) + z[3] : V += v(H, O, _) + z[4], V = V | 0, V = C(V, W[A]), V = V + S | 0, L = S, S = _, _ = C(O, 10), O = H, H = V, V = R + B[w + M[A]] | 0, A < 16 ? V += v(N, J, q) + P[0] : A < 32 ? V += f(N, J, q) + P[1] : A < 48 ? V += s(N, J, q) + P[2] : A < 64 ? V += p(N, J, q) + P[3] : V += E(N, J, q) + P[4], V = V | 0, V = C(V, X[A]), V = V + se | 0, R = se, se = q, q = C(J, 10), J = N, N = V;
                            V = D[1] + O + q | 0, D[1] = D[2] + _ + se | 0, D[2] = D[3] + S + R | 0, D[3] = D[4] + L + N | 0, D[4] = D[0] + H + J | 0, D[0] = V
                        },
                        _doFinalize: function () {
                            var B = this._data,
                                w = B.words,
                                A = this._nDataBytes * 8,
                                k = B.sigBytes * 8;
                            w[k >>> 5] |= 128 << 24 - k % 32, w[(k + 64 >>> 9 << 4) + 14] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, B.sigBytes = (w.length + 1) * 4, this._process();
                            for (var F = this._hash, D = F.words, z = 0; z < 5; z++) {
                                var P = D[z];
                                D[z] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360
                            }
                            return F
                        },
                        clone: function () {
                            var B = a.clone.call(this);
                            return B._hash = this._hash.clone(), B
                        }
                    });

                function E(B, w, A) {
                    return B ^ w ^ A
                }

                function p(B, w, A) {
                    return B & w | ~B & A
                }

                function s(B, w, A) {
                    return (B | ~w) ^ A
                }

                function f(B, w, A) {
                    return B & A | w & ~A
                }

                function v(B, w, A) {
                    return B ^ (w | ~A)
                }

                function C(B, w) {
                    return B << w | B >>> 32 - w
                }
                o.RIPEMD160 = a._createHelper(g), o.HmacRIPEMD160 = a._createHmacHelper(g)
            }(), r.RIPEMD160
        })
    }(jo)), jo.exports
}
var Io = {
        exports: {}
    },
    za;

function Gi() {
    return za || (za = 1, function (e, t) {
        (function (r, n) {
            e.exports = n(K())
        })($, function (r) {
            (function () {
                var n = r,
                    o = n.lib,
                    l = o.Base,
                    i = n.enc,
                    a = i.Utf8,
                    c = n.algo;
                c.HMAC = l.extend({
                    init: function (u, d) {
                        u = this._hasher = new u.init, typeof d == "string" && (d = a.parse(d));
                        var y = u.blockSize,
                            x = y * 4;
                        d.sigBytes > x && (d = u.finalize(d)), d.clamp();
                        for (var m = this._oKey = d.clone(), h = this._iKey = d.clone(), g = m.words, E = h.words, p = 0; p < y; p++) g[p] ^= 1549556828, E[p] ^= 909522486;
                        m.sigBytes = h.sigBytes = x, this.reset()
                    },
                    reset: function () {
                        var u = this._hasher;
                        u.reset(), u.update(this._iKey)
                    },
                    update: function (u) {
                        return this._hasher.update(u), this
                    },
                    finalize: function (u) {
                        var d = this._hasher,
                            y = d.finalize(u);
                        d.reset();
                        var x = d.finalize(this._oKey.clone().concat(y));
                        return x
                    }
                })
            })()
        })
    }(Io)), Io.exports
}
var Mo = {
        exports: {}
    },
    Pa;

function Bd() {
    return Pa || (Pa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), qi(), Gi())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.Base,
                    i = o.WordArray,
                    a = n.algo,
                    c = a.SHA256,
                    u = a.HMAC,
                    d = a.PBKDF2 = l.extend({
                        cfg: l.extend({
                            keySize: 128 / 32,
                            hasher: c,
                            iterations: 25e4
                        }),
                        init: function (y) {
                            this.cfg = this.cfg.extend(y)
                        },
                        compute: function (y, x) {
                            for (var m = this.cfg, h = u.create(m.hasher, y), g = i.create(), E = i.create([1]), p = g.words, s = E.words, f = m.keySize, v = m.iterations; p.length < f;) {
                                var C = h.update(x).finalize(E);
                                h.reset();
                                for (var B = C.words, w = B.length, A = C, k = 1; k < v; k++) {
                                    A = h.finalize(A), h.reset();
                                    for (var F = A.words, D = 0; D < w; D++) B[D] ^= F[D]
                                }
                                g.concat(C), s[0]++
                            }
                            return g.sigBytes = f * 4, g
                        }
                    });
                n.PBKDF2 = function (y, x, m) {
                    return d.create(m).compute(y, x)
                }
            }(), r.PBKDF2
        })
    }(Mo)), Mo.exports
}
var Uo = {
        exports: {}
    },
    Na;

function jt() {
    return Na || (Na = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), mf(), Gi())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.Base,
                    i = o.WordArray,
                    a = n.algo,
                    c = a.MD5,
                    u = a.EvpKDF = l.extend({
                        cfg: l.extend({
                            keySize: 128 / 32,
                            hasher: c,
                            iterations: 1
                        }),
                        init: function (d) {
                            this.cfg = this.cfg.extend(d)
                        },
                        compute: function (d, y) {
                            for (var x, m = this.cfg, h = m.hasher.create(), g = i.create(), E = g.words, p = m.keySize, s = m.iterations; E.length < p;) {
                                x && h.update(x), x = h.update(d).finalize(y), h.reset();
                                for (var f = 1; f < s; f++) x = h.finalize(x), h.reset();
                                g.concat(x)
                            }
                            return g.sigBytes = p * 4, g
                        }
                    });
                n.EvpKDF = function (d, y, x) {
                    return u.create(x).compute(d, y)
                }
            }(), r.EvpKDF
        })
    }(Uo)), Uo.exports
}
var Wo = {
        exports: {}
    },
    Ra;

function pe() {
    return Ra || (Ra = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), jt())
        })($, function (r) {
            r.lib.Cipher || function (n) {
                var o = r,
                    l = o.lib,
                    i = l.Base,
                    a = l.WordArray,
                    c = l.BufferedBlockAlgorithm,
                    u = o.enc;
                u.Utf8;
                var d = u.Base64,
                    y = o.algo,
                    x = y.EvpKDF,
                    m = l.Cipher = c.extend({
                        cfg: i.extend(),
                        createEncryptor: function (F, D) {
                            return this.create(this._ENC_XFORM_MODE, F, D)
                        },
                        createDecryptor: function (F, D) {
                            return this.create(this._DEC_XFORM_MODE, F, D)
                        },
                        init: function (F, D, z) {
                            this.cfg = this.cfg.extend(z), this._xformMode = F, this._key = D, this.reset()
                        },
                        reset: function () {
                            c.reset.call(this), this._doReset()
                        },
                        process: function (F) {
                            return this._append(F), this._process()
                        },
                        finalize: function (F) {
                            F && this._append(F);
                            var D = this._doFinalize();
                            return D
                        },
                        keySize: 128 / 32,
                        ivSize: 128 / 32,
                        _ENC_XFORM_MODE: 1,
                        _DEC_XFORM_MODE: 2,
                        _createHelper: function () {
                            function F(D) {
                                return typeof D == "string" ? k : B
                            }
                            return function (D) {
                                return {
                                    encrypt: function (z, P, I) {
                                        return F(P).encrypt(D, z, P, I)
                                    },
                                    decrypt: function (z, P, I) {
                                        return F(P).decrypt(D, z, P, I)
                                    }
                                }
                            }
                        }()
                    });
                l.StreamCipher = m.extend({
                    _doFinalize: function () {
                        var F = this._process(!0);
                        return F
                    },
                    blockSize: 1
                });
                var h = o.mode = {},
                    g = l.BlockCipherMode = i.extend({
                        createEncryptor: function (F, D) {
                            return this.Encryptor.create(F, D)
                        },
                        createDecryptor: function (F, D) {
                            return this.Decryptor.create(F, D)
                        },
                        init: function (F, D) {
                            this._cipher = F, this._iv = D
                        }
                    }),
                    E = h.CBC = function () {
                        var F = g.extend();
                        F.Encryptor = F.extend({
                            processBlock: function (z, P) {
                                var I = this._cipher,
                                    M = I.blockSize;
                                D.call(this, z, P, M), I.encryptBlock(z, P), this._prevBlock = z.slice(P, P + M)
                            }
                        }), F.Decryptor = F.extend({
                            processBlock: function (z, P) {
                                var I = this._cipher,
                                    M = I.blockSize,
                                    W = z.slice(P, P + M);
                                I.decryptBlock(z, P), D.call(this, z, P, M), this._prevBlock = W
                            }
                        });

                        function D(z, P, I) {
                            var M, W = this._iv;
                            W ? (M = W, this._iv = n) : M = this._prevBlock;
                            for (var X = 0; X < I; X++) z[P + X] ^= M[X]
                        }
                        return F
                    }(),
                    p = o.pad = {},
                    s = p.Pkcs7 = {
                        pad: function (F, D) {
                            for (var z = D * 4, P = z - F.sigBytes % z, I = P << 24 | P << 16 | P << 8 | P, M = [], W = 0; W < P; W += 4) M.push(I);
                            var X = a.create(M, P);
                            F.concat(X)
                        },
                        unpad: function (F) {
                            var D = F.words[F.sigBytes - 1 >>> 2] & 255;
                            F.sigBytes -= D
                        }
                    };
                l.BlockCipher = m.extend({
                    cfg: m.cfg.extend({
                        mode: E,
                        padding: s
                    }),
                    reset: function () {
                        var F;
                        m.reset.call(this);
                        var D = this.cfg,
                            z = D.iv,
                            P = D.mode;
                        this._xformMode == this._ENC_XFORM_MODE ? F = P.createEncryptor : (F = P.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == F ? this._mode.init(this, z && z.words) : (this._mode = F.call(P, this, z && z.words), this._mode.__creator = F)
                    },
                    _doProcessBlock: function (F, D) {
                        this._mode.processBlock(F, D)
                    },
                    _doFinalize: function () {
                        var F, D = this.cfg.padding;
                        return this._xformMode == this._ENC_XFORM_MODE ? (D.pad(this._data, this.blockSize), F = this._process(!0)) : (F = this._process(!0), D.unpad(F)), F
                    },
                    blockSize: 128 / 32
                });
                var f = l.CipherParams = i.extend({
                        init: function (F) {
                            this.mixIn(F)
                        },
                        toString: function (F) {
                            return (F || this.formatter).stringify(this)
                        }
                    }),
                    v = o.format = {},
                    C = v.OpenSSL = {
                        stringify: function (F) {
                            var D, z = F.ciphertext,
                                P = F.salt;
                            return P ? D = a.create([1398893684, 1701076831]).concat(P).concat(z) : D = z, D.toString(d)
                        },
                        parse: function (F) {
                            var D, z = d.parse(F),
                                P = z.words;
                            return P[0] == 1398893684 && P[1] == 1701076831 && (D = a.create(P.slice(2, 4)), P.splice(0, 4), z.sigBytes -= 16), f.create({
                                ciphertext: z,
                                salt: D
                            })
                        }
                    },
                    B = l.SerializableCipher = i.extend({
                        cfg: i.extend({
                            format: C
                        }),
                        encrypt: function (F, D, z, P) {
                            P = this.cfg.extend(P);
                            var I = F.createEncryptor(z, P),
                                M = I.finalize(D),
                                W = I.cfg;
                            return f.create({
                                ciphertext: M,
                                key: z,
                                iv: W.iv,
                                algorithm: F,
                                mode: W.mode,
                                padding: W.padding,
                                blockSize: F.blockSize,
                                formatter: P.format
                            })
                        },
                        decrypt: function (F, D, z, P) {
                            P = this.cfg.extend(P), D = this._parse(D, P.format);
                            var I = F.createDecryptor(z, P).finalize(D.ciphertext);
                            return I
                        },
                        _parse: function (F, D) {
                            return typeof F == "string" ? D.parse(F, this) : F
                        }
                    }),
                    w = o.kdf = {},
                    A = w.OpenSSL = {
                        execute: function (F, D, z, P, I) {
                            if (P || (P = a.random(64 / 8)), I) var M = x.create({
                                keySize: D + z,
                                hasher: I
                            }).compute(F, P);
                            else var M = x.create({
                                keySize: D + z
                            }).compute(F, P);
                            var W = a.create(M.words.slice(D), z * 4);
                            return M.sigBytes = D * 4, f.create({
                                key: M,
                                iv: W,
                                salt: P
                            })
                        }
                    },
                    k = l.PasswordBasedCipher = B.extend({
                        cfg: B.cfg.extend({
                            kdf: A
                        }),
                        encrypt: function (F, D, z, P) {
                            P = this.cfg.extend(P);
                            var I = P.kdf.execute(z, F.keySize, F.ivSize, P.salt, P.hasher);
                            P.iv = I.iv;
                            var M = B.encrypt.call(this, F, D, I.key, P);
                            return M.mixIn(I), M
                        },
                        decrypt: function (F, D, z, P) {
                            P = this.cfg.extend(P), D = this._parse(D, P.format);
                            var I = P.kdf.execute(z, F.keySize, F.ivSize, D.salt, P.hasher);
                            P.iv = I.iv;
                            var M = B.decrypt.call(this, F, D, I.key, P);
                            return M
                        }
                    })
            }()
        })
    }(Wo)), Wo.exports
}
var $o = {
        exports: {}
    },
    La;

function wd() {
    return La || (La = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.mode.CFB = function () {
                var n = r.lib.BlockCipherMode.extend();
                n.Encryptor = n.extend({
                    processBlock: function (l, i) {
                        var a = this._cipher,
                            c = a.blockSize;
                        o.call(this, l, i, c, a), this._prevBlock = l.slice(i, i + c)
                    }
                }), n.Decryptor = n.extend({
                    processBlock: function (l, i) {
                        var a = this._cipher,
                            c = a.blockSize,
                            u = l.slice(i, i + c);
                        o.call(this, l, i, c, a), this._prevBlock = u
                    }
                });

                function o(l, i, a, c) {
                    var u, d = this._iv;
                    d ? (u = d.slice(0), this._iv = void 0) : u = this._prevBlock, c.encryptBlock(u, 0);
                    for (var y = 0; y < a; y++) l[i + y] ^= u[y]
                }
                return n
            }(), r.mode.CFB
        })
    }($o)), $o.exports
}
var Vo = {
        exports: {}
    },
    Ta;

function Fd() {
    return Ta || (Ta = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.mode.CTR = function () {
                var n = r.lib.BlockCipherMode.extend(),
                    o = n.Encryptor = n.extend({
                        processBlock: function (l, i) {
                            var a = this._cipher,
                                c = a.blockSize,
                                u = this._iv,
                                d = this._counter;
                            u && (d = this._counter = u.slice(0), this._iv = void 0);
                            var y = d.slice(0);
                            a.encryptBlock(y, 0), d[c - 1] = d[c - 1] + 1 | 0;
                            for (var x = 0; x < c; x++) l[i + x] ^= y[x]
                        }
                    });
                return n.Decryptor = o, n
            }(), r.mode.CTR
        })
    }(Vo)), Vo.exports
}
var Qo = {
        exports: {}
    },
    Ha;

function Ad() {
    return Ha || (Ha = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.mode.CTRGladman = function () {
                var n = r.lib.BlockCipherMode.extend();

                function o(a) {
                    if ((a >> 24 & 255) === 255) {
                        var c = a >> 16 & 255,
                            u = a >> 8 & 255,
                            d = a & 255;
                        c === 255 ? (c = 0, u === 255 ? (u = 0, d === 255 ? d = 0 : ++d) : ++u) : ++c, a = 0, a += c << 16, a += u << 8, a += d
                    } else a += 1 << 24;
                    return a
                }

                function l(a) {
                    return (a[0] = o(a[0])) === 0 && (a[1] = o(a[1])), a
                }
                var i = n.Encryptor = n.extend({
                    processBlock: function (a, c) {
                        var u = this._cipher,
                            d = u.blockSize,
                            y = this._iv,
                            x = this._counter;
                        y && (x = this._counter = y.slice(0), this._iv = void 0), l(x);
                        var m = x.slice(0);
                        u.encryptBlock(m, 0);
                        for (var h = 0; h < d; h++) a[c + h] ^= m[h]
                    }
                });
                return n.Decryptor = i, n
            }(), r.mode.CTRGladman
        })
    }(Qo)), Qo.exports
}
var Ko = {
        exports: {}
    },
    Oa;

function Dd() {
    return Oa || (Oa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.mode.OFB = function () {
                var n = r.lib.BlockCipherMode.extend(),
                    o = n.Encryptor = n.extend({
                        processBlock: function (l, i) {
                            var a = this._cipher,
                                c = a.blockSize,
                                u = this._iv,
                                d = this._keystream;
                            u && (d = this._keystream = u.slice(0), this._iv = void 0), a.encryptBlock(d, 0);
                            for (var y = 0; y < c; y++) l[i + y] ^= d[y]
                        }
                    });
                return n.Decryptor = o, n
            }(), r.mode.OFB
        })
    }(Ko)), Ko.exports
}
var qo = {
        exports: {}
    },
    ja;

function _d() {
    return ja || (ja = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.mode.ECB = function () {
                var n = r.lib.BlockCipherMode.extend();
                return n.Encryptor = n.extend({
                    processBlock: function (o, l) {
                        this._cipher.encryptBlock(o, l)
                    }
                }), n.Decryptor = n.extend({
                    processBlock: function (o, l) {
                        this._cipher.decryptBlock(o, l)
                    }
                }), n
            }(), r.mode.ECB
        })
    }(qo)), qo.exports
}
var Go = {
        exports: {}
    },
    Ia;

function kd() {
    return Ia || (Ia = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.pad.AnsiX923 = {
                pad: function (n, o) {
                    var l = n.sigBytes,
                        i = o * 4,
                        a = i - l % i,
                        c = l + a - 1;
                    n.clamp(), n.words[c >>> 2] |= a << 24 - c % 4 * 8, n.sigBytes += a
                },
                unpad: function (n) {
                    var o = n.words[n.sigBytes - 1 >>> 2] & 255;
                    n.sigBytes -= o
                }
            }, r.pad.Ansix923
        })
    }(Go)), Go.exports
}
var Xo = {
        exports: {}
    },
    Ma;

function Sd() {
    return Ma || (Ma = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.pad.Iso10126 = {
                pad: function (n, o) {
                    var l = o * 4,
                        i = l - n.sigBytes % l;
                    n.concat(r.lib.WordArray.random(i - 1)).concat(r.lib.WordArray.create([i << 24], 1))
                },
                unpad: function (n) {
                    var o = n.words[n.sigBytes - 1 >>> 2] & 255;
                    n.sigBytes -= o
                }
            }, r.pad.Iso10126
        })
    }(Xo)), Xo.exports
}
var Yo = {
        exports: {}
    },
    Ua;

function zd() {
    return Ua || (Ua = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.pad.Iso97971 = {
                pad: function (n, o) {
                    n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, o)
                },
                unpad: function (n) {
                    r.pad.ZeroPadding.unpad(n), n.sigBytes--
                }
            }, r.pad.Iso97971
        })
    }(Yo)), Yo.exports
}
var Zo = {
        exports: {}
    },
    Wa;

function Pd() {
    return Wa || (Wa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.pad.ZeroPadding = {
                pad: function (n, o) {
                    var l = o * 4;
                    n.clamp(), n.sigBytes += l - (n.sigBytes % l || l)
                },
                unpad: function (n) {
                    for (var o = n.words, l = n.sigBytes - 1, l = n.sigBytes - 1; l >= 0; l--)
                        if (o[l >>> 2] >>> 24 - l % 4 * 8 & 255) {
                            n.sigBytes = l + 1;
                            break
                        }
                }
            }, r.pad.ZeroPadding
        })
    }(Zo)), Zo.exports
}
var Jo = {
        exports: {}
    },
    $a;

function Nd() {
    return $a || ($a = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return r.pad.NoPadding = {
                pad: function () {},
                unpad: function () {}
            }, r.pad.NoPadding
        })
    }(Jo)), Jo.exports
}
var bo = {
        exports: {}
    },
    Va;

function Rd() {
    return Va || (Va = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), pe())
        })($, function (r) {
            return function (n) {
                var o = r,
                    l = o.lib,
                    i = l.CipherParams,
                    a = o.enc,
                    c = a.Hex,
                    u = o.format;
                u.Hex = {
                    stringify: function (d) {
                        return d.ciphertext.toString(c)
                    },
                    parse: function (d) {
                        var y = c.parse(d);
                        return i.create({
                            ciphertext: y
                        })
                    }
                }
            }(), r.format.Hex
        })
    }(bo)), bo.exports
}
var el = {
        exports: {}
    },
    Qa;

function Ld() {
    return Qa || (Qa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), er(), tr(), jt(), pe())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.BlockCipher,
                    i = n.algo,
                    a = [],
                    c = [],
                    u = [],
                    d = [],
                    y = [],
                    x = [],
                    m = [],
                    h = [],
                    g = [],
                    E = [];
                (function () {
                    for (var f = [], v = 0; v < 256; v++) v < 128 ? f[v] = v << 1 : f[v] = v << 1 ^ 283;
                    for (var C = 0, B = 0, v = 0; v < 256; v++) {
                        var w = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4;
                        w = w >>> 8 ^ w & 255 ^ 99, a[C] = w, c[w] = C;
                        var A = f[C],
                            k = f[A],
                            F = f[k],
                            D = f[w] * 257 ^ w * 16843008;
                        u[C] = D << 24 | D >>> 8, d[C] = D << 16 | D >>> 16, y[C] = D << 8 | D >>> 24, x[C] = D;
                        var D = F * 16843009 ^ k * 65537 ^ A * 257 ^ C * 16843008;
                        m[w] = D << 24 | D >>> 8, h[w] = D << 16 | D >>> 16, g[w] = D << 8 | D >>> 24, E[w] = D, C ? (C = A ^ f[f[f[F ^ A]]], B ^= f[f[B]]) : C = B = 1
                    }
                })();
                var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    s = i.AES = l.extend({
                        _doReset: function () {
                            var f;
                            if (!(this._nRounds && this._keyPriorReset === this._key)) {
                                for (var v = this._keyPriorReset = this._key, C = v.words, B = v.sigBytes / 4, w = this._nRounds = B + 6, A = (w + 1) * 4, k = this._keySchedule = [], F = 0; F < A; F++) F < B ? k[F] = C[F] : (f = k[F - 1], F % B ? B > 6 && F % B == 4 && (f = a[f >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[f & 255]) : (f = f << 8 | f >>> 24, f = a[f >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[f & 255], f ^= p[F / B | 0] << 24), k[F] = k[F - B] ^ f);
                                for (var D = this._invKeySchedule = [], z = 0; z < A; z++) {
                                    var F = A - z;
                                    if (z % 4) var f = k[F];
                                    else var f = k[F - 4];
                                    z < 4 || F <= 4 ? D[z] = f : D[z] = m[a[f >>> 24]] ^ h[a[f >>> 16 & 255]] ^ g[a[f >>> 8 & 255]] ^ E[a[f & 255]]
                                }
                            }
                        },
                        encryptBlock: function (f, v) {
                            this._doCryptBlock(f, v, this._keySchedule, u, d, y, x, a)
                        },
                        decryptBlock: function (f, v) {
                            var C = f[v + 1];
                            f[v + 1] = f[v + 3], f[v + 3] = C, this._doCryptBlock(f, v, this._invKeySchedule, m, h, g, E, c);
                            var C = f[v + 1];
                            f[v + 1] = f[v + 3], f[v + 3] = C
                        },
                        _doCryptBlock: function (f, v, C, B, w, A, k, F) {
                            for (var D = this._nRounds, z = f[v] ^ C[0], P = f[v + 1] ^ C[1], I = f[v + 2] ^ C[2], M = f[v + 3] ^ C[3], W = 4, X = 1; X < D; X++) {
                                var L = B[z >>> 24] ^ w[P >>> 16 & 255] ^ A[I >>> 8 & 255] ^ k[M & 255] ^ C[W++],
                                    H = B[P >>> 24] ^ w[I >>> 16 & 255] ^ A[M >>> 8 & 255] ^ k[z & 255] ^ C[W++],
                                    O = B[I >>> 24] ^ w[M >>> 16 & 255] ^ A[z >>> 8 & 255] ^ k[P & 255] ^ C[W++],
                                    _ = B[M >>> 24] ^ w[z >>> 16 & 255] ^ A[P >>> 8 & 255] ^ k[I & 255] ^ C[W++];
                                z = L, P = H, I = O, M = _
                            }
                            var L = (F[z >>> 24] << 24 | F[P >>> 16 & 255] << 16 | F[I >>> 8 & 255] << 8 | F[M & 255]) ^ C[W++],
                                H = (F[P >>> 24] << 24 | F[I >>> 16 & 255] << 16 | F[M >>> 8 & 255] << 8 | F[z & 255]) ^ C[W++],
                                O = (F[I >>> 24] << 24 | F[M >>> 16 & 255] << 16 | F[z >>> 8 & 255] << 8 | F[P & 255]) ^ C[W++],
                                _ = (F[M >>> 24] << 24 | F[z >>> 16 & 255] << 16 | F[P >>> 8 & 255] << 8 | F[I & 255]) ^ C[W++];
                            f[v] = L, f[v + 1] = H, f[v + 2] = O, f[v + 3] = _
                        },
                        keySize: 256 / 32
                    });
                n.AES = l._createHelper(s)
            }(), r.AES
        })
    }(el)), el.exports
}
var tl = {
        exports: {}
    },
    Ka;

function Td() {
    return Ka || (Ka = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), er(), tr(), jt(), pe())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.WordArray,
                    i = o.BlockCipher,
                    a = n.algo,
                    c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
                    u = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
                    d = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                    y = [{
                        0: 8421888,
                        268435456: 32768,
                        536870912: 8421378,
                        805306368: 2,
                        1073741824: 512,
                        1342177280: 8421890,
                        1610612736: 8389122,
                        1879048192: 8388608,
                        2147483648: 514,
                        2415919104: 8389120,
                        2684354560: 33280,
                        2952790016: 8421376,
                        3221225472: 32770,
                        3489660928: 8388610,
                        3758096384: 0,
                        4026531840: 33282,
                        134217728: 0,
                        402653184: 8421890,
                        671088640: 33282,
                        939524096: 32768,
                        1207959552: 8421888,
                        1476395008: 512,
                        1744830464: 8421378,
                        2013265920: 2,
                        2281701376: 8389120,
                        2550136832: 33280,
                        2818572288: 8421376,
                        3087007744: 8389122,
                        3355443200: 8388610,
                        3623878656: 32770,
                        3892314112: 514,
                        4160749568: 8388608,
                        1: 32768,
                        268435457: 2,
                        536870913: 8421888,
                        805306369: 8388608,
                        1073741825: 8421378,
                        1342177281: 33280,
                        1610612737: 512,
                        1879048193: 8389122,
                        2147483649: 8421890,
                        2415919105: 8421376,
                        2684354561: 8388610,
                        2952790017: 33282,
                        3221225473: 514,
                        3489660929: 8389120,
                        3758096385: 32770,
                        4026531841: 0,
                        134217729: 8421890,
                        402653185: 8421376,
                        671088641: 8388608,
                        939524097: 512,
                        1207959553: 32768,
                        1476395009: 8388610,
                        1744830465: 2,
                        2013265921: 33282,
                        2281701377: 32770,
                        2550136833: 8389122,
                        2818572289: 514,
                        3087007745: 8421888,
                        3355443201: 8389120,
                        3623878657: 0,
                        3892314113: 33280,
                        4160749569: 8421378
                    }, {
                        0: 1074282512,
                        16777216: 16384,
                        33554432: 524288,
                        50331648: 1074266128,
                        67108864: 1073741840,
                        83886080: 1074282496,
                        100663296: 1073758208,
                        117440512: 16,
                        134217728: 540672,
                        150994944: 1073758224,
                        167772160: 1073741824,
                        184549376: 540688,
                        201326592: 524304,
                        218103808: 0,
                        234881024: 16400,
                        251658240: 1074266112,
                        8388608: 1073758208,
                        25165824: 540688,
                        41943040: 16,
                        58720256: 1073758224,
                        75497472: 1074282512,
                        92274688: 1073741824,
                        109051904: 524288,
                        125829120: 1074266128,
                        142606336: 524304,
                        159383552: 0,
                        176160768: 16384,
                        192937984: 1074266112,
                        209715200: 1073741840,
                        226492416: 540672,
                        243269632: 1074282496,
                        260046848: 16400,
                        268435456: 0,
                        285212672: 1074266128,
                        301989888: 1073758224,
                        318767104: 1074282496,
                        335544320: 1074266112,
                        352321536: 16,
                        369098752: 540688,
                        385875968: 16384,
                        402653184: 16400,
                        419430400: 524288,
                        436207616: 524304,
                        452984832: 1073741840,
                        469762048: 540672,
                        486539264: 1073758208,
                        503316480: 1073741824,
                        520093696: 1074282512,
                        276824064: 540688,
                        293601280: 524288,
                        310378496: 1074266112,
                        327155712: 16384,
                        343932928: 1073758208,
                        360710144: 1074282512,
                        377487360: 16,
                        394264576: 1073741824,
                        411041792: 1074282496,
                        427819008: 1073741840,
                        444596224: 1073758224,
                        461373440: 524304,
                        478150656: 0,
                        494927872: 16400,
                        511705088: 1074266128,
                        528482304: 540672
                    }, {
                        0: 260,
                        1048576: 0,
                        2097152: 67109120,
                        3145728: 65796,
                        4194304: 65540,
                        5242880: 67108868,
                        6291456: 67174660,
                        7340032: 67174400,
                        8388608: 67108864,
                        9437184: 67174656,
                        10485760: 65792,
                        11534336: 67174404,
                        12582912: 67109124,
                        13631488: 65536,
                        14680064: 4,
                        15728640: 256,
                        524288: 67174656,
                        1572864: 67174404,
                        2621440: 0,
                        3670016: 67109120,
                        4718592: 67108868,
                        5767168: 65536,
                        6815744: 65540,
                        7864320: 260,
                        8912896: 4,
                        9961472: 256,
                        11010048: 67174400,
                        12058624: 65796,
                        13107200: 65792,
                        14155776: 67109124,
                        15204352: 67174660,
                        16252928: 67108864,
                        16777216: 67174656,
                        17825792: 65540,
                        18874368: 65536,
                        19922944: 67109120,
                        20971520: 256,
                        22020096: 67174660,
                        23068672: 67108868,
                        24117248: 0,
                        25165824: 67109124,
                        26214400: 67108864,
                        27262976: 4,
                        28311552: 65792,
                        29360128: 67174400,
                        30408704: 260,
                        31457280: 65796,
                        32505856: 67174404,
                        17301504: 67108864,
                        18350080: 260,
                        19398656: 67174656,
                        20447232: 0,
                        21495808: 65540,
                        22544384: 67109120,
                        23592960: 256,
                        24641536: 67174404,
                        25690112: 65536,
                        26738688: 67174660,
                        27787264: 65796,
                        28835840: 67108868,
                        29884416: 67109124,
                        30932992: 67174400,
                        31981568: 4,
                        33030144: 65792
                    }, {
                        0: 2151682048,
                        65536: 2147487808,
                        131072: 4198464,
                        196608: 2151677952,
                        262144: 0,
                        327680: 4198400,
                        393216: 2147483712,
                        458752: 4194368,
                        524288: 2147483648,
                        589824: 4194304,
                        655360: 64,
                        720896: 2147487744,
                        786432: 2151678016,
                        851968: 4160,
                        917504: 4096,
                        983040: 2151682112,
                        32768: 2147487808,
                        98304: 64,
                        163840: 2151678016,
                        229376: 2147487744,
                        294912: 4198400,
                        360448: 2151682112,
                        425984: 0,
                        491520: 2151677952,
                        557056: 4096,
                        622592: 2151682048,
                        688128: 4194304,
                        753664: 4160,
                        819200: 2147483648,
                        884736: 4194368,
                        950272: 4198464,
                        1015808: 2147483712,
                        1048576: 4194368,
                        1114112: 4198400,
                        1179648: 2147483712,
                        1245184: 0,
                        1310720: 4160,
                        1376256: 2151678016,
                        1441792: 2151682048,
                        1507328: 2147487808,
                        1572864: 2151682112,
                        1638400: 2147483648,
                        1703936: 2151677952,
                        1769472: 4198464,
                        1835008: 2147487744,
                        1900544: 4194304,
                        1966080: 64,
                        2031616: 4096,
                        1081344: 2151677952,
                        1146880: 2151682112,
                        1212416: 0,
                        1277952: 4198400,
                        1343488: 4194368,
                        1409024: 2147483648,
                        1474560: 2147487808,
                        1540096: 64,
                        1605632: 2147483712,
                        1671168: 4096,
                        1736704: 2147487744,
                        1802240: 2151678016,
                        1867776: 4160,
                        1933312: 2151682048,
                        1998848: 4194304,
                        2064384: 4198464
                    }, {
                        0: 128,
                        4096: 17039360,
                        8192: 262144,
                        12288: 536870912,
                        16384: 537133184,
                        20480: 16777344,
                        24576: 553648256,
                        28672: 262272,
                        32768: 16777216,
                        36864: 537133056,
                        40960: 536871040,
                        45056: 553910400,
                        49152: 553910272,
                        53248: 0,
                        57344: 17039488,
                        61440: 553648128,
                        2048: 17039488,
                        6144: 553648256,
                        10240: 128,
                        14336: 17039360,
                        18432: 262144,
                        22528: 537133184,
                        26624: 553910272,
                        30720: 536870912,
                        34816: 537133056,
                        38912: 0,
                        43008: 553910400,
                        47104: 16777344,
                        51200: 536871040,
                        55296: 553648128,
                        59392: 16777216,
                        63488: 262272,
                        65536: 262144,
                        69632: 128,
                        73728: 536870912,
                        77824: 553648256,
                        81920: 16777344,
                        86016: 553910272,
                        90112: 537133184,
                        94208: 16777216,
                        98304: 553910400,
                        102400: 553648128,
                        106496: 17039360,
                        110592: 537133056,
                        114688: 262272,
                        118784: 536871040,
                        122880: 0,
                        126976: 17039488,
                        67584: 553648256,
                        71680: 16777216,
                        75776: 17039360,
                        79872: 537133184,
                        83968: 536870912,
                        88064: 17039488,
                        92160: 128,
                        96256: 553910272,
                        100352: 262272,
                        104448: 553910400,
                        108544: 0,
                        112640: 553648128,
                        116736: 16777344,
                        120832: 262144,
                        124928: 537133056,
                        129024: 536871040
                    }, {
                        0: 268435464,
                        256: 8192,
                        512: 270532608,
                        768: 270540808,
                        1024: 268443648,
                        1280: 2097152,
                        1536: 2097160,
                        1792: 268435456,
                        2048: 0,
                        2304: 268443656,
                        2560: 2105344,
                        2816: 8,
                        3072: 270532616,
                        3328: 2105352,
                        3584: 8200,
                        3840: 270540800,
                        128: 270532608,
                        384: 270540808,
                        640: 8,
                        896: 2097152,
                        1152: 2105352,
                        1408: 268435464,
                        1664: 268443648,
                        1920: 8200,
                        2176: 2097160,
                        2432: 8192,
                        2688: 268443656,
                        2944: 270532616,
                        3200: 0,
                        3456: 270540800,
                        3712: 2105344,
                        3968: 268435456,
                        4096: 268443648,
                        4352: 270532616,
                        4608: 270540808,
                        4864: 8200,
                        5120: 2097152,
                        5376: 268435456,
                        5632: 268435464,
                        5888: 2105344,
                        6144: 2105352,
                        6400: 0,
                        6656: 8,
                        6912: 270532608,
                        7168: 8192,
                        7424: 268443656,
                        7680: 270540800,
                        7936: 2097160,
                        4224: 8,
                        4480: 2105344,
                        4736: 2097152,
                        4992: 268435464,
                        5248: 268443648,
                        5504: 8200,
                        5760: 270540808,
                        6016: 270532608,
                        6272: 270540800,
                        6528: 270532616,
                        6784: 8192,
                        7040: 2105352,
                        7296: 2097160,
                        7552: 0,
                        7808: 268435456,
                        8064: 268443656
                    }, {
                        0: 1048576,
                        16: 33555457,
                        32: 1024,
                        48: 1049601,
                        64: 34604033,
                        80: 0,
                        96: 1,
                        112: 34603009,
                        128: 33555456,
                        144: 1048577,
                        160: 33554433,
                        176: 34604032,
                        192: 34603008,
                        208: 1025,
                        224: 1049600,
                        240: 33554432,
                        8: 34603009,
                        24: 0,
                        40: 33555457,
                        56: 34604032,
                        72: 1048576,
                        88: 33554433,
                        104: 33554432,
                        120: 1025,
                        136: 1049601,
                        152: 33555456,
                        168: 34603008,
                        184: 1048577,
                        200: 1024,
                        216: 34604033,
                        232: 1,
                        248: 1049600,
                        256: 33554432,
                        272: 1048576,
                        288: 33555457,
                        304: 34603009,
                        320: 1048577,
                        336: 33555456,
                        352: 34604032,
                        368: 1049601,
                        384: 1025,
                        400: 34604033,
                        416: 1049600,
                        432: 1,
                        448: 0,
                        464: 34603008,
                        480: 33554433,
                        496: 1024,
                        264: 1049600,
                        280: 33555457,
                        296: 34603009,
                        312: 1,
                        328: 33554432,
                        344: 1048576,
                        360: 1025,
                        376: 34604032,
                        392: 33554433,
                        408: 34603008,
                        424: 0,
                        440: 34604033,
                        456: 1049601,
                        472: 1024,
                        488: 33555456,
                        504: 1048577
                    }, {
                        0: 134219808,
                        1: 131072,
                        2: 134217728,
                        3: 32,
                        4: 131104,
                        5: 134350880,
                        6: 134350848,
                        7: 2048,
                        8: 134348800,
                        9: 134219776,
                        10: 133120,
                        11: 134348832,
                        12: 2080,
                        13: 0,
                        14: 134217760,
                        15: 133152,
                        2147483648: 2048,
                        2147483649: 134350880,
                        2147483650: 134219808,
                        2147483651: 134217728,
                        2147483652: 134348800,
                        2147483653: 133120,
                        2147483654: 133152,
                        2147483655: 32,
                        2147483656: 134217760,
                        2147483657: 2080,
                        2147483658: 131104,
                        2147483659: 134350848,
                        2147483660: 0,
                        2147483661: 134348832,
                        2147483662: 134219776,
                        2147483663: 131072,
                        16: 133152,
                        17: 134350848,
                        18: 32,
                        19: 2048,
                        20: 134219776,
                        21: 134217760,
                        22: 134348832,
                        23: 131072,
                        24: 0,
                        25: 131104,
                        26: 134348800,
                        27: 134219808,
                        28: 134350880,
                        29: 133120,
                        30: 2080,
                        31: 134217728,
                        2147483664: 131072,
                        2147483665: 2048,
                        2147483666: 134348832,
                        2147483667: 133152,
                        2147483668: 32,
                        2147483669: 134348800,
                        2147483670: 134217728,
                        2147483671: 134219808,
                        2147483672: 134350880,
                        2147483673: 134217760,
                        2147483674: 134219776,
                        2147483675: 0,
                        2147483676: 133120,
                        2147483677: 2080,
                        2147483678: 131104,
                        2147483679: 134350848
                    }],
                    x = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
                    m = a.DES = i.extend({
                        _doReset: function () {
                            for (var p = this._key, s = p.words, f = [], v = 0; v < 56; v++) {
                                var C = c[v] - 1;
                                f[v] = s[C >>> 5] >>> 31 - C % 32 & 1
                            }
                            for (var B = this._subKeys = [], w = 0; w < 16; w++) {
                                for (var A = B[w] = [], k = d[w], v = 0; v < 24; v++) A[v / 6 | 0] |= f[(u[v] - 1 + k) % 28] << 31 - v % 6, A[4 + (v / 6 | 0)] |= f[28 + (u[v + 24] - 1 + k) % 28] << 31 - v % 6;
                                A[0] = A[0] << 1 | A[0] >>> 31;
                                for (var v = 1; v < 7; v++) A[v] = A[v] >>> (v - 1) * 4 + 3;
                                A[7] = A[7] << 5 | A[7] >>> 27
                            }
                            for (var F = this._invSubKeys = [], v = 0; v < 16; v++) F[v] = B[15 - v]
                        },
                        encryptBlock: function (p, s) {
                            this._doCryptBlock(p, s, this._subKeys)
                        },
                        decryptBlock: function (p, s) {
                            this._doCryptBlock(p, s, this._invSubKeys)
                        },
                        _doCryptBlock: function (p, s, f) {
                            this._lBlock = p[s], this._rBlock = p[s + 1], h.call(this, 4, 252645135), h.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), h.call(this, 1, 1431655765);
                            for (var v = 0; v < 16; v++) {
                                for (var C = f[v], B = this._lBlock, w = this._rBlock, A = 0, k = 0; k < 8; k++) A |= y[k][((w ^ C[k]) & x[k]) >>> 0];
                                this._lBlock = w, this._rBlock = B ^ A
                            }
                            var F = this._lBlock;
                            this._lBlock = this._rBlock, this._rBlock = F, h.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), h.call(this, 16, 65535), h.call(this, 4, 252645135), p[s] = this._lBlock, p[s + 1] = this._rBlock
                        },
                        keySize: 64 / 32,
                        ivSize: 64 / 32,
                        blockSize: 64 / 32
                    });

                function h(p, s) {
                    var f = (this._lBlock >>> p ^ this._rBlock) & s;
                    this._rBlock ^= f, this._lBlock ^= f << p
                }

                function g(p, s) {
                    var f = (this._rBlock >>> p ^ this._lBlock) & s;
                    this._lBlock ^= f, this._rBlock ^= f << p
                }
                n.DES = i._createHelper(m);
                var E = a.TripleDES = i.extend({
                    _doReset: function () {
                        var p = this._key,
                            s = p.words;
                        if (s.length !== 2 && s.length !== 4 && s.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                        var f = s.slice(0, 2),
                            v = s.length < 4 ? s.slice(0, 2) : s.slice(2, 4),
                            C = s.length < 6 ? s.slice(0, 2) : s.slice(4, 6);
                        this._des1 = m.createEncryptor(l.create(f)), this._des2 = m.createEncryptor(l.create(v)), this._des3 = m.createEncryptor(l.create(C))
                    },
                    encryptBlock: function (p, s) {
                        this._des1.encryptBlock(p, s), this._des2.decryptBlock(p, s), this._des3.encryptBlock(p, s)
                    },
                    decryptBlock: function (p, s) {
                        this._des3.decryptBlock(p, s), this._des2.encryptBlock(p, s), this._des1.decryptBlock(p, s)
                    },
                    keySize: 192 / 32,
                    ivSize: 64 / 32,
                    blockSize: 64 / 32
                });
                n.TripleDES = i._createHelper(E)
            }(), r.TripleDES
        })
    }(tl)), tl.exports
}
var rl = {
        exports: {}
    },
    qa;

function Hd() {
    return qa || (qa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), er(), tr(), jt(), pe())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.StreamCipher,
                    i = n.algo,
                    a = i.RC4 = l.extend({
                        _doReset: function () {
                            for (var d = this._key, y = d.words, x = d.sigBytes, m = this._S = [], h = 0; h < 256; h++) m[h] = h;
                            for (var h = 0, g = 0; h < 256; h++) {
                                var E = h % x,
                                    p = y[E >>> 2] >>> 24 - E % 4 * 8 & 255;
                                g = (g + m[h] + p) % 256;
                                var s = m[h];
                                m[h] = m[g], m[g] = s
                            }
                            this._i = this._j = 0
                        },
                        _doProcessBlock: function (d, y) {
                            d[y] ^= c.call(this)
                        },
                        keySize: 256 / 32,
                        ivSize: 0
                    });

                function c() {
                    for (var d = this._S, y = this._i, x = this._j, m = 0, h = 0; h < 4; h++) {
                        y = (y + 1) % 256, x = (x + d[y]) % 256;
                        var g = d[y];
                        d[y] = d[x], d[x] = g, m |= d[(d[y] + d[x]) % 256] << 24 - h * 8
                    }
                    return this._i = y, this._j = x, m
                }
                n.RC4 = l._createHelper(a);
                var u = i.RC4Drop = a.extend({
                    cfg: a.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function () {
                        a._doReset.call(this);
                        for (var d = this.cfg.drop; d > 0; d--) c.call(this)
                    }
                });
                n.RC4Drop = l._createHelper(u)
            }(), r.RC4
        })
    }(rl)), rl.exports
}
var nl = {
        exports: {}
    },
    Ga;

function Od() {
    return Ga || (Ga = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), er(), tr(), jt(), pe())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.StreamCipher,
                    i = n.algo,
                    a = [],
                    c = [],
                    u = [],
                    d = i.Rabbit = l.extend({
                        _doReset: function () {
                            for (var x = this._key.words, m = this.cfg.iv, h = 0; h < 4; h++) x[h] = (x[h] << 8 | x[h] >>> 24) & 16711935 | (x[h] << 24 | x[h] >>> 8) & 4278255360;
                            var g = this._X = [x[0], x[3] << 16 | x[2] >>> 16, x[1], x[0] << 16 | x[3] >>> 16, x[2], x[1] << 16 | x[0] >>> 16, x[3], x[2] << 16 | x[1] >>> 16],
                                E = this._C = [x[2] << 16 | x[2] >>> 16, x[0] & 4294901760 | x[1] & 65535, x[3] << 16 | x[3] >>> 16, x[1] & 4294901760 | x[2] & 65535, x[0] << 16 | x[0] >>> 16, x[2] & 4294901760 | x[3] & 65535, x[1] << 16 | x[1] >>> 16, x[3] & 4294901760 | x[0] & 65535];
                            this._b = 0;
                            for (var h = 0; h < 4; h++) y.call(this);
                            for (var h = 0; h < 8; h++) E[h] ^= g[h + 4 & 7];
                            if (m) {
                                var p = m.words,
                                    s = p[0],
                                    f = p[1],
                                    v = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360,
                                    C = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360,
                                    B = v >>> 16 | C & 4294901760,
                                    w = C << 16 | v & 65535;
                                E[0] ^= v, E[1] ^= B, E[2] ^= C, E[3] ^= w, E[4] ^= v, E[5] ^= B, E[6] ^= C, E[7] ^= w;
                                for (var h = 0; h < 4; h++) y.call(this)
                            }
                        },
                        _doProcessBlock: function (x, m) {
                            var h = this._X;
                            y.call(this), a[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, a[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, a[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, a[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
                            for (var g = 0; g < 4; g++) a[g] = (a[g] << 8 | a[g] >>> 24) & 16711935 | (a[g] << 24 | a[g] >>> 8) & 4278255360, x[m + g] ^= a[g]
                        },
                        blockSize: 128 / 32,
                        ivSize: 64 / 32
                    });

                function y() {
                    for (var x = this._X, m = this._C, h = 0; h < 8; h++) c[h] = m[h];
                    m[0] = m[0] + 1295307597 + this._b | 0, m[1] = m[1] + 3545052371 + (m[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, m[2] = m[2] + 886263092 + (m[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, m[3] = m[3] + 1295307597 + (m[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, m[4] = m[4] + 3545052371 + (m[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, m[5] = m[5] + 886263092 + (m[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, m[6] = m[6] + 1295307597 + (m[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, m[7] = m[7] + 3545052371 + (m[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = m[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
                    for (var h = 0; h < 8; h++) {
                        var g = x[h] + m[h],
                            E = g & 65535,
                            p = g >>> 16,
                            s = ((E * E >>> 17) + E * p >>> 15) + p * p,
                            f = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
                        u[h] = s ^ f
                    }
                    x[0] = u[0] + (u[7] << 16 | u[7] >>> 16) + (u[6] << 16 | u[6] >>> 16) | 0, x[1] = u[1] + (u[0] << 8 | u[0] >>> 24) + u[7] | 0, x[2] = u[2] + (u[1] << 16 | u[1] >>> 16) + (u[0] << 16 | u[0] >>> 16) | 0, x[3] = u[3] + (u[2] << 8 | u[2] >>> 24) + u[1] | 0, x[4] = u[4] + (u[3] << 16 | u[3] >>> 16) + (u[2] << 16 | u[2] >>> 16) | 0, x[5] = u[5] + (u[4] << 8 | u[4] >>> 24) + u[3] | 0, x[6] = u[6] + (u[5] << 16 | u[5] >>> 16) + (u[4] << 16 | u[4] >>> 16) | 0, x[7] = u[7] + (u[6] << 8 | u[6] >>> 24) + u[5] | 0
                }
                n.Rabbit = l._createHelper(d)
            }(), r.Rabbit
        })
    }(nl)), nl.exports
}
var ol = {
        exports: {}
    },
    Xa;

function jd() {
    return Xa || (Xa = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), er(), tr(), jt(), pe())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.StreamCipher,
                    i = n.algo,
                    a = [],
                    c = [],
                    u = [],
                    d = i.RabbitLegacy = l.extend({
                        _doReset: function () {
                            var x = this._key.words,
                                m = this.cfg.iv,
                                h = this._X = [x[0], x[3] << 16 | x[2] >>> 16, x[1], x[0] << 16 | x[3] >>> 16, x[2], x[1] << 16 | x[0] >>> 16, x[3], x[2] << 16 | x[1] >>> 16],
                                g = this._C = [x[2] << 16 | x[2] >>> 16, x[0] & 4294901760 | x[1] & 65535, x[3] << 16 | x[3] >>> 16, x[1] & 4294901760 | x[2] & 65535, x[0] << 16 | x[0] >>> 16, x[2] & 4294901760 | x[3] & 65535, x[1] << 16 | x[1] >>> 16, x[3] & 4294901760 | x[0] & 65535];
                            this._b = 0;
                            for (var E = 0; E < 4; E++) y.call(this);
                            for (var E = 0; E < 8; E++) g[E] ^= h[E + 4 & 7];
                            if (m) {
                                var p = m.words,
                                    s = p[0],
                                    f = p[1],
                                    v = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360,
                                    C = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360,
                                    B = v >>> 16 | C & 4294901760,
                                    w = C << 16 | v & 65535;
                                g[0] ^= v, g[1] ^= B, g[2] ^= C, g[3] ^= w, g[4] ^= v, g[5] ^= B, g[6] ^= C, g[7] ^= w;
                                for (var E = 0; E < 4; E++) y.call(this)
                            }
                        },
                        _doProcessBlock: function (x, m) {
                            var h = this._X;
                            y.call(this), a[0] = h[0] ^ h[5] >>> 16 ^ h[3] << 16, a[1] = h[2] ^ h[7] >>> 16 ^ h[5] << 16, a[2] = h[4] ^ h[1] >>> 16 ^ h[7] << 16, a[3] = h[6] ^ h[3] >>> 16 ^ h[1] << 16;
                            for (var g = 0; g < 4; g++) a[g] = (a[g] << 8 | a[g] >>> 24) & 16711935 | (a[g] << 24 | a[g] >>> 8) & 4278255360, x[m + g] ^= a[g]
                        },
                        blockSize: 128 / 32,
                        ivSize: 64 / 32
                    });

                function y() {
                    for (var x = this._X, m = this._C, h = 0; h < 8; h++) c[h] = m[h];
                    m[0] = m[0] + 1295307597 + this._b | 0, m[1] = m[1] + 3545052371 + (m[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, m[2] = m[2] + 886263092 + (m[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, m[3] = m[3] + 1295307597 + (m[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, m[4] = m[4] + 3545052371 + (m[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, m[5] = m[5] + 886263092 + (m[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, m[6] = m[6] + 1295307597 + (m[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, m[7] = m[7] + 3545052371 + (m[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = m[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
                    for (var h = 0; h < 8; h++) {
                        var g = x[h] + m[h],
                            E = g & 65535,
                            p = g >>> 16,
                            s = ((E * E >>> 17) + E * p >>> 15) + p * p,
                            f = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
                        u[h] = s ^ f
                    }
                    x[0] = u[0] + (u[7] << 16 | u[7] >>> 16) + (u[6] << 16 | u[6] >>> 16) | 0, x[1] = u[1] + (u[0] << 8 | u[0] >>> 24) + u[7] | 0, x[2] = u[2] + (u[1] << 16 | u[1] >>> 16) + (u[0] << 16 | u[0] >>> 16) | 0, x[3] = u[3] + (u[2] << 8 | u[2] >>> 24) + u[1] | 0, x[4] = u[4] + (u[3] << 16 | u[3] >>> 16) + (u[2] << 16 | u[2] >>> 16) | 0, x[5] = u[5] + (u[4] << 8 | u[4] >>> 24) + u[3] | 0, x[6] = u[6] + (u[5] << 16 | u[5] >>> 16) + (u[4] << 16 | u[4] >>> 16) | 0, x[7] = u[7] + (u[6] << 8 | u[6] >>> 24) + u[5] | 0
                }
                n.RabbitLegacy = l._createHelper(d)
            }(), r.RabbitLegacy
        })
    }(ol)), ol.exports
}
var ll = {
        exports: {}
    },
    Ya;

function Id() {
    return Ya || (Ya = 1, function (e, t) {
        (function (r, n, o) {
            e.exports = n(K(), er(), tr(), jt(), pe())
        })($, function (r) {
            return function () {
                var n = r,
                    o = n.lib,
                    l = o.BlockCipher,
                    i = n.algo;
                const a = 16,
                    c = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731],
                    u = [
                        [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946],
                        [1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055],
                        [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504],
                        [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]
                    ];
                var d = {
                    pbox: [],
                    sbox: []
                };

                function y(E, p) {
                    let s = p >> 24 & 255,
                        f = p >> 16 & 255,
                        v = p >> 8 & 255,
                        C = p & 255,
                        B = E.sbox[0][s] + E.sbox[1][f];
                    return B = B ^ E.sbox[2][v], B = B + E.sbox[3][C], B
                }

                function x(E, p, s) {
                    let f = p,
                        v = s,
                        C;
                    for (let B = 0; B < a; ++B) f = f ^ E.pbox[B], v = y(E, f) ^ v, C = f, f = v, v = C;
                    return C = f, f = v, v = C, v = v ^ E.pbox[a], f = f ^ E.pbox[a + 1], {
                        left: f,
                        right: v
                    }
                }

                function m(E, p, s) {
                    let f = p,
                        v = s,
                        C;
                    for (let B = a + 1; B > 1; --B) f = f ^ E.pbox[B], v = y(E, f) ^ v, C = f, f = v, v = C;
                    return C = f, f = v, v = C, v = v ^ E.pbox[1], f = f ^ E.pbox[0], {
                        left: f,
                        right: v
                    }
                }

                function h(E, p, s) {
                    for (let w = 0; w < 4; w++) {
                        E.sbox[w] = [];
                        for (let A = 0; A < 256; A++) E.sbox[w][A] = u[w][A]
                    }
                    let f = 0;
                    for (let w = 0; w < a + 2; w++) E.pbox[w] = c[w] ^ p[f], f++, f >= s && (f = 0);
                    let v = 0,
                        C = 0,
                        B = 0;
                    for (let w = 0; w < a + 2; w += 2) B = x(E, v, C), v = B.left, C = B.right, E.pbox[w] = v, E.pbox[w + 1] = C;
                    for (let w = 0; w < 4; w++)
                        for (let A = 0; A < 256; A += 2) B = x(E, v, C), v = B.left, C = B.right, E.sbox[w][A] = v, E.sbox[w][A + 1] = C;
                    return !0
                }
                var g = i.Blowfish = l.extend({
                    _doReset: function () {
                        if (this._keyPriorReset !== this._key) {
                            var E = this._keyPriorReset = this._key,
                                p = E.words,
                                s = E.sigBytes / 4;
                            h(d, p, s)
                        }
                    },
                    encryptBlock: function (E, p) {
                        var s = x(d, E[p], E[p + 1]);
                        E[p] = s.left, E[p + 1] = s.right
                    },
                    decryptBlock: function (E, p) {
                        var s = m(d, E[p], E[p + 1]);
                        E[p] = s.left, E[p + 1] = s.right
                    },
                    blockSize: 64 / 32,
                    keySize: 128 / 32,
                    ivSize: 64 / 32
                });
                n.Blowfish = l._createHelper(g)
            }(), r.Blowfish
        })
    }(ll)), ll.exports
}(function (e, t) {
    (function (r, n, o) {
        e.exports = n(K(), X0(), vd(), hd(), er(), md(), tr(), mf(), qi(), yd(), yf(), gd(), Ed(), Cd(), Gi(), Bd(), jt(), pe(), wd(), Fd(), Ad(), Dd(), _d(), kd(), Sd(), zd(), Pd(), Nd(), Rd(), Ld(), Td(), Hd(), Od(), jd(), Id())
    })($, function (r) {
        return r
    })
})(hf);
var Md = hf.exports;
const gf = Rf(Md),
    Ud = "S4NT4_S3CR3T_K3Y_T0_ENCRYPT_DATA";

function Wd(e) {
    const t = JSON.stringify(e);
    return gf.AES.encrypt(t, Ud).toString()
}

function $d(e, t) {
    const r = Math.floor(Math.random() * 9) + 1,
        n = `${e}-${t}-${r}`;
    return {
        checksum: gf.SHA256(n).toString(),
        salt: r
    }
}

async function sendScore(e, t) {
    const {
        checksum: r,
        salt: n
    } = $d(e, t), l = Wd({
        playerName: e,
        score: t,
        checksum: r,
        salt: n
    });
    try {
        return await (await fetch("/api/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: l
            })
        })).json()
    } catch (i) {
        return console.error("Error submitting score:", i), {
            success: !1
        }
    }
}

async function Qd() {
    try {
        return await (await fetch("/api/scores")).json()
    } catch (e) {
        return console.error("Error fetching scores:", e), []
    }
}
const il = 120,
    Za = 160,
    It = 50,
    Kd = 20,
    Ja = 300,
    qd = ({
        score: e,
        flag: t
    }) => U.jsxs("div", {
        className: "absolute inset-0 bg-black/75 flex flex-col items-center justify-center z-50 text-white",
        children: [U.jsx("h1", {
            className: "text-4xl font-bold",
            children: "Game Over"
        }), U.jsxs("p", {
            className: "text-2xl mt-4",
            children: ["Your Score: ", e]
        }), t && U.jsxs("div", {
            className: "mt-6 bg-green-500 p-4 rounded-lg",
            children: [U.jsx("p", {
                className: "text-xl font-bold",
                children: "🎉 New Record!"
            }), U.jsxs("p", {
                children: ["Your Flag: ", t]
            })]
        })]
    });

function Gd({
    playerName: e,
    onGameOver: t
}) {
    const [r, n] = tsRef.useState(0), [o, l] = tsRef.useState(window.innerWidth / 2), [i, a] = tsRef.useState([]), [c, u] = tsRef.useState(Kd), [d, y] = tsRef.useState(null), [x, m] = tsRef.useState(!1), h = tsRef.useRef(), g = tsRef.useRef(null), E = tsRef.useRef({
        ArrowLeft: !1,
        ArrowRight: !1
    }), p = tsRef.useRef(!1);

    const playerScore = tsRef.useRef(0);

    tsRef.useEffect(() => {
        const v = B => {
                (B.key === "ArrowLeft" || B.key === "ArrowRight") && (E.current[B.key] = !0)
            },
            C = B => {
                (B.key === "ArrowLeft" || B.key === "ArrowRight") && (E.current[B.key] = !1)
            };
        return window.addEventListener("keydown", v), window.addEventListener("keyup", C), () => {
            window.removeEventListener("keydown", v), window.removeEventListener("keyup", C)
        }
    }, []),

    tsRef.useEffect(() => {
        const C = setInterval(() => {
            if (p.current) return;
            const B = {
                x: Math.random() * (window.innerWidth - It),
                y: -It,
                speed: 2 + Math.random() * 3
            };
            a(w => [...w, B])
        }, 1e3);
        return () => clearInterval(C)
    }, []),

    tsRef.useEffect(() => {
        const v = C => {
            if (p.current) return;
            g.current || (g.current = C);
            const B = (C - g.current) / 1e3;
            g.current = C, l(w => {
                let A = w;
                return E.current.ArrowLeft && (A = Math.max(0, w - Ja * B)), E.current.ArrowRight && (A = Math.min(window.innerWidth - il, w + Ja * B)), A
            }), a(w => {
                const A = w.map(k => ({
                    ...k,
                    y: k.y + k.speed
                })).filter(k => k.y < window.innerHeight);
                return A.forEach(k => {
                    k.y + It > window.innerHeight - Za && k.x + It > o && k.x < o + il && (n(F => {
                        const D = atob("ODIzNzQ2OS04MjM3NDE5"),
                            [z, P] = D.split("-").map(Number),
                            I = z - P,
                            M = F + I;
                        return playerScore.current = M, M
                    }), k.y = window.innerHeight + It)
                }), A
            }), h.current = requestAnimationFrame(v)
        };
        return h.current = requestAnimationFrame(v), () => cancelAnimationFrame(h.current)
    }, [o]),

    // NOTE: Event handler for handleSendScore()
    tsRef.useEffect(() => {
        const v = setInterval(() => {
            u(C => C <= 1 ? (clearInterval(v), handleSendScore(), 0) : C - 1)
        }, 1e3);
        return () => clearInterval(v)
    }, []);

    // NOTE: Calls sendScore()
    const handleSendScore = async () => {
        p.current = !0, h.current && cancelAnimationFrame(h.current);
        const currPlayerScore = playerScore.current;
        m(!0);
        try {
            const C = await sendScore(e, currPlayerScore);
            C.isNewRecord && C.flag && y(C.flag)
        } catch (C) {
            console.error("Error submitting score:", C)
        }
        setTimeout(() => {
            m(!1), t(v)
        }, 5e3)
    };


    return U.jsxs("div", {
        className: "relative w-full h-screen bg-gradient-to-b from-blue-900 to-blue-600 overflow-hidden",
        children: [U.jsxs("div", {
            className: "absolute top-4 left-4 bg-white/80 rounded-lg p-2 z-10",
            children: [U.jsxs("p", {
                className: "text-xl font-bold",
                children: ["Score: ", r]
            }), U.jsxs("p", {
                className: "text-lg",
                children: ["Time: ", Math.ceil(c), "s"]
            })]
        }), x && U.jsx(qd, {
            score: r,
            flag: d
        }), U.jsx("div", {
            className: "absolute bottom-0",
            style: {
                left: o,
                width: il,
                height: Za
            },
            children: U.jsx("img", {
                src: "/images/hotte.png",
                alt: "Santa",
                className: "w-full h-full object-contain"
            })
        }), i.map((v, C) => U.jsx("div", {
            className: "absolute",
            style: {
                left: v.x,
                top: v.y,
                width: It,
                height: It
            },
            children: U.jsx(vf, {
                className: "w-full h-full text-red-500"
            })
        }, C))]
    })
}

function Xd({
    onPlayAgain: e
}) {
    const [t, r] = tsRef.useState([]);
    return tsRef.useEffect(() => {
        (async () => {
            const o = await Qd();
            r(o)
        })()
    }, []), U.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 flex items-center justify-center p-8",
        children: U.jsxs("div", {
            className: "bg-white rounded-xl shadow-2xl w-full max-w-md flex flex-col h-full max-h-[90vh]",
            children: [U.jsxs("div", {
                className: "flex items-center justify-center p-6 border-b",
                children: [U.jsx(sd, {
                    className: "w-12 h-12 text-yellow-500 mr-3"
                }), U.jsx("h2", {
                    className: "text-3xl font-bold text-gray-800",
                    children: "High Scores"
                })]
            }), U.jsx("div", {
                className: "flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar",
                children: t.map((n, o) => U.jsxs("div", {
                    className: `flex items-center justify-between p-4 rounded-lg ${o===0?"bg-yellow-100":o===1?"bg-gray-100":o===2?"bg-orange-100":"bg-white"}`,
                    children: [U.jsxs("div", {
                        className: "flex items-center",
                        children: [U.jsx("span", {
                            className: "text-2xl font-bold mr-4 w-8",
                            children: o + 1
                        }), U.jsxs("div", {
                            children: [U.jsx("span", {
                                className: "text-xl",
                                children: n.playerName
                            }), U.jsx("div", {
                                className: "text-sm text-gray-500",
                                children: new Date(n.timestamp).toLocaleDateString()
                            })]
                        })]
                    }), U.jsx("span", {
                        className: "text-xl font-bold",
                        children: n.score
                    })]
                }, o))
            }), U.jsx("button", {
                onClick: e,
                className: "mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors",
                children: "Play Again"
            })]
        })
    })
}
const ba = "christmasGameScores";

function Yd() {
    const [e, t] = tsRef.useState("start"), [r, n] = tsRef.useState(""), [o, l] = tsRef.useState(() => {
        const u = localStorage.getItem(ba);
        return u ? JSON.parse(u) : []
    });
    tsRef.useEffect(() => {
        localStorage.setItem(ba, JSON.stringify(o))
    }, [o]);
    const i = u => {
            n(u), t("playing")
        },
        a = u => {
            l(d => [...d, {
                name: r,
                score: u
            }]), t("end")
        },
        c = () => {
            t("start")
        };
    return U.jsxs("div", {
        className: "w-full h-screen",
        children: [e === "start" && U.jsx(cd, {
            onStart: i
        }), e === "playing" && U.jsx(Gd, {
            playerName: r,
            onGameOver: a
        }), e === "end" && U.jsx(Xd, {
            onPlayAgain: c
        })]
    })
}
df(document.getElementById("root")).render(U.jsx(tsRef.StrictMode, {
    children: U.jsx(Yd, {})
}));
