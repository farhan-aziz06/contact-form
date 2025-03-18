import React from "react";
const Headline = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-center align-middle font-recoleta font-normal text-[98px] leading-[110%] tracking-[-3%] fade-in-zoom">
        Design.{" "}
        <span className="bg-gradient-to-r from-[#F149FF] to-[#7165FF] text-transparent bg-clip-text">
          Develop
        </span>
        . Deploy
      </h1>

      <p className="text-center w-[685px] text-[#000000AD] font-poppins font-normal text-[17px]">
        We’re a modern app-building company that creates apps that your
        customers love and that evolve with your business.
      </p>
      <div className="flex w-92 justify-evenly items-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#F149FF] to-[#7165FF] text-white font-semibold text-[16px] relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-tr from-[#7165FF] to-[#F149FF] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          <span className="relative z-10">Contact Us</span>
        </button>
        <button className="px-6 py-3 rounded-lg text-[#7165FF] border-2 border-[#7165FF] font-semibold text-[16px] transition-all duration-300">
          Book Meeting
        </button>
      </div>
    </div>
  );
};

export default Headline;