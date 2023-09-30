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
      <div className='border-[1.5px] border-white-shade-3 rounded-2xl flex items-center gap-x-5 lg:w-[48%] pr-5 h-40 '>
        <div
          className="w-[140px] h-full  bg-cover bg-center rounded-tl-2xl rounded-bl-2xl lg:w-52"
          style={{ backgroundImage: `url(${props.cover})` }}
        ></div>

        <div className='flex flex-col gap-y-4 '>
          <h1 className='text-black font-outfit font-semibold text-lg lg:pt-6'>{props.title}</h1>
          <hr className='h-[1.5px] bg-white-shade-4 w-11/12' />
          <div className='flex items-center gap-x-3 lg:pb-6'>
            <div   className='bg-center bg-cover w-9 h-9 rounded-full'  style={{ backgroundImage: `url(${props.avatar})` }}>

            </div>
            <h1 className='text-black font-semibold font-opensans flex flex-col items-start text-sm'>
              {props.author}
              <span className='font-opensans text-sm text-white-shade-9 font-normal'>{props.publish}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default LawyarsCard