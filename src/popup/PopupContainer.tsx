import React, { useState, useEffect } from "react";
import "../styles/index.css";
import { getURL } from "../utils"

export default function App() {
    const [tabURL, setFullURL] = useState<string>("");
    const [domainURL, setDomainURL] = useState<string>("");
    const [fullURLSelected, setFullURLSelected] = useState<boolean>(true);


    useEffect(() => {
        const fetchURL = async () => {
            const urlStr = await getURL();
            if (urlStr) {
                setFullURL(urlStr);
                const url = new URL(urlStr);
                setDomainURL(`${url.protocol}//${url.hostname}`);
            }
        }
        fetchURL();
    }, []);


    const addEntry = async () => {
        console.log(`full url: ${fullURLSelected}`);
        
        const url = fullURLSelected ? tabURL : domainURL; 
        chrome.storage.sync.get("blueList", (data) => {
            if (data.blueList.urls) {
                chrome.storage.sync.set({"blueList": {
                    timeFrom: data.blueList.timeFrom,
                    timeTo: data.blueList.timeTo,
                    urls: [...data.blueList.urls, url]
                }});
            } else {
                chrome.storage.sync.set({"blueList": {
                    timeFrom: "09:00",
                    timeTo: "17:00",
                    urls: [url]
                }});
            }
        });
        const res = await chrome.storage.sync.get("blueList");
        console.log(res);
    }


    return (
        <div className="flex flex-col bg-white h-[280px] w-[400px] font-opensans">
            <div className="p-6 w-full">
                <h1 className="text-lg font-bold text-listBlue">/BLUE_LIST/</h1>
                <div className="py-1">
                    <h1 className="text-md text-black font-bold text-md">
                        Add whole url or its domain to your timeout list?
                    </h1>
                </div>
                <div className="flex gap-1 w-full p-2 items-center border-2 border-b-0 border-slate-300">
                    <input className="overflow-y-scroll w-full text-md p-2"
                        type="text" readOnly value={tabURL} />
                    <input className="border-2 border-black" type="radio" name="url-options" checked={fullURLSelected} 
                        onChange={() => {
                            console.log("clacked");
                            setFullURLSelected(fullURLSelected => !fullURLSelected);
                        }}/>
                </div>
                <div className="flex gap-1 w-full p-2 items-center border-2 border-slate-300">
                    <input className="overflow-y-scroll w-full text-md p-2"
                        type="text" readOnly value={domainURL} />
                    <input className="border-2 border-black" type="radio" name="url-options" 
                        onChange={() => {
                            console.log("clicked");
                            setFullURLSelected(fullURLSelected => !fullURLSelected);
                        }}/>
                </div>
                <button className="bg-listBlue text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]"
                    onClick={addEntry}
                >Set</button>
            </div>
        </div>
    );
}