import React from 'react'

interface StarProps {
    content: string,
  }
  

const Star: React.FC<StarProps> = (props) => {
  return (
    <div className='flex flex-col items-center -mt-5'>
    <svg width="14" height="13" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 0L7.58702 3.81565L11.7063 4.1459L8.56785 6.83435L9.52671 10.8541L6 8.7L2.47329 10.8541L3.43215 6.83435L0.293661 4.1459L4.41298 3.81565L6 0Z" fill="#011223"/>
  </svg>
  <h1 className="text-black  font-bold font-outfit text-xl py-3 lg:text-3xl">
          {props.content}
        </h1>
  </div>
  )
}

export default Star