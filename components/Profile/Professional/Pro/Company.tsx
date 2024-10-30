import React from 'react'


interface CompanyProps {
    classes:string,
    iconComp: React.ReactNode,
    title:string,
  }

const Company: React.FC<CompanyProps> = (props) =>{
  return (
    <div className={`${props.classes}  relative bg-white-shade-2 py-5 flex items-center gap-5 rounded-3xl w-full  `}>
     <div className="bg-white-shade-3 p-2 rounded-lg">
        {props.iconComp}  
      </div>
      <span>{props.title}</span>       
  </div>
  )
}

export default Company