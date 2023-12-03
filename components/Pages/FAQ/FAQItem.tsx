"use client"

import React, { useState } from 'react';

interface FAQItemProps {
    title: string,
    content: string,
}

const FAQItem:React.FC<FAQItemProps> = (props) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex flex-col w-full m-auto p-8 bg-white text-black hover:cursor-pointer leading-8 rounded-xl hover:bg-blue hover:text-white duration-300'>
            <div className='flex justify-between' onClick={() => setIsActive(!isActive)}>
                <h4 className='text-sm lg:text-base font-opensans font-semibold'>
                    {props.title}
                </h4>
                <div>
                    {
                        isActive ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.0526 8.16763C3.0526 7.99346 3.11677 7.8193 3.25427 7.6818C3.5201 7.41596 3.9601 7.41596 4.22594 7.6818L10.2026 13.6585C10.6426 14.0985 11.3576 14.0985 11.7976 13.6585L17.7743 7.6818C18.0401 7.41596 18.4801 7.41596 18.7459 7.6818C19.0118 7.94763 19.0118 8.38763 18.7459 8.65346L12.7693 14.6301C12.3018 15.0976 11.6693 15.3635 11.0001 15.3635C10.3309 15.3635 9.69844 15.1068 9.23094 14.6301L3.25427 8.65346C3.12594 8.51596 3.0526 8.3418 3.0526 8.16763Z" fill="white" />
                        </svg>
                            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.16763 18.9474C7.99346 18.9474 7.8193 18.8832 7.6818 18.7457C7.41596 18.4799 7.41596 18.0399 7.6818 17.7741L13.6585 11.7974C14.0985 11.3574 14.0985 10.6424 13.6585 10.2024L7.6818 4.22573C7.41596 3.9599 7.41596 3.5199 7.6818 3.25406C7.94763 2.98823 8.38763 2.98823 8.65346 3.25406L14.6301 9.23073C15.0976 9.69823 15.3635 10.3307 15.3635 10.9999C15.3635 11.6691 15.1068 12.3016 14.6301 12.7691L8.65346 18.7457C8.51596 18.8741 8.3418 18.9474 8.16763 18.9474Z" fill="black" />
                            </svg>
                    }
                </div>
            </div>
            {
                <div className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in ${isActive ? "max-h-40" : "max-h-0"}`}>
                    <p>
                        <br />
                        {props.content}
                    </p>
                </div>
            }
        </div>
    )
}

export default FAQItem