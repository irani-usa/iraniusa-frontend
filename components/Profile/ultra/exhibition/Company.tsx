
import React from 'react'

import {Education} from '../../general/index'


import IconElement from '../../general/IconElement'
import CompanyIcon from '@/components/Icons/Profile/Company'





const Company = () => {
  return (
    <section className='w-full border-white-shade-4 border-b py-8'>
      <div className=' flex flex-col gap-y-6 lg:px-0 '>
        <IconElement icon={<CompanyIcon />}/>
        <h1 className="text-[26px] font-outfit font-bold text-black mt-6 text-center">Company</h1>
        <div className='grid grid-cols-1 items-center mt-3 lg:grid-cols-2  gap-3'>
          <Education title={'Product designer'} university={'MTI'}  />
          <Education title={'Product designer'} university={'MTI'}  />
        </div>
      </div>


    </section>
  )
}

export default Company