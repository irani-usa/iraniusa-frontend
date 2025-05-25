"use client"

import React, { useState } from 'react';
import { isatty } from 'tty';

interface FAQItemProps {
    title: string,
    content: string,
}

const FAQItem:React.FC<FAQItemProps> = (props) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div  onClick={() => setIsActive(!isActive)} className={`flex flex-col w-full m-auto py-4 px-8 hover:cursor-pointer leading-8 rounded-xl hover:bg-blue hover:text-white duration-300 group border border-white-shade-4
         ${isActive ? 'bg-blue text-white' : ' bg-white text-black '}`}>
            <div className='flex items-center justify-between '>
                <h4 className='text-lg font-inter font-semibold'>
                    {props.title}
                </h4>
                <div>
                    {
                        isActive ? <svg  className='fill-white ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9326 6.81668H9.74097L5.06597 6.81668C4.26597 6.81668 3.86597 7.78335 4.43264 8.35001L8.7493 12.6667C9.44097 13.3583 10.566 13.3583 11.2576 12.6667L12.8993 11.025L15.5743 8.35001C16.1326 7.78335 15.7326 6.81668 14.9326 6.81668Z"  />
                        </svg>
                        
                            : <svg className='group-hover:fill-white fill-black' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.06639 13.1833L10.2581 13.1833L14.9331 13.1833C15.7331 13.1833 16.1331 12.2167 15.5664 11.65L11.2497 7.33332C10.5581 6.64165 9.43305 6.64165 8.74139 7.33332L7.09972 8.97499L4.42472 11.65C3.86639 12.2167 4.26639 13.1833 5.06639 13.1833Z" />
                            </svg>
                            
                    }
                </div>
            </div>
            {
                <div className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in ${isActive ? "max-h-40" : "max-h-0"}`}>
                    <p className="text-white-shade-9">
                        <br />
                        {props.content}
                    </p>
                </div>
            }
        </div>
    )
}

export default FAQItem