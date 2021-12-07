(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-pagina-equipes-pagina-equipes-module~pages-sobre-nos-sobre-nos-module"],{

/***/ "./src/app/roles/site-area/angular-services/team.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/roles/site-area/angular-services/team.service.ts ***!
  \******************************************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
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






var TeamService = /** @class */ (function () {
    function TeamService(http, loggerService) {
        this.http = http;
        this.loggerService = loggerService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL + "/teams";
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    TeamService.prototype.logError = function (error, operation) {
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
        this.loggerService.add("TeamService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    TeamService.prototype.log = function (mensagem) {
        this.loggerService.add('TeamService: ' + mensagem);
    };
    TeamService.prototype.getTeams = function () {
        var _this = this;
        return this.http.get(this.apiURL + "/active", { headers: this.options }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (teams) { return _this.log("fetched teams"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTeams', [])));
    };
    TeamService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/equipe/equipe.component.css":
/*!************************************************************************!*\
  !*** ./src/app/roles/site-area/components/equipe/equipe.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-inner {\r\n  margin-top: 50px;\r\n  padding: 0px;\r\n}\r\n\r\n.title-section {\r\n  line-height: 35px;\r\n}\r\n\r\n.teams {\r\n  display: inline-block;\r\n  padding: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.banner-team {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.team {\r\n  color: white;\r\n  list-style: none;\r\n  margin-bottom: 10px;\r\n  height: auto;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  padding-top: 3.5px;\r\n  padding-bottom: 3.5px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  background-color: #c3393c;\r\n  border-top-right-radius: 2em;\r\n  border-bottom-right-radius: 2em;\r\n  border-top-left-radius: 2em;\r\n  border-bottom-left-radius: 2em;\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .team {\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    padding-right: 15px;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .teams {\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvZXF1aXBlL2VxdWlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBLGtEQUFrRDs7QUFDbEQsMERBQTBEOztBQUUxRCwwQ0FBMEM7O0FBQzFDOztFQUVFO0lBQ0UsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0Y7O0FBRUEsNENBQTRDOztBQUM1Qyw2Q0FBNkM7O0FBRTdDLGtEQUFrRDs7QUFDbEQsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvZXF1aXBlL2VxdWlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0taW5uZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4udGl0bGUtc2VjdGlvbiB7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi50ZWFtcyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJhbm5lci10ZWFtIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGVhbSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAzLjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzMzkzYztcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyZW07XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJlbTtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpICovXHJcbi8qIE5vIG1lZGlhIHF1ZXJ5IHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwICovXHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAudGVhbSB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlYW1zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IEBzY3JlZW4tbWQtbWluKSB7IC4uLiB9Ki9cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLWxnLW1pbikgeyAuLi4gfSovIl19 */"

/***/ }),

/***/ "./src/app/roles/site-area/components/equipe/equipe.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/roles/site-area/components/equipe/equipe.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-justify\">\r\n      <h2 class=\"title-section\">A melhor equipe</h2>\r\n      <p>Para o sucesso de uma missão, é preciso uma excelente equipe. Com esse intuito reunimos os melhores agentes de contágio do mercado.</p>\r\n      <p>São profissionais especializados em diversas áreas e com uma grande meta em comum: propagar conhecimento.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row team-inner\">\r\n    <div class=\"col-md-12\">\r\n      <div>\r\n        <div class=\"\">\r\n          <div class=\"\">\r\n            <div class=\"\">\r\n              <div class=\"teams\">\r\n                <div class=\"team\" (click)=\"verTodasEquipes()\">Todas</div>\r\n                <div class=\"team\" (click)=\"verEquipe(equipe)\" *ngFor=\"let equipe of equipes\"> {{ equipe.team.name }}</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-9\">\r\n              <div *ngIf=\"equipeSelecionada\">\r\n                <div class=\"\">\r\n                  <div class=\"\">\r\n                    <div class=\"col-xs-12 col-md-6\">\r\n                      <h4>{{ equipeSelecionada.team.name }}</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\">\r\n                      <h4>Professores</h4>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"\">\r\n                    <div class=\"col-xs-12 col-md-6\">\r\n                      <img class=\"img-responsive img-thumbnail img-rounded\" src=\"{{ equipeSelecionada.team.photo }}\">\r\n                      <h4>{{ equipeSelecionada.team.description }}</h4>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-md-6\">\r\n                      <div class=\"lista-de-professores\">\r\n                        <div *ngFor=\"let professor of equipeSelecionada.professors\">\r\n                          <div class=\"professor\" *ngIf=\"professor !== null\">\r\n                            {{ professor.name }} - {{ professor.description }}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!equipeSelecionada\">\r\n  <img class=\"banner-team\" src=\"assets/img/professores3.png\">\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/components/equipe/equipe.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/roles/site-area/components/equipe/equipe.component.ts ***!
  \***********************************************************************/
/*! exports provided: EquipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeComponent", function() { return EquipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/team.service */ "./src/app/roles/site-area/angular-services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EquipeComponent = /** @class */ (function () {
    function EquipeComponent(teamService) {
        this.teamService = teamService;
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.equipes = [];
    }
    EquipeComponent.prototype.ngOnInit = function () {
        this.getEquipes();
    };
    EquipeComponent.prototype.getEquipes = function () {
        var _this = this;
        this.loading.emit(true);
        this.teamService.getTeams().subscribe(function (equipes) {
            _this.loading.emit(false);
            _this.equipes = equipes;
        });
    };
    EquipeComponent.prototype.verTodasEquipes = function () {
        this.equipeSelecionada = null;
    };
    EquipeComponent.prototype.verEquipe = function (equipe) {
        this.equipeSelecionada = equipe;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EquipeComponent.prototype, "loading", void 0);
    EquipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipe',
            template: __webpack_require__(/*! ./equipe.component.html */ "./src/app/roles/site-area/components/equipe/equipe.component.html"),
            styles: [__webpack_require__(/*! ./equipe.component.css */ "./src/app/roles/site-area/components/equipe/equipe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], EquipeComponent);
    return EquipeComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/equipe/equipe.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/roles/site-area/components/equipe/equipe.module.ts ***!
  \********************************************************************/
/*! exports provided: EquipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeModule", function() { return EquipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _equipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipe.component */ "./src/app/roles/site-area/components/equipe/equipe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EquipeModule = /** @class */ (function () {
    function EquipeModule() {
    }
    EquipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            declarations: [
                _equipe_component__WEBPACK_IMPORTED_MODULE_4__["EquipeComponent"],
            ],
            exports: [
                _equipe_component__WEBPACK_IMPORTED_MODULE_4__["EquipeComponent"]
            ]
        })
    ], EquipeModule);
    return EquipeModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-pagina-equipes-pagina-equipes-module~pages-sobre-nos-sobre-nos-module.js.map