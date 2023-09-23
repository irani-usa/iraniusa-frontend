import React from 'react'

const Gallery = () => {
  return (
    <section className='w-full border-white-shade-4 border-b py-8 lg:py-11'>
    <div className='container  lg:px-0'>
      <h1 className="text-[26px] font-outfit text-center font-bold text-black lg:text-3xl mt-4">Gallery</h1>
      <div className='grid grid-cols-2 items-center gap-x-7 gap-y-4 mt-5 lg:grid-cols-3 py-8 lg:pt-10'>
       
        <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
               <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
               <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
        </div>
     
    </div>
  
  </section>
  )
}

export default Gallery