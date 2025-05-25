import React from 'react'
import Label from './label'
import { Log } from '@/components/Icons/Profile/log'
import { Gorill } from '@/components/Icons/Profile/Gorill'
import { Vir } from '@/components/Icons/Profile/Vir'


const Labels = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="  mt-7 lg:pl-5 lg:mt-10">
         <h1 className="text-2xl text-black text-center font-outfit font-bold lg:text-3xl">Cooperating with labels</h1>
         <div className='  py-9 overflow-x-scroll no-scroll flex items-center gap-x-5 lg:gap-x-6 justify-between'>
           <Label logo={<Log />} />
           <Label logo={<Gorill />} />
           <Label logo={<Vir />} />
      
         </div>
      </div>
 </section>
  )
}

export default Labels