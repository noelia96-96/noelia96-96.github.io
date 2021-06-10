(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"cabecera\">\r\n    <ion-title>Login</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"'/'\" [mode]=\"'md'\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ilustration-login\">\r\n    <img src=\"../../../assets/login.jpg\" alt=\"\">\r\n  </div>\r\n  <form class=\"content-form\">\r\n    <ion-item class=\"usuario\">\r\n      <ion-icon class=\"uss\" name=\"person\" style=\"margin-right: 15px;\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"usuario\" name=\"usuario\" type=\"text\" placeholder=\"*Usuario\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"contraseña\">\r\n      <ion-icon class=\"pass\" name=\"lock-closed\" style=\"margin-right: 15px;\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"pwd\" name=\"pwd\" type=\"password\" placeholder=\"*Contraseña\" required></ion-input>\r\n    </ion-item>\r\n    <div class=\"login-button\">\r\n      <ion-button class=\"log-button\" (click)=\"login()\" disabled=\"{{!this.usuario || !this.pwd }}\" style=\"margin-top: 10px;\" expand=\"block\"  color=\"primary\">Login</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n   \r\n\r\n\r\n";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.content-form {\n  margin-top: 39px;\n  width: 347px;\n  margin-left: 5px;\n}\n.cabecera {\n  margin-top: 35px;\n}\n.ilustration-login {\n  margin-top: 11px;\n  width: 125%;\n  position: relative;\n  right: 12%;\n}\n.login-button {\n  --ion-color-primary-shade: #3171e0;\n  display: inline-block;\n  margin-left: 120px;\n}\n.log-button {\n  border-radius: 60px 20px 20px;\n  font-weight: bold;\n  width: 111px;\n}\n.usuario, .contraseña {\n  border: 1px solid #3171e0;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n.uss, .pass {\n  font-size: 19px;\n}\n.footer-login {\n  margin-top: 56px;\n  margin-left: 22px;\n}\n.olvidarContrasena {\n  margin-left: 110px;\n}\n.olvidarUsuario, .olvidarContrasena {\n  font-size: 10px;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBQTtFQUNJLGdCQUFBO0FBR0o7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUlKO0FBRkE7RUFDSSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFNSjtBQUpBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFPSjtBQUxBO0VBQ0ksZUFBQTtBQVFKO0FBTkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBU0o7QUFQQTtFQUNJLGtCQUFBO0FBVUo7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVudC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzlweDtcbiAgd2lkdGg6IDM0N3B4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2FiZWNlcmEge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uaWx1c3RyYXRpb24tbG9naW4ge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICB3aWR0aDogMTI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMTIlO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG59XG5cbi5sb2ctYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAyMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTExcHg7XG59XG5cbi51c3VhcmlvLCAuY29udHJhc2XDsWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzE3MWUwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIHdpZHRoOiAyOTFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnVzcywgLnBhc3Mge1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5mb290ZXItbG9naW4ge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cblxuLm9sdmlkYXJDb250cmFzZW5hIHtcbiAgbWFyZ2luLWxlZnQ6IDExMHB4O1xufVxuXG4ub2x2aWRhclVzdWFyaW8sIC5vbHZpZGFyQ29udHJhc2VuYSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(_usuarioService, _router, alertController) {
          _classCallCheck(this, LoginPage);

          this._usuarioService = _usuarioService;
          this._router = _router;
          this.alertController = alertController;
        }

        _createClass(LoginPage, [{
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
                        this._router.navigate(['/perfil']);
                      } else {
                        console.log('No estamos logados');
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var datos, respuesta, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      datos = {
                        nombre: this.usuario,
                        pwd: this.pwd
                      };
                      _context2.next = 3;
                      return this._usuarioService.login(datos);

                    case 3:
                      respuesta = _context2.sent;

                      if (!(respuesta.status == 'ok')) {
                        _context2.next = 9;
                        break;
                      }

                      this._usuarioService.usuarioActual = datos;

                      if (respuesta.usuario.sexo) {
                        this._router.navigate(['/perfil']);
                      } else {
                        this._router.navigate(['/principal-libreria']);
                      }

                      _context2.next = 14;
                      break;

                    case 9:
                      _context2.next = 11;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'No existe el usuario. Regístrate',
                        buttons: ['OK']
                      });

                    case 11:
                      alert = _context2.sent;
                      _context2.next = 14;
                      return alert.present();

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map