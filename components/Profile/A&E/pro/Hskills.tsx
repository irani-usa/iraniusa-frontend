import React from 'react'
import Skillsitem from '../../Professional/Pro/Skillsitem'

const Hskills = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="container mt-7 lg:pl-5">
         <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Special Talents</h1>
         <ul className='grid grid-cols-2 mt-7  items-center gap-2 text-lg font-medium  text-black '>
          <Skillsitem title={'Song writer'} />
          <Skillsitem title={'Composer'} />
          <Skillsitem title={'Musician'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Problem solving'} />
         </ul>
      </div>
 </section>
  )
}

export default Hskills