import React from 'react'

interface CompanyCardtProps {
  logo:string,
  avatar: string;
  title: string;
  work:string;
  joindate: string;
}


export const CompanyCard: React.FC<CompanyCardtProps> = (props) =>  {
  return (
    <div className='min-w-[70%] w-[70%] py-5 lg:py-9  flex flex-col items-center border-[1.5px]  rounded-2xl border-white-shade-4 lg:min-w-[25%] lg:w-[100%] hover:bg-blue transition-all duration-200 group'>
      <div className='w-full flex items-center justify-center relative'>
      <div  style={{ backgroundImage:  `url(${props.avatar})` }} className="w-[55px] h-[55px]  lg:w-[65px] lg:h-[65px] bg-cover bg-center rounded-full absolute left-[33%] top-0">
        
      </div>
      <div  style={{ backgroundImage:  `url(${props.logo})` }} className="w-[55px] h-[55px]  lg:w-[65px] lg:h-[65px] bg-cover bg-center rounded-full absolute top-0 left-[46%]">
        
        </div>
    </div>
    <div className='pt-16 flex flex-col items-center gap-1 lg:gap-2 lg:pt-[70px]'>
    <h1 className='text-black font-semibold text-xl  group-hover:text-white'>{props.title}</h1>
    <h3 className='text-white-shade-8 text-lg  font-medium'>{props.work}</h3>
    <span className='text-white-shade-11'>{props.joindate}</span>
    </div>
    </div>
  )
}
