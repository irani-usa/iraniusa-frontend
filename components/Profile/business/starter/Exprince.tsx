import React from 'react'
import IconElement from '../../general/IconElement'
import ExperincesIcon from '@/components/Icons/Profile/Experinces'

interface ExprinceProps {
  exprince:string,
}

const Exprince: React.FC<ExprinceProps> = (props) =>  {
  return (
    <section className='w-full border-b border-white-shade-4 py-8 lg:py-11'>
        <div className='container lg:pl-6 flex flex-col items-center'>
        <IconElement icon={<ExperincesIcon />}/>
        <h1 className="text-black font-bold text-2xl font-outfit mt-5 lg:text-3xl">Company's experiences </h1>
                <p className=" text-white-shade-9  font-opensans py-4 mt-3">{props.exprince} </p>
        </div>
    </section>
  )
}

export default Exprince