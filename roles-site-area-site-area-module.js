(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-site-area-site-area-module"],{

/***/ "./src/app/roles/site-area/site-area-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/roles/site-area/site-area-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SiteAreaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAreaRoutingModule", function() { return SiteAreaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', loadChildren: './pages/inicio/inicio.module#InicioModule' },
    { path: 'sobrenos', loadChildren: './pages/sobre-nos/sobre-nos.module#SobreNosModule' },
    { path: 'cursos', loadChildren: './pages/cursos-area/cursos-area.module#CursosAreaModule' },
    { path: 'curso/:id', loadChildren: './pages/pagina-curso/pagina-curso.module#PaginaCursoModule' },
    { path: 'ouvidoria', loadChildren: './pages/ouvidoria/ouvidoria.module#OuvidoriaModule' },
    { path: 'blog', loadChildren: './pages/blog/blog.module#BlogModule' },
    { path: 'noticia/:id', loadChildren: './pages/pagina-noticia/pagina-noticia.module#PaginaNoticiaModule' },
    { path: 'noticias', loadChildren: './pages/noticias-page/noticias-page.module#NoticiasPageModule' },
    // { path: 'aprovacoes', loadChildren: './pages/aprovacoes-page/aprovacoes-page.module#AprovacoesPageModule' },
    // { path: 'pesquisa', loadChildren: './pages/search-page/search-page.module#SearchPageModule' },
    { path: 'downloads', loadChildren: './pages/arquivos-page/arquivos-page.module#ArquivosPageModule' },
    { path: 'calendario', loadChildren: './pages/calendario-page/calendario-page.module#CalendarioPageModule' },
    { path: 'equipe-administrativa', loadChildren: './pages/pagina-equipe-administrativa/pagina-equipe-administrativa.module#PaginaEquipeAdministrativaModule' },
    { path: 'sala-de-estudos', loadChildren: './pages/pagina-sala-de-estudos/pagina-sala-de-estudos.module#PaginaSalaDeEstudosModule' },
    { path: 'simulados', loadChildren: './pages/pagina-simulados/pagina-simulados.module#PaginaSimuladosModule' },
    { path: 'equipes', loadChildren: './pages/pagina-equipes/pagina-equipes.module#PaginaEquipesModule' },
    { path: 'coach', loadChildren: './pages/pagina-coach/pagina-coach.module#PaginaCoachModule' },
    { path: 'aulao', loadChildren: './pages/pagina-aulao/pagina-aulao.module#PaginaAulaoModule' },
    { path: 'enem', loadChildren: './pages/pagina-enem/pagina-enem.module#PaginaEnemModule' },
    { path: 'material', loadChildren: './pages/pagina-material/pagina-material.module#PaginaMaterialModule' }
];
var SiteAreaRoutingModule = /** @class */ (function () {
    function SiteAreaRoutingModule() {
    }
    SiteAreaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], SiteAreaRoutingModule);
    return SiteAreaRoutingModule;
}());



/***/ }),

/***/ "./src/app/roles/site-area/site-area.component.css":
/*!*********************************************************!*\
  !*** ./src/app/roles/site-area/site-area.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzL3NpdGUtYXJlYS9zaXRlLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roles/site-area/site-area.component.html":
/*!**********************************************************!*\
  !*** ./src/app/roles/site-area/site-area.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/site-area/site-area.component.ts":
/*!********************************************************!*\
  !*** ./src/app/roles/site-area/site-area.component.ts ***!
  \********************************************************/
/*! exports provided: SiteAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAreaComponent", function() { return SiteAreaComponent; });
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

var SiteAreaComponent = /** @class */ (function () {
    function SiteAreaComponent() {
    }
    SiteAreaComponent.prototype.ngOnInit = function () { };
    SiteAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-site-area',
            template: __webpack_require__(/*! ./site-area.component.html */ "./src/app/roles/site-area/site-area.component.html"),
            styles: [__webpack_require__(/*! ./site-area.component.css */ "./src/app/roles/site-area/site-area.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteAreaComponent);
    return SiteAreaComponent;
}());



/***/ }),

/***/ "./src/app/roles/site-area/site-area.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/roles/site-area/site-area.module.ts ***!
  \*****************************************************/
/*! exports provided: SiteAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAreaModule", function() { return SiteAreaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var _site_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site-area.component */ "./src/app/roles/site-area/site-area.component.ts");
/* harmony import */ var _site_area_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-area-routing.module */ "./src/app/roles/site-area/site-area-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SiteAreaModule = /** @class */ (function () {
    function SiteAreaModule() {
    }
    SiteAreaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                ngx_carousel__WEBPACK_IMPORTED_MODULE_4__["NgxCarouselModule"],
                _site_area_routing_module__WEBPACK_IMPORTED_MODULE_6__["SiteAreaRoutingModule"]
            ],
            declarations: [
                _site_area_component__WEBPACK_IMPORTED_MODULE_5__["SiteAreaComponent"]
            ]
        })
    ], SiteAreaModule);
    return SiteAreaModule;
}());



/***/ })

}]);
//# sourceMappingURL=roles-site-area-site-area-module.js.map