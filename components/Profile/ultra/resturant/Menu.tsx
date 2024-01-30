import React from 'react'

import { Menuitem } from './Menuitem'
import { Arrowbtn } from '../../general'

interface MenuProps {
    title:string,
  }
  


export const Menu: React.FC<MenuProps> = (props) =>{
  return (
  <section className='border-b border-white-shade-4 '>
  <div className='container py-9 lg:pl-5'>
<div className='lg:flex items-center justify-between'>  <h1 className='text-black text-2xl font-bold'>{props.title}</h1>
<Arrowbtn classes={'hidden lg:flex'} /></div>
    <div className='flex gap-x-5 overflow-x-scroll no-scroll mt-9 lg:mt-4'>
    <Menuitem image={'/images/profile/ultra/food.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} rate={'4.9'} islunch={true} />
    <Menuitem image={'/images/profile/ultra/food2.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} rate={'4.9'} islunch={true} />
    <Menuitem image={'/images/profile/ultra/food3.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} rate={'4.9'} islunch={false} />
    <Menuitem image={'/images/profile/ultra/food.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} rate={'4.9'} islunch={true} />
    </div>
  </div>
  </section>
  )
}
