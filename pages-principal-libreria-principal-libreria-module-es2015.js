(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-principal-libreria-principal-libreria-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal-libreria/principal-libreria.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal-libreria/principal-libreria.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar class=\"toolbar-color\">\r\n    <ion-avatar [routerLink]=\"'/perfil-libreria'\" class=\"avatar-profile\">\r\n      <img src=\"../../../assets/profile-l.jpg\">\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n\r\n<ion-content class=\"content\">\r\n<div class=\"options\">\r\n    <ion-toolbar >\r\n      <ion-segment>\r\n        <ion-segment-button (click)=\"loadEventosPropios()\" value=\"propio\">Eventos</ion-segment-button>\r\n        <ion-segment-button (click)=\"loadLibrosPropios()\" value=\"ajeno\">Libros</ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n    \r\n     <!-- Eventos -->\r\n      <ion-card *ngFor=\"let evento of eventosPropios\">\r\n        <div class=\"imagen\">\r\n          <img class=\"imagenCard\" *ngIf=\"evento.imagenEvento\" src=\"{{evento.imagenEvento}}\">\r\n          <img class=\"imagenCard\" *ngIf=\"!evento.imagenEvento\" src=\"../../../assets/evento.jpg\">\r\n        </div>\r\n        <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n          <ion-card-title class=\"card-titulo\"><h4>{{evento.nombreEvento}}</h4></ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"margin-top: 12px;\">\r\n          <b>Ciudad: </b>{{evento.ciudad}}<br>\r\n          <b>Direccion: </b>{{evento.direccion}}<br>\r\n          <b>Fecha: </b>{{evento.fecha | date: 'dd/MM/yyyy'}}<br>\r\n          <b>Hora: </b>{{evento.hora | date: 'HH:mm'}}\r\n        </ion-card-content>\r\n        <ion-item color=\"light\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <span>{{evento.participantes.length}}</span>\r\n          <ion-button class=\"option\" (click)=\"editarEvento(evento._id)\" fill=\"outline\" slot=\"end\" >Editar</ion-button>\r\n          <ion-button class=\"option\" (click)=\"borrarEvento(evento._id)\" fill=\"outline\" slot=\"end\" color=\"danger\">Borrar</ion-button> \r\n        </ion-item>\r\n      </ion-card> \r\n    </div>\r\n\r\n    <!-- Libros -->\r\n    <ion-card *ngFor=\"let libro of librosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"libro.imagenLibro\" src=\"{{libro.imagenLibro}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!libro.imagenLibro\" src=\"../../../assets/registro-bibliofilo.jpg\">\r\n      </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"card-titulo\"><h4>{{libro.nombreLibro}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>G??nero: </b>{{libro.genero}}<br>\r\n        <b>Autor: </b>{{libro.autor}}<br>\r\n        <b>Precio: </b>{{libro.precio}}\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button *ngIf=\"libro.participantes.length > 0\"  class=\"reservado\" fill=\"outline\" slot=\"end\" color=\"success\">Reservado</ion-button>\r\n        <ion-button class=\"option\" (click)=\"editarLibro(libro._id)\" fill=\"outline\" slot=\"end\" >Editar</ion-button>\r\n        <ion-button class=\"option\" (click)=\"borrarLibro(libro._id)\" fill=\"outline\" slot=\"end\" color=\"danger\">Borrar</ion-button> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"libro.participantes.length > 0\" class=\"personaReservaLibro\" color=\"light\">\r\n        <div>\r\n          <span>{{libro.participantes[0]}}</span><br>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"circular\"\r\n      loadingText=\"Cargando...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n  \r\n  <ion-footer class=\"bar-stable\">\r\n    <ion-toolbar class=\"tool-foot\" color=\"light\">\r\n      <div class=\"content-button-event\">\r\n          <ion-button class=\"button-event\" (click)=\"crearEvento()\" fill=\"solid\" slot=\"end\" color=\"success\">Crear evento\r\n          </ion-button>\r\n          <ion-button class=\"button-book\" (click)=\"publicarLibro()\" fill=\"solid\" slot=\"end\" color=\"medium\">Publicar libro\r\n          </ion-button>\r\n    </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n  ");

/***/ }),

/***/ "./src/app/pages/principal-libreria/principal-libreria-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/principal-libreria/principal-libreria-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PrincipalLibreriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalLibreriaPageRoutingModule", function() { return PrincipalLibreriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _principal_libreria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principal-libreria.page */ "./src/app/pages/principal-libreria/principal-libreria.page.ts");




const routes = [
    {
        path: '',
        component: _principal_libreria_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalLibreriaPage"]
    }
];
let PrincipalLibreriaPageRoutingModule = class PrincipalLibreriaPageRoutingModule {
};
PrincipalLibreriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrincipalLibreriaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/principal-libreria/principal-libreria.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/principal-libreria/principal-libreria.module.ts ***!
  \***********************************************************************/
/*! exports provided: PrincipalLibreriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalLibreriaPageModule", function() { return PrincipalLibreriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _principal_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal-libreria-routing.module */ "./src/app/pages/principal-libreria/principal-libreria-routing.module.ts");
/* harmony import */ var _principal_libreria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal-libreria.page */ "./src/app/pages/principal-libreria/principal-libreria.page.ts");







let PrincipalLibreriaPageModule = class PrincipalLibreriaPageModule {
};
PrincipalLibreriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _principal_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalLibreriaPageRoutingModule"]
        ],
        declarations: [_principal_libreria_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalLibreriaPage"]]
    })
], PrincipalLibreriaPageModule);



/***/ }),

/***/ "./src/app/pages/principal-libreria/principal-libreria.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/principal-libreria/principal-libreria.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  overflow-y: hidden;\n  background-color: white;\n}\n\n.options {\n  margin-top: 12px;\n}\n\n.avatar-profile {\n  position: relative;\n  left: 285px;\n  margin-top: 6px;\n  width: 60px;\n  height: 60px;\n}\n\n.bar-stable {\n  margin-top: 12px;\n}\n\n.tool-foot {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.card-titulo {\n  color: #3d3df0;\n  text-align: center;\n  font-size: 17px;\n  height: 45px;\n  margin-top: -24px;\n}\n\n.button-event, .button-book {\n  width: 122px;\n  height: 38px;\n  margin-top: 14px;\n  margin-bottom: 12px;\n}\n\n.localizacion, .share {\n  font-size: 17px;\n}\n\n.option {\n  font-size: 15px;\n}\n\n.reservado {\n  font-size: 15px;\n  position: absolute;\n  left: 0;\n}\n\n.personaReservaLibro {\n  font-size: 13px;\n}\n\n.imagen {\n  width: 344px;\n  height: 205px;\n}\n\n.imagenCard {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpbmNpcGFsLWxpYnJlcmlhL3ByaW5jaXBhbC1saWJyZXJpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFZSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaW5jaXBhbC1saWJyZXJpYS9wcmluY2lwYWwtbGlicmVyaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ub3B0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5hdmF0YXItcHJvZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyODVweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5iYXItc3RhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLnRvb2wtZm9vdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG5cclxufVxyXG4uY2FyZC10aXR1bG8ge1xyXG4gICAgY29sb3I6IHJnYig2MSwgNjEsIDI0MCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbn1cclxuLmJ1dHRvbi1ldmVudCwgLmJ1dHRvbi1ib29rIHtcclxuICAgIHdpZHRoOiAxMjJweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5sb2NhbGl6YWNpb24sIC5zaGFyZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLm9wdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnJlc2VydmFkb3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLnBlcnNvbmFSZXNlcnZhTGlicm97XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmltYWdlbiB7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDIwNXB4O1xyXG59XHJcbi5pbWFnZW5DYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/principal-libreria/principal-libreria.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/principal-libreria/principal-libreria.page.ts ***!
  \*********************************************************************/
/*! exports provided: PrincipalLibreriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalLibreriaPage", function() { return PrincipalLibreriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/evento.service */ "./src/app/services/evento.service.ts");
/* harmony import */ var _services_libro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/libro.service */ "./src/app/services/libro.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let PrincipalLibreriaPage = class PrincipalLibreriaPage {
    constructor(router, _usuarioService, _eventoService, _libroService, alertController) {
        this.router = router;
        this._usuarioService = _usuarioService;
        this._eventoService = _eventoService;
        this._libroService = _libroService;
        this.alertController = alertController;
        //Para saber en que eventos estamos
        this.booleanEventos = true;
        //limite de eventos propios
        this.limitePropio = 3;
        //limite de libros propios
        this.limiteLibrosPropio = 3;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const logado = yield this._usuarioService.compruebaSiLogado();
            if (!logado) {
                this.router.navigate(['/inicio']);
                return;
            }
            //llamar al servicio
            yield this._eventoService.getEventos(this.limitePropio);
            this.usuario = this._usuarioService.usuarioActual.nombre;
            this.eventosPropios = this._eventoService.eventosPropios;
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
            else {
                //Limite de libros propios
                this.limiteLibrosPropio = this.limiteLibrosPropio + 3;
                //Antes de llamar al servicio coger los libros que tenemos ahora mismo
                const numeroVariableAntiguoLibro = this.librosPropios.length;
                //Cargar en la lista de libros propios
                yield this._libroService.getLibros(this.limiteLibrosPropio);
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
            //Completar la accion de cargar los eventos
            event.target.complete();
        });
    }
    loadEventosPropios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScroll.disabled = false;
            this.booleanEventos = true;
            //Quitar de la lista contraria los libros 
            this.librosPropios = [];
            //limite de eventos propios
            this.limitePropio = 3;
            //llamar al servicio para llamar al back para recuperar los eventos
            yield this._eventoService.getEventos(this.limitePropio);
            //Carga del servicio la lista de los eventos
            this.eventosPropios = this._eventoService.eventosPropios;
        });
    }
    loadLibrosPropios() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScroll.disabled = false;
            this.booleanEventos = false;
            //Quitar de la lista contraria los eventos 
            this.eventosPropios = [];
            //limite de libros propios
            this.limiteLibrosPropio = 3;
            //llamar al servicio para llamar al back para recuperar los libros
            yield this._libroService.getLibros(this.limiteLibrosPropio);
            //Carga del servicio la lista de los libros
            this.librosPropios = this._libroService.librosPropios;
        });
    }
    cerrarSesion() {
        this._usuarioService.cerrarSesion();
        this.router.navigateByUrl('/inicio');
    }
    crearEvento() {
        this.router.navigate(['/registrar-evento']);
    }
    editarEvento(_id) {
        this._eventoService.idEventoModificar = _id;
        this.router.navigate(['/modal-demo']);
    }
    //borrar evento
    borrarEvento(evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._eventoService.eventoIdBorrar = evento;
            yield this._eventoService.borrar();
            let eventoPropio;
            for (let data of this.eventosPropios) {
                if (data._id == evento) {
                    eventoPropio = data;
                }
            }
            let indexP = this.eventosPropios.indexOf(eventoPropio);
            this.eventosPropios.splice(indexP, 1);
        });
    }
    publicarLibro() {
        this.router.navigate(['/registrar-libro']);
    }
    editarLibro(_id) {
        this._libroService.idLibroModificar = _id;
        this.router.navigate(['/modal-demo-libro']);
    }
    borrarLibro(libro) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._libroService.libroIdBorrar = libro;
            yield this._libroService.borrar();
            let libroPropio;
            for (let data of this.librosPropios) {
                if (data._id == libro) {
                    libroPropio = data;
                }
            }
            let indexP = this.librosPropios.indexOf(libroPropio);
            this.librosPropios.splice(indexP, 1);
        });
    }
};
PrincipalLibreriaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"] },
    { type: _services_libro_service__WEBPACK_IMPORTED_MODULE_5__["LibroService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
PrincipalLibreriaPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"],] }]
};
PrincipalLibreriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal-libreria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./principal-libreria.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal-libreria/principal-libreria.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./principal-libreria.page.scss */ "./src/app/pages/principal-libreria/principal-libreria.page.scss")).default]
    })
], PrincipalLibreriaPage);



/***/ })

}]);
//# sourceMappingURL=pages-principal-libreria-principal-libreria-module-es2015.js.map