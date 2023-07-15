
import React from 'react'

interface InputProps {
    id: string,
    inputType: string,
    placeHolder: string,
    classes: string,
    label: string,
    iconComp:React.ReactNode
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <>
            <label className='block text-lg font-medium py-3 text-black' htmlFor={props.id}>{props.label}</label>
            <div className={`${props.classes} font-opensans flex items-center gap-x-4 bg-white-shade-3 text-lg font-medium rounded-xl w-48 h-16 px-6`}>
               {props.iconComp}
                <input className={`w-5/6 h-full rounded-xl bg-white-shade-3 focus:outline-none focus:shadow-none`} id={props.id} type={props.inputType} placeholder={props.placeHolder} />
            </div>
        </>
    )
}

export default Input