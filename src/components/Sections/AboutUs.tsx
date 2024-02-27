"use client";
import React, { useState } from "react";
import { FaLightbulb, FaClipboardCheck, FaBook } from "react-icons/fa";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

/*
About Us


Consulting Firms and Contingent Workforce Programs have their limitations for both clients and individual consultants. In the past there have been many stop-gap solutions:

•    independent consultants

•    hiring managers relying on networks

•    gaming rate cards to get the talent you need

•    blowing the budget on a team deployment

But none of these provided the solutions that really took a company to the next level
We believe that we are better and stronger together. We bring the best talent to you at a fraction of the cost. We ensure your deliverables are met, our teams are managed and, most importantly, your challenges solved. It isn’t difficult to understand why Indie Tech has experienced rapid growth from our client networks. We provide the experienced solution to your biggest challenges.
*/

const values = [
  {
    title: "Trust-worthy",
    description:
      "Trust us to be your partner in transforming the consulting experience.",
  },
  {
    title: "Transparent",
    description:
      "Full transparency ensures focus on contractual obligations for all parties.",
  },
  {
    title: "Community",
    description:
      "Continuous support in our environment helps everyone achieve their objectives.",
  },
  {
    title: "Excellence",
    description:
      "Striving for excellence in all business disciplines to promote success and fulfillment.",
  },
  {
    title: "Integrity",
    description:
      "Guided by honesty, we ensure transparent communication and actions at all times.",
  },
  {
    title: "Empowerment",
    description:
      "Our platform empowers individuals to be thoughtful, communicative, and progressive.",
  },
];

export function AboutUs() {
  return (
    <SectionWrapper>
      <div
        id="about-us"
        className="grid pt-20 pb-12 grid-cols-1 gap-14 lg:grid-cols-2 mx-auto "
      >
        <div className="max-w-2xl lg:mx-0 ">
          <SmallHeader>About Us</SmallHeader>
          <p className={`text-3xl leading-10 text-gray-600`}>
            We’ve sat down with our clients, we’ve listened, and now we have a
            tailored consulting solution to fit your exacting needs.
          </p>

          {/* <p className="text-lg leading-8 text-gray-600">
            Consulting Firms and Contingent Workforce Programs have their
            limitations for both clients and individual consultants. In the past
            there have been many stop-gap solutions:
            <br />
            <br />
            <ul className="list-disc ml-5 capitalize font-medium marker:text-primary-main ">
              <li>independent consultants</li>
              <li>hiring managers relying on networks</li>
              <li>gaming rate cards to get the talent you need</li>
              <li>blowing the budget on a team deployment</li>
            </ul>
            <br />
            But none of these provided the solutions that really took a company
            to the next level We believe that we are better and stronger
            together. We bring the best talent to you at a fraction of the cost.
            We ensure your deliverables are met, our teams are managed and, most
            importantly, your challenges solved. It isn’t difficult to
            understand why Indie Tech has experienced rapid growth from our
            client networks. We provide the experienced solution to your biggest
            challenges.
          </p> */}
        </div>
        <div className="flex flex-col justify-end ">
          {/* <div className="py-4 flex justify-end">
            <svg
              width="275"
              height="21"
              viewBox="0 0 275 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7387 8.63245C20.232 6.14846 18.8218 3.94124 16.7813 2.43867C14.7409 0.936101 12.2156 0.245258 9.69513 0.50007C7.17463 0.754882 4.83845 1.93722 3.13953 3.81782C1.4406 5.69842 0.499969 8.14326 0.499969 10.6785C0.499969 13.2137 1.4406 15.6587 3.13953 17.5393C4.83845 19.4199 7.17463 20.6021 9.69513 20.8569C12.2156 21.1118 14.7409 20.4209 16.7813 18.9183C18.8218 17.4158 20.232 15.2086 20.7387 12.7246H274.465V8.63245H20.7387ZM6.38342 15.0188C7.53369 16.1699 9.09379 16.8167 10.7205 16.8167C12.3472 16.8167 13.9073 16.1699 15.0576 15.0188C16.2079 13.8677 16.8541 12.3064 16.8541 10.6785C16.8541 9.05053 16.2079 7.48933 15.0576 6.3382C13.9073 5.18708 12.3472 4.54035 10.7205 4.54035C9.09379 4.54035 7.53369 5.18708 6.38342 6.3382C5.23315 7.48933 4.58694 9.05053 4.58694 10.6785C4.58694 12.3064 5.23315 13.8677 6.38342 15.0188Z"
                fill="#1A8A98"
              />
            </svg>
          </div> */}

          <p className="">
            As the complexity of a project grows your business teams can be
            stretched thin. Sometimes having the right subject matter expertise
            or experience is all that’s required to turn a project from
            struggles to success. It is no longer prudent to bring in big
            consulting firms, and contingent workforce programs don’t have the
            strategic talent you need to get your projects done. Indie Tech is a
            network of consultants that have been hand-picked for your project.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-20">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md border-[1px] border-primary-main"
          >
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
