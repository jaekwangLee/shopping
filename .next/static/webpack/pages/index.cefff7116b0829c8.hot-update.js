"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/apis/product.ts":
/*!*****************************!*\
  !*** ./src/apis/product.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductModel\": function() { return /* binding */ ProductModel; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar ProductModel = function ProductModel() {\n  (0,_Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ProductModel);\n\n  (0,_Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"fetchItemList\", /*#__PURE__*/function () {\n    var _ref = (0,_Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(page) {\n      var list;\n      return _Users_user_project_shopping_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              list = new Array(100).fill(0).slice(page * 10, (page + 1) * 10).map(function (item, index) {\n                return {\n                  item_no: \"no_\".concat(index),\n                  name: 'ITEMIC',\n                  photo: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140717_90%2Fjulian1366_14055529390144dAAh_JPEG%2F6969e0890c2b9f80db71a8ab2779e52f.jpg&type=a340',\n                  discountPer: index % 4 === 0 ? 50 : 0,\n                  discountedPrice: index % 4 === 0 ? 100 * (index + 1) / 2 : 0,\n                  price: 100 * (index + 1),\n                  isSale: index % 4 === 0,\n                  isNew: index % 5 === 0,\n                  description: 'THIS IS SPARTA. (JUST SAMPLE'\n                };\n              });\n              return _context.abrupt(\"return\", {\n                status: 'success',\n                data: list\n              });\n\n            case 5:\n              _context.prev = 5;\n              _context.t0 = _context[\"catch\"](0);\n              console.log('fetch list error: ', _context.t0);\n              return _context.abrupt(\"return\", {\n                status: 'failed',\n                data: 'error'\n              });\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 5]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpcy9wcm9kdWN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT08sSUFBTUEsWUFBYjtBQUFBOztBQUFBO0FBQUEsa1RBQzJCLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVRDLGNBQUFBLElBRlMsR0FFRixJQUFJQyxLQUFKLENBQVUsR0FBVixFQUFlQyxJQUFmLENBQW9CLENBQXBCLEVBQXVCQyxLQUF2QixDQUE2QkosSUFBSSxHQUFHLEVBQXBDLEVBQXdDLENBQUNBLElBQUksR0FBRyxDQUFSLElBQWEsRUFBckQsRUFBeURLLEdBQXpELENBQTZELFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLHVCQUFrQjtBQUN4RkMsa0JBQUFBLE9BQU8sZUFBU0QsS0FBVCxDQURpRjtBQUV4RkUsa0JBQUFBLElBQUksRUFBRSxRQUZrRjtBQUd4RkMsa0JBQUFBLEtBQUssRUFBRSw2S0FIaUY7QUFJeEZDLGtCQUFBQSxXQUFXLEVBQUVKLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixFQUFsQixHQUF1QixDQUpvRDtBQUt4Rkssa0JBQUFBLGVBQWUsRUFBRUwsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQW1CLE9BQU9BLEtBQUssR0FBRyxDQUFmLENBQUQsR0FBb0IsQ0FBdEMsR0FBMEMsQ0FMNkI7QUFNeEZNLGtCQUFBQSxLQUFLLEVBQUUsT0FBT04sS0FBSyxHQUFHLENBQWYsQ0FOaUY7QUFPeEZPLGtCQUFBQSxNQUFNLEVBQUVQLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FQa0U7QUFReEZRLGtCQUFBQSxLQUFLLEVBQUVSLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FSbUU7QUFTeEZTLGtCQUFBQSxXQUFXLEVBQUU7QUFUMkUsaUJBQWxCO0FBQUEsZUFBN0QsQ0FGRTtBQUFBLCtDQWFSO0FBQUVDLGdCQUFBQSxNQUFNLEVBQUUsU0FBVjtBQUFxQkMsZ0JBQUFBLElBQUksRUFBRWpCO0FBQTNCLGVBYlE7O0FBQUE7QUFBQTtBQUFBO0FBZWZrQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQWZlLCtDQWdCUjtBQUFFSCxnQkFBQUEsTUFBTSxFQUFFLFFBQVY7QUFBb0JDLGdCQUFBQSxJQUFJLEVBQUU7QUFBMUIsZUFoQlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpcy9wcm9kdWN0LnRzPzUyNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ0BsaWJzL2NvcmUvYXhpb3MnO1xuXG50eXBlIFJlc3BvbnNlID0ge1xuICAgIHN0YXR1czogJ2ZhaWxlZCcgfCAnc3VjY2Vzcyc7XG4gICAgZGF0YTogYW55XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kZWwge1xuICAgIHB1YmxpYyBmZXRjaEl0ZW1MaXN0ID0gYXN5bmMgKHBhZ2U6IG51bWJlcik6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBuZXcgQXJyYXkoMTAwKS5maWxsKDApLnNsaWNlKHBhZ2UgKiAxMCwgKHBhZ2UgKyAxKSAqIDEwKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgIGl0ZW1fbm86IGBub18keyBpbmRleH1gLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJVEVNSUMnLFxuICAgICAgICAgICAgICAgIHBob3RvOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkYyMDE0MDcxN185MCUyRmp1bGlhbjEzNjZfMTQwNTU1MjkzOTAxNDRkQUFoX0pQRUclMkY2OTY5ZTA4OTBjMmI5ZjgwZGI3MWE4YWIyNzc5ZTUyZi5qcGcmdHlwZT1hMzQwJyxcbiAgICAgICAgICAgICAgICBkaXNjb3VudFBlcjogaW5kZXggJSA0ID09PSAwID8gNTAgOiAwLFxuICAgICAgICAgICAgICAgIGRpc2NvdW50ZWRQcmljZTogaW5kZXggJSA0ID09PSAwID8gKDEwMCAqIChpbmRleCArIDEpKS8yIDogMCxcbiAgICAgICAgICAgICAgICBwcmljZTogMTAwICogKGluZGV4ICsgMSksXG4gICAgICAgICAgICAgICAgaXNTYWxlOiBpbmRleCAlIDQgPT09IDAsXG4gICAgICAgICAgICAgICAgaXNOZXc6IGluZGV4ICUgNSA9PT0gMCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RISVMgSVMgU1BBUlRBLiAoSlVTVCBTQU1QTEUnXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBkYXRhOiBsaXN0IH07XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBsaXN0IGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdmYWlsZWQnLCBkYXRhOiAnZXJyb3InIH07XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIlByb2R1Y3RNb2RlbCIsInBhZ2UiLCJsaXN0IiwiQXJyYXkiLCJmaWxsIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpdGVtX25vIiwibmFtZSIsInBob3RvIiwiZGlzY291bnRQZXIiLCJkaXNjb3VudGVkUHJpY2UiLCJwcmljZSIsImlzU2FsZSIsImlzTmV3IiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apis/product.ts\n");

/***/ })

});