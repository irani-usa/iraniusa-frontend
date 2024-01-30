import React from 'react'
import { Sectiontitle } from '../../general'
import { Serviceitem } from './Serviceitem'
import { Case } from '@/components/Icons/Profile/Case'
import { Home } from '@/components/Icons/Profile/Home'
import { Idcard } from '@/components/Icons/Profile/Idcard'

export const Service = () => {
  return (
    <section className='w-full  border-white-shade-4 border-b py-8'>
       <div className='container lg:pl-5'>
       <Sectiontitle title={'Our services'} classes={'text-start'} />
       <div className='py-5 flex gap-x-5 overflow-x-scroll no-scroll'>
       <Serviceitem title={'Files for low budget cases'} icon={<Case />} />
       <Serviceitem title={'Every kind of property and appartments, even offices'} icon={<Home />} />
       <Serviceitem title={'Talk to estate agent directly'} icon={<Idcard />} />
       </div>
       </div>
    </section>
  )
}
