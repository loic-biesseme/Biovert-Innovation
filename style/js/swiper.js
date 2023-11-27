/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/swiper@11.0.5/swiper.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function e(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
}
function t(s, i) {
    void 0 === s && (s = {}),
        void 0 === i && (i = {}),
        Object.keys(i).forEach((r) => {
            void 0 === s[r] ? (s[r] = i[r]) : e(i[r]) && e(s[r]) && Object.keys(i[r]).length > 0 && t(s[r], i[r]);
        });
}
const s = { body: {}, addEventListener() {}, removeEventListener() {}, activeElement: { blur() {}, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {} }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
function i() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
}
const r = {
    document: s,
    navigator: { userAgent: "" },
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
    cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
    },
};
function n() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, r), e;
}
function a(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
}
function o() {
    return Date.now();
}
function l(e, t) {
    void 0 === t && (t = "x");
    const s = n();
    let i, r, a;
    const o = (function (e) {
        const t = n();
        let s;
        return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    })(e);
    return (
        s.WebKitCSSMatrix
            ? ((r = o.transform || o.webkitTransform),
              r.split(",").length > 6 &&
                  (r = r
                      .split(", ")
                      .map((e) => e.replace(",", "."))
                      .join(", ")),
              (a = new s.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (i = a.toString().split(","))),
        "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
        "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
        r || 0
    );
}
function d(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
}
function c() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
        const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != r && ((s = r), !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
            const s = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = s.length; t < i; t += 1) {
                const i = s[t],
                    n = Object.getOwnPropertyDescriptor(r, i);
                void 0 !== n && n.enumerable && (d(e[i]) && d(r[i]) ? (r[i].__swiper__ ? (e[i] = r[i]) : c(e[i], r[i])) : !d(e[i]) && d(r[i]) ? ((e[i] = {}), r[i].__swiper__ ? (e[i] = r[i]) : c(e[i], r[i])) : (e[i] = r[i]));
            }
        }
    }
    var s;
    return e;
}
function p(e, t, s) {
    e.style.setProperty(t, s);
}
function u(e) {
    let { swiper: t, targetPosition: s, side: i } = e;
    const r = n(),
        a = -t.translate;
    let o,
        l = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"), r.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > a ? "next" : "prev",
        p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
            (o = new Date().getTime()), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
                n = 0.5 - Math.cos(e * Math.PI) / 2;
            let c = a + n * (s - a);
            if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [i]: c }), p(c, s)))
                return (
                    (t.wrapperEl.style.overflow = "hidden"),
                    (t.wrapperEl.style.scrollSnapType = ""),
                    setTimeout(() => {
                        (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: c });
                    }),
                    void r.cancelAnimationFrame(t.cssModeFrameID)
                );
            t.cssModeFrameID = r.requestAnimationFrame(u);
        };
    u();
}
function h(e, t) {
    return void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t));
}
function f(e) {
    try {
        return void console.warn(e);
    } catch (e) {}
}
function m(e, t) {
    void 0 === t && (t = []);
    const s = document.createElement(e);
    return (
        s.classList.add(
            ...(Array.isArray(t)
                ? t
                : (function (e) {
                      return (
                          void 0 === e && (e = ""),
                          e
                              .trim()
                              .split(" ")
                              .filter((e) => !!e.trim())
                      );
                  })(t))
        ),
        s
    );
}
function v(e, t) {
    return n().getComputedStyle(e, null).getPropertyValue(t);
}
function g(e) {
    let t,
        s = e;
    if (s) {
        for (t = 0; null !== (s = s.previousSibling); ) 1 === s.nodeType && (t += 1);
        return t;
    }
}
function w(e, t, s) {
    const i = n();
    return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
let S, T, b;
function x() {
    return (
        S ||
            (S = (function () {
                const e = n(),
                    t = i();
                return { smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)) };
            })()),
        S
    );
}
function y(e) {
    return (
        void 0 === e && (e = {}),
        T ||
            (T = (function (e) {
                let { userAgent: t } = void 0 === e ? {} : e;
                const s = x(),
                    i = n(),
                    r = i.navigator.platform,
                    a = t || i.navigator.userAgent,
                    o = { ios: !1, android: !1 },
                    l = i.screen.width,
                    d = i.screen.height,
                    c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                let p = a.match(/(iPad).*OS\s([\d_]+)/);
                const u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                    h = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    f = "Win32" === r;
                let m = "MacIntel" === r;
                return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && ((p = a.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (m = !1)), c && !f && ((o.os = "android"), (o.android = !0)), (p || h || u) && ((o.os = "ios"), (o.ios = !0)), o;
            })(e)),
        T
    );
}
function E() {
    return (
        b ||
            (b = (function () {
                const e = n();
                let t = !1;
                function s() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                }
                if (s()) {
                    const s = String(e.navigator.userAgent);
                    if (s.includes("Version/")) {
                        const [e, i] = s
                            .split("Version/")[1]
                            .split(" ")[0]
                            .split(".")
                            .map((e) => Number(e));
                        t = e < 16 || (16 === e && i < 2);
                    }
                }
                return { isSafari: t || s(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) };
            })()),
        b
    );
}
var M = {
    on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = s ? "unshift" : "push";
        return (
            e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
            }),
            i
        );
    },
    once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
            t.apply(i, n);
        }
        return (r.__emitterProxy = t), i.on(e, r, s);
    },
    onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                  void 0 === t
                      ? (s.eventsListeners[e] = [])
                      : s.eventsListeners[e] &&
                        s.eventsListeners[e].forEach((i, r) => {
                            (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && s.eventsListeners[e].splice(r, 1);
                        });
              }),
              s)
            : s;
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
        "string" == typeof n[0] || Array.isArray(n[0]) ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e)) : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)), s.unshift(i);
        return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                e.eventsAnyListeners &&
                    e.eventsAnyListeners.length &&
                    e.eventsAnyListeners.forEach((e) => {
                        e.apply(i, [t, ...s]);
                    }),
                    e.eventsListeners &&
                        e.eventsListeners[t] &&
                        e.eventsListeners[t].forEach((e) => {
                            e.apply(i, s);
                        });
            }),
            e
        );
    },
};
const C = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
        if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
                e.isElement &&
                (s.shadowRoot
                    ? (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
                    : requestAnimationFrame(() => {
                          s.shadowRoot && ((t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), t && t.remove());
                      })),
                t && t.remove();
        }
    },
    P = (e, t) => {
        if (!e.slides[t]) return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading");
    },
    I = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0) return;
        t = Math.min(t, s);
        const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = r,
                n = [s - t];
            return (
                n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
                void e.slides.forEach((t, s) => {
                    n.includes(t.column) && P(e, s);
                })
            );
        }
        const n = r + i - 1;
        if (e.params.rewind || e.params.loop)
            for (let i = r - t; i <= n + t; i += 1) {
                const t = ((i % s) + s) % s;
                (t < r || t > n) && P(e, t);
            }
        else for (let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1) i !== r && (i > n || i < r) && P(e, i);
    };
var L = {
    updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth), (s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight), (0 === t && e.isHorizontal()) || (0 === s && e.isVertical()) || ((t = t - parseInt(v(i, "padding-left") || 0, 10) - parseInt(v(i, "padding-right") || 0, 10)), (s = s - parseInt(v(i, "padding-top") || 0, 10) - parseInt(v(i, "padding-bottom") || 0, 10)), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
    },
    updateSlides: function () {
        const e = this;
        function t(t, s) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
        }
        const s = e.params,
            { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: o } = e,
            l = e.virtual && s.virtual.enabled,
            d = l ? e.virtual.slides.length : e.slides.length,
            c = h(r, `.${e.params.slideClass}, swiper-slide`),
            u = l ? e.virtual.slides.length : c.length;
        let f = [];
        const m = [],
            g = [];
        let S = s.slidesOffsetBefore;
        "function" == typeof S && (S = s.slidesOffsetBefore.call(e));
        let T = s.slidesOffsetAfter;
        "function" == typeof T && (T = s.slidesOffsetAfter.call(e));
        const b = e.snapGrid.length,
            x = e.slidesGrid.length;
        let y = s.spaceBetween,
            E = -S,
            M = 0,
            C = 0;
        if (void 0 === n) return;
        "string" == typeof y && y.indexOf("%") >= 0 ? (y = (parseFloat(y.replace("%", "")) / 100) * n) : "string" == typeof y && (y = parseFloat(y)),
            (e.virtualSize = -y),
            c.forEach((e) => {
                a ? (e.style.marginLeft = "") : (e.style.marginRight = ""), (e.style.marginBottom = ""), (e.style.marginTop = "");
            }),
            s.centeredSlides && s.cssMode && (p(i, "--swiper-centered-offset-before", ""), p(i, "--swiper-centered-offset-after", ""));
        const P = s.grid && s.grid.rows > 1 && e.grid;
        let I;
        P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
        const L = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e) => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
        for (let i = 0; i < u; i += 1) {
            let r;
            if (((I = 0), c[i] && (r = c[i]), P && e.grid.updateSlide(i, r, c), !c[i] || "none" !== v(r, "display"))) {
                if ("auto" === s.slidesPerView) {
                    L && (c[i].style[e.getDirectionLabel("width")] = "");
                    const n = getComputedStyle(r),
                        a = r.style.transform,
                        o = r.style.webkitTransform;
                    if ((a && (r.style.transform = "none"), o && (r.style.webkitTransform = "none"), s.roundLengths)) I = e.isHorizontal() ? w(r, "width", !0) : w(r, "height", !0);
                    else {
                        const e = t(n, "width"),
                            s = t(n, "padding-left"),
                            i = t(n, "padding-right"),
                            a = t(n, "margin-left"),
                            o = t(n, "margin-right"),
                            l = n.getPropertyValue("box-sizing");
                        if (l && "border-box" === l) I = e + a + o;
                        else {
                            const { clientWidth: t, offsetWidth: n } = r;
                            I = e + s + i + a + o + (n - t);
                        }
                    }
                    a && (r.style.transform = a), o && (r.style.webkitTransform = o), s.roundLengths && (I = Math.floor(I));
                } else (I = (n - (s.slidesPerView - 1) * y) / s.slidesPerView), s.roundLengths && (I = Math.floor(I)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${I}px`);
                c[i] && (c[i].swiperSlideSize = I), g.push(I), s.centeredSlides ? ((E = E + I / 2 + M / 2 + y), 0 === M && 0 !== i && (E = E - n / 2 - y), 0 === i && (E = E - n / 2 - y), Math.abs(E) < 0.001 && (E = 0), s.roundLengths && (E = Math.floor(E)), C % s.slidesPerGroup == 0 && f.push(E), m.push(E)) : (s.roundLengths && (E = Math.floor(E)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && f.push(E), m.push(E), (E = E + I + y)), (e.virtualSize += I + y), (M = I), (C += 1);
            }
        }
        if (((e.virtualSize = Math.max(e.virtualSize, n) + T), a && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + y}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`), P && e.grid.updateWrapperSize(I, f), !s.centeredSlides)) {
            const t = [];
            for (let i = 0; i < f.length; i += 1) {
                let r = f[i];
                s.roundLengths && (r = Math.floor(r)), f[i] <= e.virtualSize - n && t.push(r);
            }
            (f = t), Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - n);
        }
        if (l && s.loop) {
            const t = g[0] + y;
            if (s.slidesPerGroup > 1) {
                const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                    r = t * s.slidesPerGroup;
                for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r);
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), (e.virtualSize += t);
        }
        if ((0 === f.length && (f = [0]), 0 !== y)) {
            const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
            c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e) => {
                e.style[t] = `${y}px`;
            });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
            let e = 0;
            g.forEach((t) => {
                e += t + (y || 0);
            }),
                (e -= y);
            const t = e - n;
            f = f.map((e) => (e <= 0 ? -S : e > t ? t + T : e));
        }
        if (s.centerInsufficientSlides) {
            let e = 0;
            if (
                (g.forEach((t) => {
                    e += t + (y || 0);
                }),
                (e -= y),
                e < n)
            ) {
                const t = (n - e) / 2;
                f.forEach((e, s) => {
                    f[s] = e - t;
                }),
                    m.forEach((e, s) => {
                        m[s] = e + t;
                    });
            }
        }
        if ((Object.assign(e, { slides: c, snapGrid: f, slidesGrid: m, slidesSizesGrid: g }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)) {
            p(i, "--swiper-centered-offset-before", -f[0] + "px"), p(i, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
                s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if ((u !== d && e.emit("slidesLengthChange"), f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== x && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))) {
            const t = `${s.containerModifierClass}backface-hidden`,
                i = e.el.classList.contains(t);
            u <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
        }
    },
    updateAutoHeight: function (e) {
        const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
        let r,
            n = 0;
        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
        const a = (e) => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
                (t.visibleSlides || []).forEach((e) => {
                    s.push(e);
                });
            else
                for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                    const e = t.activeIndex + r;
                    if (e > t.slides.length && !i) break;
                    s.push(a(e));
                }
        else s.push(a(t.activeIndex));
        for (r = 0; r < s.length; r += 1)
            if (void 0 !== s[r]) {
                const e = s[r].offsetHeight;
                n = e > n ? e : n;
            }
        (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
    },
    updateSlidesOffset: function () {
        const e = this,
            t = e.slides,
            s = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
        for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
            s = t.params,
            { slides: i, rtlTranslate: r, snapGrid: n } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        r && (a = e),
            i.forEach((e) => {
                e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
        let o = s.spaceBetween;
        "string" == typeof o && o.indexOf("%") >= 0 ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size) : "string" == typeof o && (o = parseFloat(o));
        for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let d = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                u = -(a - d),
                h = u + t.slidesSizesGrid[e],
                f = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) || (h > 1 && h <= t.size) || (u <= 0 && h >= t.size)) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i[e].classList.add(s.slideVisibleClass)), f && i[e].classList.add(s.slideFullyVisibleClass), (l.progress = r ? -c : c), (l.originalProgress = r ? -p : p);
        }
    },
    updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = t;
        const l = n,
            d = a;
        if (0 === i) (r = 0), (n = !0), (a = !0);
        else {
            r = (e - t.minTranslate()) / i;
            const s = Math.abs(e - t.minTranslate()) < 1,
                o = Math.abs(e - t.maxTranslate()) < 1;
            (n = s || r <= 0), (a = o || r >= 1), s && (r = 0), o && (r = 1);
        }
        if (s.loop) {
            const s = t.getSlideIndexByData(0),
                i = t.getSlideIndexByData(t.slides.length - 1),
                r = t.slidesGrid[s],
                n = t.slidesGrid[i],
                a = t.slidesGrid[t.slidesGrid.length - 1],
                l = Math.abs(e);
            (o = l >= r ? (l - r) / a : (l + a - n) / a), o > 1 && (o -= 1);
        }
        Object.assign(t, { progress: r, progressLoop: o, isBeginning: n, isEnd: a }), (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), ((l && !n) || (d && !a)) && t.emit("fromEdge"), t.emit("progress", r);
    },
    updateSlidesClasses: function () {
        const e = this,
            { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
            n = e.virtual && s.virtual.enabled,
            a = e.grid && s.grid && s.grid.rows > 1,
            o = (e) => h(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let l, d, c;
        if (
            (t.forEach((e) => {
                e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
            }),
            n)
        )
            if (s.loop) {
                let t = r - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), (l = o(`[data-swiper-slide-index="${t}"]`));
            } else l = o(`[data-swiper-slide-index="${r}"]`);
        else a ? ((l = t.filter((e) => e.column === r)[0]), (c = t.filter((e) => e.column === r + 1)[0]), (d = t.filter((e) => e.column === r - 1)[0])) : (l = t[r]);
        l &&
            (l.classList.add(s.slideActiveClass),
            a
                ? (c && c.classList.add(s.slideNextClass), d && d.classList.add(s.slidePrevClass))
                : ((c = (function (e, t) {
                      const s = [];
                      for (; e.nextElementSibling; ) {
                          const i = e.nextElementSibling;
                          t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                      }
                      return s;
                  })(l, `.${s.slideClass}, swiper-slide`)[0]),
                  s.loop && !c && (c = t[0]),
                  c && c.classList.add(s.slideNextClass),
                  (d = (function (e, t) {
                      const s = [];
                      for (; e.previousElementSibling; ) {
                          const i = e.previousElementSibling;
                          t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
                      }
                      return s;
                  })(l, `.${s.slideClass}, swiper-slide`)[0]),
                  s.loop && 0 === !d && (d = t[t.length - 1]),
                  d && d.classList.add(s.slidePrevClass))),
            e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
        const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o } = t;
        let l,
            d = e;
        const c = (e) => {
            let s = e - t.virtual.slidesBefore;
            return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
        };
        if (
            (void 0 === d &&
                (d = (function (e) {
                    const { slidesGrid: t, params: s } = e,
                        i = e.rtlTranslate ? e.translate : -e.translate;
                    let r;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? (i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? (r = e) : i >= t[e] && i < t[e + 1] && (r = e + 1)) : i >= t[e] && (r = e);
                    return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
                })(t)),
            i.indexOf(s) >= 0)
        )
            l = i.indexOf(s);
        else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), d === n && !t.params.loop)) return void (l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")));
        if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
        const p = t.grid && r.grid && r.grid.rows > 1;
        let u;
        if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
        else if (p) {
            const e = t.slides.filter((e) => e.column === d)[0];
            let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), (u = Math.floor(s / r.grid.rows));
        } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : d;
        } else u = d;
        Object.assign(t, { previousSnapIndex: o, snapIndex: l, previousRealIndex: a, realIndex: u, previousIndex: n, activeIndex: d }), t.initialized && I(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function (e, t) {
        const s = this,
            i = s.params;
        let r = e.closest(`.${i.slideClass}, swiper-slide`);
        !r &&
            s.isElement &&
            t &&
            t.length > 1 &&
            t.includes(e) &&
            [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
            });
        let n,
            a = !1;
        if (r)
            for (let e = 0; e < s.slides.length; e += 1)
                if (s.slides[e] === r) {
                    (a = !0), (n = e);
                    break;
                }
        if (!r || !a) return (s.clickedSlide = void 0), void (s.clickedIndex = void 0);
        (s.clickedSlide = r), s.virtual && s.params.virtual.enabled ? (s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10)) : (s.clickedIndex = n), i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
    },
};
var k = {
    getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let n = l(r, e);
        return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
    },
    setTranslate: function (e, t) {
        const s = this,
            { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
        let o,
            l = 0,
            d = 0;
        s.isHorizontal() ? (l = i ? -e : e) : (d = e), r.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))), (s.previousTranslate = s.translate), (s.translate = s.isHorizontal() ? l : d), r.cssMode ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d) : r.virtualTranslate || (s.isHorizontal() ? (l -= s.cssOverflowAdjustment()) : (d -= s.cssOverflowAdjustment()), (n.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
        const c = s.maxTranslate() - s.minTranslate();
        (o = 0 === c ? 0 : (e - s.minTranslate()) / c), o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
        return -this.snapGrid[0];
    },
    maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, i, r) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
        const n = this,
            { params: a, wrapperEl: o } = n;
        if (n.animating && a.preventInteractionOnTransition) return !1;
        const l = n.minTranslate(),
            d = n.maxTranslate();
        let c;
        if (((c = i && e > l ? l : i && e < d ? d : e), n.updateProgress(c), a.cssMode)) {
            const e = n.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
                if (!n.support.smoothScroll) return u({ swiper: n, targetPosition: -c, side: e ? "left" : "top" }), !0;
                o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
        }
        return (
            0 === t
                ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd")))
                : (n.setTransition(t),
                  n.setTranslate(c),
                  s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")),
                  n.animating ||
                      ((n.animating = !0),
                      n.onTranslateToWrapperTransitionEnd ||
                          (n.onTranslateToWrapperTransitionEnd = function (e) {
                              n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), (n.onTranslateToWrapperTransitionEnd = null), delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"));
                          }),
                      n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
            !0
        );
    },
};
function O(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
    const { activeIndex: n, previousIndex: a } = t;
    let o = i;
    if ((o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a)) {
        if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
    }
}
var A = {
    slideTo: function (e, t, s, i, r) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
        const n = this;
        let a = e;
        a < 0 && (a = 0);
        const { params: o, snapGrid: l, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: h, wrapperEl: f, enabled: m } = n;
        if ((n.animating && o.preventInteractionOnTransition) || (!m && !i && !r)) return !1;
        const v = Math.min(n.params.slidesPerGroupSkip, a);
        let g = v + Math.floor((a - v) / n.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const w = -l[g];
        if (o.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * w),
                    s = Math.floor(100 * d[e]),
                    i = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? (t >= s && t < i - (i - s) / 2 ? (a = e) : t >= s && t < i && (a = e + 1)) : t >= s && (a = e);
            }
        if (n.initialized && a !== p) {
            if (!n.allowSlideNext && (h ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate())) return !1;
            if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1;
        }
        let S;
        if ((a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), (S = a > p ? "next" : a < p ? "prev" : "reset"), (h && -w === n.translate) || (!h && w === n.translate))) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== S && (n.transitionStart(s, S), n.transitionEnd(s, S)), !1;
        if (o.cssMode) {
            const e = n.isHorizontal(),
                s = h ? w : -w;
            if (0 === t) {
                const t = n.virtual && n.params.virtual.enabled;
                t && ((n.wrapperEl.style.scrollSnapType = "none"), (n._immediateVirtual = !0)),
                    t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                        ? ((n._cssModeVirtualInitialSet = !0),
                          requestAnimationFrame(() => {
                              f[e ? "scrollLeft" : "scrollTop"] = s;
                          }))
                        : (f[e ? "scrollLeft" : "scrollTop"] = s),
                    t &&
                        requestAnimationFrame(() => {
                            (n.wrapperEl.style.scrollSnapType = ""), (n._immediateVirtual = !1);
                        });
            } else {
                if (!n.support.smoothScroll) return u({ swiper: n, targetPosition: s, side: e ? "left" : "top" }), !0;
                f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
        }
        return (
            n.setTransition(t),
            n.setTranslate(w),
            n.updateActiveIndex(a),
            n.updateSlidesClasses(),
            n.emit("beforeTransitionStart", t, i),
            n.transitionStart(s, S),
            0 === t
                ? n.transitionEnd(s, S)
                : n.animating ||
                  ((n.animating = !0),
                  n.onSlideToWrapperTransitionEnd ||
                      (n.onSlideToWrapperTransitionEnd = function (e) {
                          n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), (n.onSlideToWrapperTransitionEnd = null), delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, S));
                      }),
                  n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
            !0
        );
    },
    slideToLoop: function (e, t, s, i) {
        if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e)) {
            e = parseInt(e, 10);
        }
        const r = this,
            n = r.grid && r.params.grid && r.params.grid.rows > 1;
        let a = e;
        if (r.params.loop)
            if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
            else {
                let e;
                if (n) {
                    const t = a * r.params.grid.rows;
                    e = r.slides.filter((e) => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column;
                } else e = r.getSlideIndexByData(a);
                const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                    { centeredSlides: s } = r.params;
                let i = r.params.slidesPerView;
                "auto" === i ? (i = r.slidesPerViewDynamic()) : ((i = Math.ceil(parseFloat(r.params.slidesPerView, 10))), s && i % 2 == 0 && (i += 1));
                let o = t - e < i;
                if ((s && (o = o || e < Math.ceil(i / 2)), o)) {
                    const i = s ? (e < r.activeIndex ? "prev" : "next") : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                    r.loopFix({ direction: i, slideTo: !0, activeSlideIndex: "next" === i ? e + 1 : e - t + 1, slideRealIndex: "next" === i ? r.realIndex : void 0 });
                }
                if (n) {
                    const e = a * r.params.grid.rows;
                    a = r.slides.filter((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column;
                } else a = r.getSlideIndexByData(a);
            }
        return (
            requestAnimationFrame(() => {
                r.slideTo(a, t, s, i);
            }),
            r
        );
    },
    slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
            { enabled: r, params: n, animating: a } = i;
        if (!r) return i;
        let o = n.slidesPerGroup;
        "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
            d = i.virtual && n.virtual.enabled;
        if (n.loop) {
            if (a && !d && n.loopPreventsSliding) return !1;
            if ((i.loopFix({ direction: "next" }), (i._clientLeft = i.wrapperEl.clientLeft), i.activeIndex === i.slides.length - 1 && n.cssMode))
                return (
                    requestAnimationFrame(() => {
                        i.slideTo(i.activeIndex + l, e, t, s);
                    }),
                    !0
                );
        }
        return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
            { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: l, animating: d } = i;
        if (!l) return i;
        const c = i.virtual && r.virtual.enabled;
        if (r.loop) {
            if (d && !c && r.loopPreventsSliding) return !1;
            i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = p(o ? i.translate : -i.translate),
            h = n.map((e) => p(e));
        let f = n[h.indexOf(u) - 1];
        if (void 0 === f && r.cssMode) {
            let e;
            n.forEach((t, s) => {
                u >= t && (e = s);
            }),
                void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if ((void 0 !== f && ((m = a.indexOf(f)), m < 0 && (m = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && ((m = m - i.slidesPerViewDynamic("previous", !0) + 1), (m = Math.max(m, 0)))), r.rewind && i.isBeginning)) {
            const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
            return i.slideTo(r, e, t, s);
        }
        return r.loop && 0 === i.activeIndex && r.cssMode
            ? (requestAnimationFrame(() => {
                  i.slideTo(m, e, t, s);
              }),
              !0)
            : i.slideTo(m, e, t, s);
    },
    slideReset: function (e, t, s) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = 0.5);
        const r = this;
        let n = r.activeIndex;
        const a = Math.min(r.params.slidesPerGroupSkip, n),
            o = a + Math.floor((n - a) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[o]) {
            const e = r.snapGrid[o];
            l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup);
        } else {
            const e = r.snapGrid[o - 1];
            l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup);
        }
        return (n = Math.max(n, 0)), (n = Math.min(n, r.slidesGrid.length - 1)), r.slideTo(n, e, t, s);
    },
    slideToClickedSlide: function () {
        const e = this,
            { params: t, slidesEl: s } = e,
            i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
        let r,
            n = e.clickedIndex;
        const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
            if (e.animating) return;
            (r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
                t.centeredSlides
                    ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2
                        ? (e.loopFix(),
                          (n = e.getSlideIndex(h(s, `${o}[data-swiper-slide-index="${r}"]`)[0])),
                          a(() => {
                              e.slideTo(n);
                          }))
                        : e.slideTo(n)
                    : n > e.slides.length - i
                    ? (e.loopFix(),
                      (n = e.getSlideIndex(h(s, `${o}[data-swiper-slide-index="${r}"]`)[0])),
                      a(() => {
                          e.slideTo(n);
                      }))
                    : e.slideTo(n);
        } else e.slideTo(n);
    },
};
var z = {
    loopCreate: function (e) {
        const t = this,
            { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        const r = () => {
                h(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                });
            },
            n = t.grid && s.grid && s.grid.rows > 1,
            a = s.slidesPerGroup * (n ? s.grid.rows : 1),
            o = t.slides.length % a != 0,
            l = n && t.slides.length % s.grid.rows != 0,
            d = (e) => {
                for (let i = 0; i < e; i += 1) {
                    const e = t.isElement ? m("swiper-slide", [s.slideBlankClass]) : m("div", [s.slideClass, s.slideBlankClass]);
                    t.slidesEl.append(e);
                }
            };
        if (o) {
            if (s.loopAddBlankSlides) {
                d(a - (t.slides.length % a)), t.recalcSlides(), t.updateSlides();
            } else f("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            r();
        } else if (l) {
            if (s.loopAddBlankSlides) {
                d(s.grid.rows - (t.slides.length % s.grid.rows)), t.recalcSlides(), t.updateSlides();
            } else f("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
            r();
        } else r();
        t.loopFix({ slideRealIndex: e, direction: s.centeredSlides ? void 0 : "next" });
    },
    loopFix: function (e) {
        let { slideRealIndex: t, slideTo: s = !0, direction: i, setTranslate: r, activeSlideIndex: n, byController: a, byMousewheel: o } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: h } = l,
            { centeredSlides: m } = h;
        if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && h.virtual.enabled)) return s && (h.centeredSlides || 0 !== l.snapIndex ? (h.centeredSlides && l.snapIndex < h.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)) : l.slideTo(l.virtual.slides.length, 0, !1, !0)), (l.allowSlidePrev = c), (l.allowSlideNext = p), void l.emit("loopFix");
        let v = h.slidesPerView;
        "auto" === v ? (v = l.slidesPerViewDynamic()) : ((v = Math.ceil(parseFloat(h.slidesPerView, 10))), m && v % 2 == 0 && (v += 1));
        const g = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
        let w = g;
        w % g != 0 && (w += g - (w % g)), (w += h.loopAdditionalSlides), (l.loopedSlides = w);
        const S = l.grid && h.grid && h.grid.rows > 1;
        d.length < v + w ? f("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === h.grid.fill && f("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
        const T = [],
            b = [];
        let x = l.activeIndex;
        void 0 === n ? (n = l.getSlideIndex(d.filter((e) => e.classList.contains(h.slideActiveClass))[0])) : (x = n);
        const y = "next" === i || !i,
            E = "prev" === i || !i;
        let M = 0,
            C = 0;
        const P = S ? Math.ceil(d.length / h.grid.rows) : d.length,
            I = (S ? d[n].column : n) + (m && void 0 === r ? -v / 2 + 0.5 : 0);
        if (I < w) {
            M = Math.max(w - I, g);
            for (let e = 0; e < w - I; e += 1) {
                const t = e - Math.floor(e / P) * P;
                if (S) {
                    const e = P - t - 1;
                    for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && T.push(t);
                } else T.push(P - t - 1);
            }
        } else if (I + v > P - w) {
            C = Math.max(I - (P - 2 * w), g);
            for (let e = 0; e < C; e += 1) {
                const t = e - Math.floor(e / P) * P;
                S
                    ? d.forEach((e, s) => {
                          e.column === t && b.push(s);
                      })
                    : b.push(t);
            }
        }
        if (
            ((l.__preventObserver__ = !0),
            requestAnimationFrame(() => {
                l.__preventObserver__ = !1;
            }),
            E &&
                T.forEach((e) => {
                    (d[e].swiperLoopMoveDOM = !0), u.prepend(d[e]), (d[e].swiperLoopMoveDOM = !1);
                }),
            y &&
                b.forEach((e) => {
                    (d[e].swiperLoopMoveDOM = !0), u.append(d[e]), (d[e].swiperLoopMoveDOM = !1);
                }),
            l.recalcSlides(),
            "auto" === h.slidesPerView
                ? l.updateSlides()
                : S &&
                  ((T.length > 0 && E) || (b.length > 0 && y)) &&
                  l.slides.forEach((e, t) => {
                      l.grid.updateSlide(t, e, l.slides);
                  }),
            h.watchSlidesProgress && l.updateSlidesOffset(),
            s)
        )
            if (T.length > 0 && E) {
                if (void 0 === t) {
                    const e = l.slidesGrid[x],
                        t = l.slidesGrid[x + M] - e;
                    o ? l.setTranslate(l.translate - t) : (l.slideTo(x + M, 0, !1, !0), r && ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t), (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t)));
                } else if (r) {
                    const e = S ? T.length / h.grid.rows : T.length;
                    l.slideTo(l.activeIndex + e, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
                }
            } else if (b.length > 0 && y)
                if (void 0 === t) {
                    const e = l.slidesGrid[x],
                        t = l.slidesGrid[x - C] - e;
                    o ? l.setTranslate(l.translate - t) : (l.slideTo(x - C, 0, !1, !0), r && ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - t), (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - t)));
                } else {
                    const e = S ? b.length / h.grid.rows : b.length;
                    l.slideTo(l.activeIndex - e, 0, !1, !0);
                }
        if (((l.allowSlidePrev = c), (l.allowSlideNext = p), l.controller && l.controller.control && !a)) {
            const e = { slideRealIndex: t, direction: i, setTranslate: r, activeSlideIndex: n, byController: !0 };
            Array.isArray(l.controller.control)
                ? l.controller.control.forEach((t) => {
                      !t.destroyed && t.params.loop && t.loopFix({ ...e, slideTo: t.params.slidesPerView === h.slidesPerView && s });
                  })
                : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({ ...e, slideTo: l.controller.control.params.slidesPerView === h.slidesPerView && s });
        }
        l.emit("loopFix");
    },
    loopDestroy: function () {
        const e = this,
            { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
            const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
            i[t] = e;
        }),
            e.slides.forEach((e) => {
                e.removeAttribute("data-swiper-slide-index");
            }),
            i.forEach((e) => {
                s.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
    },
};
function G(e, t, s) {
    const i = n(),
        { params: r } = e,
        a = r.edgeSwipeDetection,
        o = r.edgeSwipeThreshold;
    return !a || !(s <= o || s >= i.innerWidth - o) || ("prevent" === a && (t.preventDefault(), !0));
}
function D(e) {
    const t = this,
        s = i();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const a = t.touchEventsData;
    if ("pointerdown" === r.type) {
        if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
        a.pointerId = r.pointerId;
    } else "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
    if ("touchstart" === r.type) return void G(t, r, r.targetTouches[0].pageX);
    const { params: l, touches: d, enabled: c } = t;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === r.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = r.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
    if ("which" in r && 3 === r.which) return;
    if ("button" in r && r.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
        h = r.composedPath ? r.composedPath() : r.path;
    u && r.target && r.target.shadowRoot && h && (p = h[0]);
    const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
        m = !(!r.target || !r.target.shadowRoot);
    if (
        l.noSwiping &&
        (m
            ? (function (e, t) {
                  return (
                      void 0 === t && (t = this),
                      (function t(s) {
                          if (!s || s === i() || s === n()) return null;
                          s.assignedSlot && (s = s.assignedSlot);
                          const r = s.closest(e);
                          return r || s.getRootNode ? r || t(s.getRootNode().host) : null;
                      })(t)
                  );
              })(f, p)
            : p.closest(f))
    )
        return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    (d.currentX = r.pageX), (d.currentY = r.pageY);
    const v = d.currentX,
        g = d.currentY;
    if (!G(t, r, v)) return;
    Object.assign(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), (d.startX = v), (d.startY = g), (a.touchStartTime = o()), (t.allowClick = !0), t.updateSize(), (t.swipeDirection = void 0), l.threshold > 0 && (a.allowThresholdMove = !1);
    let w = !0;
    p.matches(a.focusableElements) && ((w = !1), "SELECT" === p.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== p && s.activeElement.blur();
    const S = w && t.allowTouchMove && l.touchStartPreventDefault;
    (!l.touchStartForcePreventDefault && !S) || p.isContentEditable || r.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r);
}
function _(e) {
    const t = i(),
        s = this,
        r = s.touchEventsData,
        { params: n, touches: a, rtlTranslate: l, enabled: d } = s;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let c,
        p = e;
    if ((p.originalEvent && (p = p.originalEvent), "pointermove" === p.type)) {
        if (null !== r.touchId) return;
        if (p.pointerId !== r.pointerId) return;
    }
    if ("touchmove" === p.type) {
        if (((c = [...p.changedTouches].filter((e) => e.identifier === r.touchId)[0]), !c || c.identifier !== r.touchId)) return;
    } else c = p;
    if (!r.isTouched) return void (r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", p));
    const u = c.pageX,
        h = c.pageY;
    if (p.preventedByNestedSwiper) return (a.startX = u), void (a.startY = h);
    if (!s.allowTouchMove) return p.target.matches(r.focusableElements) || (s.allowClick = !1), void (r.isTouched && (Object.assign(a, { startX: u, startY: h, currentX: u, currentY: h }), (r.touchStartTime = o())));
    if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
            if ((h < a.startY && s.translate <= s.maxTranslate()) || (h > a.startY && s.translate >= s.minTranslate())) return (r.isTouched = !1), void (r.isMoved = !1);
        } else if ((u < a.startX && s.translate <= s.maxTranslate()) || (u > a.startX && s.translate >= s.minTranslate())) return;
    if (t.activeElement && p.target === t.activeElement && p.target.matches(r.focusableElements)) return (r.isMoved = !0), void (s.allowClick = !1);
    r.allowTouchCallbacks && s.emit("touchMove", p), (a.previousX = a.currentX), (a.previousY = a.currentY), (a.currentX = u), (a.currentY = h);
    const f = a.currentX - a.startX,
        m = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + m ** 2) < s.params.threshold) return;
    if (void 0 === r.isScrolling) {
        let e;
        (s.isHorizontal() && a.currentY === a.startY) || (s.isVertical() && a.currentX === a.startX) ? (r.isScrolling = !1) : f * f + m * m >= 25 && ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI), (r.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle));
    }
    if ((r.isScrolling && s.emit("touchMoveOpposite", p), void 0 === r.startMoving && ((a.currentX === a.startX && a.currentY === a.startY) || (r.startMoving = !0)), r.isScrolling)) return void (r.isTouched = !1);
    if (!r.startMoving) return;
    (s.allowClick = !1), !n.cssMode && p.cancelable && p.preventDefault(), n.touchMoveStopPropagation && !n.nested && p.stopPropagation();
    let v = s.isHorizontal() ? f : m,
        g = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
    n.oneWayMovement && ((v = Math.abs(v) * (l ? 1 : -1)), (g = Math.abs(g) * (l ? 1 : -1))), (a.diff = v), (v *= n.touchRatio), l && ((v = -v), (g = -g));
    const w = s.touchesDirection;
    (s.swipeDirection = v > 0 ? "prev" : "next"), (s.touchesDirection = g > 0 ? "prev" : "next");
    const S = s.params.loop && !n.cssMode,
        T = ("next" === s.touchesDirection && s.allowSlideNext) || ("prev" === s.touchesDirection && s.allowSlidePrev);
    if (!r.isMoved) {
        if ((S && T && s.loopFix({ direction: s.swipeDirection }), (r.startTranslate = s.getTranslate()), s.setTransition(0), s.animating)) {
            const e = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
            s.wrapperEl.dispatchEvent(e);
        }
        (r.allowMomentumBounce = !1), !n.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0), s.emit("sliderFirstMove", p);
    }
    if ((new Date().getTime(), r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && S && T && Math.abs(v) >= 1)) return Object.assign(a, { startX: u, startY: h, currentX: u, currentY: h, startTranslate: r.currentTranslate }), (r.loopSwapReset = !0), void (r.startTranslate = r.currentTranslate);
    s.emit("sliderMove", p), (r.isMoved = !0), (r.currentTranslate = v + r.startTranslate);
    let b = !0,
        x = n.resistanceRatio;
    if ((n.touchReleaseOnEdges && (x = 0), v > 0 ? (S && T && r.allowThresholdMove && r.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }), r.currentTranslate > s.minTranslate() && ((b = !1), n.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** x))) : v < 0 && (S && T && r.allowThresholdMove && r.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({ direction: "next", setTranslate: !0, activeSlideIndex: s.slides.length - ("auto" === n.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10))) }), r.currentTranslate < s.maxTranslate() && ((b = !1), n.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** x))), b && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), n.threshold > 0)) {
        if (!(Math.abs(v) > n.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
        if (!r.allowThresholdMove) return (r.allowThresholdMove = !0), (a.startX = a.currentX), (a.startY = a.currentY), (r.currentTranslate = r.startTranslate), void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
    }
    n.followFinger && !n.cssMode && (((n.freeMode && n.freeMode.enabled && s.freeMode) || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate));
}
function V(e) {
    const t = this,
        s = t.touchEventsData;
    let i,
        r = e;
    r.originalEvent && (r = r.originalEvent);
    if ("touchend" === r.type || "touchcancel" === r.type) {
        if (((i = [...r.changedTouches].filter((e) => e.identifier === s.touchId)[0]), !i || i.identifier !== s.touchId)) return;
    } else {
        if (null !== s.touchId) return;
        if (r.pointerId !== s.pointerId) return;
        i = r;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type)) {
        if (!(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    (s.pointerId = null), (s.touchId = null);
    const { params: n, touches: l, rtlTranslate: d, slidesGrid: c, enabled: p } = t;
    if (!p) return;
    if (!n.simulateTouch && "mouse" === r.pointerType) return;
    if ((s.allowTouchCallbacks && t.emit("touchEnd", r), (s.allowTouchCallbacks = !1), !s.isTouched)) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
    n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const u = o(),
        h = u - s.touchStartTime;
    if (t.allowClick) {
        const e = r.path || (r.composedPath && r.composedPath());
        t.updateClickedSlide((e && e[0]) || r.target, e), t.emit("tap click", r), h < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
    }
    if (
        ((s.lastClickTime = o()),
        a(() => {
            t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched || !s.isMoved || !t.swipeDirection || (0 === l.diff && !s.loopSwapReset) || (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
    )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let f;
    if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (f = n.followFinger ? (d ? t.translate : -t.translate) : -s.currentTranslate), n.cssMode)) return;
    if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: f });
    const m = f >= -t.maxTranslate() && !t.params.loop;
    let v = 0,
        g = t.slidesSizesGrid[0];
    for (let e = 0; e < c.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== c[e + t] ? (m || (f >= c[e] && f < c[e + t])) && ((v = e), (g = c[e + t] - c[e])) : (m || f >= c[e]) && ((v = e), (g = c[c.length - 1] - c[c.length - 2]));
    }
    let w = null,
        S = null;
    n.rewind && (t.isBeginning ? (S = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (w = 0));
    const T = (f - c[v]) / g,
        b = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (h > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (T >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? w : v + b) : t.slideTo(v)), "prev" === t.swipeDirection && (T > 1 - n.longSwipesRatio ? t.slideTo(v + b) : null !== S && T < 0 && Math.abs(T) > n.longSwipesRatio ? t.slideTo(S) : t.slideTo(v));
    } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? (r.target === t.navigation.nextEl ? t.slideTo(v + b) : t.slideTo(v)) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + b), "prev" === t.swipeDirection && t.slideTo(null !== S ? S : v));
    }
}
function N() {
    const e = this,
        { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
        a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? (e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
            }, 500))),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function F(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function B() {
    const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let r;
    (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const n = e.maxTranslate() - e.minTranslate();
    (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n), r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function $(e) {
    const t = this;
    C(t, e.target), t.params.cssMode || ("auto" !== t.params.slidesPerView && !t.params.autoHeight) || t.update();
}
function H() {
    const e = this;
    e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const R = (e, t) => {
    const s = i(),
        { params: r, el: n, wrapperEl: a, device: o } = e,
        l = !!r.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
    s[d]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }), n[d]("touchstart", e.onTouchStart, { passive: !1 }), n[d]("pointerdown", e.onTouchStart, { passive: !1 }), s[d]("touchmove", e.onTouchMove, { passive: !1, capture: l }), s[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }), s[d]("touchend", e.onTouchEnd, { passive: !0 }), s[d]("pointerup", e.onTouchEnd, { passive: !0 }), s[d]("pointercancel", e.onTouchEnd, { passive: !0 }), s[d]("touchcancel", e.onTouchEnd, { passive: !0 }), s[d]("pointerout", e.onTouchEnd, { passive: !0 }), s[d]("pointerleave", e.onTouchEnd, { passive: !0 }), s[d]("contextmenu", e.onTouchEnd, { passive: !0 }), (r.preventClicks || r.preventClicksPropagation) && n[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : e[c]("observerUpdate", N, !0), n[d]("load", e.onLoad, { capture: !0 });
};
const j = (e, t) => e.grid && t.grid && t.grid.rows > 1;
var W = { init: !0, direction: "horizontal", oneWayMovement: !1, touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, resizeObserver: !0, nested: !1, createElements: !1, eventsPrefix: "swiper", enabled: !0, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: !1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 5, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: 0.85, watchSlidesProgress: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, loop: !1, loopAddBlankSlides: !0, loopAdditionalSlides: 0, loopPreventsSliding: !0, rewind: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-blank", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideFullyVisibleClass: "swiper-slide-fully-visible", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", lazyPreloaderClass: "swiper-lazy-preloader", lazyPreloadPrevNext: 0, runCallbacksOnInit: !0, _emitClasses: !1 };
function Y(e, t) {
    return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
            r = s[i];
        "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = { enabled: !0 }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), c(t, s)) : c(t, s)) : c(t, s);
    };
}
const q = {
        eventsEmitter: M,
        update: L,
        translate: k,
        transition: {
            setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || ((s.wrapperEl.style.transitionDuration = `${e}ms`), (s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")), s.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const s = this,
                    { params: i } = s;
                i.cssMode || (i.autoHeight && s.updateAutoHeight(), O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const s = this,
                    { params: i } = s;
                (s.animating = !1), i.cssMode || (s.setTransition(0), O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
        },
        slide: A,
        loop: z,
        grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0),
                    (s.style.cursor = "move"),
                    (s.style.cursor = e ? "grabbing" : "grab"),
                    t.isElement &&
                        requestAnimationFrame(() => {
                            t.__preventObserver__ = !1;
                        });
            },
            unsetGrabCursor: function () {
                const e = this;
                (e.params.watchOverflow && e.isLocked) ||
                    e.params.cssMode ||
                    (e.isElement && (e.__preventObserver__ = !0),
                    (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = ""),
                    e.isElement &&
                        requestAnimationFrame(() => {
                            e.__preventObserver__ = !1;
                        }));
            },
        },
        events: {
            attachEvents: function () {
                const e = this,
                    { params: t } = e;
                (e.onTouchStart = D.bind(e)), (e.onTouchMove = _.bind(e)), (e.onTouchEnd = V.bind(e)), (e.onDocumentTouchStart = H.bind(e)), t.cssMode && (e.onScroll = B.bind(e)), (e.onClick = F.bind(e)), (e.onLoad = $.bind(e)), R(e, "on");
            },
            detachEvents: function () {
                R(this, "off");
            },
        },
        breakpoints: {
            setBreakpoint: function () {
                const e = this,
                    { realIndex: t, initialized: s, params: i, el: r } = e,
                    n = i.breakpoints;
                if (!n || (n && 0 === Object.keys(n).length)) return;
                const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!a || e.currentBreakpoint === a) return;
                const o = (a in n ? n[a] : void 0) || e.originalParams,
                    l = j(e, i),
                    d = j(e, o),
                    p = i.enabled;
                l && !d ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && d && (r.classList.add(`${i.containerModifierClass}grid`), ((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === i.grid.fill)) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach((t) => {
                        if (void 0 === o[t]) return;
                        const s = i[t] && i[t].enabled,
                            r = o[t] && o[t].enabled;
                        s && !r && e[t].disable(), !s && r && e[t].enable();
                    });
                const u = o.direction && o.direction !== i.direction,
                    h = i.loop && (o.slidesPerView !== i.slidesPerView || u),
                    f = i.loop;
                u && s && e.changeDirection(), c(e.params, o);
                const m = e.params.enabled,
                    v = e.params.loop;
                Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), p && !m ? e.disable() : !p && m && e.enable(), (e.currentBreakpoint = a), e.emit("_beforeBreakpoint", o), s && (h ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && v ? (e.loopCreate(t), e.updateSlides()) : f && !v && e.loopDestroy()), e.emit("breakpoint", o);
            },
            getBreakpoint: function (e, t, s) {
                if ((void 0 === t && (t = "window"), !e || ("container" === t && !s))) return;
                let i = !1;
                const r = n(),
                    a = "window" === t ? r.innerHeight : s.clientHeight,
                    o = Object.keys(e).map((e) => {
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            const t = parseFloat(e.substr(1));
                            return { value: a * t, point: e };
                        }
                        return { value: e, point: e };
                    });
                o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < o.length; e += 1) {
                    const { point: n, value: a } = o[e];
                    "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = n) : a <= s.clientWidth && (i = n);
                }
                return i || "max";
            },
        },
        checkOverflow: {
            checkOverflow: function () {
                const e = this,
                    { isLocked: t, params: s } = e,
                    { slidesOffsetBefore: i } = s;
                if (i) {
                    const t = e.slides.length - 1,
                        s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                    e.isLocked = e.size > s;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
        },
        classes: {
            addClasses: function () {
                const e = this,
                    { classNames: t, params: s, rtl: i, el: r, device: n } = e,
                    a = (function (e, t) {
                        const s = [];
                        return (
                            e.forEach((e) => {
                                "object" == typeof e
                                    ? Object.keys(e).forEach((i) => {
                                          e[i] && s.push(t + i);
                                      })
                                    : "string" == typeof e && s.push(t + e);
                            }),
                            s
                        );
                    })(["initialized", s.direction, { "free-mode": e.params.freeMode && s.freeMode.enabled }, { autoheight: s.autoHeight }, { rtl: i }, { grid: s.grid && s.grid.rows > 1 }, { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill }, { android: n.android }, { ios: n.ios }, { "css-mode": s.cssMode }, { centered: s.cssMode && s.centeredSlides }, { "watch-progress": s.watchSlidesProgress }], s.containerModifierClass);
                t.push(...a), r.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
                const { el: e, classNames: t } = this;
                e.classList.remove(...t), this.emitContainerClasses();
            },
        },
    },
    X = {};
class U {
    constructor() {
        let e, t;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? (t = r[0]) : ([e, t] = r), t || (t = {}), (t = c({}, t)), e && !t.el && (t.el = e);
        const a = i();
        if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
            const e = [];
            return (
                a.querySelectorAll(t.el).forEach((s) => {
                    const i = c({}, t, { el: s });
                    e.push(new U(i));
                }),
                e
            );
        }
        const o = this;
        (o.__swiper__ = !0), (o.support = x()), (o.device = y({ userAgent: t.userAgent })), (o.browser = E()), (o.eventsListeners = {}), (o.eventsAnyListeners = []), (o.modules = [...o.__modules__]), t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
        const l = {};
        o.modules.forEach((e) => {
            e({ params: t, swiper: o, extendParams: Y(t, l), on: o.on.bind(o), once: o.once.bind(o), off: o.off.bind(o), emit: o.emit.bind(o) });
        });
        const d = c({}, W, l);
        return (
            (o.params = c({}, d, X, t)),
            (o.originalParams = c({}, o.params)),
            (o.passedParams = c({}, t)),
            o.params &&
                o.params.on &&
                Object.keys(o.params.on).forEach((e) => {
                    o.on(e, o.params.on[e]);
                }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            Object.assign(o, {
                enabled: o.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === o.params.direction,
                isVertical: () => "vertical" === o.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
                touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: o.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, pointerId: null, touchId: null },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
            }),
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
        );
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[e];
    }
    getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
            i = g(h(t, `.${s.slideClass}, swiper-slide`)[0]);
        return g(e) - i;
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter((t) => 1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
    }
    recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = h(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
        const e = this;
        e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
        const e = this;
        e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
            r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
        e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed
            ? ""
            : e.className
                  .split(" ")
                  .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                  .join(" ");
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
            const i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
            e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const { params: s, slides: i, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: o } = this;
        let l = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
            let e,
                t = i[o] ? i[o].swiperSlideSize : 0;
            for (let s = o + 1; s < i.length; s += 1) i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1) {
                (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
            }
        else
            for (let e = o - 1; e >= 0; e -= 1) {
                r[o] - r[e] < a && (l += 1);
            }
        return l;
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (
            (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
                t.complete && C(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
        )
            i(), s.autoHeight && e.updateAutoHeight();
        else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(t.length - 1, 0, !1, !0);
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
            i = s.params.direction;
        return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
                ("horizontal" !== e && "vertical" !== e) ||
                (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
                s.el.classList.add(`${s.params.containerModifierClass}${e}`),
                s.emitContainerClasses(),
                (s.params.direction = e),
                s.slides.forEach((t) => {
                    "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                }),
                s.emit("changeDirection"),
                t && s.update()),
            s
        );
    }
    changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) || (!t.rtl && "ltr" === e) || ((t.rtl = "rtl" === e), (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl), t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = "rtl")) : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = "ltr")), t.update());
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s)) return !1;
        (s.swiper = t), s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
        const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
            if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                return s.shadowRoot.querySelector(i());
            }
            return h(s, i())[0];
        })();
        return (
            !r &&
                t.params.createElements &&
                ((r = m("div", t.params.wrapperClass)),
                s.append(r),
                h(s, `.${t.params.slideClass}`).forEach((e) => {
                    r.append(e);
                })),
            Object.assign(t, { el: s, wrapperEl: r, slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r, hostEl: t.isElement ? s.parentNode.host : s, mounted: !0, rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"), rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")), wrongRTL: "-webkit-box" === v(r, "display") }),
            !0
        );
    }
    init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const s = [...t.el.querySelectorAll('[loading="lazy"]')];
        return (
            t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            s.forEach((e) => {
                e.complete
                    ? C(t, e)
                    : e.addEventListener("load", (e) => {
                          C(t, e.target);
                      });
            }),
            I(t),
            (t.initialized = !0),
            I(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
        );
    }
    destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
            { params: i, el: r, wrapperEl: n, slides: a } = s;
        return (
            void 0 === s.params ||
                s.destroyed ||
                (s.emit("beforeDestroy"),
                (s.initialized = !1),
                s.detachEvents(),
                i.loop && s.loopDestroy(),
                t &&
                    (s.removeClasses(),
                    r.removeAttribute("style"),
                    n.removeAttribute("style"),
                    a &&
                        a.length &&
                        a.forEach((e) => {
                            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
                        })),
                s.emit("destroy"),
                Object.keys(s.eventsListeners).forEach((e) => {
                    s.off(e);
                }),
                !1 !== e &&
                    ((s.el.swiper = null),
                    (function (e) {
                        const t = e;
                        Object.keys(t).forEach((e) => {
                            try {
                                t[e] = null;
                            } catch (e) {}
                            try {
                                delete t[e];
                            } catch (e) {}
                        });
                    })(s)),
                (s.destroyed = !0)),
            null
        );
    }
    static extendDefaults(e) {
        c(X, e);
    }
    static get extendedDefaults() {
        return X;
    }
    static get defaults() {
        return W;
    }
    static installModule(e) {
        U.prototype.__modules__ || (U.prototype.__modules__ = []);
        const t = U.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach((e) => U.installModule(e)), U) : (U.installModule(e), U);
    }
}
Object.keys(q).forEach((e) => {
    Object.keys(q[e]).forEach((t) => {
        U.prototype[t] = q[e][t];
    });
}),
    U.use([
        function (e) {
            let { swiper: t, on: s, emit: i } = e;
            const r = n();
            let a = null,
                o = null;
            const l = () => {
                    t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
                },
                d = () => {
                    t && !t.destroyed && t.initialized && i("orientationchange");
                };
            s("init", () => {
                t.params.resizeObserver && void 0 !== r.ResizeObserver
                    ? t &&
                      !t.destroyed &&
                      t.initialized &&
                      ((a = new ResizeObserver((e) => {
                          o = r.requestAnimationFrame(() => {
                              const { width: s, height: i } = t;
                              let r = s,
                                  n = i;
                              e.forEach((e) => {
                                  let { contentBoxSize: s, contentRect: i, target: a } = e;
                                  (a && a !== t.el) || ((r = i ? i.width : (s[0] || s).inlineSize), (n = i ? i.height : (s[0] || s).blockSize));
                              }),
                                  (r === s && n === i) || l();
                          });
                      })),
                      a.observe(t.el))
                    : (r.addEventListener("resize", l), r.addEventListener("orientationchange", d));
            }),
                s("destroy", () => {
                    o && r.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d);
                });
        },
        function (e) {
            let { swiper: t, extendParams: s, on: i, emit: r } = e;
            const a = [],
                o = n(),
                l = function (e, s) {
                    void 0 === s && (s = {});
                    const i = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) return void r("observerUpdate", e[0]);
                        const s = function () {
                            r("observerUpdate", e[0]);
                        };
                        o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0);
                    });
                    i.observe(e, { attributes: void 0 === s.attributes || s.attributes, childList: void 0 === s.childList || s.childList, characterData: void 0 === s.characterData || s.characterData }), a.push(i);
                };
            s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                i("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = (function (e, t) {
                                const s = [];
                                let i = e.parentElement;
                                for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
                                return s;
                            })(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) l(e[t]);
                        }
                        l(t.hostEl, { childList: t.params.observeSlideChildren }), l(t.wrapperEl, { attributes: !1 });
                    }
                }),
                i("destroy", () => {
                    a.forEach((e) => {
                        e.disconnect();
                    }),
                        a.splice(0, a.length);
                });
        },
    ]);
export { U as Swiper, U as default };
//# sourceMappingURL=/sm/e1c20fbeca372506930149db3ff69d6fae43d97cd5eeeba799269d32c769fbf3.map
