"use client"
import React, { useState } from 'react'
import Sectiontitle from '../../general/Sectiontitle'
import { ExperincesCard } from '../../general';
import IconElement from '../../general/IconElement';
import ExperincesIcon from '@/components/Icons/Profile/Experinces';

interface ExperincesProps {
  exprince: string,
}


const Experinces: React.FC<ExperincesProps> = (props) => {
  const [Experinces, setExperinces] = useState([
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
    { id: 1, title: "Developer", date: "Oct 2021- Sep 2022" , data:{project:"Star Project ",company:"Riv design Company" , location : "Stockholm, Sweden"} },
  ]);
  return (
    <div className=' w-full border-white-shade-4 border-b pb-14 lg:pb-8 lg:py-10 container'>
      <div className=' flex flex-col gap-y-3 mt-14 lg:mt-8 items-center'>
        <IconElement icon={<ExperincesIcon />}/>  
        <Sectiontitle title={'Experiences and projects'} classes={'mt-2'} />
        <p className="text-center text-white-shade-9  font-opensans">{props.exprince}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8  lg:mt-7 lg:grid-cols-3 gap-8 w-full">
        {Experinces.map((item, id) => {
          
            return (
              
              <ExperincesCard 
                key={id}
                title={item.title}
                date={item.date}
                data={item.data}
              />
            );
            
          })}
      
        </div>
      </div>
    </div>
  )
}

export default Experinces