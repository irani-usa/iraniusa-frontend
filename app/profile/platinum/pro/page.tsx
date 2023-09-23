import OverlayMenu from '@/components/Layout/OverlayMenu'
import Avatar from '@/components/Profile/general/Avatar'
import Cover from '@/components/Profile/general/Cover'
import UserTitle from '@/components/Profile/business/pro/UserTitle'
import React from 'react'
import Company from '@/components/Profile/business/pro/company'
import CompanyAbout from '@/components/Profile/business/pro/CompanyAbout'
import Services from '@/components/Profile/business/pro/Services'
import Values from '@/components/Profile/business/pro/Values'
import Team from '@/components/Profile/business/pro/Team'
import Exprince from '@/components/Profile/business/starter/Exprince'
import Gallery from '@/components/Profile/business/pro/Gallery'
import Blog from '@/components/Profile/business/pro/Blog'
import Frequent from '@/components/Profile/business/pro/Frequent'
import Social from '@/components/Profile/Professional/Pro/Social'
import Contact from '@/components/Profile/business/pro/Contact'

const page = () => {
    return (
        <section>
            <OverlayMenu />
            <div className='w-full border-b border-white-shade-4 pb-24'>
       <div className='w-full relative'>
            <Cover background={'/images/profile/business/cover.png'}/>
        </div>
        <div className='w-full container flex relative -top-[100px] left-0 p-10 mb-20'>
            <Avatar background={'/images/profile/business/prof.png'}/>
            <UserTitle />
        </div>
       </div>
       <section>
        <section>
            <Company />
            <CompanyAbout />
            <Services />
            <Values />
            <Team />
            <Exprince />
            <Gallery />
            <Blog />
            <Frequent />
            <Social />
            <Contact />
        </section>
       </section>
        </section>
    )
}

export default page