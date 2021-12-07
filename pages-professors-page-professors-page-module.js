(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-professors-page-professors-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-professors/list-professors.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-professors/list-professors.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn-group > button, a {\r\n    margin-right: 7px;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtcHJvZmVzc29ycy9saXN0LXByb2Zlc3NvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtcHJvZmVzc29ycy9saXN0LXByb2Zlc3NvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uLCBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-professors/list-professors.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-professors/list-professors.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Professores</h1>\r\n  <p>Os professores do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <div class=\"btn-group\">\r\n    <a routerLink=\"/admin/teams\" class=\"btn btn-md btn-default\">Equipes</a>\r\n    <a routerLink=\"/admin/professors/new\" class=\"btn btn-md btn-default\">Novo professor</a>\r\n  </div>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Nome</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let professor of professors\">\r\n        <td>{{ professor.name }}</td>\r\n        <td>\r\n          <span *ngIf=\"professor.status\">Ativo</span>\r\n          <span *ngIf=\"!professor.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/professors/{{ professor._key }}\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeProfessor(professor)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"professors.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhum professor cadastrado</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-professors/list-professors.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-professors/list-professors.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ListProfessorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProfessorsComponent", function() { return ListProfessorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/professor.service */ "./src/app/roles/admin-area/angular-services/professor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListProfessorsComponent = /** @class */ (function () {
    function ListProfessorsComponent(professorService) {
        this.professorService = professorService;
        this.professors = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListProfessorsComponent.prototype.ngOnInit = function () {
        this.getProfessors();
    };
    ListProfessorsComponent.prototype.getProfessors = function () {
        var _this = this;
        this.professorService.getProfessors().subscribe(function (response) {
            if (response !== undefined) {
                _this.professors = response;
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao carregar os dados!';
                _this.alert.show = true;
            }
        });
    };
    ListProfessorsComponent.prototype.removeProfessor = function (professor) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.professors = this.professors.filter(function (t) { return t !== professor; });
            this.professorService.removeProfessor(professor._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Professor excluído com sucesso!';
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
    ListProfessorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-professors-admin',
            template: __webpack_require__(/*! ./list-professors.component.html */ "./src/app/roles/admin-area/components/list-professors/list-professors.component.html"),
            styles: [__webpack_require__(/*! ./list-professors.component.css */ "./src/app/roles/admin-area/components/list-professors/list-professors.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_professor_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorService"]])
    ], ListProfessorsComponent);
    return ListProfessorsComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-professors/list-professors.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-professors/list-professors.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ListProfessorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProfessorsModule", function() { return ListProfessorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_professors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-professors.component */ "./src/app/roles/admin-area/components/list-professors/list-professors.component.ts");
/* harmony import */ var _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/professor.service */ "./src/app/roles/admin-area/angular-services/professor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListProfessorsModule = /** @class */ (function () {
    function ListProfessorsModule() {
    }
    ListProfessorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_professors_component__WEBPACK_IMPORTED_MODULE_3__["ListProfessorsComponent"]
            ],
            exports: [
                _list_professors_component__WEBPACK_IMPORTED_MODULE_3__["ListProfessorsComponent"]
            ],
            providers: [
                _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_4__["ProfessorService"]
            ]
        })
    ], ListProfessorsModule);
    return ListProfessorsModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/professors-page/professors-page-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/professors-page/professors-page-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfessorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorsPageRoutingModule", function() { return ProfessorsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _professors_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./professors-page.component */ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _professors_page_component__WEBPACK_IMPORTED_MODULE_2__["ProfessorsPageComponent"] }
];
var ProfessorsPageRoutingModule = /** @class */ (function () {
    function ProfessorsPageRoutingModule() {
    }
    ProfessorsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProfessorsPageRoutingModule);
    return ProfessorsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/professors-page/professors-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9wcm9mZXNzb3JzLXBhZ2UvcHJvZmVzc29ycy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL3Byb2Zlc3NvcnMtcGFnZS9wcm9mZXNzb3JzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/professors-page/professors-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/teams\">Equipes</a></li>\r\n      <li class=\"active\">Professores</li>\r\n    </ol>\r\n    <app-list-professors-admin></app-list-professors-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/professors-page/professors-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProfessorsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorsPageComponent", function() { return ProfessorsPageComponent; });
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

var ProfessorsPageComponent = /** @class */ (function () {
    function ProfessorsPageComponent() {
    }
    ProfessorsPageComponent.prototype.ngOnInit = function () {
    };
    ProfessorsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professors-page',
            template: __webpack_require__(/*! ./professors-page.component.html */ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.html"),
            styles: [__webpack_require__(/*! ./professors-page.component.css */ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessorsPageComponent);
    return ProfessorsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/professors-page/professors-page.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/professors-page/professors-page.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfessorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorsPageModule", function() { return ProfessorsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _professors_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./professors-page.component */ "./src/app/roles/admin-area/pages/professors-page/professors-page.component.ts");
/* harmony import */ var _professors_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./professors-page-routing.module */ "./src/app/roles/admin-area/pages/professors-page/professors-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_professors_list_professors_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-professors/list-professors.module */ "./src/app/roles/admin-area/components/list-professors/list-professors.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProfessorsPageModule = /** @class */ (function () {
    function ProfessorsPageModule() {
    }
    ProfessorsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _professors_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfessorsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_professors_list_professors_module__WEBPACK_IMPORTED_MODULE_6__["ListProfessorsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_professors_page_component__WEBPACK_IMPORTED_MODULE_3__["ProfessorsPageComponent"]]
        })
    ], ProfessorsPageModule);
    return ProfessorsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-professors-page-professors-page-module.js.map