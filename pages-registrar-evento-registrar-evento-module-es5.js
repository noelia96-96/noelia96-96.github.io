(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrar-evento-registrar-evento-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-evento/registrar-evento.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-evento/registrar-evento.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistrarEventoRegistrarEventoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Registrar Evento\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<body>\r\n  <ion-list class=\"register-content\">\r\n    <ion-item class=\"creador\">\r\n      <ion-label  type=\"text\" name=\"creador\">{{this.usuario}}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"nombreEvento\">\r\n      <ion-input  [(ngModel)]=\"nombreEvento\"  type=\"text\" name=\"nombreEvento\" placeholder=\"*Nombre del evento\" autofocus required></ion-input>\r\n    </ion-item>\r\n  <ion-item class=\"ciudad\">\r\n    <ion-input type=\"text\" name=\"ciudad\" readonly>{{this.ciudad}}</ion-input>\r\n  </ion-item>\r\n  <ion-item class=\"direccion\">\r\n      <ion-input  [(ngModel)]=\"direccion\"  type=\"text\" name=\"direccion\" placeholder=\"*Dirección\" required></ion-input>\r\n    </ion-item>\r\n   <ion-item class=\"fecha\">\r\n    <ion-datetime [(ngModel)]=\"fecha\"  name=\"fecha\"  mmin=\"2021\" max=\"2023\" displayFormat=\"DD/MM/YYYY\" pikerFormat=\"DD MM YYYY\" placeholder=\"*Fecha\" required></ion-datetime>\r\n  </ion-item>\r\n  <ion-item class=\"hora\">\r\n    <ion-datetime [(ngModel)]=\"hora\"  name=\"hora\" displayFormat=\"HH:mm\" placeholder=\"*Hora\" required></ion-datetime>\r\n  </ion-item>\r\n  <div style=\"text-align: center;\">\r\n    <ion-button class=\"button-galeria\" style=\"margin-top: 10px;\"color=\"primary\" fill=\"outline\" slot=\"end\" (click)=\"abrirGaleria()\">\r\n        <ion-icon name=\"image-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 10px;\">Galería</ion-label>\r\n    </ion-button>\r\n    <ion-button class=\"button-camara\" style=\"margin-top: 10px;\"color=\"primary\" fill=\"outline\" slot=\"end\" (click)=\"abrirCamara()\">\r\n        <ion-icon name=\"camera-outline\"></ion-icon>\r\n        <ion-label style=\"margin-left: 10px;\">Cámara</ion-label>\r\n    </ion-button>\r\n    </div>\r\n  </ion-list>\r\n  <div class=\"registration-event\">\r\n    <img src=\"../../../assets/createvent.jpg\">\r\n  </div>\r\n</body>\r\n\r\n<ion-footer class=\"bar-stable\">\r\n  <ion-toolbar color=\"light\">\r\n    <div style=\"text-align: center;\">\r\n  <ion-button (click)=\"guardar()\" class=\"save-button\" disabled=\"{{!this.nombreEvento || !this.direccion || !this.fecha || !this.hora}}\" color=\"secondary\" style=\"margin-left:0%\" >\r\n    <ion-icon name=\"save-outline\"></ion-icon>\r\n    <ion-label style=\"margin-left: 10px;\">Guardar</ion-label>\r\n  </ion-button>\r\n  <ion-button (click)=\"cancelar()\" class=\"cancel-button\" color=\"secondary\" style=\"margin-left:5%\" >\r\n    <ion-icon name=\"close\"></ion-icon>\r\n    <ion-label style=\"margin-left: 10px;\">Cancelar</ion-label>\r\n  </ion-button> \r\n</div>\r\n</ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/registrar-evento/registrar-evento-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/registrar-evento/registrar-evento-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: RegistrarEventoPageRoutingModule */

    /***/
    function srcAppPagesRegistrarEventoRegistrarEventoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrarEventoPageRoutingModule", function () {
        return RegistrarEventoPageRoutingModule;
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


      var _registrar_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registrar-evento.page */
      "./src/app/pages/registrar-evento/registrar-evento.page.ts");

      var routes = [{
        path: '',
        component: _registrar_evento_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarEventoPage"]
      }];

      var RegistrarEventoPageRoutingModule = function RegistrarEventoPageRoutingModule() {
        _classCallCheck(this, RegistrarEventoPageRoutingModule);
      };

      RegistrarEventoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrarEventoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/registrar-evento/registrar-evento.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registrar-evento/registrar-evento.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrarEventoPageModule */

    /***/
    function srcAppPagesRegistrarEventoRegistrarEventoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrarEventoPageModule", function () {
        return RegistrarEventoPageModule;
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


      var _registrar_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registrar-evento-routing.module */
      "./src/app/pages/registrar-evento/registrar-evento-routing.module.ts");
      /* harmony import */


      var _registrar_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registrar-evento.page */
      "./src/app/pages/registrar-evento/registrar-evento.page.ts");

      var RegistrarEventoPageModule = function RegistrarEventoPageModule() {
        _classCallCheck(this, RegistrarEventoPageModule);
      };

      RegistrarEventoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registrar_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarEventoPageRoutingModule"]],
        declarations: [_registrar_evento_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarEventoPage"]]
      })], RegistrarEventoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/registrar-evento/registrar-evento.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registrar-evento/registrar-evento.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRegistrarEventoRegistrarEventoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\n  overflow-y: hidden;\n  background-color: white;\n}\n\n.register-content {\n  margin-top: 72px;\n  margin-left: 12px;\n}\n\n.creador, .nombreEvento, .descripcion, .ciudad, .direccion, .fecha, .hora {\n  border: 1px solid #3880ff;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n\n.registration-event {\n  width: 180px;\n  margin-top: 20px;\n  margin-left: 99px;\n}\n\n.button-galeria, .button-camara {\n  margin-right: 21px;\n}\n\n.save-button, .cancel-button {\n  width: 113px;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmFyLWV2ZW50by9yZWdpc3RyYXItZXZlbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXItZXZlbnRvL3JlZ2lzdHJhci1ldmVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yZWdpc3Rlci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4uY3JlYWRvciwubm9tYnJlRXZlbnRvLCAuZGVzY3JpcGNpb24sIC5jaXVkYWQsIC5kaXJlY2Npb24sIC5mZWNoYSwgLmhvcmEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4ODBmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICB3aWR0aDogMjkxcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbi1ldmVudCB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDk5cHg7XHJcbn1cclxuLmJ1dHRvbi1nYWxlcmlhLCAuYnV0dG9uLWNhbWFyYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XHJcbn1cclxuLnNhdmUtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTEzcHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/registrar-evento/registrar-evento.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/registrar-evento/registrar-evento.page.ts ***!
      \*****************************************************************/

    /*! exports provided: RegistrarEventoPage */

    /***/
    function srcAppPagesRegistrarEventoRegistrarEventoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrarEventoPage", function () {
        return RegistrarEventoPage;
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


      var _services_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/evento.service */
      "./src/app/services/evento.service.ts");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var RegistrarEventoPage = /*#__PURE__*/function () {
        function RegistrarEventoPage(_router, _eventoService, _usuarioService, camera) {
          _classCallCheck(this, RegistrarEventoPage);

          this._router = _router;
          this._eventoService = _eventoService;
          this._usuarioService = _usuarioService;
          this.camera = camera;
          this.participantes = [];
        }

        _createClass(RegistrarEventoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._usuarioService.compruebaSiLogado();

                    case 2:
                      this.usuario = this._usuarioService.usuarioActual.nombre;
                      this.ciudad = this._usuarioService.usuarioActual.ciudad;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      data = {
                        nombreEvento: this.nombreEvento,
                        direccion: this.direccion,
                        ciudad: this.ciudad,
                        //creador: this.usuario, El creador NO se le pasa en la costante desde el front,en el back se coge del token.
                        fecha: this.fecha,
                        hora: this.hora,
                        participantes: this.participantes,
                        base64: this.mostrarImagen
                      };
                      _context2.next = 3;
                      return this._eventoService.registrarEvento(data);

                    case 3:
                      this._router.navigate(['/principal-libreria']);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancelar",
          value: function cancelar() {
            //Poner 'refresh' para que al guardar, el nuevo evento aparezca en la pagina principal del librero
            this._router.navigate(['/principal-libreria']); //linea incompleta, da error con el 'refresh'

          }
        }, {
          key: "abrirGaleria",
          value: function abrirGaleria() {
            var _this = this;

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
            }).then(function (resultado) {
              _this.mostrarImagen = 'data:image/jpeg;base64,' + resultado;
            })["catch"](function (err) {
              console.log('Err', err);
            });
          }
        }, {
          key: "abrirCamara",
          value: function abrirCamara() {
            var _this2 = this;

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
            }).then(function (resultado) {
              _this2.mostrarImagen = 'data:image/jpeg;base64,' + resultado;
            })["catch"](function (err) {
              console.log('Err', err);
            });
          }
        }]);

        return RegistrarEventoPage;
      }();

      RegistrarEventoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }];
      };

      RegistrarEventoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar-evento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registrar-evento.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registrar-evento/registrar-evento.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registrar-evento.page.scss */
        "./src/app/pages/registrar-evento/registrar-evento.page.scss"))["default"]]
      })], RegistrarEventoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-registrar-evento-registrar-evento-module-es5.js.map