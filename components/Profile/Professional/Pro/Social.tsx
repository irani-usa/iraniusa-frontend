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
    <div className=" w-full border-white-shade-4 border-b pb-8 container py-14 lg:pb-12">
      <div className="container flex flex-col lg:items-center  lg:px-0">
      <IconElement icon={<Instagram />}/>
       <Sectiontitle title={"Social"} classes={"mt-4"} />
        <p className="text-center text-lg text-white-shade-9 mt-4 font-opensans">
          {props.desc}
        </p>
        <section className="grid grid-cols-4  gap-y-4 mt-12 lg:grid-cols-6 lg:w-[500px] gap-x-5 pb-16">
          <Socialitme icon={<Facebook />} />
          <Socialitme icon={<Instagram />} />
          <Socialitme icon={<Twitter />} />
          <Socialitme icon={<Whatsapp />} />
          <Socialitme icon={<Telegram />} />
          <Socialitme icon={<W />} />
        </section>

        <div className="border-t border-t-white-shade-4 w-full pt-16">
        <IconElement icon={<ContactIcon />}/>
        <h1 className="text-[26px] font-outfit font-medium mt-3 text-black text-center">
          Contact
        </h1>
        <p className="text-white-shade-9 text-center font-opensans mt-2">
         {props.desc}
        </p>
        <div className="grid grid-cols-1 mt-14 items-center lg:grid-cols-2 gap-5 w-full pb-4">
        <Contactitem title={"E-mail"} content={"unreal@gmail.com"} icon={<Email />} />
          <Contactitem title={"Call"} content={"unreal@gmail.com"} icon={<Call />} />
          <Contactitem title={"Website"} content={"unreal@gmail.com"} icon={<Website />} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
