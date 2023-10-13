import React from 'react'
import Skillsitem from '../../Professional/Pro/Skillsitem'

const Hskills = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="container mt-7 lg:pl-5">
         <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Hard skills</h1>
         <ul className='list-disc mt-7 flex items-center gap-x-12 text-lg font-medium lg:gap-x-6 text-black pl-5'>
          <Skillsitem title={'Song writer'} />
         </ul>
      </div>
 </section>
  )
}

export default Hskills