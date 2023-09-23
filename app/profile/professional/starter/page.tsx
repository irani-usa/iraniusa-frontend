import OverlayMenu from '@/components/Layout/OverlayMenu'
import AboutMe from '@/components/Profile/Professional/Free/AboutMe'
import Educations from '@/components/Profile/Professional/Free/Educations'
import Experinces from '@/components/Profile/Professional/Free/Experinces'
import Gallery from '@/components/Profile/Professional/Free/Gallery'
import Avatar from '@/components/Profile/general/Avatar'
import Contacts from '@/components/Profile/general/Contacts'
import Cover from '@/components/Profile/general/Cover'
import Navigation from '@/components/Profile/general/Navigation'
import UserTitle from '@/components/Profile/general/UserTitle'
import React from 'react'

const page = () => {
  return (
    <section>
      <OverlayMenu />
        <div className='w-full relative'>
            <Cover/>
        </div>
        <div className='container flex relative -top-[100px] left-0 p-10 mb-20'>
            <Avatar/>
            <UserTitle/>
        </div>
        <div className='w-full h-1  lg:border-t border-white-shade-4'>

        </div>
        <section className='flex lg:container'>
         <Navigation/>
            <section className='lg:border-l  lg:border-white-shade-4 lg:pl-6'>
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