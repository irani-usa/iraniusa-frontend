import React from 'react'

interface SkillsitemProps {
    title:string,
      icon?:React.ReactNode
  }

const Skillsitem: React.FC<SkillsitemProps> = (props) =>  {
  return (
    <li className='w-full flex text-base items-center gap-3 p-4 rounded-lg bg-white-shade-2'>{props.icon}{props.title}</li>
  )
}

export default Skillsitem