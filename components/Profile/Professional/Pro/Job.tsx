import React from 'react'
import Jobitems from './Jobitems'
import Sectiontitle from '../../general/Sectiontitle'
import IconElement from '../../general/IconElement'
import JobIcon from '@/components/Icons/Profile/Job'

interface JobProps {
    jobabout:string,
    jobcover:string,
  }

const Job: React.FC<JobProps> = (props) => {
    return (
        <div className=' w-full border-white-shade-4 border-b pb-8'>
            <div className=' flex flex-col gap-y-6 mt-8 lg:px-0 items-center'>
          
            <IconElement icon={<JobIcon />}/>
            <Sectiontitle title={"What is my job about?"} classes={''} />
                <div className="w-full text-white-shade-9 font-opensans bg-white-shade-2 p-3 rounded-xl  flex flex-col gap-y-8">
                    <p >
                   {props.jobabout}
                    </p>
        
                    <ol className='list-decimal pl-4 w-full'>
                        <Jobitems jobtitle={'Web design and development.'} />
                        <Jobitems jobtitle={'Software/app design and development.'} />
                        <Jobitems jobtitle={'UX design.'} />
                        <Jobitems jobtitle={'Graphic design.'} />
                        <Jobitems jobtitle={'Prototyping.'} />
                        <Jobitems jobtitle={' Written and verbal communication.'} />
                        <Jobitems jobtitle={'Personnel management.'} />
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Job