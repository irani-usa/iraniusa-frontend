
import React from 'react'

interface CoverProps {
  background:string,
}

const Cover: React.FC<CoverProps> = (props) => {
  return (
   <>
    <div  style={{ backgroundImage: `url(${props.background})` }} className=' w-full bg-cover h-24 relative xl:h-40 rounded-3xl xl:hidden box4'>
    </div>
    <div  style={{ backgroundImage: `url(${props.background})` }} className=' w-full bg-cover h-24 relative xl:h-40 rounded-3xl hidden xl:block box3'>
    </div>
    </>
  )
}

export default Cover