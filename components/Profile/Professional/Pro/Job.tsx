import React from 'react'
import Jobitems from './Jobitems'
import Sectiontitle from '../../general/Sectiontitle'

interface JobProps {
    jobabout:string,
    jobcover:string,
  }

const Job: React.FC<JobProps> = (props) => {
    return (
        <div className=' w-full border-white-shade-4 border-b pb-8'>
            <div className=' flex flex-col gap-y-6 mt-8 lg:px-0'>
            <Sectiontitle title={"What is my job about?"} classes={''} />
                <div className="text-white-shade-9 font-opensans lg:max-w-lg flex flex-col gap-y-8">
                    <p >
                   {props.jobabout}
                    </p>
        
                    <ol className='list-decimal pl-4'>
                        <Jobitems jobtitle={'Web design and development.'} />
                        <Jobitems jobtitle={'Software/app design and development.'} />
                        <Jobitems jobtitle={'UX design.'} />
                        <Jobitems jobtitle={'Graphic design.'} />
                        <Jobitems jobtitle={'Prototyping.'} />
                        <Jobitems jobtitle={' Written and verbal communication.'} />
                        <Jobitems jobtitle={'Personnel management.'} />
                    </ol>
                </div>
                <div className='w-full h-80 bg-cover bg-center rounded-3xl my-3 lg:h-64' style={{ backgroundImage:  `url(${props.jobcover})` }}>

                </div>
            </div>
        </div>
    )
}

export default Job