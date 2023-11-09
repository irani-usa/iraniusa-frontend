import React from 'react'

export const Switch = () => {

  return (
    <div className='w-full bg-white-shade-3 text-lg p-[6px]  h-[70px] rounded-3xl flex items-center justify-center'>
        <button id='btn' className='w-1/2  active:shadow-drop-shadow active:text-black transition-all duration-500 active:bg-white h-full rounded-2xl text-white-shade-10' type='button'>Rent</button>
        <button id='btn'  className='w-1/2  active:shadow-drop-shadow active:text-black transition-all duration-500 active:bg-white h-full rounded-2xl text-white-shade-10' type='button'>Buy</button>
    </div>
  )
}
