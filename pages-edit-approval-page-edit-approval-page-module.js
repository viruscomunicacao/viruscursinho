(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-approval-page-edit-approval-page-module"],{

/***/ "./src/app/roles/admin-area/classes/approval.ts":
/*!******************************************************!*\
  !*** ./src/app/roles/admin-area/classes/approval.ts ***!
  \******************************************************/
/*! exports provided: Approval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approval", function() { return Approval; });
var Approval = /** @class */ (function () {
    function Approval() {
    }
    return Approval;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-group > button {\r\n    margin-right: 7px;\r\n}\r\n\r\n.thumbnail-custom {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2VkaXQtYXBwcm92YWwtZm9ybS9lZGl0LWFwcHJvdmFsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvZWRpdC1hcHByb3ZhbC1mb3JtL2VkaXQtYXBwcm92YWwtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxufVxyXG5cclxuLnRodW1ibmFpbC1jdXN0b20ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editar aprovação</h1>\r\n<p>Preencha todos os campos abaixo.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formEditApproval\" (ngSubmit)=\"save()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Nome <span *ngIf=\"formEditApproval.controls.name.invalid\">*</span></label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label>Status <span *ngIf=\"formEditApproval.controls.status.invalid\">*</span></label>\r\n            <select class=\"form-control\" formControlName=\"status\">\r\n              <option value=\"true\">Ativo</option>\r\n              <option value=\"false\">Inativo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group\">\r\n            <label>Quantidade <span *ngIf=\"formEditApproval.controls.amount.invalid\">*</span></label>\r\n            <input type=\"number\" class=\"form-control\" formControlName=\"amount\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button class=\"btn btn-md btn-default\" [disabled]=\"formEditApproval.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n        <a class=\"btn btn-md btn-default\" routerLink=\"/admin/approvals\"><span class=\"glyphicon glyphicon-remove\"></span> Cancelar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditApprovalFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApprovalFormComponent", function() { return EditApprovalFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/approval.service */ "./src/app/roles/admin-area/angular-services/approval.service.ts");
/* harmony import */ var _classes_approval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/approval */ "./src/app/roles/admin-area/classes/approval.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditApprovalFormComponent = /** @class */ (function () {
    function EditApprovalFormComponent(approvalService, route) {
        this.approvalService = approvalService;
        this.route = route;
        this.approvalName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.approval = new _classes_approval__WEBPACK_IMPORTED_MODULE_4__["Approval"]();
        this.alert = { type: '', message: '', show: false };
    }
    EditApprovalFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getApproval();
    };
    EditApprovalFormComponent.prototype.initForm = function () {
        this.formEditApproval = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    EditApprovalFormComponent.prototype.getApproval = function () {
        var _this = this;
        var key = this.route.snapshot.paramMap.get('id');
        this.approvalService.getApproval(key).subscribe(function (response) {
            if (response !== undefined) {
                _this.approval = response;
                _this.approvalName.emit(_this.approval.name);
                _this.loadForm();
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    EditApprovalFormComponent.prototype.loadForm = function () {
        this.formEditApproval.patchValue({
            name: this.approval.name,
            amount: this.approval.amount,
            status: this.approval.status + ''
        });
    };
    EditApprovalFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formEditApproval.valid) {
            var key = this.route.snapshot.paramMap.get('id');
            var data = this.formEditApproval.value;
            if (data.status === "true") {
                data.status = true;
            }
            else {
                data.status = false;
            }
            this.approvalService.updateApproval(key, data).subscribe(function (response) {
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
    ], EditApprovalFormComponent.prototype, "approvalName", void 0);
    EditApprovalFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-approval-form-admin',
            template: __webpack_require__(/*! ./edit-approval-form.component.html */ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-approval-form.component.css */ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_approval_service__WEBPACK_IMPORTED_MODULE_3__["ApprovalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditApprovalFormComponent);
    return EditApprovalFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditApprovalFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApprovalFormModule", function() { return EditApprovalFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var _edit_approval_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-approval-form.component */ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.component.ts");
/* harmony import */ var _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/approval.service */ "./src/app/roles/admin-area/angular-services/approval.service.ts");
/* harmony import */ var _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-selector/media-selector.module */ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditApprovalFormModule = /** @class */ (function () {
    function EditApprovalFormModule() {
    }
    EditApprovalFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                _components_media_selector_media_selector_module__WEBPACK_IMPORTED_MODULE_7__["MediaSelectorModule"]
            ],
            declarations: [
                _edit_approval_form_component__WEBPACK_IMPORTED_MODULE_5__["EditApprovalFormComponent"]
            ],
            exports: [
                _edit_approval_form_component__WEBPACK_IMPORTED_MODULE_5__["EditApprovalFormComponent"]
            ],
            providers: [
                _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_6__["ApprovalService"]
            ]
        })
    ], EditApprovalFormModule);
    return EditApprovalFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: EditApprovalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApprovalPageRoutingModule", function() { return EditApprovalPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_approval_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-approval-page.component */ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _edit_approval_page_component__WEBPACK_IMPORTED_MODULE_2__["EditApprovalPageComponent"] }
];
var EditApprovalPageRoutingModule = /** @class */ (function () {
    function EditApprovalPageRoutingModule() {
    }
    EditApprovalPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], EditApprovalPageRoutingModule);
    return EditApprovalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9lZGl0LWFwcHJvdmFsLXBhZ2UvZWRpdC1hcHByb3ZhbC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL2VkaXQtYXBwcm92YWwtcGFnZS9lZGl0LWFwcHJvdmFsLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li><a routerLink=\"/admin/approvals\">Aprovações</a></li>\r\n      <li class=\"active\">{{ approvalName }}</li>\r\n      <li class=\"active\">Editar</li>\r\n    </ol>\r\n    <app-edit-approval-form-admin (approvalName)=\"setApprovalName($event)\"></app-edit-approval-form-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditApprovalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApprovalPageComponent", function() { return EditApprovalPageComponent; });
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

var EditApprovalPageComponent = /** @class */ (function () {
    function EditApprovalPageComponent() {
        this.approvalName = '';
    }
    EditApprovalPageComponent.prototype.ngOnInit = function () {
    };
    EditApprovalPageComponent.prototype.setApprovalName = function (name) {
        this.approvalName = name;
    };
    EditApprovalPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-approval-page',
            template: __webpack_require__(/*! ./edit-approval-page.component.html */ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.html"),
            styles: [__webpack_require__(/*! ./edit-approval-page.component.css */ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditApprovalPageComponent);
    return EditApprovalPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.module.ts ***!
  \****************************************************************************************/
/*! exports provided: EditApprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditApprovalPageModule", function() { return EditApprovalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_approval_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-approval-page.component */ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page.component.ts");
/* harmony import */ var _edit_approval_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-approval-page-routing.module */ "./src/app/roles/admin-area/pages/edit-approval-page/edit-approval-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
/* harmony import */ var _components_edit_approval_form_edit_approval_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-approval-form/edit-approval-form.module */ "./src/app/roles/admin-area/components/edit-approval-form/edit-approval-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditApprovalPageModule = /** @class */ (function () {
    function EditApprovalPageModule() {
    }
    EditApprovalPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _edit_approval_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditApprovalPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                _components_edit_approval_form_edit_approval_form_module__WEBPACK_IMPORTED_MODULE_7__["EditApprovalFormModule"]
            ],
            declarations: [_edit_approval_page_component__WEBPACK_IMPORTED_MODULE_3__["EditApprovalPageComponent"]]
        })
    ], EditApprovalPageModule);
    return EditApprovalPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-edit-approval-page-edit-approval-page-module.js.map