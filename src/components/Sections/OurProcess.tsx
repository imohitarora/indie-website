"use client";
//
// UNUSED COMPONENT
// ------------------
import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

const _contents = [
  {
    title: "Discuss",
    description:
      "We believe in open communication and collaboration. We start by discussing your goals, challenges, and requirements to gain a deep understanding of your business.",
  },
  {
    title: "Plan",
    description:
      "Our team will work closely with you to create a comprehensive plan that outlines the strategies and steps needed to achieve your objectives.",
  },
  {
    title: "Execute",
    description:
      "With the plan in place, we execute the strategies and implement the necessary solutions to drive your business forward.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "We believe in empowering our clients with knowledge. We provide workshops, facilitation, and documentation to ensure a smooth transition of the project to your team.",
  },
];

export function OurProcess({
  grey,
  contents,
}: {
  grey?: boolean;
  contents?: { title: string; description: string }[];
}) {
  return (
    <SectionWrapper grey={grey}>
      <div
        style={{
          backgroundImage: "url(/bg-grid.svg)",
          backgroundSize: "20px",
          boxShadow: "rgb(255, 255, 255) 0px 30px 20px 60px inset",
        }}
        className="bg-repeat bg-cover h-full w-full absolute top-0 left-0 z-0"
      />
      <SmallHeader className="pb-6 relative z-20">Our Process</SmallHeader>
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {(contents || _contents).map(({ title, description }, index) => {
          return (
            <motion.div
              key={"features-" + index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn({ delay: index * 0.3, direction: "left" })}
            >
              <div className="block rounded-lg min-h-full border bg-white border-primary p-8 shadow-effect shadow-primary/20  ">
                {/* <div className="p-8 bg-white text-left border-[1px] border-gray-300 rounded"> */}
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary min-h-16">
                  {title}
                </h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
