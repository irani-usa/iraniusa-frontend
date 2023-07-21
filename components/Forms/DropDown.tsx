"use client"

import React, { useState } from 'react'

const DropDown = () => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("General");

    return (
        <div className="text-black">
            <div className="dropdown z-[10000] w-[400px] relative mx-auto my-10">
                <div
                    onClick={(e) => {
                        setIsActive(!isActive);
                    }}
                    className="dropdown-btn flex items-center justify-between bg-white text-[#777] font-medium p-5 rounded-[20px] border-[10px] border-solid border-[#011223]"
                >
                    {selected}
                    <span
                        className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
                    />
                </div>
                <div
                    className="dropdown-content absolute w-full shadow-[0_0_10px_5px_rgba(0,0,0,0.07)] -left-2.5"
                    style={{ display: isActive ? "block" : "none" }}
                >
                    <div
                        onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsActive(!isActive);
                        }}
                        className="item"
                    >
                       General
                    </div>
                    <div
                        className="item"
                        onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsActive(!isActive);
                        }}
                    >
                        Payment
                    </div>
                    <div
                        className="item"
                        onClick={(e) => {
                            setIsSelected(e.target.textContent);
                            setIsActive(!isActive);
                        }}
                    >
                        Platform
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown