import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section className="w-full border-white-shade-4 border-b py-8">
      <div className="container  lg:px-0">
        <h1 className="text-[26px] font-outfit text-center font-bold text-black lg:text-3xl">
          Gallery (New!)
        </h1>
        <div className="grid grid-cols-2 items-center gap-x-5 gap-y-4 mt-9 lg:grid-cols-3 py-8">
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
