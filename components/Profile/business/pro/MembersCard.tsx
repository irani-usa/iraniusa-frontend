import React from 'react'


interface MembersCardProps {
    background: string,
    fullname: string,
    job: string,
  }

const MembersCard: React.FC<MembersCardProps> = (props) => {
  return (
    <div  style={{ backgroundImage: `url(${props.background})` }}
    className='w-full h-64 bg-center bg-cover rounded-2xl flex flex-col p-5 items-start justify-end gap-y-1 mt-8'  >
        <span className='text-white font-outfit font-semibold'>{props.fullname}</span>
        <span className='font-opensans text-white-shade-8 text-sm'>{props.job}</span>
    </div>
  )
}

export default MembersCard