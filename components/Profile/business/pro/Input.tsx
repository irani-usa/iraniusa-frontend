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
      <div className="flex items-center bg-white-shade-2 border border-white-shade-4 rounded-xl">
        <span className="inline-flex items-center px-3 rounded-e-0 text-white-shade-4 border-e-0 rounded-s-xl py-2  text-lg ">
          {props.icon}
        </span>
        <div className='w-[2px] h-6 bg-white-shade-4'></div>
        <input type="text" id={props.lable} className=" block flex-1 min-w-0 w-full p-2.5   text-lg " placeholder={props.placeholder} />
      </div>

    </div>
  )
}

export default Input