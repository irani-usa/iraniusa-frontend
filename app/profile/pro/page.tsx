import Navigation from '@/components/Profile/general/Navigation'
import AboutMe from '@/components/Profile/Professional/Pro/AboutMe'
import Educations from '@/components/Profile/Professional/Pro/Educations'
import Experinces from '@/components/Profile/Professional/Pro/Experinces'
import Gallery from '@/components/Profile/Professional/Pro/Gallery'
import Social from '@/components/Profile/Professional/Pro/Social'
import Cover from '@/components/Profile/general/Cover'
import UserTitle from '@/components/Profile/general/UserTitle'
import React from 'react'
import OverlayMenu from '@/components/Layout/OverlayMenu'
import Company from '@/components/Profile/Professional/Pro/Company'
import Job from '@/components/Profile/Professional/Pro/Job'

const page = () => {
  return (
    <section>
        <OverlayMenu />
      <div className='w-full border-white-shade-4 border-b pb-9 lg:pb-32 relative'>
          <Cover/>
          <div className='container lg:absolute lg:bottom-12 lg:left-[27%]'>
          <UserTitle />
          </div>
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