(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-albuns-page-albuns-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-albuns/list-albuns.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-albuns/list-albuns.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtYWxidW5zL2xpc3QtYWxidW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtYWxidW5zL2xpc3QtYWxidW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-albuns/list-albuns.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-albuns/list-albuns.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Albuns</h1>\r\n  <p>Albuns dos eventos do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <a routerLink=\"/admin/albuns/new\" class=\"btn btn-md btn-default\">Novo album</a>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Título</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let album of albuns\">\r\n        <td>{{ album.title }}</td>\r\n        <td>\r\n          <span *ngIf=\"album.status\">Ativo</span>\r\n          <span *ngIf=\"!album.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/albuns/{{ album._key }}/edit\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeAlbum(album)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"albuns.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhum album cadastrado</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-albuns/list-albuns.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-albuns/list-albuns.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListAlbunsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAlbunsComponent", function() { return ListAlbunsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/album.service */ "./src/app/roles/admin-area/angular-services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListAlbunsComponent = /** @class */ (function () {
    function ListAlbunsComponent(albumService) {
        this.albumService = albumService;
        this.albuns = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListAlbunsComponent.prototype.ngOnInit = function () {
        this.getAlbuns();
    };
    ListAlbunsComponent.prototype.getAlbuns = function () {
        var _this = this;
        this.albumService.getAlbuns().subscribe(function (response) {
            if (response !== undefined) {
                _this.albuns = response;
            }
            else {
                alert('Houve algum erro ao carregar os dados!');
            }
        });
    };
    ListAlbunsComponent.prototype.removeAlbum = function (album) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.albuns = this.albuns.filter(function (a) { return a !== album; });
            this.albumService.removeAlbum(album._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Album excluído com sucesso!';
                    _this.alert.show = true;
                }
                else {
                    alert('Houve algum erro ao carregar os dados!');
                }
            });
        }
        else {
            this.alert.type = 'danger';
            this.alert.message = 'O captcha inválido!';
            this.alert.show = true;
        }
    };
    ListAlbunsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-albuns-admin',
            template: __webpack_require__(/*! ./list-albuns.component.html */ "./src/app/roles/admin-area/components/list-albuns/list-albuns.component.html"),
            styles: [__webpack_require__(/*! ./list-albuns.component.css */ "./src/app/roles/admin-area/components/list-albuns/list-albuns.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]])
    ], ListAlbunsComponent);
    return ListAlbunsComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-albuns/list-albuns.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-albuns/list-albuns.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ListAlbunsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAlbunsModule", function() { return ListAlbunsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_albuns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-albuns.component */ "./src/app/roles/admin-area/components/list-albuns/list-albuns.component.ts");
/* harmony import */ var _angular_services_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/album.service */ "./src/app/roles/admin-area/angular-services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListAlbunsModule = /** @class */ (function () {
    function ListAlbunsModule() {
    }
    ListAlbunsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_albuns_component__WEBPACK_IMPORTED_MODULE_3__["ListAlbunsComponent"]
            ],
            exports: [
                _list_albuns_component__WEBPACK_IMPORTED_MODULE_3__["ListAlbunsComponent"]
            ],
            providers: [
                _angular_services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]
            ]
        })
    ], ListAlbunsModule);
    return ListAlbunsModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/albuns-page/albuns-page-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/albuns-page/albuns-page-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AlbunsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbunsPageRoutingModule", function() { return AlbunsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _albuns_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albuns-page.component */ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _albuns_page_component__WEBPACK_IMPORTED_MODULE_2__["AlbunsPageComponent"] }
];
var AlbunsPageRoutingModule = /** @class */ (function () {
    function AlbunsPageRoutingModule() {
    }
    AlbunsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AlbunsPageRoutingModule);
    return AlbunsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9hbGJ1bnMtcGFnZS9hbGJ1bnMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9hbGJ1bnMtcGFnZS9hbGJ1bnMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Albuns</li>\r\n    </ol>\r\n    <app-list-albuns-admin></app-list-albuns-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AlbunsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbunsPageComponent", function() { return AlbunsPageComponent; });
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

var AlbunsPageComponent = /** @class */ (function () {
    function AlbunsPageComponent() {
    }
    AlbunsPageComponent.prototype.ngOnInit = function () {
    };
    AlbunsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albuns-page',
            template: __webpack_require__(/*! ./albuns-page.component.html */ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.html"),
            styles: [__webpack_require__(/*! ./albuns-page.component.css */ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlbunsPageComponent);
    return AlbunsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/albuns-page/albuns-page.module.ts ***!
  \**************************************************************************/
/*! exports provided: AlbunsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbunsPageModule", function() { return AlbunsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _albuns_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albuns-page.component */ "./src/app/roles/admin-area/pages/albuns-page/albuns-page.component.ts");
/* harmony import */ var _albuns_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albuns-page-routing.module */ "./src/app/roles/admin-area/pages/albuns-page/albuns-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_albuns_list_albuns_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-albuns/list-albuns.module */ "./src/app/roles/admin-area/components/list-albuns/list-albuns.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AlbunsPageModule = /** @class */ (function () {
    function AlbunsPageModule() {
    }
    AlbunsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _albuns_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["AlbunsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_albuns_list_albuns_module__WEBPACK_IMPORTED_MODULE_6__["ListAlbunsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [
                _albuns_page_component__WEBPACK_IMPORTED_MODULE_3__["AlbunsPageComponent"]
            ]
        })
    ], AlbunsPageModule);
    return AlbunsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-albuns-page-albuns-page-module.js.map