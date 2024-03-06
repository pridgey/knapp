import { ssr, ssrHydrationKey, ssrAttribute, escape, createComponent } from "solid-js/web";
import { Show } from "solid-js";
const button = "_button_f8j04_1";
const styles$1 = {
  button
};
const _tmpl$$1 = ["<a", ' style="', '">', "</a>"], _tmpl$2$1 = ["<button", ' style="', '"', ">", "</button>"];
const Button = (props) => {
  var _a, _b, _c, _d;
  const buttonColor = ((_a = props.BackgroundColor) == null ? void 0 : _a.includes("--")) ? `var(${props.BackgroundColor})` : ((_b = props.BackgroundColor) == null ? void 0 : _b.length) ? props.BackgroundColor : "var(--color-orange)";
  const textColor = ((_c = props.TextColor) == null ? void 0 : _c.includes("--")) ? `var(${props.TextColor})` : ((_d = props.TextColor) == null ? void 0 : _d.length) ? props.TextColor : "black";
  if (props.Href) {
    return ssr(_tmpl$$1, ssrHydrationKey() + ssrAttribute("class", escape(styles$1.button, true), false) + ssrAttribute("href", escape(props.Href, true), false), "background-color:" + escape(buttonColor, true) + (";color:" + escape(textColor, true)), escape(props.children));
  }
  return ssr(_tmpl$2$1, ssrHydrationKey() + ssrAttribute("class", escape(styles$1.button, true), false), "background-color:" + escape(buttonColor, true) + (";color:" + escape(textColor, true)), ssrAttribute("type", escape(props.Type, true), false), escape(props.children));
};
const inputlabel = "_inputlabel_svjol_1";
const inputcontrol = "_inputcontrol_svjol_17";
const inputerror = "_inputerror_svjol_35";
const styles = {
  inputlabel,
  inputcontrol,
  inputerror
};
const _tmpl$ = ["<span", ' role="alert"', ">", "</span>"], _tmpl$2 = ["<label", "><!--#-->", '<!--/--><input id="', '"', "><!--#-->", "<!--/--></label>"];
const Input = (props) => {
  return ssr(_tmpl$2, ssrHydrationKey() + ssrAttribute("class", escape(styles.inputlabel, true), false), escape(props.Label), `${escape(props.Name, true)}-input`, ssrAttribute("type", escape(props.Type, true), false) + ssrAttribute("placeholder", escape(props.Placeholder, true), false) + ssrAttribute("name", escape(props.Name, true), false) + ssrAttribute("class", escape(styles.inputcontrol, true), false), escape(createComponent(Show, {
    get when() {
      return props.Error;
    },
    get children() {
      return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("class", escape(styles.inputerror, true), false), escape(props.Error));
    }
  })));
};
const theme = `:root {\r
  --font-primary: "Baskerville, 'Times New Roman', Times, serif";\r
  --font-secondary: "GillSans, Calibri, Trebuchet, sans-serif";\r
  --color-background: "#F4F5F6";\r
  --color-black: "#090C08";\r
  --color-blue: "#2F546A";\r
  --color-foreground: "#090C08";\r
  --color-gray: "#36393B";\r
  --color-green: "#2A4D14";\r
  --color-orange: "#75450C";\r
  --color-purple: "#693668";\r
  --color-red: "#AD1F2D";\r
  --color-white: "#F4F5F6";\r
  --color-primary: var(--color-blue);\r
  --color-secondary: var(--color-purple);\r
}\r
\r
@media (prefers-color-scheme: dark) {\r
  :root {\r
    --color-background: "#090C08";\r
    --color-black: "#090C08";\r
    --color-blue: "#63B0CD";\r
    --color-foreground: "#F4F5F6";\r
    --color-gray: "#A7AAA4";\r
    --color-green: "#37A748";\r
    --color-orange: "#F18805";\r
    --color-purple: "#D232FF";\r
    --color-red: "#E43A4B";\r
    --color-white: "#F4F5F6";\r
  }\r
}\r
`;
const theme$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: theme
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button,
  Input,
  theme$1 as theme
};
