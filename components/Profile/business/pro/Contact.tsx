
import React from 'react'
import Input from './Input'
import Button from '@/components/Forms/Button'

const Contact = () => {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11'>
    <div className='container lg:px-0'>
    <h1 className="text-black text-center font-bold text-2xl font-outfit mt-5 lg:text-3xl">Contact us</h1>
            <p className=" text-white-shade-9 text-center font-opensans py-4 mt-3">We usually respond before 27 hours</p>
            <div className='flex flex-col gap-y-4'>
                <Input placeholder={'Name'} />
                <Input placeholder={'Email'} />
                <Input placeholder={'Country'} />
                <Input placeholder={'City'} />
                <textarea placeholder='Message' className='bg-white-shade-2 border border-white-shade-4 w-full rounded-xl max-h-72 h-44 text-black font-medium text-lg px-6 py-4' name="" id="" cols={20} rows={30}></textarea>
                <Button content={'Submit'} classes={'py-4 rounded-xl'} />
            </div>
    </div>
</section>
  )
}

export default Contact