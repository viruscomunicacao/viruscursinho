(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-event-page-edit-event-page-module"],{

/***/ "./src/app/roles/admin-area/classes/event.ts":
/*!***************************************************!*\
  !*** ./src/app/roles/admin-area/classes/event.ts ***!
  \***************************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtZXZlbnQtZm9ybS9lZGl0LWV2ZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvZWRpdC1ldmVudC1mb3JtL2VkaXQtZXZlbnQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar evento</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditEvent\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label>Nome <span *ngIf=\"formEditEvent.controls.name.invalid\">*</span></label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label>Data <span *ngIf=\"formEditEvent.controls.date.invalid\">*</span></label>\r\n        <input type=\"date\" class=\"form-control\" formControlName=\"date\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label>Status <span *ngIf=\"formEditEvent.controls.status.invalid\">*</span></label>\r\n        <select class=\"form-control\" formControlName=\"status\">\r\n          <option value=\"true\">Ativo</option>\r\n          <option value=\"false\">Inativo</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Descrição <span *ngIf=\"formEditEvent.controls.description.invalid\">*</span></label>\r\n        <app-ngx-editor [spellcheck]=\"true\" [minHeight]=\"30\" formControlName=\"description\"></app-ngx-editor>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditEvent.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/events\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditEventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventFormComponent", function() { return EditEventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/event.service */ "./src/app/roles/admin-area/angular-services/event.service.ts");
/* harmony import */ var _classes_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/event */ "./src/app/roles/admin-area/classes/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditEventFormComponent = /** @class */ (function () {
    function EditEventFormComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.eventName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.event = new _classes_event__WEBPACK_IMPORTED_MODULE_4__["Event"]();
        this.alert = { type: '', message: '', show: false };
    }
    EditEventFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getEvent();
    };
    EditEventFormComponent.prototype.initForm = function () {
        this.formEditEvent = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    EditEventFormComponent.prototype.getEvent = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.event = response;
                _this.eventName.emit(_this.event.name);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditEventFormComponent.prototype.loadForm = function () {
        this.formEditEvent.patchValue({
            name: this.event.name,
            date: this.formatDate(new Date(this.event.date)),
            description: this.event.description,
            status: this.event.status + ''
        });
    };
    EditEventFormComponent.prototype.formatDate = function (date) {
        var day = '';
        var month = '';
        var year = '';
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        if (parseInt(day) < 10) {
            day = "0" + day;
        }
        if (parseInt(month) < 10) {
            month = "0" + month;
        }
        var response = year + "-" + month + "-" + day;
        return response;
    };
    EditEventFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditEvent.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditEvent.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            var newDate = new Date(data.date);
            newDate.setDate(newDate.getDate() + 1);
            data.date = new Date(newDate).getTime();
            this.eventService.updateEvent(key, data).subscribe(function (response) {
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
    ], EditEventFormComponent.prototype, "eventName", void 0);
    EditEventFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-event-form-admin',
            template: __webpack_require__(/*! ./edit-event-form.component.html */ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-event-form.component.css */ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditEventFormComponent);
    return EditEventFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-event-form/edit-event-form.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EditEventFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventFormModule", function() { return EditEventFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_event_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-event-form.component */ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.component.ts");
/* harmony import */ var _angular_services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/event.service */ "./src/app/roles/admin-area/angular-services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditEventFormModule = /** @class */ (function () {
    function EditEventFormModule() {
    }
    EditEventFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"]
            ],
            declarations: [
                _edit_event_form_component__WEBPACK_IMPORTED_MODULE_5__["EditEventFormComponent"]
            ],
            exports: [
                _edit_event_form_component__WEBPACK_IMPORTED_MODULE_5__["EditEventFormComponent"]
            ],
            providers: [
                _angular_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]
            ]
        })
    ], EditEventFormModule);
    return EditEventFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-event-page/edit-event-page-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EditEventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventPageRoutingModule", function() { return EditEventPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_event_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-event-page.component */ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_event_page_component__WEBPACK_IMPORTED_MODULE_2__["EditEventPageComponent"] }
];
var EditEventPageRoutingModule = /** @class */ (function () {
    function EditEventPageRoutingModule() {
    }
    EditEventPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditEventPageRoutingModule);
    return EditEventPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWV2ZW50LXBhZ2UvZWRpdC1ldmVudC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2VkaXQtZXZlbnQtcGFnZS9lZGl0LWV2ZW50LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/events\">Events</a></li>\r\n      <li class=\"active\">{{ eventName }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-event-form-admin (eventName)=\"setEventName($event)\"></app-edit-event-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditEventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventPageComponent", function() { return EditEventPageComponent; });
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

var EditEventPageComponent = /** @class */ (function () {
    function EditEventPageComponent() {
        this.eventName = '';
    }
    EditEventPageComponent.prototype.ngOnInit = function () {
    };
    EditEventPageComponent.prototype.setEventName = function (name) {
        this.eventName = name;
    };
    EditEventPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-event-page',
            template: __webpack_require__(/*! ./edit-event-page.component.html */ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-event-page.component.css */ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditEventPageComponent);
    return EditEventPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.module.ts ***!
  \**********************************************************************************/
/*! exports provided: EditEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventPageModule", function() { return EditEventPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_event_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-event-page.component */ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page.component.ts");
/* harmony import */ var _edit_event_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-event-page-routing.module */ "./src/app/roles/admin-area/pages/edit-event-page/edit-event-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_event_form_edit_event_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-event-form/edit-event-form.module */ "./src/app/roles/admin-area/components/edit-event-form/edit-event-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditEventPageModule = /** @class */ (function () {
    function EditEventPageModule() {
    }
    EditEventPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_event_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditEventPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_event_form_edit_event_form_module__WEBPACK_IMPORTED_MODULE_7__["EditEventFormModule"]
            ],
            declarations: [_edit_event_page_component__WEBPACK_IMPORTED_MODULE_3__["EditEventPageComponent"]]
        })
    ], EditEventPageModule);
    return EditEventPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-event-page-edit-event-page-module.js.map