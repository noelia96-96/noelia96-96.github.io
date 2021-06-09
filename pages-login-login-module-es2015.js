(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"cabecera\">\r\n    <ion-title>Login</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [defaultHref]=\"'/'\" [mode]=\"'md'\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ilustration-login\">\r\n    <img src=\"../../../assets/login.jpg\" alt=\"\">\r\n  </div>\r\n  <form class=\"content-form\">\r\n    <ion-item class=\"usuario\">\r\n      <ion-icon class=\"uss\" name=\"person\" style=\"margin-right: 15px;\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"usuario\" name=\"usuario\" type=\"text\" placeholder=\"*Usuario\" autofocus required></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"contraseña\">\r\n      <ion-icon class=\"pass\" name=\"lock-closed\" style=\"margin-right: 15px;\"></ion-icon>\r\n      <ion-input [(ngModel)]=\"pwd\" name=\"pwd\" type=\"password\" placeholder=\"*Contraseña\" required></ion-input>\r\n    </ion-item>\r\n    <div class=\"login-button\">\r\n      <ion-button class=\"log-button\" (click)=\"login()\" disabled=\"{{!this.usuario || !this.pwd }}\" style=\"margin-top: 10px;\" expand=\"block\"  color=\"primary\">Login</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n   \r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.content-form {\n  margin-top: 39px;\n  width: 347px;\n  margin-left: 5px;\n}\n.cabecera {\n  margin-top: 35px;\n}\n.ilustration-login {\n  margin-top: 11px;\n  width: 442px;\n  position: relative;\n  right: 33px;\n}\n.login-button {\n  --ion-color-primary-shade: #3171e0;\n  display: inline-block;\n  margin-left: 120px;\n}\n.log-button {\n  border-radius: 60px 20px 20px;\n  font-weight: bold;\n  width: 111px;\n}\n.usuario, .contraseña {\n  border: 1px solid #3171e0;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n.uss, .pass {\n  font-size: 19px;\n}\n.footer-login {\n  margin-top: 56px;\n  margin-left: 22px;\n}\n.olvidarContrasena {\n  margin-left: 110px;\n}\n.olvidarUsuario, .olvidarContrasena {\n  font-size: 10px;\n  color: #555555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBQTtFQUNJLGdCQUFBO0FBR0o7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlKO0FBRkE7RUFDSSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFLSjtBQUhBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFNSjtBQUpBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFPSjtBQUxBO0VBQ0ksZUFBQTtBQVFKO0FBTkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBU0o7QUFQQTtFQUNJLGtCQUFBO0FBVUo7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBV0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVudC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzlweDtcbiAgd2lkdGg6IDM0N3B4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY2FiZWNlcmEge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uaWx1c3RyYXRpb24tbG9naW4ge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICB3aWR0aDogNDQycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDMzcHg7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMjBweDtcbn1cblxuLmxvZy1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2MHB4IDIwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMTFweDtcbn1cblxuLnVzdWFyaW8sIC5jb250cmFzZcOxYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMTcxZTA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogNDNweDtcbiAgd2lkdGg6IDI5MXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udXNzLCAucGFzcyB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmZvb3Rlci1sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuXG4ub2x2aWRhckNvbnRyYXNlbmEge1xuICBtYXJnaW4tbGVmdDogMTEwcHg7XG59XG5cbi5vbHZpZGFyVXN1YXJpbywgLm9sdmlkYXJDb250cmFzZW5hIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let LoginPage = class LoginPage {
    constructor(_usuarioService, _router, alertController) {
        this._usuarioService = _usuarioService;
        this._router = _router;
        this.alertController = alertController;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const logado = yield this._usuarioService.compruebaSiLogado();
            if (logado) {
                this._router.navigate(['/perfil']);
            }
            else {
                console.log('No estamos logados');
            }
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const datos = {
                nombre: this.usuario,
                pwd: this.pwd
            };
            const respuesta = yield this._usuarioService.login(datos);
            if (respuesta.status == 'ok') {
                this._usuarioService.usuarioActual = datos;
                if (respuesta.usuario.sexo) {
                    this._router.navigate(['/perfil']);
                }
                else {
                    this._router.navigate(['/principal-libreria']);
                }
            }
            else {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    backdropDismiss: false,
                    subHeader: 'No existe el usuario. Regístrate',
                    buttons: ['OK']
                });
                yield alert.present();
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map