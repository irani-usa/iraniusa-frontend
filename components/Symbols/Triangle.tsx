import React from "react";
import Image from "next/image";

interface TrianglerProps {
  classes: string;
}

const Triangle: React.FC<TrianglerProps> = (props) => {
  return (
    <Image
      className={props.classes}
      src={"/images/symbols/triangle.png"}
      width={200}
      height={200}
      alt=""
    />
  );
};

export default Triangle;
