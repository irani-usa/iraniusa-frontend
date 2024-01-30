import PopularConcert from '@/components/Pages/Events/PopularConcert'
import React from 'react'
import { Arrowbtn } from '../../general'

interface TicketsProps {
    title:string,
  }


export const Tickets: React.FC<TicketsProps> = (props) => {
  return (
    <section className='border-b border-b-white-shade-4 pt-4 pb-8 lg:py-10'>
    <div className='container lg:px-0 lg:pl-5'>
    <div className='lg:flex items-center justify-between'>
    <h1 className="text-black text-xl font-bold py-7 font-outfit lg:text-[27px]">
          {props.title}
          </h1>
          <Arrowbtn classes={'hidden lg:flex'} />
    </div>
          <div className=' flex items-center overflow-x-scroll no-scroll gap-x-6 pb-6 lg:mt-5'>
        <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'lg:w-[45%]'} background={'/images/profile/A&E/ticket.png'} />
        <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'lg:w-[45%] hidden lg:flex '} background={'/images/profile/A&E/ticket.png'} />
    </div>
    <Arrowbtn classes={'lg:hidden'} />
    </div>
    </section>
  )
}
