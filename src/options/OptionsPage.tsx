import React, { useState, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
import { isURL } from "../utils";


export default function OptionsPage() {
    const [fromHours, setFromHours] = useState<string>("");
    const [fromMinutes, setFromMinutes] = useState<string>("");
    const [toHours, setToHours] = useState<string>("");
    const [toMinutes, setToMinutes] = useState<string>("");
    const [fromHoursPlaceHolder, setFromHoursPlaceHolder] = useState<string>("");
    const [fromMinutesPlaceHolder, setFromMinutesPlaceHolder] = useState<string>("");
    const [toHoursPlaceHolder, setToHoursPlaceHolder] = useState<string>("");
    const [toMinutesPlaceHolder, setToMinutesPlaceHolder] = useState<string>("");
    const [blueListURLs, setBLueListURLS] = useState<string[]>([]);
    const [isInvalidEntry, setIsInvalidEntry] = useState<boolean>(false);
    const [redirectURL, setRedirectURL] = useState<string>("");
    const [isInvalidRedirectURL, setIsInvalidRedirectURL] = useState<boolean>(false);
    const [selectedURLS, setSelectedURLS] = useState<boolean[]>([]);


    const inputHandler = (e: ChangeEvent<HTMLInputElement>, setState: (state: string) => void) => {
        e.preventDefault();
        const userInput = e.currentTarget.value;
        if ((userInput.match(/\d/g)?.length === userInput.length) || userInput === "") {
            setState(userInput);
        }
    }


    const invalidEntryHandler = (
        handler: (value: React.SetStateAction<boolean>) => void
    ) => {
        handler(true);
        setTimeout(() => {
            handler(false);
        }, 3000);
    }


    const setTimeFrame = async () => {
        if (fromHours && fromMinutes && toHours && toMinutes) {
            const data = await fetchBlueListData();
            chrome.storage.sync.set({
                "blueList": {
                    timeFrom: `${fromHours}:${fromMinutes}`,
                    timeTo: `${toHours}:${toMinutes}`,
                    urls: data["blueList"].urls,
                    redirectURL: data["blueList"].redirectURL
                }
            });
            setFromHours("");
            setFromMinutes("");
            setToHours("");
            setToMinutes("");
            setFromHoursPlaceHolder(fromHours);
            setFromMinutesPlaceHolder(fromMinutes);
            setToHoursPlaceHolder(toHours);
            setToMinutesPlaceHolder(toMinutes);
        } else {
            invalidEntryHandler(setIsInvalidEntry);
        }
    }


    const redirectURLHandler = async () => {
        if (isURL(redirectURL)) {
            const data = await fetchBlueListData();
            chrome.storage.sync.set({
                timeFrom: data["blueList"].timeFrom,
                timeTo: data["blueList"].timeTo,
                urls: data["blueList"].urls,
                redirectURL: redirectURL
            });
        } else {
            invalidEntryHandler(setIsInvalidRedirectURL)
        }
    }


    const fetchBlueListData = async () => {
        const blueListData = await chrome.storage.sync.get("blueList");
        return blueListData;
    }


    const deleteSelected = async () => {
        const currentData = await fetchBlueListData();
        const updatedURLs = blueListURLs.filter((url, i) => !selectedURLS[i]);
        chrome.storage.sync.set({
            "blueList": {
                timeFrom: currentData["blueList"].timeFrom,
                timeTo: currentData["blueList"].timeTo,
                urls: [...updatedURLs]
            }
        });
        setBLueListURLS(updatedURLs);
        setSelectedURLS(Array.from({ length: updatedURLs.length },
            (_, i) => false));
    }


    const deleteAll = async () => {
        const currentData = await fetchBlueListData();
        await chrome.storage.sync.set({
            "blueList": {
                timeFrom: currentData["blueList"].timeFrom,
                timeTo: currentData["blueList"].timeTo,
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
            setSelectedURLS(Array.from({ length: data["blueList"].urls.length },
                (_, i) => false));
            setFromHoursPlaceHolder(data["blueList"].timeFrom.split(":")[0]);
            setFromMinutesPlaceHolder(data["blueList"].timeFrom.split(":")[1]);
            setToHoursPlaceHolder(data["blueList"].timeTo.split(":")[0]);
            setToMinutesPlaceHolder(data["blueList"].timeTo.split(":")[1]);
        }
        fetchData();
    }, []);


    return (
        <div className="flex flex-col items-center bg-offWhite h-screen w-full font-openSans">
            <div className="flex md:w-2/3 h-fit w-screen my-2 p-6 flex-col gap-4">
                <div className="flex w-full md:w-2/3">
                    <h1 className="text-listBlue font-bold text-xl">/BLUE_LIST/</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg">Select you time out period</h1>
                    <div className="flex flex-col gap-2 md:gap-0 md:flex-row w-full justify-center pb-2">
                        <div className="flex">
                            <label className="text-lg mr-4">From</label>
                            <label className="flex gap-2 text-lg">
                                <input className={`md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text" maxLength={2}
                                    placeholder={fromHoursPlaceHolder} value={fromHours} onChange={(e) => {
                                        inputHandler(e, setFromHours);
                                    }} /> :
                                <input className={`md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text" maxLength={2}
                                    placeholder={fromMinutesPlaceHolder} value={fromMinutes} onChange={(e) => {
                                        inputHandler(e, setFromMinutes);
                                    }} />
                            </label>
                        </div>
                        <div className="flex">
                            <label className="text-lg mr-9 md:mr-2">To</label>
                            <label className="flex gap-2 text-lg">
                                <input className={`md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text" maxLength={2}
                                    placeholder={toHoursPlaceHolder} value={toHours} onChange={(e) => {
                                        inputHandler(e, setToHours);
                                    }} /> :
                                <input className={`md:w-3/12 w-2/12 px-2 border-[1px] text-lg 
                                ${isInvalidEntry ? "border-red-400" : "border-listBlue"}`} type="text" maxLength={2}
                                    placeholder={toMinutesPlaceHolder} value={toMinutes} onChange={(e) => {
                                        inputHandler(e, setToMinutes);
                                    }} />
                            </label>
                        </div>
                    </div>
                </div>
                <button className="bg-listBlue w-fit text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]"
                    onClick={setTimeFrame}>Set
                </button>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg">Select the page you want the extension to re-direct to</h1>
                    <input className={`w-full px-2 border-[1px] py-2
                        ${isInvalidRedirectURL ? "border-red-400" : "border-listBlue"}`} type="text" />
                </div>
                <button className="bg-listBlue w-fit text-white my-2 py-1 px-2 text-lg hover:brightness-[1.5]"
                    onClick={redirectURLHandler}>Set
                </button>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-lg">Current websites on timeout list</h1>
                    <div className=" flex flex-col p-2 text-lg text-gray-500 w-full min-h-[100px]
                    max-h-1/3 w-full overflow-y-auto overflow-x-auto border-[1px] border-listBlue">
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