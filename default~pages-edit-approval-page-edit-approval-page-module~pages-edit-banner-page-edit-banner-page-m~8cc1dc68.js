(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-edit-approval-page-edit-approval-page-module~pages-edit-banner-page-edit-banner-page-m~8cc1dc68"],{

/***/ "./src/app/roles/admin-area/angular-services/media.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/roles/admin-area/angular-services/media.service.ts ***!
  \********************************************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./src/app/roles/admin-area/angular-services/logger.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/roles/admin-area/angular-services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MediaService = /** @class */ (function () {
    function MediaService(http, loggerService, authService) {
        this.http = http;
        this.loggerService = loggerService;
        this.authService = authService;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + "/media";
        this.apiFS = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiFS;
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.session = {};
        this.tokenApiFileSystem = 'Bearer 0e507c4210df1877ef0e8eddc2f10c5b';
        this.options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'x-access-token': localStorage.getItem('tokenUserLogged') });
    }
    MediaService.prototype.logError = function (error, operation) {
        var message = '';
        var reload = false;
        if (error.status === 404) {
            message = 'Falha ao se comunicar com a API: Rota não encontrada (ERRO 404)';
        }
        else if (error.status === 401) {
            message = 'Falha ao se comunicar com a API: Token inválido ou expirado';
            reload = this.authService.logoff();
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
        console.log(error);
        this.loggerService.add("MediaService failed on operation: " + operation + "\nMessage: " + message);
        if (reload) {
            location.reload();
        }
    };
    MediaService.prototype.log = function (mensagem) {
        this.loggerService.add('MediaService: ' + mensagem);
    };
    MediaService.prototype.addPhoto = function (photo, mediaType) {
        var _this = this;
        var formData = new FormData();
        formData.append('urlObjeto', photo);
        return this.http.post(this.apiURL + "/" + mediaType, formData, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'x-access-token': localStorage.getItem('tokenUserLogged') }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.log("media added"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addPhoto')));
    };
    MediaService.prototype.getMedias = function (type) {
        var _this = this;
        return this.http.get(this.apiFS + "/siteviruscursinho/" + type, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': this.tokenApiFileSystem, 'x-access-token': localStorage.getItem('tokenUserLogged') }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (medias) { return _this.log("fetched medias"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getMedias', [])));
    };
    MediaService.prototype.removeFile = function (file, mediaType) {
        var _this = this;
        return this.http.delete(this.apiFS + "/v1/folders/siteviruscursinho/subfolders/" + mediaType + "/object/" + file, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': this.tokenApiFileSystem }) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("media removed"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('removeFile')));
    };
    MediaService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.logError(error, operation);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    MediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/media-selector/media-selector.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/media-selector/media-selector.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#modal {\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.btn-tab {\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#input-file {\r\n    width: 50%;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.thumbnail {\r\n    width: 100%;\r\n    height: 150px;\r\n    cursor: pointer;\r\n}\r\n\r\n.object {\r\n    text-align: center;\r\n}\r\n\r\n.objects {\r\n    height: 400px;\r\n    overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMvYWRtaW4tYXJlYS9jb21wb25lbnRzL21lZGlhLXNlbGVjdG9yL21lZGlhLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy9hZG1pbi1hcmVhL2NvbXBvbmVudHMvbWVkaWEtc2VsZWN0b3IvbWVkaWEtc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuLXRhYiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI2lucHV0LWZpbGUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub2JqZWN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9iamVjdHMge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/admin-area/components/media-selector/media-selector.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/media-selector/media-selector.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modal\">\r\n  <div class=\"row\">\r\n    <div class=\"alert alert-{{ alert.type }}\" role=\"alert\" *ngIf=\"alert.show\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"alert.show = false\"><span aria-hidden=\"true\">&times;</span></button>{{ alert.message }}</div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <button type=\"button\" class=\"btn-tab\" (click)=\"tabIndex = 1\">Computador</button>\r\n      <button type=\"button\" class=\"btn-tab\" (click)=\"tabIndex = 2\">Externo</button>\r\n      <button type=\"button\" class=\"btn-tab\" (click)=\"getObjects()\">Galeria</button>\r\n    </div>\r\n    <div class=\"col-md-10\" *ngIf=\"tabIndex === 1\">\r\n      <h4>Computador</h4>\r\n      <p>Carregue uma imagem do seu computador para a galeria.</p>\r\n      <input type=\"file\" id=\"input-file\" #file>\r\n      <button type=\"button\" class=\"btn btn-md btn-default\" (click)=\"uploadFile(file.files[0])\">Enviar</button>\r\n    </div>\r\n    <div class=\"col-xs-10\" *ngIf=\"tabIndex === 2\">\r\n      <h4>Externo</h4>\r\n      <p>Digite abaixo a URL da imagem externa.</p>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" #link>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-md btn-default\" (click)=\"setLinkPhoto(link.value)\">Enviar</button>\r\n    </div>\r\n    <div class=\"col-xs-10\" *ngIf=\"tabIndex === 3\">\r\n      <h4>Galeria</h4>\r\n      <p>Selecione uma imagem da galeria de imagens.</p>\r\n      <div class=\"row objects\">\r\n        <div class=\"col-md-3\" *ngFor=\"let object of objects\">\r\n          <div class=\"object\" *ngIf=\"object.type === 'image'\">\r\n            <img (click)=\"setLinkPhoto(object.url)\" src=\"{{ object.url }}\" class=\"thumbnail\">\r\n            <span (click)=\"removeFile(object.url)\" class=\"glyphicon glyphicon-remove text-danger\"></span>\r\n          </div>\r\n          <div class=\"object\" *ngIf=\"object.type === 'spreadsheet'\">\r\n            <img (click)=\"setLinkPhoto(object.url)\" src=\"../../../../../assets/img/icons/spreadsheet.png\" class=\"thumbnail\">\r\n            <p>{{ object.name }}</p>\r\n            <span (click)=\"removeFile(object.url)\" class=\"glyphicon glyphicon-remove text-danger\"></span>\r\n          </div>\r\n          <div class=\"object\" *ngIf=\"object.type === 'wordprocessor'\">\r\n            <img (click)=\"setLinkPhoto(object.url)\" src=\"../../../../../assets/img/icons/document.png\" class=\"thumbnail\">\r\n            <p>{{ object.name }}</p>\r\n            <span (click)=\"removeFile(object.url)\" class=\"glyphicon glyphicon-remove text-danger\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"form-group btn-group\">\r\n        <button type=\"button\" class=\"btn btn-md btn-default\" (click)=\"setLinkPhoto('')\">Concluir</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/roles/admin-area/components/media-selector/media-selector.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/media-selector/media-selector.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MediaSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSelectorComponent", function() { return MediaSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_services_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../angular-services/media.service */ "./src/app/roles/admin-area/angular-services/media.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaSelectorComponent = /** @class */ (function () {
    function MediaSelectorComponent(mediaService) {
        this.mediaService = mediaService;
        this.urlObject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alert = { type: '', message: '', show: false };
        this.urlObjects = '';
        this.showModalSelectFile = false;
        this.tabIndex = 1;
        this.objects = [];
        this.sizePage = 8;
        this.pageSelected = 0;
        this.pages = [];
    }
    MediaSelectorComponent.prototype.ngOnInit = function () {
        this.urlObjects = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiFS + "/siteviruscursinho/" + this.mediaType;
    };
    MediaSelectorComponent.prototype.uploadFile = function (file) {
        var _this = this;
        this.mediaService.addPhoto(file, this.mediaType).subscribe(function (response) {
            if (response !== undefined) {
                if (response.Body !== undefined) {
                    _this.alert.type = 'success';
                    _this.alert.message = 'Arquivo enviado com sucesso!';
                    _this.alert.show = true;
                    _this.showModalSelectFile = false;
                    _this.urlObject.emit(response.Body.urlObject);
                }
                else {
                    _this.alert.type = 'danger';
                    _this.alert.message = 'Houve algum erro ao salvar mídia!';
                    _this.alert.show = true;
                }
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar mídia!';
                _this.alert.show = true;
            }
        });
    };
    MediaSelectorComponent.prototype.setLinkPhoto = function (link) {
        this.alert.type = 'success';
        this.alert.message = 'Arquivo carregado com sucesso!';
        this.alert.show = true;
        this.showModalSelectFile = false;
        this.urlObject.emit(link);
    };
    MediaSelectorComponent.prototype.getObjects = function () {
        var _this = this;
        this.tabIndex = 3;
        this.mediaService.getMedias(this.mediaType).subscribe(function (response) {
            if (response !== undefined) {
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var o = response_1[_i];
                    var obj = { url: _this.urlObjects + "/" + o.name, name: o.name, type: '' };
                    if (o.name.search('.png') > -1 || o.name.search('.jpeg') > -1 || o.name.search('.jpg') > -1 || o.name.search('.gif') > -1 || o.name.search('.PNG') > -1 || o.name.search('.JPEG') > -1 || o.name.search('.JPG') > -1 || o.name.search('.GIF') > -1) {
                        obj.type = 'image';
                    }
                    else if (o.name.search('.xls') > -1 || o.name.search('.xlt') > -1 || o.name.search('.xlsx') > -1 || o.name.search('.XLS') > -1 || o.name.search('.XLT') > -1 || o.name.search('.XLSX') > -1) {
                        obj.type = 'spreadsheet';
                    }
                    else if (o.name.search('.doc') > -1 || o.name.search('.docx') > -1 || o.name.search('.odt') > -1 || o.name.search('.DOC') > -1 || o.name.search('.DOCX') > -1 || o.name.search('.ODT') > -1) {
                        obj.type = 'wordprocessor';
                    }
                    _this.objects.push(obj);
                }
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    MediaSelectorComponent.prototype.removeFile = function (link) {
        var _this = this;
        var obj = '';
        for (var i = link.lastIndexOf('/') + 1; i < link.length; i++) {
            obj = obj + link[i];
        }
        var result = obj.replace('%20', ' ');
        console.log(result);
        this.mediaService.removeFile(result, this.mediaType).subscribe(function (response) {
            if (response !== undefined) {
                _this.alert.type = 'success';
                _this.alert.message = 'Arquivo removido com sucesso!';
                _this.alert.show = true;
            }
            else {
                _this.alert.type = 'danger';
                _this.alert.message = 'Houve algum erro ao salvar os dados!';
                _this.alert.show = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MediaSelectorComponent.prototype, "urlObject", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mediaType'),
        __metadata("design:type", String)
    ], MediaSelectorComponent.prototype, "mediaType", void 0);
    MediaSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-selector',
            template: __webpack_require__(/*! ./media-selector.component.html */ "./src/app/roles/admin-area/components/media-selector/media-selector.component.html"),
            styles: [__webpack_require__(/*! ./media-selector.component.css */ "./src/app/roles/admin-area/components/media-selector/media-selector.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_services_media_service__WEBPACK_IMPORTED_MODULE_1__["MediaService"]])
    ], MediaSelectorComponent);
    return MediaSelectorComponent;
}());



/***/ }),

/***/ "./src/app/roles/admin-area/components/media-selector/media-selector.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/roles/admin-area/components/media-selector/media-selector.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MediaSelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSelectorModule", function() { return MediaSelectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _media_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-selector.component */ "./src/app/roles/admin-area/components/media-selector/media-selector.component.ts");
/* harmony import */ var _angular_services_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../angular-services/media.service */ "./src/app/roles/admin-area/angular-services/media.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MediaSelectorModule = /** @class */ (function () {
    function MediaSelectorModule() {
    }
    MediaSelectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _media_selector_component__WEBPACK_IMPORTED_MODULE_2__["MediaSelectorComponent"]
            ],
            exports: [
                _media_selector_component__WEBPACK_IMPORTED_MODULE_2__["MediaSelectorComponent"]
            ],
            providers: [
                _angular_services_media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"]
            ]
        })
    ], MediaSelectorModule);
    return MediaSelectorModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-edit-approval-page-edit-approval-page-module~pages-edit-banner-page-edit-banner-page-m~8cc1dc68.js.map