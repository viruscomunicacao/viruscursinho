(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-banners-page-banners-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-banners/list-banners.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-banners/list-banners.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtYmFubmVycy9saXN0LWJhbm5lcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvbGlzdC1iYW5uZXJzL2xpc3QtYmFubmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-banners/list-banners.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-banners/list-banners.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Banners</h1>\r\n  <p>Os destaque do site do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <a routerLink=\"/admin/banners/new\" class=\"btn btn-md btn-default\">Novo banner</a>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Título</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let banner of banners\">\r\n        <td>{{ banner.title }}</td>\r\n        <td>\r\n          <span *ngIf=\"banner.status\">Ativo</span>\r\n          <span *ngIf=\"!banner.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/banners/{{ banner._id }}\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeBanner(banner)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"banners.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhum banner cadastrado</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-banners/list-banners.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-banners/list-banners.component.ts ***!
  \************************************************************************************/
/*! exports provided: ListBannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBannersComponent", function() { return ListBannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/banner.service */ "./src/app/roles/admin-area/angular-services/banner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListBannersComponent = /** @class */ (function () {
    function ListBannersComponent(bannerService) {
        this.bannerService = bannerService;
        this.banners = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListBannersComponent.prototype.ngOnInit = function () {
        this.getBanners();
    };
    ListBannersComponent.prototype.getBanners = function () {
        var _this = this;
        this.bannerService.getBanners().subscribe(function (response) {
            if (response !== undefined) {
                _this.banners = response;
            }
            else {
                alert('Houve algum erro ao carregar os dados!');
            }
        });
    };
    ListBannersComponent.prototype.removeBanner = function (banner) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.banners = this.banners.filter(function (b) { return b !== banner; });
            this.bannerService.removeBanner(banner._id).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Banner excluído com sucesso!';
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
    ListBannersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-banners-admin',
            template: __webpack_require__(/*! ./list-banners.component.html */ "./src/app/roles/admin-area/components/list-banners/list-banners.component.html"),
            styles: [__webpack_require__(/*! ./list-banners.component.css */ "./src/app/roles/admin-area/components/list-banners/list-banners.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]])
    ], ListBannersComponent);
    return ListBannersComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-banners/list-banners.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-banners/list-banners.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ListBannersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBannersModule", function() { return ListBannersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_banners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-banners.component */ "./src/app/roles/admin-area/components/list-banners/list-banners.component.ts");
/* harmony import */ var _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/banner.service */ "./src/app/roles/admin-area/angular-services/banner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListBannersModule = /** @class */ (function () {
    function ListBannersModule() {
    }
    ListBannersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_banners_component__WEBPACK_IMPORTED_MODULE_3__["ListBannersComponent"]
            ],
            exports: [
                _list_banners_component__WEBPACK_IMPORTED_MODULE_3__["ListBannersComponent"]
            ],
            providers: [
                _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_4__["BannerService"]
            ]
        })
    ], ListBannersModule);
    return ListBannersModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/banners-page/banners-page-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/banners-page/banners-page-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: BannersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersPageRoutingModule", function() { return BannersPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banners_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banners-page.component */ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _banners_page_component__WEBPACK_IMPORTED_MODULE_2__["BannersPageComponent"] }
];
var BannersPageRoutingModule = /** @class */ (function () {
    function BannersPageRoutingModule() {
    }
    BannersPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], BannersPageRoutingModule);
    return BannersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/banners-page/banners-page.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9iYW5uZXJzLXBhZ2UvYmFubmVycy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2Jhbm5lcnMtcGFnZS9iYW5uZXJzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/banners-page/banners-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Banners</li>\r\n    </ol>\r\n    <app-list-banners-admin></app-list-banners-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/banners-page/banners-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BannersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersPageComponent", function() { return BannersPageComponent; });
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

var BannersPageComponent = /** @class */ (function () {
    function BannersPageComponent() {
    }
    BannersPageComponent.prototype.ngOnInit = function () {
    };
    BannersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banners-page',
            template: __webpack_require__(/*! ./banners-page.component.html */ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.html"),
            styles: [__webpack_require__(/*! ./banners-page.component.css */ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannersPageComponent);
    return BannersPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/banners-page/banners-page.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/banners-page/banners-page.module.ts ***!
  \****************************************************************************/
/*! exports provided: BannersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersPageModule", function() { return BannersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _banners_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banners-page.component */ "./src/app/roles/admin-area/pages/banners-page/banners-page.component.ts");
/* harmony import */ var _banners_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banners-page-routing.module */ "./src/app/roles/admin-area/pages/banners-page/banners-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_banners_list_banners_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-banners/list-banners.module */ "./src/app/roles/admin-area/components/list-banners/list-banners.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BannersPageModule = /** @class */ (function () {
    function BannersPageModule() {
    }
    BannersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _banners_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["BannersPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_banners_list_banners_module__WEBPACK_IMPORTED_MODULE_6__["ListBannersModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [
                _banners_page_component__WEBPACK_IMPORTED_MODULE_3__["BannersPageComponent"]
            ]
        })
    ], BannersPageModule);
    return BannersPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-banners-page-banners-page-module.js.map