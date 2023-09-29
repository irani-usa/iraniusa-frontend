import React from 'react'

interface CompanyProps {
  img1:string,
  img2:string,
  img3:string,
  img4:string,
}

const Gallery: React.FC<CompanyProps> = (props) =>  {
  return (
    <section className='w-full border-white-shade-4 border-b pt-6 lg:pb-7'>
      <div className='container  lg:pl-5'>
        <h1 className="text-[26px] font-outfit text-center font-bold text-black lg:text-3xl mt-5 lg:py-8">Gallery</h1>
        <div className='grid grid-cols-2 items-center gap-x-5 gap-y-4 lg:grid-cols-3 py-8 mt-4'>
         
          <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage:`url(${props.img1})`}}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px] lg:col-span-2' style={{ backgroundImage:`url(${props.img2})`}}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{backgroundImage:`url(${props.img2})`}}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage:`url(${props.img3})`}}></div>
                 <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px] col-span-2 lg:col-span-1' style={{backgroundImage:`url(${props.img4})`}}></div>
                
          </div>
       
      </div>
    
    </section>
  )
}

export default Gallery