
import React from 'react'

interface CoverProps {
  background:string,
}

const Cover: React.FC<CoverProps> = (props) => {
  return (
    <div  style={{ backgroundImage: `url(${props.background})` }} className='w-full bg-cover h-24 relative lg:h-40 rounded-3xl'>
    </div>
  )
}

export default Cover