(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-arquivos-page-arquivos-page-module"],{

/***/ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/arquivos-page/arquivos-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ArquivosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivosPageRoutingModule", function() { return ArquivosPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _arquivos_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arquivos-page.component */ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _arquivos_page_component__WEBPACK_IMPORTED_MODULE_2__["ArquivosPageComponent"] },
];
var ArquivosPageRoutingModule = /** @class */ (function () {
    function ArquivosPageRoutingModule() {
    }
    ArquivosPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], ArquivosPageRoutingModule);
    return ArquivosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.title-page {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.navbar-footer-mobile {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -6px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 0px;\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .title-page {\r\n    margin-top: 45px;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL2FycXVpdm9zLXBhZ2UvYXJxdWl2b3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsc0ZBQXNGO0VBQ3RGLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix1RkFBdUY7RUFDdkYsK0VBQStFO0VBQy9FLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFFQSxrREFBa0Q7O0FBQ2xELDBEQUEwRDs7QUFFMUQsMENBQTBDOztBQUMxQztFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsNENBQTRDOztBQUM1Qyw2Q0FBNkM7O0FBRTdDLGtEQUFrRDs7QUFDbEQsNkNBQTZDIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL2FycXVpdm9zLXBhZ2UvYXJxdWl2b3MtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnBhZ2Utd2l0aC1uYXZiYXItZml4ZWQtdG9wIHtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4ucGFnZS13aXRoLW5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1wYWdlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWZvb3Rlci1tb2JpbGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndoaXRlLWFyZWEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDI1MDtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpbGwtY2hhbmdlOiBsZWZ0LCByaWdodDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZSAyLjFzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpbGwtY2hhbmdlOiBsZWZ0LCByaWdodDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1zaG9ydCAyLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBpbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4xNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjE1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBpbmRldGVybWluYXRle1xyXG4gIDAle1xyXG4gICAgbGVmdDotMzUlO1xyXG4gICAgcmlnaHQ6MTAwJVxyXG4gIH1cclxuICA2MCV7XHJcbiAgICBsZWZ0OjEwMCU7XHJcbiAgICByaWdodDotOTAlXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwMCU7XHJcbiAgICByaWdodDotOTAlXHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydHtcclxuICAwJXtcclxuICAgIGxlZnQ6LTIwMCU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtc2hvcnR7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0yMDAlO1xyXG4gICAgcmlnaHQ6MTAwJVxyXG4gIH1cclxuICA2MCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpICovXHJcbi8qIE5vIG1lZGlhIHF1ZXJ5IHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwICovXHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC50aXRsZS1wYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAucGFnZS13aXRoLW5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IEBzY3JlZW4tbWQtbWluKSB7IC4uLiB9Ki9cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLWxnLW1pbikgeyAuLi4gfSovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"title-page text-left\">Downloads</h1>\r\n      </div>\r\n      <div class=\"col-md-12 text-justify\">\r\n        <p>Baixe agora provas, gabaritos, apostilas e muito mais.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"full-width\">\r\n    <div class=\"white-area\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <app-downloads (loading)=\"setLoadingStatus($event)\" [amountDownloads]=\"amountDownloads\" [amountDownloadsPerPage]=\"amountDownloadsPerPage\"></app-downloads>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <div class=\"footer\">\r\n          <app-footer></app-footer>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: ArquivosPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivosPageComponent", function() { return ArquivosPageComponent; });
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

var ArquivosPageComponent = /** @class */ (function () {
    function ArquivosPageComponent() {
        this.loading = false;
        this.amountDownloads = -1;
        this.amountDownloadsPerPage = 8;
    }
    ArquivosPageComponent.prototype.ngOnInit = function () { };
    ArquivosPageComponent.prototype.setLoadingStatus = function (status) {
        this.loading = status;
    };
    ArquivosPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arquivos-page',
            template: __webpack_require__(/*! ./arquivos-page.component.html */ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.html"),
            styles: [__webpack_require__(/*! ./arquivos-page.component.css */ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArquivosPageComponent);
    return ArquivosPageComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/arquivos-page/arquivos-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ArquivosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivosPageModule", function() { return ArquivosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _arquivos_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arquivos-page.component */ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page.component.ts");
/* harmony import */ var _arquivos_page_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arquivos-page-routing.module */ "./src/app/roles/site-area/pages/arquivos-page/arquivos-page-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contatos/contatos.module */ "./src/app/roles/site-area/components/contatos/contatos.module.ts");
/* harmony import */ var _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/noticias/noticias.module */ "./src/app/roles/site-area/components/noticias/noticias.module.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
/* harmony import */ var _components_downloads_downloads_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/downloads/downloads.module */ "./src/app/roles/site-area/components/downloads/downloads.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ArquivosPageModule = /** @class */ (function () {
    function ArquivosPageModule() {
    }
    ArquivosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _arquivos_page_component__WEBPACK_IMPORTED_MODULE_5__["ArquivosPageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_7__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _components_contatos_contatos_module__WEBPACK_IMPORTED_MODULE_9__["ContatosModule"],
                _arquivos_page_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArquivosPageRoutingModule"],
                _components_noticias_noticias_module__WEBPACK_IMPORTED_MODULE_10__["NoticiasModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_11__["MenuMobileModule"],
                _components_downloads_downloads_module__WEBPACK_IMPORTED_MODULE_12__["DownloadsModule"]
            ],
            providers: [],
        })
    ], ArquivosPageModule);
    return ArquivosPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-arquivos-page-arquivos-page-module.js.map