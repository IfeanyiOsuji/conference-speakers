"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...route_name]]",{

/***/ "./src/components/speakers/SpeakerList.js":
/*!************************************************!*\
  !*** ./src/components/speakers/SpeakerList.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        updateSpeaker((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        }));\n    };\n    var updatingId = 0; // 1269;\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = List;\nvar SpeakerList = function(param) {\n    var darkTheme = param.darkTheme;\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var updatedSpeaker = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(updatedSpeaker);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), speakers = ref[0], setSpeakers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var delay = function(ms) {\n        return setInterval(function(resolve) {\n            return resolve, ms;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var result;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                (0,axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"/api/speakers\")\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            delay(2000);\n                            setSpeakers(result.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: \" Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n        lineNumber: 88,\n        columnNumber: 23\n    }, _this);\n    //const darkTheme = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers,\n            updateSpeaker: updateSpeaker\n        }, void 0, false, {\n            fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n            lineNumber: 93,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakerList, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdDO0FBQ2Q7QUFDa0I7QUFLNUMsU0FBU0ksSUFBSSxDQUFDLEtBQXlCLEVBQUU7UUFBMUJDLFFBQVEsR0FBVCxLQUF5QixDQUF4QkEsUUFBUSxFQUFFQyxhQUFhLEdBQXhCLEtBQXlCLENBQWRBLGFBQWE7UUFJM0JDLHFCQUFxQixHQUE5QixTQUFTQSxxQkFBcUIsQ0FBQ0MsVUFBVSxFQUFFO1FBR3hDRixhQUFhLENBQUMsd0tBQUlFLFVBQVU7WUFBRUMsUUFBUSxFQUFDLENBQUNELFVBQVUsQ0FBQ0MsUUFBUTtVQUFDLENBQUMsQ0FBQztJQUVqRSxDQUFDO0lBUkQsSUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBRSxRQUFRO0lBQzlCLElBQU1DLFNBQVMsR0FBRyxLQUFLO0lBU3ZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDeEIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxVQUFVOzBCQUN2Qiw0RUFBQ0QsS0FBRztvQkFDRkMsU0FBUyxFQUFDLGFBQWE7b0JBQ3ZCQyxJQUFJLEVBQUMsU0FBUztvQkFDZEMsWUFBVSxFQUFDLHdCQUF3Qjs4QkFFbkMsNEVBQUNILEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7OzBDQUNoRCw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHNCQUFzQjswQ0FDbkMsNEVBQUNHLE9BQUs7b0NBQ0pDLEtBQUssRUFBQyxFQUFFO29DQUNSQyxRQUFRLEVBQUUsU0FBQ0MsS0FBSyxFQUFLLENBQUMsQ0FBQztvQ0FDdkJDLElBQUksRUFBQyxNQUFNO29DQUNYUCxTQUFTLEVBQUMsY0FBYztvQ0FDeEJRLFdBQVcsRUFBQyxpQkFBaUI7Ozs7O3dDQUM3Qjs7Ozs7b0NBQ0U7MENBQ04sOERBQUNULEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7MENBQzVCRixTQUFTLGtCQUNSLDhEQUFDVyxHQUFDO29DQUFDVCxTQUFTLEVBQUMsMEJBQTBCO29DQUFDQyxJQUFJLEVBQUMsUUFBUTs7Ozs7d0NBQUc7Ozs7O29DQUV0RDs7Ozs7OzRCQUNGOzs7Ozt3QkFDRjs7Ozs7b0JBQ0Y7MEJBRU4sOERBQUNGLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOzBCQUNyQlIsUUFBUSxDQUFDa0IsR0FBRyxDQUFDLFNBQVVmLFVBQVUsRUFBRTtvQkFDbEMsSUFBTWdCLFNBQVMsR0FBRyxLQUFLO29CQUN2QixxQkFDRSw4REFBQ3hCLG9EQUFXO3dCQUVWUSxVQUFVLEVBQUVBLFVBQVU7d0JBQ3RCaUIsUUFBUSxFQUFFZixVQUFVLEtBQUtGLFVBQVUsQ0FBQ2tCLEVBQUUsR0FBR2hCLFVBQVUsR0FBRyxDQUFDO3dCQUN2REgscUJBQXFCLEVBQUU7bUNBQU1BLHFCQUFxQixDQUFDQyxVQUFVLENBQUM7eUJBQUE7d0JBQzlEZ0IsU0FBUyxFQUFFQSxTQUFTO3VCQUpmaEIsVUFBVSxDQUFDa0IsRUFBRTs7Ozs0QkFLbEIsQ0FDRjtnQkFDSixDQUFDLENBQUM7Ozs7O29CQUNFOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztBQXREUXRCLEtBQUFBLElBQUk7QUF3RGIsSUFBTXVCLFdBQVcsR0FBRyxnQkFBaUI7UUFBZkMsU0FBUyxTQUFUQSxTQUFTO1FBbUJuQnRCLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDRSxVQUFVLEVBQUM7UUFDN0IsSUFBTXFCLGNBQWMsR0FBR3hCLFFBQVEsQ0FBQ2tCLEdBQUcsQ0FBQ08sU0FBQUEsR0FBRzttQkFBSXRCLFVBQVUsQ0FBQ2tCLEVBQUUsS0FBS0ksR0FBRyxDQUFDSixFQUFFLEdBQUdsQixVQUFVLEdBQUdzQixHQUFHO1NBQUEsQ0FBQztRQUN2RkMsV0FBVyxDQUFDRixjQUFjLENBQUMsQ0FBQztJQUNqQyxDQUFDOztJQXJCRixJQUFnQzFCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckNFLFFBQVEsR0FBaUJGLEdBQVksR0FBN0IsRUFBRTRCLFdBQVcsR0FBSTVCLEdBQVksR0FBaEI7SUFDNUIsSUFBOEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBckM2QixPQUFPLEdBQWdCN0IsSUFBYyxHQUE5QixFQUFFOEIsVUFBVSxHQUFJOUIsSUFBYyxHQUFsQjtJQUcxQixJQUFNK0IsS0FBSyxHQUFHLFNBQUNDLEVBQUU7ZUFBS0MsV0FBVyxDQUFDQyxTQUFBQSxPQUFPO21CQUFLQSxPQUFPLEVBQUVGLEVBQUU7U0FBQyxDQUFDO0tBQUE7SUFFM0RqQyxnREFBUyxDQUFDLFdBQUk7aUJBQ0dvQyxZQUFZO21CQUFaQSxhQUFZOztpQkFBWkEsYUFBWTtZQUFaQSxhQUFZLEdBQTNCLCtGQUE2QjtvQkFDckJDLE1BQU07Ozs7NEJBQUc7O2dDQUFNdEMsaURBQUssQ0FBQyxlQUFlLENBQUM7OEJBQUE7OzRCQUFyQ3NDLE1BQU0sR0FBRyxhQUE0Qjs0QkFDM0NMLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1hILFdBQVcsQ0FBQ1EsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQzs0QkFDekJQLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1lBQ3BCLENBQUM7bUJBTGNLLGFBQVk7O1FBTTNCQSxZQUFZLEVBQUUsQ0FBQztJQUVqQixDQUFDLEVBQ0EsRUFBRSxDQUFDLENBQUM7SUFPSixJQUFHTixPQUFPLEVBQUUscUJBQU8sOERBQUNwQixLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUFDLGFBQVc7Ozs7O2FBQU07SUFFaEUsMEJBQTBCO0lBQzFCLHFCQUNFLDhEQUFDRCxLQUFHO1FBQUNDLFNBQVMsRUFBRWUsU0FBUyxHQUFHLFlBQVksR0FBRyxhQUFhO2tCQUN0RCw0RUFBQ3hCLElBQUk7WUFBQ0MsUUFBUSxFQUFJQSxRQUFRO1lBQUVDLGFBQWEsRUFBRUEsYUFBYTs7Ozs7aUJBQUc7Ozs7O2FBQ3ZELENBQ047QUFDSixDQUFDO0dBaENLcUIsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBa0NqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NwZWFrZXJzL1NwZWFrZXJMaXN0LmpzP2YzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJMaW5lIGZyb20gXCIuL1NwZWFrZXJMaW5lXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XG5cblxuXG5mdW5jdGlvbiBMaXN0KHtzcGVha2VycywgdXBkYXRlU3BlYWtlcn0pIHtcbiAgY29uc3QgdXBkYXRpbmdJZCA9IDA7IC8vIDEyNjk7XG4gIGNvbnN0IGlzUGVuZGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcihzcGVha2VyUmVjKSB7XG5cblxuICAgICB1cGRhdGVTcGVha2VyKHsuLi5zcGVha2VyUmVjLCBmYXZvcml0ZTohc3BlYWtlclJlYy5mYXZvcml0ZX0pO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4tdG9vbGJhclwiXG4gICAgICAgICAgcm9sZT1cInRvb2xiYXJcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTcGVha2VyIHRvb2xiYXIgZmlsdGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci10cmlnZ2VyIG1iLTMgZmxleC1ncm93LTA0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItc2VhcmNoIHctMTAwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7fX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhpZ2hsaWdodCBOYW1lc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1oZWlnaHRcIj5cbiAgICAgICAgICAgICAge2lzUGVuZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1kYXJrXCIgcm9sZT1cInN0YXR1c1wiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZy0zXCI+XG4gICAgICAgIHtzcGVha2Vycy5tYXAoZnVuY3Rpb24gKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNwZWFrZXJMaW5lXG4gICAgICAgICAgICAgIGtleT17c3BlYWtlclJlYy5pZH1cbiAgICAgICAgICAgICAgc3BlYWtlclJlYz17c3BlYWtlclJlY31cbiAgICAgICAgICAgICAgdXBkYXRpbmc9e3VwZGF0aW5nSWQgPT09IHNwZWFrZXJSZWMuaWQgPyB1cGRhdGluZ0lkIDogMH1cbiAgICAgICAgICAgICAgdG9nZ2xlRmF2b3JpdGVTcGVha2VyPXsoKSA9PiB0b2dnbGVGYXZvcml0ZVNwZWFrZXIoc3BlYWtlclJlYyl9XG4gICAgICAgICAgICAgIGhpZ2hsaWdodD17aGlnaGxpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTcGVha2VyTGlzdCA9ICh7ZGFya1RoZW1lfSkgPT4ge1xuICBjb25zdCBbc3BlYWtlcnMsIHNldFNwZWFrZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIFxuXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBzZXRJbnRlcnZhbChyZXNvbHZlID0+IChyZXNvbHZlLCBtcykpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFBc3luYygpe1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoJy9hcGkvc3BlYWtlcnMnKTtcbiAgICAgIGRlbGF5KDIwMDApXG4gICAgICBzZXRTcGVha2VycyhyZXN1bHQuZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZ2V0RGF0YUFzeW5jKCk7XG4gICAgXG4gIH0sXG4gICBbXSk7XG5cbiAgIGZ1bmN0aW9uIHVwZGF0ZVNwZWFrZXIoc3BlYWtlclJlYyl7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTcGVha2VyID0gc3BlYWtlcnMubWFwKHJlYyA9PiBzcGVha2VyUmVjLmlkID09PSByZWMuaWQgPyBzcGVha2VyUmVjIDogcmVjKTtcbiAgICAgICAgc2V0U3BlYWtlcnModXBkYXRlZFNwZWFrZXIpO1xuICAgfVxuXG4gICBpZihsb2FkaW5nKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gTG9hZGluZy4uLjwvZGl2PlxuXG4gIC8vY29uc3QgZGFya1RoZW1lID0gZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2RhcmtUaGVtZSA/IFwidGhlbWUtZGFya1wiIDogXCJ0aGVtZS1saWdodFwifT5cbiAgICAgIDxMaXN0IHNwZWFrZXJzID0ge3NwZWFrZXJzfSB1cGRhdGVTcGVha2VyPXt1cGRhdGVTcGVha2VyfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDtcbiJdLCJuYW1lcyI6WyJTcGVha2VyTGluZSIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaXN0Iiwic3BlYWtlcnMiLCJ1cGRhdGVTcGVha2VyIiwidG9nZ2xlRmF2b3JpdGVTcGVha2VyIiwic3BlYWtlclJlYyIsImZhdm9yaXRlIiwidXBkYXRpbmdJZCIsImlzUGVuZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJhcmlhLWxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpIiwibWFwIiwiaGlnaGxpZ2h0IiwidXBkYXRpbmciLCJpZCIsIlNwZWFrZXJMaXN0IiwiZGFya1RoZW1lIiwidXBkYXRlZFNwZWFrZXIiLCJyZWMiLCJzZXRTcGVha2VycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVsYXkiLCJtcyIsInNldEludGVydmFsIiwicmVzb2x2ZSIsImdldERhdGFBc3luYyIsInJlc3VsdCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});