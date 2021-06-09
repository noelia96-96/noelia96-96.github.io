(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/app/services/evento.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/evento.service.ts ***!
  \********************************************/
/*! exports provided: EventoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoService", function() { return EventoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let EventoService = class EventoService {
    constructor(_http) {
        this._http = _http;
    }
    registrarEvento(dato) {
        return new Promise((resolve, reject) => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}registrar`, dato).subscribe((resp) => {
                if (resp.status == 'ok') {
                    this.eventosPropios.unshift(resp.evento);
                }
                resolve(resp);
            });
        });
    }
    //Traer los eventos de la bbdd
    getEventos(limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let datos = {
                limite: limit,
            };
            return new Promise(resolve => {
                this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}mostrarEvento`, datos).subscribe(resp => {
                    this.eventosPropios = resp.evento[0];
                    resolve(resp);
                });
            });
        });
    }
    //Traer los eventos de la bbdd por el bibliofilo     
    getEventosPorBibliofilo(limit) {
        let datos = {
            limite: limit,
        };
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}mostrarEventoABibliofilo`, datos).subscribe(resp => {
                this.eventosPropios = resp.evento[0];
                resolve(resp);
            });
        });
    }
    borrar() {
        for (let data of this.eventosPropios) {
            if (data._id == this.eventoIdBorrar) {
                this.eventoBorrar = data;
            }
        }
        return new Promise(resolve => {
            const datos = {
                _id: this.eventoBorrar._id,
            };
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}borrarEvento`, datos).subscribe((resp) => {
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
    apuntarse(datos) {
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}apuntarse`, datos).subscribe((resp) => {
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
    desapuntarse(datos) {
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}desapuntarse`, datos).subscribe((resp) => {
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
    buscarEvento() {
        for (let data of this.eventosPropios) {
            if (data._id == this.idEventoModificar) {
                this.eventoModificar = data;
            }
        }
        return this.eventoModificar;
    }
    guardarDatosEditados() {
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}guardar`, this.eventoModificar).subscribe((resp) => {
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
    getToken() {
        return new Promise(resolve => {
            Storage.get({ key: 'token' }).then(data => {
                resolve(data);
            });
        });
    }
    //Mostrar los eventos al pinchar en la card de la libreria
    mostrarEventosPicharCard(limit, libreriaPinchada) {
        let datos = {
            limite: limit,
            libreriaPinchadaCard: libreriaPinchada
        };
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento}mostrarEventosPicharCard`, datos).subscribe(resp => {
                this.eventoCardPinchada = resp.evento[0];
                resolve(resp);
            });
        });
    }
};
EventoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EventoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EventoService);



/***/ }),

/***/ "./src/app/services/libro.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/libro.service.ts ***!
  \*******************************************/
/*! exports provided: LibroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroService", function() { return LibroService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let LibroService = class LibroService {
    constructor(_http) {
        this._http = _http;
    }
    registrarLibro(dato) {
        return new Promise((resolve, reject) => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}registrarLibro`, dato).subscribe((resp) => {
                if (resp.status == 'ok') {
                    //this.librosPropios.unshift(resp.libro);
                }
                resolve(resp);
            });
        });
    }
    //Traer los libros de la bbdd
    getLibros(limit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let datos = {
                limite: limit,
            };
            return new Promise(resolve => {
                this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}mostrarLibro`, datos).subscribe(resp => {
                    this.librosPropios = resp.libro[0];
                    resolve(resp);
                });
            });
        });
    }
    //Mostrar libros al bibliofilo
    mostrarLibros(limit) {
        let datos = {
            limite: limit,
        };
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}mostrarLibrosBibliofilo`, datos).subscribe(resp => {
                this.librosPropios = resp.libro[0];
                resolve(resp);
            });
        });
    }
    borrar() {
        for (let data of this.librosPropios) {
            if (data._id == this.libroIdBorrar) {
                this.libroBorrar = data;
            }
        }
        return new Promise(resolve => {
            const datos = {
                _id: this.libroBorrar._id,
            };
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}borrarLibro`, datos).subscribe((resp) => {
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
    buscarLibro() {
        for (let data of this.librosPropios) {
            if (data._id == this.idLibroModificar) {
                this.libroModificar = data;
            }
        }
        return this.libroModificar;
    }
    guardarDatosEditados() {
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}guardar`, this.libroModificar).subscribe((resp) => {
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
    getToken() {
        return new Promise(resolve => {
            Storage.get({ key: 'token' }).then(data => {
                resolve(data);
            });
        });
    }
    reservarLibro(datos) {
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}reservarLibro`, datos).subscribe((resp) => {
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
    quitarReservaLibro(datos) {
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}quitarReservaLibro`, datos).subscribe((resp) => {
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
    //Mostrar las librerias al pinchar en la card de la libreria
    mostrarLibrosPicharCard(limit, libreriaPinchada) {
        let datos = {
            limite: limit,
            libreriaPinchadaCard: libreriaPinchada
        };
        return new Promise(resolve => {
            this._http.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro}mostrarLibrosPicharCard`, datos).subscribe(resp => {
                this.libroCardPinchada = resp.libro[0];
                resolve(resp);
            });
        });
    }
};
LibroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LibroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LibroService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map