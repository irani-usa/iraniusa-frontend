import { Applemusic } from '@/components/Icons/Profile/Applemusic'
import { Soundcloud } from '@/components/Icons/Profile/Soundcloud'
import { Spotify } from '@/components/Icons/Profile/Spotify'
import { Youtube } from '@/components/Icons/Profile/Youtube'
import React from 'react'
import { Platformitem } from './Platformitem'
import { Glory } from './Glory'


const Platform = () => {
    return (
        <section className='w-full pb-8'>
            <div className='container mt-5 lg:px-2'>
                <section className='relative bg-black w-full py-3 px-4 rounded-3xl flex flex-col items-center gap-y-9 lg:flex-row lg:py-7 lg:pl-12 lg:pr-2 lg:justify-between'>
                    <div className='flex items-center justify-center gap-x-3 lg:gap-x-5'>
                        <Platformitem Icon={<Youtube />} Link={'#'} />
                        <Platformitem Icon={<Soundcloud />} Link={'#'} />
                        <Platformitem Icon={<Spotify />} Link={'#'} />
                        <Platformitem Icon={<Applemusic />} Link={'#'} />
                    </div>

                    <div className="grid grid-cols-2 items-center justify-center gap-6   lg:flex">
                        <Glory title={'200+'} content={'Happy Customers'} />
                        <Glory title={'100k+'} content={'Varients'} />
                        <Glory title={'92%'} content={'Satisfied Customers'} />
                    </div>
                    <div className='w-36 py-[2px] bg-white rounded-2xl lg:w-1 lg:py-16'>

                    </div>
                    <svg className='absolute bottom-0 lg:right-0 ' width="343" height="149" viewBox="0 0 343 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_1336_10035)">
                            <ellipse cx="171.25" cy="137.5" rx="103.25" ry="29.5" fill="white" fill-opacity="0.26" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1336_10035" x="-39.1316" y="0.868423" width="420.763" height="273.263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="53.5658" result="effect1_foregroundBlur_1336_10035" />
                            </filter>
                        </defs>
                    </svg>

                </section>

            </div>
        </section>
    )
}

export default Platform