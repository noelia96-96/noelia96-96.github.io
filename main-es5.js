(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }, {
        path: 'inicio',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-inicio-inicio-module */
          "pages-inicio-inicio-module").then(__webpack_require__.bind(null,
          /*! ./pages/inicio/inicio.module */
          "./src/app/pages/inicio/inicio.module.ts")).then(function (m) {
            return m.InicioPageModule;
          });
        }
      }, {
        path: 'perfil',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-perfil-perfil-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-perfil-perfil-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/perfil/perfil.module */
          "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
            return m.PerfilPageModule;
          });
        }
      }, {
        path: 'perfil/:usuario',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-perfil-perfil-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-perfil-perfil-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/perfil/perfil.module */
          "./src/app/pages/perfil/perfil.module.ts")).then(function (m) {
            return m.PerfilPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registro',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-registro-registro-module */
          "pages-registro-registro-module").then(__webpack_require__.bind(null,
          /*! ./pages/registro/registro.module */
          "./src/app/pages/registro/registro.module.ts")).then(function (m) {
            return m.RegistroPageModule;
          });
        }
      }, {
        path: 'modal-demo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-modal-demo-modal-demo-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-modal-demo-modal-demo-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/modal-demo/modal-demo.module */
          "./src/app/pages/modal-demo/modal-demo.module.ts")).then(function (m) {
            return m.ModalDemoPageModule;
          });
        }
      }, {
        path: 'modal-demo/:_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-modal-demo-modal-demo-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-modal-demo-modal-demo-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/modal-demo/modal-demo.module */
          "./src/app/pages/modal-demo/modal-demo.module.ts")).then(function (m) {
            return m.ModalDemoPageModule;
          });
        }
      }, {
        path: 'registrar-evento',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-registrar-evento-registrar-evento-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-registrar-evento-registrar-evento-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/registrar-evento/registrar-evento.module */
          "./src/app/pages/registrar-evento/registrar-evento.module.ts")).then(function (m) {
            return m.RegistrarEventoPageModule;
          });
        }
      }, {
        path: 'seleccion-registro',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-seleccion-registro-seleccion-registro-module */
          "pages-seleccion-registro-seleccion-registro-module").then(__webpack_require__.bind(null,
          /*! ./pages/seleccion-registro/seleccion-registro.module */
          "./src/app/pages/seleccion-registro/seleccion-registro.module.ts")).then(function (m) {
            return m.SeleccionRegistroPageModule;
          });
        }
      }, {
        path: 'registro-libreria',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-registro-libreria-registro-libreria-module */
          "pages-registro-libreria-registro-libreria-module").then(__webpack_require__.bind(null,
          /*! ./pages/registro-libreria/registro-libreria.module */
          "./src/app/pages/registro-libreria/registro-libreria.module.ts")).then(function (m) {
            return m.RegistroLibreriaPageModule;
          });
        }
      }, {
        path: 'perfil-bibliofilo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-perfil-bibliofilo-perfil-bibliofilo-module */
          "pages-perfil-bibliofilo-perfil-bibliofilo-module").then(__webpack_require__.bind(null,
          /*! ./pages/perfil-bibliofilo/perfil-bibliofilo.module */
          "./src/app/pages/perfil-bibliofilo/perfil-bibliofilo.module.ts")).then(function (m) {
            return m.PerfilBibliofiloPageModule;
          });
        }
      }, {
        path: 'perfil-libreria',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-perfil-libreria-perfil-libreria-module */
          "pages-perfil-libreria-perfil-libreria-module").then(__webpack_require__.bind(null,
          /*! ./pages/perfil-libreria/perfil-libreria.module */
          "./src/app/pages/perfil-libreria/perfil-libreria.module.ts")).then(function (m) {
            return m.PerfilLibreriaPageModule;
          });
        }
      }, {
        path: 'principal-libreria',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-principal-libreria-principal-libreria-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-principal-libreria-principal-libreria-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/principal-libreria/principal-libreria.module */
          "./src/app/pages/principal-libreria/principal-libreria.module.ts")).then(function (m) {
            return m.PrincipalLibreriaPageModule;
          });
        }
      }, {
        path: 'registrar-libro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-registrar-libro-registrar-libro-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-registrar-libro-registrar-libro-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/registrar-libro/registrar-libro.module */
          "./src/app/pages/registrar-libro/registrar-libro.module.ts")).then(function (m) {
            return m.RegistrarLibroPageModule;
          });
        }
      }, {
        path: 'modal-demo-libro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-modal-demo-libro-modal-demo-libro-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-modal-demo-libro-modal-demo-libro-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/modal-demo-libro/modal-demo-libro.module */
          "./src/app/pages/modal-demo-libro/modal-demo-libro.module.ts")).then(function (m) {
            return m.ModalDemoLibroPageModule;
          });
        }
      }, {
        path: 'modal-demo-libro/:_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-modal-demo-libro-modal-demo-libro-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-modal-demo-libro-modal-demo-libro-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/modal-demo-libro/modal-demo-libro.module */
          "./src/app/pages/modal-demo-libro/modal-demo-libro.module.ts")).then(function (m) {
            return m.ModalDemoLibroPageModule;
          });
        }
      }, {
        path: 'datos-personales-librero',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-datos-personales-librero-datos-personales-librero-module */
          "pages-datos-personales-librero-datos-personales-librero-module").then(__webpack_require__.bind(null,
          /*! ./pages/datos-personales-librero/datos-personales-librero.module */
          "./src/app/pages/datos-personales-librero/datos-personales-librero.module.ts")).then(function (m) {
            return m.DatosPersonalesLibreroPageModule;
          });
        }
      }, {
        path: 'datos-personales-bibliofilo',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-datos-personales-bibliofilo-datos-personales-bibliofilo-module */
          "pages-datos-personales-bibliofilo-datos-personales-bibliofilo-module").then(__webpack_require__.bind(null,
          /*! ./pages/datos-personales-bibliofilo/datos-personales-bibliofilo.module */
          "./src/app/pages/datos-personales-bibliofilo/datos-personales-bibliofilo.module.ts")).then(function (m) {
            return m.DatosPersonalesBibliofiloPageModule;
          });
        }
      }, {
        path: 'card-libreria',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-card-libreria-card-libreria-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-card-libreria-card-libreria-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/card-libreria/card-libreria.module */
          "./src/app/pages/card-libreria/card-libreria.module.ts")).then(function (m) {
            return m.CardLibreriaPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _interceptores_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./interceptores/token-interceptor.service */
      "./src/app/interceptores/token-interceptor.service.ts");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
          useClass: _interceptores_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
          multi: true
        }, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/interceptores/token-interceptor.service.ts":
    /*!************************************************************!*\
      !*** ./src/app/interceptores/token-interceptor.service.ts ***!
      \************************************************************/

    /*! exports provided: TokenInterceptorService */

    /***/
    function srcAppInterceptoresTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
        return TokenInterceptorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var TokenInterceptorService = /*#__PURE__*/function () {
        function TokenInterceptorService(_usuarioService) {
          _classCallCheck(this, TokenInterceptorService);

          this._usuarioService = _usuarioService;
        }

        _createClass(TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            //Si modifico la req, debe clonarla, no se puede append nada a esa req
            //cuando llega peticion http muestra el login.
            //mete la cabecera si hay token
            //this._mensajeService.muestraLoading();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this._usuarioService.getToken()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
              var headers = req.headers.set('Authorization', 'Bearer ' + token['value']);
              var requestClone = req.clone({
                headers: headers
              });
              return next.handle(requestClone);
            }));
            ; //FORMA MÁS LARGA

            /*return next.handle(tokenizeRequest).pipe(
              //cuando termina la peticion se oculta el login
              finalize(() => {
                //this._mensajeService.ocultaLoading();
                  })
            );
            }
            //si no hay loading devuelve la peticion pasando el pipe de que cuando finalice se oculte el login
            return next.handle(req).pipe(
            finalize(() => {
                //this._mensajeService.ocultaLoading();
            })
            );*/
          }
        }]);

        return TokenInterceptorService;
      }();

      TokenInterceptorService.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]
        }];
      };

      TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TokenInterceptorService);
      /***/
    },

    /***/
    "./src/app/services/usuario.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/usuario.service.ts ***!
      \*********************************************/

    /*! exports provided: UsuarioService */

    /***/
    function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
        return UsuarioService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment.prod */
      "./src/environments/environment.prod.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage;

      var UsuarioService = /*#__PURE__*/function () {
        function UsuarioService(_http) {
          _classCallCheck(this, UsuarioService);

          this._http = _http;
        }

        _createClass(UsuarioService, [{
          key: "registro",
          value: function registro(dato) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "registro"), dato).subscribe(function (resp) {
                resolve(resp);
              });
            });
          }
        }, {
          key: "registroLibreria",
          value: function registroLibreria(dato) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "registroLibreria"), dato).subscribe(function (resp) {
                resolve(resp);
              });
            });
          }
        }, {
          key: "login",
          value: function login(dato) {
            var _this4 = this;

            return new Promise(function (resolve) {
              _this4._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "login"), dato).subscribe(function (resp) {
                if (resp.status == 'ok' && resp.token) {
                  Storage.set({
                    key: 'token',
                    value: resp.token
                  });
                }

                resolve(resp);
              });
            });
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return new Promise(function (resolve) {
              Storage.get({
                key: 'token'
              }).then(function (data) {
                resolve(data);
              });
            });
          }
        }, {
          key: "compruebaSiLogado",
          value: function compruebaSiLogado() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this6 = this;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  this._http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "getUsuario")).subscribe(function (resp) {
                                    if (resp.status == 'ok') {
                                      Storage.set({
                                        key: 'token',
                                        value: resp.token
                                      });
                                      _this6.usuarioActual = resp.usuario;
                                      resolve(true);
                                    } else {
                                      Storage.clear();
                                      resolve(false);
                                    }
                                  });

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "cerrarSesion",
          value: function cerrarSesion() {
            Storage.clear();
          }
        }, {
          key: "buscarUsuario",
          value: function buscarUsuario() {
            var _iterator = _createForOfIteratorHelper(this.usuario),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;

                if (data._id == this.idUsuarioModificar) {
                  this.usuarioModificar = data;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.usuarioModificar;
          } //Traer los usuarios de la bbdd

        }, {
          key: "mostrarUsuario",
          value: function mostrarUsuario() {
            var _this7 = this;

            return new Promise(function (resolve) {
              _this7._http.get("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "mostrarUsuario")).subscribe(function (resp) {
                _this7.usuario = resp.usuario;
                resolve(resp);
              });
            });
          } // Traer los usuarios tipo libreria de la bbdd

        }, {
          key: "mostrarLibreria",
          value: function mostrarLibreria(limit) {
            var _this8 = this;

            var datos = {
              limite: limit
            };
            return new Promise(function (resolve) {
              _this8._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "mostrarLibreria"), datos).subscribe(function (resp) {
                _this8.usuarioLibreria = resp.usuario[0];
                resolve(resp);
              });
            });
          } //Guardar datos personales editados de la libreria

        }, {
          key: "guardarDatosEditadosLibreria",
          value: function guardarDatosEditadosLibreria() {
            var _this9 = this;

            return new Promise(function (resolve) {
              _this9._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "guardar-datos-editados-libreria"), _this9.usuario[0][0]).subscribe(function (resp) {
                if (resp.status == 'ok' && resp.token) {
                  Storage.set({
                    key: 'token',
                    value: resp.token
                  });
                }

                resolve(resp);
              });
            });
          } //Guardar datos personales editados del bibliofilo

        }, {
          key: "guardarDatosEditadosBibliofilo",
          value: function guardarDatosEditadosBibliofilo() {
            var _this10 = this;

            return new Promise(function (resolve) {
              _this10._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "guardar-datos-editados-bibliofilo"), _this10.usuario[0][0]).subscribe(function (resp) {
                if (resp.status == 'ok' && resp.token) {
                  Storage.set({
                    key: 'token',
                    value: resp.token
                  });
                }

                resolve(resp);
              });
            });
          } //Guardar la libreria en favoritos

        }, {
          key: "guadarLibreriaFav",
          value: function guadarLibreriaFav(libreria) {
            var _this11 = this;

            var datos = {
              libreria: libreria
            };
            return new Promise(function (resolve) {
              _this11._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "guadarLibreriaFav"), datos).subscribe(function (resp) {
                resolve(resp);
              });
            });
          } //Borrar la libreria de favoritos

        }, {
          key: "borrarLibreriaFav",
          value: function borrarLibreriaFav(libreria) {
            var _this12 = this;

            var datos = {
              libreria: libreria
            };
            return new Promise(function (resolve) {
              _this12._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "borrarLibreriaFav"), datos).subscribe(function (resp) {
                resolve(resp);
              });
            });
          } //Mostrar las librerias favoritas en apartado Favoritos

        }, {
          key: "mostrarLibreriasFavoritas",
          value: function mostrarLibreriasFavoritas(limit) {
            var _this13 = this;

            var datos = {
              limite: limit
            };
            return new Promise(function (resolve) {
              _this13._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlUsuario, "mostrarLibreriasFavoritas"), datos).subscribe(function (resp) {
                _this13.usuarioLibreria = resp.usuario[0];
                resolve(resp);
              });
            });
          }
        }]);

        return UsuarioService;
      }();

      UsuarioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UsuarioService);
      /***/
    },

    /***/
    "./src/environments/environment.prod.ts":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        urlUsuario: 'https://proyecto-booklife.herokuapp.com/usuario/',
        urlEvento: 'https://proyecto-booklife.herokuapp.com/evento/',
        urlLibro: 'https://proyecto-booklife.herokuapp.com/libro/'
      };
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        //url para acceder a la ruta definida en index.ts
        urlUsuario: 'http://localhost:3300/usuario/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Noelia\Desktop\GRADO\SEGUNDO\proyecto\PROYECTO\BookLife\bookLife-front\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map