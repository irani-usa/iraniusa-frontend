import React from 'react'

interface CalNumProps {
    Number: string,
    isactive:boolean,
    bg:string,
  }

export const CalNum: React.FC<CalNumProps> = (props) => {
  return (
    <>
    <span  style={{ backgroundImage: props.isactive === true ? `url(${props.bg})` : props.isactive === false ? 'none' }}  className={` w-full text-white flex items-center justify-center text-center  font-medium text-lg bg-cover bg-center h-12 rounded-full `}>{props.Number}</span> 
    </>
  )
}
