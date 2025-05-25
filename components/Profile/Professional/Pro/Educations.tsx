
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
    <section className='w-full border-white-shade-4 border-b py-16 container'>
      <div className=' flex flex-col gap-y-3 lg:px-0 '>
      <IconElement icon={<CoursesIcon />}/>
      <Sectiontitle title={"Courses completed"} classes={''} />
        <p className=" text-white-shade-9 text-center font-opensans">{props.courseabout}</p>

        <div className='grid grid-cols-1 gap-3 lg:gap-7 mt-11 lg:mt-7 lg:grid-cols-2 pb-14'>

          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Oct 2022'} subname={'Coursera'} />
          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Oct 2022'} subname={'Coursera'} />
          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Oct 2022'} subname={'Coursera'} />
          <Course iconComp={<C />} name={'Google Data Analytics  Professional Certificate'} date={'Oct 2022'} subname={'Coursera'} />
        </div>
        <div className='w-full border-t border-t-white-shade-4 pt-14'>
        <IconElement icon={<EducationsIcon />}/>
        <h1 className="text-[26px] font-outfit font-bold text-black mt-4 text-center">Educations</h1>
        <p className=" text-white-shade-9  font-opensans text-center mt-3">{props.educationabout}</p>
        <div className='grid grid-cols-1 items-center mt-14 lg:grid-cols-2  gap-3 '>
          <Education title={'Product designer'} university={'MTI'} date={'Started 2021'} city={'New York'} />
          <Education title={'Product designer'} university={'MTI'} date={'Graduated 2021'} city={'New York'} />
        </div>
        </div>
      </div>


    </section>
  )
}

export default Educations