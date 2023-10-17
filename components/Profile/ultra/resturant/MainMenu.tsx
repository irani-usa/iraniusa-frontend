import React from 'react'
import { Mainitem } from './Mainitem'
import { Arrowbtn } from '../../general'


interface MainMenuProps {
    title:string,
  }
  


export const MainMenu: React.FC<MainMenuProps> = (props) =>{
  return (
<section className='relative'>
    <div className='container  py-9 lg:pl-5 lg:pb-12'>
    <h1 className='text-black text-2xl font-bold'>{props.title}</h1>
    <section className='py-7'>
      <Mainitem image={'/images/profile/ultra/food.png'} title={'Chicken burger with spicy mixed seafood'} price={'800'} rate={'4.9'} islunch={true} desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, '} time={'10-30 min'} delivary={'$20'} />
    </section>

    <Arrowbtn classes={'pb-12 lg:hidden'} />
    </div>
    <div className='bg-white-shade-4 w-full h-[1px] absolute bottom-0'></div>
<div className='w-full flex  items-center justify-center absolute -bottom-7'>    <button className='text-black text-lg font-medium border bg-white border-white-shade-4 py-4 px-9 rounded-full' type="button">See more foods</button></div>
</section>
  )
}
