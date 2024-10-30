import React from 'react'

interface CourseProps {
    iconComp: React.ReactNode,
    name:string,
    date:string,
}

const Course: React.FC<CourseProps> = (props) => {
    return (
        <div className='flex items-center gap-x-4 flex-col justify-center' >
            <div className='flex justify-center items-center p-5 border border-white-shade-3 rounded-full'>
                {props.iconComp}
            </div>

                <span className='text-black text-lg font-semibold '>{props.name}</span>
                <span className='text-white-shade-9 '>
               {props.date}
                </span>
        </div>
    )
}

export default Course