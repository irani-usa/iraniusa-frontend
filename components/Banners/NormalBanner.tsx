
import React from 'react'
import { Verified } from '../Icons/Solid'
import Link from 'next/link'

interface NormallBanner {
  name: string,
  jobTitle: string,
}

const NormallBanner: React.FC<NormallBanner> = (props) => {
  return (
    <Link href={'/'} className='flex flex-col items-center justify-center gap-y-5 w-full h-[450px] bg-cover bg-center rounded-2xl hover:cursor-pointer' style={{ backgroundImage: `url('/images/banner/sample.jpg')` }}>
      <div className='flex'>
        <div className='w-20 h-20 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/1.png')` }}></div>
        <div className='w-20 h-20 -ml-6 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/2.png')` }}></div>
      </div>
      <div className='flex flex-col gap-y-2 justify-center'>
        <h3 className='flex items-center text-white font-opensans font-medium text-2xl text-center'>
          {props.name}
          <Verified />
        </h3>
        <h4 className='text-white-shade-8 text-lg text-center'>
          {props.jobTitle}
        </h4>
      </div>
      <svg width="298" height="12" viewBox="0 0 298 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="171" y1="5.5" x2="298" y2="5.49999" stroke="#595959" />
        <line x1="-4.3688e-08" y1="5.5" x2="127" y2="5.49999" stroke="#595959" />
        <path d="M149 0L150.587 3.81565L154.706 4.1459L151.568 6.83435L152.527 10.8541L149 8.7L145.473 10.8541L146.432 6.83435L143.294 4.1459L147.413 3.81565L149 0Z" fill="white" />
      </svg>
      <div className='flex flex-col gap-y-3 text-center text-white-shade-8'>
        <h4 className='text-xl font-vazirmatn'>
          کمک های دولتی دریافت کنید
        </h4>
        <p className='text-sm'>
          Medium constructions represent
          <br />
          innovativeconstruction services
        </p>
      </div>
    </Link>
  )
}

export default NormallBanner