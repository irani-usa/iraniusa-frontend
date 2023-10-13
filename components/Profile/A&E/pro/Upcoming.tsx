import React from 'react'
import Mcard from './Mcard'
import { Arrowbtn } from '../../general'

const Upcoming = () => {
  return (
    <section className='border-b border-white-shade-4 pb-10 lg:pb-12'>
          <div className='container lg:pl-5'>
          <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
          <h1 className="text-[27px] font-outfit font-bold text-black lg:text-3xl mt-5 lg:py-8">Upcoming musics</h1>
          <Arrowbtn classes={'hidden lg:flex'} />
      
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