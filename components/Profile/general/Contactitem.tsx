import React from 'react'

import Link from 'next/link'




interface ContactitemProps {
    title: string,
    content: string,
    icon: React.ReactNode,
}

const Contactitem: React.FC<ContactitemProps> = (props) => {
  return (

    <div className="flex gap-5 border border-white-shade-4 p-2 rounded-xl w-full items-center ">
      <div className="border border-white-shade-4 h-min p-2 rounded-lg bg-white-shade-3">
       {props.icon}
      </div>
      <div className="flex flex-col">
        <span className=" text-white-shade-9 text-sm ">{props.title}</span>
        <h2 className="font-semibold text-lg ">{props.content}</h2>
       </div>

    </div>
  );
};

export default Contactitem;
