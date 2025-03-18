import Link from 'next/link';
import React from 'react'

interface PeopleCardProps {
  avatar: string;
  title: string;
  work: string;
  joindate: string;
}


export const PeopleCard: React.FC<PeopleCardProps> = (props) => {
  return (
    <section className=' min-w-[70%]  w-[70%] 
     lg:min-w-[25%] lg:w-[100%]  group'>
  <div className=' py-6 pl-7  flex items-start gap-x-5 rounded-2xl hover:bg-blue transition-all duration-200 border-white-shade-4 border-[1.5px]'>
  <div style={{ backgroundImage: `url(${props.avatar})` }} className="w-[65px] h-[65px] lg:w-[65px] lg:h-[65px] bg-cover bg-center rounded-full  left-[33%] ">

</div>
<div className='flex flex-col items-start gap-2 '>
  <h1 className='text-black font-semibold text-xl group-hover:text-white'>{props.title}</h1>
  <h3 className='text-white-shade-8 text-lg  font-medium'>{props.work}</h3>
  <span className='text-white-shade-11'>{props.joindate}</span>
</div>
  </div>
      <Link className='bg-[#f3f3f3] w-full flex rounded-b-2xl justify-center items-center py-3 -mt-1   cursor-pointer text-black' href="">View Profile</Link>
    </section>
  )
}
