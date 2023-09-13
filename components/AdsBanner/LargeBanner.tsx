

import React from 'react'
import { Verified } from '../Icons/Solid'
import Link from 'next/link'

// interface LargeBannerProps {
//   name: string,
//   jobTitle: string,
// }

const LargeBanner = () => {
  return (
    <Link href={'/'} className='flex items-center justify-center gap-x-3 w-full h-[500px] bg-cover bg-center rounded-2xl hover:cursor-pointer' style={{ backgroundImage: `url('/images/banner/sample.jpg')` }}>
       
    </Link>
  )
}

export default LargeBanner