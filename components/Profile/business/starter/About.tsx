import Link from 'next/link'
import React from 'react'
import IconElement from '../../general/IconElement'
import AboutMeIcon from '@/components/Icons/Profile/AboutMe'

interface AboutProps {
  about: string,
  city: string,
  name: string,
  job: string,
  cover: string,
  title: string,
  compimg?:string,
  compimg2?:string,
}


const About: React.FC<AboutProps> = (props) => {
  return (
    <section className=' border-b border-white-shade-4 py-8 container'>
      <div className=' lg:pl-6'>
        <div className="py-7 flex flex-col gap-y-6 items-center">
          <IconElement icon={<AboutMeIcon />} />

          <h1 className="text-black font-bold text-2xl font-outfit mt-5">
            {props.title}
          </h1>
          <p className=" text-white-shade-9  font-opensans text-center">
            {props.about}
          </p>
          <p className="text-lg text-black font-semibold font-opensans text-center border border-white-shade-4 w-max px-5 py-1 rounded-lg">
            Based in {props.city}
          </p>

          <div className=" flex items-center gap-x-7 mt-2 lg:mt-0 w-full justify-between lg:justify-center">
            <div className="flex items-center gap-x-4">
              <div
                className="bg-cover bg-center w-14 h-14 rounded-full lg:w-20 lg:h-20"
                style={{ backgroundImage: `url(${props.cover})` }}
              ></div>
              <h1 className="text-black font-semibold text-lg font-opensans flex flex-col items-start gap-y-2 lg:text-xl lg:font-bold">
                {props.name}
                <span className="font-opensans text-white-shade-8 font-normal text-sm">
                  {props.job}
                </span>
              </h1>
            </div>
            <Link
              className="text-black bg-white-shade-3 py-4 text-lg rounded-2xl font-medium px-7 lg:py-3"
              href={"#"}
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
   {props.compimg && props.compimg2 &&    <section className='grid grid-cols-1 gap-y-5 py-5 lg:grid-cols-6 gap-x-5 w-full'>
    <div style={{ backgroundImage: `url(${props.compimg})` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-4 lg:h-44'></div>
    <div style={{ backgroundImage: `url(${props.compimg2})` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-2 lg:h-44'></div>
    </section>}
    </section>
  )
}

export default About