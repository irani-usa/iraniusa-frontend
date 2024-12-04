import React from 'react'
import { Arrowbtn, Sectiontitle } from '../../general'
import { Projectitem } from './Projectitem'
import IconElement from '../../general/IconElement'
import ProjectIcon from '@/components/Icons/Profile/Project'

export const Project = () => {
  return (
    <section className='w-full  border-white-shade-4 border-b py-8'>
       <div className='lg:pl-5'>
        <IconElement icon={<ProjectIcon />}/>
        <Sectiontitle title={'Popular Products'} classes={'text-center mt-5'} />
        <div className='pt-8 pb-3 grid lg:grid-cols-3 grid-cols-1 items-center gap-3'>
            <Projectitem title={'MIRAI HOUSE OF ARCHES'} cover={'/images/profile/ultra/Aproject.png'} classes={''} discretion='SLorem ipsum dolor sit amet consectetur. Congue amet bibendum posuere volutpat cursus magnis in eu sit. Luctus sit.' feature={["test"]} />
            <Projectitem title={'MIRAI HOUSE OF ARCHES'} cover={'/images/profile/ultra/Aproject.png'} classes={''} discretion='SLorem ipsum dolor sit amet consectetur. Congue amet bibendum posuere volutpat cursus magnis in eu sit. Luctus sit.' feature={["test"]} />
            <Projectitem title={'MIRAI HOUSE OF ARCHES'} cover={'/images/profile/ultra/Aproject.png'} classes={''} discretion='SLorem ipsum dolor sit amet consectetur. Congue amet bibendum posuere volutpat cursus magnis in eu sit. Luctus sit.' feature={["test"]} />
          
        </div>
        <Arrowbtn classes={'lg:hidden'} />
        </div>
    </section>
  )
}
