import { Dollar } from '@/components/Icons/Profile/Dollar'
import { Star } from '@/components/Icons/Profile/Star'


import React from 'react'

interface ProductProps {
    image:string,
    title:string,
    price:string,
    description:string,
    beforePrice ?: string,
  }
  


export const Product: React.FC<ProductProps> = (props) =>{
  return (
    <section className='w-[75%] min-w-[75%] rounded-xl border border-white-shade-4 lg:w-[32%] lg:min-w-[32%] cursor-pointer'>
        <div className='w-full h-[200px] rounded-t-xl bg-cover bg-center px-4 py-5' style={{ backgroundImage: `url(${props.image})` }}>
        
        </div>
        <div className='px-4 '>
        <h1 className='text-black text-xl font-bold mt-5 font-outfit'>{props.title}</h1>
        <p className='text-white-shade-8 mt-5'>{props.description}</p>
        <div className='pt-7 pb-4 flex items-center gap-2'>
            <h1 className='flex items-center gap-x-2 text-lg text-white-shade-8 font-medium line-through'>{props.beforePrice} </h1>
            <h1 className='text-black font-medium text-2xl'>${props.price}</h1>
        </div>
        </div>
        
    </section>
  )
}
