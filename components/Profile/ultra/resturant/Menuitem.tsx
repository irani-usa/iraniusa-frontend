import { Dollar } from '@/components/Icons/Profile/Dollar'
import { Star } from '@/components/Icons/Profile/Star'


import React from 'react'

interface MenuitemProps {
    image:string,
    title:string,
    price:string,
    description:string,
    islunch:boolean,
  }
  


export const Menuitem: React.FC<MenuitemProps> = (props) =>{
  return (
    <section className='w-[75%] min-w-[75%] rounded-xl border border-white-shade-4 lg:w-[32%] lg:min-w-[32%] cursor-pointer p-2'>
        <div className='w-full h-[200px] rounded-t-xl bg-cover bg-center px-4 py-5' style={{ backgroundImage: `url(${props.image})` }}>
           { props.islunch && <div className='bg-black/25 py-2  rounded-full backdrop-blur-lg flex justify-center w-[130px]'>
            <span  className='text-white '>Lunch price</span>
            </div>}
        </div>
        <div className='px-4 '>
        <h1 className='text-black text-xl font-medium mt-5 font-outfit'>{props.title}</h1>
        <p className='text-white-shade-8 mt-5'>{props.description}</p>
        <div className='py-7 flex items-center justify-between'>
            <div className="flex itwms-center gap-2">
            <h1 className='flex items-center gap-x-2 text-lg text-white-shade-8 font-medium line-through'>16$ </h1>
            <span className=" px-2 rounded-xl py-1 text-sm bg-[#FF6838]/10 text-[#FF6838]">10%</span>
            </div>
            <h1 className='text-lg text-black font-medium'>${props.price}</h1>
        </div>
        </div>
        
    </section>
  )
}
