/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/options/OptionsPage.tsx":
/*!*************************************!*\
  !*** ./src/options/OptionsPage.tsx ***!
  \*************************************/
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
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var INPUT;
(function (INPUT) {
    INPUT[INPUT["TEXT"] = 0] = "TEXT";
    INPUT[INPUT["NUMBER"] = 1] = "NUMBER";
})(INPUT || (INPUT = {}));
function OptionsPage() {
    const [fromHours, setFromHours] = (0, react_1.useState)("");
    const [fromMinutes, setFromMinutes] = (0, react_1.useState)("");
    const [toHours, setToHours] = (0, react_1.useState)("");
    const [toMinutes, setToMinutes] = (0, react_1.useState)("");
    const [fromHoursPlaceHolder, setFromHoursPlaceHolder] = (0, react_1.useState)("");
    const [fromMinutesPlaceHolder, setFromMinutesPlaceHolder] = (0, react_1.useState)("");
    const [toHoursPlaceHolder, setToHoursPlaceHolder] = (0, react_1.useState)("");
    const [toMinutesPlaceHolder, setToMinutesPlaceHolder] = (0, react_1.useState)("");
    const [blueListURLs, setBLueListURLS] = (0, react_1.useState)([]);
    const [isInvalidEntry, setIsInvalidEntry] = (0, react_1.useState)(false);
    const [redirectURL, setRedirectURL] = (0, react_1.useState)("");
    const [redirectURLPlaceholder, setRedirectURLPlaceholder] = (0, react_1.useState)("");
    const [isInvalidRedirectURL, setIsInvalidRedirectURL] = (0, react_1.useState)(false);
    const [selectedURLS, setSelectedURLS] = (0, react_1.useState)([]);
    const inputHandler = (e, setState, inputType) => {
        var _a;
        e.preventDefault();
        const userInput = e.currentTarget.value;
        if (inputType === INPUT.NUMBER) {
            if ((((_a = userInput.match(/\d/g)) === null || _a === void 0 ? void 0 : _a.length) === userInput.length) || userInput === "") {
                setState(userInput);
            }
        }
        else {
            if ((userInput.length === userInput.length) || userInput === "") {
                setState(userInput);
            }
        }
    };
    const invalidEntryHandler = (handler) => {
        handler(true);
        setTimeout(() => {
            handler(false);
        }, 3000);
    };
    const setTimeFrame = () => __awaiter(this, void 0, void 0, function* () {
        if (fromHours && fromMinutes && toHours && toMinutes) {
            const data = yield fetchBlueListData();
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: `${fromHours}:${fromMinutes}`,
                    timeTo: `${toHours}:${toMinutes}`,
                    urls: data["blueList"].urls,
                    redirectURL: data["blueList"].redirectURL
                }
            });
            setFromHours("");
            setFromMinutes("");
            setToHours("");
            setToMinutes("");
            setFromHoursPlaceHolder(fromHours);
            setFromMinutesPlaceHolder(fromMinutes);
            setToHoursPlaceHolder(toHours);
            setToMinutesPlaceHolder(toMinutes);
        }
        else {
            invalidEntryHandler(setIsInvalidEntry);
        }
    });
    const redirectURLHandler = () => __awaiter(this, void 0, void 0, function* () {
        if ((0, utils_1.isURL)(redirectURL)) {
            const data = yield fetchBlueListData();
            console.log(data["blueList"].timeFrom);
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: data["blueList"].timeFrom,
                    timeTo: data["blueList"].timeTo,
                    urls: data["blueList"].urls,
                    redirectURL: redirectURL
                }
            });
            setRedirectURL("");
        }
        else {
            invalidEntryHandler(setIsInvalidRedirectURL);
        }
    });
    const fetchBlueListData = () => __awaiter(this, void 0, void 0, function* () {
        const blueListData = yield chrome.storage.sync.get("blueList");
        return blueListData;
    });
    const deleteSelected = () => __awaiter(this, void 0, void 0, function* () {
        const currentData = yield fetchBlueListData();
        const updatedURLs = blueListURLs.filter((url, i) => !selectedURLS[i]);
        chrome.storage.sync.set({
            "blueList": {
                timeFrom: currentData["blueList"].timeFrom,
                timeTo: currentData["blueList"].timeTo,
                urls: [...updatedURLs],
                redirectURL: currentData["blueList"].redirectURL
            }
        });
        setBLueListURLS(updatedURLs);
        setSelectedURLS(Array.from({ length: updatedURLs.length }, (_, i) => false));
    });
    const deleteAll = () => __awaiter(this, void 0, void 0, function* () {
        const currentData = yield fetchBlueListData();
        yield chrome.storage.sync.set({
            "blueList": {
                timeFrom: currentData["blueList"].timeFrom,
                timeTo: currentData["blueList"].timeTo,
                urls: [],
                redirectURL: currentData["blueList"].redirectURL
            }
        });
        const res = yield chrome.storage.sync.get("blueList");
        console.log(res);
        setBLueListURLS([]);
        setSelectedURLS([]);
    });
    const urlClickedHandler = (e) => {
        const index = e.currentTarget.getAttribute("data-id");
        const newSelectedURLS = selectedURLS;
        newSelectedURLS[index] = !selectedURLS[index];
        setSelectedURLS(selectedURLS => [...newSelectedURLS]);
    };
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield fetchBlueListData();
            setBLueListURLS(data["blueList"].urls);
            setSelectedURLS(Array.from({ length: data["blueList"].urls.length }, (_, i) => false));
            setFromHoursPlaceHolder(data["blueList"].timeFrom.split(":")[0]);
            setFromMinutesPlaceHolder(data["blueList"].timeFrom.split(":")[1]);
            setToHoursPlaceHolder(data["blueList"].timeTo.split(":")[0]);
            setToMinutesPlaceHolder(data["blueList"].timeTo.split(":")[1]);
            setRedirectURLPlaceholder(data["blueList"].redirectURL);
            console.log(data);
        });
        fetchData();
    }, []);
    return (react_1.default.createElement("div", { className: "flex flex-col items-center bg-offWhite h-screen w-full font-openSans" },
        react_1.default.createElement("div", { className: "flex md:w-2/3 h-fit w-screen my-2 p-6 flex-col gap-4" },
            react_1.default.createElement("div", { className: "flex w-full md:w-2/3" },
                react_1.default.createElement("h1", { className: "text-listBlue font-bold text-xl" }, "/BLUE_LIST/")),
            react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                react_1.default.createElement("h1", { className: "font-bold text-lg" }, "Select you time out period"),
                react_1.default.createElement("div", { className: "flex flex-col gap-2 md:gap-0 md:flex-row w-full justify-center pb-2" },
                    react_1.default.createElement("div", { className: "flex" },
                        react_1.default.createElement("label", { className: "text-lg mr-4" }, "From"),
                        react_1.default.createElement("label", { className: "flex gap-2 text-lg" },
                            react_1.default.createElement("input", { className: `md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`, type: "text", maxLength: 2, placeholder: fromHoursPlaceHolder, value: fromHours, onChange: (e) => {
                                    inputHandler(e, setFromHours, INPUT.NUMBER);
                                } }),
                            " :",
                            react_1.default.createElement("input", { className: `md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`, type: "text", maxLength: 2, placeholder: fromMinutesPlaceHolder, value: fromMinutes, onChange: (e) => {
                                    inputHandler(e, setFromMinutes, INPUT.NUMBER);
                                } }))),
                    react_1.default.createElement("div", { className: "flex" },
                        react_1.default.createElement("label", { className: "text-lg mr-9 md:mr-2" }, "To"),
                        react_1.default.createElement("label", { className: "flex gap-2 text-lg" },
                            react_1.default.createElement("input", { className: `md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`, type: "text", maxLength: 2, placeholder: toHoursPlaceHolder, value: toHours, onChange: (e) => {
                                    inputHandler(e, setToHours, INPUT.NUMBER);
                                } }),
                            " :",
                            react_1.default.createElement("input", { className: `md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`, type: "text", maxLength: 2, placeholder: toMinutesPlaceHolder, value: toMinutes, onChange: (e) => {
                                    inputHandler(e, setToMinutes, INPUT.NUMBER);
                                } }))))),
            react_1.default.createElement("button", { className: "bg-listBlue w-fit text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]", onClick: setTimeFrame }, "Set"),
            react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                react_1.default.createElement("h1", { className: "font-bold text-lg" }, "Select the page you want the extension to re-direct to"),
                react_1.default.createElement("input", { className: `w-full px-2 border-[1px] py-2 text-lg 
                        ${isInvalidRedirectURL ? "border-red-400" : "border-listBlue"}`, type: "text", onChange: (e) => { inputHandler(e, setRedirectURL, INPUT.TEXT); }, placeholder: redirectURLPlaceholder, value: redirectURL })),
            react_1.default.createElement("button", { className: "bg-listBlue w-fit text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]", onClick: redirectURLHandler }, "Set"),
            react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                react_1.default.createElement("h1", { className: "font-bold text-lg" }, "Current websites on timeout list"),
                react_1.default.createElement("div", { className: " flex flex-col p-2 text-lg text-gray-500 w-full min-h-[100px]\n                        max-h-1/3 w-full overflow-y-auto overflow-x-auto border-[1px] border-listBlue" }, (blueListURLs && blueListURLs.length > 0)
                    ? blueListURLs.map((url, i) => react_1.default.createElement("a", { key: (0, uuid_1.v4)(), "data-id": i, className: `p-1 m-1 w-full whitespace-nowrap ${selectedURLS[i] ? "bg-red-300" : ""}`, onClick: urlClickedHandler }, url))
                    : react_1.default.createElement("h1", { className: "p-1" }, "Looks like you haven't added any sites to your blue list yet!"))),
            react_1.default.createElement("div", { className: "flex justify-between" },
                react_1.default.createElement("button", { className: "bg-listBlue text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]", onClick: deleteSelected }, "Delete"),
                react_1.default.createElement("button", { className: "bg-red-600 text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]", onClick: deleteAll }, "Clear List")))));
}
exports["default"] = OptionsPage;


/***/ }),

/***/ "./src/options/options.tsx":
/*!*********************************!*\
  !*** ./src/options/options.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
__webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
const OptionsPage_1 = __importDefault(__webpack_require__(/*! ./OptionsPage */ "./src/options/OptionsPage.tsx"));
const container = document.createElement("div");
document.body.appendChild(container);
const root = client_1.default.createRoot(container);
root.render(react_1.default.createElement(OptionsPage_1.default, null));


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
/******/ 			"options": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-88f9d9","vendors-node_modules_uuid_dist_commonjs-browser_index_js","src_styles_index_css-src_utils_ts"], () => (__webpack_require__("./src/options/options.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.js.map