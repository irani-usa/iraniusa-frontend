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
    <div className='container flex flex-col gap-y-6 mt-8 lg:px-0'>
    <Sectiontitle title={'projects Completed'} />
          <section className='lg:flex items-center gap-x-32'>
 
         <Projectitem title={'Upsket (device management)'} skill={'UI/UX design'} cover={'/images/profile/Project.png'} />
          </section>
        
        <Arrowbtn />
          
          <h1 className="text-[26px] font-outfit font-bold mt-9 text-black lg:text-3xl">Soft skills and languages</h1>
          <p className=" text-white-shade-9  font-opensans">{props.softskillabout}</p>
            <ul className='list-disc text-black grid grid-cols-1 ml-5 text-lg font-medium gap-y-4 lg:grid-cols-3 lg:grid-rows-5'>
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          
            </ul>
    </div>
  </div>
  )
}

export default Project