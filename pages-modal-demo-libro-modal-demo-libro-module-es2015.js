(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-demo-libro-modal-demo-libro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo-libro/modal-demo-libro.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo-libro/modal-demo-libro.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center;\">\r\n      Editar Libro\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<body>\r\n  <ion-list class=\"edit-content\">\r\n      <ion-item class=\"nombreLibro\">\r\n        <ion-label><b>Nombre del libro: </b></ion-label>\r\n        <ion-input [(ngModel)]=\"libroObtenido.nombreLibro\"  type=\"text\" name=\"nombreLibro\"></ion-input>\r\n      </ion-item>\r\n\r\n    <ion-item class=\"genero\">\r\n      <ion-label><b>Género: </b></ion-label>\r\n      <ion-input [(ngModel)]=\"libroObtenido.genero\" type=\"text\" name=\"genero\"></ion-input>\r\n    </ion-item>\r\n     <ion-item class=\"autor\">\r\n      <ion-label><b>Autor: </b></ion-label>\r\n      <ion-input [(ngModel)]=\"libroObtenido.autor\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"precio\">\r\n      <ion-label><b>Precio: </b></ion-label>\r\n      <ion-input [(ngModel)]=\"libroObtenido.precio\" ></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"ilustration-book\">\r\n    <img src=\"../../../assets/editar-libro.jpg\">\r\n  </div>\r\n</body>\r\n\r\n<ion-footer class=\"bar-stable\">\r\n  <ion-toolbar color=\"light\">\r\n    <div style=\"text-align: center;\">\r\n  <ion-button class=\"save-button\" color=\"primary\" style=\"margin-left:0%\" >\r\n    <ion-icon name=\"save-outline\"></ion-icon>\r\n    <ion-label (click)=\"guardar()\" style=\"margin-left: 10px;\">Guardar</ion-label>\r\n  </ion-button>\r\n  <ion-button class=\"cancel-button\" color=\"primary\" style=\"margin-left:5%\" (click)=\"cancelar()\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n    <ion-label style=\"margin-left: 10px;\">Cancelar</ion-label>\r\n  </ion-button> \r\n</div>\r\n</ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/modal-demo-libro/modal-demo-libro-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modal-demo-libro/modal-demo-libro-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ModalDemoLibroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoLibroPageRoutingModule", function() { return ModalDemoLibroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_demo_libro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-demo-libro.page */ "./src/app/pages/modal-demo-libro/modal-demo-libro.page.ts");




const routes = [
    {
        path: '',
        component: _modal_demo_libro_page__WEBPACK_IMPORTED_MODULE_3__["ModalDemoLibroPage"]
    }
];
let ModalDemoLibroPageRoutingModule = class ModalDemoLibroPageRoutingModule {
};
ModalDemoLibroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalDemoLibroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modal-demo-libro/modal-demo-libro.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal-demo-libro/modal-demo-libro.module.ts ***!
  \*******************************************************************/
/*! exports provided: ModalDemoLibroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoLibroPageModule", function() { return ModalDemoLibroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_demo_libro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-demo-libro-routing.module */ "./src/app/pages/modal-demo-libro/modal-demo-libro-routing.module.ts");
/* harmony import */ var _modal_demo_libro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-demo-libro.page */ "./src/app/pages/modal-demo-libro/modal-demo-libro.page.ts");







let ModalDemoLibroPageModule = class ModalDemoLibroPageModule {
};
ModalDemoLibroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_demo_libro_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalDemoLibroPageRoutingModule"]
        ],
        declarations: [_modal_demo_libro_page__WEBPACK_IMPORTED_MODULE_6__["ModalDemoLibroPage"]]
    })
], ModalDemoLibroPageModule);



/***/ }),

/***/ "./src/app/pages/modal-demo-libro/modal-demo-libro.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modal-demo-libro/modal-demo-libro.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  overflow-y: hidden;\n  background-color: white;\n}\n\n.edit-content {\n  margin-top: 72px;\n  margin-left: 12px;\n}\n\n.nombreLibro, .genero, .autor, .precio {\n  border: 1px solid #3880ff;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n\n.ilustration-book {\n  width: 242px;\n  margin-top: 14%;\n  margin-left: 57px;\n}\n\n.save-button, .cancel-button {\n  width: 113px;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwtZGVtby1saWJyby9tb2RhbC1kZW1vLWxpYnJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW9kYWwtZGVtby1saWJyby9tb2RhbC1kZW1vLWxpYnJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZWRpdC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDcycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4ubm9tYnJlTGlicm8sIC5nZW5lcm8sIC5hdXRvciwgLnByZWNpbyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg4MGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIHdpZHRoOiAyOTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaWx1c3RyYXRpb24tYm9va3tcclxuICAgIHdpZHRoOiAyNDJweDtcclxuICAgIG1hcmdpbi10b3A6IDE0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1N3B4O1xyXG59XHJcbi5zYXZlLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/modal-demo-libro/modal-demo-libro.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-demo-libro/modal-demo-libro.page.ts ***!
  \*****************************************************************/
/*! exports provided: ModalDemoLibroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoLibroPage", function() { return ModalDemoLibroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_libro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/libro.service */ "./src/app/services/libro.service.ts");





let ModalDemoLibroPage = class ModalDemoLibroPage {
    constructor(router, activatedRoute, _libroService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._libroService = _libroService;
        this.nuevoLibro = {
            nombreLibro: '',
            genero: '',
            autor: '',
            precio: '',
            participantes: Array()
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Buscar el libro
            this._id = this._libroService.idLibroModificar;
            this.libroObtenido = this.nuevoLibro;
            this.libroObtenido = this._libroService.buscarLibro();
        });
    }
    guardar() {
        this._libroService.guardarDatosEditados();
        this.router.navigate(['/principal-libreria']);
    }
    cancelar() {
        //Poner 'refresh' para que al guardar, el nuevo libro aparezca en la pantalla de inicio 
        this.router.navigate(['/principal-libreria']); //da error con el 'refresh'
    }
};
ModalDemoLibroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_libro_service__WEBPACK_IMPORTED_MODULE_3__["LibroService"] }
];
ModalDemoLibroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-demo-libro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-demo-libro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo-libro/modal-demo-libro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-demo-libro.page.scss */ "./src/app/pages/modal-demo-libro/modal-demo-libro.page.scss")).default]
    })
], ModalDemoLibroPage);



/***/ })

}]);
//# sourceMappingURL=pages-modal-demo-libro-modal-demo-libro-module-es2015.js.map