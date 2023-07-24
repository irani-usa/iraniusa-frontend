
import React from 'react'

const Search = () => {
    return (
        <section className='flex flex-col gap-y-8 justify-center items-center my-16 rounded-2xl'>
            <div className='w-10/12 h-36 bg-white-shade-3 rounded-2xl'>

            </div>
            <span className='flex flex-col lg:flex-row items-center font-open-sans text-white-shade-11'>
                <span className='text-black ml-2'>
                Popular searches:
                </span>
                <span>Lawyer,Restaurant,plumber,programmer</span>
            </span>
        </section>
    )
}

export default Search