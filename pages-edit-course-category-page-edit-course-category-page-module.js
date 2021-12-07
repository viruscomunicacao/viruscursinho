(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-course-category-page-edit-course-category-page-module"],{

/***/ "./src/app/roles/admin-area/classes/course-category.ts":
/*!*************************************************************!*\
  !*** ./src/app/roles/admin-area/classes/course-category.ts ***!
  \*************************************************************/
/*! exports provided: CourseCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCategory", function() { return CourseCategory; });
var CourseCategory = /** @class */ (function () {
    function CourseCategory() {
    }
    return CourseCategory;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtY291cnNlLWNhdGVnb3J5LWZvcm0vZWRpdC1jb3Vyc2UtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9lZGl0LWNvdXJzZS1jYXRlZ29yeS1mb3JtL2VkaXQtY291cnNlLWNhdGVnb3J5LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar categoria de curso</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditCategory\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formEditCategory.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formEditCategory.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditCategory.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/courses/categories\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EditCourseCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseCategoryFormComponent", function() { return EditCourseCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/course-category.service */ "./src/app/roles/admin-area/angular-services/course-category.service.ts");
/* harmony import */ var _classes_course_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/course-category */ "./src/app/roles/admin-area/classes/course-category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCourseCategoryFormComponent = /** @class */ (function () {
    function EditCourseCategoryFormComponent(courseCategoryService, route) {
        this.courseCategoryService = courseCategoryService;
        this.route = route;
        this.categoryTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.category = new _classes_course_category__WEBPACK_IMPORTED_MODULE_4__["CourseCategory"]();
        this.alert = { type: '', message: '', show: false };
    }
    EditCourseCategoryFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategory();
    };
    EditCourseCategoryFormComponent.prototype.initForm = function () {
        this.formEditCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditCourseCategoryFormComponent.prototype.getCategory = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.courseCategoryService.getCategory(key).subscribe(function (response) {
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
    EditCourseCategoryFormComponent.prototype.loadForm = function () {
        this.formEditCategory.patchValue({
            title: this.category.title,
            status: this.category.status
        });
    };
    EditCourseCategoryFormComponent.prototype.save = function () {
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
            this.courseCategoryService.updateCategory(key, data).subscribe(function (response) {
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
    ], EditCourseCategoryFormComponent.prototype, "categoryTitle", void 0);
    EditCourseCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-course-category-form-admin',
            template: __webpack_require__(/*! ./edit-course-category-form.component.html */ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-course-category-form.component.css */ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_3__["CourseCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditCourseCategoryFormComponent);
    return EditCourseCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: EditCourseCategoryFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseCategoryFormModule", function() { return EditCourseCategoryFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_course_category_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-course-category-form.component */ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.component.ts");
/* harmony import */ var _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-services/course-category.service */ "./src/app/roles/admin-area/angular-services/course-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditCourseCategoryFormModule = /** @class */ (function () {
    function EditCourseCategoryFormModule() {
    }
    EditCourseCategoryFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _edit_course_category_form_component__WEBPACK_IMPORTED_MODULE_4__["EditCourseCategoryFormComponent"]
            ],
            exports: [
                _edit_course_category_form_component__WEBPACK_IMPORTED_MODULE_4__["EditCourseCategoryFormComponent"]
            ],
            providers: [
                _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_5__["CourseCategoryService"]
            ]
        })
    ], EditCourseCategoryFormModule);
    return EditCourseCategoryFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EditCourseCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseCategoryPageRoutingModule", function() { return EditCourseCategoryPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_course_category_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-course-category-page.component */ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_course_category_page_component__WEBPACK_IMPORTED_MODULE_2__["EditCourseCategoryPageComponent"] }
];
var EditCourseCategoryPageRoutingModule = /** @class */ (function () {
    function EditCourseCategoryPageRoutingModule() {
    }
    EditCourseCategoryPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditCourseCategoryPageRoutingModule);
    return EditCourseCategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWNvdXJzZS1jYXRlZ29yeS1wYWdlL2VkaXQtY291cnNlLWNhdGVnb3J5LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvcGFnZXMvZWRpdC1jb3Vyc2UtY2F0ZWdvcnktcGFnZS9lZGl0LWNvdXJzZS1jYXRlZ29yeS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/courses\">Cursos</a></li>\r\n      <li><a routerLink=\"/admin/courses/categories\">Categorias</a></li>\r\n      <li class=\"active\">{{ categoryTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-course-category-form-admin (categoryTitle)=\"setCategoryTitle($event)\"></app-edit-course-category-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: EditCourseCategoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseCategoryPageComponent", function() { return EditCourseCategoryPageComponent; });
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

var EditCourseCategoryPageComponent = /** @class */ (function () {
    function EditCourseCategoryPageComponent() {
        this.categoryTitle = '';
    }
    EditCourseCategoryPageComponent.prototype.ngOnInit = function () {
    };
    EditCourseCategoryPageComponent.prototype.setCategoryTitle = function (title) {
        this.categoryTitle = title;
    };
    EditCourseCategoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-course-category-page',
            template: __webpack_require__(/*! ./edit-course-category-page.component.html */ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-course-category-page.component.css */ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditCourseCategoryPageComponent);
    return EditCourseCategoryPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditCourseCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseCategoryPageModule", function() { return EditCourseCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_course_category_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-course-category-page.component */ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page.component.ts");
/* harmony import */ var _edit_course_category_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-course-category-page-routing.module */ "./src/app/roles/admin-area/pages/edit-course-category-page/edit-course-category-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_course_category_form_edit_course_category_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-course-category-form/edit-course-category-form.module */ "./src/app/roles/admin-area/components/edit-course-category-form/edit-course-category-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditCourseCategoryPageModule = /** @class */ (function () {
    function EditCourseCategoryPageModule() {
    }
    EditCourseCategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_course_category_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditCourseCategoryPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_course_category_form_edit_course_category_form_module__WEBPACK_IMPORTED_MODULE_7__["EditCourseCategoryFormModule"]
            ],
            declarations: [_edit_course_category_page_component__WEBPACK_IMPORTED_MODULE_3__["EditCourseCategoryPageComponent"]]
        })
    ], EditCourseCategoryPageModule);
    return EditCourseCategoryPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-course-category-page-edit-course-category-page-module.js.map