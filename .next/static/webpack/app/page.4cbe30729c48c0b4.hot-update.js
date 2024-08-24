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

/***/ "(app-pages-browser)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_img_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/img/logo.svg */ \"(app-pages-browser)/./public/img/logo.svg\");\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToggleTheme */ \"(app-pages-browser)/./components/ToggleTheme.tsx\");\n/* harmony import */ var _ToggleLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToggleLang */ \"(app-pages-browser)/./components/ToggleLang.tsx\");\n/* harmony import */ var _ProjectNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectNav */ \"(app-pages-browser)/./components/ProjectNav.tsx\");\n/* harmony import */ var _SkillNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SkillNav */ \"(app-pages-browser)/./components/SkillNav.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [isProjectHover, setIsProjectHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isOpenSkill, setIsOpenSkill] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenSkill = ()=>{\n        setIsOpenSkill(!isOpenSkill);\n        setIsProjectHover(false);\n    };\n    const handleOpenProject = ()=>{\n        setIsProjectHover(!isProjectHover);\n        setIsOpenSkill(false);\n    };\n    const handleCloseAll = ()=>{\n        setIsProjectHover(false);\n        setIsOpenSkill(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-screen bg-[#fffbf9] dark:bg-[#2f2f2f] \".concat(isProjectHover ? \" \" : \"dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm\", \"  mt-0 border-b border-b-[#ff6d0a] sticky z-50 top-0 grid grid-cols-2\"),\n        onMouseOver: handleCloseAll,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-14 pl-4 pt-2 pb-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: _public_img_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"Logo du portfolio \",\n                    className: \"w-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5 h-full gap-y-4 w-2/3 ml-auto pt-2  pb-2 \",\n                onMouseOver: (e)=>e.stopPropagation(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-[#ff6d0a] font-normal text-center cursor-pointer\",\n                        children: \"A propos\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-[#ff6d0a] font-normal text-center cursor-pointer\",\n                        onMouseOver: handleOpenProject,\n                        children: \"Projet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-[#ff6d0a] font-normal text-center cursor-pointer\",\n                        onMouseOver: handleOpenSkill,\n                        children: \"Comp\\xe9tence\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm text-[#ff6d0a] font-normal text-center cursor-pointer\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleLang__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: isProjectHover ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectNav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 36\n                }, undefined) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: isOpenSkill ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkillNav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 33\n                }, undefined) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raphaelboucheron/portfolio/components/Header.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"GQL9wZJtRhUSiLB/6YkFqYdgpyY=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFd0M7QUFDVDtBQUNVO0FBQ0Q7QUFDRjtBQUNBO0FBQ0o7QUFFbEMsTUFBTVEsU0FBUzs7SUFDWCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFVO0lBQzlELE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBVTtJQUN4RCxNQUFNWSxrQkFBa0I7UUFDcEJELGVBQWUsQ0FBQ0Q7UUFDaEJELGtCQUFrQjtJQUN0QjtJQUNBLE1BQU1JLG9CQUFvQjtRQUN0Qkosa0JBQWtCLENBQUNEO1FBQ25CRyxlQUFlO0lBQ25CO0lBQ0EsTUFBTUcsaUJBQWlCO1FBQ25CTCxrQkFBa0I7UUFDbEJFLGVBQWU7SUFDbkI7SUFFQSxxQkFDSSw4REFBQ0k7UUFDR0MsV0FBVywyQ0FBc0gsT0FBM0VSLGlCQUFpQixNQUFNLHFEQUFvRDtRQUNqSVMsYUFBYUg7OzBCQUViLDhEQUFDSTtnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ2Ysa0RBQUtBO29CQUFDa0IsS0FBS2pCLDREQUFJQTtvQkFBRWtCLEtBQUk7b0JBQXFCSixXQUFVOzs7Ozs7Ozs7OzswQkFFekQsOERBQUNFO2dCQUNHRixXQUFVO2dCQUNWQyxhQUFhLENBQUNJLElBQU1BLEVBQUVDLGVBQWU7O2tDQUVyQyw4REFBQ0o7d0JBQUlGLFdBQVU7a0NBQWdFOzs7Ozs7a0NBRy9FLDhEQUFDRTt3QkFDR0YsV0FBVTt3QkFDVkMsYUFBYUo7a0NBQ2hCOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUNHRixXQUFVO3dCQUNWQyxhQUFhTDtrQ0FDaEI7Ozs7OztrQ0FHRCw4REFBQ007d0JBQUlGLFdBQVU7a0NBQWdFOzs7Ozs7a0NBRy9FLDhEQUFDRTt3QkFBSUYsV0FBVTs7MENBQ1gsOERBQUNiLG9EQUFXQTs7Ozs7MENBQ1osOERBQUNDLG1EQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDYzswQkFBS1YsK0JBQWlCLDhEQUFDSCxtREFBVUE7Ozs7Z0NBQU07Ozs7OzswQkFDeEMsOERBQUNhOzBCQUFLUiw0QkFBYyw4REFBQ0osaURBQVFBOzs7O2dDQUFNOzs7Ozs7Ozs7Ozs7QUFHL0M7R0F2RE1DO0tBQUFBO0FBeUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeD8wMzY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvcHVibGljL2ltZy9sb2dvLnN2Z1wiO1xuaW1wb3J0IFRvZ2dsZVRoZW1lIGZyb20gXCIuL1RvZ2dsZVRoZW1lXCI7XG5pbXBvcnQgVG9nZ2xlTGFuZyBmcm9tIFwiLi9Ub2dnbGVMYW5nXCI7XG5pbXBvcnQgUHJvamVjdE5hdiBmcm9tIFwiLi9Qcm9qZWN0TmF2XCI7XG5pbXBvcnQgU2tpbGxOYXYgZnJvbSBcIi4vU2tpbGxOYXZcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc1Byb2plY3RIb3Zlciwgc2V0SXNQcm9qZWN0SG92ZXJdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IFtpc09wZW5Ta2lsbCwgc2V0SXNPcGVuU2tpbGxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW5Ta2lsbCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuU2tpbGwoIWlzT3BlblNraWxsKTtcbiAgICAgICAgc2V0SXNQcm9qZWN0SG92ZXIoZmFsc2UpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlT3BlblByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUHJvamVjdEhvdmVyKCFpc1Byb2plY3RIb3Zlcik7XG4gICAgICAgIHNldElzT3BlblNraWxsKGZhbHNlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlQWxsID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1Byb2plY3RIb3ZlcihmYWxzZSk7XG4gICAgICAgIHNldElzT3BlblNraWxsKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1zY3JlZW4gYmctWyNmZmZiZjldIGRhcms6YmctWyMyZjJmMmZdICR7aXNQcm9qZWN0SG92ZXIgPyBcIiBcIiA6IFwiZGFyazpiZy1vcGFjaXR5LTYwIGJnLW9wYWNpdHktNjAgYmFja2Ryb3AtYmx1ci1zbVwifSAgbXQtMCBib3JkZXItYiBib3JkZXItYi1bI2ZmNmQwYV0gc3RpY2t5IHotNTAgdG9wLTAgZ3JpZCBncmlkLWNvbHMtMmB9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlQ2xvc2VBbGx9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBwbC00IHB0LTIgcGItMlwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD1cIkxvZ28gZHUgcG9ydGZvbGlvIFwiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGgtZnVsbCBnYXAteS00IHctMi8zIG1sLWF1dG8gcHQtMiAgcGItMiBcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2ZmNmQwYV0gZm9udC1ub3JtYWwgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgQSBwcm9wb3NcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2ZmNmQwYV0gZm9udC1ub3JtYWwgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlT3BlblByb2plY3R9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQcm9qZXRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2ZmNmQwYV0gZm9udC1ub3JtYWwgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlT3BlblNraWxsfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29tcMOpdGVuY2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1bI2ZmNmQwYV0gZm9udC1ub3JtYWwgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZVRoZW1lIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb2dnbGVMYW5nIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e2lzUHJvamVjdEhvdmVyID8gPFByb2plY3ROYXYgLz4gOiBcIlwifTwvZGl2PlxuICAgICAgICAgICAgPGRpdj57aXNPcGVuU2tpbGwgPyA8U2tpbGxOYXYgLz4gOiBcIlwifTwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTG9nbyIsIlRvZ2dsZVRoZW1lIiwiVG9nZ2xlTGFuZyIsIlByb2plY3ROYXYiLCJTa2lsbE5hdiIsIkhlYWRlciIsImlzUHJvamVjdEhvdmVyIiwic2V0SXNQcm9qZWN0SG92ZXIiLCJpc09wZW5Ta2lsbCIsInNldElzT3BlblNraWxsIiwiaGFuZGxlT3BlblNraWxsIiwiaGFuZGxlT3BlblByb2plY3QiLCJoYW5kbGVDbG9zZUFsbCIsImhlYWRlciIsImNsYXNzTmFtZSIsIm9uTW91c2VPdmVyIiwiZGl2Iiwic3JjIiwiYWx0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.tsx\n"));

/***/ })

});