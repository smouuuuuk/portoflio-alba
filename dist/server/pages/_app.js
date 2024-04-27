/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/cursor.js":
/*!******************************!*\
  !*** ./components/cursor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// This functional component represents a custom cursor with a flare effect.\nfunction FlareCursor() {\n    // State to track the current cursor position (x, y coordinates).\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    // State to track whether the cursor is over a clickable element.\n    const [isPointer, setIsPointer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHover, setIsHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Event handler for the mousemove event.\n    const handleMouseMove = (e)=>{\n        // Update the cursor position based on the mouse coordinates.\n        setPosition({\n            x: e.clientX,\n            y: e.clientY\n        });\n        // Get the target element that the cursor is currently over.\n        const target = e.target;\n        // Check if the cursor is over a clickable element by inspecting the cursor style.\n        setIsPointer(window.getComputedStyle(target).getPropertyValue(\"cursor\") === \"move\" || window.getComputedStyle(target).getPropertyValue(\"cursor\") === \"pointer\");\n        setIsHover(target.getAttribute(\"hoverable\") === \"true\");\n    };\n    // Set up an effect to add and remove the mousemove event listener.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []); // The empty dependency array ensures that this effect runs only once on mount.\n    // Calculate the size of the flare based on whether the cursor is over a clickable element.\n    const flareSize = isPointer ? 0 : 30;\n    // Adjust the cursor position to create a visual effect when over a clickable element.\n    const cursorStyle = isPointer ? {\n        left: \"-100px\",\n        top: \"-100px\"\n    } : {};\n    // Render the custom cursor element with dynamic styles based on cursor state.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: `flare ${isPointer ? \"pointer\" : \"\"} ${isHover ? \"hoverable\" : \"\"}`,\n        style: {\n            ...cursorStyle,\n            left: `${position.x}px`,\n            top: `${position.y}px`,\n            width: `${flareSize}px`,\n            height: `${flareSize}px`\n        },\n        src: \"/cursor.svg\",\n        height: 50,\n        width: 50\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\components\\\\cursor.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n// Export the FlareCursor component to be used in other parts of the application.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlareCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2N1cnNvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUUvQiw0RUFBNEU7QUFDNUUsU0FBU0k7SUFDUCxpRUFBaUU7SUFDakUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQUVNLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBRXRELGlFQUFpRTtJQUNqRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXZDLHlDQUF5QztJQUN6QyxNQUFNWSxrQkFBa0IsQ0FBQ0M7UUFDdkIsNkRBQTZEO1FBQzdEUixZQUFZO1lBQUVDLEdBQUdPLEVBQUVDLE9BQU87WUFBRVAsR0FBR00sRUFBRUUsT0FBTztRQUFDO1FBRXpDLDREQUE0RDtRQUM1RCxNQUFNQyxTQUFTSCxFQUFFRyxNQUFNO1FBRXZCLGtGQUFrRjtRQUNsRlAsYUFDRVEsT0FBT0MsZ0JBQWdCLENBQUNGLFFBQVFHLGdCQUFnQixDQUFDLGNBQWMsVUFDL0RGLE9BQU9DLGdCQUFnQixDQUFDRixRQUFRRyxnQkFBZ0IsQ0FBQyxjQUFjO1FBR2pFUixXQUNFSyxPQUFPSSxZQUFZLENBQUMsaUJBQWlCO0lBR3pDO0lBQ0EsbUVBQW1FO0lBQ25FbkIsZ0RBQVNBLENBQUM7UUFDUmdCLE9BQU9JLGdCQUFnQixDQUFDLGFBQWFUO1FBQ3JDLE9BQU87WUFDTEssT0FBT0ssbUJBQW1CLENBQUMsYUFBYVY7UUFDMUM7SUFDRixHQUFHLEVBQUUsR0FBRywrRUFBK0U7SUFFdkYsMkZBQTJGO0lBQzNGLE1BQU1XLFlBQVlmLFlBQVksSUFBSTtJQUVsQyxzRkFBc0Y7SUFDdEYsTUFBTWdCLGNBQWNoQixZQUFZO1FBQUVpQixNQUFNO1FBQVVDLEtBQUs7SUFBUyxJQUFJLENBQUM7SUFFckUsOEVBQThFO0lBQzlFLHFCQUVFLDhEQUFDeEIsbURBQUtBO1FBQ0p5QixXQUFXLENBQUMsTUFBTSxFQUFFbkIsWUFBWSxZQUFZLEdBQUcsQ0FBQyxFQUFFRSxVQUFVLGNBQWMsR0FBRyxDQUFDO1FBQzlFa0IsT0FBTztZQUNMLEdBQUdKLFdBQVc7WUFDZEMsTUFBTSxDQUFDLEVBQUVyQixTQUFTRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZCb0IsS0FBSyxDQUFDLEVBQUV0QixTQUFTRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3RCc0IsT0FBTyxDQUFDLEVBQUVOLFVBQVUsRUFBRSxDQUFDO1lBQ3ZCTyxRQUFRLENBQUMsRUFBRVAsVUFBVSxFQUFFLENBQUM7UUFDMUI7UUFDQVEsS0FBSTtRQUNKRCxRQUFRO1FBQ1JELE9BQU87Ozs7OztBQUdiO0FBRUEsaUZBQWlGO0FBQ2pGLGlFQUFlMUIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3Vyc29yLmpzPzMxY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50IHJlcHJlc2VudHMgYSBjdXN0b20gY3Vyc29yIHdpdGggYSBmbGFyZSBlZmZlY3QuXHJcbmZ1bmN0aW9uIEZsYXJlQ3Vyc29yKCkge1xyXG4gIC8vIFN0YXRlIHRvIHRyYWNrIHRoZSBjdXJyZW50IGN1cnNvciBwb3NpdGlvbiAoeCwgeSBjb29yZGluYXRlcykuXHJcbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XHJcblxyXG4gIC8vIFN0YXRlIHRvIHRyYWNrIHdoZXRoZXIgdGhlIGN1cnNvciBpcyBvdmVyIGEgY2xpY2thYmxlIGVsZW1lbnQuXHJcbiAgY29uc3QgW2lzUG9pbnRlciwgc2V0SXNQb2ludGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBFdmVudCBoYW5kbGVyIGZvciB0aGUgbW91c2Vtb3ZlIGV2ZW50LlxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIGN1cnNvciBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgbW91c2UgY29vcmRpbmF0ZXMuXHJcbiAgICBzZXRQb3NpdGlvbih7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xyXG5cclxuICAgIC8vIEdldCB0aGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCB0aGUgY3Vyc29yIGlzIGN1cnJlbnRseSBvdmVyLlxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnNvciBpcyBvdmVyIGEgY2xpY2thYmxlIGVsZW1lbnQgYnkgaW5zcGVjdGluZyB0aGUgY3Vyc29yIHN0eWxlLlxyXG4gICAgc2V0SXNQb2ludGVyKFxyXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUoXCJjdXJzb3JcIikgPT09IFwibW92ZVwiIHx8XHJcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZ2V0UHJvcGVydHlWYWx1ZShcImN1cnNvclwiKSA9PT0gXCJwb2ludGVyXCJcclxuICAgICk7XHJcblxyXG4gICAgc2V0SXNIb3ZlcihcclxuICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvdmVyYWJsZVwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICk7XHJcblxyXG4gIH07XHJcbiAgLy8gU2V0IHVwIGFuIGVmZmVjdCB0byBhZGQgYW5kIHJlbW92ZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IGxpc3RlbmVyLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBUaGUgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSBlbnN1cmVzIHRoYXQgdGhpcyBlZmZlY3QgcnVucyBvbmx5IG9uY2Ugb24gbW91bnQuXHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgZmxhcmUgYmFzZWQgb24gd2hldGhlciB0aGUgY3Vyc29yIGlzIG92ZXIgYSBjbGlja2FibGUgZWxlbWVudC5cclxuICBjb25zdCBmbGFyZVNpemUgPSBpc1BvaW50ZXIgPyAwIDogMzA7XHJcblxyXG4gIC8vIEFkanVzdCB0aGUgY3Vyc29yIHBvc2l0aW9uIHRvIGNyZWF0ZSBhIHZpc3VhbCBlZmZlY3Qgd2hlbiBvdmVyIGEgY2xpY2thYmxlIGVsZW1lbnQuXHJcbiAgY29uc3QgY3Vyc29yU3R5bGUgPSBpc1BvaW50ZXIgPyB7IGxlZnQ6IFwiLTEwMHB4XCIsIHRvcDogXCItMTAwcHhcIiB9IDoge307XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgY3VzdG9tIGN1cnNvciBlbGVtZW50IHdpdGggZHluYW1pYyBzdHlsZXMgYmFzZWQgb24gY3Vyc29yIHN0YXRlLlxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPEltYWdlXHJcbiAgICAgIGNsYXNzTmFtZT17YGZsYXJlICR7aXNQb2ludGVyID8gXCJwb2ludGVyXCIgOiBcIlwifSAke2lzSG92ZXIgPyBcImhvdmVyYWJsZVwiIDogXCJcIn1gfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLmN1cnNvclN0eWxlLFxyXG4gICAgICAgIGxlZnQ6IGAke3Bvc2l0aW9uLnh9cHhgLFxyXG4gICAgICAgIHRvcDogYCR7cG9zaXRpb24ueX1weGAsXHJcbiAgICAgICAgd2lkdGg6IGAke2ZsYXJlU2l6ZX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtmbGFyZVNpemV9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgICBzcmM9XCIvY3Vyc29yLnN2Z1wiXHJcbiAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgIHdpZHRoPXs1MH0vPlxyXG5cclxuICApO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgdGhlIEZsYXJlQ3Vyc29yIGNvbXBvbmVudCB0byBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvbi5cclxuZXhwb3J0IGRlZmF1bHQgRmxhcmVDdXJzb3I7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkZsYXJlQ3Vyc29yIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiaXNQb2ludGVyIiwic2V0SXNQb2ludGVyIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmxhcmVTaXplIiwiY3Vyc29yU3R5bGUiLCJsZWZ0IiwidG9wIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cursor.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"../public/fonts/HELVETICANEUE-ROMAN_0.woff2\",\"weight\":\"400\"}]}],\"variableName\":\"helvetica_neue\"} */ \"./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"../public/fonts/HELVETICANEUE-ROMAN_0.woff2\\\",\\\"weight\\\":\\\"400\\\"}]}],\\\"variableName\\\":\\\"helvetica_neue\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cursor */ \"./components/cursor.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_7___default()), {\n                strategy: \"lazyOnload\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${\"G-MQYVFMZXKF\"}`\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_7___default()), {\n                strategy: \"lazyOnload\",\n                children: `\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '${\"G-MQYVFMZXKF\"}', {\n      page_path: window.location.pathname,\n      });\n    `\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 25,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cursor__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 36,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"48386ab94414a414\",\n                dynamic: [\n                    (next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_9___default().style).fontFamily\n                ],\n                children: `:root{--helvetica-neue:${(next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_9___default().style).fontFamily};--project-border-radius:16px;--gris-coorporativo:#E0E0E0;--ancho-borde:1.5px}`\n            }, void 0, false, void 0, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"48386ab94414a414\",\n                        [\n                            (next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_9___default().style).fontFamily\n                        ]\n                    ]\n                ]) + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 46,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.appWithTranslation)(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNNQTs7QUFUa0M7QUFDbEI7QUFDSTtBQUNLO0FBQ2lCO0FBQ2Y7QUFDaUI7QUFZbEQsTUFBTU8sTUFBTSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLGlCQUNuQzs7MEJBQ0EsOERBQUNKLG9EQUFNQTtnQkFDTEssVUFBUztnQkFDVEMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFQyxjQUF3QyxDQUFDLENBQUM7Ozs7OzswQkFFaEcsOERBQUNQLG9EQUFNQTtnQkFBQ0ssVUFBUzswQkFDZCxDQUFDOzs7O3NCQUlnQixFQUFFRSxjQUF3QyxDQUFDOzs7SUFHN0QsQ0FBQzs7Ozs7OzBCQUdILDhEQUFDUiwwREFBWUE7Ozs7Ozs7O29CQUlXSixzTUFBb0IsQ0FBQ2dCLFVBQVU7O29EQUEvQmhCLHNNQUFvQixDQUFDZ0IsVUFBVTs7MEJBTXZELDhEQUFDUjtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs0QkFOQVQsc01BQW9CLENBQUNnQixVQUFVOzs7NEJBTXhDUCxhQUFBQSwrQkFBQUE7Ozs7Ozs7O0FBSWpCLGlFQUFnQkgsZ0VBQWtCQSxDQUFDQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgQ3VzdG9tQ3Vyc29yIGZyb20gJy4uL2NvbXBvbmVudHMvY3Vyc29yJztcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xuaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0JztcblxuaW1wb3J0IGxvY2FsRm9udCBmcm9tICduZXh0L2ZvbnQvbG9jYWwnO1xuY29uc3QgaGVsdmV0aWNhX25ldWUgPSBsb2NhbEZvbnQoe1xuICBzcmM6IFtcbiAgICB7XG4gICAgICBwYXRoOiAnLi4vcHVibGljL2ZvbnRzL0hFTFZFVElDQU5FVUUtUk9NQU5fMC53b2ZmMicsXG4gICAgICB3ZWlnaHQ6ICc0MDAnLFxuICAgIH1cbiAgXSxcbn0pO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiAoXG4gIDw+XG4gIDxTY3JpcHRcbiAgICBzdHJhdGVneT1cImxhenlPbmxvYWRcIlxuICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTfWB9XG4gIC8+XG4gIDxTY3JpcHQgc3RyYXRlZ3k9XCJsYXp5T25sb2FkXCI+XG4gICAge2BcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1N9Jywge1xuICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICB9KTtcbiAgICBgfVxuICA8L1NjcmlwdD5cblxuICA8Q3VzdG9tQ3Vyc29yIC8+XG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICA6cm9vdCB7XG4gICAgICAvKiAuLi4gKi9cbiAgICAgIC0taGVsdmV0aWNhLW5ldWU6ICR7aGVsdmV0aWNhX25ldWUuc3R5bGUuZm9udEZhbWlseX07XG4gICAgICAtLXByb2plY3QtYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIC0tZ3Jpcy1jb29ycG9yYXRpdm86ICNFMEUwRTA7XG4gICAgICAtLWFuY2hvLWJvcmRlOiAxLjVweDtcbiAgICAgIH1cbiAgYH08L3N0eWxlPlxuICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCAgYXBwV2l0aFRyYW5zbGF0aW9uKEFwcCk7Il0sIm5hbWVzIjpbImhlbHZldGljYV9uZXVlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJBT1MiLCJDdXN0b21DdXJzb3IiLCJTY3JpcHQiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdHJhdGVneSIsInNyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwic3R5bGUiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/aos"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();