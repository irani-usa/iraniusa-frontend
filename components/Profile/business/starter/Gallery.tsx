import React from 'react'
import { Photo, Sectiontitle } from '../../general'



const Gallery = () => {
  return (
    <section className='w-full border-white-shade-4 border-b py-8 lg:py-11'>
      <div className='container  lg:pl-5'>
        <Sectiontitle title={'Gallery'} />
        <div className='grid grid-cols-2 items-center gap-x-7 gap-y-4 mt-5 lg:grid-cols-3 py-8 lg:pt-10'>

          <Photo background={'/images/profile/business/photo.png'} />

          <Photo background={'/images/profile/business/photo.png'} />

          <Photo background={'/images/profile/business/photo.png'} />

        </div>

      </div>

    </section>
  )
}
 
export default Gallery