(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-news-page-new-news-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-news-form/new-news-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-news-form/new-news-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1uZXdzLWZvcm0vbmV3LW5ld3MtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9uZXctbmV3cy1mb3JtL25ldy1uZXdzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-news-form/new-news-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-news-form/new-news-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Nova notícia</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewNews\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formNewNews.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewNews.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Imagem <span *ngIf=\"formNewNews.controls.photo.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Categoria <span *ngIf=\"formNewNews.controls.idCategory.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"idCategory\">\r\n          <option *ngFor=\"let category of categories\" value=\"{{ category._key }}\">{{ category.title }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Conteúdo <span *ngIf=\"formNewNews.controls.content.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"content\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewNews.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/news\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-news-form/new-news-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-news-form/new-news-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NewNewsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNewsFormComponent", function() { return NewNewsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/admin-area/angular-services/new.service.ts");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/admin-area/angular-services/new-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewNewsFormComponent = /** @class */ (function () {
    function NewNewsFormComponent(newService, categoryService) {
        this.newService = newService;
        this.categoryService = categoryService;
        this.alert = { type: '', message: '', show: false };
        this.categories = [];
        this.mediaType = 'news';
        this.urlObjects = 'https://viruscursinho.com.br:3002/news';
        this.showModalSelectFile = false;
    }
    NewNewsFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
    };
    NewNewsFormComponent.prototype.initForm = function () {
        this.formNewNews = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewNewsFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewNews.valid) {
            var data = this.formNewNews.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.newService.addNew(data).subscribe(function (response) {
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
    NewNewsFormComponent.prototype.getCategories = function () {
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
    NewNewsFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    NewNewsFormComponent.prototype.setUrlObject = function (link) {
        this.formNewNews.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    NewNewsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-news-form-admin',
            template: __webpack_require__(/*! ./new-news-form.component.html */ "./src/app/roles/admin-area/components/new-news-form/new-news-form.component.html"),
            styles: [__webpack_require__(/*! ./new-news-form.component.css */ "./src/app/roles/admin-area/components/new-news-form/new-news-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_new_service__WEBPACK_IMPORTED_MODULE_2__["NewService"], _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_3__["NewCategoryService"]])
    ], NewNewsFormComponent);
    return NewNewsFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-news-form/new-news-form.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-news-form/new-news-form.module.ts ***!
  \***********************************************************************************/
/*! exports provided: NewNewsFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNewsFormModule", function() { return NewNewsFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_news_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-news-form.component */ "./src/app/roles/admin-area/components/new-news-form/new-news-form.component.ts");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/admin-area/angular-services/new.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewNewsFormModule = /** @class */ (function () {
    function NewNewsFormModule() {
    }
    NewNewsFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _new_news_form_component__WEBPACK_IMPORTED_MODULE_5__["NewNewsFormComponent"]
            ],
            exports: [
                _new_news_form_component__WEBPACK_IMPORTED_MODULE_5__["NewNewsFormComponent"]
            ],
            providers: [
                _angular_services_new_service__WEBPACK_IMPORTED_MODULE_6__["NewService"]
            ]
        })
    ], NewNewsFormModule);
    return NewNewsFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-news-page/new-news-page-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-news-page/new-news-page-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NewNewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNewsPageRoutingModule", function() { return NewNewsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_news_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-news-page.component */ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_news_page_component__WEBPACK_IMPORTED_MODULE_2__["NewNewsPageComponent"] }
];
var NewNewsPageRoutingModule = /** @class */ (function () {
    function NewNewsPageRoutingModule() {
    }
    NewNewsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewNewsPageRoutingModule);
    return NewNewsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctbmV3cy1wYWdlL25ldy1uZXdzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvcGFnZXMvbmV3LW5ld3MtcGFnZS9uZXctbmV3cy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/news\">Notícias</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-news-form-admin></app-new-news-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewNewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNewsPageComponent", function() { return NewNewsPageComponent; });
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

var NewNewsPageComponent = /** @class */ (function () {
    function NewNewsPageComponent() {
    }
    NewNewsPageComponent.prototype.ngOnInit = function () {
    };
    NewNewsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-news-page',
            template: __webpack_require__(/*! ./new-news-page.component.html */ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.html"),
            styles: [__webpack_require__(/*! ./new-news-page.component.css */ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewNewsPageComponent);
    return NewNewsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-news-page/new-news-page.module.ts ***!
  \******************************************************************************/
/*! exports provided: NewNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNewsPageModule", function() { return NewNewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_news_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-news-page.component */ "./src/app/roles/admin-area/pages/new-news-page/new-news-page.component.ts");
/* harmony import */ var _new_news_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-news-page-routing.module */ "./src/app/roles/admin-area/pages/new-news-page/new-news-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_news_form_new_news_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-news-form/new-news-form.module */ "./src/app/roles/admin-area/components/new-news-form/new-news-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewNewsPageModule = /** @class */ (function () {
    function NewNewsPageModule() {
    }
    NewNewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_news_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewNewsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_news_form_new_news_form_module__WEBPACK_IMPORTED_MODULE_7__["NewNewsFormModule"]
            ],
            declarations: [_new_news_page_component__WEBPACK_IMPORTED_MODULE_3__["NewNewsPageComponent"]]
        })
    ], NewNewsPageModule);
    return NewNewsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-news-page-new-news-page-module.js.map