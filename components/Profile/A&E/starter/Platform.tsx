import { Applemusic } from '@/components/Icons/Profile/Applemusic'
import { Soundcloud } from '@/components/Icons/Profile/Soundcloud'
import { Spotify } from '@/components/Icons/Profile/Spotify'
import { Youtube } from '@/components/Icons/Profile/Youtube'
import React from 'react'
import { Platformitem } from './Platformitem'
import { Glory } from './Glory'


const Platform = () => {
    return (
        <section className='w-full mb-10'>
            <div className=' mt-5 '>
                <section className='py-4 relative bg-black w-full px-4 rounded-3xl flex  items-center gap-y-9 justify-around lg:pl-12 lg:pr-2 lg:justify-between'>
                    <span className='text-white font-bold text-lg'>Stream <br />
                    Now !</span>
                    <div className='flex items-center justify-center gap-x-3 lg:gap-x-5 px-1'>
                        <Platformitem Icon={<Youtube />} Link={'#'} />
                        <Platformitem Icon={<Soundcloud />} Link={'#'} />
                        <Platformitem Icon={<Spotify />} Link={'#'} />
                        <Platformitem Icon={<Applemusic />} Link={'#'} />
                    </div>
                 
                    
                 

                </section>

            </div>
        </section>
    )
}

export default Platform