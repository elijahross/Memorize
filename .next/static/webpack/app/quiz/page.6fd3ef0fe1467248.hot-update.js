"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-pages-browser)/./app/quiz/page.js":
/*!**************************!*\
  !*** ./app/quiz/page.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/api */ \"(app-pages-browser)/./components/api.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link.js */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link_js__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = ()=>{\n    _s();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lmnt, setLmnt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [card, setCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [length, setLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const getOptions = async ()=>{\n        try {\n            const skip = 0;\n            const limit = 20;\n            const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/stacks\", skip, limit);\n            let array = [];\n            for(let i in response.data.stacks){\n                array = array.concat(response.data.stacks[i].stackId);\n            }\n            const result = [\n                ...new Set(array)\n            ];\n            setOptions(result);\n            showCards(result[0]);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getOptions();\n    }, []);\n    const handleChange = async (e)=>{\n        let flow = showCards(e.target.value);\n        setLmnt(flow);\n        setToggle(false);\n    };\n    const showCards = async (query)=>{\n        const value = \"/stack?:stackId=\".concat(query);\n        const response = await _components_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(value);\n        const array = response.data.cards;\n        const mix = array.sort(()=>{\n            return 0.5 - Math.random();\n        });\n        setLmnt(mix);\n        setCard(mix[0]);\n        return card;\n    };\n    const previousCard = ()=>{\n        if (length >= 1) {\n            setToggle(false);\n            setCard(lmnt[length - 1]);\n            setLength(length - 1);\n        } else {}\n    };\n    const nextCard = ()=>{\n        if (length <= lmnt.length - 2) {\n            setToggle(false);\n            setCard(lmnt[length + 1]);\n            setLength(length + 1);\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col h-screen w-screen justify-between font-mono text-sm md:p-20 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full py-4 px-8 flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link_js__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    className: \"justify-self-start flex btn\",\n                    children: \" Back \"\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center p-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row standart_style mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-mono mr-4 \",\n                                children: \"Choose Stack:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"stackId\",\n                                className: \"bg-transparent font-mono cursor-pointer\",\n                                defaultValue: \"default\",\n                                onChange: handleChange,\n                                children: options.map((l)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: l,\n                                        children: l\n                                    }, l, false, {\n                                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 37\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"align-top items-start bm-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n                            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading feed...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 86,\n                                columnNumber: 33\n                            }, void 0),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"standart_style min-h-[240px] min-w-[360px] max-w-[360px] text-center self-center\",\n                                children: !toggle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: card.cardId\n                                }, void 0, false, {\n                                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 32\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        card.cardId,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 71\n                                        }, undefined),\n                                        \" - \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 79\n                                        }, undefined),\n                                        card.description\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 55\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                                lineNumber: 87,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex sm:flex-row flex-col justify-between w-full px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn flex\",\n                        onClick: previousCard,\n                        children: \"Previous Card\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn flex\",\n                        onClick: ()=>setToggle((prevState)=>!prevState),\n                        children: \"Show Card\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn flex\",\n                        onClick: nextCard,\n                        children: \"Next Card\"\n                    }, void 0, false, {\n                        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/quiz/page.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"NvNY8pAlQBkb497gzpju8YmZvj0=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbkQsOERBQUNSO3dCQUFJRCxXQUFVO2tDQUNYLDRFQUFDNUMsMkNBQVFBOzRCQUFDdUQsd0JBQVUsOERBQUNDOzBDQUFFOzs7Ozs7c0NBQ25CLDRFQUFDWDtnQ0FBSUQsV0FBWTswQ0FDWixDQUFDakMsdUJBQVMsOERBQUM2Qzs4Q0FBR2pELEtBQUtrRCxNQUFNOzs7Ozs4REFBUSw4REFBQ0Q7O3dDQUFHakQsS0FBS2tELE1BQU07c0RBQUMsOERBQUNDOzs7Ozt3Q0FBSTtzREFBRyw4REFBQ0E7Ozs7O3dDQUFLbkQsS0FBS29ELFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzVGLDhEQUFDZDtnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVO3dCQUFXZ0IsU0FBU25CO2tDQUFjOzs7Ozs7a0NBQ2pELDhEQUFDSTt3QkFBSUQsV0FBVTt3QkFBV2dCLFNBQVMsSUFBTWhELFVBQVVpRCxDQUFBQSxZQUFhLENBQUNBO2tDQUFZOzs7Ozs7a0NBQzdFLDhEQUFDaEI7d0JBQUlELFdBQVU7d0JBQVdnQixTQUFTbEI7a0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtHQTNGTXhDO0FBNkZOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L3BhZ2UuanM/ZjAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBhcGkgZnJvbSAnQC9jb21wb25lbnRzL2FwaSdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsuanMnXG5cblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbmNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFtdKVxuY29uc3QgW2xtbnQsIHNldExtbnRdID0gdXNlU3RhdGUoW10pXG5jb25zdCBbY2FyZCwgc2V0Q2FyZF0gPSB1c2VTdGF0ZShbXSlcbmNvbnN0IFtsZW5ndGgsIHNldExlbmd0aF0gPSB1c2VTdGF0ZSgwKVxuY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5jb25zdCBnZXRPcHRpb25zID0gYXN5bmMoKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBza2lwID0gMFxuICAgICAgICBjb25zdCBsaW1pdCA9IDIwXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnL3N0YWNrcycsIHNraXAsIGxpbWl0KVxuICAgICAgICBsZXQgYXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpIGluIHJlc3BvbnNlLmRhdGEuc3RhY2tzKSB7YXJyYXk9IGFycmF5LmNvbmNhdChyZXNwb25zZS5kYXRhLnN0YWNrc1tpXS5zdGFja0lkKX1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gWy4uLm5ldyBTZXQoYXJyYXkpXTtcbiAgICAgICAgc2V0T3B0aW9ucyhyZXN1bHQpO1xuICAgICAgICBzaG93Q2FyZHMocmVzdWx0WzBdKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG51c2VFZmZlY3QoKCkgPT57XG4gICAgZ2V0T3B0aW9ucygpO1xufSwgW10pXG5cbmNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jKGUpID0+IHtcbiAgICBsZXQgZmxvdyA9IHNob3dDYXJkcyhlLnRhcmdldC52YWx1ZSlcbiAgICBzZXRMbW50KGZsb3cpXG4gICAgc2V0VG9nZ2xlKGZhbHNlKVxufVxuXG5jb25zdCBzaG93Q2FyZHMgPSBhc3luYyhxdWVyeSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gYC9zdGFjaz86c3RhY2tJZD0ke3F1ZXJ5fWBcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQodmFsdWUpXG4gICAgY29uc3QgYXJyYXkgPSByZXNwb25zZS5kYXRhLmNhcmRzXG4gICAgY29uc3QgbWl4ID0gYXJyYXkuc29ydCgoKSA9PiB7cmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCl9KVxuICAgIHNldExtbnQobWl4KVxuICAgIHNldENhcmQobWl4WzBdKVxuICAgIHJldHVybiBjYXJkfVxuICAgIFxuY29uc3QgcHJldmlvdXNDYXJkID0gKCkgPT4ge1xuICAgIGlmIChsZW5ndGggPj0gMSkge1xuICAgIHNldFRvZ2dsZShmYWxzZSlcbiAgICBzZXRDYXJkKGxtbnRbbGVuZ3RoLTFdKVxuICAgIHNldExlbmd0aChsZW5ndGggLSAxKX1cbiAgICBlbHNlIHtcblxuICAgIH1cblxufVxuXG5jb25zdCBuZXh0Q2FyZCA9ICgpID0+IHtcbiAgICBpZiAobGVuZ3RoIDw9IChsbW50Lmxlbmd0aC0yKSkge1xuICAgIHNldFRvZ2dsZShmYWxzZSlcbiAgICBzZXRDYXJkKGxtbnRbbGVuZ3RoICsgMV0pXG4gICAgc2V0TGVuZ3RoKGxlbmd0aCArIDEpfVxuICAgIGVsc2Uge1xuXG4gICAgfVxufVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LXNjcmVlbiBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbWQ6cC0yMCBwLTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgcHktNCBweC04IGZsZXgnPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSdqdXN0aWZ5LXNlbGYtc3RhcnQgZmxleCBidG4nPiBCYWNrIDwvTGluaz4gIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMTAgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgc3RhbmRhcnRfc3R5bGUgbWItMTAnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1tb25vIG1yLTQgJz5cbiAgICAgICAgICAgIENob29zZSBTdGFjazpcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9e1wic3RhY2tJZFwifSBjbGFzc05hbWU9J2JnLXRyYW5zcGFyZW50IGZvbnQtbW9ubyBjdXJzb3ItcG9pbnRlcicgZGVmYXVsdFZhbHVlPVwiZGVmYXVsdFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgobCkgPT4gPG9wdGlvbiB2YWx1ZT17bH0ga2V5PXtsfT57bH08L29wdGlvbj4pfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24tdG9wIGl0ZW1zLXN0YXJ0IGJtLTEwJz5cbiAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+TG9hZGluZyBmZWVkLi4uPC9wPn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdGFuZGFydF9zdHlsZSBtaW4taC1bMjQwcHhdIG1pbi13LVszNjBweF0gbWF4LXctWzM2MHB4XSB0ZXh0LWNlbnRlciBzZWxmLWNlbnRlcmB9PlxuICAgICAgICAgICAgICAgICAgICB7IXRvZ2dsZSA/IDxwPntjYXJkLmNhcmRJZH08L3A+IDogPHA+e2NhcmQuY2FyZElkfTxici8+IC0gPGJyLz57Y2FyZC5kZXNjcmlwdGlvbn08L3A+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzbTpmbGV4LXJvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHB4LTgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0biBmbGV4JyBvbkNsaWNrPXtwcmV2aW91c0NhcmR9PlByZXZpb3VzIENhcmQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4gZmxleCcgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKX0+U2hvdyBDYXJkPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuIGZsZXgnIG9uQ2xpY2s9e25leHRDYXJkfT5OZXh0IENhcmQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImFwaSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3VzcGVuc2UiLCJMaW5rIiwicGFnZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibG1udCIsInNldExtbnQiLCJjYXJkIiwic2V0Q2FyZCIsImxlbmd0aCIsInNldExlbmd0aCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImdldE9wdGlvbnMiLCJza2lwIiwibGltaXQiLCJyZXNwb25zZSIsImdldCIsImFycmF5IiwiaSIsImRhdGEiLCJzdGFja3MiLCJjb25jYXQiLCJzdGFja0lkIiwicmVzdWx0IiwiU2V0Iiwic2hvd0NhcmRzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImUiLCJmbG93IiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsImNhcmRzIiwibWl4Iiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJwcmV2aW91c0NhcmQiLCJuZXh0Q2FyZCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwiaDEiLCJzZWxlY3QiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJtYXAiLCJsIiwib3B0aW9uIiwiZmFsbGJhY2siLCJwIiwiY2FyZElkIiwiYnIiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJwcmV2U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/quiz/page.js\n"));

/***/ })

});