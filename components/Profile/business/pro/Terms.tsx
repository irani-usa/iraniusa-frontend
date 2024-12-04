import React from 'react'
import IconElement from '../../general/IconElement'
import AboutMeIcon from '@/components/Icons/Profile/AboutMe'

const Terms = () => {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11'>
    <div className='lg:pl-5 flex flex-col gap-y-6 lg:gap-y-0'>
    <IconElement icon={<AboutMeIcon />}/>
    <h1 className="text-black font-bold  font-outfit mt-5 text-[28px] lg:text-3xl text-center">Terms and privacy</h1>
    <h1 className='text-[#151B24] text-lg font-opensans font-semibold lg:text-2xl lg:mt-12'>What are Terms and Conditions?</h1>
    <p className='font-opensans text-white-shade-9 font-medium lg:mt-12  '>
    Terms and conditions outline what users can and cannot do with your website, <span className='text-[#151B24] '>
    products, and services.</span> They lay out the rules to protect you in case of misuse and enable you to take action if it becomes necessary.
    </p>
    <p className='text-[#151B24] font-opensans font-semibold lg:mt-7  '>
    It’s also referred to by other names such as terms of service (ToS) and terms of use (ToU). Even though they have different names, in fact – there is no difference. Any of these three terms (sometimes even referred to as user agreement) basically refer to the same document.
    </p>
    </div>
</section>
  )
}

export default Terms