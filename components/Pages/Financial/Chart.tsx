import React from 'react'
import FinancialCard from './Card'
import { Btc } from '@/components/Icons/Solid'
import Eth from '@/components/Icons/Solid/Eth'
import Eos from '@/components/Icons/Solid/Eos'

const Chart = () => {
  return (
    <div className="flex flex-col gap-y-7 border-[1.5px] border-white-shade-4 px-5 pt-5 rounded-2xl relative">
        <FinancialCard name={'Bitcoin'} sfname={'BTC'} price={'36,641.20'} hours={'+6.04%'} day={'-1.71%'} found={'$328,564,656,654'} iconComp={<Btc />} />
        <FinancialCard name={'Ethereum'} sfname={'Eth'} price={'36,641.20'} hours={'+6.04%'} day={'-1.71%'} found={'$328,564,656,654'} iconComp={<Eth />} />
        <FinancialCard name={'EOS'} sfname={'EOS.IO'} price={'36,641.20'} hours={'+6.04%'} day={'-1.71%'} found={'$328,564,656,654'} iconComp={<Eos />} />
        <div className="p-4 bg-white-shade-2 bordered rounded-full absolute top-[636px]  left-[43%] lg:hidden">
          <svg width="14" height="14" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00014 6.60001C6.47514 6.60001 5.95014 6.39751 5.55264 6.00001L0.662637 1.11001C0.445137 0.892511 0.445137 0.532511 0.662637 0.315011C0.880137 0.097511 1.24014 0.097511 1.45764 0.315011L6.34764 5.20501C6.70764 5.56501 7.29264 5.56501 7.65264 5.20501L12.5426 0.315011C12.7601 0.097511 13.1201 0.097511 13.3376 0.315011C13.5551 0.532511 13.5551 0.892511 13.3376 1.11001L8.44764 6.00001C8.05014 6.39751 7.52514 6.60001 7.00014 6.60001Z" fill="#011223" />
          </svg>
        </div>

    </div>
  )
}

export default Chart