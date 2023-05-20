

const getTab = async () => {
    let [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    return tab;
}


const getURL = async () => {
    const currentTab = await getTab();
    return currentTab.url;
}


const buildTimeStamp = (time: string) => {
    const current = new Date();
    const ts = `${current.getFullYear()}-${
        current.getMonth() < 10 
            ? `0${current.getMonth() + 1}`
            : current.getMonth()
        }-${current.getDate() < 10
            ? `0${current.getDate()}`
            : current.getDate() }T${time}`;

    return ts;
}


const isURL = (url: string) => {
    try {
        const providedUrl = new URL(url); 
        return true;
    } catch (e) {
        return false;
    }
}


const fetchBlueListData = async () => {
    const blueListData = await chrome.storage.sync.get("blueList");
    return blueListData;
}


export {
    getTab,
    getURL,
    buildTimeStamp,
    isURL,
    fetchBlueListData
}