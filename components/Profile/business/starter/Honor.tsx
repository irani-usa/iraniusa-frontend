import React from 'react'

interface HonorProps {
    title: string,
    content: string,
    classes:string,
}

const Honor: React.FC<HonorProps> = (props) => {
    return (
        <div className={`${props.classes} flex flex-col   gap-x-3 `}>
            <h1 className="text-black text-3xl font-bold">{props.title}</h1>
            <span className={`${props.classes} text-white-shade-9  `}>{props.content}</span>
        </div>
    )
}

export default Honor