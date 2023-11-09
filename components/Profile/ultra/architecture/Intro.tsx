import Link from 'next/link'
import React from 'react'
import  Honor  from '../../business/starter/Honor'
import { Exploring } from '@/components/Icons/Profile/Exploring'

interface IntroProps {

    title:string,
    desc:string,
    cover:string,
  }
  
  

export const Intro: React.FC<IntroProps> = (props) => {
  return (
    <section className="w-full border-b border-white-shade-4 py-8 lg:pt-2">
      <section className="container lg:px-2 w-full lg:flex">
      
          <div className='lg:w-[60%]'>
          <div className="bg-white-shade-2 h-auto p-6 flex flex-col gap-y-5 lg:pl-12 lg:pb-24">
            <h1 className="text-black font-bold text-[27px] font-outfit lg:text-3xl lg:mt-7">
             {props.title}
            </h1>
            <p className=" text-white-shade-9  font-opensans">
              {props.desc}
            </p>
            <div className="mt-5 pb-5">
              <Link
                className="bg-blue text-white py-4 px-8 font-medium rounded-2xl lg:px-12"
                href={"#"}
              >
           Get offer
              </Link>
              <Link
                className="py-4 px-8 font-medium text-white-shade-10"
                href={"#"}
              >
             About Us
              </Link>
            </div>
            
          </div>
          <div className="bg-white grid grid-cols-2 lg:grid-cols-3 items-start w-full lg:mt-10 gap-y-6 px-6 py-10 max-w-lg">
            <Honor title={"200+"} content={"Happy Customers"} classes={'lg:items-center'} />
            <Honor title={"100k+"} content={"Varients"} classes={'lg:items-center'} />
            <Honor title={"92%"} content={"Satisfied Customers"} classes={'lg:items-center'} />
            </div>
          </div>
          <div
            className="w-full lg:w-[30%] h-[420px] mt-7 bg-cover bg-center lg:h-[500px] flex items-center flex-col justify-end pb-9 lg:mt-0 "
            style={{
              backgroundImage:`url(${props.cover})`
            }}
          >
            <Exploring />
          </div>

      </section>
    </section>
  )
}
