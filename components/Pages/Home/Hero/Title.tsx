
"use client"

import React, { useEffect } from 'react'
import Separator from '../../../Separator'

import Aos from "aos";
import "aos/dist/aos.css";

const Title = () => {

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <Separator classes="mt-10 lg:mt-16" />
      <h1 data-aos="fade-up" className='text-3xl lg:text-4xl mt-5 lg:mt-0 leading-8 text-black font-semibold lg:font-medium font-outfit text-center'>
        Businesses and Professionals 
      </h1>
      <h1 data-aos="fade-up" data-aos-delay="500" className='text-3xl lg:text-4xl mt-5 lg:mt-0 leading-8 text-black font-semibold lg:font-medium font-outfit text-center'>
        from Thousands of Services
      </h1>
    </div>
  )
}

export default Title