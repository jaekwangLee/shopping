"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category",{

/***/ "./src/containers/Header/Style.tsx":
/*!*****************************************!*\
  !*** ./src/containers/Header/Style.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Icon\": function() { return /* binding */ Icon; },\n/* harmony export */   \"PageHeaderContainer\": function() { return /* binding */ PageHeaderContainer; },\n/* harmony export */   \"CategoryContainer\": function() { return /* binding */ CategoryContainer; },\n/* harmony export */   \"CategoryWrapper\": function() { return /* binding */ CategoryWrapper; },\n/* harmony export */   \"CategoryTxt\": function() { return /* binding */ CategoryTxt; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/user/project/shopping/src/containers/Header/Style.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar CommonStyles = {\n  width: '1em',\n  height: '1em',\n  fontSize: '24px',\n  cursor: 'pointer'\n};\nvar Icon = function Icon(_ref) {\n  var IconComponent = _ref.IconComponent,\n      onClick = _ref.onClick,\n      style = _ref.style;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(IconComponent, {\n    style: style ? _objectSpread(_objectSpread({}, CommonStyles), style) : _objectSpread({}, CommonStyles),\n    onClick: onClick\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n_c = Icon;\nvar PageHeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Style__PageHeaderContainer\",\n  componentId: \"sc-zs2l4t-0\"\n})([\"width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;height:60px;padding-left:12px;padding-right:12px;@media (max-width:640px){height:50px;}\"]);\nvar CategoryContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(PageHeaderContainer).withConfig({\n  displayName: \"Style__CategoryContainer\",\n  componentId: \"sc-zs2l4t-1\"\n})([\"height:44px;@media (max-width:640px){height:40px;}\"]);\nvar CategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Style__CategoryWrapper\",\n  componentId: \"sc-zs2l4t-2\"\n})([\"height:100%;\"]);\nvar CategoryTxt = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.withConfig({\n  displayName: \"Style__CategoryTxt\",\n  componentId: \"sc-zs2l4t-3\"\n})([\"display:inline-block;height:100%;line-height:44px;font-weight:\", \";cursor:pointer;margin-bottom:0px;border-bottom:\", \";@media (max-width:640px){line-height:40px;}\"], function (_ref2) {\n  var active = _ref2.active;\n  return active ? 'bold' : 'normal';\n}, function (_ref3) {\n  var active = _ref3.active;\n  return active ? '1.5px solid green' : 0;\n});\n\nvar _c;\n\n$RefreshReg$(_c, \"Icon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9IZWFkZXIvU3R5bGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsWUFBWSxHQUFHO0FBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsS0FEVTtBQUVqQkMsRUFBQUEsTUFBTSxFQUFFLEtBRlM7QUFHakJDLEVBQUFBLFFBQVEsRUFBRSxNQUhPO0FBSWpCQyxFQUFBQSxNQUFNLEVBQUU7QUFKUyxDQUFyQjtBQU9PLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsTUFBR0MsYUFBSCxRQUFHQSxhQUFIO0FBQUEsTUFBa0JDLE9BQWxCLFFBQWtCQSxPQUFsQjtBQUFBLE1BQTJCQyxLQUEzQixRQUEyQkEsS0FBM0I7QUFBQSxzQkFDaEIsOERBQUMsYUFBRDtBQUFlLFNBQUssRUFBRUEsS0FBSyxtQ0FBUVIsWUFBUixHQUF5QlEsS0FBekIsc0JBQXdDUixZQUF4QyxDQUEzQjtBQUFtRixXQUFPLEVBQUVPO0FBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZ0I7QUFBQSxDQUFiO0tBQU1GO0FBSU4sSUFBTUksbUJBQW1CLEdBQUdWLHdFQUFIO0FBQUE7QUFBQTtBQUFBLDJMQUF6QjtBQWdCQSxJQUFNWSxpQkFBaUIsR0FBR1osNkRBQU0sQ0FBQ1UsbUJBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwREFBdkI7QUFRQSxJQUFNRyxlQUFlLEdBQUdiLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG9CQUFyQjtBQUlBLElBQU1jLFdBQVcsR0FBR2QseUVBQUg7QUFBQTtBQUFBO0FBQUEsMktBSUw7QUFBQSxNQUFHZ0IsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBdUNBLE1BQU0sR0FBRyxNQUFILEdBQVksUUFBekQ7QUFBQSxDQUpLLEVBUUg7QUFBQSxNQUFHQSxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUF1Q0EsTUFBTSxHQUFHLG1CQUFILEdBQXlCLENBQXRFO0FBQUEsQ0FSRyxDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9IZWFkZXIvU3R5bGUudHN4P2U1NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29tbW9uU3R5bGVzID0ge1xuICAgIHdpZHRoOiAnMWVtJyxcbiAgICBoZWlnaHQ6ICcxZW0nLFxuICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBJY29uID0gKHsgSWNvbkNvbXBvbmVudCwgb25DbGljaywgc3R5bGUgfTogeyBJY29uQ29tcG9uZW50OiBhbnk7IG9uQ2xpY2s/OiAoKSA9PiB2b2lkOyBzdHlsZT86IENTU1Byb3BlcnRpZXMgIH0pID0+IChcbiAgICA8SWNvbkNvbXBvbmVudCBzdHlsZT17c3R5bGUgPyB7IC4uLkNvbW1vblN0eWxlcywgLi4uc3R5bGUgfSA6IHsgLi4uQ29tbW9uU3R5bGVzIH19IG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4pXG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeUNvbnRhaW5lciA9IHN0eWxlZChQYWdlSGVhZGVyQ29udGFpbmVyKWBcbiAgICBoZWlnaHQ6IDQ0cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogMTAwJTtcbmA7XG4gICAgXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlUeHQgPSBzdHlsZWQuc3BhbmBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAkeyh7IGFjdGl2ZSB9OiB7IGFjdGl2ZT86IGJvb2xlYW47IH0pID0+IGFjdGl2ZSA/ICdib2xkJyA6ICdub3JtYWwnfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogJHsoeyBhY3RpdmUgfTogeyBhY3RpdmU/OiBib29sZWFuOyB9KSA9PiBhY3RpdmUgPyAnMS41cHggc29saWQgZ3JlZW4nIDogMH07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuYDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJDb21tb25TdHlsZXMiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiY3Vyc29yIiwiSWNvbiIsIkljb25Db21wb25lbnQiLCJvbkNsaWNrIiwic3R5bGUiLCJQYWdlSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwiQ2F0ZWdvcnlDb250YWluZXIiLCJDYXRlZ29yeVdyYXBwZXIiLCJDYXRlZ29yeVR4dCIsInNwYW4iLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Header/Style.tsx\n");

/***/ })

});