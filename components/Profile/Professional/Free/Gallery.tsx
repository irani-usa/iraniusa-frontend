import React from "react";
import GalleryItem from "./GalleryItem";
import Sectiontitle from "../../general/Sectiontitle";
import IconElement from "../../general/IconElement";
import GalleryIcon from "@/components/Icons/Profile/Gallery";

const Gallery = () => {
  return (
    <section className="w-full border-white-shade-4 border-b py-8 lg:py-20">
      <div className="container  lg:px-0 flex flex-col items-center w-full">
        
        <IconElement icon={<GalleryIcon />}/>
        <Sectiontitle title={" Gallery (New!)"} classes={"mt-5"} />
        <div className="grid grid-cols-2 items-center gap-x-5 gap-y-4  lg:grid-cols-3 pt-10 w-full">
          <GalleryItem no={1} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={2} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={3} imgUrl={"/images/profile/card.png"} />
          <GalleryItem no={4} imgUrl={"/images/profile/card.png"} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
