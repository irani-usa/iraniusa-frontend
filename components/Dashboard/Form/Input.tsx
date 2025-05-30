import React from "react";

interface InputProps {
  label: string;
  placeHolder: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-lg font-opensans font-semibold mb-2"
        htmlFor="fullName"
      >
        {props.label}
      </label>
      <div className="flex items-center justify-betweenw-full h-16 px-4 bg-white-shade-2 rounded-2xl">
        <input
          type="text"
          placeholder={props.placeHolder}
          className="w-5/6 h-full text-lg rounded-2xl bg-white-shade-2 focus:outline-hidden"
        />
        <svg
          className="w-1/6"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4008 3.59471C12.4151 2.58041 14.0596 2.58041 15.0739 3.59471C16.0882 4.60902 16.0882 6.25353 15.0739 7.26783L10.0112 12.3305C9.72591 12.6159 9.55166 12.7901 9.35745 12.9416C9.12863 13.1201 8.88104 13.2731 8.61908 13.398C8.39673 13.5039 8.16293 13.5819 7.78009 13.7094L5.99832 14.3034L5.57054 14.446C5.18764 14.5736 4.7655 14.4739 4.4801 14.1885C4.1947 13.9031 4.09505 13.481 4.22268 13.0981L4.95919 10.8886C5.08678 10.5057 5.1647 10.2719 5.27067 10.0496C5.39552 9.78759 5.54853 9.54001 5.72701 9.31119C5.87849 9.11697 6.05276 8.94272 6.33813 8.65738L11.4008 3.59471ZM5.97525 13.257L5.41167 12.6934L5.89729 11.2365C6.03868 10.8124 6.09708 10.6399 6.17339 10.4798C6.26699 10.2834 6.38171 10.0978 6.51552 9.92621C6.62462 9.78633 6.75276 9.65697 7.06891 9.34082L10.9962 5.4135C11.1583 5.82016 11.4326 6.31098 11.8951 6.7735C12.3577 7.23602 12.8485 7.5103 13.2551 7.67241L9.32782 11.5997C9.01166 11.9159 8.8823 12.044 8.74243 12.1531C8.57088 12.2869 8.38526 12.4016 8.18886 12.4952C8.02872 12.5716 7.85626 12.63 7.4321 12.7713L5.97525 13.257ZM14.052 6.87559C13.9694 6.85747 13.8662 6.8302 13.7488 6.78948C13.4261 6.67753 13.0017 6.46584 12.6022 6.06639C12.2028 5.66694 11.9911 5.24249 11.8792 4.91981C11.8384 4.80245 11.8112 4.69923 11.793 4.61668L12.1079 4.30182C12.7317 3.67804 13.743 3.67804 14.3668 4.30182C14.9906 4.9256 14.9906 5.93695 14.3668 6.56073L14.052 6.87559ZM4.16798 16.6673C4.16798 16.3912 4.39184 16.1673 4.66798 16.1673H15.3346V17.1673H4.66798C4.39184 17.1673 4.16798 16.9435 4.16798 16.6673Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Input;
