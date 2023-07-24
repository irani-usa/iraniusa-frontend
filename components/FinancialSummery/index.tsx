
import React from 'react'
import Star from '../Icons/Solid/Star'
import Image from 'next/image'

const FinancialSummery = () => {
  return (
    <section className='container my-36'>
      <div className='flex flex-col gap-y-8 lg:flex-row justify-between w-full border-b-2 border-white-shade-2'>
        <div className='order-2 lg:order-2 w-9/12 h-full flex flex-col items-start gap-y-4'>
          <Star />
          <h3 className='text-xl lg:text-3xl leading-8 text-black font-semibold font-outfit text-center'>
            Financial markets
          </h3>
          <p className='text-white-shade-12'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        <div className='flex justify-end order-1 lg:order-2 w-1/2 lg:w-3/12 h-full self-end'>
          <Image src={"/images/financial/coin.png"} className='w-full h-full self-end' width={200} height={100} alt='coin' />
        </div>
      </div>
    </section>
  )
}

export default FinancialSummery