import { title } from 'process'
import React from 'react'

interface ProjectitemProps {
    title:string,
    skill:string,
    cover:string,
  }

const Projectitem: React.FC<ProjectitemProps> = (props) => {
  return (
    <div className='flex flex-col gap-y-4 mt-5 lg:w-[40%]'>
    <h1 className='text-black font-medium text-xl '>{props.title}</h1>
    <div className='flex items-center gap-x-2'>
      <div className='p-2 bg-white-shade-3'><div className='bg-blue w-3 h-3'></div></div>
      <span className='text-white-shade-9'>{props.skill}</span>
    </div>
    <div className='bg-cover bg-center w-full h-[240px] rounded-2xl mt-3 lg:w-full' style={{ backgroundImage:  `url(${props.cover})` }}>

    </div>
   
    </div>
  )
}

export default Projectitem