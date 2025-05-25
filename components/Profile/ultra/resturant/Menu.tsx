import React from 'react'

import { Menuitem } from './Menuitem'
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import ResturantIcon from '@/components/Icons/Profile/Resturant'

interface MenuProps {
  title: string,
}



export const Menu: React.FC<MenuProps> = (props) => {
  return (
    <section className='border-b border-white-shade-4 container py-16'>
      <div className=' lg:pl-5'>

        <div className='flex items-center flex-col w-full gap-7'> 
      <IconElement icon={<ResturantIcon />}/>
           <h1 className='text-black text-2xl font-bold mb-12'>{props.title}</h1>
        </div>
        <div className='flex gap-x-4 overflow-x-scroll no-scroll mt-9 lg:mt-4'>
          <Menuitem image={'/images/profile/ultra/food.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...' islunch={true} />
          <Menuitem image={'/images/profile/ultra/food2.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...' islunch={true} />
          <Menuitem image={'/images/profile/ultra/food3.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...' islunch={false} />

        </div>
          <Arrowbtn classes={'hidden lg:flex mt-10'} />
      </div>
    </section>
  )
}
