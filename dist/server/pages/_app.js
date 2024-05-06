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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// This functional component represents a custom cursor with a flare effect.\nfunction FlareCursor() {\n    // State to track the current cursor position (x, y coordinates).\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    // State to track whether the cursor is over a clickable element.\n    const [isPointer, setIsPointer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isHover, setIsHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const accel = 10;\n    let last_pos_x = 0;\n    let last_pos_y = 0;\n    let vel_x = 0;\n    let vel_y = 0;\n    // Event handler for the mousemove event.\n    const handleMouseMove = (e)=>{\n        // Update the cursor position based on the mouse coordinates.\n        // var diff_x = e.clientX - last_pos_x;\n        // var diff_y = e.clientY - last_pos_y;\n        // var new_x = last_pos_x + (Math.sign(diff_x)==1 ? accel * Math.cos(Math.atan(Math.abs(diff_y/diff_x))) : -accel * Math.cos(Math.atan(Math.abs(diff_x))));\n        // var new_y = last_pos_y + (Math.sign(diff_y)==1 ? accel * Math.sin(Math.atan(Math.abs(diff_y/diff_x))) : -accel * Math.sin(Math.atan(Math.abs(diff_y))));\n        // last_pos_x = new_x;\n        // last_pos_y = new_y;\n        setPosition({\n            x: e.clientX,\n            y: e.clientY\n        });\n        // Get the target element that the cursor is currently over.\n        const target = e.target;\n        // Check if the cursor is over a clickable element by inspecting the cursor style.\n        setIsPointer(window.getComputedStyle(target).getPropertyValue(\"cursor\") === \"move\" || window.getComputedStyle(target).getPropertyValue(\"cursor\") === \"pointer\");\n        setIsHover(target.getAttribute(\"hoverable\") === \"true\");\n    };\n    // Set up an effect to add and remove the mousemove event listener.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"mousemove\", handleMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", handleMouseMove);\n        };\n    }, []); // The empty dependency array ensures that this effect runs only once on mount.\n    // Calculate the size of the flare based on whether the cursor is over a clickable element.\n    const flareSize = isPointer ? 0 : 30;\n    // Adjust the cursor position to create a visual effect when over a clickable element.\n    const cursorStyle = isPointer ? {\n        left: \"-100px\",\n        top: \"-100px\"\n    } : {};\n    // Render the custom cursor element with dynamic styles based on cursor state.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: `flare ${isPointer ? \"pointer\" : \"\"} ${isHover ? \"hoverable\" : \"\"}`,\n        style: {\n            ...cursorStyle,\n            left: `${position.x}px`,\n            top: `${position.y}px`,\n            width: `${flareSize}px`,\n            height: `${flareSize}px`\n        },\n        src: \"/cursor.svg\",\n        height: 50,\n        width: 50\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\components\\\\cursor.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n// Export the FlareCursor component to be used in other parts of the application.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlareCursor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2N1cnNvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUUvQiw0RUFBNEU7QUFDNUUsU0FBU0k7SUFDUCxpRUFBaUU7SUFDakUsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO1FBQUVNLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBRXRELGlFQUFpRTtJQUNqRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1ZLFFBQVE7SUFDZCxJQUFJQyxhQUFhO0lBQ2pCLElBQUlDLGFBQWE7SUFDakIsSUFBSUMsUUFBUTtJQUNaLElBQUlDLFFBQVE7SUFFWix5Q0FBeUM7SUFDekMsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3ZCLDZEQUE2RDtRQUM3RCx1Q0FBdUM7UUFDdkMsdUNBQXVDO1FBR3ZDLDJKQUEySjtRQUMzSiwySkFBMko7UUFFM0osc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUV0QmIsWUFBWTtZQUFFQyxHQUFHWSxFQUFFQyxPQUFPO1lBQUVaLEdBQUdXLEVBQUVFLE9BQU87UUFBQztRQUV6Qyw0REFBNEQ7UUFDNUQsTUFBTUMsU0FBU0gsRUFBRUcsTUFBTTtRQUV2QixrRkFBa0Y7UUFDbEZaLGFBQ0VhLE9BQU9DLGdCQUFnQixDQUFDRixRQUFRRyxnQkFBZ0IsQ0FBQyxjQUFjLFVBQy9ERixPQUFPQyxnQkFBZ0IsQ0FBQ0YsUUFBUUcsZ0JBQWdCLENBQUMsY0FBYztRQUdqRWIsV0FDRVUsT0FBT0ksWUFBWSxDQUFDLGlCQUFpQjtJQUd6QztJQUNBLG1FQUFtRTtJQUNuRXhCLGdEQUFTQSxDQUFDO1FBQ1JxQixPQUFPSSxnQkFBZ0IsQ0FBQyxhQUFhVDtRQUNyQyxPQUFPO1lBQ0xLLE9BQU9LLG1CQUFtQixDQUFDLGFBQWFWO1FBQzFDO0lBQ0YsR0FBRyxFQUFFLEdBQUcsK0VBQStFO0lBRXZGLDJGQUEyRjtJQUMzRixNQUFNVyxZQUFZcEIsWUFBWSxJQUFJO0lBRWxDLHNGQUFzRjtJQUN0RixNQUFNcUIsY0FBY3JCLFlBQVk7UUFBRXNCLE1BQU07UUFBVUMsS0FBSztJQUFTLElBQUksQ0FBQztJQUVyRSw4RUFBOEU7SUFDOUUscUJBRUUsOERBQUM3QixtREFBS0E7UUFDSjhCLFdBQVcsQ0FBQyxNQUFNLEVBQUV4QixZQUFZLFlBQVksR0FBRyxDQUFDLEVBQUVFLFVBQVUsY0FBYyxHQUFHLENBQUM7UUFDOUV1QixPQUFPO1lBQ0wsR0FBR0osV0FBVztZQUNkQyxNQUFNLENBQUMsRUFBRTFCLFNBQVNFLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkJ5QixLQUFLLENBQUMsRUFBRTNCLFNBQVNHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEIyQixPQUFPLENBQUMsRUFBRU4sVUFBVSxFQUFFLENBQUM7WUFDdkJPLFFBQVEsQ0FBQyxFQUFFUCxVQUFVLEVBQUUsQ0FBQztRQUMxQjtRQUNBUSxLQUFJO1FBQ0pELFFBQVE7UUFDUkQsT0FBTzs7Ozs7O0FBR2I7QUFFQSxpRkFBaUY7QUFDakYsaUVBQWUvQixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXJzb3IuanM/MzFjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQgcmVwcmVzZW50cyBhIGN1c3RvbSBjdXJzb3Igd2l0aCBhIGZsYXJlIGVmZmVjdC5cclxuZnVuY3Rpb24gRmxhcmVDdXJzb3IoKSB7XHJcbiAgLy8gU3RhdGUgdG8gdHJhY2sgdGhlIGN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICh4LCB5IGNvb3JkaW5hdGVzKS5cclxuICBjb25zdCBbcG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcclxuXHJcbiAgLy8gU3RhdGUgdG8gdHJhY2sgd2hldGhlciB0aGUgY3Vyc29yIGlzIG92ZXIgYSBjbGlja2FibGUgZWxlbWVudC5cclxuICBjb25zdCBbaXNQb2ludGVyLCBzZXRJc1BvaW50ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaXNIb3Zlciwgc2V0SXNIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFjY2VsID0gMTA7XHJcbiAgbGV0IGxhc3RfcG9zX3ggPSAwO1xyXG4gIGxldCBsYXN0X3Bvc195ID0gMDtcclxuICBsZXQgdmVsX3ggPSAwO1xyXG4gIGxldCB2ZWxfeSA9IDA7XHJcblxyXG4gIC8vIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBtb3VzZW1vdmUgZXZlbnQuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBtb3VzZSBjb29yZGluYXRlcy5cclxuICAgIC8vIHZhciBkaWZmX3ggPSBlLmNsaWVudFggLSBsYXN0X3Bvc194O1xyXG4gICAgLy8gdmFyIGRpZmZfeSA9IGUuY2xpZW50WSAtIGxhc3RfcG9zX3k7XHJcblxyXG5cclxuICAgIC8vIHZhciBuZXdfeCA9IGxhc3RfcG9zX3ggKyAoTWF0aC5zaWduKGRpZmZfeCk9PTEgPyBhY2NlbCAqIE1hdGguY29zKE1hdGguYXRhbihNYXRoLmFicyhkaWZmX3kvZGlmZl94KSkpIDogLWFjY2VsICogTWF0aC5jb3MoTWF0aC5hdGFuKE1hdGguYWJzKGRpZmZfeCkpKSk7XHJcbiAgICAvLyB2YXIgbmV3X3kgPSBsYXN0X3Bvc195ICsgKE1hdGguc2lnbihkaWZmX3kpPT0xID8gYWNjZWwgKiBNYXRoLnNpbihNYXRoLmF0YW4oTWF0aC5hYnMoZGlmZl95L2RpZmZfeCkpKSA6IC1hY2NlbCAqIE1hdGguc2luKE1hdGguYXRhbihNYXRoLmFicyhkaWZmX3kpKSkpO1xyXG5cclxuICAgIC8vIGxhc3RfcG9zX3ggPSBuZXdfeDtcclxuICAgIC8vIGxhc3RfcG9zX3kgPSBuZXdfeTtcclxuXHJcbiAgICBzZXRQb3NpdGlvbih7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH0pO1xyXG5cclxuICAgIC8vIEdldCB0aGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCB0aGUgY3Vyc29yIGlzIGN1cnJlbnRseSBvdmVyLlxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnNvciBpcyBvdmVyIGEgY2xpY2thYmxlIGVsZW1lbnQgYnkgaW5zcGVjdGluZyB0aGUgY3Vyc29yIHN0eWxlLlxyXG4gICAgc2V0SXNQb2ludGVyKFxyXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUoXCJjdXJzb3JcIikgPT09IFwibW92ZVwiIHx8XHJcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZ2V0UHJvcGVydHlWYWx1ZShcImN1cnNvclwiKSA9PT0gXCJwb2ludGVyXCJcclxuICAgICk7XHJcblxyXG4gICAgc2V0SXNIb3ZlcihcclxuICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhvdmVyYWJsZVwiKSA9PT0gXCJ0cnVlXCJcclxuICAgICk7XHJcblxyXG4gIH07XHJcbiAgLy8gU2V0IHVwIGFuIGVmZmVjdCB0byBhZGQgYW5kIHJlbW92ZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IGxpc3RlbmVyLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBUaGUgZW1wdHkgZGVwZW5kZW5jeSBhcnJheSBlbnN1cmVzIHRoYXQgdGhpcyBlZmZlY3QgcnVucyBvbmx5IG9uY2Ugb24gbW91bnQuXHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgZmxhcmUgYmFzZWQgb24gd2hldGhlciB0aGUgY3Vyc29yIGlzIG92ZXIgYSBjbGlja2FibGUgZWxlbWVudC5cclxuICBjb25zdCBmbGFyZVNpemUgPSBpc1BvaW50ZXIgPyAwIDogMzA7XHJcblxyXG4gIC8vIEFkanVzdCB0aGUgY3Vyc29yIHBvc2l0aW9uIHRvIGNyZWF0ZSBhIHZpc3VhbCBlZmZlY3Qgd2hlbiBvdmVyIGEgY2xpY2thYmxlIGVsZW1lbnQuXHJcbiAgY29uc3QgY3Vyc29yU3R5bGUgPSBpc1BvaW50ZXIgPyB7IGxlZnQ6IFwiLTEwMHB4XCIsIHRvcDogXCItMTAwcHhcIiB9IDoge307XHJcblxyXG4gIC8vIFJlbmRlciB0aGUgY3VzdG9tIGN1cnNvciBlbGVtZW50IHdpdGggZHluYW1pYyBzdHlsZXMgYmFzZWQgb24gY3Vyc29yIHN0YXRlLlxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPEltYWdlXHJcbiAgICAgIGNsYXNzTmFtZT17YGZsYXJlICR7aXNQb2ludGVyID8gXCJwb2ludGVyXCIgOiBcIlwifSAke2lzSG92ZXIgPyBcImhvdmVyYWJsZVwiIDogXCJcIn1gfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC4uLmN1cnNvclN0eWxlLFxyXG4gICAgICAgIGxlZnQ6IGAke3Bvc2l0aW9uLnh9cHhgLFxyXG4gICAgICAgIHRvcDogYCR7cG9zaXRpb24ueX1weGAsXHJcbiAgICAgICAgd2lkdGg6IGAke2ZsYXJlU2l6ZX1weGAsXHJcbiAgICAgICAgaGVpZ2h0OiBgJHtmbGFyZVNpemV9cHhgLFxyXG4gICAgICB9fVxyXG4gICAgICBzcmM9XCIvY3Vyc29yLnN2Z1wiXHJcbiAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgIHdpZHRoPXs1MH0vPlxyXG5cclxuICApO1xyXG59XHJcblxyXG4vLyBFeHBvcnQgdGhlIEZsYXJlQ3Vyc29yIGNvbXBvbmVudCB0byBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9mIHRoZSBhcHBsaWNhdGlvbi5cclxuZXhwb3J0IGRlZmF1bHQgRmxhcmVDdXJzb3I7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkZsYXJlQ3Vyc29yIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIngiLCJ5IiwiaXNQb2ludGVyIiwic2V0SXNQb2ludGVyIiwiaXNIb3ZlciIsInNldElzSG92ZXIiLCJhY2NlbCIsImxhc3RfcG9zX3giLCJsYXN0X3Bvc195IiwidmVsX3giLCJ2ZWxfeSIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRhcmdldCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmbGFyZVNpemUiLCJjdXJzb3JTdHlsZSIsImxlZnQiLCJ0b3AiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cursor.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/local/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"\",\"arguments\":[{\"src\":[{\"path\":\"../public/fonts/HELVETICANEUE-ROMAN_0.woff2\",\"weight\":\"400\"}]}],\"variableName\":\"helvetica_neue\"} */ \"./node_modules/next/font/local/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"\\\",\\\"arguments\\\":[{\\\"src\\\":[{\\\"path\\\":\\\"../public/fonts/HELVETICANEUE-ROMAN_0.woff2\\\",\\\"weight\\\":\\\"400\\\"}]}],\\\"variableName\\\":\\\"helvetica_neue\\\"}\");\n/* harmony import */ var next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cursor */ \"./components/cursor.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {\n                strategy: \"lazyOnload\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${\"G-MQYVFMZXKF\"}`\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {\n                strategy: \"lazyOnload\",\n                children: `\r\n      window.dataLayer = window.dataLayer || [];\r\n      function gtag(){dataLayer.push(arguments);}\r\n      gtag('js', new Date());\r\n      gtag('config', '${\"G-MQYVFMZXKF\"}', {\r\n      page_path: window.location.pathname,\r\n      });\r\n    `\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cursor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 35,\n                columnNumber: 3\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d6648ef63a573b44\",\n                dynamic: [\n                    (next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_8___default().style).fontFamily\n                ],\n                children: `:root{--helvetica-neue:${(next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_8___default().style).fontFamily};--project-border-radius:16px;--gris-coorporativo:#E0E0E0;--ancho-borde:1.5px}`\n            }, void 0, false, void 0, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"d6648ef63a573b44\",\n                        [\n                            (next_font_local_target_css_path_pages_app_js_import_arguments_src_path_public_fonts_HELVETICANEUE_ROMAN_0_woff2_weight_400_variableName_helvetica_neue___WEBPACK_IMPORTED_MODULE_8___default().style).fontFamily\n                        ]\n                    ]\n                ]) + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\portfolio-alba\\\\pages\\\\_app.js\",\n                lineNumber: 45,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.appWithTranslation)(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7O0FBUmtDO0FBQ2Q7QUFDSztBQUNpQjtBQUNmO0FBQ2lCO0FBWWxELE1BQU1NLE1BQU0sQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxpQkFDbkM7OzBCQUNBLDhEQUFDSixvREFBTUE7Z0JBQ0xLLFVBQVM7Z0JBQ1RDLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRUMsY0FBd0MsQ0FBQyxDQUFDOzs7Ozs7MEJBRWhHLDhEQUFDUCxvREFBTUE7Z0JBQUNLLFVBQVM7MEJBQ2QsQ0FBQzs7OztzQkFJZ0IsRUFBRUUsY0FBd0MsQ0FBQzs7O0lBRzdELENBQUM7Ozs7OzswQkFHSCw4REFBQ1IsMERBQVlBOzs7Ozs7OztvQkFJV0gsc01BQW9CLENBQUNlLFVBQVU7O29EQUEvQmYsc01BQW9CLENBQUNlLFVBQVU7OzBCQU12RCw4REFBQ1I7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7NEJBTkFSLHNNQUFvQixDQUFDZSxVQUFVOzs7NEJBTXhDUCxhQUFBQSwrQkFBQUE7Ozs7Ozs7O0FBSWpCLGlFQUFnQkgsZ0VBQWtCQSxDQUFDQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgQ3VzdG9tQ3Vyc29yIGZyb20gJy4uL2NvbXBvbmVudHMvY3Vyc29yJztcclxuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCc7XHJcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XHJcblxyXG5pbXBvcnQgbG9jYWxGb250IGZyb20gJ25leHQvZm9udC9sb2NhbCc7XHJcbmNvbnN0IGhlbHZldGljYV9uZXVlID0gbG9jYWxGb250KHtcclxuICBzcmM6IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogJy4uL3B1YmxpYy9mb250cy9IRUxWRVRJQ0FORVVFLVJPTUFOXzAud29mZjInLFxyXG4gICAgICB3ZWlnaHQ6ICc0MDAnLFxyXG4gICAgfVxyXG4gIF0sXHJcbn0pO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gKFxyXG4gIDw+XHJcbiAgPFNjcmlwdFxyXG4gICAgc3RyYXRlZ3k9XCJsYXp5T25sb2FkXCJcclxuICAgIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTfWB9XHJcbiAgLz5cclxuICA8U2NyaXB0IHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiPlxyXG4gICAge2BcclxuICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgZ3RhZygnY29uZmlnJywgJyR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDU30nLCB7XHJcbiAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICB9KTtcclxuICAgIGB9XHJcbiAgPC9TY3JpcHQ+XHJcblxyXG4gIDxDdXN0b21DdXJzb3IgLz5cclxuICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICA6cm9vdCB7XHJcbiAgICAgIC8qIC4uLiAqL1xyXG4gICAgICAtLWhlbHZldGljYS1uZXVlOiAke2hlbHZldGljYV9uZXVlLnN0eWxlLmZvbnRGYW1pbHl9O1xyXG4gICAgICAtLXByb2plY3QtYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgLS1ncmlzLWNvb3Jwb3JhdGl2bzogI0UwRTBFMDtcclxuICAgICAgLS1hbmNoby1ib3JkZTogMS41cHg7XHJcbiAgICAgIH1cclxuICBgfTwvc3R5bGU+XHJcbiAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgYXBwV2l0aFRyYW5zbGF0aW9uKEFwcCk7Il0sIm5hbWVzIjpbImhlbHZldGljYV9uZXVlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDdXN0b21DdXJzb3IiLCJTY3JpcHQiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdHJhdGVneSIsInNyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTIiwic3R5bGUiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

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