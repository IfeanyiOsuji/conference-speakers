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

/***/ "./src/components/layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Layout.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/components/layout/Header.js\");\n/* harmony import */ var _AppMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppMenu */ \"./src/components/layout/AppMenu.js\");\n/* harmony import */ var _speakerModal_SpeakerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../speakerModal/SpeakerModal */ \"./src/components/speakerModal/SpeakerModal.js\");\n/* harmony import */ var _speakers_Speakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../speakers/Speakers */ \"./src/components/speakers/Speakers.js\");\n/* harmony import */ var _about_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/About */ \"./src/components/about/About.js\");\n/* harmony import */ var _speakers_Speaker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../speakers/Speaker */ \"./src/components/speakers/Speaker.js\");\n/* harmony import */ var _speakers_SpeakerList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../speakers/SpeakerList */ \"./src/components/speakers/SpeakerList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Layout does not use children but instead uses what comes from AppRouteProvider\nfunction Layout(param) {\n    var url = param.url;\n    var alterTheme = function alterTheme(theme) {\n        setDarkTheme(theme);\n        console.log(\"in layout settheme\", theme);\n    };\n    _s();\n    var speakerId = parseInt(url.substring(9).replace(\"#\", \"\"));\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false), darkTheme = ref[0], setDarkTheme = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                darkTheme: darkTheme,\n                setDarkTheme: alterTheme\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            url === \"/about\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_about_About__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 25,\n                columnNumber: 28\n            }, this),\n            url === \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_speakers_Speakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 26,\n                columnNumber: 23\n            }, this),\n            url.startsWith(\"/speaker/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_speakers_Speaker__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                id: speakerId\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 27,\n                columnNumber: 39\n            }, this),\n            url.startsWith(\"/speakerlist\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_speakers_SpeakerList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 28,\n                columnNumber: 42\n            }, this),\n            url.startsWith(\"/speakerpopup\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_speakerModal_SpeakerModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                modalShow: true\n            }, void 0, false, {\n                fileName: \"/home/ifeayin/reactful/react18/pluralsight-using-hooks-in-react18/m2/m2-clip-03/src/components/layout/Layout.js\",\n                lineNumber: 29,\n                columnNumber: 43\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE4QjtBQUNFO0FBQ3dCO0FBQ1o7QUFDVDtBQUNPO0FBQ1E7QUFDakI7QUFFakMsaUZBQWlGO0FBQ2xFLFNBQVNRLE1BQU0sQ0FBQyxLQUFPLEVBQUU7UUFBVCxHQUFLLEdBQUwsS0FBTyxDQUFMQyxHQUFHO1FBSXpCQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsS0FBSyxFQUFDO1FBRXhCQyxZQUFZLENBQUNELEtBQUssQ0FBQyxDQUFDO1FBQ3BCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRUgsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7SUFQRCxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ1AsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0QsSUFBa0NYLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBMUNZLFNBQVMsR0FBa0JaLEdBQWUsR0FBakMsRUFBRUssWUFBWSxHQUFJTCxHQUFlLEdBQW5CO0lBUTlCLHFCQUNFOzswQkFDRSw4REFBQ1AsK0NBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNDLGdEQUFPO2dCQUFDa0IsU0FBUyxFQUFFQSxTQUFTO2dCQUFFUCxZQUFZLEVBQUVGLFVBQVU7Ozs7O29CQUFHO1lBQ3pERCxHQUFHLEtBQUssUUFBUSxrQkFBSSw4REFBQ0wsb0RBQUs7Ozs7b0JBQUc7WUFDN0JLLEdBQUcsS0FBSyxHQUFHLGtCQUFJLDhEQUFDTiwwREFBUTs7OztvQkFBRztZQUMzQk0sR0FBRyxDQUFDVyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFJLDhEQUFDZix5REFBTztnQkFBQ2dCLEVBQUUsRUFBRU4sU0FBUzs7Ozs7b0JBQUk7WUFDekROLEdBQUcsQ0FBQ1csVUFBVSxDQUFDLGNBQWMsQ0FBQyxrQkFBSSw4REFBQ2QsNkRBQVc7Ozs7b0JBQUc7WUFDakRHLEdBQUcsQ0FBQ1csVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBSSw4REFBQ2xCLGtFQUFZO2dCQUFDb0IsU0FBUyxFQUFFLElBQUk7Ozs7O29CQUFJOztvQkFDcEUsQ0FDSDtBQUNKLENBQUM7R0FyQnVCZCxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz9jYmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgQXBwTWVudSBmcm9tIFwiLi9BcHBNZW51XCI7XG5pbXBvcnQgU3BlYWtlck1vZGFsIGZyb20gXCIuLi9zcGVha2VyTW9kYWwvU3BlYWtlck1vZGFsXCI7XG5pbXBvcnQgU3BlYWtlcnMgZnJvbSBcIi4uL3NwZWFrZXJzL1NwZWFrZXJzXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2Fib3V0L0Fib3V0XCI7XG5pbXBvcnQgU3BlYWtlciBmcm9tIFwiLi4vc3BlYWtlcnMvU3BlYWtlclwiO1xuaW1wb3J0IFNwZWFrZXJMaXN0IGZyb20gXCIuLi9zcGVha2Vycy9TcGVha2VyTGlzdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gTGF5b3V0IGRvZXMgbm90IHVzZSBjaGlsZHJlbiBidXQgaW5zdGVhZCB1c2VzIHdoYXQgY29tZXMgZnJvbSBBcHBSb3V0ZVByb3ZpZGVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyB1cmwgfSkge1xuICBjb25zdCBzcGVha2VySWQgPSBwYXJzZUludCh1cmwuc3Vic3RyaW5nKDkpLnJlcGxhY2UoXCIjXCIsIFwiXCIpKTtcbiAgY29uc3QgW2RhcmtUaGVtZSwgc2V0RGFya1RoZW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBhbHRlclRoZW1lKHRoZW1lKXtcblxuICAgIHNldERhcmtUaGVtZSh0aGVtZSk7XG4gICAgY29uc29sZS5sb2coJ2luIGxheW91dCBzZXR0aGVtZScsIHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxBcHBNZW51IGRhcmtUaGVtZT17ZGFya1RoZW1lfSBzZXREYXJrVGhlbWU9e2FsdGVyVGhlbWV9Lz5cbiAgICAgIHt1cmwgPT09IFwiL2Fib3V0XCIgJiYgPEFib3V0IC8+fVxuICAgICAge3VybCA9PT0gXCIvXCIgJiYgPFNwZWFrZXJzIC8+fVxuICAgICAge3VybC5zdGFydHNXaXRoKFwiL3NwZWFrZXIvXCIpICYmIDxTcGVha2VyIGlkPXtzcGVha2VySWR9IC8+fVxuICAgICAge3VybC5zdGFydHNXaXRoKFwiL3NwZWFrZXJsaXN0XCIpICYmIDxTcGVha2VyTGlzdCAvPn1cbiAgICAgIHt1cmwuc3RhcnRzV2l0aChcIi9zcGVha2VycG9wdXBcIikgJiYgPFNwZWFrZXJNb2RhbCBtb2RhbFNob3c9e3RydWV9IC8+fVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkFwcE1lbnUiLCJTcGVha2VyTW9kYWwiLCJTcGVha2VycyIsIkFib3V0IiwiU3BlYWtlciIsIlNwZWFrZXJMaXN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJ1cmwiLCJhbHRlclRoZW1lIiwidGhlbWUiLCJzZXREYXJrVGhlbWUiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlcklkIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJyZXBsYWNlIiwiZGFya1RoZW1lIiwic3RhcnRzV2l0aCIsImlkIiwibW9kYWxTaG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layout/Layout.js\n"));

/***/ })

});