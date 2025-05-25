import React from 'react'
import { Photo, Sectiontitle } from '../../general'
import IconElement from '../../general/IconElement'
import GalleryIcon from '@/components/Icons/Profile/Gallery'



const Gallery = () => {
  return (
    <section className='w-full border-white-shade-4 border-b py-16 container'>
      <div className='  lg:pl-5'>
       <IconElement icon={<GalleryIcon />}/>

        <Sectiontitle title={'Gallery'} classes={'mt-5'} />
        <div className='grid grid-cols-2 items-center gap-x-7 gap-y-4 mt-5 lg:grid-cols-3 py-8 lg:pt-10'>

          <Photo background={'/images/profile/business/Gallery2.png'} />

          <Photo background={'/images/profile/business/Gallery.png'} />

          <Photo background={'/images/profile/business/Gallery3.png'} />

        </div>

      </div>

    </section>
  )
}
 
export default Gallery