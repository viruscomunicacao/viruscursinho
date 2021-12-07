(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-admin-area-admin-area-module"],{

/***/ "./src/app/roles/admin-area/admin-area-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/roles/admin-area/admin-area-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AdminAreaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaRoutingModule", function() { return AdminAreaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/roles/admin-area/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', loadChildren: './pages/login-page/login-page.module#LoginPageModule' },
    { path: '', redirectTo: 'login' },
    { path: 'home', loadChildren: './pages/home-page/home-page.module#HomePageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'profile', loadChildren: './pages/profile-page/profile-page.module#ProfilePageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'albuns', loadChildren: './pages/albuns-page/albuns-page.module#AlbunsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'albuns/new', loadChildren: './pages/new-album-page/new-album-page.module#NewAlbumPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'albuns/:id/edit', loadChildren: './pages/edit-album-page/edit-album-page.module#EditAlbumPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'approvals', loadChildren: './pages/approvals-page/approvals-page.module#ApprovalsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'approvals/new', loadChildren: './pages/new-approval-page/new-approval-page.module#NewApprovalPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'approvals/:id', loadChildren: './pages/edit-approval-page/edit-approval-page.module#EditApprovalPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'banners', loadChildren: './pages/banners-page/banners-page.module#BannersPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'banners/new', loadChildren: './pages/new-banner-page/new-banner-page.module#NewBannerPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'banners/:id', loadChildren: './pages/edit-banner-page/edit-banner-page.module#EditBannerPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'courses', loadChildren: './pages/courses-page/courses-page.module#CoursesPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'courses/new', loadChildren: './pages/new-course-page/new-course-page.module#NewCoursePageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'courses/:id/edit', loadChildren: './pages/edit-course-page/edit-course-page.module#EditCoursePageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'courses/categories', loadChildren: './pages/course-categories-page/course-categories-page.module#CourseCategoriesPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'courses/categories/new', loadChildren: './pages/new-course-category-page/new-course-category-page.module#NewCourseCategoryPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'courses/categories/:id', loadChildren: './pages/edit-course-category-page/edit-course-category-page.module#EditCourseCategoryPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'downloads', loadChildren: './pages/downloads-page/downloads-page.module#DownloadsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'downloads/new', loadChildren: './pages/new-download-page/new-download-page.module#NewDownloadPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'downloads/:id/edit', loadChildren: './pages/edit-download-page/edit-download-page.module#EditDownloadPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'downloads/categories', loadChildren: './pages/download-categories-page/download-categories-page.module#DownloadCategoriesPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'downloads/categories/new', loadChildren: './pages/new-download-category-page/new-download-category-page.module#NewDownloadCategoryPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'downloads/categories/:id', loadChildren: './pages/edit-download-category-page/edit-download-category-page.module#EditDownloadCategoryPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'events', loadChildren: './pages/events-page/events-page.module#EventsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'events/new', loadChildren: './pages/new-event-page/new-event-page.module#NewEventPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'events/:id', loadChildren: './pages/edit-event-page/edit-event-page.module#EditEventPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'teams', loadChildren: './pages/teams-page/teams-page.module#TeamsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'teams/new', loadChildren: './pages/new-team-page/new-team-page.module#NewTeamPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'teams/:id', loadChildren: './pages/edit-team-page/edit-team-page.module#EditTeamPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'professors', loadChildren: './pages/professors-page/professors-page.module#ProfessorsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'professors/new', loadChildren: './pages/new-professor-page/new-professor-page.module#NewProfessorPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'professors/:id', loadChildren: './pages/edit-professor-page/edit-professor-page.module#EditProfessorPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'news', loadChildren: './pages/news-page/news-page.module#NewsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'news/new', loadChildren: './pages/new-news-page/new-news-page.module#NewNewsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'news/:id/edit', loadChildren: './pages/edit-news-page/edit-news-page.module#EditNewsPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'news/categories', loadChildren: './pages/news-categories-page/news-categories-page.module#NewsCategoriesPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'news/categories/new', loadChildren: './pages/new-news-category-page/new-news-category-page.module#NewNewsCategoryPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'news/categories/:id', loadChildren: './pages/edit-news-category-page/edit-news-category-page.module#EditNewsCategoryPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'users', loadChildren: './pages/users-page/users-page.module#UsersPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'users/new', loadChildren: './pages/new-user-page/new-user-page.module#NewUserPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'users/:id', loadChildren: './pages/edit-user-page/edit-user-page.module#EditUserPageModule', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
var AdminAreaRoutingModule = /** @class */ (function () {
    function AdminAreaRoutingModule() {
    }
    AdminAreaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AdminAreaRoutingModule);
    return AdminAreaRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/admin-area.component.css":
/*!***********************************************************!*\
  !*** ./src/app/roles/admin-area/admin-area.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvYWRtaW4tYXJlYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/admin-area.component.html":
/*!************************************************************!*\
  !*** ./src/app/roles/admin-area/admin-area.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/roles/admin-area/admin-area.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/roles/admin-area/admin-area.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaComponent", function() { return AdminAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAreaComponent = /** @class */ (function () {
    function AdminAreaComponent() {
    }
    AdminAreaComponent.prototype.ngOnInit = function () {
    };
    AdminAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-area',
            template: __webpack_require__(/*! ./admin-area.component.html */ "./src/app/roles/admin-area/admin-area.component.html"),
            styles: [__webpack_require__(/*! ./admin-area.component.css */ "./src/app/roles/admin-area/admin-area.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminAreaComponent);
    return AdminAreaComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/admin-area.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/roles/admin-area/admin-area.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAreaModule", function() { return AdminAreaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_area_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-area.component */ "./src/app/roles/admin-area/admin-area.component.ts");
/* harmony import */ var _admin_area_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-area-routing.module */ "./src/app/roles/admin-area/admin-area-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminAreaModule = /** @class */ (function () {
    function AdminAreaModule() {
    }
    AdminAreaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_area_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminAreaRoutingModule"]
            ],
            declarations: [
                _admin_area_component__WEBPACK_IMPORTED_MODULE_2__["AdminAreaComponent"]
            ]
        })
    ], AdminAreaModule);
    return AdminAreaModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/angular-services/auth.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/admin-area/angular-services/auth.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./src/app/roles/admin-area/angular-services/logger.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/auth";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('tokenUserLogged') });
    }
    AuthService.prototype.logError = function (error, operation) {
        var message = '';
        var reload = false;
        if (error.status === 404) {
            message = 'Falha ao se comunicar com a API: Rota não encontrada (ERRO 404)';
        }
        else if (error.status === 401) {
            message = 'Falha ao se comunicar com a API: Token inválido ou expirado';
            reload = this.logoff();
        }
        else if (error.status === 400) {
            message = "Os dados enviados s\u00E3o inv\u00E1lidos! \nCausa do erro: " + error.error.details[0].message;
        }
        else if (error.status >= 500 && error.status <= 505) {
            message = "Houve algum erro no servidor! Entre em contato com o administrador!";
        }
        else {
            message = error.Message;
        }
        this.loggerService.add("AuthService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    AuthService.prototype.log = function (mensagem) {
        this.loggerService.add('AuthService: ' + mensagem);
    };
    AuthService.prototype.login = function (user, password) {
        var _this = this;
        return this.http.post(this.apiURL + "/login", { "user": user, "password": password }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.log("login w/ user=" + user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')));
    };
    AuthService.prototype.getSession = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/session", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched user logged with token=" + localStorage.getItem('tokenUserLogged') + "."); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSession')));
    };
    AuthService.prototype.logoff = function () {
        localStorage.removeItem("tokenUserLogged");
        return true;
    };
    AuthService.prototype.userLogged = function () {
        var token = localStorage.getItem('tokenUserLogged');
        if (token !== '' && token !== undefined && token !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/angular-services/logger.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/roles/admin-area/angular-services/logger.service.ts ***!
  \*********************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.logs = [];
    }
    LoggerService.prototype.add = function (log) {
        this.logs.push(log);
        //console.log(log);
    };
    LoggerService.prototype.clear = function () {
        this.logs = [];
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/guards/auth.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/roles/admin-area/guards/auth.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular-services/auth.service */ "./src/app/roles/admin-area/angular-services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var path = next.url[0].path;
        var status = this.authService.userLogged();
        if (status) {
            return true;
        }
        else {
            this.router.navigate(['/admin/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ })

}]);
//# sourceMappingURL=roles-admin-area-admin-area-module.js.map