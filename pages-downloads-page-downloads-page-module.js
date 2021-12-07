(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-downloads-page-downloads-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-downloads/list-downloads.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-downloads/list-downloads.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn-group > button, a {\r\n    margin-right: 7px;\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtZG93bmxvYWRzL2xpc3QtZG93bmxvYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9saXN0LWRvd25sb2Fkcy9saXN0LWRvd25sb2Fkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24sIGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-downloads/list-downloads.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-downloads/list-downloads.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Downloads</h1>\r\n  <p>Os downloads disponíveis no site do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <div class=\"btn-group\">\r\n    <a routerLink=\"/admin/downloads/categories\" class=\"btn btn-md btn-default\">Categorias</a>\r\n    <a routerLink=\"/admin/downloads/new\" class=\"btn btn-md btn-default\">Novo download</a>\r\n  </div>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Título</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let download of downloads\">\r\n        <td>{{ download.title }}</td>\r\n        <td>\r\n          <span *ngIf=\"download.status\">Ativo</span>\r\n          <span *ngIf=\"!download.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/downloads/{{ download._key }}/edit\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeDownload(download)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"downloads.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhum download cadastrado</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-downloads/list-downloads.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-downloads/list-downloads.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListDownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDownloadsComponent", function() { return ListDownloadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/admin-area/angular-services/download.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListDownloadsComponent = /** @class */ (function () {
    function ListDownloadsComponent(downloadService) {
        this.downloadService = downloadService;
        this.downloads = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListDownloadsComponent.prototype.ngOnInit = function () {
        this.getDownloads();
    };
    ListDownloadsComponent.prototype.getDownloads = function () {
        var _this = this;
        this.downloadService.getDownloads().subscribe(function (response) {
            if (response !== undefined) {
                _this.downloads = response;
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao carregar os dados!';
                _this.alert.show = true;
            }
        });
    };
    ListDownloadsComponent.prototype.removeDownload = function (download) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.downloads = this.downloads.filter(function (d) { return d !== download; });
            this.downloadService.removeDownload(download._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Download excluído com sucesso!';
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
    ListDownloadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-downloads-admin',
            template: __webpack_require__(/*! ./list-downloads.component.html */ "./src/app/roles/admin-area/components/list-downloads/list-downloads.component.html"),
            styles: [__webpack_require__(/*! ./list-downloads.component.css */ "./src/app/roles/admin-area/components/list-downloads/list-downloads.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_download_service__WEBPACK_IMPORTED_MODULE_1__["DownloadService"]])
    ], ListDownloadsComponent);
    return ListDownloadsComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-downloads/list-downloads.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-downloads/list-downloads.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ListDownloadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDownloadsModule", function() { return ListDownloadsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_downloads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-downloads.component */ "./src/app/roles/admin-area/components/list-downloads/list-downloads.component.ts");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/admin-area/angular-services/download.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListDownloadsModule = /** @class */ (function () {
    function ListDownloadsModule() {
    }
    ListDownloadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_downloads_component__WEBPACK_IMPORTED_MODULE_3__["ListDownloadsComponent"]
            ],
            exports: [
                _list_downloads_component__WEBPACK_IMPORTED_MODULE_3__["ListDownloadsComponent"]
            ],
            providers: [
                _angular_services_download_service__WEBPACK_IMPORTED_MODULE_4__["DownloadService"]
            ]
        })
    ], ListDownloadsModule);
    return ListDownloadsModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/downloads-page/downloads-page-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/downloads-page/downloads-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DownloadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageRoutingModule", function() { return DownloadsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _downloads_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloads-page.component */ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _downloads_page_component__WEBPACK_IMPORTED_MODULE_2__["DownloadsPageComponent"] }
];
var DownloadsPageRoutingModule = /** @class */ (function () {
    function DownloadsPageRoutingModule() {
    }
    DownloadsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DownloadsPageRoutingModule);
    return DownloadsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9kb3dubG9hZHMtcGFnZS9kb3dubG9hZHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9kb3dubG9hZHMtcGFnZS9kb3dubG9hZHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Downloads</li>\r\n    </ol>\r\n    <app-list-downloads-admin></app-list-downloads-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DownloadsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageComponent", function() { return DownloadsPageComponent; });
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

var DownloadsPageComponent = /** @class */ (function () {
    function DownloadsPageComponent() {
    }
    DownloadsPageComponent.prototype.ngOnInit = function () {
    };
    DownloadsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloads-page',
            template: __webpack_require__(/*! ./downloads-page.component.html */ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.html"),
            styles: [__webpack_require__(/*! ./downloads-page.component.css */ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadsPageComponent);
    return DownloadsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/downloads-page/downloads-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: DownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _downloads_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloads-page.component */ "./src/app/roles/admin-area/pages/downloads-page/downloads-page.component.ts");
/* harmony import */ var _downloads_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloads-page-routing.module */ "./src/app/roles/admin-area/pages/downloads-page/downloads-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_downloads_list_downloads_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-downloads/list-downloads.module */ "./src/app/roles/admin-area/components/list-downloads/list-downloads.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DownloadsPageModule = /** @class */ (function () {
    function DownloadsPageModule() {
    }
    DownloadsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _downloads_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["DownloadsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_downloads_list_downloads_module__WEBPACK_IMPORTED_MODULE_6__["ListDownloadsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_downloads_page_component__WEBPACK_IMPORTED_MODULE_3__["DownloadsPageComponent"]]
        })
    ], DownloadsPageModule);
    return DownloadsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-downloads-page-downloads-page-module.js.map