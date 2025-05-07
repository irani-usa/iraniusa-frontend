import { Button } from '@/components/Forms'
import { Location } from '@/components/Icons/Outline'
import Link from 'next/link'
import React from 'react'


interface BranchesCardProps {
    title: string,
    item:string[],
    class:string,
  }

const BranchesCard: React.FC<BranchesCardProps> = (props) => {
  return (
       <div className={`w-full
      ${props.class} flex-col`}>
           <section className='border-[1.5px] p-4 bg-white  border-white-shade-4 rounded-2xl '>
                  
               <div className='flex flex-col justify-center '>
                 <div className="flex w-full my-10 justify-center">
                 <Location />
                 </div>
                   <h1 className='text-black font-medium text-lg mb-4'>{props.title}</h1>
                   {props.item.map(item => (
                   <span className='text-white-shade-11 flex gap-1 mb-2'><Location />{item}</span>
                   ))}
                   <Button content='Navigate' classes='text-white py-3 mt-4 w-full' />       
               </div>
           </section>
       </div>
  )
}

export default BranchesCard