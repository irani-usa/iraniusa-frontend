import React from 'react'


interface CompanyProps {
    classes:string,
    iconComp: React.ReactNode,
  }

const Company: React.FC<CompanyProps> = (props) =>{
  return (
    <div className={`${props.classes} bg-white-shade-2 py-9 flex items-center justify-center rounded-3xl w-[75%] lg:w-[35%] hover:bg-blue duration-300 transition-all hover:scale-[1.1] hover:shadow-soft-shadow`}>
        {props.iconComp}
  </div>
  )
}

export default Company