import React from 'react'

interface InputProps {
    placeholder: string,
    class:string,
  }


const Input: React.FC<InputProps> = (props) => {
  return (
    <input className={`${props.class} bg-white-shade-2 border border-white-shade-4 w-full  text-lg 
    px-6 rounded-lg py-4 hover:bg-white text-black transition-all duration-300`}  placeholder={props.placeholder} type="text" />
  )
}

export default Input