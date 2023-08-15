import React from 'react'

interface TagProps {
  content: string,
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <span className='bg-white-shade-3 px-4 py-2 text-black rounded-full font-opensans text-sm font-medium'>{props.content}</span>
  )
}

export default Tag