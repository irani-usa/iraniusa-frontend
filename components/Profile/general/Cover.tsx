
import React from 'react'
import Avatar from './Avatar'
import UserTitle from './UserTitle'

const Cover = () => {
  return (
    <div  style={{ backgroundImage: `url('/images/profile/Cover.png')` }} className='w-full bg-cover h-24 relative lg:h-40'>
     <div className='container'>
     <Avatar />
   
     </div>
    </div>
  )
}

export default Cover