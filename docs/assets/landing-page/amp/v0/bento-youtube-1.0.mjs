;
import{PreactBaseElement as e}from"../bento.mjs";function t(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=class{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}},{isArray:c}=Array;function f(e,t){return t.toUpperCase()}var{hasOwnProperty:d,toString:m}=Object.prototype;function p(e){const t=Object.getOwnPropertyDescriptor(e,"message");if(null!=t&&t.writable)return e;const{message:n,stack:o}=e,r=new Error(n);for(const t in e)r[t]=e[t];return r.stack=o,r}function b(e){let t=null,n="";for(var o,r=s(arguments,!0);!(o=r()).done;){const e=o.value;e instanceof Error&&!t?t=p(e):(n&&(n+=" "),n+=e)}return t?n&&(t.message=n+": "+t.message):t=new Error(n),t}function y(e){const t=b.apply(null,arguments);return t.expected=!0,t}function v(e,...t){var n,o,r;n=y.apply(null,t),null===(o=(r=self).__AMP_REPORT_ERROR)||void 0===o||o.call(r,n)}import{Fragment as g,createElement as h}from"../bento.mjs";import{useCallback as w,useEffect as j,useImperativeHandle as k,useLayoutEffect as O,useMemo as S,useRef as x,useState as q}from"../bento.mjs";import{forwardRef as C}from"../bento.mjs";import{ContainWrapper as E,useValueRef as I}from"../bento.mjs";import{useAmpContext as R,useLoading as M}from"../bento.mjs";import{useCallback as P,useLayoutEffect as $}from"../bento.mjs";import{useAmpContext as N}from"../bento.mjs";function A(e,t){try{return function(e){return JSON.parse(e)}(e)}catch(e){return null==t||t(e),null}}var L={bubbles:!0,cancelable:!0},T=self.AMP_CONFIG||{},V=("string"==typeof T.thirdPartyFrameRegex?new RegExp(T.thirdPartyFrameRegex):T.thirdPartyFrameRegex,("string"==typeof T.cdnProxyRegex?new RegExp(T.cdnProxyRegex):T.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function U(e){if(!self.document||!self.document.head)return null;if(self.location&&V.test(self.location.origin))return null;const t=self.document.head.querySelector(`meta[name="${e}"]`);return t&&t.getAttribute("content")||null}T.thirdPartyUrl,T.thirdPartyFrameHost,T.cdnUrl||U("runtime-host"),T.errorReportingUrl,T.betaErrorReportingUrl,T.localDev,T.geoApiUrl||U("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var F={"title":"","artist":"","album":"","artwork":[{"src":""}]};function _(e){const t=e.querySelector('script[type="application/ld+json"]');if(!t)return;const n=A(t.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}function z(e){const t=e.querySelector('meta[property="og:image"]');return t?t.getAttribute("content"):void 0}function D(e){const t=e.querySelector('link[rel="shortcut icon"]')||e.querySelector('link[rel="icon"]');return t?t.getAttribute("href"):void 0}function J({displayIcon:e,displayOverlay:t,metadata:n,onOverlayClick:o,pause:r,play:a,playing:l,wrapperRef:i}){const{playable:s}=R();return j((()=>{if(!s)return void r();const e=new IntersectionObserver((e=>{e[e.length-1].isIntersecting?a().catch((()=>{})):r()}),{threshold:.5});return e.observe(i.current),()=>{e.disconnect()}}),[i,a,r,s]),h(g,null,e&&h("div",{class:"eq-9e7199f"+(l?" eq-playing-9e7199f":"")},h(Y,null)),t&&h("button",{"aria-label":n&&n.title||"Unmute video",tabindex:"0",class:"autoplay-mask-button-9e7199f fill-content-overlay-fc551a7",onClick:o}))}var Y=function(e){let t=!1,n=null,o=()=>[1,2,3,4].map((e=>h("div",{class:"eq-col-9e7199f",key:e})));return(...e)=>(t||(n=o.apply(self,e),t=!0,o=null),n)}(),B=C((function(e,n){let r="class",{autoplay:a=!1,component:i="video",controls:s=!1,loading:c,loop:f=!1,mediasession:d=!0,noaudio:m=!1,onPlayingState:p,onReadyState:b,poster:y,sources:g,src:C,style:P,[r]:A}=e,L=t(e,["autoplay","component","controls","loading","loop","mediasession","noaudio","onPlayingState","onReadyState","poster","sources","src","style",r].map(o));!function(){const{notify:e}=N();$((()=>{e&&e()}))}();const{playable:T}=R(),V=M(c),U="unload"!==V,[Y,B]=q(a),[H,W]=q(!1),[Z,G]=q(null),[K,Q]=q(!a),X=x(null),ee=x(null),te=S((()=>new u),[]),ne=x("loading"),oe=I(b),re=w(((e,t)=>{if(e!==ne.current){ne.current=e;const n=oe.current;n&&n(e,t)}}),[oe]),ae=I(p),le=w((e=>{W(e);const t=ae.current;t&&t(e)}),[ae]);O((()=>{U||le(!1)}),[U,le]);const ie=w((()=>te.promise.then((()=>function(e,t){const n=(o=()=>e.play(!1),new Promise((e=>{e(o())})));var o;return n.catch((e=>{v(0,e)})),n}(ee.current)))),[te]),se=w((()=>{te.promise.then((()=>{var e;return null===(e=ee.current)||void 0===e?void 0:e.pause()}))}),[te]),ue=w((()=>te.promise.then((()=>ee.current.requestFullscreen()))),[te]),ce=w((()=>{B(!1),Q(!0)}),[]);return O((()=>{var e;const t=null===(e=ee.current)||void 0===e?void 0:e.readyState;null!=t&&re(t>0?"complete":"loading")}),[re]),O((()=>(d&&H&&Z&&function(e,t,n,o){const{navigator:r}=e;"mediaSession"in r&&e.MediaMetadata&&(r.mediaSession.metadata=new e.MediaMetadata(F),r.mediaSession.metadata=new e.MediaMetadata(t),r.mediaSession.setActionHandler("play",n),r.mediaSession.setActionHandler("pause",o))}(window,Z,ie,se),()=>{})),[d,H,Z,ie,se]),j((()=>{T||se()}),[T,se]),k(n,(()=>({get readyState(){return ne.current},play:ie,pause:se,requestFullscreen:ue,get currentTime(){return ee.current?ee.current.currentTime:0},get duration(){return ee.current?ee.current.duration:NaN},get autoplay(){return a},get controls(){return s},get loop(){return f},userInteracted:ce,mute:()=>B(!0),unmute:()=>{K&&B(!1)}})),[ie,se,ue,ce,K,a,s,f]),h(E,{contentRef:X,class:A,style:P,size:!0,layout:!0,paint:!0},U&&h(i,l(l({},L),{},{ref:ee,loading:V,muted:Y,loop:f,controls:s&&(!a||K),onCanPlay:()=>{te.resolve(),re("complete")},onLoadedMetadata:()=>{d&&te.promise.then((()=>{var e,t;G((e=ee.current,l({"title":(t=L).title||t["aria-label"]||document.title,"artist":t.artist||"","album":t.album||"","artwork":[{"src":t.artwork||t.poster||_(document)||z(document)||D(document)||""}]},e&&e.getMetadata?e.getMetadata():Object.create(null))))})),re("complete")},onPlaying:()=>le(!0),onPause:()=>le(!1),onEnded:()=>le(!1),onError:e=>{re("error",e),te.reject(e)},class:"fill-stretch-fc551a7",src:C,poster:y}),g),a&&!K&&h(J,{metadata:Z,playing:H,displayIcon:!m&&Y,wrapperRef:X,play:ie,pause:se,displayOverlay:s,onOverlayClick:ce}))}));B.displayName="VideoWrapper";var H=class extends e{};H.Component=B,H.loadable=!0,H.layoutSizeDefined=!0,H.staticProps,H.props={"album":{attr:"album"},"alt":{attr:"alt"},"artist":{attr:"artist"},"artwork":{attr:"artwork"},"attribution":{attr:"attribution"},"autoplay":{attr:"autoplay",type:"boolean"},"controls":{attr:"controls",type:"boolean"},"controlslist":{attr:"controlslist"},"crossorigin":{attr:"crossorigin"},"disableremoteplayback":{attr:"disableremoteplayback"},"loop":{attr:"loop",type:"boolean"},"noaudio":{attr:"noaudio",type:"boolean"},"poster":{attr:"poster"},"sources":{selector:"source",single:!1,clone:!0},"src":{attr:"src"},"title":{attr:"title"},"dock":{attr:"dock",media:!0},"rotate-to-fullscreen":{attr:"rotate-to-fullscreen",type:"boolean",media:!0}},H.shadowCss='.fill-stretch-fc551a7{width:100%;height:100%;position:relative}.fill-content-overlay-fc551a7{top:0;left:0;right:0;bottom:0;position:absolute}.autoplay-mask-button-9e7199f{width:100%;border:none;display:block;-webkit-appearance:none;appearance:none;background:transparent}.eq-9e7199f{right:7px;width:20px;bottom:7px;height:12px;display:-ms-flexbox;display:flex;opacity:0.8;z-index:1;overflow:hidden;position:absolute;-ms-flex-align:end;align-items:flex-end;pointer-events:none!important}.eq-playing-9e7199f>div:after,.eq-playing-9e7199f>div:before{animation-play-state:running}.eq-col-9e7199f{-ms-flex:1;flex:1;height:100%;position:relative;margin-right:1px}.eq-col-9e7199f:after,.eq-col-9e7199f:before{width:100%;height:100%;content:"";position:absolute;animation:keyframes-eq-animation-9e7199f 0s linear infinite alternate;will-change:transform;background-color:#fafafa;animation-play-state:paused}.eq-col-9e7199f:nth-child(4):before{animation-duration:0.4s}.eq-col-9e7199f:nth-child(4):after{animation-duration:0.25s}.eq-col-9e7199f:nth-child(3):before{animation-duration:0.3s}.eq-col-9e7199f:nth-child(3):after{animation-duration:0.35s}.eq-col-9e7199f:nth-child(2):before{animation-duration:0.5s}.eq-col-9e7199f:nth-child(2):after{animation-duration:0.4s}.eq-col-9e7199f:first-child:before{animation-duration:0.3s}.eq-col-9e7199f:first-child:after{animation-duration:0.45s}@keyframes keyframes-eq-animation-9e7199f{0%{transform:translateY(100%)}to{transform:translateY(0)}}',H.usesShadowDom=!0;import{createElement as W}from"../bento.mjs";import{Slot as Z,createSlot as G}from"../bento.mjs";import{createElement as K}from"../bento.mjs";import{useCallback as Q,useImperativeHandle as X,useLayoutEffect as ee,useMemo as te,useRef as ne}from"../bento.mjs";import{forwardRef as oe}from"../bento.mjs";var re=["loading","unloadOnPause","sandbox","muted","controls","origin","onCanPlay","onMessage","playerStateRef","makeMethodMessage","makeFullscreenMessage","onIframeLoad"],ae=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"].join(" ");function le(e,t,n){e&&e.contentWindow&&t.then((()=>{e.contentWindow.postMessage(n(),"*")}))}var ie=oe((function(e,n){let{loading:o,unloadOnPause:r=!1,sandbox:a=ae,muted:i=!1,controls:s=!1,origin:c,onCanPlay:f,onMessage:d,playerStateRef:m,makeMethodMessage:p,makeFullscreenMessage:b,onIframeLoad:y}=e,v=t(e,re);const g=ne(null),h=te((()=>new u),[]),w=ne(p),j=Q((e=>{le(null==g?void 0:g.current,h.promise,(()=>w.current(e)))}),[h.promise]),k=ne(b),O=Q((()=>le(null==g?void 0:g.current,h.promise,k.current)),[h.promise]);X(n,(()=>({get currentTime(){var e,t;return null!==(e=null==m||null===(t=m.current)||void 0===t?void 0:t.currentTime)&&void 0!==e?e:NaN},get duration(){var e,t;return null!==(e=null==m||null===(t=m.current)||void 0===t?void 0:t.duration)&&void 0!==e?e:NaN},requestFullscreen:()=>{if(!k.current)return h.promise.then((()=>{g.current.requestFullscreen()}));O()},play:()=>j("play"),pause:()=>{if(r){const e=g.current;e&&(e.src=e.src)}else j("pause")}})),[m,j,O,h.promise,r]);const S=function(e){const t=ne(null);return t.current=e,t}(d);return ee((()=>{if(!g.current)return;function e(e){S.current&&(c&&!c.test(e.origin)||e.source!=g.current.contentWindow||S.current({currentTarget:g.current,target:g.current,data:e.data}))}const{defaultView:t}=g.current.ownerDocument;return t.addEventListener("message",e),()=>t.removeEventListener("message",e)}),[c,S]),ee((()=>{j(i?"mute":"unmute")}),[i,j]),ee((()=>{j(s?"showControls":"hideControls")}),[s,j]),K("iframe",l(l({},v),{},{ref:g,allowfullscreen:!0,frameborder:"0",sandbox:a,loading:o,onCanPlay:()=>{f&&h.promise.then(f),h.resolve()},onLoad:e=>{null==y||y(e)}}))}));ie.displayName="VideoIframeInternal";var se=oe((function(e,t){return K(B,l(l({ref:t},e),{},{component:ie}))}));se.displayName="VideoIframe";import{createElement as ue}from"../bento.mjs";import{useRef as ce}from"../bento.mjs";import{forwardRef as fe}from"../bento.mjs";new Set(["c","v","a","ad"]);var de=["autoplay","loop","videoid","liveChannelid","onLoad","params","credentials"],me={"-1":"unstarted",0:"ended",1:"playing",2:"pause",3:"buffering",5:"video_cued"},pe={"play":"playVideo","pause":"pauseVideo","mute":"mute","unmute":"unMute"},be={bubbles:!1,cancelable:!1};function ye(e,t){!function(e,t,n,o){e.ownerDocument;const r=e.ownerDocument.createEvent("Event");r.data={};const{bubbles:a,cancelable:l}=o||L;r.initEvent(t,a,l),e.dispatchEvent(r)}(e,t,0,be)}function ve(e){return JSON.stringify({"event":"command","func":pe[e]})}var ge=fe((function(e,n){let{autoplay:o,loop:r,videoid:a,liveChannelid:i,onLoad:s,params:u={},credentials:f}=e,d=t(e,de);if(a&&i||!a&&!i)throw new Error("Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube>");let p=function(e,t,n){let o="";"omit"===e&&(o="-nocookie");const r=`https://www.youtube${o}.com/embed/`;let a="";return a=t?`${encodeURIComponent(t)}?`:`live_stream?channel=${encodeURIComponent(n||"")}&`,`${r}${a}enablejsapi=1&amp=1`}(f,a,i);"playsinline"in u||(u.playsinline="1"),"autoplay"in u&&(delete u.autoplay,o=!0),o&&("iv_load_policy"in u||(u.iv_load_policy="3"),u.playsinline="1"),"loop"in u&&(r=!0,delete u.loop),r&&("playlist"in u?u.loop="1":"loop"in u&&delete u.loop),p=function(e,t){return function(e,t,n){if(!t)return e;const o=e.split("#",2),r=o[0].split("?",2);let a=r[0]+(r[1]?`?${r[1]}&${t}`:`?${t}`);return a+=o[1]?`#${o[1]}`:"",a}(e,function(e){const t=[];for(const a in e){let l=e[a];if(null!=l){l=c(r=l)?r:[r];for(let e=0;e<l.length;e++)t.push((n=a,o=l[e],`${encodeURIComponent(n)}=${encodeURIComponent(o)}`))}}var n,o,r;return t.join("&")}(t))}(p,u);const b=ce();return b.current||(b.current={"currentTime":0,"duration":NaN}),ue(se,l(l({ref:n},d),{},{autoplay:o,src:p,onMessage:({currentTarget:e,data:t})=>{const n=(a=o=t,"[object Object]"===m.call(a)?o:A(o));var o,a;if(!n)return;const{"event":l,"info":i}=n;if("initialDelivery"==l)return ye(e,"loadedmetadata"),void(null==s||s());if(!i)return;const u=b.current;for(const e in u)null!=i[e]&&(u[e]=i[e]);const c=i.playerState;"infoDelivery"==l&&0==c&&r&&e.contentWindow.postMessage(JSON.stringify({"event":"command","func":"playVideo"}),"*"),"infoDelivery"==l&&null!=c&&ye(e,me[c.toString()]),"infoDelivery"==l&&i.muted&&ye(e,i.muted?"muted":"unmuted")},makeMethodMessage:ve,onIframeLoad:e=>{const{currentTarget:t}=e;ye(t,"canplay"),t.contentWindow.postMessage(JSON.stringify({"event":"listening"}),"*")},sandbox:"allow-scripts allow-same-origin allow-presentation",playerStateRef:b}))}));ge.displayName="BentoYoutube";var he=class extends H{};he.Component=ge,he.loadable=!0,he.props={"autoplay":{attr:"autoplay",type:"boolean"},"loop":{attr:"loop",type:"boolean"},"controls":{attr:"controls",type:"boolean"},"videoid":{attr:"data-videoid"},"liveChannelid":{attr:"data-live-channelid"},"dock":{attr:"dock",media:!0},"credentials":{attr:"credentials"},"loading":{attr:"data-loading"},"params":function(e){const t=t=>(null==t?void 0:t.startsWith(e))&&t!==e;return{"attrMatches":t,"parseAttrs":n=>{let o;const r=n.attributes;for(let n=0;n<r.length;n++){const l=r[n];t(l.name)&&(o||(o={}),o[(a=l.name.slice(e.length),a.replace(/-([a-z])/g,f))]=l.value)}var a;return o}}}("data-param-")},he.usesShadowDom=!0;import{defineBentoElement as we}from"../bento.mjs";we("bento-youtube",he,void 0);
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=bento-youtube-1.0.mjs.map