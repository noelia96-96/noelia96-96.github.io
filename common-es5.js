(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveA6787d69Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
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
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4584ab5aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
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
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/services/evento.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/evento.service.ts ***!
      \********************************************/

    /*! exports provided: EventoService */

    /***/
    function srcAppServicesEventoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventoService", function () {
        return EventoService;
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

      var EventoService = /*#__PURE__*/function () {
        function EventoService(_http) {
          _classCallCheck(this, EventoService);

          this._http = _http;
        }

        _createClass(EventoService, [{
          key: "registrarEvento",
          value: function registrarEvento(dato) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "registrar"), dato).subscribe(function (resp) {
                if (resp.status == 'ok') {
                  _this.eventosPropios.unshift(resp.evento);
                }

                resolve(resp);
              });
            });
          } //Traer los eventos de la bbdd

        }, {
          key: "getEventos",
          value: function getEventos(limit) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var datos;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      datos = {
                        limite: limit
                      };
                      return _context3.abrupt("return", new Promise(function (resolve) {
                        _this2._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "mostrarEvento"), datos).subscribe(function (resp) {
                          _this2.eventosPropios = resp.evento[0];
                          resolve(resp);
                        });
                      }));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          } //Traer los eventos de la bbdd por el bibliofilo     

        }, {
          key: "getEventosPorBibliofilo",
          value: function getEventosPorBibliofilo(limit) {
            var _this3 = this;

            var datos = {
              limite: limit
            };
            return new Promise(function (resolve) {
              _this3._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "mostrarEventoABibliofilo"), datos).subscribe(function (resp) {
                _this3.eventosPropios = resp.evento[0];
                resolve(resp);
              });
            });
          }
        }, {
          key: "borrar",
          value: function borrar() {
            var _this4 = this;

            var _iterator = _createForOfIteratorHelper(this.eventosPropios),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;

                if (data._id == this.eventoIdBorrar) {
                  this.eventoBorrar = data;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return new Promise(function (resolve) {
              var datos = {
                _id: _this4.eventoBorrar._id
              };

              _this4._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "borrarEvento"), datos).subscribe(function (resp) {
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
          key: "apuntarse",
          value: function apuntarse(datos) {
            var _this5 = this;

            return new Promise(function (resolve) {
              _this5._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "apuntarse"), datos).subscribe(function (resp) {
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
          key: "desapuntarse",
          value: function desapuntarse(datos) {
            var _this6 = this;

            return new Promise(function (resolve) {
              _this6._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "desapuntarse"), datos).subscribe(function (resp) {
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
          key: "buscarEvento",
          value: function buscarEvento() {
            var _iterator2 = _createForOfIteratorHelper(this.eventosPropios),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var data = _step2.value;

                if (data._id == this.idEventoModificar) {
                  this.eventoModificar = data;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return this.eventoModificar;
          }
        }, {
          key: "guardarDatosEditados",
          value: function guardarDatosEditados() {
            var _this7 = this;

            return new Promise(function (resolve) {
              _this7._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "guardar"), _this7.eventoModificar).subscribe(function (resp) {
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
          } //Mostrar los eventos al pinchar en la card de la libreria

        }, {
          key: "mostrarEventosPicharCard",
          value: function mostrarEventosPicharCard(limit, libreriaPinchada) {
            var _this8 = this;

            var datos = {
              limite: limit,
              libreriaPinchadaCard: libreriaPinchada
            };
            return new Promise(function (resolve) {
              _this8._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlEvento, "mostrarEventosPicharCard"), datos).subscribe(function (resp) {
                _this8.eventoCardPinchada = resp.evento[0];
                resolve(resp);
              });
            });
          }
        }]);

        return EventoService;
      }();

      EventoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      EventoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventoService);
      /***/
    },

    /***/
    "./src/app/services/libro.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/libro.service.ts ***!
      \*******************************************/

    /*! exports provided: LibroService */

    /***/
    function srcAppServicesLibroServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibroService", function () {
        return LibroService;
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

      var LibroService = /*#__PURE__*/function () {
        function LibroService(_http) {
          _classCallCheck(this, LibroService);

          this._http = _http;
        }

        _createClass(LibroService, [{
          key: "registrarLibro",
          value: function registrarLibro(dato) {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "registrarLibro"), dato).subscribe(function (resp) {
                if (resp.status == 'ok') {//this.librosPropios.unshift(resp.libro);
                }

                resolve(resp);
              });
            });
          } //Traer los libros de la bbdd

        }, {
          key: "getLibros",
          value: function getLibros(limit) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var datos;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      datos = {
                        limite: limit
                      };
                      return _context4.abrupt("return", new Promise(function (resolve) {
                        _this10._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "mostrarLibro"), datos).subscribe(function (resp) {
                          _this10.librosPropios = resp.libro[0];
                          resolve(resp);
                        });
                      }));

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          } //Mostrar libros al bibliofilo

        }, {
          key: "mostrarLibros",
          value: function mostrarLibros(limit) {
            var _this11 = this;

            var datos = {
              limite: limit
            };
            return new Promise(function (resolve) {
              _this11._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "mostrarLibrosBibliofilo"), datos).subscribe(function (resp) {
                _this11.librosPropios = resp.libro[0];
                resolve(resp);
              });
            });
          }
        }, {
          key: "borrar",
          value: function borrar() {
            var _this12 = this;

            var _iterator3 = _createForOfIteratorHelper(this.librosPropios),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var data = _step3.value;

                if (data._id == this.libroIdBorrar) {
                  this.libroBorrar = data;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return new Promise(function (resolve) {
              var datos = {
                _id: _this12.libroBorrar._id
              };

              _this12._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "borrarLibro"), datos).subscribe(function (resp) {
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
          key: "buscarLibro",
          value: function buscarLibro() {
            var _iterator4 = _createForOfIteratorHelper(this.librosPropios),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var data = _step4.value;

                if (data._id == this.idLibroModificar) {
                  this.libroModificar = data;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return this.libroModificar;
          }
        }, {
          key: "guardarDatosEditados",
          value: function guardarDatosEditados() {
            var _this13 = this;

            return new Promise(function (resolve) {
              _this13._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "guardar"), _this13.libroModificar).subscribe(function (resp) {
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
          key: "reservarLibro",
          value: function reservarLibro(datos) {
            var _this14 = this;

            return new Promise(function (resolve) {
              _this14._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "reservarLibro"), datos).subscribe(function (resp) {
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
          key: "quitarReservaLibro",
          value: function quitarReservaLibro(datos) {
            var _this15 = this;

            return new Promise(function (resolve) {
              _this15._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "quitarReservaLibro"), datos).subscribe(function (resp) {
                if (resp.status == 'ok' && resp.token) {
                  Storage.set({
                    key: 'token',
                    value: resp.token
                  });
                }

                resolve(resp);
              });
            });
          } //Mostrar las librerias al pinchar en la card de la libreria

        }, {
          key: "mostrarLibrosPicharCard",
          value: function mostrarLibrosPicharCard(limit, libreriaPinchada) {
            var _this16 = this;

            var datos = {
              limite: limit,
              libreriaPinchadaCard: libreriaPinchada
            };
            return new Promise(function (resolve) {
              _this16._http.post("".concat(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].urlLibro, "mostrarLibrosPicharCard"), datos).subscribe(function (resp) {
                _this16.libroCardPinchada = resp.libro[0];
                resolve(resp);
              });
            });
          }
        }]);

        return LibroService;
      }();

      LibroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LibroService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LibroService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map