import React from 'react'
import IconElement from '../../general/IconElement'
import ExperincesIcon from '@/components/Icons/Profile/Experinces'
import { Calendar } from '@/components/Icons/Outline'

interface ExprinceProps {
  exprince: string,
  compimg?: string,
  compimg2?: string,
}

const Exprince: React.FC<ExprinceProps> = (props) => {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11 container'>
      <div className=' lg:pl-6 flex flex-col items-center'>
        <IconElement icon={<ExperincesIcon />} />
        <h1 className="text-black font-bold text-2xl font-outfit mt-5 lg:text-3xl">Company's experiences </h1>
        <p className=" text-white-shade-9  font-opensans py-4 mt-3">{props.exprince} </p>
        <div className="w-full flex justify-start">
          <p className="text-lg text-black font-semibold font-opensans border border-white-shade-4 w-max px-5 py-1 rounded-lg flex items-center gap-2 ">
            <Calendar /> Founded in: Sep 2024
          </p>
        </div>
        {props.compimg && props.compimg2 &&    <section className='grid grid-cols-1 gap-y-5 py-5 lg:grid-cols-6 gap-x-5 w-full'>
    <div style={{ backgroundImage: `url(${props.compimg})` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-4 lg:h-44'></div>
    <div style={{ backgroundImage: `url(${props.compimg2})` }} className='bg-cover bg-center w-full h-48 rounded-2xl  lg:col-span-2 lg:h-44'></div>
  </section>   }      
        <button className='text-lg text-black font-semibold font-opensans border border-white-shade-4 w-max px-5 py-1 rounded-3xl'>see more</button>

      </div>
    </section>
  )
}

export default Exprince