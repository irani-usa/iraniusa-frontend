import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Option } from './Option'
import { Store } from '@/components/Icons/Profile/Store'
import { Clock } from '@/components/Icons/Profile/Clock'


interface IntroProps {
    logo:string,
    title:string,
    desc:string,
    cover:string,
  }
  

export const Intro: React.FC<IntroProps> = (props) => {
  return (
    <section className="w-full py-8 lg:pt-2">
    <section className="container  lg:px-2">
      <div className="bg-white-shade-2 p-2 w-full pb-2 rounded-3xl lg:flex lg:pb-0 h-auto">
        <div className="w-full p-6 flex flex-col gap-y-5 rounded-3xl lg:w-1/2">
        <Image className="w-24" width={100} height={100} src={props.logo} alt={""} />
          <h1 className="text-black font-bold text-2xl font-outfit lg:text-3xl  ">
          {props.title}
          </h1>
          <p className=" text-white-shade-9  font-opensans">
          {props.desc}
          </p>
          <div className="mt-5">
            <Link
              className="bg-blue text-white py-4 px-8 font-medium rounded-2xl lg:px-12"
              href={"#"}
            >
             Order now
            </Link>
            <Link
              className="py-4 px-8 font-medium text-white-shade-10"
              href={"#"}
            >
              Our products
            </Link>
          </div>
        <div>
           <div className='w-full flex flex-col gap-y-4  pt-8 pb-5'>
           <Option title={'Open from 10 am to 23 pm'} bgColor={'green/10'} textColor={'green'} Icon={undefined} size={''} />
           <Option title={'All times'} bgColor={'green'} textColor={'white'} Icon={<Store />} size={''} />
           <Option title={'Lunch time on fri-tue-sat'} bgColor={'green/10'} textColor={'lightblue'} Icon={undefined} size={''} />
           <Option title={'from 12pm to 2pm'} bgColor={'green/10'} textColor={'lightblue'} Icon={<Clock />} size={''} />
           </div>
        </div>
        </div>
        <div
          className="w-full lg:w-1/2 h-[495px] bg-cover bg-center lg:h-full rounded-2xl"
          style={{
            backgroundImage:`url(${props.cover})`,
          }}
        ></div>
      </div>
    </section>
  </section>
  )
}
