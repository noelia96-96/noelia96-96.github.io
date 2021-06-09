(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seleccion-registro-seleccion-registro-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-registro/seleccion-registro.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-registro/seleccion-registro.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSeleccionRegistroSeleccionRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"toolbar-color\" color=\"primary\">\n    <ion-title>Registro</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"'/'\" [mode]=\"'md'\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\"> \n  <div class=\"ilustration-bibliofilo\" (click)=\"registroBibliofilo()\">\n    <span class=\"texto-bibliofilo\">BIBLIÓFILO</span>\n    <img src=\"../../../assets/bibliofilo.png\">\n  </div>\n  <div class=\"ilustration-librero\" (click)=\"registroLibrero()\">\n    <span class=\"texto-librero\">LIBRERO</span>\n    <img src=\"../../../assets/librero.jpg\">\n  </div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/pages/seleccion-registro/seleccion-registro-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/seleccion-registro/seleccion-registro-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SeleccionRegistroPageRoutingModule */

    /***/
    function srcAppPagesSeleccionRegistroSeleccionRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeleccionRegistroPageRoutingModule", function () {
        return SeleccionRegistroPageRoutingModule;
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


      var _seleccion_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seleccion-registro.page */
      "./src/app/pages/seleccion-registro/seleccion-registro.page.ts");

      var routes = [{
        path: '',
        component: _seleccion_registro_page__WEBPACK_IMPORTED_MODULE_3__["SeleccionRegistroPage"]
      }];

      var SeleccionRegistroPageRoutingModule = function SeleccionRegistroPageRoutingModule() {
        _classCallCheck(this, SeleccionRegistroPageRoutingModule);
      };

      SeleccionRegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SeleccionRegistroPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/seleccion-registro/seleccion-registro.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/seleccion-registro/seleccion-registro.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SeleccionRegistroPageModule */

    /***/
    function srcAppPagesSeleccionRegistroSeleccionRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeleccionRegistroPageModule", function () {
        return SeleccionRegistroPageModule;
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


      var _seleccion_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seleccion-registro-routing.module */
      "./src/app/pages/seleccion-registro/seleccion-registro-routing.module.ts");
      /* harmony import */


      var _seleccion_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seleccion-registro.page */
      "./src/app/pages/seleccion-registro/seleccion-registro.page.ts");

      var SeleccionRegistroPageModule = function SeleccionRegistroPageModule() {
        _classCallCheck(this, SeleccionRegistroPageModule);
      };

      SeleccionRegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seleccion_registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeleccionRegistroPageRoutingModule"]],
        declarations: [_seleccion_registro_page__WEBPACK_IMPORTED_MODULE_6__["SeleccionRegistroPage"]]
      })], SeleccionRegistroPageModule);
      /***/
    },

    /***/
    "./src/app/pages/seleccion-registro/seleccion-registro.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/seleccion-registro/seleccion-registro.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSeleccionRegistroSeleccionRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".toolbar-color {\n  --ion-color-primary-tint: #4c8dff;\n}\n\n.content {\n  text-align: center;\n}\n\n.ilustration-bibliofilo, .ilustration-librero {\n  width: 258px;\n  position: relative;\n  left: 58px;\n  text-align: center;\n}\n\n.ilustration-bibliofilo, .ilustration-librero {\n  background-color: #FFF;\n  padding: 20px;\n  border-radius: 5px;\n  margin-right: 30px;\n  height: 268px;\n  margin-bottom: 17px;\n  box-shadow: 2px 2px 10px #3171e075;\n}\n\n.ilustration-bibliofilo {\n  margin-top: 32px;\n}\n\n.ilustration-librero {\n  margin-top: 5px;\n}\n\n.texto-seleccion {\n  text-align: center;\n  position: relative;\n  top: 40px;\n  font-family: system-ui;\n}\n\n.texto-bibliofilo, .texto-librero {\n  display: block;\n  font-family: system-ui;\n  color: #4c8dff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWNjaW9uLXJlZ2lzdHJvL3NlbGVjY2lvbi1yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxlY2Npb24tcmVnaXN0cm8vc2VsZWNjaW9uLXJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWNvbG9yIHtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcclxufVxyXG4uY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlsdXN0cmF0aW9uLWJpYmxpb2ZpbG8sIC5pbHVzdHJhdGlvbi1saWJyZXJvIHtcclxuICAgIHdpZHRoOjI1OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWx1c3RyYXRpb24tYmlibGlvZmlsbywgLmlsdXN0cmF0aW9uLWxpYnJlcm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDI2OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAjMzE3MWUwNzU7XHJcbn1cclxuLmlsdXN0cmF0aW9uLWJpYmxpb2ZpbG8ge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4uaWx1c3RyYXRpb24tbGlicmVybyB7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxufVxyXG4udGV4dG8tc2VsZWNjaW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbn1cclxuLnRleHRvLWJpYmxpb2ZpbG8sIC50ZXh0by1saWJyZXJvIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgIGNvbG9yOiAgIzRjOGRmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/seleccion-registro/seleccion-registro.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/seleccion-registro/seleccion-registro.page.ts ***!
      \*********************************************************************/

    /*! exports provided: SeleccionRegistroPage */

    /***/
    function srcAppPagesSeleccionRegistroSeleccionRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeleccionRegistroPage", function () {
        return SeleccionRegistroPage;
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

      var SeleccionRegistroPage = /*#__PURE__*/function () {
        function SeleccionRegistroPage(_usuarioService, _router) {
          _classCallCheck(this, SeleccionRegistroPage);

          this._usuarioService = _usuarioService;
          this._router = _router;
        }

        _createClass(SeleccionRegistroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registroBibliofilo",
          value: function registroBibliofilo() {
            this._router.navigate(['/registro']);
          }
        }, {
          key: "registroLibrero",
          value: function registroLibrero() {
            this._router.navigate(['/registro-libreria']);
          }
        }]);

        return SeleccionRegistroPage;
      }();

      SeleccionRegistroPage.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      SeleccionRegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccion-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./seleccion-registro.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seleccion-registro/seleccion-registro.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./seleccion-registro.page.scss */
        "./src/app/pages/seleccion-registro/seleccion-registro.page.scss"))["default"]]
      })], SeleccionRegistroPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-seleccion-registro-seleccion-registro-module-es5.js.map