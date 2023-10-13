import { Author } from '@/components/Pages/Blog/Detail/Author'
import { Date } from '@/components/Pages/Blog/Detail/Date'
import { Info } from '@/components/Pages/Blog/Detail/Info'
import React from 'react'

const page = () => {
  return (
    <section className='container py-10'>
        <section>
          <div>
            <h1 className='text-black text-2xl font-semibold'>Why should you use and invest time in the Irani.World platform?</h1>
            <div>
              <div className='flex items-center gap-x-4 mt-10'> 
              <Date date={'September 4, 2020'} />
              <Author name={'sajjadezati'} avatar={'/images/blog/User.webp'}  />
              </div>
              <Info view={'20k'} like={'23'} dislike={'6'} />
            </div>
            <div className='w-full h-[400px] rounded-2xl bg-center bg-cover' style={{ backgroundImage:`url('/images/blog/FreedomBanner.png')` }}>

            </div>
          </div>
        </section>
    </section>
  )
}

export default page