(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teams-page-teams-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-teams/list-teams.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-teams/list-teams.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn-group > button, a {\r\n    margin-right: 7px;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtdGVhbXMvbGlzdC10ZWFtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvbGlzdC10ZWFtcy9saXN0LXRlYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiwgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-teams/list-teams.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-teams/list-teams.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Equipes</h1>\r\n  <p>As equipes de professores do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <div class=\"btn-group\">\r\n    <a routerLink=\"/admin/professors\" class=\"btn btn-md btn-default\">Professores</a>\r\n    <a routerLink=\"/admin/teams/new\" class=\"btn btn-md btn-default\">Nova equipe</a>\r\n  </div>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Nome</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let team of teams\">\r\n        <td>{{ team.name }}</td>\r\n        <td>\r\n          <span *ngIf=\"team.status\">Ativo</span>\r\n          <span *ngIf=\"!team.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/teams/{{ team._key }}\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeTeam(team)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"teams.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhuma equipe cadastrada</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-teams/list-teams.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-teams/list-teams.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTeamsComponent", function() { return ListTeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListTeamsComponent = /** @class */ (function () {
    function ListTeamsComponent(teamService) {
        this.teamService = teamService;
        this.teams = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListTeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    ListTeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().subscribe(function (response) {
            if (response !== undefined) {
                _this.teams = response;
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao carregar os dados!';
                _this.alert.show = true;
            }
        });
    };
    ListTeamsComponent.prototype.removeTeam = function (team) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.teams = this.teams.filter(function (t) { return t !== team; });
            this.teamService.removeTeam(team._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Equipe excluída com sucesso!';
                    _this.alert.show = true;
                }
                else {
                    _this.alert.type = 'danger';
                    _this.alert.message = 'Houve algum erro ao carregar os dados!';
                    _this.alert.show = true;
                }
            });
        }
        else {
            this.alert.type = 'danger';
            this.alert.message = 'O captcha inválido!';
            this.alert.show = true;
        }
    };
    ListTeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-teams-admin',
            template: __webpack_require__(/*! ./list-teams.component.html */ "./src/app/roles/admin-area/components/list-teams/list-teams.component.html"),
            styles: [__webpack_require__(/*! ./list-teams.component.css */ "./src/app/roles/admin-area/components/list-teams/list-teams.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], ListTeamsComponent);
    return ListTeamsComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-teams/list-teams.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-teams/list-teams.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListTeamsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTeamsModule", function() { return ListTeamsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-teams.component */ "./src/app/roles/admin-area/components/list-teams/list-teams.component.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListTeamsModule = /** @class */ (function () {
    function ListTeamsModule() {
    }
    ListTeamsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_teams_component__WEBPACK_IMPORTED_MODULE_3__["ListTeamsComponent"]
            ],
            exports: [
                _list_teams_component__WEBPACK_IMPORTED_MODULE_3__["ListTeamsComponent"]
            ],
            providers: [
                _angular_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"]
            ]
        })
    ], ListTeamsModule);
    return ListTeamsModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/teams-page/teams-page-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/teams-page/teams-page-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TeamsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageRoutingModule", function() { return TeamsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teams_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams-page.component */ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _teams_page_component__WEBPACK_IMPORTED_MODULE_2__["TeamsPageComponent"] }
];
var TeamsPageRoutingModule = /** @class */ (function () {
    function TeamsPageRoutingModule() {
    }
    TeamsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], TeamsPageRoutingModule);
    return TeamsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/teams-page/teams-page.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy90ZWFtcy1wYWdlL3RlYW1zLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvcGFnZXMvdGVhbXMtcGFnZS90ZWFtcy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/teams-page/teams-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Equipes</li>\r\n    </ol>\r\n    <app-list-teams-admin></app-list-teams-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/teams-page/teams-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: TeamsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageComponent", function() { return TeamsPageComponent; });
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

var TeamsPageComponent = /** @class */ (function () {
    function TeamsPageComponent() {
    }
    TeamsPageComponent.prototype.ngOnInit = function () {
    };
    TeamsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teams-page',
            template: __webpack_require__(/*! ./teams-page.component.html */ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.html"),
            styles: [__webpack_require__(/*! ./teams-page.component.css */ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamsPageComponent);
    return TeamsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/teams-page/teams-page.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/teams-page/teams-page.module.ts ***!
  \************************************************************************/
/*! exports provided: TeamsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _teams_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams-page.component */ "./src/app/roles/admin-area/pages/teams-page/teams-page.component.ts");
/* harmony import */ var _teams_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teams-page-routing.module */ "./src/app/roles/admin-area/pages/teams-page/teams-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_teams_list_teams_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-teams/list-teams.module */ "./src/app/roles/admin-area/components/list-teams/list-teams.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TeamsPageModule = /** @class */ (function () {
    function TeamsPageModule() {
    }
    TeamsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _teams_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["TeamsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_teams_list_teams_module__WEBPACK_IMPORTED_MODULE_6__["ListTeamsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_teams_page_component__WEBPACK_IMPORTED_MODULE_3__["TeamsPageComponent"]]
        })
    ], TeamsPageModule);
    return TeamsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teams-page-teams-page-module.js.map