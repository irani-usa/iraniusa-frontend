import React from 'react'
import { Arrowbtn, Sectiontitle } from '../../general'
import { Projectitem } from './Projectitem'

export const Project = () => {
  return (
    <section className='w-full  border-white-shade-4 border-b py-8'>
       <div className='container lg:pl-5'>
        <Sectiontitle title={'Our Projcets'} classes={'text-start'} />
        <div className='pt-8 pb-3 lg:flex  no-scroll items-center gap-x-8 '>
            <Projectitem title={'Brooklyn pent house'} cover={'/images/profile/ultra/project.png'} clasess={''} />
            <Projectitem title={'Brooklyn pent house'} cover={'/images/profile/ultra/project2.png'} clasess={'hidden lg:flex'} />
           
        </div>
        <Arrowbtn classes={'lg:hidden'} />
        </div>
    </section>
  )
}
