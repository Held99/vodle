;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-reddit",ev:"0.1",l:!0,f:function(t,r){!function(){function r(t,n){return(r=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var i=Array.isArray;function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function a(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return u(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype;function c(t){var r=Object.create(null);return t&&Object.assign(r,t),r}function l(t,r,n,e,o,i,u,a,f,c,l){return t}function s(t){var r,n=parseFloat(t);return"number"==typeof(r=n)&&isFinite(r)?n:void 0}function v(t){return JSON.parse(t)}function d(t,r){try{return v(t)}catch(t){return null==r||r(t),null}}f.hasOwnProperty,f.toString;var p=self.AMP_CONFIG||{},m=("string"==typeof p.thirdPartyFrameRegex?new RegExp(p.thirdPartyFrameRegex):p.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,h=("string"==typeof p.cdnProxyRegex?new RegExp(p.cdnProxyRegex):p.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function b(t){if(!self.document||!self.document.head)return null;if(self.location&&h.test(self.location.origin))return null;var r=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return r&&r.getAttribute("content")||null}var y={thirdParty:p.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:p.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:m,cdn:p.cdnUrl||b("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:h,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:p.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:p.betaErrorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:p.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:p.geoApiUrl||b("amp-geo-api")},g=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return r}}function j(t){var r,n=c();if(!t)return n;for(;r=g.exec(t);){var e=w(r[1],r[1]),o=r[2]?w(r[2].replace(/\+/g," "),r[2]):"";n[e]=o}return n}function O(t){var r=(t||self).location;return j(r.originalHash||r.hash)}var S="";function E(t){var r=t||self;return r.__AMP_MODE?r.__AMP_MODE:r.__AMP_MODE=function(t){return{localDev:!1,development:R(t,O(t)),esm:!1,test:!1,rtvVersion:x(t)}}(r)}function x(t){var r;return S||(S=(null===(r=t.AMP_CONFIG)||void 0===r?void 0:r.v)||"01".concat("2203281422000")),S}function R(t,r){var n=r||O(t);return["1","actions","amp","amp4ads","amp4email"].includes(n.development)||!!t.AMP_DEV_MODE}function A(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function I(t){var r=Object.getOwnPropertyDescriptor(t,"message");if(null!=r&&r.writable)return t;var n=t.message,e=t.stack,o=new Error(n);for(var i in t)o[i]=t[i];return o.stack=e,o}function T(t){for(var r,n=null,e="",o=a(arguments,!0);!(r=o()).done;){var i=r.value;i instanceof Error&&!n?n=I(i):(e&&(e+=" "),e+=i)}return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function F(t){var r,n;null===(r=(n=self).__AMP_REPORT_ERROR)||void 0===r||r.call(n,t)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var P=self.__AMP_LOG;function M(t,r){throw new Error("failed to call initLogConstructor")}function N(t){return P.user||(P.user=k()),function(t,r){return r&&r.ownerDocument.defaultView!=t}(P.user.win,t)?P.userForEmbed||(P.userForEmbed=k()):P.user}function k(t){return M()}function $(){return P.dev||(P.dev=M())}function _(t,r,n,e,o,i,u,a,f,c,l){return t}function z(t,r,n,e,o,i,u,a,f,c,l){return N().assert(t,r,n,e,o,i,u,a,f,c,l)}function D(t,r){return q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),r)}function U(t,r){return q((n=V(t),(e=V(n)).isSingleDoc()?e.win:e),r);var n,e}function V(t){return t.nodeType?(n=t,r=(n.ownerDocument||n).defaultView,D(r,"ampdoc")).getAmpDoc(t):t;var r,n}function q(t,r){_(function(t,r){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[r];return!(!n||!n.ctor)}(t,r));var n=function(t){var r=t.__AMP_SERVICES;return r||(r=t.__AMP_SERVICES={}),r}(t)[r];return n.obj||(_(n.ctor),_(n.context),n.obj=new n.ctor(n.context),_(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}var G,J=["Webkit","webkit","Moz","moz","ms","O","o"];function L(t,r,n,e,o){var i=function(t,r,n){if(r.startsWith("--"))return r;G||(G=c());var e=G[r];if(!e||n){if(e=r,void 0===t[r]){var o=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(r),i=function(t,r){for(var n=0;n<J.length;n++){var e=J[n]+r;if(void 0!==t[e])return e}return""}(t,o);void 0!==t[i]&&(e=i)}n||(G[r]=e)}return e}(t.style,r,o);if(i){var u,a=e?n+e:n;t.style.setProperty((u=i.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),J.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}var C=function(){function t(){}return t.generate=function(t){return function(t){for(var r=t.length,n=5381,e=0;e<r;e++)n=33*n^t.charCodeAt(e);return String(n>>>0)}(function(t){for(var r=[],n=0;1==(null==(i=t)?void 0:i.nodeType)&&n<25;){var e="";t.id&&(e="/".concat(t.id));var o=t.nodeName.toLowerCase();r.push("".concat(o).concat(e).concat(H(t))),n++,t=t.parentElement}var i;return r.join()}(t))},t}();function H(t){for(var r=t.nodeName,n=0,e=0,o=t.previousElementSibling;o&&e<25&&n<100;)o.nodeName==r&&e++,n++,o=o.previousElementSibling;return e<25&&n<100?".".concat(e):""}function B(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function X(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?B(Object(n),!0).forEach((function(r){A(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var Z="__AMP__EXPERIMENT_TOGGLES";function W(t){var r,n,e,o,u;if(t[Z])return t[Z];t[Z]=c();var f=t[Z];l(f);var s=X(X({},null!==(r=t.AMP_CONFIG)&&void 0!==r?r:{}),null!==(n=t.AMP_EXP)&&void 0!==n?n:v((null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var d in s){var p=s[d];"number"==typeof p&&p>=0&&p<=1&&(f[d]=Math.random()<p)}var m=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(i(m)&&m.length){var h=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(h)for(var b,y,g=a((null===(b=h.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(y=g()).done;){var w=y.value;m.includes(w)&&(f[w]=!0)}}Object.assign(f,function(t){var r,n="";try{var e;"localStorage"in t&&(n=null!==(e=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(t){$().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var o,i=(null===(r=n)||void 0===r?void 0:r.split(/\s*,\s*/g))||[],u=c(),f=a(i,!0);!(o=f()).done;){var l=o.value;l&&("-"==l[0]?u[l.substr(1)]=!1:u[l]=!0)}return u}(t));var O=null===(u=t.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(i(O)&&O.length)for(var S,E=j(t.location.originalHash||t.location.hash),x=a(O,!0);!(S=x()).done;){var R=S.value,A=E["e-".concat(R)];"1"==A&&(f[R]=!0),"0"==A&&(f[R]=!1)}return f}var K,Q,Y=function(){function t(t){this.St=t,this.It=0,this.Ct=0,this.Ot=c()}var r=t.prototype;return r.has=function(t){return!!this.Ot[t]},r.get=function(t){var r=this.Ot[t];if(r)return r.access=++this.Ct,r.payload},r.put=function(t,r){this.has(t)||this.It++,this.Ot[t]={payload:r,access:this.Ct},this.Rt()},r.Rt=function(){if(!(this.It<=this.St)){var t,r=this.Ot,n=this.Ct+1;for(var e in r){var o=r[e].access;o<n&&(n=o,t=e)}void 0!==t&&(delete r[t],this.It--)}},t}();function tt(t,r){return K||(K=self.document.createElement("a"),Q=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Y(100))),function(t,r,n){if(n&&n.has(r))return n.get(r);t.href=r,t.protocol||(t.href=t.href);var e,o={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),e=t.origin&&"null"!=t.origin?t.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=e;var i=o;return n&&n.put(r,i),i}(K,t,r?null:Q)}function rt(t){return"https:"==(t=function(t){return"string"==typeof t?tt(t):t}(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||(n=".localhost",(e=(r=t.hostname).length-n.length)>=0&&r.indexOf(n,e)==e);var r,n,e}new Set(["c","v","a","ad"]);var nt={};function et(t,r,n,e){var o=n||r.getAttribute("type");z(o,"Attribute type required for <amp-ad>: %s",r);var i=function(t){for(var r=0,n=t;n&&n!=n.parent;n=n.parent)r++;return String(r)+"-"+ut(t)}(t),u={};return function(t,r){var n=t.dataset;for(var e in n)e.startsWith("vars")||(r[e]=n[e]);var o=t.getAttribute("json");if(o){var i=d(o);if(void 0===i)throw N().createError("Error parsing JSON in json attribute in element %s",t);for(var u in i)r[u]=i[u]}}(r,u),u=function(t,r,n,e){var o=Date.now(),i=r.getAttribute("width"),u=r.getAttribute("height");(e=e||{}).width=s(i),e.height=s(u),r.getAttribute("title")&&(e.title=r.getAttribute("title"));var a=t.location.href;"about:srcdoc"==a&&(a=t.parent.location.href);var f,c,l,v,d=V(r),p=U(r,"documentInfo").get(),m=(v=r,U(v,"viewer")).getUnconfirmedReferrerUrl(),h=function(t){for(var r=t.ownerDocument.body,n=0,e=0,o=t;o&&o!=r;o=o.offsetParent)n+=o.offsetLeft,e+=o.offsetTop;var i=t.offsetHeight;return function(t,r,n,e){return{left:t,top:r,width:n,height:e,bottom:r+e,right:t+n,x:t,y:r}}(n,e,t.offsetWidth,i)}(r);e._context={"ampcontextVersion":"2203281422000","ampcontextFilepath":"".concat(y.thirdParty,"/").concat("2203281422000","/ampcontext-v0.js"),"sourceUrl":p.sourceUrl,"referrer":m,"canonicalUrl":p.canonicalUrl,"pageViewId":p.pageViewId,"location":{"href":a},"startTime":o,"tagName":r.tagName,"mode":{localDev:!1,development:E(l).development,esm:E(l).esm,test:!1,rtvVersion:E(l).rtvVersion},"canary":(f=t,!(null===(c=f.AMP_CONFIG)||void 0===c||!c.canary)),"hidden":!d.isVisible(),"initialLayoutRect":h?{"left":h.left,"top":h.top,"width":h.width,"height":h.height}:null,"domFingerprint":C.generate(r),"experimentToggles":W(t),"sentinel":n};var b=r.getAttribute("src");return b&&(e.src=b),e}(t,r,i,u),u.type=o,Object.assign(u._context,e),u}function ot(t){return"".concat(y.thirdParty,"/").concat("2203281422000","/vendor/").concat(t).concat(".js")}function it(t,r,n){return function(t,r,n){var e=r.getMetaByName("amp-3p-iframe-src");if(!e)return null;var o=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return z(null!=t,"%s %s must be available",r,n),z(rt(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',r,n,t),t}(e,'meta[name="amp-3p-iframe-src"]');z(-1==o.indexOf("?"),"3p iframe url must not include query string %s in element %s.",o,e);var i=tt(o);return z("localhost"==i.hostname&&!n||i.origin!=tt(t.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",o,i.origin,e),"".concat(o,"?").concat("2203281422000")}(t,r,n)||function(t,r){return t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+ut(t),"https://"+t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(y.thirdPartyFrameHost,"/").concat("2203281422000","/")+"".concat("frame",".html")}(t)}function ut(t){var r;if(t.crypto&&t.crypto.getRandomValues){var n=new Uint32Array(2);t.crypto.getRandomValues(n),r=String(n[0])+n[1]}else r=String(t.Math.random()).substr(2)+"0";return r}function at(t){if(t.sandbox&&t.sandbox.supports){for(var r=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],n=0;n<r.length;n++){var e=r[n];if(!t.sandbox.supports(e))return void $().info("3p-frame","Iframe doesn't support %s",e)}t.sandbox=r.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}}function ft(t){return"string"==typeof t&&t.startsWith("amp-")&&-1!=t.indexOf("{")}function ct(t){return t.data}var lt="unlisten";function st(t,r,n){var e=function(t,r){var n=t.listeningFors;return!n&&r&&(n=t.listeningFors=Object.create(null)),n||null}(t,n);if(!e)return e;var o=e[r];return!o&&n&&(o=e[r]=[]),o||null}function vt(t,r){for(var n=r;n&&n!=n.parent;n=n.parent)if(n==t)return!0;return!1}function dt(t){for(var r={"sentinel":lt},n=t.length-1;n>=0;n--){var e=t[n];if(!e.frame.contentWindow){t.splice(n,1);var o=e.events;for(var i in o)o[i].splice(0,1/0).forEach((function(t){t(r)}))}}}var pt=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}(a,t);var e,i,u=(e=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=n(e);if(i){var u=n(this).constructor;t=Reflect.construct(r,arguments,u)}else t=r.apply(this,arguments);return o(this,t)});function a(){return u.apply(this,arguments)}var f=a.prototype;return f.preconnectCallback=function(t){var r=D(this.win,"preconnect"),n=this.getAmpDoc();"comment"===this.element.getAttribute("data-embedtype")?(r.url(n,"https://www.redditmedia.com",t),r.url(n,"https://www.redditstatic.com",t),r.preload(n,"https://www.redditstatic.com/comment-embed.js","script")):(r.url(n,"https://www.reddit.com",t),r.url(n,"https://cdn.embedly.com",t),r.preload(n,"https://embed.redditmedia.com/widgets/platform.js","script")),function(t,r,n,e){var o=it(t,n);e.preload(n,o,"document"),e.preload(n,ot("reddit"),"script")}(this.win,0,n,r)},f.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},f.layoutCallback=function(){var t=this;z(this.element.getAttribute("data-src"),"The data-src attribute is required for <amp-reddit> %s",this.element),z(this.element.getAttribute("data-embedtype"),"The data-embedtype attribute is required for <amp-reddit> %s",this.element);var r=function(t,r,n,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.allowFullscreen,u=void 0!==i&&i,a=o.initialIntersection;_(void 0===r.isConnected||!0===r.isConnected);var f=et(t,r,n,e);a&&(f._context.initialIntersection=a);var c=t.document.createElement("iframe");nt[f.type]||(nt[f.type]=0),nt[f.type]+=1;var l=r.getAmpDoc(),s=it(t,l),v=tt(s).hostname,d=JSON.stringify({"host":v,"bootstrap":ot(f.type),"type":f.type,"count":nt[f.type],"attributes":f});return c.src=s,c.ampLocation=tt(s),c.name=d,f.width&&(c.width=f.width),f.height&&(c.height=f.height),f.title&&(c.title=f.title),u&&c.setAttribute("allowfullscreen","true"),c.setAttribute("scrolling","no"),L(c,"border","none"),c.onload=function(){this.readyState="complete"},c.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(n)||at(c),c.setAttribute("data-amp-3p-sentinel",f._context.sentinel),c}(this.win,this.element,"reddit",null,{allowFullscreen:!0});return r.title=this.element.title||"Reddit",r.classList.add("i-amphtml-fill-content"),function(t,r,n,e,o,i){_(t.src),_(!t.parentNode),_(n);var u=t.ownerDocument.defaultView;!function(t){t.listeningFors||t.addEventListener("message",(function(r){if(ct(r)){var n=function(t){return"string"==typeof t&&(t="{"==t.charAt(0)?d(t,(function(t){$().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",t)}))||null:ft(t)?function(t){if(!ft(t))return null;var r=t.indexOf("{");return l(-1!=r),d(t.substr(r),(function(r){!function(t){var r=T.apply(null,arguments);setTimeout((function(){throw F(r),r}))}(new Error("MESSAGING: Failed to parse message: ".concat(t,"\n").concat(r.message)))}))}(t):null),t}(ct(r));if(n&&n.sentinel){var e=function(t,r,n,e){var o,i=st(t,r);if(!i)return i;for(var u=0;u<i.length;u++){var a=i[u],f=a.frame.contentWindow;if(f){if(e==f||vt(f,e)){o=a;break}}else setTimeout(dt,0,i)}return o?o.events:null}(t,n.sentinel,r.origin,r.source);if(e){var o=e[n.type];if(o){o=o.slice();for(var i=0;i<o.length;i++)(0,o[i])(n,r.source,r.origin,r)}}}}}))}(u);var a,f=function(t,r,n){for(var e,o=function(t,r){return t.getAttribute("data-amp-3p-sentinel")}(r),i=st(t,o,!0),u=0;u<i.length;u++){var a=i[u];if(a.frame===r){e=a;break}}return e||(e={frame:r,events:Object.create(null)},i.push(e)),e.events}(u,t),c=tt(t.src).origin,s=f["embed-size"]||(f["embed-size"]=[]),v=function(r,e,o,i){if("amp"==r.sentinel){if(e!=t.contentWindow)return;if(c!=o)return}e==t.contentWindow&&(r.sentinel!=lt?n(r,e,o,i):a())};s.push(v),a=function(){if(v){var t=s.indexOf(v);t>-1&&s.splice(t,1),v=null,s=null,n=null}}}(r,0,(function(r){t.forceChangeHeight(r.height)})),this.element.appendChild(r),this.loadPromise(r)},a}(t.BaseElement);t.registerElement("amp-reddit",pt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-reddit-0.1.js.map