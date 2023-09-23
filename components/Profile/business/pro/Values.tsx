import React from 'react'
import SCard from './SCard'

const Values = () => {
  return (
     <section className=" border-b border-white-shade-4 pb-7">
    <div className="container lg:px-0 ">
        <h1 className="text-black font-bold text-2xl font-outfit mt-7">
        The core company values
        </h1>
        <section className='flex'>
            <SCard content={'Quality'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} />
        </section>
        
    </div>
</section>
  )
}

export default Values