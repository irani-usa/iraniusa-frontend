
"use client"
import React, { ReactNode, useState } from 'react'


import TourFilter from './TourFilter'
import Star from '../../About/Star'
import AirplaneCard from './card/AirplaneCard'
import HotelCard from './card/HotelCard'

const ToursSearch = () => {
  const [openTab, setOpenTab] = useState("Hotel");
  const tabs: string[] = ["Hotel", "Flight", "Tour", "Bus", "Train", "Villa and residence"]

  return (
    <section className='container my-36'>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-center gap-x-2">
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
          <Star content={"Travel"} />
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="text-white-shade-11 mt-4 text-lg">
          Book plans for lodging and travel by airplane, train, boat, and bus, anywhere in the US
        </p>
      </div>
      <>
        <div className="flex flex-wrap mt-20 bg-white-shade-3 min-w-xl max-w-fit mx-auto rounded-lg px-2 ">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none  gap-4 py-3 flex-row flex-wrap"
            >
              {tabs.map((item: string): JSX.Element => (
                <li className="text-center">
                  <a
                    className={
                      "text-base font-medium  p-3 cursor-pointer  rounded block leading-normal " +
                      (openTab === item
                        ? "text-black bg-white"
                        : "text-white-shade-10 bg-white/0")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(item);
                    }}

                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
      <TourFilter />
      <div className='w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-5 gap-y-12 my-8'>       
       {openTab === "Flight" &&  <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'}  price={'11$'}  startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />
       }
      {openTab === "Hotel" &&  <>
        <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'}  price={'11$'}  score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />
        <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'}  price={'4556'}  score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />
      </>}
      </div>
    </section>
  )
}

export default ToursSearch