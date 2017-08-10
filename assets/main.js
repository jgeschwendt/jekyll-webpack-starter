/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/main/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main__ = __webpack_require__("./modules/main/main.js");


new __WEBPACK_IMPORTED_MODULE_0__main__["a" /* default */]();

if (false) {
  module.hot.accept('./main', function () {
    new Main();
  });
}

/***/ }),

/***/ "./modules/main/index.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n$link-hover-color:      darken($link-color, 15%) !default;\n                       ^\n      Argument `$color` of `darken($color, $amount)` must be a color\n\nBacktrace:\n\tnode_modules/bootstrap/scss/_variables.scss:167, in function `darken`\n\tnode_modules/bootstrap/scss/_variables.scss:167\n      in /code/_assets/node_modules/bootstrap/scss/_variables.scss (line 167, column 25)\n    at runLoaders (/code/_assets/node_modules/webpack/lib/NormalModule.js:194:19)\n    at /code/_assets/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /code/_assets/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/code/_assets/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/code/_assets/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/code/_assets/node_modules/sass-loader/node_modules/async/dist/async.js:2243:31)\n    at Object.callback (/code/_assets/node_modules/sass-loader/node_modules/async/dist/async.js:906:16)\n    at options.error (/code/_assets/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./modules/main/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  console.log('hello world');
};

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./modules/main/index.js");
module.exports = __webpack_require__("./modules/main/index.scss");


/***/ })

/******/ });