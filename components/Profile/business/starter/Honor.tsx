import React from 'react'

interface HonorProps {
    title: string,
    content: string,
}

const Honor: React.FC<HonorProps> = (props) => {
    return (
        <div className="flex flex-col items-center  gap-x-3 ">
            <h1 className="text-black text-3xl font-bold">{props.title}</h1>
            <span className="text-white-shade-9 text-center">{props.content}</span>
        </div>
    )
}

export default Honor