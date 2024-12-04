
import React from 'react'
import Link from 'next/link'


const BackgrounBanner = () => {
  return (
    <Link href={'/'} className='relative flex flex-col items-center justify-center gap-y-5 w-full py-10  bg-cover bg-center rounded-2xl hover:cursor-pointer h-80' style={{ backgroundImage: `url('/images/banner/4.jpeg')` }}>
      
     
      <div
          className="w-16 h-16 absolute left-1/2 -top-5 -translate-x-1/2 z-5 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/avatars/1.png')` }}
        ></div>
     
    </Link>
  )
}

export default BackgrounBanner