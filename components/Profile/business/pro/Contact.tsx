
import React from 'react'
import Input from './Input'
import Button from '@/components/Forms/Button'

const Contact = () => {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11'>
    <div className='container lg:flex lg:flex-col items-center'>
    <h1 className="text-black text-center font-bold text-2xl font-outfit mt-5 lg:text-3xl">Contact us</h1>
            <p className=" text-white-shade-9 text-center font-opensans py-4 mt-3 lg:mt-1 lg:text-lg lg:font-medium">We usually respond before 27 hours</p>
            <div className='grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-6 lg:mt-9 lg:w-[800px]'>
                <Input placeholder={'Name'} class={'lg:col-span-2'} />
                <Input placeholder={'Email'} class={'lg:col-span-2'} />
                <Input placeholder={'Country'} class={''} />
                <Input placeholder={'City'} class={''} />
                <textarea placeholder='Message' className='bg-white-shade-2 border border-white-shade-4 w-full rounded-xl max-h-72 h-44 text-black font-medium text-lg px-6 py-4 lg:col-span-2 hover:bg-white duration-300 transition-all' name="" id="" cols={20} rows={30}></textarea>
                <Button content={'Submit'} classes={'py-4 rounded-xl lg:col-span-2 bg-blue'} />
            </div>
    </div>
</section>
  )
}

export default Contact