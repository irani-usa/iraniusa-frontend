import Link from 'next/link'
import React from 'react'

const CompanyAbout = () => {
  return (
    <section className=" border-b border-white-shade-4 ">
    <div className="container lg:px-0 py-7 flex flex-col gap-y-6">
    <h1 className="text-black font-bold text-2xl font-outfit mt-5">
      What is our company all about?
    </h1>
    <p className=" text-white-shade-9  font-opensans">
      Adidas has more than 20 years of experience in athletics industry
      through designing shoes and clothes also more than 20 collaborations
      wordwide{" "}
    </p>
    <p className="text-lg text-black font-semibold font-opensans mt-4 lg:mt-0">
      Based in Los angless
    </p>

    <div className=" flex items-center gap-x-7">
      <div className="flex items-center gap-x-4">
        <div
          className="bg-cover bg-center w-14 h-14 rounded-full lg:w-20 lg:h-20"
          style={{ backgroundImage: `url('/images/blog/User.webp')` }}
        ></div>
        <h1 className="text-black font-semibold text-lg font-opensans flex flex-col items-start gap-y-2 lg:text-xl lg:font-bold">
          Jason todd
          <span className="font-opensans text-white-shade-8 font-normal text-sm">
            Founder
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
    <section className='grid grid-cols-1 gap-y-5 py-5 lg:grid-cols-6 gap-x-5'>
    <div style={{ backgroundImage: `url('/images/profile/business/about.png')` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-4 lg:h-44'></div>
    <div style={{ backgroundImage: `url('/images/profile/business/about.png')` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-2 lg:h-44'></div>
  </section>
  </div>
  </section>
  )
}

export default CompanyAbout