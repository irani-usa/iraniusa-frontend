import React from 'react'

const Gallery = () => {
  return (
    <section className='w-full border-white-shade-4 border-b pt-6 lg:pb-7'>
      <div className='container  lg:pl-5'>
        <h1 className="text-[26px] font-outfit text-center font-bold text-black lg:text-3xl mt-5 lg:py-8">Gallery</h1>
        <div className='grid grid-cols-2 items-center gap-x-5 gap-y-4 lg:grid-cols-3 py-8 mt-4'>
         
          <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px] lg:col-span-2' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px] col-span-2 lg:col-span-1' style={{ backgroundImage: `url('/images/profile/business/photo.png')` }}></div>
                
          </div>
       
      </div>
    
    </section>
  )
}

export default Gallery