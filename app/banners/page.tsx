"use client"
import BackgrounBanner from '@/components/Banners/BackgrounBanner'
import LargeBanner from '@/components/Banners/LargeBanner'
import MediumBanner from '@/components/Banners/MediumBanner'
import NormallBanner from '@/components/Banners/NormalBanner'
import SmallBanner from '@/components/Banners/SmallBanner'
import PlanCard from '@/components/Pages/Plans'
import React, { useState } from 'react'



const page = () => {
  const [plan, setPlan] = useState(
    {
      title: "Professional",
      subTitle: "No credit card required",
      isPopular: false,
      types: [
        {
          title: "Starter",
          pricing: "Free",
          basePricing: "Free", // قیمت اصلی را برای Starter نگه می‌داریم
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
          ],
        },
        {
          title: "Pro",
          pricing: "$18$",
          basePricing: "$18$", // قیمت اصلی Pro
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
            "Followers Instagram",
            "What is my job about",
            "My hard Skills",
            "Project i have done",
            "My soft skills ",
            "Courses i finished",
            "My blog",
            "Socials",
            "Level Blog",
          ],
        },
      ],
    },   
  );

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
    <div className='w-full flex gap-5'>
      <PlanCard  planData={plan}/>
      <MediumBanner name={'Supplemental income'} />
    </div>
    </div>
  )
}

export default page