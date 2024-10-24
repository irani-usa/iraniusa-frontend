import React from 'react'
import OriginSelect from './select/OriginSelect'
import DestinationSelect from './select/DestinationSelect'
import DateSelect from './select/DateSelect'
import TravelersSelect from './select/TravelersSelect'

const TourFilter = () => {

  return (
    <section className="flex flex-col gap-y-8 justify-center items-center my-16 rounded-2xl">
  
      <div className="flex lg:flex-row flex-col gap-x-1 gap-y-3 p-2 w-full h-auto lg:h-40 bg-white-shade-3 rounded-3xl">
        <DestinationSelect />
        <DateSelect />
        <OriginSelect />
        <TravelersSelect />
        <button className="w-full lg:w-1/5 h-24 lg:h-full font-opensans text-xl rounded-3xl bg-black text-white flex items-center justify-center border-2 border-black hover:bg-black/0 transition-all duration-300 hover:text-black">
          Search
        </button>
      </div>
    </section>
  )
}

export default TourFilter