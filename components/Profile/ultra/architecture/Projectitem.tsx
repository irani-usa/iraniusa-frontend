import React from 'react'

interface ProjectitemProps {
    title:string,
    cover:string,
    classes:string,
  }

export const Projectitem: React.FC<ProjectitemProps> = (props) =>  {
  return (
    <div className={` $${props.classes} flex flex-col gap-6 w-full lg:w-[400px]`}>
        <h1 className='text-black font-opensans font-medium text-[20px]'>{props.title}</h1>
        <div  className='w-full h-60 rounded-2xl bg-cover bg-center'  style={{ backgroundImage: `url(${props.cover})` }}></div>
    </div>
  )
}
