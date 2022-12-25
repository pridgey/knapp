(function(f,c){typeof exports=="object"&&typeof module<"u"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):(f=typeof globalThis<"u"?globalThis:f||self,c(f.knapp={}))})(this,function(f){"use strict";const c={};function _(t){c.context=t}function D(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const S={equals:(t,e)=>t===e};let N=x;const p=1,g=2,O={owned:null,cleanups:null,context:null,owner:null};var a=null;let h=null,s=null,u=null,b=null,w=0;function T(t,e,r){r=r?Object.assign({},S,r):S;const n=H(t,e,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=r.equals||void 0,k(n),U.bind(n)}function d(t){const e=s;s=null;try{return t()}finally{s=e}}function U(){const t=h;if(this.sources&&(this.state||t))if(this.state===p||t)k(this);else{const e=u;u=null,m(()=>v(this),!1),u=e}if(s){const e=this.observers?this.observers.length:0;s.sources?(s.sources.push(this),s.sourceSlots.push(e)):(s.sources=[this],s.sourceSlots=[e]),this.observers?(this.observers.push(s),this.observerSlots.push(s.sources.length-1)):(this.observers=[s],this.observerSlots=[s.sources.length-1])}return this.value}function j(t,e,r){let n=t.value;return(!t.comparator||!t.comparator(n,e))&&(t.value=e,t.observers&&t.observers.length&&m(()=>{for(let o=0;o<t.observers.length;o+=1){const l=t.observers[o],i=h&&h.running;i&&h.disposed.has(l),(i&&!l.tState||!i&&!l.state)&&(l.pure?u.push(l):b.push(l),l.observers&&A(l)),i||(l.state=p)}if(u.length>1e6)throw u=[],new Error},!1)),e}function k(t){if(!t.fn)return;E(t);const e=a,r=s,n=w;s=a=t,q(t,t.value,n),s=r,a=e}function q(t,e,r){let n;try{n=t.fn(e)}catch(o){t.pure&&(t.state=p),$(o)}(!t.updatedAt||t.updatedAt<=r)&&(t.updatedAt!=null&&"observers"in t?j(t,n):t.value=n,t.updatedAt=r)}function H(t,e,r,n=p,o){const l={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:a,context:null,pure:r};return a===null||a!==O&&(a.owned?a.owned.push(l):a.owned=[l]),l}function F(t){const e=h;if(t.state===0||e)return;if(t.state===g||e)return v(t);if(t.suspense&&d(t.suspense.inFallback))return t.suspense.effects.push(t);const r=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<w);)(t.state||e)&&r.push(t);for(let n=r.length-1;n>=0;n--)if(t=r[n],t.state===p||e)k(t);else if(t.state===g||e){const o=u;u=null,m(()=>v(t,r[0]),!1),u=o}}function m(t,e){if(u)return t();let r=!1;e||(u=[]),b?r=!0:b=[],w++;try{const n=t();return M(r),n}catch(n){u||(b=null),$(n)}}function M(t){if(u&&(x(u),u=null),t)return;const e=b;b=null,e.length&&m(()=>N(e),!1)}function x(t){for(let e=0;e<t.length;e++)F(t[e])}function v(t,e){const r=h;t.state=0;for(let n=0;n<t.sources.length;n+=1){const o=t.sources[n];o.sources&&(o.state===p||r?o!==e&&F(o):(o.state===g||r)&&v(o,e))}}function A(t){const e=h;for(let r=0;r<t.observers.length;r+=1){const n=t.observers[r];(!n.state||e)&&(n.state=g,n.pure?u.push(n):b.push(n),n.observers&&A(n))}}function E(t){let e;if(t.sources)for(;t.sources.length;){const r=t.sources.pop(),n=t.sourceSlots.pop(),o=r.observers;if(o&&o.length){const l=o.pop(),i=r.observerSlots.pop();n<o.length&&(l.sourceSlots[i]=n,o[n]=l,r.observerSlots[n]=i)}}if(t.owned){for(e=0;e<t.owned.length;e++)E(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function P(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function $(t){throw t=P(t),t}let I=!1;function L(t,e){if(I&&c.context){const r=c.context;_(D());const n=d(()=>t(e||{}));return _(r),n}return d(()=>t(e||{}))}function z(t){let e=!1;const r=t.keyed,n=T(()=>t.when,void 0,{equals:(o,l)=>e?o===l:!o==!l});return T(()=>{const o=n();if(o){const l=t.children,i=typeof l=="function"&&l.length>0;return e=r||i,i?d(()=>l(o)):l}return t.fallback},void 0,void 0)}function y(t,...e){}function Y(t,e){}function Z(){}function tt(t){}const B={button:"_button_z5dlc_1"},G=["<a",' style="','">',"</a>"],R=["<button",' style="','"',">","</button>"],K=t=>(t.BackgroundColor?.includes("--")?`${t.BackgroundColor}`:t.BackgroundColor?.length&&t.BackgroundColor,t.TextColor?.includes("--")?`${t.TextColor}`:t.TextColor?.length&&t.TextColor,t.Href?y(G,void 0+(B.button,void 0)+(t.Href,void 0),"background-color:"+void 0+(";color:"+void 0),(t.children,void 0)):y(R,void 0+(B.button,void 0),"background-color:"+void 0+(";color:"+void 0),(t.Type,void 0),(t.children,void 0))),C={inputlabel:"_inputlabel_12b66_1",inputcontrol:"_inputcontrol_12b66_9",inputerror:"_inputerror_12b66_18"},Q=["<span",' role="alert"',">","</span>"],V=["<label","><!--#-->",'<!--/--><input id="','"',"><!--#-->","<!--/--></label>"],W=t=>y(V,void 0+(C.inputlabel,void 0),(t.Label,void 0),`${t.Name,void 0}-input`,(t.Type,void 0)+(t.Placeholder,void 0)+(t.Name,void 0)+(C.inputcontrol,void 0),(L(z,{get when(){return t.Error},get children(){return y(Q,void 0,(C.inputerror,void 0),(t.Error,void 0))}}),void 0)),J=Object.freeze(Object.defineProperty({__proto__:null,default:`:root{--font-primary: "Baskerville, 'Times New Roman', Times, serif";--font-secondary: "GillSans, Calibri, Trebuchet, sans-serif";--color-background: "#F4F5F6";--color-black: "#090C08";--color-blue: "#2F546A";--color-foreground: "#090C08";--color-gray: "#36393B";--color-green: "#2A4D14";--color-orange: "#75450C";--color-purple: "#693668";--color-red: "#AD1F2D";--color-white: "#F4F5F6";--color-primary: var(--color-blue);--color-secondary: var(--color-purple)}@media (prefers-color-scheme: dark){:root{--color-background: "#090C08";--color-black: "#090C08";--color-blue: "#63B0CD";--color-foreground: "#F4F5F6";--color-gray: "#A7AAA4";--color-green: "#37A748";--color-orange: "#F18805";--color-purple: "#D232FF";--color-red: "#E43A4B";--color-white: "#F4F5F6"}}
`},Symbol.toStringTag,{value:"Module"}));f.Button=K,f.Input=W,f.theme=J,Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
