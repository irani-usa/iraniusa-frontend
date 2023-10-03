import React from 'react'

interface SkillsitemProps {
    title:string,
  }

const Skillsitem: React.FC<SkillsitemProps> = (props) =>  {
  return (
    <li>{props.title}</li>
  )
}

export default Skillsitem