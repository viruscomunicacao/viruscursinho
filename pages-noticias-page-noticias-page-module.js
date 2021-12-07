(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-noticias-page-noticias-page-module"],{

/***/ "./src/app/roles/site-area/pages/noticias-page/noticias-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/noticias-page/noticias-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: NoticiasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageRoutingModule", function() { return NoticiasPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _noticias_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticias-page.component */ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _noticias_page_component__WEBPACK_IMPORTED_MODULE_2__["NoticiasPageComponent"] },
];
var NoticiasPageRoutingModule = /** @class */ (function () {
    function NoticiasPageRoutingModule() {
    }
    NoticiasPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NoticiasPageRoutingModule);
    return NoticiasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/noticias-page/noticias-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.title-page {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.container-custom {\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n\r\n.red-area {\r\n  color: white;\r\n  background-color: rgb(244,50,34);\r\n  margin-top: -6px;\r\n  padding-top: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.navbar-footer-mobile {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.icon-navbar-footer-mobile {\r\n  cursor: pointer;\r\n  padding-top: 15px;\r\n  padding-bottom: 0px;\r\n  text-align: center;\r\n  width: 19.4%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > p {\r\n  color: black;\r\n  font-size: 9px;\r\n  margin-top: 10px;\r\n  word-break: break-all !important;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > img {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  width: 50px;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -6px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 0px;\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .title-page {\r\n    margin-top: 45px;\r\n  }\r\n\r\n  .navbar-footer-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL25vdGljaWFzLXBhZ2Uvbm90aWNpYXMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLHNGQUFzRjtFQUN0Riw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsdUZBQXVGO0VBQ3ZGLCtFQUErRTtFQUMvRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUEsa0RBQWtEOztBQUNsRCwwREFBMEQ7O0FBRTFELDBDQUEwQzs7QUFDMUM7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLDRDQUE0Qzs7QUFDNUMsNkNBQTZDOztBQUU3QyxrREFBa0Q7O0FBQ2xELDZDQUE2QyIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9wYWdlcy9ub3RpY2lhcy1wYWdlL25vdGljaWFzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXdpdGgtbmF2YmFyLWZpeGVkLXRvcCB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4udGl0bGUtcGFnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b20ge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ucmVkLWFyZWEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxOS40JTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLW5hdmJhci1mb290ZXItbW9iaWxlID4gYSA+IHAge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSA+IGEgPiBpbWcge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4ud2hpdGUtYXJlYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCw1MCwzNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMjUwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MgLmluZGV0ZXJtaW5hdGU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlIDIuMXMgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZSAyLjFzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc2hvcnQgMi4xcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjE1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMTVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGV7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0zNSU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIHJpZ2h0Oi05MCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTAwJTtcclxuICAgIHJpZ2h0Oi05MCVcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbmRldGVybWluYXRlLXNob3J0e1xyXG4gIDAle1xyXG4gICAgbGVmdDotMjAwJTtcclxuICAgIHJpZ2h0OjEwMCVcclxuICB9XHJcbiAgNjAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydHtcclxuICAwJXtcclxuICAgIGxlZnQ6LTIwMCU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIGxlc3MgdGhhbiA3NjhweCkgKi9cclxuLyogTm8gbWVkaWEgcXVlcnkgc2luY2UgdGhpcyBpcyB0aGUgZGVmYXVsdCBpbiBCb290c3RyYXAgKi9cclxuXHJcbi8qIFNtYWxsIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRpdGxlLXBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGl1bSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLW1kLW1pbikgeyAuLi4gfSovXHJcblxyXG4vKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cclxuLypAbWVkaWEgKG1pbi13aWR0aDogQHNjcmVlbi1sZy1taW4pIHsgLi4uIH0qL1xyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/noticias-page/noticias-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"title-page text-left\">Notícias</h1>\r\n      </div>\r\n      <div class=\"col-md-12 text-justify\">\r\n        <p>Fique por dentro de todas as nossas novidades.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-width\">\r\n    <div class=\"white-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-noticias (loading)=\"setLoadingStatus($event)\" [amountNews]=\"amountNews\" [amountPerPage]=\"amountPerPage\"></app-noticias>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"footer\">\r\n          <app-footer></app-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/noticias-page/noticias-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: NoticiasPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageComponent", function() { return NoticiasPageComponent; });
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

var NoticiasPageComponent = /** @class */ (function () {
    function NoticiasPageComponent() {
        this.loading = false;
        this.amountNews = -1;
        this.amountPerPage = 8;
    }
    NoticiasPageComponent.prototype.ngOnInit = function () { };
    NoticiasPageComponent.prototype.setLoadingStatus = function (status) {
        this.loading = status;
    };
    NoticiasPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-noticias-page',
            template: __webpack_require__(/*! ./noticias-page.component.html */ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.html"),
            styles: [__webpack_require__(/*! ./noticias-page.component.css */ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticiasPageComponent);
    return NoticiasPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/noticias-page/noticias-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/noticias-page/noticias-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NoticiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasPageModule", function() { return NoticiasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _noticias_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noticias-page.component */ "./src/app/roles/site-area/pages/noticias-page/noticias-page.component.ts");
/* harmony import */ var _noticias_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticias-page-routing.module */ "./src/app/roles/site-area/pages/noticias-page/noticias-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contatos/contatos.module */ "./src/app/roles/site-area/components/contatos/contatos.module.ts");
/* harmony import */ var _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/noticias/noticias.module */ "./src/app/roles/site-area/components/noticias/noticias.module.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NoticiasPageModule = /** @class */ (function () {
    function NoticiasPageModule() {
    }
    NoticiasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _noticias_page_component__WEBPACK_IMPORTED_MODULE_5__["NoticiasPageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__["ContatosModule"],
                _noticias_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["NoticiasPageRoutingModule"],
                _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__["NoticiasModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_11__["MenuMobileModule"]
            ],
            providers: [],
        })
    ], NoticiasPageModule);
    return NoticiasPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-noticias-page-noticias-page-module.js.map