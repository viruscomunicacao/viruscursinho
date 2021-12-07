(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-course-page-edit-course-page-module"],{

/***/ "./src/app/roles/admin-area/classes/course.ts":
/*!****************************************************!*\
  !*** ./src/app/roles/admin-area/classes/course.ts ***!
  \****************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n\r\n.thumbnail-custom {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtY291cnNlLWZvcm0vZWRpdC1jb3Vyc2UtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvY29tcG9uZW50cy9lZGl0LWNvdXJzZS1mb3JtL2VkaXQtY291cnNlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGVhcnJvdy0yMCB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgPiBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwtY3VzdG9tIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar curso</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditCourse\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\" *ngIf=\"showModalSelectFile\">\r\n    <div class=\"col-md-12\">\r\n      <app-media-selector (urlObject)=\"setUrlObject($event)\" [mediaType]=\"mediaType\"></app-media-selector>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <img src=\"{{ course.photo }}\" class=\"thumbnail thumbnail-custom\">\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Título <span *ngIf=\"formEditCourse.controls.title.invalid\">*</span></label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Status <span *ngIf=\"formEditCourse.controls.status.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"true\">Ativo</option>\r\n              <option value=\"false\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Imagem</label>\r\n            <input type=\"text\" class=\"form-control\" (focus)=\"changeStatusModalSelectFile()\" formControlName=\"photo\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Categoria <span *ngIf=\"formEditCourse.controls.idCategory.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"idCategory\">\r\n              <option *ngFor=\"let category of categories\" value=\"{{ category._key }}\">{{ category.title }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formEditCourse.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditCourse.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/courses\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditCourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseFormComponent", function() { return EditCourseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/course.service */ "./src/app/roles/admin-area/angular-services/course.service.ts");
/* harmony import */ var _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/course-category.service */ "./src/app/roles/admin-area/angular-services/course-category.service.ts");
/* harmony import */ var _classes_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/course */ "./src/app/roles/admin-area/classes/course.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditCourseFormComponent = /** @class */ (function () {
    function EditCourseFormComponent(courseService, categoryService, route) {
        this.courseService = courseService;
        this.categoryService = categoryService;
        this.route = route;
        this.courseTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = { type: '', message: '', show: false };
        this.categories = [];
        this.course = new _classes_course__WEBPACK_IMPORTED_MODULE_5__["Course"]();
        this.mediaType = 'courses';
        this.urlObjects = 'https://viruscursinho.com.br:3002/courses';
        this.showModalSelectFile = false;
    }
    EditCourseFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
        this.getCourse();
    };
    EditCourseFormComponent.prototype.initForm = function () {
        this.formEditCourse = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            idCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditCourseFormComponent.prototype.getCourse = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.courseService.getCourse(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.course = response.course;
                _this.course.idCategory = response.category._key;
                _this.courseTitle.emit(_this.course.title);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditCourseFormComponent.prototype.loadForm = function () {
        this.formEditCourse.patchValue({
            title: this.course.title,
            description: this.course.description,
            idCategory: this.course.idCategory,
            status: this.course.status,
            photo: this.course.photo
        });
    };
    EditCourseFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditCourse.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditCourse.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.courseService.updateCourse(key, data).subscribe(function (response) {
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
    EditCourseFormComponent.prototype.getCategories = function () {
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
    EditCourseFormComponent.prototype.changeStatusModalSelectFile = function () {
        if (this.showModalSelectFile) {
            this.showModalSelectFile = false;
        }
        else {
            this.showModalSelectFile = true;
        }
    };
    EditCourseFormComponent.prototype.setUrlObject = function (link) {
        this.formEditCourse.patchValue({
            photo: link
        });
        this.showModalSelectFile = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditCourseFormComponent.prototype, "courseTitle", void 0);
    EditCourseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-course-form-admin',
            template: __webpack_require__(/*! ./edit-course-form.component.html */ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-course-form.component.css */ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"], _angular_services_course_category_service__WEBPACK_IMPORTED_MODULE_4__["CourseCategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditCourseFormComponent);
    return EditCourseFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-course-form/edit-course-form.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditCourseFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseFormModule", function() { return EditCourseFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_course_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-course-form.component */ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.component.ts");
/* harmony import */ var _angular_services_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/course.service */ "./src/app/roles/admin-area/angular-services/course.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditCourseFormModule = /** @class */ (function () {
    function EditCourseFormModule() {
    }
    EditCourseFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _edit_course_form_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseFormComponent"]
            ],
            exports: [
                _edit_course_form_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseFormComponent"]
            ],
            providers: [
                _angular_services_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]
            ]
        })
    ], EditCourseFormModule);
    return EditCourseFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-page/edit-course-page-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: EditCoursePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCoursePageRoutingModule", function() { return EditCoursePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_course_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-course-page.component */ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_course_page_component__WEBPACK_IMPORTED_MODULE_2__["EditCoursePageComponent"] }
];
var EditCoursePageRoutingModule = /** @class */ (function () {
    function EditCoursePageRoutingModule() {
    }
    EditCoursePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditCoursePageRoutingModule);
    return EditCoursePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWNvdXJzZS1wYWdlL2VkaXQtY291cnNlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL2FkbWluLWFyZWEvcGFnZXMvZWRpdC1jb3Vyc2UtcGFnZS9lZGl0LWNvdXJzZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/courses\">Cursos</a></li>\r\n      <li class=\"active\">{{ courseTitle }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-course-form-admin (courseTitle)=\"setCourseTitle($event)\"></app-edit-course-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditCoursePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCoursePageComponent", function() { return EditCoursePageComponent; });
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

var EditCoursePageComponent = /** @class */ (function () {
    function EditCoursePageComponent() {
        this.courseTitle = '';
    }
    EditCoursePageComponent.prototype.ngOnInit = function () {
    };
    EditCoursePageComponent.prototype.setCourseTitle = function (title) {
        this.courseTitle = title;
    };
    EditCoursePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-course-page',
            template: __webpack_require__(/*! ./edit-course-page.component.html */ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-course-page.component.css */ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditCoursePageComponent);
    return EditCoursePageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.module.ts ***!
  \************************************************************************************/
/*! exports provided: EditCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCoursePageModule", function() { return EditCoursePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_course_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-course-page.component */ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page.component.ts");
/* harmony import */ var _edit_course_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-course-page-routing.module */ "./src/app/roles/admin-area/pages/edit-course-page/edit-course-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_course_form_edit_course_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-course-form/edit-course-form.module */ "./src/app/roles/admin-area/components/edit-course-form/edit-course-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditCoursePageModule = /** @class */ (function () {
    function EditCoursePageModule() {
    }
    EditCoursePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_course_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditCoursePageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_course_form_edit_course_form_module__WEBPACK_IMPORTED_MODULE_7__["EditCourseFormModule"]
            ],
            declarations: [_edit_course_page_component__WEBPACK_IMPORTED_MODULE_3__["EditCoursePageComponent"]]
        })
    ], EditCoursePageModule);
    return EditCoursePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-course-page-edit-course-page-module.js.map