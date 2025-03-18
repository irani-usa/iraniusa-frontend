
import React from 'react'

import {Education,Sectiontitle} from '../../general/index'

import Course from './Course'

import C from '@/components/Icons/Profile/C'
import IconElement from '../../general/IconElement'
import CoursesIcon from '@/components/Icons/Profile/Courses'
import EducationsIcon from '@/components/Icons/Profile/Educations'



interface EducationsProps {
  courseabout: string,
  educationabout:string,
}


const Educations: React.FC<EducationsProps> = (props) => {
  return (
    <section className='w-full border-white-shade-4 border-b py-8 container'>
      <div className=' flex flex-col gap-y-6 lg:px-0 '>
      <IconElement icon={<CoursesIcon />}/>
      <Sectiontitle title={"Courses completed"} classes={''} />
        <p className=" text-white-shade-9  font-opensans">{props.courseabout}</p>

        <div className='grid grid-cols-1 gap-7 mt-6 lg:grid-cols-2 mb-20'>

          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Coursera - Oct 2022'} />
     
          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Coursera - Oct 2022'} />     
          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Coursera - Oct 2022'} />
          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Coursera - Oct 2022'} />
        </div>
        <IconElement icon={<EducationsIcon />}/>
        <h1 className="text-[26px] font-outfit font-bold text-black mt-6 text-center">Educations</h1>
        <p className=" text-white-shade-9  font-opensans text-center">{props.educationabout}</p>
        <div className='grid grid-cols-1 items-center mt-3 lg:grid-cols-2  gap-3'>
          <Education title={'Product designer'} university={'MTI'} date={'2021'} />
          <Education title={'Product designer'} university={'MTI'} date={'2021'} />
        </div>
      </div>


    </section>
  )
}

export default Educations