/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name, description) {\n        this.name = name;\n        this.description = description;\n        this.incomplete = [];\n        this.complete = [];\n        this.tasksID = 0;\n    }\n\n    addTODO(TODO) {\n        this.incomplete.push(TODO);\n        this.tasksID++;\n    }\n\n    removeTODO(name) {\n        this.complete = this.complete.filter((item) => item.title !== name);\n        this.incomplete = this.incomplete.filter((item) => item.title !== name);\n    }\n\n    taskToggle(name) {\n        const task =\n            this.incomplete.find((i) => i.title === name) ||\n            this.complete.find((i) => i.title === name);\n        if (task.status) {\n            this.incomplete = this.incomplete.concat(TODO);\n            this.complete = this.complete.filter(\n                (item) => item.name !== task.title\n            );\n        } else {\n            this.complete = this.complete.concat(TODO);\n            this.incomplete = this.incomplete.filter(\n                (item) => item.name !== task.title\n            );\n        }\n        task.status = !task.status;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/TODO.js":
/*!*********************!*\
  !*** ./src/TODO.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TODO)\n/* harmony export */ });\nclass TODO {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.status = false;\n    }\n\n    toggleStatus() {\n        this.status = !this.status;\n    }\n\n    createComponent() {}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/TODO.js?");

/***/ }),

/***/ "./src/appModule.js":
/*!**************************!*\
  !*** ./src/appModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _TODO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TODO */ \"./src/TODO.js\");\n\n\n\nconst appModule = () => {\n    const projects = [];\n\n    const newProject = (name, description) => {\n        projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__.default(name, description));\n    };\n\n    const newTODO = (proj, title, description, dueDate, priority) => {\n        proj.addTODO(new _TODO__WEBPACK_IMPORTED_MODULE_1__.default(title, description, dueDate, priority));\n    };\n\n    const deleteTODO = (project, name) => {\n        project.removeTODO(name);\n    };\n\n    return {\n        projects,\n        newProject,\n        newTODO,\n        deleteTODO,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appModule);\n\n\n//# sourceURL=webpack://todo-list/./src/appModule.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appModule.js");
/******/ 	
/******/ })()
;