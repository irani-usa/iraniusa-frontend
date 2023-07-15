
import Input from '@/components/Forms/Input'
import Mail from '@/components/Icons/Outline/Mail'
import OverlayMenu from '@/components/OverlayMenu'
import React from 'react'

const page = () => {
  return (
    <>
      <OverlayMenu />
      <h1 className='text-black container flex flex-col py-10 justify-center text-4xl font-outfit font-bold'>
        About Us
      </h1>
      <div className='container'>
        <Input id={'firstName'} inputType={'text'} placeHolder={'Jason'} classes={''} label={'First name'} iconComp={<Mail classes={'stroke-white-shade-9'} />} />
      </div>
    </>
  )
}

export default page