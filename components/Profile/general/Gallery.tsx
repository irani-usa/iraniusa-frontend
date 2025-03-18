import React from "react";
import Sectiontitle from "./Sectiontitle";
import IconElement from "./IconElement";
import GalleryIcon from "@/components/Icons/Profile/Gallery";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section className="w-full border-white-shade-4 border-b py-8 lg:py-20 container">
      <div className="flex flex-col items-center w-full">
        
        <IconElement icon={<GalleryIcon />}/>
        <Sectiontitle title={" Gallery (New!)"} classes={"mt-5"} />
        <div className="flex lg:flex-row flex-col w-full items-center gap-10">
        <div className="grid grid-cols-2 items-center gap-x-5 gap-y-4  lg:grid-cols-3 pt-10 w-full">
          <GalleryItem no={1} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={2} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={3} imgUrl={"/images/profile/card.png"} />
        </div>
        <span className="text-white-shade-11 font-bold text-xl">
        +10
        </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
