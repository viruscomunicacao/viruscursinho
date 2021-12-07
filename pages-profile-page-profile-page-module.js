(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-page-profile-page-module"],{

/***/ "./src/app/roles/admin-area/components/profile-form/profile-form.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/profile-form/profile-form.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearrow-20 {\r\n    height: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL3Byb2ZpbGUtZm9ybS9wcm9maWxlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvcHJvZmlsZS1mb3JtL3Byb2ZpbGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFycm93LTIwIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/profile-form/profile-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/profile-form/profile-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Meu perfil</h1>\r\n<p>Altere seus dados de acesso.</p>\r\n<div class=\"clearrow-20\"></div>\r\n<div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n<form [formGroup]=\"formProfile\" (ngSubmit)=\"save()\">\r\n  <div class=\"form-group\">\r\n    <label>Usuário <span *ngIf=\"formProfile.controls.user.invalid\">*</span></label>\r\n    <input type=\"text\" class=\"form-control\" formControlName=\"user\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Senha <span *ngIf=\"formProfile.controls.password.invalid\">*</span></label>\r\n    <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Confirmar nova senha <span *ngIf=\"formProfile.controls.confirmPassword.invalid\">*</span></label>\r\n    <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-md\" [disabled]=\"formProfile.invalid\"><span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/profile-form/profile-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/profile-form/profile-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormComponent", function() { return ProfileFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/auth.service */ "./src/app/roles/admin-area/angular-services/auth.service.ts");
/* harmony import */ var _angular_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/user.service */ "./src/app/roles/admin-area/angular-services/user.service.ts");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/user */ "./src/app/roles/admin-area/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileFormComponent = /** @class */ (function () {
    function ProfileFormComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.user = new _classes_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.alert = { type: '', message: '', show: false };
    }
    ProfileFormComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getUserLogged();
    };
    ProfileFormComponent.prototype.getUserLogged = function () {
        var _this = this;
        this.authService.getSession().subscribe(function (response) {
            if (response !== undefined) {
                if (response.auth) {
                    _this.user = response.session[0];
                    _this.loadForm();
                }
            }
            else {
                if (localStorage.getItem('tokenUserLogged') !== null) {
                    alert('Houve algum erro ao carregar os dados!');
                }
            }
        });
    };
    ProfileFormComponent.prototype.initForm = function () {
        this.formProfile = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    ProfileFormComponent.prototype.loadForm = function () {
        this.formProfile.patchValue({
            user: this.user.user
        });
    };
    ProfileFormComponent.prototype.save = function () {
        var _this = this;
        if (this.formProfile.valid) {
            var data = this.formProfile.value;
            if (data.password === data.confirmPassword) {
                delete data.confirmPassword;
                data.status = true;
                this.userService.updateUser(this.user._key, data).subscribe(function (response) {
                    if (response !== undefined) {
                        _this.alert.type = 'success';
                        _this.alert.message = 'Dados alterados com sucesso!';
                        _this.alert.show = true;
                    }
                    else {
                        alert('Houve algum erro ao salvar os dados!');
                    }
                });
            }
            else {
                this.alert.type = 'danger';
                this.alert.message = 'As senhas não conferem!';
                this.alert.show = true;
            }
        }
    };
    ProfileFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-form',
            template: __webpack_require__(/*! ./profile-form.component.html */ "./src/app/roles/admin-area/components/profile-form/profile-form.component.html"),
            styles: [__webpack_require__(/*! ./profile-form.component.css */ "./src/app/roles/admin-area/components/profile-form/profile-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/profile-form/profile-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/profile-form/profile-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormModule", function() { return ProfileFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-form.component */ "./src/app/roles/admin-area/components/profile-form/profile-form.component.ts");
/* harmony import */ var _angular_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-services/auth.service */ "./src/app/roles/admin-area/angular-services/auth.service.ts");
/* harmony import */ var _angular_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/user.service */ "./src/app/roles/admin-area/angular-services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileFormModule = /** @class */ (function () {
    function ProfileFormModule() {
    }
    ProfileFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [
                _profile_form_component__WEBPACK_IMPORTED_MODULE_4__["ProfileFormComponent"]
            ],
            exports: [
                _profile_form_component__WEBPACK_IMPORTED_MODULE_4__["ProfileFormComponent"]
            ],
            providers: [
                _angular_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                _angular_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
            ]
        })
    ], ProfileFormModule);
    return ProfileFormModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/profile-page/profile-page-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/profile-page/profile-page-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-page.component */ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _profile_page_component__WEBPACK_IMPORTED_MODULE_2__["ProfilePageComponent"] }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/profile-page/profile-page.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    min-height: 80vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9wYWdlcy9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL3BhZ2VzL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/profile-page/profile-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-admin></app-navbar-admin>\r\n<div class=\"content\">\r\n  <div class=\"container\">\r\n    <ol class=\"breadcrumb\">\r\n      <li><a routerLink=\"/admin/home\">Início</a></li>\r\n      <li class=\"active\">Meu perfil</li>\r\n    </ol>\r\n    <app-profile-form></app-profile-form>\r\n  </div>\r\n</div>\r\n<app-footer-admin></app-footer-admin>\r\n"

/***/ }),

/***/ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/profile-page/profile-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
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

var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent() {
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
    };
    ProfilePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.css */ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/pages/profile-page/profile-page.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/roles/admin-area/pages/profile-page/profile-page.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-page.component */ "./src/app/roles/admin-area/pages/profile-page/profile-page.component.ts");
/* harmony import */ var _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-page-routing.module */ "./src/app/roles/admin-area/pages/profile-page/profile-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/admin-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_profile_form_profile_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile-form/profile-form.module */ "./src/app/roles/admin-area/components/profile-form/profile-form.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/admin-area/components/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfilePageRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _components_profile_form_profile_form_module__WEBPACK_IMPORTED_MODULE_6__["ProfileFormModule"]
            ],
            declarations: [_profile_page_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePageComponent"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-page-profile-page-module.js.map