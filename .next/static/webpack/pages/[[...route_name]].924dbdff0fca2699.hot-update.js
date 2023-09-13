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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerLine */ \"./src/components/speakers/SpeakerLine.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nfunction List(param) {\n    var speakers = param.speakers, updateSpeaker = param.updateSpeaker;\n    var toggleFavoriteSpeaker = function toggleFavoriteSpeaker(speakerRec) {\n        var updatedSpeakerRec = (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, speakerRec), {\n            favorite: !speakerRec.favorite\n        });\n        updateSpeaker(updatedSpeakerRec);\n        function updateAsyncRef(rec) {\n            return _updateAsyncRef.apply(this, arguments);\n        }\n        function _updateAsyncRef() {\n            _updateAsyncRef = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(rec) {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"/api/speakers/\".concat(rec.id), updatedSpeakerRec)\n                            ];\n                        case 1:\n                            _state.sent();\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _updateAsyncRef.apply(this, arguments);\n        }\n        updateAsyncRef(updatedSpeakerRec);\n    };\n    var updatingId = 0; // 1269;\n    var isPending = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-toolbar\",\n                    role: \"toolbar\",\n                    \"aria-label\": \"Speaker toolbar filter\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"toolbar-trigger mb-3 flex-grow-04\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"toolbar-search w-100\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    value: \"\",\n                                    onChange: function(event) {},\n                                    type: \"text\",\n                                    className: \"form-control\",\n                                    placeholder: \"Highlight Names\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"spinner-height\",\n                                children: isPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"spinner-border text-dark\",\n                                    role: \"status\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row g-3\",\n                children: speakers.map(function(speakerRec) {\n                    var highlight = false;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speakerRec: speakerRec,\n                        updating: updatingId === speakerRec.id ? updatingId : 0,\n                        toggleFavoriteSpeaker: function() {\n                            return toggleFavoriteSpeaker(speakerRec);\n                        },\n                        highlight: highlight\n                    }, speakerRec.id, false, {\n                        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_c = List;\nvar SpeakerList = function(param) {\n    var darkTheme = param.darkTheme;\n    var updateSpeaker = function updateSpeaker(speakerRec) {\n        var updatedSpeaker = speakers.map(function(rec) {\n            return speakerRec.id === rec.id ? speakerRec : rec;\n        });\n        setSpeakers(updatedSpeaker);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), speakers = ref[0], setSpeakers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var delay = function(ms) {\n        return setInterval(function(resolve) {\n            return resolve, ms;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getDataAsync() {\n            return _getDataAsync.apply(this, arguments);\n        }\n        function _getDataAsync() {\n            _getDataAsync = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var result;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                (0,axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"/api/speakers\")\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            delay(2000);\n                            setSpeakers(result.data);\n                            setLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _getDataAsync.apply(this, arguments);\n        }\n        getDataAsync();\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: \" Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n        lineNumber: 92,\n        columnNumber: 23\n    }, _this);\n    //const darkTheme = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkTheme ? \"theme-dark\" : \"theme-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n            speakers: speakers,\n            updateSpeaker: updateSpeaker\n        }, void 0, false, {\n            fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/speakers/SpeakerList.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakerList, \"3XG0QAqH/uLX/8072lok9QRLMk0=\");\n_c1 = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c, _c1;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zcGVha2Vycy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdDO0FBQ2Q7QUFDa0I7QUFLNUMsU0FBU0ksSUFBSSxDQUFDLEtBQXlCLEVBQUU7UUFBMUJDLFFBQVEsR0FBVCxLQUF5QixDQUF4QkEsUUFBUSxFQUFFQyxhQUFhLEdBQXhCLEtBQXlCLENBQWRBLGFBQWE7UUFJM0JDLHFCQUFxQixHQUE5QixTQUFTQSxxQkFBcUIsQ0FBQ0MsVUFBVSxFQUFFO1FBRXpDLElBQU1DLGlCQUFpQixHQUFHLHdLQUFJRCxVQUFVO1lBQUVFLFFBQVEsRUFBQyxDQUFDRixVQUFVLENBQUNFLFFBQVE7VUFBQztRQUN2RUosYUFBYSxDQUFDRyxpQkFBaUIsQ0FBQyxDQUFDO2lCQUNsQkUsY0FBYyxDQUFDQyxHQUFHO21CQUFsQkQsZUFBYzs7aUJBQWRBLGVBQWM7WUFBZEEsZUFBYyxHQUE3Qiw2RkFBOEJDLEdBQUcsRUFBQzs7Ozs0QkFDL0I7O2dDQUFNWCxpREFBUyxDQUFDLGdCQUFlLENBQVMsT0FBUFcsR0FBRyxDQUFDRSxFQUFFLENBQUUsRUFBRUwsaUJBQWlCLENBQUM7OEJBQUE7OzRCQUE3RCxhQUE2RDs7Ozs7O1lBQ2hFLENBQUM7bUJBRmNFLGVBQWM7O1FBRzdCQSxjQUFjLENBQUNGLGlCQUFpQixDQUFDLENBQUM7SUFFckMsQ0FBQztJQVpELElBQU1NLFVBQVUsR0FBRyxDQUFDLEVBQUUsUUFBUTtJQUM5QixJQUFNQyxTQUFTLEdBQUcsS0FBSztJQWF2QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3hCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDdkIsNEVBQUNELEtBQUc7b0JBQ0ZDLFNBQVMsRUFBQyxhQUFhO29CQUN2QkMsSUFBSSxFQUFDLFNBQVM7b0JBQ2RDLFlBQVUsRUFBQyx3QkFBd0I7OEJBRW5DLDRFQUFDSCxL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QUdOLE9BQU8sRUFBRSxxQkFBTyw4REFBQ2xCLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQUMsYUFBVzs7Ozs7YUFBTTtJQUVoRSwwQkFBMEI7SUFDMUIscUJBQ0UsOERBQUNELEtBQUc7UUFBQ0MsU0FBUyxFQUFFYyxTQUFTLEdBQUcsWUFBWSxHQUFHLGFBQWE7a0JBQ3RELDRFQUFDNUIsSUFBSTtZQUFDQyxRQUFRLEVBQUlBLFFBQVE7WUFBRUMsYUFBYSxFQUFFQSxhQUFhOzs7OztpQkFBRzs7Ozs7YUFDdkQsQ0FDTjtBQUNKLENBQUM7R0FoQ0t5QixXQUFXO0FBQVhBLE1BQUFBLFdBQVc7QUFrQ2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc3BlYWtlcnMvU3BlYWtlckxpc3QuanM/ZjMwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlckxpbmUgZnJvbSBcIi4vU3BlYWtlckxpbmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuXG5cbmZ1bmN0aW9uIExpc3Qoe3NwZWFrZXJzLCB1cGRhdGVTcGVha2VyfSkge1xuICBjb25zdCB1cGRhdGluZ0lkID0gMDsgLy8gMTI2OTtcbiAgY29uc3QgaXNQZW5kaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpIHtcblxuICAgIGNvbnN0IHVwZGF0ZWRTcGVha2VyUmVjID0gey4uLnNwZWFrZXJSZWMsIGZhdm9yaXRlOiFzcGVha2VyUmVjLmZhdm9yaXRlfVxuICAgICB1cGRhdGVTcGVha2VyKHVwZGF0ZWRTcGVha2VyUmVjKTtcbiAgICAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXN5bmNSZWYocmVjKXtcbiAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAvYXBpL3NwZWFrZXJzLyR7cmVjLmlkfWAsIHVwZGF0ZWRTcGVha2VyUmVjKVxuICAgICB9XG4gICAgIHVwZGF0ZUFzeW5jUmVmKHVwZGF0ZWRTcGVha2VyUmVjKTtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXJcIlxuICAgICAgICAgIHJvbGU9XCJ0b29sYmFyXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU3BlYWtlciB0b29sYmFyIGZpbHRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xiYXItdHJpZ2dlciBtYi0zIGZsZXgtZ3Jvdy0wNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLXNlYXJjaCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge319XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIaWdobGlnaHQgTmFtZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItaGVpZ2h0XCI+XG4gICAgICAgICAgICAgIHtpc1BlbmRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtZGFya1wiIHJvbGU9XCJzdGF0dXNcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctM1wiPlxuICAgICAgICB7c3BlYWtlcnMubWFwKGZ1bmN0aW9uIChzcGVha2VyUmVjKSB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTcGVha2VyTGluZVxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXJSZWM9e3NwZWFrZXJSZWN9XG4gICAgICAgICAgICAgIHVwZGF0aW5nPXt1cGRhdGluZ0lkID09PSBzcGVha2VyUmVjLmlkID8gdXBkYXRpbmdJZCA6IDB9XG4gICAgICAgICAgICAgIHRvZ2dsZUZhdm9yaXRlU3BlYWtlcj17KCkgPT4gdG9nZ2xlRmF2b3JpdGVTcGVha2VyKHNwZWFrZXJSZWMpfVxuICAgICAgICAgICAgICBoaWdobGlnaHQ9e2hpZ2hsaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgU3BlYWtlckxpc3QgPSAoe2RhcmtUaGVtZX0pID0+IHtcbiAgY29uc3QgW3NwZWFrZXJzLCBzZXRTcGVha2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBcblxuICBjb25zdCBkZWxheSA9IChtcykgPT4gc2V0SW50ZXJ2YWwocmVzb2x2ZSA9PiAocmVzb2x2ZSwgbXMpKTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhQXN5bmMoKXtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKCcvYXBpL3NwZWFrZXJzJyk7XG4gICAgICBkZWxheSgyMDAwKVxuICAgICAgc2V0U3BlYWtlcnMocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGdldERhdGFBc3luYygpO1xuICAgIFxuICB9LFxuICAgW10pO1xuXG4gICBmdW5jdGlvbiB1cGRhdGVTcGVha2VyKHNwZWFrZXJSZWMpe1xuICAgICAgICBjb25zdCB1cGRhdGVkU3BlYWtlciA9IHNwZWFrZXJzLm1hcChyZWMgPT4gc3BlYWtlclJlYy5pZCA9PT0gcmVjLmlkID8gc3BlYWtlclJlYyA6IHJlYyk7XG4gICAgICAgIHNldFNwZWFrZXJzKHVwZGF0ZWRTcGVha2VyKTtcbiAgIH1cblxuICAgaWYobG9hZGluZykgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+IExvYWRpbmcuLi48L2Rpdj5cblxuICAvL2NvbnN0IGRhcmtUaGVtZSA9IGZhbHNlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrVGhlbWUgPyBcInRoZW1lLWRhcmtcIiA6IFwidGhlbWUtbGlnaHRcIn0+XG4gICAgICA8TGlzdCBzcGVha2VycyA9IHtzcGVha2Vyc30gdXBkYXRlU3BlYWtlcj17dXBkYXRlU3BlYWtlcn0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7XG4iXSwibmFtZXMiOlsiU3BlYWtlckxpbmUiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdCIsInNwZWFrZXJzIiwidXBkYXRlU3BlYWtlciIsInRvZ2dsZUZhdm9yaXRlU3BlYWtlciIsInNwZWFrZXJSZWMiLCJ1cGRhdGVkU3BlYWtlclJlYyIsImZhdm9yaXRlIiwidXBkYXRlQXN5bmNSZWYiLCJyZWMiLCJwdXQiLCJpZCIsInVwZGF0aW5nSWQiLCJpc1BlbmRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJyb2xlIiwiYXJpYS1sYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaSIsIm1hcCIsImhpZ2hsaWdodCIsInVwZGF0aW5nIiwiU3BlYWtlckxpc3QiLCJkYXJrVGhlbWUiLCJ1cGRhdGVkU3BlYWtlciIsInNldFNwZWFrZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkZWxheSIsIm1zIiwic2V0SW50ZXJ2YWwiLCJyZXNvbHZlIiwiZ2V0RGF0YUFzeW5jIiwicmVzdWx0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/speakers/SpeakerList.js\n"));

/***/ })

});