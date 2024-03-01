"use client";

import { colors, theme } from "@/theme";
import { HeroPattern } from "../svgs/HeroPattern";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

export function Hero() {
  return (
    <div className="relative bg-white max-w-[100vw] overflow-hidden">
      {/* TOP SVG */}
      <HeroPattern
        className="absolute rotate-90 -translate-y-1/2 md:hidden z-[0] origin-[center]"
        color={colors.primary.main}
        flip
      />

      {/* SVG */}
      <HeroPattern
        className="absolute hidden md:block z-[0] top-[60px] left-[-20%] lg:left-[-10%] scale-[0.6] 2xl:left-0 lg:scale-[0.7] xl:scale-[0.8] origin-[top_left]"
        color={colors.primary.main}
        flip
      />
      {/* -- */}
      <HeroPattern
        className="absolute hidden md:block z-[0] bottom-0 right-[-20%] lg:right-[-10%] scale-[0.6] lg:scale-[0.7] xl:scale-[0.8] 2xl:right-0 origin-[bottom_right]"
        color={colors.primary.main}
      />
      {/*  */}
      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
        {/* background fade/blur */}
        <div className="absolute bg-white rotate-[20deg] w-full h-[50%] blur-2xl" />
        {/* HIDDEN FOR NOW */}
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-primary-main">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div> */}

        <div className="relative md:text-center px-3 z-20 pt-10 md:pt-2">
          <div className="h-1 w-32 hidden md:block mx-auto mb-10 ">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={{
                offscreen: {
                  width: 0,
                },
                onscreen: {
                  width: "100%",
                },
              }}
              className={`bg-primary-main h-1`}
            />
          </div>
          <h1 className=" text-3xl md:text-4xl font-bold tracking-tight sm:text-6xl">
            Enterprise Consultant Management
          </h1>

          <p className="mt-6 md:text-lg leading-8 text-gray-600">
            Our consultant platform helps enterprises manage and engage the
            consultants working for them across all divisions, from consulting
            companies to independent contractors. We track and report on the
            performance of consultants in a consistent and actionable manner.
            Customers can post new engagements, interact and transact with their
            approved suppliers, including the use of corporately-approved
            Statement of Work templates.
          </p>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeIn({ delay: 0.7, duration: 0.5, direction: "down" })}
          >
            <div className="mt-10 flex md:items-center md:justify-center gap-x-2 md:gap-x-6">
              <Button
                target="_blank"
                href={
                  "https://outlook.office365.com/owa/calendar/IndieTechWebsiteLink@indietech.ai/bookings/"
                }
              >
                Book a call
              </Button>
              {/* <Button href={"#features"} accent>
              Learn more <span aria-hidden="true">→</span>
            </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
      {/* down arrow */}
      <div className="flex justify-center -mt-[100px] mb-10 ">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary-main"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
