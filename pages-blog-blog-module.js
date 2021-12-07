(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-blog-module"],{

/***/ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".numeros-de-paginacao {\r\n  text-align: right;\r\n}\r\n\r\n.numeros-de-paginacao {\r\n  list-style: none;\r\n}\r\n\r\n.numeros-de-paginacao li {\r\n  display: inline-block;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.pagina-ativa {\r\n  background-color: #f5f5f5;\r\n  color: rgb(244,50,34) !important;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  border-radius: 2em;\r\n}\r\n\r\n.lista-de-alunos {\r\n  text-align: center;\r\n}\r\n\r\n.aluno-aprovado {\r\n  margin-top: 25px;\r\n}\r\n\r\n.aluno-aprovado a {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n.aluno-aprovado img {\r\n  height: auto;\r\n  text-align: center;\r\n}\r\n\r\n.aluno-aprovado h1, h2, h3, h4, h5, p {\r\n  text-align: left;\r\n}\r\n\r\n.container-box {\r\n  display: inherit;\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .aluno-aprovado img {\r\n    height: auto;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvYWx1bm9zLWFwcm92YWRvcy9hbHVub3MtYXByb3ZhZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxrREFBa0Q7O0FBQ2xELDBEQUEwRDs7QUFFMUQsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvYWx1bm9zLWFwcm92YWRvcy9hbHVub3MtYXByb3ZhZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVtZXJvcy1kZS1wYWdpbmFjYW8ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubnVtZXJvcy1kZS1wYWdpbmFjYW8ge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5udW1lcm9zLWRlLXBhZ2luYWNhbyBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYS1hdGl2YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBjb2xvcjogcmdiKDI0NCw1MCwzNCkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuXHJcbi5saXN0YS1kZS1hbHVub3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsdW5vLWFwcm92YWRvIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYWx1bm8tYXByb3ZhZG8gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYWx1bm8tYXByb3ZhZG8gaW1nIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWx1bm8tYXByb3ZhZG8gaDEsIGgyLCBoMywgaDQsIGg1LCBwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJveCB7XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpICovXHJcbi8qIE5vIG1lZGlhIHF1ZXJ5IHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwICovXHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5hbHVuby1hcHJvdmFkbyBpbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"row\" *ngIf=\"showPages\">\r\n    <div class=\"col-md-12\">\r\n      <ul class=\"numeros-de-paginacao\">\r\n        <li *ngFor=\"let page of pages\">\r\n          <a (click)=\"selectPage(page)\" *ngIf=\"pageSelected == page\" class=\"pagina-ativa\">{{ page.pageNumber }}</a>\r\n          <a (click)=\"selectPage(page)\" *ngIf=\"pageSelected != page\">{{ page.pageNumber }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"pageSelected\">\r\n    <div class=\"container-box\">\r\n      <div class=\"col-md-4 col-lg-3 aluno-aprovado\" *ngFor=\"let approval of pageSelected.content\">\r\n        <a>\r\n          <img class=\"img-responsive\" src=\"{{ approval.photo }}\">\r\n          <div>\r\n            <h3>{{ approval.name }}</h3>\r\n            <p> {{ approval.description }}</p>\r\n            <p style=\"font-size: 10px;\">{{ approval.date | date:\"dd/MM/yyyy\" }}</p>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AlunosAprovadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosAprovadosComponent", function() { return AlunosAprovadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/approval.service */ "./src/app/roles/site-area/angular-services/approval.service.ts");
/* harmony import */ var _classes_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/page */ "./src/app/roles/site-area/classes/page.ts");
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




var AlunosAprovadosComponent = /** @class */ (function () {
    function AlunosAprovadosComponent(approvalService, pagerService) {
        this.approvalService = approvalService;
        this.pagerService = pagerService;
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPages = true;
        this.approvals = [];
        this.pageSelected = new _classes_page__WEBPACK_IMPORTED_MODULE_2__["Page"]();
        this.pages = [];
    }
    AlunosAprovadosComponent.prototype.ngOnInit = function () {
        this.getAlunos();
    };
    AlunosAprovadosComponent.prototype.verifyPages = function () {
        if ((this.amountApprovals - this.amountPerPage) > 0) {
            this.showPages = true;
        }
        else {
            this.showPages = false;
        }
    };
    AlunosAprovadosComponent.prototype.getAlunos = function () {
        var _this = this;
        this.approvalService.getApprovals().subscribe(function (approvals) {
            _this.approvals = approvals;
            _this.pages = _this.pagerService.fillPages(approvals, _this.amountPerPage, _this.amountApprovals);
            _this.pageSelected = _this.pages[0];
            _this.verifyPages();
        });
    };
    AlunosAprovadosComponent.prototype.selectPage = function (page) {
        this.pageSelected = page;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AlunosAprovadosComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('amountApprovals'),
        __metadata("design:type", Number)
    ], AlunosAprovadosComponent.prototype, "amountApprovals", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('amountPerPage'),
        __metadata("design:type", Number)
    ], AlunosAprovadosComponent.prototype, "amountPerPage", void 0);
    AlunosAprovadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alunos-aprovados',
            template: __webpack_require__(/*! ./alunos-aprovados.component.html */ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.html"),
            styles: [__webpack_require__(/*! ./alunos-aprovados.component.css */ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_approval_service__WEBPACK_IMPORTED_MODULE_1__["ApprovalService"], _angular_services_pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"]])
    ], AlunosAprovadosComponent);
    return AlunosAprovadosComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AlunosAprovadosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosAprovadosModule", function() { return AlunosAprovadosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _alunos_aprovados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alunos-aprovados.component */ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AlunosAprovadosModule = /** @class */ (function () {
    function AlunosAprovadosModule() {
    }
    AlunosAprovadosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            declarations: [
                _alunos_aprovados_component__WEBPACK_IMPORTED_MODULE_4__["AlunosAprovadosComponent"],
            ],
            exports: [
                _alunos_aprovados_component__WEBPACK_IMPORTED_MODULE_4__["AlunosAprovadosComponent"]
            ]
        })
    ], AlunosAprovadosModule);
    return AlunosAprovadosModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/blog/blog-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/roles/site-area/pages/blog/blog-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component */ "./src/app/roles/site-area/pages/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/blog/blog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/roles/site-area/pages/blog/blog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.title-page {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.red-area {\r\n  color: white;\r\n  background-color: rgb(244,50,34);\r\n  margin-top: -6px;\r\n  padding-top: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -6px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 0px;\r\n}\r\n\r\n.btn-bordered-white {\r\n  border: 2px solid rgb(244,50,34);\r\n  background: white;\r\n  color: rgb(244,50,34);\r\n  font-size: 19px;\r\n  transition: 0.7s;\r\n  margin-top: 25px;\r\n}\r\n\r\n.btn-bordered-white:hover {\r\n  background: rgb(244,50,34);\r\n  color: white;\r\n}\r\n\r\n.btn-bordered-red {\r\n  border: 2px solid white;\r\n  background: rgb(244,50,34);\r\n  color: white;\r\n  font-size: 19px;\r\n  transition: 0.7s;\r\n  margin-top: 25px;\r\n}\r\n\r\n.btn-bordered-red:hover {\r\n  background: white;\r\n  color: rgb(244,50,34);\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .title-page {\r\n    margin-top: 45px;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsc0ZBQXNGO0VBQ3RGLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix1RkFBdUY7RUFDdkYsK0VBQStFO0VBQy9FLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFFQSxrREFBa0Q7O0FBQ2xELDBEQUEwRDs7QUFFMUQsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsNENBQTRDOztBQUM1Qyw2Q0FBNkM7O0FBRTdDLGtEQUFrRDs7QUFDbEQsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtdG9wIHtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4ucGFnZS13aXRoLW5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucmVkLWFyZWEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi53aGl0ZS1hcmVhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5cclxuLmJ0bi1ib3JkZXJlZC13aGl0ZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0NCw1MCwzNCk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5idG4tYm9yZGVyZWQtd2hpdGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ib3JkZXJlZC1yZWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uYnRuLWJvcmRlcmVkLXJlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAyNTA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBpbmRldGVybWluYXRlIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc2hvcnQgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1zaG9ydCAyLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMTVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4xNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZXtcclxuICAwJXtcclxuICAgIGxlZnQ6LTM1JTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDAlO1xyXG4gICAgcmlnaHQ6LTkwJVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDAlO1xyXG4gICAgcmlnaHQ6LTkwJVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtc2hvcnR7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0yMDAlO1xyXG4gICAgcmlnaHQ6MTAwJVxyXG4gIH1cclxuICA2MCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbmRldGVybWluYXRlLXNob3J0e1xyXG4gIDAle1xyXG4gICAgbGVmdDotMjAwJTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgbGVzcyB0aGFuIDc2OHB4KSAqL1xyXG4vKiBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIEJvb3RzdHJhcCAqL1xyXG5cclxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAudGl0bGUtcGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikgeyAuLi4gfSovXHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuLypAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1sZy1taW4pIHsgLi4uIH0qL1xyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/blog/blog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/roles/site-area/pages/blog/blog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"title-page text-left\">Notícias</h1>\r\n      </div>\r\n      <div class=\"col-md-12 text-justify\">\r\n        <p>Fique por dentro de todas as nossas novidades.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-width\">\r\n    <div class=\"white-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-noticias (loading)=\"setLoadingStatus($event)\" [amountNews]=\"amountNews\" [amountPerPage]=\"amountPerPage\"></app-noticias>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <a routerLink=\"/aprovacoes\" class=\"btn btn-md btn-bordered-white\">Ver mais</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div style=\"z-index: 1;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve1\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"1280 0 1280 70 0 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n      <div style=\"z-index: 3; margin-top: -75px;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve2\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"0 0 1280 70 0 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <div class=\"red-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h1 class=\"title-page text-left\">Alunos aprovados</h1>\r\n          </div>\r\n          <div class=\"col-md-12 text-justify\">\r\n            <p>Confira nossos alunos aprovados.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"\">\r\n          <div class=\"\">\r\n            <app-alunos-aprovados [amountApprovals]=\"amountApprovals\" [amountPerPage]=\"amountPerPage\"></app-alunos-aprovados>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <a routerLink=\"/aprovacoes\" class=\"btn btn-md btn-bordered-red\">Ver mais</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--<div>\r\n      <div style=\"z-index: 3; margin-top: 0px;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve2\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"0 0 1280 0 0 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </div>-->\r\n    <div class=\"white-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h1 class=\"title-page text-left\">Downloads</h1>\r\n          </div>\r\n          <div class=\"col-md-12 text-justify\">\r\n            <p>Baixe agora provas, gabaritos, apostilas e muito mais.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"\">\r\n          <div class=\"\">\r\n            <app-downloads [amountDownloads]=\"amountDownloads\" [amountDownloadsPerPage]=\"amountDownloadsPerPage\"></app-downloads>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <a routerLink=\"/downloads\" class=\"btn btn-md btn-bordered-white\">Ver mais</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"footer\">\r\n          <app-footer></app-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n  <!--<div class=\"container-fluid navbar-footer-mobile\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-2 icon-navbar-footer-mobile\">\r\n        <a href=\"https://app12.activesoft.com.br/sistema/entrar.asp?p=VIRUS\" target=\"_blank\">\r\n          <img src=\"../../../../../assets/img/icons/user.png\">\r\n          <p>Aluno</p>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-xs-2 icon-navbar-footer-mobile\">\r\n        <a href=\"https://www.viruscursinho.com.br/simulado\" target=\"_blank\">\r\n          <img src=\"../../../../../assets/img/icons/test.png\">\r\n          <p>Simulados</p>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-xs-2 icon-navbar-footer-mobile\">\r\n        <a routerLink=\"/blog\">\r\n          <img src=\"../../../../../assets/img/icons/newspaper.png\">\r\n          <p>Notícias</p>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-xs-2 icon-navbar-footer-mobile\">\r\n        <a routerLink=\"/blog\">\r\n          <img src=\"../../../../../assets/img/icons/photo-album.png\">\r\n          <p>Eventos</p>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-xs-2 icon-navbar-footer-mobile\">\r\n        <a routerLink=\"/blog\">\r\n          <img src=\"../../../../../assets/img/icons/calendar.png\">\r\n          <p>Calendário</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>-->\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/pages/blog/blog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/roles/site-area/pages/blog/blog.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
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

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
        this.loading = false;
        this.amountNews = 4;
        this.amountPerPage = 4;
        this.amountApprovals = 4;
        this.amountDownloads = 8;
        this.amountDownloadsPerPage = 8;
    }
    BlogComponent.prototype.ngOnInit = function () { };
    BlogComponent.prototype.setLoadingStatus = function (status) {
        this.loading = status;
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/roles/site-area/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/roles/site-area/pages/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/blog/blog.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/roles/site-area/pages/blog/blog.module.ts ***!
  \***********************************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog.component */ "./src/app/roles/site-area/pages/blog/blog.component.ts");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/roles/site-area/pages/blog/blog-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contatos/contatos.module */ "./src/app/roles/site-area/components/contatos/contatos.module.ts");
/* harmony import */ var _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/noticias/noticias.module */ "./src/app/roles/site-area/components/noticias/noticias.module.ts");
/* harmony import */ var _components_alunos_aprovados_alunos_aprovados_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/alunos-aprovados/alunos-aprovados.module */ "./src/app/roles/site-area/components/alunos-aprovados/alunos-aprovados.module.ts");
/* harmony import */ var _components_downloads_downloads_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/downloads/downloads.module */ "./src/app/roles/site-area/components/downloads/downloads.module.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__["ContatosModule"],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_6__["BlogRoutingModule"],
                _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__["NoticiasModule"],
                _components_alunos_aprovados_alunos_aprovados_module__WEBPACK_IMPORTED_MODULE_11__["AlunosAprovadosModule"],
                _components_downloads_downloads_module__WEBPACK_IMPORTED_MODULE_12__["DownloadsModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_13__["MenuMobileModule"]
            ],
            providers: [],
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-blog-blog-module.js.map