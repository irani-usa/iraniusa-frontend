import React from 'react'
import { AddImage } from '../Icons'

const Gallery = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <span className="text-lg font-medium">About me pictures</span>
      <div className='w-full flex gap-x-6'>
        <div className="flex flex-col gap-y-2 justify-center items-center w-1/2 h-44 rounded-2xl bg-white-shade-2 border-white-shade-3 border-2 border-dashed">
            <AddImage/>
            <span className='text-xl text-white-shade-8'>Add your pic</span>
        </div>
      </div>
    </div>
  )
}

export default Gallery