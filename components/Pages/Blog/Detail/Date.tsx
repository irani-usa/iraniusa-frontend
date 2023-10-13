import { Callender } from '@/components/Icons/Outline/Callender'
import React from 'react'

interface DateProps {
    date:string,
  }
  

export const Date: React.FC<DateProps> = (props) =>  {
  return (
    <div className='flex items-center gap-x-3'>
        <Callender />
        <span className='text-white-shade-9 text-lg'>{props.date}</span>
    </div>
  )
}
