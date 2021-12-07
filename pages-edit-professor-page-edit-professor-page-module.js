(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-professor-page-edit-professor-page-module"],{

/***/ "./src/app/roles/admin-area/classes/professor.ts":
/*!*******************************************************!*\
  !*** ./src/app/roles/admin-area/classes/professor.ts ***!
  \*******************************************************/
/*! exports provided: Professor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Professor", function() { return Professor; });
var Professor = /** @class */ (function () {
    function Professor() {
    }
    return Professor;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtcHJvZmVzc29yLWZvcm0vZWRpdC1wcm9mZXNzb3ItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9lZGl0LXByb2Zlc3Nvci1mb3JtL2VkaXQtcHJvZmVzc29yLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar professor</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditProfessor\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Nome <span *ngIf=\"formEditProfessor.controls.name.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formEditProfessor.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <div class=\"form-group\">\r\n        <label>Equipe <span *ngIf=\"formEditProfessor.controls.idTeam.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"idTeam\">\r\n          <option *ngFor=\"let team of teams\" value=\"{{ team._key }}\">{{ team.name }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formEditProfessor.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditProfessor.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/professors\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditProfessorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfessorFormComponent", function() { return EditProfessorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/professor.service */ "./src/app/roles/admin-area/angular-services/professor.service.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
/* harmony import */ var _classes_professor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/professor */ "./src/app/roles/admin-area/classes/professor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditProfessorFormComponent = /** @class */ (function () {
    function EditProfessorFormComponent(professorService, teamService, route) {
        this.professorService = professorService;
        this.teamService = teamService;
        this.route = route;
        this.professorName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.teams = [];
        this.alert = { type: '', message: '', show: false };
        this.professor = new _classes_professor__WEBPACK_IMPORTED_MODULE_5__["Professor"]();
    }
    EditProfessorFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getProfessor();
        this.getTeams();
    };
    EditProfessorFormComponent.prototype.initForm = function () {
        this.formEditProfessor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            idTeam: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditProfessorFormComponent.prototype.loadForm = function () {
        this.formEditProfessor.patchValue({
            name: this.professor.name,
            description: this.professor.description,
            idTeam: this.professor.idTeam,
            status: this.professor.status
        });
    };
    EditProfessorFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditProfessor.valid) {
            var data = this.formEditProfessor.value;
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
    EditProfessorFormComponent.prototype.getTeams = function () {
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
    EditProfessorFormComponent.prototype.getProfessor = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.professorService.getProfessor(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.professor = response.professor;
                _this.professor.idTeam = response.team._key;
                _this.professorName.emit(_this.professor.name);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditProfessorFormComponent.prototype, "professorName", void 0);
    EditProfessorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-professor-form-admin',
            template: __webpack_require__(/*! ./edit-professor-form.component.html */ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-professor-form.component.css */ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_professor_service__WEBPACK_IMPORTED_MODULE_3__["ProfessorService"], _angular_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditProfessorFormComponent);
    return EditProfessorFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditProfessorFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfessorFormModule", function() { return EditProfessorFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_professor_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-professor-form.component */ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.component.ts");
/* harmony import */ var _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/professor.service */ "./src/app/roles/admin-area/angular-services/professor.service.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditProfessorFormModule = /** @class */ (function () {
    function EditProfessorFormModule() {
    }
    EditProfessorFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"]
            ],
            declarations: [
                _edit_professor_form_component__WEBPACK_IMPORTED_MODULE_5__["EditProfessorFormComponent"]
            ],
            exports: [
                _edit_professor_form_component__WEBPACK_IMPORTED_MODULE_5__["EditProfessorFormComponent"]
            ],
            providers: [
                _angular_services_professor_service__WEBPACK_IMPORTED_MODULE_6__["ProfessorService"],
                _angular_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"]
            ]
        })
    ], EditProfessorFormModule);
    return EditProfessorFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditProfessorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfessorPageRoutingModule", function() { return EditProfessorPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_professor_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-professor-page.component */ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_professor_page_component__WEBPACK_IMPORTED_MODULE_2__["EditProfessorPageComponent"] }
];
var EditProfessorPageRoutingModule = /** @class */ (function () {
    function EditProfessorPageRoutingModule() {
    }
    EditProfessorPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditProfessorPageRoutingModule);
    return EditProfessorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LXByb2Zlc3Nvci1wYWdlL2VkaXQtcHJvZmVzc29yLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvcGFnZXMvZWRpdC1wcm9mZXNzb3ItcGFnZS9lZGl0LXByb2Zlc3Nvci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/teams\">Equipes</a></li>\r\n      <li><a routerLink=\"/admin/professors\">Professores</a></li>\r\n      <li class=\"active\">{{ professorName }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-professor-form-admin (professorName)=\"setProfessorName($event)\"></app-edit-professor-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditProfessorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfessorPageComponent", function() { return EditProfessorPageComponent; });
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

var EditProfessorPageComponent = /** @class */ (function () {
    function EditProfessorPageComponent() {
        this.professorName = '';
    }
    EditProfessorPageComponent.prototype.ngOnInit = function () {
    };
    EditProfessorPageComponent.prototype.setProfessorName = function (name) {
        this.professorName = name;
    };
    EditProfessorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-professor-page',
            template: __webpack_require__(/*! ./edit-professor-page.component.html */ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-professor-page.component.css */ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProfessorPageComponent);
    return EditProfessorPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EditProfessorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfessorPageModule", function() { return EditProfessorPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_professor_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-professor-page.component */ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page.component.ts");
/* harmony import */ var _edit_professor_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-professor-page-routing.module */ "./src/app/roles/admin-area/pages/edit-professor-page/edit-professor-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_professor_form_edit_professor_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-professor-form/edit-professor-form.module */ "./src/app/roles/admin-area/components/edit-professor-form/edit-professor-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditProfessorPageModule = /** @class */ (function () {
    function EditProfessorPageModule() {
    }
    EditProfessorPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_professor_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditProfessorPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_professor_form_edit_professor_form_module__WEBPACK_IMPORTED_MODULE_7__["EditProfessorFormModule"]
            ],
            declarations: [_edit_professor_page_component__WEBPACK_IMPORTED_MODULE_3__["EditProfessorPageComponent"]]
        })
    ], EditProfessorPageModule);
    return EditProfessorPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-professor-page-edit-professor-page-module.js.map