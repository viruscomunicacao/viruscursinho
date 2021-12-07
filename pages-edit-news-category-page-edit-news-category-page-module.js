(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-news-category-page-edit-news-category-page-module"],{

/***/ "./src/app/roles/admin-area/classes/new-category.ts":
/*!**********************************************************!*\
  !*** ./src/app/roles/admin-area/classes/new-category.ts ***!
  \**********************************************************/
/*! exports provided: NewCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategory", function() { return NewCategory; });
var NewCategory = /** @class */ (function () {
    function NewCategory() {
    }
    return NewCategory;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtbmV3cy1jYXRlZ29yeS1mb3JtL2VkaXQtbmV3cy1jYXRlZ29yeS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtbmV3cy1jYXRlZ29yeS1mb3JtL2VkaXQtbmV3cy1jYXRlZ29yeS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwID4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar categoria de notícia</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditCategory\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formEditCategory.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formEditCategory.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditCategory.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/news/categories\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditNewsCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsCategoryFormComponent", function() { return EditNewsCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/admin-area/angular-services/new-category.service.ts");
/* harmony import */ var _classes_new_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/new-category */ "./src/app/roles/admin-area/classes/new-category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditNewsCategoryFormComponent = /** @class */ (function () {
    function EditNewsCategoryFormComponent(newCategoryService, route) {
        this.newCategoryService = newCategoryService;
        this.route = route;
        this.categoryTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.category = new _classes_new_category__WEBPACK_IMPORTED_MODULE_4__["NewCategory"]();
        this.alert = { type: '', message: '', show: false };
    }
    EditNewsCategoryFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategory();
    };
    EditNewsCategoryFormComponent.prototype.initForm = function () {
        this.formEditCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditNewsCategoryFormComponent.prototype.getCategory = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.newCategoryService.getCategory(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.category = response;
                _this.categoryTitle.emit(_this.category.title);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditNewsCategoryFormComponent.prototype.loadForm = function () {
        this.formEditCategory.patchValue({
            title: this.category.title,
            status: this.category.status + ''
        });
    };
    EditNewsCategoryFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditCategory.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditCategory.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.newCategoryService.updateCategory(key, data).subscribe(function (response) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditNewsCategoryFormComponent.prototype, "categoryTitle", void 0);
    EditNewsCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-news-category-form-admin',
            template: __webpack_require__(/*! ./edit-news-category-form.component.html */ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-news-category-form.component.css */ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_3__["NewCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditNewsCategoryFormComponent);
    return EditNewsCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EditNewsCategoryFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsCategoryFormModule", function() { return EditNewsCategoryFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_news_category_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-news-category-form.component */ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.component.ts");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/admin-area/angular-services/new-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditNewsCategoryFormModule = /** @class */ (function () {
    function EditNewsCategoryFormModule() {
    }
    EditNewsCategoryFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _edit_news_category_form_component__WEBPACK_IMPORTED_MODULE_4__["EditNewsCategoryFormComponent"]
            ],
            exports: [
                _edit_news_category_form_component__WEBPACK_IMPORTED_MODULE_4__["EditNewsCategoryFormComponent"]
            ],
            providers: [
                _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_5__["NewCategoryService"]
            ]
        })
    ], EditNewsCategoryFormModule);
    return EditNewsCategoryFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditNewsCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsCategoryPageRoutingModule", function() { return EditNewsCategoryPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_news_category_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-news-category-page.component */ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_news_category_page_component__WEBPACK_IMPORTED_MODULE_2__["EditNewsCategoryPageComponent"] }
];
var EditNewsCategoryPageRoutingModule = /** @class */ (function () {
    function EditNewsCategoryPageRoutingModule() {
    }
    EditNewsCategoryPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditNewsCategoryPageRoutingModule);
    return EditNewsCategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LW5ld3MtY2F0ZWdvcnktcGFnZS9lZGl0LW5ld3MtY2F0ZWdvcnktcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LW5ld3MtY2F0ZWdvcnktcGFnZS9lZGl0LW5ld3MtY2F0ZWdvcnktcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/news\">Notícias</a></li>\r\n      <li><a routerLink=\"/admin/news/categories\">Categorias</a></li>\r\n      <li class=\"active\">{{ categoryTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-news-category-form-admin (categoryTitle)=\"setCategoryTitle($event)\"></app-edit-news-category-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EditNewsCategoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsCategoryPageComponent", function() { return EditNewsCategoryPageComponent; });
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

var EditNewsCategoryPageComponent = /** @class */ (function () {
    function EditNewsCategoryPageComponent() {
        this.categoryTitle = '';
    }
    EditNewsCategoryPageComponent.prototype.ngOnInit = function () {
    };
    EditNewsCategoryPageComponent.prototype.setCategoryTitle = function (title) {
        this.categoryTitle = title;
    };
    EditNewsCategoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-news-category-page',
            template: __webpack_require__(/*! ./edit-news-category-page.component.html */ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-news-category-page.component.css */ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditNewsCategoryPageComponent);
    return EditNewsCategoryPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditNewsCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsCategoryPageModule", function() { return EditNewsCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_news_category_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-news-category-page.component */ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page.component.ts");
/* harmony import */ var _edit_news_category_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-news-category-page-routing.module */ "./src/app/roles/admin-area/pages/edit-news-category-page/edit-news-category-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_news_category_form_edit_news_category_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-news-category-form/edit-news-category-form.module */ "./src/app/roles/admin-area/components/edit-news-category-form/edit-news-category-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditNewsCategoryPageModule = /** @class */ (function () {
    function EditNewsCategoryPageModule() {
    }
    EditNewsCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_news_category_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditNewsCategoryPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_news_category_form_edit_news_category_form_module__WEBPACK_IMPORTED_MODULE_7__["EditNewsCategoryFormModule"]
            ],
            declarations: [_edit_news_category_page_component__WEBPACK_IMPORTED_MODULE_3__["EditNewsCategoryPageComponent"]]
        })
    ], EditNewsCategoryPageModule);
    return EditNewsCategoryPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-news-category-page-edit-news-category-page-module.js.map