import React from 'react'

interface FinancialCard {
  name: string,
  sfname: string,
  price: string,
  hours: string,
  day: string,
  found: string,
  iconComp: React.ReactNode,
}

const FinancialCard: React.FC<FinancialCard> = (props) => {
  return (
    <>
    <div className='flex flex-col gap-y-4 border-b-[1.5px] border-b-[#E6E8EC] pb-7
    '>
        <div className='flex items-center gap-x-3'>
            {props.iconComp}
            <h1 className='text-blue font-opensans font-semibold'>{props.name} <span className='text-white-shade-10'>{props.sfname} </span></h1>
        </div>
        <div className='flex  gap-y-2 flex-col'>
            <h1 className='text-white-shade-10 font-opensans font-semibold flex items-center justify-between'>Price<span className='text-black'>{props.price} </span></h1>
            <h1 className='text-white-shade-10 font-opensans font-semibold flex items-center justify-between'>24h<span className='text-green'>{props.hours} </span></h1>
            <h1 className='text-white-shade-10 font-opensans font-semibold flex items-center justify-between'>7d<span className='text-[#FF6838]'>{props.day} </span></h1>
            <h1 className='text-white-shade-10 font-opensans font-semibold flex items-center justify-between'>Marketcap<span className='text-black'>{props.found} </span></h1>
        </div>
    </div>
    </>
  )
}

export default FinancialCard