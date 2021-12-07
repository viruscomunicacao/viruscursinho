(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ouvidoria-ouvidoria-module"],{

/***/ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/ouvidoria/ouvidoria-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OuvidoriaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuvidoriaRoutingModule", function() { return OuvidoriaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ouvidoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ouvidoria.component */ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _ouvidoria_component__WEBPACK_IMPORTED_MODULE_2__["OuvidoriaComponent"] },
];
var OuvidoriaRoutingModule = /** @class */ (function () {
    function OuvidoriaRoutingModule() {
    }
    OuvidoriaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], OuvidoriaRoutingModule);
    return OuvidoriaRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.title-page {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.red-area {\r\n  color: white;\r\n  background-color: rgb(244,50,34);\r\n  margin-top: -6px;\r\n  padding-top: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.navbar-footer-mobile {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.icon-navbar-footer-mobile {\r\n  cursor: pointer;\r\n  padding-top: 15px;\r\n  padding-bottom: 0px;\r\n  text-align: center;\r\n  width: 19.4%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > p {\r\n  color: black;\r\n  font-size: 9px;\r\n  margin-top: 10px;\r\n  word-break: break-all !important;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > img {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  width: 50px;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -6px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 25px;\r\n}\r\n\r\n.btn-custom {\r\n  background-color: rgb(244,50,34);\r\n  color: white;\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .title-page {\r\n    margin-top: 45px;\r\n  }\r\n\r\n  .navbar-footer-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL291dmlkb3JpYS9vdXZpZG9yaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLHNGQUFzRjtFQUN0Riw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsdUZBQXVGO0VBQ3ZGLCtFQUErRTtFQUMvRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUEsa0RBQWtEOztBQUNsRCwwREFBMEQ7O0FBRTFELDBDQUEwQzs7QUFDMUM7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLDRDQUE0Qzs7QUFDNUMsNkNBQTZDOztBQUU3QyxrREFBa0Q7O0FBQ2xELDZDQUE2QyIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9wYWdlcy9vdXZpZG9yaWEvb3V2aWRvcmlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ucGFnZS13aXRoLW5hdmJhci1maXhlZC10b3Age1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXdpdGgtbmF2YmFyLWZpeGVkLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLnRpdGxlLXBhZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5yZWQtYXJlYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm5hdmJhci1mb290ZXItbW9iaWxlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uLW5hdmJhci1mb290ZXItbW9iaWxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE5LjQlO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmljb24tbmF2YmFyLWZvb3Rlci1tb2JpbGUgPiBhID4gcCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uLW5hdmJhci1mb290ZXItbW9iaWxlID4gYSA+IGltZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi53aGl0ZS1hcmVhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB6LWluZGV4OiAyNTA7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBpbmRldGVybWluYXRlIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWxsLWNoYW5nZTogbGVmdCwgcmlnaHQ7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc2hvcnQgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1zaG9ydCAyLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMTVzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4xNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZXtcclxuICAwJXtcclxuICAgIGxlZnQ6LTM1JTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDAlO1xyXG4gICAgcmlnaHQ6LTkwJVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDAlO1xyXG4gICAgcmlnaHQ6LTkwJVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtc2hvcnR7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0yMDAlO1xyXG4gICAgcmlnaHQ6MTAwJVxyXG4gIH1cclxuICA2MCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbmRldGVybWluYXRlLXNob3J0e1xyXG4gIDAle1xyXG4gICAgbGVmdDotMjAwJTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgbGVzcyB0aGFuIDc2OHB4KSAqL1xyXG4vKiBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIEJvb3RzdHJhcCAqL1xyXG5cclxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAudGl0bGUtcGFnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1mb290ZXItbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGFnZS13aXRoLW5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IEBzY3JlZW4tbWQtbWluKSB7IC4uLiB9Ki9cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLWxnLW1pbikgeyAuLi4gfSovXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container container-custom\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"title-page text-left\">Ouvidoria</h1>\r\n      </div>\r\n      <div class=\"col-md-12 text-justify\">\r\n        <p>Estamos à disposição para receber questionamentos, críticas, elogios, sugestões.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-width\">\r\n    <div class=\"container\">\r\n      <div class=\"row\" *ngIf=\"resposta\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"alert alert-{{ tipoResposta }} alert-dismissable\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            <p>{{ resposta }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"formContact\" (ngSubmit)=\"send()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label>Nome</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n              <label>Email</label>\r\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <div class=\"form-group\">\r\n              <label>Celular</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label>Mensagem</label>\r\n              <textarea class=\"form-control\" formControlName=\"message\" rows=\"5\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-lg btn-custom\" [disabled]=\"formContact.invalid\">Enviar</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.ts ***!
  \************************************************************************/
/*! exports provided: OuvidoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuvidoriaComponent", function() { return OuvidoriaComponent; });
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



var OuvidoriaComponent = /** @class */ (function () {
    function OuvidoriaComponent(emailService) {
        this.emailService = emailService;
        this.loading = false;
    }
    OuvidoriaComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    OuvidoriaComponent.prototype.initForm = function () {
        this.formContact = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    OuvidoriaComponent.prototype.send = function () {
        var _this = this;
        if (this.formContact.valid) {
            var data = this.formContact.value;
            var date = new Date();
            var body = "\n        Nome: " + data.name + "\n        Email: " + data.email + "\n        Celular: " + data.phone + "\n        Mensagem: " + data.message + "\n        Data: " + date + "\n      ";
            this.emailService.sendEmail(body, 'Ouvidoria').subscribe(function (response) {
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
    OuvidoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ouvidoria',
            template: __webpack_require__(/*! ./ouvidoria.component.html */ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.html"),
            styles: [__webpack_require__(/*! ./ouvidoria.component.css */ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], OuvidoriaComponent);
    return OuvidoriaComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/roles/site-area/pages/ouvidoria/ouvidoria.module.ts ***!
  \*********************************************************************/
/*! exports provided: OuvidoriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuvidoriaModule", function() { return OuvidoriaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ouvidoria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ouvidoria.component */ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria.component.ts");
/* harmony import */ var _ouvidoria_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ouvidoria-routing.module */ "./src/app/roles/site-area/pages/ouvidoria/ouvidoria-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contatos/contatos.module */ "./src/app/roles/site-area/components/contatos/contatos.module.ts");
/* harmony import */ var _angular_services_email_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../angular-services/email.service */ "./src/app/roles/site-area/angular-services/email.service.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var OuvidoriaModule = /** @class */ (function () {
    function OuvidoriaModule() {
    }
    OuvidoriaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _ouvidoria_component__WEBPACK_IMPORTED_MODULE_5__["OuvidoriaComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__["ContatosModule"],
                _ouvidoria_routing_module__WEBPACK_IMPORTED_MODULE_6__["OuvidoriaRoutingModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_11__["MenuMobileModule"]
            ],
            providers: [
                _angular_services_email_service__WEBPACK_IMPORTED_MODULE_10__["EmailService"]
            ],
        })
    ], OuvidoriaModule);
    return OuvidoriaModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ouvidoria-ouvidoria-module.js.map