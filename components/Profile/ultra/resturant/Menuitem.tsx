import { Dollar } from '@/components/Icons/Profile/Dollar'
import { Star } from '@/components/Icons/Profile/Star'


import React from 'react'

interface MenuitemProps {
    image:string,
    title:string,
    price:string,
    rate:string,
    islunch:boolean,
  }
  


export const Menuitem: React.FC<MenuitemProps> = (props) =>{
  return (
    <section className='w-[75%] min-w-[75%] rounded-xl border border-white-shade-3 lg:w-[280px] lg:min-w-[280px] cursor-pointer'>
        <div className='w-full h-[200px] rounded-t-xl bg-cover bg-center px-4 py-5' style={{ backgroundImage: `url(${props.image})` }}>
           { props.islunch && <div className='bg-black/25 py-2  rounded-full backdrop-blur-lg flex justify-center w-[130px]'>
            <span  className='text-white '>Lunch price</span>
            </div>}
        </div>
        <div className='px-4 '>
        <h1 className='text-black text-xl font-bold mt-5 font-outfit'>{props.title}</h1>
        <div className='py-7 flex items-center justify-between'>
            <h1 className='flex items-center gap-x-2 text-lg text-black font-medium'><Dollar />${props.price}</h1>
            <h1 className='flex items-center gap-x-2 text-lg text-white-shade-8 font-medium'><Star />{props.rate}</h1>
        </div>
        </div>
        
    </section>
  )
}
