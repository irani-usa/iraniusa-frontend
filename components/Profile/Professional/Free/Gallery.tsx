
import React from 'react'

const Gallery = () => {
  return (
<section className='w-full border-white-shade-4 border-b py-8'>
      <div className='container  lg:px-0'>
        <h1 className="text-[26px] font-outfit text-center font-bold text-black">Gallery</h1>
        <div className='grid grid-cols-2 items-center gap-x-5 gap-y-4 mt-9'>
         
          <div className='w-full h-[220px] bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url('/images/profile/cart.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url('/images/profile/card.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url('/images/profile/card.png')` }}></div>
          </div>
       
      </div>
    
    </section>
  )
}

export default Gallery