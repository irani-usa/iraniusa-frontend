
import React from 'react'

interface CardProps {
  background:string,
  content: string,
  info: string,
  classes: string,
}


const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <section className='flex flex-col items-center gap-y-2  min-w-[80%] w-[80%] lg:min-w-full lg:w-full'>
        <div className='w-full border-solid border-2 border-white-shade-4 flex flex-col items-center py-20 rounded-2xl bg-cover' style={{ backgroundImage: `url(${props.background})` }}>
          <h1 className='text-black text-[26px] font-outfit font-semibold'>{props.content}</h1>
          <h4 className='text-white-shade-9 font-opensans text-[18px] font-semibold'>{props.info}</h4>
        </div>
        <div className={`${props.classes} h-[7px]  w-36 rounded-[18px]`}></div>
      </section>
    </>
  )
}

export default Card