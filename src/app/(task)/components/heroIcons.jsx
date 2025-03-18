import React from "react";
const { appIcon, uiuxIcon, designIcon, webisteIcon, leftArrow, rightArrow } = require("@/components/icons");

const Icons = () => {
  return (
    <div className="">
      <div className="flex">
        {appIcon}
        {uiuxIcon}
        {designIcon}
        {webisteIcon}
      </div>
      <div className="flex justify-evenly items-end">
        {leftArrow}
        <h1 className="text-center font-poppins font-normal text-[35px] leading-[110%] tracking-[0%]">
          We help you
        </h1>
        {rightArrow}
      </div>
    </div>
  );
};

export default Icons;