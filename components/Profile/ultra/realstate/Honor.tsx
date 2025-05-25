import React from 'react'
import { Honoritem } from './Honoritem'

export const Honor = () => {
    return (
        <div className="w-full  border-white-shade-4 border-b py-6 lg:py-14">
            <div className='container flex flex-wrap items-center justify-center gap-6 lg:gap-10'>
                <Honoritem title={'Property options'} quantity={'200+'} />
                <Honoritem title={'Property options'} quantity={'100+'} />
                <Honoritem title={'Property options'} quantity={'340+'} />
            </div>
        </div>
    )
}
