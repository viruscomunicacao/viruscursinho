(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-album-page-new-album-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-album-form/new-album-form.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-album-form/new-album-form.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1hbGJ1bS1mb3JtL25ldy1hbGJ1bS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1hbGJ1bS1mb3JtL25ldy1hbGJ1bS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-album-form/new-album-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-album-form/new-album-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Novo album</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewAlbum\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formNewAlbum.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewAlbum.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formNewAlbum.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewAlbum.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/albuns\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-album-form/new-album-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-album-form/new-album-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewAlbumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumFormComponent", function() { return NewAlbumFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/album.service */ "./src/app/roles/admin-area/angular-services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewAlbumFormComponent = /** @class */ (function () {
    function NewAlbumFormComponent(albumService) {
        this.albumService = albumService;
        this.alert = { type: '', message: '', show: false };
    }
    NewAlbumFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewAlbumFormComponent.prototype.initForm = function () {
        this.formNewAlbum = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    NewAlbumFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewAlbum.valid) {
            var data = this.formNewAlbum.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.albumService.addAlbum(data).subscribe(function (response) {
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
    NewAlbumFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-album-form-admin',
            template: __webpack_require__(/*! ./new-album-form.component.html */ "./src/app/roles/admin-area/components/new-album-form/new-album-form.component.html"),
            styles: [__webpack_require__(/*! ./new-album-form.component.css */ "./src/app/roles/admin-area/components/new-album-form/new-album-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_album_service__WEBPACK_IMPORTED_MODULE_2__["AlbumService"]])
    ], NewAlbumFormComponent);
    return NewAlbumFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-album-form/new-album-form.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-album-form/new-album-form.module.ts ***!
  \*************************************************************************************/
/*! exports provided: NewAlbumFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumFormModule", function() { return NewAlbumFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_album_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-album-form.component */ "./src/app/roles/admin-area/components/new-album-form/new-album-form.component.ts");
/* harmony import */ var _angular_services_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/album.service */ "./src/app/roles/admin-area/angular-services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NewAlbumFormModule = /** @class */ (function () {
    function NewAlbumFormModule() {
    }
    NewAlbumFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"]
            ],
            declarations: [
                _new_album_form_component__WEBPACK_IMPORTED_MODULE_5__["NewAlbumFormComponent"]
            ],
            exports: [
                _new_album_form_component__WEBPACK_IMPORTED_MODULE_5__["NewAlbumFormComponent"]
            ],
            providers: [
                _angular_services_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"]
            ]
        })
    ], NewAlbumFormModule);
    return NewAlbumFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-album-page/new-album-page-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-album-page/new-album-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: NewAlbumPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumPageRoutingModule", function() { return NewAlbumPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_album_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-album-page.component */ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_album_page_component__WEBPACK_IMPORTED_MODULE_2__["NewAlbumPageComponent"] }
];
var NewAlbumPageRoutingModule = /** @class */ (function () {
    function NewAlbumPageRoutingModule() {
    }
    NewAlbumPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewAlbumPageRoutingModule);
    return NewAlbumPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctYWxidW0tcGFnZS9uZXctYWxidW0tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctYWxidW0tcGFnZS9uZXctYWxidW0tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/albuns\">Albuns</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-album-form-admin></app-new-album-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: NewAlbumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumPageComponent", function() { return NewAlbumPageComponent; });
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

var NewAlbumPageComponent = /** @class */ (function () {
    function NewAlbumPageComponent() {
    }
    NewAlbumPageComponent.prototype.ngOnInit = function () {
    };
    NewAlbumPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-album-page',
            template: __webpack_require__(/*! ./new-album-page.component.html */ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.html"),
            styles: [__webpack_require__(/*! ./new-album-page.component.css */ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewAlbumPageComponent);
    return NewAlbumPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-album-page/new-album-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: NewAlbumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumPageModule", function() { return NewAlbumPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_album_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-album-page.component */ "./src/app/roles/admin-area/pages/new-album-page/new-album-page.component.ts");
/* harmony import */ var _new_album_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-album-page-routing.module */ "./src/app/roles/admin-area/pages/new-album-page/new-album-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_album_form_new_album_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-album-form/new-album-form.module */ "./src/app/roles/admin-area/components/new-album-form/new-album-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewAlbumPageModule = /** @class */ (function () {
    function NewAlbumPageModule() {
    }
    NewAlbumPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_album_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewAlbumPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_album_form_new_album_form_module__WEBPACK_IMPORTED_MODULE_7__["NewAlbumFormModule"]
            ],
            declarations: [_new_album_page_component__WEBPACK_IMPORTED_MODULE_3__["NewAlbumPageComponent"]]
        })
    ], NewAlbumPageModule);
    return NewAlbumPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-album-page-new-album-page-module.js.map