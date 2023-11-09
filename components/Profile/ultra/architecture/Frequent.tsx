import React from 'react'
import Sectiontitle from '../../general/Sectiontitle'
import FAQItem from '@/components/Pages/FAQ/FAQItem'

export const Frequent = () => {
    return (
        <div className=' w-full border-white-shade-4 border-b py-8 lg:py-12'>
            <div className='container'>
                <Sectiontitle title={'Most frequent questions'} classes={'text-start'} />
                <div className='flex flex-col gap-y-4 mt-8'>
                    <FAQItem
                        title={"What is White Snail American all about?"}
                        content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
                    />
                    <FAQItem
                        title={"What is White Snail American all about?"}
                        content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
                    />
                    <FAQItem
                        title={"What is White Snail American all about?"}
                        content={"Our platform is designed for Iranian people who have any business ideas. Business owners can use our platform to reach their target audience and promote their products or services. Students and educators can use our platform to access educational resources and opportunities. Producers can use this platform to sell their products."}
                    />
                </div>
            </div>
        </div>
    )
}
