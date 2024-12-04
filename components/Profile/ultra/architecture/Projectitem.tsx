import React from 'react'

interface ProjectitemProps {
    title:string,
    cover:string,
    discretion:string,
    feature:string[],
    classes:string,
  }

export const Projectitem: React.FC<ProjectitemProps> = ({title , cover , discretion , feature , classes}) =>  {
  return (
    <div className={` $${classes} flex flex-col gap-6 w-full border border-white-shade-4 rounded-xl p-2`}>
        <div  className='w-full h-60 rounded-xl bg-cover bg-center'  style={{ backgroundImage: `url(${cover})` }}></div>
        <h1 className='text-black font-opensans font-medium text-[20px]'>{title}</h1>
        <p className='text-white-shade-11 text-sm'>{discretion}</p>
        {feature.map(item => (
          <span className="flex items-center gap-2 mb-2 text-white-shade-11">{item}</span>
        ))}
    </div>
  )
}
