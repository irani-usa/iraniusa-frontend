import React from 'react'


interface CompanyProps {
    classes:string,
    iconComp: React.ReactNode,
    title:string,
    date:number,
  }

const Company: React.FC<CompanyProps> = (props) =>{
  return (
    <div className={`${props.classes} justify-between relative bg-white-shade-2 py-3 px-3 flex items-center gap-5 rounded-2xl w-full  `}>
    <div className="flex items-center gap-5">
    <div className="bg-white  p-3 rounded-lg border-white-shade-4 border">
        {props.iconComp}  
      </div>
      <span className='font-medium text-black text-lg'>{props.title}</span> 
    </div>
      <span className='bg-white-shade-3 rounded-lg px-2 py-1 lg:px-2 lg:py-1 font-medium'>{props.date}</span>      
  </div>
  )
}

export default Company