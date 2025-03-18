import React from 'react'
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import ResturantIcon from '@/components/Icons/Profile/Resturant'
import { Menuitem } from './Menuitem'
import HumburgerIcon from '@/components/Icons/Profile/Humburger'


interface MainMenuProps {
    title:string,
  }
  


export const MainMenu: React.FC<MainMenuProps> = (props) =>{
  return (
    <section className='border-b border-white-shade-4 container'>
    <div className=' py-9 lg:pl-5'>

      <div className='flex items-center flex-col w-full gap-7'> 
    <IconElement icon={<ResturantIcon />}/>
         <h1 className='text-black text-2xl font-bold'>{props.title}</h1>
      </div>
      <div className="flex items-center gap-3 my-8 overflow-x-scroll no-scroll">
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 bg-blue text-white'>
           <HumburgerIcon isactive/> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>

        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
        <span className='flex items-center gap-1 px-3 text-lg rounded-xl py-2 border border-white-shade-4'>
           <HumburgerIcon /> Lorem
        </span>
      </div>
      <div className='flex gap-x-4 overflow-x-scroll no-scroll mt-9 lg:mt-4'>
        <Menuitem image={'/images/profile/ultra/food.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...' islunch={true} />
        <Menuitem image={'/images/profile/ultra/food2.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...' islunch={true} />
        <Menuitem image={'/images/profile/ultra/food3.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...' islunch={false} />

      </div>
        <Arrowbtn classes={'hidden lg:flex mt-5'} />
    </div>
  </section>
  )
}
