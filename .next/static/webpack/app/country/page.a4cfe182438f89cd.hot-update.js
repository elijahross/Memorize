"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/country/page",{

/***/ "(app-pages-browser)/./app/country/page.js":
/*!*****************************!*\
  !*** ./app/country/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst dat = [\n    {\n        \"United Kingdom\": \"London\",\n        \"France\": \"Paris\",\n        \"Germany\": \"Berlin\",\n        \"Japan\": \"Tokyo\",\n        \"India\": \"New Delhi\",\n        \"Brazil\": \"Bras\\xedlia\",\n        \"Australia\": \"Canberra\",\n        \"South Africa\": \"Pretoria\",\n        \"Canada\": \"Ottawa\"\n    },\n    {\n        \"Italy\": \"Rome\",\n        \"Spain\": \"Madrid\",\n        \"China\": \"Beijing\",\n        \"Russia\": \"Moscow\",\n        \"Mexico\": \"Mexico City\",\n        \"South Korea\": \"Seoul\",\n        \"Argentina\": \"Buenos Aires\",\n        \"Turkey\": \"Ankara\",\n        \"Egypt\": \"Cairo\",\n        \"Nigeria\": \"Abuja\"\n    },\n    {\n        \"Indonesia\": \"Jakarta\",\n        \"Canada\": \"Ottawa\",\n        \"Saudi Arabia\": \"Riyadh\",\n        \"Australia\": \"Canberra\",\n        \"Netherlands\": \"Amsterdam\",\n        \"Switzerland\": \"Bern\",\n        \"Thailand\": \"Bangkok\",\n        \"Sweden\": \"Stockholm\",\n        \"Greece\": \"Athens\",\n        \"Norway\": \"Oslo\"\n    },\n    {\n        \"Brazil\": \"Bras\\xedlia\",\n        \"South Africa\": \"Pretoria\",\n        \"Portugal\": \"Lisbon\",\n        \"Vietnam\": \"Hanoi\",\n        \"Ireland\": \"Dublin\",\n        \"Peru\": \"Lima\",\n        \"Iran\": \"Tehran\",\n        \"New Zealand\": \"Wellington\",\n        \"Czech Republic\": \"Prague\",\n        \"Belgium\": \"Brussels\"\n    },\n    {\n        \"Austria\": \"Vienna\",\n        \"Denmark\": \"Copenhagen\",\n        \"Finland\": \"Helsinki\",\n        \"Hungary\": \"Budapest\",\n        \"Poland\": \"Warsaw\",\n        \"Singapore\": \"Singapore\",\n        \"Chile\": \"Santiago\",\n        \"Malaysia\": \"Kuala Lumpur\",\n        \"Romania\": \"Bucharest\",\n        \"South Korea\": \"Seoul\"\n    },\n    {\n        \"Netherlands\": \"Amsterdam\",\n        \"Switzerland\": \"Bern\",\n        \"Thailand\": \"Bangkok\",\n        \"Sweden\": \"Stockholm\",\n        \"Greece\": \"Athens\",\n        \"Norway\": \"Oslo\",\n        \"Portugal\": \"Lisbon\",\n        \"Vietnam\": \"Hanoi\",\n        \"Ireland\": \"Dublin\",\n        \"Peru\": \"Lima\"\n    },\n    {\n        \"Iran\": \"Tehran\",\n        \"New Zealand\": \"Wellington\",\n        \"Czech Republic\": \"Prague\",\n        \"Belgium\": \"Brussels\",\n        \"Austria\": \"Vienna\",\n        \"Denmark\": \"Copenhagen\",\n        \"Finland\": \"Helsinki\",\n        \"Hungary\": \"Budapest\",\n        \"Poland\": \"Warsaw\",\n        \"Singapore\": \"Singapore\"\n    },\n    {\n        \"Chile\": \"Santiago\",\n        \"Malaysia\": \"Kuala Lumpur\",\n        \"Romania\": \"Bucharest\",\n        \"South Korea\": \"Seoul\",\n        \"Germany\": \"Berlin\",\n        \"France\": \"Paris\",\n        \"Italy\": \"Rome\",\n        \"Spain\": \"Madrid\",\n        \"United Kingdom\": \"London\",\n        \"Canada\": \"Ottawa\"\n    },\n    {\n        \"Japan\": \"Tokyo\",\n        \"Australia\": \"Canberra\",\n        \"Brazil\": \"Bras\\xedlia\",\n        \"India\": \"New Delhi\",\n        \"South Africa\": \"Pretoria\",\n        \"Mexico\": \"Mexico City\",\n        \"Russia\": \"Moscow\",\n        \"China\": \"Beijing\",\n        \"Turkey\": \"Ankara\",\n        \"Argentina\": \"Buenos Aires\"\n    },\n    {\n        \"USA\": \"Washington, D.C.\",\n        \"Indonesia\": \"Jakarta\",\n        \"Saudi Arabia\": \"Riyadh\",\n        \"Egypt\": \"Cairo\",\n        \"Nigeria\": \"Abuja\",\n        \"Ghana\": \"Accra\",\n        \"Kenya\": \"Nairobi\",\n        \"Morocco\": \"Rabat\",\n        \"Iraq\": \"Baghdad\",\n        \"Pakistan\": \"Islamabad\"\n    }\n];\nconst page = ()=>{\n    _s();\n    let rand = Math.random() * 10;\n    console.log(rand);\n    let data = dat[0];\n    const [lastClick, setLastClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ...Object.values(data),\n        ...Object.keys(data)\n    ].sort(()=>Math.random() - 0.2).map((points)=>({\n            call: points,\n            state: \"default\"\n        })));\n    const handleClick = (param)=>{\n        let { stars } = param;\n        if (!lastClick) {\n            setLastClick(stars.call);\n            setOptions(options.map((opt)=>{\n                return {\n                    ...opt,\n                    state: opt.call === stars.call ? \"selected\" : \"default\"\n                };\n            }));\n        } else if (data[lastClick] === stars.call || lastClick === data[stars.call]) {\n            setOptions(options.filter((opt)=>{\n                if (opt.call === lastClick || opt.call === stars.call) {\n                    return;\n                } else {\n                    return opt;\n                }\n            }));\n            setLastClick();\n        } else {\n            setOptions(options.map((opt)=>{\n                return opt.call === lastClick || opt.call === stars.call ? {\n                    ...opt,\n                    state: \"wrong\"\n                } : opt;\n            }));\n            setLastClick();\n        }\n    };\n    const restartGame = ()=>{\n        let rand = Math.random() * 10;\n        setOptions([\n            ...Object.values(data[rand]),\n            ...Object.keys(data[rand])\n        ].sort(()=>Math.random() - 0.2).map((points)=>({\n                call: points,\n                state: \"default\"\n            })));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col h-screen w-screen justify-start font-mono text-sm p-10 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(options.length === 0 ? \"popUp\" : \"skip\", \" md:w-1/3 z-10 sm:right-10 flex absolute\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"standart_style w-full items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl mb-8 text-center\",\n                            children: \"Congratulations!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                            lineNumber: 184,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: \"You've completed the game successfully. Well done!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                            lineNumber: 185,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full flex items-center m-auto justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex btn self-center m-auto\",\n                                    onClick: restartGame,\n                                    children: \"Restart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                                    lineNumber: 189,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"flex btn\",\n                                    children: \" Quit \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                                    lineNumber: 192,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                            lineNumber: 188,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                    lineNumber: 183,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                lineNumber: 182,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full py-4 px-8 flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"justify-self-start flex btn\",\n                    children: \" Back \"\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                    lineNumber: 197,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                lineNumber: 196,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-24 items-center m-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"standart_style max-w-[720px]\",\n                    children: options.map((stars)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn \".concat(stars.state === \"selected\" ? \"col\" : \"\", \" \").concat(stars.state === \"wrong\" ? \"col2\" : \"\"),\n                            onClick: ()=>{\n                                handleClick({\n                                    stars\n                                });\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: stars.call\n                            }, void 0, false, {\n                                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                                lineNumber: 212,\n                                columnNumber: 25\n                            }, undefined)\n                        }, stars.call, false, {\n                            fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                            lineNumber: 203,\n                            columnNumber: 21\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                    lineNumber: 200,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n                lineNumber: 199,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/elijah/Documents/Phyton/FirstApi/front-end/app/country/page.js\",\n        lineNumber: 181,\n        columnNumber: 7\n    }, undefined);\n};\n_s(page, \"7ydS4iamM5KbEHjdCYuWZY0et58=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb3VudHJ5L3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDeUI7QUFDbUI7QUFDZjtBQUU3QixNQUFNSSxNQUFNO0lBQUM7UUFBQyxrQkFBa0I7UUFDaEMsVUFBVTtRQUNWLFdBQVc7UUFDWCxTQUFTO1FBQ1QsU0FBUztRQUNULFVBQVU7UUFDVixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFBUTtJQUNsQjtRQUNJLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFVBQVU7UUFDVixVQUFVO1FBQ1YsZUFBZTtRQUNmLGFBQWE7UUFDYixVQUFVO1FBQ1YsU0FBUztRQUNULFdBQVc7SUFBUTtJQUNyQjtRQUNFLGFBQWE7UUFDYixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7UUFDWixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7SUFBTztJQUNqQjtRQUNBLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7SUFBVztJQUN4QjtRQUNFLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxVQUFVO1FBQ1YsYUFBYTtRQUNiLFNBQVM7UUFDVCxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7SUFBUTtJQUN6QjtRQUNFLGVBQWU7UUFDZixlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLFFBQVE7SUFBTztJQUNqQjtRQUNFLFFBQVE7UUFDUixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7SUFB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WCw4REFBQ0s7b0NBQU9MLFdBQVU7b0NBQThCTSxTQUFTUjs4Q0FBYTs7Ozs7OzhDQUd0RSw4REFBQ3pCLGtEQUFJQTtvQ0FBQ2tDLE1BQUs7b0NBQUlQLFdBQVU7OENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk1Qyw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUMzQixrREFBSUE7b0JBQUNrQyxNQUFLO29CQUFJUCxXQUFVOzhCQUE4Qjs7Ozs7Ozs7Ozs7MEJBRXpELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlELFdBQVU7OEJBQ1ZoQixRQUFRTSxHQUFHLENBQUMsQ0FBQ0s7d0JBQ1YscUJBQ0EsOERBQUNVOzRCQUNHTCxXQUFXLE9BQ1hMLE9BRGtCQSxNQUFNRixLQUFLLEtBQUssYUFBYSxRQUFRLElBQUcsS0FFekQsT0FEREUsTUFBTUYsS0FBSyxLQUFLLFVBQVUsU0FBUzs0QkFHbkNhLFNBQVM7Z0NBQ1RaLFlBQVk7b0NBQUVDO2dDQUFNOzRCQUNwQjtzQ0FFQSw0RUFBQ1M7MENBQUdULE1BQU1ILElBQUk7Ozs7OzsyQkFMVEcsTUFBTUgsSUFBSTs7Ozs7b0JBUXZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQXZHTWpCO0FBeUdOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb3VudHJ5L3BhZ2UuanM/YTQwYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBkYXQgPSBbeydVbml0ZWQgS2luZ2RvbSc6ICdMb25kb24nLFxuJ0ZyYW5jZSc6ICdQYXJpcycsXG4nR2VybWFueSc6ICdCZXJsaW4nLFxuJ0phcGFuJzogJ1Rva3lvJyxcbidJbmRpYSc6ICdOZXcgRGVsaGknLFxuJ0JyYXppbCc6ICdCcmFzw61saWEnLFxuJ0F1c3RyYWxpYSc6ICdDYW5iZXJyYScsXG4nU291dGggQWZyaWNhJzogJ1ByZXRvcmlhJyxcbidDYW5hZGEnOiAnT3R0YXdhJ30sIFxue1xuICAgICdJdGFseSc6ICdSb21lJyxcbiAgICAnU3BhaW4nOiAnTWFkcmlkJyxcbiAgICAnQ2hpbmEnOiAnQmVpamluZycsXG4gICAgJ1J1c3NpYSc6ICdNb3Njb3cnLFxuICAgICdNZXhpY28nOiAnTWV4aWNvIENpdHknLFxuICAgICdTb3V0aCBLb3JlYSc6ICdTZW91bCcsXG4gICAgJ0FyZ2VudGluYSc6ICdCdWVub3MgQWlyZXMnLFxuICAgICdUdXJrZXknOiAnQW5rYXJhJyxcbiAgICAnRWd5cHQnOiAnQ2Fpcm8nLFxuICAgICdOaWdlcmlhJzogJ0FidWphJyx9LCBcbiAge1xuICAgICdJbmRvbmVzaWEnOiAnSmFrYXJ0YScsXG4gICAgJ0NhbmFkYSc6ICdPdHRhd2EnLFxuICAgICdTYXVkaSBBcmFiaWEnOiAnUml5YWRoJyxcbiAgICAnQXVzdHJhbGlhJzogJ0NhbmJlcnJhJyxcbiAgICAnTmV0aGVybGFuZHMnOiAnQW1zdGVyZGFtJyxcbiAgICAnU3dpdHplcmxhbmQnOiAnQmVybicsXG4gICAgJ1RoYWlsYW5kJzogJ0Jhbmdrb2snLFxuICAgICdTd2VkZW4nOiAnU3RvY2tob2xtJyxcbiAgICAnR3JlZWNlJzogJ0F0aGVucycsXG4gICAgJ05vcndheSc6ICdPc2xvJyx9LFxuICAgIHtcbiAgICAnQnJhemlsJzogJ0JyYXPDrWxpYScsXG4gICAgJ1NvdXRoIEFmcmljYSc6ICdQcmV0b3JpYScsXG4gICAgJ1BvcnR1Z2FsJzogJ0xpc2JvbicsXG4gICAgJ1ZpZXRuYW0nOiAnSGFub2knLFxuICAgICdJcmVsYW5kJzogJ0R1YmxpbicsXG4gICAgJ1BlcnUnOiAnTGltYScsXG4gICAgJ0lyYW4nOiAnVGVocmFuJyxcbiAgICAnTmV3IFplYWxhbmQnOiAnV2VsbGluZ3RvbicsXG4gICAgJ0N6ZWNoIFJlcHVibGljJzogJ1ByYWd1ZScsXG4gICAgJ0JlbGdpdW0nOiAnQnJ1c3NlbHMnLH0sXG4gIHtcbiAgICAnQXVzdHJpYSc6ICdWaWVubmEnLFxuICAgICdEZW5tYXJrJzogJ0NvcGVuaGFnZW4nLFxuICAgICdGaW5sYW5kJzogJ0hlbHNpbmtpJyxcbiAgICAnSHVuZ2FyeSc6ICdCdWRhcGVzdCcsXG4gICAgJ1BvbGFuZCc6ICdXYXJzYXcnLFxuICAgICdTaW5nYXBvcmUnOiAnU2luZ2Fwb3JlJyxcbiAgICAnQ2hpbGUnOiAnU2FudGlhZ28nLFxuICAgICdNYWxheXNpYSc6ICdLdWFsYSBMdW1wdXInLFxuICAgICdSb21hbmlhJzogJ0J1Y2hhcmVzdCcsXG4gICAgJ1NvdXRoIEtvcmVhJzogJ1Nlb3VsJyx9LFxuICB7XG4gICAgJ05ldGhlcmxhbmRzJzogJ0Ftc3RlcmRhbScsXG4gICAgJ1N3aXR6ZXJsYW5kJzogJ0Jlcm4nLFxuICAgICdUaGFpbGFuZCc6ICdCYW5na29rJyxcbiAgICAnU3dlZGVuJzogJ1N0b2NraG9sbScsXG4gICAgJ0dyZWVjZSc6ICdBdGhlbnMnLFxuICAgICdOb3J3YXknOiAnT3NsbycsXG4gICAgJ1BvcnR1Z2FsJzogJ0xpc2JvbicsXG4gICAgJ1ZpZXRuYW0nOiAnSGFub2knLFxuICAgICdJcmVsYW5kJzogJ0R1YmxpbicsXG4gICAgJ1BlcnUnOiAnTGltYScsfSxcbiAge1xuICAgICdJcmFuJzogJ1RlaHJhbicsXG4gICAgJ05ldyBaZWFsYW5kJzogJ1dlbGxpbmd0b24nLFxuICAgICdDemVjaCBSZXB1YmxpYyc6ICdQcmFndWUnLFxuICAgICdCZWxnaXVtJzogJ0JydXNzZWxzJyxcbiAgICAnQXVzdHJpYSc6ICdWaWVubmEnLFxuICAgICdEZW5tYXJrJzogJ0NvcGVuaGFnZW4nLFxuICAgICdGaW5sYW5kJzogJ0hlbHNpbmtpJyxcbiAgICAnSHVuZ2FyeSc6ICdCdWRhcGVzdCcsXG4gICAgJ1BvbGFuZCc6ICdXYXJzYXcnLFxuICAgICdTaW5nYXBvcmUnOiAnU2luZ2Fwb3JlJyx9LFxuICB7XG4gICAgJ0NoaWxlJzogJ1NhbnRpYWdvJyxcbiAgICAnTWFsYXlzaWEnOiAnS3VhbGEgTHVtcHVyJyxcbiAgICAnUm9tYW5pYSc6ICdCdWNoYXJlc3QnLFxuICAgICdTb3V0aCBLb3JlYSc6ICdTZW91bCcsXG4gICAgJ0dlcm1hbnknOiAnQmVybGluJyxcbiAgICAnRnJhbmNlJzogJ1BhcmlzJyxcbiAgICAnSXRhbHknOiAnUm9tZScsXG4gICAgJ1NwYWluJzogJ01hZHJpZCcsXG4gICAgJ1VuaXRlZCBLaW5nZG9tJzogJ0xvbmRvbicsXG4gICAgJ0NhbmFkYSc6ICdPdHRhd2EnLH0sXG4gIHtcbiAgICAnSmFwYW4nOiAnVG9reW8nLFxuICAgICdBdXN0cmFsaWEnOiAnQ2FuYmVycmEnLFxuICAgICdCcmF6aWwnOiAnQnJhc8OtbGlhJyxcbiAgICAnSW5kaWEnOiAnTmV3IERlbGhpJyxcbiAgICAnU291dGggQWZyaWNhJzogJ1ByZXRvcmlhJyxcbiAgICAnTWV4aWNvJzogJ01leGljbyBDaXR5JyxcbiAgICAnUnVzc2lhJzogJ01vc2NvdycsXG4gICAgJ0NoaW5hJzogJ0JlaWppbmcnLFxuICAgICdUdXJrZXknOiAnQW5rYXJhJyxcbiAgICAnQXJnZW50aW5hJzogJ0J1ZW5vcyBBaXJlcycsfSxcbiAge1xuICAgICdVU0EnOiAnV2FzaGluZ3RvbiwgRC5DLicsXG4gICAgJ0luZG9uZXNpYSc6ICdKYWthcnRhJyxcbiAgICAnU2F1ZGkgQXJhYmlhJzogJ1JpeWFkaCcsXG4gICAgJ0VneXB0JzogJ0NhaXJvJyxcbiAgICAnTmlnZXJpYSc6ICdBYnVqYScsXG4gICAgJ0doYW5hJzogJ0FjY3JhJyxcbiAgICAnS2VueWEnOiAnTmFpcm9iaScsXG4gICAgJ01vcm9jY28nOiAnUmFiYXQnLFxuICAgICdJcmFxJzogJ0JhZ2hkYWQnLFxuICAgICdQYWtpc3Rhbic6ICdJc2xhbWFiYWQnLFxuICB9XTtcblxuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICAgIGxldCByYW5kID0gKCBNYXRoLnJhbmRvbSgpICogMTAgKTtcbiAgICBjb25zb2xlLmxvZyhyYW5kKTtcbiAgICBsZXQgZGF0YSA9IGRhdFswXVxuICAgIGNvbnN0IFtsYXN0Q2xpY2ssIHNldExhc3RDbGlja10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKFxuICAgICAgWy4uLk9iamVjdC52YWx1ZXMoZGF0YSksIC4uLk9iamVjdC5rZXlzKGRhdGEpXVxuICAgICAgICAuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC4yKVxuICAgICAgICAubWFwKChwb2ludHMpID0+ICh7XG4gICAgICAgICAgY2FsbDogcG9pbnRzLFxuICAgICAgICAgIHN0YXRlOiBcImRlZmF1bHRcIixcbiAgICAgICAgfSkpLFxuICAgICk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKHsgc3RhcnMgfSkgPT4ge1xuICAgICAgaWYgKCFsYXN0Q2xpY2spIHtcbiAgICAgICAgc2V0TGFzdENsaWNrKHN0YXJzLmNhbGwpO1xuICAgICAgICBzZXRPcHRpb25zKFxuICAgICAgICAgIG9wdGlvbnMubWFwKChvcHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLm9wdCxcbiAgICAgICAgICAgICAgc3RhdGU6IG9wdC5jYWxsID09PSBzdGFycy5jYWxsID8gXCJzZWxlY3RlZFwiIDogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVtsYXN0Q2xpY2tdID09PSBzdGFycy5jYWxsIHx8XG4gICAgICAgIGxhc3RDbGljayA9PT0gZGF0YVtzdGFycy5jYWxsXVxuICAgICAgKSB7XG4gICAgICAgIHNldE9wdGlvbnMoXG4gICAgICAgICAgb3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wdC5jYWxsID09PSBsYXN0Q2xpY2sgfHwgb3B0LmNhbGwgPT09IHN0YXJzLmNhbGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9wdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0TGFzdENsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRPcHRpb25zKFxuICAgICAgICAgIG9wdGlvbnMubWFwKChvcHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcHQuY2FsbCA9PT0gbGFzdENsaWNrIHx8IG9wdC5jYWxsID09PSBzdGFycy5jYWxsXG4gICAgICAgICAgICAgID8geyAuLi5vcHQsIHN0YXRlOiBcIndyb25nXCIgfVxuICAgICAgICAgICAgICA6IG9wdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0TGFzdENsaWNrKCk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgY29uc3QgcmVzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IHJhbmQgPSAoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICBzZXRPcHRpb25zKFxuICAgICAgICBbLi4uT2JqZWN0LnZhbHVlcyhkYXRhW3JhbmRdKSwgLi4uT2JqZWN0LmtleXMoZGF0YVtyYW5kXSldXG4gICAgICAgICAgLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuMilcbiAgICAgICAgICAubWFwKChwb2ludHMpID0+ICh7XG4gICAgICAgICAgICBjYWxsOiBwb2ludHMsXG4gICAgICAgICAgICBzdGF0ZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgfSkpLFxuICAgICAgKTtcbiAgICB9O1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LXNjcmVlbiBqdXN0aWZ5LXN0YXJ0IGZvbnQtbW9ubyB0ZXh0LXNtIHAtMTAgcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake29wdGlvbnMubGVuZ3RoID09PSAwID8gXCJwb3BVcFwiIDogXCJza2lwXCJ9IG1kOnctMS8zIHotMTAgc206cmlnaHQtMTAgZmxleCBhYnNvbHV0ZWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhbmRhcnRfc3R5bGUgdy1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgbWItOCB0ZXh0LWNlbnRlclwiPkNvbmdyYXR1bGF0aW9ucyE8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICBZb3UndmUgY29tcGxldGVkIHRoZSBnYW1lIHN1Y2Nlc3NmdWxseS4gV2VsbCBkb25lIVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBtLWF1dG8ganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBidG4gc2VsZi1jZW50ZXIgbS1hdXRvXCIgb25DbGljaz17cmVzdGFydEdhbWV9PlxuICAgICAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nZmxleCBidG4nPiBRdWl0IDwvTGluaz4gIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIHB5LTQgcHgtOCBmbGV4Jz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0nanVzdGlmeS1zZWxmLXN0YXJ0IGZsZXggYnRuJz4gQmFjayA8L0xpbms+ICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTI0IGl0ZW1zLWNlbnRlciBtLWF1dG8nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YW5kYXJ0X3N0eWxlIG1heC13LVs3MjBweF0nPlxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgoc3RhcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuICR7c3RhcnMuc3RhdGUgPT09IFwic2VsZWN0ZWRcIiA/IFwiY29sXCIgOiBcIlwifSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMuc3RhdGUgPT09IFwid3JvbmdcIiA/IFwiY29sMlwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0YXJzLmNhbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayh7IHN0YXJzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N0YXJzLmNhbGx9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiZGF0IiwicGFnZSIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJsYXN0Q2xpY2siLCJzZXRMYXN0Q2xpY2siLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsImtleXMiLCJzb3J0IiwibWFwIiwicG9pbnRzIiwiY2FsbCIsInN0YXRlIiwiaGFuZGxlQ2xpY2siLCJzdGFycyIsIm9wdCIsImZpbHRlciIsInJlc3RhcnRHYW1lIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxlbmd0aCIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/country/page.js\n"));

/***/ })

});