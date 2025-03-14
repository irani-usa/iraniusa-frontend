import { title } from 'process'
import React from 'react'

interface ProjectitemProps {
    title:string,
    skill:string[],
    cover:string,
  }

const Projectitem: React.FC<ProjectitemProps> = (props) => {
  return (
    <div className='flex flex-col gap-y-4 mt-5 lg:w-[40%] bg-white-shade-2 border border-white-shade-4 p-3 rounded-xl'>
    <div className='bg-cover bg-center w-full h-[240px] rounded-2xl mt-3 lg:w-full' style={{ backgroundImage:  `url(${props.cover})` }}>

    </div>
    <h1 className='text-black font-medium text-2xl '>{props.title}</h1>
    <div className='flex flex-col gap-2'>
      {props.skill.map(item => (
        <div className='flex items-center gap-x-2'>
        <div className='p-2 bg-white-shade-3'><div className='bg-blue w-3 h-3'></div></div>
        <span className='text-white-shade-9'>{item}</span>
      </div>
      ))}
    </div>
   
    </div>
  )
}

export default Projectitem