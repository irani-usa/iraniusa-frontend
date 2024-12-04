import Link from 'next/link'
import React from 'react'


interface MembersCardProps {
    background: string,
    fullname: string,
    job: string,
    address:string,
    class:string,
  }

const MembersCard: React.FC<MembersCardProps> = (props) => {
  return (
       <div className={`w-full
      ${props.class} flex-col`}>
           <section className='border-[1.5px] p-4 bg-white  border-white-shade-4 
    flex items-center gap-x-2 rounded-2xl hover:bg-blue transition-all duration-200 group '>
                   <div
                       className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cover bg-center"
                       style={{ backgroundImage: `url(${props.background})` }}
                   ></div>                 
               <div className='flex flex-col justify-center mb-5'>
                   <h1 className='text-black font-semibold text-xl group-hover:text-white'>{props.fullname}</h1>
                   <h3 className='text-white-shade-8 text-lg  font-medium'>{props.job}</h3>
                   <span className='text-white-shade-11'>{props.address}</span>
               </div>
           </section>
           <Link className='bg-[#f3f3f3] w-full flex rounded-b-2xl justify-center items-center py-3 -mt-5   cursor-pointer' href="">View Profile</Link>
       </div>
  )
}

export default MembersCard