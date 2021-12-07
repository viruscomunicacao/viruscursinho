(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-team-page-new-team-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-team-form/new-team-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-team-form/new-team-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy10ZWFtLWZvcm0vbmV3LXRlYW0tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9uZXctdGVhbS1mb3JtL25ldy10ZWFtLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-team-form/new-team-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-team-form/new-team-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Nova equipe</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewTeam\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Nome <span *ngIf=\"formNewTeam.controls.name.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewTeam.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Imagem <span *ngIf=\"formNewTeam.controls.photo.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formNewTeam.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewTeam.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/teams\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-team-form/new-team-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-team-form/new-team-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NewTeamFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTeamFormComponent", function() { return NewTeamFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewTeamFormComponent = /** @class */ (function () {
    function NewTeamFormComponent(teamService) {
        this.teamService = teamService;
        this.alert = { type: '', message: '', show: false };
        this.mediaType = 'teams';
        this.urlObjects = 'https://viruscursinho.com.br:3002/teams';
        this.showModalSelectFile = false;
    }
    NewTeamFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewTeamFormComponent.prototype.initForm = function () {
        this.formNewTeam = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewTeamFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewTeam.valid) {
            var data = this.formNewTeam.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.teamService.addTeam(data).subscribe(function (response) {
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
    NewTeamFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    NewTeamFormComponent.prototype.setUrlObject = function (link) {
        this.formNewTeam.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    NewTeamFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-team-form-admin',
            template: __webpack_require__(/*! ./new-team-form.component.html */ "./src/app/roles/admin-area/components/new-team-form/new-team-form.component.html"),
            styles: [__webpack_require__(/*! ./new-team-form.component.css */ "./src/app/roles/admin-area/components/new-team-form/new-team-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], NewTeamFormComponent);
    return NewTeamFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-team-form/new-team-form.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-team-form/new-team-form.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NewTeamFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTeamFormModule", function() { return NewTeamFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_team_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-team-form.component */ "./src/app/roles/admin-area/components/new-team-form/new-team-form.component.ts");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/admin-area/angular-services/team.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewTeamFormModule = /** @class */ (function () {
    function NewTeamFormModule() {
    }
    NewTeamFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _new_team_form_component__WEBPACK_IMPORTED_MODULE_5__["NewTeamFormComponent"]
            ],
            exports: [
                _new_team_form_component__WEBPACK_IMPORTED_MODULE_5__["NewTeamFormComponent"]
            ],
            providers: [
                _angular_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]
            ]
        })
    ], NewTeamFormModule);
    return NewTeamFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-team-page/new-team-page-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-team-page/new-team-page-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NewTeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTeamPageRoutingModule", function() { return NewTeamPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_team_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-team-page.component */ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_team_page_component__WEBPACK_IMPORTED_MODULE_2__["NewTeamPageComponent"] }
];
var NewTeamPageRoutingModule = /** @class */ (function () {
    function NewTeamPageRoutingModule() {
    }
    NewTeamPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewTeamPageRoutingModule);
    return NewTeamPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctdGVhbS1wYWdlL25ldy10ZWFtLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvcGFnZXMvbmV3LXRlYW0tcGFnZS9uZXctdGVhbS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/teams\">Equipes</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-team-form-admin></app-new-team-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewTeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTeamPageComponent", function() { return NewTeamPageComponent; });
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

var NewTeamPageComponent = /** @class */ (function () {
    function NewTeamPageComponent() {
    }
    NewTeamPageComponent.prototype.ngOnInit = function () {
    };
    NewTeamPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-team-page',
            template: __webpack_require__(/*! ./new-team-page.component.html */ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.html"),
            styles: [__webpack_require__(/*! ./new-team-page.component.css */ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewTeamPageComponent);
    return NewTeamPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-team-page/new-team-page.module.ts ***!
  \******************************************************************************/
/*! exports provided: NewTeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTeamPageModule", function() { return NewTeamPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_team_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-team-page.component */ "./src/app/roles/admin-area/pages/new-team-page/new-team-page.component.ts");
/* harmony import */ var _new_team_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-team-page-routing.module */ "./src/app/roles/admin-area/pages/new-team-page/new-team-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_team_form_new_team_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-team-form/new-team-form.module */ "./src/app/roles/admin-area/components/new-team-form/new-team-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewTeamPageModule = /** @class */ (function () {
    function NewTeamPageModule() {
    }
    NewTeamPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_team_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewTeamPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_team_form_new_team_form_module__WEBPACK_IMPORTED_MODULE_7__["NewTeamFormModule"]
            ],
            declarations: [_new_team_page_component__WEBPACK_IMPORTED_MODULE_3__["NewTeamPageComponent"]]
        })
    ], NewTeamPageModule);
    return NewTeamPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-team-page-new-team-page-module.js.map