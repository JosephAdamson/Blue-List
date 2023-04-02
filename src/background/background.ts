import { getTab } from "../utils";


chrome.tabs.onUpdated.addListener(async (tabID: number,
    changeInfo: chrome.tabs.TabChangeInfo,
    tab: chrome.tabs.Tab) => {

    // for initial installation add data to chrome storage
    chrome.storage.sync.get("blueList", (data) => {
        if (!data.blueList) {
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: "09:00",
                    timeTo: "17:00",
                    urls: []
                }
            })
        } else {
            console.log(data);
        }
    })

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
});


