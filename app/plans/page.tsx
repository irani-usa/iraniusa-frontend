import React from 'react'


import { Crown, Music, Gem } from '@/components/Icons/Outline'

import OverlayMenu from '@/components/Layout/OverlayMenu'
import PlanCard from '@/components/Pages/Plans'
import Separator from '@/components/Separator'
import Input from '@/components/Forms/Input'
import Button from '@/components/Forms/Button'

const page = () => {
  return (
    <section className='container'>
      <OverlayMenu />
      <div className='flex flex-col justify-center items-center py-8 gap-y-8'>
        <Separator classes={''} />
        <h1 className='font-outfit text-2xl text-black font-semibold'>Ready to get started?</h1>
      </div>
      <section className='lg:flex gap-x-4 items-center w-full overflow-x-scroll no-scroll'>
        <PlanCard content={'Professional'} price={'Free'} theme={'bg-[#FF9900]'} iconComp={<Gem />} classes={''} />
        <PlanCard content={'Artists & Events'} price={'Free'} theme={'bg-[#7E00E0]'} iconComp={<Music />} classes={'hidden lg:inline'} />
        <PlanCard content={'Business Platinum'} price={'Free'} theme={'bg-[#C100E0]'} iconComp={<Crown />} classes={'hidden lg:inline'} />
        <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </section>
      </section>
      <div className="border-[1.5px] border-white-shade-4 rounded-2xl p-5 mt-16 lg:flex justify-between lg:rounded-3xl">
        <div className='flex flex-col gap-y-4'>
          <h1 className='text-black font-outfit text-2xl font-semibold'>Cant afford plans? ☹️</h1>
          <h3 className='text-white-shade-8 font-opensans font-medium'>Add your email and we will contact you</h3>
        </div>
        <div className='flex  flex-col gap-y-4 lg:flex-row lg:bg-white-shade-3 lg:px-1
   lg:items-center rounded-2xl lg:justify-between lg:w-2/4'>
          <Input id={'Email'} inputType={'email'} placeHolder={'Your email'} classes={'lg:h-auto lg:pb-3'} label={''} iconComp={undefined} />
          <Button content={'Submit'} classes={'bg-black h-16 lg:w-40'} />
        </div>
      </div>
    </section>
  )
}

export default page