import React from 'react'
import { Sectiontitle } from '../../general'
import { Serviceitem } from './Serviceitem'
import { Case } from '@/components/Icons/Profile/Case'

export const Service = () => {
  return (
    <section className='w-full  border-white-shade-4 border-b py-8'>
       <div className='container lg:pl-5'>
       <Sectiontitle title={'Our services'} classes={'text-start'} />
       <div className='py-5'>
       <Serviceitem title={'Files for low budget cases'} icon={<Case />} />
       </div>
       </div>
    </section>
  )
}
