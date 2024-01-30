import React from 'react'
import Projectitem from './Projectitem'
import Arrowbtn from '../../general/Arrowbtn'
import Skillsitem from './Skillsitem'
import { Sectiontitle } from '../../general'

interface ProjectProps {
  softskillabout:string,
}

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8'>
    <div className=' flex flex-col gap-y-6 mt-8 lg:px-0'>
    <Sectiontitle title={'projects Completed'} classes={''} />
          <section className='lg:flex items-center gap-x-7'>
 
         <Projectitem title={'Upsket (device management)'} skill={'UI/UX design'} cover={'/images/profile/Project.png'} />
       
          </section>
          
        <Arrowbtn classes={'lg:hidden'} />
          
          <h1 className="text-[26px] font-outfit font-bold mt-9 text-black lg:text-3xl">Other Skills & Languages</h1>
          <p className=" text-white-shade-9  font-opensans">{props.softskillabout}</p>
            <ul className='list-disc text-black grid grid-cols-1 ml-5 text-lg font-medium gap-y-4 lg:grid-cols-3 lg:grid-rows-5'>
          <Skillsitem title={'Stress managemnet'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'German'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Persian'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'English'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Spanish'} />
          <Skillsitem title={'Problem solving'} />
          <Skillsitem title={'Problem solving'} />
         
          
            </ul>
    </div>
  </div>
  )
}

export default Project