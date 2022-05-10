;
(self.AMP=self.AMP||[]).push({m:1,v:"2203281422000",n:"amp-nested-menu",ev:"0.1",l:!0,f:function(e,n){(()=>{var n,t="ArrowLeft",s="ArrowUp",i="ArrowDown",u="Home";function r(e){return e?Array.prototype.slice.call(e):[]}var{hasOwnProperty:o,toString:a}=Object.prototype;function m(e,n){return e.querySelector(function(e,n){return e.replace(/^|,/g,"$&:scope ")}(n))}function l(e,n,t){let s;for(s=e;s&&s!==t;s=s.parentElement)if(n(s))return s;return null}function p(e,n){return e.closest?e.closest(n):l(e,(e=>function(e,n){const t=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;return!!t&&t.call(e,n)}(e,n)))}function d(e){try{e.focus()}catch(e){}}var c=self.AMP_CONFIG||{},h=("string"==typeof c.thirdPartyFrameRegex?new RegExp(c.thirdPartyFrameRegex):c.thirdPartyFrameRegex,("string"==typeof c.cdnProxyRegex?new RegExp(c.cdnProxyRegex):c.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function f(e){if(!self.document||!self.document.head)return null;if(self.location&&h.test(self.location.origin))return null;const n=self.document.head.querySelector(`meta[name="${e}"]`);return n&&n.getAttribute("content")||null}c.thirdPartyUrl,c.thirdPartyFrameHost,c.cdnUrl||f("runtime-host"),c.errorReportingUrl,c.betaErrorReportingUrl,c.localDev,c.geoApiUrl||f("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var b=self.__AMP_LOG;function _(e){return function(e,n){throw new Error("failed to call initLogConstructor")}()}function A(e,n,t,s,i,u,r,o,a,m,l){return e}function g(e,n,t,s,i,u,r,o,a,m,l){return(b.user||(b.user=_()),void b.user.win?b.userForEmbed||(b.userForEmbed=_()):b.user).assert(e,n,t,s,i,u,r,o,a,m,l)}function v(e,n){const t=function(e){const n=P(e);return n.isSingleDoc()?n.win:n}(P(e));return E(t,n)?y(t,n):null}function P(e){return e.nodeType?(n=e,t=(n.ownerDocument||n).defaultView,function(e,n){return y(e=function(e){return e.__AMP_TOP||(e.__AMP_TOP=e)}(e),n)}(t,"ampdoc")).getAmpDoc(e):e;var n,t}function y(e,n){A(E(e,n));const t=function(e){let n=e.__AMP_SERVICES;return n||(n=e.__AMP_SERVICES={}),n}(e)[n];return t.obj||(A(t.ctor),A(t.context),t.obj=new t.ctor(t.context),A(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}function E(e,n){const t=e.__AMP_SERVICES&&e.__AMP_SERVICES[n];return!(!t||!t.ctor)}var w=e=>y(e,"timer"),R="amp-nested-menu",M="left",I="right",T=class extends e.BaseElement{static prerenderAllowed(){return!0}constructor(e){super(e),this.Ao=this.win.document,this.fc=null,this.XC=null,this.GC=e,this.kO=this.Nc.bind(this),this.JC=this.QC.bind(this)}buildCallback(){const{element:e}=this;var n;this.fc=(e=>v(e,"action"))(this.element),this.XC=e.getAttribute("side"),this.XC!=M&&this.XC!=I&&(this.XC="rtl"==((n=this.Ao).body.getAttribute("dir")||n.documentElement.getAttribute("dir")||"ltr")?M:I,e.setAttribute("side",this.XC)),this.registerAction("reset",this.reset.bind(this)),e.addEventListener("click",this.kO),e.addEventListener("keydown",this.JC)}layoutCallback(){return this.YC(),n||(n=Promise.resolve(void 0))}YC(){r(this.element.querySelectorAll("[amp-nested-submenu-open],[amp-nested-submenu-close]")).forEach((e=>{e.hasAttribute("tabindex")||e.setAttribute("tabindex",0),e.setAttribute("role","button"),e.hasAttribute("amp-nested-submenu-open")&&e.setAttribute("aria-expanded","false"),g(0==this.fc.hasAction(e,"tap"),"submenu open/close buttons should not have tap actions registered.")}))}isLayoutSupported(e){return"fill"==e}Nc(e){const n=e.target,t=p(e.target,"[amp-nested-submenu-open],[amp-nested-submenu-close]");t&&this.BC(n,t)&&(t.hasAttribute("amp-nested-submenu-open")?this.e$(t):this.n$(t))}BC(e,n){const t=!!l(e,(e=>"A"==e.tagName),n),s=this.fc.hasAction(e,"tap",n);return!t&&!s}e$(e){const n=m(e.parentElement,">[amp-nested-submenu]");g(n,`${R} requires each submenu open button to have a submenu as its sibling`),this.s$(n)}s$(e){if(e.hasAttribute("open"))return;const n=this.i$(e);n&&(n.setAttribute("child-open",""),e.setAttribute("open",""),this.GC=e,w(this.win).delay((()=>{m(e.parentElement,">[amp-nested-submenu-open]").setAttribute("aria-expanded","true");const n=r(e.querySelectorAll("[amp-nested-submenu-close]")).filter((n=>this.i$(n)==e))[0];g(n,`${R} requires each submenu to contain at least one submenu close button`),d(n)}),350))}n$(e){const n=p(e,"[amp-nested-submenu]");g(n,`${R}: submenu close buttons are only allowed inside submenus`),this.u$(n)}u$(e){if(!e.hasAttribute("open"))return;const n=this.i$(e);n&&(n.removeAttribute("child-open"),e.removeAttribute("open"),this.GC=n,w(this.win).delay((()=>{const n=m(e.parentElement,">[amp-nested-submenu-open]");n.setAttribute("aria-expanded","false"),d(n)}),350))}reset(){for(;this.element.hasAttribute("child-open");)this.u$(this.GC)}QC(e){if(!e.defaultPrevented)switch(e.key){case"Enter":case" ":return void this.Nc(e);case t:case"ArrowRight":this.r$(e);break;case s:case i:case u:case"End":this.o$(e)}}r$(e){let n=e.key==t;if(this.XC==M&&(n=!n),n)this.u$(this.GC);else{const n=e.target;n.hasAttribute("amp-nested-submenu-open")&&this.e$(n)}}o$(e){const n=e.target,t=l(n,(e=>"LI"==e.tagName),this.i$(n));if(!t)return;let r;if(e.key===s)r=t.previousElementSibling;else if(e.key===i)r=t.nextElementSibling;else if(e.key===u)r=t.parentElement.firstElementChild;else{if("End"!==e.key)return;r=t.parentElement.lastElementChild}if(!r)return;const o=r.querySelector("button,a[href],[tabindex]");o&&(e.preventDefault(),d(o))}i$(e){return p(e.parentElement,"amp-nested-menu,[amp-nested-submenu]")}};e.registerElement(R,T,"amp-nested-menu,amp-nested-menu [amp-nested-submenu]{position:absolute!important;top:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;transform:translateX(0)!important}amp-nested-menu.i-amphtml-layout-size-defined{overflow:visible!important}amp-nested-menu ol,amp-nested-menu ul{list-style-type:none;padding:0}amp-nested-menu [amp-nested-submenu-close],amp-nested-menu [amp-nested-submenu-open]{cursor:pointer}amp-nested-menu [amp-nested-submenu]{opacity:0!important;visibility:hidden!important;transition:transform 233ms,opacity 233ms,visibility 0s 233ms}amp-nested-menu,amp-nested-menu [amp-nested-submenu][open]{opacity:1!important;visibility:visible!important;transition:transform 233ms}amp-nested-menu [amp-nested-submenu][child-open],amp-nested-menu[child-open]{visibility:hidden!important;transition:transform 233ms,visibility 0s 233ms}amp-nested-menu[side=left] [amp-nested-submenu]{right:100%!important}amp-nested-menu[side=right] [amp-nested-submenu]{left:100%!important}amp-nested-menu[side=left] [amp-nested-submenu][child-open],amp-nested-menu[side=left][child-open]{transform:translateX(100%)!important}amp-nested-menu[side=right] [amp-nested-submenu][child-open],amp-nested-menu[side=right][child-open]{transform:translateX(-100%)!important}\n/*# sourceURL=/extensions/amp-nested-menu/0.1/amp-nested-menu.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-nested-menu-0.1.mjs.map