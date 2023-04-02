import React, { useState, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function OptionsPage() {
    const [fromHours, setFromHours] = useState<string>("");
    const [fromMinutes, setFromMinutes] = useState<string>("");
    const [toHours, setToHours] = useState<string>("");
    const [toMinutes, setToMinutes] = useState<string>("");
    const [blueListURLs, setBLueListURLS] = useState<string[]>([]);
    const [isInvalidEntry, setIsInvalidEntry] = useState<boolean>(false);
    const [selectedURLS, setSelectedURLS] = useState<boolean[]>([]);


    const inputHandler = (e: ChangeEvent<HTMLInputElement>, setState: (state: string) => void) => {
        e.preventDefault();
        const userInput = e.currentTarget.value;
        if ((userInput.match(/\d/g)?.length === userInput.length) || userInput === "") {
            setState(userInput);
        }
    }


    const invalidEntryHandler = () => {
        setIsInvalidEntry(true);
        setTimeout(() => {
            setIsInvalidEntry(false);
        }, 3000);
    }

    
    const setTimeFrame = async () => {
        if (fromHours && fromMinutes && toHours && toMinutes) {
            console.log(`From ${fromHours}:${fromMinutes} to ${toHours}:${toMinutes}`);
            const data = await fetchBlueListData();
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: `${fromHours}:${fromMinutes}`,
                    timeTo: `${toHours}:${toMinutes}`,
                    urls: data.urls
                }
            });
            setFromHours("");
            setFromMinutes("");
            setToHours("");
            setToMinutes("");
        } else {
            invalidEntryHandler();
        }
    }


    const fetchBlueListData = async () => {
        const blueListData = await chrome.storage.sync.get("blueList");
        return blueListData;
    }


    const deleteSelected = async () => {
        const currentBlueList = await fetchBlueListData();
        const updatedURLs = blueListURLs.filter((url, i) => !selectedURLS[i]);
        chrome.storage.sync.set({
            "blueList": {
                timeFrom: currentBlueList.timeFrom,
                timeTo: currentBlueList.timeTo,
                urls: [...updatedURLs]
            }
        });
        setBLueListURLS(updatedURLs);
        setSelectedURLS(Array.from({length: updatedURLs.length}, 
                (_, i) => false));
    }


    const deleteAll = async () => {
        const currentBlueList = await fetchBlueListData();
        await chrome.storage.sync.set({
            "blueList": { 
                timeFrom: currentBlueList.timeFrom,
                timeTo: currentBlueList.timeTo,
                urls: []
            }
        });
        const res = await chrome.storage.sync.get("blueList");
        console.log(res);
        setBLueListURLS([]);
        setSelectedURLS([]);
    }


    const urlClickedHandler = (e: any) => {
       const index = e.currentTarget.getAttribute("data-id");
       const newSelectedURLS = selectedURLS;
       newSelectedURLS[index] = !selectedURLS[index];
       setSelectedURLS(selectedURLS => [...newSelectedURLS]);
    }


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBlueListData();
            setBLueListURLS(data["blueList"].urls);
            setSelectedURLS(Array.from({length: data["blueList"].urls.length}, 
                (_, i) => false));
        }
        fetchData();
    }, []);


    return (
        <div className="flex flex-col items-center bg-offWhite h-screen w-full font-openSans">
            <div className="flex h-20 m-2 px-4 w-full md:w-2/3">
                <img className="h-full" src="favicon-48x48.png" alt="icon" />
            </div>
            <div className="flex md:w-2/3 h-fit w-screen my-2 p-6 flex-col gap-4">
                <h1 className="font-bold text-lg">Select you time out period</h1>
                <div className="flex w-full border-slate-300 border-2">
                    <label className="flex gap-2 text-lg p-2">From
                        <input className={`md:w-3/12 w-4/12 px-2 border-[1px] 
                            ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text"  maxLength={2} 
                            placeholder={"09"} value={fromHours} onChange={(e) => {
                                inputHandler(e, setFromHours);
                        }} /> :
                        <input className={`md:w-3/12 w-4/12 px-2 border-[1px] 
                            ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text"  maxLength={2} 
                            placeholder={"00"} value={fromMinutes} onChange={(e) => {
                                inputHandler(e, setFromMinutes);
                        }} />
                    </label>
                    <label className="flex gap-2 text-lg p-2">To
                        <input className={`md:w-3/12 w-4/12 px-2 border-[1px] 
                            ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text"  maxLength={2}
                                placeholder={"17"} value={toHours} onChange={(e) => {
                            inputHandler(e, setToHours);
                        }} /> :
                        <input className={`md:w-3/12 w-4/12 px-2 border-[1px] 
                            ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text"  maxLength={2}
                                placeholder={"00"} value={toMinutes} onChange={(e) => {
                            inputHandler(e, setToMinutes);
                        }} />
                    </label>
                </div>
                <button className="bg-listBlue w-fit text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]"
                    onClick={setTimeFrame}>Set</button>
                <div>
                    <h1 className="font-bold text-lg">Current Blue List</h1>
                    <div className=" flex flex-col p-2 text-lg text-gray-500 w-full h-max-1/3 w-full overflow-y-scroll
                        overflow-x-scroll border-2 border-slate-300">
                            {(blueListURLs && blueListURLs.length > 0)
                                ? blueListURLs.map((url, i) => <a key={uuidv4()} data-id={i} 
                                className={`p-1 m-1 w-full whitespace-nowrap ${selectedURLS[i] ? "bg-red-300" : ""}`} 
                                onClick={urlClickedHandler}>{url}</a>)
                                : <h1 className="p-1">Looks like you haven't added any sites to your 
                                    blue list yet!</h1>
                            }
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className="bg-listBlue text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]"
                        onClick={deleteSelected}>Delete</button>
                    <button className="bg-red-600 text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]"
                        onClick={deleteAll}>Clear List</button>
                </div>
            </div>
        </div>
    )
}