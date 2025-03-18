"use client";
import React from "react";
import Image1 from "../../../../public/image-1.png";
import Home from "../../../../public/Home.png";
import Image2 from "../../../../public/image-2.png";
import Image3 from "../../../../public/allVistor.png";
import Gradient from "../../../../public/Gradient.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    deals,
    hitRate,
    line,
  } from "@/components/icons";
  
import Image from "next/image";
const Cards = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,
      });
    }, []);
    return (
      <div className="flex">
        <div className="flex flex-col items-center mt-10">
          <div className="">
            {/* Div 1 */}
            <div
              className="flex justify-evenly items-center w-[504px] rounded-xl shadow-[0px_4.52px_29.4px_0px_rgba(0,0,0,0.05)] py-5 bg-[#FFFFFF] "
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between gap-4">
                {hitRate}
                <div className="flex flex-col">
                  <h3 className="font-outfit font-semibold text-[16.79px] leading-[100%] tracking-[0.07px] text-[#171725]">
                    68%
                  </h3>
                  <p className="font-outfit font-normal text-[9.79px] leading-[100%] tracking-[0.07px] text-[#696974]">
                    Hit Rate this year
                  </p>
                </div>
              </div>
              <div>{line}</div>
              <div className="flex items-center justify-between gap-4">
                {deals}
                <div className="flex flex-col">
                  <h3 className="font-outfit font-semibold text-[16.79px] leading-[100%] tracking-[0.07px] text-[#171725]">
                    76%
                  </h3>
                  <p className="font-outfit font-normal text-[9.79px] leading-[100%] tracking-[0.07px] text-[#696974]">
                    Deal this year
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Div 2 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Image src={Image1} alt="image-1" />
          </div>
        </div>
        <div className="animate-slight-slide-up">
          <Image src={Home} alt="image-1" />
        </div>
        <div className=" flex flex-col justify-around">
          <div data-aos="fade-up">
            {/* className="animate-slide-up" */}
            <Image src={Image2} alt="image-2" />
          </div>
  
          <div className="flex justify-evenly items-center -mt-20">
            <div data-aos="zoom-in-left">
              <Image src={Gradient} alt="gradient" />
            </div>
            <div data-aos="fade-down-left">
              {/*  className="animate-from-top-right" */}
              <Image src={Image3} alt="gradient" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Cards