import React from "react";

interface ArrowbtnProps {
  classes: string;
}

const Arrowbtn: React.FC<ArrowbtnProps> = (props) => {
  return (
    <section
      className={`${props.classes} flex justify-center gap-x-3 mt-7 pb-3 cursor-pointer`}
    >
      <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Arrowbtn;
