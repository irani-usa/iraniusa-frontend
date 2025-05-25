import React from 'react'

interface LabelProps {
    logo:React.ReactNode,
  }
  

const Label: React.FC<LabelProps> = (props) =>  {
  return (
    <div className='group relative  cursor-pointer w-[72%] min-w-[72%] bg-white-shade-2 flex flex-col items-center justify-center h-[140px] rounded-3xl lg:min-w-[30%] lg:w-[30%] hover:bg-blue duration-300'>
        {props.logo}
             <div className='w-0 group-hover:w-20 duration-300 absolute -bottom-4 rounded-full h-1 bg-red'></div>
    </div>
  )
}

export default Label