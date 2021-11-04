(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"00W3":function(e,a,o){"use strict";o.d(a,"a",function(){return g});var t=o("t/Na"),n=o("F/XL"),d=o("xMyE"),r=o("9Z1F"),s=o("FjPM"),i=o("AytR"),l=o("CcnG"),g=function(){function e(e,a){this.http=e,this.loggerService=a,this.apiURL=i.a.apiURL+"/auth",this.options=new t.g,this.session={},this.options=new t.g({"Content-Type":"application/json","x-access-token":localStorage.getItem("tokenUserLogged")})}return e.prototype.logError=function(e,a){var o="",t=!1;404===e.status?o="Falha ao se comunicar com a API: Rota n\xe3o encontrada (ERRO 404)":401===e.status?(o="Falha ao se comunicar com a API: Token inv\xe1lido ou expirado",t=this.logoff()):o=400===e.status?"Os dados enviados s\xe3o inv\xe1lidos! \nCausa do erro: "+e.error.details[0].message:e.status>=500&&e.status<=505?"Houve algum erro no servidor! Entre em contato com o administrador!":e.Message,this.loggerService.add("AuthService failed on operation: "+a+"\nMessage: "+o),t&&location.reload()},e.prototype.log=function(e){this.loggerService.add("AuthService: "+e)},e.prototype.login=function(e,a){var o=this;return this.http.post(this.apiURL+"/login",{user:e,password:a},{headers:new t.g({"Content-Type":"application/json"})}).pipe(Object(d.a)(function(a){return o.log("login w/ user="+e)}),Object(r.a)(this.handleError("login")))},e.prototype.getSession=function(){var e=this;return this.http.get(this.apiURL+"/session",{headers:this.options}).pipe(Object(d.a)(function(a){return e.log("fetched user logged with token="+localStorage.getItem("tokenUserLogged")+".")}),Object(r.a)(this.handleError("getSession")))},e.prototype.logoff=function(){return localStorage.removeItem("tokenUserLogged"),!0},e.prototype.userLogged=function(){var e=localStorage.getItem("tokenUserLogged");return""!==e&&null!=e},e.prototype.handleError=function(e,a){var o=this;return void 0===e&&(e="operation"),function(t){return o.logError(t,e),Object(n.a)(a)}},e.ngInjectableDef=l.S({factory:function(){return new e(l.W(t.c),l.W(s.a))},token:e,providedIn:"root"}),e}()},FjPM:function(e,a,o){"use strict";o.d(a,"a",function(){return n});var t=o("CcnG"),n=function(){function e(){this.logs=[]}return e.prototype.add=function(e){this.logs.push(e)},e.prototype.clear=function(){this.logs=[]},e.ngInjectableDef=t.S({factory:function(){return new e},token:e,providedIn:"root"}),e}()},WVIL:function(e,a,o){"use strict";o.r(a);var t=o("CcnG"),n=function(){return function(){}}(),d=o("pMnS"),r=o("Ip0R"),s=o("ZYCi"),i=o("00W3"),l=function(){function e(e,a){this.authService=e,this.router=a}return e.prototype.canActivate=function(e,a){return!!this.authService.userLogged()||(this.router.navigate(["/admin/login"]),!1)},e.ngInjectableDef=t.S({factory:function(){return new e(t.W(i.a),t.W(s.l))},token:e,providedIn:"root"}),e}(),g=function(){return function(){}}();o.d(a,"AdminAreaModuleNgFactory",function(){return p});var p=t.mb(n,[],function(e){return t.wb([t.xb(512,t.j,t.bb,[[8,[d.a]],[3,t.j],t.v]),t.xb(4608,r.n,r.m,[t.s,[2,r.w]]),t.xb(1073742336,r.b,r.b,[]),t.xb(1073742336,s.n,s.n,[[2,s.t],[2,s.l]]),t.xb(1073742336,g,g,[]),t.xb(1073742336,n,n,[]),t.xb(1024,s.j,function(){return[[{path:"login",loadChildren:"./pages/login-page/login-page.module#LoginPageModule"},{path:"",redirectTo:"login"},{path:"home",loadChildren:"./pages/home-page/home-page.module#HomePageModule",canActivate:[l]},{path:"profile",loadChildren:"./pages/profile-page/profile-page.module#ProfilePageModule",canActivate:[l]},{path:"albuns",loadChildren:"./pages/albuns-page/albuns-page.module#AlbunsPageModule",canActivate:[l]},{path:"albuns/new",loadChildren:"./pages/new-album-page/new-album-page.module#NewAlbumPageModule",canActivate:[l]},{path:"albuns/:id/edit",loadChildren:"./pages/edit-album-page/edit-album-page.module#EditAlbumPageModule",canActivate:[l]},{path:"approvals",loadChildren:"./pages/approvals-page/approvals-page.module#ApprovalsPageModule",canActivate:[l]},{path:"approvals/new",loadChildren:"./pages/new-approval-page/new-approval-page.module#NewApprovalPageModule",canActivate:[l]},{path:"approvals/:id",loadChildren:"./pages/edit-approval-page/edit-approval-page.module#EditApprovalPageModule",canActivate:[l]},{path:"banners",loadChildren:"./pages/banners-page/banners-page.module#BannersPageModule",canActivate:[l]},{path:"banners/new",loadChildren:"./pages/new-banner-page/new-banner-page.module#NewBannerPageModule",canActivate:[l]},{path:"banners/:id",loadChildren:"./pages/edit-banner-page/edit-banner-page.module#EditBannerPageModule",canActivate:[l]},{path:"courses",loadChildren:"./pages/courses-page/courses-page.module#CoursesPageModule",canActivate:[l]},{path:"courses/new",loadChildren:"./pages/new-course-page/new-course-page.module#NewCoursePageModule",canActivate:[l]},{path:"courses/:id/edit",loadChildren:"./pages/edit-course-page/edit-course-page.module#EditCoursePageModule",canActivate:[l]},{path:"courses/categories",loadChildren:"./pages/course-categories-page/course-categories-page.module#CourseCategoriesPageModule",canActivate:[l]},{path:"courses/categories/new",loadChildren:"./pages/new-course-category-page/new-course-category-page.module#NewCourseCategoryPageModule",canActivate:[l]},{path:"courses/categories/:id",loadChildren:"./pages/edit-course-category-page/edit-course-category-page.module#EditCourseCategoryPageModule",canActivate:[l]},{path:"downloads",loadChildren:"./pages/downloads-page/downloads-page.module#DownloadsPageModule",canActivate:[l]},{path:"downloads/new",loadChildren:"./pages/new-download-page/new-download-page.module#NewDownloadPageModule",canActivate:[l]},{path:"downloads/:id/edit",loadChildren:"./pages/edit-download-page/edit-download-page.module#EditDownloadPageModule",canActivate:[l]},{path:"downloads/categories",loadChildren:"./pages/download-categories-page/download-categories-page.module#DownloadCategoriesPageModule",canActivate:[l]},{path:"downloads/categories/new",loadChildren:"./pages/new-download-category-page/new-download-category-page.module#NewDownloadCategoryPageModule",canActivate:[l]},{path:"downloads/categories/:id",loadChildren:"./pages/edit-download-category-page/edit-download-category-page.module#EditDownloadCategoryPageModule",canActivate:[l]},{path:"events",loadChildren:"./pages/events-page/events-page.module#EventsPageModule",canActivate:[l]},{path:"events/new",loadChildren:"./pages/new-event-page/new-event-page.module#NewEventPageModule",canActivate:[l]},{path:"events/:id",loadChildren:"./pages/edit-event-page/edit-event-page.module#EditEventPageModule",canActivate:[l]},{path:"teams",loadChildren:"./pages/teams-page/teams-page.module#TeamsPageModule",canActivate:[l]},{path:"teams/new",loadChildren:"./pages/new-team-page/new-team-page.module#NewTeamPageModule",canActivate:[l]},{path:"teams/:id",loadChildren:"./pages/edit-team-page/edit-team-page.module#EditTeamPageModule",canActivate:[l]},{path:"professors",loadChildren:"./pages/professors-page/professors-page.module#ProfessorsPageModule",canActivate:[l]},{path:"professors/new",loadChildren:"./pages/new-professor-page/new-professor-page.module#NewProfessorPageModule",canActivate:[l]},{path:"professors/:id",loadChildren:"./pages/edit-professor-page/edit-professor-page.module#EditProfessorPageModule",canActivate:[l]},{path:"news",loadChildren:"./pages/news-page/news-page.module#NewsPageModule",canActivate:[l]},{path:"news/new",loadChildren:"./pages/new-news-page/new-news-page.module#NewNewsPageModule",canActivate:[l]},{path:"news/:id/edit",loadChildren:"./pages/edit-news-page/edit-news-page.module#EditNewsPageModule",canActivate:[l]},{path:"news/categories",loadChildren:"./pages/news-categories-page/news-categories-page.module#NewsCategoriesPageModule",canActivate:[l]},{path:"news/categories/new",loadChildren:"./pages/new-news-category-page/new-news-category-page.module#NewNewsCategoryPageModule",canActivate:[l]},{path:"news/categories/:id",loadChildren:"./pages/edit-news-category-page/edit-news-category-page.module#EditNewsCategoryPageModule",canActivate:[l]},{path:"users",loadChildren:"./pages/users-page/users-page.module#UsersPageModule",canActivate:[l]},{path:"users/new",loadChildren:"./pages/new-user-page/new-user-page.module#NewUserPageModule",canActivate:[l]},{path:"users/:id",loadChildren:"./pages/edit-user-page/edit-user-page.module#EditUserPageModule",canActivate:[l]}]]},[])])})}}]);