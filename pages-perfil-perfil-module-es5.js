(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-perfil-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilPerfilPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-toolbar class=\"toolbar-color\">\r\n    <ion-avatar [routerLink]=\"'/perfil-bibliofilo'\" class=\"avatar-profile\">\r\n      <img src=\"../../../assets/profile-w.png\">\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-toolbar>\r\n      <ion-segment>\r\n        <ion-segment-button (click)=\"librerias()\" value=\"a\">Librerías</ion-segment-button>\r\n        <ion-segment-button (click)=\"libros()\" value=\"b\">Libros</ion-segment-button>\r\n        <ion-segment-button (click)=\"eventos()\" value=\"c\">Eventos</ion-segment-button>\r\n        <ion-segment-button (click)=\"fav()\" value=\"d\">Favoritos</ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n  <!-- Librerias -->\r\n    <ion-card *ngFor=\"let usuario of usuariosLibreros\">\r\n      <div class=\"imagen\">\r\n      <img class=\"imagenCard\" (click)=\"verLibreria(usuario)\" src=\"../../../assets/libreria.jpg\">\r\n    </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{usuario.nombre}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Dirección: </b>{{usuario.direccion}}<br>\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button class=\"share\" (click)=\"compartirLibreria(usuario)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n          <ion-icon name=\"share\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"usuarioActual.favoritos.includes(usuario.nombre)\" class=\"fav\" (click)=\"borrarFavorito(usuario.nombre)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"heart-sharp\" color=\"danger\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"!usuarioActual.favoritos.includes(usuario.nombre)\" class=\"fav\" (click)=\"guardarFavorito(usuario.nombre)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"heart-outline\" color=\"danger\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card> \r\n\r\n    <!-- Libros -->\r\n    <ion-card *ngFor=\"let libro of librosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"libro.imagenLibro\"src=\"{{libro.imagenLibro}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!libro.imagenLibro\" src=\"../../../assets/registro-bibliofilo.jpg\">\r\n    </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{libro.nombreLibro}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Género: </b>{{libro.genero}}<br>\r\n        <b>Autor: </b>{{libro.autor}}<br>\r\n        <b>Precio: </b>{{libro.precio}}\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button *ngIf=\"!libro.participantes.includes(this.usuario)\" class=\"fav\" (click)=\"reservarLibro(libro)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"bag-outline\" color=\"dark\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"libro.participantes.includes(this.usuario)\" class=\"fav\" (click)=\"quitarReservaLibro(libro)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        <ion-icon name=\"bag-check-outline\" color=\"dark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <!-- Eventos -->\r\n    <ion-card *ngFor=\"let evento of eventosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"evento.imagenEvento\" src=\"{{evento.imagenEvento}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!evento.imagenEvento\" src=\"../../../assets/evento.jpg\">\r\n      </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{evento.nombreEvento}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Ciudad: </b>{{evento.ciudad}}<br>\r\n        <b>Direccion: </b>{{evento.direccion}}<br>\r\n        <b>Fecha: </b>{{evento.fecha | date: 'dd/MM/yyyy'}}<br>\r\n        <b>Hora: </b>{{evento.hora | date: 'HH:mm'}}\r\n      </ion-card-content>\r\n        <ion-item color=\"light\">\r\n        <ion-button class=\"apuntarse\" *ngIf=\"!evento.participantes.includes(this.usuario)\" (click)=\"apuntarse(evento)\" fill=\"outline\" slot=\"end\" expand=\"block\" [mode]=\"'md'\">Apuntarse</ion-button>\r\n        <ion-button class=\"desapuntarse\" *ngIf=\"evento.participantes.includes(this.usuario)\" (click)=\"desapuntarse(evento)\" fill=\"outline\" slot=\"end\" expand=\"block\" [mode]=\"'md'\" color=\"dark\" >Borrarse</ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"circular\"\r\n      loadingText=\"Cargando...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/pages/perfil/perfil-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: PerfilPageRoutingModule */

    /***/
    function srcAppPagesPerfilPerfilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function () {
        return PerfilPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil.page */
      "./src/app/pages/perfil/perfil.page.ts");

      var routes = [{
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
      }];

      var PerfilPageRoutingModule = function PerfilPageRoutingModule() {
        _classCallCheck(this, PerfilPageRoutingModule);
      };

      PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/perfil/perfil.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/perfil/perfil.module.ts ***!
      \***********************************************/

    /*! exports provided: PerfilPageModule */

    /***/
    function srcAppPagesPerfilPerfilModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function () {
        return PerfilPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-routing.module */
      "./src/app/pages/perfil/perfil-routing.module.ts");
      /* harmony import */


      var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil.page */
      "./src/app/pages/perfil/perfil.page.ts");

      var PerfilPageModule = function PerfilPageModule() {
        _classCallCheck(this, PerfilPageModule);
      };

      PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
      })], PerfilPageModule);
      /***/
    },

    /***/
    "./src/app/pages/perfil/perfil.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/perfil/perfil.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPerfilPerfilPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avatar-profile {\n  position: relative;\n  left: 295px;\n  margin-top: 53px;\n  border: 1px solid #b6dcf3;\n  width: 60px;\n  height: 60px;\n  background-color: #b6dcf3;\n}\n\n.fav, .share {\n  font-size: 17px;\n}\n\n.fav {\n  position: absolute;\n  right: 16px;\n}\n\n.share {\n  position: absolute;\n  left: 0;\n}\n\n.cardStyle {\n  text-align: center;\n  font-size: 17px;\n  height: 45px;\n  margin-top: -22px;\n}\n\n.apuntarse, .desapuntarse {\n  font-size: 10px;\n  padding-top: 2.5px;\n}\n\n.imagen {\n  width: 311px;\n  height: 205px;\n}\n\n.imagenCard {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci1wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDI5NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmRjZjM7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmRjZjM7XHJcbn1cclxuLmZhdiwgLnNoYXJlIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uZmF2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbn1cclxuLnNoYXJle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4uY2FyZFN0eWxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LXNpemU6IDE3cHg7IFxyXG4gICAgaGVpZ2h0OiA0NXB4OyBcclxuICAgIG1hcmdpbi10b3A6IC0yMnB4O1xyXG59XHJcblxyXG4uYXB1bnRhcnNlLCAuZGVzYXB1bnRhcnNle1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIuNXB4O1xyXG59XHJcbi5pbWFnZW4ge1xyXG4gICAgd2lkdGg6IDMxMXB4O1xyXG4gICAgaGVpZ2h0OiAyMDVweDtcclxufVxyXG4uaW1hZ2VuQ2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuICAgICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/perfil/perfil.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/perfil/perfil.page.ts ***!
      \*********************************************/

    /*! exports provided: PerfilPage */

    /***/
    function srcAppPagesPerfilPerfilPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilPage", function () {
        return PerfilPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _services_evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/evento.service */
      "./src/app/services/evento.service.ts");
      /* harmony import */


      var _services_libro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/libro.service */
      "./src/app/services/libro.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

      var PerfilPage = /*#__PURE__*/function () {
        function PerfilPage(router, _usuarioService, _eventoService, _libroService, alertController, socialSharing) {
          _classCallCheck(this, PerfilPage);

          this.router = router;
          this._usuarioService = _usuarioService;
          this._eventoService = _eventoService;
          this._libroService = _libroService;
          this.alertController = alertController;
          this.socialSharing = socialSharing; //Para saber en que eventos estamos

          this.booleanEventos = false; //Para saber en que Libros estamos

          this.booleanLibros = false; //Para saber en que Librerias estamos

          this.booleanLibrerias = false; //Para saber en que Favoritos estamos

          this.booleanFavoritos = false; //limite de usuarios

          this.limiteUsuariosLibreros = 3; //limite de eventos propios

          this.limitePropio = 3; //limite de libros propios

          this.limiteLibrosPropio = 3; //limite de favoritos

          this.limiteFavoritos = 3;
        }

        _createClass(PerfilPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var logado;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._usuarioService.compruebaSiLogado();

                    case 2:
                      logado = _context.sent;
                      this.usuarioActual = this._usuarioService.usuarioActual;

                      if (logado) {
                        _context.next = 7;
                        break;
                      }

                      this.router.navigate(['/inicio']);
                      return _context.abrupt("return");

                    case 7:
                      //Para que se muestren las librerias al entrar en el perfil, que sea lo primero que se cargue
                      this.librerias(); //llamar al servicio de usuario

                      this.usuario = this._usuarioService.usuarioActual.nombre;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //Infinitte scroll

        }, {
          key: "loadData",
          value: function loadData(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.booleanEventos) {
                        _context2.next = 7;
                        break;
                      }

                      //limite de eventos propios
                      this.limitePropio = this.limitePropio + 3; //Cargar en la lista propia mis eventos

                      _context2.next = 4;
                      return this._eventoService.getEventos(this.limitePropio);

                    case 4:
                      this.eventosPropios = this._eventoService.eventosPropios;
                      _context2.next = 26;
                      break;

                    case 7:
                      if (!this.booleanLibrerias) {
                        _context2.next = 14;
                        break;
                      }

                      //limite de usuarios tipo - libreria
                      this.limiteUsuariosLibreros = this.limiteUsuariosLibreros + 3; //llamar al servicio para llamar al back para recuperar los libros

                      _context2.next = 11;
                      return this._usuarioService.mostrarLibreria(this.limiteUsuariosLibreros);

                    case 11:
                      //Carga del servicio la lista de usuarios
                      this.usuariosLibreros = this._usuarioService.usuarioLibreria;
                      _context2.next = 26;
                      break;

                    case 14:
                      if (!this.booleanLibros) {
                        _context2.next = 21;
                        break;
                      }

                      //Limite de libros
                      this.limiteLibrosPropio = this.limiteLibrosPropio + 3; //Llamar al servicio para llamar al back para recuperar los libros

                      _context2.next = 18;
                      return this._libroService.mostrarLibros(this.limiteLibrosPropio);

                    case 18:
                      //Carga del servicio la lista de libros
                      this.librosPropios = this._libroService.librosPropios;
                      _context2.next = 26;
                      break;

                    case 21:
                      if (!this.booleanFavoritos) {
                        _context2.next = 26;
                        break;
                      }

                      //Limite favoritos
                      this.limiteFavoritos = this.limiteFavoritos + 3; //Llamar al servicio para llamar al back para recuperar las librerias favoritas 

                      _context2.next = 25;
                      return this._usuarioService.mostrarLibreriasFavoritas(this.limiteFavoritos);

                    case 25:
                      //Carga del servicio la lista de favoritos 
                      this.usuariosLibreros = this._usuarioService.usuarioLibreria;

                    case 26:
                      //completar la accion de cargar los eventos
                      event.target.complete();

                    case 27:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this._usuarioService.cerrarSesion();

            this.router.navigateByUrl('/inicio');
          }
        }, {
          key: "librerias",
          value: function librerias() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      //Poner a true el boolean de librerias para saber que estamos viendo librerias
                      this.booleanLibrerias = true;
                      this.booleanFavoritos = false;
                      this.booleanEventos = false;
                      this.booleanLibros = false; //Quitar de la lista contraria los eventos

                      this.eventosPropios = []; //Quitar de la lista contraria los libros

                      this.librosPropios = []; //Limpiar la propia lista de librerias

                      this.usuariosLibreros = []; //limite de usuarios tipo - libreria

                      this.limiteUsuariosLibreros = 3; //llamar al servicio para llamar al back para recuperar los libros

                      _context3.next = 10;
                      return this._usuarioService.mostrarLibreria(this.limiteUsuariosLibreros);

                    case 10:
                      //Carga del servicio la lista de usuarios
                      this.usuariosLibreros = this._usuarioService.usuarioLibreria;

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "eventos",
          value: function eventos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      //Poner a true el boolean de Eventos para saber que estamos viendo Eventos
                      this.booleanLibrerias = false;
                      this.booleanFavoritos = false;
                      this.booleanEventos = true;
                      this.booleanLibros = false; //Quitar de la lista contraria las librerias

                      this.usuariosLibreros = []; //Quitar de la lista contraria los libros

                      this.librosPropios = []; //Limite de eventos propios

                      this.limitePropio = 3; //Llamar al servicio para llamar al back para recuperar los eventos

                      _context4.next = 9;
                      return this._eventoService.getEventosPorBibliofilo(this.limitePropio);

                    case 9:
                      //Carga del servicio la lista de los eventos
                      this.eventosPropios = this._eventoService.eventosPropios;

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "libros",
          value: function libros() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      //Poner a true el boolean de Libros para saber que estamos viendo Libros
                      this.booleanLibrerias = false;
                      this.booleanFavoritos = false;
                      this.booleanEventos = false;
                      this.booleanLibros = true; //Quitar de la lista contraria los eventos

                      this.eventosPropios = []; //Quitar de la lista contraria las librerias

                      this.usuariosLibreros = []; //Limite de libros

                      this.limiteLibrosPropio = 3; //Llamar al servicio para llamar al back para recuperar los libros

                      _context5.next = 9;
                      return this._libroService.mostrarLibros(this.limiteLibrosPropio);

                    case 9:
                      //Carga del servicio la lista de libros
                      this.librosPropios = this._libroService.librosPropios;

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } //Boton del menu - favoritos

        }, {
          key: "fav",
          value: function fav() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      //Poner a true el boolean de Favoritos para saber que estamos viendo Favoritos
                      this.booleanLibrerias = false;
                      this.booleanFavoritos = true;
                      this.booleanEventos = false;
                      this.booleanLibros = false; //Quitar de la lista contraria los eventos

                      this.eventosPropios = []; //Quitar de la lista contraria los libros

                      this.librosPropios = []; //Limpiar la propia lista en favoritos

                      this.usuariosLibreros = []; //Limite favoritos

                      this.limiteFavoritos = 3; //Llamar al servicio para llamar al back para recuperar las librerias favoritas 

                      _context6.next = 10;
                      return this._usuarioService.mostrarLibreriasFavoritas(this.limiteFavoritos);

                    case 10:
                      //Carga del servicio la lista de favoritos 
                      this.usuariosLibreros = this._usuarioService.usuarioLibreria;

                    case 11:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "guardarFavorito",
          value: function guardarFavorito(libreria) {
            this._usuarioService.usuarioActual.favoritos.push(libreria);

            this._usuarioService.guadarLibreriaFav(libreria);
          }
        }, {
          key: "borrarFavorito",
          value: function borrarFavorito(libreria) {
            // obtenemos el indice
            var indice = this._usuarioService.usuarioActual.favoritos.indexOf(libreria); // 1 es la cantidad de elemento a eliminar


            this._usuarioService.usuarioActual.favoritos.splice(indice, 1); //borrar la libreria


            this._usuarioService.borrarLibreriaFav(libreria);
          } //Apuntarse al evento

        }, {
          key: "apuntarse",
          value: function apuntarse(evento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this = this;

              var index, alert, _alert, _alert2, datos;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      //Contemplar mensaje de apuntarse o mensaje de evento completo
                      index = evento.participantes.findIndex(function (usuario) {
                        return usuario === _this.usuario;
                      });

                      if (!(index > -1)) {
                        _context7.next = 9;
                        break;
                      }

                      _context7.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Ya estás apuntado en este evento',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context7.sent;
                      _context7.next = 7;
                      return alert.present();

                    case 7:
                      _context7.next = 25;
                      break;

                    case 9:
                      if (!(evento.participantes.length === 10)) {
                        _context7.next = 17;
                        break;
                      }

                      _context7.next = 12;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Evento completado',
                        buttons: ['OK']
                      });

                    case 12:
                      _alert = _context7.sent;
                      _context7.next = 15;
                      return _alert.present();

                    case 15:
                      _context7.next = 25;
                      break;

                    case 17:
                      _context7.next = 19;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        subHeader: '¡Te has apuntado al evento!',
                        buttons: ['OK']
                      });

                    case 19:
                      _alert2 = _context7.sent;
                      _context7.next = 22;
                      return _alert2.present();

                    case 22:
                      evento.participantes.push(this.usuario);
                      datos = {
                        _id: evento._id
                      };

                      this._eventoService.apuntarse(datos);

                    case 25:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } //Desapuntarse del evento

        }, {
          key: "desapuntarse",
          value: function desapuntarse(evento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var indice, datos, alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      indice = evento.participantes.indexOf(this.usuario); // obtenemos el indice

                      evento.participantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

                      datos = {
                        _id: evento._id
                      };
                      _context8.next = 5;
                      return this._eventoService.desapuntarse(datos);

                    case 5:
                      _context8.next = 7;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Te has borrado del evento',
                        buttons: ['OK']
                      });

                    case 7:
                      alert = _context8.sent;
                      _context8.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "compartirLibreria",
          value: function compartirLibreria(usuario) {
            var options = {
              message: 'Mira esta librería',
              web: usuario.web
            };
            this.socialSharing.shareWithOptions(options);
          }
        }, {
          key: "reservarLibro",
          value: function reservarLibro(libro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this2 = this;

              var index, alert, datos;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      index = libro.participantes.findIndex(function (usuario) {
                        return usuario === _this2.usuario;
                      });
                      _context9.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        subHeader: '¡Has reservado el libro con éxito!',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context9.sent;
                      _context9.next = 6;
                      return alert.present();

                    case 6:
                      libro.participantes.push(this.usuario);
                      datos = {
                        nombreLibro: libro.nombreLibro
                      };

                      this._libroService.reservarLibro(datos);

                    case 9:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "quitarReservaLibro",
          value: function quitarReservaLibro(libro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var indice, datos, alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      indice = libro.participantes.indexOf(this.usuario); // obtenemos el indice

                      libro.participantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

                      datos = {
                        nombreLibro: libro.nombreLibro
                      };
                      _context10.next = 5;
                      return this._libroService.quitarReservaLibro(datos);

                    case 5:
                      _context10.next = 7;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Has cancelado la reserva del libro con éxito',
                        buttons: ['OK']
                      });

                    case 7:
                      alert = _context10.sent;
                      _context10.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "verLibreria",
          value: function verLibreria(usuario) {
            this._usuarioService.libreriaPinchadaCard = usuario;
            this.router.navigate(['/card-libreria']);
          }
        }]);

        return PerfilPage;
      }();

      PerfilPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }, {
          type: _services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"]
        }, {
          type: _services_libro_service__WEBPACK_IMPORTED_MODULE_5__["LibroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
        }];
      };

      PerfilPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"]]
        }]
      };
      PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./perfil.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil/perfil.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./perfil.page.scss */
        "./src/app/pages/perfil/perfil.page.scss"))["default"]]
      })], PerfilPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-perfil-perfil-module-es5.js.map