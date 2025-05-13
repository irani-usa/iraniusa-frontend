import { Email } from "@/components/Icons/Outline";
import React from "react";
import Contactitem from "./Contactitem";
import { Call, Website } from "@/components/Icons/Profile";
import IconElement from "./IconElement";
import ContactIcon from "@/components/Icons/Profile/Contact";

interface ContactsProps {
  desc:string,
}

const Contacts: React.FC<ContactsProps> = (props) =>  {
  return (
    <section className="py-9 border-b border-white-shade-4">
      <div className="container flex flex-col py-6   gap-y-5 lg:gap-y-2 lg:pl-5 lg:py-11 lg:pb-14 items-center">
      
        <IconElement icon={<ContactIcon />}/>

        <h1 className="text-[26px] font-outfit font-medium text-black text-center">
          Contact
        </h1>
        <p className="text-white-shade-9 text-center font-opensans ">
         {props.desc}
        </p>
     
        <div className="grid grid-cols-1  items-center lg:grid-cols-2 gap-5 w-full lg:mt-10">
          <Contactitem title={"E-mail"} content={"unreal@gmail.com"} icon={<Email />} />
          <Contactitem title={"Call"} content={"unreal@gmail.com"} icon={<Call />} />
          <Contactitem title={"Website"} content={"unreal@gmail.com"} icon={<Website />} />
        </div>
       
      </div>
     
    </section>
  );
};

export default Contacts;
