(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-banner-page-new-banner-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1iYW5uZXItZm9ybS9uZXctYmFubmVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvbmV3LWJhbm5lci1mb3JtL25ldy1iYW5uZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Novo banner</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewBanner\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formNewBanner.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewBanner.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Imagem <span *ngIf=\"formNewBanner.controls.photo.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Link <span *ngIf=\"formNewBanner.controls.url.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"url\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formNewBanner.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewBanner.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/banners\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NewBannerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBannerFormComponent", function() { return NewBannerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/banner.service */ "./src/app/roles/admin-area/angular-services/banner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewBannerFormComponent = /** @class */ (function () {
    function NewBannerFormComponent(bannerService) {
        this.bannerService = bannerService;
        this.mediaType = 'banners';
        this.alert = { type: '', message: '', show: false };
        this.urlObjects = 'https://viruscursinho.com.br:3002/banners';
        this.showModalSelectFile = false;
        this.tabIndex = 1;
        this.objects = [];
        this.sizePage = 8;
        this.pageSelected = 0;
        this.pages = [];
    }
    NewBannerFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewBannerFormComponent.prototype.initForm = function () {
        this.formNewBanner = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewBannerFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewBanner.valid) {
            var data = this.formNewBanner.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.bannerService.addBanner(data).subscribe(function (response) {
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
    NewBannerFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    NewBannerFormComponent.prototype.setUrlObject = function (link) {
        this.formNewBanner.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    NewBannerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-banner-form-admin',
            template: __webpack_require__(/*! ./new-banner-form.component.html */ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.html"),
            styles: [__webpack_require__(/*! ./new-banner-form.component.css */ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_banner_service__WEBPACK_IMPORTED_MODULE_2__["BannerService"]])
    ], NewBannerFormComponent);
    return NewBannerFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-banner-form/new-banner-form.module.ts ***!
  \***************************************************************************************/
/*! exports provided: NewBannerFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBannerFormModule", function() { return NewBannerFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_banner_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-banner-form.component */ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.component.ts");
/* harmony import */ var _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/banner.service */ "./src/app/roles/admin-area/angular-services/banner.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewBannerFormModule = /** @class */ (function () {
    function NewBannerFormModule() {
    }
    NewBannerFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _new_banner_form_component__WEBPACK_IMPORTED_MODULE_5__["NewBannerFormComponent"]
            ],
            exports: [
                _new_banner_form_component__WEBPACK_IMPORTED_MODULE_5__["NewBannerFormComponent"]
            ],
            providers: [
                _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_6__["BannerService"]
            ]
        })
    ], NewBannerFormModule);
    return NewBannerFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-banner-page/new-banner-page-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: NewBannerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBannerPageRoutingModule", function() { return NewBannerPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_banner_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-banner-page.component */ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_banner_page_component__WEBPACK_IMPORTED_MODULE_2__["NewBannerPageComponent"] }
];
var NewBannerPageRoutingModule = /** @class */ (function () {
    function NewBannerPageRoutingModule() {
    }
    NewBannerPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewBannerPageRoutingModule);
    return NewBannerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctYmFubmVyLXBhZ2UvbmV3LWJhbm5lci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL25ldy1iYW5uZXItcGFnZS9uZXctYmFubmVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/banners\">Banners</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-banner-form-admin></app-new-banner-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NewBannerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBannerPageComponent", function() { return NewBannerPageComponent; });
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

var NewBannerPageComponent = /** @class */ (function () {
    function NewBannerPageComponent() {
    }
    NewBannerPageComponent.prototype.ngOnInit = function () {
    };
    NewBannerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-banner-page',
            template: __webpack_require__(/*! ./new-banner-page.component.html */ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.html"),
            styles: [__webpack_require__(/*! ./new-banner-page.component.css */ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewBannerPageComponent);
    return NewBannerPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NewBannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBannerPageModule", function() { return NewBannerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_banner_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-banner-page.component */ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page.component.ts");
/* harmony import */ var _new_banner_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-banner-page-routing.module */ "./src/app/roles/admin-area/pages/new-banner-page/new-banner-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_banner_form_new_banner_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-banner-form/new-banner-form.module */ "./src/app/roles/admin-area/components/new-banner-form/new-banner-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewBannerPageModule = /** @class */ (function () {
    function NewBannerPageModule() {
    }
    NewBannerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_banner_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewBannerPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_banner_form_new_banner_form_module__WEBPACK_IMPORTED_MODULE_7__["NewBannerFormModule"]
            ],
            declarations: [_new_banner_page_component__WEBPACK_IMPORTED_MODULE_3__["NewBannerPageComponent"]]
        })
    ], NewBannerPageModule);
    return NewBannerPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-banner-page-new-banner-page-module.js.map