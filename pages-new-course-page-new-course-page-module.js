(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-course-page-new-course-page-module"],{

/***/ "./src/app/roles/admin-area/components/new-course-form/new-course-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-course-form/new-course-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL25ldy1jb3Vyc2UtZm9ybS9uZXctY291cnNlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvbmV3LWNvdXJzZS1mb3JtL25ldy1jb3Vyc2UtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-course-form/new-course-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-course-form/new-course-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Novo curso</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formNewCourse\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Título <span *ngIf=\"formNewCourse.controls.title.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formNewCourse.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Imagem <span *ngIf=\"formNewCourse.controls.photo.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"form-group\">\r\n        <label>Categoria <span *ngIf=\"formNewCourse.controls.idCategory.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"idCategory\">\r\n          <option *ngFor=\"let category of categories\" value=\"{{ category._key }}\">{{ category.title }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formNewCourse.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formNewCourse.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/courses\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/new-course-form/new-course-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-course-form/new-course-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NewCourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseFormComponent", function() { return NewCourseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/course.service */ "./src/app/roles/admin-area/angular-services/course.service.ts");
/* harmony import */ var _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/course-category.service */ "./src/app/roles/admin-area/angular-services/course-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewCourseFormComponent = /** @class */ (function () {
    function NewCourseFormComponent(courseService, categoryService) {
        this.courseService = courseService;
        this.categoryService = categoryService;
        this.alert = { type: '', message: '', show: false };
        this.categories = [];
        this.mediaType = 'courses';
        this.urlObjects = 'https://viruscursinho.com.br:3002/courses';
        this.showModalSelectFile = false;
    }
    NewCourseFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
    };
    NewCourseFormComponent.prototype.initForm = function () {
        this.formNewCourse = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewCourseFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formNewCourse.valid) {
            var data = this.formNewCourse.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.courseService.addCourse(data).subscribe(function (response) {
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
    NewCourseFormComponent.prototype.getCategories = function () {
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
    NewCourseFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    NewCourseFormComponent.prototype.setUrlObject = function (link) {
        this.formNewCourse.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    NewCourseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-course-form-admin',
            template: __webpack_require__(/*! ./new-course-form.component.html */ "./src/app/roles/admin-area/components/new-course-form/new-course-form.component.html"),
            styles: [__webpack_require__(/*! ./new-course-form.component.css */ "./src/app/roles/admin-area/components/new-course-form/new-course-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"], _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_3__["CourseCategoryService"]])
    ], NewCourseFormComponent);
    return NewCourseFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/new-course-form/new-course-form.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/new-course-form/new-course-form.module.ts ***!
  \***************************************************************************************/
/*! exports provided: NewCourseFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseFormModule", function() { return NewCourseFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _new_course_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-course-form.component */ "./src/app/roles/admin-area/components/new-course-form/new-course-form.component.ts");
/* harmony import */ var _angular_services_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/course.service */ "./src/app/roles/admin-area/angular-services/course.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewCourseFormModule = /** @class */ (function () {
    function NewCourseFormModule() {
    }
    NewCourseFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _new_course_form_component__WEBPACK_IMPORTED_MODULE_5__["NewCourseFormComponent"]
            ],
            exports: [
                _new_course_form_component__WEBPACK_IMPORTED_MODULE_5__["NewCourseFormComponent"]
            ],
            providers: [
                _angular_services_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]
            ]
        })
    ], NewCourseFormModule);
    return NewCourseFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-course-page/new-course-page-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-course-page/new-course-page-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: NewCoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCoursePageRoutingModule", function() { return NewCoursePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_course_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-course-page.component */ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _new_course_page_component__WEBPACK_IMPORTED_MODULE_2__["NewCoursePageComponent"] }
];
var NewCoursePageRoutingModule = /** @class */ (function () {
    function NewCoursePageRoutingModule() {
    }
    NewCoursePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewCoursePageRoutingModule);
    return NewCoursePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9uZXctY291cnNlLXBhZ2UvbmV3LWNvdXJzZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL25ldy1jb3Vyc2UtcGFnZS9uZXctY291cnNlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/courses\">Cursos</a></li>\r\n      <li class=\"active\">Novo</li>\r\n    </ol>\r\n    <app-new-course-form-admin></app-new-course-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NewCoursePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCoursePageComponent", function() { return NewCoursePageComponent; });
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

var NewCoursePageComponent = /** @class */ (function () {
    function NewCoursePageComponent() {
    }
    NewCoursePageComponent.prototype.ngOnInit = function () {
    };
    NewCoursePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-course-page',
            template: __webpack_require__(/*! ./new-course-page.component.html */ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.html"),
            styles: [__webpack_require__(/*! ./new-course-page.component.css */ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewCoursePageComponent);
    return NewCoursePageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/new-course-page/new-course-page.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NewCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCoursePageModule", function() { return NewCoursePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_course_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-course-page.component */ "./src/app/roles/admin-area/pages/new-course-page/new-course-page.component.ts");
/* harmony import */ var _new_course_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-course-page-routing.module */ "./src/app/roles/admin-area/pages/new-course-page/new-course-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_new_course_form_new_course_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/new-course-form/new-course-form.module */ "./src/app/roles/admin-area/components/new-course-form/new-course-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewCoursePageModule = /** @class */ (function () {
    function NewCoursePageModule() {
    }
    NewCoursePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _new_course_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["NewCoursePageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_new_course_form_new_course_form_module__WEBPACK_IMPORTED_MODULE_7__["NewCourseFormModule"]
            ],
            declarations: [_new_course_page_component__WEBPACK_IMPORTED_MODULE_3__["NewCoursePageComponent"]]
        })
    ], NewCoursePageModule);
    return NewCoursePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-course-page-new-course-page-module.js.map