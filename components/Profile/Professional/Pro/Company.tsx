import React from 'react'


interface CompanyProps {
    classes:string,
    iconComp: React.ReactNode,
    title:string,
    date:number,
  }

const Company: React.FC<CompanyProps> = (props) =>{
  return (
    <div className={`${props.classes} justify-between relative bg-white-shade-2 py-5 px-3 flex items-center gap-5 rounded-2xl w-full  `}>
    <div className="flex items-center gap-5">
    <div className="bg-white-shade-3 p-2 rounded-lg">
        {props.iconComp}  
      </div>
      <span>{props.title}</span> 
    </div>
      <span className='bg-white-shade-3 rounded-lg px-1'>{props.date}</span>      
  </div>
  )
}

export default Company