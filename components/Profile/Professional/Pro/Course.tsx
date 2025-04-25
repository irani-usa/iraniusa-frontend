import React from 'react'

interface CourseProps {
    iconComp: React.ReactNode,
    name:string,
    date:string,
    subname:string
}

const Course: React.FC<CourseProps> = (props) => {
    return (
        <div className='flex lg:items-center  flex-col lg:justify-center bg-white-shade-2 p-3 py-5 rounded-xl' >
         <div className='flex lg:flex-col items-center justify-between'>
         <div className='flex justify-center items-center p-3 border-[1.5px] bg-white border-white-shade-4 rounded-lg'>
                {props.iconComp}
            </div>
            <span className='text-black px-2 font-medium bg-white-shade-3 p-1 rounded-lg lg:mt-3'>
               {props.date}
                </span>
         </div>
                <span className='text-black text-lg font-semibold mt-2 py-2 lg:py-0'>{props.name}</span>
                <span className='text-white-shade-11 font-medium'>
               {props.subname}
                </span>
        </div>
    )
}

export default Course