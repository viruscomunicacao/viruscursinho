(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-news-page-edit-news-page-module"],{

/***/ "./src/app/roles/admin-area/classes/new.ts":
/*!*************************************************!*\
  !*** ./src/app/roles/admin-area/classes/new.ts ***!
  \*************************************************/
/*! exports provided: New */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
var New = /** @class */ (function () {
    function New() {
    }
    return New;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n\r\n.thumbnail-custom {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtbmV3cy1mb3JtL2VkaXQtbmV3cy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtbmV3cy1mb3JtL2VkaXQtbmV3cy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsLWN1c3RvbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar notícia</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditNew\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <img src=\"{{ news.photo }}\" class=\"thumbnail thumbnail-custom\">\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Título <span *ngIf=\"formEditNew.controls.title.invalid\">*</span></label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Status <span *ngIf=\"formEditNew.controls.status.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"true\">Ativo</option>\r\n              <option value=\"false\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Imagem</label>\r\n            <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Categoria <span *ngIf=\"formEditNew.controls.idCategory.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"idCategory\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{ category._key }}\">{{ category.title }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Conteúdo <span *ngIf=\"formEditNew.controls.content.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"content\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditNew.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/news\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditNewsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsFormComponent", function() { return EditNewsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/admin-area/angular-services/new.service.ts");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/admin-area/angular-services/new-category.service.ts");
/* harmony import */ var _classes_new__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/new */ "./src/app/roles/admin-area/classes/new.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditNewsFormComponent = /** @class */ (function () {
    function EditNewsFormComponent(newService, categoryService, route) {
        this.newService = newService;
        this.categoryService = categoryService;
        this.route = route;
        this.newsTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = { type: '', message: '', show: false };
        this.categories = [];
        this.news = new _classes_new__WEBPACK_IMPORTED_MODULE_5__["New"]();
        this.mediaType = 'news';
        this.urlObjects = 'https://viruscursinho.com.br:3002/news';
        this.showModalSelectFile = false;
    }
    EditNewsFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
        this.getCourse();
    };
    EditNewsFormComponent.prototype.initForm = function () {
        this.formEditNew = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditNewsFormComponent.prototype.getCourse = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.newService.getNew(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.news = response.news;
                _this.news.idCategory = response.category._key;
                _this.newsTitle.emit(_this.news.title);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditNewsFormComponent.prototype.loadForm = function () {
        this.formEditNew.patchValue({
            title: this.news.title,
            content: this.news.content,
            idCategory: this.news.idCategory,
            photo: this.news.photo,
            status: this.news.status + ''
        });
    };
    EditNewsFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditNew.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditNew.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.newService.updateNew(key, data).subscribe(function (response) {
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
    EditNewsFormComponent.prototype.getCategories = function () {
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
    EditNewsFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    EditNewsFormComponent.prototype.setUrlObject = function (link) {
        this.formEditNew.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditNewsFormComponent.prototype, "newsTitle", void 0);
    EditNewsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-news-form-admin',
            template: __webpack_require__(/*! ./edit-news-form.component.html */ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-news-form.component.css */ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_new_service__WEBPACK_IMPORTED_MODULE_3__["NewService"], _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_4__["NewCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditNewsFormComponent);
    return EditNewsFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-form/edit-news-form.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EditNewsFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsFormModule", function() { return EditNewsFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_news_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-news-form.component */ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.component.ts");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/admin-area/angular-services/new.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditNewsFormModule = /** @class */ (function () {
    function EditNewsFormModule() {
    }
    EditNewsFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _edit_news_form_component__WEBPACK_IMPORTED_MODULE_5__["EditNewsFormComponent"]
            ],
            exports: [
                _edit_news_form_component__WEBPACK_IMPORTED_MODULE_5__["EditNewsFormComponent"]
            ],
            providers: [
                _angular_services_new_service__WEBPACK_IMPORTED_MODULE_6__["NewService"]
            ]
        })
    ], EditNewsFormModule);
    return EditNewsFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-page/edit-news-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EditNewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsPageRoutingModule", function() { return EditNewsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_news_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-news-page.component */ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_news_page_component__WEBPACK_IMPORTED_MODULE_2__["EditNewsPageComponent"] }
];
var EditNewsPageRoutingModule = /** @class */ (function () {
    function EditNewsPageRoutingModule() {
    }
    EditNewsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditNewsPageRoutingModule);
    return EditNewsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LW5ld3MtcGFnZS9lZGl0LW5ld3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LW5ld3MtcGFnZS9lZGl0LW5ld3MtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/news\">Notícias</a></li>\r\n      <li class=\"active\">{{ newsTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-news-form-admin (newsTitle)=\"setNewsTitle($event)\"></app-edit-news-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditNewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsPageComponent", function() { return EditNewsPageComponent; });
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

var EditNewsPageComponent = /** @class */ (function () {
    function EditNewsPageComponent() {
        this.newsTitle = '';
    }
    EditNewsPageComponent.prototype.ngOnInit = function () {
    };
    EditNewsPageComponent.prototype.setNewsTitle = function (title) {
        this.newsTitle = title;
    };
    EditNewsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-news-page',
            template: __webpack_require__(/*! ./edit-news-page.component.html */ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-news-page.component.css */ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditNewsPageComponent);
    return EditNewsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: EditNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsPageModule", function() { return EditNewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_news_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-news-page.component */ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page.component.ts");
/* harmony import */ var _edit_news_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-news-page-routing.module */ "./src/app/roles/admin-area/pages/edit-news-page/edit-news-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_news_form_edit_news_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-news-form/edit-news-form.module */ "./src/app/roles/admin-area/components/edit-news-form/edit-news-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditNewsPageModule = /** @class */ (function () {
    function EditNewsPageModule() {
    }
    EditNewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_news_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditNewsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_news_form_edit_news_form_module__WEBPACK_IMPORTED_MODULE_7__["EditNewsFormModule"]
            ],
            declarations: [_edit_news_page_component__WEBPACK_IMPORTED_MODULE_3__["EditNewsPageComponent"]]
        })
    ], EditNewsPageModule);
    return EditNewsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-news-page-edit-news-page-module.js.map