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

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"displayTodo\": () => (/* binding */ displayTodo),\n/* harmony export */   \"todos\": () => (/* binding */ todos),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n//this module with control CRUD for todos\r\n\r\nlet todos = [{ Name: \"test 1\", Due: \"test 2\", Desc: \"test 3\", Notes: \"test 4\", Priority: \"test 5\" }];\r\n\r\nconst createTodo = (name, dueDate, description, notes, priority) => {\r\n    let todo = {\r\n        Name: name,\r\n        Due: dueDate,\r\n        Desc: description,\r\n        Notes: notes,\r\n        Priority: priority,\r\n    };\r\n    todos.push(todo);\r\n\r\n    idElements(todos);\r\n};\r\n\r\nfunction idElements(todoArray) {\r\n    //adds id number to each item in the array\r\n    todos.forEach((element, index) => {\r\n        element.id = index + 1;\r\n    });\r\n}\r\n\r\nfunction updateTodo(id, todosArray, updateElement, updateValue) {\r\n    for (const obj of todosArray) {\r\n        if (obj.id === id) {\r\n            obj[updateElement] = updateValue;\r\n\r\n            break;\r\n        }\r\n    }\r\n}\r\n\r\nfunction displayTodo(todoArray) {\r\n    console.log(JSON.parse(JSON.stringify(todoArray)));\r\n    //will call DOM methods to display todos\r\n    //for now is just a console log\r\n}\r\n\r\nfunction deleteTodo(todosArray, id) {\r\n    todosArray.forEach((element, index) => {\r\n        if (element.id === id) {\r\n            todosArray.splice(index, 1);\r\n        }\r\n    });\r\n\r\n    idElements(todos);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\"Finish todo\", \"1/1/2022\", \"test description\", \"test note\", \"high\");\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\"Get rich\", \"1/30/2023\", \"test description\", \"test note\", \"high\");\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\"Die trying\", \"1/30/2023\", \"test description\", \"test note\", \"low\");\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(1, _Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos, \"Name\", \"Finish Top\");\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(3, _Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos, \"Priority\", \"Medium\");\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos, 4);\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos, 1);\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.displayTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;