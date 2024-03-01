"use client";

import Image from "next/image";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { colors } from "@/theme";
import { fadeIn } from "@/lib/animation";
import { motion } from "framer-motion";

const features = [
  {
    heading: "Deploy Your Private Ecosystem",
    text: "Create a secure and exclusive environment by inviting your professional services suppliers to join and add their consultants.",
  },
  {
    heading: "Find Consultants or Post Engagements",
    text: "Explore consultants within your network or post engagements to receive proposals from qualified professionals.",
  },
  {
    heading: "Seamlessly Engage and Transact",
    text: "Interact and transact directly with your approved suppliers for a seamless collaboration experience.",
  },
  {
    heading: "Create Contracts from Procurement Approved Templates",
    text: "Utilize our corporate-approved templates to effortlessly generate contracts that meet procurement standards.",
  },
  {
    heading: "Track Performance Insights",
    text: "Utilize our tracking and reporting features to gain actionable insights into consultant performance.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <div className="container mx-auto">
        <SmallHeader className="max-w-lg pb-8">
          How Indie Tech Works for Your Enterprise
        </SmallHeader>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 ">
            {features.map((feature, index) => {
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
                    {feature.heading}. &nbsp;
                    <span className="font-normal ">{feature.text}</span>
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
            {/* <Image
              alt=""
              src="/pexels-harrison-haines-5922523.jpg"
              width={500}
              height={500}
              className="relative mx-auto z-20 rounded h-[500px] object-cover"
            /> */}
            {/* <div className="absolute z-10 -top-15 -left-10 ">
              <svg
                className="w-60 h-60  "
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill={colors.primary.main}
                  stroke={colors.primary.main}
                  strokeWidth="2"
                  fill="none"
                  d="M48.9,-58.7C63.7,-45.8,76.3,-30.8,76.7,-15.5C77.1,-0.1,65.4,15.4,53.6,26.4C41.8,37.5,30.1,44,18.1,47.3C6.1,50.6,-6.2,50.8,-23.4,50.5C-40.6,50.3,-62.7,49.6,-74.5,38.5C-86.4,27.4,-88,5.8,-82.6,-12.8C-77.1,-31.3,-64.7,-46.8,-49.8,-59.7C-34.9,-72.6,-17.4,-82.8,-0.2,-82.6C17,-82.4,34.1,-71.6,48.9,-58.7Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="absolute z-10 -bottom-[90px] -right-5 ">
              <svg
                className="w-60 h-60 "
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill={colors.primary.main}
                  stroke={colors.primary.main}
                  strokeWidth="2"
                  fill="none"
                  d="M48.9,-58.7C63.7,-45.8,76.3,-30.8,76.7,-15.5C77.1,-0.1,65.4,15.4,53.6,26.4C41.8,37.5,30.1,44,18.1,47.3C6.1,50.6,-6.2,50.8,-23.4,50.5C-40.6,50.3,-62.7,49.6,-74.5,38.5C-86.4,27.4,-88,5.8,-82.6,-12.8C-77.1,-31.3,-64.7,-46.8,-49.8,-59.7C-34.9,-72.6,-17.4,-82.8,-0.2,-82.6C17,-82.4,34.1,-71.6,48.9,-58.7Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
