

const getTab = async () => {
    let tab = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    return tab;
}


const getURL = async () => {
    const currentTab = await getTab();
    return currentTab[0].url;
}


export {
    getTab,
    getURL
}