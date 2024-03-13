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
        <SmallHeader className="max-w-lg pb-8">{title}</SmallHeader>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 ">
            {contents.map((feature, index) => {
              return (
                <motion.div
                  key={"hiw-features-" + index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={fadeIn({ delay: index * 0.3 })}
                  className="block border-l-2 border-primary-main pl-4 "
                >
                  <p className="pb-1 font-bold ">
                    {feature.title}. &nbsp;
                    <span className="font-normal ">{feature.description}</span>
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative my-auto mt-10 lg:mt-1 lg:-translate-y-16">
            <img
              className=" w-100 md:h-full mx-auto md:mx-[unset] md:ml-auto "
              src="/undraw_to_do_list_re_9nt7.svg"
              alt="How Indie Tech Works for Your Enterprise"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
