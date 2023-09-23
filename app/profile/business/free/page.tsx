import Avatar from '@/components/Profile/business/free/Avatar'
import Cover from '@/components/Profile/business/free/Cover'
import UserTitle from '@/components/Profile/business/free/UserTitle'
import React from 'react'

const page = () => {
  return (
    <section>
       <div className='w-full border-b border-white-shade-4'>
       <div className='w-full relative'>
            <Cover/>
        </div>
        <div className='w-full container flex relative -top-[100px] left-0 p-10 mb-20'>
            <Avatar/>
            <UserTitle/>
        </div>
       </div>
    </section>
  )
}

export default page