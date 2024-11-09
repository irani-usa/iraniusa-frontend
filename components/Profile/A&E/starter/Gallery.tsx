import React from 'react'
import IconElement from '../../general/IconElement'
import GalleryIcon from '@/components/Icons/Profile/Gallery'

const Gallery = () => {
  return (
    <section className='w-full border-white-shade-4 border-b pt-8 lg:pb-7'>
      <div className='container  lg:pl-5'>
      <IconElement icon={<GalleryIcon />}/>

        <h1 className="text-[27px] font-outfit text-center font-bold text-black lg:text-3xl mt-5 lg:py-8">Gallery</h1>
        <div className='grid grid-cols-1 items-center gap-x-5 gap-y-4 lg:grid-cols-2 py-9 mt-5'>
         
          <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]  lg:col-span-2' style={{ backgroundImage: `url('/images/profile/A&E/gallery.png')` }}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[180px]' style={{ backgroundImage: `url('/images/profile/A&E/about.png')` }}></div>
                
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[180px]' style={{ backgroundImage: `url('/images/profile/A&E/about2.png')` }}></div>
             
                
          </div>
       
      </div>
    
    </section>
  )
}

export default Gallery