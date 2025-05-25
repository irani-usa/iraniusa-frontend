import React from 'react'

interface AuthorProps {
    name:string,
    avatar:string,
  }
  


export const Author: React.FC<AuthorProps> = (props) =>  {
  return (
    <div className='flex items-center gap-x-3'>
        <div className='w-7 h-7 bg-center bg-cover' style={{ backgroundImage: `url(${props.avatar})` }}></div>
        <span className='text-white-shade-9 text-lg'>By {props.name}</span>
    </div>
  )
}
