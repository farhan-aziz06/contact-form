import React from "react";
const {
  appIcon,
  uiuxIcon,
  designIcon,
  webisteIcon,
  leftArrow,
  rightArrow,
} = require("@/components/icons");

const Icons = () => {
  return (
    <div className="">
      <div className="flex justify-start md:justify-center w-[350px] md:w-[676px]">
        {appIcon}
        {uiuxIcon}
        {designIcon}
        {webisteIcon}
      </div>
      <div className="flex items-end justify-evenly">
        {leftArrow}
        <h1 className="text-center font-poppins font-normal text-[28px] md:text-[35px] leading-[0%]">
          We help you
        </h1>
        {rightArrow}
      </div>
    </div>
  );
};

export default Icons;
