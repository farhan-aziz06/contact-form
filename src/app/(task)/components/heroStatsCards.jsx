import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ number, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className="w-32 md:w-64 md:h-44 h-20 lg:w-52 xl:w-72 lg:h-36 flex flex-col items-center justify-center border-2 border-[#F149FF] rounded-2xl lg:mt-44"
    >
      <div className="flex flex-col items-center justify-center md:w-full md:h-full bg-white rounded-2xl md:p-4">
        <h2 className="font-recoleta font-normal text-2xl md:text-[46px] text-transparent bg-clip-text bg-gradient-to-r from-[#F149FF] to-[#7165FF]">
          {number}+
        </h2>
        <p className="font-poppins font-normal text-sm md:text-xl xl:text-[24px] text-nowrap">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatsCard;