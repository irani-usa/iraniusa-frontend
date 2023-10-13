import React from 'react'

interface LabelProps {
    logo:React.ReactNode,
  }
  

const Label: React.FC<LabelProps> = (props) =>  {
  return (
    <div className='w-[72%] bg-white-shade-2 flex items-center justify-center h-[140px] rounded-3xl lg:w-[30%]'>
        {props.logo}
    </div>
  )
}

export default Label