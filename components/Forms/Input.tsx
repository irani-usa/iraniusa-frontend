
import React from 'react'

interface InputProps {
    id: string,
    inputType: string,
    
    placeHolder: string,
    classes: string,
    label: string,
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <>
            <label className='text-lg font-medium py-3' htmlFor={props.id}>{props.label}</label>
            <div className={`${props.classes} font-opensans flex items-center gap-x-4 bg-white-shade-3 text-lg font-medium rounded-xl w-auto h-16 px-6`}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.5902 22C20.5902 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#A6A6A6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input className={`w-5/6 h-full rounded-xl bg-white-shade-3 focus:outline-none focus:shadow-none`} id={props.id} type={props.inputType} placeholder={props.placeHolder} />
            </div>
        </>
    )
}

export default Input