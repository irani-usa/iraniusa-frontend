
import React from 'react'

import { Currency, Sort } from '../Icons/Outline'

const TockenHead = () => {
    return (
        <div className='lg:grid grid-cols-6 text-white-shade-11 py-6 border-b border-white-shade-4 hidden'>
            <div className="w-full flex items-center gap-x-3">
                #
                <Sort />
            </div>
            <div className="w-full flex items-center gap-x-3">
                Name
                <Sort />
            </div>
            <div className="w-full flex items-center gap-x-3">
                Price
                <Sort />
            </div>
            <div className="w-full flex items-center gap-x-3">
                24h
                %
            </div>
            <div className="w-full flex items-center gap-x-3">
                7d
                %
            </div>
            <div className="w-full flex items-center gap-x-3 self-end">
                Marketcap
                <Currency />
            </div>
        </div>
    )
}

export default TockenHead