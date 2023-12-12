import React from 'react'

import Star from "../../About/Star";
import Companies from './Companies';
import People from './People';

const Monthlynewusers = () => {
  return (
    <section className="container mt-24 lg:mt-32">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-center gap-x-2">
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
          <Star content={"Monthly new users"} />
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="text-white-shade-11 mt-4 text-lg text-center">
          New individuals and companies join our platform every month, let’s get
          to know them!
        </p>
      </div>
      <div className='py-20'>
        <Companies />
        <People />
      </div>
    </section>
  )
}

export default Monthlynewusers