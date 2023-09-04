import Rstar from '@/components/Icons/Outline/Rstar'
import React from 'react'
interface Cardchart {
    name: string,
    sfname: string,
    price: string,
    hours: string,
    day: string,
    found: string,
    number:string,
    iconComp: React.ReactNode,
  }
const Cardchart: React.FC<Cardchart> = (props) => {
  return (
    <div  className='flex items-center justify-between w-full pt-5 px-6 font-opensans my-6'>
        <span className='flex items-center gap-x-3 text-white-shade-11'>
            <Rstar />
            {props.number}
        </span>
        <h1 className='flex items-center gap-x-3 '>
            {props.iconComp}
           <span className='text-black font-semibold text-lg flex items-center gap-x-1'>
            {props.name}
            <span className='text-white-shade-11'>{props.sfname}</span>
           </span>
        </h1>
        <span className='text-black font-semibold'>
            {props.price}
           </span>
           <span className='text-green font-semibold'>
            {props.hours}
           </span>
           <span className='text-[#FF6838] font-semibold'>
            {props.day}
           </span>
           <span className='text-black font-semibold'>
            {props.found}
           </span>
    </div>
  )
}

export default Cardchart