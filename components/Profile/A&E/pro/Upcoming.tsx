import React from 'react'
import Mcard from './Mcard'
import { Arrowbtn } from '../../general'

const Upcoming = () => {
  return (
    <section className='border-b border-white-shade-4 py-16'>
          <div className=' lg:pl-5 pl-3'>
          <div className=' lg:flex lg:items-center lg:justify-between '>
          <h1 className="text-[27px] font-outfit font-bold text-black lg:text-3xl lg:pb-8">Upcoming musics</h1>
          <Arrowbtn classes={'hidden lg:flex'} />
      
        </div>

        <section className='mt-7 flex lg:grid lg:grid-cols-3 no-scroll overflow-x-scroll gap-6'>
        <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={''} date={'September 4, 2020'} />
        <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={'hidden lg:flex flex-col'} date={'September 4, 2020'} />
        <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={'hidden lg:flex flex-col'} date={'September 4, 2020'} />
       
        </section>
          </div>
    </section>
  )
}

export default Upcoming