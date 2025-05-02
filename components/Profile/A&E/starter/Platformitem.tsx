import Link from 'next/link'
import React from 'react'

interface SectiontitleProps {
    Icon: React.ReactNode,
    Link:string,
}

export const Platformitem: React.FC<SectiontitleProps> = (props) =>  {
  return (
    <Link className='bg-white-shade-20 p-3   flex items-center justify-center rounded-full ' href={props.Link}>
    {props.Icon}
</Link>
  )
}
