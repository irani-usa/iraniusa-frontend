import Company from '@/components/Profile/business/starter/Company'
import Avatar from '@/components/Profile/business/starter/Avatar'
import Cover from '@/components/Profile/business/starter/Cover'
import UserTitle from '@/components/Profile/business/starter/UserTitle'
import React from 'react'
import Exprince from '@/components/Profile/business/starter/Exprince'
import Gallery from '@/components/Profile/business/starter/Gallery'
import Contacts from '@/components/Profile/business/starter/Contacts'
import Navigation from '@/components/Profile/business/starter/Navigation'

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
       <section className='relative top-0 left-0 lg:flex lg:container'>
       <Navigation/>
        <section className='lg:border-l  lg:border-white-shade-4 lg:pl-6'>
            <Company />
            <Exprince />
            <Gallery />
            <Contacts />
        </section>
       </section>
    </section>
  )
}

export default page