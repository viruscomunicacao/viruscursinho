(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-professor-page-new-professor-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1wcm9mZXNzb3ItZm9ybS9uZXctcHJvZmVzc29yLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvbmV3LXByb2Zlc3Nvci1mb3JtL25ldy1wcm9mZXNzb3ItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Novo professor</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewProfessor\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Nome <span *ngIf=\"formNewProfessor.controls.name.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewProfessor.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <label>Equipe <span *ngIf=\"formNewProfessor.controls.idTeam.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"idTeam\">\r\n          <option *ngFor=\"let team of teams\" value=\"{{ team._key }}\">{{ team.name }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formNewProfessor.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewProfessor.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/professors\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NewProfessorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProfessorFormComponent", function() { return NewProfessorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/professor.service */ "./src/app/roles/admin-area/angular-services/professor.service.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProfessorFormComponent = /** @class */ (function () {
    function NewProfessorFormComponent(professorService, teamService) {
        this.professorService = professorService;
        this.teamService = teamService;
        this.teams = [];
        this.alert = { type: '', message: '', show: false };
    }
    NewProfessorFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getTeams();
    };
    NewProfessorFormComponent.prototype.initForm = function () {
        this.formNewProfessor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            idTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewProfessorFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewProfessor.valid) {
            var data = this.formNewProfessor.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.professorService.addProfessor(data).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Dados salvos com sucesso!';
                    _this.alert.show = true;
                }
                else {
                    _this.alert.type = 'danger';
                    _this.alert.message = 'Houve algum erro ao salvar os dados!';
                    _this.alert.show = true;
                }
            });
        }
    };
    NewProfessorFormComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams().subscribe(function (response) {
            if (response !== undefined) {
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var team = response_1[_i];
                    if (team.status) {
                        _this.teams.push(team);
                    }
                }
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao carregar os dados!';
                _this.alert.show = true;
            }
        });
    };
    NewProfessorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-professor-form-admin',
            template: __webpack_require__(/*! ./new-professor-form.component.html */ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.html"),
            styles: [__webpack_require__(/*! ./new-professor-form.component.css */ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_professor_service__WEBPACK_IMPORTED_MODULE_2__["ProfessorService"], _angular_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]])
    ], NewProfessorFormComponent);
    return NewProfessorFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-professor-form/new-professor-form.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewProfessorFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProfessorFormModule", function() { return NewProfessorFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_professor_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-professor-form.component */ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.component.ts");
/* harmony import */ var _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/professor.service */ "./src/app/roles/admin-area/angular-services/professor.service.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewProfessorFormModule = /** @class */ (function () {
    function NewProfessorFormModule() {
    }
    NewProfessorFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"]
            ],
            declarations: [
                _new_professor_form_component__WEBPACK_IMPORTED_MODULE_5__["NewProfessorFormComponent"]
            ],
            exports: [
                _new_professor_form_component__WEBPACK_IMPORTED_MODULE_5__["NewProfessorFormComponent"]
            ],
            providers: [
                _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorService"],
                _angular_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"]
            ]
        })
    ], NewProfessorFormModule);
    return NewProfessorFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-professor-page/new-professor-page-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: NewProfessorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProfessorPageRoutingModule", function() { return NewProfessorPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_professor_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-professor-page.component */ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_professor_page_component__WEBPACK_IMPORTED_MODULE_2__["NewProfessorPageComponent"] }
];
var NewProfessorPageRoutingModule = /** @class */ (function () {
    function NewProfessorPageRoutingModule() {
    }
    NewProfessorPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewProfessorPageRoutingModule);
    return NewProfessorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctcHJvZmVzc29yLXBhZ2UvbmV3LXByb2Zlc3Nvci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL25ldy1wcm9mZXNzb3ItcGFnZS9uZXctcHJvZmVzc29yLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/teams\">Equipes</a></li>\r\n      <li><a routerLink=\"/admin/professors\">Professores</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-professor-form-admin></app-new-professor-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewProfessorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProfessorPageComponent", function() { return NewProfessorPageComponent; });
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

var NewProfessorPageComponent = /** @class */ (function () {
    function NewProfessorPageComponent() {
    }
    NewProfessorPageComponent.prototype.ngOnInit = function () {
    };
    NewProfessorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-professor-page',
            template: __webpack_require__(/*! ./new-professor-page.component.html */ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.html"),
            styles: [__webpack_require__(/*! ./new-professor-page.component.css */ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewProfessorPageComponent);
    return NewProfessorPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.module.ts ***!
  \****************************************************************************************/
/*! exports provided: NewProfessorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProfessorPageModule", function() { return NewProfessorPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_professor_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-professor-page.component */ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page.component.ts");
/* harmony import */ var _new_professor_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-professor-page-routing.module */ "./src/app/roles/admin-area/pages/new-professor-page/new-professor-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_professor_form_new_professor_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-professor-form/new-professor-form.module */ "./src/app/roles/admin-area/components/new-professor-form/new-professor-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewProfessorPageModule = /** @class */ (function () {
    function NewProfessorPageModule() {
    }
    NewProfessorPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_professor_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewProfessorPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_professor_form_new_professor_form_module__WEBPACK_IMPORTED_MODULE_7__["NewProfessorFormModule"]
            ],
            declarations: [_new_professor_page_component__WEBPACK_IMPORTED_MODULE_3__["NewProfessorPageComponent"]]
        })
    ], NewProfessorPageModule);
    return NewProfessorPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-professor-page-new-professor-page-module.js.map