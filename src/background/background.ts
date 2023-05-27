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
                    urls: [],
                    // use extension tab as default redirect page
                    redirectURL: "chrome://extensions"
                }
            });
        } else {
            if (tab.url) { 
                const currentURL = new URL(tab.url);

                if (data["blueList"].urls.includes(currentURL.href) ||
                    data["blueList"].urls.includes(`${currentURL.origin}`)) {

                    const current = new Date();
                    const from = new Date(buildTimeStamp(data["blueList"].timeFrom));
                    const to = new Date(buildTimeStamp(data["blueList"].timeTo));

                    // we are going to assume the interval the the user provides wraps 
                    // around to the next day in this case
                    if (from > to) {
                        to.setDate(to.getDate() + 1);
                    }

                    if (current >= from && current <= to) {
                        console.log("pop");
                        const options: chrome.notifications.NotificationOptions<true> = {
                            iconUrl: "favicon-48x48.png",
                            title: "OOPS",
                            message: `Looks like you are trying to access a site on your timeout list,
                             check out options page for more details`,
                            type: "basic",
                            silent: false,
                            priority: 2
                        }
                        chrome.notifications.create(options);
                        if (tab.id) {
                            chrome.tabs.update(tab.id, { url: data["blueList"].redirectURL });
                        }
                    }
                }

            }
        }
    });
});


