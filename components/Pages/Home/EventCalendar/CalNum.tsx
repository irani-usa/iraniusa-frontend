import React from 'react'

interface CalNumProps {
    Number: string,
    isactive:boolean,
    bg:string,
  }

export const CalNum: React.FC<CalNumProps> = (props) => {
  return (
    <>
    <span  style={{ backgroundImage: `url(${props.bg})` }}  className={` w-full text-white flex items-center justify-center text-center  font-medium text-lg bg-cover bg-center h-12 rounded-full `}>{props.Number}</span>
    </>
  )
}
