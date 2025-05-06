import React from 'react'

interface HonorProps {
    title: string,
    content: string,
    classes:string,
}

const Honor: React.FC<HonorProps> = (props) => {
    return (
        <div className={`${props.classes} bg-white flex flex-col px-4 py-2  gap-x-3 border border-white-shade-3 rounded-xl`}>
            <h1 className="text-black text-lg font-bold">{props.title}</h1>
            <span className={`${props.classes} text-white-shade-9  text-sm`}>{props.content}</span>
        </div>
    )
}

export default Honor