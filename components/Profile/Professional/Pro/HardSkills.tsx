import React from 'react'
import Skill from './Skill'
import Figma from '@/components/Icons/Profile/Figma'
import { Sectiontitle } from '../../general'
import { Xd } from '@/components/Icons/Profile/Xd'
import { IA } from '@/components/Icons/Profile/IA'
import { Lightroom } from '@/components/Icons/Profile/Lightroom'
import { PS } from '@/components/Icons/Profile/PS'
import { AE } from '@/components/Icons/Profile/AE'

const HardSkills = () => {
    return (
        <div className=' w-full border-white-shade-4 border-b pb-10'>
            <div className=' flex flex-col gap-y-6 mt-8 lg:px-0'>
                <Sectiontitle title={'Hard skills'} classes={''} />

                <section className='flex gap-x-5 overflow-x-scroll no-scroll lg:grid grid-cols-3 gap-5'>
              <Skill title={'Figma'} iconComp={<Figma />} />
              <Skill title={'After Effects'} iconComp={<AE />} />
              <Skill title={'Photoshop'} iconComp={<PS />} />
              <Skill title={'Lightroom'} iconComp={<Lightroom />} />
              <Skill title={'Illustrator'} iconComp={<IA />} />
              <Skill title={'Xd'} iconComp={<Xd />} />
                </section>

            </div>
        </div>
    )
}

export default HardSkills