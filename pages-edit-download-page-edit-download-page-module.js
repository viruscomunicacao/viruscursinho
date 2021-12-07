(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-download-page-edit-download-page-module"],{

/***/ "./src/app/roles/admin-area/classes/download.ts":
/*!******************************************************!*\
  !*** ./src/app/roles/admin-area/classes/download.ts ***!
  \******************************************************/
/*! exports provided: Download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
var Download = /** @class */ (function () {
    function Download() {
    }
    return Download;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n\r\n.thumbnail-custom {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtZG93bmxvYWQtZm9ybS9lZGl0LWRvd25sb2FkLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvZWRpdC1kb3dubG9hZC1mb3JtL2VkaXQtZG93bmxvYWQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLnRodW1ibmFpbC1jdXN0b20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar download</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditDownload\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <a href=\"{{ download.file }}\" target=\"_blank\"><img src=\"../../../../../assets/img/icons/download.png\" class=\"thumbnail thumbnail-custom\"></a>\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Título <span *ngIf=\"formEditDownload.controls.title.invalid\">*</span></label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Status <span *ngIf=\"formEditDownload.controls.status.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"true\">Ativo</option>\r\n              <option value=\"false\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Arquivo</label>\r\n            <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"file\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Categoria <span *ngIf=\"formEditDownload.controls.idCategory.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"idCategory\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{ category._key }}\">{{ category.title }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formEditDownload.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditDownload.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/downloads\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditDownloadFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadFormComponent", function() { return EditDownloadFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/admin-area/angular-services/download.service.ts");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/admin-area/angular-services/download-category.service.ts");
/* harmony import */ var _classes_download__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/download */ "./src/app/roles/admin-area/classes/download.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDownloadFormComponent = /** @class */ (function () {
    function EditDownloadFormComponent(downloadService, categoryService, route) {
        this.downloadService = downloadService;
        this.categoryService = categoryService;
        this.route = route;
        this.downloadTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = { type: '', message: '', show: false };
        this.categories = [];
        this.download = new _classes_download__WEBPACK_IMPORTED_MODULE_5__["Download"]();
        this.mediaType = 'downloads';
        this.urlObjects = 'https://viruscursinho.com.br:3002/downloads';
        this.showModalSelectFile = false;
    }
    EditDownloadFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
        this.getDownload();
    };
    EditDownloadFormComponent.prototype.initForm = function () {
        this.formEditDownload = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditDownloadFormComponent.prototype.getDownload = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.downloadService.getDownload(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.download = response.download;
                _this.download.idCategory = response.category._key;
                _this.downloadTitle.emit(_this.download.title);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditDownloadFormComponent.prototype.loadForm = function () {
        this.formEditDownload.patchValue({
            title: this.download.title,
            description: this.download.description,
            idCategory: this.download.idCategory,
            status: this.download.status + '',
            file: this.download.file
        });
    };
    EditDownloadFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditDownload.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditDownload.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.downloadService.updateDownload(key, data).subscribe(function (response) {
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
    EditDownloadFormComponent.prototype.getCategories = function () {
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
    EditDownloadFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    EditDownloadFormComponent.prototype.setUrlObject = function (link) {
        this.formEditDownload.patchValue({
            file: link
        });
        this.showModalSelectFile = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditDownloadFormComponent.prototype, "downloadTitle", void 0);
    EditDownloadFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-download-form-admin',
            template: __webpack_require__(/*! ./edit-download-form.component.html */ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-download-form.component.css */ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"], _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_4__["DownloadCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditDownloadFormComponent);
    return EditDownloadFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-form/edit-download-form.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditDownloadFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadFormModule", function() { return EditDownloadFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_download_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-download-form.component */ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.component.ts");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/admin-area/angular-services/download.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditDownloadFormModule = /** @class */ (function () {
    function EditDownloadFormModule() {
    }
    EditDownloadFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _edit_download_form_component__WEBPACK_IMPORTED_MODULE_5__["EditDownloadFormComponent"]
            ],
            exports: [
                _edit_download_form_component__WEBPACK_IMPORTED_MODULE_5__["EditDownloadFormComponent"]
            ],
            providers: [
                _angular_services_download_service__WEBPACK_IMPORTED_MODULE_6__["DownloadService"]
            ]
        })
    ], EditDownloadFormModule);
    return EditDownloadFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-page/edit-download-page-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EditDownloadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadPageRoutingModule", function() { return EditDownloadPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_download_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-download-page.component */ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_download_page_component__WEBPACK_IMPORTED_MODULE_2__["EditDownloadPageComponent"] }
];
var EditDownloadPageRoutingModule = /** @class */ (function () {
    function EditDownloadPageRoutingModule() {
    }
    EditDownloadPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditDownloadPageRoutingModule);
    return EditDownloadPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWRvd25sb2FkLXBhZ2UvZWRpdC1kb3dubG9hZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2VkaXQtZG93bmxvYWQtcGFnZS9lZGl0LWRvd25sb2FkLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/downloads\">Downloads</a></li>\r\n      <li class=\"active\">{{ downloadTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-download-form-admin (downloadTitle)=\"setDownloadTitle($event)\"></app-edit-download-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditDownloadPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadPageComponent", function() { return EditDownloadPageComponent; });
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

var EditDownloadPageComponent = /** @class */ (function () {
    function EditDownloadPageComponent() {
        this.downloadTitle = '';
    }
    EditDownloadPageComponent.prototype.ngOnInit = function () {
    };
    EditDownloadPageComponent.prototype.setDownloadTitle = function (title) {
        this.downloadTitle = title;
    };
    EditDownloadPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-download-page',
            template: __webpack_require__(/*! ./edit-download-page.component.html */ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-download-page.component.css */ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditDownloadPageComponent);
    return EditDownloadPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EditDownloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadPageModule", function() { return EditDownloadPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_download_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-download-page.component */ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page.component.ts");
/* harmony import */ var _edit_download_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-download-page-routing.module */ "./src/app/roles/admin-area/pages/edit-download-page/edit-download-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_download_form_edit_download_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-download-form/edit-download-form.module */ "./src/app/roles/admin-area/components/edit-download-form/edit-download-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditDownloadPageModule = /** @class */ (function () {
    function EditDownloadPageModule() {
    }
    EditDownloadPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_download_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditDownloadPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_download_form_edit_download_form_module__WEBPACK_IMPORTED_MODULE_7__["EditDownloadFormModule"]
            ],
            declarations: [_edit_download_page_component__WEBPACK_IMPORTED_MODULE_3__["EditDownloadPageComponent"]]
        })
    ], EditDownloadPageModule);
    return EditDownloadPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-download-page-edit-download-page-module.js.map