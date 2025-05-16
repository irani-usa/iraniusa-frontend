import React from 'react'
import { Arrowbtn } from '../../general'
import IconElement from '../../general/IconElement'
import ResturantIcon from '@/components/Icons/Profile/Resturant'
import { Menuitem } from './Menuitem'
import HumburgerIcon from '@/components/Icons/Profile/Humburger'

interface MainMenuProps {
  title: string
}

export const MainMenu: React.FC<MainMenuProps> = ({ title }) => {
  return (
    <section className='border-b border-white-shade-4 py-16'>
      <div className='py-9 container w-full'>

        <div className='flex items-center flex-col w-full gap-7'>
          <IconElement icon={<ResturantIcon />} />
          <h1 className='text-black text-2xl font-bold'>{title}</h1>
        </div>

        {/* اسکرول افقی تب‌ها */}
        <div className="flex items-center gap-3 my-8  px-1">
          {[...Array(8)].map((_, index) => (
            <span key={index} className={`flex-shrink-0 flex items-center gap-1 px-3 text-lg rounded-xl py-2 ${index === 0 ? 'bg-blue text-white' : 'border border-white-shade-4'}`}>
              <HumburgerIcon isactive={index === 0} /> Lorem
            </span>
          ))}
        </div>

        {/* اسکرول افقی آیتم‌های منو */}
        <div className='flex gap-x-4  mt-9 lg:mt-4 px-1'>
          <Menuitem
            image={'/images/profile/ultra/food.png'}
            title={'Chicken burger with spicy mixed seafood'}
            price={'800'}
            description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...'
            islunch={true}
          />
          <Menuitem
            image={'/images/profile/ultra/food2.png'}
            title={'Chicken burger with spicy mixed seafood'}
            price={'800'}
            description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...'
            islunch={true}
          />
          <Menuitem
            image={'/images/profile/ultra/food3.png'}
            title={'Chicken burger with spicy mixed seafood'}
            price={'800'}
            description='With the support of NKF CPA Firm professionals who monitor laws and regulations that ...'
            islunch={false}
          />
        </div>

        <Arrowbtn classes={'hidden lg:flex mt-5'} />
      </div>
    </section>
  )
}
