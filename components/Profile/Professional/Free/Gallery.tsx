import React from "react";
import GalleryItem from "./GalleryItem";
import Sectiontitle from "../../general/Sectiontitle";
import IconElement from "../../general/IconElement";
import GalleryIcon from "@/components/Icons/Profile/Gallery";

const Gallery = () => {
  return (
    <section className="w-full border-white-shade-4 border-b py-16 container">
      <div className=" flex flex-col items-center w-full">
        
        <IconElement icon={<GalleryIcon />}/>
        <Sectiontitle title={" Gallery (New!)"} classes={"mt-2"} />
        <div className="flex lg:flex-row flex-col w-full items-center mt-6 lg:mt-0 lg:gap-x-5  lg:pt-10">
        <div className="grid grid-cols-1 items-center gap-x-5 gap-y-4  lg:grid-cols-3  w-full">
          <GalleryItem no={1} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={2} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={3} imgUrl={"/images/profile/card.png"} />
        </div>
        <span className="text-white-shade-9 mt-5 lg:mt-0 flex items-center justify-center w-full lg:w-[70px] rounded-xl bg-[#F5F5F5] h-16 lg:h-[220px] font-bold text-xl">
        +10
        </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
