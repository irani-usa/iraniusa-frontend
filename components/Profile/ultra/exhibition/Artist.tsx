import React from 'react'
import { ArtistCard } from './ArtistCard'
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import MusicIcon from '@/components/Icons/Profile/Music'

export const Artist = () => {
  return (
    <section className='border-b border-white-shade-4 py-16'>
        <div className='container lg:px-0 lg:pl-5'>
        <IconElement icon={<MusicIcon /> }/>
        <h1 className="mt-5   text-[27px] font-outfit font-medium text-black lg:text-center lg:text-3xl">
        Featured Artists
                </h1>
                <div className='w-full grid grid-cols-1 gap-6 mt-5 lg:grid-cols-2 lg:mt-10 mb-6 lg:mb-0'>               
                    <ArtistCard ArtistName={'Siavash ghomeyshi '} Image={'/images/profile/ultra/Artist.png'} job='Artist/musician' />
                    <ArtistCard ArtistName={'Siavash ghomeyshi '} Image={'/images/profile/ultra/Artist.png'} job='Artist/musician' />
                    <ArtistCard ArtistName={'Siavash ghomeyshi '} Image={'/images/profile/ultra/Artist.png'} job='Artist/musician' /> <ArtistCard ArtistName={'Siavash ghomeyshi '} Image={'/images/profile/ultra/Artist.png'} job='Artist/musician' />
                   
                    
                </div>
                <Arrowbtn classes={'lg:hidden'} />
        </div>
    </section>
  )
}
