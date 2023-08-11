import Image from 'next/image'
import React from 'react'

const LawyarsCard = () => {
  return (
    <>
    <div className='border-[1.5px] border-white-shade-3 rounded-2xl flex items-center gap-x-5 lg:w-[395px]'>
        <Image  className='rounded-s-2xl lg:hidden' src={'/images/blog/Lawyer (1).webp'} width={120} height={100} alt={''}/>
        <Image  className='rounded-s-2xl hidden lg:flex w-60' src={'/images/blog/Lawyer (2).webp'} width={120} height={130} alt={''}/>
        <div className='flex flex-col gap-y-4 '>
            <h1 className='text-black font-outfit font-semibold text-lg lg:pt-6'>Visiting Tomb of Saadi, the Shirazi Poet</h1>
            <hr className='h-[1.5px] bg-white-shade-4 w-11/12' />
            <div className='flex items-center gap-x-3 lg:pb-6'>
                                <img className='w-10' src="/images/blog/User.webp" alt="" />
                                <h1 className='text-black font-semibold font-opensans flex flex-col items-start'>
                                    Anna Rosé
                                    <span className='font-opensans text-sm text-white-shade-9 font-normal'>Posted just now</span>
                </h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default LawyarsCard