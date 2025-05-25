import React from 'react'

interface OptionProps {
    title:string,
    bgColor:string,
    textColor:string,
    Icon:React.ReactNode,
    size:string,
  }
  

export const Option: React.FC<OptionProps> = (props) =>{
  return (
  <div className={`w-full  py-6 bg-${props.bgColor}  flex items-center justify-center rounded-2xl gap-x-3 col-span-${props.size}`}>
    {props.Icon}
      <span className={`text-${props.textColor} font-outfit font-medium text-lg lg:text-base`}>
        {props.title}
    </span>
  </div>
  )
}
