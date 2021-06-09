(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-libro-registrar-libro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-libro/registrar-libro.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-libro/registrar-libro.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Registrar Libro\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<body>\r\n  <ion-list class=\"register-content\">\r\n    <ion-item class=\"creador\">\r\n      <ion-label  type=\"text\" name=\"creador\">{{this.usuario}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"nombreLibro\">\r\n      <ion-input  [(ngModel)]=\"nombreLibro\"  type=\"text\" name=\"nombreLibro\" placeholder=\"*Nombre del libro\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"genero\">\r\n      <ion-input  [(ngModel)]=\"genero\"  type=\"text\" name=\"genero\" placeholder=\"*Género\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"autor\">\r\n      <ion-input  [(ngModel)]=\"autor\"  type=\"text\" name=\"autor\" placeholder=\"*Autor\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"precio\">\r\n      <ion-input  [(ngModel)]=\"precio\"  type=\"text\" name=\"precio\" placeholder=\"*Precio\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <div style=\"text-align: center;\">\r\n      <ion-button class=\"button-galeria\" style=\"margin-top: 10px;\"color=\"primary\" fill=\"outline\" slot=\"end\" (click)=\"abrirGaleria()\">\r\n          <ion-icon name=\"image-outline\"></ion-icon>\r\n          <ion-label style=\"margin-left: 10px;\">Galería</ion-label>\r\n      </ion-button>\r\n      <ion-button class=\"button-camara\" style=\"margin-top: 10px;\"color=\"primary\" fill=\"outline\" slot=\"end\" (click)=\"abrirCamara()\">\r\n          <ion-icon name=\"camera-outline\"></ion-icon>\r\n          <ion-label style=\"margin-left: 10px;\">Cámara</ion-label>\r\n      </ion-button>\r\n      </div>\r\n  </ion-list>\r\n  <div class=\"registration-book\">\r\n    <img src=\"../../../assets/publicar-libro.jpg\">\r\n  </div>\r\n</body>\r\n\r\n<ion-footer class=\"bar-stable\">\r\n  <ion-toolbar color=\"light\">\r\n    <div style=\"text-align: center;\">\r\n  <ion-button (click)=\"guardar()\" class=\"save-button\" disabled=\"{{!this.nombreLibro || !this.genero || !this.autor || !this.precio}}\" color=\"secondary\" style=\"margin-left:0%\" >\r\n    <ion-icon name=\"save-outline\"></ion-icon>\r\n    <ion-label style=\"margin-left: 10px;\">Guardar</ion-label>\r\n  </ion-button>\r\n  <ion-button (click)=\"cancelar()\" class=\"cancel-button\" color=\"secondary\" style=\"margin-left:5%\" >\r\n    <ion-icon name=\"close\"></ion-icon>\r\n    <ion-label style=\"margin-left: 10px;\">Cancelar</ion-label>\r\n  </ion-button> \r\n</div>\r\n</ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/registrar-libro/registrar-libro-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/registrar-libro/registrar-libro-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RegistrarLibroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarLibroPageRoutingModule", function() { return RegistrarLibroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registrar_libro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar-libro.page */ "./src/app/pages/registrar-libro/registrar-libro.page.ts");




const routes = [
    {
        path: '',
        component: _registrar_libro_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarLibroPage"]
    }
];
let RegistrarLibroPageRoutingModule = class RegistrarLibroPageRoutingModule {
};
RegistrarLibroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarLibroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registrar-libro/registrar-libro.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/registrar-libro/registrar-libro.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegistrarLibroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarLibroPageModule", function() { return RegistrarLibroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registrar_libro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-libro-routing.module */ "./src/app/pages/registrar-libro/registrar-libro-routing.module.ts");
/* harmony import */ var _registrar_libro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar-libro.page */ "./src/app/pages/registrar-libro/registrar-libro.page.ts");







let RegistrarLibroPageModule = class RegistrarLibroPageModule {
};
RegistrarLibroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrar_libro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarLibroPageRoutingModule"]
        ],
        declarations: [_registrar_libro_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarLibroPage"]]
    })
], RegistrarLibroPageModule);



/***/ }),

/***/ "./src/app/pages/registrar-libro/registrar-libro.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/registrar-libro/registrar-libro.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  overflow-y: hidden;\n  background-color: white;\n}\n\n.register-content {\n  margin-top: 72px;\n  margin-left: 12px;\n}\n\n.creador, .nombreLibro, .genero, .autor, .precio {\n  border: 1px solid #3880ff;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n\n.registration-book {\n  width: 228px;\n  margin-top: 45px;\n  margin-left: 79px;\n}\n\n.save-button, .cancel-button {\n  width: 113px;\n  height: 34px;\n}\n\n.button-galeria, .button-camara {\n  margin-right: 21px;\n}\n\n.save-button, .cancel-button {\n  width: 113px;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmFyLWxpYnJvL3JlZ2lzdHJhci1saWJyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhci1saWJyby9yZWdpc3RyYXItbGlicm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWdpc3Rlci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4uY3JlYWRvciwubm9tYnJlTGlicm8sIC5nZW5lcm8sIC5hdXRvciwgLnByZWNpbyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4MGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIHdpZHRoOiAyOTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucmVnaXN0cmF0aW9uLWJvb2sge1xyXG4gICAgd2lkdGg6IDIyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3OXB4O1xyXG59XHJcbi5zYXZlLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5idXR0b24tZ2FsZXJpYSwgLmJ1dHRvbi1jYW1hcmEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG59XHJcbi5zYXZlLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/registrar-libro/registrar-libro.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/registrar-libro/registrar-libro.page.ts ***!
  \***************************************************************/
/*! exports provided: RegistrarLibroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarLibroPage", function() { return RegistrarLibroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_libro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/libro.service */ "./src/app/services/libro.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");






let RegistrarLibroPage = class RegistrarLibroPage {
    constructor(_router, _libroService, _usuarioService, camera) {
        this._router = _router;
        this._libroService = _libroService;
        this._usuarioService = _usuarioService;
        this.camera = camera;
        this.participantes = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._usuarioService.compruebaSiLogado();
            this.usuario = this._usuarioService.usuarioActual.nombre;
        });
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = {
                //creador: this.usuario, El creador NO se le pasa en la costante desde el front,en el back se coge del token.
                nombreLibro: this.nombreLibro,
                genero: this.genero,
                autor: this.autor,
                precio: this.precio,
                participantes: this.participantes,
                base64: this.mostrarImagen
            };
            yield this._libroService.registrarLibro(data);
            this._router.navigate(['/principal-libreria']);
        });
    }
    cancelar() {
        //Poner 'refresh' para que al guardar, el nuevo libro aparezca en la pagina principal del librero
        this._router.navigate(['/principal-libreria']); //linea incompleta, da error con el 'refresh'
    }
    abrirGaleria() {
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 1024,
            targetWidth: 1024,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }).then(resultado => {
            this.mostrarImagen = 'data:image/jpeg;base64,' + resultado;
        }).catch(err => {
            console.log('Err', err);
        });
    }
    abrirCamara() {
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetHeight: 1024,
            targetWidth: 1024,
            correctOrientation: true,
            saveToPhotoAlbum: true
        }).then(resultado => {
            this.mostrarImagen = 'data:image/jpeg;base64,' + resultado;
        }).catch(err => {
            console.log('Err', err);
        });
    }
};
RegistrarLibroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_libro_service__WEBPACK_IMPORTED_MODULE_3__["LibroService"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
];
RegistrarLibroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar-libro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registrar-libro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-libro/registrar-libro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registrar-libro.page.scss */ "./src/app/pages/registrar-libro/registrar-libro.page.scss")).default]
    })
], RegistrarLibroPage);



/***/ })

}]);
//# sourceMappingURL=pages-registrar-libro-registrar-libro-module-es2015.js.map