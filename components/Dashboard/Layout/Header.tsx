import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-12 py-6 border-b border-white-shade-4">
      <h2 className="font-outfit text-black text-2xl font-medium">
        Edit Profile
      </h2>
      <div className="flex gap-x-4">
        <div className="flex items-center w-72 h-16 gap-x-1 pl-2 bg-white-shade-2 border border-white-shade-4 rounded-full">
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5335 5.36875C9.02314 5.36875 5.3668 9.02509 5.3668 13.5354C5.3668 18.0457 9.02314 21.7021 13.5335 21.7021C18.0438 21.7021 21.7001 18.0457 21.7001 13.5354C21.7001 9.02509 18.0438 5.36875 13.5335 5.36875ZM3.9668 13.5354C3.9668 8.25189 8.24994 3.96875 13.5335 3.96875C18.817 3.96875 23.1001 8.25189 23.1001 13.5354C23.1001 18.8189 18.817 23.1021 13.5335 23.1021C8.24994 23.1021 3.9668 18.8189 3.9668 13.5354ZM20.9718 20.9738C21.2452 20.7004 21.6884 20.7004 21.9618 20.9738L23.8284 22.8404C24.1018 23.1138 24.1018 23.557 23.8284 23.8304C23.5551 24.1038 23.1119 24.1038 22.8385 23.8304L20.9718 21.9637C20.6985 21.6904 20.6985 21.2471 20.9718 20.9738Z"
              fill="#A6A6A6"
            />
          </svg>
          <input
            type="text"
            placeholder="Search here"
            className="h-full px-4 text-black bg-white-shade-2 focus:outline-none rounded-full focus:border-none"
          />
        </div>
        <div className="flex justify-center items-center w-16 h-16 border border-white-shade-4 rounded-full">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7995 9.59987C16.7995 9.15804 16.4413 8.79987 15.9995 8.79987C15.5576 8.79987 15.1995 9.15804 15.1995 9.59987V13.8665C15.1995 14.3084 15.5576 14.6665 15.9995 14.6665C16.4413 14.6665 16.7995 14.3084 16.7995 13.8665V9.59987Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.73285 12.7999C7.73285 8.23432 11.434 4.5332 15.9995 4.5332C20.5651 4.5332 24.2662 8.23432 24.2662 12.7999V13.5509C24.2662 14.2943 24.4862 15.021 24.8986 15.6396L26.1238 17.4773C27.5457 19.6103 26.4602 22.5095 23.987 23.184C23.181 23.4038 22.3681 23.5898 21.5506 23.7418L21.5486 23.7473C20.7283 25.936 18.536 27.4665 15.9995 27.4665C13.4629 27.4665 11.2706 25.936 10.4503 23.7473L10.4483 23.7418C9.63081 23.5898 8.81802 23.4038 8.01203 23.184C5.53887 22.5095 4.45331 19.6103 5.87528 17.4773L7.10046 15.6396C7.51281 15.021 7.73285 14.2943 7.73285 13.5509V12.7999ZM12.3979 24.0393C14.7904 24.3251 17.2085 24.3251 19.601 24.0393C18.8427 25.1289 17.5237 25.8665 15.9995 25.8665C14.4752 25.8665 13.1562 25.1289 12.3979 24.0393ZM15.9995 6.1332C12.3176 6.1332 9.33285 9.11797 9.33285 12.7999V13.5509C9.33285 14.6102 9.01931 15.6457 8.43174 16.5271L7.20656 18.3649C6.39038 19.5891 7.01347 21.2532 8.43302 21.6404C13.3869 22.9914 18.6122 22.9914 23.566 21.6404C24.9856 21.2532 25.6087 19.5891 24.7925 18.3649L23.5673 16.5271C22.9797 15.6457 22.6662 14.6102 22.6662 13.5509V12.7999C22.6662 9.11797 19.6814 6.1332 15.9995 6.1332Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
