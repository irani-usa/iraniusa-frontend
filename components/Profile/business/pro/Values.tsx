import React from 'react'
import SCard from './SCard'
import { Arrowbtn } from '../../general'

const Values = () => {
  return (
    <section className=" border-b border-white-shade-4 pb-7 lg:pb-10">
      <div className="container lg:pl-5 ">
        <div className='lg:flex lg:items-center lg:justify-between lg:mt-9'>
          <h1 className="text-black font-bold text-2xl font-outfit mt-7 lg:text-3xl">
            The core company values
          </h1>
          <Arrowbtn classes={'hidden lg:flex'} />
        </div>
        <section className='flex gap-x-5'>
          <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={''} />
          <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={'hidden lg:flex'} />
          <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={'hidden lg:flex'} />
        </section>
      </div>
    </section>
  )
}

export default Values