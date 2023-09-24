import OverlayMenu from '@/components/Layout/OverlayMenu'
import Avatar from '@/components/Profile/A&E/Avatar'
import Cover from '@/components/Profile/general/Cover'
import UserTitle from '@/components/Profile/A&E/UserTitle'
import React from 'react'

const page = () => {
  return (
   <section>
            <OverlayMenu />
            <div className='w-full border-b border-white-shade-4 pb-24'>
       <div className='w-full relative'>
            <Cover background={'/images/profile/A&E/cover.png'}/>
        </div>
        <div className='w-full container flex relative -top-[100px] left-0 p-10 mb-20'>
            <Avatar  />
            <UserTitle />
        </div>
       </div>
   </section>
  )
}

export default page