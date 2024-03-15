"use client";

import { colors, theme } from "@/theme";
import { HeroPattern } from "../svgs/HeroPattern";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import { useState } from "react";
import Image from "next/image";
import { CgPlayButton } from "react-icons/cg";

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className=" bg-white max-w-[100vw] overflow-hidden container">
      <div className="relative grid lg:grid-cols-2 lg:gap-14 pb-20 xl:pt-12">
        {/* content div */}
        <div className="relative mx-auto max-w-2xl pt-32 pb-20 sm:pt-48 sm:pb-32 lg:py-56 ">
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

          <div className="relative md:text-left px-3 z-20 pt-10 md:pt-2">
            <div className="h-1 w-32 mb-4 md:mb-10 ">
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
              Customers can post new engagements, interact and transact with
              their approved suppliers, including the use of
              corporately-approved Statement of Work templates.
            </p>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn({
                delay: 0.7,
                duration: 0.5,
                direction: "down",
              })}
            >
              {/* md:items-center md:justify-center */}
              <div
                className="mt-10 flex 
             gap-x-2 md:gap-x-6"
              >
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

        {/*  */}
        {/* app-screenshot-landing.png */}

        <div className="relative my-auto cursor-pointer p-4 pb-44 lg:p-0 pt-28 lg:pt-0">
          <div className="relative">
            <div className="absolute xl:hidden z-30 -top-12 md:-top-24 xl:-top-32 lg:-left-8 xl:-left-24">
              <Image
                src="/ComicText.png"
                alt="comic-text"
                width={200}
                height={28}
              />
              <Image
                className="mt-2 ml-7"
                src="/ComicArrow.png"
                alt="comic-arrow"
                width={120}
                height={70}
              />
            </div>
            <div
              onClick={() => setShowVideo(true)}
              className="transform lg:translate-x-[80px] lg:scale-125 pt-10 scale-[1.15] sm:scale-100"
            >
              <Image
                className="-mr-20 rounded-md border-[5px] border-gray-200 "
                src="/app-screenshot-landing.png"
                alt="app-screenshot-landing"
                width={1200}
                height={800}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/20">
                {/* play button icon */}
                <CgPlayButton className=" text-white w-10 h-10 transform scale-110 translate-x-[1px]" />
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal */}
        {showVideo && (
          <motion.div
            initial="closed"
            className="fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-md z-50"
            animate={showVideo ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                display: "block",
                left: "50%",
              },
              closed: {
                opacity: 0,
                display: "none",
                left: "100%",
              },
            }}
          >
            <div
              className="absolute top-0 right-0 p-4 cursor-pointer bg-black/55 rounded-full"
              onClick={() => setShowVideo(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="p-[2%] md:p-[4%] h-full">
              <iframe
                src="https://www.loom.com/embed/b260db9428ca499892e6b471ab10c4ef?sid=2e4d3d78-0983-40ef-9677-40bc217709b4"
                // webkitallowfullscreen="true"
                // mozallowfullscreen="true"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
      {/* ^ end of grid wrapper */}
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
    </section>
  );
}
