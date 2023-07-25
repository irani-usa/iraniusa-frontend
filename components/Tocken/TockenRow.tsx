
import React from 'react'
import { Bitcoin } from '../Icons/Coin'

const TockenRow = () => {
    return (
        <div className='grid grid-cols-6 text-white-shade-11 py-8'>
            <div className="w-full flex items-center gap-x-3">
                11
            </div>
            <div className="w-full flex items-center gap-x-3">
                <Bitcoin />
                <span className='text-black font-medium'>
                    Bitcoin
                </span>
                <span>
                    BTC
                </span>
            </div>
            <div className="w-full flex items-center gap-x-3 text-black">
                36,641.20
            </div>
            <div className="w-full flex items-center gap-x-3 text-green">
                +6.04%
            </div>
            <div className="w-full flex items-center gap-x-3 text-orange">
                -1.71%
            </div>
            <div className="w-full flex items-center gap-x-3 text-black">
                $328,564,656,654
            </div>
        </div>
    )
}

export default TockenRow