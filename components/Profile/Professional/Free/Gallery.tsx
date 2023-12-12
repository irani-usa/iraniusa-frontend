import React from "react";
import GalleryItem from "./GalleryItem";
import Sectiontitle from "../../general/Sectiontitle";

const Gallery = () => {
  return (
    <section className="w-full border-white-shade-4 border-b py-8 lg:py-20">
      <div className="container  lg:px-0">
        <Sectiontitle title={" Gallery (New!)"} classes={""} />
        <div className="grid grid-cols-2 items-center gap-x-5 gap-y-4  lg:grid-cols-3 pt-10">
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
