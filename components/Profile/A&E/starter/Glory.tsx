import React from 'react'

interface GloryProps {
    title: string,
    content:string,
}

export const Glory: React.FC<GloryProps> = (props) =>  {
  return (
    <div className="flex flex-col items-center gap-x-3 col-span-2 lg:gap-y-2">
    <h1 className="text-white text-3xl font-bold lg:text-4xl">{props.title}</h1>
    <span className="text-white-shade-9  text-center">{props.content}</span>
  </div>
  )
}
