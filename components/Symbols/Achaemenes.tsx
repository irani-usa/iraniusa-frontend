import React from "react";
import Image from "next/image";

interface AchaemenesrProps {
  classes: string;
}

const Achaemenes: React.FC<AchaemenesrProps> = (props) => {
  return (
    <Image
      className={props.classes}
      src={"/images/symbols/achaemenes.png"}
      width={80}
      height={80}
      alt=""
    />
  );
};

export default Achaemenes;
