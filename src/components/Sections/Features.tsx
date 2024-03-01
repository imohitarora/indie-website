"use client";

import { FaStamp } from "react-icons/fa";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { FaListCheck, FaRankingStar } from "react-icons/fa6";
import { Variants, motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

export function Features() {
  const features = [
    {
      heading: "Comprehensive Consultant Management",
      text: "Manage and engage consultants across all divisions with ease, from consulting companies to independent contractors.",
      icon: FaListCheck,
    },
    {
      heading: "Performance Tracking",
      text: "Gain a deep understanding of consultant performance through our robust tracking and reporting features.",
      icon: FaRankingStar,
    },
    {
      heading: "Engage with Approved Suppliers",
      text: "Post new engagements, interact, and transact seamlessly with your approved suppliers, using corporately-approved Statement of Work templates.",
      icon: FaStamp,
    },
  ];

  return (
    <SectionWrapper>
      <div className="relative z-20">
        <div id="features" className="block max-w-lg text-left">
          <SmallHeader>Effortless Consultant Management Solutions</SmallHeader>
          {/* <p className="mt-4 pb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p> */}
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            return (
              <motion.div
                key={"features-" + index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={fadeIn({ delay: index * 0.3, direction: "down" })}
              >
                <div className="block rounded-lg min-h-full border bg-white border-primary-main p-8 shadow-effect shadow-primary-main/20  ">
                  {/* <item.icon className="h-9 w-9 text-primary-main" /> */}

                  <h2 className="mt-4 pb-4 text-xl font-bold ">
                    <span className="text-primary-main text-2xl inline-block font-bold">
                      {/* arrow */}
                      {">"}
                    </span>{" "}
                    {item.heading}
                  </h2>

                  <p className="mt-auto pt-1 text-sm ">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/bg-grid.svg)",
          backgroundSize: "20px",
          boxShadow: "rgb(255, 255, 255) 0px 30px 80px 90px inset",
        }}
        className="bg-repeat bg-cover h-full w-full absolute top-0 left-0 z-0"
      />
    </SectionWrapper>
  );
}
