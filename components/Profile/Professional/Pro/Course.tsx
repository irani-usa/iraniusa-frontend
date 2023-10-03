import React from 'react'

interface CourseProps {
    iconComp: React.ReactNode,
    name:string,
    date:string,
}

const Course: React.FC<CourseProps> = (props) => {
    return (
        <div className='flex items-start gap-x-4' >
            <div className='flex justify-center items-center p-5 border border-white-shade-3 rounded-full'>
                {props.iconComp}
            </div>
            <div className='flex flex-col font-opensans'>

                <span className='text-black text-lg font-semibold max-w-[210px]'>{props.name}</span>
                <span className='text-white-shade-9 '>
               {props.date}
                </span>
            </div>
        </div>
    )
}

export default Course