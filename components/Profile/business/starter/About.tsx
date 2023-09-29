import Link from 'next/link'
import React from 'react'

interface AboutProps {
  about:string,
  city:string,
  name:string,
  job:string,
  cover:string,
}


const About: React.FC<AboutProps> = (props) =>  {
  return (
 <section className=' border-b border-white-shade-4 py-8 '>
     <div className='container lg:pl-6'>
      <div className="py-7 flex flex-col gap-y-6 lg:">
          <h1 className="text-black font-bold text-2xl font-outfit mt-5">
            What is our company all about?
          </h1>
          <p className=" text-white-shade-9  font-opensans">
          {props.about}
          </p>
          <p className="text-lg text-black font-semibold font-opensans mt-4 lg:mt-0">
          Based in {props.city}
          </p>

          <div className=" flex items-center gap-x-7">
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
 </section>
  )
}

export default About