/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background/background.ts":
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
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
chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => __awaiter(void 0, void 0, void 0, function* () {
    // for initial installation add data to chrome storage
    chrome.storage.sync.get("blueList", (data) => {
        if (!data.blueList) {
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: "09:00",
                    timeTo: "17:00",
                    urls: []
                }
            });
        }
        else {
            // get current list of urls
            const blueList = data.blueList;
            console.log(blueList);
        }
    });
    // if (tab.url === "https://imgur.com/") {
    //     console.log(tab.url);
    //     chrome.alarms.create({
    //         delayInMinutes: 1
    //     });
    //     chrome.alarms.onAlarm.addListener(() => {
    //         // create notification
    //         const options: chrome.notifications.NotificationOptions<true> = {
    //             iconUrl: "favicon-48x48.png",
    //             title: "my notification",
    //             message: "hello this is my message",
    //             type: "basic",
    //             silent: false
    //         }
    //         chrome.notifications.create(options);
    //         if (tab.id) {
    //             chrome.tabs.update(tab.id, { url: "chrome://extensions" });
    //         }
    //     });
    // }
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background/background.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=background.js.map