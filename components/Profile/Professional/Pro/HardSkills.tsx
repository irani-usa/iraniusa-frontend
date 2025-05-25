import React from 'react'
import Skill from './Skill'

import { Sectiontitle } from '../../general'
import { Xd } from '@/components/Icons/Profile/Xd'
import { IA } from '@/components/Icons/Profile/IA'
import { Lightroom } from '@/components/Icons/Profile/Lightroom'

import IconElement from '../../general/IconElement'
import HardSkillIcon from '@/components/Icons/Profile/HardSkill'

const HardSkills = () => {
    return (
        <div className=' w-full container border-white-shade-4 border-b py-14'>
            <div className=' flex flex-col gap-y-3  lg:px-0 items-center'>
            
                <IconElement icon={<HardSkillIcon />} />
                <Sectiontitle title={'Technical skills'} classes={''} />
                <p className='text-white-shade-9 text-center font-medium'>My technical and expert skills are essential to the services I provide.</p>
                <section className='flex flex-col gap-x-5 overflow-x-scroll no-scroll lg:grid grid-cols-3 gap-5 w-full mt-6'>
              <Skill title={'Lightroom'} iconComp={<Lightroom />} />
              <Skill title={'Illustrator'} iconComp={<IA />} />
              <Skill title={'Xd'} iconComp={<Xd />} />
                </section>

            </div>
        </div>
    )
}

export default HardSkills