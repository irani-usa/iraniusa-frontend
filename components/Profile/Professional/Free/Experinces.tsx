
import React from 'react'

interface ExperincesProps {
  exprince:string,
}


const Experinces: React.FC<ExperincesProps> = (props) =>{
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8'>
      <div className='container flex flex-col gap-y-6 mt-8 '>
      <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl">Experiences and projects</h1>
            <p className="text-center text-white-shade-9  font-opensans">{props.exprince}</p>
            <div>
           
            </div>
      </div>
    </div>
  )
}

export default Experinces