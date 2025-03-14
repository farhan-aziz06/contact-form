import React from "react";
import Info from "./components/info";
import ContactForm from "./components/contact";

const page = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-12 lg:px-8 xl:px-8 py-4">
      <div className="py-4 text-center">
        <h1 className="font-recoleta md:p-8 text-3xl md:text-5xl font-normal">
          Ready to <span className="text-[#DF56FE]">start</span> your{" "}
          <span className="text-[#5956E9]">Flutter journey</span>?
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-4 xl:gap-0 w-full justify-center">
        <Info />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
