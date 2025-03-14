import React from 'react'

interface SkillsitemProps {
    title:string,
  }

const Skillsitem: React.FC<SkillsitemProps> = (props) =>  {
  return (
    <li className='w-full flex text-base border-white-shade-4 p-4 border rounded-lg bg-white-shade-2'>{props.title}</li>
  )
}

export default Skillsitem