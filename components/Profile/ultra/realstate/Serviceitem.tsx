import React from 'react'

interface ServiceitemProps {
    title:string,
    icon:React.ReactNode,
  }

export const Serviceitem: React.FC<ServiceitemProps> = (props) =>  {
  return (
    <div className='group w-[75%] border border-white-shade-4 flex flex-col items-center justify-center py-12 gap-6 rounded-2xl text-white-shade-9 hover:text-black duration-500 transition-all lg:w-[280px]'>
        {props.icon}
        <h1 className=' font-medium text-xl text-center w-48'>{props.title}</h1>
    </div>
  )
}
