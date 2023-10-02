import React from "react";

interface GalleryItemProps {
    imgUrl:string,
    no:number
}

const GalleryItem: React.FC<GalleryItemProps>  = (props) => {
  return (
    <div
      className={`w-full h-[220px] bg-center bg-cover rounded-2xl lg:h-[190px]`}
      style={{ backgroundImage: `url(${props.imgUrl})` }}
    >
    </div>
  );
};

export default GalleryItem;