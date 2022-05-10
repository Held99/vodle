;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-video-iframe",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array;function i(t){return n(t)?t:[t]}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function s(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,{hasOwnProperty:r,toString:a}=Object.prototype;function l(t){return"[object Object]"===a.call(t)}function u(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function c(t){return"number"==typeof t&&isFinite(t)}function h(t,n,i,e,s,o,r,a,l,u,c){return t}function f(){return o||(o=Promise.resolve(void 0))}var d=class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}};function m(t){return new Promise((n=>{n(t())}))}var p="registered",v="load",_="playing",P="pause",g="ended",A="muted",y="unmuted",b="ad_start",M="ad_end",w="amp:video:tick",R="playing_manual",E="paused",I="video-play",T="user-interacted";function V(t){t.signals().signal(T)}var k=[_,P,g,A,y,b,M];function S(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function x(t){return(t.ownerDocument||t).defaultView}var C,q,O,j={bubbles:!0,cancelable:!0};function $(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function F(t,n,i,e){const s=i||{};h(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||j;o.initEvent(n,r,a),t.dispatchEvent(o)}function z(t,n){t.classList.add("i-amphtml-fill-content"),n&&t.classList.add("i-amphtml-replaced-content")}function U(t,n,i={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=i,r=function(t){return t.parent&&t.parent!=t}(n)&&(e||s)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function Y(t){var n;let i=null===(n=C)||void 0===n?void 0:n.get(t);if(!i){const n=function(t){C||(C=new WeakMap,q=new WeakMap),h(q);let n=q.get(t);return n||(n=U((t=>{const i=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];i.has(o)||(i.add(o),h(n),n.unobserve(o),h(C),null===(e=C.get(o))||void 0===e||e.resolve(t[s]),C.delete(o))}}),t,{needsRootBounds:!0}),q.set(t,n)),n}(x(t));h(C),n.observe(t),i=new d,C.set(t,i)}return i.promise}function D(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:i,stack:e}=t,s=new Error(i);for(const n in t)s[n]=t[n];return s.stack=e,s}function L(t){let n=null,i="";for(var e,o=s(arguments,!0);!(e=o()).done;){const t=e.value;t instanceof Error&&!n?n=D(t):(i&&(i+=" "),i+=t)}return n?i&&(n.message=i+": "+n.message):n=new Error(i),n}function W(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function N(t,...n){try{return t.apply(null,n)}catch(t){!function(t){const n=L.apply(null,arguments);setTimeout((()=>{throw W(n),n}))}(t)}}function B(t){const n=L.apply(null,arguments);return n.expected=!0,n}function J(t,...n){W(B.apply(null,n))}new WeakMap,new WeakMap;var H=["Webkit","webkit","Moz","moz","ms","O","o"],Z={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function G(t,n,i,e,s){const o=function(t,n,i){if(n.startsWith("--"))return n;O||(O=u());let e=O[n];if(!e||i){if(e=n,void 0===t[n]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),s=function(t,n){for(let i=0;i<H.length;i++){const e=H[i]+n;if(void 0!==t[e])return e}return""}(t,i);void 0!==t[s]&&(e=s)}i||(O[n]=e)}return e}(t.style,n,s);if(!o)return;const r=e?i+e:i;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return H.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(o),r)}var K=/vertical/,Q=new WeakMap,X=new WeakMap,tt=new WeakMap;function nt(t){let n=Q.get(t);return n||(n=new t.ResizeObserver(it),Q.set(t,n)),n}function it(t){const n=new Set;for(let i=t.length-1;i>=0;i--){const e=t[i],{target:s}=e;if(n.has(s))continue;n.add(s);const o=X.get(s);if(o){tt.set(s,e);for(let t=0;t<o.length;t++){const{callback:n,type:i}=o[t];et(i,n,e)}}}}function et(t,n,i){if(0==t){const{contentRect:t}=i,{height:e,width:s}=t;N(n,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=i;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=i,n=x(t),s=K.test(function(t,n){return t.getComputedStyle(n)||Z}(n,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,l;s?(l=r,a=o):(a=r,l=o),e={inlineSize:a,blockSize:l}}N(n,e)}}function st(t){let n=!1,i=null,e=t;return(...t)=>(n||(i=e.apply(self,t),n=!0,e=null),i)}var ot=self.AMP_CONFIG||{},rt=("string"==typeof ot.thirdPartyFrameRegex?new RegExp(ot.thirdPartyFrameRegex):ot.thirdPartyFrameRegex,("string"==typeof ot.cdnProxyRegex?new RegExp(ot.cdnProxyRegex):ot.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function at(t){if(!self.document||!self.document.head)return null;if(self.location&&rt.test(self.location.origin))return null;const n=self.document.head.querySelector(`meta[name="${t}"]`);return n&&n.getAttribute("content")||null}ot.thirdPartyUrl,ot.thirdPartyFrameHost,ot.cdnUrl||at("runtime-host"),ot.errorReportingUrl,ot.betaErrorReportingUrl,ot.localDev,ot.geoApiUrl||at("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var lt=self.__AMP_LOG;function ut(t){return lt.user||(lt.user=ct()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(lt.user.win,t)?lt.userForEmbed||(lt.userForEmbed=ct()):lt.user}function ct(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function ht(t,n,i,e,s,o,r,a,l,u,c){return t}function ft(t,n,i,e,s,o,r,a,l,u,c){return ut().assert(t,n,i,e,s,o,r,a,l,u,c)}function dt(t,n){return At(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function mt(t,n){return At(gt(Pt(t)),n)}function pt(t,n){const i=gt(Pt(t));return Mt(i,n)?At(i,n):null}function vt(t,n){return function(t,n){const i=yt(t,n);if(i)return i;const e=bt(t);return e[n]=function(){const t=new d,{promise:n,reject:i,resolve:e}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:e,reject:i,context:null,ctor:null}}(),e[n].promise}(gt(t),n)}function _t(t,n){return yt(gt(t),n)}function Pt(t){return t.nodeType?(n=x(t),dt(n,"ampdoc")).getAmpDoc(t):t;var n}function gt(t){const n=Pt(t);return n.isSingleDoc()?n.win:n}function At(t,n){ht(Mt(t,n));const i=bt(t)[n];return i.obj||(ht(i.ctor),ht(i.context),i.obj=new i.ctor(i.context),ht(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function yt(t,n){const i=bt(t)[n];return i?i.promise?i.promise:(At(t,n),i.promise=Promise.resolve(i.obj)):null}function bt(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function Mt(t,n){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var wt,Rt=t=>pt(t,"action"),Et=t=>dt(t,"platform"),It=t=>At(t,"timer"),Tt=t=>function(t,n,i,e){const s=_t(t,n);if(s)return s;const o=Pt(t);return o.whenExtensionsKnown().then((()=>{const t=o.getExtensionVersion(i);return t?dt(o.win,"extensions").waitForExtension(i,t):null})).then((i=>i?e?_t(t,n):vt(t,n):null))}(t,"consentPolicyManager","amp-consent"),Vt=t=>pt(t,"url"),kt=t=>mt(t,"viewport");function St(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const n=t.document.createElement("video");var i;return n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.setAttribute("webkit-playsinline",""),n.setAttribute("height","0"),n.setAttribute("width","0"),n.muted=!0,n.playsInline=!0,n.playsinline=!0,n.webkitPlaysinline=!0,function(t,n){for(const i in n)G(t,i,n[i])}(n,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),i=n,m((()=>i.play())).catch((()=>{})),Promise.resolve(!n.paused)}(t)),t.__AMP_AUTOPLAY}function xt(t){return t.querySelector("video, iframe")}function Ct(t,n){const i=m((()=>t.play(!!n)));return i.catch((t=>{J(0,t)})),i}function qt(t,n,i,e){let s=t,o=i,r=t=>{try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}};const a=function(){if(void 0!==wt)return wt;wt=!1;try{const t={get capture(){return wt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return wt}(),l=!(null==e||!e.capture);return s.addEventListener(n,r,a?e:l),()=>{null==s||s.removeEventListener(n,r,a?e:l),o=null,s=null,r=null}}function Ot(t,n,i,e){const s={detail:i};return Object.assign(s,e),new t.CustomEvent(n,s)}function jt(t,n,i,e){return qt(t,n,i,e)}function $t(t){return t.data}var Ft,zt=class{constructor(){this.m_=!1,this.v_=new class{constructor(){this.Tt=null}add(t){return this.Tt||(this.Tt=[]),this.Tt.push(t),()=>{this.remove(t)}}remove(t){this.Tt&&function(t,n){const i=t.indexOf(n);-1!=i&&t.splice(i,1)}(this.Tt,t)}removeAll(){this.Tt&&(this.Tt.length=0)}fire(t){if(this.Tt)for(var n,i=s(this.Tt.slice(),!0);!(n=i()).done;)(0,n.value)(t)}getHandlerCount(){var t,n;return null!==(t=null===(n=this.Tt)||void 0===n?void 0:n.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.v_.add(t)}beginSession(){this.m_=!0}endSession(){this.m_&&this.v_.fire(),this.m_=!1}isSessionActive(){return this.m_}};function Ut(t){const n=t.ownerDocument||t;return Ft&&Ft.ownerDocument===n||(Ft=n.createElement("div")),Yt}function Yt(t){return function(t,n){h(1===n.length),t.innerHTML=n[0];const i=t.firstElementChild;return h(i),h(!i.nextElementSibling),t.removeChild(i),i}(Ft,t)}var Dt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Lt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Wt(t,n,i){if(n[i])return n[i];const e=t.querySelector(`style[${i}], link[${i}]`);return e?(n[i]=e,e):null}function Nt(t,n){const i=t.styleSheets;for(let t=0;t<i.length;t++)if(i[t].ownerNode==n)return!0;return!1}var Bt={"title":"","artist":"","album":"","artwork":[{"src":""}]},Jt="video-manager",Ht=(t,n)=>!!t&&(t.video===n||t.video.element===n);function Zt(t,n){const i=n.top+n.height/2,e=t.getSize().height/2;return Math.abs(i-e)}function Gt(t){return 10*t*5}var Kt=t=>!!t&&!isNaN(t)&&t>1;function Qt(t,n,i){const{video:e}=t;t.getAnalyticsDetails().then((t=>{i&&Object.assign(t,i),F(e.element,n,t)}))}function Xt(t){!function(t,i,e,s){const o=Pt(t),r=gt(o);!function(t,n,i,e,s,o){const r=bt(t);let a=r[i];a||(a=r[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=n,a.sharedInstance=!1,a.resolve&&At(t,i))}(r,o,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=st((()=>function(t){!function(t,n,i,e,s){const o=t.getHeadNode(),r=function(t,n,i,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=u());const o=!i&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=i?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const i=Wt(t,s,r);if(i)return"STYLE"==i.tagName&&i.textContent!==n&&(i.textContent=n),i}const a=(t.ownerDocument||t).createElement("style");a.textContent=n;let l=null;return i?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),l=Wt(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),l=t.lastChild),function(t,n,i=null){if(!i)return void function(t,n){t.insertBefore(n,t.firstChild)}(t,n);const e=i.nextSibling;t.insertBefore(n,e)}(t,a,l),r&&(s[r]=a),a}(o,function(t,n){const i=t.__AMP_CSS_TR;return i?i(n):n}(o,n),e||!1,s||null);if(i){const n=t.getRootNode();if(Nt(n,r))return i(r),r;const e=setInterval((()=>{Nt(n,r)&&(clearInterval(e),i(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.__=null,this.g_=null,this.y_=null,this.Ee=It(t.win),this.A_=Rt(t.getHeadNode()),this.P_=()=>this.b_(),this.M_=st((()=>new class{constructor(t,n){this.E_=n,this.Ci=t,this.I_=null,this.R_=null,this.__=[],this.T_=[],this.V_=()=>this.w_(),this.k_=t=>this.C_(t)==R,this.q_=(t,n)=>this.x_(t,n),this.S_(),this.O_()}dispose(){this.T_.forEach((t=>t())),this.T_.length=0}register(t){const{video:n}=t,{element:i}=n;this.j_(i)&&(this.__.push(n),jt(i,P,this.V_),jt(i,_,this.V_),jt(i,g,this.V_),n.signals().whenSignal(T).then(this.V_),this.w_())}O_(){const t=this.Ci.getRootNode(),n=()=>this.F_();this.T_.push(jt(t,"webkitfullscreenchange",n),jt(t,"mozfullscreenchange",n),jt(t,"fullscreenchange",n),jt(t,"MSFullscreenChange",n))}isInLandscape(){return(t=this.Ci.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}j_(t){if("video"==xt(t).tagName.toLowerCase())return!0;const n=Et(this.Ci.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}F_(){this.I_=null}S_(){const{win:t}=this.Ci,{screen:n}=t;if(n&&"orientation"in n){const t=n.orientation;this.T_.push(jt(t,"change",(()=>this.L_())))}this.T_.push(jt(t,"orientationchange",(()=>this.L_())))}L_(){this.isInLandscape()?null!=this.R_&&this.Y_(this.R_):this.I_&&this.U_(this.I_)}Y_(t){const n=Et(this.Ci.win);this.I_=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.z_(t).then((()=>t.fullscreenEnter()))}U_(t){this.I_=null,this.z_(t,"center").then((()=>t.fullscreenExit()))}z_(t,n=null){const{element:i}=t,e=this.N_();return this.D_().then((()=>Y(i))).then((({boundingClientRect:t})=>{const{bottom:s,top:o}=t,r=e.getSize().height;if(o>=0&&s<=r)return f();const a=n||(s>r?"bottom":"top");return e.animateScrollIntoView(i,a)}))}N_(){return kt(this.Ci)}D_(){return It(this.Ci.win).promise(330)}w_(){if(this.isInLandscape())return Promise.resolve(this.R_);this.R_=null;const t=this.__.filter(this.k_).map((t=>Y(t.element)));return Promise.all(t).then((t=>{const n=t.sort(this.q_)[0];return n&&n.intersectionRatio>.5?n.target.getImpl().then((t=>this.R_=t)):this.R_}))}x_(t,n){const{boundingClientRect:i,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=n,r=e-o;if(Math.abs(r)>.1)return r;const a=kt(this.Ci),l=Zt(a,i),u=Zt(a,s);return l<u||l>u?l-u:i.top-s.top}C_(t){return this.E_.getPlayingState(t)}}(this.ampdoc,this))),this.Ee.delay(this.P_,1e3)}dispose(){if(this.M_().dispose(),this.g_.disconnect(),this.g_=null,this.__)for(let t=0;t<this.__.length;t++)this.__[t].dispose()}b_(){for(let t=0;t<this.__.length;t++){const n=this.__[t];n.getPlayingState()!==E&&(Qt(n,"video-seconds-played"),this.W_(n))}this.Ee.delay(this.P_,1e3)}W_(t){const n="timeUpdate",i=t.video.getCurrentTime(),e=t.video.getDuration();if(c(i)&&c(e)&&e>0){const s=i/e,o=Ot(this.ampdoc.win,`${Jt}.${n}`,{"time":i,"percent":s});this.A_.trigger(t.video.element,n,o,1)}}register(t){ht(t);const i=t;if(this.B_(t),!t.supportsPlatform())return;if(this.J_(t))return;if(!this.g_){const t=t=>t.forEach((({isIntersecting:t,target:n})=>{this.Z_(n).updateVisibility(t)}));this.g_=U(t,this.ampdoc.win,{threshold:.5})}this.g_.observe(i.element),jt(i.element,"reloaded",(()=>e.videoLoaded())),this.__=this.__||[];const e=new class{constructor(t,n){this.E_=t,this.Ci=t.ampdoc,this.video=n,this.G_=!0,this.H_=!1,this.mf=!1,this.K_=!1,this.es=!1,this.Q_=new zt,this.Q_.onSessionEnd((()=>Qt(this,"video-session"))),this.X_=new zt,this.X_.onSessionEnd((()=>Qt(this,"video-session-visible"))),this.vg=st((()=>new class{constructor(t,n){this.Ee=It(t),this.yg=n,this.T_=null,this.Ag=0,this.Pg=0}start(){const{element:t}=this.yg.video;this.stop(),this.T_=this.T_||[],this.bg()?this.Eg(this.Pg):this.T_.push(function(t,n,i,e){let s=i;const o=qt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.bg()&&this.Eg(this.Pg)}))),this.T_.push(jt(t,g,(()=>{this.bg()&&this.Ig(100)})))}stop(){if(this.T_){for(;this.T_.length>0;)this.T_.pop()();this.Pg++}}bg(){const{video:t}=this.yg,n=t.getDuration();if(!Kt(n))return!1;if(Gt(n)<250){const n=Math.ceil(5);this.Rg("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",n,"seconds long.",t.element)}return!0}Rg(...t){ut().warn.apply(ut(),[Jt].concat(t))}Eg(t){if(t!=this.Pg)return;const{yg:n,Ee:i}=this,{video:e}=n,s=()=>this.Eg(t);if(n.getPlayingState()==E)return void i.delay(s,500);const o=e.getDuration();if(!Kt(o))return void i.delay(s,500);const r=(u=Gt(o),h(!0),Math.min(Math.max(u,250),4e3)),a=e.getCurrentTime()/o*100,l=5*Math.floor(a/5);var u;ht(c(l)),this.Ig(l),i.delay(s,r)}Ig(t){t<=0||this.Ag!=t&&(this.Ag=t,this.Tg(t))}Tg(t){Qt(this.yg,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.Ci.win,this))),this.Vg=!1,this.kg=!1,this.Cg=null,this.Z=!1,this.qg=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.E_.installAutoplayStyles(),this.xg=Bt,this.Sg=()=>{Ct(this.video,!1)},this.Og=()=>{this.video.pause()},jt(n.element,v,(()=>this.videoLoaded())),jt(n.element,P,(()=>this.$g())),jt(n.element,"play",(()=>{this.qg=!0,Qt(this,I)})),jt(n.element,_,(()=>this.jg())),jt(n.element,A,(()=>this.Z=!0)),jt(n.element,y,(()=>{this.Z=!1,this.E_.pauseOtherVideos(this)})),jt(n.element,w,(t=>{const n=$t(t),i=n.eventType;i&&this.Fg(i,n.vars)})),jt(n.element,g,(()=>{this.K_=!1,Qt(this,"video-ended")})),jt(n.element,b,(()=>{this.K_=!0,Qt(this,"video-ad-start")})),jt(n.element,M,(()=>{this.K_=!1,Qt(this,"video-ad-end")})),n.signals().whenSignal(p).then((()=>this.Lg())),this.Yg=st((()=>{const t="firstPlay",n=Ot(this.Ci.win,t,{}),{element:i}=this.video;Rt(i).trigger(i,t,n,1)})),this.Ug()}dispose(){this.vg().stop()}Fg(t,n){const i={"__amp:eventType":t};Object.keys(n).forEach((t=>{i[`custom_${t}`]=n[t]})),Qt(this,"video-hosted-custom",i)}Ug(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.G_=!1,this.mf&&this.video.pause()}))}isMuted(){return this.Z}isPlaybackManaged(){return this.G_}Lg(){this.zg()&&this.E_.registerForAutoFullscreen(this),this.hasAutoplay&&this.Ng()}zg(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&ft(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}jg(){this.mf=!0,this.getPlayingState()==R&&(this.Yg(),this.E_.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const e=Vt(t);if(i&&i.artwork){const{artwork:t}=i;ht(n(t)),t.forEach((t=>{if(t){const n=l(t)?t.src:t;ft(e.isProtocolValid(n))}}))}}(i,this.xg),function(t,n,i,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(Bt),s.mediaSession.metadata=new t.MediaMetadata(n),s.mediaSession.setActionHandler("play",i),s.mediaSession.setActionHandler("pause",e))}(this.Ci.win,this.xg,this.Sg,this.Og)),this.Q_.beginSession(),this.es&&this.X_.beginSession(),this.qg||Qt(this,I)}$g(){Qt(this,"video-pause"),this.mf=!1,this.kg?this.kg=!1:this.Q_.endSession()}videoLoaded(){this.H_=!0,this.Cg=xt(this.video.element),this.Dg(),this.vg().start(),this.es&&this.Wg()}Dg(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.xg=u(this.video.getMetadata()));const t=this.Ci.win.document;if(!this.xg.artwork||0==this.xg.artwork.length){const n=function(t){const n=t.querySelector('script[type="application/ld+json"]');if(!n)return;const i=S(n.textContent);return i&&i.image?"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0:void 0}(t)||function(t){const n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){const n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.xg.artwork=[{"src":n}])}if(!this.xg.title){const n=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.Cg.getAttribute("title")||this.Cg.getAttribute("aria-label")||t.title;n&&(this.xg.title=n)}}Bg(){this.H_&&this.Wg()}Wg(){this.Ci.isVisible()&&St(this.Ci.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.Jg():this.Zg()}))}Ng(){this.video.isInteractive()&&this.video.hideControls(),St(this.Ci.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.Gg()):this.video.showControls()}))}Gg(){const{video:t}=this,{element:n,win:i}=this.video;if(n.hasAttribute("noaudio")||n.signals().get(T))return;const e=function(t,n){const i=Ut(n)(Lt),e=i.firstElementChild;for(let t=0;t<4;t++){const n=e.cloneNode(!0),s=n.children;for(let n=0;n<s.length;n++)s[n].classList.add(`amp-video-eq-${t+1}-${n+1}`);i.appendChild(n)}return $(e),i}(0,n),s=[e];function o(n){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,n)}))}))}function r(n){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",n)))}const a=[jt(n,P,(()=>r(!1))),jt(n,_,(()=>r(!0))),jt(n,b,(()=>{o(!1),t.showControls()})),jt(n,M,(()=>{o(!0),t.hideControls()})),jt(n,y,(()=>V(t)))];if(t.isInteractive()){t.hideControls();const i=function(t,n){const i=Ut(t)(Dt);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(n,this.xg);s.push(i),a.push(jt(i,"click",(()=>V(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{n.appendChild(t)}))})),this.K_&&o(!1),t.signals().whenSignal(T).then((()=>{this.Yg(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{$(t)}))}))}))}Jg(){this.G_&&(this.es?(this.X_.beginSession(),Ct(this.video,!0),this.Vg=!0):(this.mf&&this.X_.endSession(),this.video.pause(),this.kg=!0))}Zg(){this.es?this.X_.beginSession():this.mf&&this.X_.endSession()}updateVisibility(t){const n=this.es;this.es=t,t!=n&&this.Bg()}getPlayingState(){return this.mf?this.mf&&this.Vg&&!this.userInteracted()?"playing_auto":R:E}isRollingAd(){return this.K_}userInteracted(){return null!=this.video.signals().get(T)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([St(this.Ci.win),Y(t.element)]).then((n=>{const i=n[0],e=n[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&i,a=t.getPlayedRanges(),l=a.reduce(((t,n)=>t+n[1]-n[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.Z,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.__.push(e);const{element:s}=e.video;F(s,p),function(t){t.classList.add("i-amphtml-media-component")}(s),t.signals().signal(p),s.classList.add("i-amphtml-video-interface")}B_(t){i("play",(()=>Ct(t,!1))),i("pause",(()=>t.pause())),i("mute",(()=>t.mute())),i("unmute",(()=>t.unmute()));const n=()=>t.fullscreenEnter();function i(n,i){t.registerAction(n,(()=>{V(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)}J_(t){if(Ht(this.y_,t))return this.y_;for(let n=0;this.__&&n<this.__.length;n++){const i=this.__[n];if(Ht(i,t))return this.y_=i,i}return null}Z_(t){return ht(this.J_(t))}registerForAutoFullscreen(t){this.M_().register(t)}Hg(){return this.M_()}getVideoStateProperty(t,n){const i=this.ampdoc.getRootNode(),e=ut().assertElement(i.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),s=this.Z_(e);return(s?s.getAnalyticsDetails():f()).then((t=>t?t[n]:""))}getPlayingState(t){return this.Z_(t).getPlayingState()}isMuted(t){return this.Z_(t).isMuted()}userInteracted(t){return this.Z_(t).userInteracted()}isRollingAd(t){return this.Z_(t).isRollingAd()}pauseOtherVideos(t){this.__.forEach((n=>{n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==R&&n.video.pause()}))}})}(t,"video-manager")}new Set(["c","v","a","ad"]);var tn=["<iframe frameborder=0 allowfullscreen></iframe>"],nn="amp-video-iframe",en=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"],sn=st((()=>new RegExp("^video-custom-"))),on=(t,n)=>function(t,n){return function(t,n,i){if(!n)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${n}`:`?${n}`);return o+=e[1]?`#${e[1]}`:"",o}(t,function(t){const n=[];for(const o in t){let r=t[o];if(null!=r){r=i(r);for(let t=0;t<r.length;t++)n.push((e=o,s=r[t],`${encodeURIComponent(e)}=${encodeURIComponent(s)}`))}}var e,s;return n.join("&")}(n))}(t,function(t,n,i){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const n=t.match(o);n&&(s[n[1][0].toLowerCase()+n[1].substr(1)]=e[t])}return s}(n));function rn(t){const n=t.querySelector('script[type="application/ld+json"]');return n&&S(n.textContent)}var an=class extends t.BaseElement{constructor(t){super(t),this.Mv=null,this.$P=null,this.tM=null,this.nM=!1,this.iM=t=>this.N(t),this.pf=new class{constructor(t){this.yf=t,this.mf=!1,this.bf=!1,this._f=this._f.bind(this)}updatePlaying(t){t!==this.mf&&(this.mf=t,t?(this.bf=!1,function(t,n){!function(t,n,i){const e=t.ownerDocument.defaultView;if(!e)return;let s=X.get(t);if(s||(s=[],X.set(t,s),nt(e).observe(t)),!s.some((t=>t.callback===i&&1===t.type))){s.push({type:1,callback:i});const n=tt.get(t);n&&setTimeout((()=>et(1,i,n)))}}(t,0,n)}(this.yf,this._f)):function(t,n){!function(t,n,i){const e=X.get(t);if(e&&(function(t,n){const e=[];let s=0;for(let n=0;n<t.length;n++){const r=t[n];(o=r).callback===i&&1===o.type?e.push(r):(s<n&&(t[s]=r),s++)}var o;s<t.length&&(t.length=s)}(e),0==e.length)){X.delete(t),tt.delete(t);const n=t.ownerDocument.defaultView;n&&nt(n).unobserve(t)}}(t,0,n)}(this.yf,this._f))}_f({blockSize:t,inlineSize:n}){const i=n>0&&t>0;if(i===this.bf)return;this.bf=i;const e=this.yf;i||e.pause()}}(this.element)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){Xt(this.element)}layoutCallback(){this.user().assert(!function(t){const{height:n,width:i}=t.getLayoutSize();return!(i>10||n>10||function(t,n){return t.closest?t.closest(".i-amphtml-overlay"):function(t,n,i){let e;for(e=t;e&&void 0!==e;e=e.parentElement)if(n(e))return e;return null}(t,(t=>function(t,n){const i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!i&&i.call(t,".i-amphtml-overlay")}(t)))}(t))}(this.element),"<amp-video-iframe> does not allow tracking iframes. Please use amp-analytics instead.");const t=JSON.stringify(this.eM());var n;return this.Mv=(function(t,n){for(const i in n)t.setAttribute(i,n[i])}(n=function(t,n,e,o){const{element:r}=t,a=Ut(r)(tn);return e&&a.setAttribute("name",e),o&&a.setAttribute("sandbox",o.join(" ")),function(t,n,e,o){for(var r,a=s(i(["referrerpolicy"]),!0);!(r=a()).done;){const t=r.value,i=n.getAttribute(t);null!==i&&e.setAttribute(t,i)}}(0,t.element,a),a.src=Vt(r).assertHttpsUrl(n,r),z(a),r.appendChild(a),a}(this,this.ub(),t,en),{"scrolling":"no"}),G(n,"overflow","hidden"),n),this.$P=jt(this.win,"message",this.iM),this.sM().then((()=>this.EP()))}mutatedAttributesCallback(t){t.src&&this.oM()}oM(){const t=this.Mv;t&&t.src!=this.ub()&&(t.src=this.ub())}eM(){const{canonicalUrl:t,sourceUrl:n}=mt(this.element,"documentInfo").get(),i=this.getAmpDoc().getRootNode(),{documentElement:e,title:s}=i;return{"sourceUrl":n,"canonicalUrl":t,"title":s||null,"lang":(null==e?void 0:e.lang)||null,"jsonLd":rn(i)}}EP(){const{element:t}=this;var n;(n=t,mt(n,"video-manager")).register(this),F(t,v)}createPlaceholderCallback(){const{element:t}=this,n=t.getAttribute("poster");if(!n)return null;const i=new Image;return i.src=on(n,t),i.setAttribute("loading","lazy"),i.setAttribute("placeholder",""),z(i),i}unlayoutCallback(){return this.nM=!1,this.rM(),this.pf.updatePlaying(!1),!0}rM(){this.nM=!1,this.Mv&&($(this.Mv),this.Mv=null),this.$P&&(this.$P(),this.$P=null)}ub(){const{element:t}=this,n=Vt(t),i=t.getAttribute("src");return n.getSourceOrigin(i),n.getWinOrigin(this.win),function(t){return t.indexOf("#")>-1?t:`${t}#amp=1`}(on(i,t))}sM(){return this.tM=new d,this.tM.promise}aM(t){return function(t,n,i){return!(!n||t.source!=n.contentWindow)&&("string"==typeof i?i==t.origin:i.test(t.origin))}(t,this.Mv,/.*/)}N(t){if(!this.Mv)return;if(!this.aM(t))return;const n=$t(t);if(!(i=n)||!l(i)&&!i.startsWith("{"))return;var i;const e=l(s=n)?s:S(s);var s;if(null==e)return;const o=e.method;if(o){const t=e.id;return"getIntersection"==o?Y(this.element).then((n=>{this.lM(t,n)})):"getConsentData"===o?void this.uM(t):void ft(!1,"Unknown method `%s`.",o)}const r=e.event,a="canplay"==r;this.nM=this.nM||a;const{reject:u,resolve:c}=ht(this.tM);if(a)return c();if("error"==r&&!this.nM)return u("Received `error` event.");if("analytics"!=r){switch(r){case"playing":this.pf.updatePlaying(!0);break;case"pause":case"ended":this.pf.updatePlaying(!1)}k.indexOf(r)>-1&&F(this.element,r)}else{const t=ht(e.analytics);this.cM(t.eventType,t.vars)}}cM(t,n={}){ut().assertString(t,"`eventType` missing in analytics event"),ft(sn().test(t),"Invalid analytics `eventType`. Value must start with `%s`.","video-custom-"),F(this.element,w,{"eventType":t,"vars":n})}lM(t,n){const{intersectionRatio:i,time:e}=n,s=i<.5?0:i;this.hM({"id":t,"args":{"intersectionRatio":s,"time":e}})}uM(t){var n,i;(n=this.element,i=this.getConsentPolicy(),Tt(n).then((t=>{const n={"consentMetadata":t&&t.getConsentMetadataInfo,"consentString":t&&t.getConsentStringInfo,"consentPolicyState":t&&t.whenPolicyResolved,"consentPolicySharedData":t&&t.getMergedSharedData};return t?Promise.all(Object.keys(n).map((e=>n[e].call(t,i||"default").then((t=>({[e]:t})))))).then((t=>Object.assign.apply({},t))):n}))).then((n=>{this.hM({"id":t,"args":n})}))}fM(t){const{promise:n}=this.tM||{};n&&n.then((()=>{this.hM({"event":"method","method":t})}))}hM(t){this.Mv&&this.Mv.contentWindow&&this.Mv.contentWindow.postMessage(JSON.stringify(t),"*")}pauseCallback(){this.pause()}pause(){this.fM("pause")}play(){this.fM("play")}mute(){this.fM("mute")}unmute(){this.fM("unmute")}isInteractive(){return!0}supportsPlatform(){return!0}preimplementsMediaSessionAPI(){return this.element.hasAttribute("implements-media-session")}preimplementsAutoFullscreen(){return this.element.hasAttribute("implements-rotate-to-fullscreen")}fullscreenEnter(){this.fM("fullscreenenter")}fullscreenExit(){this.fM("fullscreenexit")}isFullscreen(){return!!this.Mv&&function(t){const{webkitDisplayingFullscreen:n}=t;if(void 0!==n)return n;const{ownerDocument:i}=t;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.Mv)}showControls(){this.fM("showcontrols")}hideControls(){this.fM("hidecontrols")}getMetadata(){}getDuration(){return 0}getCurrentTime(){return 0}getPlayedRanges(){return[]}seekTo(t){this.user().error(nn,"`seekTo` not supported.")}};t.registerElement(nn,an)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-video-iframe-0.1.mjs.map