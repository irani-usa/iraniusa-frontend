import React from 'react'
import Projectitem from './Projectitem'
import Arrowbtn from '../../general/Arrowbtn'
import Skillsitem from './Skillsitem'
import { Sectiontitle } from '../../general'
import IconElement from '../../general/IconElement'
import ProjectIcon from '@/components/Icons/Profile/Project'
import OtherSkill from '@/components/Icons/Profile/OtherSkill'
import { Location } from '@/components/Icons/Outline'
import { Lang } from '@/components/Icons/Profile/Lang'

interface ProjectProps {
  softskillabout:string,
}

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <div className=' w-full border-white-shade-4 border-b py-14 container'>
    <div className=' flex flex-col gap-y-6  lg:px-0 items-center'>
    <IconElement icon={<ProjectIcon />}/>
    <Sectiontitle title={'projects Completed'} classes={''} />
          <section className='lg:flex flex-wrap 2xl:grid grid-cols-3 lg:mt-7 items-center gap-5 w-full'>
 
         <Projectitem title={'Upsket (device management)'} skill={['UI/UX design', "html / css","USA"]} cover={'/images/profile/Project.png'} subtitle={'UI/UX design'} icon={<Location />} />
    
          </section>
          
        <Arrowbtn classes={'mt-5 lg:mt-0 pb-8'} />

          <div className='w-full border-t border-white-shade-4 pt-14'>
          <IconElement icon={<OtherSkill />}/>
          <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl mt-5">Other Skills & Languages</h1>
          <p className=" text-white-shade-9  font-opensans text-center mt-4">{props.softskillabout}</p>
          <span className='text-xl text-start block w-full font-bold mt-10'>- Other skills</span>
            <ul className=' text-black grid grid-cols-1 mt-6  text-lg font-medium gap-6 lg:grid-cols-3 w-full list-none'>
          <Skillsitem title={'Stress managemnet'} icon={undefined} />
          <Skillsitem title={'Creativity, Responsible'} icon={undefined} />
          <Skillsitem title={'Speech in public'} icon={undefined} />
          <Skillsitem title={'Speech in public'} icon={undefined} />
          <Skillsitem title={'Creativity, Responsible'} icon={undefined} />
          <Skillsitem title={'Creativity, Responsible'} icon={undefined} />
          <Skillsitem title={'Team player'} icon={undefined} />
          <Skillsitem title={'Team player'} icon={undefined} />
          <Skillsitem title={'Problem solving'} icon={undefined} />
          <Skillsitem title={'Problem solving'} icon={undefined} />

          
            </ul>
          <span className='text-xl text-start block w-full font-bold mt-9'>- Languages</span>

            <ul className=' text-black grid grid-cols-1 mt-6 text-lg font-medium gap-4 lg:grid-cols-3  w-full list-none'>
       
         
          <Skillsitem title={'German'} icon={<Lang />} />
          <Skillsitem title={'English'} icon={<Lang />} />
          <Skillsitem title={'Persian'} icon={<Lang />} />
          <Skillsitem title={'Spanish'} icon={<Lang />} />
          
            </ul>
          </div>
    </div>
  </div>
  )
}

export default Project