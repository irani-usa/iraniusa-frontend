
import React from 'react'

interface CardProps {
  content: string,
  info: string,
  classes:string,
}


const Card: React.FC<CardProps> = (props) =>  {
  return (
    <>
    <section className='flex flex-col items-center gap-y-2'>
    <div className='bg-white-shade-3 flex flex-col items-center py-16 w-64 rounded-2xl'>
      <h1 className='text-black text-[26px] font-outfit font-bold'>{props.content}</h1>
      <h4 className='text-white-shade-9 font-opensans text-[18px] font-semibold'>{props.info}</h4>
    </div>
    <div className={`${props.classes} h-[7px]  w-36 rounded-[18px]`}></div>
    </section>
    </>
  )
}

export default Card