!(function () {
    function e(e, t, n, r) {
        Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
    }
    var t,
        n,
        r,
        o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        i = {},
        a = {},
        l = o.parcelRequire94c2;
    null == l &&
        (((l = function (e) {
            if (e in i) return i[e].exports;
            if (e in a) {
                var t = a[e];
                delete a[e];
                var n = { id: e, exports: {} };
                return (i[e] = n), t.call(n.exports, n, n.exports), n.exports;
            }
            var r = Error("Cannot find module '" + e + "'");
            throw ((r.code = "MODULE_NOT_FOUND"), r);
        }).register = function (e, t) {
            a[e] = t;
        }),
            (o.parcelRequire94c2 = l));
    var s = l.register;
    function d(e, t, n, r, o, i, a) {
        try {
            var l = e[i](a),
                s = l.value;
        } catch (e) {
            n(e);
            return;
        }
        l.done ? t(s) : Promise.resolve(s).then(r, o);
    }
    function c(e) {
        return function () {
            var t = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = e.apply(t, n);
                function a(e) {
                    d(i, r, o, a, l, "next", e);
                }
                function l(e) {
                    d(i, r, o, a, l, "throw", e);
                }
                a(void 0);
            });
        };
    }
    s("5m5ag", function (t, n) {
        e(t.exports, "_", function () {
            return o;
        });
        var r = l("8jMmJ");
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    o.forEach(function (t) {
                        (0, r._)(e, t, n[t]);
                    });
            }
            return e;
        }
    }),
        s("8jMmJ", function (t, n) {
            e(t.exports, "_", function () {
                return r;
            });
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            }
        }),
        s("7FyBz", function (t, n) {
            e(t.exports, "_", function () {
                return r;
            });
            function r(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
            }
        });
    var u = l("5m5ag");
    function p(e, t) {
        return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : (function (e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r);
                    }
                    return n;
                })(Object(t)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                }),
            e
        );
    }
    function f(e, t) {
        var n,
            r,
            o,
            i = {
                label: 0,
                sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                },
                trys: [],
                ops: [],
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return (
            (a.next = l(0)),
            (a.throw = l(1)),
            (a.return = l(2)),
            "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
                return this;
            }),
            a
        );
        function l(l) {
            return function (s) {
                return (function (l) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), l[0] && (i = 0)), i;)
                        try {
                            if (((n = 1), r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)) return o;
                            switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                                case 0:
                                case 1:
                                    o = l;
                                    break;
                                case 4:
                                    return i.label++, { value: l[1], done: !1 };
                                case 5:
                                    i.label++, (r = l[1]), (l = [0]);
                                    continue;
                                case 7:
                                    (l = i.ops.pop()), i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                        i.label = l[1];
                                        break;
                                    }
                                    if (6 === l[0] && i.label < o[1]) {
                                        (i.label = o[1]), (o = l);
                                        break;
                                    }
                                    if (o && i.label < o[2]) {
                                        (i.label = o[2]), i.ops.push(l);
                                        break;
                                    }
                                    o[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                            }
                            l = t.call(e, i);
                        } catch (e) {
                            (l = [6, e]), (r = 0);
                        } finally {
                            n = o = 0;
                        }
                    if (5 & l[0]) throw l[1];
                    return { value: l[0] ? l[1] : void 0, done: !0 };
                })([l, s]);
            };
        }
    }
    l("7FyBz"), "function" == typeof SuppressedError && SuppressedError;
    var m = new WeakMap(),
        y = function (e) {
            return new Promise(function (t) {
                return setTimeout(t, e);
            });
        };
    function g(e, t, n, r) {
        var o = function (e) {
            return String(parseFloat(e)) === e;
        };
        for (var i in t)
            if (t.hasOwnProperty(i) && !o(i)) {
                var a = t[i],
                    l = n[i],
                    s = r[i];
                if (a && l) {
                    var d = a.responsiveStyles && a.responsiveStyles.large,
                        c = l.responsiveStyles && l.responsiveStyles.large,
                        u = (s && s.responsiveStyles && s.responsiveStyles.large) || {};
                    if (d) {
                        var p = {};
                        for (var f in d) d.hasOwnProperty(f) && !o(f) && d[f] !== c[f] && ("medium" === e || ("small" === e && u[f] !== d[f])) && (p[f] = d[f]);
                        v(p) && (l.responsiveStyles[e] = p);
                    }
                }
            }
    }
    ["builder.io", "localhost:1234"].includes(location.host) &&
        document.addEventListener("DOMContentLoaded", function (e) {
            document.documentElement.classList.add("builder-extension-loaded");
        });
    var v = function (e) {
        return Object.keys(e).length;
    };
    function b(e) {
        var t = {};
        return (
            !(function e(t, n) {
                t &&
                    (n(t),
                        t.children &&
                        t.children.forEach(function (t) {
                            return e(t, n);
                        }));
            })(e, function (e) {
                e.id && (t[e.id] = p((0, u._)({}, e), { children: void 0 }));
            }),
            t
        );
    }
    var h = void 0,
        x = !1,
        w = "#defa28";
    function S() {
        var e = document.getElementById("builder-copy-layout-overlay");
        if (e) return e;
        var t = document.createElement("div");
        return (
            (t.id = "builder-copy-layout-overlay"),
            Object.assign(t.style, {
                position: "fixed",
                top: "0",
                zIndex: "2147483647",
                left: "0",
                width: "100%",
                height: "100%",
                boxShadow: "inset 0 0 0 4px ".concat(w, ", 0 0 20px rgba(255, 255, 255, 0.2)"),
                pointerEvents: "none",
                opacity: 0,
            }),
            document.body.appendChild(t),
            ((function () {
                var e = document.getElementById("builder-keyboard-hint");
                if (e) return e;
                var t = document.createElement("div");
                return (
                    (t.id = "builder-keyboard-hint"),
                    Object.assign(t.style, {
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        padding: "12px 16px",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        borderRadius: "8px",
                        fontFamily: "Inter, Helvetica, sans-serif",
                        fontSize: "14px",
                        zIndex: "2147483647",
                        pointerEvents: "none",
                        opacity: 0,
                        transition: "opacity 0.2s ease-in-out",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                    }),
                    (t.textContent = "↑ Press Up Arrow to select parent element"),
                    document.body.appendChild(t),
                    t
                );
            })().style.opacity = "1"),
            t
        );
    }
    var E = null;
    function C() {
        if (E) {
            var e = E.getBoundingClientRect();
            Object.assign(S().style, { top: "".concat(e.top, "px"), left: "".concat(e.left, "px"), width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), opacity: 1 });
        }
    }
    function k() {
        var e = document.getElementById("builder-cursor-message");
        if (e) return e;
        var t = document.createElement("div");
        return (
            (t.id = "builder-cursor-message"),
            document.body.appendChild(t),
            Object.assign(t.style, {
                position: "fixed",
                zIndex: "2147483647",
                pointerEvents: "none",
                opacity: 0,
                padding: "3px 10px",
                backgroundColor: w,
                color: "black",
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "Inter, Helvetica, sans-serif",
                borderRadius: "100px",
            }),
            (t.textContent = "Copy Layout"),
            t
        );
    }
    function O(e) {
        return new Promise(function (t) {
            chrome.runtime.sendMessage(e, function (e) {
                t(e);
            });
        });
    }
    document.addEventListener("keydown", function (e) {
        if (x) {
            if ("ArrowUp" === e.key) {
                e.preventDefault();
                var t = E;
                for (
                    E = null == E ? void 0 : E.parentElement;
                    E &&
                    E.getBoundingClientRect().top === (null == t ? void 0 : t.getBoundingClientRect().top) &&
                    E.getBoundingClientRect().left === (null == t ? void 0 : t.getBoundingClientRect().left) &&
                    E.getBoundingClientRect().width === (null == t ? void 0 : t.getBoundingClientRect().width) &&
                    E.getBoundingClientRect().height === (null == t ? void 0 : t.getBoundingClientRect().height);

                )
                    E = null == E ? void 0 : E.parentElement;
                if (!E || !document.documentElement.contains(E)) {
                    E = t;
                    return;
                }
                C();
            }
            if ("ArrowDown" === e.key) {
                e.preventDefault();
                var o = document.elementFromPoint(n, r);
                o && ((E = o), C());
            }
        }
    }),
        document.addEventListener("scroll", function (e) {
            x && E && C();
        }),
        document.addEventListener("mousemove", function (e) {
            (n = e.clientX), (r = e.clientY), x && Object.assign(k().style, { opacity: 1, top: "".concat(e.clientY + 5, "px"), left: "".concat(e.clientX + 10, "px") });
        }),
        document.addEventListener("mouseover", function (e) {
            x && ((E = e.target), C());
        }),
        chrome.runtime.onMessage.addListener(
            ((t = c(function (e) {
                return f(this, function (t) {
                    if ("copyLayout" === e.type) {
                        var n;
                        console.log("Starting copy layout"),
                            (x = !0),
                            document.addEventListener(
                                "click",
                                ((n = c(function (e) {
                                    var t, n, r, o, i, a, l, s, d, c, u, p, m, v, w;
                                    return f(this, function (f) {
                                        switch (f.label) {
                                            case 0:
                                                if (!x) return [2];
                                                for (a = (i = E || e.target).getBoundingClientRect(); i.parentElement;)
                                                    if ((l = i.parentElement.getBoundingClientRect()).width === a.width && l.height === a.height) i = i.parentElement;
                                                    else break;
                                                return (
                                                    e.preventDefault(),
                                                    e.stopPropagation(),
                                                    e.stopImmediatePropagation(),
                                                    R(),
                                                    Object.assign(
                                                        (s = (function () {
                                                            var e = document.getElementById("builder-loading-indicator");
                                                            if (e) return e;
                                                            var t = document.createElement("div");
                                                            return (t.id = "builder-loading-indicator"), document.body.appendChild(t), t;
                                                        })()).style,
                                                        { position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)", zIndex: "2147483647" }
                                                    ),
                                                    ((d = document.createElement("div")).id = "builder-loading-message"),
                                                    s.appendChild(d),
                                                    Object.assign(d.style, { position: "absolute", top: "50%", left: "50%", color: "white", transform: "translateX(-50%)", fontWeight: "bold", fontSize: "24px" }),
                                                    (d.innerHTML =
                                                        '\n          <div style="text-align: center">\n            <div>Copying layout...</div>\n            <div style="font-size: 18px; margin-top: 18px; opacity: 0.8; font-weight: 300">Grabbing multiple screen sizes for responsive layouts</div>\n          </div>\n        '),
                                                    [4, y(1)]
                                                );
                                            case 1:
                                                return f.sent(), ((c = N(i)).meta = { naturalWidth: i.getBoundingClientRect().width }), (h = b(c)), (u = window.innerWidth), [4, O({ action: "resizeWindow", width: 800 })];
                                            case 2:
                                                return f.sent(), g("medium", (p = b(N(i, h))), h, {}), [4, O({ action: "resizeWindow", width: 300 })];
                                            case 3:
                                                if ((f.sent(), g("small", b(N(i)), h, p), !(null === (n = c.responsiveStyles) || void 0 === n ? void 0 : null === (t = n.large) || void 0 === t ? void 0 : t.backgroundColor)))
                                                    for (m = i.parentElement; m;) {
                                                        if ("rgba(0, 0, 0, 0)" !== getComputedStyle(m).backgroundColor) {
                                                            c.responsiveStyles.large || (c.responsiveStyles.large = {}), (c.responsiveStyles.large.backgroundColor = getComputedStyle(m).backgroundColor);
                                                            break;
                                                        }
                                                        m = m.parentElement;
                                                    }
                                                return (
                                                    delete c.responsiveStyles.large.marginTop,
                                                    delete c.responsiveStyles.large.marginLeft,
                                                    delete c.responsiveStyles.large.marginBottom,
                                                    delete c.responsiveStyles.large.marginRight,
                                                    (null === (r = c.responsiveStyles) || void 0 === r ? void 0 : r.medium) &&
                                                    (delete c.responsiveStyles.medium.marginTop, delete c.responsiveStyles.medium.marginLeft, delete c.responsiveStyles.medium.marginBottom, delete c.responsiveStyles.medium.marginRight),
                                                    (null === (o = c.responsiveStyles) || void 0 === o ? void 0 : o.small) &&
                                                    (delete c.responsiveStyles.small.marginTop, delete c.responsiveStyles.small.marginLeft, delete c.responsiveStyles.small.marginBottom, delete c.responsiveStyles.small.marginRight),
                                                    [4, O({ action: "resizeWindow", width: u })]
                                                );
                                            case 4:
                                                f.sent(), (v = !1), (f.label = 5);
                                            case 5:
                                                return f.trys.push([5, 7, , 8]), [4, navigator.clipboard.writeText(JSON.stringify({ blocks: [c] }))];
                                            case 6:
                                                return f.sent(), (v = !0), [3, 8];
                                            case 7:
                                                return (
                                                    f.sent(),
                                                    ((w = document.createElement("a")).href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ data: { blocks: [c] } }))),
                                                    (w.download = "layout.builder.json"),
                                                    w.click(),
                                                    [3, 8]
                                                );
                                            case 8:
                                                return (
                                                    (s.onclick = function () {
                                                        return s.remove();
                                                    }),
                                                    (d.innerHTML = '\n          <div style="text-align:center">\n            <div style="font-size:38px;margin-bottom:15px">'
                                                        .concat(v ? "Copied!" : "Downloaded!", '</div>\n            <div style="font-size:22px;margin-bottom:20px;font-weight:normal">Now ')
                                                        .concat(
                                                            v ? "paste" : "upload",
                                                            ' in Codro or Figma</div>\n            <a style="font-size:16px;font-weight:bold;text-decoration:none;color:#87CEEB;border:2px solid #87CEEB;padding:8px 16px;border-radius:4px;display:inline-block" \n               href="https://www.builder.io/c/docs/chrome-extension" \n               target="_blank">Learn more</a>\n          </div>'
                                                        )),
                                                    [4, y(15e3)]
                                                );
                                            case 9:
                                                return f.sent(), s.remove(), [2];
                                        }
                                    });
                                })),
                                    function (e) {
                                        return n.apply(this, arguments);
                                    }),
                                { once: !0 }
                            );
                    }
                    return [2];
                });
            })),
                function (e) {
                    return t.apply(this, arguments);
                })
        );
    var L = new Set([
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "paddingTop",
        "backgroundColor",
        "backgroundImage",
        "backgroundRepeat",
        "backgroundPosition",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "marginTop",
        "borderColor",
        "borderStyle",
        "borderSize",
        "flexDirection",
        "flexBasis",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "fontStyle",
        "fontFamily",
        "fontWeight",
        "fontSize",
        "transform",
        "mixBlendMode",
    ]),
        B = function (e) {
            return String(parseFloat(e)) === e;
        };
    window.builderIdMap || (window.builderIdMap = new WeakMap());
    var T = ["background", "padding", "margin", "border", "flex", "font"],
        j = new Set(["transition", "overflow", "unicodeBidi", "inset", "borderBottomColor", "borderRightColor", "borderLeftColor", "borderTopColor", "caretColor", "textWrapMode", "grid"]);
    function N(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (e instanceof Node && e.nodeType === Node.TEXT_NODE) return { "@type": "@builder.io/sdk:Element", tagName: "span", component: { name: "Text", options: { text: e.textContent || "" } } };
        if (!(e instanceof HTMLElement || e instanceof SVGElement)) return { "@type": "@builder.io/sdk:Element", tagName: "span", responsiveStyles: { large: { display: "inline" } } };
        if ("builder-copy-layout-overlay" === e.id || "builder-keyboard-hint" === e.id || "builder-loading-indicator" === e.id || "builder-cursor-message" === e.id) return null;
        var n = null,
            r = m.get(e) || "builder-" + (Date.now().toString(36) + Math.random().toString(36)).replace(".", "");
        m.set(e, r);
        for (
            var o = (function (e, t) {
                if (!(e instanceof HTMLElement || e instanceof SVGElement)) return {};
                var n =
                    ((y = document.getElementById("default-style-div")) || ((y = document.createElement("div")), document.body.appendChild(y), (y.id = "default-style-div")),
                        (y.style.display = "none"),
                        (g = getComputedStyle(y)),
                        p((0, u._)({}, g), { display: "block" })),
                    r = {},
                    o = (0, u._)({}, getComputedStyle(e)),
                    i = e.style.display;
                e.style.setProperty("display", "none", "important");
                var a = getComputedStyle(e),
                    l = (0, u._)({}, a);
                for (var s in ((l.display = o.display), (e.style.display = i), "normal" !== o.mixBlendMode && (r.mixBlendMode = o.mixBlendMode), l))
                    if (l.hasOwnProperty(s) && !B(s)) {
                        var d = l[s];
                        d === n[s] ||
                            s.toLowerCase().includes("inline") ||
                            s.toLowerCase().includes("block") ||
                            s.toLowerCase().includes("list") ||
                            s.toLowerCase().includes("start") ||
                            s.toLowerCase().includes("end") ||
                            s.toLowerCase().includes("column") ||
                            s.toLowerCase().includes("place") ||
                            (new Set(["border", "outline"]).has(s) ? d.match(/(^|\s)0px/) : new Set(["outline", "textDecoration", "textEmphasis", "borderStyle"]).has(s) ? d.includes("none") : j.has(s)) ||
                            (r[s] = d);
                    }
                a.transform && "none" !== a.transform && (r.transform = a.transform), "auto" === o.height && (r.height = "auto"), "auto" === o.width && (r.width = "auto");
                var c = !0,
                    f = !1,
                    m = void 0;
                try {
                    for (var y, g, v, b = T[Symbol.iterator](); !(c = (v = b.next()).done); c = !0) {
                        var x = v.value;
                        for (var w in l)
                            if (!(!l.hasOwnProperty(w) || B(w))) {
                                if (w !== x && w.startsWith(x)) {
                                    var S = l[w];
                                    S && L.has(w) && (r[w] = S);
                                }
                                delete r[x];
                            }
                    }
                } catch (e) {
                    (f = !0), (m = e);
                } finally {
                    try {
                        c || null == b.return || b.return();
                    } finally {
                        if (f) throw m;
                    }
                }
                var E = h && h[t],
                    C = (0, u._)({}, E && E.responsiveStyles && E.responsiveStyles.large, E && E.responsiveStyles && E.responsiveStyles.medium);
                for (var k in r)
                    if ("string" == typeof k && !("display" === k || B(k))) {
                        var O = r[k],
                            N = !!C[k];
                        O || delete r[k],
                            k.startsWith("border") && O.startsWith("0px") && delete r[k],
                            O !== n[k] || N || delete r[k],
                            ("initial" !== O && "inherit" !== O) || N || delete r[k],
                            k.match(/^(webkit|ms|o|moz)[A-Z]/) && delete r[k],
                            O && O.includes("--") && (r[k] = l[k]);
                    }
                for (var R in C) !C.hasOwnProperty(R) || B(R) || r[R] || l[R] === C[R] || (r[R] = l[R]);
                for (var M = 0, A = ["background", "backgroundImage"]; M < A.length; M++) {
                    var P = A[M],
                        z = r[P];
                    if ("string" == typeof z) {
                        var I = /url\s*\(\s*(['"]?)([^'"\)]+?)(['"]?)\s*\)/i;
                        r[P] = z.replace(I, function (e, t, n, r) {
                            var o = new URL(n, location.href).href;
                            return "url(".concat(t).concat(o).concat(r, ")");
                        });
                    }
                }
                return r;
            })(e, r),
            i = {},
            a = {},
            l = 0;
            l < e.attributes.length;
            l++
        ) {
            var s = e.attributes[l];
            !["builder-id", "id", "class", "style"].includes(s.name) && s.name.match(/^[a-z0-9-_]+$/i) && !s.name.startsWith("data-") && (a[s.name] = s.value);
        }
        var d = void 0,
            c = e.tagName.toLowerCase();
        if (("body" === c && (c = "div"), "iframe" === c && (c = "span"), "input" === c && (a.type = e.getAttribute("type") || void 0), "svg" === c)) {
            c = "div";
            var f = e.getAttribute("width"),
                y = e.getAttribute("height");
            f && (f.endsWith("px") || f.endsWith("%") || (f += "px"), (o.width = f)), y && (y.endsWith("px") || y.endsWith("%") || (y += "px"), (o.height = y));
            var g = e.cloneNode(!0);
            g.setAttribute(
                "style",
                (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return Object.keys(e).reduce(function (n, r) {
                        var o = e[r];
                        return (
                            n +
                            "\n"
                                .concat(" ".repeat(t))
                                .concat(
                                    r
                                        ? r.replace(/([A-Z])/g, function (e) {
                                            return "-".concat(e[0].toLowerCase());
                                        })
                                        : "",
                                    ": "
                                )
                                .concat(o, ";")
                        );
                    }, "");
                })(o)
            );
            var v = !0,
                b = !1,
                x = void 0;
            try {
                for (var w, S = Array.from(g.querySelectorAll("*"))[Symbol.iterator](); !(v = (w = S.next()).done); v = !0) {
                    var E = w.value;
                    if (E instanceof SVGElement) {
                        var C = getComputedStyle(E).fill;
                        "rgb(0, 0, 0)" !== C && (E.style.fill = C);
                        var k = getComputedStyle(E).display;
                        "inline" !== k && (E.style.display = k);
                    }
                }
            } catch (e) {
                (b = !0), (x = e);
            } finally {
                try {
                    v || null == S.return || S.return();
                } finally {
                    if (b) throw x;
                }
            }
            d = { name: "Custom Code", options: { code: g.outerHTML } };
        }
        if ("picture" === c) {
            var O = e.querySelector("img");
            if (
                (O &&
                    (n = [N(O)].filter(function (e) {
                        return null !== e;
                    })),
                    null == n ? void 0 : n[0])
            ) {
                var R = (function (e) {
                    var t,
                        n,
                        r = null === (t = e.querySelector("img")) || void 0 === t ? void 0 : t.currentSrc;
                    if (r) return r;
                    var o = e.querySelectorAll("source"),
                        i =
                            null ===
                                (n =
                                    Array.from(o).find(function (e) {
                                        return window.matchMedia(e.media).matches;
                                    }) || o[0]) || void 0 === n
                                ? void 0
                                : n.srcset.split(/\s/)[0];
                    if (i) return i;
                    var a = e.querySelector("img");
                    return a && a.src && !a.src.startsWith("data:") ? a.src : "";
                })(e);
                R && n[0].component && (n[0].component.options.image = new URL(R, location.href).href);
            }
            c = "span";
        }
        if ("img" === c) {
            var M,
                A = new URL(null === (M = e.currentSrc || e.src || a.src || (e.srcset && e.srcset.split(" ")[0])) || void 0 === M ? void 0 : M.replace(/,$/, ""), location.href).href;
            (i.originalAspectRatio = e.height / e.width), (d = { name: "Raw:Img", options: { image: A } }), delete a.src, delete a.srcset, delete a.sizes, (c = "");
        }
        Array.from(e.childNodes).filter(function (e) {
            return e.nodeType !== Node.COMMENT_NODE;
        }),
            "button" !== c || (o.backgroundColor || (o.backgroundColor = "rgba(0, 0, 0, 0)"), o.borderColor || (o.borderColor = "rgba(0, 0, 0, 0)"));
        var P = Array.from(e.childNodes)
            .slice()
            .filter(function (e) {
                return [Node.TEXT_NODE, Node.ELEMENT_NODE].includes(e.nodeType);
            })
            .filter(function (e) {
                return !!(e.nodeType !== Node.TEXT_NODE || e.textContent.trim());
            }),
            z = "A" === e.tagName;
        return (
            z && delete a.href,
            "IMG" === e.tagName && (delete a.src, delete a.srcset, delete a.srcSet, delete a.sizes),
            p((0, u._)({ "@type": "@builder.io/sdk:Element", id: r, tagName: c, component: d, meta: Object.keys(i).length ? i : void 0 }, (null == d ? void 0 : d.name) === "Custom Code" && { layerName: "SVG" }), {
                responsiveStyles: { large: (0, u._)({}, "body" === c && { overflow: "auto" }, o) },
                properties: a,
                children:
                    n ||
                    (t
                        ? Array.from(P)
                            .filter(function (e) {
                                return e instanceof HTMLElement
                                    ? !["script", "style", "noscript", "link", "meta", "area", "base", "col", "embed", "link", "meta", "param", "source", "track", "wbr"].includes(e.tagName.toLowerCase())
                                    : !(e instanceof SVGElement) || "svg" === e.tagName.toLowerCase();
                            })
                            .filter(function (e) {
                                return !(e instanceof HTMLElement || e instanceof SVGElement) || !e.classList.contains("default-style-div");
                            })
                            .map(function (e) {
                                return N(e);
                            })
                            .filter(function (e) {
                                return null !== e;
                            })
                        : []),
                linkUrl: z ? e.href : void 0,
            })
        );
    }
    function R() {
        var e, t;
        null === (e = document.getElementById("builder-loading-indicator")) || void 0 === e || e.remove(),
            null === (t = document.getElementById("builder-keyboard-hint")) || void 0 === t || t.remove(),
            x && ((x = !1), Object.assign(S().style, { opacity: 0 }), Object.assign(k().style, { opacity: 0 }));
    }
    document.addEventListener("keydown", function (e) {
        "Escape" === e.key && R();
    }),
        chrome.runtime.onMessage.addListener(function (e, t, n) {
            if ("outlineElements" === e.type) {
                var r = e.payload,
                    o = r.shouldOutline,
                    i = r.builderOutlineStylesClass,
                    a = r.builderEditClassName;
                if (o) {
                    var l = "[builder-content-id]",
                        s = document.createElement("style");
                    (s.type = "text/css"),
                        (s.innerHTML = "\n        "
                            .concat(l, ':not([builder-content-id=""]) { border: 4px solid #1A73E8 !important } \n        ')
                            .concat(l, ":hover > .")
                            .concat(a, " { display: inline-block !important }\n        .builder-inline-symbol > * > ")
                            .concat(l, " { border: none !important }\n      ")),
                        s.classList.add(i),
                        document.head.appendChild(s),
                        Array.from(document.querySelectorAll(l)).forEach(function (e) {
                            (e.style.position && "static" !== e.style.position) || (e.style.position = "relative");
                            var t,
                                n,
                                r,
                                o = 0,
                                i = Array.from(e.querySelectorAll(l)),
                                s = e.getBoundingClientRect();
                            i.length &&
                                i.forEach(function (e) {
                                    var t = e.getBoundingClientRect(),
                                        n = t.top - s.top,
                                        r = t.left - s.left;
                                    n < 100 && r < 100 && o < t.height && (o = t.height);
                                });
                            var d = 0;
                            s.height > 50 && (d = 10);
                            var c = (null === (t = e.children[0]) || void 0 === t ? void 0 : t.attributes["data-builder-content-id"]) || e.attributes["builder-content-id"],
                                u = c && c.value,
                                p = null === (r = e.parentElement) || void 0 === r ? void 0 : null === (n = r.parentElement) || void 0 === n ? void 0 : n.classList.contains("builder-inline-symbol"),
                                f = Array.from(document.querySelectorAll('section[data-source="builder-sfcc-sync"]')).length > 0;
                            if (u && !p) {
                                var m = document.createElement("a");
                                m.innerText = "EDIT";
                                var y = f ? "?overridePreviewUrl=" + encodeURIComponent(window.location.href) : "";
                                (m.href = "https://builder.io/content/" + u + y),
                                    (m.target = "_blank"),
                                    m.classList.add(a),
                                    Object.assign(m.style, {
                                        display: "none",
                                        "background-color": "#1A73E8",
                                        "z-index": 100,
                                        cursor: "pointer",
                                        "box-shadow": "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
                                        position: "absolute",
                                        top: o + d + "px",
                                        left: "10px",
                                        padding: "10px 20px",
                                        "font-size": "16px",
                                        color: "white",
                                        "max-width": "100px",
                                        "border-radius": "4px",
                                        "text-align": "center",
                                    }),
                                    e.appendChild(m);
                            }
                        });
                } else
                    Array.from(document.getElementsByClassName(i)).forEach(function (e) {
                        return e.remove();
                    }),
                        Array.from(document.getElementsByClassName(a)).forEach(function (e) {
                            return e.remove();
                        });
            }
        });
})();
//# sourceMappingURL=inject.js.map
