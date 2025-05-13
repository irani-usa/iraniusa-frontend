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
  compimg?: string,
  compimg2?: string,
}


const About: React.FC<AboutProps> = (props) => {
  return (
    <section className=' border-b border-white-shade-4 py-16 container'>
      <div className=' lg:pl-6'>
        <div className=" flex flex-col  items-center">
          <IconElement icon={<AboutMeIcon />} />

          <h1 className="text-black font-medium my-3 text-2xl lg:text-3xl font-outfit ">
            {props.title}
          </h1>
          <p className=" text-white-shade-9  font-opensans text-center mx-12 mt-5">
            {props.about}
          </p>
          <p className="text-lg  text-black font-semibold font-opensans text-center border border-white-shade-4 w-max px-5 py-2 rounded-lg my-8 flex items-center gap-2">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20898 8.452C3.20898 4.36953 6.46312 1.04102 10.5006 1.04102C14.538 1.04102 17.7921 4.36953 17.7921 8.452C17.7921 10.4229 17.2305 12.5391 16.2375 14.3674C15.2458 16.1934 13.7969 17.7802 11.9843 18.6274C11.0427 19.0675 9.95843 19.0675 9.01682 18.6274C7.20425 17.7802 5.7553 16.1934 4.7636 14.3674C3.77067 12.5391 3.20898 10.4229 3.20898 8.452ZM10.5006 2.291C7.1743 2.291 4.45897 5.03887 4.45897 8.452C4.45897 10.1995 4.96116 12.1121 5.86204 13.7708C6.76414 15.4319 8.03894 16.7905 9.54611 17.495C10.1523 17.7783 10.8488 17.7783 11.455 17.495C12.9622 16.7905 14.237 15.4319 15.1391 13.7708C16.04 12.1121 16.5422 10.1995 16.5422 8.452C16.5422 5.03887 13.8268 2.291 10.5006 2.291ZM7.3756 8.33259C7.3756 7.98742 7.65542 7.7076 8.00059 7.7076H13.0005C13.3457 7.7076 13.6255 7.98742 13.6255 8.33259C13.6255 8.67777 13.3457 8.95759 13.0005 8.95759H8.00059C7.65542 8.95759 7.3756 8.67777 7.3756 8.33259Z" fill="black" />
            </svg>
            Based in {props.city}
          </p>

          <div className=" flex items-center gap-x-7 mt-2 lg:mt-0 w-full justify-between lg:justify-center">
            <div className="flex items-center gap-x-4">
              <div
                className="bg-cover bg-center w-12 h-12 rounded-full lg:w-14 lg:h-14"
                style={{ backgroundImage: `url(${props.cover})` }}
              ></div>
              <h1 className="text-black font-medium text-lg font-opensans flex flex-col items-start gap-y-1 lg:text-xl lg:font-semibold">
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
      {props.compimg && props.compimg2 && <section className='grid grid-cols-1 gap-y-5 py-5 lg:grid-cols-6 gap-x-5 w-full mt-10'>
        <div style={{ backgroundImage: `url(${props.compimg})` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-4 lg:h-44'></div>
        <div style={{ backgroundImage: `url(${props.compimg2})` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-2 lg:h-44'></div>
      </section>}
    </section>
  )
}

export default About