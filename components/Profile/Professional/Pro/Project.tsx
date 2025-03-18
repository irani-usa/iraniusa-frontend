import React from 'react'
import Projectitem from './Projectitem'
import Arrowbtn from '../../general/Arrowbtn'
import Skillsitem from './Skillsitem'
import { Sectiontitle } from '../../general'
import IconElement from '../../general/IconElement'
import ProjectIcon from '@/components/Icons/Profile/Project'
import OtherSkill from '@/components/Icons/Profile/OtherSkill'

interface ProjectProps {
  softskillabout:string,
}

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8 container'>
    <div className=' flex flex-col gap-y-6 mt-8 lg:px-0 items-center'>
    <IconElement icon={<ProjectIcon />}/>
    <Sectiontitle title={'projects Completed'} classes={''} />
          <section className='lg:flex items-center gap-x-7 w-full'>
 
         <Projectitem title={'Upsket (device management)'} skill={['UI/UX design' , "html / css"]} cover={'/images/profile/Project.png'} />
       
          </section>
          
        <Arrowbtn classes={'lg:hidden'} />
          <IconElement icon={<OtherSkill />}/>
          <h1 className="text-[26px] font-outfit font-bold mt-9 text-black lg:text-3xl">Other Skills & Languages</h1>
          <p className=" text-white-shade-9  font-opensans">{props.softskillabout}</p>
          <span className='text-xl text-start block w-full font-bold'>- Other skills</span>
            <ul className=' text-black grid grid-cols-1 ml-5 text-lg font-medium gap-6 lg:grid-cols-3 lg:grid-rows-5 w-full list-none'>
          <Skillsitem title={'Stress managemnet'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Speech in public'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Creativity, Responsible'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Team player'} />
          <Skillsitem title={'Problem solving'} />
          <Skillsitem title={'Problem solving'} />

          
            </ul>
          <span className='text-xl text-start block w-full font-bold'>- Languages</span>

            <ul className=' text-black grid grid-cols-1 ml-5 text-lg font-medium gap-4 lg:grid-cols-3 lg:grid-rows-5 w-full list-none'>
       
         
          <Skillsitem title={'German'} />
          <Skillsitem title={'English'} />
          <Skillsitem title={'Persian'} />
          <Skillsitem title={'Spanish'} />
          
            </ul>
    </div>
  </div>
  )
}

export default Project