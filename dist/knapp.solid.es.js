const h = {};
function k(t) {
  h.context = t;
}
function B() {
  return {
    ...h.context,
    id: `${h.context.id}${h.context.count++}-`,
    count: 0
  };
}
const D = (t, e) => t === e, x = {
  equals: D
};
let N = A;
const b = 1, p = 2, j = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var i = null;
let a = null, l = null, u = null, f = null, y = 0;
function _(t, e, r) {
  r = r ? Object.assign({}, x, r) : x;
  const n = q(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, C(n), O.bind(n);
}
function g(t) {
  const e = l;
  l = null;
  try {
    return t();
  } finally {
    l = e;
  }
}
function O() {
  const t = a;
  if (this.sources && (this.state || t))
    if (this.state === b || t)
      C(this);
    else {
      const e = u;
      u = null, d(() => v(this), !1), u = e;
    }
  if (l) {
    const e = this.observers ? this.observers.length : 0;
    l.sources ? (l.sources.push(this), l.sourceSlots.push(e)) : (l.sources = [this], l.sourceSlots = [e]), this.observers ? (this.observers.push(l), this.observerSlots.push(l.sources.length - 1)) : (this.observers = [l], this.observerSlots = [l.sources.length - 1]);
  }
  return this.value;
}
function U(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && d(() => {
    for (let o = 0; o < t.observers.length; o += 1) {
      const s = t.observers[o], c = a && a.running;
      c && a.disposed.has(s), (c && !s.tState || !c && !s.state) && (s.pure ? u.push(s) : f.push(s), s.observers && T(s)), c || (s.state = b);
    }
    if (u.length > 1e6)
      throw u = [], new Error();
  }, !1)), e;
}
function C(t) {
  if (!t.fn)
    return;
  E(t);
  const e = i, r = l, n = y;
  l = i = t, H(t, t.value, n), l = r, i = e;
}
function H(t, e, r) {
  let n;
  try {
    n = t.fn(e);
  } catch (o) {
    t.pure && (t.state = b), $(o);
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? U(t, n) : t.value = n, t.updatedAt = r);
}
function q(t, e, r, n = b, o) {
  const s = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: i,
    context: null,
    pure: r
  };
  return i === null || i !== j && (i.owned ? i.owned.push(s) : i.owned = [s]), s;
}
function S(t) {
  const e = a;
  if (t.state === 0 || e)
    return;
  if (t.state === p || e)
    return v(t);
  if (t.suspense && g(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const r = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < y); )
    (t.state || e) && r.push(t);
  for (let n = r.length - 1; n >= 0; n--)
    if (t = r[n], t.state === b || e)
      C(t);
    else if (t.state === p || e) {
      const o = u;
      u = null, d(() => v(t, r[0]), !1), u = o;
    }
}
function d(t, e) {
  if (u)
    return t();
  let r = !1;
  e || (u = []), f ? r = !0 : f = [], y++;
  try {
    const n = t();
    return L(r), n;
  } catch (n) {
    u || (f = null), $(n);
  }
}
function L(t) {
  if (u && (A(u), u = null), t)
    return;
  const e = f;
  f = null, e.length && d(() => N(e), !1);
}
function A(t) {
  for (let e = 0; e < t.length; e++)
    S(t[e]);
}
function v(t, e) {
  const r = a;
  t.state = 0;
  for (let n = 0; n < t.sources.length; n += 1) {
    const o = t.sources[n];
    o.sources && (o.state === b || r ? o !== e && S(o) : (o.state === p || r) && v(o, e));
  }
}
function T(t) {
  const e = a;
  for (let r = 0; r < t.observers.length; r += 1) {
    const n = t.observers[r];
    (!n.state || e) && (n.state = p, n.pure ? u.push(n) : f.push(n), n.observers && T(n));
  }
}
function E(t) {
  let e;
  if (t.sources)
    for (; t.sources.length; ) {
      const r = t.sources.pop(), n = t.sourceSlots.pop(), o = r.observers;
      if (o && o.length) {
        const s = o.pop(), c = r.observerSlots.pop();
        n < o.length && (s.sourceSlots[c] = n, o[n] = s, r.observerSlots[n] = c);
      }
    }
  if (t.owned) {
    for (e = 0; e < t.owned.length; e++)
      E(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = 0; e < t.cleanups.length; e++)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0, t.context = null;
}
function P(t) {
  return t instanceof Error || typeof t == "string" ? t : new Error("Unknown error");
}
function $(t) {
  throw t = P(t), t;
}
let G = !1;
function I(t, e) {
  if (G && h.context) {
    const r = h.context;
    k(B());
    const n = g(() => t(e || {}));
    return k(r), n;
  }
  return g(() => t(e || {}));
}
function M(t) {
  let e = !1;
  const r = t.keyed, n = _(() => t.when, void 0, {
    equals: (o, s) => e ? o === s : !o == !s
  });
  return _(() => {
    const o = n();
    if (o) {
      const s = t.children, c = typeof s == "function" && s.length > 0;
      return e = r || c, c ? g(() => s(o)) : s;
    }
    return t.fallback;
  }, void 0, void 0);
}
function m(t, ...e) {
}
const R = "_button_f8j04_1", F = {
  button: R
}, z = ["<a", ' style="', '">', "</a>"], K = ["<button", ' style="', '"', ">", "</button>"], Z = (t) => {
  var e, r, n, o;
  return (e = t.BackgroundColor) != null && e.includes("--") ? `${t.BackgroundColor}` : (r = t.BackgroundColor) != null && r.length && t.BackgroundColor, (n = t.TextColor) != null && n.includes("--") ? `${t.TextColor}` : (o = t.TextColor) != null && o.length && t.TextColor, t.Href ? m(z, void 0 + (F.button, void 0) + (t.Href, void 0), "background-color:" + void 0 + (";color:" + void 0), (t.children, void 0)) : m(K, void 0 + (F.button, void 0), "background-color:" + void 0 + (";color:" + void 0), (t.Type, void 0), (t.children, void 0));
}, Q = "_inputlabel_svjol_1", V = "_inputcontrol_svjol_17", W = "_inputerror_svjol_35", w = {
  inputlabel: Q,
  inputcontrol: V,
  inputerror: W
}, J = ["<span", ' role="alert"', ">", "</span>"], X = ["<label", "><!--#-->", '<!--/--><input id="', '"', "><!--#-->", "<!--/--></label>"], tt = (t) => m(X, void 0 + (w.inputlabel, void 0), (t.Label, void 0), `${t.Name, void 0}-input`, (t.Type, void 0) + (t.Placeholder, void 0) + (t.Name, void 0) + (w.inputcontrol, void 0), (I(M, {
  get when() {
    return t.Error;
  },
  get children() {
    return m(J, void 0, (w.inputerror, void 0), (t.Error, void 0));
  }
}), void 0)), Y = `:root{--font-primary: "Baskerville, 'Times New Roman', Times, serif";--font-secondary: "GillSans, Calibri, Trebuchet, sans-serif";--color-background: "#F4F5F6";--color-black: "#090C08";--color-blue: "#2F546A";--color-foreground: "#090C08";--color-gray: "#36393B";--color-green: "#2A4D14";--color-orange: "#75450C";--color-purple: "#693668";--color-red: "#AD1F2D";--color-white: "#F4F5F6";--color-primary: var(--color-blue);--color-secondary: var(--color-purple)}@media (prefers-color-scheme: dark){:root{--color-background: "#090C08";--color-black: "#090C08";--color-blue: "#63B0CD";--color-foreground: "#F4F5F6";--color-gray: "#A7AAA4";--color-green: "#37A748";--color-orange: "#F18805";--color-purple: "#D232FF";--color-red: "#E43A4B";--color-white: "#F4F5F6"}}
`, et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y
}, Symbol.toStringTag, { value: "Module" }));
export {
  Z as Button,
  tt as Input,
  et as theme
};
