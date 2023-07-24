import React from 'react'
interface InfoProps {
    content: string,
    info:string,
    classes:string,
}

const InfoBox: React.FC<InfoProps> = (props) => {
  return (
    <div className={`${props.classes} py-14 px-20 rounded-2xl gap-y-3 flex flex-col items-center justify-center text-black`}>
        <h1 className='text-4xl font-outfit font-bold'>{props.content}</h1>
        <h4 className='text-white-shade-9 font-opensans text-xl font-medium'>{props.info}</h4>
    </div>
  )
}

export default InfoBox