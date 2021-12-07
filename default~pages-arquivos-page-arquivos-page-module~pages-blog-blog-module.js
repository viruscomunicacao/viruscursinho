(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-arquivos-page-arquivos-page-module~pages-blog-blog-module"],{

/***/ "./src/app/roles/site-area/angular-services/download-category.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/download-category.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DownloadCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCategoryService", function() { return DownloadCategoryService; });
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






var DownloadCategoryService = /** @class */ (function () {
    function DownloadCategoryService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/downloads-category";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    DownloadCategoryService.prototype.logError = function (error, operation) {
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
        this.loggerService.add("DownloadCategoryService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    DownloadCategoryService.prototype.log = function (mensagem) {
        this.loggerService.add('DownloadCategoryService: ' + mensagem);
    };
    DownloadCategoryService.prototype.getCategory = function (keyCategory) {
        var _this = this;
        return this.http.get(this.apiURL + "/" + keyCategory + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched download category with id=" + keyCategory); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategory')));
    };
    DownloadCategoryService.prototype.getCategories = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (downloadCategories) { return _this.log("fetched download categories"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategories', [])));
    };
    DownloadCategoryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DownloadCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], DownloadCategoryService);
    return DownloadCategoryService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/angular-services/download.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/download.service.ts ***!
  \**********************************************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
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






var DownloadService = /** @class */ (function () {
    function DownloadService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/downloads";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    DownloadService.prototype.logError = function (error, operation) {
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
        this.loggerService.add("DownloadService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    DownloadService.prototype.log = function (mensagem) {
        this.loggerService.add('DownloadService: ' + mensagem);
    };
    DownloadService.prototype.getDownload = function (keyDownload) {
        var _this = this;
        return this.http.get(this.apiURL + "/" + keyDownload + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched download with id=" + keyDownload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDownload')));
    };
    DownloadService.prototype.getDownloads = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (downloads) { return _this.log("fetched downloads"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDownloads', [])));
    };
    DownloadService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DownloadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], DownloadService);
    return DownloadService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/downloads/downloads.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/roles/site-area/components/downloads/downloads.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".downloads-container {\r\n  text-align: center;\r\n}\r\n\r\n.downloads-container a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.numeros-de-paginacao {\r\n  padding: 0;\r\n  text-align: right;\r\n  list-style: none;\r\n}\r\n\r\n.numeros-de-paginacao li {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\n\r\n.numeros-de-paginacao > li > a {\r\n  background-color: #F5F5F5;\r\n  text-decoration: none;\r\n  color: rgb(244,50,34);\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border-radius: 2em;\r\n}\r\n\r\n.lista-de-downloads {\r\n  margin-top: 45px;\r\n}\r\n\r\n.download img {\r\n  width: 100%;\r\n}\r\n\r\n.lista-de-downloads h5 {\r\n  line-height: 20px;\r\n}\r\n\r\n.pagina-ativa {\r\n  background-color: rgb(244,50,34) !important;\r\n  text-decoration: none;\r\n  color: white !important;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border-radius: 2em;\r\n}\r\n\r\n.categoria-download {\r\n  cursor: pointer;\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.ativo {\r\n  background-color: rgb(244,50,34);\r\n  color: white !important;\r\n  text-decoration: none;\r\n}\r\n\r\n.container-box {\r\n  display: inherit;\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 1200px) {\r\n  .container-box {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQSxrREFBa0Q7O0FBQ2xELDBEQUEwRDs7QUFFMUQsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztFQUN2QztBQUNGIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvZG93bmxvYWRzL2Rvd25sb2Fkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvd25sb2Fkcy1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRvd25sb2Fkcy1jb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubnVtZXJvcy1kZS1wYWdpbmFjYW8ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm51bWVyb3MtZGUtcGFnaW5hY2FvIGxpIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubnVtZXJvcy1kZS1wYWdpbmFjYW8gPiBsaSA+IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuXHJcbi5saXN0YS1kZS1kb3dubG9hZHMge1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGlzdGEtZGUtZG93bmxvYWRzIGg1IHtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnBhZ2luYS1hdGl2YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCw1MCwzNCkgIWltcG9ydGFudDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG59XHJcblxyXG4uY2F0ZWdvcmlhLWRvd25sb2FkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uYXRpdm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1ib3gge1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIGxlc3MgdGhhbiA3NjhweCkgKi9cclxuLyogTm8gbWVkaWEgcXVlcnkgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBCb290c3RyYXAgKi9cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXItYm94IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/site-area/components/downloads/downloads.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/site-area/components/downloads/downloads.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"downloads-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-6 col-md-3\">\r\n            <a (click)=\"selectAll()\" *ngIf=\"!categorySelected\"><h3 class=\"categoria-noticia ativo\">Todos</h3></a>\r\n            <a (click)=\"selectAll()\" *ngIf=\"categorySelected\"><h3 class=\"categoria-noticia\">Todos</h3></a>\r\n          </div>\r\n          <div class=\"col-xs-6 col-md-3\" *ngFor=\"let category of categories\">\r\n            <a (click)=\"selectCategory(category)\" *ngIf=\"categorySelected == category\"><h3 class=\"categoria-download ativo\">{{ category.title }}</h3></a>\r\n            <a (click)=\"selectCategory(category)\" *ngIf=\"categorySelected != category\"><h3 class=\"categoria-download\">{{ category.title }}</h3></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showPages\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"\">\r\n        <div class=\"row\">\r\n          <ul class=\"numeros-de-paginacao\">\r\n            <li *ngFor=\"let page of pages\">\r\n              <a (click)=\"selectPage(page)\" *ngIf=\"pageSelected == page\" class=\"pagina-ativa\">{{ page.pageNumber }}</a>\r\n              <a (click)=\"selectPage(page)\" *ngIf=\"pageSelected != page\">{{ page.pageNumber }}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"pageSelected\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3 col-md-2 download\" *ngFor=\"let download of pageSelected.content\">\r\n            <a href=\"{{ download.download.file }}\" download>\r\n              <img src=\"../../../../assets/img/pdf-icon.png\" *ngIf=\"download.download.file.search('.pdf') > 1 || download.download.file.search('.docx') > 1\">\r\n              <img src=\"../../../../assets/img/png-icon.png\" *ngIf=\"download.download.file.search('.jpg') > 1 || download.download.file.search('.jpeg') > 1 || download.download.file.search('.png') > 1\">\r\n            </a>\r\n            <div>\r\n              <h5>{{ download.download.title }}</h5>\r\n              <p>{{ download.download.date | date: 'dd/MM/yyyy' }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/site-area/components/downloads/downloads.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/downloads/downloads.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/download-category.service */ "./src/app/roles/site-area/angular-services/download-category.service.ts");
/* harmony import */ var _angular_services_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/download.service */ "./src/app/roles/site-area/angular-services/download.service.ts");
/* harmony import */ var _angular_services_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/pager.service */ "./src/app/roles/site-area/angular-services/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent(downloadService, downloadCategoryService, pagerService) {
        this.downloadService = downloadService;
        this.downloadCategoryService = downloadCategoryService;
        this.pagerService = pagerService;
        this.showPages = true;
        this.downloads = [];
        this.downloadsPerCategory = [];
        this.categories = [];
        this.pages = [];
    }
    DownloadsComponent.prototype.ngOnInit = function () {
        this.getDownloads();
        this.getCategories();
    };
    DownloadsComponent.prototype.verifyPages = function () {
        if ((this.amountDownloads - this.amountPerPage) > 0) {
            this.showPages = true;
        }
        else {
            this.showPages = false;
        }
    };
    DownloadsComponent.prototype.getDownloads = function () {
        var _this = this;
        this.downloadService.getDownloads().subscribe(function (downloads) {
            _this.downloads = downloads;
            _this.downloadsPerCategory = downloads;
            _this.pages = _this.pagerService.fillPages(downloads, _this.amountPerPage, _this.amountDownloads);
            _this.pageSelected = _this.pages[0];
            _this.verifyPages();
        });
    };
    DownloadsComponent.prototype.getCategories = function () {
        var _this = this;
        this.downloadCategoryService.getCategories().subscribe(function (response) {
            _this.categories = response;
        });
    };
    DownloadsComponent.prototype.selectPage = function (page) {
        this.pageSelected = page;
    };
    DownloadsComponent.prototype.selectAll = function () {
        if (this.categorySelected != null) {
            this.categorySelected = null;
            this.downloadsPerCategory = this.downloads;
            this.pages = this.pagerService.fillPages(this.downloadsPerCategory, this.amountPerPage, this.amountDownloads);
            this.pageSelected = this.pages[0];
            this.verifyPages();
        }
    };
    DownloadsComponent.prototype.selectCategory = function (category) {
        if (category != this.categorySelected) {
            this.categorySelected = category;
            this.downloadsPerCategory = [];
            for (var _i = 0, _a = this.downloads; _i < _a.length; _i++) {
                var download = _a[_i];
                if (download.category._id == this.categorySelected._id) {
                    this.downloadsPerCategory.push(download);
                }
            }
            this.pages = this.pagerService.fillPages(this.downloadsPerCategory, this.amountPerPage, this.amountDownloads);
            this.pageSelected = this.pages[0];
            this.verifyPages();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('amountDownloads'),
        __metadata("design:type", Number)
    ], DownloadsComponent.prototype, "amountDownloads", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('amountDownloadsPerPage'),
        __metadata("design:type", Number)
    ], DownloadsComponent.prototype, "amountPerPage", void 0);
    DownloadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! ./downloads.component.html */ "./src/app/roles/site-area/components/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.css */ "./src/app/roles/site-area/components/downloads/downloads.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_download_service__WEBPACK_IMPORTED_MODULE_2__["DownloadService"], _angular_services_download_category_service__WEBPACK_IMPORTED_MODULE_1__["DownloadCategoryService"], _angular_services_pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"]])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/downloads/downloads.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/components/downloads/downloads.module.ts ***!
  \**************************************************************************/
/*! exports provided: DownloadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsModule", function() { return DownloadsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _downloads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloads.component */ "./src/app/roles/site-area/components/downloads/downloads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DownloadsModule = /** @class */ (function () {
    function DownloadsModule() {
    }
    DownloadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            declarations: [
                _downloads_component__WEBPACK_IMPORTED_MODULE_4__["DownloadsComponent"],
            ],
            exports: [
                _downloads_component__WEBPACK_IMPORTED_MODULE_4__["DownloadsComponent"]
            ]
        })
    ], DownloadsModule);
    return DownloadsModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-arquivos-page-arquivos-page-module~pages-blog-blog-module.js.map