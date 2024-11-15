"use client";

import { colors, theme } from "@/theme";
import { HeroPattern } from "../svgs/HeroPattern";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { Button } from "@/components/Button";
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function Hero() {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false);

  function closePopup() {
    setShowPopup(false);
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className=" bg-white max-w-[100vw] overflow-hidden container">
      <div className="relative grid lg:grid-cols-2 lg:gap-14 pb-20 xl:pt-12">
        {/* content div */}
        <div className="relative mx-auto max-w-2xl pt-32 pb-20 sm:pt-48 sm:pb-32 lg:py-56 ">
          {/* HIDDEN FOR NOW */}
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-primary">
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
                className={`bg-primary h-1`}
              />
            </div>
            <h1 className=" text-3xl md:text-4xl font-bold tracking-tight sm:text-6xl">
              Collaborate Smart. Procure Seamlessly. <span style={{ background: "linear-gradient(to right, #1A8A98, #47A1AC)", WebkitBackgroundClip: "text", color: "transparent" }}>
                Deliver Results.
              </span>
            </h1>

            <p className="mt-6 md:text-lg leading-8 text-gray-600">
              Indie Tech&apos;s AI-powered
              Enterprise Collaboration Hubs
              streamline consulting lifecycle management, optimize performance, and drive growth. Unlock the potential of smarter, data-driven decisions.
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
              <div className="mt-10 flex gap-x-2 md:gap-x-6">
                <Button
                  target="_blank"
                  className="mt-12"
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
        {showPopup && (
          <div
            className="fixed z-[100] pointer inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setShowPopup(false)}
          >
            <div className="relative mx-auto">
              <iframe
                className="rounded-md border-[5px] border-gray-200 w-[70vw] h-[43.9vw] "
                src="https://www.youtube.com/embed/qpf5PGOK6nY?si=wpcX9mJIdL2pRlYC&autoplay=1"
                title="Indie Tech Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}
        {/*  */}
        <div className="relative my-auto cursor-pointer p-4 pb-44 lg:p-0 pt-28 lg:pt-0">
          <div className="relative flex justify-center">
            <div className="absolute z-30 -top-12 md:-top-24 xl:-top-14 lg:-left-8 xl:-left-0">
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
            <div className="relative mx-auto lg:-mr-20 xl:mr-10 2xl:mr-28">
              <Image
                className="rounded-md border-[5px] border-gray-200"
                width={1360}
                height={818}
                src="/app-screenshot-landing-resized.png"
                alt="app screenshot of the search section allowing users to search for constants & engagements"
                onClick={() => setShowPopup(true)}
              />
              <MdOutlinePlayCircleFilled
                onClick={() => setShowPopup(true)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "3rem",
                  color: colors.primary.main,
                }}
              />
              {/* <iframe
                className="rounded-md border-[5px] border-gray-200 h-[300px] sm:h-[500px] w-full min-w-[340px] lg:w-[780px] xl:w-[880px]"
                src="https://www.youtube.com/embed/qpf5PGOK6nY?si=wpcX9mJIdL2pRlYC"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
      {/* down arrow */}
      <div className="flex justify-center -mt-[100px] mb-10 ">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
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
