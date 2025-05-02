import React from 'react'
import Mcard from './Mcard'
import Arrowbtn from '../../general/Arrowbtn'

const Albums = () => {
  return (
    <section className='border-b border-white-shade-4 py-16 pl-3 '>

    <div className=' lg:flex lg:items-center lg:justify-between lg:mt-8'>
    <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl mt-5">Albums</h1>
    <Arrowbtn classes={'hidden lg:flex'} />
      
        </div>

         <div className='mt-7 flex lg:grid lg:grid-cols-3 no-scroll overflow-x-scroll gap-6'>
         <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={''} date={'September 4, 2020'} />
         <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={''} date={'September 4, 2020'} />
         <Mcard background={'/images/profile/A&E/upcoming.png'} trackname={'Shokofe haye kaviri'} artist={'Siavash ghomeyshi'} class={''} date={'September 4, 2020'} />
         </div>
 
 </section>
  )
}

export default Albums