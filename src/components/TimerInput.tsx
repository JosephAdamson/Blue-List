import React, { useState, useEffect, ChangeEvent } from "react";


export default function TimerInput() {
    const [hours, setHours] = useState<string>("");
    const [minutes, setMinutes] = useState<string>("");
    const [seconds, setSeconds] = useState<string>("");


    const inputHandler = (e: ChangeEvent<HTMLInputElement>, setState: (state: string) => void) => {
        e.preventDefault();
        const userInput = e.currentTarget.value;
        if ((userInput.match(/\d/g) && userInput.match(/\d/g)?.length === userInput.length) 
                || userInput === "") {
            setState(userInput);
        }
    }


    return (
        <div className="flex py-1 gap-1 w-4/5 text-lg">
            <div className="flex w-1/3 gap-1">
                <input className="w-full px-2 flex justify-center font-bold border-2 border-black"
                    type="text" maxLength={2} placeholder={"00h"} onChange={(e) => {
                        inputHandler(e, setHours)
                    }} value={hours} />
            </div>
            <div className="flex w-1/3 gap-1">
                <input className="w-full px-2 flex justify-center font-bold border-2 border-black" 
                    type="text" maxLength={2} placeholder={"00m"} onChange={(e) => {
                        inputHandler(e, setMinutes)
                    }} value={minutes}/>
            </div>
            <div className="flex w-1/3 gap-1">
                <input className="w-full px-2 flex justify-center font-bold border-2 border-black" 
                    type="text" maxLength={2} placeholder={"00s"} onChange={(e) => {
                        inputHandler(e, setSeconds)
                    }} value={seconds}/>
            </div>
        </div>
    )
}