"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/api.js":
/*!***************************!*\
  !*** ./components/api.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common[\"x-api-key\"] = process.env.API_KEY;\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://fze32gkxpa.execute-api.eu-north-1.amazonaws.com/prod\",\n    timeout: 3000\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXBpLmpzIiwibWFwcGluZ3MiOiI7OztBQUEwQjtBQUUxQkEsNkNBQUtBLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUMsWUFBWSxHQUFHQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLE9BQU87QUFDaEUsTUFBTUMsTUFBTVAsNkNBQUtBLENBQUNRLE1BQU0sQ0FBQztJQUN2QkMsU0FBU0wsOERBQWdDO0lBQ3pDTyxTQUFTO0FBQ1g7QUFFQSwrREFBZUosR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwaS5qcz9hMmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWFwaS1rZXlcIl0gPSBwcm9jZXNzLmVudi5BUElfS0VZO1xuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0xJTkssXG4gIHRpbWVvdXQ6IDMwMDAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwicHJvY2VzcyIsImVudiIsIkFQSV9LRVkiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiTkVYVF9QVUJMSUNfQVBJX0xJTksiLCJ0aW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/api.js\n"));

/***/ })

});