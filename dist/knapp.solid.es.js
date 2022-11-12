function ee(e, ...t) {
}
var m = "colors", $ = "sizes", n = "space", ne = { gap: n, gridGap: n, columnGap: n, gridColumnGap: n, rowGap: n, gridRowGap: n, inset: n, insetBlock: n, insetBlockEnd: n, insetBlockStart: n, insetInline: n, insetInlineEnd: n, insetInlineStart: n, margin: n, marginTop: n, marginRight: n, marginBottom: n, marginLeft: n, marginBlock: n, marginBlockEnd: n, marginBlockStart: n, marginInline: n, marginInlineEnd: n, marginInlineStart: n, padding: n, paddingTop: n, paddingRight: n, paddingBottom: n, paddingLeft: n, paddingBlock: n, paddingBlockEnd: n, paddingBlockStart: n, paddingInline: n, paddingInlineEnd: n, paddingInlineStart: n, top: n, right: n, bottom: n, left: n, scrollMargin: n, scrollMarginTop: n, scrollMarginRight: n, scrollMarginBottom: n, scrollMarginLeft: n, scrollMarginX: n, scrollMarginY: n, scrollMarginBlock: n, scrollMarginBlockEnd: n, scrollMarginBlockStart: n, scrollMarginInline: n, scrollMarginInlineEnd: n, scrollMarginInlineStart: n, scrollPadding: n, scrollPaddingTop: n, scrollPaddingRight: n, scrollPaddingBottom: n, scrollPaddingLeft: n, scrollPaddingX: n, scrollPaddingY: n, scrollPaddingBlock: n, scrollPaddingBlockEnd: n, scrollPaddingBlockStart: n, scrollPaddingInline: n, scrollPaddingInlineEnd: n, scrollPaddingInlineStart: n, fontSize: "fontSizes", background: m, backgroundColor: m, backgroundImage: m, borderImage: m, border: m, borderBlock: m, borderBlockEnd: m, borderBlockStart: m, borderBottom: m, borderBottomColor: m, borderColor: m, borderInline: m, borderInlineEnd: m, borderInlineStart: m, borderLeft: m, borderLeftColor: m, borderRight: m, borderRightColor: m, borderTop: m, borderTopColor: m, caretColor: m, color: m, columnRuleColor: m, fill: m, outline: m, outlineColor: m, stroke: m, textDecorationColor: m, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: $, minBlockSize: $, maxBlockSize: $, inlineSize: $, minInlineSize: $, maxInlineSize: $, width: $, minWidth: $, maxWidth: $, height: $, minHeight: $, maxHeight: $, flexBasis: $, gridTemplateColumns: $, gridTemplateRows: $, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, ie = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, F = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o, ...r) => {
    const i = ((s) => JSON.stringify(s, ie))(t);
    return i in e ? e[i] : e[i] = o(t, ...r);
  };
}, D = Symbol.for("sxs.internal"), U = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Y = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: le } = Object.prototype, J = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), se = /\s+(?![^()]*\))/, E = (e) => (t) => e(...typeof t == "string" ? String(t).split(se) : [t]), _ = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: E((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: E((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: E((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: E((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: E((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: E((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, V = /([\d.]+)([^]*)/, ae = (e, t) => e.length ? e.reduce((o, r) => (o.push(...t.map((i) => i.includes("&") ? i.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(i) ? `:is(${r})` : r) : r + " " + i)), o), []) : t, ce = (e, t) => e in de && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (o, r, i, s) => r + (i === "stretch" ? `-moz-available${s};${J(e)}:${r}-webkit-fill-available` : `-moz-fit-content${s};${J(e)}:${r}fit-content`) + s) : String(t), de = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, j = (e) => e ? e + "-" : "", te = (e, t, o) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, i, s, p, a) => p == "$" == !!s ? r : (i || p == "--" ? "calc(" : "") + "var(--" + (p === "$" ? j(t) + (a.includes("$") ? "" : j(o)) + a.replace(/\$/g, "-") : a) + ")" + (i || p == "--" ? "*" + (i || "") + (s || "1") + ")" : "")), ge = /\s*,\s*(?![^()]*\))/, pe = Object.prototype.toString, w = (e, t, o, r, i) => {
  let s, p, a;
  const l = (d, u, b) => {
    let c, g;
    const f = (S) => {
      for (c in S) {
        const k = c.charCodeAt(0) === 64, H = k && Array.isArray(S[c]) ? S[c] : [S[c]];
        for (g of H) {
          const I = /[A-Z]/.test(h = c) ? h : h.replace(/-[^]/g, (x) => x[1].toUpperCase()), M = typeof g == "object" && g && g.toString === pe && (!r.utils[I] || !u.length);
          if (I in r.utils && !M) {
            const x = r.utils[I];
            if (x !== p) {
              p = x, f(x(g)), p = null;
              continue;
            }
          } else if (I in _) {
            const x = _[I];
            if (x !== a) {
              a = x, f(x(g)), a = null;
              continue;
            }
          }
          if (k && (y = c.slice(1) in r.media ? "@media " + r.media[c.slice(1)] : c, c = y.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (x, B, z, C, R, W) => {
            const v = V.test(B), L = 0.0625 * (v ? -1 : 1), [O, X] = v ? [C, B] : [B, C];
            return "(" + (z[0] === "=" ? "" : z[0] === ">" === v ? "max-" : "min-") + O + ":" + (z[0] !== "=" && z.length === 1 ? X.replace(V, (oe, N, G) => Number(N) + L * (z === ">" ? 1 : -1) + G) : X) + (R ? ") and (" + (R[0] === ">" ? "min-" : "max-") + O + ":" + (R.length === 1 ? W.replace(V, (oe, N, G) => Number(N) + L * (R === ">" ? -1 : 1) + G) : W) : "") + ")";
          })), M) {
            const x = k ? b.concat(c) : [...b], B = k ? [...u] : ae(u, c.split(ge));
            s !== void 0 && i(q(...s)), s = void 0, l(g, B, x);
          } else
            s === void 0 && (s = [[], u, b]), c = k || c.charCodeAt(0) !== 36 ? c : `--${j(r.prefix)}${c.slice(1).replace(/\$/g, "-")}`, g = M ? g : typeof g == "number" ? g && I in ue ? String(g) + "px" : String(g) : te(ce(I, g ?? ""), r.prefix, r.themeMap[I]), s[0].push(`${k ? `${c} ` : `${J(c)}:`}${g}`);
        }
      }
      var y, h;
    };
    f(d), s !== void 0 && i(q(...s)), s = void 0;
  };
  l(e, t, o);
}, q = (e, t, o) => `${o.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(o.length ? o.length + 1 : 0).join("}")}`, ue = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, K = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), T = (e) => ((t) => {
  let o, r = "";
  for (o = Math.abs(t); o > 52; o = o / 52 | 0)
    r = K(o % 52) + r;
  return K(o % 52) + r;
})(((t, o) => {
  let r = o.length;
  for (; r; )
    t = 33 * t ^ o.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), A = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], he = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, fe = (e) => {
  let t;
  const o = () => {
    const { cssRules: i } = t.sheet;
    return [].map.call(i, (s, p) => {
      const { cssText: a } = s;
      let l = "";
      if (a.startsWith("--sxs"))
        return "";
      if (i[p - 1] && (l = i[p - 1].cssText).startsWith("--sxs")) {
        if (!s.cssRules.length)
          return "";
        for (const d in t.rules)
          if (t.rules[d].group === s)
            return `--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;
        return s.cssRules.length ? `${l}${a}` : "";
      }
      return a;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: a, sheet: l } = t;
      if (!l.deleteRule) {
        for (; Object(Object(l.cssRules)[0]).type === 3; )
          l.cssRules.splice(0, 1);
        l.cssRules = [];
      }
      for (const d in a)
        delete a[d];
    }
    const i = Object(e).styleSheets || [];
    for (const a of i)
      if (he(a)) {
        for (let l = 0, d = a.cssRules; d[l]; ++l) {
          const u = Object(d[l]);
          if (u.type !== 1)
            continue;
          const b = Object(d[l + 1]);
          if (b.type !== 4)
            continue;
          ++l;
          const { cssText: c } = u;
          if (!c.startsWith("--sxs"))
            continue;
          const g = c.slice(14, -3).trim().split(/\s+/), f = A[g[0]];
          f && (t || (t = { sheet: a, reset: r, rules: {}, toString: o }), t.rules[f] = { group: b, index: l, cache: new Set(g) });
        }
        if (t)
          break;
      }
    if (!t) {
      const a = (l, d) => ({ type: d, cssRules: [], insertRule(u, b) {
        this.cssRules.splice(b, 0, a(u, { import: 3, undefined: 1 }[(u.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return l === "@media{}" ? `@media{${[].map.call(this.cssRules, (u) => u.cssText).join("")}}` : l;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : a("", "text/css"), rules: {}, reset: r, toString: o };
    }
    const { sheet: s, rules: p } = t;
    for (let a = A.length - 1; a >= 0; --a) {
      const l = A[a];
      if (!p[l]) {
        const d = A[a + 1], u = p[d] ? p[d].index : s.cssRules.length;
        s.insertRule("@media{}", u), s.insertRule(`--sxs{--sxs:${a}}`, u), p[l] = { group: s.cssRules[u + 1], index: u, cache: /* @__PURE__ */ new Set([a]) };
      }
      me(p[l]);
    }
  };
  return r(), t;
}, me = (e) => {
  const t = e.group;
  let o = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, o), ++o;
    } catch {
    }
  };
}, P = Symbol(), be = F(), Se = (e, t) => be(e, () => (...o) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const i of o)
    if (i != null)
      if (i[D]) {
        r.type == null && (r.type = i[D].type);
        for (const s of i[D].composers)
          r.composers.add(s);
      } else
        i.constructor !== Object || i.$$typeof ? r.type == null && (r.type = i) : r.composers.add(ke(i, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), ye(e, r, t);
}), ke = ({ variants: e, compoundVariants: t, defaultVariants: o, ...r }, i) => {
  const s = `${j(i.prefix)}c-${T(r)}`, p = [], a = [], l = /* @__PURE__ */ Object.create(null), d = [];
  for (const c in o)
    l[c] = String(o[c]);
  if (typeof e == "object" && e)
    for (const c in e) {
      u = l, b = c, le.call(u, b) || (l[c] = "undefined");
      const g = e[c];
      for (const f in g) {
        const S = { [c]: String(f) };
        String(f) === "undefined" && d.push(c);
        const y = g[f], h = [S, y, !Y(y)];
        p.push(h);
      }
    }
  var u, b;
  if (typeof t == "object" && t)
    for (const c of t) {
      let { css: g, ...f } = c;
      g = typeof g == "object" && g || {};
      for (const y in f)
        f[y] = String(f[y]);
      const S = [f, g, !Y(g)];
      a.push(S);
    }
  return [s, r, p, a, l, d];
}, ye = (e, t, o) => {
  const [r, i, s, p] = $e(t.composers), a = typeof t.type == "function" || t.type.$$typeof ? ((b) => {
    function c() {
      for (let g = 0; g < c[P].length; g++) {
        const [f, S] = c[P][g];
        b.rules[f].apply(S);
      }
      return c[P] = [], null;
    }
    return c[P] = [], c.rules = {}, A.forEach((g) => c.rules[g] = { apply: (f) => c[P].push([g, f]) }), c;
  })(o) : null, l = (a || o).rules, d = `.${r}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`, u = (b) => {
    b = typeof b == "object" && b || xe;
    const { css: c, ...g } = b, f = {};
    for (const h in s)
      if (delete g[h], h in b) {
        let k = b[h];
        typeof k == "object" && k ? f[h] = { "@initial": s[h], ...k } : (k = String(k), f[h] = k !== "undefined" || p.has(h) ? k : s[h]);
      } else
        f[h] = s[h];
    const S = /* @__PURE__ */ new Set([...i]);
    for (const [h, k, H, I] of t.composers) {
      o.rules.styled.cache.has(h) || (o.rules.styled.cache.add(h), w(k, [`.${h}`], [], e, (B) => {
        l.styled.apply(B);
      }));
      const M = Q(H, f, e.media), x = Q(I, f, e.media, !0);
      for (const B of M)
        if (B !== void 0)
          for (const [z, C, R] of B) {
            const W = `${h}-${T(C)}-${z}`;
            S.add(W);
            const v = (R ? o.rules.resonevar : o.rules.onevar).cache, L = R ? l.resonevar : l.onevar;
            v.has(W) || (v.add(W), w(C, [`.${W}`], [], e, (O) => {
              L.apply(O);
            }));
          }
      for (const B of x)
        if (B !== void 0)
          for (const [z, C] of B) {
            const R = `${h}-${T(C)}-${z}`;
            S.add(R), o.rules.allvar.cache.has(R) || (o.rules.allvar.cache.add(R), w(C, [`.${R}`], [], e, (W) => {
              l.allvar.apply(W);
            }));
          }
    }
    if (typeof c == "object" && c) {
      const h = `${r}-i${T(c)}-css`;
      S.add(h), o.rules.inline.cache.has(h) || (o.rules.inline.cache.add(h), w(c, [`.${h}`], [], e, (k) => {
        l.inline.apply(k);
      }));
    }
    for (const h of String(b.className || "").trim().split(/\s+/))
      h && S.add(h);
    const y = g.className = [...S].join(" ");
    return { type: t.type, className: y, selector: d, props: g, toString: () => y, deferredInjector: a };
  };
  return U(u, { className: r, selector: d, [D]: t, toString: () => (o.rules.styled.cache.has(r) || u(), r) });
}, $e = (e) => {
  let t = "";
  const o = [], r = {}, i = [];
  for (const [s, , , , p, a] of e) {
    t === "" && (t = s), o.push(s), i.push(...a);
    for (const l in p) {
      const d = p[l];
      (r[l] === void 0 || d !== "undefined" || a.includes(d)) && (r[l] = d);
    }
  }
  return [t, o, r, new Set(i)];
}, Q = (e, t, o, r) => {
  const i = [];
  e:
    for (let [s, p, a] of e) {
      if (a)
        continue;
      let l, d = 0, u = !1;
      for (l in s) {
        const b = s[l];
        let c = t[l];
        if (c !== b) {
          if (typeof c != "object" || !c)
            continue e;
          {
            let g, f, S = 0;
            for (const y in c) {
              if (b === String(c[y])) {
                if (y !== "@initial") {
                  const h = y.slice(1);
                  (f = f || []).push(h in o ? o[h] : y.replace(/^@media ?/, "")), u = !0;
                }
                d += S, g = !0;
              }
              ++S;
            }
            if (f && f.length && (p = { ["@media " + f.join(", ")]: p }), !g)
              continue e;
          }
        }
      }
      (i[d] = i[d] || []).push([r ? "cv" : `${l}-${s[l]}`, p, u]);
    }
  return i;
}, xe = {}, Be = F(), Re = (e, t) => Be(e, () => (...o) => {
  const r = () => {
    for (let i of o) {
      i = typeof i == "object" && i || {};
      let s = T(i);
      if (!t.rules.global.cache.has(s)) {
        if (t.rules.global.cache.add(s), "@import" in i) {
          let p = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let a of [].concat(i["@import"]))
            a = a.includes('"') || a.includes("'") ? a : `"${a}"`, t.sheet.insertRule(`@import ${a};`, p++);
          delete i["@import"];
        }
        w(i, [], [], e, (p) => {
          t.rules.global.apply(p);
        });
      }
    }
    return "";
  };
  return U(r, { toString: r });
}), Ie = F(), ze = (e, t) => Ie(e, () => (o) => {
  const r = `${j(e.prefix)}k-${T(o)}`, i = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const s = [];
      w(o, [], [], e, (a) => s.push(a));
      const p = `@keyframes ${r}{${s.join("")}}`;
      t.rules.global.apply(p);
    }
    return r;
  };
  return U(i, { get name() {
    return i();
  }, toString: i });
}), We = class {
  constructor(e, t, o, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = o == null ? "" : String(o), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + j(this.prefix) + j(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, je = F(), Ce = (e, t) => je(e, () => (o, r) => {
  r = typeof o == "object" && o || Object(r);
  const i = `.${o = (o = typeof o == "string" ? o : "") || `${j(e.prefix)}t-${T(r)}`}`, s = {}, p = [];
  for (const l in r) {
    s[l] = {};
    for (const d in r[l]) {
      const u = `--${j(e.prefix)}${l}-${d}`, b = te(String(r[l][d]), e.prefix, l);
      s[l][d] = new We(d, b, l, e.prefix), p.push(`${u}:${b}`);
    }
  }
  const a = () => {
    if (p.length && !t.rules.themed.cache.has(o)) {
      t.rules.themed.cache.add(o);
      const l = `${r === e.theme ? ":root," : ""}.${o}{${p.join(";")}}`;
      t.rules.themed.apply(l);
    }
    return o;
  };
  return { ...s, get className() {
    return a();
  }, selector: i, toString: a };
}), Te = F(), ve = (e) => {
  let t = !1;
  const o = Te(e, (r) => {
    t = !0;
    const i = "prefix" in (r = typeof r == "object" && r || {}) ? String(r.prefix) : "", s = typeof r.media == "object" && r.media || {}, p = typeof r.root == "object" ? r.root || null : globalThis.document || null, a = typeof r.theme == "object" && r.theme || {}, l = { prefix: i, media: s, theme: a, themeMap: typeof r.themeMap == "object" && r.themeMap || { ...ne }, utils: typeof r.utils == "object" && r.utils || {} }, d = fe(p), u = { css: Se(l, d), globalCss: Re(l, d), keyframes: ze(l, d), createTheme: Ce(l, d), reset() {
      d.reset(), u.theme.toString();
    }, theme: {}, sheet: d, config: l, prefix: i, getCssText: d.toString, toString: d.toString };
    return String(u.theme = u.createTheme(a)), u;
  });
  return t || o.reset(), o;
};
const { createTheme: re, css: Z, getCssText: Ee } = ve({
  theme: {
    space: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px"
    },
    fontSizes: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.3rem",
      xl: "1.5rem"
    },
    fonts: {
      serif: "Baskerville, 'Times New Roman', Times, serif",
      sansSerif: "GillSans, Calibri, Trebuchet, sans-serif"
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      md: "1px"
    },
    borderStyles: {},
    radii: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px"
    },
    shadows: {}
  }
});
console.log("CSS:", Ee());
re("darkTheme", {
  colors: {
    background: "#090C08",
    black: "#090C08",
    blue: "#63B0CD",
    foreground: "#F4F5F6",
    gray: "#A7AAA4",
    green: "#37A748",
    orange: "#F18805",
    purple: "#D232FF",
    red: "#E43A4B",
    white: "#F4F5F6"
  }
});
re("lightTheme", {
  colors: {
    background: "#F4F5F6",
    black: "#090C08",
    blue: "#2F546A",
    foreground: "#090C08",
    gray: "#36393B",
    green: "#2A4D14",
    orange: "#75450C",
    purple: "#693668",
    red: "#AD1F2D",
    white: "#F4F5F6"
  }
});
const we = ["<button", ">Hello World</button>"], Me = Z({
  backgroundColor: "$blue",
  color: "$background",
  fontWeight: "normal",
  border: "0px",
  borderRadius: "$md",
  fontFamily: "unset",
  fontSize: "$lg",
  padding: "$xl $md",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$blue"
  },
  "&:active": {
    backgroundColor: "$red"
  }
}), Le = () => ee(we, void 0 + (Me(), void 0)), Pe = ["<label", "><!--#-->", "<!--/--><input", "></label>"], Ae = Z({
  display: "flex",
  flexDirection: "column",
  fontSize: "$md",
  color: "$foreground"
}), Fe = Z({
  backgroundColor: "$background",
  color: "$foreground",
  fontWeight: "normal",
  padding: "$xl $md",
  borderWidth: "$md",
  borderColor: "$foreground",
  borderRadius: "$md",
  fontSize: "$md"
}), Oe = (e) => ee(Pe, void 0 + (Ae(), void 0), (e.Label, void 0), (Fe(), void 0));
export {
  Le as Button,
  Oe as Input
};
