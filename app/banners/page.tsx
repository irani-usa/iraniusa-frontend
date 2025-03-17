"use client"
import BackgrounBanner from '@/components/Banners/BackgrounBanner'
import LargeBanner from '@/components/Banners/LargeBanner'
import MediumBanner from '@/components/Banners/MediumBanner'
import NormallBanner from '@/components/Banners/NormalBanner'
import SmallBanner from '@/components/Banners/SmallBanner'
import React, { useState } from 'react'



const page = () => {


  return (
    <div className='container flex flex-col gap-y-16 my-16'>
      <LargeBanner />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <MediumBanner name={'Supplemental income'} />
        <MediumBanner name={'Supplemental income'} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <SmallBanner name={'Supplemental income'} jobTitle={'کمک های دولتی دریافت کنید'} role={'Dentist'} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <NormallBanner name={'Supplemental income'} jobTitle={'Dentist'} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <BackgrounBanner />
      </div>
    
    </div>
  )
}

export default page