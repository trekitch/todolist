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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nli {\\r\\n    list-style-type: none;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter {\\r\\n    padding: 20px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.content{\\r\\n    flex-grow: 1;\\r\\n    border: 1px solid #000;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.main {\\r\\n    border: 2px solid red;\\r\\n    flex-grow: 1;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n    width: 20%;\\r\\n    border: 2px solid green;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 30px;\\r\\n    padding: 2em 20px;\\r\\n}\\r\\n\\r\\n.sidebar  > div {\\r\\n    border: 2px solid black;\\r\\n    padding: 10px   ;\\r\\n}\\r\\n.main {\\r\\n    padding: 50px 200px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.projectsSec {\\r\\n    flex-grow: 1;\\r\\n}\\r\\n\\r\\n.projectsSec ul {\\r\\n    padding-left: 20px;\\r\\n}\\r\\n\\r\\n.todoItem {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    border-bottom:1px solid #000;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n.todoForm {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\ninput[type=text], textarea{\\r\\n    width: 100%;\\r\\n    padding: 5px 5px;\\r\\n    margin: 5px 0;\\r\\n    display: block;\\r\\n    border: 1px solid #ccc;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\n.buttonContainer {\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    gap: 20px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  color: black;\\r\\n  padding: 14px 20px;\\r\\n  margin: 8px 0;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  cursor: pointer;\\r\\n  flex-grow: 1;\\r\\n}\\r\\n\\r\\nbutton.cancel {\\r\\n    background-color: red;\\r\\n}\\r\\n\\r\\nbutton.submit {\\r\\n    background-color: greenyellow;\\r\\n}\\r\\n\\r\\n.details-title {\\r\\n    border-bottom: 1px solid black;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.todo-details {\\r\\n    margin-top: 10px;\\r\\n    border: 2px solid grey;\\r\\n    border-radius: 5px;\\r\\n    padding: 5px;\\r\\n    display: none;\\r\\n    \\r\\n}\\r\\n\\r\\n.title {\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n.detailsOfToDo {\\r\\n    display: grid;\\r\\n    grid-template-columns: 50% 50%;\\r\\n}\\r\\n\\r\\n.detailsOfToDo > * {\\r\\n    padding-bottom: 10px\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"todos\": () => (/* binding */ todos),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\n//this module with control CRUD for todos\r\n\r\nconst todos = [{ Name: \"test 1\", Due: \"test 2\", Desc: \"test 3\", Notes: \"test 4\", Priority: \"test 5\" }];\r\n\r\nconst createTodo = (name, dueDate, description, notes, priority) => {\r\n    let todo = {\r\n        Name: name,\r\n        Due: dueDate,\r\n        Desc: description,\r\n        Notes: notes,\r\n        Priority: priority,\r\n    };\r\n    todos.push(todo);\r\n\r\n    idElements(todos);\r\n};\r\n\r\nfunction idElements(todoArray) {\r\n    //adds id number to each item in the array\r\n    todoArray.forEach((element, index) => {\r\n        element.id = index + 1;\r\n    });\r\n}\r\n\r\nfunction updateTodo(id, todosArray, updateElement, updateValue) {\r\n    for (const obj of todosArray) {\r\n        if (obj.id === id) {\r\n            obj[updateElement] = updateValue;\r\n\r\n            break;\r\n        }\r\n    }\r\n}\r\n\r\nfunction deleteTodo(todosArray, id) {\r\n    todosArray.forEach((element, index) => {\r\n        if (element.id === id) {\r\n            todosArray.splice(index, 1);\r\n        }\r\n    });\r\n\r\n    idElements(todos);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/Todo.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateMain\": () => (/* binding */ updateMain)\n/* harmony export */ });\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n\r\n\r\nconst main = document.querySelector(\".main\");\r\n\r\nconst todoView = document.createElement(\"div\");\r\nconst addTodo = document.createElement(\"div\");\r\naddTodo.textContent = \"+ Add Todo\";\r\n\r\nfunction updateMain(todoArray) {\r\n    const inboxView = document.querySelector(\".inboxView\");\r\n    const todayView = document.querySelector(\".todayView\");\r\n    const mainHeader = document.createElement(\"h2\");\r\n\r\n    const formContainer = document.createElement(\"div\");\r\n    mainHeader.classList.add(\"main-header\");\r\n\r\n    inboxView.addEventListener(\"click\", () => {\r\n        main.textContent = \"\";\r\n        console.log(\"Clicked inboxView\");\r\n        mainHeader.textContent = \"Inbox\";\r\n        main.appendChild(mainHeader);\r\n        main.appendChild(todoView);\r\n        addTodoDom(todoArray);\r\n    });\r\n\r\n    todayView.addEventListener(\"click\", () => {\r\n        console.log(\"clicked todayView\");\r\n    });\r\n\r\n    addTodo.addEventListener(\"click\", () => {\r\n        formContainer.classList.add(\"todoForm\");\r\n        formContainer.innerHTML = `\r\n        <form action=\"\" class=\"\">\r\n        <input type=\"text\" name=\"todoName\" id=\"todoName\" placeholder=\"Title\"/>\r\n        <textarea name=\"todoDesc\" id=\"todoDesc\" cols=\"30\" rows=\"4\" placeholder=\"Description\"></textarea>\r\n        <textarea name=\"todoNotes\" id=\"todoNotes\" cols=\"30\" rows=\"2\" placeholder=\"Notes\"></textarea>\r\n        <input type=\"date\" name=\"dueDate\" id=\"dueDate\" />\r\n        <select name=\"priority\" id=\"priority\">\r\n            <option value=\"Low\">Low</option>\r\n            <option value=\"Mid\">Mid</option>\r\n            <option value=\"High\">High</option>\r\n            <option value=\"&#128293;&#128293;&#128293;\">&#128293;&#128293;&#128293;</option>\r\n        </select>\r\n        <div class=\"buttonContainer\">\r\n            <button class=\"submit\" type=\"button\">Submit</button>\r\n            <button class=\"cancel\" type=\"button\">Cancel</button>\r\n        </div>\r\n    </form>\r\n        `;\r\n        addTodo.style.display = \"none\";\r\n        todoView.append(formContainer);\r\n\r\n        const cancelForm = document.querySelector(\".cancel\");\r\n        cancelForm.addEventListener(\"click\", () => {\r\n            formContainer.innerHTML = \"\";\r\n            addTodo.style.display = \"block\";\r\n        });\r\n\r\n        const submitForm = document.querySelector(\".submit\");\r\n        submitForm.addEventListener(\"click\", () => {\r\n            const toDoName = document.getElementById(\"todoName\").value;\r\n            const toDoDate = document.getElementById(\"dueDate\").value;\r\n            const toDoPriority = document.getElementById(\"priority\").value;\r\n            const toDoDesc = document.getElementById(\"todoDesc\").value;\r\n            const toDoNotes = document.getElementById(\"todoNotes\").value;\r\n            (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(toDoName, toDoDate, toDoDesc, toDoNotes, toDoPriority);\r\n            addTodoDom(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n            addTodo.style.display = \"block\";\r\n        });\r\n    });\r\n}\r\n\r\nfunction addTodoDom(todoArray) {\r\n    todoView.innerHTML = \"\";\r\n    todoArray.forEach((element) => {\r\n        const todoContainer = document.createElement(\"div\");\r\n        todoContainer.classList.add(\"todoItem\");\r\n        const todoCheckbox = document.createElement(\"input\");\r\n        todoCheckbox.setAttribute(\"type\", \"checkbox\");\r\n        const todoTitle = document.createElement(\"p\");\r\n        todoTitle.textContent = element.Name;\r\n        const todoDueDate = document.createElement(\"p\");\r\n        todoDueDate.textContent = element.Due;\r\n        const todoPriority = document.createElement(\"p\");\r\n        todoPriority.textContent = element.Priority;\r\n        const todoRemove = document.createElement(\"p\");\r\n        todoRemove.textContent = \"Remove\";\r\n        todoRemove.classList.add(\"removeTodo\");\r\n\r\n        const todoDetailsContainer = document.createElement(\"div\");\r\n        const details = document.createElement(\"div\");\r\n        details.classList.add(\"todo-details\");\r\n        const detailsTitle = document.createElement(\"h3\");\r\n        detailsTitle.textContent = \"Details\";\r\n        detailsTitle.classList.add(\"details-title\");\r\n        const detailsName = document.createElement(\"p\");\r\n        detailsName.innerHTML = `<span class=\"title\">Name:</span> ${element.Name}`;\r\n        const detailsDesc = document.createElement(\"p\");\r\n        detailsDesc.innerHTML = `<span class=\"title\">Description:</span> ${element.Desc}`;\r\n        const detailsPriority = document.createElement(\"p\");\r\n        detailsPriority.innerHTML = `<span class=\"title\">Priority:</span> ${element.Priority}`;\r\n        const detailsNotes = document.createElement(\"p\");\r\n        detailsNotes.innerHTML = `<span class=\"title\">Notes:</span> ${element.Notes}`;\r\n        const detailsDate = document.createElement(\"p\");\r\n        detailsDate.innerHTML = `<span class=\"title\">Due Date:</span> ${element.Due}`;\r\n        details.append(detailsTitle, todoDetailsContainer);\r\n        todoDetailsContainer.append(detailsName, detailsDesc, detailsNotes, detailsDate, detailsPriority);\r\n        todoDetailsContainer.classList.add(\"detailsOfToDo\");\r\n\r\n        todoContainer.setAttribute(\"data-index\", element.id);\r\n\r\n        todoContainer.append(todoCheckbox, todoTitle, todoDueDate, todoPriority, todoRemove);\r\n\r\n        todoView.appendChild(todoContainer);\r\n        todoContainer.after(details);\r\n    });\r\n\r\n    todoView.appendChild(addTodo);\r\n\r\n    document.querySelectorAll(\".removeTodo\").forEach((todo) => {\r\n        todo.addEventListener(\"click\", (e) => {\r\n            const todoIndex = e.target.parentElement.getAttribute(\"data-index\");\r\n            console.log(todoIndex);\r\n            removeToDoDOM(todoIndex);\r\n        });\r\n    });\r\n\r\n    let coll = document.getElementsByClassName(\"todoItem\");\r\n\r\n    for (let i = 0; i < coll.length; i++) {\r\n        coll[i].addEventListener(\"click\", function (e) {\r\n            if (e.target.getAttribute(\"class\") !== \"todoItem\") return;\r\n            this.classList.toggle(\"active\");\r\n            let content = this.nextElementSibling;\r\n            if (content.style.display === \"grid\") {\r\n                console.log();\r\n                content.style.display = \"none\";\r\n            } else {\r\n                console.log(e.target);\r\n                content.style.display = \"grid\";\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nfunction removeToDoDOM(elementID) {\r\n    (0,_Todo_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos, parseInt(elementID));\r\n    addTodoDom(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n    console.log(_Todo_js__WEBPACK_IMPORTED_MODULE_0__.todos);\r\n}\r\n\r\nfunction displayTodoDetails() {}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ \"./src/Todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Finish todo\", \"1/1/2022\", \"test description\", \"test note\", \"high\");\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Get rich\", \"1/30/2023\", \"test description\", \"test note\", \"high\");\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(\"Die trying\", \"1/30/2023\", \"test description\", \"test note\", \"low\");\r\n\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(1, _Todo_js__WEBPACK_IMPORTED_MODULE_1__.todos, \"Name\", \"Finish Top\");\r\n(0,_Todo_js__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(3, _Todo_js__WEBPACK_IMPORTED_MODULE_1__.todos, \"Priority\", \"Medium\");\r\n\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"Test Project\");\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"Test Project 2\");\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"Test Project 3\");\r\n\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.addTodoToProject)(_Todo_js__WEBPACK_IMPORTED_MODULE_1__.todos, 1, _project_js__WEBPACK_IMPORTED_MODULE_2__.projects, 1);\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.addTodoToProject)(_Todo_js__WEBPACK_IMPORTED_MODULE_1__.todos, 0, _project_js__WEBPACK_IMPORTED_MODULE_2__.projects, 1);\r\n\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.displayProjectTodos)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects, 0);\r\n\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects, 1);\r\n\r\n(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);\r\n\r\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__.updateMain)(_Todo_js__WEBPACK_IMPORTED_MODULE_1__.todos);\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoToProject\": () => (/* binding */ addTodoToProject),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProjectTodos\": () => (/* binding */ displayProjectTodos),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"projects\": () => (/* binding */ projects)\n/* harmony export */ });\nconst projects = [];\r\n\r\nconst createProject = (name) => {\r\n    let project = {\r\n        Name: name,\r\n        Todos: [],\r\n    };\r\n\r\n    projects.push(project);\r\n\r\n    console.log(projects);\r\n\r\n    idProjects(projects);\r\n};\r\n\r\nfunction idProjects(projectArr) {\r\n    //adds id number to each item in the array\r\n    projectArr.forEach((element, index) => {\r\n        element.id = index + 1;\r\n    });\r\n}\r\n\r\nfunction addTodoToProject(todoArray, todoItemPosition, projectArray, projectId) {\r\n    const todoItem = todoArray[todoItemPosition];\r\n    //take a given todo and add it to a project\r\n    projectArray.forEach((project) => {\r\n        if (project.id === projectId) {\r\n            project.Todos.push(todoItem);\r\n        }\r\n    });\r\n}\r\n\r\nfunction displayProjects(projectArr) {\r\n    console.log(JSON.parse(JSON.stringify(projectArr)));\r\n}\r\n\r\nfunction displayProjectTodos(projectArr, arrayPosition) {\r\n    projectArr[arrayPosition].Todos.forEach((todo) => {\r\n        console.log(todo);\r\n    });\r\n}\r\n\r\nfunction deleteProject(projectArr, projectID) {\r\n    projectArr.forEach((element, index) => {\r\n        if (element.id === projectID) {\r\n            projectArr.splice(index, 1);\r\n        }\r\n    });\r\n\r\n    idProjects(projects);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/project.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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