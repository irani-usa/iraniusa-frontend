import React from 'react'

interface PhotoProps {
    background:string,

  }
  

const Photo: React.FC<PhotoProps> = (props) => {
  return (
    <div className='w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]' style={{ backgroundImage:`url(${props.background})`}}></div>
  )
}

export default Photo