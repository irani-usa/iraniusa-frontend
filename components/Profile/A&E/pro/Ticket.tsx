import PopularConcert from '@/components/Pages/Events/PopularConcert'
import React from 'react'

const Ticket = () => {
  return (
   <section className='w-full border-white-shade-4 border-b pb-8 lg:pb-12'>
    <div className='container lg:pl-5'>

    <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
    <h1 className='text-black text-xl font-bold mt-7 lg:text-2xl'>Tickets and concerts</h1>
        <section className="hidden lg:flex justify-center gap-x-3 mt-9 pb-3   cursor-pointer">
            <div  className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div  className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </section>
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