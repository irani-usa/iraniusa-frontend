import React from 'react'

interface GalleryProps {
  img1:string,
  img2:string,
  img3:string,
}

const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <section className='w-full border-white-shade-4 border-b py-8 lg:py-11'>
    <div className='container  lg:pl-5'>
      <h1 className="text-[26px] font-outfit text-center font-bold text-black lg:text-3xl mt-4">Gallery</h1>
      <div className='grid grid-cols-2 items-center gap-x-7 gap-y-4 mt-5 lg:grid-cols-3 py-8 lg:pt-10'>
       
        <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[180px]' style={{ backgroundImage:`url(${props.img1})`}}></div>
               <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[180px]' style={{ backgroundImage:`url(${props.img2})`}}></div>
               <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[180px]' style={{ backgroundImage:`url(${props.img3})`}}></div>
        </div>
     
    </div>
  
  </section>
  )
}

export default Gallery