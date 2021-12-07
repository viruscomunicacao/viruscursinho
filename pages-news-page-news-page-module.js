(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-page-news-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-news/list-news.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news/list-news.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn-group > button, a {\r\n    margin-right: 7px;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtbmV3cy9saXN0LW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtbmV3cy9saXN0LW5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uLCBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-news/list-news.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news/list-news.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Notícias</h1>\r\n  <p>As notícias do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <div class=\"btn-group\">\r\n    <a routerLink=\"/admin/news/categories\" class=\"btn btn-md btn-default\">Categorias</a>\r\n    <a routerLink=\"/admin/news/new\" class=\"btn btn-md btn-default\">Nova notícia</a>\r\n  </div>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Título</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let new of news\">\r\n        <td>{{ new.title }}</td>\r\n        <td>\r\n          <span *ngIf=\"new.status\">Ativo</span>\r\n          <span *ngIf=\"!new.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/news/{{ new._key }}/edit\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeNew(new)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"news.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhuma notícia cadastrada</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-news/list-news.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news/list-news.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsComponent", function() { return ListNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/admin-area/angular-services/new.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListNewsComponent = /** @class */ (function () {
    function ListNewsComponent(newService) {
        this.newService = newService;
        this.news = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListNewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    ListNewsComponent.prototype.getNews = function () {
        var _this = this;
        this.newService.getNews().subscribe(function (response) {
            if (response !== undefined) {
                _this.news = response;
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao carregar os dados!';
                _this.alert.show = true;
            }
        });
    };
    ListNewsComponent.prototype.removeNew = function (news) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.news = this.news.filter(function (c) { return c !== news; });
            this.newService.removeNew(news._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Notícia excluída com sucesso!';
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
    ListNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-news-admin',
            template: __webpack_require__(/*! ./list-news.component.html */ "./src/app/roles/admin-area/components/list-news/list-news.component.html"),
            styles: [__webpack_require__(/*! ./list-news.component.css */ "./src/app/roles/admin-area/components/list-news/list-news.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_new_service__WEBPACK_IMPORTED_MODULE_1__["NewService"]])
    ], ListNewsComponent);
    return ListNewsComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-news/list-news.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-news/list-news.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListNewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListNewsModule", function() { return ListNewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-news.component */ "./src/app/roles/admin-area/components/list-news/list-news.component.ts");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/admin-area/angular-services/new.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListNewsModule = /** @class */ (function () {
    function ListNewsModule() {
    }
    ListNewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_news_component__WEBPACK_IMPORTED_MODULE_3__["ListNewsComponent"]
            ],
            exports: [
                _list_news_component__WEBPACK_IMPORTED_MODULE_3__["ListNewsComponent"]
            ],
            providers: [
                _angular_services_new_service__WEBPACK_IMPORTED_MODULE_4__["NewService"]
            ]
        })
    ], ListNewsModule);
    return ListNewsModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-page/news-page-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-page/news-page-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: NewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageRoutingModule", function() { return NewsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-page.component */ "./src/app/roles/admin-area/pages/news-page/news-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _news_page_component__WEBPACK_IMPORTED_MODULE_2__["NewsPageComponent"] }
];
var NewsPageRoutingModule = /** @class */ (function () {
    function NewsPageRoutingModule() {
    }
    NewsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewsPageRoutingModule);
    return NewsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-page/news-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-page/news-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXdzLXBhZ2UvbmV3cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL25ld3MtcGFnZS9uZXdzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-page/news-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-page/news-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Notícias</li>\r\n    </ol>\r\n    <app-list-news-admin></app-list-news-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-page/news-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-page/news-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function() { return NewsPageComponent; });
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

var NewsPageComponent = /** @class */ (function () {
    function NewsPageComponent() {
    }
    NewsPageComponent.prototype.ngOnInit = function () {
    };
    NewsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-page',
            template: __webpack_require__(/*! ./news-page.component.html */ "./src/app/roles/admin-area/pages/news-page/news-page.component.html"),
            styles: [__webpack_require__(/*! ./news-page.component.css */ "./src/app/roles/admin-area/pages/news-page/news-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsPageComponent);
    return NewsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/news-page/news-page.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/news-page/news-page.module.ts ***!
  \**********************************************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-page.component */ "./src/app/roles/admin-area/pages/news-page/news-page.component.ts");
/* harmony import */ var _news_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-page-routing.module */ "./src/app/roles/admin-area/pages/news-page/news-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_news_list_news_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-news/list-news.module */ "./src/app/roles/admin-area/components/list-news/list-news.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _news_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_news_list_news_module__WEBPACK_IMPORTED_MODULE_6__["ListNewsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_news_page_component__WEBPACK_IMPORTED_MODULE_3__["NewsPageComponent"]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-news-page-news-page-module.js.map