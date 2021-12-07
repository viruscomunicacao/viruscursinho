(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-arquivos-page-arquivos-page-module~pages-blog-blog-module~pages-inicio-inicio-module~p~98fd1a0a"],{

/***/ "./src/app/roles/site-area/angular-services/new-category.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/new-category.service.ts ***!
  \**************************************************************************/
/*! exports provided: NewCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoryService", function() { return NewCategoryService; });
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






var NewCategoryService = /** @class */ (function () {
    function NewCategoryService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/news-category";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    NewCategoryService.prototype.logError = function (error, operation) {
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
        this.loggerService.add("NewCategoryService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    NewCategoryService.prototype.log = function (mensagem) {
        this.loggerService.add('NewCategoryService: ' + mensagem);
    };
    NewCategoryService.prototype.getCategory = function (keyCategory) {
        var _this = this;
        return this.http.get(this.apiURL + "/" + keyCategory + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched new category with id=" + keyCategory); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategory')));
    };
    NewCategoryService.prototype.getCategories = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newCategories) { return _this.log("fetched new categories"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCategories', [])));
    };
    NewCategoryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    NewCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], NewCategoryService);
    return NewCategoryService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/angular-services/new.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/new.service.ts ***!
  \*****************************************************************/
/*! exports provided: NewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewService", function() { return NewService; });
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






var NewService = /** @class */ (function () {
    function NewService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/news";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    NewService.prototype.logError = function (error, operation) {
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
        this.loggerService.add("NewService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    NewService.prototype.log = function (mensagem) {
        this.loggerService.add('NewService: ' + mensagem);
    };
    NewService.prototype.getNew = function (keyNew) {
        var _this = this;
        return this.http.get(this.apiURL + "/" + keyNew + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched news with id=" + keyNew); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getNew')));
    };
    NewService.prototype.getNews = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (news) { return _this.log("fetched news"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getNews', [])));
    };
    NewService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    NewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], NewService);
    return NewService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/angular-services/pager.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/pager.service.ts ***!
  \*******************************************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/page */ "./src/app/roles/site-area/classes/page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.fillPages = function (objects, qtdPerPage, qtdObjects) {
        var count = 0;
        var countPages = 0;
        var page;
        var i = 0;
        var pages = [];
        var objs = [];
        if (qtdObjects > -1) {
            var index = 0;
            for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                var obj = objects_1[_i];
                if (index < qtdObjects) {
                    objs.push(obj);
                }
                index++;
            }
        }
        else {
            objs = objects;
        }
        for (var _a = 0, objs_1 = objs; _a < objs_1.length; _a++) {
            var object = objs_1[_a];
            i++;
            if (count == 0) {
                countPages++;
                page = new _classes_page__WEBPACK_IMPORTED_MODULE_1__["Page"]();
                page.pageNumber = countPages;
                page.content = [];
            }
            page.content.push(object);
            if (page.content.length == qtdPerPage) {
                pages.push(page);
                count = 0;
            }
            else {
                count++;
                if (i == objs.length) {
                    pages.push(page);
                }
            }
        }
        return pages;
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/classes/page.ts":
/*!*************************************************!*\
  !*** ./src/app/roles/site-area/classes/page.ts ***!
  \*************************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/noticias/noticias.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/noticias/noticias.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noticias-container {\r\n  text-align: center;\r\n}\r\n\r\n.noticias-container a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.numeros-de-paginacao {\r\n  padding: 0;\r\n  text-align: right;\r\n  list-style: none;\r\n}\r\n\r\n.numeros-de-paginacao li {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  margin-top: 10px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n}\r\n\r\n.numeros-de-paginacao > li > a {\r\n  background-color: #F5F5F5;\r\n  text-decoration: none;\r\n  color: rgb(244,50,34);\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border-radius: 2em;\r\n}\r\n\r\n.noticia {\r\n  margin-top: 25px;\r\n  display: inline-block;\r\n  *display: inline;\r\n  width: 100%;\r\n  zoom: 1;\r\n}\r\n\r\n.noticia:hover {\r\n  opacity: 0.5;\r\n  transition: 0.5s;\r\n}\r\n\r\n.noticia img {\r\n  width: auto;\r\n  height: 189px;\r\n  text-align: center;\r\n}\r\n\r\n.noticias h1, h2, h3, h4, h5, h5, p {\r\n  text-align: left;\r\n}\r\n\r\n.pagina-ativa {\r\n  background-color: rgb(244,50,34) !important;\r\n  text-decoration: none;\r\n  color: white !important;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border-radius: 2em;\r\n}\r\n\r\n.categoria-noticia {\r\n  cursor: pointer;\r\n  text-align: center;\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\r\n}\r\n\r\n.ativo {\r\n  background-color: rgb(244,50,34);\r\n  color: white;\r\n}\r\n\r\n.container-box {\r\n  display: inherit;\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 1200px) {\r\n  .container-box {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvbm90aWNpYXMvbm90aWNpYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0dBQ3JCLGVBQWdCO0VBQ2hCLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsa0RBQWtEOztBQUNsRCwwREFBMEQ7O0FBRTFELDBDQUEwQzs7QUFDMUM7RUFDRTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7RUFDdkM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9jb21wb25lbnRzL25vdGljaWFzL25vdGljaWFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWNpYXMtY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3RpY2lhcy1jb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubnVtZXJvcy1kZS1wYWdpbmFjYW8ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm51bWVyb3MtZGUtcGFnaW5hY2FvIGxpIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubnVtZXJvcy1kZS1wYWdpbmFjYW8gPiBsaSA+IGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuXHJcbi5ub3RpY2lhIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAqZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHpvb206IDE7XHJcbn1cclxuXHJcbi5ub3RpY2lhOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLm5vdGljaWEgaW1nIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDE4OXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGljaWFzIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDUsIHAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5wYWdpbmEtYXRpdmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcclxufVxyXG5cclxuLmNhdGVnb3JpYS1ub3RpY2lhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmF0aXZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm94IHtcclxuICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIGxlc3MgdGhhbiA3NjhweCkgKi9cclxuLyogTm8gbWVkaWEgcXVlcnkgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBCb290c3RyYXAgKi9cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXItYm94IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/components/noticias/noticias.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/noticias/noticias.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"noticias-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6 col-md-3\">\r\n      <a (click)=\"selectAll()\" *ngIf=\"!categorySelected\"><h3 class=\"categoria-noticia ativo\">Todos</h3></a>\r\n      <a (click)=\"selectAll()\" *ngIf=\"categorySelected\"><h3 class=\"categoria-noticia\">Todos</h3></a>\r\n    </div>\r\n    <div class=\"col-xs-6 col-md-3\" *ngFor=\"let category of categories\">\r\n      <a (click)=\"selectCategory(category)\" *ngIf=\"categorySelected == category\"><h3 class=\"categoria-noticia ativo\">{{ category.title }}</h3></a>\r\n      <a (click)=\"selectCategory(category)\" *ngIf=\"categorySelected != category\"><h3 class=\"categoria-noticia\">{{ category.title }}</h3></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showPages\">\r\n    <div class=\"col-md-12\">\r\n      <ul class=\"numeros-de-paginacao\">\r\n        <li *ngFor=\"let page of pages\">\r\n          <a (click)=\"selectPage(page)\" *ngIf=\"pageSelected == page\" class=\"pagina-ativa\">{{ page.pageNumber }}</a>\r\n          <a (click)=\"selectPage(page)\" *ngIf=\"pageSelected != page\">{{ page.pageNumber }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"pageSelected\">\r\n    <div class=\"container-box\">\r\n      <div class=\"col-md-3 noticia\" *ngFor=\"let new of pageSelected.content\">\r\n        <a routerLink=\"/noticia/{{ new.new._key }}\" *ngIf=\"categorySelected == null || new.category._key == categorySelected._key\">\r\n          <img src=\"{{ new.new.photo }}\">\r\n          <div>\r\n            <h3>{{ new.new.title }}</h3>\r\n            <p>{{ new.new.date | date: 'dd/MM/yyyy'}}</p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/site-area/components/noticias/noticias.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/roles/site-area/components/noticias/noticias.component.ts ***!
  \***************************************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/new-category.service */ "./src/app/roles/site-area/angular-services/new-category.service.ts");
/* harmony import */ var _angular_services_new_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../angular-services/new.service */ "./src/app/roles/site-area/angular-services/new.service.ts");
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




var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(newService, newCategoryService, pagerService) {
        this.newService = newService;
        this.newCategoryService = newCategoryService;
        this.pagerService = pagerService;
        this.showPages = true;
        this.news = [];
        this.newsPerCategory = [];
        this.categories = [];
        this.pages = [];
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        this.getNews();
        this.getCategories();
    };
    NoticiasComponent.prototype.verifyPages = function () {
        if ((this.amountNews - this.amountPerPage) > 0) {
            this.showPages = true;
        }
        else {
            this.showPages = false;
        }
    };
    NoticiasComponent.prototype.getNews = function () {
        var _this = this;
        this.newService.getNews().subscribe(function (response) {
            console.log(response);
            _this.news = response;
            _this.newsPerCategory = response;
            _this.amountNews = _this.news.length;
            _this.pages = _this.pagerService.fillPages(response, _this.amountPerPage, _this.amountNews);
            _this.pageSelected = _this.pages[0];
            _this.verifyPages();
        });
    };
    NoticiasComponent.prototype.getCategories = function () {
        var _this = this;
        this.newCategoryService.getCategories().subscribe(function (response) {
            _this.categories = response;
        });
    };
    NoticiasComponent.prototype.selectPage = function (page) {
        this.pageSelected = page;
    };
    NoticiasComponent.prototype.selectAll = function () {
        if (this.categorySelected != null) {
            this.categorySelected = null;
            this.newsPerCategory = this.news;
            this.pages = this.pagerService.fillPages(this.newsPerCategory, this.amountPerPage, this.amountNews);
            this.pageSelected = this.pages[0];
            this.verifyPages();
        }
    };
    NoticiasComponent.prototype.selectCategory = function (category) {
        if (category != this.categorySelected) {
            this.categorySelected = category;
            this.newsPerCategory = [];
            for (var _i = 0, _a = this.news; _i < _a.length; _i++) {
                var news = _a[_i];
                if (news.category._id == this.categorySelected._id) {
                    this.newsPerCategory.push(news);
                }
            }
            this.pages = this.pagerService.fillPages(this.newsPerCategory, this.amountPerPage, this.amountNews);
            this.pageSelected = this.pages[0];
            this.verifyPages();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('amountNews'),
        __metadata("design:type", Number)
    ], NoticiasComponent.prototype, "amountNews", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('amountPerPage'),
        __metadata("design:type", Number)
    ], NoticiasComponent.prototype, "amountPerPage", void 0);
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/roles/site-area/components/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.css */ "./src/app/roles/site-area/components/noticias/noticias.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_new_service__WEBPACK_IMPORTED_MODULE_2__["NewService"], _angular_services_new_category_service__WEBPACK_IMPORTED_MODULE_1__["NewCategoryService"], _angular_services_pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/noticias/noticias.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/site-area/components/noticias/noticias.module.ts ***!
  \************************************************************************/
/*! exports provided: NoticiasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasModule", function() { return NoticiasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _noticias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noticias.component */ "./src/app/roles/site-area/components/noticias/noticias.component.ts");
/* harmony import */ var _angular_services_pager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../angular-services/pager.service */ "./src/app/roles/site-area/angular-services/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NoticiasModule = /** @class */ (function () {
    function NoticiasModule() {
    }
    NoticiasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            declarations: [
                _noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"],
            ],
            exports: [
                _noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"]
            ],
            providers: [
                _angular_services_pager_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]
            ]
        })
    ], NoticiasModule);
    return NoticiasModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-arquivos-page-arquivos-page-module~pages-blog-blog-module~pages-inicio-inicio-module~p~98fd1a0a.js.map