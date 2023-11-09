
import React from 'react'

interface FeatureProps {
    logo:React.ReactNode,
    title:string,
  }

export const Feature: React.FC<FeatureProps> = (props) =>  {
  return (
    <div className=' flex flex-col items-center justify-center border border-white-shade-4 w-[260px] py-10 gap-y-7 rounded-2xl lg:w-1/3 lg:py-6 lg:gap-y-5'>
        { props.logo}
        <span className='text-white-shade-8 text-lg font-semibold'>{props.title}</span>
    </div>
  )
}
