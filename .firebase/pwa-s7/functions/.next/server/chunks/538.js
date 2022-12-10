"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 1538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Leaderboard)
/* harmony export */ });
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_database__WEBPACK_IMPORTED_MODULE_0__]);
_firebase_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class Leaderboard {
    static NB_PPL_PER_LINE = 5;
    constructor(){
        this.db = (0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();
    }
    /**
   * Update the given user in the db
   * @param user
   */ static updateUser(user) {
        const db = (0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.getDatabase)();
        (0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.set)((0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(db, "users/" + user.username), {
            score: user.score,
            classId: user.classId
        }).then(()=>null);
    }
    async init() {
        const dbRef = (0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(this.db);
        const snapshot = await (0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.get)((0,_firebase_database__WEBPACK_IMPORTED_MODULE_0__.child)(dbRef, "/users/"));
        if (snapshot.exists()) {
            this.datas = [];
            Object.keys(snapshot.val()).forEach((key)=>this.datas.push({
                    ...snapshot.val()[key],
                    username: key
                }));
            this.datas.sort((a, b)=>b.score - a.score);
        }
    }
    /**
   * Get the leaderboard at the given page (if page is too high, gives the first one)
   * @param page
   */ getLeaderboard(page) {
        const lookedPage = this.getMaxPage() < page || page < 1 ? 1 : page;
        return this.datas.slice((lookedPage - 1) * Leaderboard.NB_PPL_PER_LINE, lookedPage * Leaderboard.NB_PPL_PER_LINE);
    }
    /**
   * Gives the current maximal page index
   */ getMaxPage() {
        return Math.floor(this.datas.length / Leaderboard.NB_PPL_PER_LINE - 1) + 1;
    }
    /**
   * Get a user data from its username, if the user doesn't exists, returns undefined
   * @param username
   */ getUser(username) {
        return this.datas.find((value)=>value.username == username);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;