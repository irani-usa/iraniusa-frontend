import React from 'react'
import { Rentcard } from './Rentcard'
import { Arrowbtn } from '../../general'


interface ServiceitemProps {
    title:string,
    classes:string,
  }

export const HomesCatgeroy: React.FC<ServiceitemProps> = (props) =>   {
  return (
    <section className='w-full border-b border-b-white-shade-4 py-10'>
 
  
 <div className='container lg:pl-5'>
 <div className='lg:flex items-center justify-between'>
   <h1 className={`${props.classes} text-[27px] font-outfit font-bold text-black  lg:text-3xl mb-8`}>
        {props.title}
  </h1>
<Arrowbtn classes={'hidden lg:flex '} />
   </div>
      <div className='flex items-end gap-x-5 mt-5'>
      <Rentcard status={'Rent'} type={'Appartment'} price={'350,200'} discountedPrice={'350,200'} desc={'1738 Angus Drive Vancouver, British Columbia'} meterage={'200'} rooms={'3'} bathes={'3'} image={'/images/profile/ultra/apartment.png'} />
      <Rentcard status={'Rent'} type={'Appartment'} price={'350,200'} discountedPrice={'350,200'} desc={'1738 Angus Drive Vancouver, British Columbia'} meterage={'200'} rooms={'3'} bathes={'3'} image={'/images/profile/ultra/sale3.png'} />
       
      <Rentcard status={'Rent'} type={'Appartment'} price={'350,200'} discountedPrice={'350,200'} desc={'1738 Angus Drive Vancouver, British Columbia'} meterage={'200'} rooms={'3'} bathes={'3'} image={'/images/profile/ultra/sale2.png'} />
       
     
       
       
      </div>
 </div>

    </section>
  )
}
