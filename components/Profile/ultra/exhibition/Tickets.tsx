import PopularConcert from '@/components/Pages/Events/PopularConcert'
import React from 'react'
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import TicketIcon from '@/components/Icons/Profile/Ticket'
import { PopularSeminar } from '@/components/Pages/Events'

interface TicketsProps {
  title: string,
}


export const Tickets: React.FC<TicketsProps> = (props) => {
  return (
    <section className='border-b border-b-white-shade-4 pt-4 pb-8 lg:py-10'>
      <div className=' lg:px-0 lg:pl-5'>
        <div className='flex items-center flex-col'>
          <IconElement icon={<TicketIcon />}/>
          <h1 className="text-black text-xl font-bold py-7 font-outfit lg:text-[27px]">
            {props.title}
          </h1>
        </div>
        <div className='justify-between  items-center overflow-x-scroll no-scroll gap-x-6 pb-6 lg:mt-5 lg:hidden flex' >
          <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'lg:w-[45%]'} background={'/images/profile/A&E/ticket.png'} />
          <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'lg:w-[45%] hidden lg:flex '} background={'/images/profile/A&E/ticket.png'} />
        </div>
        <div className='justify-between  items-center overflow-x-scroll no-scroll gap-x-6 pb-6 lg:mt-5 lg:flex hidden' >
        <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full  lg:w-2/3"}
              background={"/images/profile/A&E/ticket.png"}
            />
            <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full  lg:w-2/3"}
              background={"/images/profile/A&E/ticket.png"}
            />
        </div>
        
        <Arrowbtn classes={''} />
      </div>
    </section>
  )
}

