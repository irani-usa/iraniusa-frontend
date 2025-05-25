import Link from 'next/link'
import React from 'react'

interface TagProps {
  content: string,
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <Link className='py-2' href={"#"}>
      <span className='bg-white-shade-3 px-4 py-2 text-black rounded-full font-inter text-lg font-medium hover:bg-black hover:text-white duration-300 transition-all'>{props.content}</span>
    </Link>
  )
}

export default Tag