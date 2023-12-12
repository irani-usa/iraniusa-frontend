import React from 'react'

interface PeopleCardProps {
    avatar: string;
    title: string;
    work:string;
    joindate: string;
  }
  

export const PeopleCard: React.FC<PeopleCardProps> = (props) =>   {
  return (
    <section className=' min-w-[70%]  w-[70%] border-[1.5px] py-6 pl-7 border-white-shade-4 
     lg:min-w-[25%] lg:w-[100%] flex items-start gap-x-5 rounded-2xl hover:bg-blue transition-all duration-200 group'>
        <div  style={{ backgroundImage:  `url(${props.avatar})` }} className="w-[65px] h-[65px] lg:w-[65px] lg:h-[65px] bg-cover bg-center rounded-full  left-[33%] ">
        
        </div>
        <div className='flex flex-col items-start gap-2 '>
    <h1 className='text-black font-semibold text-xl group-hover:text-white'>{props.title}</h1>
    <h3 className='text-white-shade-8 text-lg  font-medium'>{props.work}</h3>
    <span className='text-white-shade-11'>{props.joindate}</span>
    </div>
    </section>
  )
}
