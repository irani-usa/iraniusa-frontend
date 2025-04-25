import React from 'react'

interface SkillProps {
    title:string,
    iconComp: React.ReactNode,
  }

const Skill: React.FC<SkillProps> = (props) => {
  return (
    <div className='flex items-center lg:justify-center gap-x-3  p-1 border border-white-shade-4 rounded-2xl lg:w-full py-3 pl-2 lg:pl-0 lg:py-6'>
      <div className='p-1 rounded-lg h-full flex items-center justify-center border border-white-shade-4 '>
        {props.iconComp}
</div>
    <span className='text-black text-lg font-semibold'>{props.title}</span>
    </div>

  )
}

export default Skill