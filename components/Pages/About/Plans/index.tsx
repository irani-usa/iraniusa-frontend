
import React from 'react'

interface PlanProps {
    name: string,
    info:string,
    quantity:string,
    classes:string,
    theme:string,
}

const Plan: React.FC<PlanProps> = (props) => {
  return (

     <section className={`${props.classes}flex flex-col items-center gap-y-3 w-[80%] lg:w-[25%]`}>
      <div className={`${props.classes}  h-60 rounded-3xl gap-y-5 flex flex-col items-center justify-center border border-white-shade-3 w-[100%] lg:h-52`}>
        <h1 className='text-3xl font-outfit font-bold text-black'>{props.name}</h1>
      
          
        <h4 className='text-black font-opensans font-bold text-3xl'> {props.quantity} <span className=' text-white-shade-9 text-lg font-semibold '>{props.info}</span></h4>
     
    </div>
    <div className={`${props.theme} w-[160px] rounded-2xl h-2 `}></div>
    </section>
  )
}

export default Plan