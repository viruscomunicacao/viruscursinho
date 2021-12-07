(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-download-page-new-download-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-download-form/new-download-form.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-download-form/new-download-form.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1kb3dubG9hZC1mb3JtL25ldy1kb3dubG9hZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1kb3dubG9hZC1mb3JtL25ldy1kb3dubG9hZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-download-form/new-download-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-download-form/new-download-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Novo download</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewDownload\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formNewDownload.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewDownload.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Arquivo <span *ngIf=\"formNewDownload.controls.file.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"file\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Categoria <span *ngIf=\"formNewDownload.controls.idCategory.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"idCategory\">\r\n          <option *ngFor=\"let category of categories\" value=\"{{ category._key }}\">{{ category.title }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formNewDownload.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewDownload.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/downloads\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-download-form/new-download-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-download-form/new-download-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewDownloadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDownloadFormComponent", function() { return NewDownloadFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/admin-area/angular-services/download.service.ts");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/admin-area/angular-services/download-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewDownloadFormComponent = /** @class */ (function () {
    function NewDownloadFormComponent(downloadService, categoryService) {
        this.downloadService = downloadService;
        this.categoryService = categoryService;
        this.alert = { type: '', message: '', show: false };
        this.categories = [];
        this.mediaType = 'downloads';
        this.urlObjects = 'https://viruscursinho.com.br:3002/downloads';
        this.showModalSelectFile = false;
    }
    NewDownloadFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
    };
    NewDownloadFormComponent.prototype.initForm = function () {
        this.formNewDownload = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewDownloadFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewDownload.valid) {
            var data = this.formNewDownload.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.downloadService.addDownload(data).subscribe(function (response) {
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
    NewDownloadFormComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (response) {
            if (response !== undefined) {
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var category = response_1[_i];
                    if (category.status) {
                        _this.categories.push(category);
                    }
                }
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    NewDownloadFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    NewDownloadFormComponent.prototype.setUrlObject = function (link) {
        this.formNewDownload.patchValue({
            file: link
        });
        this.showModalSelectFile = false;
    };
    NewDownloadFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-download-form-admin',
            template: __webpack_require__(/*! ./new-download-form.component.html */ "./src/app/roles/admin-area/components/new-download-form/new-download-form.component.html"),
            styles: [__webpack_require__(/*! ./new-download-form.component.css */ "./src/app/roles/admin-area/components/new-download-form/new-download-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_download_service__WEBPACK_IMPORTED_MODULE_2__["DownloadService"], _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_3__["DownloadCategoryService"]])
    ], NewDownloadFormComponent);
    return NewDownloadFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-download-form/new-download-form.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-download-form/new-download-form.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewDownloadFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDownloadFormModule", function() { return NewDownloadFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_download_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-download-form.component */ "./src/app/roles/admin-area/components/new-download-form/new-download-form.component.ts");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/admin-area/angular-services/download.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewDownloadFormModule = /** @class */ (function () {
    function NewDownloadFormModule() {
    }
    NewDownloadFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _new_download_form_component__WEBPACK_IMPORTED_MODULE_5__["NewDownloadFormComponent"]
            ],
            exports: [
                _new_download_form_component__WEBPACK_IMPORTED_MODULE_5__["NewDownloadFormComponent"]
            ],
            providers: [
                _angular_services_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"]
            ]
        })
    ], NewDownloadFormModule);
    return NewDownloadFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-download-page/new-download-page-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-download-page/new-download-page-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: NewDownloadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDownloadPageRoutingModule", function() { return NewDownloadPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_download_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-download-page.component */ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_download_page_component__WEBPACK_IMPORTED_MODULE_2__["NewDownloadPageComponent"] }
];
var NewDownloadPageRoutingModule = /** @class */ (function () {
    function NewDownloadPageRoutingModule() {
    }
    NewDownloadPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewDownloadPageRoutingModule);
    return NewDownloadPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctZG93bmxvYWQtcGFnZS9uZXctZG93bmxvYWQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctZG93bmxvYWQtcGFnZS9uZXctZG93bmxvYWQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/downloads\">Downloads</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-download-form-admin></app-new-download-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewDownloadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDownloadPageComponent", function() { return NewDownloadPageComponent; });
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

var NewDownloadPageComponent = /** @class */ (function () {
    function NewDownloadPageComponent() {
    }
    NewDownloadPageComponent.prototype.ngOnInit = function () {
    };
    NewDownloadPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-download-page',
            template: __webpack_require__(/*! ./new-download-page.component.html */ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.html"),
            styles: [__webpack_require__(/*! ./new-download-page.component.css */ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewDownloadPageComponent);
    return NewDownloadPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-download-page/new-download-page.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NewDownloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDownloadPageModule", function() { return NewDownloadPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_download_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-download-page.component */ "./src/app/roles/admin-area/pages/new-download-page/new-download-page.component.ts");
/* harmony import */ var _new_download_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-download-page-routing.module */ "./src/app/roles/admin-area/pages/new-download-page/new-download-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_download_form_new_download_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-download-form/new-download-form.module */ "./src/app/roles/admin-area/components/new-download-form/new-download-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewDownloadPageModule = /** @class */ (function () {
    function NewDownloadPageModule() {
    }
    NewDownloadPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_download_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewDownloadPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_download_form_new_download_form_module__WEBPACK_IMPORTED_MODULE_7__["NewDownloadFormModule"]
            ],
            declarations: [_new_download_page_component__WEBPACK_IMPORTED_MODULE_3__["NewDownloadPageComponent"]]
        })
    ], NewDownloadPageModule);
    return NewDownloadPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-download-page-new-download-page-module.js.map