import React from 'react'

interface SkillsitemProps {
    title:string,
  }

const Skillsitem: React.FC<SkillsitemProps> = (props) =>  {
  return (
    <li className='min-w-[100px] lg:w-auto'>{props.title}</li>
  )
}

export default Skillsitem