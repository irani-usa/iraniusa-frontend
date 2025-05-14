import Link from 'next/link';
import React from 'react'

interface CardProps {
    avatar: string;
    title: string;
    work: string;
    address: string;
    link: string;
}


export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className='cursor-pointer min-w-[70%]  w-[70%]
     lg:min-w-[25%] lg:w-[100%]  '>
            <section className='border-[1.5px] py-6 bg-white  border-white-shade-4 
     flex items-center gap-x-5 rounded-2xl hover:bg-blue transition-all duration-200 group flex-col relative'>
        <div className='absolute -z-10 top-0 left-0'>                    
                    <img src="/images/home/starbg.png" alt="" />
                </div>  
                <div className="flex">
                    <div
                        className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${props.avatar})` }}
                    ></div>
                    <div
                        className="w-14 h-14 lg:w-16 lg:h-16 -ml-6 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url('/images/avatars/2.png')` }}
                    ></div>
                </div>
                <div className='flex flex-col items-center gap-2 '>
                    <h1 className='text-black font-semibold text-xl group-hover:text-white'>{props.title}</h1>
                    <h3 className='text-white-shade-8 text-lg  font-medium'>{props.work}</h3>
                    <span className='text-white-shade-11'>{props.address}</span>
                </div>
            </section>
            <Link className='bg-[#f3f3f3] w-full flex rounded-b-2xl justify-center items-center py-3 -mt-1   cursor-pointer text-black' href={props.link}>View Profile</Link>
        </div>

    )
}
