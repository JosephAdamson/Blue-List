

chrome.runtime.onMessage.addListener((sender, request, sendResponse) => {
    console.log(sender);
    console.log(request);
    console.log(sendResponse);

    sendResponse("hello there!"); 

});