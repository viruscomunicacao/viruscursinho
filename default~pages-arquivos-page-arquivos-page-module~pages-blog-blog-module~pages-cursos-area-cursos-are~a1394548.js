(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-arquivos-page-arquivos-page-module~pages-blog-blog-module~pages-cursos-area-cursos-are~a1394548"],{

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/app/roles/site-area/angular-services/email.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/email.service.ts ***!
  \*******************************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./src/app/roles/site-area/angular-services/logger.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EmailService = /** @class */ (function () {
    function EmailService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/emails";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    EmailService.prototype.logError = function (error, operation) {
        var message = '';
        var reload = false;
        if (error.status === 404) {
            message = 'Falha ao se comunicar com a API: Rota não encontrada (ERRO 404)';
        }
        else if (error.status === 401) {
            message = 'Falha ao se comunicar com a API: Token inválido ou expirado';
        }
        else if (error.status === 400) {
            message = "Os dados enviados s\u00E3o inv\u00E1lidos! \nCausa do erro: " + error.error.details[0].message;
        }
        else if (error.status >= 500 && error.status <= 505) {
            message = "Houve algum erro no servidor! Entre em contato com o administrador!";
        }
        else {
            message = error.Message;
        }
        this.loggerService.add("EmailsService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    EmailService.prototype.log = function (mensagem) {
        this.loggerService.add('EmailsService: ' + mensagem);
    };
    EmailService.prototype.sendEmail = function (body, subject) {
        var _this = this;
        return this.http.post(this.apiURL, { corpo: body, assunto: subject }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.log("email sended: response: " + response.message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('sendEmail')));
    };
    EmailService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/angular-services/logger.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/logger.service.ts ***!
  \********************************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
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

var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.logs = [];
    }
    LoggerService.prototype.add = function (log) {
        this.logs.push(log);
        //console.log(log);
    };
    LoggerService.prototype.clear = function () {
        this.logs = [];
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/contact-form/contact-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contact-form/contact-form.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9jb21wb25lbnRzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roles/site-area/components/contact-form/contact-form.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contact-form/contact-form.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sugerir-curso-container\">\r\n  <div class=\"col-md-12\" *ngIf=\"resposta\">\r\n    <div class=\"alert alert-{{ tipoResposta }} alert-dismissable\" role=\"alert\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <p>{{ resposta }}</p>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"formContact\" (ngSubmit)=\"send()\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label>Nome</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label>Email</label>\r\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label>Celular</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group\">\r\n        <label>Mensagem</label>\r\n        <textarea class=\"form-control\" rows=\"5\" formControlName=\"message\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n      <button class=\"btn btn-md btn-default\" [disabled]=\"formContact.invalid\">Enviar</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/site-area/components/contact-form/contact-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contact-form/contact-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/email.service */ "./src/app/roles/site-area/angular-services/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(emailService) {
        this.emailService = emailService;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ContactFormComponent.prototype.initForm = function () {
        this.formContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    ContactFormComponent.prototype.send = function () {
        var _this = this;
        if (this.formContact.valid) {
            var data = this.formContact.value;
            var date = new Date();
            var body = "\n        Nome: " + data.name + "\n        Email: " + data.email + "\n        Celular: " + data.phone + "\n        Mensagem: " + data.message + "\n        Data: " + date + "\n      ";
            this.emailService.sendEmail(body, 'Contato').subscribe(function (response) {
                if (response) {
                    _this.resposta = response.message;
                    if (response.status == 'success') {
                        _this.tipoResposta = response.status;
                    }
                    else {
                        _this.tipoResposta == 'danger';
                    }
                }
                else {
                    _this.tipoResposta = 'danger';
                    _this.resposta = 'Falha ao enviar o email. Tente novamente em instantes.';
                }
            });
        }
    };
    ContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/roles/site-area/components/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/roles/site-area/components/contact-form/contact-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/contact-form/contact-form.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contact-form/contact-form.module.ts ***!
  \********************************************************************************/
/*! exports provided: ContactFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormModule", function() { return ContactFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _contact_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form.component */ "./src/app/roles/site-area/components/contact-form/contact-form.component.ts");
/* harmony import */ var _angular_services_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../angular-services/email.service */ "./src/app/roles/site-area/angular-services/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactFormModule = /** @class */ (function () {
    function ContactFormModule() {
    }
    ContactFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
            ],
            declarations: [
                _contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"],
            ],
            exports: [
                _contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"]
            ],
            providers: [
                _angular_services_email_service__WEBPACK_IMPORTED_MODULE_6__["EmailService"]
            ]
        })
    ], ContactFormModule);
    return ContactFormModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/contatos/contatos.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contatos/contatos.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-section {\r\n  color: rgb(244,50,34);\r\n  line-height: 35px; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvY29udGF0b3MvY29udGF0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9zaXRlLWFyZWEvY29tcG9uZW50cy9jb250YXRvcy9jb250YXRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNlY3Rpb24ge1xyXG4gIGNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBsaW5lLWhlaWdodDogMzVweDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/site-area/components/contatos/contatos.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contatos/contatos.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <h3 class=\"title-section\">Quer ser nosso aluno?<br> Entre em contato conosco!</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"\">\r\n    <div class=\"\">\r\n      <div class=\"contacts\">\r\n        <app-contact-form></app-contact-form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/components/contatos/contatos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contatos/contatos.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContatosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosComponent", function() { return ContatosComponent; });
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

var ContatosComponent = /** @class */ (function () {
    function ContatosComponent() {
    }
    ContatosComponent.prototype.ngOnInit = function () {
    };
    ContatosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contatos',
            template: __webpack_require__(/*! ./contatos.component.html */ "./src/app/roles/site-area/components/contatos/contatos.component.html"),
            styles: [__webpack_require__(/*! ./contatos.component.css */ "./src/app/roles/site-area/components/contatos/contatos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatosComponent);
    return ContatosComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/contatos/contatos.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/site-area/components/contatos/contatos.module.ts ***!
  \************************************************************************/
/*! exports provided: ContatosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosModule", function() { return ContatosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contatos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contatos.component */ "./src/app/roles/site-area/components/contatos/contatos.component.ts");
/* harmony import */ var _contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact-form/contact-form.module */ "./src/app/roles/site-area/components/contact-form/contact-form.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContatosModule = /** @class */ (function () {
    function ContatosModule() {
    }
    ContatosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_3__["ContactFormModule"]
            ],
            declarations: [
                _contatos_component__WEBPACK_IMPORTED_MODULE_2__["ContatosComponent"]
            ],
            exports: [
                _contatos_component__WEBPACK_IMPORTED_MODULE_2__["ContatosComponent"]
            ]
        })
    ], ContatosModule);
    return ContatosModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-arquivos-page-arquivos-page-module~pages-blog-blog-module~pages-cursos-area-cursos-are~a1394548.js.map