
import Link from 'next/link'
import React from 'react'

interface CardProps {
  background: string,
  content: string,
  info: string,
  OldPrice: number,
  NewPrice: number,
  off: number,
  classes: string,
}


const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <div className='min-w-[80%]  w-[80%]
     lg:min-w-[25%] lg:w-[100%]  relative py-5'>
        <section className='border-[1.5px]  bg-white  border-white-shade-4 
     flex p-7 py-10 gap-x-5 rounded-2xl hover:bg-blue transition-all duration-200 group flex-col gap-y-3 hover:text-white'>
          <h3 className='font-bold text-2xl'>{props.content}</h3>
          <span className='text-white-shade-8 line-through'>${props.OldPrice} USD</span>
          <span className='text-xl font-bold'>${props.NewPrice} USD <span className='text-white-shade-8 font-normal text-base'>/Month</span></span>
          <p className='text-white-shade-8'>{props.content}</p>
        </section>
        <Link className='bg-[#f3f3f3] w-full flex rounded-b-2xl justify-center items-center py-3 -mt-5   cursor-pointer' href={''}>Check the plan</Link>
        <div className='absolute flex items-center gap-1 bg-[#EE4B4B1A] top-7 right-2 py-0.5 px-2 rounded text-center text-[#EE4B4B]
'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 15.1668C4.04683 15.1668 0.833496 11.9535 0.833496 8.00016C0.833496 4.04683 4.04683 0.833496 8.00016 0.833496C11.9535 0.833496 15.1668 4.04683 15.1668 8.00016C15.1668 11.9535 11.9535 15.1668 8.00016 15.1668ZM8.00016 1.8335C4.60016 1.8335 1.8335 4.60016 1.8335 8.00016C1.8335 11.4002 4.60016 14.1668 8.00016 14.1668C11.4002 14.1668 14.1668 11.4002 14.1668 8.00016C14.1668 4.60016 11.4002 1.8335 8.00016 1.8335Z" fill="#EE4B4B"/>
<path d="M10 10.6668C9.62667 10.6668 9.32666 10.3668 9.32666 10.0002C9.32666 9.6335 9.62666 9.3335 9.99333 9.3335C10.36 9.3335 10.66 9.6335 10.66 10.0002C10.66 10.3668 10.3667 10.6668 10 10.6668Z" fill="#EE4B4B"/>
<path d="M6.00684 6.66683C5.6335 6.66683 5.3335 6.36683 5.3335 6.00016C5.3335 5.6335 5.6335 5.3335 6.00016 5.3335C6.36683 5.3335 6.66683 5.6335 6.66683 6.00016C6.66683 6.36683 6.3735 6.66683 6.00684 6.66683Z" fill="#EE4B4B"/>
<path d="M5.99982 10.4998C5.87315 10.4998 5.74646 10.4532 5.64646 10.3532C5.45313 10.1598 5.45313 9.8398 5.64646 9.64647L9.64647 5.64646C9.8398 5.45313 10.1598 5.45313 10.3532 5.64646C10.5465 5.8398 10.5465 6.15984 10.3532 6.35317L6.35317 10.3532C6.25317 10.4532 6.12648 10.4998 5.99982 10.4998Z" fill="#EE4B4B"/>
</svg>
{props.off}%</div>
        <div className={`absolute  bottom-0 left-1/2 w-16 rounded h-1 -translate-x-1/2 ${props.classes}`}></div>
      </div>
    </>
  )
}

export default Card