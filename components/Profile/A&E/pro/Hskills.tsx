import React from 'react'
import Skillsitem from '../../Professional/Pro/Skillsitem'

const Hskills = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="container mt-7 lg:pl-5">
         <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Special Talents</h1>
         <ul className='list-disc mt-7 overflow-x-scroll no-scroll flex items-center gap-x-12 text-lg font-medium  text-black pl-5'>
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