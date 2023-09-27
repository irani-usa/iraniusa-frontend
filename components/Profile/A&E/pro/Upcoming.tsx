import React from 'react'
import Mcard from './Mcard'

const Upcoming = () => {
  return (
    <section className='border-b border-white-shade-4 pb-10 lg:pb-12'>
          <div className='container lg:pl-5'>
          <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
          <h1 className="text-[27px] font-outfit font-bold text-black lg:text-3xl mt-5 lg:py-8">Upcoming musics</h1>
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

        <section className='mt-6 lg:flex gap-x-10'>
        <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={''} date={'September 4, 2020'} />
        <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={'hidden lg:flex flex-col'} date={'September 4, 2020'} />
        </section>
          </div>
    </section>
  )
}

export default Upcoming