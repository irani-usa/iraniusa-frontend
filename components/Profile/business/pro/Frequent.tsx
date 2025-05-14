import FAQList from '@/components/Pages/FAQ/FAQList'
import React from 'react'
import IconElement from '../../general/IconElement'
import FaqIcon from '@/components/Icons/Profile/Faq'

const Frequent = () => {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11'>
      <div className='container lg:pl-5 flex flex-col items-center'>
        <IconElement icon={<FaqIcon/>}/>
        <h1 className="text-black font-medium text-2xl font-outfit mt-5 lg:text-3xl">Most frequent questions </h1>
        <FAQList />
      </div>
    </section>
  )
}

export default Frequent