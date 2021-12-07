(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-download-categories-page-download-categories-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn-group > button, a {\r\n    margin-right: 7px;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtZG93bmxvYWQtY2F0ZWdvcmllcy9saXN0LWRvd25sb2FkLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtZG93bmxvYWQtY2F0ZWdvcmllcy9saXN0LWRvd25sb2FkLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uLCBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Categorias de download</h1>\r\n  <p>As categorias de downloads disponíveis do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <div class=\"btn-group\">\r\n    <a routerLink=\"/admin/downloads\" class=\"btn btn-md btn-default\">Downloads</a>\r\n    <a routerLink=\"/admin/downloads/categories/new\" class=\"btn btn-md btn-default\">Nova categoria</a>\r\n  </div>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Título</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{ category.title }}</td>\r\n        <td>\r\n          <span *ngIf=\"category.status\">Ativo</span>\r\n          <span *ngIf=\"!category.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/downloads/categories/{{ category._key }}\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeCategory(category)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"categories.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhuma categoria de download cadastrada</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ListDownloadCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDownloadCategoriesComponent", function() { return ListDownloadCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/admin-area/angular-services/download-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListDownloadCategoriesComponent = /** @class */ (function () {
    function ListDownloadCategoriesComponent(courseCategoryService) {
        this.courseCategoryService = courseCategoryService;
        this.categories = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListDownloadCategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    ListDownloadCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.courseCategoryService.getCategories().subscribe(function (response) {
            if (response !== undefined) {
                _this.categories = response;
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao carregar os dados!';
                _this.alert.show = true;
            }
        });
    };
    ListDownloadCategoriesComponent.prototype.removeCategory = function (category) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.categories = this.categories.filter(function (c) { return c !== category; });
            this.courseCategoryService.removeCategory(category._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Categoria excluída com sucesso!';
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
    ListDownloadCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-download-categories-admin',
            template: __webpack_require__(/*! ./list-download-categories.component.html */ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.html"),
            styles: [__webpack_require__(/*! ./list-download-categories.component.css */ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_1__["DownloadCategoryService"]])
    ], ListDownloadCategoriesComponent);
    return ListDownloadCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-download-categories/list-download-categories.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ListDownloadCategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDownloadCategoriesModule", function() { return ListDownloadCategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_download_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-download-categories.component */ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.component.ts");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/admin-area/angular-services/download-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListDownloadCategoriesModule = /** @class */ (function () {
    function ListDownloadCategoriesModule() {
    }
    ListDownloadCategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_download_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListDownloadCategoriesComponent"]
            ],
            exports: [
                _list_download_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListDownloadCategoriesComponent"]
            ],
            providers: [
                _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_4__["DownloadCategoryService"]
            ]
        })
    ], ListDownloadCategoriesModule);
    return ListDownloadCategoriesModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/download-categories-page/download-categories-page-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: DownloadCategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCategoriesPageRoutingModule", function() { return DownloadCategoriesPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _download_categories_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-categories-page.component */ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _download_categories_page_component__WEBPACK_IMPORTED_MODULE_2__["DownloadCategoriesPageComponent"] }
];
var DownloadCategoriesPageRoutingModule = /** @class */ (function () {
    function DownloadCategoriesPageRoutingModule() {
    }
    DownloadCategoriesPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DownloadCategoriesPageRoutingModule);
    return DownloadCategoriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9kb3dubG9hZC1jYXRlZ29yaWVzLXBhZ2UvZG93bmxvYWQtY2F0ZWdvcmllcy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2Rvd25sb2FkLWNhdGVnb3JpZXMtcGFnZS9kb3dubG9hZC1jYXRlZ29yaWVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/downloads\">Downloads</a></li>\r\n      <li class=\"active\">Categorias</li>\r\n    </ol>\r\n    <app-list-download-categories-admin></app-list-download-categories-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DownloadCategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCategoriesPageComponent", function() { return DownloadCategoriesPageComponent; });
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

var DownloadCategoriesPageComponent = /** @class */ (function () {
    function DownloadCategoriesPageComponent() {
    }
    DownloadCategoriesPageComponent.prototype.ngOnInit = function () {
    };
    DownloadCategoriesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-categories-page',
            template: __webpack_require__(/*! ./download-categories-page.component.html */ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.html"),
            styles: [__webpack_require__(/*! ./download-categories-page.component.css */ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadCategoriesPageComponent);
    return DownloadCategoriesPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: DownloadCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCategoriesPageModule", function() { return DownloadCategoriesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _download_categories_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-categories-page.component */ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page.component.ts");
/* harmony import */ var _download_categories_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download-categories-page-routing.module */ "./src/app/roles/admin-area/pages/download-categories-page/download-categories-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_download_categories_list_download_categories_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-download-categories/list-download-categories.module */ "./src/app/roles/admin-area/components/list-download-categories/list-download-categories.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DownloadCategoriesPageModule = /** @class */ (function () {
    function DownloadCategoriesPageModule() {
    }
    DownloadCategoriesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _download_categories_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["DownloadCategoriesPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_download_categories_list_download_categories_module__WEBPACK_IMPORTED_MODULE_6__["ListDownloadCategoriesModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_download_categories_page_component__WEBPACK_IMPORTED_MODULE_3__["DownloadCategoriesPageComponent"]]
        })
    ], DownloadCategoriesPageModule);
    return DownloadCategoriesPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-download-categories-page-download-categories-page-module.js.map