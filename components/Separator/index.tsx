import React from "react";
import Achaemenes from "../Symbols/Achaemenes";

interface SeparatorProps {
  classes: string,

}

const Separator:React.FC<SeparatorProps> = (props) => {
  return (
    <div className={`${props.classes} w-1/2 flex gap-x-4 justify-center items-center `}>
      <svg
        width="129"
        height="1"
        viewBox="0 0 129 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="129" y2="0.5" stroke="#D9D9D9" />
      </svg>

      <Achaemenes classes={"w-10"} />
      <svg
        width="129"
        height="1"
        viewBox="0 0 129 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="129" y2="0.5" stroke="#D9D9D9" />
      </svg>
    </div>
  );
};

export default Separator;
