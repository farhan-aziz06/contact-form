"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Image1 from "../../../../public/image2Updates.png";
import Home from "../../../../public/Home.png";
import Image2 from "../../../../public/imageUpdated.png";
import Image3 from "../../../../public/allVistor.png";
import Gradient from "../../../../public/Gradient.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { deals, hitRate, line } from "@/components/icons";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-0 mt-30 xl:mx-2 xl:w-[1344px] overflow-scroll md:overflow-hidden">
      {/* Div 1 */}
      <div className="flex flex-col items-center xl:mt-25 lg:mt-15 ">
        <div
          className="w-[400px] md:w-[500px] xl:ml-20 rounded-xl shadow py-5 bg-white lg:mr-25 xl:mr-0 md:mr-30 mr-80"
          data-aos="fade-up" 
        >
          <div className="flex items-center justify-around md:justify-evenly gap-4">
            <div className="flex items-center gap-4">
              {hitRate}
              <div className="flex flex-col">
                <h3 className="font-outfit font-semibold text-lg text-gray-800">
                  68%
                </h3>
                <p className="font-outfit text-xs text-gray-500">
                  Hit Rate this year    
                </p>
              </div>
            </div>
            <div>{line}</div>
            <div className="flex items-center gap-4">
              {deals}
              <div className="flex flex-col">
                <h3 className="font-outfit font-semibold text-sm md:text-lg text-gray-800">
                  76%
                </h3>
                <p className="font-outfit text-xs text-gray-500 text-nowrap">
                  Deal this year
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="mt-5 xl:ml-20 md:mr-30 lg:mr-0 mr-90">
          <Image
            src={Image1}
            alt="image-1"
            className="w-full h-auto min-w-[550px]"
          />
        </div>
      </div>

      {/* Div 2 */}
    
        <div
          className="self-center mx-auto"
          data-aos="fade-up"
        >
          <Image src={Home} alt="home-image"  className="w-full h-auto min-w-[200px] md:w-[250px] xl:w-[350px] lg:w-[300px] md:ml-20 mx-1 md:mb-0 mb-50"/>
        </div>

      {/* Div 3 */}
      <div className="mx-2">
        <div className="flex flex-col justify-evenly gap-4 xl:mt-10">
          <div data-aos="fade-up">
            <Image
              src={Image2}
              alt="image-2"
              className="w-full h-auto min-w-[550px] md:mr-20 ml-10 md:ml-14 lg:ml-0 "
            />
          </div>
          <div className="hidden md:flex justify-center items-center gap-4 -mt-10 md:ml-20">
            <div data-aos="zoom-in-left">
              <Image src={Gradient} alt="gradient" className="w-[200px] lg:w-[250px] h-auto" />
            </div>
            <div data-aos="fade-down-left">
              <Image src={Image3} alt="visitor-image" className="w-[300px] lg:w-[500px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
