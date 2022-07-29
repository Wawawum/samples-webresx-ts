/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact/contact_form.ts":
/*!*************************************!*\
  !*** ./src/contact/contact_form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onLoad\": () => (/* binding */ onLoad)\n/* harmony export */ });\nvar onLoad = function (executionContext) {\r\n    var shuffledNumbers = 'test';\r\n    var formContext = executionContext.getFormContext();\r\n    formContext.ui.setFormNotification(\"Hello World! Here are some numbers: \".concat(shuffledNumbers), 'INFO', 'www_contact_form_notif');\r\n};\r\n\n\n//# sourceURL=webpack://WWW/./src/contact/contact_form.ts?");

/***/ }),

/***/ "./src/misc/misc.ts":
/*!**************************!*\
  !*** ./src/misc/misc.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onLoad\": () => (/* binding */ onLoad)\n/* harmony export */ });\nvar onLoad = function (executionContext) {\r\n    var formContext = executionContext.getFormContext();\r\n    formContext.ui.setFormNotification(\"Some generic message\", 'INFO', 'www_misc_form_notif');\r\n};\r\n\n\n//# sourceURL=webpack://WWW/./src/misc/misc.ts?");

/***/ }),

/***/ "./src/myApp.ts":
/*!**********************!*\
  !*** ./src/myApp.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MyApp\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _contact_contact_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact_form */ \"./src/contact/contact_form.ts\");\n/* harmony import */ var _misc_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/misc */ \"./src/misc/misc.ts\");\n\r\n\r\nvar MyApp = {\r\n    ContactForm: _contact_contact_form__WEBPACK_IMPORTED_MODULE_0__,\r\n    Misc: _misc_misc__WEBPACK_IMPORTED_MODULE_1__\r\n};\r\n\n\n//# sourceURL=webpack://WWW/./src/myApp.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/myApp.ts");
/******/ 	var __webpack_export_target__ = (WWW = typeof WWW === "undefined" ? {} : WWW);
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;