import Navigation from '@/components/Profile/general/Navigation'
import AboutMe from '@/components/Profile/Professional/Pro/AboutMe'
import Educations from '@/components/Profile/Professional/Pro/Educations'
import Experinces from '@/components/Profile/Professional/Pro/Experinces'
import Gallery from '@/components/Profile/Professional/Pro/Gallery'
import Social from '@/components/Profile/Professional/Pro/Social'
import Cover from '@/components/Profile/general/Cover'
import UserTitle from '@/components/Profile/Professional/Pro/UserTitle'
import React from 'react'
import OverlayMenu from '@/components/Layout/OverlayMenu'
import Company from '@/components/Profile/Professional/Pro/Company'
import Job from '@/components/Profile/Professional/Pro/Job'
import Avatar from '@/components/Profile/Professional/Pro/Avatar'

const page = () => {
  return (
    <section>
        <OverlayMenu />
        <div className='w-full relative'>
            <Cover/>
        </div>
        <div className='w-full container flex relative -top-[100px] left-0 p-10 mb-40'>
            <Avatar/>
            <UserTitle/>
        </div>
        <div className='w-full h-1 border-t border-white-shade-4'>
</div>
      <section className='flex lg:container'>
       <Navigation/>
          <section className='lg:border-l lg:border-white-shade-4 lg:pl-6'>
              <AboutMe />
              <Experinces />
              <Company />
              <Job />
              <Educations />
              <Gallery />
            <Social />
          </section>
      </section>
  </section>
  )
}

export default page