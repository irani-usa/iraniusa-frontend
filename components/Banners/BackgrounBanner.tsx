
import React from 'react'
import Link from 'next/link'


const BackgrounBanner = () => {
  return (
    <div className="relative flex justify-center">
    {/* آواتارها رو اینجا بیرون از Link قرار می‌دیم */}
    <div className="flex absolute -top-5 z-10">
      <div
        className="w-14 h-14 rounded-full bg-cover bg-center "
        style={{ backgroundImage: "url('/images/avatars/1.png')" }}
      ></div>
      <div
        className="w-14 h-14 -ml-6 rounded-full bg-cover bg-center "
        style={{ backgroundImage: "url('/images/avatars/2.png')" }}
      ></div>
    </div>
    <Link href={'/'} className='relative flex flex-col items-center justify-center gap-y-5 w-full py-10  bg-cover bg-center rounded-2xl hover:cursor-pointer h-80 box' style={{ backgroundImage: `url('/images/banner/4.jpeg')` }}>
      
     

     
    </Link>
    </div>
  )
}

export default BackgrounBanner