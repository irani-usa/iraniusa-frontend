import React from 'react'

interface SkillProps {
    title:string,
    iconComp: React.ReactNode,
  }

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className='flex items-center gap-x-5 bg-white-shade-3 p-1 min-w-[75%] w-[75%] rounded-2xl lg:w-full h-16'><div className='bg-white px-10 h-full flex items-center justify-center rounded-2xl'>
        {props.iconComp}
</div>
    <span className='text-black text-lg font-semibold'>{props.title}</span></div>

  )
}

export default Skill