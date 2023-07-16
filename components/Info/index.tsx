import React from 'react'
interface InfoProps {
    content: string,
    info:string,
    classes:string,
}

const Infobox: React.FC<InfoProps> = (props) => {
  return (
    <div className={`${props.classes} py-14 px-16 rounded-2xl gap-y-3 flex flex-col items-center justify-center text-black`}>
        <h1 className='text-5xl font-outfit font-bold'>{props.content}</h1>
        <h4 className='text-white-shade-9 font-opensans text-2xl font-medium'>{props.info}</h4>
    </div>
  )
}

export default Infobox