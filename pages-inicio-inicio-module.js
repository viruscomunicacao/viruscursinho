(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./src/app/roles/site-area/angular-services/banner.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/banner.service.ts ***!
  \********************************************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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






var BannerService = /** @class */ (function () {
    function BannerService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/banners";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    BannerService.prototype.logError = function (error, operation) {
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
        this.loggerService.add("BannerService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    BannerService.prototype.log = function (mensagem) {
        this.loggerService.add('BannerService: ' + mensagem);
    };
    BannerService.prototype.getBanner = function (keyBanner) {
        var _this = this;
        return this.http.get(this.apiURL + "/" + keyBanner, { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched banner with id=" + keyBanner); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBanner')));
    };
    BannerService.prototype.getBanners = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (banners) { return _this.log("fetched banners"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getBanners', [])));
    };
    BannerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    BannerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], BannerService);
    return BannerService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/approvals/approvals.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/roles/site-area/components/approvals/approvals.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-section {\r\n  color: rgb(244,50,34);\r\n  line-height: 35px;\r\n}\r\n\r\n.approval {\r\n  padding: 25px;\r\n}\r\n\r\n.approval label {\r\n  width: 125px;\r\n  color: white;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2em;\r\n  padding-right: 0px;\r\n  padding-left: 5px;\r\n  padding-top: 9.5px;\r\n  padding-bottom: 9.5px;\r\n  font-size: 70px;\r\n}\r\n\r\n.approval h3 {\r\n  margin-top: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvYXBwcm92YWxzL2FwcHJvdmFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9jb21wb25lbnRzL2FwcHJvdmFscy9hcHByb3ZhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1zZWN0aW9uIHtcclxuICBjb2xvcjogcmdiKDI0NCw1MCwzNCk7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5hcHByb3ZhbCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLmFwcHJvdmFsIGxhYmVsIHtcclxuICB3aWR0aDogMTI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDkuNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA5LjVweDtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuXHJcbi5hcHByb3ZhbCBoMyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/components/approvals/approvals.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/site-area/components/approvals/approvals.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <h3 class=\"title-section\">O cursinho que mais aprova!</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 text-center approval\" *ngFor=\"let approval of approvals\">\r\n      <div>\r\n        <label>{{ approval.amount }}</label>\r\n      </div>\r\n      <h4>{{ approval.name }}</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center\">\r\n      <h3 class=\"title-section\">Venha para o Vírus Cursinho e conquiste sua aprovação!</h3>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/components/approvals/approvals.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/approvals/approvals.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApprovalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsComponent", function() { return ApprovalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/approval.service */ "./src/app/roles/site-area/angular-services/approval.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApprovalsComponent = /** @class */ (function () {
    function ApprovalsComponent(approvalService) {
        this.approvalService = approvalService;
        /* counters = [
          { title: 'ENEM', quantity: '52' },
          { title: 'Concursos', quantity: '43' },
          { title: 'IFRN', quantity: '23' }
        ]; */
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.approvals = [];
    }
    ApprovalsComponent.prototype.ngOnInit = function () {
        this.getApprovals();
    };
    ApprovalsComponent.prototype.getApprovals = function () {
        var _this = this;
        this.loading.emit(true);
        this.approvalService.getApprovals().subscribe(function (approvals) {
            _this.approvals = approvals;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApprovalsComponent.prototype, "loading", void 0);
    ApprovalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approvals',
            template: __webpack_require__(/*! ./approvals.component.html */ "./src/app/roles/site-area/components/approvals/approvals.component.html"),
            styles: [__webpack_require__(/*! ./approvals.component.css */ "./src/app/roles/site-area/components/approvals/approvals.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_approval_service__WEBPACK_IMPORTED_MODULE_1__["ApprovalService"]])
    ], ApprovalsComponent);
    return ApprovalsComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/approvals/approvals.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/components/approvals/approvals.module.ts ***!
  \**************************************************************************/
/*! exports provided: ApprovalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsModule", function() { return ApprovalsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _approvals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approvals.component */ "./src/app/roles/site-area/components/approvals/approvals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApprovalsModule = /** @class */ (function () {
    function ApprovalsModule() {
    }
    ApprovalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            declarations: [
                _approvals_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalsComponent"],
            ],
            exports: [
                _approvals_component__WEBPACK_IMPORTED_MODULE_4__["ApprovalsComponent"]
            ]
        })
    ], ApprovalsModule);
    return ApprovalsModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/banners/banners.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/components/banners/banners.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n  width: 100%;\r\n}\r\n\r\n.carousel-full-width {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.carousel-center {\r\n  text-align: center;\r\n}\r\n\r\n.carousel-container img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.carousel-container .carousel-title {\r\n  color: black;\r\n}\r\n\r\n.carousel-title-left {\r\n  text-align: left;\r\n}\r\n\r\n.carousel-title-center {\r\n  text-align: center;\r\n}\r\n\r\n.carousel-title-right {\r\n  text-align: right;\r\n}\r\n\r\n.controls-hidden {\r\n  display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvYmFubmVycy9iYW5uZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9jb21wb25lbnRzL2Jhbm5lcnMvYmFubmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC10aXRsZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtdGl0bGUtbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNhcm91c2VsLXRpdGxlLWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtdGl0bGUtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY29udHJvbHMtaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/components/banners/banners.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/roles/site-area/components/banners/banners.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-container\">\r\n  <ngx-carousel [inputs]=\"carouselOne\" class=\"carousel-full-width carousel-center\">\r\n    <ngx-item *ngFor=\"let banner of banners\" NgxCarouselItem>\r\n      <div>\r\n        <a *ngIf=\"banner.url; else elseBlock\" href=\"{{ banner.url }}\" target=\"_blank\">\r\n          <img class=\"banner-img\" src=\"{{ banner.photo }}\">\r\n        </a>\r\n        <ng-template #elseBlock>\r\n          <img class=\"banner-img\" src=\"{{ banner.photo }}\">\r\n        </ng-template>\r\n      </div>\r\n    </ngx-item>\r\n    <div class=\"controls-hidden\">\r\n      <button NgxCarouselPrev class=\"leftRs\">&lt;</button>\r\n      <button NgxCarouselNext class=\"rightRs\">&gt;</button>\r\n    </div>\r\n  </ngx-carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/site-area/components/banners/banners.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/roles/site-area/components/banners/banners.component.ts ***!
  \*************************************************************************/
/*! exports provided: BannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersComponent", function() { return BannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/banner.service */ "./src/app/roles/site-area/angular-services/banner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannersComponent = /** @class */ (function () {
    function BannersComponent(bannerService) {
        this.bannerService = bannerService;
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.banners = [];
    }
    BannersComponent.prototype.ngOnInit = function () {
        this.getBanners();
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            touch: true,
            loop: true
        };
    };
    BannersComponent.prototype.getBanners = function () {
        var _this = this;
        this.loading.emit(true);
        this.bannerService.getBanners().subscribe(function (response) {
            _this.loading.emit(false);
            _this.banners = response;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BannersComponent.prototype, "loading", void 0);
    BannersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banners',
            template: __webpack_require__(/*! ./banners.component.html */ "./src/app/roles/site-area/components/banners/banners.component.html"),
            styles: [__webpack_require__(/*! ./banners.component.css */ "./src/app/roles/site-area/components/banners/banners.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"]])
    ], BannersComponent);
    return BannersComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/banners/banners.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/roles/site-area/components/banners/banners.module.ts ***!
  \**********************************************************************/
/*! exports provided: BannersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannersModule", function() { return BannersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var _banners_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banners.component */ "./src/app/roles/site-area/components/banners/banners.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BannersModule = /** @class */ (function () {
    function BannersModule() {
    }
    BannersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_carousel__WEBPACK_IMPORTED_MODULE_4__["NgxCarouselModule"],
            ],
            declarations: [
                _banners_component__WEBPACK_IMPORTED_MODULE_5__["BannersComponent"],
            ],
            exports: [
                _banners_component__WEBPACK_IMPORTED_MODULE_5__["BannersComponent"]
            ]
        })
    ], BannersModule);
    return BannersModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/inicio/inicio-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/site-area/pages/inicio/inicio-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: InicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioRoutingModule", function() { return InicioRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component */ "./src/app/roles/site-area/pages/inicio/inicio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"] },
];
var InicioRoutingModule = /** @class */ (function () {
    function InicioRoutingModule() {
    }
    InicioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], InicioRoutingModule);
    return InicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/inicio/inicio.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/roles/site-area/pages/inicio/inicio.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.scroll-mouse {\r\n  -webkit-animation-name: move-mouse;\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-name: move-mouse;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  position: relative;\r\n  width: 32px;\r\n  margin-top: 0px;\r\n}\r\n\r\n@-webkit-keyframes move-mouse {\r\n  0% {top: 0px;}\r\n  25% {top: 10px;}\r\n  75% {top: 0px;}\r\n  100% {top: -12px;}\r\n}\r\n\r\n@keyframes move-mouse {\r\n  0% {top: 0px;}\r\n  25% {top: 10px;}\r\n  75% {top: 8px;}\r\n  100% {top: 0px;}\r\n}\r\n\r\n.red-area {\r\n  color: white;\r\n  background-color: #51143a;\r\n  margin-top: -5px;\r\n  padding-top: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.navbar-footer-mobile {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.icon-navbar-footer-mobile {\r\n  cursor: pointer;\r\n  padding-top: 15px;\r\n  padding-bottom: 0px;\r\n  text-align: center;\r\n  width: 19.4%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > p {\r\n  color: black;\r\n  font-size: 9px;\r\n  margin-top: 10px;\r\n  word-break: break-all !important;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > img {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  width: 50px;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -5px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 0px;\r\n}\r\n\r\n.google-maps-map {\r\n  width: 100%;\r\n  height: 250px;\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n.menu-desktop {\r\n  display: none;\r\n}\r\n\r\n.menu-desktop > a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.shapes {\r\n  margin-bottom: -6px;\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-footer-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .menu-icon {\r\n    width: 33.3%;\r\n    display: inline-block;\r\n    text-align: center;\r\n  }\r\n\r\n  .menu-icon > img {\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .menu-desktop {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n\r\n/* Atigo abaixo */\r\n\r\n.pagina-inicio {\r\n  text-align: left;\r\n  padding-top: 0px;\r\n}\r\n\r\n.area-branca {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -5px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.area-banner {\r\n  margin-top: 15px;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.texto-vermelho {\r\n  color: rgb(248,109,100);\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n}\r\n\r\n.rodape {\r\n  margin-top: 60px;\r\n}\r\n\r\n.titulo-da-pagina {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.full-width {\r\n  /*margin-top: -84px; VER ONDE EST USANDO ISSO*/ \r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .home-xs {\r\n    margin-top: 0px;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxJQUFJLFFBQVEsQ0FBQztFQUNiLEtBQUssU0FBUyxDQUFDO0VBQ2YsS0FBSyxRQUFRLENBQUM7RUFDZCxNQUFNLFVBQVUsQ0FBQztBQUNuQjs7QUFFQTtFQUNFLElBQUksUUFBUSxDQUFDO0VBQ2IsS0FBSyxTQUFTLENBQUM7RUFDZixLQUFLLFFBQVEsQ0FBQztFQUNkLE1BQU0sUUFBUSxDQUFDO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsc0ZBQXNGO0VBQ3RGLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix1RkFBdUY7RUFDdkYsK0VBQStFO0VBQy9FLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsa0RBQWtEOztBQUNsRCwwREFBMEQ7O0FBRTFELDBDQUEwQzs7QUFDMUM7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQSw0Q0FBNEM7O0FBQzVDLDZDQUE2Qzs7QUFFN0Msa0RBQWtEOztBQUNsRCw2Q0FBNkM7O0FBSzdDLGlCQUFpQjs7QUFFakI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXdpdGgtbmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsLW1vdXNlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBtb3ZlLW1vdXNlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBtb3ZlLW1vdXNlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUtbW91c2Uge1xyXG4gIDAlIHt0b3A6IDBweDt9XHJcbiAgMjUlIHt0b3A6IDEwcHg7fVxyXG4gIDc1JSB7dG9wOiAwcHg7fVxyXG4gIDEwMCUge3RvcDogLTEycHg7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUtbW91c2Uge1xyXG4gIDAlIHt0b3A6IDBweDt9XHJcbiAgMjUlIHt0b3A6IDEwcHg7fVxyXG4gIDc1JSB7dG9wOiA4cHg7fVxyXG4gIDEwMCUge3RvcDogMHB4O31cclxufVxyXG5cclxuLnJlZC1hcmVhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxMTQzYTtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxOS40JTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLW5hdmJhci1mb290ZXItbW9iaWxlID4gYSA+IHAge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSA+IGEgPiBpbWcge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4ud2hpdGUtYXJlYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmdvb2dsZS1tYXBzLW1hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCw1MCwzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMjUwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZSAyLjFzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc2hvcnQgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjE1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMTVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGV7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0zNSU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIHJpZ2h0Oi05MCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIHJpZ2h0Oi05MCVcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbmRldGVybWluYXRlLXNob3J0e1xyXG4gIDAle1xyXG4gICAgbGVmdDotMjAwJTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydHtcclxuICAwJXtcclxuICAgIGxlZnQ6LTIwMCU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1kZXNrdG9wIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubWVudS1kZXNrdG9wID4gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNoYXBlcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpICovXHJcbi8qIE5vIG1lZGlhIHF1ZXJ5IHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwICovXHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIC5tZW51LWljb24ge1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaWNvbiA+IGltZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtZGVza3RvcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikgeyAuLi4gfSovXHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuLypAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1sZy1taW4pIHsgLi4uIH0qL1xyXG5cclxuXHJcblxyXG5cclxuLyogQXRpZ28gYWJhaXhvICovXHJcblxyXG4ucGFnaW5hLWluaWNpbyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uYXJlYS1icmFuY2Ege1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYXJlYS1iYW5uZXIge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnRleHRvLXZlcm1lbGhvIHtcclxuICBjb2xvcjogcmdiKDI0OCwxMDksMTAwKTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ucm9kYXBlIHtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4udGl0dWxvLWRhLXBhZ2luYSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIC8qbWFyZ2luLXRvcDogLTg0cHg7IFZFUiBPTkRFIEVTVCBVU0FORE8gSVNTTyovIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuaG9tZS14cyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/inicio/inicio.component.html":
/*!********************************************************************!*\
  !*** ./src/app/roles/site-area/pages/inicio/inicio.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container-fluid full-width\">\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <app-banners (loading)=\"setLoadingStatus($event)\"></app-banners>\r\n      </div>\r\n    </div>\r\n    <div class=\"menu-desktop\">\r\n      <a routerLink=\"/noticias\">\r\n        <div class=\"menu-icon\">\r\n          <img src=\"../../../../../assets/img/icons/newspaper.png\">\r\n          <p>Notícias</p>\r\n        </div>\r\n      </a>\r\n      <a routerLink=\"/downloads\">\r\n        <div class=\"menu-icon\">\r\n          <img src=\"../../../../../assets/img/icons/download3.png\">\r\n          <p>Downloads</p>\r\n        </div>\r\n      </a>\r\n      <a routerLink=\"/calendario\">\r\n        <div class=\"menu-icon\">\r\n          <img src=\"../../../../../assets/img/icons/calendar.png\">\r\n          <p>Calendário</p>\r\n        </div>  \r\n      </a>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"text-center\">\r\n        <a><img src=\"../../../../assets/img/mouse.png\" class=\"scroll-mouse\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-fluid full-width\">\r\n    <div class=\"shapes\">\r\n      <div class=\"\">\r\n        <div style=\"z-index: 1;\">\r\n          <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve1\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n            <polygon points=\"1280 0 1280 70 0 70\" fill=\"#51143a\"></polygon>\r\n          </svg>\r\n        </div>\r\n        <div style=\"z-index: 3; margin-top: -75px;\">\r\n          <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve2\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n            <polygon points=\"0 0 1280 70 0 70\" fill=\"#51143a\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"red-area\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <app-diferenciais></app-diferenciais>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"white-area\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <app-approvals></app-approvals>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h1 class=\"title-page text-left\">Notícias</h1>\r\n        </div>\r\n        <div class=\"col-md-12 text-justify\">\r\n          <p>Fique por dentro de todas as nossas novidades.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"full-width\">\r\n      <div class=\"white-area\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <app-noticias (loading)=\"setLoadingStatus($event)\" [amountNews]=\"amountNews\" [amountPerPage]=\"amountPerPage\"></app-noticias>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"white-area\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <app-contatos></app-contatos>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div>\r\n          <iframe class=\"google-maps-map\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d993.3787692857696!2d-37.349416383906984!3d-5.181387458252827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1516901138982\" width=\"365\" height=\"350\" frameborder=\"0\" style=\"border:0;\" allowfullscreen></iframe>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"footer\">\r\n          <app-footer></app-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/pages/inicio/inicio.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/roles/site-area/pages/inicio/inicio.component.ts ***!
  \******************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
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

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
        this.loading = true;
        this.amountNews = -1;
        this.amountPerPage = 4;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.setLoadingStatus = function (status) {
        this.loading = status;
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/roles/site-area/pages/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/roles/site-area/pages/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/inicio/inicio.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/roles/site-area/pages/inicio/inicio.module.ts ***!
  \***************************************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inicio.component */ "./src/app/roles/site-area/pages/inicio/inicio.component.ts");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/roles/site-area/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_banners_banners_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/banners/banners.module */ "./src/app/roles/site-area/components/banners/banners.module.ts");
/* harmony import */ var _components_diferenciais_diferenciais_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/diferenciais/diferenciais.module */ "./src/app/roles/site-area/components/diferenciais/diferenciais.module.ts");
/* harmony import */ var _components_approvals_approvals_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/approvals/approvals.module */ "./src/app/roles/site-area/components/approvals/approvals.module.ts");
/* harmony import */ var _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/noticias/noticias.module */ "./src/app/roles/site-area/components/noticias/noticias.module.ts");
/* harmony import */ var _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/contatos/contatos.module */ "./src/app/roles/site-area/components/contatos/contatos.module.ts");
/* harmony import */ var _components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/contact-form/contact-form.module */ "./src/app/roles/site-area/components/contact-form/contact-form.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioRoutingModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                _components_banners_banners_module__WEBPACK_IMPORTED_MODULE_7__["BannersModule"],
                _components_diferenciais_diferenciais_module__WEBPACK_IMPORTED_MODULE_8__["DiferenciaisModule"],
                _components_approvals_approvals_module__WEBPACK_IMPORTED_MODULE_9__["ApprovalsModule"],
                _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__["NoticiasModule"],
                _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_11__["ContatosModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_13__["FooterModule"],
                _components_contact_form_contact_form_module__WEBPACK_IMPORTED_MODULE_12__["ContactFormModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_14__["MenuMobileModule"]
            ],
            providers: [],
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module.js.map