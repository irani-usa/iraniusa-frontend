import FAQList from '@/components/Pages/FAQ/FAQList'
import React from 'react'
import IconElement from '../../general/IconElement'
import FaqIcon from '@/components/Icons/Profile/Faq'
import { Button } from '@/components/Forms'

const Frequent = () => {
  return (
    <section className='w-full border-b border-white-shade-4 py-16'>
      <div className='container lg:pl-5 flex flex-col items-center'>
        <IconElement icon={<FaqIcon/>}/>
        <h1 className="text-black font-medium text-2xl font-outfit mt-5 lg:text-3xl">Most frequent questions </h1>
        <FAQList />
        <Button content="See all questions" classes='bg-blue py-2 px-7 w-max'/>
      </div>
    </section>
  )
}

export default Frequent