import { Email } from "@/components/Icons/Outline";
import React from "react";
import Contactitem from "./Contactitem";
import { Call, Website } from "@/components/Icons/Profile";

interface ContactsProps {
  desc:string,
}

const Contacts: React.FC<ContactsProps> = (props) =>  {
  return (
    <section className="py-9 border-b border-white-shade-4">
      <div className="container flex flex-col  gap-y-5 lg:pl-5 lg:py-11 lg:pb-14">
        <h1 className="text-[26px] font-outfit font-bold text-black text-center">
          Contact
        </h1>
        <p className="text-white-shade-9 text-center font-opensans ">
         {props.desc}
        </p>
        <section>
        <div className="flex  flex-col gap-y-4 mt-6 lg:flex-row lg:gap-x-12 lg:pt-10">
          <Contactitem title={"E-mail"} content={"unreal@gmail.com"} icon={<Email />} />
          <Contactitem title={"Call"} content={"unreal@gmail.com"} icon={<Call />} />
          <Contactitem title={"Website"} content={"unreal@gmail.com"} icon={<Website />} />
        </div>
        </section>
      </div>
     
    </section>
  );
};

export default Contacts;
