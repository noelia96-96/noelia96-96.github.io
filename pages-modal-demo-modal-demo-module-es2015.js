(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-demo-modal-demo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo/modal-demo.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo/modal-demo.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center;\">\r\n      Editar Evento\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<body>\r\n  <ion-list class=\"edit-content\">\r\n      <ion-item class=\"nombre\">\r\n        <ion-label><b>Nombre del evento: </b></ion-label>\r\n        <ion-input [(ngModel)]=\"eventoObtenido.nombreEvento\"  type=\"text\" name=\"evento\"></ion-input>\r\n      </ion-item>\r\n    \r\n    <ion-item class=\"ciudad\">\r\n      <ion-label><b>Ciudad: </b></ion-label>\r\n      <ion-input [(ngModel)]=\"eventoObtenido.ciudad\" type=\"text\" name=\"ciudad\" readonly></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"direccion\">\r\n      <ion-label><b>Dirección: </b></ion-label>\r\n      <ion-input [(ngModel)]=\"eventoObtenido.direccion\" type=\"text\" name=\"direccion\"></ion-input>\r\n    </ion-item>\r\n     <ion-item class=\"fecha\">\r\n      <ion-label><b>Fecha: </b></ion-label>\r\n      <ion-datetime [(ngModel)]=\"eventoObtenido.fecha\" mmin=\"2021\" max=\"2023\" displayFormat=\"DD/MM/YYYY\" pikerFormat=\"DD MM YYYY\"></ion-datetime>\r\n    </ion-item>\r\n    <ion-item class=\"hora\">\r\n      <ion-label><b>Hora: </b></ion-label>\r\n      <ion-datetime [(ngModel)]=\"eventoObtenido.hora\" displayFormat=\"HH:mm\"></ion-datetime>\r\n    </ion-item>\r\n  </ion-list>\r\n  <div class=\"ilustration-event\">\r\n    <img src=\"../../../assets/event.jpg\">\r\n  </div>\r\n</body>\r\n\r\n<ion-footer class=\"bar-stable\">\r\n  <ion-toolbar color=\"light\">\r\n    <div style=\"text-align: center;\">\r\n  <ion-button class=\"save-button\" color=\"primary\" style=\"margin-left:0%\" >\r\n    <ion-icon name=\"save-outline\"></ion-icon>\r\n    <ion-label (click)=\"guardar()\" style=\"margin-left: 10px;\">Guardar</ion-label>\r\n  </ion-button>\r\n  <ion-button class=\"cancel-button\" color=\"primary\" style=\"margin-left:5%\" (click)=\"cancelar()\">\r\n    <ion-icon name=\"close\"></ion-icon>\r\n    <ion-label style=\"margin-left: 10px;\">Cancelar</ion-label>\r\n  </ion-button> \r\n</div>\r\n</ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/modal-demo/modal-demo-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalDemoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoPageRoutingModule", function() { return ModalDemoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modal_demo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-demo.page */ "./src/app/pages/modal-demo/modal-demo.page.ts");




const routes = [
    {
        path: '',
        component: _modal_demo_page__WEBPACK_IMPORTED_MODULE_3__["ModalDemoPage"]
    }
];
let ModalDemoPageRoutingModule = class ModalDemoPageRoutingModule {
};
ModalDemoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalDemoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modal-demo/modal-demo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalDemoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoPageModule", function() { return ModalDemoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-demo-routing.module */ "./src/app/pages/modal-demo/modal-demo-routing.module.ts");
/* harmony import */ var _modal_demo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-demo.page */ "./src/app/pages/modal-demo/modal-demo.page.ts");







let ModalDemoPageModule = class ModalDemoPageModule {
};
ModalDemoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalDemoPageRoutingModule"]
        ],
        declarations: [_modal_demo_page__WEBPACK_IMPORTED_MODULE_6__["ModalDemoPage"]]
    })
], ModalDemoPageModule);



/***/ }),

/***/ "./src/app/pages/modal-demo/modal-demo.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  overflow-y: hidden;\n  background-color: white;\n}\n\n.edit-content {\n  margin-top: 72px;\n  margin-left: 12px;\n}\n\n.nombre, .ciudad, .direccion, .fecha, .hora {\n  border: 1px solid #3880ff;\n  border-radius: 30px;\n  height: 43px;\n  width: 291px;\n  font-size: 15px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n\n.ilustration-event {\n  width: 215px;\n  margin-top: 99px;\n  margin-left: 79px;\n}\n\n.save-button, .cancel-button {\n  width: 113px;\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW9kYWwtZGVtby9tb2RhbC1kZW1vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLWRlbW8vbW9kYWwtZGVtby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmVkaXQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuLm5vbWJyZSwgLmNpdWRhZCwgLmRpcmVjY2lvbiwuZmVjaGEsIC5ob3JhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODgwZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgd2lkdGg6IDI5MXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5pbHVzdHJhdGlvbi1ldmVudCB7XHJcbiAgICB3aWR0aDogMjE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA5OXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc5cHg7XHJcbn1cclxuXHJcbi5zYXZlLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDExM3B4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/modal-demo/modal-demo.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-demo/modal-demo.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalDemoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDemoPage", function() { return ModalDemoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/evento.service */ "./src/app/services/evento.service.ts");





let ModalDemoPage = class ModalDemoPage {
    constructor(router, activatedRoute, _eventoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._eventoService = _eventoService;
        this.nuevoEvento = {
            nombreEvento: '',
            creador: '',
            direccion: '',
            ciudad: '',
            fecha: new Date(),
            hora: new Date(),
            participantes: Array()
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //Buscar el evento
            this._id = this._eventoService.idEventoModificar;
            this.eventoObtenido = this.nuevoEvento;
            this.eventoObtenido = this._eventoService.buscarEvento();
        });
    }
    guardar() {
        this._eventoService.guardarDatosEditados();
        this.router.navigate(['/principal-libreria']);
    }
    cancelar() {
        //Poner 'refresh' para que al guardar, el nuevo evento aparezca en la pantalla de inicio 
        this.router.navigate(['/principal-libreria']); //da error con el 'refresh'
    }
};
ModalDemoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"] }
];
ModalDemoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-demo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-demo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-demo/modal-demo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-demo.page.scss */ "./src/app/pages/modal-demo/modal-demo.page.scss")).default]
    })
], ModalDemoPage);



/***/ })

}]);
//# sourceMappingURL=pages-modal-demo-modal-demo-module-es2015.js.map