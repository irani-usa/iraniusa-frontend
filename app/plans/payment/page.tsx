"use client"
import React, { useState } from 'react'
import { Crown, Location } from '@/components/Icons/Outline';
import TicketIcon from '@/components/Icons/Profile/Ticket';
import OverlayMenu from '@/components/Layout/OverlayMenu'
import classNames from 'classnames';
import Button from '@/components/Forms/Button'
import UserIcon from '@/components/Icons/Profile/User'
import Pen from '@/components/Icons/Profile/Pen'
import Input from '@/components/Profile/business/pro/Input';


const page = () => {
  const [sendMethod, setSendmethod] = useState("email")
  const FeatureListClasses = classNames(
    "[&>*:nth-child(odd)] relative top-0 left-0 w-full h-12 flex gap-x-4 p-2 justify-evenly text-center items-center  text-base bg-white-shade-3 rounded-xl before:contents-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:h-[80%] before:bg-white before:rounded-xl before:z-20 tranitaion-all duration-500 before:tranitaion-all before:duration-500 border border-white-shade-3",
    {
      "before:left-[48%]  before:w-6/12": sendMethod === "email",
      "before:left-2  before:w-6/12": sendMethod === "pdf",
    }
  );

  return (
    <section className="container">
      <OverlayMenu />
      <div className="flex flex-col lg:flex-row justify-center  py-8 gap-10 w-full">
        <div className='lg:w-1/3 w-full '>
          <h1 className='text-lg font-semibold'>Preview</h1>
          <div className="w-full h-1 border-t border-white-shade-4 my-4"></div>
          <div className={FeatureListClasses}>
            <span
              onClick={() => setSendmethod("pdf")}
              className={`relative z-[2000]  w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl text-sm ${sendMethod === "email" && "text-white-shade-8"}`}
            >
              Send invoice as Pdf
            </span>
            <span
              onClick={() => setSendmethod("email")}
              className={`relative z-[2000]  w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl text-sm ${sendMethod === "pdf" && "text-white-shade-8"}`}
            >
              Send invoice as Email
            </span>
          </div>
          <div className='w-full h-auto border border-white-shade-4 bg-white-shade-2 rounded-2xl my-4 p-4'>
            <span className='text-sm font-semibold mb-4 block'><span className='text-white-shade-11'>Subscribe to</span> Irani USA</span>
            <div className="flex gap-4">
              <div className='border border-white-shade-4 rounded-xl p-2 h-min'>
                <Crown />
              </div>
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className='text-white-shade-11'>Professional <br /> <span className='text-black text-2xl font bold'>$49</span> / yearly</h2>
                  <button className='bg-white-shade-1 border border-white-shade-3 rounded-lg px-3 py-1'>Change plan</button>
                </div>
                <div className="w-full h-1 border-t border-white-shade-4 "></div>

                <div className='bg-white-shade-1 drop-shadow flex flex-col gap-1 rounded-lg p-2'>
                  <div className="flex items-center justify-between">
                    <span className='text-white-shade-10'>plan</span>
                    <span className='text-black font-medium'>$49</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className='text-white-shade-10'>plan</span>
                    <span className='text-black font-medium'>$49</span>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <div className="transition-all bg-white-shade-1 drop-shadow-sm focus-within:border-white-shade-18  focus-within:border-2 flex items-center gap-x focus-within:border-black-2 w-full h-14 rounded-2xl border-2 border-white-shade-4 px-2 py-1">

                    <TicketIcon classes='w-10 pr-1 text-white-shade-8 border-r border-white-shade-4' />

                    <input
                      type="password"
                      className="group w-5/6 ml-3 h-full bg-white/0 rounded-2xl border-none focus:outline-none text-black"
                      placeholder="Passcode"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-x-2 px-4   rounded-xl bg-black/10 text-black hover:bg-white/0 h-full  transition-all duration-300"
                    >
                      {/* <Loading/> */}
                      Confrim
                    </button>
                  </div>
                </div>
                <div className="w-full h-1 border-t border-white-shade-4 "></div>
                <div className="flex items-center justify-between">
                  <span className='text-white-shade-10'>Subtotal</span>
                  <span className='text-black font-medium'>$47,21</span>
                </div>



              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-2/3 w-full'>
          <section className='w-full border-b border-white-shade-4  '>
            <div className=''>
             <div className="flex items-center gap-3 ">
              <div className='border border-white-shade-4 h-min p-2 rounded-full  w-min'>
              <UserIcon />
              </div>
              <div>
              <h1 className="text-black  font-semibold text-xl font-outfit ">Profile detail</h1>
              <p className=" text-white-shade-12 text-sm font-medium  font-opensans   ">Please enter your details  </p>
              </div>
             </div>
              <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-x-6 lg:mt-9 '>
                <Input placeholder={'Jason james'} class={''} lable='first name' icon={<UserIcon />} isRequired />
                <Input placeholder={'Jason james'} class={''} lable='last name' icon={<UserIcon />} isRequired />
                <Input placeholder={'Example@gmail.com'} class={''} lable='location' icon={<Location />} isRequired />
                <Input placeholder={'Technical issues'} class={''} lable='Subject' icon={<Pen />} />
                <Input placeholder={'New York'} class={'lg:col-span-2'} lable='username' icon={<UserIcon />} />

                <Button content={'Purchase'} classes={'py-4 rounded-xl lg:col-span-2 bg-blue'} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>)
}

export default page