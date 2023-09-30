
import React from 'react'
import Image from 'next/image'

import Star from '../../Icons/Solid/Star'
import Financial from './Financial'

import { Btc, Dollar, Game, Google, Oil } from '../../Icons/Solid'

const FinancialSummery = () => {
  return (
    <section className='container my-36'>
      <div className='flex flex-col gap-y-8 lg:flex-row justify-between w-full border-b-2 border-white-shade-2'>
        <div className='order-2 lg:order-2 w-9/12 h-full flex flex-col items-start gap-y-4 pb-5'>
          <Star content={''} />
          <h3 className='text-xl lg:text-3xl leading-8 text-black font-semibold font-outfit text-center'>
            Financial markets
          </h3>
          <p className='text-white-shade-12'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>
        <div className='flex justify-end order-1 lg:order-2 w-1/2 lg:w-3/12 h-full self-end'>
          <Image src={"/images/financial/coin.png"} className='w-full h-full self-end' width={200} height={100} alt='coin' />
        </div>
      </div>
      <div className="flex overflow-x-scroll no-scroll items-center gap-x-5 my-6">
        <Financial
          content={"Price"}
          content2={"24h%"}
          classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
          frame={"border-[1.5px] border-white-shade-4"}
          title={"BTC"}
          price={"$36,641.20"}
          found={"+6.04%"}
          iconComp={<Btc />}
          info={true}
        />
        <Financial
          content={"Price"}
          content2={"Total return"}
          classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
          frame={"border-[1.5px] border-white-shade-4"}
          title={"Oil"}
          price={"$310,40"}
          found={"-1,10%"}
          iconComp={<Oil />}
          info={true}
        />
        <Financial
          content={"Price"}
          content2={"Total return"}
          classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
          frame={"border-[1.5px] border-white-shade-4"}
          title={"Dollar"}
          price={"$310,40"}
          found={"-1,10%"}
          iconComp={<Dollar />}
          info={true}
        />
        <Financial
          content={"Price"}
          content2={"Total return"}
          classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
          frame={"border-[1.5px] border-white-shade-4"}
          title={"Google"}
          price={"$36,641.20"}
          found={"+6.04%"}
          iconComp={<Google />}
          info={true}
        />
        <Financial
          content={"Price"}
          content2={"Total return"}
          classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
          frame={"border-[1.5px] border-white-shade-4"}
          title={"Game"}
          price={"$36,641.20"}
          found={"+6.04%"}
          iconComp={<Game />}
          info={true}
        />
      </div>
    </section>
  )
}

export default FinancialSummery