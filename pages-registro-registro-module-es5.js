(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-registro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"toolbar-color\">\r\n  <ion-tab-button (click)=\"presentAlert()\" expand=\"block\" [mode]=\"'md'\">\r\n    <ion-icon name=\"information-circle-outline\" style=\"margin-left: 90%;  margin-top: 8%; color:gray; zoom:0.0\" expand=\"block\" [mode]=\"'md'\"></ion-icon>\r\n</ion-tab-button>\r\n    <ion-title>Registro</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"'/'\" [mode]=\"'md'\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<body class=\"global-content\">\r\n<form class=\"content-form\">\r\n    <ion-item class=\"nombre\">\r\n      <ion-icon name=\"person-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"nombre\" name=\"nombre\" type=\"text\" placeholder=\"*Nombre usuario\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"contraseña\">\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"pwd\" name=\"contraseña\" type=\"password\" placeholder=\"*Contraseña\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"email\">\r\n      <ion-icon name=\"mail-outline\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"email\" name=\"email\" type=\"email\" placeholder=\"*Email\" required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"ciudad\">\r\n      <ion-icon class=\"city\" name=\"business-outline\"></ion-icon>\r\n        <ion-label  name=\"city\" required readonly>*Ciudad</ion-label>\r\n        <ion-select (ionChange)=\"seleccionarCiudad($event)\" interface=\"popover\">\r\n          <ion-select-option value=\"Cádiz\">Cádiz</ion-select-option>\r\n          <ion-select-option value=\"Córdoba\">Córdoba</ion-select-option>\r\n          <ion-select-option value=\"Granada\">Granada</ion-select-option>\r\n          <ion-select-option value=\"Huelva\">Huelva</ion-select-option>\r\n          <ion-select-option value=\"Jaén\">Jaén</ion-select-option>\r\n          <ion-select-option value=\"Málaga\">Málaga</ion-select-option>\r\n          <ion-select-option value=\"Sevilla\">Sevilla</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item class=\"sexo\">\r\n        <ion-icon class=\"sex\" name=\"contrast-outline\"></ion-icon>\r\n          <ion-label name=\"sexo\" required readonly>*Sexo </ion-label>\r\n          <ion-select (ionChange)=\"seleccionarSexo($event)\" interface=\"popover\">\r\n            <ion-select-option value=\"Hombre\">Hombre</ion-select-option>\r\n            <ion-select-option value=\"Mujer\">Mujer</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n    <div class=\"register-button\">\r\n      <ion-button class=\"registro-button\" (click)=\"registrar()\"  expand=\"block\" color=\"primary\" disabled=\"{{!this.nombre || !this.pwd || !this.email || !this.ciudad || !this.sexo}}\">Registrar</ion-button>\r\n    </div>\r\n  </form>\r\n  <div class=\"ilustration-registro\">\r\n    <img src=\"../../../assets/registro-bibliofilo.jpg\" alt=\"Imagen de registro bibliofilo\">\r\n  </div>\r\n</body>\r\n";
      /***/
    },

    /***/
    "./src/app/pages/registro/registro-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/registro/registro-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegistroPageRoutingModule */

    /***/
    function srcAppPagesRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
        return RegistroPageRoutingModule;
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


      var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registro.page */
      "./src/app/pages/registro/registro.page.ts");

      var routes = [{
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
      }];

      var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
        _classCallCheck(this, RegistroPageRoutingModule);
      };

      RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/registro/registro.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/registro/registro.module.ts ***!
      \***************************************************/

    /*! exports provided: RegistroPageModule */

    /***/
    function srcAppPagesRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
        return RegistroPageModule;
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


      var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registro-routing.module */
      "./src/app/pages/registro/registro-routing.module.ts");
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registro.page */
      "./src/app/pages/registro/registro.page.ts");

      var RegistroPageModule = function RegistroPageModule() {
        _classCallCheck(this, RegistroPageModule);
      };

      RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
      })], RegistroPageModule);
      /***/
    },

    /***/
    "./src/app/pages/registro/registro.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/registro/registro.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nbody {\n  overflow-y: hidden;\n  background-color: white;\n}\n.toolbar-color {\n  --ion-color-primary-tint: #4c8dff;\n}\n.content-form {\n  margin-top: 88px;\n  width: 347px;\n  margin-left: 13px;\n}\n.ilustration-registro {\n  margin-top: 11%;\n  width: 301px;\n  position: relative;\n  right: 0px;\n  left: 48px;\n}\n.person, .lock, .mail {\n  font-size: 19px;\n  margin-right: 15px;\n}\n.nombre, .contraseña, .email, .ciudad, .sexo {\n  border: 1px solid #3880ff;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n.register-button {\n  display: inline-block;\n  margin-left: 120px;\n}\n.registro-button {\n  border-radius: 60px 20px 20px;\n  font-weight: bold;\n  width: 108px;\n  --ion-color-primary-tint: #4c8dff;\n}\nion-input {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUFBO0VBQ0ksaUNBQUE7QUFHSjtBQURBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJSjtBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBS0o7QUFIQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU9KO0FBTEE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBUUo7QUFOQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFTSjtBQU5BO0VBQ0ksaUJBQUE7QUFTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvL3JlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmJvZHkge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udG9vbGJhci1jb2xvciB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcbn1cblxuLmNvbnRlbnQtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIHdpZHRoOiAzNDdweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi5pbHVzdHJhdGlvbi1yZWdpc3RybyB7XG4gIG1hcmdpbi10b3A6IDExJTtcbiAgd2lkdGg6IDMwMXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDQ4cHg7XG59XG5cbi5wZXJzb24sIC5sb2NrLCAubWFpbCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubm9tYnJlLCAuY29udHJhc2XDsWEsIC5lbWFpbCwgLmNpdWRhZCwgLnNleG8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg4MGZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIHdpZHRoOiAyOTFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xufVxuXG4ucmVnaXN0cm8tYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTA4cHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcbn1cblxuaW9uLWlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/registro/registro.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/registro/registro.page.ts ***!
      \*************************************************/

    /*! exports provided: RegistroPage */

    /***/
    function srcAppPagesRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
        return RegistroPage;
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

      var RegistroPage = /*#__PURE__*/function () {
        function RegistroPage(_usuarioService, _router, alertController) {
          _classCallCheck(this, RegistroPage);

          this._usuarioService = _usuarioService;
          this._router = _router;
          this.alertController = alertController;
        }

        _createClass(RegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //Objeto data que coge los datos que están en el formulario
          //Luego llama al método y cuando termina lo muestra por pantalla - respuesta post

        }, {
          key: "registrar",
          value: function registrar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var data, pattern, resultado, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = {
                        nombre: this.nombre,
                        pwd: this.pwd,
                        email: this.email,
                        ciudad: this.ciudad,
                        sexo: this.sexo,
                        favoritos: Array()
                      }; //Patrón email

                      pattern = new RegExp('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})');

                      if (!pattern.test(this.email)) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 5;
                      return this._usuarioService.registro(data);

                    case 5:
                      resultado = _context.sent;

                      this._router.navigate(['/inicio']);

                      _context.next = 14;
                      break;

                    case 9:
                      _context.next = 11;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'Formato incorrecto del email',
                        buttons: ['OK']
                      });

                    case 11:
                      alert = _context.sent;
                      _context.next = 14;
                      return alert.present();

                    case 14:
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
          key: "seleccionarSexo",
          value: function seleccionarSexo(data) {
            this.sexo = data.detail.value;
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
                        subHeader: 'App BookLife con la que podrás ver libreriás de segunda mano en la ciudad que estés. Podrás apuntarte a los eventos y reservar sus libros más interesantes.',
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

        return RegistroPage;
      }();

      RegistroPage.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro/registro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registro.page.scss */
        "./src/app/pages/registro/registro.page.scss"))["default"]]
      })], RegistroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-registro-registro-module-es5.js.map