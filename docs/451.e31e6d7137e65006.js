"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[451],{451:(k,d,l)=>{l.r(d),l.d(d,{SettingsPageModule:()=>A});var g=l(4666),a=l(2508),s=l(1005),c=l(8139),p=l(6476),m=l(2767),u=l(2340),e=l(2135),f=l(6301);function h(o,r){if(1&o&&(e._UZ(0,"div",35),e.ALo(1,"translate")),2&o){const n=e.oxw().$implicit;e.Q6J("innerHtml",e.lcZ(1,1,n.message),e.oJD)}}function x(o,r){if(1&o&&(e.ynx(0),e.YNc(1,h,2,3,"div",34),e.BQk()),2&o){const n=r.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.formGroup.get("email").hasError(n.type)&&(i.formGroup.get("email").dirty||i.formGroup.get("email").touched))}}function w(o,r){if(1&o&&(e._UZ(0,"div",35),e.ALo(1,"translate")),2&o){const n=e.oxw().$implicit;e.Q6J("innerHtml",e.lcZ(1,1,n.message),e.oJD)}}function Z(o,r){if(1&o&&(e.ynx(0),e.YNc(1,w,2,3,"div",34),e.BQk()),2&o){const n=r.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.formGroup.get("pw.password").hasError(n.type)&&(i.formGroup.get("pw.password").dirty||i.formGroup.get("pw.password").touched))}}function G(o,r){if(1&o&&(e._UZ(0,"div",35),e.ALo(1,"translate")),2&o){const n=e.oxw().$implicit;e.Q6J("innerHtml",e.lcZ(1,1,n.message),e.oJD)}}function y(o,r){if(1&o&&(e.ynx(0),e.YNc(1,G,2,3,"div",34),e.BQk()),2&o){const n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.formGroup.get("pw").hasError("must_match")&&(n.formGroup.get("pw.confirm_password").dirty||n.formGroup.get("pw.confirm_password").touched))}}function v(o,r){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-item"),e._UZ(2,"ion-label",9),e.ALo(3,"translate"),e.TgZ(4,"ion-input",36,37),e.NdJ("keydown.enter",function(){e.CHM(n);const t=e.oxw(2);return t.editing_password=!t.formGroup.get("pw").valid,e.KtG(t.showing_password=!t.formGroup.get("pw").valid&&t.showing_password)})("keydown.tab",function(){e.CHM(n);const t=e.oxw(2);return t.editing_password=!t.formGroup.get("pw").valid,e.KtG(t.showing_password=!t.formGroup.get("pw").valid&&t.showing_password)})("ionChange",function(){e.CHM(n);const t=e.oxw(2);return e.KtG(t.set_password())}),e.qZA()(),e.TgZ(6,"div",13),e.YNc(7,y,2,1,"ng-container",14),e.qZA(),e.BQk()}if(2&o){const n=e.oxw(2);e.xp6(2),e.Q6J("innerHtml",e.lcZ(3,7,"retype-password"),e.oJD),e.xp6(2),e.Akn(n.editing_password?"pointer-events:;":"pointer-events:none;font-size:smaller;"),e.Q6J("disabled",!n.editing_password)("type",n.showing_password?"text":"password")("maxlength",n.E.max_len.name),e.xp6(3),e.Q6J("ngForOf",n.G.S.validation_messages.passwords_match)}}function S(o,r){if(1&o&&e._UZ(0,"ion-select-option",38),2&o){const n=r.$implicit,i=e.oxw(2);e.Q6J("value",n)("innerHtml",i.G.S.language_names[n],e.oJD)}}function J(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"ion-content")(1,"form",6),e._UZ(2,"ion-item",7),e.ALo(3,"translate"),e.TgZ(4,"ion-item"),e._UZ(5,"small",2),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"ion-grid",8)(8,"ion-row",8)(9,"ion-col",8)(10,"ion-item"),e._UZ(11,"ion-label",9),e.ALo(12,"translate"),e.TgZ(13,"ion-input",10),e.NdJ("keydown.enter",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.editing_email=!t.formGroup.get("email").valid)})("keydown.tab",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.editing_email=!t.formGroup.get("email").valid)})("ionChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.set_email())}),e.ALo(14,"translate"),e.qZA()()(),e.TgZ(15,"ion-button",11),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.editing_email=!t.editing_email)}),e._UZ(16,"ion-icon",12)(17,"span",2),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"div",13),e.YNc(20,x,2,1,"ng-container",14),e.qZA(),e.TgZ(21,"div",15)(22,"ion-grid",8)(23,"ion-row",8)(24,"ion-col",8)(25,"ion-item",16),e._UZ(26,"ion-label",9),e.ALo(27,"translate"),e.TgZ(28,"ion-input",17),e.NdJ("ionChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.set_password())}),e.qZA()()(),e.TgZ(29,"ion-buttons")(30,"ion-button",18),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.showing_password=!t.showing_password)}),e._UZ(31,"ion-icon",12),e.qZA(),e.TgZ(32,"ion-button",19),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.editing_password=!t.editing_password)}),e._UZ(33,"ion-icon",12),e.qZA()()()(),e.TgZ(34,"div",13),e.YNc(35,Z,2,1,"ng-container",14),e.qZA(),e.YNc(36,v,8,9,"ng-container",5),e.qZA()(),e.TgZ(37,"ion-item",20),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.advanced_expanded=!t.advanced_expanded)}),e._UZ(38,"ion-icon",21),e.TgZ(39,"ion-label"),e._UZ(40,"small",2),e.ALo(41,"translate"),e.qZA()(),e._UZ(42,"app-select-server",22,23),e.TgZ(44,"form",6),e._UZ(45,"ion-item",7),e.ALo(46,"translate"),e.TgZ(47,"ion-item")(48,"ion-label",24),e._UZ(49,"ion-icon",25),e._uU(50,"\xa0 "),e._UZ(51,"span",2),e.ALo(52,"translate"),e.qZA(),e.TgZ(53,"ion-select",26,27),e.NdJ("ionChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.set_language())}),e.ALo(55,"translate"),e.ALo(56,"translate"),e.YNc(57,S,1,2,"ion-select-option",28),e.qZA()(),e._UZ(58,"ion-item",7),e.ALo(59,"translate"),e.TgZ(60,"ion-item")(61,"ion-label",29),e._UZ(62,"span",2),e.ALo(63,"translate"),e.qZA(),e.TgZ(64,"ion-range",30),e.NdJ("ionChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.set_default_wap())}),e.TgZ(65,"ion-label",31),e._UZ(66,"span",32),e.qZA()()()(),e._UZ(67,"ion-item",7),e.ALo(68,"translate"),e.TgZ(69,"ion-item")(70,"ion-checkbox",33),e.NdJ("ngModelChange",function(t){e.CHM(n);const _=e.oxw();return e.KtG(_.notify_of.new_option=t)})("ngModelChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.notify_changed())}),e.qZA(),e._UZ(71,"ion-label",2),e.ALo(72,"translate"),e.qZA(),e.TgZ(73,"ion-item")(74,"ion-checkbox",33),e.NdJ("ngModelChange",function(t){e.CHM(n);const _=e.oxw();return e.KtG(_.notify_of.delegation_accepted=t)})("ngModelChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.notify_changed())}),e.qZA(),e._UZ(75,"ion-label",2),e.ALo(76,"translate"),e.qZA(),e.TgZ(77,"ion-item")(78,"ion-checkbox",33),e.NdJ("ngModelChange",function(t){e.CHM(n);const _=e.oxw();return e.KtG(_.notify_of.delegation_declined=t)})("ngModelChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.notify_changed())}),e.qZA(),e._UZ(79,"ion-label",2),e.ALo(80,"translate"),e.qZA(),e.TgZ(81,"ion-item")(82,"ion-checkbox",33),e.NdJ("ngModelChange",function(t){e.CHM(n);const _=e.oxw();return e.KtG(_.notify_of.poll_closing_soon=t)})("ngModelChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.notify_changed())}),e.qZA(),e._UZ(83,"ion-label",2),e.ALo(84,"translate"),e.qZA(),e.TgZ(85,"ion-item")(86,"ion-checkbox",33),e.NdJ("ngModelChange",function(t){e.CHM(n);const _=e.oxw();return e.KtG(_.notify_of.poll_closed=t)})("ngModelChange",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.notify_changed())}),e.qZA(),e._UZ(87,"ion-label",2),e.ALo(88,"translate"),e.qZA()()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.formGroup),e.xp6(1),e.Q6J("innerHtml",e.lcZ(3,52,"settings.data-storage"),e.oJD),e.xp6(3),e.Q6J("innerHtml",e.lcZ(6,54,"settings.data-storage-msg"),e.oJD),e.xp6(6),e.Q6J("innerHtml",e.lcZ(12,56,"email"),e.oJD),e.xp6(2),e.Akn(n.editing_email?"pointer-events:;":"pointer-events:none;font-size:smaller;"),e.Q6J("placeholder",e.lcZ(14,58,"settings.email-placeholder"))("maxlength",n.E.max_len.name)("readonly",!n.editing_email),e.xp6(2),e.Q6J("disabled",n.editing_email&&!n.formGroup.get("email").valid),e.xp6(1),e.Q6J("name",n.editing_email?"checkmark-outline":"pencil-outline"),e.xp6(1),e.Q6J("innerHtml",e.lcZ(18,60,n.editing_email?"OK":"settings.edit"),e.oJD),e.xp6(3),e.Q6J("ngForOf",n.G.S.validation_messages.email),e.xp6(6),e.Q6J("innerHtml",e.lcZ(27,62,"password"),e.oJD),e.xp6(2),e.Akn(n.editing_password?"pointer-events:;":"pointer-events:none;font-size:smaller;"),e.Q6J("maxlength",n.E.max_len.name)("readonly",!n.editing_password)("type",n.showing_password?"text":"password"),e.xp6(3),e.Q6J("name",n.showing_password?"eye-off-outline":"eye-outline"),e.xp6(1),e.Q6J("disabled",n.editing_password&&!n.formGroup.get("pw").valid),e.xp6(1),e.Q6J("name",n.editing_password?"checkmark-outline":"pencil-outline"),e.xp6(2),e.Q6J("ngForOf",n.G.S.validation_messages.password),e.xp6(1),e.Q6J("ngIf",n.editing_password),e.xp6(1),e.Udp("display",n.E.data_service.allow_other_servers?"block":"none"),e.xp6(1),e.Q6J("name",n.advanced_expanded?"caret-down-outline":"caret-forward-outline"),e.xp6(2),e.Q6J("innerHtml","\xa0\xa0\xa0"+e.lcZ(41,64,"draftpoll.advanced-settings"),e.oJD),e.xp6(2),e.Udp("display",n.advanced_expanded&&n.E.data_service.allow_other_servers?"block":"none"),e.Q6J("page","settings")("page_object",n),e.xp6(2),e.Q6J("formGroup",n.formGroup),e.xp6(1),e.Q6J("innerHtml",e.lcZ(46,66,"settings.appearance"),e.oJD),e.xp6(6),e.Q6J("innerHtml",e.lcZ(52,68,"language"),e.oJD),e.xp6(2),e.Q6J("cancelText",e.lcZ(55,70,"cancel"))("okText",e.lcZ(56,72,"OK")),e.xp6(4),e.Q6J("ngForOf",n.translate.langs),e.xp6(1),e.Q6J("innerHtml",e.lcZ(59,74,"settings.behaviour"),e.oJD),e.xp6(4),e.Q6J("innerHtml",e.lcZ(63,76,"settings.default-wap"),e.oJD),e.xp6(4),e.Q6J("innerText",n.formGroup.get("default_wap").value),e.xp6(1),e.Q6J("innerHtml",e.lcZ(68,78,"settings.notifications"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.new_option),e.xp6(1),e.Q6J("innerHtml",e.lcZ(72,80,"notify_of.new_option"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.delegation_accepted),e.xp6(1),e.Q6J("innerHtml",e.lcZ(76,82,"notify_of.delegation_accepted"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.delegation_declined),e.xp6(1),e.Q6J("innerHtml",e.lcZ(80,84,"notify_of.delegation_declined"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.poll_closing_soon),e.xp6(1),e.Q6J("innerHtml",e.lcZ(84,86,"notify_of.poll_closing_soon"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.poll_closed),e.xp6(1),e.Q6J("innerHtml",e.lcZ(88,88,"notify_of.poll_closed"),e.oJD)}}const b=[{path:"",component:(()=>{class o{constructor(n,i,t){this.formBuilder=n,this.translate=i,this.G=t,this.E=u.N,this.ready=!1,this.G.L.entry("SettingsPage.constructor")}ngOnInit(){this.G.L.entry("SettingsPage.ngOnInit"),this.formGroup=this.formBuilder.group({email:new a.p4("",a.kI.compose([a.kI.required,a.kI.email])),pw:this.formBuilder.group({password:new a.p4("",a.kI.compose([a.kI.required,a.kI.minLength(8),a.kI.pattern(this.G.S.password_regexp)])),confirm_password:new a.p4("",a.kI.required)},{validators:[this.G.S.passwords_match]}),language:new a.p4("",a.kI.required),theme:new a.p4("",a.kI.required),default_wap:new a.p4("")})}ionViewWillEnter(){this.G.L.entry("SettingsPage.ionViewWillEnter"),this.G.D.page=this,this.editing_email=!1,this.editing_password=!1,this.showing_password=!1,this.advanced_expanded=!1,this.notify_of={}}ionViewDidEnter(){this.G.L.entry("SettingsPage.ionViewDidEnter"),this.G.D.ready&&!this.ready&&this.onDataReady()}onDataReady(){this.G.L.entry("SettingsPage.onDataReady"),this.ready=!0}onSelectServerReady(n){this.select_server=n,this.fill_form()}ionViewDidLeave(){this.G.L.entry("SettingsPage.ionViewDidLeave"),this.G.D.save_state(),this.G.L.exit("SettingsPage.ionViewDidLeave")}onDataChange(){this.G.L.entry("SettingsPage.onDataChange"),this.fill_form()}set_email(){let n=this.formGroup.get("email");n.valid&&(this.G.S.email=n.value)}set_password(){let n=this.formGroup.get("pw");n.valid&&(this.G.S.password=n.get("password").value)}set_language(){let n=this.formGroup.get("language");n.valid&&(this.G.S.language=n.value)}set_theme(){let n=this.formGroup.get("theme");n.valid&&(this.G.S.theme=n.value)}set_default_wap(){let n=this.formGroup.get("default_wap");this.G.S.default_wap=n.value}set_db(n){this.G.S.db=n}set_db_from_pid(n){this.G.S.db_from_pid=n}set_db_custom_server_url(n){this.G.S.db_custom_server_url=n}set_db_custom_password(n){this.G.S.db_custom_password=n}fill_form(){this.G.L.entry("SettingsPage.fill_form");const n=navigator.language.slice(0,2);this.formGroup.setValue({email:this.G.S.email||"",pw:{password:this.G.S.password||"",confirm_password:this.G.S.password||""},language:this.G.S.language||(this.translate.langs.includes(n)?n:"en"),theme:this.G.S.theme||"light",default_wap:this.G.S.default_wap||0}),this.select_server.selectServerFormGroup.setValue({db:this.G.S.db||"",db_from_pid:this.G.S.db_from_pid||"",db_custom_server_url:this.G.S.db_custom_server_url||"",db_custom_password:this.G.S.db_custom_password||""});for(const i of this.G.S.notification_classes)this.notify_of[i]=this.G.S.get_notify_of(i)}notify_changed(){for(const[n,i]of Object.entries(this.notify_of))this.G.S.set_notify_of(n,i),this.G.L.trace("SettingsPage.notify_changed",n,i)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(a.QS),e.Y36(c.sK),e.Y36(f.U))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-settings"]],viewQuery:function(n,i){if(1&n&&(e.Gf(s.pK,5),e.Gf(m.K,5),e.Gf(s.t9,5)),2&n){let t;e.iGM(t=e.CRH())&&(i.input_retype_password=t.first),e.iGM(t=e.CRH())&&(i.select_server=t.first),e.iGM(t=e.CRH())&&(i.ionSelects=t)}},decls:9,vars:4,consts:[[2,"padding-right","11px"],["slot","start"],[3,"innerHtml"],["slot","end"],["src","./assets/topright_icon.png"],[4,"ngIf"],[3,"formGroup"],["color","primary",3,"innerHtml"],[1,"ion-no-padding"],["position","floating","color","primary",3,"innerHtml"],["formControlName","email","type","text","inputmode","email","required","","debounce","100",3,"placeholder","maxlength","readonly","keydown.enter","keydown.tab","ionChange"],["fill","clear","tabindex","-1",2,"padding-top","10px",3,"disabled","click"],[3,"name"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["formGroupName","pw"],["lines","none"],["formControlName","password","clearOnEdit","false","clearInput","true","required","","debounce","100",3,"maxlength","readonly","type","ionChange"],["tabindex","-1","fill","clear","color","primary",2,"padding-top","15px",3,"click"],["fill","clear","tabindex","-1","color","primary",2,"padding-top","10px",3,"disabled","click"],["color","light",3,"click"],["size","small","color","primary",3,"name"],[3,"page","page_object"],["select_server",""],["position","floating","color","primary"],["name","language-outline"],["formControlName","language",3,"cancelText","okText","ionChange"],["ionSelects",""],[3,"value","innerHtml",4,"ngFor","ngForOf"],["color","primary","position","stacked",2,"min-height","20px!important"],["formControlName","default_wap","color","vodleblue","mode","md","pin","true","min","0","max","100","step","1","snaps","true","ticks","false",2,"--bar-height","7px","--knob-size","35px","padding-top","8px","padding-left","0px",3,"ionChange"],["slot","start",2,"width","25px!important"],[2,"font-size","16px!important",3,"innerText"],["slot","start",3,"ngModel","ngModelChange"],["class","error-message",3,"innerHtml",4,"ngIf"],[1,"error-message",3,"innerHtml"],["formControlName","confirm_password","clearOnEdit","false","clearInput","true","required","","debounce","100",3,"disabled","type","maxlength","keydown.enter","keydown.tab","ionChange"],["input_retype_password",""],[3,"value","innerHtml"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e._UZ(4,"ion-title",2),e.ALo(5,"translate"),e.TgZ(6,"ion-thumbnail",3),e._UZ(7,"ion-img",4),e.qZA()()(),e.YNc(8,J,89,90,"ion-content",5)),2&n&&(e.xp6(4),e.Q6J("innerHtml",e.lcZ(5,2,"settings.-page-title"),e.oJD),e.xp6(4),e.Q6J("ngIf",i.ready))},dependencies:[g.sg,g.O5,a._Y,a.JJ,a.JL,a.Q7,a.nD,a.On,s.YG,s.Sm,s.nz,s.wI,s.W2,s.jY,s.Gu,s.gu,s.Xz,s.pK,s.Ie,s.Q$,s.fG,s.I_,s.Nd,s.t9,s.n0,s.Bs,s.sr,s.wd,s.w,s.QI,s.j9,a.sg,a.u,a.x0,m.K,c.X$],styles:['@charset "UTF-8";']}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(b),p.Bz]}),o})();var T=l(4496);let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,a.u5,s.Pc,a.UX,C,T.m,c.aw.forChild()]}),o})()}}]);
//# sourceMappingURL=451.e31e6d7137e65006.js.map