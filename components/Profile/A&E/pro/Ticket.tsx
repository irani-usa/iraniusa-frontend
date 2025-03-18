import PopularConcert from '@/components/Pages/Events/PopularConcert'
import React from 'react'
import { Arrowbtn } from '../../general'
import { PopularSeminar } from '@/components/Pages/Events'

const Ticket = () => {
  return (
   <section className='w-full border-white-shade-4 border-b pb-8 container lg:pb-12'>
    <div className=' lg:pl-5'>

    <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
    <h1 className='text-black text-xl font-bold mt-7 lg:text-2xl'>Tickets and concerts</h1>
    <Arrowbtn classes={'hidden lg:flex'} />
      
        </div>
        <div className='mt-7 flex lg:grid lg:grid-cols-2 no-scroll overflow-x-scroll gap-6' >
        <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"min-w-[80%]"}
              background={"/images/events/Shadmehr.webp"}
            />
            <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"min-w-[80%]"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"min-w-[80%]"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"min-w-[80%]"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"min-w-[80%]"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"min-w-[80%]"}
              background={"/images/events/Shadmehr.webp"}
            />
        </div>
        
  
    </div>
   </section>
  )
}

export default Ticket