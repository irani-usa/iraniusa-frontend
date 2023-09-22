import AboutMe from '@/components/Profile/Professional/Free/AboutMe'
import Educations from '@/components/Profile/Professional/Free/Educations'
import Experinces from '@/components/Profile/Professional/Free/Experinces'
import Gallery from '@/components/Profile/Professional/Free/Gallery'
import Contacts from '@/components/Profile/general/Contacts'
import Cover from '@/components/Profile/general/Cover'
import UserTitle from '@/components/Profile/general/UserTitle'
import React from 'react'

const page = () => {
  return (
    <section>
        <div className='w-full border-white-shade-4 border-b pb-8'>
            <Cover/>
            <div className='container'>
            <UserTitle />
            </div>
        </div>
        <section>
            <section>
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