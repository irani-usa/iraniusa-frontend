
import React from 'react'
import Input from './Input'
import Button from '@/components/Forms/Button'
import UserIcon from '@/components/Icons/Profile/User'
import { Call, Email, Telegram } from '@/components/Icons/Profile'
import CountryIcon from '@/components/Icons/Profile/Country'
import TelegramForm from '@/components/Icons/Profile/TelegramForm'
import Pen from '@/components/Icons/Profile/Pen'
import IconElement from '../../general/IconElement'
import { Cont } from '@/components/Icons/Outline/Cont'

const Contact = () => {
  return (
    <section className='w-full border-b border-white-shade-4  py-16'>
    <div className='container lg:flex lg:flex-col items-center'>
    <IconElement icon={<Cont />}/>
    <h1 className="text-black text-center font-medium text-2xl font-outfit mt-5 lg:text-3xl">Contact us</h1>
            <p className=" text-white-shade-9 text-center font-opensans mt-2 lg:text-lg lg:font-medium">We usually respond before 27 hours</p>
            <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-6 mt-9 lg:w-[800px]'>
                <Input placeholder={'Jason james'} class={''} lable='Full name' icon={<UserIcon />} isRequired />
                <Input placeholder={'Example@gmail.com'} class={''} lable='Email' icon={<Email />} isRequired />
                <Input placeholder={'USA'} class={''} lable='Country' icon={<CountryIcon />} />
                <Input placeholder={'New York'} class={''} lable='City' icon={<CountryIcon />} />
                <Input placeholder={'Phone Number'} class={''} lable='(555) 555-1234' icon={<Call />} />
                <Input placeholder={'@jason123'} class={''} lable='Telegram id' icon={<TelegramForm />} />
                <Input placeholder={'Technical issues'} class={'lg:col-span-2'} lable='Subject' icon={<Pen />} />       
                <label htmlFor={"message"} className="block  text-lg font-medium mt-5">Message</label>        
                <textarea placeholder='Write your message here...' className='bg-white-shade-2 border border-white-shade-4 w-full rounded-xl max-h-72 h-44 text-black font-medium text-lg px-6 py-4 lg:col-span-2 hover:bg-white duration-300 transition-all' name="" id="message" cols={20} rows={30}></textarea>
                <Button content={'Submit'} classes={'py-4 rounded-xl lg:col-span-2  w-full bg-blue'} />
            </div>
    </div>
</section>
  )
}

export default Contact