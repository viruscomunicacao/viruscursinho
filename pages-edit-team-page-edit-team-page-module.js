(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-team-page-edit-team-page-module"],{

/***/ "./src/app/roles/admin-area/classes/team.ts":
/*!**************************************************!*\
  !*** ./src/app/roles/admin-area/classes/team.ts ***!
  \**************************************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team() {
    }
    return Team;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n\r\n.thumbnail-custom {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtdGVhbS1mb3JtL2VkaXQtdGVhbS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtdGVhbS1mb3JtL2VkaXQtdGVhbS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsLWN1c3RvbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar equipe</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditTeam\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <img src=\"{{ team.photo }}\" class=\"thumbnail thumbnail-custom\">\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Nome <span *ngIf=\"formEditTeam.controls.name.invalid\">*</span></label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Status <span *ngIf=\"formEditTeam.controls.status.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"true\">Ativo</option>\r\n              <option value=\"false\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Imagem</label>\r\n            <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formEditTeam.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditTeam.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/teams\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditTeamFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamFormComponent", function() { return EditTeamFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
/* harmony import */ var _classes_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/team */ "./src/app/roles/admin-area/classes/team.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTeamFormComponent = /** @class */ (function () {
    function EditTeamFormComponent(teamService, route) {
        this.teamService = teamService;
        this.route = route;
        this.teamName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = { type: '', message: '', show: false };
        this.team = new _classes_team__WEBPACK_IMPORTED_MODULE_4__["Team"]();
        this.mediaType = 'teams';
        this.urlObjects = 'https://viruscursinho.com.br:3002/teams';
        this.showModalSelectFile = false;
    }
    EditTeamFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getTeam();
    };
    EditTeamFormComponent.prototype.initForm = function () {
        this.formEditTeam = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditTeamFormComponent.prototype.getTeam = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.teamService.getTeam(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.team = response.team;
                _this.teamName.emit(_this.team.name);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditTeamFormComponent.prototype.loadForm = function () {
        this.formEditTeam.patchValue({
            name: this.team.name,
            description: this.team.description,
            status: this.team.status,
            photo: this.team.photo
        });
    };
    EditTeamFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditTeam.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditTeam.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.teamService.updateTeam(key, data).subscribe(function (response) {
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
    EditTeamFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    EditTeamFormComponent.prototype.setUrlObject = function (link) {
        this.formEditTeam.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditTeamFormComponent.prototype, "teamName", void 0);
    EditTeamFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-team-form-admin',
            template: __webpack_require__(/*! ./edit-team-form.component.html */ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-team-form.component.css */ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditTeamFormComponent);
    return EditTeamFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-team-form/edit-team-form.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EditTeamFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamFormModule", function() { return EditTeamFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_team_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-team-form.component */ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.component.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditTeamFormModule = /** @class */ (function () {
    function EditTeamFormModule() {
    }
    EditTeamFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _edit_team_form_component__WEBPACK_IMPORTED_MODULE_5__["EditTeamFormComponent"]
            ],
            exports: [
                _edit_team_form_component__WEBPACK_IMPORTED_MODULE_5__["EditTeamFormComponent"]
            ],
            providers: [
                _angular_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]
            ]
        })
    ], EditTeamFormModule);
    return EditTeamFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-team-page/edit-team-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EditTeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPageRoutingModule", function() { return EditTeamPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_team_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-team-page.component */ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_team_page_component__WEBPACK_IMPORTED_MODULE_2__["EditTeamPageComponent"] }
];
var EditTeamPageRoutingModule = /** @class */ (function () {
    function EditTeamPageRoutingModule() {
    }
    EditTeamPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditTeamPageRoutingModule);
    return EditTeamPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LXRlYW0tcGFnZS9lZGl0LXRlYW0tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LXRlYW0tcGFnZS9lZGl0LXRlYW0tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/teams\">Equipes</a></li>\r\n      <li class=\"active\">{{ teamName }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-team-form-admin (teamName)=\"setTeamName($event)\"></app-edit-team-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditTeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPageComponent", function() { return EditTeamPageComponent; });
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

var EditTeamPageComponent = /** @class */ (function () {
    function EditTeamPageComponent() {
        this.teamName = '';
    }
    EditTeamPageComponent.prototype.ngOnInit = function () {
    };
    EditTeamPageComponent.prototype.setTeamName = function (name) {
        this.teamName = name;
    };
    EditTeamPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-team-page',
            template: __webpack_require__(/*! ./edit-team-page.component.html */ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-team-page.component.css */ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditTeamPageComponent);
    return EditTeamPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: EditTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPageModule", function() { return EditTeamPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_team_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-team-page.component */ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page.component.ts");
/* harmony import */ var _edit_team_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-team-page-routing.module */ "./src/app/roles/admin-area/pages/edit-team-page/edit-team-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_team_form_edit_team_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-team-form/edit-team-form.module */ "./src/app/roles/admin-area/components/edit-team-form/edit-team-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditTeamPageModule = /** @class */ (function () {
    function EditTeamPageModule() {
    }
    EditTeamPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_team_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditTeamPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_team_form_edit_team_form_module__WEBPACK_IMPORTED_MODULE_7__["EditTeamFormModule"]
            ],
            declarations: [_edit_team_page_component__WEBPACK_IMPORTED_MODULE_3__["EditTeamPageComponent"]]
        })
    ], EditTeamPageModule);
    return EditTeamPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-team-page-edit-team-page-module.js.map