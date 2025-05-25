"use client"

import React, { useState } from 'react'

const DropDown = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("General");

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget; // Use currentTarget instead of target
        setIsSelected(target.textContent || ""); // Provide a fallback in case textContent is null
        setIsActive(false);
    };

    return (
        <div className="text-black">
            <div className="dropdown z-10000 w-[400px] relative mx-auto my-10">
                <div
                    onClick={() => setIsActive(!isActive)}
                    className="dropdown-btn flex items-center justify-between text-[#777] font-medium p-5 rounded-[20px] bg-white-shade-3"
                >
                    {selected}
                    {isActive ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00369 13.0186L10.1305 13.0186L14.747 13.0186C15.537 13.0186 15.932 12.064 15.3724 11.5044L11.1097 7.24168C10.4267 6.55866 9.31578 6.55866 8.63276 7.24168L7.01161 8.86283L4.37005 11.5044C3.81869 12.064 4.21369 13.0186 5.00369 13.0186Z" fill="black" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" className='rotate-180' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00369 13.0186L10.1305 13.0186L14.747 13.0186C15.537 13.0186 15.932 12.064 15.3724 11.5044L11.1097 7.24168C10.4267 6.55866 9.31578 6.55866 8.63276 7.24168L7.01161 8.86283L4.37005 11.5044C3.81869 12.064 4.21369 13.0186 5.00369 13.0186Z" fill="black" />
                        </svg>
                    )}
                </div>
                {isActive && (
                    <div className="dropdown-content rounded-2xl absolute w-full shadow-[0_0_10px_5px_rgba(0,0,0,0.07)] mt-2 flex flex-col gap-2 p-4">
                        <div onClick={handleSelect} className="item">General</div>
                        <div onClick={handleSelect} className="item">Payment</div>
                        <div onClick={handleSelect} className="item">Platform</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropDown;
