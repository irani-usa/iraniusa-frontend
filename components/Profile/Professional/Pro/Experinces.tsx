
import React from 'react'

import Sectiontitle from '../../general/Sectiontitle'

interface ExperincesProps {
  desc: string,
}

const Experinces: React.FC<ExperincesProps> = (props) => {
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8'>
      <div className='container flex flex-col gap-y-6 mt-8 '>
      <Sectiontitle title={"Experiences and projects"} />
            <p className="text-center text-white-shade-9  font-opensans">{props.desc}</p>
            
      </div>
    </div>
  )
}

export default Experinces