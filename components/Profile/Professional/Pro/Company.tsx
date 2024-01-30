import React from 'react'


interface CompanyProps {
    classes:string,
    iconComp: React.ReactNode,
  }

const Company: React.FC<CompanyProps> = (props) =>{
  return (
    <div className={`${props.classes} group relative bg-white-shade-2 py-9 flex items-center justify-center rounded-3xl w-[75%] flex-col lg:w-[35%] hover:bg-blue duration-300 transition-all hover:scale-[1.1] hover:shadow-soft-shadow`}>
        {props.iconComp}
        <div className='w-0 group-hover:w-20 duration-300 absolute -bottom-3 rounded-full h-1 bg-red'></div>
  </div>
  )
}

export default Company