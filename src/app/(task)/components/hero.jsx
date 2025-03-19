"use client";
import React from "react";
import Image from "next/image";;
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Icons from "./heroIcons";
import Headline from "./heroHeadLine";
import StatsCard from "./heroStatsCards";
import Cards from "./heroCards";


const logos = [
  "/image-9.png",
  "/image-10.png",
  "/image-11.png",
  "/image-9.png",
  "/image-10.png",
  "/image-11.png",
  "/image-9.png",
  "/image-10.png",
  "/image-11.png",
];

const CompanyData = () => {
  return (
    <div className="flex flex-col items-center justify-center md:text-nowrap md:py-10 px-4 gap-3 md:gap-7 mt-10 md:mt-14">
      {" "}
      {/* Add padding here */}
      <h2 className="font-recoleta font-normal text-sm md:text-[48px] text-center">
        We have <span className="text-[#F149FF]">worked</span> with
      </h2>
      <div className="w-full overflow-hidden md:py-6">
        {" "}
        {/* Add padding to the slider container */}
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-250%" }}
          transition={{
            repeat: Infinity,
            duration: 25, // Slower for a smoother slide
            ease: "linear",
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[100px] flex items-center justify-center opacity-60"
            >
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={180}
                height={100}
                className="h-full object-contain grayscale"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless sliding */}
          {logos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="min-w-[200px] h-[100px] flex items-center justify-center opacity-60"
            >
              <Image
                src={logo}
                alt={`dup-logo-${index}`}
                width={180}
                height={100}
                className="h-full object-contain grayscale"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const statsData = [
  { number: "300", label: "Happy Clients" },
  { number: "10", label: "Years on market" },
  { number: "35", label: "Apps" },
  { number: "25", label: "Skillful Talent" },
];
const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icons />
      <Headline />
      <Cards />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 xl:mt-10 lg:px-10">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            number={stat.number}
            label={stat.label}
            index={index}
          />
        ))}
      </div>
      <div className="w-[300px] md:w-[700px] lg:w-[950px] xl:w-[1240px]">
        <CompanyData />
      </div>
    </div>
  );
};

export default Hero;
