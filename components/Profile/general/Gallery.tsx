import React from "react";
import Sectiontitle from "./Sectiontitle";
import IconElement from "./IconElement";
import GalleryIcon from "@/components/Icons/Profile/Gallery";

const Gallery = () => {
  return (
    <section className="w-full border-white-shade-4 border-b pt-8">
      <div className="container  lg:px-0">
      <IconElement icon={<GalleryIcon />}/>
      <Sectiontitle title={"Gallery"} classes="mt-5"/>
        <div className="grid grid-cols-2 items-center gap-x-5 gap-y-4 mt-9 lg:grid-cols-3 py-8">
          <div
            className="w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]"
            style={{ backgroundImage: `url('/images/profile/cart.png')` }}
          ></div>
          <div
            className="w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px] lg:col-span-2"
            style={{ backgroundImage: `url('/images/profile/card.png')` }}
          ></div>
          <div
            className="w-
                 full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]"
            style={{ backgroundImage: `url('/images/profile/card.png')` }}
          ></div>
          <div
            className="w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]"
            style={{ backgroundImage: `url('/images/profile/cart.png')` }}
          ></div>
          <div
            className="w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px] col-span-2 lg:col-span-1"
            style={{ backgroundImage: `url('/images/profile/card.png')` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
