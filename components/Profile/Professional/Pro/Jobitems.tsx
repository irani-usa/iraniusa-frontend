import React from 'react'

interface JobitemsProps {
    jobtitle:string,
  }

const Jobitems: React.FC<JobitemsProps> = (props) => {
  return (
    <li className='text-white-shade-9 font-opensans '>{props.jobtitle}</li>
  )
}

export default Jobitems