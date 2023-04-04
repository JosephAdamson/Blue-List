import { getTab, buildTimeStamp } from "../utils";


chrome.tabs.onUpdated.addListener(async (tabID: number,
    changeInfo: chrome.tabs.TabChangeInfo,
    tab: chrome.tabs.Tab) => {

    // for initial installation add data to chrome storage
    chrome.storage.sync.get("blueList", async (data) => {
        if (!data.blueList) {
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: "09:00",
                    timeTo: "17:00",
                    urls: []
                }
            });

        } else {
            const blueList = data.blueList;
            if (tab.url) { 
                const currentURL = new URL(tab.url);
                console.log(currentURL);

                if (blueList.urls.includes(currentURL.href) || blueList.urls.includes(`${currentURL.origin}/`)) {

                    const current = new Date();
                    const from = new Date(buildTimeStamp(blueList["timeFrom"]));
                    const to = new Date(buildTimeStamp(blueList["timeTo"]));
    
                    if (current >= from && current <= to) {
                        const options: chrome.notifications.NotificationOptions<true> = {
                            iconUrl: "favicon-48x48.png",
                            title: "OOPS",
                            message: `Looks like you are trying to access a site on your timeout list, check out options page for more details`,
                            type: "basic",
                            silent: false,
                            priority: 2
                        }
                        chrome.notifications.create(options);
                        if (tab.id) {
                            chrome.tabs.update(tab.id, { url: "chrome://extensions" });
                        }
                    }
                }

            }
        }
    });
});


