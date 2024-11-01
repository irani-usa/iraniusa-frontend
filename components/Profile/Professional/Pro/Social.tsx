import React from "react";


import { Call, Email, Facebook, Instagram, Telegram, Twitter, W, Website, Whatsapp } from "@/components/Icons/Profile/index";


import { Sectiontitle ,Contactitem, Socialitme } from "../../general";
import IconElement from "../../general/IconElement";
import ContactIcon from "@/components/Icons/Profile/Contact";

interface SocialProps {
  desc: string,
}

const Social: React.FC<SocialProps> = (props) => {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8 lg:pb-12">
      <div className="container flex flex-col lg:items-center gap-y-6 mt-8 lg:px-0">
       <Sectiontitle title={"Social"} classes={""} />
        <p className="text-center text-lg text-white-shade-9  font-opensans">
          {props.desc}
        </p>
        <section className="grid grid-cols-4 gap-y-4 mt-7 lg:grid-cols-6 lg:w-[500px] gap-x-5 mb-20">
          <Socialitme icon={<Facebook />} />
          <Socialitme icon={<Instagram />} />
          <Socialitme icon={<Twitter />} />
          <Socialitme icon={<Whatsapp />} />
          <Socialitme icon={<Telegram />} />
          <Socialitme icon={<W />} />
        </section>

        <IconElement icon={<ContactIcon />}/>
        <h1 className="text-[26px] font-outfit font-bold text-black text-center">
          Contact
        </h1>
        <p className="text-white-shade-9 text-center font-opensans ">
         {props.desc}
        </p>
        <div className="grid grid-cols-1  items-center lg:grid-cols-2 gap-5 w-full">
        <Contactitem title={"E-mail"} content={"unreal@gmail.com"} icon={<Email />} />
          <Contactitem title={"Call"} content={"unreal@gmail.com"} icon={<Call />} />
          <Contactitem title={"Website"} content={"unreal@gmail.com"} icon={<Website />} />
        </div>
      </div>
    </div>
  );
};

export default Social;
