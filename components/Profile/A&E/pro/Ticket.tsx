import PopularConcert from '@/components/Pages/Events/PopularConcert'
import React from 'react'
import { Arrowbtn } from '../../general'
import TicketCard from '../starter/TicketCard'

const Ticket = () => {
  return (
   <section className='w-full border-white-shade-4 border-b py-16 px-3 '>
  

    <div className=' lg:flex lg:items-center lg:justify-between '>
    <h1 className='text-black text-xl font-bold lg:text-2xl'>Tickets and concerts</h1>
    <Arrowbtn classes={'hidden lg:flex'} />
      
        </div>
        <div className='mt-7 flex lg:grid lg:grid-cols-2 no-scroll overflow-x-scroll' >
        <TicketCard
            singer={"Shadmehr aghili"}
            organizer={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"min-w-[80%]"}
            background={"/images/events/Shadmehr.webp"} 
            price={'200'}            />
        </div>
        <Arrowbtn classes={'lg:hidden mt-14'} />
      

   </section>
  )
}

export default Ticket