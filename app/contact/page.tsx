import Button from '@/components/Button'
import Input from '@/components/Forms/Input'
import Textarea from '@/components/Forms/Textarea'
import Call from '@/components/Icons/Outline/Call'
import Email from '@/components/Icons/Outline/Email'
import Location from '@/components/Icons/Outline/Location'
import Message from '@/components/Icons/Outline/Message'
import { User } from '@/components/Icons/Solid'
import OverlayMenu from '@/components/OverlayMenu'
import React from 'react'

const page = () => {
  return (
    <>
    <OverlayMenu />
    <section className='container  py-9 lg:py-20 lg:flex lg:flex-col lg:items-center contact'>
        <h1 className='text-black font-black text-3xl text-center font-outfit'>Contact us</h1>
        <p className='text-white-shade-9 font-opensans text-center py-7'>Ask about our platform, pricing, implementation or anything else. Our highly trained reps are standing by. Ready to help</p>
          <div className='flex flex-col gap-y-4 lg:flex-row gap-x-7'>
          <div className='flex gap-x-3 items-center font-opensans py-2 px-2 rounded-full boreered lg:pr-24'>
                <div className='bg-orange/10 py-5 rounded-full px-5'>
                    <Message />
                </div>
                <div>
                    <h5 className='text-white-shade-9 font-medium'>E-mail</h5>
                    <h2 className='text-black font-bold text-lg'>unreal@outlook.com</h2>
                </div>
            </div>
            <div className='flex gap-x-3 items-center font-opensans py-2 px-2 rounded-full   boreered lg:pr-28'>
                <div className='bg-green/10 py-5 rounded-full px-5'>
                    <Call />
                </div>
                <div>
                    <h5 className='text-white-shade-9 font-medium'>Call</h5>
                    <h2 className='text-black font-bold text-lg'>(603) 555-0123</h2>
                </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-5 bg-white my-5 py-5 px-6 shadow-xl rounded-3xl lg:my-14 '>
         <div className='lg:flex gap-x-12'>
         <Input id={'lastname'} inputType={'text'} placeHolder={'Walker'} classes={'w-full'} label={'First name'} iconComp={<User classes={''}/>} />
            <Input id={'firstname'} inputType={'text'} placeHolder={'Jason'} classes={'w-full'} label={'Last name'} iconComp={<User classes={''}/>} />
         </div>
           <div  className='lg:flex gap-x-14'>
           <Input id={'email'} inputType={'text'} placeHolder={'unreal@outlook.com'} classes={'w-full'} label={'E-mail address'} iconComp={<Email />} />
            <Input id={'city'} inputType={'text'} placeHolder={'Newyourk'} classes={'w-full'} label={'City'} iconComp={<Location />} />
           </div>
            <Textarea id={'message'} placeHolder={'Hi, unfortunately i cant have access to my acc please check if there is any prob there'} classes={'w-full'} label={'Message'} />
            <Button content={'Send message'} classes={''} />
          </div>
    </section>
    </>
  )
}

export default page