import AboutMe from '@/components/Profile/Professional/Free/AboutMe'
import Experinces from '@/components/Profile/Professional/Free/Experinces'
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
            <section className='container'>
                <AboutMe />
                <Experinces />
            </section>
        </section>
    </section>
  )
}

export default page