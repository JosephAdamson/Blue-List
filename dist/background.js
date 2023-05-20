/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background/background.ts":
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => __awaiter(void 0, void 0, void 0, function* () {
    // for initial installation add data to chrome storage
    chrome.storage.sync.get("blueList", (data) => __awaiter(void 0, void 0, void 0, function* () {
        if (!data.blueList) {
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: "09:00",
                    timeTo: "17:00",
                    urls: [],
                    // use extension tab as default redirect page
                    redirectURL: "chrome://extensions"
                }
            });
        }
        else {
            if (tab.url) {
                const currentURL = new URL(tab.url);
                if (data["blueList"].urls.includes(currentURL.href) ||
                    data["blueList"].urls.includes(`${currentURL.origin}`)) {
                    const current = new Date();
                    const from = new Date((0, utils_1.buildTimeStamp)(data["blueList"].timeFrom));
                    const to = new Date((0, utils_1.buildTimeStamp)(data["blueList"].timeTo));
                    // we are going to assume the interval the the user provides wraps around
                    // to the next day in this case
                    if (to > from) {
                        to.setDate(to.getDate() + 1);
                    }
                    if (current >= from && current <= to) {
                        const options = {
                            iconUrl: "favicon-48x48.png",
                            title: "OOPS",
                            message: `Looks like you are trying to access a site on your timeout list,
                             check out options page for more details`,
                            type: "basic",
                            silent: false,
                            priority: 2
                        };
                        chrome.notifications.create(options);
                        if (tab.id) {
                            chrome.tabs.update(tab.id, { url: data["blueList"].redirectURL });
                        }
                    }
                }
            }
        }
    }));
}));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {


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
exports.isURL = exports.buildTimeStamp = exports.getURL = exports.getTab = void 0;
const getTab = () => __awaiter(void 0, void 0, void 0, function* () {
    let [tab] = yield chrome.tabs.query({ active: true, lastFocusedWindow: true });
    return tab;
});
exports.getTab = getTab;
const getURL = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentTab = yield getTab();
    return currentTab.url;
});
exports.getURL = getURL;
const buildTimeStamp = (time) => {
    const current = new Date();
    const ts = `${current.getFullYear()}-${current.getMonth() < 10
        ? `0${current.getMonth() + 1}`
        : current.getMonth()}-${current.getDate() < 10
        ? `0${current.getDate()}`
        : current.getDate()}T${time}`;
    return ts;
};
exports.buildTimeStamp = buildTimeStamp;
const isURL = (url) => {
    try {
        const providedUrl = new URL(url);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.isURL = isURL;


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/background/background.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map