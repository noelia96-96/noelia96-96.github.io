(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-bibliofilo-perfil-bibliofilo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilBibliofiloPerfilBibliofiloPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body class=\"background\">\r\n    \r\n  <div (click)=\"volver()\" color=\"none\" no-shadow>\r\n    <ion-icon class=\"volver\" name=\"arrow-back-outline\"></ion-icon>\r\n  </div>\r\n\r\n    <div class=\"perfil-bibliofilo\">\r\n        <div class=\"profile-screen\">\r\n          <div class=\"app-title\">\r\n            <h3 class=\"title-text\">{{this.usuario}}</h3>\r\n          </div>\r\n      <ion-button class=\"personal-data-button\" (click)=\"datosPersonales()\" expand=\"block\" color=\"primary\">\r\n          <span>Datos personales</span>\r\n      </ion-button>\r\n      <ion-button class=\"exit-button\" (click)=\"cerrarSesion()\" expand=\"block\"color=\"medium\">\r\n          <span>Cerrar sesión</span>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n    <div class=\"avatar-content\">\r\n      <img  class= \"image-profile\" [routerLink]=\"'/perfil'\"  src=\"../../../assets/profile-w.png\">\r\n    </div>\r\n</body>\r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/perfil-bibliofilo/perfil-bibliofilo-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: PerfilBiblofiloPageRoutingModule */

    /***/
    function srcAppPagesPerfilBibliofiloPerfilBibliofiloRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilBiblofiloPageRoutingModule", function () {
        return PerfilBiblofiloPageRoutingModule;
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


      var _perfil_bibliofilo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil-bibliofilo.page */
      "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.ts");

      var routes = [{
        path: '',
        component: _perfil_bibliofilo_page__WEBPACK_IMPORTED_MODULE_3__["PerfilBibliofiloPage"]
      }];

      var PerfilBiblofiloPageRoutingModule = function PerfilBiblofiloPageRoutingModule() {
        _classCallCheck(this, PerfilBiblofiloPageRoutingModule);
      };

      PerfilBiblofiloPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilBiblofiloPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PerfilBibliofiloPageModule */

    /***/
    function srcAppPagesPerfilBibliofiloPerfilBibliofiloModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilBibliofiloPageModule", function () {
        return PerfilBibliofiloPageModule;
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


      var _perfil_bibliofilo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-bibliofilo-routing.module */
      "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo-routing.module.ts");
      /* harmony import */


      var _perfil_bibliofilo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil-bibliofilo.page */
      "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.ts");

      var PerfilBibliofiloPageModule = function PerfilBibliofiloPageModule() {
        _classCallCheck(this, PerfilBibliofiloPageModule);
      };

      PerfilBibliofiloPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_bibliofilo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilBiblofiloPageRoutingModule"]],
        declarations: [_perfil_bibliofilo_page__WEBPACK_IMPORTED_MODULE_6__["PerfilBibliofiloPage"]]
      })], PerfilBibliofiloPageModule);
      /***/
    },

    /***/
    "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPerfilBibliofiloPerfilBibliofiloPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body.background {\n  background-image: url('profile-back.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  overflow-y: scroll;\n}\n\n.back-button {\n  position: absolute;\n  top: 0;\n}\n\n.avatar-content {\n  top: 176px;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  left: 141px;\n}\n\n.image-profile {\n  border: 4px solid white;\n  border-radius: 47px;\n  background-color: #d1f1ff;\n}\n\n.title-text {\n  font-family: system-ui;\n  margin-top: 27px;\n  color: #3880ff;\n}\n\n.perfil-bibliofilo {\n  position: absolute;\n  top: 116px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.profile-screen {\n  background-color: #FFF;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px #666;\n  margin-left: auto;\n  margin-right: auto;\n  width: 314px;\n  position: relative;\n  top: 122px;\n  left: 31px;\n}\n\n.app-title {\n  text-align: center;\n  color: #777;\n}\n\n.exit-button, .personal-data-button {\n  display: inline-block;\n  position: relative;\n  left: 5px;\n  width: 131px;\n  height: 39px;\n  font-size: 16px;\n  margin-top: 25px;\n  bottom: 9px;\n}\n\n.volver {\n  font-size: 23px;\n  margin-top: 44px;\n  margin-left: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsLWJpYmxpb2ZpbG8vcGVyZmlsLWJpYmxpb2ZpbG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0FBRUo7O0FBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFRSjs7QUFOQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyZmlsLWJpYmxpb2ZpbG8vcGVyZmlsLWJpYmxpb2ZpbG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keS5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcHJvZmlsZS1iYWNrLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn0gXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLmF2YXRhci1jb250ZW50IHtcclxuICAgIHRvcDogMTc2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbGVmdDogMTQxcHg7XHJcbn1cclxuLmltYWdlLXByb2ZpbGUge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0N3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZjFmZjtcclxufVxyXG4udGl0bGUtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgbWFyZ2luLXRvcDogMjdweDtcclxuICAgIGNvbG9yOiAjMzg4MGZmO1xyXG59XHJcbi5wZXJmaWwtYmlibGlvZmlsbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExNnB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnByb2ZpbGUtc2NyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM2NjY7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAzMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTIycHg7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcbi5hcHAtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLmV4aXQtYnV0dG9uLCAucGVyc29uYWwtZGF0YS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDEzMXB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvdHRvbTogOXB4O1xyXG59XHJcbi52b2x2ZXIge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.ts ***!
      \*******************************************************************/

    /*! exports provided: PerfilBibliofiloPage */

    /***/
    function srcAppPagesPerfilBibliofiloPerfilBibliofiloPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilBibliofiloPage", function () {
        return PerfilBibliofiloPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PerfilBibliofiloPage = /*#__PURE__*/function () {
        function PerfilBibliofiloPage(router, _usuarioService, alertController) {
          _classCallCheck(this, PerfilBibliofiloPage);

          this.router = router;
          this._usuarioService = _usuarioService;
          this.alertController = alertController;
        }

        _createClass(PerfilBibliofiloPage, [{
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
                      //llamar al servicio
                      this.usuario = this._usuarioService.usuarioActual.nombre;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "datosPersonales",
          value: function datosPersonales() {
            this.router.navigateByUrl('/datos-personales-bibliofilo');
          }
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this._usuarioService.cerrarSesion();

            this.router.navigateByUrl('/inicio');
          }
        }, {
          key: "volver",
          value: function volver() {
            this.router.navigateByUrl('/perfil');
          }
        }]);

        return PerfilBibliofiloPage;
      }();

      PerfilBibliofiloPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      PerfilBibliofiloPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]]
        }]
      };
      PerfilBibliofiloPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-bibliofilo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./perfil-bibliofilo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./perfil-bibliofilo.page.scss */
        "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.page.scss"))["default"]]
      })], PerfilBibliofiloPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-perfil-bibliofilo-perfil-bibliofilo-module-es5.js.map