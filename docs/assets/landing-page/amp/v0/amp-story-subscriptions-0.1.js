;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-story-subscriptions",ev:"0.1",l:!1,f:function(t,n){!function(){function n(t,r){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,r)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function u(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function s(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){o(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var c=Array.isArray,f=Object.prototype;function a(t,n){if(!!n!==n&&null!=n)if(Array.isArray(n))n.forEach((function(n){a(t,n)}));else{var r=n;t.appendChild(r.nodeType?r:self.document.createTextNode(String(n)))}}function l(t,n,r){if(!1!==r&&null!=r)if("function"!=typeof r||"o"!==n[0]||"n"!==n[1])t.setAttribute(n,!0===r?"":String(r));else{var e=n.toLowerCase().substring(2);t.addEventListener(e,r)}}function p(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!isFinite(r)||r<0)throw new Error("Invalid depth: "+r);if(t===n)return!0;for(var i=[{a:t,b:n,depth:r}];i.length>0;){var o=i.shift(),u=o.a,s=o.b,f=o.depth;if(f>0){if(e(u)!==e(s))return!1;if(c(u)&&c(s)){if(u.length!==s.length)return!1;for(var a=0;a<u.length;a++)i.push({a:u[a],b:s[a],depth:f-1});continue}if(u&&s&&"object"===e(u)&&"object"===e(s)){var l=Object.keys(u),p=Object.keys(s);if(l.length!==p.length)return!1;for(var m=0,b=l;m<b.length;m++){var v=b[m];i.push({a:u[v],b:s[v],depth:f-1})}continue}}if(u!==s)return!1}return!0}f.hasOwnProperty,f.toString;var m=self.AMP_CONFIG||{},b=("string"==typeof m.thirdPartyFrameRegex?new RegExp(m.thirdPartyFrameRegex):m.thirdPartyFrameRegex,("string"==typeof m.cdnProxyRegex?new RegExp(m.cdnProxyRegex):m.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function v(t){if(!self.document||!self.document.head)return null;if(self.location&&b.test(self.location.origin))return null;var n=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return n&&n.getAttribute("content")||null}function y(t){if(!t)return null;var n=t.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i),r=n?n[2]:void 0,e=n?n[3]:void 0;return r&&e?{extensionId:r,extensionVersion:e}:null}function d(t,n,r,e,i,o,u,s,c,f,a){return t}m.thirdPartyUrl,m.thirdPartyFrameHost,m.cdnUrl||v("runtime-host"),m.errorReportingUrl,m.betaErrorReportingUrl,m.localDev,m.geoApiUrl||v("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var h=function(){var t=this;this.promise=new Promise((function(n,r){t.resolve=n,t.reject=r}))};function j(t,n){return O(t,n)}function x(t,n){d(function(t,n){var r=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!r||!r.ctor)}(t,n));var r=w(t)[n];return r.obj||(d(r.ctor),d(r.context),r.obj=new r.ctor(r.context),d(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function O(t,n){var r=w(t)[n];return r?r.promise?r.promise:(x(t,n),r.promise=Promise.resolve(r.obj)):null}function w(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}var g,R=(o(g={},31,(function(t,n){return t.length!==n.length})),o(g,15,(function(t,n){return t.element!==n.element||t.state!==n.state})),o(g,36,(function(t,n){return t.length!==n.length})),o(g,38,(function(t,n){return t.length!==n.length})),o(g,39,(function(t,n){return null===t||null===n||t.width!==n.width||t.height!==n.height})),o(g,21,(function(t,n){return null===t||null===n||!p(t,n,2)})),o(g,26,(function(t,n){return null===t||null===n||!p(t,n,2)})),o(g,16,(function(t,n){return!p(t,n,3)})),function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&n(t,r)}(c,t);var e,o,u=(e=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=r(e);if(o){var u=r(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return i(this,t)});function c(t){var n;return(n=u.call(this,t)).bJ=null,n}var f=c.prototype;return f.buildCallback=function(){var t,n=this,r=function(t,n){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];if("string"!=typeof t)return t(s(s({},n),{},{children:e}));var o=null==n?void 0:n.xmlns;o&&delete n.xmlns;var u=o?self.document.createElementNS(o,t):self.document.createElement(t);return a(u,e),n&&Object.keys(n).forEach((function(t){l(u,t,n[t])})),u}("div",{"subscriptions-dialog":!0,"subscriptions-display":"NOT granted"});return this.element.appendChild(r),(t=this.win,function(t,n,r,e,i){return j(t,n)||function(t,n,r,e,i){return(o=t.document,new Promise((function(t){return function(t,n){!function(t,n,r){if(n())r();else{var e=((u=t).ownerDocument||u).defaultView;if(e.MutationObserver){var i=new e.MutationObserver((function(){n()&&(i.disconnect(),r())}));i.observe(t,{childList:!0})}else var o=e.setInterval((function(){n()&&(e.clearInterval(o),r())}),5)}var u}(t.documentElement,(function(){return!!t.body}),n)}(o,t)}))).then((function(){var n=function(t,n){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"extensions")}(t);return function(t,n,r){return function(t){if(!t)return[];for(var n=t.querySelectorAll("script[custom-element],script[custom-template]"),r=[],e=0;e<n.length;e++){var i=n[e],o=i.getAttribute("custom-element")||i.getAttribute("custom-template"),u=y(i.src);o&&u&&r.push({script:i,extensionId:o,extensionVersion:u.extensionVersion})}return r}(t.document.head).some((function(t){var e=t.extensionId,i=t.extensionVersion;return n==e&&r==i}))}(n.win,r,e)?n.waitForExtension(r,e):null})).then((function(r){return r?i?j(t,n):function(t,n){return function(t,n){var r=O(t,n);if(r)return r;var e,i,o,u,s=w(t);return s[n]=(i=(e=new h).promise,o=e.reject,u=e.resolve,i.catch((function(){})),{obj:null,promise:i,resolve:u,reject:o,context:null,ctor:null}),s[n].promise}(t,n)}(t,n):null}));var o}(t,n,r,e,i)}(t,"story-store","amp-story","1.0")).then((function(t){n.bJ=t,n.UU()}))},f.isLayoutSupported=function(t){return"container"==t},f.UU=function(){var t=this;this.bJ.subscribe(40,(function(n){return t.tbt(n)}))},f.tbt=function(t){var n=this;this.mutateElement((function(){return n.element.classList.toggle("i-amphtml-story-subscriptions-visible",t)}))},c}(t.BaseElement));t.registerElement("amp-story-subscriptions",R,'amp-story-subscriptions{position:absolute!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column!important;flex-direction:column!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:1!important;transform:translateY(100vh)!important;transition-delay:0.15s!important;pointer-events:none!important}amp-story-subscriptions.i-amphtml-story-subscriptions-visible{transform:translateY(0)!important;transition-delay:0s!important}amp-story-subscriptions:before{content:""!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;pointer-events:auto!important;transition:opacity 0.15s cubic-bezier(0.4,0,1,1)!important}amp-story-subscriptions.i-amphtml-story-subscriptions-visible:before{opacity:0.55!important;transition:opacity 0.2s cubic-bezier(0,0,0.2,1)!important}amp-subscriptions-dialog.i-amphtml-story-subscriptions-dialog-wrapper{border-radius:16px 16px 0px 0px!important;font-family:Poppins,sans-serif!important}\n/*# sourceURL=/extensions/amp-story-subscriptions/0.1/amp-story-subscriptions.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-story-subscriptions-0.1.js.map