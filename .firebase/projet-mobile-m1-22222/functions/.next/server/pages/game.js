(() => {
var exports = {};
exports.id = 203;
exports.ids = [203];
exports.modules = {

/***/ 8484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Mage.ts": 9384,
	"./Thief.ts": 1389,
	"./Unknown.ts": 5719,
	"./Warrior.ts": 6035
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8484;

/***/ }),

/***/ 5123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ForestTent.ts": 5436,
	"./StartingEventMage.ts": 7304,
	"./StartingEventThief.ts": 2029,
	"./StartingEventWarrior.ts": 3940,
	"./Unknown.ts": 2925
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5123;

/***/ }),

/***/ 6665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChoiceBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9614);
/* harmony import */ var _model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1717);





function ChoiceBox(props) {
    const classe = props.classe;
    const handleChoice = props.handleChoice;
    function manageEventChoice() {
        handleChoice(classe);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            borderColor: "black",
            borderWidth: "1px",
            height: "50vh",
            backgroundImage: `url(${_model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_4__/* .ClassController.getImage */ .G.getImage(classe)})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        },
        as: "button",
        onClick: manageEventChoice,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            color: _theme__WEBPACK_IMPORTED_MODULE_3__/* .colors.fonts.white */ .O.fonts.white,
            fontSize: _theme__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.fontSize.h1 */ .A.fontSize.h1,
            children: classe.nom
        })
    });
}


/***/ }),

/***/ 5910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ choiceClass)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChoiceBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6665);
/* harmony import */ var _DescriptionAndSubmitBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6303);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1717);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DescriptionAndSubmitBox__WEBPACK_IMPORTED_MODULE_3__]);
_DescriptionAndSubmitBox__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function choiceClass(props) {
    const RootSetPlayerClass = props.RootSetPlayerClass;
    const { 0: selectedClass , 1: setSelectedClass  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_5__/* .ClassController.getById */ .G.getById("Unknown"));
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    function handleChoice(classe) {
        //make sure that setSelected state is updated prev state nextstate
        setDescription(classe.description);
        setSelectedClass(classe);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
            columns: 3,
            spacing: "5px",
            h: "100%",
            children: [
                _model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_5__/* .ClassController.getClassesByIds */ .G.getClassesByIds([
                    "Mage",
                    "Thief",
                    "Warrior"
                ]).map((classe)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChoiceBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            classe: classe,
                            handleChoice: handleChoice
                        })
                    })),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DescriptionAndSubmitBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    description: description,
                    selectedClass: selectedClass,
                    RootSetPlayerClass: RootSetPlayerClass
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DescriptionAndSubmitBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9614);
/* harmony import */ var _model_Leaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_model_Leaderboard__WEBPACK_IMPORTED_MODULE_4__]);
_model_Leaderboard__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function DescriptionAndSubmitBox(props) {
    const description = props.description;
    const RootSetPlayerClass = props.RootSetPlayerClass;
    const color = description !== null ? "teal" : "red";
    const selectedClass = props.selectedClass;
    const handleClick = ()=>{
        const ldb = new _model_Leaderboard__WEBPACK_IMPORTED_MODULE_4__/* .Leaderboard */ .s();
        ldb.init().then(()=>{
            let user = ldb.getUser(localStorage.getItem("username"));
            if (user) {
                user.classId = selectedClass.nom;
            } else {
                user = {
                    username: localStorage.getItem("username"),
                    score: 0,
                    classId: selectedClass.nom
                };
            }
            _model_Leaderboard__WEBPACK_IMPORTED_MODULE_4__/* .Leaderboard.updateUser */ .s.updateUser(user);
            RootSetPlayerClass(selectedClass);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
            borderColor: "black",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            width: "75vw",
            marginLeft: "12.5vw",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: _theme__WEBPACK_IMPORTED_MODULE_3__/* .colors.fonts.black */ .O.fonts.black,
                fontSize: _theme__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.fontSize.h5 */ .A.fontSize.h5,
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                colorScheme: color,
                onClick: handleClick,
                children: "Valider le choix"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Event)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: ./theme.js
var theme = __webpack_require__(9614);
// EXTERNAL MODULE: ./model/Events/EventController.ts
var EventController = __webpack_require__(825);
// EXTERNAL MODULE: ./model/Events/IOutput.ts
var IOutput = __webpack_require__(821);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/event/EventBox.tsx








function positionFromDirection(direction) {
    switch(direction){
        case IOutput/* Direction.up */.Nm.up:
            return {
                top: "12%"
            };
        case IOutput/* Direction.down */.Nm.down:
            return {
                bottom: "25%"
            };
        default:
            return {
                [IOutput/* Direction */.Nm[direction]]: "20%",
                bottom: "50%"
            };
    }
}
function handler(event, setEvent, output, setGoMinigame) {
    if (output.willMinigame) {
        setGoMinigame(output);
        return;
    }
    setEvent(EventController/* EventController.getById */.q.getById(output.nextEvent));
}
function EventBox(props) {
    const event = props.event;
    let { 0: goWithOutput , 1: setGoWithOutput  } = (0,external_react_.useState)(IOutput/* Unknown */.Of);
    let router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (goWithOutput == IOutput/* Unknown */.Of) {
            return;
        }
        localStorage.setItem("miniGameId", goWithOutput.whichMinigame ?? "random");
        localStorage.setItem("nextEvent", goWithOutput.nextEvent);
        router.push("/minigame").then(()=>null);
    }, [
        goWithOutput
    ]);
    const stringToArrow = {
        up: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowUpIcon, {}),
        down: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowDownIcon, {}),
        left: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowLeftIcon, {}),
        right: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ArrowRightIcon, {})
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            w: theme/* breakpoints.eventCardSize */.A.eventCardSize,
            sx: {
                display: "flex",
                justifyContent: "center",
                borderColor: "black",
                borderWidth: "1px",
                height: "80vh",
                backgroundImage: `url(${EventController/* EventController.getImage */.q.getImage(event)})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            },
            children: [
                event.sorties.map((output)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "",
                        id: IOutput/* Direction */.Nm[output.direction],
                        color: "white",
                        sx: {
                            position: "absolute",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            ...positionFromDirection(output.direction)
                        },
                        icon: stringToArrow[IOutput/* Direction */.Nm[output.direction]],
                        onClick: ()=>handler(event, props.setEvent, output, setGoWithOutput)
                    });
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    position: "absolute",
                    bottom: "20%",
                    color: theme/* colors.fonts.white */.O.fonts.white,
                    fontSize: theme/* breakpoints.fontSize.h1 */.A.fontSize.h1,
                    children: event.nom
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/inventory/Inventory.jsx



const Inventory = (props)=>{
    const SIZE = 4;
    const inventory = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        }, 
    ];
    console.log("inventory", inventory);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        sx: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
        },
        children: inventory.map((item, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    width: "54px",
                    bg: "tomato",
                    h: "54px",
                    sx: {
                        float: "left",
                        margin: "2px",
                        borderColor: "black",
                        borderWidth: "1px"
                    }
                })
            }, item.id + index);
        })
    });
};
/* harmony default export */ const inventory_Inventory = (Inventory);

;// CONCATENATED MODULE: ./components/event/Event.tsx





function Event(props) {
    const event = props.event;
    const setEvent = props.setEvent;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "90vh",
                    width: "100%"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                    columns: 4,
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(EventBox, {
                        event: event,
                        setEvent: setEvent
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(inventory_Inventory, {})
        ]
    });
}


/***/ }),

/***/ 1717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ ClassController)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5729);

class ClassController {
    static getById(id) {
        return __webpack_require__(8484)(`./${id}.ts`).classInfos;
    }
    static getClassesByIds(ids) {
        return ids.map((id)=>this.getById(id));
    }
    static getImage(classInfo) {
        return classInfo.image === "unknown" ? _Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UNKNOWN_PATH */ .Z.UNKNOWN_PATH : `${_Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].IMAGE_PATH */ .Z.IMAGE_PATH}class/${classInfo.image}${_Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].IMAGE_EXT */ .Z.IMAGE_EXT}`;
    }
}


/***/ }),

/***/ 9384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classInfos": () => (/* binding */ classInfos)
/* harmony export */ });
const classInfos = {
    nom: "Mage",
    description: "Le mage est un personnage qui utilise la magie pour attaquer ses ennemis.",
    image: "mage"
};


/***/ }),

/***/ 1389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classInfos": () => (/* binding */ classInfos)
/* harmony export */ });
const classInfos = {
    nom: "Thief",
    description: "Le voleur est un personnage qui utilise la ruse pour attaquer ses ennemis.",
    image: "thief"
};


/***/ }),

/***/ 5719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classInfos": () => (/* binding */ classInfos)
/* harmony export */ });
const classInfos = {
    nom: "Unknown",
    description: "Unknown",
    image: "unknown"
};


/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classInfos": () => (/* binding */ classInfos)
/* harmony export */ });
const classInfos = {
    nom: "Warrior",
    description: "Le guerrier est un personnage qui utilise la force pour attaquer ses ennemis.",
    image: "warrior"
};


/***/ }),

/***/ 5729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
    static IMAGE_PATH = "/static/images/";
    static IMAGE_EXT = ".png";
    static UNKNOWN_PATH = "/static/images/unknown.png";
    static MINIGAME_PATH = Constants.IMAGE_PATH + "minigames/";
}


/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getStaticPropsEvent),
/* harmony export */   "q": () => (/* binding */ EventController)
/* harmony export */ });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5729);

let eventIdList;
async function getStaticPropsEvent() {
    const { readdirSync  } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7147, 23));
    return readdirSync("./model/Events/EventList/").map((file)=>{
        return file.slice(0, -3);
    });
}
class EventController {
    static init(initializer) {
        eventIdList = initializer.slice();
    }
    static getById(id) {
        return (eventIdList.includes(id) ? __webpack_require__(5123)(`./${id}.ts`) : __webpack_require__(2925)).eventInfos;
    }
    static getEventsByIds(ids) {
        return ids.map((id)=>this.getById(id));
    }
    static getImage(eventInfos) {
        console.log(`${_Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].IMAGE_PATH */ .Z.IMAGE_PATH}event/${eventInfos.image}${_Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].IMAGE_EXT */ .Z.IMAGE_EXT}`);
        return eventInfos.image === "unknown" ? _Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UNKNOWN_PATH */ .Z.UNKNOWN_PATH : `${_Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].IMAGE_PATH */ .Z.IMAGE_PATH}events/${eventInfos.image}${_Constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].IMAGE_EXT */ .Z.IMAGE_EXT}`;
    }
    static pickRandomEvent() {
        return this.pickRandomEventInIdList(eventIdList.filter((v)=>v !== "Unknown"));
    }
    static pickRandomEventInIdList(ids) {
        return this.getById(ids[Math.floor(Math.random() * ids.length)]);
    }
    static getByClassRequirement(classe) {
        let foundIEvent = undefined;
        eventIdList.forEach((event)=>{
            const e = EventController.getById(event);
            if (!foundIEvent && e.classe === classe) foundIEvent = e;
        });
        return foundIEvent ?? this.pickRandomEvent();
    }
}


/***/ }),

/***/ 5436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventInfos": () => (/* binding */ eventInfos)
/* harmony export */ });
/* harmony import */ var _IOutput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(821);

const eventInfos = {
    nom: "Aire de repos d'Yggdrisal",
    description: "Vous vous reposez dans l'aire de repos d'Yggdrisal.",
    image: "tent_forest",
    sorties: [
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.up */ .Nm.up,
            nextEvent: "StartingEventMage",
            willMinigame: true,
            whichMinigame: "Memory"
        },
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.down */ .Nm.down,
            nextEvent: "StartingEventMage",
            willMinigame: true,
            whichMinigame: "Panier"
        },
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.left */ .Nm.left,
            nextEvent: "StartingEventMage",
            willMinigame: true,
            whichMinigame: "RPS"
        },
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.right */ .Nm.right,
            nextEvent: "StartingEventMage",
            willMinigame: true
        }, 
    ]
};


/***/ }),

/***/ 7304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventInfos": () => (/* binding */ eventInfos)
/* harmony export */ });
/* harmony import */ var _IOutput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(821);

const eventInfos = {
    nom: "Acad\xe9mie des mages",
    description: "Vous avez \xe9t\xe9 accept\xe9 \xe0 l'acad\xe9mie des mages.",
    image: "mage_00",
    sorties: [
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.up */ .Nm.up,
            nextEvent: "ForestTent",
            willMinigame: false
        },
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.down */ .Nm.down,
            nextEvent: "StartingEventMage",
            willMinigame: false
        },
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.left */ .Nm.left,
            nextEvent: "StartingEventMage",
            willMinigame: false
        },
        {
            direction: _IOutput__WEBPACK_IMPORTED_MODULE_0__/* .Direction.right */ .Nm.right,
            nextEvent: "StartingEventMage",
            willMinigame: false
        }
    ],
    classe: "Mage"
};


/***/ }),

/***/ 2029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventInfos": () => (/* binding */ eventInfos)
/* harmony export */ });
const eventInfos = {
    nom: "",
    description: "",
    image: "unknown",
    sorties: [],
    classe: "Voleur"
};


/***/ }),

/***/ 3940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventInfos": () => (/* binding */ eventInfos)
/* harmony export */ });
const eventInfos = {
    nom: "",
    description: "",
    image: "unknown",
    sorties: [],
    classe: "Guerrier"
};


/***/ }),

/***/ 2925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventInfos": () => (/* binding */ eventInfos)
/* harmony export */ });
const eventInfos = {
    sorties: [],
    nom: "Unknown",
    description: "Unknown",
    image: "unknown"
};


/***/ }),

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nm": () => (/* binding */ Direction),
/* harmony export */   "Of": () => (/* binding */ Unknown)
/* harmony export */ });
/* unused harmony export IOutput */
class IOutput {
}
var Direction;
(function(Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
const Unknown = {
    nextEvent: "",
    willMinigame: false,
    direction: Direction.up
};


/***/ }),

/***/ 701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ game),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_choiceClass_ChoiceClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5910);
/* harmony import */ var _components_event_Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2525);
/* harmony import */ var _model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1717);
/* harmony import */ var _model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(825);
/* harmony import */ var _model_Leaderboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_choiceClass_ChoiceClass__WEBPACK_IMPORTED_MODULE_2__, _model_Leaderboard__WEBPACK_IMPORTED_MODULE_6__]);
([_components_choiceClass_ChoiceClass__WEBPACK_IMPORTED_MODULE_2__, _model_Leaderboard__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getStaticProps() {
    return {
        props: {
            prepareEventLists: await (0,_model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .getStaticPropsEvent */ .c)()
        }
    };
}
function game({ prepareEventLists  }) {
    _model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .EventController.init */ .q.init(prepareEventLists);
    let { 0: hasBeenUseEffected , 1: setHasBeenUseEffected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const defaultClass = _model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_4__/* .ClassController.getById */ .G.getById("Unknown");
    const { 0: playerClass , 1: setPlayerClass  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_4__/* .ClassController.getById */ .G.getById("Unknown"));
    const { 0: currentEvent , 1: setCurrentEvent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .EventController.getById */ .q.getById("Unknown"));
    const step = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const ldb = new _model_Leaderboard__WEBPACK_IMPORTED_MODULE_6__/* .Leaderboard */ .s();
        ldb.init().then(()=>{
            const user = ldb.getUser(localStorage.getItem("username"));
            if (user) {
                setPlayerClass(_model_Classes_ClassController__WEBPACK_IMPORTED_MODULE_4__/* .ClassController.getById */ .G.getById(user.classId));
                setCurrentEvent(localStorage.getItem("nextEvent") ? _model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .EventController.getById */ .q.getById(localStorage.getItem("nextEvent")) : _model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .EventController.pickRandomEvent */ .q.pickRandomEvent());
                localStorage.removeItem("miniGameId");
                localStorage.removeItem("nextEvent");
            }
            setHasBeenUseEffected(true);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (playerClass && step.current) {
            setCurrentEvent(_model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .EventController.pickRandomEvent */ .q.pickRandomEvent());
        } else {
            setCurrentEvent(_model_Events_EventController__WEBPACK_IMPORTED_MODULE_5__/* .EventController.getByClassRequirement */ .q.getByClassRequirement(playerClass.nom));
        }
        setHasBeenUseEffected(true);
    }, [
        playerClass
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: hasBeenUseEffected ? playerClass == defaultClass ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_choiceClass_ChoiceClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            RootSetPlayerClass: setPlayerClass
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_event_Event__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            setEvent: setCurrentEvent,
            event: currentEvent
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 628:
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/database");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [538,614], () => (__webpack_exec__(701)));
module.exports = __webpack_exports__;

})();