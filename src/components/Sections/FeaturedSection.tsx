"use client";

import { colors } from "@/theme";
import { Paragraph } from "../Paragraph";
import { SmallHeader } from "../SmallHeader";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

export function FeaturedSection() {
  return (
    <section className="pb-4 md:pb-12 lg:pb-44 pt-6">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            {/*  */}

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn({ delay: 0 })}
              className="absolute z-10 -top-5 -left-5 "
            >
              <svg
                className=" w-32 h-32 lg:w-60 lg:h-60  "
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
            </motion.div>
            <div className="relative z-20 h-64 sm:h-80 lg:h-full">
              {/* <img
                alt="House"
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 object-cover"
              /> */}
              <img
                className="lg:absolute h-full lg:h-[unset] lg:w-full "
                src="/scrum_board_updated.svg"
                alt="scrum_board_updated"
              />
            </div>
          </div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeIn({ delay: 0.6, duration: 1, direction: "down" })}
          >
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <SmallHeader>Meet Indie Tech</SmallHeader>

                <Paragraph>
                  Indie Tech is the first automated consulting management system
                  uniting consultants and clients. This innovative platform will
                  manage contract deliverables and supplier risk while
                  consultants and clients connect towards the same goals.
                </Paragraph>

                <a
                  href="#contact-us"
                  className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
