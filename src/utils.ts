

const getTab = async () => {
    let res = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    console.log(`This is what a tab looks like: ${res}`);
}


export {
    getTab
}