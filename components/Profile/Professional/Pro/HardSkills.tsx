import React from 'react'
import Skill from './Skill'
import Figma from '@/components/Icons/Profile/Figma'
import { Sectiontitle } from '../../general'

const HardSkills = () => {
    return (
        <div className=' w-full border-white-shade-4 border-b pb-10'>
            <div className='container flex flex-col gap-y-6 mt-8 lg:px-0'>
                <Sectiontitle title={'Hard skills'} />

                <section className='lg:grid grid-cols-3 gap-5'>
              <Skill title={'Figma'} iconComp={<Figma />} />
              <Skill title={'Figma'} iconComp={<Figma />} />
              <Skill title={'Figma'} iconComp={<Figma />} />
              <Skill title={'Figma'} iconComp={<Figma />} />
              <Skill title={'Figma'} iconComp={<Figma />} />
              <Skill title={'Figma'} iconComp={<Figma />} />
                </section>

            </div>
        </div>
    )
}

export default HardSkills