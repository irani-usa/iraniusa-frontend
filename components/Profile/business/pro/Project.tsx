import React from 'react'
import Arrowbtn from '../../general/Arrowbtn'
import { Sectiontitle } from '../../general'
import IconElement from '../../general/IconElement'
import ProjectIcon from '@/components/Icons/Profile/Project'
import Projectitem from '../../Professional/Pro/Projectitem'


const Project: React.FC = () => {
  return (
    <div className=' w-full border-white-shade-4 border-b py-16 container'>
    <div className=' flex flex-col gap-y-6 mt-8 lg:px-0 items-center'>
    <IconElement icon={<ProjectIcon />}/>
    <Sectiontitle title={'projects Completed'} classes={''} />
          <section className='lg:flex items-center gap-x-7 w-full mt-10'>
 
         <Projectitem title={'Upsket (device management)'} skill={['UI/UX design' , "html / css"]} cover={'/images/profile/Project.png'} subtitle='' icon="" />
       
          </section>
          
        <Arrowbtn classes={'lg:hidden'} />
        
    </div>
  </div>
  )
}

export default Project