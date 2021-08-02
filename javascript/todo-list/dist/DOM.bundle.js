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

/***/ "./src/DOM.css":
/*!*********************!*\
  !*** ./src/DOM.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.css?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.css */ \"./src/DOM.css\");\n/* harmony import */ var _appModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appModule */ \"./src/appModule.js\");\n/* harmony import */ var _TODO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TODO */ \"./src/TODO.js\");\n/*\n- Title and NavBar static components: render once\n\n- Project bar on the left\n    - Add new project fields on top\n    - Re-render on adding new project\n\n- ToDo list on the right\n    - Add new TODO fields on top\n    - Re-render on adding new TODO\n    - Incomplete TODOs on top\n    - Complete in bottom\n    - OnClick TODO -> Show/Edit Details or Delete\n*/\n\n\n\n\n\n// Helpers\nconst appLogic = (0,_appModule__WEBPACK_IMPORTED_MODULE_1__.default)();\nlet selectedProject = \"Default\";\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\n\nconst projectsList = document.querySelector(\".projects-list\");\n\nconst renderProjects = () => {\n    console.log(\"Rendering\");\n    removeAllChildNodes(projectsList);\n    for (let x of appLogic.projects) {\n        let projectName = x.name;\n        let projectDesc = x.description;\n\n        let listItem = document.createElement(\"li\");\n        listItem.classList.add(\"card\");\n        projectsList.appendChild(listItem);\n\n        let outerDiv = document.createElement(\"div\");\n        outerDiv.classList.add(\n            \"card-body\",\n            \"text-white\",\n            `${projectName === selectedProject ? \"bg-primary\" : \"bg-dark\"}`,\n            \"rounded\",\n            \"darken-selected\",\n            \"project-item\"\n        );\n        listItem.appendChild(outerDiv);\n\n        let heading = document.createElement(\"h4\");\n        heading.textContent = projectName;\n        heading.classList.add(\"card-title\", \"text-white\");\n        outerDiv.appendChild(heading);\n\n        let subtitle = document.createElement(\"h5\");\n        subtitle.textContent = projectDesc;\n        subtitle.classList.add(\"card-subtitle\", \"text-light\", \"sub-head\");\n        outerDiv.appendChild(subtitle);\n\n        if (projectName.toLowerCase() != \"default\") {\n            let delButton = document.createElement(\"button\");\n            delButton.textContent = \"X\";\n            delButton.classList.add(\"project-delete-btn\");\n\n            delButton.addEventListener(\"click\", (e) => {\n                e.stopPropagation();\n                e.preventDefault();\n                appLogic.projects = appLogic.projects.filter(\n                    (p) => p.name !== projectName\n                );\n                renderProjects();\n            });\n\n            subtitle.appendChild(delButton);\n        }\n    }\n};\n\nconst incompleteList = document.querySelector(\".incomplete-list\");\nconst completeList = document.querySelector(\".complete-list\");\n\nconst renderTasks = () => {\n    console.log(\"Tasks rendering..\");\n    removeAllChildNodes(incompleteList);\n    removeAllChildNodes(completeList);\n\n    let proj = appLogic.projects.find((item) => item.name === selectedProject);\n    for (let x of proj.incomplete) {\n        let taskName = x.title;\n        let taskDesc = x.description;\n        let taskTime = x.dueDate;\n\n        let listItem = document.createElement(\"li\");\n        listItem.classList.add(\"card\");\n        incompleteList.appendChild(listItem);\n\n        let outerDiv = document.createElement(\"div\");\n        outerDiv.classList.add(\n            \"card-body\",\n            \"text-white\",\n            `${\n                x.priority > 7\n                    ? \"bg-danger\"\n                    : x.priority > 3\n                    ? \"bg-warning\"\n                    : \"bg-success\"\n            }`,\n            \"rounded\"\n        );\n\n        listItem.appendChild(outerDiv);\n\n        let heading = document.createElement(\"h4\");\n        heading.textContent = taskName;\n        heading.classList.add(\"card-title\", \"text-white\");\n        outerDiv.appendChild(heading);\n\n        let subtitle = document.createElement(\"h5\");\n        subtitle.textContent = `${taskDesc}, by ${taskTime}`;\n        subtitle.classList.add(\"card-subtitle\", \"text-light\");\n        outerDiv.appendChild(subtitle);\n\n        let delButton = document.createElement(\"button\");\n        delButton.textContent = \"X\";\n        delButton.classList.add(\"todo-delete-btn\");\n\n        delButton.addEventListener(\"click\", (e) => {\n            e.stopPropagation();\n            e.preventDefault();\n            proj.incomplete = proj.incomplete.filter(\n                (t) => t.title !== taskName\n            );\n            renderTasks();\n        });\n        subtitle.appendChild(delButton);\n\n        let tickButton = document.createElement(\"button\");\n        tickButton.textContent = \"✓\";\n        tickButton.classList.add(\"todo-tick-btn\");\n        let checkmark = document.createElement(\"i\");\n        checkmark.classList.add(\"bi\", \"bi-check\");\n        tickButton.appendChild(checkmark);\n\n        tickButton.addEventListener(\"click\", (e) => {\n            e.stopPropagation();\n            e.preventDefault();\n            proj.taskToggle(taskName);\n            renderTasks();\n        });\n\n        subtitle.appendChild(tickButton);\n    }\n\n    for (let x of proj.complete) {\n        let taskName = x.title;\n        let taskDesc = x.description;\n        let taskTime = x.dueDate;\n\n        let listItem = document.createElement(\"li\");\n        listItem.classList.add(\"card\");\n        completeList.appendChild(listItem);\n\n        let outerDiv = document.createElement(\"div\");\n        outerDiv.classList.add(\n            \"card-body\",\n            \"text-white\",\n            \"bg-secondary\",\n            \"rounded\"\n        );\n\n        listItem.appendChild(outerDiv);\n\n        let heading = document.createElement(\"h4\");\n        heading.textContent = taskName;\n        heading.classList.add(\"card-title\", \"text-white\");\n        outerDiv.appendChild(heading);\n\n        let subtitle = document.createElement(\"h5\");\n        subtitle.textContent = `${taskDesc} by ${taskTime}`;\n        subtitle.classList.add(\"card-subtitle\", \"text-light\");\n        outerDiv.appendChild(subtitle);\n    }\n};\n\n// appLogic.newProject(\"Default\", \"First Project\");\n\nconst addTODO = (title, description, dueDate, priority) => {\n    let proj = appLogic.projects.find((item) => item.name === selectedProject);\n    appLogic.newTODO(proj, title, description, dueDate, priority);\n};\n\n// addTODO(\"Gym\", \"Workout\", \"12PM\", 10);\n// addTODO(\"Study\", \"Math\", \"2PM\", 6);\n// addTODO(\"Code\", \"JavaScript\", \"3PM\", 2);\n// appLogic.projects\n//     .find((item) => item.name === \"Default\")\n//     .complete.push(new TODO(\"Grocery\", \"Freshco\", \"10AM\", 10));\n\n// appLogic.newProject(\"School\", \"York University\");\n// addTODO(\"Sleep\", \"Duh?\", \"10PM\", 3);\n\n// appLogic.projects\n//     .find((item) => item.name === \"School\")\n//     .complete.push(new TODO(\"Gym\", \"Workout\", \"12AM\", 10));\n\n// appLogic.newProject(\"Work\", \"Deloitte\");\nrenderProjects();\nrenderTasks();\n\nconst eventListeners = (() => {\n    projectsList.addEventListener(\"click\", (e) => {\n        if (e.target.tagName === \"DIV\") {\n            selectedProject = e.target.firstChild.textContent;\n            renderTasks();\n        }\n        renderProjects();\n    });\n\n    document.querySelector(\".add-project\").addEventListener(\"click\", (e) => {\n        e.preventDefault();\n\n        if (\n            !!document.querySelector(\"#new-project\").value &&\n            !!document.querySelector(\"#new-project-desc\").value\n        )\n            appLogic.newProject(\n                document.querySelector(\"#new-project\").value,\n                document.querySelector(\"#new-project-desc\").value\n            );\n        renderProjects();\n    });\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/DOM.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name, description) {\n        this.name = name;\n        this.description = description;\n        this.incomplete = [];\n        this.complete = [];\n        this.tasksID = 0;\n    }\n\n    addTODO(TODO) {\n        this.incomplete.push(TODO);\n        this.tasksID++;\n\n        this.incomplete.sort((a, b) => {\n            return b.priority - a.priority;\n        });\n    }\n\n    removeTODO(name) {\n        this.complete = this.complete.filter((item) => item.title !== name);\n        this.incomplete = this.incomplete.filter((item) => item.title !== name);\n    }\n\n    taskToggle(name) {\n        const task =\n            this.incomplete.find((i) => i.title === name) ||\n            this.complete.find((i) => i.title === name);\n        if (task.status) {\n            this.incomplete = this.incomplete.concat(task);\n            this.complete = this.complete.filter(\n                (item) => item.title !== task.title\n            );\n        } else {\n            this.complete = this.complete.concat(task);\n            this.incomplete = this.incomplete.filter(\n                (item) => item.title !== task.title\n            );\n        }\n        task.status = !task.status;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _TODO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TODO */ \"./src/TODO.js\");\n\n\n\nconst appModule = () => {\n    let projects = JSON.parse(localStorage.getItem(\"projects\")) || [\n        {\n            name: \"Default\",\n            description: \"First Project\",\n            incomplete: [],\n            complete: [],\n            tasksID: 0,\n        },\n    ];\n    // let projects = [];\n\n    console.log(localStorage.getItem(\"projects\"));\n\n    const updateLocalStorage = () => {\n        localStorage.setItem(\"projects\", JSON.stringify(projects));\n    };\n\n    const newProject = (name, description) => {\n        projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__.default(name, description));\n        updateLocalStorage();\n    };\n\n    const removeProject = (pname) => {\n        projects = projects.filter((p) => p.name !== pname);\n        // updateLocalStorage();\n    };\n\n    const newTODO = (proj, title, description, dueDate, priority) => {\n        proj.addTODO(new _TODO__WEBPACK_IMPORTED_MODULE_1__.default(title, description, dueDate, priority));\n        // updateLocalStorage();\n    };\n\n    const deleteTODO = (project, name) => {\n        project.removeTODO(name);\n        // updateLocalStorage();\n    };\n\n    return {\n        projects,\n        removeProject,\n        newProject,\n        newTODO,\n        deleteTODO,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appModule);\n\n\n//# sourceURL=webpack://todo-list/./src/appModule.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/DOM.js");
/******/ 	
/******/ })()
;