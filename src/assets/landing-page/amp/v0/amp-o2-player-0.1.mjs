;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-o2-player",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array;function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function r(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var{hasOwnProperty:i,toString:o}=Object.prototype;function s(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:r}=t,i=new Error(e);for(const n in t)i[n]=t[n];return i.stack=r,i}function u(t){let n=null,e="";for(var i,o=r(arguments,!0);!(i=o()).done;){const t=i.value;t instanceof Error&&!n?n=s(t):(e&&(e+=" "),e+=t)}return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function l(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function c(t){const n=u.apply(null,arguments);setTimeout((()=>{throw l(n),n}))}function a(t,...n){try{return t.apply(null,n)}catch(t){c(t)}}function f(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function h(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}var p={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function d(t){return(t.ownerDocument||t).defaultView}var m=/vertical/,b=new WeakMap,v=new WeakMap,y=new WeakMap;function g(t){let n=b.get(t);return n||(n=new t.ResizeObserver(w),b.set(t,n)),n}function w(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const r=t[e],{target:i}=r;if(n.has(i))continue;n.add(i);const o=v.get(i);if(o){y.set(i,r);for(let t=0;t<o.length;t++){const{callback:n,type:e}=o[t];S(e,n,r)}}}}function S(t,n,e){if(0==t){const{contentRect:t}=e,{height:r,width:i}=t;a(n,{width:i,height:r})}else if(1==t){const{borderBoxSize:t}=e;let r;if(t)r=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=e,n=d(t),i=m.test(function(t,n){return t.getComputedStyle(n)||p}(n,t).writingMode),{offsetHeight:o,offsetWidth:s}=t;let u,l;i?(l=s,u=o):(u=s,l=o),r={inlineSize:u,blockSize:l}}a(n,r)}}var A=self.AMP_CONFIG||{},P=("string"==typeof A.thirdPartyFrameRegex?new RegExp(A.thirdPartyFrameRegex):A.thirdPartyFrameRegex,("string"==typeof A.cdnProxyRegex?new RegExp(A.cdnProxyRegex):A.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function k(t){if(!self.document||!self.document.head)return null;if(self.location&&P.test(self.location.origin))return null;const n=self.document.head.querySelector(`meta[name="${t}"]`);return n&&n.getAttribute("content")||null}A.thirdPartyUrl,A.thirdPartyFrameHost,A.cdnUrl||k("runtime-host"),A.errorReportingUrl,A.betaErrorReportingUrl,A.localDev,A.geoApiUrl||k("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var _=self.__AMP_LOG;function C(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function E(t,n,e,r,i,o,s,u,l,c,a){return t}function I(t,n,e,r,i,o,s,u,l,c,a){return(_.user||(_.user=C()),void _.user.win?_.userForEmbed||(_.userForEmbed=C()):_.user).assert(t,n,e,r,i,o,s,u,l,c,a)}function R(t,n){return z(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function j(t,n){return function(t,n){const e=O(t,n);if(e)return e;const r=U(t);return r[n]=function(){const t=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{promise:n,reject:e,resolve:r}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:r,reject:e,context:null,ctor:null}}(),r[n].promise}(x(t),n)}function M(t,n){return O(x(t),n)}function T(t){return t.nodeType?(n=d(t),R(n,"ampdoc")).getAmpDoc(t):t;var n}function x(t){const n=T(t);return n.isSingleDoc()?n.win:n}function z(t,n){E(function(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));const e=U(t)[n];return e.obj||(E(e.ctor),E(e.context),e.obj=new e.ctor(e.context),E(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function O(t,n){const e=U(t)[n];return e?e.promise?e.promise:(z(t,n),e.promise=Promise.resolve(e.obj)):null}function U(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}var V,W=t=>function(t,n,e,r){const i=M(t,n);if(i)return i;const o=T(t);return o.whenExtensionsKnown().then((()=>{const t=o.getExtensionVersion(e);return t?R(o.win,"extensions").waitForExtension(e,t):null})).then((e=>e?r?M(t,n):j(t,n):null))}(t,"consentPolicyManager","amp-consent");function $(t){return t.data}new Set(["c","v","a","ad"]);var q="unlisten";function N(t,n,e){const r=function(t,n){let{listeningFors:e}=t;return!e&&n&&(e=t.listeningFors=Object.create(null)),e||null}(t,e);if(!r)return r;let i=r[n];return!i&&e&&(i=r[n]=[]),i||null}function D(t,n){for(let e=n;e&&e!=e.parent;e=e.parent)if(e==t)return!0;return!1}function F(t){const n={"sentinel":q};for(let e=t.length-1;e>=0;e--){const r=t[e];if(!r.frame.contentWindow){t.splice(e,1);const{events:i}=r;for(const t in i)i[t].splice(0,1/0).forEach((t=>{t(n)}))}}}var L=class extends t.BaseElement{constructor(t){super(t),this.Mv=null,this.tS="",this.nS="",this.eS="",this.aw="",this.pf=new class{constructor(t){this.yf=t,this.mf=!1,this.bf=!1,this._f=this._f.bind(this)}updatePlaying(t){t!==this.mf&&(this.mf=t,t?(this.bf=!1,function(t,n){!function(t,n,e){const r=t.ownerDocument.defaultView;if(!r)return;let i=v.get(t);if(i||(i=[],v.set(t,i),g(r).observe(t)),!i.some((t=>t.callback===e&&1===t.type))){i.push({type:1,callback:e});const n=y.get(t);n&&setTimeout((()=>S(1,e,n)))}}(t,0,n)}(this.yf,this._f)):function(t,n){!function(t,n,e){const r=v.get(t);if(r&&(function(t,n){const r=[];let i=0;for(let n=0;n<t.length;n++){const s=t[n];(o=s).callback===e&&1===o.type?r.push(s):(i<n&&(t[i]=s),i++)}var o;i<t.length&&(t.length=i)}(r),0==r.length)){v.delete(t),y.delete(t);const n=t.ownerDocument.defaultView;n&&g(n).unobserve(t)}}(t,0,n)}(this.yf,this._f))}_f({blockSize:t,inlineSize:n}){const e=n>0&&t>0;if(e===this.bf)return;this.bf=e;const r=this.yf;e||r.pause()}}(this.element)}preconnectCallback(t){var n;(n=this.win,R(n,"preconnect")).url(this.getAmpDoc(),this.eS,t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){this.element.classList.add("i-amphtml-media-component"),this.tS=I(this.element.getAttribute("data-pid"),"data-pid attribute is required for <amp-o2-player> %s",this.element),this.nS=I(this.element.getAttribute("data-bcid"),"data-bcid attribute is required for <amp-o2-player> %s",this.element);const t=this.element.getAttribute("data-bid"),n=this.element.getAttribute("data-vid"),e=this.element.getAttribute("data-macros"),r=this.element.getAttribute("data-env");this.eS="https://delivery."+("stage"!=r?"":"dev.")+"vidible.tv";let i=`${this.eS}/htmlembed/`;const o=[];i+="pid="+encodeURIComponent(this.tS)+"/"+encodeURIComponent(this.nS)+".html",t&&o.push("bid="+encodeURIComponent(t)),n&&o.push("vid="+encodeURIComponent(n)),e&&o.push(e),o.length>0&&(i+="?"+o.join("&")),this.aw=i}layoutCallback(){I(this.tS,"data-pid attribute is required for <amp-o2-player> %s",this.element),I(this.nS,"data-bcid attribute is required for <amp-o2-player> %s",this.element);const t=this.element.ownerDocument.createElement("iframe");return t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","true"),t.src=this.aw,this.Mv=t,t.classList.add("i-amphtml-fill-content"),function(t,n,e,r,i,o){E(t.src),E(!t.parentNode),E(e);const s=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(n){if(!$(n))return;const e=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?f(t,(t=>{}))||null:h(t)?function(t){if(!h(t))return null;const n=t.indexOf("{");return f(t.substr(n),(n=>{c(new Error(`MESSAGING: Failed to parse message: ${t}\n${n.message}`))}))}(t):null),t}($(n));if(!e||!e.sentinel)return;const r=function(t,n,e,r){const i=N(t,n);if(!i)return i;let o;for(let t=0;t<i.length;t++){const n=i[t],{contentWindow:e}=n.frame;if(e){if(r==e||D(e,r)){o=n;break}}else setTimeout(F,0,i)}return o?o.events:null}(t,e.sentinel,n.origin,n.source);if(!r)return;let i=r[e.type];if(i){i=i.slice();for(let t=0;t<i.length;t++)(0,i[t])(e,n.source,n.origin,n)}}))}(s);const u=function(t,n,e){const r=function(t,n){return n?t.getAttribute("data-amp-3p-sentinel"):"amp"}(n,e),i=N(t,r,!0);let o;for(let t=0;t<i.length;t++){const e=i[t];if(e.frame===n){o=e;break}}return o||(o={frame:n,events:Object.create(null)},i.push(o)),o.events}(s,t,r),l=(a=t.src,V||(V=self.document.createElement("a")),function(t,n,e){return t.href="",new URL(n,t.href)}(V,a)).origin;var a;let p,d=u[n]||(u[n]=[]),m=function(n,r,s,u){if("amp"==n.sentinel){if(r!=t.contentWindow)return;const n="null"==s&&o;if(l!=s&&!n)return}(i||r==t.contentWindow)&&(n.sentinel!=q?e(n,r,s,u):p())};d.push(m),p=function(){if(m){const t=d.indexOf(m);t>-1&&d.splice(t,1),m=null,d=null,e=null}}}(t,"send-consent-data",((t,n,e)=>{this.Hv(n,e)})),this.pf.updatePlaying(!0),this.element.appendChild(t),this.loadPromise(t)}unlayoutCallback(){const t=this.Mv;return t&&(this.element.removeChild(t),this.Mv=null),this.pf.updatePlaying(!1),!0}Hv(t,n){const e=super.getConsentPolicy()||"default",r=this.rS(e),i=this.iS(e);Promise.all([i,r]).then((e=>{let r;switch(e[0]){case 1:r={"gdprApplies":!0,"user_consent":1,"gdprString":e[1]};break;case 2:case 4:r={"gdprApplies":!0,"user_consent":0,"gdprString":e[1]};break;default:r={"gdprApplies":!1}}this.Jv(t,n,{"sentinel":"amp","type":"consent-data","consentData":r})}))}Jv(t,n,e){t.postMessage(e,n)}rS(t="default"){return function(t,n="default"){return W(t).then((t=>t?t.getConsentStringInfo(n):null))}(this.element,t)}iS(t="default"){return function(t,n="default"){return W(t).then((t=>t?t.whenPolicyResolved(n):null))}(this.element,t)}pauseCallback(){this.Mv&&this.Mv.contentWindow&&this.Mv.contentWindow.postMessage(JSON.stringify({"method":"pause","value":this.eS}),"*")}};t.registerElement("amp-o2-player",L)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-o2-player-0.1.mjs.map