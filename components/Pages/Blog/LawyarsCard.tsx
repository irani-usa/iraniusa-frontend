import React from 'react'


interface LawyarsCardProps {
  classes: string;
  title: string,
  author: string,
  publish: string,
  avatar: string,
  cover: string,
}



const LawyarsCard: React.FC<LawyarsCardProps> = (props) => {
  return (
    <>
      <div className='border-[2px] border-white-shade-3 rounded-2xl flex items-center gap-x-5 lg:w-full h-40'>
        <div
          className="w-[140px] h-full  bg-cover bg-center rounded-tl-2xl rounded-bl-2xl lg:w-52"
          style={{ backgroundImage: `url(${props.cover})` }}></div>

        <div className='flex flex-col gap-y-4 '>
          <h1 className='text-black font-outfit font-semibold text-lg lg:pt-6'>{props.title}</h1>
          <svg width="215" height="1" viewBox="0 0 215 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="-2.01947e-08" y1="0.769" x2="215" y2="0.768981" stroke="#E6E6E6" stroke-width="0.462"/>
          </svg>
          <div className='flex items-center gap-x-3 lg:pb-6'>
            <div   className='bg-center bg-cover w-9 h-9 rounded-full'  style={{ backgroundImage: `url(${props.avatar})` }}>
            </div>
            <h1 className='text-black font-bold font-opensans flex flex-col items-start text-sm'>
              {props.author}
              <span className='font-inter text-xs text-white-shade-9 font-semibold'>{props.publish}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default LawyarsCard