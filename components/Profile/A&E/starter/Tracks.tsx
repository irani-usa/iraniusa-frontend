import React from 'react'
import Song from './Song'

const Tracks = () => {
  return (
    <section className='border-b border-white-shade-4 py-16'>
    <div className=" lg:pl-5  pl-3">
         <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Songs and tracks</h1>
         <div className='mt-7 flex lg:grid lg:grid-cols-3 no-scroll overflow-x-scroll gap-6'>
         <Song background={'/images/profile/A&E/track.png'} trackname={'Gozasht'} artist={'Siavash ghomeyshi'} class={''} />
         <Song background={'/images/profile/A&E/track.png'} trackname={'Gozasht'} artist={'Siavash ghomeyshi'} class={''} />      
         <Song background={'/images/profile/A&E/track2.png'} trackname={'Ashegh'} artist={'Siavash ghomeyshi'} class={''} />
         </div>
      </div>
 </section>
  )
}

export default Tracks