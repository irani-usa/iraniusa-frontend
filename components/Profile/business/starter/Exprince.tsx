import React from 'react'
import IconElement from '../../general/IconElement'
import ExperincesIcon from '@/components/Icons/Profile/Experinces'
import { Calendar } from '@/components/Icons/Outline'

interface ExprinceProps {
  exprince: string,
  compimg: string,
  compimg2: string,
}

const Exprince: React.FC<ExprinceProps> = (props) => {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11'>
      <div className='container lg:pl-6 flex flex-col items-center'>
        <IconElement icon={<ExperincesIcon />} />
        <h1 className="text-black font-bold text-2xl font-outfit mt-5 lg:text-3xl">Company's experiences </h1>
        <p className=" text-white-shade-9  font-opensans py-4 mt-3">{props.exprince} </p>
        <div className="w-full flex justify-start">
        <p className="text-lg text-black font-semibold font-opensans border border-white-shade-4 w-max px-5 py-1 rounded-lg flex items-center gap-2 ">
          <Calendar /> Founded in: Sep 2024
          </p>
        </div>
        <button className='text-lg text-black font-semibold font-opensans border border-white-shade-4 w-max px-5 py-1 rounded-3xl'>see more</button>

      </div>
    </section>
  )
}

export default Exprince