
import React from 'react'

interface CoverProps {
  background:string,
}

const Cover: React.FC<CoverProps> = (props) => {
  return (
   <>
    <div  style={{ backgroundImage: `url(${props.background})` }} className=' w-full bg-cover h-24 relative lg:h-40 rounded-3xl lg:hidden box4'>
    </div>
    <div  style={{ backgroundImage: `url(${props.background})` }} className=' w-full bg-cover h-24 relative lg:h-40 rounded-3xl hidden lg:block box3'>
    </div>
    </>
  )
}

export default Cover