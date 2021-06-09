(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-libreria-perfil-libreria-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-libreria/perfil-libreria.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-libreria/perfil-libreria.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPerfilLibreriaPerfilLibreriaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body class=\"background\">\r\n    <div (click)=\"volver()\" color=\"none\" no-shadow>\r\n      <ion-icon class=\"volver\" name=\"arrow-back-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"perfil-libreria\">\r\n        <div class=\"profile-screen\">\r\n          <div class=\"app-title\">\r\n            <h3 class=\"title-text\">{{this.usuario}}</h3>\r\n          </div>\r\n      <ion-button class=\"personal-data-button\" (click)=\"datosPersonales()\" expand=\"block\" color=\"success\">\r\n        <span>Datos personales</span>\r\n      </ion-button>\r\n      <ion-button class=\"exit-button\" (click)=\"cerrarSesion()\" expand=\"block\"color=\"medium\">\r\n        <span>Cerrar sesión</span>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n  <div class=\"avatar-content\">\r\n    <img  class= \"image-profile\" [routerLink]=\"'/perfil-libreria'\" src=\"../../../assets/profile-l.jpg\">\r\n  </div>\r\n</body>\r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    "./src/app/pages/perfil-libreria/perfil-libreria-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/perfil-libreria/perfil-libreria-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: PerfilLibreriaPageRoutingModule */

    /***/
    function srcAppPagesPerfilLibreriaPerfilLibreriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilLibreriaPageRoutingModule", function () {
        return PerfilLibreriaPageRoutingModule;
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


      var _perfil_libreria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil-libreria.page */
      "./src/app/pages/perfil-libreria/perfil-libreria.page.ts");

      var routes = [{
        path: '',
        component: _perfil_libreria_page__WEBPACK_IMPORTED_MODULE_3__["PerfilLibreriaPage"]
      }];

      var PerfilLibreriaPageRoutingModule = function PerfilLibreriaPageRoutingModule() {
        _classCallCheck(this, PerfilLibreriaPageRoutingModule);
      };

      PerfilLibreriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilLibreriaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/perfil-libreria/perfil-libreria.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/perfil-libreria/perfil-libreria.module.ts ***!
      \*****************************************************************/

    /*! exports provided: PerfilLibreriaPageModule */

    /***/
    function srcAppPagesPerfilLibreriaPerfilLibreriaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilLibreriaPageModule", function () {
        return PerfilLibreriaPageModule;
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


      var _perfil_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-libreria-routing.module */
      "./src/app/pages/perfil-libreria/perfil-libreria-routing.module.ts");
      /* harmony import */


      var _perfil_libreria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil-libreria.page */
      "./src/app/pages/perfil-libreria/perfil-libreria.page.ts");

      var PerfilLibreriaPageModule = function PerfilLibreriaPageModule() {
        _classCallCheck(this, PerfilLibreriaPageModule);
      };

      PerfilLibreriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_libreria_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilLibreriaPageRoutingModule"]],
        declarations: [_perfil_libreria_page__WEBPACK_IMPORTED_MODULE_6__["PerfilLibreriaPage"]]
      })], PerfilLibreriaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/perfil-libreria/perfil-libreria.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/perfil-libreria/perfil-libreria.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPerfilLibreriaPerfilLibreriaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body.background {\n  background-image: url('profile-back3.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  overflow-y: scroll;\n}\n\n.back-button {\n  position: absolute;\n  top: 0;\n}\n\n.avatar-content {\n  top: 176px;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  left: 141px;\n}\n\n.image-profile {\n  border: 4px solid white;\n  border-radius: 47px;\n  background-color: #d1f1ff;\n}\n\n.title-text {\n  font-family: system-ui;\n  margin-top: 27px;\n  color: #269251;\n}\n\n.perfil-libreria {\n  position: absolute;\n  top: 116px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.profile-screen {\n  background-color: #FFF;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px #666;\n  margin-left: auto;\n  margin-right: auto;\n  width: 314px;\n  position: relative;\n  top: 122px;\n  left: 31px;\n}\n\n.app-title {\n  text-align: center;\n  color: #777;\n}\n\n.exit-button, .personal-data-button {\n  display: inline-block;\n  position: relative;\n  left: 5px;\n  width: 131px;\n  height: 39px;\n  font-size: 16px;\n  margin-top: 25px;\n  bottom: 9px;\n}\n\n.volver {\n  font-size: 23px;\n  margin-top: 44px;\n  margin-left: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsLWxpYnJlcmlhL3BlcmZpbC1saWJyZXJpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBRkE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJmaWwtbGlicmVyaWEvcGVyZmlsLWxpYnJlcmlhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2ZpbGUtYmFjazMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufSBcclxuLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxufVxyXG4uYXZhdGFyLWNvbnRlbnQge1xyXG4gICAgdG9wOiAxNzZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBsZWZ0OiAxNDFweDtcclxufVxyXG4uaW1hZ2UtcHJvZmlsZSB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFmMWZmO1xyXG59XHJcbi50aXRsZS10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgY29sb3I6ICMyNjkyNTE7XHJcbn1cclxuLnBlcmZpbC1saWJyZXJpYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDExNnB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnByb2ZpbGUtc2NyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM2NjY7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAzMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTIycHg7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG59XHJcbi5hcHAtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLmV4aXQtYnV0dG9uLCAucGVyc29uYWwtZGF0YS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDEzMXB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGJvdHRvbTogOXB4O1xyXG59XHJcbi52b2x2ZXIge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/perfil-libreria/perfil-libreria.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/perfil-libreria/perfil-libreria.page.ts ***!
      \***************************************************************/

    /*! exports provided: PerfilLibreriaPage */

    /***/
    function srcAppPagesPerfilLibreriaPerfilLibreriaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilLibreriaPage", function () {
        return PerfilLibreriaPage;
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

      var PerfilLibreriaPage = /*#__PURE__*/function () {
        function PerfilLibreriaPage(router, _usuarioService, alertController) {
          _classCallCheck(this, PerfilLibreriaPage);

          this.router = router;
          this._usuarioService = _usuarioService;
          this.alertController = alertController;
        }

        _createClass(PerfilLibreriaPage, [{
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
          key: "cerrarSesion",
          value: function cerrarSesion() {
            this._usuarioService.cerrarSesion();

            this.router.navigateByUrl('/inicio');
          }
        }, {
          key: "datosPersonales",
          value: function datosPersonales() {
            this.router.navigateByUrl('/datos-personales-librero');
          }
        }, {
          key: "volver",
          value: function volver() {
            this.router.navigateByUrl('/principal-libreria');
          }
        }]);

        return PerfilLibreriaPage;
      }();

      PerfilLibreriaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      PerfilLibreriaPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]]
        }]
      };
      PerfilLibreriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-libreria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./perfil-libreria.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-libreria/perfil-libreria.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./perfil-libreria.page.scss */
        "./src/app/pages/perfil-libreria/perfil-libreria.page.scss"))["default"]]
      })], PerfilLibreriaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-perfil-libreria-perfil-libreria-module-es5.js.map