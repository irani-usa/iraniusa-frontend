import React from 'react'
import Label from './label'
import { Log } from '@/components/Icons/Profile/log'


const Labels = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="container mt-7 lg:pl-5 lg:mt-10">
         <h1 className="text-2xl text-black text-center font-outfit font-bold lg:text-3xl">Cooperating with labels</h1>
         <div className='mt-9 lg:flex items-center gap-x-3 lg:gap-x-6'>
           <Label logo={<Log />} />
         </div>
      </div>
 </section>
  )
}

export default Labels