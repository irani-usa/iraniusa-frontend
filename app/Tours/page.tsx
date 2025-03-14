
"use client"
import MediumBanner from '@/components/Banners/MediumBanner';
import Star from '@/components/Pages/About/Star';
import AirplaneCard from '@/components/Pages/Home/Tours/card/AirplaneCard';
import HotelCard from '@/components/Pages/Home/Tours/card/HotelCard';
import TourFilter from '@/components/Pages/Home/Tours/TourFilter';
import React, { ReactNode, useState } from 'react'




const ToursSearch = () => {
    const [openTab, setOpenTab] = useState("Hotel");
    const tabs: string[] = ["Hotel", "Flight", "Tour", "Bus", "Train", "Villa and residence"]

    return (
        <section className='container my-36'>
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex items-center justify-center flex-col gap-2">
                    <span className="text-white-shade-8">- Find your special tour today With</span>
                    <h1 className='font-bold font-outfit text-xl py-3 lg:text-5xl w-max'>IRANI USA TRAVEL</h1>
                </div>
                <p className="text-white-shade-11 mt-4 text-lg">
                    Book plans for lodging and travel by airplane, train, boat, and bus, anywhere in the US
                </p>
                <div className="flex mt-5 items-center gap-3">
                    <div className="flex">
                        <div
                            className="w-14 h-14  rounded-full bg-cover bg-center"
                            style={{ backgroundImage: `url('images/financial/usflag.webp')` }}
                        ></div>
                        <div
                            className="w-14 h-14  -ml-6 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: `url('/images/financial/irflag.webp')` }}
                        ></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-bold">50+</span>
                        <span className="text-white-shade-8">Countries To travel</span>
                    </div>
                </div>
            </div>
            <>
                <div className="flex flex-wrap mt-20 bg-white-shade-3 min-w-xl max-w-fit mx-auto rounded-lg px-2 ">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none  gap-4 py-3 flex-row flex-wrap"
                        >
                            {tabs.map((item: string): JSX.Element => (
                                <li className="text-center">
                                    <span
                                        className={
                                            "text-base font-medium  p-3 cursor-pointer  rounded-sm block leading-normal " +
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
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
            <TourFilter />
            <div className="my-36">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.25926 0L9.17936 4.7234L14.1632 5.13221L10.366 8.46024L11.5261 13.4363L7.25926 10.7697L2.99237 13.4363L4.15247 8.46024L0.355293 5.13221L5.33916 4.7234L7.25926 0Z" fill="#520017" />
                </svg>
                <div className='flex items-center gap-2 mt-3'>
                    <span className='h-[1px] w-7 bg-white-shade-5 block'></span>
                    <h2 className="font-bold font-outfit text-xl py-3 lg:text-3xl">
                        Popular Tours

                    </h2>
                </div>
                <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-5 my-8'>

                    <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />
                    <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />
                    <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />
                    <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />
                    <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />
                    <HotelCard image={'/images/tours/4.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} score={5} off={24} days='9 nights,1 adult' Star Oven Wifi Earth Swim={false} />


                </div>

            </div>
            <div className="my-36">
            <div className="grid lg:grid-cols-4 lg:grid-rows-2 grid-cols-1 grid-rows-1 w-full gap-4">
                        <div
                            className="rounded-3xl w-full h-56 lg:h-full relative   bg-cover bg-center  text-white lg:row-start-1 lg:row-end-3 "
                            style={{ backgroundImage: `url('images/tours/11.png')` }}
                        >
                             <div className='absolute bottom-7 z-10 left-10'>
                             <h1 className="text-2xl font-bold">New York</h1>
                             <span>United states of america</span>
                             </div>
                            <div className='w-full rounded-3xl h-1/2 bg-linear-to-t from-black to-black/0 absolute bottom-0  '></div>
                           
                        </div>
                        <div
                            className="w-full h-56   rounded-3xl  relative   bg-cover bg-center  text-white lg:col-start-2 lg:col-end-4"
                            style={{ backgroundImage: `url('images/tours/12.png')` }}
                        >
                            <div className='absolute bottom-7 z-10 left-10'>
                             <h1 className="text-2xl font-bold">Dubai</h1>
                             <span>United Arab Emirates</span>
                             </div>
                            <div className='w-full rounded-3xl h-1/2 bg-linear-to-t from-black to-black/0 absolute bottom-0  '></div>
                        </div>
                         <div
                            className="w-full h-56   rounded-3xl  relative   bg-cover bg-center  text-white  lg:col-start-4 lg:col-end-5"
                            style={{ backgroundImage: `url('images/tours/13.png')` }}
                        >
                             <div className='absolute bottom-7 z-10 left-10'>
                             <h1 className="text-2xl font-bold">Stockholm</h1>
                             <span>Sweden</span>
                             </div>
                            <div className='w-full rounded-3xl h-1/2 bg-linear-to-t from-black to-black/0 absolute bottom-0  '></div>
                        </div>
                         <div
                            className="w-full h-56   rounded-3xl  relative   bg-cover bg-center  text-white  lg:col-start-2 lg:col-end-5"
                            style={{ backgroundImage: `url('images/tours/14.png')` }}
                        >
                             <div className='absolute bottom-7 z-10 left-10'>
                             <h1 className="text-2xl font-bold">Tehran</h1>
                             <span>Tehran
                             Iran</span>
                             </div>
                            <div className='w-full rounded-3xl h-1/2 bg-linear-to-t from-black to-black/0 absolute bottom-0  '></div>
                        </div>
                    </div>
            </div>
            <div className="my-36">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.25926 0L9.17936 4.7234L14.1632 5.13221L10.366 8.46024L11.5261 13.4363L7.25926 10.7697L2.99237 13.4363L4.15247 8.46024L0.355293 5.13221L5.33916 4.7234L7.25926 0Z" fill="#520017" />
                </svg>
                <div className='flex items-center gap-2 mt-3'>
                    <span className='h-[1px] w-7 bg-white-shade-5 block'></span>
                    <h2 className="font-bold font-outfit text-xl py-3 lg:text-3xl">
                        Popular Flights
                    </h2>
                </div>
                <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-5 my-8'>

                    <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />
                    <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />
                    <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />
                    <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />
                    <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />
                    <AirplaneCard image={'/images/tours/2.png'} title={'Damavand Volcano 5671 meter'} price={'11$'} startTime="18:00" endTime='20:00' startPlace='tehran' endPlace='shiraz' ticketCount={3} travelers='1 adult, 2 children' loadWeight={30} />



                </div>

            </div>
            <div className="my-36">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.25926 0L9.17936 4.7234L14.1632 5.13221L10.366 8.46024L11.5261 13.4363L7.25926 10.7697L2.99237 13.4363L4.15247 8.46024L0.355293 5.13221L5.33916 4.7234L7.25926 0Z" fill="#520017" />
                </svg>
                <div className='flex items-center gap-2 mt-3'>
                    <span className='h-[1px] w-7 bg-white-shade-5 block'></span>
                    <h2 className="font-bold font-outfit text-xl py-3 lg:text-3xl">
                        Popular Hotel
                    </h2>
                </div>
                <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-5 my-8'>

                    <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'} price={'4556'} score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />
                    <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'} price={'4556'} score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />
                    <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'} price={'4556'} score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />
                    <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'} price={'4556'} score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />
                    <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'} price={'4556'} score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />
                    <HotelCard image={'/images/tours/3.png'} title={'Paradise hotel'} price={'4556'} score={5} off={47} days='9 nights,1 adult' Star Oven={false} Wifi Earth={false} Swim />


                </div>

            </div>
         <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-5 my-8'>
         <MediumBanner name={"Supplemental income"} />
         <MediumBanner name={"Supplemental income"} />
         <MediumBanner name={"Supplemental income"} />  
           
                </div>

        </section>
    )
}

export default ToursSearch



