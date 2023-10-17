import { Clock } from '@/components/Icons/Outline/Clock'
import { Delivery } from '@/components/Icons/Profile/Delivery'
import { Dollar } from '@/components/Icons/Profile/Dollar'
import { Star } from '@/components/Icons/Profile/Star'
import React from 'react'

interface MainitemProps {
    image:string,
    title:string,
    desc:string,
    price:string,
    rate:string,
    time:string,
    islunch:boolean,
    delivary:string,
  }
  

export const Mainitem: React.FC<MainitemProps> = (props) =>{
  return (
    <section className='w-full rounded-3xl border border-white-shade-3 p-2 lg:flex lg:p-5 bg-white-shade-2 items-center gap-x-5'>
        <div className='w-full h-[200px] rounded-2xl bg-cover bg-center px-4 py-4 lg:w-[185px] lg:h-[178px]' style={{ backgroundImage: `url(${props.image})` }}>
           { props.islunch && <div className='bg-black/25 py-2  rounded-full backdrop-blur-lg flex justify-center w-[150px]'>
            <span  className='text-white '>Lunch price</span>
            </div>}
        </div>
    
       <div className="px-2">
       <h1 className='text-black text-xl font-bold mt-5 font-outfit lg:mt-0 lg:text-2xl'>{props.title}</h1>
        <p className='text-white-shade-9  pt-7 lg:text-[18px] lg:pb-5 lg:pt-5'>{props.desc}</p>
       <div className='lg:flex items-center gap-x-7 lg:border-t border-white-shade-4 lg:pt-5'>
       <div className='py-7 flex items-center gap-x-7 lg:py-0'>
            <h1 className='flex items-center gap-x-2 text-lg text-black font-medium'><Clock />${props.time}</h1>
            <h1 className='flex items-center gap-x-2 text-lg text-black font-medium'><Dollar />${props.price}</h1>
        </div>
        <div className='pb-4 flex items-center gap-x-7 lg:pb-0'>
        <h1 className='flex items-center gap-x-2 text-lg text-white-shade-8 font-medium'><Delivery />{props.delivary} delivery</h1>
            <h1 className='flex items-center gap-x-2 text-lg text-white-shade-8 font-medium'><Star />{props.rate}</h1>
        </div>
      
       </div>
       </div>
        
    </section>
  )
}
