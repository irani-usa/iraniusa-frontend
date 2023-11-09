import React from 'react'

interface HonoritemProps {
    title:string,
    quantity:string,
  }
  

export const Honoritem: React.FC<HonoritemProps> = (props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 '>
        <span className='text-black font-outfit text-3xl font-medium lg:font-bold lg:text-5xl'>{props.quantity}</span>
        <span className='text-white-shade-9'>{props.title}</span>
    </div>
  )
}
