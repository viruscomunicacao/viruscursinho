(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pagina-material-pagina-material-module"],{

/***/ "./src/app/roles/site-area/pages/pagina-material/pagina-material-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/pagina-material/pagina-material-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginaMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaMaterialRoutingModule", function() { return PaginaMaterialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pagina_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina-material.component */ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _pagina_material_component__WEBPACK_IMPORTED_MODULE_2__["PaginaMaterialComponent"] },
];
var PaginaMaterialRoutingModule = /** @class */ (function () {
    function PaginaMaterialRoutingModule() {
    }
    PaginaMaterialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PaginaMaterialRoutingModule);
    return PaginaMaterialRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/pagina-material/pagina-material.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.page-with-navbar-fixed-top {\r\n  margin-top: 70px;\r\n}\r\n\r\n.page-with-navbar-fixed-bottom {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.title-page {\r\n  margin-bottom: 30px;\r\n  font-size: 20px;\r\n  line-height: 25px;\r\n}\r\n\r\n.red-area {\r\n  color: white;\r\n  background-color: rgb(244,50,34);\r\n  margin-top: -6px;\r\n  padding-top: 0px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.navbar-footer-mobile {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.icon-navbar-footer-mobile {\r\n  cursor: pointer;\r\n  padding-top: 15px;\r\n  padding-bottom: 0px;\r\n  text-align: center;\r\n  width: 19.4%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > p {\r\n  color: black;\r\n  font-size: 9px;\r\n  margin-top: 10px;\r\n  word-break: break-all !important;\r\n}\r\n\r\n.icon-navbar-footer-mobile > a > img {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  width: 50px;\r\n}\r\n\r\n.white-area {\r\n  color: black;\r\n  background-color: white;\r\n  margin-top: -6px;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.footer {\r\n  margin-top: 0px;\r\n}\r\n\r\n.google-maps-map {\r\n  width: 100%;\r\n  height: 250px;\r\n}\r\n\r\n.container-custom {\r\n  padding-left: 25px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.container-custom a {\r\n  cursor: pointer;\r\n}\r\n\r\n.text-custom > p {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.progress {\r\n  position: relative;\r\n  height: 2px;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: rgb(244,50,34);\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n  z-index: 250;\r\n}\r\n\r\n.progress .indeterminate {\r\n  background-color: white;\r\n}\r\n\r\n.progress .indeterminate:before {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n\r\n.progress .indeterminate:after {\r\n  content: '';\r\n  position: absolute;\r\n  background-color: inherit;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  will-change: left, right;\r\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n  -webkit-animation-delay: 1.15s;\r\n  animation-delay: 1.15s;\r\n}\r\n\r\n@-webkit-keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate{\r\n  0%{\r\n    left:-35%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n  100%{\r\n    left:100%;\r\n    right:-90%\r\n  }\r\n}\r\n\r\n@-webkit-keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n@keyframes indeterminate-short{\r\n  0%{\r\n    left:-200%;\r\n    right:100%\r\n  }\r\n  60%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n  100%{\r\n    left:107%;\r\n    right:-8%\r\n  }\r\n}\r\n\r\n.img-responsive {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.container-custom {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.link-back {\r\n  cursor: pointer;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.content-page {\r\n  margin-top: 15px;\r\n  min-height: 18vh;\r\n}\r\n\r\n/* Extra small devices (phones, less than 768px) */\r\n\r\n/* No media query since this is the default in Bootstrap */\r\n\r\n/* Small devices (tablets, 768px and up) */\r\n\r\n@media (min-width: 768px) {\r\n  .img-responsive {\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .title-page {\r\n    margin-top: 45px;\r\n    font-size: 32px;\r\n    line-height: initial;\r\n  }\r\n\r\n  .navbar-footer-mobile {\r\n    display: none;\r\n  }\r\n\r\n  .page-with-navbar-fixed-bottom {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/* Medium devices (desktops, 992px and up) */\r\n\r\n/*@media (min-width: @screen-md-min) { ... }*/\r\n\r\n/* Large devices (large desktops, 1200px and up) */\r\n\r\n/*@media (min-width: @screen-lg-min) { ... }*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvc2l0ZS1hcmVhL3BhZ2VzL3BhZ2luYS1tYXRlcmlhbC9wYWdpbmEtbWF0ZXJpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsc0ZBQXNGO0VBQ3RGLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix1RkFBdUY7RUFDdkYsK0VBQStFO0VBQy9FLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Y7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7RUFDQTtJQUNFLFNBQVM7SUFDVDtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVjtFQUNGO0VBQ0E7SUFDRSxTQUFTO0lBQ1Q7RUFDRjtFQUNBO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7QUFDRjs7QUFHQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBLGtEQUFrRDs7QUFDbEQsMERBQTBEOztBQUUxRCwwQ0FBMEM7O0FBQzFDO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLDRDQUE0Qzs7QUFDNUMsNkNBQTZDOztBQUU3QyxrREFBa0Q7O0FBQ2xELDZDQUE2QyIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9wYWdlcy9wYWdpbmEtbWF0ZXJpYWwvcGFnaW5hLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ucGFnZS13aXRoLW5hdmJhci1maXhlZC10b3Age1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXdpdGgtbmF2YmFyLWZpeGVkLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLnRpdGxlLXBhZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucmVkLWFyZWEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LDUwLDM0KTtcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxOS40JTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLW5hdmJhci1mb290ZXItbW9iaWxlID4gYSA+IHAge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1uYXZiYXItZm9vdGVyLW1vYmlsZSA+IGEgPiBpbWcge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4ud2hpdGUtYXJlYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmdvb2dsZS1tYXBzLW1hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b20ge1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWN1c3RvbSBhIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LWN1c3RvbSA+IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsNTAsMzQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDI1MDtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb2dyZXNzIC5pbmRldGVybWluYXRlOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpbGwtY2hhbmdlOiBsZWZ0LCByaWdodDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZSAyLjFzIGN1YmljLWJlemllcigwLjY1LCAwLjgxNSwgMC43MzUsIDAuMzk1KSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUgMi4xcyBjdWJpYy1iZXppZXIoMC42NSwgMC44MTUsIDAuNzM1LCAwLjM5NSkgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyAuaW5kZXRlcm1pbmF0ZTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpbGwtY2hhbmdlOiBsZWZ0LCByaWdodDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1zaG9ydCAyLjFzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBpbmRldGVybWluYXRlLXNob3J0IDIuMXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4xNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjE1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBpbmRldGVybWluYXRle1xyXG4gIDAle1xyXG4gICAgbGVmdDotMzUlO1xyXG4gICAgcmlnaHQ6MTAwJVxyXG4gIH1cclxuICA2MCV7XHJcbiAgICBsZWZ0OjEwMCU7XHJcbiAgICByaWdodDotOTAlXHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICBsZWZ0OjEwMCU7XHJcbiAgICByaWdodDotOTAlXHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zaG9ydHtcclxuICAwJXtcclxuICAgIGxlZnQ6LTIwMCU7XHJcbiAgICByaWdodDoxMDAlXHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxuICAxMDAle1xyXG4gICAgbGVmdDoxMDclO1xyXG4gICAgcmlnaHQ6LTglXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtc2hvcnR7XHJcbiAgMCV7XHJcbiAgICBsZWZ0Oi0yMDAlO1xyXG4gICAgcmlnaHQ6MTAwJVxyXG4gIH1cclxuICA2MCV7XHJcbiAgICBsZWZ0OjEwNyU7XHJcbiAgICByaWdodDotOCVcclxuICB9XHJcbiAgMTAwJXtcclxuICAgIGxlZnQ6MTA3JTtcclxuICAgIHJpZ2h0Oi04JVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1jdXN0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5saW5rLWJhY2sge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1wYWdlIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE4dmg7XHJcbn1cclxuXHJcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgbGVzcyB0aGFuIDc2OHB4KSAqL1xyXG4vKiBObyBtZWRpYSBxdWVyeSBzaW5jZSB0aGlzIGlzIHRoZSBkZWZhdWx0IGluIEJvb3RzdHJhcCAqL1xyXG5cclxuLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW1nLXJlc3BvbnNpdmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLXBhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1mb290ZXItbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucGFnZS13aXRoLW5hdmJhci1maXhlZC1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXHJcbi8qQG1lZGlhIChtaW4td2lkdGg6IEBzY3JlZW4tbWQtbWluKSB7IC4uLiB9Ki9cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG4vKkBtZWRpYSAobWluLXdpZHRoOiBAc2NyZWVuLWxnLW1pbikgeyAuLi4gfSovIl19 */"

/***/ }),

/***/ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/pagina-material/pagina-material.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" *ngIf=\"loading\">\r\n  <div class=\"indeterminate\"></div>\r\n</div>\r\n<app-navbar></app-navbar>\r\n<div class=\"content page-with-navbar-fixed-top page-with-navbar-fixed-bottom\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"title-page text-left\">Material completo</h1>\r\n        <a class=\"link-back\" (click)=\"goBack()\">Voltar</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row content-page\">\r\n      <div class=\"col-md-12\">\r\n        <p>O V??rus Cursinho ?? um cursinho completo, para voc?? mandar bem em qualquer processo seletivo! Todos os nossos alunos, seja do Extensivo ENEM ou turmas preparat??rias para Concursos P??blicos, recebem material impresso completo para se prepararem para as provas com assuntos direcionados ?? cada segmento. Dessa forma, fica ainda mais f??cil conquistar a t??o sonhada aprova????o. </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer\">\r\n    <app-footer></app-footer>\r\n  </div>\r\n  <app-menu-mobile></app-menu-mobile>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/pagina-material/pagina-material.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaginaMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaMaterialComponent", function() { return PaginaMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginaMaterialComponent = /** @class */ (function () {
    function PaginaMaterialComponent(location) {
        this.location = location;
        this.loading = false;
    }
    PaginaMaterialComponent.prototype.ngOnInit = function () {
    };
    PaginaMaterialComponent.prototype.goBack = function () {
        this.location.back();
    };
    PaginaMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagina-material',
            template: __webpack_require__(/*! ./pagina-material.component.html */ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.html"),
            styles: [__webpack_require__(/*! ./pagina-material.component.css */ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PaginaMaterialComponent);
    return PaginaMaterialComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/pages/pagina-material/pagina-material.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/roles/site-area/pages/pagina-material/pagina-material.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PaginaMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaMaterialModule", function() { return PaginaMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pagina_material_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagina-material.component */ "./src/app/roles/site-area/pages/pagina-material/pagina-material.component.ts");
/* harmony import */ var _pagina_material_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagina-material-routing.module */ "./src/app/roles/site-area/pages/pagina-material/pagina-material-routing.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navbar/navbar.module */ "./src/app/roles/site-area/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.module */ "./src/app/roles/site-area/components/footer/footer.module.ts");
/* harmony import */ var _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/menu-mobile/menu-mobile.module */ "./src/app/roles/site-area/components/menu-mobile/menu-mobile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PaginaMaterialModule = /** @class */ (function () {
    function PaginaMaterialModule() {
    }
    PaginaMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _pagina_material_component__WEBPACK_IMPORTED_MODULE_4__["PaginaMaterialComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _pagina_material_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaginaMaterialRoutingModule"],
                _components_menu_mobile_menu_mobile_module__WEBPACK_IMPORTED_MODULE_8__["MenuMobileModule"]
            ],
            providers: [],
        })
    ], PaginaMaterialModule);
    return PaginaMaterialModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pagina-material-pagina-material-module.js.map