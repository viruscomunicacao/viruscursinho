(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{fyyp:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),a=u("pMnS"),o=u("hl2C"),i=u("Or+z"),s=u("00W3"),r=u("ZYCi"),b=u("Ip0R"),c=u("elpa"),m=u("LU68"),p=u("djb2"),d=u("gIcY"),g=u("62WG"),h=u("x4MA"),f=u("5/Mu"),v=function(){return function(){}}(),z=function(){function l(l,n){this.teamService=l,this.route=n,this.teamName=new t.m,this.alert={type:"",message:"",show:!1},this.team=new v,this.mediaType="teams",this.urlObjects="https://viruscursinho.com.br:3002/teams",this.showModalSelectFile=!1}return l.prototype.ngOnInit=function(){this.initForm(),this.getTeam()},l.prototype.initForm=function(){this.formEditTeam=new d.h({name:new d.f("",d.w.required),description:new d.f("",d.w.required),photo:new d.f(""),status:new d.f("",d.w.required)})},l.prototype.getTeam=function(){var l=this,n=this.route.snapshot.paramMap.get("id");this.teamService.getTeam(n).subscribe(function(n){void 0!==n?(l.team=n.team,l.teamName.emit(l.team.name),l.loadForm()):(l.alert.type="danger",l.alert.message="Houve algum erro ao salvar os dados!",l.alert.show=!0)})},l.prototype.loadForm=function(){this.formEditTeam.patchValue({name:this.team.name,description:this.team.description,status:this.team.status,photo:this.team.photo})},l.prototype.save=function(){var l=this;if(this.formEditTeam.valid){var n=this.route.snapshot.paramMap.get("id"),u=this.formEditTeam.value;u.status="true"===u.status,this.teamService.updateTeam(n,u).subscribe(function(n){void 0!==n?(l.alert.type="success",l.alert.message="Dados salvos com sucesso!",l.alert.show=!0):(l.alert.type="danger",l.alert.message="Houve algum erro ao salvar os dados!",l.alert.show=!0)})}},l.prototype.changeStatusModalSelectFile=function(){this.showModalSelectFile=!this.showModalSelectFile},l.prototype.setUrlObject=function(l){this.formEditTeam.patchValue({photo:l}),this.showModalSelectFile=!1},l}(),C=t.nb({encapsulation:0,styles:[[".clearrow-20[_ngcontent-%COMP%]{height:20px}.btn-group[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:7px}.thumbnail-custom[_ngcontent-%COMP%]{width:100%}"]],data:{}});function y(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,4,"div",[["role","alert"]],[[8,"className",0]],null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["data-dismiss","alert"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.alert.show=!1)&&t),t},null,null)),(l()(),t.pb(2,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["\xd7"])),(l()(),t.Gb(4,null,["",""]))],null,function(l,n){var u=n.component;l(n,0,0,t.rb(1,"alert alert-",u.alert.type,"")),l(n,4,0,u.alert.message)})}function x(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"app-media-selector",[],null,[[null,"urlObject"]],function(l,n,u){var t=!0;return"urlObject"===n&&(t=!1!==l.component.setUrlObject(u)&&t),t},c.b,c.a)),t.ob(3,114688,null,0,m.a,[p.a],{mediaType:[0,"mediaType"]},{urlObject:"urlObject"})],function(l,n){l(n,3,0,n.component.mediaType)},null)}function w(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["*"]))],null,null)}function k(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["*"]))],null,null)}function I(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["*"]))],null,null)}function T(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Editar equipe"])),(l()(),t.pb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Preencha todos os campos abaixo."])),(l()(),t.pb(4,0,null,null,0,"div",[["class","clearrow-20"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,y)),t.ob(6,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(7,0,null,null,74,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,a=l.component;return"submit"===n&&(e=!1!==t.zb(l,9).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.zb(l,9).onReset()&&e),"ngSubmit"===n&&(e=!1!==a.save()&&e),e},null,null)),t.ob(8,16384,null,0,d.z,[],null,null),t.ob(9,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Db(2048,null,d.c,null,[d.i]),t.ob(11,16384,null,0,d.p,[[4,d.c]],null,null),(l()(),t.gb(16777216,null,null,1,null,x)),t.ob(13,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(14,0,null,null,67,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,0,"img",[["class","thumbnail thumbnail-custom"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(17,0,null,null,43,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,42,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,11,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Nome "])),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(24,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(25,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.zb(l,26)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,26).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,26)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,26)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(26,16384,null,0,d.d,[t.D,t.k,[2,d.a]],null,null),t.Db(1024,null,d.m,function(l){return[l]},[d.d]),t.ob(28,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.m],[2,d.B]],{name:[0,"name"]},null),t.Db(2048,null,d.n,null,[d.g]),t.ob(30,16384,null,0,d.o,[[4,d.n]],null,null),(l()(),t.pb(31,0,null,null,19,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,18,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Status "])),(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(36,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(37,0,null,null,13,"select",[["class","form-control"],["formControlName","status"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.zb(l,38).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,38).onTouched()&&e),e},null,null)),t.ob(38,16384,null,0,d.v,[t.D,t.k],null,null),t.Db(1024,null,d.m,function(l){return[l]},[d.v]),t.ob(40,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.m],[2,d.B]],{name:[0,"name"]},null),t.Db(2048,null,d.n,null,[d.g]),t.ob(42,16384,null,0,d.o,[[4,d.n]],null,null),(l()(),t.pb(43,0,null,null,3,"option",[["value","true"]],null,null,null,null,null)),t.ob(44,147456,null,0,d.s,[t.k,t.D,[2,d.v]],{value:[0,"value"]},null),t.ob(45,147456,null,0,d.C,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Gb(-1,null,["Ativo"])),(l()(),t.pb(47,0,null,null,3,"option",[["value","false"]],null,null,null,null,null)),t.ob(48,147456,null,0,d.s,[t.k,t.D,[2,d.v]],{value:[0,"value"]},null),t.ob(49,147456,null,0,d.C,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Gb(-1,null,["Inativo"])),(l()(),t.pb(51,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Imagem"])),(l()(),t.pb(55,0,null,null,5,"input",[["class","form-control"],["formControlName","photo"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,a=l.component;return"input"===n&&(e=!1!==t.zb(l,56)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.zb(l,56).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.zb(l,56)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.zb(l,56)._compositionEnd(u.target.value)&&e),"focus"===n&&(e=!1!==a.changeStatusModalSelectFile()&&e),e},null,null)),t.ob(56,16384,null,0,d.d,[t.D,t.k,[2,d.a]],null,null),t.Db(1024,null,d.m,function(l){return[l]},[d.d]),t.ob(58,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.m],[2,d.B]],{name:[0,"name"]},null),t.Db(2048,null,d.n,null,[d.g]),t.ob(60,16384,null,0,d.o,[[4,d.n]],null,null),(l()(),t.pb(61,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(62,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(63,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Descri\xe7\xe3o "])),(l()(),t.gb(16777216,null,null,1,null,I)),t.ob(66,16384,null,0,b.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(67,0,null,null,5,"app-ngx-editor",[["formControlName","description"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,g.b,g.a)),t.ob(68,114688,null,0,h.b,[h.c,h.d,t.D],{spellcheck:[0,"spellcheck"],minHeight:[1,"minHeight"]},null),t.Db(1024,null,d.m,function(l){return[l]},[h.b]),t.ob(70,671744,null,0,d.g,[[3,d.c],[8,null],[8,null],[6,d.m],[2,d.B]],{name:[0,"name"]},null),t.Db(2048,null,d.n,null,[d.g]),t.ob(72,16384,null,0,d.o,[[4,d.n]],null,null),(l()(),t.pb(73,0,null,null,8,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(74,0,null,null,7,"div",[["class","form-group btn-group"]],null,null,null,null,null)),(l()(),t.pb(75,0,null,null,2,"button",[["class","btn btn-md btn-default"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.pb(76,0,null,null,0,"span",[["class","glyphicon glyphicon-floppy-disk"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,[" Salvar"])),(l()(),t.pb(78,0,null,null,3,"a",[["class","btn btn-md btn-default"],["routerLink","/admin/teams"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,79).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(79,671744,null,0,r.m,[r.l,r.a,b.i],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(80,0,null,null,0,"span",[["class","glyphicon glyphicon-remove"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,[" Cancelar"]))],function(l,n){var u=n.component;l(n,6,0,u.alert.show),l(n,9,0,u.formEditTeam),l(n,13,0,u.showModalSelectFile),l(n,24,0,u.formEditTeam.controls.name.invalid),l(n,28,0,"name"),l(n,36,0,u.formEditTeam.controls.status.invalid),l(n,40,0,"status"),l(n,44,0,"true"),l(n,45,0,"true"),l(n,48,0,"false"),l(n,49,0,"false"),l(n,58,0,"photo"),l(n,66,0,u.formEditTeam.controls.description.invalid),l(n,68,0,!0,30),l(n,70,0,"description"),l(n,79,0,"/admin/teams")},function(l,n){var u=n.component;l(n,7,0,t.zb(n,11).ngClassUntouched,t.zb(n,11).ngClassTouched,t.zb(n,11).ngClassPristine,t.zb(n,11).ngClassDirty,t.zb(n,11).ngClassValid,t.zb(n,11).ngClassInvalid,t.zb(n,11).ngClassPending),l(n,16,0,t.rb(1,"",u.team.photo,"")),l(n,25,0,t.zb(n,30).ngClassUntouched,t.zb(n,30).ngClassTouched,t.zb(n,30).ngClassPristine,t.zb(n,30).ngClassDirty,t.zb(n,30).ngClassValid,t.zb(n,30).ngClassInvalid,t.zb(n,30).ngClassPending),l(n,37,0,t.zb(n,42).ngClassUntouched,t.zb(n,42).ngClassTouched,t.zb(n,42).ngClassPristine,t.zb(n,42).ngClassDirty,t.zb(n,42).ngClassValid,t.zb(n,42).ngClassInvalid,t.zb(n,42).ngClassPending),l(n,55,0,t.zb(n,60).ngClassUntouched,t.zb(n,60).ngClassTouched,t.zb(n,60).ngClassPristine,t.zb(n,60).ngClassDirty,t.zb(n,60).ngClassValid,t.zb(n,60).ngClassInvalid,t.zb(n,60).ngClassPending),l(n,67,0,t.zb(n,72).ngClassUntouched,t.zb(n,72).ngClassTouched,t.zb(n,72).ngClassPristine,t.zb(n,72).ngClassDirty,t.zb(n,72).ngClassValid,t.zb(n,72).ngClassInvalid,t.zb(n,72).ngClassPending),l(n,75,0,u.formEditTeam.invalid),l(n,78,0,t.zb(n,79).target,t.zb(n,79).href)})}var S=u("SYap"),D=u("ajGO"),G=function(){function l(){this.teamName=""}return l.prototype.ngOnInit=function(){},l.prototype.setTeamName=function(l){this.teamName=l},l}(),O=t.nb({encapsulation:0,styles:[[".content[_ngcontent-%COMP%]{min-height:80vh}"]],data:{}});function P(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-navbar-admin",[],null,null,null,o.b,o.a)),t.ob(1,114688,null,0,i.a,[s.a,r.l],null,null),(l()(),t.pb(2,0,null,null,16,"div",[["class","content"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,15,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,12,"ol",[["class","breadcrumb"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,2,"a",[["routerLink","/admin/home"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(7,671744,null,0,r.m,[r.l,r.a,b.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Gb(-1,null,["In\xedcio"])),(l()(),t.pb(9,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,2,"a",[["routerLink","/admin/teams"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,11).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(11,671744,null,0,r.m,[r.l,r.a,b.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Gb(-1,null,["Equipes"])),(l()(),t.pb(13,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),t.Gb(14,null,["",""])),(l()(),t.pb(15,0,null,null,1,"li",[["class","active"]],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Editar"])),(l()(),t.pb(17,0,null,null,1,"app-edit-team-form-admin",[],null,[[null,"teamName"]],function(l,n,u){var t=!0;return"teamName"===n&&(t=!1!==l.component.setTeamName(u)&&t),t},T,C)),t.ob(18,114688,null,0,z,[f.a,r.a],null,{teamName:"teamName"}),(l()(),t.pb(19,0,null,null,1,"app-footer-admin",[],null,null,null,S.b,S.a)),t.ob(20,114688,null,0,D.a,[],null,null)],function(l,n){l(n,1,0),l(n,7,0,"/admin/home"),l(n,11,0,"/admin/teams"),l(n,18,0),l(n,20,0)},function(l,n){var u=n.component;l(n,6,0,t.zb(n,7).target,t.zb(n,7).href),l(n,10,0,t.zb(n,11).target,t.zb(n,11).href),l(n,14,0,u.teamName)})}function M(l){return t.Ib(0,[(l()(),t.pb(0,0,null,null,1,"app-edit-team-page",[],null,null,null,P,O)),t.ob(1,114688,null,0,G,[],null,null)],function(l,n){l(n,1,0)},null)}var N=t.lb("app-edit-team-page",G,M,{},{},[]),j=u("mGS5"),E=u("t/Na"),L=u("FjPM"),F=u("chmc"),_=u("S7LP"),K=u("6aHO"),U=function(){return function(){}}(),V=u("nT8j"),q=u("0QPa"),A=u("AW84"),H=u("1oZo"),B=function(){return function(){}}();u.d(n,"EditTeamPageModuleNgFactory",function(){return W});var W=t.mb(e,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[a.a,N,j.a]],[3,t.j],t.v]),t.xb(4608,b.n,b.m,[t.s,[2,b.w]]),t.xb(4608,s.a,s.a,[E.c,L.a]),t.xb(4608,d.e,d.e,[]),t.xb(4608,d.A,d.A,[]),t.xb(4608,F.a,F.a,[]),t.xb(4608,_.a,_.a,[]),t.xb(4608,K.a,K.a,[t.j,t.x,t.p,_.a,t.g]),t.xb(4608,h.d,h.d,[E.c]),t.xb(4608,h.c,h.c,[]),t.xb(4608,p.a,p.a,[E.c,L.a,s.a]),t.xb(4608,f.a,f.a,[E.c,L.a,s.a]),t.xb(1073742336,b.b,b.b,[]),t.xb(1073742336,r.n,r.n,[[2,r.t],[2,r.l]]),t.xb(1073742336,U,U,[]),t.xb(1073742336,V.a,V.a,[]),t.xb(1073742336,q.a,q.a,[]),t.xb(1073742336,d.x,d.x,[]),t.xb(1073742336,d.t,d.t,[]),t.xb(1073742336,d.j,d.j,[]),t.xb(1073742336,A.a,A.a,[]),t.xb(1073742336,h.a,h.a,[]),t.xb(1073742336,H.a,H.a,[]),t.xb(1073742336,B,B,[]),t.xb(1073742336,e,e,[]),t.xb(1024,r.j,function(){return[[{path:"",component:G}]]},[])])})}}]);