/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/App.tsx":
/*!***************************!*\
  !*** ./src/popup/App.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
function App() {
    const [tabURL, setFullURL] = (0, react_1.useState)("");
    const [domainURL, setDomainURL] = (0, react_1.useState)("");
    const [hours, setHours] = (0, react_1.useState)("");
    const [minutes, setMinutes] = (0, react_1.useState)("");
    const [seconds, setSeconds] = (0, react_1.useState)("");
    const [invalidEntry, setIsInvalidEntry] = (0, react_1.useState)(false);
    const [fullURLSelected, setFullURLSelected] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const fetchURL = () => __awaiter(this, void 0, void 0, function* () {
            const urlStr = yield (0, utils_1.getURL)();
            if (urlStr) {
                setFullURL(urlStr);
                const url = new URL(urlStr);
                setDomainURL(`${url.protocol}//${url.hostname}`);
            }
        });
        fetchURL();
    }, []);
    const inputHandler = (e, setState) => {
        var _a;
        e.preventDefault();
        const userInput = e.currentTarget.value;
        if ((userInput.match(/\d/g) && ((_a = userInput.match(/\d/g)) === null || _a === void 0 ? void 0 : _a.length) === userInput.length)
            || userInput === "") {
            setState(userInput);
        }
    };
    const invalidEntryHandler = () => {
        setIsInvalidEntry(true);
        setTimeout(() => {
            setIsInvalidEntry(false);
        }, 3000);
    };
    const addEntry = () => __awaiter(this, void 0, void 0, function* () {
        // validate user input
        if (hours && minutes && seconds) {
            console.log(`${hours}:${minutes}:${seconds}`);
            console.log(`full url: ${fullURLSelected}`);
            //const blueList = await chrome.storage.sync.get(["blueList"]);
        }
        else {
            invalidEntryHandler();
        }
    });
    return (react_1.default.createElement("div", { className: "flex flex-col bg-white h-[300px] w-[400px] font-opensans" },
        react_1.default.createElement("div", { className: "p-6 w-full" },
            react_1.default.createElement("h1", { className: "text-lg font-bold text-listBlue" }, "/BLUE_LIST/"),
            react_1.default.createElement("div", { className: "py-1" },
                react_1.default.createElement("h1", { className: "text-md text-black font-bold text-md" }, "Would you like to set a daily timeout for the whole site or its domain?")),
            react_1.default.createElement("div", { className: "flex gap-1 w-full p-2 items-center border-2 border-b-0 border-slate-300" },
                react_1.default.createElement("input", { className: "overflow-y-scroll w-full text-md p-2", type: "text", readOnly: true, value: tabURL }),
                react_1.default.createElement("input", { className: "border-2 border-black", type: "radio", name: "url-options", checked: fullURLSelected, onChange: () => {
                        console.log("clacked");
                        setFullURLSelected(fullURLSelected => !fullURLSelected);
                    } })),
            react_1.default.createElement("div", { className: "flex gap-1 w-full p-2 items-center border-2 border-slate-300" },
                react_1.default.createElement("input", { className: "overflow-y-scroll w-full text-md p-2", type: "text", readOnly: true, value: domainURL }),
                react_1.default.createElement("input", { className: "border-2 border-black", type: "radio", name: "url-options", onChange: () => {
                        console.log("clicked");
                        setFullURLSelected(fullURLSelected => !fullURLSelected);
                    } })),
            react_1.default.createElement("div", { className: "w-[200px] my-2" },
                react_1.default.createElement("div", { className: "flex py-1 w-full text-lg" },
                    react_1.default.createElement("div", { className: `flex w-1/3 gap-1 border-2 border-r-0 justify-center
                        ${invalidEntry ? "border-red-500" : "border-slate-300"}` },
                        react_1.default.createElement("input", { className: "overflow-y-scroll w-4/5 text-md p-1", type: "text", maxLength: 2, placeholder: "00h", onChange: (e) => {
                                inputHandler(e, setHours);
                            }, value: hours })),
                    react_1.default.createElement("div", { className: `flex w-1/3 gap-1 border-2 border-r-0 justify-center 
                        ${invalidEntry ? "border-red-500" : "border-slate-300"}` },
                        react_1.default.createElement("input", { className: "overflow-y-scroll w-4/5 text-md p-1", type: "text", maxLength: 2, placeholder: "00m", onChange: (e) => {
                                inputHandler(e, setMinutes);
                            }, value: minutes })),
                    react_1.default.createElement("div", { className: `flex w-1/3 gap-1 border-2 justify-center
                        ${invalidEntry ? "border-red-500" : "border-slate-300"}` },
                        react_1.default.createElement("input", { className: "overflow-y-scroll w-4/5 text-md p-1", type: "text", maxLength: 2, placeholder: "00s", onChange: (e) => {
                                inputHandler(e, setSeconds);
                            }, value: seconds })))),
            react_1.default.createElement("button", { className: "bg-listBlue text-white py-1 px-2 text-lg hover:brightness-[1.5]", onClick: addEntry }, "Set"))));
}
exports["default"] = App;


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
const App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/popup/App.tsx"));
const container = document.createElement("div");
document.body.appendChild(container);
const root = client_1.default.createRoot(container);
root.render(react_1.default.createElement(App_1.default, null));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTab": () => (/* binding */ getTab),
/* harmony export */   "getURL": () => (/* binding */ getURL)
/* harmony export */ });


const getTab = async () => {
    let tab = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    return tab;
}


const getURL = async () => {
    const currentTab = await getTab();
    return currentTab[0].url;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblue_list"] = self["webpackChunkblue_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-88f9d9","src_styles_index_css"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map