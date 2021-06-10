(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-principal-libreria-principal-libreria-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal-libreria/principal-libreria.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal-libreria/principal-libreria.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPrincipalLibreriaPrincipalLibreriaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <ion-toolbar class=\"toolbar-color\">\r\n    <ion-avatar [routerLink]=\"'/perfil-libreria'\" class=\"avatar-profile\">\r\n      <img src=\"../../../assets/profile-l.jpg\">\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n\r\n<ion-content class=\"content\">\r\n<div class=\"options\">\r\n    <ion-toolbar >\r\n      <ion-segment>\r\n        <ion-segment-button (click)=\"loadEventosPropios()\" value=\"propio\">Eventos</ion-segment-button>\r\n        <ion-segment-button (click)=\"loadLibrosPropios()\" value=\"ajeno\">Libros</ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n    \r\n     <!-- Eventos -->\r\n      <ion-card *ngFor=\"let evento of eventosPropios\">\r\n        <div class=\"imagen\">\r\n          <img class=\"imagenCard\" *ngIf=\"evento.imagenEvento\" src=\"{{evento.imagenEvento}}\">\r\n          <img class=\"imagenCard\" *ngIf=\"!evento.imagenEvento\" src=\"../../../assets/evento.jpg\">\r\n        </div>\r\n        <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n          <ion-card-title class=\"card-titulo\"><h4>{{evento.nombreEvento}}</h4></ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content style=\"margin-top: 12px;\">\r\n          <b>Ciudad: </b>{{evento.ciudad}}<br>\r\n          <b>Direccion: </b>{{evento.direccion}}<br>\r\n          <b>Fecha: </b>{{evento.fecha | date: 'dd/MM/yyyy'}}<br>\r\n          <b>Hora: </b>{{evento.hora | date: 'HH:mm'}}\r\n        </ion-card-content>\r\n        <ion-item color=\"light\">\r\n          <ion-icon name=\"accessibility-outline\"></ion-icon>\r\n          <span>{{evento.participantes.length}}</span>\r\n          <ion-button class=\"option\" (click)=\"editarEvento(evento._id)\" fill=\"outline\" slot=\"end\" >Editar</ion-button>\r\n          <ion-button class=\"option\" (click)=\"borrarEvento(evento._id)\" fill=\"outline\" slot=\"end\" color=\"danger\">Borrar</ion-button> \r\n        </ion-item>\r\n      </ion-card> \r\n    </div>\r\n\r\n    <!-- Libros -->\r\n    <ion-card *ngFor=\"let libro of librosPropios\">\r\n      <div class=\"imagen\">\r\n        <img class=\"imagenCard\" *ngIf=\"libro.imagenLibro\" src=\"{{libro.imagenLibro}}\">\r\n        <img class=\"imagenCard\" *ngIf=\"!libro.imagenLibro\" src=\"../../../assets/registro-bibliofilo.jpg\">\r\n      </div>\r\n      <ion-card-header color=\"light\" style=\"height: 45px;\">\r\n        <ion-card-title class=\"card-titulo\"><h4>{{libro.nombreLibro}}</h4></ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"margin-top: 12px;\">\r\n        <b>Género: </b>{{libro.genero}}<br>\r\n        <b>Autor: </b>{{libro.autor}}<br>\r\n        <b>Precio: </b>{{libro.precio}}\r\n      </ion-card-content>\r\n      <ion-item color=\"light\">\r\n        <ion-button *ngIf=\"libro.participantes.length > 0\"  class=\"reservado\" fill=\"outline\" slot=\"end\" color=\"success\">Reservado</ion-button>\r\n        <ion-button class=\"option\" (click)=\"editarLibro(libro._id)\" fill=\"outline\" slot=\"end\" >Editar</ion-button>\r\n        <ion-button class=\"option\" (click)=\"borrarLibro(libro._id)\" fill=\"outline\" slot=\"end\" color=\"danger\">Borrar</ion-button> \r\n      </ion-item>\r\n      <ion-item *ngIf=\"libro.participantes.length > 0\" class=\"personaReservaLibro\" color=\"light\">\r\n        <div>\r\n          <span>{{libro.participantes[0]}}</span><br>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card>\r\n    <ion-infinite-scroll threshold=\"200px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"circular\"\r\n      loadingText=\"Cargando...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n  \r\n  <ion-footer class=\"bar-stable\">\r\n    <ion-toolbar class=\"tool-foot\" color=\"light\">\r\n      <div class=\"content-button-event\">\r\n          <ion-button class=\"button-event\" (click)=\"crearEvento()\" fill=\"solid\" slot=\"end\" color=\"success\">Crear evento\r\n          </ion-button>\r\n          <ion-button class=\"button-book\" (click)=\"publicarLibro()\" fill=\"solid\" slot=\"end\" color=\"medium\">Publicar libro\r\n          </ion-button>\r\n    </div>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n  ";
      /***/
    },

    /***/
    "./src/app/pages/principal-libreria/principal-libreria-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/principal-libreria/principal-libreria-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: PrincipalLibreriaPageRoutingModule */

    /***/
    function srcAppPagesPrincipalLibreriaPrincipalLibreriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalLibreriaPageRoutingModule", function () {
        return PrincipalLibreriaPageRoutingModule;
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


      var _principal_libreria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./principal-libreria.page */
      "./src/app/pages/principal-libreria/principal-libreria.page.ts");

      var routes = [{
        path: '',
        component: _principal_libreria_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalLibreriaPage"]
      }];

      var PrincipalLibreriaPageRoutingModule = function PrincipalLibreriaPageRoutingModule() {
        _classCallCheck(this, PrincipalLibreriaPageRoutingModule);
      };

      PrincipalLibreriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PrincipalLibreriaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/principal-libreria/principal-libreria.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/principal-libreria/principal-libreria.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PrincipalLibreriaPageModule */

    /***/
    function srcAppPagesPrincipalLibreriaPrincipalLibreriaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalLibreriaPageModule", function () {
        return PrincipalLibreriaPageModule;
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


      var _principal_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./principal-libreria-routing.module */
      "./src/app/pages/principal-libreria/principal-libreria-routing.module.ts");
      /* harmony import */


      var _principal_libreria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./principal-libreria.page */
      "./src/app/pages/principal-libreria/principal-libreria.page.ts");

      var PrincipalLibreriaPageModule = function PrincipalLibreriaPageModule() {
        _classCallCheck(this, PrincipalLibreriaPageModule);
      };

      PrincipalLibreriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _principal_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalLibreriaPageRoutingModule"]],
        declarations: [_principal_libreria_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalLibreriaPage"]]
      })], PrincipalLibreriaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/principal-libreria/principal-libreria.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/principal-libreria/principal-libreria.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPrincipalLibreriaPrincipalLibreriaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: hidden;\n  background-color: white;\n}\n\n.options {\n  margin-top: 12px;\n}\n\n.avatar-profile {\n  position: relative;\n  left: 285px;\n  margin-top: 6px;\n  width: 60px;\n  height: 60px;\n}\n\n.bar-stable {\n  margin-top: 12px;\n}\n\n.tool-foot {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.card-titulo {\n  color: #3d3df0;\n  text-align: center;\n  font-size: 17px;\n  height: 45px;\n  margin-top: -24px;\n}\n\n.button-event, .button-book {\n  width: 122px;\n  height: 38px;\n  margin-top: 14px;\n  margin-bottom: 12px;\n}\n\n.localizacion, .share {\n  font-size: 17px;\n}\n\n.option {\n  font-size: 15px;\n}\n\n.reservado {\n  font-size: 15px;\n  position: absolute;\n  left: 0;\n}\n\n.personaReservaLibro {\n  font-size: 13px;\n}\n\n.imagen {\n  width: 344px;\n  height: 205px;\n}\n\n.imagenCard {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpbmNpcGFsLWxpYnJlcmlhL3ByaW5jaXBhbC1saWJyZXJpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFZSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaW5jaXBhbC1saWJyZXJpYS9wcmluY2lwYWwtbGlicmVyaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ub3B0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5hdmF0YXItcHJvZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyODVweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5iYXItc3RhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLnRvb2wtZm9vdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG5cclxufVxyXG4uY2FyZC10aXR1bG8ge1xyXG4gICAgY29sb3I6IHJnYig2MSwgNjEsIDI0MCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7IFxyXG4gICAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbn1cclxuLmJ1dHRvbi1ldmVudCwgLmJ1dHRvbi1ib29rIHtcclxuICAgIHdpZHRoOiAxMjJweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbi5sb2NhbGl6YWNpb24sIC5zaGFyZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLm9wdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnJlc2VydmFkb3tcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLnBlcnNvbmFSZXNlcnZhTGlicm97XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmltYWdlbiB7XHJcbiAgICB3aWR0aDogMzQ0cHg7XHJcbiAgICBoZWlnaHQ6IDIwNXB4O1xyXG59XHJcbi5pbWFnZW5DYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/principal-libreria/principal-libreria.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/principal-libreria/principal-libreria.page.ts ***!
      \*********************************************************************/

    /*! exports provided: PrincipalLibreriaPage */

    /***/
    function srcAppPagesPrincipalLibreriaPrincipalLibreriaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrincipalLibreriaPage", function () {
        return PrincipalLibreriaPage;
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

      var PrincipalLibreriaPage = /*#__PURE__*/function () {
        function PrincipalLibreriaPage(router, _usuarioService, _eventoService, _libroService, alertController) {
          _classCallCheck(this, PrincipalLibreriaPage);

          this.router = router;
          this._usuarioService = _usuarioService;
          this._eventoService = _eventoService;
          this._libroService = _libroService;
          this.alertController = alertController; //Para saber en que eventos estamos

          this.booleanEventos = true; //limite de eventos propios

          this.limitePropio = 3; //limite de libros propios

          this.limiteLibrosPropio = 3;
        }

        _createClass(PrincipalLibreriaPage, [{
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

                      if (logado) {
                        _context.next = 6;
                        break;
                      }

                      this.router.navigate(['/inicio']);
                      return _context.abrupt("return");

                    case 6:
                      _context.next = 8;
                      return this._eventoService.getEventos(this.limitePropio);

                    case 8:
                      this.usuario = this._usuarioService.usuarioActual.nombre;
                      this.eventosPropios = this._eventoService.eventosPropios;

                    case 10:
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
              var numeroVariableAntiguoEvento, numeroVariableNuevoEvento, numeroVariableAntiguoLibro, numeroVariableNuevoLibro;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.booleanEventos) {
                        _context2.next = 9;
                        break;
                      }

                      //Limite de eventos propios
                      this.limitePropio = this.limitePropio + 3; //Antes de llamar al servicio coger los eventos que tenemos ahora mismo

                      numeroVariableAntiguoEvento = this.eventosPropios.length; //Cargar en la lista propia mis eventos

                      _context2.next = 5;
                      return this._eventoService.getEventos(this.limitePropio);

                    case 5:
                      //Saber los eventos que tenemos nuevos
                      numeroVariableNuevoEvento = this._eventoService.eventosPropios.length; //Carga del servicio la lista de los eventos

                      if (numeroVariableAntiguoEvento == numeroVariableNuevoEvento) {
                        event.target.disabled = true;
                      } else {
                        this.eventosPropios = this._eventoService.eventosPropios;
                      }

                      _context2.next = 15;
                      break;

                    case 9:
                      //Limite de libros propios
                      this.limiteLibrosPropio = this.limiteLibrosPropio + 3; //Antes de llamar al servicio coger los libros que tenemos ahora mismo

                      numeroVariableAntiguoLibro = this.librosPropios.length; //Cargar en la lista de libros propios

                      _context2.next = 13;
                      return this._libroService.getLibros(this.limiteLibrosPropio);

                    case 13:
                      //Saber los libros que tenemos nuevos
                      numeroVariableNuevoLibro = this._libroService.librosPropios.length; //Carga del servicio la lista de los libros

                      if (numeroVariableAntiguoLibro == numeroVariableNuevoLibro) {
                        event.target.disabled = true;
                      } else {
                        this.librosPropios = this._libroService.librosPropios;
                      }

                    case 15:
                      //Completar la accion de cargar los eventos
                      event.target.complete();

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadEventosPropios",
          value: function loadEventosPropios() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.infiniteScroll.disabled = false;
                      this.booleanEventos = true; //Quitar de la lista contraria los libros 

                      this.librosPropios = []; //limite de eventos propios

                      this.limitePropio = 3; //llamar al servicio para llamar al back para recuperar los eventos

                      _context3.next = 6;
                      return this._eventoService.getEventos(this.limitePropio);

                    case 6:
                      //Carga del servicio la lista de los eventos
                      this.eventosPropios = this._eventoService.eventosPropios;

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "loadLibrosPropios",
          value: function loadLibrosPropios() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.infiniteScroll.disabled = false;
                      this.booleanEventos = false; //Quitar de la lista contraria los eventos 

                      this.eventosPropios = []; //limite de libros propios

                      this.limiteLibrosPropio = 3; //llamar al servicio para llamar al back para recuperar los libros

                      _context4.next = 6;
                      return this._libroService.getLibros(this.limiteLibrosPropio);

                    case 6:
                      //Carga del servicio la lista de los libros
                      this.librosPropios = this._libroService.librosPropios;

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this._usuarioService.cerrarSesion();

            this.router.navigateByUrl('/inicio');
          }
        }, {
          key: "crearEvento",
          value: function crearEvento() {
            this.router.navigate(['/registrar-evento']);
          }
        }, {
          key: "editarEvento",
          value: function editarEvento(_id) {
            this._eventoService.idEventoModificar = _id;
            this.router.navigate(['/modal-demo']);
          } //borrar evento

        }, {
          key: "borrarEvento",
          value: function borrarEvento(evento) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var eventoPropio, _iterator, _step, data, indexP;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this._eventoService.eventoIdBorrar = evento;
                      _context5.next = 3;
                      return this._eventoService.borrar();

                    case 3:
                      _iterator = _createForOfIteratorHelper(this.eventosPropios);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          data = _step.value;

                          if (data._id == evento) {
                            eventoPropio = data;
                          }
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      indexP = this.eventosPropios.indexOf(eventoPropio);
                      this.eventosPropios.splice(indexP, 1);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "publicarLibro",
          value: function publicarLibro() {
            this.router.navigate(['/registrar-libro']);
          }
        }, {
          key: "editarLibro",
          value: function editarLibro(_id) {
            this._libroService.idLibroModificar = _id;
            this.router.navigate(['/modal-demo-libro']);
          }
        }, {
          key: "borrarLibro",
          value: function borrarLibro(libro) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var libroPropio, _iterator2, _step2, data, indexP;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this._libroService.libroIdBorrar = libro;
                      _context6.next = 3;
                      return this._libroService.borrar();

                    case 3:
                      _iterator2 = _createForOfIteratorHelper(this.librosPropios);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          data = _step2.value;

                          if (data._id == libro) {
                            libroPropio = data;
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      indexP = this.librosPropios.indexOf(libroPropio);
                      this.librosPropios.splice(indexP, 1);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return PrincipalLibreriaPage;
      }();

      PrincipalLibreriaPage.ctorParameters = function () {
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
        }];
      };

      PrincipalLibreriaPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"]]
        }]
      };
      PrincipalLibreriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal-libreria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./principal-libreria.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/principal-libreria/principal-libreria.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./principal-libreria.page.scss */
        "./src/app/pages/principal-libreria/principal-libreria.page.scss"))["default"]]
      })], PrincipalLibreriaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-principal-libreria-principal-libreria-module-es5.js.map