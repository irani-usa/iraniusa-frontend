import { title } from 'process'
import React from 'react'

interface ProjectitemProps {
    title:string,
    skill:string[],
    cover:string,
    subtitle:string,
    icon:React.ReactNode
  }

const Projectitem: React.FC<ProjectitemProps> = (props) => {
  return (
    <div className='flex flex-col gap-y-2 lg:w-[35%] 2xl:w-full bg-white-shade-2 border border-white-shade-4 p-2.5  rounded-xl'>
    <div className='bg-cover bg-center w-full h-[240px] rounded-xl lg:w-full' style={{ backgroundImage:  `url(${props.cover})` }}>

    </div>
   <div className='px-2'>
   <h1 className='text-black font-medium text-lg w-full mt-2'>{props.title}</h1>
    <h2 className='text-white-shade-11 mt-2 font-medium'>{props.subtitle}</h2>
    <div className='flex flex-col gap-2 mt-3'>
      {props.skill.map(item => (
        <div className='flex items-center gap-x-2'>
        <div className=''>{props.icon}</div>
        <span className='text-white-shade-9'>{item}</span>
      </div>
      ))}
    </div>
   </div>
   
    </div>
  )
}

export default Projectitem