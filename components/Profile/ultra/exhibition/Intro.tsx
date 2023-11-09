import React from 'react'
import { Input } from './Input'
import Honor from './Honor'


interface IntroProps {
    about:string,
    cover:string,
    title:string,
  }

export const Intro: React.FC<IntroProps> = (props) => {
  return (
    <section className='w-full border-b border-white-shade-4 pb-[50px] lg:pb-[60px]'>
        <div className='container lg:pl-2 lg:pt-1 lg:pr-0 pt-8'>
            <div className='bg-blue w-full h-auto relative rounded-3xl px-[10px] flex flex-col items-center pb-48 lg:pb-40 lg:pl-11 lg:items-start lg:pr-8'>
                <div className='w-full py-5 px-4 lg:pt-10 lg:px-0 '>
                <div className='lg:flex items-center justify-between'>
                    <h1 className='text-white text-[26px] font-semibold lg:text-[32px]'>{props.title}</h1>
                    <button className='bg-white text-black px-7 py-3  font-medium rounded-2xl text-lg hidden lg:flex' type='button'>Get tickets</button>
                </div>
                <p className='text-white-shade-9 text-[17px] font-medium mt-5'>{props.about} </p>
                <button className='bg-white text-black px-7 py-3 mt-5 font-medium rounded-2xl text-lg lg:hidden' type='button'>Get tickets</button>
                </div>
            
                <div className='w-[95%] absolute rounded-2xl -bottom-[90px] h-[260px] bg-cover bg-center lg:h-[220px] lg:w-[90%] flex flex-col justify-center px-4 lg:px-28' style={{ backgroundImage: `url(${props.cover})` }}>
                    
               <Input />
            </div>
            </div>
         <div className='flex flex-wrap mt-32 items-center justify-center gap-x-10 gap-y-6'>
            <Honor title={'10+'} content={'Different Services'} classes={'items-center'} />
            <Honor title={'30,000+'} content={'Happy Customers'} classes={'items-center'} />
            <Honor title={'15k'} content={'Years of Experience'} classes={'items-center'} />
         </div>
        </div>
    </section>
  )
}
