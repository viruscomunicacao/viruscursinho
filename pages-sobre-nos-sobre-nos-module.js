(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sobre-nos-sobre-nos-module"],{

/***/ "./src/app/roles/site-area/components/estrutura/estrutura.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/roles/site-area/components/estrutura/estrutura.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-section {\r\n    line-height: 35px;\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.list {\r\n    padding: 20px;\r\n    text-align: initial;\r\n}\r\n\r\n.list > li {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.banner-img {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvZXN0cnV0dXJhL2VzdHJ1dHVyYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL2NvbXBvbmVudHMvZXN0cnV0dXJhL2VzdHJ1dHVyYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXNlY3Rpb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxufVxyXG5cclxuLmxpc3QgPiBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmFubmVyLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/components/estrutura/estrutura.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/roles/site-area/components/estrutura/estrutura.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h3 class=\"title-section\">O ambiente faz toda a diferença</h3>\r\n    </div>\r\n    <div class=\"col-md-6 text-justify\">\r\n      <p>O Vírus Cursinho oferece uma estrutura física ampla e confortável visando o melhor aprendizado. Além de excelentes professores, disponibilizamos ainda:</p>\r\n      <ul class=\"list\">\r\n        <li>Salas com climatização e iluminação eficientes</li>\r\n        <li>Equipamentos multimídia em todas as salas</li>\r\n        <li>Estacionamento com segurança e comodidade</li>\r\n        <li>Central de atendimento telefônica</li>\r\n        <li>Sala de contágio (Recepção)</li>\r\n        <li>Biblioteca climatizada, com acervo especializado e espaço para estudo indiviualizado e em grupos</li>\r\n        <li>Internet Wi-Fi</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"carousel-container\">\r\n        <ngx-carousel [inputs]=\"carouselOne\" class=\"carousel-custom\">\r\n          <ngx-item *ngFor=\"let foto of fotos\" NgxCarouselItem>\r\n            <div class=\"carousel-inner\">\r\n              <img class=\"banner-img\" src=\"../../../assets/img/estrutura/{{ foto }}\">\r\n            </div>\r\n          </ngx-item>\r\n          <div class=\"controls-hidden\">\r\n            <button NgxCarouselPrev class=\"leftRs\">&lt;</button>\r\n            <button NgxCarouselNext class=\"rightRs\">&gt;</button>\r\n          </div>\r\n        </ngx-carousel>\r\n      </div>\r\n    </div>        \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/components/estrutura/estrutura.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/components/estrutura/estrutura.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EstruturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstruturaComponent", function() { return EstruturaComponent; });
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

var EstruturaComponent = /** @class */ (function () {
    function EstruturaComponent() {
        this.fotos = ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '8.JPG'];
    }
    EstruturaComponent.prototype.ngOnInit = function () {
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
    EstruturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estrutura',
            template: __webpack_require__(/*! ./estrutura.component.html */ "./src/app/roles/site-area/components/estrutura/estrutura.component.html"),
            styles: [__webpack_require__(/*! ./estrutura.component.css */ "./src/app/roles/site-area/components/estrutura/estrutura.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EstruturaComponent);
    return EstruturaComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/components/estrutura/estrutura.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/components/estrutura/estrutura.module.ts ***!
  \**************************************************************************/
/*! exports provided: EstruturaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstruturaModule", function() { return EstruturaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _estrutura_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estrutura.component */ "./src/app/roles/site-area/components/estrutura/estrutura.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EstruturaModule = /** @class */ (function () {
    function EstruturaModule() {
    }
    EstruturaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_carousel__WEBPACK_IMPORTED_MODULE_4__["NgxCarouselModule"],
            ],
            declarations: [
                _estrutura_component__WEBPACK_IMPORTED_MODULE_6__["EstruturaComponent"],
            ],
            exports: [
                _estrutura_component__WEBPACK_IMPORTED_MODULE_6__["EstruturaComponent"]
            ]
        })
    ], EstruturaModule);
    return EstruturaModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/sobre-nos/sobre-nos-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SobreNosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreNosRoutingModule", function() { return SobreNosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sobre_nos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sobre-nos.component */ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _sobre_nos_component__WEBPACK_IMPORTED_MODULE_2__["SobreNosComponent"] },
];
var SobreNosRoutingModule = /** @class */ (function () {
    function SobreNosRoutingModule() {
    }
    SobreNosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SobreNosRoutingModule);
    return SobreNosRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.title-page {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.red-area {\r\n  color: white;\r\n  background-color: rgb(244,50,34);\r\n  margin-top: -6px;\r\n  padding-top: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.navbar-footer-mobile {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.icon-navbar-footer-mobile {\r\n  cursor: pointer;\r\n  padding-top: 15px;\r\n  padding-bottom: 0px;\r\n  text-align: center;\r\n  width: 19.4%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > p {\r\n  color: black;\r\n  font-size: 9px;\r\n  margin-top: 10px;\r\n  word-break: break-all !important;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > img {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  width: 50px;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -6px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 0px;\r\n}\r\n\r\n.google-maps-map {\r\n  width: 100%;\r\n  height: 250px;\r\n}\r\n\r\n.container-custom {\r\n  padding-left: 25px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.text-custom > p {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.shapes {\r\n  margin-top: 50px;\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .title-page {\r\n    margin-top: 45px;\r\n  }\r\n\r\n  .navbar-footer-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL3NvYnJlLW5vcy9zb2JyZS1ub3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsc0ZBQXNGO0VBQ3RGLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix1RkFBdUY7RUFDdkYsK0VBQStFO0VBQy9FLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFFQSxrREFBa0Q7O0FBQ2xELDBEQUEwRDs7QUFFMUQsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsNENBQTRDOztBQUM1Qyw2Q0FBNkM7O0FBRTdDLGtEQUFrRDs7QUFDbEQsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL3NvYnJlLW5vcy9zb2JyZS1ub3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXdpdGgtbmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4udGl0bGUtcGFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnJlZC1hcmVhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCw1MCwzNCk7XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWZvb3Rlci1tb2JpbGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmljb24tbmF2YmFyLWZvb3Rlci1tb2JpbGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTkuNCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSA+IGEgPiBwIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGwgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24tbmF2YmFyLWZvb3Rlci1tb2JpbGUgPiBhID4gaW1nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLndoaXRlLWFyZWEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5nb29nbGUtbWFwcy1tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItY3VzdG9tIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnRleHQtY3VzdG9tID4gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnNoYXBlcyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCw1MCwzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMjUwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZSAyLjFzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc2hvcnQgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjE1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMTVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGV7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0zNSU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIHJpZ2h0Oi05MCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIHJpZ2h0Oi05MCVcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbmRldGVybWluYXRlLXNob3J0e1xyXG4gIDAle1xyXG4gICAgbGVmdDotMjAwJTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydHtcclxuICAwJXtcclxuICAgIGxlZnQ6LTIwMCU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIGxlc3MgdGhhbiA3NjhweCkgKi9cclxuLyogTm8gbWVkaWEgcXVlcnkgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBCb290c3RyYXAgKi9cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpdGxlLXBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikgeyAuLi4gfSovXHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuLypAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1sZy1taW4pIHsgLi4uIH0qL1xyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container container-custom\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"title-page text-left\">Conheça o Vírus Cursinho</h1>\r\n      </div>\r\n      <div class=\"col-md-6 text-justify\">\r\n        <p>O Vírus Cursinho oferece cursos especializados em turmas preparatórias para o Exame Nacional do Ensino Médio (ENEM), Instituto Federal do Rio Grande do Norte (IFRN), isolados com disciplinas específicas e turmas para Concursos Públicos. </p>\r\n        <p>A empresa iniciou suas atividades com uma proposta de cursos com metodologia dinâmica e direta, transmitindo conhecimentos de forma contagiante.</p>\r\n        <p>O nosso maior compromisso é trabalhar para o desenvolvimento intelectual e humanitário dos nossos alunos em qualquer idade, para atender a todas as expectativas e fazê-los ingressarem na carreira ou no cargo dos seus sonhos. </p>\r\n        <p>Seja o melhor entre os melhores, seja Vírus Cursinho!</p>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <iframe class=\"frame-video\" width=\"100%\" height=\"330px\" src=\"https://www.youtube.com/embed/NuQ6To4Vc_M?rel=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-width\">\r\n    <div class=\"shapes\">\r\n      <div style=\"z-index: 1;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve1\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"1280 0 1280 70 0 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n      <div style=\"z-index: 3; margin-top: -75px;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve2\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"0 0 1280 70 0 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <div class=\"red-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-equipe (loading)=\"setLoadingStatus($event)\"></app-equipe>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div style=\"z-index: 3; margin-top: -1px;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve2\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"0 0 1280 0 0 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <div class=\"white-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-estrutura></app-estrutura>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <div style=\"z-index: 1;\">\r\n        <svg viewBox=\"0 0 1280 70\" preserveAspectRatio=\"none\" id=\"headerCurve1\" fill=\"blue\" role=\"presentation\" aria-hidden=\"true\" style=\"width: 100%; height: 70px; bottom: 0;\">\r\n          <polygon points=\"1280 0 1280 80 -620 70\" fill=\"rgb(244,50,34)\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </div>\r\n    <div class=\"red-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-diferenciais></app-diferenciais>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"white-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-contatos></app-contatos>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.ts ***!
  \************************************************************************/
/*! exports provided: SobreNosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreNosComponent", function() { return SobreNosComponent; });
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

var SobreNosComponent = /** @class */ (function () {
    function SobreNosComponent() {
        this.loading = true;
    }
    SobreNosComponent.prototype.ngOnInit = function () { };
    SobreNosComponent.prototype.setLoadingStatus = function (status) {
        this.loading = status;
    };
    SobreNosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sobre-nos',
            template: __webpack_require__(/*! ./sobre-nos.component.html */ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.html"),
            styles: [__webpack_require__(/*! ./sobre-nos.component.css */ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreNosComponent);
    return SobreNosComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/roles/site-area/pages/sobre-nos/sobre-nos.module.ts ***!
  \*********************************************************************/
/*! exports provided: SobreNosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreNosModule", function() { return SobreNosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var _sobre_nos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre-nos.component */ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos.component.ts");
/* harmony import */ var _sobre_nos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobre-nos-routing.module */ "./src/app/roles/site-area/pages/sobre-nos/sobre-nos-routing.module.ts");
/* harmony import */ var _components_diferenciais_diferenciais_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/diferenciais/diferenciais.module */ "./src/app/roles/site-area/components/diferenciais/diferenciais.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_estrutura_estrutura_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/estrutura/estrutura.module */ "./src/app/roles/site-area/components/estrutura/estrutura.module.ts");
/* harmony import */ var _components_equipe_equipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/equipe/equipe.module */ "./src/app/roles/site-area/components/equipe/equipe.module.ts");
/* harmony import */ var _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/contatos/contatos.module */ "./src/app/roles/site-area/components/contatos/contatos.module.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SobreNosModule = /** @class */ (function () {
    function SobreNosModule() {
    }
    SobreNosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sobre_nos_component__WEBPACK_IMPORTED_MODULE_5__["SobreNosComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_carousel__WEBPACK_IMPORTED_MODULE_4__["NgxCarouselModule"],
                _sobre_nos_routing_module__WEBPACK_IMPORTED_MODULE_6__["SobreNosRoutingModule"],
                _components_diferenciais_diferenciais_module__WEBPACK_IMPORTED_MODULE_7__["DiferenciaisModule"],
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                _components_equipe_equipe_module__WEBPACK_IMPORTED_MODULE_11__["EquipeModule"],
                _components_estrutura_estrutura_module__WEBPACK_IMPORTED_MODULE_10__["EstruturaModule"],
                _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_12__["ContatosModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_13__["MenuMobileModule"]
            ],
            providers: [],
        })
    ], SobreNosModule);
    return SobreNosModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sobre-nos-sobre-nos-module.js.map