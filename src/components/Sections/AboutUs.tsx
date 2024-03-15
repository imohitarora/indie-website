"use client";
import React, { useState } from "react";
import { FaLightbulb, FaClipboardCheck, FaBook } from "react-icons/fa";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import { TypeWriter } from "../TypeWriter";
import { CenterBlock } from "./CenterBlock";
import { Button } from "../Button";

/*
Core Values:
Trustworthy: At Indie Tech, trust is the foundation of every relationship. We are your reliable partner in transforming the consulting experience, committed to transparency and integrity.
Transparent: Full transparency is the bedrock of our platform. We ensure clarity in contractual obligations for all parties involved, fostering an environment of openness and honesty.
Community: We believe in the power of community. Continuous support in our environment helps everyone achieve their objectives, creating a thriving ecosystem for collaboration and growth.
Excellence: Striving for excellence is our commitment in all business disciplines. We aim to promote success and fulfillment for every user on our platform.
Integrity: Guided by honesty, we ensure transparent communication and actions at all times. Integrity is not just a value for us; it's the way we conduct business.
Empowerment: Our platform empowers individuals to be thoughtful, communicative, and progressive. We provide the tools and support needed for personal and professional growth, fostering an environment where every consultant can thrive.
Join Us in Redefining Consulting: At Indie Tech, we invite enterprises, consulting firms, and independent consultants to join us in shaping the future of consulting. Whether you're seeking efficient consultant management, growth opportunities, or unparalleled career advancement, we're here to redefine collaboration, elevate careers, and unlock new possibilities.
*/

const values = [
  {
    title: "Trustworthy",
    description:
      "At Indie Tech, trust is the foundation of every relationship. We are your reliable partner in transforming the consulting experience, committed to transparency and integrity.",
  },
  {
    title: "Transparent",
    description:
      "Full transparency is the bedrock of our platform. We ensure clarity in contractual obligations for all parties involved, fostering an environment of openness and honesty.",
  },
  {
    title: "Community",
    description:
      "We believe in the power of community. Continuous support in our environment helps everyone achieve their objectives, creating a thriving ecosystem for collaboration and growth.",
  },
  {
    title: "Excellence",
    description:
      "Striving for excellence is our commitment in all business disciplines. We aim to promote success and fulfillment for every user on our platform.",
  },
  {
    title: "Integrity",
    description:
      "Guided by honesty, we ensure transparent communication and actions at all times. Integrity is not just a value for us; it's the way we conduct business.",
  },
  {
    title: "Empowerment",
    description:
      "Our platform empowers individuals to be thoughtful, communicative, and progressive. We provide the tools and support needed for personal and professional growth, fostering an environment where every consultant can thrive.",
  },
];

export function AboutUs() {
  return (
    <>
      <SectionWrapper>
        <div className="grid pt-20 pb-12 grid-cols-1 gap-14 lg:grid-cols-2 mx-auto ">
          <div className="max-w-2xl lg:mx-0 ">
            <SmallHeader>Our Vision</SmallHeader>
            <p className={`text-3xl leading-10 text-gray-600`}>
              To be the catalyst for a global consulting community, where trust,
              transparency, and empowerment drive every interaction.
            </p>
          </div>
          <div className="flex flex-col justify-end ">
            {/* <TypeWriter
              text={`
               Welcome to Indie Tech, where innovative solutions meet the heart of collaboration in the consulting landscape.
               Our platform is the intersection of cutting-edge technology, seamless processes, and a commitment to transforming the consulting
               experience for enterprises, consulting firms, and independent consultants.
              `}
            /> */}
          </div>
          <p>
            Welcome to Indie Tech, where innovative solutions meet the heart of
            collaboration in the consulting landscape. Our platform is the
            intersection of cutting-edge technology, seamless processes, and a
            commitment to transforming the consulting experience for
            enterprises, consulting firms, and independent consultants.
          </p>
        </div>
      </SectionWrapper>
      {/*  */}
      {/* <CenterBlock
        title={"About Us "}
        description={`
          Welcome to Indie Tech, where innovative solutions meet the heart of collaboration in the consulting landscape.
          Our platform is the intersection of cutting-edge technology, seamless processes, and a commitment to transforming the consulting
          experience for enterprises, consulting firms, and independent consultants.`}
      /> */}
      {/*  */}
      <SectionWrapper className=" -translate-y-28">
        <SmallHeader className="pt-6">
          Our Core Values{" "}
          {/* <span className="text-primary-main">
            <FaLightbulb className="inline" />
          </span> */}
        </SmallHeader>
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
          {values.map((value, index) => (
            <motion.div
              key={"features-" + index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn({ delay: index * 0.2, direction: "left" })}
              className="bg-white p-4 rounded-md border-[1px] border-primary-main shadow-effect shadow-primary-main/20"
            >
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
        <div
          style={{
            backgroundImage: "url(/bg-grid.svg)",
            backgroundSize: "20px",
            boxShadow: "rgb(255, 255, 255) 0px 30px 20px 60px inset",
          }}
          className="bg-repeat bg-cover h-full w-full absolute top-0 left-0 z-0"
        />
      </SectionWrapper>
      {/*  */}
      <CenterBlock
        title={"Join Us in Redefining Consulting "}
        description={`
        At Indie Tech, we invite enterprises, consulting firms, and independent consultants to join us in shaping the future of consulting. Whether you're seeking efficient consultant management, growth opportunities, or unparalleled career advancement, we're here to redefine collaboration, elevate careers, and unlock new possibilities.
        `}
      >
        <Button
          target="_blank"
          href={
            "https://outlook.office365.com/owa/calendar/IndieTechWebsiteLink@indietech.ai/bookings/"
          }
        >
          Book a call
        </Button>
      </CenterBlock>
      {/*  */}
    </>
  );
}
