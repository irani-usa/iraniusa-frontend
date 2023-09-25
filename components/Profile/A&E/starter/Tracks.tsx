import React from 'react'
import Song from './Song'

const Tracks = () => {
  return (
    <section className='border-b border-white-shade-4 pb-11'>
    <div className="container mt-7 lg:pl-5">
         <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Songs and tracks</h1>
         <div className='mt-7 lg:flex items-center gap-x-3 lg:gap-x-6'>
         <Song background={'/images/profile/A&E/track.png'} trackname={'Gozasht'} artist={'Siavash ghomeyshi'} class={''} />
         <Song background={'/images/profile/A&E/track2.png'} trackname={'Ashegh'} artist={'Siavash ghomeyshi'} class={'hidden lg:flex lg:flex-col'} />
         </div>
      </div>
 </section>
  )
}

export default Tracks