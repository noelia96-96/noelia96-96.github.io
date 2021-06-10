(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<body class=\"background\">\r\n\t<div class=\"login\">\r\n\t\t<div class=\"login-screen\">\r\n\t\t\t<div class=\"app-title\">\r\n\t\t\t\t<h1 class=\"title-text\">BookLife</h1>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"login-form\">\r\n        <ion-button class=\"button-login\" [routerLink]=\"'/login'\" style=\"margin-top: 10px;\" expand=\"block\" color=\"secondary\">Login</ion-button>\r\n        <ion-button class=\"button-registro\" [routerLink]=\"'/seleccion-registro'\" style=\"margin-top: 10px;\"expand=\"block\" color=\"primary\">Registro</ion-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"imagen-inicio\">\r\n\t\t<img  src=\"../../../assets/imagen-inicio.JPG\"> \r\n\t</div>\r\n</body>";
      /***/
    },

    /***/
    "./src/app/pages/inicio/inicio-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InicioPageRoutingModule */

    /***/
    function srcAppPagesInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
        return InicioPageRoutingModule;
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


      var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio.page */
      "./src/app/pages/inicio/inicio.page.ts");

      var routes = [{
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
      }];

      var InicioPageRoutingModule = function InicioPageRoutingModule() {
        _classCallCheck(this, InicioPageRoutingModule);
      };

      InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InicioPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/inicio/inicio.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.module.ts ***!
      \***********************************************/

    /*! exports provided: InicioPageModule */

    /***/
    function srcAppPagesInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
        return InicioPageModule;
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


      var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inicio-routing.module */
      "./src/app/pages/inicio/inicio-routing.module.ts");
      /* harmony import */


      var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inicio.page */
      "./src/app/pages/inicio/inicio.page.ts"); //import { ComponentesModule } from '../../componentes/componentes.module';


      var InicioPageModule = function InicioPageModule() {
        _classCallCheck(this, InicioPageModule);
      };

      InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
      })], InicioPageModule);
      /***/
    },

    /***/
    "./src/app/pages/inicio/inicio.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  box-sizing: border-box;\n}\n\n*:focus {\n  outline: none;\n}\n\n/*body.background {\n    font-family: Arial;\n    padding: 37px;\n    background-image: url('../../../assets/inicio.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin-top: 40px;\n}*/\n\n.imagen-inicio {\n  width: 133%;\n  bottom: 0;\n  position: absolute;\n  left: -22%;\n}\n\n.title-text {\n  font-family: monospace;\n}\n\n.login {\n  position: absolute;\n  top: 116px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  right: 37px;\n}\n\n.login-screen {\n  background-color: #FFF;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px #666;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.button-login {\n  --ion-color-secondary-shade: #36abe0;\n  font-weight: bold;\n}\n\n.button-registro {\n  --ion-color-primary-tint: #4c8dff;\n  font-weight: bold;\n}\n\n.app-title {\n  text-align: center;\n  color: #777;\n}\n\n.login-form {\n  text-align: center;\n}\n\n.control-group {\n  margin-bottom: 10px;\n}\n\ninput {\n  text-align: center;\n  background-color: #ECF0F1;\n  border: 2px solid transparent;\n  border-radius: 3px;\n  font-size: 16px;\n  font-weight: 200;\n  padding: 10px 0;\n  width: 250px;\n  transition: border 0.5s;\n}\n\ninput:focus {\n  border: 2px solid #3498DB;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVJO0VBQ0ksYUFBQTtBQUNSOztBQUNJOzs7Ozs7OztFQUFBOztBQVNBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFUjs7QUFBSTtFQUNJLHNCQUFBO0FBR1I7O0FBREk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJUjs7QUFGSTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS1I7O0FBSEk7RUFDSSxvQ0FBQTtFQUNBLGlCQUFBO0FBTVI7O0FBSkk7RUFDSSxpQ0FBQTtFQUNBLGlCQUFBO0FBT1I7O0FBTEk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFRUjs7QUFMSTtFQUNJLGtCQUFBO0FBUVI7O0FBTkk7RUFDSSxtQkFBQTtBQVNSOztBQU5JO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBU1I7O0FBTkk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBU1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgKjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIC8qYm9keS5iYWNrZ3JvdW5kIHtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgcGFkZGluZzogMzdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbmljaW8uanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfSovXHJcbiAgICAuaW1hZ2VuLWluaWNpb3tcclxuICAgICAgICB3aWR0aDogMTMzJTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0yMiU7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtdGV4dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIH1cclxuICAgIC5sb2dpbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICByaWdodDogMzdweDtcclxuICAgIH1cclxuICAgIC5sb2dpbi1zY3JlZW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM2NjY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1sb2dpbiB7XHJcbiAgICAgICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1yZWdpc3RybyB7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmFwcC10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRyb2wtZ3JvdXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRjBGMTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM0OThEQjtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/inicio/inicio.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.ts ***!
      \*********************************************/

    /*! exports provided: InicioPage */

    /***/
    function srcAppPagesInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
        return InicioPage;
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

      var InicioPage = /*#__PURE__*/function () {
        function InicioPage(alertController) {
          _classCallCheck(this, InicioPage);

          this.alertController = alertController;
        }

        _createClass(InicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        backdropDismiss: false,
                        subHeader: 'App MyEvent realizada para la asignatura HLC, IES.Sotero Hernández. Curso 2020-2021',
                        message: 'Autor: Noelia Galindo García',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return InicioPage;
      }();

      InicioPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inicio.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inicio.page.scss */
        "./src/app/pages/inicio/inicio.page.scss"))["default"]]
      })], InicioPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map