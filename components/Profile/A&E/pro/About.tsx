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
  singer:string,
  author : string,
  publish:string,
  img:string,
  img2:string

}


const About: React.FC<AboutProps> = (props) => {
  return (
    <section className=' border-b border-white-shade-4 py-16 container'>
      <div className=' lg:pl-6'>
        <div className="pb-7 flex flex-col gap-y-6 items-center">
          <IconElement icon={<AboutMeIcon />} />

          <h1 className="text-black font-bold text-2xl font-outfit ">
            {props.title}
          </h1>
          <p className=" text-white-shade-9  font-opensans text-center">
            {props.about}
          </p>
          <div className='flex flex-col items-center gap-2 lg:flex-row lg:py-5'>
          <p className="text-lg text-black font-semibold font-opensans text-center border border-white-shade-4 w-max px-5 py-1 rounded-lg">
            Based in {props.city}
          </p>
          <p className="text-lg text-black font-semibold font-opensans text-center border border-white-shade-4 w-max px-5 py-1 rounded-lg">
            {props.singer}
          </p>
          </div>
          <div className=" flex items-center gap-x-7 mt-2 lg:mt-0 w-full justify-between lg:justify-center">
            <div className="flex items-center gap-x-4 lg:gap-x-7">
              <div
                className="bg-cover bg-center w-14 h-14 rounded-full lg:w-16 lg:h-16"
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
        <div className="lg:mt-8 mt-14 flex flex-col gap-y-5 lg:flex-row lg:gap-x-6 w-full">
              <div
                className="w-full h-[400px]  bg-center bg-cover rounded-2xl lg:w-[65%] lg:h-[250px]"
                style={{ backgroundImage: `url(${props.img})` }}
              ></div>
              <div
                className="w-full h-[200px] bg-center bg-cover rounded-2xl lg:w-[35%]  lg:h-[250px]"
                style={{ backgroundImage: `url(${props.img2})` }}
              ></div>
            </div>
      </div>
    </section>
  )
}

export default About