
import React from 'react'

interface InputProps {
    id: string,
    inputType: string,
    placeHolder: string,
    classes: string,
    label: string,
    iconComp: React.ReactNode
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <>

            <div className='w-full'>
                <label className='block text-lg font-semibold font-outfit pt-8 pb-3 text-blue' htmlFor={props.id}>{props.label}</label>
                <div className={`${props.classes} border border-white-shade-4 text-black font-opensans flex items-center gap-x-4 text-lg font-medium rounded-xl w-full h-16 px-4`}>
                    {props.iconComp}
                    <input className={`${props.classes}pl-4 border-l border-l-white-shade-9 text-white-shade-15 text-sm w-full bg-transparent focus:outline-hidden focus:shadow-none`} id={props.id} type={props.inputType} placeholder={props.placeHolder} />
                </div>
            </div>
        </>
    )
}

export default Input