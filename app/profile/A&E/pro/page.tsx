import OverlayMenu from '@/components/Layout/OverlayMenu'
import Avatar from '@/components/Profile/A&E/starter/Avatar'
import Cover from '@/components/Profile/general/Cover'
import UserTitle from '@/components/Profile/A&E/starter/UserTitle'
import React from 'react'
import Concert from '@/components/Profile/A&E/starter/Concert'
import Platform from '@/components/Profile/A&E/starter/Platform'
import About from '@/components/Profile/A&E/starter/About'
import Tracks from '@/components/Profile/A&E/starter/Tracks'
import Gallery from '@/components/Profile/A&E/pro/Gallery'
import Social from '@/components/Profile/Professional/Pro/Social'
import Donate from '@/components/Profile/A&E/starter/Donate'
import Navigation from '@/components/Profile/general/Navigation'
import Upcoming from '@/components/Profile/A&E/pro/Upcoming'
import Steream from '@/components/Profile/A&E/pro/Steream'
import Ticket from '@/components/Profile/A&E/pro/Ticket'
import Albums from '@/components/Profile/A&E/pro/Albums'
import Labels from '@/components/Profile/A&E/pro/Labels'
import Hskills from '@/components/Profile/A&E/pro/Hskills'
import Educations from '@/components/Profile/Professional/Free/Educations'
import Blog from '@/components/Profile/A&E/pro/Blog'


const page = () => {
  return (
   <section>
            <OverlayMenu />
            <div className='w-full border-b border-white-shade-4 pb-24 lg:pb-0'>
       <div className='w-full relative'>
            <Cover background={'/images/profile/A&E/cover.png'}/>
        </div>
        <div className='w-full container flex relative -top-[100px] left-0 p-10 mb-20 lg:mb-10'>
            <Avatar  />
            <UserTitle />
        </div>
       </div>
       <section className='lg:flex lg:pl-[110px]'>
        <Navigation />
        <section  className='lg:border-l lg:border-white-shade-4 '>
          <Concert />
          <Platform />
          <About />
          <Upcoming />
          <Tracks />
          <Steream artist={'Siavash'} />
          <Ticket />
          <Albums />
          <Labels />
          <Hskills />
          <div className='lg:pl-5'>
          <Educations />
          </div>
          <Gallery />
          <Blog />
          <Social />
          <Donate />
        </section>
       </section>
   </section>
  )
}

export default page