import React from 'react'
import Button from '@/components/Forms/Button'


import { Sectiontitle } from "../../general";
import Input from '../../business/pro/Input';


interface FormsProps {
  desc: string,
}


const Forms: React.FC<FormsProps> = (props) =>  {
  return (
 <div className=' w-full border-white-shade-4 border-b'>
       <div className=" lg:mx-auto  pb-8 lg:pb-12 lg:max-w-[800px]">
    <div className="container flex flex-col  gap-y-6 mt-8 lg:px-0 ">
     <Sectiontitle title={"Schedule a consultation"} classes={""} />
      <p className="text-center lg:text-lg text-white-shade-9  font-opensans">
        {props.desc}
      </p>
      <div className='flex flex-col gap-y-7'>
        <Input placeholder={'Jason james'} class={''} />
     
        <Input placeholder={'Jason james'} class={''} />
    <div className='flex lg:flex-row gap-y-7 items-center gap-x-7 flex-col'>
    <Input placeholder={'Jason james'} class={''} />
        <Input placeholder={'Jason james'} class={''} />
        <Input placeholder={'Jason james'} class={''} />
    </div>
   
        <textarea placeholder='Message' className='bg-white-shade-2 border border-white-shade-4 w-full rounded-xl max-h-72 h-44 text-black text-lg px-6 py-4 lg:col-span-2 hover:bg-white duration-300 transition-all' name="" id="" cols={20} rows={30}></textarea>
        <Button content={'Submit'} classes={'py-4 rounded-xl bg-blue lg:col-span-2'} />
      </div>
    </div>
  </div>
 </div>
  )
}

export default Forms