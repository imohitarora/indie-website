"use client";

import Image from "next/image";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { colors } from "@/theme";
import { fadeIn } from "@/lib/animation";
import { motion } from "framer-motion";

export function HowItWorks({
  contents,
  title,
}: {
  contents: { title: string; description: string }[];
  title: string;
}) {
  return (
    <SectionWrapper>
      <div className="container mx-auto">
        <SmallHeader className="max-w-lg pb-24">{title}</SmallHeader>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative my-auto mt-10 lg:mt-1 lg:-translate-y-16 ">
            <img
              className="relative w-100 md:h-full mx-auto md:mx-[unset] md:ml-auto z-10"
              // src="/undraw_to_do_list_re_9nt7.svg"
              src="FloatingSearch.png"
              alt="How Indie Tech Works for Your Enterprise"
            />
            <div className="absolute w-[20%] h-[20%] top-[0%] left-[10%] blur-lg z-0 opacity-50">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={colors.primary.main}
                  d="M47.1,-63C52.5,-51.6,42.5,-28.7,41.1,-11C39.7,6.6,46.9,18.9,43.1,24.3C39.3,29.7,24.5,28.2,11.5,34.1C-1.6,40,-12.9,53.3,-28.7,57.1C-44.5,60.8,-64.8,55,-74.6,41.4C-84.4,27.9,-83.7,6.6,-73.7,-6.6C-63.7,-19.8,-44.6,-25,-30.7,-35C-16.9,-44.9,-8.5,-59.6,6.2,-67C20.9,-74.3,41.7,-74.5,47.1,-63Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="absolute w-[100%] h-[100%] bottom-[20%] left-[10%] blur-3xl z-0 opacity-50">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={colors.primary.main}
                  d="M47.1,-63C52.5,-51.6,42.5,-28.7,41.1,-11C39.7,6.6,46.9,18.9,43.1,24.3C39.3,29.7,24.5,28.2,11.5,34.1C-1.6,40,-12.9,53.3,-28.7,57.1C-44.5,60.8,-64.8,55,-74.6,41.4C-84.4,27.9,-83.7,6.6,-73.7,-6.6C-63.7,-19.8,-44.6,-25,-30.7,-35C-16.9,-44.9,-8.5,-59.6,6.2,-67C20.9,-74.3,41.7,-74.5,47.1,-63Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            {contents.map((feature, index) => {
              return (
                <motion.div
                  key={"hiw-features-" + index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={fadeIn({ delay: index * 0.3 })}
                  className="block border-l-2 border-primary pl-4 "
                >
                  <p className="pb-1 font-bold ">
                    {feature.title}. &nbsp;
                    <span className="font-normal ">{feature.description}</span>
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
