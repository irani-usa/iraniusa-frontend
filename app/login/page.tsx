import Button from '@/components/Button'
import Input from '@/components/Forms/Input'
import { Dots , Email,Password} from '@/components/Icons/Outline/'
import { Google , Facebook2,Apple} from '@/components/Icons/Solid/'
import OverlayMenu from '@/components/OverlayMenu'
import React from 'react'

const page = () => {
  return (
    <>
    <OverlayMenu />
    <section className='container py-8'>
        <h1 className='text-black text-2xl font-semibold font-outfit'>Welcome back 👋🏻 </h1>
        <h2 className='text-white-shade-8  text-lg py-2 font-opensans'>Enter your details</h2>
        <form action="#">
            <Input id={'email'} inputType={'email'} placeHolder={'Example@gmail.com'} classes={'bg-white-shade-2'} label={'Email'} iconComp={<Email />} />
            <Input id={'password'} inputType={'password'} placeHolder={'* * * * * * * * '} classes={'bg-white-shade-2'} label={'Password'} iconComp={<Password />} />
            <h3 className='text-[#2E81FF] font-opensans font-medium text-end text-base py-4 '>Forgot password</h3>
            <Button content={'Log in'} classes={'bg-blue py-4 my-2'} />
        </form>
       
        <h2 className='text-white-shade-8 py-4 text-center font-opensans text-lg'>Or</h2> 
        <section className='flex justify-center gap-x-5'>
            <div className='p-5 rounded-full border-[1px] border-white-shade-8'><Google /></div>
            <div className='p-5 rounded-full border-[1px] border-white-shade-8'><Apple /></div>
            <div className='p-5 rounded-full border-[1px] border-white-shade-8'><Facebook2 /></div>
            <div className='p-5 rounded-full border-[1px] border-white-shade-8 flex items-center justify-center'><Dots /></div>
        </section>
    </section>
    </>
  )
}

export default page