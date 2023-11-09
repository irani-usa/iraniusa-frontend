"use client"

import React, { useState } from 'react'

const DropDown = () => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("House");

    return (

        <div className="dropdown  transition-all duration-500 z-[10000] h-[70px] w-full relative ">
            <div
                onClick={(e) => {
                    setIsActive(!isActive);
                }}
                className="dropdown-btn flex font-medium items-center text-xl  gap-x-2 cursor-pointer justify-center bg-white text-black p-5 rounded-[20px] border border-white-shade-3"
            >
                {selected}
                <span
                    className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                />
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1.5L6.5 6.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
            <div
                className="dropdown-content flex flex-col gap-y-4 absolute w-full py-3 rounded-lg bg-white shadow-drop-shadow text-white-shade-7 text-lg"
                style={{ display: isActive ? "block" : "none" }}
            >
                <div
                    onClick={(e) => {
                        setIsSelected(e.target.textContent);
                        setIsActive(!isActive);
                    }}
                    className="item text-center cursor-pointer hover:text-black transition-all duration-300"
                >
                    General
                </div>
                <div
                         className="item text-center cursor-pointer hover:text-black transition-all duration-300"
                    onClick={(e) => {
                        setIsSelected(e.target.textContent);
                        setIsActive(!isActive);
                    }}
                >
                    Payment
                </div>
                <div
                      className="item text-center cursor-pointer hover:text-black transition-all duration-300"
                    onClick={(e) => {
                        setIsSelected(e.target.textContent);
                        setIsActive(!isActive);
                    }}
                >
                    Platform
                </div>
            </div>
        </div>

    )
}

export default DropDown