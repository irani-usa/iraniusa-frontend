import React from 'react'
import { Honoritem } from './Honoritem'

export const Honor = () => {
    return (
        <div className="w-full  border-white-shade-4 border-b py-6 lg:py-14">
            <div className='container flex flex-wrap items-center justify-center gap-6 lg:gap-8'>
                <Honoritem title={'Property options'} quantity={'200+'} />
                <Honoritem title={'Property options'} quantity={'200+'} />
                <Honoritem title={'Property options'} quantity={'200+'} />
            </div>
        </div>
    )
}
