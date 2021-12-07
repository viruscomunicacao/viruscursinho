(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-download-category-page-edit-download-category-page-module"],{

/***/ "./src/app/roles/admin-area/classes/download-category.ts":
/*!***************************************************************!*\
  !*** ./src/app/roles/admin-area/classes/download-category.ts ***!
  \***************************************************************/
/*! exports provided: DownloadCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCategory", function() { return DownloadCategory; });
var DownloadCategory = /** @class */ (function () {
    function DownloadCategory() {
    }
    return DownloadCategory;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtZG93bmxvYWQtY2F0ZWdvcnktZm9ybS9lZGl0LWRvd25sb2FkLWNhdGVnb3J5LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvZWRpdC1kb3dubG9hZC1jYXRlZ29yeS1mb3JtL2VkaXQtZG93bmxvYWQtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar categoria de download</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditCategory\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formEditCategory.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formEditCategory.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditCategory.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/downloads/categories\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditDownloadCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadCategoryFormComponent", function() { return EditDownloadCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/admin-area/angular-services/download-category.service.ts");
/* harmony import */ var _classes_download_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/download-category */ "./src/app/roles/admin-area/classes/download-category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditDownloadCategoryFormComponent = /** @class */ (function () {
    function EditDownloadCategoryFormComponent(downloadCategoryService, route) {
        this.downloadCategoryService = downloadCategoryService;
        this.route = route;
        this.categoryTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.category = new _classes_download_category__WEBPACK_IMPORTED_MODULE_4__["DownloadCategory"]();
        this.alert = { type: '', message: '', show: false };
    }
    EditDownloadCategoryFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategory();
    };
    EditDownloadCategoryFormComponent.prototype.initForm = function () {
        this.formEditCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditDownloadCategoryFormComponent.prototype.getCategory = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.downloadCategoryService.getCategory(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.category = response;
                _this.categoryTitle.emit(_this.category.title);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditDownloadCategoryFormComponent.prototype.loadForm = function () {
        this.formEditCategory.patchValue({
            title: this.category.title,
            status: this.category.status + ''
        });
    };
    EditDownloadCategoryFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditCategory.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditCategory.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.downloadCategoryService.updateCategory(key, data).subscribe(function (response) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditDownloadCategoryFormComponent.prototype, "categoryTitle", void 0);
    EditDownloadCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-download-category-form-admin',
            template: __webpack_require__(/*! ./edit-download-category-form.component.html */ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-download-category-form.component.css */ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_3__["DownloadCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditDownloadCategoryFormComponent);
    return EditDownloadCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditDownloadCategoryFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadCategoryFormModule", function() { return EditDownloadCategoryFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_download_category_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-download-category-form.component */ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.component.ts");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/admin-area/angular-services/download-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditDownloadCategoryFormModule = /** @class */ (function () {
    function EditDownloadCategoryFormModule() {
    }
    EditDownloadCategoryFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _edit_download_category_form_component__WEBPACK_IMPORTED_MODULE_4__["EditDownloadCategoryFormComponent"]
            ],
            exports: [
                _edit_download_category_form_component__WEBPACK_IMPORTED_MODULE_4__["EditDownloadCategoryFormComponent"]
            ],
            providers: [
                _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_5__["DownloadCategoryService"]
            ]
        })
    ], EditDownloadCategoryFormModule);
    return EditDownloadCategoryFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page-routing.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditDownloadCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadCategoryPageRoutingModule", function() { return EditDownloadCategoryPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_download_category_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-download-category-page.component */ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_download_category_page_component__WEBPACK_IMPORTED_MODULE_2__["EditDownloadCategoryPageComponent"] }
];
var EditDownloadCategoryPageRoutingModule = /** @class */ (function () {
    function EditDownloadCategoryPageRoutingModule() {
    }
    EditDownloadCategoryPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditDownloadCategoryPageRoutingModule);
    return EditDownloadCategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWRvd25sb2FkLWNhdGVnb3J5LXBhZ2UvZWRpdC1kb3dubG9hZC1jYXRlZ29yeS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2VkaXQtZG93bmxvYWQtY2F0ZWdvcnktcGFnZS9lZGl0LWRvd25sb2FkLWNhdGVnb3J5LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/downloads\">Downloads</a></li>\r\n      <li><a routerLink=\"/admin/downloads/categories\">Categorias</a></li>\r\n      <li class=\"active\">{{ categoryTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-download-category-form-admin (categoryTitle)=\"setCategoryTitle($event)\"></app-edit-download-category-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EditDownloadCategoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadCategoryPageComponent", function() { return EditDownloadCategoryPageComponent; });
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

var EditDownloadCategoryPageComponent = /** @class */ (function () {
    function EditDownloadCategoryPageComponent() {
        this.categoryTitle = '';
    }
    EditDownloadCategoryPageComponent.prototype.ngOnInit = function () {
    };
    EditDownloadCategoryPageComponent.prototype.setCategoryTitle = function (title) {
        this.categoryTitle = title;
    };
    EditDownloadCategoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-download-category-page',
            template: __webpack_require__(/*! ./edit-download-category-page.component.html */ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-download-category-page.component.css */ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditDownloadCategoryPageComponent);
    return EditDownloadCategoryPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditDownloadCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDownloadCategoryPageModule", function() { return EditDownloadCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_download_category_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-download-category-page.component */ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page.component.ts");
/* harmony import */ var _edit_download_category_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-download-category-page-routing.module */ "./src/app/roles/admin-area/pages/edit-download-category-page/edit-download-category-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_download_category_form_edit_download_category_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-download-category-form/edit-download-category-form.module */ "./src/app/roles/admin-area/components/edit-download-category-form/edit-download-category-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditDownloadCategoryPageModule = /** @class */ (function () {
    function EditDownloadCategoryPageModule() {
    }
    EditDownloadCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_download_category_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditDownloadCategoryPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_download_category_form_edit_download_category_form_module__WEBPACK_IMPORTED_MODULE_7__["EditDownloadCategoryFormModule"]
            ],
            declarations: [_edit_download_category_page_component__WEBPACK_IMPORTED_MODULE_3__["EditDownloadCategoryPageComponent"]]
        })
    ], EditDownloadCategoryPageModule);
    return EditDownloadCategoryPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-download-category-page-edit-download-category-page-module.js.map