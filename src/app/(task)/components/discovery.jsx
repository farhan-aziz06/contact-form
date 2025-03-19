"use client";
import {
  backendIcon,
  deploymentIcon,
  designIcon,
  discoveryIcon,
  frontendIcon,
  maintenanceIcon,
  researchIcon,
  UiuxIcon,
} from "@/components/icons";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const steps = [
  {
    title: "Discovery Call",
    description:
      "We start with a friendly discovery call to understand your vision, goals, and challenges. This step lays the foundation for a clear and focused roadmap, ensuring we’re aligned with your objectives from day one.",
    images: ["/dis-1.png", "/dis-2.png"],
    icon: discoveryIcon,
  },
  {
    title: "Research",
    description:
      "Our team dives deep into market research and user analysis to uncover insights that shape your app. We identify key opportunities and craft a strategy to ensure your app stands out in a competitive landscape.",
    images: ["/dis-3.png", "/dis-4.png"],
    icon: researchIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "With your vision in mind, we create intuitive, eye-catching designs that deliver exceptional user experiences. Every detail is meticulously crafted to delight users while ensuring functionality at the forefront.",
    images: ["/dis-5.png", "/dis-6.png"],
    icon: UiuxIcon,
  },
  {
    title: "Front-End Development",
    description:
      "Our developers bring your designs to life with pixel-perfect precision. Using proven technologies and best practices, we craft high-performance, user-friendly interfaces.",
    images: ["/dis-7.png", "/dis-8.png"],
    icon: frontendIcon,
  },
  {
    title: "Back-End Development",
    description:
      "Behind the scenes, we build a robust and scalable back-end that powers your app. From APIs to database management, we ensure your app operates smoothly and efficiently while scaling with your business.",
    images: ["/dis-9.png", "/dis-10.png"],
    icon: backendIcon,
  },
  {
    title: "Deployment",
    description:
      "Once the app is perfected, we handle the deployment process, ensuring it goes live smoothly. We monitor and maintain your app for peak performance post-launch.",
    images: ["/dis-11.png", "/dis-12.png"],
    icon: deploymentIcon,
  },
  {
    title: "Maintenance",
    description:
      "Our support doesn't end after launch. We offer ongoing maintenance and updates to keep your app performing optimally and aligned with evolving user needs and industry standards.",
    images: ["/dis-13.png", "/dis-12.png"],
    icon: maintenanceIcon,
  },
];

const Discovery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="py-12 md:px-6 max-w-5xl mx-auto flex flex-col items-center gap-7">
      <h2 className="font-poppins font-normal text-lg md:text-3xl text-center mb-4">
        How we do it?
      </h2>
      <h3 className="font-recoleta font-normal text-3xl md:text-5xl text-center mb-14 lg:[593px] xl:w-[1080px]">
        World-class apps on demand, with our{" "}
        <span className="text-purple-500">process!</span>
      </h3>
      <div className="relative xl:w-[1240px]">
        <div className="absolute left-[28px] top-0 w-1 h-full bg-[#5956E9]"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex gap-8 items-start mb-12">
            <div className="relative flex flex-col items-center gap-2">
              <div className="absolute top-5 left-1 -translate-y-1/2 bg-[#E9E8FF] rounded-full p-3 mr-3">
                {step.icon}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between md:items-start w-full gap-2 md:gap-7">
              <h4 className="font-recoleta font-normal pl-10 text-2xl md:text-4xl max-w-[300px] md:w-full text-[#12141D]">
                {step.title}
              </h4>
              <div className="flex flex-col min-w-[251px] lg:w-[600px] pl-10 lg:pl-0 px-3 lg:px-0">
                <p className="mb-4 font-poppins font-normal">
                  {step.description}
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {step.images.slice(0, 1).map((image, idx) => (
                    <Image
                      key={idx}
                      src={image}
                      width={364}
                      height={295}
                      alt={step.title}
                      className="w-[364px] h-[295px] rounded-[10px] object-cover block sm:hidden"
                    />
                  ))}
                  {step.images.map((image, idx) => (
                    <Image
                      key={idx}
                      src={image}
                      width={364}
                      height={295}
                      alt={step.title}
                      className="w-[364px] h-[295px] rounded-[10px] object-cover hidden sm:block"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;
