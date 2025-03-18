import React from 'react'

interface InputProps {
  placeholder: string,
  class: string,
  icon?: React.ReactNode,
  lable?: string,
  isRequired ?:boolean
}


const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={`${props.class}`}>

      <label htmlFor={props.lable} className="block mb-2 text-lg font-medium text-black">{props.lable} {props.isRequired && <span className='text-[#ff0505]'>*</span>}</label>
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-e-0  border-e-0 rounded-s-xl  border border-white-shade-4   text-lg ">
          {props.icon}
        </span>
        <input type="text" id={props.lable} className="rounded-none rounded-e-xl block flex-1 min-w-0 w-full p-2.5   border border-white-shade-4  text-lg " placeholder={props.placeholder} />
      </div>

    </div>
  )
}

export default Input