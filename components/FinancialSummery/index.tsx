
import React from 'react'
import Star from '../Icons/Solid/Star'
import Image from 'next/image'

const FinancialSummery = () => {
  return (
    <section className='container my-36'>
      <div className='flex justify-between w-full border-b-2 border-white-shade-2'>
        <div className='w-9/12 h-full flex flex-col items-start gap-y-4'>
          <Star />
          <h3 className='text-xl lg:text-3xl leading-8 text-black font-semibold font-outfit text-center'>
            Financial markets
          </h3>
          <p className='text-white-shade-12'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        <div className='w-3/12 h-full'>
          <Image src={"/images/financial/coin.png"} className='w-full h-full' width={200} height={100} alt='coin' />
        </div>
      </div>
    </section>
  )
}

export default FinancialSummery