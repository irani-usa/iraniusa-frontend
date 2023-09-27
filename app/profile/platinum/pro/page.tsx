import OverlayMenu from '@/components/Layout/OverlayMenu'
import Avatar from '@/components/Profile/business/pro/Avatar'
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
import Terms from '@/components/Profile/business/pro/Terms'
import Navigation from '@/components/Profile/Professional/Pro/Navigation'

const page = () => {
    return (
        <section>
            <OverlayMenu />
            <div className='w-full border-b border-white-shade-4 pb-24'>
       <div className='w-full relative'>
            <Cover background={'/images/profile/business/cover.png'}/>
        </div>
        <div className='w-full container flex relative -top-[100px] left-0 p-10 mb-20'>
            <Avatar />
            <UserTitle />
        </div>
       </div>
       <section  className='flex lg:pl-[110px]'>
        <Navigation />
      
        <section  className='lg:border-l lg:border-white-shade-4'>
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
            <Terms />
        </section>
       </section>
        </section>
    )
}

export default page