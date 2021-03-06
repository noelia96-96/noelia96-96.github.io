(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar class=\"toolbar-color\">\r\n    <ion-avatar [routerLink]=\"'/perfil-bibliofilo'\" class=\"avatar-profile\">\r\n      <img src=\"../../../assets/profile-w.png\">\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-toolbar>\r\n      <ion-segment>\r\n        <ion-segment-button (click)=\"librerias()\" value=\"a\">Librerías</ion-segment-button>\r\n        <ion-segment-button (click)=\"libros()\" value=\"b\">Libros</ion-segment-button>\r\n        <ion-segment-button (click)=\"eventos()\" value=\"c\">Eventos</ion-segment-button>\r\n        <ion-segment-button (click)=\"fav()\" value=\"d\">Favoritos</ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n  <!-- Librerias -->\r\n    <ion-card *ngFor=\"let usuario of usuariosLibreros\">\r\n      <div class=\"imagen\">\r\n      <img class=\"imagenCard\" (click)=\"verLibreria(usuario)\" src=\"../../../assets/libreria.jpg\">\r\n    </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{usuario.nombre}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Dirección: </b>{{usuario.direccion}}<br>\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button class=\"share\" (click)=\"compartirLibreria(usuario)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          <ion-icon name=\"share\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"usuarioActual.favoritos.includes(usuario.nombre)\" class=\"fav\" (click)=\"borrarFavorito(usuario.nombre)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"heart-sharp\" color=\"danger\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!usuarioActual.favoritos.includes(usuario.nombre)\" class=\"fav\" (click)=\"guardarFavorito(usuario.nombre)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card> \r\n\r\n    <!-- Libros -->\r\n    <ion-card *ngFor=\"let libro of librosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"libro.imagenLibro\"src=\"{{libro.imagenLibro}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!libro.imagenLibro\" src=\"../../../assets/registro-bibliofilo.jpg\">\r\n    </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{libro.nombreLibro}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Género: </b>{{libro.genero}}<br>\r\n        <b>Autor: </b>{{libro.autor}}<br>\r\n        <b>Precio: </b>{{libro.precio}}\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button *ngIf=\"!libro.participantes.includes(this.usuario)\" class=\"fav\" (click)=\"reservarLibro(libro)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"bag-outline\" color=\"dark\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"libro.participantes.includes(this.usuario)\" class=\"fav\" (click)=\"quitarReservaLibro(libro)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        <ion-icon name=\"bag-check-outline\" color=\"dark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <!-- Eventos -->\r\n    <ion-card *ngFor=\"let evento of eventosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"evento.imagenEvento\" src=\"{{evento.imagenEvento}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!evento.imagenEvento\" src=\"../../../assets/evento.jpg\">\r\n      </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{evento.nombreEvento}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Ciudad: </b>{{evento.ciudad}}<br>\r\n        <b>Direccion: </b>{{evento.direccion}}<br>\r\n        <b>Fecha: </b>{{evento.fecha | date: 'dd/MM/yyyy'}}<br>\r\n        <b>Hora: </b>{{evento.hora | date: 'HH:mm'}}\r\n      </ion-card-content>\r\n        <ion-item color=\"light\">\r\n        <ion-button class=\"apuntarse\" *ngIf=\"!evento.participantes.includes(this.usuario)\" (click)=\"apuntarse(evento)\" fill=\"outline\" slot=\"end\" expand=\"block\" [mode]=\"'md'\">Apuntarse</ion-button>\r\n        <ion-button class=\"desapuntarse\" *ngIf=\"evento.participantes.includes(this.usuario)\" (click)=\"desapuntarse(evento)\" fill=\"outline\" slot=\"end\" expand=\"block\" [mode]=\"'md'\" color=\"dark\" >Borrarse</ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"circular\"\r\n      loadingText=\"Cargando...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/perfil/perfil-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/pages/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/pages/perfil/perfil.page.ts");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar-profile {\n  position: relative;\n  left: 285px;\n  margin-top: 6px;\n  border: 1px solid #b6dcf3;\n  width: 60px;\n  height: 60px;\n  background-color: #b6dcf3;\n}\n\n.fav, .share {\n  font-size: 17px;\n}\n\n.fav {\n  position: absolute;\n  right: 16px;\n}\n\n.share {\n  position: absolute;\n  left: 0;\n}\n\n.cardStyle {\n  text-align: center;\n  font-size: 17px;\n  height: 45px;\n  margin-top: -22px;\n}\n\n.apuntarse, .desapuntarse {\n  font-size: 10px;\n  padding-top: 2.5px;\n}\n\n.imagen {\n  width: 311px;\n  height: 205px;\n}\n\n.imagenCard {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBRkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQU9KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyLXByb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjg1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZkY2YzO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2YzO1xyXG59XHJcbi5mYXYsIC5zaGFyZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmZhdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG59XHJcbi5zaGFyZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLmNhcmRTdHlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAxN3B4OyBcclxuICAgIGhlaWdodDogNDVweDsgXHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxufVxyXG5cclxuLmFwdW50YXJzZSwgLmRlc2FwdW50YXJzZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVweDtcclxufVxyXG4uaW1hZ2VuIHtcclxuICAgIHdpZHRoOiAzMTFweDtcclxuICAgIGhlaWdodDogMjA1cHg7XHJcbn1cclxuLmltYWdlbkNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiAgICAiXX0= */");

/***/ }),

/***/ "./src/app/pages/perfil/perfil.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/evento.service */ "./src/app/services/evento.service.ts");
/* harmony import */ var _services_libro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/libro.service */ "./src/app/services/libro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");









let PerfilPage = class PerfilPage {
    constructor(router, _usuarioService, _eventoService, _libroService, alertController, socialSharing) {
        this.router = router;
        this._usuarioService = _usuarioService;
        this._eventoService = _eventoService;
        this._libroService = _libroService;
        this.alertController = alertController;
        this.socialSharing = socialSharing;
        //Para saber en que eventos estamos
        this.booleanEventos = false;
        //Para saber en que Libros estamos
        this.booleanLibros = false;
        //Para saber en que Librerias estamos
        this.booleanLibrerias = false;
        //Para saber en que Favoritos estamos
        this.booleanFavoritos = false;
        //limite de usuarios
        this.limiteUsuariosLibreros = 3;
        //limite de eventos propios
        this.limitePropio = 3;
        //limite de libros propios
        this.limiteLibrosPropio = 3;
        //limite de favoritos
        this.limiteFavoritos = 3;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const logado = yield this._usuarioService.compruebaSiLogado();
            this.usuarioActual = this._usuarioService.usuarioActual;
            if (!logado) {
                this.router.navigate(['/inicio']);
                return;
            }
            //Para que se muestren las librerias al entrar en el perfil, que sea lo primero que se cargue
            this.librerias();
            //llamar al servicio de usuario
            this.usuario = this._usuarioService.usuarioActual.nombre;
        });
    }
    //Infinitte scroll
    loadData(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Tenemos una lista de todos los eventos cargados
            //Tenemos una lista que va a ir cargando los eventos poco a poco - esta es la que se usa
            if (this.booleanEventos) {
                //Limite de eventos propios
                this.limitePropio = this.limitePropio + 3;
                //Antes de llamar al servicio coger los eventos que tenemos ahora mismo
                const numeroVariableAntiguoEvento = this.eventosPropios.length;
                //Cargar en la lista propia mis eventos
                yield this._eventoService.getEventos(this.limitePropio);
                //Saber los eventos que tenemos nuevos
                const numeroVariableNuevoEvento = this._eventoService.eventosPropios.length;
                //Carga del servicio la lista de los eventos
                if (numeroVariableAntiguoEvento == numeroVariableNuevoEvento) {
                    event.target.disabled = true;
                }
                else {
                    this.eventosPropios = this._eventoService.eventosPropios;
                }
            }
            else if (this.booleanLibrerias) {
                //Limite de usuarios tipo - libreria
                this.limiteUsuariosLibreros = this.limiteUsuariosLibreros + 3;
                //Antes de llamar al servicio coger las librerias que tenemos ahora mismo
                const numeroVariableAntiguaLibreria = this.usuariosLibreros.length;
                //Llamar al servicio para llamar al back para recuperar los libros
                yield this._usuarioService.mostrarLibreria(this.limiteUsuariosLibreros);
                //Saber las librerias que tenemos nuevas
                const numeroVariableNuevaLibreria = this._usuarioService.usuarioLibreria.length;
                //Carga del servicio la lista de las librerias
                if (numeroVariableAntiguaLibreria == numeroVariableNuevaLibreria) {
                    event.target.disabled = true;
                }
                else {
                    this.usuariosLibreros = this._usuarioService.usuarioLibreria;
                }
            }
            else if (this.booleanLibros) {
                //Limite de libros
                this.limiteLibrosPropio = this.limiteLibrosPropio + 3;
                //Antes de llamar al servicio coger los libros que tenemos ahora mismo
                const numeroVariableAntiguoLibro = this.librosPropios.length;
                //Llamar al servicio para llamar al back para recuperar los libros
                yield this._libroService.mostrarLibros(this.limiteLibrosPropio);
                //Saber los libros que tenemos nuevos
                const numeroVariableNuevoLibro = this._libroService.librosPropios.length;
                //Carga del servicio la lista de los libros
                if (numeroVariableAntiguoLibro == numeroVariableNuevoLibro) {
                    event.target.disabled = true;
                }
                else {
                    this.librosPropios = this._libroService.librosPropios;
                }
            }
            else if (this.booleanFavoritos) {
                //Limite favoritos
                this.limiteFavoritos = this.limiteFavoritos + 3;
                //Antes de llamar al servicio coger los favoritos que tenemos ahora mismo
                const numeroVariableAntiguoFavorito = this.usuariosLibreros.length;
                //Llamar al servicio para llamar al back para recuperar las librerias favoritas 
                yield this._usuarioService.mostrarLibreriasFavoritas(this.limiteFavoritos);
                //Saber los favoritos que tenemos nuevos
                const numeroVariableNuevoFavorito = this._usuarioService.usuarioLibreria.length;
                //Carga del servicio la lista de los favoritos
                if (numeroVariableAntiguoFavorito == numeroVariableNuevoFavorito) {
                    event.target.disabled = true;
                }
                else {
                    this.usuariosLibreros = this._usuarioService.usuarioLibreria;
                }
            }
            //completar la accion de cargar los eventos
            event.target.complete();
        });
    }
    cerrarSesion() {
        this._usuarioService.cerrarSesion();
        this.router.navigateByUrl('/inicio');
    }
    librerias() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScroll.disabled = false;
            //Poner a true el boolean de librerias para saber que estamos viendo librerias
            this.booleanLibrerias = true;
            this.booleanFavoritos = false;
            this.booleanEventos = false;
            this.booleanLibros = false;
            //Quitar de la lista contraria los eventos
            this.eventosPropios = [];
            //Quitar de la lista contraria los libros
            this.librosPropios = [];
            //Limpiar la propia lista de librerias
            this.usuariosLibreros = [];
            //limite de usuarios tipo - libreria
            this.limiteUsuariosLibreros = 3;
            //llamar al servicio para llamar al back para recuperar los libros
            yield this._usuarioService.mostrarLibreria(this.limiteUsuariosLibreros);
            //Carga del servicio la lista de usuarios
            this.usuariosLibreros = this._usuarioService.usuarioLibreria;
        });
    }
    eventos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScroll.disabled = false;
            //Poner a true el boolean de Eventos para saber que estamos viendo Eventos
            this.booleanLibrerias = false;
            this.booleanFavoritos = false;
            this.booleanEventos = true;
            this.booleanLibros = false;
            //Quitar de la lista contraria las librerias
            this.usuariosLibreros = [];
            //Quitar de la lista contraria los libros
            this.librosPropios = [];
            //Limite de eventos propios
            this.limitePropio = 3;
            //Llamar al servicio para llamar al back para recuperar los eventos
            yield this._eventoService.getEventosPorBibliofilo(this.limitePropio);
            //Carga del servicio la lista de los eventos
            this.eventosPropios = this._eventoService.eventosPropios;
        });
    }
    libros() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScroll.disabled = false;
            //Poner a true el boolean de Libros para saber que estamos viendo Libros
            this.booleanLibrerias = false;
            this.booleanFavoritos = false;
            this.booleanEventos = false;
            this.booleanLibros = true;
            //Quitar de la lista contraria los eventos
            this.eventosPropios = [];
            //Quitar de la lista contraria las librerias
            this.usuariosLibreros = [];
            //Limite de libros
            this.limiteLibrosPropio = 3;
            //Llamar al servicio para llamar al back para recuperar los libros
            yield this._libroService.mostrarLibros(this.limiteLibrosPropio);
            //Carga del servicio la lista de libros
            this.librosPropios = this._libroService.librosPropios;
        });
    }
    //Boton del menu - favoritos
    fav() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScroll.disabled = false;
            //Poner a true el boolean de Favoritos para saber que estamos viendo Favoritos
            this.booleanLibrerias = false;
            this.booleanFavoritos = true;
            this.booleanEventos = false;
            this.booleanLibros = false;
            //Quitar de la lista contraria los eventos
            this.eventosPropios = [];
            //Quitar de la lista contraria los libros
            this.librosPropios = [];
            //Limpiar la propia lista en favoritos
            this.usuariosLibreros = [];
            //Limite favoritos
            this.limiteFavoritos = 3;
            //Llamar al servicio para llamar al back para recuperar las librerias favoritas 
            yield this._usuarioService.mostrarLibreriasFavoritas(this.limiteFavoritos);
            //Carga del servicio la lista de favoritos 
            this.usuariosLibreros = this._usuarioService.usuarioLibreria;
        });
    }
    guardarFavorito(libreria) {
        this._usuarioService.usuarioActual.favoritos.push(libreria);
        this._usuarioService.guadarLibreriaFav(libreria);
    }
    borrarFavorito(libreria) {
        // obtenemos el indice
        var indice = this._usuarioService.usuarioActual.favoritos.indexOf(libreria);
        // 1 es la cantidad de elemento a eliminar
        this._usuarioService.usuarioActual.favoritos.splice(indice, 1);
        //borrar la libreria
        this._usuarioService.borrarLibreriaFav(libreria);
    }
    //Apuntarse al evento
    apuntarse(evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Contemplar mensaje de apuntarse o mensaje de evento completo
            const index = evento.participantes.findIndex(usuario => usuario === this.usuario);
            if (index > -1) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    backdropDismiss: false,
                    subHeader: 'Ya estás apuntado en este evento',
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                if (evento.participantes.length === 10) {
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Evento completado',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        subHeader: '¡Te has apuntado al evento!',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    evento.participantes.push(this.usuario);
                    const datos = {
                        _id: evento._id,
                    };
                    this._eventoService.apuntarse(datos);
                }
            }
        });
    }
    //Desapuntarse del evento
    desapuntarse(evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var indice = evento.participantes.indexOf(this.usuario); // obtenemos el indice
            evento.participantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
            const datos = {
                _id: evento._id,
            };
            yield this._eventoService.desapuntarse(datos);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                subHeader: 'Te has borrado del evento',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    compartirLibreria(usuario) {
        var options = {
            message: 'Mira esta librería',
            web: usuario.web
        };
        this.socialSharing.shareWithOptions(options);
    }
    reservarLibro(libro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const index = libro.participantes.findIndex(usuario => usuario === this.usuario);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                subHeader: '¡Has reservado el libro con éxito!',
                buttons: ['OK']
            });
            yield alert.present();
            libro.participantes.push(this.usuario);
            const datos = {
                nombreLibro: libro.nombreLibro,
            };
            this._libroService.reservarLibro(datos);
        });
    }
    quitarReservaLibro(libro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var indice = libro.participantes.indexOf(this.usuario); // obtenemos el indice
            libro.participantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
            const datos = {
                nombreLibro: libro.nombreLibro,
            };
            yield this._libroService.quitarReservaLibro(datos);
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                backdropDismiss: false,
                subHeader: 'Has cancelado la reserva del libro con éxito',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    verLibreria(usuario) {
        this._usuarioService.libreriaPinchadaCard = usuario;
        this.router.navigate(['/card-libreria']);
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"] },
    { type: _services_libro_service__WEBPACK_IMPORTED_MODULE_5__["LibroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] }
];
PerfilPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"],] }]
};
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/pages/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=pages-perfil-perfil-module-es2015.js.map