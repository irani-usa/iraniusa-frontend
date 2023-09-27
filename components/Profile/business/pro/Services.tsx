import React from 'react'
import SCard from './SCard'

const Services = () => {
    return (
        <section className=" border-b border-white-shade-4 pb-7 lg:pb-10">
            <div className="container lg:pl-5 ">
            <div className='lg:flex lg:items-center lg:justify-between lg:mt-9'>
        <h1 className="text-black font-bold text-2xl font-outfit mt-7 lg:text-3xl">
       Our Services
        </h1>
             
        <section className="lg:flex justify-center gap-x-3 mt-9 pb-3 hidden  cursor-pointer">
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </section>
        </div>
                <section className='flex gap-x-5'>
                    <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={''} />
                    <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={'hidden lg:flex'} />
                    <SCard content={'Lorem Ipsum'} descreption={'Lorem ipsum textLorem ipsum textLorem ipsum textLorem ipsum text'} iconComp={undefined} class={'hidden lg:flex'} />
                </section>
            </div>
        </section>
    )
}

export default Services