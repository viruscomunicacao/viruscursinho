(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-approvals-page-approvals-page-module"],{

/***/ "./src/app/roles/admin-area/components/list-approvals/list-approvals.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-approvals/list-approvals.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n\r\n.btn-custom {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtYXBwcm92YWxzL2xpc3QtYXBwcm92YWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL2xpc3QtYXBwcm92YWxzL2xpc3QtYXBwcm92YWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXJyb3ctMjAge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-approvals/list-approvals.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-approvals/list-approvals.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Aprovações</h1>\r\n  <p>Quantidade de aprovações do Vírus Cursinho.</p>\r\n</div>\r\n<div class=\"text-right\">\r\n  <a routerLink=\"/admin/approvals/new\" class=\"btn btn-md btn-default\">Nova aprovação</a>\r\n</div>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Nome</th>\r\n        <th>Status</th>\r\n        <th class=\"text-center\">Ações</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let approval of approvals\">\r\n        <td>{{ approval.name }}</td>\r\n        <td>\r\n          <span *ngIf=\"approval.status\">Ativo</span>\r\n          <span *ngIf=\"!approval.status\">Inativo</span>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <a class=\"btn btn-xs btn-default btn-custom\" routerLink=\"/admin/approvals/{{ approval._key }}\">Editar</a>\r\n          <button class=\"btn btn-xs btn-default\" (click)=\"removeApproval(approval)\">Excluir</button>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"approvals.length <= 0\">\r\n        <td class=\"text-center\" colspan=\"3\">Nenhuma aprovação cadastrada</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/list-approvals/list-approvals.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-approvals/list-approvals.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ListApprovalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApprovalsComponent", function() { return ListApprovalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/approval.service */ "./src/app/roles/admin-area/angular-services/approval.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListApprovalsComponent = /** @class */ (function () {
    function ListApprovalsComponent(approvalService) {
        this.approvalService = approvalService;
        this.approvals = [];
        this.alert = { type: '', message: '', show: false };
    }
    ListApprovalsComponent.prototype.ngOnInit = function () {
        this.getApprovals();
    };
    ListApprovalsComponent.prototype.getApprovals = function () {
        var _this = this;
        this.approvalService.getApprovals().subscribe(function (response) {
            if (response !== undefined) {
                _this.approvals = response;
            }
            else {
                alert('Houve algum erro ao carregar os dados!');
            }
        });
    };
    ListApprovalsComponent.prototype.removeApproval = function (approval) {
        var _this = this;
        var confirm = prompt('Para confirmar esta operação digite SIM: \n\n ');
        if (confirm === 'SIM') {
            this.approvals = this.approvals.filter(function (a) { return a !== approval; });
            this.approvalService.removeApproval(approval._key).subscribe(function (response) {
                if (response !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Aprovação excluído com sucesso!';
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
    ListApprovalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-approvals-admin',
            template: __webpack_require__(/*! ./list-approvals.component.html */ "./src/app/roles/admin-area/components/list-approvals/list-approvals.component.html"),
            styles: [__webpack_require__(/*! ./list-approvals.component.css */ "./src/app/roles/admin-area/components/list-approvals/list-approvals.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_approval_service__WEBPACK_IMPORTED_MODULE_1__["ApprovalService"]])
    ], ListApprovalsComponent);
    return ListApprovalsComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/list-approvals/list-approvals.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/list-approvals/list-approvals.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ListApprovalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApprovalsModule", function() { return ListApprovalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_approvals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-approvals.component */ "./src/app/roles/admin-area/components/list-approvals/list-approvals.component.ts");
/* harmony import */ var _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../angular-services/approval.service */ "./src/app/roles/admin-area/angular-services/approval.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListApprovalsModule = /** @class */ (function () {
    function ListApprovalsModule() {
    }
    ListApprovalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _list_approvals_component__WEBPACK_IMPORTED_MODULE_3__["ListApprovalsComponent"]
            ],
            exports: [
                _list_approvals_component__WEBPACK_IMPORTED_MODULE_3__["ListApprovalsComponent"]
            ],
            providers: [
                _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_4__["ApprovalService"]
            ]
        })
    ], ListApprovalsModule);
    return ListApprovalsModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/approvals-page/approvals-page-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/approvals-page/approvals-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ApprovalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsPageRoutingModule", function() { return ApprovalsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _approvals_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approvals-page.component */ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _approvals_page_component__WEBPACK_IMPORTED_MODULE_2__["ApprovalsPageComponent"] }
];
var ApprovalsPageRoutingModule = /** @class */ (function () {
    function ApprovalsPageRoutingModule() {
    }
    ApprovalsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ApprovalsPageRoutingModule);
    return ApprovalsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9hcHByb3ZhbHMtcGFnZS9hcHByb3ZhbHMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9hcHByb3ZhbHMtcGFnZS9hcHByb3ZhbHMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Aprovações</li>\r\n    </ol>\r\n    <app-list-approvals-admin></app-list-approvals-admin>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApprovalsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsPageComponent", function() { return ApprovalsPageComponent; });
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

var ApprovalsPageComponent = /** @class */ (function () {
    function ApprovalsPageComponent() {
    }
    ApprovalsPageComponent.prototype.ngOnInit = function () {
    };
    ApprovalsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approvals-page',
            template: __webpack_require__(/*! ./approvals-page.component.html */ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.html"),
            styles: [__webpack_require__(/*! ./approvals-page.component.css */ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApprovalsPageComponent);
    return ApprovalsPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/approvals-page/approvals-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: ApprovalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsPageModule", function() { return ApprovalsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _approvals_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approvals-page.component */ "./src/app/roles/admin-area/pages/approvals-page/approvals-page.component.ts");
/* harmony import */ var _approvals_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approvals-page-routing.module */ "./src/app/roles/admin-area/pages/approvals-page/approvals-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_list_approvals_list_approvals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/list-approvals/list-approvals.module */ "./src/app/roles/admin-area/components/list-approvals/list-approvals.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ApprovalsPageModule = /** @class */ (function () {
    function ApprovalsPageModule() {
    }
    ApprovalsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _approvals_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["ApprovalsPageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_list_approvals_list_approvals_module__WEBPACK_IMPORTED_MODULE_6__["ListApprovalsModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [
                _approvals_page_component__WEBPACK_IMPORTED_MODULE_3__["ApprovalsPageComponent"]
            ]
        })
    ], ApprovalsPageModule);
    return ApprovalsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-approvals-page-approvals-page-module.js.map