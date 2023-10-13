import PopularConcert from '@/components/Pages/Events/PopularConcert'
import React from 'react'
import { Arrowbtn } from '../../general'

const Ticket = () => {
  return (
   <section className='w-full border-white-shade-4 border-b pb-8 lg:pb-12'>
    <div className='container lg:pl-5'>

    <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
    <h1 className='text-black text-xl font-bold mt-7 lg:text-2xl'>Tickets and concerts</h1>
    <Arrowbtn classes={'hidden lg:flex'} />
      
        </div>
    <div className='mt-6 flex gap-x-6'>
        <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'lg:w-[45%]'} background={'/images/profile/A&E/ticket.png'} />
        <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'lg:w-[45%] hidden lg:flex '} background={'/images/profile/A&E/ticket.png'} />
    </div>
  
    </div>
   </section>
  )
}

export default Ticket