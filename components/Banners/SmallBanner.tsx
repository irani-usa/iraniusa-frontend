
import React from 'react'
import { Verified } from '../Icons/Solid'
import Link from 'next/link'

interface SmallBannerProps {
  name: string,
  role:string,
  jobTitle: string,
}

const SmallBanner:React.FC<SmallBannerProps> = (props) => {
  return (
    <Link href={'/'} className='flex items-center justify-center gap-x-3 w-full h-40 bg-cover bg-center rounded-2xl hover:cursor-pointer' style={{ backgroundImage: `url('/images/banner/3.png')` }}>
        <div className='flex'>
            <div className='w-14 h-14 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/1.jpg')` }}></div>
            <div className='w-14 h-14 -ml-6 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/2.jpg')` }}></div>
        </div>
        <div className='flex flex-col gap-y-[7px]'>
            <h3 className='flex items-center text-white font-opensans font-medium text-lg'>
             {props.name}
             <Verified/>
            </h3>
            <h4 className='text-white-shade-8 '>
            {props.jobTitle}
            </h4>
            <h4 className='text-white-shade-8 '>
            {props.role}
            </h4>
        </div>
    </Link>
  )
}

export default SmallBanner