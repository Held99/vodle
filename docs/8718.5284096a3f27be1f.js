"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8718],{9273:(T,u,l)=>{l.d(u,{a:()=>f,b:()=>i,p:()=>p});const p=(d,...h)=>console.warn(`[Ionic Warning]: ${d}`,...h),i=(d,...h)=>console.error(`[Ionic Error]: ${d}`,...h),f=(d,...h)=>console.error(`<${d.tagName.toLowerCase()}> must be used inside ${h.join(" or ")}.`)},2666:(T,u,l)=>{l.r(u),l.d(u,{ion_reorder:()=>b,ion_reorder_group:()=>I});var p=l(1670),i=l(9479),f=l(2312),d=l(537),h=l(7288),g=l(634);const b=class{constructor(t){(0,i.r)(this,t)}onClick(t){const e=this.el.closest("ion-reorder-group");t.preventDefault(),(!e||!e.disabled)&&t.stopImmediatePropagation()}render(){const t=(0,d.b)(this);return(0,i.h)(i.H,{class:t},(0,i.h)("slot",null,(0,i.h)("ion-icon",{icon:"ios"===t?f.j:f.k,lazy:!1,class:"reorder-icon",part:"icon"})))}get el(){return(0,i.i)(this)}};b.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};const I=class{constructor(t){(0,i.r)(this,t),this.ionItemReorder=(0,i.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var t=this;return(0,p.Z)(function*(){const e=(0,h.f)(t.el);e&&(t.scrollEl=yield(0,h.g)(e)),t.gesture=(yield Promise.resolve().then(l.bind(l,2172))).createGesture({el:t.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:s=>t.canStart(s),onStart:s=>t.onStart(s),onMove:s=>t.onMove(s),onEnd:()=>t.onEnd()}),t.disabledChanged()})()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const s=t.event.target.closest("ion-reorder");if(!s)return!1;const r=B(s,this.el);return!!r&&(t.data=r,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const r=this.el,o=r.children;if(!o||0===o.length)return;let c=0;for(let a=0;a<o.length;a++){const m=o[a];c+=m.offsetHeight,s.push(c),m.$ionIndex=a}const n=r.getBoundingClientRect();if(this.containerTop=n.top,this.containerBottom=n.bottom,this.scrollEl){const a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+_,this.scrollElBottom=a.bottom-_}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=E(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(y),(0,g.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),r=this.containerTop-s,c=Math.max(r,Math.min(t.currentY,this.containerBottom-s)),n=s+c-t.startY,m=this.itemIndexForTop(c-r);if(m!==this.lastToIndex){const D=E(e);this.lastToIndex=m,(0,g.b)(),this.reorderMove(D,m)}e.style.transform=`translateY(${n}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=E(t);e===s?this.completeSync():this.ionItemReorder.emit({from:s,to:e,complete:this.completeSync.bind(this)}),(0,g.h)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,r=s.length,o=this.lastToIndex,c=E(e);o===c||void 0!==t&&!0!==t||this.el.insertBefore(e,c<o?s[o+1]:s[o]),Array.isArray(t)&&(t=P(t,c,o));for(let n=0;n<r;n++)s[n].style.transform="";e.style.transition="",e.classList.remove(y),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;for(let s=0;s<e.length;s++)if(e[s]>t)return s;return e.length-1}reorderMove(t,e){const s=this.selectedItemHeight,r=this.el.children;for(let o=0;o<r.length;o++){let n="";o>t&&o<=e?n=`translateY(${-s}px)`:o<t&&o>=e&&(n=`translateY(${s}px)`),r[o].style.transform=n}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-x:t>this.scrollElBottom&&(e=x),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=(0,d.b)(this);return(0,i.h)(i.H,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return(0,i.i)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},E=t=>t.$ionIndex,B=(t,e)=>{let s;for(;t;){if(s=t.parentElement,s===e)return t;t=s}},_=60,x=10,y="reorder-selected",P=(t,e,s)=>{const r=t[e];return t.splice(e,1),t.splice(s,0,r),t.slice()};I.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);
//# sourceMappingURL=8718.5284096a3f27be1f.js.map