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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__.PayPalScriptProvider, {\n                deferLoading: true,\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    adminOnly: Component.auth.adminOnly,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children , adminOnly  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/anil/next-js-e commerce/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized?message=admin login required\");\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQytCO0FBQ2Y7QUFDUDtBQUN1QjtBQUUvRCxTQUFTSyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEVBQUUsRUFBRUMsT0FBTyxHQUFFLEdBQUdELFNBQVMsRUFBRSxHQUFFLEVBQUU7SUFDbEUscUJBQ0UsOERBQUNQLDREQUFlO1FBQUNRLE9BQU8sRUFBRUEsT0FBTztrQkFDL0IsNEVBQUNOLHVEQUFhO3NCQUNaLDRFQUFDRSx5RUFBb0I7Z0JBQUNLLFlBQVksRUFBRSxJQUFJOzBCQUNyQ0gsU0FBUyxDQUFDSSxJQUFJLGlCQUNiLDhEQUFDQyxJQUFJO29CQUFDQyxTQUFTLEVBQUVOLFNBQVMsQ0FBQ0ksSUFBSSxDQUFDRSxTQUFTOzhCQUN2Qyw0RUFBQ04sU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTs7Ozs7d0JBQ3ZCLGlCQUVQLDhEQUFDRCxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFFVDs7Ozs7Z0JBQ1Q7Ozs7O1lBQ0EsQ0FDbEI7Q0FDSDtBQUVELFNBQVNJLElBQUksQ0FBQyxFQUFFRSxRQUFRLEdBQUVELFNBQVMsR0FBRSxFQUFFO0lBQ3JDLE1BQU1FLE1BQU0sR0FBR1gsc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVZLE1BQU0sR0FBRUMsSUFBSSxFQUFFUixPQUFPLEdBQUUsR0FBR1AsMkRBQVUsQ0FBQztRQUMzQ2dCLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLGlCQUFpQixJQUFHO1lBQ2xCSixNQUFNLENBQUNLLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ3JEO0tBQ0YsQ0FBQztJQUNGLElBQUlKLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDeEIscUJBQU8sOERBQUNLLEtBQUc7c0JBQUMsWUFBVTs7Ozs7Z0JBQU0sQ0FBQztLQUM5QjtJQUNELElBQUlSLFNBQVMsSUFBSSxDQUFDSixPQUFPLENBQUNhLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ3RDUixNQUFNLENBQUNLLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0tBQzNEO0lBRUQsT0FBT04sUUFBUSxDQUFDO0NBQ2pCO0FBRUQsaUVBQWVSLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGFpbHdpbmQtYW1hem9uYS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gJy4uL3V0aWxzL1N0b3JlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFBheVBhbFNjcmlwdFByb3ZpZGVyIH0gZnJvbSAnQHBheXBhbC9yZWFjdC1wYXlwYWwtanMnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIDxQYXlQYWxTY3JpcHRQcm92aWRlciBkZWZlckxvYWRpbmc9e3RydWV9PlxuICAgICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcbiAgICAgICAgICAgIDxBdXRoIGFkbWluT25seT17Q29tcG9uZW50LmF1dGguYWRtaW5Pbmx5fT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9BdXRoPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYXlQYWxTY3JpcHRQcm92aWRlcj5cbiAgICAgIDwvU3RvcmVQcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuLCBhZG1pbk9ubHkgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG9uVW5hdXRoZW50aWNhdGVkKCkge1xuICAgICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZCcpO1xuICAgIH0sXG4gIH0pO1xuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGlmIChhZG1pbk9ubHkgJiYgIXNlc3Npb24udXNlci5pc0FkbWluKSB7XG4gICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1hZG1pbiBsb2dpbiByZXF1aXJlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJ1c2VTZXNzaW9uIiwiU3RvcmVQcm92aWRlciIsInVzZVJvdXRlciIsIlBheVBhbFNjcmlwdFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiZGVmZXJMb2FkaW5nIiwiYXV0aCIsIkF1dGgiLCJhZG1pbk9ubHkiLCJjaGlsZHJlbiIsInJvdXRlciIsInN0YXR1cyIsImRhdGEiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwicHVzaCIsImRpdiIsInVzZXIiLCJpc0FkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {},\n        paymentMethod: \"\"\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug\n                );\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item\n                ) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug\n                );\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_RESET\":\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: \"\"\n                }\n            };\n        case \"CART_CLEAR_ITEMS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case \"SAVE_SHIPPING_ADDRESS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/anil/next-js-e commerce/utils/Store.js\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNSLElBQUk7b0JBQ2JLLGVBQWUsRUFBRTt3QkFDZixHQUFHRyxLQUFLLENBQUNSLElBQUksQ0FBQ0ssZUFBZTt3QkFDN0IsR0FBR0ksTUFBTSxDQUFDRyxPQUFPO3FCQUNsQjtpQkFDRjthQUNGLENBQUM7UUFDSixLQUFLLHFCQUFxQjtZQUN4QixPQUFPO2dCQUNMLEdBQUdKLEtBQUs7Z0JBQ1JSLElBQUksRUFBRTtvQkFDSixHQUFHUSxLQUFLLENBQUNSLElBQUk7b0JBQ2JNLGFBQWEsRUFBRUcsTUFBTSxDQUFDRyxPQUFPO2lCQUM5QjthQUNGLENBQUM7UUFDSjtZQUNFLE9BQU9KLEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRU0sU0FBU2UsYUFBYSxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFFO0lBQzFDLE1BQU0sRUF0RVIsR0FzRVNoQixLQUFLLEdBdEVkLEdBc0VnQmlCLFFBQVEsTUFBSTdCLGlEQUFVLENBQUNXLE9BQU8sRUFBRVIsWUFBWSxDQUFDO0lBQzNELE1BQU0yQixLQUFLLEdBQUc7UUFBRWxCLEtBQUs7UUFBRWlCLFFBQVE7S0FBRTtJQUNqQyxxQkFBTyw4REFBQzNCLEtBQUssQ0FBQzZCLFFBQVE7UUFBQ0QsS0FBSyxFQUFFQSxLQUFLO2tCQUFHRixRQUFROzs7OztZQUFrQixDQUFDO0NBQ2xFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10YWlsd2luZC1hbWF6b25hLy4vdXRpbHMvU3RvcmUuanM/OGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnQ6IENvb2tpZXMuZ2V0KCdjYXJ0JylcbiAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoJ2NhcnQnKSlcbiAgICA6IHsgY2FydEl0ZW1zOiBbXSwgc2hpcHBpbmdBZGRyZXNzOiB7fSwgcGF5bWVudE1ldGhvZDogJycgfSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQ0FSVF9BRERfSVRFTSc6IHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IG5ld0l0ZW0uc2x1Z1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxuICAgICAgICA/IHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gZXhpc3RJdGVtLm5hbWUgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xuICAgICAgQ29va2llcy5zZXQoJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlICdDQVJUX1JFTU9WRV9JVEVNJzoge1xuICAgICAgY29uc3QgY2FydEl0ZW1zID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnICE9PSBhY3Rpb24ucGF5bG9hZC5zbHVnXG4gICAgICApO1xuICAgICAgQ29va2llcy5zZXQoJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlICdDQVJUX1JFU0VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgY2FydEl0ZW1zOiBbXSxcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHsgbG9jYXRpb246IHt9IH0sXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogJycsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgJ0NBUlRfQ0xFQVJfSVRFTVMnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zOiBbXSB9IH07XG5cbiAgICBjYXNlICdTQVZFX1NISVBQSU5HX0FERFJFU1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlICdTQVZFX1BBWU1FTlRfTUVUSE9EJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiB7XG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkNvb2tpZXMiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJjYXJ0SXRlbXMiLCJzaGlwcGluZ0FkZHJlc3MiLCJwYXltZW50TWV0aG9kIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld0l0ZW0iLCJwYXlsb2FkIiwiZXhpc3RJdGVtIiwiZmluZCIsIml0ZW0iLCJzbHVnIiwibWFwIiwibmFtZSIsInNldCIsInN0cmluZ2lmeSIsImZpbHRlciIsImxvY2F0aW9uIiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();