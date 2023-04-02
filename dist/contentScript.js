/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/contentScript/contentScript.tsx ***!
  \*********************************************/

chrome.runtime.onMessage.addListener((sender, request, sendResponse) => {
    console.log(sender);
    console.log(request);
    console.log(sendResponse);
    sendResponse("hello there!");
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map