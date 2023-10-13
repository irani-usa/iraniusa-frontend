import React from 'react'
import Mcard from './Mcard'
import Arrowbtn from '../../general/Arrowbtn'

const Albums = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="container mt-7 lg:pl-5">
    <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
    <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl mt-5">Albums</h1>
    <Arrowbtn classes={'hidden lg:flex'} />
      
        </div>

         <div className='mt-7 lg:flex items-center gap-x-3 lg:gap-x-6'>
         <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={''} date={'September 4, 2020'} />
         </div>
      </div>
 </section>
  )
}

export default Albums