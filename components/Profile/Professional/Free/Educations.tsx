
import React from 'react'

interface EducationsProps {
  desc:string,
  eTitle:string,
  eUniversity:string,
  eDate:string,
}


const Educations: React.FC<EducationsProps> = (props) =>{
  return (
    <section className='w-full border-white-shade-4 border-b py-8'>
      <div className='container flex flex-col gap-y-6 lg:px-0'>
        <h1 className="text-[26px] font-outfit font-bold text-black">Educations</h1>
        <p className=" text-white-shade-9  font-opensans">{props.desc} </p>
    <div className='grid grid-cols-2 items-center lg:grid-cols-3'>
    <div className='flex flex-col w-full'>
          <h1 className="text-lg font-medium text-black">{props.eTitle}</h1>
          <span className="text-white-shade-9 font-medium">{props.eUniversity}</span>
          <span className="text-white-shade-9 font-medium">{props.eDate}</span>
        </div>
        <div className='flex flex-col w-full'>
          <h1 className="text-lg font-medium text-black">{props.eTitle}</h1>
          <span className="text-white-shade-9 font-medium">{props.eUniversity}</span>
          <span className="text-white-shade-9 font-medium">{props.eDate}</span>
        </div>
    </div>
      </div>

      
    </section>
  )
}

export default Educations