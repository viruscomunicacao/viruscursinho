(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-album-page-edit-album-page-module"],{

/***/ "./src/app/roles/admin-area/classes/album.ts":
/*!***************************************************!*\
  !*** ./src/app/roles/admin-area/classes/album.ts ***!
  \***************************************************/
/*! exports provided: Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
var Album = /** @class */ (function () {
    function Album() {
    }
    return Album;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtYWxidW0tZm9ybS9lZGl0LWFsYnVtLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvZWRpdC1hbGJ1bS1mb3JtL2VkaXQtYWxidW0tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar album</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditAlbum\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formEditAlbum.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formEditAlbum.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formEditAlbum.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditAlbum.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/albuns\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditAlbumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAlbumFormComponent", function() { return EditAlbumFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/album.service */ "./src/app/roles/admin-area/angular-services/album.service.ts");
/* harmony import */ var _classes_album__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/album */ "./src/app/roles/admin-area/classes/album.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAlbumFormComponent = /** @class */ (function () {
    function EditAlbumFormComponent(albumService, route) {
        this.albumService = albumService;
        this.route = route;
        this.albumTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = { type: '', message: '', show: false };
        this.album = new _classes_album__WEBPACK_IMPORTED_MODULE_4__["Album"]();
    }
    EditAlbumFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getAlbum();
    };
    EditAlbumFormComponent.prototype.initForm = function () {
        this.formEditAlbum = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    EditAlbumFormComponent.prototype.getAlbum = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.albumService.getAlbum(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.album = response;
                _this.albumTitle.emit(_this.album.title);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditAlbumFormComponent.prototype.loadForm = function () {
        this.formEditAlbum.patchValue({
            title: this.album.title,
            description: this.album.description,
            status: this.album.status
        });
    };
    EditAlbumFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditAlbum.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditAlbum.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.albumService.updateAlbum(key, data).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Dados salvos com sucesso!';
                    _this.alert.show = true;
                }
                else {
                    alert('Houve algum erro ao salvar os dados!');
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditAlbumFormComponent.prototype, "albumTitle", void 0);
    EditAlbumFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-album-form-admin',
            template: __webpack_require__(/*! ./edit-album-form.component.html */ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-album-form.component.css */ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditAlbumFormComponent);
    return EditAlbumFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-album-form/edit-album-form.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EditAlbumFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAlbumFormModule", function() { return EditAlbumFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_album_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-album-form.component */ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.component.ts");
/* harmony import */ var _angular_services_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/album.service */ "./src/app/roles/admin-area/angular-services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditAlbumFormModule = /** @class */ (function () {
    function EditAlbumFormModule() {
    }
    EditAlbumFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"]
            ],
            declarations: [
                _edit_album_form_component__WEBPACK_IMPORTED_MODULE_5__["EditAlbumFormComponent"]
            ],
            exports: [
                _edit_album_form_component__WEBPACK_IMPORTED_MODULE_5__["EditAlbumFormComponent"]
            ],
            providers: [
                _angular_services_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"]
            ]
        })
    ], EditAlbumFormModule);
    return EditAlbumFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-album-page/edit-album-page-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EditAlbumPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAlbumPageRoutingModule", function() { return EditAlbumPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_album_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-album-page.component */ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_album_page_component__WEBPACK_IMPORTED_MODULE_2__["EditAlbumPageComponent"] }
];
var EditAlbumPageRoutingModule = /** @class */ (function () {
    function EditAlbumPageRoutingModule() {
    }
    EditAlbumPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditAlbumPageRoutingModule);
    return EditAlbumPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWFsYnVtLXBhZ2UvZWRpdC1hbGJ1bS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2VkaXQtYWxidW0tcGFnZS9lZGl0LWFsYnVtLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/albuns\">Albuns</a></li>\r\n      <li class=\"active\">{{ albumTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-album-form-admin (albumTitle)=\"setAlbumTitle($event)\"></app-edit-album-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditAlbumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAlbumPageComponent", function() { return EditAlbumPageComponent; });
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

var EditAlbumPageComponent = /** @class */ (function () {
    function EditAlbumPageComponent() {
        this.albumTitle = '';
    }
    EditAlbumPageComponent.prototype.ngOnInit = function () {
    };
    EditAlbumPageComponent.prototype.setAlbumTitle = function (name) {
        this.albumTitle = name;
    };
    EditAlbumPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-album-page',
            template: __webpack_require__(/*! ./edit-album-page.component.html */ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-album-page.component.css */ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditAlbumPageComponent);
    return EditAlbumPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EditAlbumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAlbumPageModule", function() { return EditAlbumPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_album_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-album-page.component */ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page.component.ts");
/* harmony import */ var _edit_album_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-album-page-routing.module */ "./src/app/roles/admin-area/pages/edit-album-page/edit-album-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_album_form_edit_album_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-album-form/edit-album-form.module */ "./src/app/roles/admin-area/components/edit-album-form/edit-album-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditAlbumPageModule = /** @class */ (function () {
    function EditAlbumPageModule() {
    }
    EditAlbumPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_album_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditAlbumPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_album_form_edit_album_form_module__WEBPACK_IMPORTED_MODULE_7__["EditAlbumFormModule"]
            ],
            declarations: [_edit_album_page_component__WEBPACK_IMPORTED_MODULE_3__["EditAlbumPageComponent"]]
        })
    ], EditAlbumPageModule);
    return EditAlbumPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-album-page-edit-album-page-module.js.map