import React from 'react'
import { Arrowbtn, Sectiontitle } from '../../general'
import { Projectitem } from './Projectitem'

export const Project = () => {
  return (
    <section className='w-full  border-white-shade-4 border-b py-8'>
       <div className='container lg:pl-5'>
        <Sectiontitle title={'Our Projcets'} classes={'text-start'} />
        <div className='pt-8 pb-3 lg:flex items-center gap-x-6'>
            <Projectitem title={'MIRAI HOUSE OF ARCHES'} cover={'/images/profile/ultra/Aproject.png'} classes={''} />
            <Projectitem title={'Lakeshore Design By Atelier Landschaft'} cover={'/images/profile/ultra/Aproject2.png'} classes={'hidden lg:flex'} />
        </div>
        <Arrowbtn classes={'lg:hidden'} />
        </div>
    </section>
  )
}
