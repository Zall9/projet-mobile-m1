"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ database)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_database__WEBPACK_IMPORTED_MODULE_1__]);
([_firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebase = __webpack_require__(6207);
const firebaseConfig = {
    apiKey: firebase.apiKey,
    authDomain: firebase.authDomain,
    databaseURL: firebase.dbURL,
    projectId: firebase.projectId,
    storageBucket: firebase.bucket,
    messagingSenderId: firebase.senderId,
    appId: firebase.appId
};
// Initialize Firebase
const app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = (0,_firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_ServerSideDB_ServerSideDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_model_ServerSideDB_ServerSideDB__WEBPACK_IMPORTED_MODULE_2__]);
_model_ServerSideDB_ServerSideDB__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function MyApp({ Component , pageProps  }) {
    if (_model_ServerSideDB_ServerSideDB__WEBPACK_IMPORTED_MODULE_2__/* .database.type */ .F.type) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = import("@firebase/app");;

/***/ }),

/***/ 628:
/***/ ((module) => {

module.exports = import("@firebase/database");;

/***/ }),

/***/ 6207:
/***/ ((module) => {

module.exports = JSON.parse('{"dbURL":"https://projet-mobile-m1-22222-default-rtdb.europe-west1.firebasedatabase.app/","apiKey":"AIzaSyDK0dJw7_eizeBdsopEKf-IWPtlqjRKH-E","authDomain":"projet-mobile-m1-22222.firebaseapp.com","projectId":"projet-mobile-m1-22222","bucket":"projet-mobile-m1-22222.appspot.com","senderId":"95370679054","appId":"1:95370679054:web:395cfebdf729d5730e7d5f"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5656));
module.exports = __webpack_exports__;

})();