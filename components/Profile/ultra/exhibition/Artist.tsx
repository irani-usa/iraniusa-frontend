import React from 'react'
import { ArtistCard } from './ArtistCard'
import { Arrowbtn } from '../../general'

export const Artist = () => {
  return (
    <section className='border-b border-white-shade-4 py-7 lg:py-12'>
        <div className='container lg:px-0 lg:pl-5'>
        <h1 className="text-[27px] font-outfit font-bold text-black lg:text-center lg:text-3xl">
        Artists we worked with
                </h1>
                <div className='w-full grid grid-cols-1 gap-6 mt-5 lg:grid-cols-3 lg:mt-8'>
                    <ArtistCard ArtistName={'Siavash ghomeyshi '} Image={'/images/profile/ultra/Artist.png'}  />
                    <ArtistCard ArtistName={'Siavash ghomeyshi '} Image={'/images/profile/ultra/Artist.png'}  />
                </div>
                <Arrowbtn classes={'lg:hidden'} />
        </div>
    </section>
  )
}
