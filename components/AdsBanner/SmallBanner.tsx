
import React from 'react'
import { Verified } from '../Icons/Solid'

const SmallBanner = () => {
  return (
    <section className='flex items-center justify-center gap-x-3 w-full h-40 bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url('/images/banner/sample.jpg')` }}>
        <div className='flex'>
            <div className='w-14 h-14 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/1.jpg')` }}></div>
            <div className='w-14 h-14 -ml-6 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/2.jpg')` }}></div>
        </div>
        <div>
            <h3 className='text-white font-opensans font-medium text-lg'>
             Supplemental income
             <Verified/>
            </h3>
            <h4 className='text-white-shade-8 text-lg'>
            Dentist
            </h4>
        </div>
    </section>
  )
}

export default SmallBanner