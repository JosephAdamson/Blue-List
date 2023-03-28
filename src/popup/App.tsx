import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import TimerInput from "../components/TimerInput";
import { getURL } from "../utils"

export default function App() {
    const [tabURL, setTabURL] = useState<string | undefined>("");


    useEffect(() => {
        const fetchURL = async () => {
            const url = await getURL();
            setTabURL(url);
        }
        fetchURL();
    }, []);


    return (
        <div className="flex bg-white h-[300px] w-[500px] font-opensans">
            <div className="p-6 w-3/5">
                <div className="py-1">
                    <h1 className="text-md text-black font-bold">Would you like to set a daily timeout for this site?</h1>
                </div>
                <div className="w-full py-2">
                    <input className="overflow-y-scroll w-full text-md p-1 border-2 border-black" type="text" readOnly value={tabURL}/>
                </div>
                <div className="w-full my-2">
                    <TimerInput />
                </div>
            </div>
            <div className="w-1/2 bg-offWhite"></div>
        </div>
    );
}