
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

            <div>
                <label className='block text-lg font-bold py-3 text-black' htmlFor={props.id}>{props.label}</label>
                <div className={`${props.classes} text-black font-opensans flex items-center gap-x-4 bg-white-shade-3 text-lg font-medium rounded-xl w-full h-14 px-4`}>
                    {props.iconComp}
                    <input className={`${props.classes} w-full h-full rounded-xl bg-white-shade-3 focus:outline-none focus:shadow-none`} id={props.id} type={props.inputType} placeholder={props.placeHolder} />
                </div>
            </div>
        </>
    )
}

export default Input