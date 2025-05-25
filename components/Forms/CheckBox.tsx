import React from 'react'

interface CheckBoxProps {
id:string,
label:string,
}
  

const CheckBox: React.FC<CheckBoxProps> = (props) => {
    return (
        <div className='flex items-center gap-1'>
            <input className='accent-primary w-4 h-4 rounded-xl group' type="checkbox" name="" id={props.id} />
            <label className='text-xl text-white-shade-11 group-checked:text-black' htmlFor={props.id}>{props.label}</label>
        </div>)
}

export default CheckBox