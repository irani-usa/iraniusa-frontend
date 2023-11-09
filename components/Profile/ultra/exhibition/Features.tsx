import React from 'react'
import { Cash } from '@/components/Icons/Profile/Cash'
import { Feature } from './Feature'

export const Features = () => {
    return (
        <section className='border-b border-b-white-shade-4'>
            <div className='container lg:px-0 lg:pl-5 py-9 lg:py-16'>
                <h1 className="text-[27px] font-outfit font-bold text-black text-center lg:text-3xl">
                Our services
                </h1>
                <div className='w-full lg:mt-7'>
                    <Feature logo={<Cash />} title={'Best price ever'} />
                </div>
            </div>
        </section>
    )
}
