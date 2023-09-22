import OverlayMenu from '@/components/Layout/OverlayMenu'
import AboutMe from '@/components/Profile/Professional/Free/AboutMe'
import Educations from '@/components/Profile/Professional/Free/Educations'
import Experinces from '@/components/Profile/Professional/Free/Experinces'
import Gallery from '@/components/Profile/Professional/Free/Gallery'
import Contacts from '@/components/Profile/general/Contacts'
import Cover from '@/components/Profile/general/Cover'
import Navigation from '@/components/Profile/general/Navigation'
import UserTitle from '@/components/Profile/general/UserTitle'
import React from 'react'

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
                <Educations />
                <Gallery />
                <Contacts />
            </section>
        </section>
    </section>
  )
}

export default page