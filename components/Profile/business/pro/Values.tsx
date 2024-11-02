import React from 'react'
import SCard from './SCard'
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import HandHeart from '@/components/Icons/Profile/HandHeart'

const Values = () => {
  return (
    <section className=" border-b border-white-shade-4 py-7 lg:py-10">
      <div className="container lg:pl-5 ">
      <IconElement icon={<HandHeart />}/>

          <h1 className="text-black font-bold text-2xl font-outfit mt-7 lg:text-3xl text-center">
            The core company values
          </h1>
        <section className='flex gap-x-5'>
          <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={''} />
          <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={'hidden lg:flex'} />
          <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={'hidden lg:flex'} />
        </section>
       <Arrowbtn classes={'hidden lg:flex'} />
      </div>
    </section>
  )
}

export default Values