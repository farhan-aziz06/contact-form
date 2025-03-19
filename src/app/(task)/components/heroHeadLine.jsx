const Headline = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:px-10">
      <h1 className="text-center align-middle font-recoleta font-normal text-[28px] text-nowrap md:text-[64px] lg:text-[80px] xl:text-[98px] fade-in-zoom mt-4 pl-1 md:pl-0">
        Design.{" "}
        <span className="bg-gradient-to-r from-[#F149FF] to-[#7165FF] text-transparent bg-clip-text">
          Develop
        </span>
        . Deploy
      </h1>
      <p className="text-center text-[#000000AD] font-poppins font-normal text-sm md:text-[17px] w-[336px] md:w-[570px] lg:w-[785px] px-4">
        We’re a modern app-building company that creates apps that your
        customers love and that evolve with your business.
      </p>

      <div className="flex flex-row gap-4 justify-center items-center md:w-92 pl-1 md:pl-0">
        <button className="px-10 py-3.5 md:py-4.5 rounded-lg bg-gradient-to-r from-[#F149FF] to-[#7165FF] text-white font-semibold text-[12px] md:text-[16px] relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-tr from-[#7165FF] to-[#F149FF] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          <span className="relative z-10 text-nowrap">Contact Us</span>
        </button>

        <button className=" px-8 py-3 md:py-4 rounded-lg text-nowrap text-[#7165FF] border-2 border-[#7165FF] font-semibold text-[12px] md:text-[16px] transition-all duration-300">
          Book Meeting
        </button>
      </div>
    </div>
  );
};

export default Headline;
