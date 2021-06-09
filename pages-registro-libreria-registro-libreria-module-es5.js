(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-libreria-registro-libreria-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-libreria/registro-libreria.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-libreria/registro-libreria.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroLibreriaRegistroLibreriaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"toolbar-color\">\r\n  <ion-tab-button (click)=\"presentAlert()\" expand=\"block\" [mode]=\"'md'\">\r\n    <ion-icon name=\"information-circle-outline\" style=\"margin-left: 90%;  margin-top: 8%; color:gray; zoom:0.0\" expand=\"block\" [mode]=\"'md'\"></ion-icon>\r\n</ion-tab-button>\r\n    <ion-title>Registro</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"'/'\" [mode]=\"'md'\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<body class=\"global-content\">\r\n<form class=\"content-form\">\r\n    <ion-item class=\"nombre-libreria\">\r\n      <ion-icon class=\"book\" name=\"book-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"nombre\" name=\"nombre\" type=\"text\" placeholder=\"*Nombre de tu librería\" autofocus required></ion-input>\r\n    </ion-item> \r\n    <ion-item class=\"ciudad\">\r\n      <ion-icon class=\"city\" name=\"business-outline\"></ion-icon>\r\n        <ion-label [(ngModel)]=\"ciudad\" type=\"text\" name=\"ciudad\" required ngDefaultControl>*Ciudad</ion-label>\r\n        <ion-select (ionChange)=\"seleccionarCiudad($event)\" interface=\"popover\">\r\n          <ion-select-option value=\"Almería\">Almería</ion-select-option>\r\n          <ion-select-option value=\"Cádiz\">Cádiz</ion-select-option>\r\n          <ion-select-option value=\"Córdoba\">Córdoba</ion-select-option>\r\n          <ion-select-option value=\"Granada\">Granada</ion-select-option>\r\n          <ion-select-option value=\"Huelva\">Huelva</ion-select-option>\r\n          <ion-select-option value=\"Jaén\">Jaén</ion-select-option>\r\n          <ion-select-option value=\"Málaga\">Málaga</ion-select-option>\r\n          <ion-select-option value=\"Sevilla\">Sevilla</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    <ion-item class=\"direccion\">\r\n      <ion-icon class=\"location\" name=\"location-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"direccion\" name=\"direccion\" type=\"text\" placeholder=\"*Dirección\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"telefono\">\r\n      <ion-icon class=\"phone\" name=\"call-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"telefono\" name=\"telefono\" type=\"number\" placeholder=\"*Teléfono\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"pagina-web\">\r\n      <ion-icon class=\"web\" name=\"glasses-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"web\" name=\"web\" type=\"text\" placeholder=\"Web\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"email\">\r\n      <ion-icon class=\"mail\" name=\"mail-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"email\" name=\"email\" type=\"email\" placeholder=\"*Email\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"contraseña\">\r\n      <ion-icon class=\"lock\" name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"pwd\" name=\"contraseña\" type=\"password\" placeholder=\"*Contraseña\" required></ion-input>\r\n    </ion-item>\r\n    <div class=\"register-button\">\r\n      <ion-button class=\"registro-button\" (click)=\"registroLibreria()\" disabled=\"{{!this.nombre || !this.ciudad || !this.direccion || !this.telefono || !this.web || !this.email || !this.pwd}}\" expand=\"block\"  color=\"primary\">Registrar</ion-button>\r\n    </div>\r\n  </form>\r\n  <div class=\"ilustration-registro\">\r\n    <img src=\"../../../assets/registro-libreria.png\" alt=\"Imagen de registro librero\">\r\n  </div>\r\n</body>\r\n ";
      /***/
    },

    /***/
    "./src/app/pages/registro-libreria/registro-libreria-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/registro-libreria/registro-libreria-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: RegistroLibreriaPageRoutingModule */

    /***/
    function srcAppPagesRegistroLibreriaRegistroLibreriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroLibreriaPageRoutingModule", function () {
        return RegistroLibreriaPageRoutingModule;
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


      var _registro_libreria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registro-libreria.page */
      "./src/app/pages/registro-libreria/registro-libreria.page.ts");

      var routes = [{
        path: '',
        component: _registro_libreria_page__WEBPACK_IMPORTED_MODULE_3__["RegistroLibreriaPage"]
      }];

      var RegistroLibreriaPageRoutingModule = function RegistroLibreriaPageRoutingModule() {
        _classCallCheck(this, RegistroLibreriaPageRoutingModule);
      };

      RegistroLibreriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistroLibreriaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/registro-libreria/registro-libreria.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/registro-libreria/registro-libreria.module.ts ***!
      \*********************************************************************/

    /*! exports provided: RegistroLibreriaPageModule */

    /***/
    function srcAppPagesRegistroLibreriaRegistroLibreriaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroLibreriaPageModule", function () {
        return RegistroLibreriaPageModule;
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


      var _registro_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registro-libreria-routing.module */
      "./src/app/pages/registro-libreria/registro-libreria-routing.module.ts");
      /* harmony import */


      var _registro_libreria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registro-libreria.page */
      "./src/app/pages/registro-libreria/registro-libreria.page.ts");

      var RegistroLibreriaPageModule = function RegistroLibreriaPageModule() {
        _classCallCheck(this, RegistroLibreriaPageModule);
      };

      RegistroLibreriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroLibreriaPageRoutingModule"]],
        declarations: [_registro_libreria_page__WEBPACK_IMPORTED_MODULE_6__["RegistroLibreriaPage"]]
      })], RegistroLibreriaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/registro-libreria/registro-libreria.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/registro-libreria/registro-libreria.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRegistroLibreriaRegistroLibreriaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.content-header {\n  background-color: white;\n}\nbody {\n  overflow-y: hidden;\n  background-color: white;\n}\n.toolbar-color {\n  background-color: white;\n}\n.toolbar-color, .registro-button {\n  --ion-color-primary-tint: #4c8dff;\n}\n.content-form {\n  margin-top: 88px;\n  width: 347px;\n  margin-left: 13px;\n}\n.ilustration-registro {\n  top: 511px;\n  width: 249px;\n  position: absolute;\n  right: 0px;\n  left: 131px;\n}\n.book, .city, .location, .phone, .web, .mail, .lock {\n  font-size: 19px;\n  margin-right: 15px;\n}\n.nombre-libreria, .ciudad, .direccion, .telefono, .pagina-web, .email, .contraseña {\n  border: 1px solid #3880ff;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n.register-button {\n  display: inline-block;\n  margin-left: 120px;\n}\n.registro-button {\n  border-radius: 60px 20px 20px;\n  font-weight: bold;\n  width: 108px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tbGlicmVyaWEvcmVnaXN0cm8tbGlicmVyaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLHVCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFHSjtBQURBO0VBQ0ksdUJBQUE7QUFJSjtBQUZBO0VBQ0ksaUNBQUE7QUFLSjtBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjtBQUpBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBT0o7QUFMQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVFKO0FBTkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVNKO0FBUEE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBVUo7QUFSQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Ryby1saWJyZXJpYS9yZWdpc3Ryby1saWJyZXJpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVudC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50b29sYmFyLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50b29sYmFyLWNvbG9yLCAucmVnaXN0cm8tYnV0dG9uIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xufVxuXG4uY29udGVudC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogODhweDtcbiAgd2lkdGg6IDM0N3B4O1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLmlsdXN0cmF0aW9uLXJlZ2lzdHJvIHtcbiAgdG9wOiA1MTFweDtcbiAgd2lkdGg6IDI0OXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDEzMXB4O1xufVxuXG4uYm9vaywgLmNpdHksIC5sb2NhdGlvbiwgLnBob25lLCAud2ViLCAubWFpbCwgLmxvY2sge1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm5vbWJyZS1saWJyZXJpYSwgLmNpdWRhZCwgLmRpcmVjY2lvbiwgLnRlbGVmb25vLCAucGFnaW5hLXdlYiwgLmVtYWlsLCAuY29udHJhc2XDsWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg4MGZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIHdpZHRoOiAyOTFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuXG4ucmVnaXN0cm8tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTA4cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/registro-libreria/registro-libreria.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registro-libreria/registro-libreria.page.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistroLibreriaPage */

    /***/
    function srcAppPagesRegistroLibreriaRegistroLibreriaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroLibreriaPage", function () {
        return RegistroLibreriaPage;
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


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RegistroLibreriaPage = /*#__PURE__*/function () {
        function RegistroLibreriaPage(_usuarioService, _router, alertController) {
          _classCallCheck(this, RegistroLibreriaPage);

          this._usuarioService = _usuarioService;
          this._router = _router;
          this.alertController = alertController;
        }

        _createClass(RegistroLibreriaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //objeto data que coge los datos que estan en el formulario
          //Luego llama al metodo y cuando termina lo muestra por pantalla respuesta post

        }, {
          key: "registroLibreria",
          value: function registroLibreria() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data, patternEmail, patternTelefono, alert, _alert, resultado;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = {
                        nombre: this.nombre,
                        ciudad: this.ciudad,
                        direccion: this.direccion,
                        telefono: this.telefono,
                        web: this.web,
                        email: this.email,
                        pwd: this.pwd
                      }; //Patrón email

                      patternEmail = new RegExp('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'); //Patrón teléfono

                      patternTelefono = new RegExp('[0-9]{9}');

                      if (patternEmail.test(this.email)) {
                        _context.next = 11;
                        break;
                      }

                      _context.next = 6;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Formato incorrecto del email',
                        buttons: ['OK']
                      });

                    case 6:
                      alert = _context.sent;
                      _context.next = 9;
                      return alert.present();

                    case 9:
                      _context.next = 23;
                      break;

                    case 11:
                      if (patternTelefono.test(this.telefono.toString())) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 14;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Formato incorrecto del teléfono',
                        buttons: ['OK']
                      });

                    case 14:
                      _alert = _context.sent;
                      _context.next = 17;
                      return _alert.present();

                    case 17:
                      _context.next = 23;
                      break;

                    case 19:
                      _context.next = 21;
                      return this._usuarioService.registroLibreria(data);

                    case 21:
                      resultado = _context.sent;

                      this._router.navigate(['/inicio']);

                    case 23:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "seleccionarCiudad",
          value: function seleccionarCiudad(data) {
            this.ciudad = data.detail.value;
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        header: 'BookLife',
                        subHeader: 'App BookLife con la que podrás crear eventos y publicar libros para los amantes de los libros puedan conocerte.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return RegistroLibreriaPage;
      }();

      RegistroLibreriaPage.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      RegistroLibreriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-libreria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registro-libreria.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-libreria/registro-libreria.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registro-libreria.page.scss */
        "./src/app/pages/registro-libreria/registro-libreria.page.scss"))["default"]]
      })], RegistroLibreriaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-registro-libreria-registro-libreria-module-es5.js.map