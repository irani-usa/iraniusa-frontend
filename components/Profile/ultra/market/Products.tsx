import React from 'react'

import { Product } from "./Product"
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import ProjectIcon from '@/components/Icons/Profile/Project'

interface ProductsProps {
  title: string,
}



export const Products: React.FC<ProductsProps> = (props) => {
  return (
    <section className='border-b border-white-shade-4 '>
      <div className=' py-9 lg:pl-5'>

        <div className='flex items-center flex-col w-full gap-7'> 
      <IconElement icon={<ProjectIcon />}/>
           <h1 className='text-black text-2xl font-bold'>{props.title}</h1>
        </div>
        <div className='flex gap-x-4 overflow-x-scroll no-scroll mt-9 lg:mt-4'>
          <Product beforePrice='550' image={'/images/profile/ultra/addidasProduct.png'} title={'Adidas yezzy 7'} price={'800'} description='Apple Watch SE has powerful connectivity, fitness, health and safety features, and is available in three case colours ...' />
          <Product  image={'/images/profile/ultra/addidasProduct.png'} title={'Adidas yezzy 7'} price={'800'} description='Apple Watch SE has powerful connectivity, fitness, health and safety features, and is available in three case colours ...' />
          <Product beforePrice='550' image={'/images/profile/ultra/addidasProduct.png'} title={'Adidas yezzy 7'} price={'800'} description='Apple Watch SE has powerful connectivity, fitness, health and safety features, and is available in three case colours ...'  />

        </div>
          <Arrowbtn classes={'hidden lg:flex mt-5'} />
      </div>
    </section>
  )
}
