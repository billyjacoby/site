/*! For license information please see component---src-pages-markdown-remark-frontmatter-slug-tsx-7544dbbecb5dbc98c7a7.js.LICENSE.txt */
(self.webpackChunkbillyjacoby=self.webpackChunkbillyjacoby||[]).push([[141],{9047:function(t,e,n){var r={"./deckgo-highlight-code_2.entry.js":[5272,272]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,t.exports=o},8653:function(t,e,n){"use strict";n.d(e,{H:function(){return U},b:function(){return jt},c:function(){return lt},g:function(){return at},h:function(){return H},p:function(){return N},r:function(){return _t}});var r=n(5671),o=n(3144);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a=n(9611);function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,a.Z)(t,e)}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function d(t,e,n){return d=f()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&(0,a.Z)(o,n.prototype),o},d.apply(null,arguments)}function p(t){var e="function"==typeof Map?new Map:void 0;return p=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return d(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,a.Z)(r,t)},p(t)}var h=n(5861),m=n(2982);var $=n(181);function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,e)||(0,$.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=n(4687),g=n.n(v);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var b,x,E=!1,j=!1,k="undefined"!=typeof window?window:{},L=k.document||{head:{}},_={$flags$:0,$resourcesUrl$:"",jmp:function(t){return t()},raf:function(t){return requestAnimationFrame(t)},ael:function(t,e,n,r){return t.addEventListener(e,n,r)},rel:function(t,e,n,r){return t.removeEventListener(e,n,r)},ce:function(t,e){return new CustomEvent(t,e)}},N=function(t){return Promise.resolve(t)},S=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1}(),O=function(t,e,n,r){n&&n.map((function(n){var r=y(n,3),o=r[0],i=r[1],a=r[2],l=R(t,o),c=C(e,a),u=P(o);_.ael(l,i,c,u),(e.$rmListeners$=e.$rmListeners$||[]).push((function(){return _.rel(l,i,c,u)}))}))},C=function(t,e){return function(n){try{256&t.$flags$?t.$lazyInstance$[e](n):(t.$queuedListeners$=t.$queuedListeners$||[]).push([e,n])}catch(r){Ot(r)}}},R=function(t,e){return 4&e?L:t},P=function(t){return 0!=(2&t)},I="{visibility:hidden}.hydrated{visibility:inherit}",T="http://www.w3.org/1999/xlink",M=new WeakMap,F=function(t,e,n){var r=Pt.get(t);S&&n?(r=r||new CSSStyleSheet).replace(e):r=e,Pt.set(t,r)},z=function(t){var e=t.$cmpMeta$,n=t.$hostElement$,r=e.$flags$,o=(e.$tagName$,function(){}),i=function(t,e,n,r){var o=Z(e),i=Pt.get(o);if(t=11===t.nodeType?t:L,i)if("string"==typeof i){t=t.head||t;var a,l=M.get(t);l||M.set(t,l=new Set),l.has(o)||((a=L.createElement("style")).innerHTML=i,t.insertBefore(a,t.querySelector("link")),l&&l.add(o))}else t.adoptedStyleSheets.includes(i)||(t.adoptedStyleSheets=[].concat((0,m.Z)(t.adoptedStyleSheets),[i]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},Z=function(t,e){return"sc-"+t.$tagName$},A={},q=function(t){return"object"===(t=typeof t)||"function"===t},H=function(t,e){for(var n=null,r=null,o=!1,i=!1,a=[],l=function e(r){for(var l=0;l<r.length;l++)n=r[l],Array.isArray(n)?e(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof t&&!q(n))&&(n=String(n)),o&&i?a[a.length-1].$text$+=n:a.push(o?B(null,n):n),i=o)},c=arguments.length,u=new Array(c>2?c-2:0),s=2;s<c;s++)u[s-2]=arguments[s];if(l(u),e){e.key&&(r=e.key);var f=e.className||e.class;f&&(e.class="object"!=typeof f?f:Object.keys(f).filter((function(t){return f[t]})).join(" "))}if("function"==typeof t)return t(null===e?{}:e,a,W);var d=B(t,null);return d.$attrs$=e,a.length>0&&(d.$children$=a),d.$key$=r,d},B=function(t,e){var n={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},U={},W={forEach:function(t,e){return t.map(G).forEach(e)},map:function(t,e){return t.map(G).map(e).map(V)}},G=function(t){return{vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}},V=function(t){if("function"==typeof t.vtag){var e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),H.apply(void 0,[t.vtag,e].concat((0,m.Z)(t.vchildren||[])))}var n=B(t.vtag,t.vtext);return n.$attrs$=t.vattrs,n.$children$=t.vchildren,n.$key$=t.vkey,n.$name$=t.vname,n},D=function(t,e,n,r,o,i){if(n!==r){var a=St(t,e),l=e.toLowerCase();if("class"===e){var c=t.classList,u=Y(n),s=Y(r);c.remove.apply(c,(0,m.Z)(u.filter((function(t){return t&&!s.includes(t)})))),c.add.apply(c,(0,m.Z)(s.filter((function(t){return t&&!u.includes(t)}))))}else if("style"===e){for(var f in n)r&&null!=r[f]||(f.includes("-")?t.style.removeProperty(f):t.style[f]="");for(var d in r)n&&r[d]===n[d]||(d.includes("-")?t.style.setProperty(d,r[d]):t.style[d]=r[d])}else if("key"===e);else if("ref"===e)r&&r(t);else if(a||"o"!==e[0]||"n"!==e[1]){var p=q(r);if((a||p&&null!==r)&&!o)try{if(t.tagName.includes("-"))t[e]=r;else{var h=null==r?"":r;"list"===e?a=!1:null!=n&&t[e]==h||(t[e]=h)}}catch(y){}var $=!1;l!==(l=l.replace(/^xlink\:?/,""))&&(e=l,$=!0),null==r||!1===r?!1===r&&""!==t.getAttribute(e)||($?t.removeAttributeNS(T,e):t.removeAttribute(e)):(!a||4&i||o)&&!p&&(r=!0===r?"":r,$?t.setAttributeNS(T,e,r):t.setAttribute(e,r))}else e="-"===e[2]?e.slice(3):St(k,l)?l.slice(2):l[2]+e.slice(3),n&&_.rel(t,e,n,!1),r&&_.ael(t,e,r,!1)}},Q=/\s/,Y=function(t){return t?t.split(Q):[]},K=function(t,e,n,r){var o=11===e.$elm$.nodeType&&e.$elm$.host?e.$elm$.host:e.$elm$,i=t&&t.$attrs$||A,a=e.$attrs$||A;for(r in i)r in a||D(o,r,i[r],void 0,n,e.$flags$);for(r in a)D(o,r,i[r],a[r],n,e.$flags$)},J=function t(e,n,r,o){var i,a,l=n.$children$[r],c=0;if(null!==l.$text$)i=l.$elm$=L.createTextNode(l.$text$);else{if(E||(E="svg"===l.$tag$),i=l.$elm$=L.createElementNS(E?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",l.$tag$),E&&"foreignObject"===l.$tag$&&(E=!1),K(null,l,E),null!=b&&i["s-si"]!==b&&i.classList.add(i["s-si"]=b),l.$children$)for(c=0;c<l.$children$.length;++c)(a=t(e,l,c))&&i.appendChild(a);"svg"===l.$tag$?E=!1:"foreignObject"===i.tagName&&(E=!0)}return i},X=function(t,e,n,r,o,i){var a,l=t;for(l.shadowRoot&&l.tagName===x&&(l=l.shadowRoot);o<=i;++o)r[o]&&(a=J(null,n,o))&&(r[o].$elm$=a,l.insertBefore(a,e))},tt=function(t,e,n,r,o){for(;e<=n;++e)(r=t[e])&&(o=r.$elm$,ot(r),o.remove())},et=function(t,e,n,r){for(var o,i,a=0,l=0,c=0,u=0,s=e.length-1,f=e[0],d=e[s],p=r.length-1,h=r[0],m=r[p];a<=s&&l<=p;)if(null==f)f=e[++a];else if(null==d)d=e[--s];else if(null==h)h=r[++l];else if(null==m)m=r[--p];else if(nt(f,h))rt(f,h),f=e[++a],h=r[++l];else if(nt(d,m))rt(d,m),d=e[--s],m=r[--p];else if(nt(f,m))rt(f,m),t.insertBefore(f.$elm$,d.$elm$.nextSibling),f=e[++a],m=r[--p];else if(nt(d,h))rt(d,h),t.insertBefore(d.$elm$,f.$elm$),d=e[--s],h=r[++l];else{for(c=-1,u=a;u<=s;++u)if(e[u]&&null!==e[u].$key$&&e[u].$key$===h.$key$){c=u;break}c>=0?((i=e[c]).$tag$!==h.$tag$?o=J(e&&e[l],n,c):(rt(i,h),e[c]=void 0,o=i.$elm$),h=r[++l]):(o=J(e&&e[l],n,l),h=r[++l]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}a>s?X(t,null==r[p+1]?null:r[p+1].$elm$,n,r,l,p):l>p&&tt(e,a,s)},nt=function(t,e){return t.$tag$===e.$tag$&&t.$key$===e.$key$},rt=function(t,e){var n=e.$elm$=t.$elm$,r=t.$children$,o=e.$children$,i=e.$tag$,a=e.$text$;null===a?(E="svg"===i||"foreignObject"!==i&&E,"slot"===i||K(t,e,E),null!==r&&null!==o?et(n,r,e,o):null!==o?(null!==t.$text$&&(n.textContent=""),X(n,null,e,o,0,o.length-1)):null!==r&&tt(r,0,r.length-1),E&&"svg"===i&&(E=!1)):t.$text$!==a&&(n.data=a)},ot=function t(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(t)},it=function(t,e){var n,r=t.$hostElement$,o=t.$cmpMeta$,i=t.$vnode$||B(null,null),a=(n=e)&&n.$tag$===U?e:H(null,null,e);x=r.tagName,o.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},o.$attrsToReflect$.map((function(t){var e=y(t,2),n=e[0],o=e[1];return a.$attrs$[o]=r[n]}))),a.$tag$=null,a.$flags$|=4,t.$vnode$=a,a.$elm$=i.$elm$=r.shadowRoot||r,b=r["s-sc"],rt(i,a)},at=function(t){return Lt(t).$hostElement$},lt=function(t,e,n){var r=at(t);return{emit:function(t){return ct(r,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}}},ct=function(t,e,n){var r=_.ce(e,n);return t.dispatchEvent(r),r},ut=function(t,e){e&&!t.$onRenderResolve$&&e["s-p"]&&e["s-p"].push(new Promise((function(e){return t.$onRenderResolve$=e})))},st=function(t,e){if(t.$flags$|=16,!(4&t.$flags$)){ut(t,t.$ancestorComponent$);return At((function(){return ft(t,e)}))}t.$flags$|=512},ft=function(t,e){var n,r=(t.$cmpMeta$.$tagName$,function(){}),o=t.$lazyInstance$;return e&&(t.$flags$|=256,t.$queuedListeners$&&(t.$queuedListeners$.map((function(t){var e=y(t,2),n=e[0],r=e[1];return $t(o,n,r)})),t.$queuedListeners$=null),n=$t(o,"componentWillLoad")),r(),yt(n,(function(){return dt(t,o,e)}))},dt=function(){var t=(0,h.Z)(g().mark((function t(e,n,r){var o,i,a,l,c,u;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.$hostElement$,e.$cmpMeta$.$tagName$,i=function(){},a=o["s-rc"],r&&z(e),e.$cmpMeta$.$tagName$,l=function(){},pt(e,n),a&&(a.map((function(t){return t()})),o["s-rc"]=void 0),l(),i(),c=o["s-p"],u=function(){return ht(e)},0===c.length?u():(Promise.all(c).then(u),e.$flags$|=4,c.length=0);case 12:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),pt=function(t,e,n){try{e=e.render(),t.$flags$&=-17,t.$flags$|=2,it(t,e)}catch(r){Ot(r,t.$hostElement$)}return null},ht=function(t){t.$cmpMeta$.$tagName$;var e=t.$hostElement$,n=function(){},r=t.$lazyInstance$,o=t.$ancestorComponent$;64&t.$flags$?($t(r,"componentDidUpdate"),n()):(t.$flags$|=64,vt(e),$t(r,"componentDidLoad"),n(),t.$onReadyResolve$(e),o||mt()),t.$onInstanceResolve$(e),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),512&t.$flags$&&Zt((function(){return st(t,!1)})),t.$flags$&=-517},mt=function(t){vt(L.documentElement),Zt((function(){return ct(k,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},$t=function(t,e,n){if(t&&t[e])try{return t[e](n)}catch(r){Ot(r)}},yt=function(t,e){return t&&t.then?t.then(e):e()},vt=function(t){return t.classList.add("hydrated")},gt=function(t,e,n,r){var o,i,a=Lt(t),l=a.$hostElement$,c=a.$instanceValues$.get(e),u=a.$flags$,s=a.$lazyInstance$;if(o=n,i=r.$members$[e][0],n=null==o||q(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o,!(8&u&&void 0!==c||n===c)&&(a.$instanceValues$.set(e,n),s)){if(r.$watchers$&&128&u){var f=r.$watchers$[e];f&&f.map((function(t){try{s[t](n,c,e)}catch(r){Ot(r,l)}}))}2==(18&u)&&st(a,!1)}},wt=function(t,e,n){if(e.$members$){t.watchers&&(e.$watchers$=t.watchers);var r=Object.entries(e.$members$),o=t.prototype;if(r.map((function(t){var r=y(t,2),i=r[0],a=y(r[1],1)[0];31&a||2&n&&32&a?Object.defineProperty(o,i,{get:function(){return t=i,Lt(this).$instanceValues$.get(t);var t},set:function(t){gt(this,i,t,e)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,i,{value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=Lt(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[i].apply(t,e)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(t,e,n){var r=this;_.jmp((function(){var e=i.get(t);if(r.hasOwnProperty(e))n=r[e],delete r[e];else if(o.hasOwnProperty(e)&&"number"==typeof r[e]&&r[e]==n)return;r[e]=(null!==n||"boolean"!=typeof r[e])&&n}))},t.observedAttributes=r.filter((function(t){var e=y(t,2);e[0];return 15&e[1][0]})).map((function(t){var n=y(t,2),r=n[0],o=n[1],a=o[1]||r;return i.set(a,r),512&o[0]&&e.$attrsToReflect$.push([r,a]),a}))}}return t},bt=function(){var t=(0,h.Z)(g().mark((function t(e,n,r,o,i){var a,l,c,u,s,f,d;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=(32&n.$flags$)){t.next=17;break}if(n.$flags$|=32,!(i=Rt(r)).then){t.next=9;break}return a=function(){},t.next=7,i;case 7:i=t.sent,a();case 9:i.isProxied||(r.$watchers$=i.watchers,wt(i,r,2),i.isProxied=!0),r.$tagName$,l=function(){},n.$flags$|=8;try{new i(n)}catch(e){Ot(e)}n.$flags$&=-9,n.$flags$|=128,l(),i.style&&(c=i.style,u=Z(r),Pt.has(u)||(r.$tagName$,s=function(){},F(u,c,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,d=function(){return st(n,!0)},f&&f["s-rc"]?f["s-rc"].push(d):d();case 20:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}(),xt=function(t){if(0==(1&_.$flags$)){var e=Lt(t),n=e.$cmpMeta$,r=(n.$tagName$,function(){});if(1&e.$flags$)O(t,e,n.$listeners$);else{e.$flags$|=1;for(var o=t;o=o.parentNode||o.host;)if(o["s-p"]){ut(e,e.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(e){var n=y(e,2),r=n[0];if(31&y(n[1],1)[0]&&t.hasOwnProperty(r)){var o=t[r];delete t[r],t[r]=o}})),bt(t,e,n)}r()}},Et=function(t){if(0==(1&_.$flags$)){var e=Lt(t);e.$rmListeners$&&(e.$rmListeners$.map((function(t){return t()})),e.$rmListeners$=void 0)}},jt=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(){},c=[],u=n.exclude||[],s=k.customElements,f=L.head,d=f.querySelector("meta[charset]"),h=L.createElement("style"),m=[],$=!0;Object.assign(_,n),_.$resourcesUrl$=new URL(n.resourcesUrl||"./",L.baseURI).href,t.map((function(t){t[1].map((function(n){var a={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};a.$members$=n[2],a.$listeners$=n[3],a.$attrsToReflect$=[],a.$watchers$={};var f=a.$tagName$,d=function(t){l(c,t);var n=w(c);function c(t){var e;return(0,r.Z)(this,c),t=i(e=n.call(this,t)),Nt(t,a),1&a.$flags$&&t.attachShadow({mode:"open"}),e}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var t=this;e&&(clearTimeout(e),e=null),$?m.push(this):_.jmp((function(){return xt(t)}))}},{key:"disconnectedCallback",value:function(){var t=this;_.jmp((function(){return Et(t)}))}},{key:"componentOnReady",value:function(){return Lt(this).$onReadyPromise$}}]),c}(p(HTMLElement));a.$lazyBundleId$=t[0],u.includes(f)||s.get(f)||(c.push(f),s.define(f,wt(d,a,1)))}))})),h.innerHTML=c+I,h.setAttribute("data-styles",""),f.insertBefore(h,d?d.nextSibling:f.firstChild),$=!1,m.length?m.map((function(t){return t.connectedCallback()})):_.jmp((function(){return e=setTimeout(mt,30)})),a()},kt=new WeakMap,Lt=function(t){return kt.get(t)},_t=function(t,e){return kt.set(e.$lazyInstance$=t,e)},Nt=function(t,e){var n={$flags$:0,$hostElement$:t,$cmpMeta$:e,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(t){return n.$onInstanceResolve$=t})),n.$onReadyPromise$=new Promise((function(t){return n.$onReadyResolve$=t})),t["s-p"]=[],t["s-rc"]=[],O(t,n,e.$listeners$),kt.set(t,n)},St=function(t,e){return e in t},Ot=function(t,e){return(0,console.error)(t,e)},Ct=new Map,Rt=function(t,e,r){var o=t.$tagName$.replace(/-/g,"_"),i=t.$lazyBundleId$,a=Ct.get(i);return a?a[o]:n(9047)("./".concat(i,".entry.js")).then((function(t){return Ct.set(i,t),t[o]}),Ot)},Pt=new Map,It=[],Tt=[],Mt=function(t,e){return function(n){t.push(n),j||(j=!0,e&&4&_.$flags$?Zt(zt):_.raf(zt))}},Ft=function(t){for(var e=0;e<t.length;e++)try{t[e](performance.now())}catch(n){Ot(n)}t.length=0},zt=function t(){Ft(It),Ft(Tt),(j=It.length>0)&&_.raf(t)},Zt=function(t){return N().then(t)},At=Mt(Tt,!0)},1046:function(t,e,n){"use strict";n.d(e,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function c(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var n,o=t.attr,i=t.size,c=t.title,u=l(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},2361:function(t,e,n){"use strict";n.d(e,{Fg:function(){return h},OZ:function(){return d},PP:function(){return u},Qu:function(){return c},So:function(){return a},W2:function(){return f},lU:function(){return s},pk:function(){return l}});var r=n(7294),o=n(1074),i=n(1597),a=o.default.h1.withConfig({displayName:"Components__VariableH1",componentId:"sc-d0qytj-0"})(["display:flex;align-items:center;",";",";"],(function(t){var e=t.weight;return e&&"font-weight: "+e+";"}),(function(t){var e=t.slant;return e&&"font-variation-settings: 'slnt' "+e+";"})),l=o.default.h2.withConfig({displayName:"Components__VariableH2",componentId:"sc-d0qytj-1"})(["display:flex;align-items:center;",";",";"],(function(t){var e=t.weight;return e&&"font-weight: "+e+";"}),(function(t){var e=t.slant;return e&&"font-variation-settings: 'slnt' "+e+";"})),c=o.default.h4.withConfig({displayName:"Components__VariableH4",componentId:"sc-d0qytj-2"})(["display:flex;align-items:center;",";",";"],(function(t){var e=t.weight;return e&&"font-weight: "+e+";"}),(function(t){var e=t.slant;return e&&"font-variation-settings: 'slnt' "+e+";"})),u=o.default.section.withConfig({displayName:"Components__StyledSection",componentId:"sc-d0qytj-3"})(["width:100%;background:",";"],(function(t){var e=t.background;return e||"var(--primary-background)"})),s=o.default.div.withConfig({displayName:"Components__TextContainer",componentId:"sc-d0qytj-4"})(["padding:5rem 2rem;margin:auto;display:flex;gap:1rem;@media (max-width:768px){flex-direction:column;padding:1rem 2rem;}"]),f=o.default.div.withConfig({displayName:"Components__Container",componentId:"sc-d0qytj-5"})(["max-width:",";margin:auto;display:flex;align-items:center;"],(function(t){var e=t.maxWidth;return e?e+"px":"1000px"})),d=function(t){var e=t.children;return r.createElement(p,{to:"/"},e)},p=(0,o.default)(i.rU).withConfig({displayName:"Components__StyledWebsiteName",componentId:"sc-d0qytj-6"})(["text-decoration:none;font-family:Fira;font-size:1.35rem;color:var(--accent);"]),h=(o.default.button.withConfig({displayName:"Components__Button",componentId:"sc-d0qytj-7"})([""]),o.default.a.withConfig({displayName:"Components__StyledLink",componentId:"sc-d0qytj-8"})(["text-decoration:none;color:inherit;:hover{color:var(--accent);}"]))},1958:function(t,e,n){"use strict";n.d(e,{$:function(){return l}});var r=n(7294),o=n(1074),i=n(2361),a=n(1852),l=function(){return r.createElement(i.W2,{maxWidth:1200},r.createElement(s,null,r.createElement(u,null,r.createElement(i.OZ,null,"billyjacoby.com"),r.createElement("p",null,"thanks for visiting my website. I hope you found something that can be at least a little helpful to you in your journey!")),r.createElement(c,null,r.createElement(i.Fg,{href:"https://discordapp.com/users/billyjacoby/7369",target:"_blank"},r.createElement(a.KpZ,{size:"36"})),r.createElement(i.Fg,{href:"https://twitter.com/billyjacoby",target:"_blank"},r.createElement(a.meP,{size:"36"})),r.createElement(i.Fg,{href:"https://www.linkedin.com/in/williamjacoby/",target:"_blank"},r.createElement(a.NQh,{size:"36"})),r.createElement(i.Fg,{href:"https://github.com/billyjacoby",target:"_blank"},r.createElement(a.rFR,{size:"36"})))))},c=o.default.div.withConfig({displayName:"Footer__RightFooter",componentId:"sc-p7cnj8-0"})(["display:flex;flex-direction:row;gap:1rem;@media (max-width:768px){margin-top:1rem;}"]),u=o.default.div.withConfig({displayName:"Footer__LeftFooter",componentId:"sc-p7cnj8-1"})(["display:flex;flex-direction:column;max-width:65%;@media (max-width:768px){max-width:100%;margin-top:2rem;order:2;}"]),s=o.default.div.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-p7cnj8-2"})(["margin:auto;width:100%;padding:1rem 3rem;background:var(--primary-background);display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){max-width:100%;flex-direction:column;}"])},6294:function(t,e,n){"use strict";n.d(e,{w:function(){return l}});var r=n(7294),o=n(1074),i=n(2361),a=n(7244);function l(){return r.createElement(s,null,r.createElement(c,null,r.createElement(i.OZ,null,"billyjacoby.com"),r.createElement(u,null,"tutorials, thoughts, and tech")),r.createElement(a.HjU,{size:"64"}))}var c=o.default.div.withConfig({displayName:"Navbar__RightContent",componentId:"sc-1ohjj95-0"})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"]),u=o.default.div.withConfig({displayName:"Navbar__RightSubtext",componentId:"sc-1ohjj95-1"})(["font-size:0.875rem;"]),s=o.default.div.withConfig({displayName:"Navbar__NavbarContainer",componentId:"sc-1ohjj95-2"})(["height:100%;max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 1rem;"])},6880:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r,o=n(7294),i=n(6294),a=n(1958),l=n(2361),c=n(8653);function u(t){var e=t.data;console.log("data",e);var n=e.markdownRemark,r=n.frontmatter,c=n.html;return r&&c?o.createElement(o.Fragment,null,o.createElement(i.w,null),o.createElement(l.W2,null,o.createElement("div",{className:"blog-post-container"},o.createElement("h1",null,r.title),o.createElement("h2",null,r.date),o.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))),o.createElement(a.$,null)):null}!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}(),"undefined"==typeof window?Promise.resolve():(0,c.p)().then((function(){return(0,c.b)([["deckgo-highlight-code_2",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],editableLabel:[1,"editable-label"],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"]]],[1,"deckgo-highlight-code-edit",{label:[1]}]]]],r)}))},7061:function(t,e,n){var r=n(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=E(a,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=f;var p={};function h(){}function m(){}function $(){}var y={};s(y,l,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==n&&i.call(g,l)&&(y=g);var w=$.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,l,c){var u=d(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,l,c)}),(function(t){n("throw",t,l,c)})):e.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return n("throw",t,l,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=$,s(w,"constructor",$),s($,"constructor",m),m.displayName=s($,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,$):(t.__proto__=$,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,l,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4687:function(t,e,n){var r=n(7061)();t.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},5861:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(u){return void n(u)}l.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function l(t){r(a,o,i,l,c,"next",t)}function c(t){r(a,o,i,l,c,"throw",t)}l(void 0)}))}}n.d(e,{Z:function(){return o}})},5671:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return r}})},3144:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-tsx-7544dbbecb5dbc98c7a7.js.map