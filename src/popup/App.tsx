import React, { useState, useEffect, ChangeEvent } from "react";
import "../styles/index.css";
import { getURL } from "../utils"

export default function App() {
    const [tabURL, setFullURL] = useState<string>("");
    const [domainURL, setDomainURL] = useState<string | undefined>("");
    const [hours, setHours] = useState<string>("");
    const [minutes, setMinutes] = useState<string>("");
    const [seconds, setSeconds] = useState<string>("");
    const [invalidEntry, setIsInvalidEntry] = useState<boolean>(false);
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


    const inputHandler = (e: ChangeEvent<HTMLInputElement>, setState: (state: string) => void) => {
        e.preventDefault();
        const userInput = e.currentTarget.value;
        if ((userInput.match(/\d/g) && userInput.match(/\d/g)?.length === userInput.length)
            || userInput === "") {
            setState(userInput);
        }
    }


    const invalidEntryHandler = () => {
        setIsInvalidEntry(true);
        setTimeout(() => {
            setIsInvalidEntry(false);
        }, 3000);
    }


    const addEntry = async () => {
        // validate user input
        if (hours && minutes && seconds) {
            console.log(`${hours}:${minutes}:${seconds}`);
            console.log(`full url: ${fullURLSelected}`);
            //const blueList = await chrome.storage.sync.get(["blueList"]);
        } else {
            invalidEntryHandler();
        }
    }


    return (
        <div className="flex flex-col bg-white h-[300px] w-[400px] font-opensans">
            <div className="p-6 w-full">
                <h1 className="text-lg font-bold text-listBlue">/BLUE_LIST/</h1>
                <div className="py-1">
                    <h1 className="text-md text-black font-bold text-md">
                        Would you like to set a daily timeout for the whole site or its domain?
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
                <div className="w-[200px] my-2">
                    <div className="flex py-1 w-full text-lg">
                        <div className={`flex w-1/3 gap-1 border-2 border-r-0 justify-center
                        ${invalidEntry ? "border-red-500" : "border-slate-300"}`}>
                            <input className="overflow-y-scroll w-4/5 text-md p-1"
                                type="text" maxLength={2} placeholder={"00h"} onChange={(e) => {
                                    inputHandler(e, setHours)
                                }} value={hours} />
                        </div>
                        <div className={`flex w-1/3 gap-1 border-2 border-r-0 justify-center 
                        ${invalidEntry ? "border-red-500" : "border-slate-300"}`}>
                            <input className="overflow-y-scroll w-4/5 text-md p-1"
                                type="text" maxLength={2} placeholder={"00m"} onChange={(e) => {
                                    inputHandler(e, setMinutes)
                                }} value={minutes} />
                        </div>
                        <div className={`flex w-1/3 gap-1 border-2 justify-center
                        ${invalidEntry ? "border-red-500" : "border-slate-300"}`}>
                            <input className="overflow-y-scroll w-4/5 text-md p-1"
                                type="text" maxLength={2} placeholder={"00s"} onChange={(e) => {
                                    inputHandler(e, setSeconds)
                                }} value={seconds} />
                        </div>
                    </div>
                </div>
                <button className="bg-listBlue text-white py-1 px-2 text-lg hover:brightness-[1.5]"
                    onClick={addEntry}
                >Set</button>
            </div>
        </div>
    );
}