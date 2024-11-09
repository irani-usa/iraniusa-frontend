import React from 'react'

interface McardProps {
    background:string,
    trackname:string,
    artist:string,
    class:string,
    date:string,
  }
  

const Mcard: React.FC<McardProps> = (props) =>   {
  return (
    <section className={`${props.class} min-w-[70%] flex flex-col items-start gap-y-4  `}>
        <div className='w-full h-[280px] rounded-3xl bg-center bg-cover ' style={{ backgroundImage:  `url(${props.background})` }}>
        </div>
        <h1 className='text-black text-xl font-outfit font-semibold mt-3'>{props.trackname}</h1>
        <div className='flex flex-col gap-y-2 '>
            <span className='text-white-shade-8 font-medium text-lg'>{props.artist}</span>
            <span className='text-white-shade-8 font-medium'>{props.date}</span>
        </div>
        <button className='w-full h-[51px] rounded-2xl font-semibold text-lg text-black bg-white-shade-3 mt-3' type="button">Pre order</button>
    </section>
  )
}

export default Mcard