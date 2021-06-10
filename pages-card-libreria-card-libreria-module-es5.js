(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-libreria-card-libreria-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-libreria/card-libreria.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-libreria/card-libreria.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCardLibreriaCardLibreriaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <ion-header>\r\n   <div (click)=\"volver()\" color=\"none\" no-shadow>\r\n    <ion-icon class=\"volver\" name=\"arrow-back-outline\"></ion-icon>\r\n  </div>\r\n </ion-header>\r\n  \r\n <ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-toolbar>\r\n      <ion-segment>\r\n        <ion-segment-button (click)=\"verLibrosPicharCard()\" value=\"b\">Libros</ion-segment-button>\r\n        <ion-segment-button (click)=\"verEventosPincharCard()\" value=\"c\">Eventos</ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <!-- Libros -->\r\n    <ion-card *ngFor=\"let libro of librosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"libro.imagenLibro\" src=\"{{libro.imagenLibro}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!libro.imagenLibro\" src=\"../../../assets/registro-bibliofilo.jpg\">\r\n      </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{libro.nombreLibro}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Género: </b>{{libro.genero}}<br>\r\n        <b>Autor: </b>{{libro.autor}}<br>\r\n        <b>Precio: </b>{{libro.precio}}\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button *ngIf=\"!libro.participantes.includes(this.usuario)\" class=\"fav\" (click)=\"reservarLibro(libro)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n         <ion-icon name=\"bag-outline\" color=\"dark\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button *ngIf=\"libro.participantes.includes(this.usuario)\" class=\"fav\" (click)=\"quitarReservaLibro(libro)\" expand=\"block\" fill=\"clear\" shape=\"round\">\r\n        <ion-icon name=\"bag-check-outline\" color=\"dark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <!-- Eventos -->\r\n    <ion-card *ngFor=\"let evento of eventosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"evento.imagenEvento\" src=\"{{evento.imagenEvento}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!evento.imagenEvento\" src=\"../../../assets/evento.jpg\">\r\n      </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"cardStyle\"><h4>{{evento.nombreEvento}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Ciudad: </b>{{evento.ciudad}}<br>\r\n        <b>Direccion: </b>{{evento.direccion}}<br>\r\n        <b>Fecha: </b>{{evento.fecha | date: 'dd/MM/yyyy'}}<br>\r\n        <b>Hora: </b>{{evento.hora | date: 'HH:mm'}}\r\n      </ion-card-content>\r\n        <ion-item color=\"light\">\r\n        <ion-button class=\"apuntarse\" *ngIf=\"!evento.participantes.includes(this.usuario)\" (click)=\"apuntarse(evento)\" fill=\"outline\" slot=\"end\" expand=\"block\" [mode]=\"'md'\">Apuntarse</ion-button>\r\n        <ion-button class=\"desapuntarse\" *ngIf=\"evento.participantes.includes(this.usuario)\" (click)=\"desapuntarse(evento)\" fill=\"outline\" slot=\"end\" expand=\"block\" [mode]=\"'md'\" color=\"dark\" >Borrarse</ion-button>\r\n      </ion-item>\r\n    </ion-card>\r\n  </div>\r\n  <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"circular\"\r\n      loadingText=\"Cargando...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n<ion-footer class=\"bar-stable\">\r\n  <ion-toolbar class=\"tool-foot\" color=\"light\">\r\n    <div class=\"content-button-event\">\r\n      <ion-button class=\"button-telefono\" (click)=\"telefono()\" fill=\"outline\" slot=\"end\" color=\"primary\">\r\n        <ion-icon name=\"call-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button class=\"button-web\" (click)=\"web()\" fill=\"outline\" slot=\"end\" color=\"medium\">\r\n        <ion-icon name=\"globe-outline\"></ion-icon>\r\n      </ion-button>\r\n  </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/pages/card-libreria/card-libreria-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/card-libreria/card-libreria-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CardLibreriaPageRoutingModule */

    /***/
    function srcAppPagesCardLibreriaCardLibreriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLibreriaPageRoutingModule", function () {
        return CardLibreriaPageRoutingModule;
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


      var _card_libreria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./card-libreria.page */
      "./src/app/pages/card-libreria/card-libreria.page.ts");

      var routes = [{
        path: '',
        component: _card_libreria_page__WEBPACK_IMPORTED_MODULE_3__["CardLibreriaPage"]
      }];

      var CardLibreriaPageRoutingModule = function CardLibreriaPageRoutingModule() {
        _classCallCheck(this, CardLibreriaPageRoutingModule);
      };

      CardLibreriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CardLibreriaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/card-libreria/card-libreria.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/card-libreria/card-libreria.module.ts ***!
      \*************************************************************/

    /*! exports provided: CardLibreriaPageModule */

    /***/
    function srcAppPagesCardLibreriaCardLibreriaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLibreriaPageModule", function () {
        return CardLibreriaPageModule;
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


      var _card_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./card-libreria-routing.module */
      "./src/app/pages/card-libreria/card-libreria-routing.module.ts");
      /* harmony import */


      var _card_libreria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./card-libreria.page */
      "./src/app/pages/card-libreria/card-libreria.page.ts");

      var CardLibreriaPageModule = function CardLibreriaPageModule() {
        _classCallCheck(this, CardLibreriaPageModule);
      };

      CardLibreriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _card_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardLibreriaPageRoutingModule"]],
        declarations: [_card_libreria_page__WEBPACK_IMPORTED_MODULE_6__["CardLibreriaPage"]]
      })], CardLibreriaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/card-libreria/card-libreria.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/card-libreria/card-libreria.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCardLibreriaCardLibreriaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cardStyle {\n  text-align: center;\n  font-size: 17px;\n  height: 45px;\n  margin-top: -22px;\n}\n\n.apuntarse, .desapuntarse {\n  font-size: 10px;\n  padding-top: 2.5px;\n}\n\n.volver {\n  font-size: 23px;\n  margin-top: 12px;\n  margin-left: 18px;\n}\n\n.content-button-event {\n  text-align: center;\n}\n\n.imagen {\n  width: 311px;\n  height: 205px;\n}\n\n.imagenCard {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZC1saWJyZXJpYS9jYXJkLWxpYnJlcmlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZC1saWJyZXJpYS9jYXJkLWxpYnJlcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkU3R5bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtc2l6ZTogMTdweDsgXHJcbiAgICBoZWlnaHQ6IDQ1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XHJcbn1cclxuLmFwdW50YXJzZSwgLmRlc2FwdW50YXJzZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyLjVweDtcclxufVxyXG4udm9sdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxufVxyXG4uY29udGVudC1idXR0b24tZXZlbnR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlbiB7XHJcbiAgICB3aWR0aDogMzExcHg7XHJcbiAgICBoZWlnaHQ6IDIwNXB4O1xyXG59XHJcbi5pbWFnZW5DYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/card-libreria/card-libreria.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/card-libreria/card-libreria.page.ts ***!
      \***********************************************************/

    /*! exports provided: CardLibreriaPage */

    /***/
    function srcAppPagesCardLibreriaCardLibreriaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLibreriaPage", function () {
        return CardLibreriaPage;
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


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _services_evento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/evento.service */
      "./src/app/services/evento.service.ts");
      /* harmony import */


      var _services_libro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/libro.service */
      "./src/app/services/libro.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");

      var CardLibreriaPage = /*#__PURE__*/function () {
        function CardLibreriaPage(router, inAppBrowser, _usuarioService, _eventoService, _libroService, alertController, socialSharing, callNumber) {
          _classCallCheck(this, CardLibreriaPage);

          this.router = router;
          this.inAppBrowser = inAppBrowser;
          this._usuarioService = _usuarioService;
          this._eventoService = _eventoService;
          this._libroService = _libroService;
          this.alertController = alertController;
          this.socialSharing = socialSharing;
          this.callNumber = callNumber; //Para saber en que eventos estamos

          this.booleanEventos = true; //limite de usuarios

          this.limiteUsuariosLibreros = 3; //limite de eventos propios

          this.limitePropio = 3; //limite de libros propios

          this.limiteLibrosPropio = 3; //limite de favoritos

          this.limiteFavoritos = 3; //libreria pinchada

          this.libreriaPinchada = {};
        }

        _createClass(CardLibreriaPage, [{
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
                      this.libreriaPinchada = this._usuarioService.libreriaPinchadaCard;
                      console.log(this.libreriaPinchada);

                      if (logado) {
                        _context.next = 9;
                        break;
                      }

                      this.router.navigate(['/inicio']);
                      return _context.abrupt("return");

                    case 9:
                      //Para que se muestren las librerias al entrar en el perfil, que sea lo primero que se cargue
                      this.verLibrosPicharCard(); //llamar al servicio de usuario

                      this.usuario = this._usuarioService.usuarioActual.nombre;

                    case 11:
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
              var numeroVariableAntiguoEvento, nombreLibreriaPinchada, numeroVariableNuevoEvento, numeroVariableAntiguoLibro, _nombreLibreriaPinchada, numeroVariableNuevoLibro;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.booleanEventos) {
                        _context2.next = 10;
                        break;
                      }

                      //Limite de eventos propios
                      this.limitePropio = this.limitePropio + 3; //Antes de llamar al servicio coger los eventos que tenemos ahora mismo

                      numeroVariableAntiguoEvento = this.eventosPropios.length; //Llamar al servicio para llamar al back para recuperar los eventos

                      nombreLibreriaPinchada = this.libreriaPinchada.nombre;
                      _context2.next = 6;
                      return this._eventoService.mostrarEventosPicharCard(this.limitePropio, nombreLibreriaPinchada);

                    case 6:
                      //Saber los eventos que tenemos nuevos
                      numeroVariableNuevoEvento = this._eventoService.eventoCardPinchada.length; //Carga del servicio la lista de los eventos

                      if (numeroVariableAntiguoEvento == numeroVariableNuevoEvento) {
                        event.target.disabled = true;
                      } else {
                        this.eventosPropios = this._eventoService.eventoCardPinchada;
                      }

                      _context2.next = 17;
                      break;

                    case 10:
                      //Limite de libros
                      this.limiteLibrosPropio = this.limiteLibrosPropio + 3; //Antes de llamar al servicio coger los libros que tenemos ahora mismo

                      numeroVariableAntiguoLibro = this.librosPropios.length; //Llamar al servicio para llamar al back para recuperar los libros

                      _nombreLibreriaPinchada = this.libreriaPinchada.nombre;
                      _context2.next = 15;
                      return this._libroService.mostrarLibrosPicharCard(this.limiteLibrosPropio, _nombreLibreriaPinchada);

                    case 15:
                      //Saber los libros que tenemos nuevos
                      numeroVariableNuevoLibro = this._libroService.libroCardPinchada.length; //Carga del servicio la lista de los libros

                      if (numeroVariableAntiguoLibro == numeroVariableNuevoLibro) {
                        event.target.disabled = true;
                      } else {
                        this.librosPropios = this._libroService.libroCardPinchada;
                      }

                    case 17:
                      //completar la accion de cargar los eventos
                      event.target.complete();

                    case 18:
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
          key: "verLibrosPicharCard",
          value: function verLibrosPicharCard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var nombreLibreriaPinchada;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.infiniteScroll.disabled = false;
                      this.booleanEventos = false; //Quitar de la lista contraria los eventos

                      this.eventosPropios = []; //Quitar de la lista contraria las librerias

                      this.usuariosLibreros = []; //Limite de libros

                      this.limiteLibrosPropio = 3; //Llamar al servicio para llamar al back para recuperar los libros

                      nombreLibreriaPinchada = this.libreriaPinchada.nombre;
                      _context3.next = 8;
                      return this._libroService.mostrarLibrosPicharCard(this.limiteLibrosPropio, nombreLibreriaPinchada);

                    case 8:
                      //Carga del servicio la lista de libros
                      this.librosPropios = this._libroService.libroCardPinchada;

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "verEventosPincharCard",
          value: function verEventosPincharCard() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var nombreLibreriaPinchada;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.infiniteScroll.disabled = false;
                      this.booleanEventos = true; //Quitar de la lista contraria las librerias

                      this.usuariosLibreros = []; //Quitar de la lista contraria los libros

                      this.librosPropios = []; //Limite de eventos propios

                      this.limitePropio = 3; //Llamar al servicio para llamar al back para recuperar los eventos

                      nombreLibreriaPinchada = this.libreriaPinchada.nombre;
                      _context4.next = 8;
                      return this._eventoService.mostrarEventosPicharCard(this.limitePropio, nombreLibreriaPinchada);

                    case 8:
                      //Carga del servicio la lista de los eventos
                      this.eventosPropios = this._eventoService.eventoCardPinchada;

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } //Boton del menu - favoritos

        }, {
          key: "fav",
          value: function fav() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      //Quitar de la lista contraria los eventos
                      this.eventosPropios = []; //Quitar de la lista contraria los libros

                      this.librosPropios = []; //Limpiar la propia lista en favoritos

                      this.usuariosLibreros = []; //Limite favoritos

                      this.limiteFavoritos = 3; //Llamar al servicio para llamar al back para recuperar las librerias favoritas 

                      _context5.next = 6;
                      return this._usuarioService.mostrarLibreriasFavoritas(this.limiteFavoritos);

                    case 6:
                      //Carga del servicio la lista de favoritos 
                      this.usuariosLibreros = this._usuarioService.usuarioLibreria;

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this = this;

              var index, alert, _alert, _alert2, datos;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      //Contemplar mensaje de apuntarse o mensaje de evento completo
                      index = evento.participantes.findIndex(function (usuario) {
                        return usuario === _this.usuario;
                      });

                      if (!(index > -1)) {
                        _context6.next = 9;
                        break;
                      }

                      _context6.next = 4;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Ya estás apuntado en este evento',
                        buttons: ['OK']
                      });

                    case 4:
                      alert = _context6.sent;
                      _context6.next = 7;
                      return alert.present();

                    case 7:
                      _context6.next = 25;
                      break;

                    case 9:
                      if (!(evento.participantes.length === 10)) {
                        _context6.next = 17;
                        break;
                      }

                      _context6.next = 12;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Evento completado',
                        buttons: ['OK']
                      });

                    case 12:
                      _alert = _context6.sent;
                      _context6.next = 15;
                      return _alert.present();

                    case 15:
                      _context6.next = 25;
                      break;

                    case 17:
                      _context6.next = 19;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        subHeader: '¡Te has apuntado al evento!',
                        buttons: ['OK']
                      });

                    case 19:
                      _alert2 = _context6.sent;
                      _context6.next = 22;
                      return _alert2.present();

                    case 22:
                      evento.participantes.push(this.usuario);
                      datos = {
                        _id: evento._id
                      };

                      this._eventoService.apuntarse(datos);

                    case 25:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } //Desapuntarse del evento

        }, {
          key: "desapuntarse",
          value: function desapuntarse(evento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var indice, datos, alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      indice = evento.participantes.indexOf(this.usuario); // obtenemos el indice

                      evento.participantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

                      datos = {
                        _id: evento._id
                      };
                      _context7.next = 5;
                      return this._eventoService.desapuntarse(datos);

                    case 5:
                      _context7.next = 7;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Te has borrado del evento',
                        buttons: ['OK']
                      });

                    case 7:
                      alert = _context7.sent;
                      _context7.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this2 = this;

              var index, alert, datos;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      index = libro.participantes.findIndex(function (usuario) {
                        return usuario === _this2.usuario;
                      });
                      _context8.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        subHeader: '¡Has reservado el libro con éxito!',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context8.sent;
                      _context8.next = 6;
                      return alert.present();

                    case 6:
                      libro.participantes.push(this.usuario);
                      datos = {
                        nombreLibro: libro.nombreLibro
                      };

                      this._libroService.reservarLibro(datos);

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "quitarReservaLibro",
          value: function quitarReservaLibro(libro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var indice, datos, alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      indice = libro.participantes.indexOf(this.usuario); // obtenemos el indice

                      libro.participantes.splice(indice, 1); // 1 es la cantidad de elemento a eliminar

                      datos = {
                        nombreLibro: libro.nombreLibro
                      };
                      _context9.next = 5;
                      return this._libroService.quitarReservaLibro(datos);

                    case 5:
                      _context9.next = 7;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Has cancelado la reserva del libro con éxito',
                        buttons: ['OK']
                      });

                    case 7:
                      alert = _context9.sent;
                      _context9.next = 10;
                      return alert.present();

                    case 10:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "volver",
          value: function volver() {
            this.router.navigateByUrl('/perfil');
          }
        }, {
          key: "telefono",
          value: function telefono() {
            var telefono = this.libreriaPinchada.telefono;
            this.callNumber.callNumber(telefono, true).then(function (res) {
              return console.log('Abriendo marcador', res);
            })["catch"](function (err) {
              return console.log('Error marcador', err);
            });
          }
        }, {
          key: "web",
          value: function web() {
            var web = this.libreriaPinchada.web;
            this.inAppBrowser.create(web, '_blank', {
              lefttoright: 'yes',
              toolbarposition: 'top',
              presentationstyle: 'fullscreen',
              toolbartranslucent: 'yes',
              location: 'yes',
              hidden: 'no',
              hideweblibreria: 'yes'
            });
          }
        }]);

        return CardLibreriaPage;
      }();

      CardLibreriaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }, {
          type: _services_evento_service__WEBPACK_IMPORTED_MODULE_5__["EventoService"]
        }, {
          type: _services_libro_service__WEBPACK_IMPORTED_MODULE_6__["LibroService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"]
        }];
      };

      CardLibreriaPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"]]
        }]
      };
      CardLibreriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-libreria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./card-libreria.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-libreria/card-libreria.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./card-libreria.page.scss */
        "./src/app/pages/card-libreria/card-libreria.page.scss"))["default"]]
      })], CardLibreriaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-card-libreria-card-libreria-module-es5.js.map