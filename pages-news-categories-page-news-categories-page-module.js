(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-categories-page-news-categories-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn-group > button, a {\r\n    margin-right: 7px;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtbmV3cy1jYXRlZ29yaWVzL2xpc3QtbmV3cy1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9saXN0LW5ld3MtY2F0ZWdvcmllcy9saXN0LW5ld3MtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24sIGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Categorias de notícia</h1>\r\n  <p>As categorias de notícias disponíveis do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <div class=\"btn-group\">\r\n    <a routerLink=\"/admin/news\" class=\"btn btn-md btn-default\">Notícias</a>\r\n    <a routerLink=\"/admin/news/categories/new\" class=\"btn btn-md btn-default\">Nova categoria</a>\r\n  </div>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Título</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{ category.title }}</td>\r\n        <td>\r\n          <span *ngIf=\"category.status\">Ativo</span>\r\n          <span *ngIf=\"!category.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/news/categories/{{ category._key }}\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeCategory(category)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"categories.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhuma categoria de notícia cadastrada</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ListNewsCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsCategoriesComponent", function() { return ListNewsCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/admin-area/angular-services/new-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListNewsCategoriesComponent = /** @class */ (function () {
    function ListNewsCategoriesComponent(newCategoryService) {
        this.newCategoryService = newCategoryService;
        this.categories = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListNewsCategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    ListNewsCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.newCategoryService.getCategories().subscribe(function (response) {
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
    ListNewsCategoriesComponent.prototype.removeCategory = function (category) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.categories = this.categories.filter(function (c) { return c !== category; });
            this.newCategoryService.removeCategory(category._key).subscribe(function (response) {
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
    ListNewsCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-news-categories-admin',
            template: __webpack_require__(/*! ./list-news-categories.component.html */ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.html"),
            styles: [__webpack_require__(/*! ./list-news-categories.component.css */ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_1__["NewCategoryService"]])
    ], ListNewsCategoriesComponent);
    return ListNewsCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news-categories/list-news-categories.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListNewsCategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsCategoriesModule", function() { return ListNewsCategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_news_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-news-categories.component */ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.component.ts");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/admin-area/angular-services/new-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListNewsCategoriesModule = /** @class */ (function () {
    function ListNewsCategoriesModule() {
    }
    ListNewsCategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_news_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListNewsCategoriesComponent"]
            ],
            exports: [
                _list_news_categories_component__WEBPACK_IMPORTED_MODULE_3__["ListNewsCategoriesComponent"]
            ],
            providers: [
                _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_4__["NewCategoryService"]
            ]
        })
    ], ListNewsCategoriesModule);
    return ListNewsCategoriesModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-categories-page/news-categories-page-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: NewsCategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoriesPageRoutingModule", function() { return NewsCategoriesPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_categories_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-categories-page.component */ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _news_categories_page_component__WEBPACK_IMPORTED_MODULE_2__["NewsCategoriesPageComponent"] }
];
var NewsCategoriesPageRoutingModule = /** @class */ (function () {
    function NewsCategoriesPageRoutingModule() {
    }
    NewsCategoriesPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewsCategoriesPageRoutingModule);
    return NewsCategoriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXdzLWNhdGVnb3JpZXMtcGFnZS9uZXdzLWNhdGVnb3JpZXMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXdzLWNhdGVnb3JpZXMtcGFnZS9uZXdzLWNhdGVnb3JpZXMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/news\">Notícias</a></li>\r\n      <li class=\"active\">Categorias</li>\r\n    </ol>\r\n    <app-list-news-categories-admin></app-list-news-categories-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NewsCategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoriesPageComponent", function() { return NewsCategoriesPageComponent; });
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

var NewsCategoriesPageComponent = /** @class */ (function () {
    function NewsCategoriesPageComponent() {
    }
    NewsCategoriesPageComponent.prototype.ngOnInit = function () {
    };
    NewsCategoriesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-categories-page',
            template: __webpack_require__(/*! ./news-categories-page.component.html */ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.html"),
            styles: [__webpack_require__(/*! ./news-categories-page.component.css */ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsCategoriesPageComponent);
    return NewsCategoriesPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.module.ts ***!
  \********************************************************************************************/
/*! exports provided: NewsCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCategoriesPageModule", function() { return NewsCategoriesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_categories_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-categories-page.component */ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page.component.ts");
/* harmony import */ var _news_categories_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-categories-page-routing.module */ "./src/app/roles/admin-area/pages/news-categories-page/news-categories-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_news_categories_list_news_categories_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-news-categories/list-news-categories.module */ "./src/app/roles/admin-area/components/list-news-categories/list-news-categories.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewsCategoriesPageModule = /** @class */ (function () {
    function NewsCategoriesPageModule() {
    }
    NewsCategoriesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _news_categories_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewsCategoriesPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_news_categories_list_news_categories_module__WEBPACK_IMPORTED_MODULE_6__["ListNewsCategoriesModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_news_categories_page_component__WEBPACK_IMPORTED_MODULE_3__["NewsCategoriesPageComponent"]]
        })
    ], NewsCategoriesPageModule);
    return NewsCategoriesPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-news-categories-page-news-categories-page-module.js.map