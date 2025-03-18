import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ number, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className="w-72 h-36 flex flex-col items-center justify-center border-2 border-[#F149FF] rounded-2xl mt-44"
    >
      <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-2xl p-4">
        <h2 className="font-recoleta font-normal text-[46px] text-transparent bg-clip-text bg-gradient-to-r from-[#F149FF] to-[#7165FF]">
          {number}+
        </h2>
        <p className="font-poppins font-normal text-[24px]">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatsCard;