"use client";

import React, { useState } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { Button } from "../Button";

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white border-[1px] border-gray-300 rounded p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">
        {showMore ? description : `${description.slice(0, 200)}...`}
      </p>
      <Button small accent onClick={toggleShowMore}>
        {showMore ? "Read less" : "Read more"}
      </Button>
    </div>
  );
}

export function FinancialServicesSection() {
  return (
    <SectionWrapper>
      {/* <p className="text-red-800 ">
        This whole thing is a big work in progress not sure how I want to
        structure it yet
      </p> */}

      <SmallHeader>Indie Tech & Financial Services</SmallHeader>
      <div className="">
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Compliance"
            description="Compliance shouldn’t be a dirty word. Used in a positive way, compliance helps to facilitate the best solution possible to support your business. As product options shift away from traditional trading methods and complex structured products become the norm, compliance is going to shift with the landscape. We are here to help with your most challenging questions from ensuring data integrity to setting up compliance programs. Indie Tech can guide you to make the right decisions for your team without compromising on your bottom line."
          />

          <ServiceCard
            title="Finance Transformation"
            description="Gone are the days of a simple one GL. Financial Systems are complicated, best practices are changing and technology is adapting on a daily basis. Whether you are implementing new accounting standards, upgrading your systems, or doing a full overhaul, we have the right consultants for you. We come from finance, we’ve implemented the systems and know the good, bad and the ugly. If you are trying to eliminate your dependence on costly legacy systems and patches, or upgrade to the latest cloud solution, we have the right blend of experience to make the process as simple as possible."
          />

          <ServiceCard
            title="Fintech"
            description="Sometimes you know where you’d like to go but you have no idea what the best route is. Indie Tech is here to help you work your way out of the maze. Our consultants have an average of 15-20 years solving the very same challenges you are faced with right now. New regulations, technology, and products make it a challenge to know the best way to continue to improve. We can help you figure our your most pressing needs, how to get there the smartest and most efficient way possible."
          />

          <ServiceCard
            title="Risk"
            description="Financial Services have always pushed the advancement of risk management. Never has the need to be vigilant been more apparent as financial risks become more acute. As regulatory requirements continue to evolve and Financial Institutions struggle to keep up with the demands from regulators, the industry has never seen so many complications.. From new technology that promises to mitigate or aggregate data to models that need to be scrutinized or stress tested. Our risk team has the right balance of technology and business experience to help solve your greatest challenges."
          />

          <ServiceCard
            title="Technology Operations"
            description="Technology connects your firm, predicts your risk, calculates your profit and loss, and even tracks your human capital. There isn’t much that isn’t connected to your systems or patched to legacy systems. Indie Tech specializes in connecting the world of technology to the business line as much as a hinge connects a door to the jamb. Making sure that you get all the information to ensure your client is not only delivered via the technology they need, but also by the technology they want."
          />

          {/* <ServiceCard
            title="Technology Operations"
            description="Technology connects your firm, predicts your risk, calculates your profit and loss, and even tracks your human capital. There isn’t much that isn’t connected to your systems or patched to legacy systems. Indie Tech specializes in connecting the world of technology to the business line as much as a hinge connects a door to the jamb. Making sure that you get all the information to ensure your client is not only delivered via the technology they need, but also by the technology they want."
          /> */}

          {/* <div className="bg-white  p-6">
            <h3 className="text-xl font-bold mb-4">Compliance</h3>
            <p className="text-gray-700 mb-6">
              {showMore
                ? "Compliance shouldn’t be a dirty word. Used in a positive way, compliance helps to facilitate the best solution possible to support your business. As product options shift away from traditional trading methods and complex structured products become the norm, compliance is going to shift with the landscape. We are here to help with your most challenging questions from ensuring data integrity to setting up compliance programs. Indie Tech can guide you to make the right decisions for your team without compromising on your bottom line."
                : "Compliance shouldn’t be a dirty word. Used in a positive way, compliance helps to facilitate the best solution possible to support your business. As product options shift away from traditional trading methods and complex structured products become the norm, compliance is going to shift with the landscape. We are here to help with your most challenging questions from ensuring data integrity to setting up compliance programs. Indie Tech can guide you to make the right decisions for your team without compromising on your bottom line. Read more..."}
              {showMore && (
                <button
                  className="text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  Read less
                </button>
              )}
            </p>
          </div>

          <div className="bg-white  p-6">
            <h3 className="text-xl font-bold mb-4">Finance Transformation</h3>
            <p className="text-gray-700 mb-6">
              {showMore
                ? "Gone are the days of a simple one GL. Financial Systems are complicated, best practices are changing and technology is adapting on a daily basis. Whether you are implementing new accounting standards, upgrading your systems, or doing a full overhaul, we have the right consultants for you. We come from finance, we’ve implemented the systems and know the good, bad and the ugly. If you are trying to eliminate your dependence on costly legacy systems and patches, or upgrade to the latest cloud solution, we have the right blend of experience to make the process as simple as possible."
                : "Gone are the days of a simple one GL. Financial Systems are complicated, best practices are changing and technology is adapting on a daily basis. Whether you are implementing new accounting standards, upgrading your systems, or doing a full overhaul, we have the right consultants for you. We come from finance, we’ve implemented the systems and know the good, bad and the ugly. If you are trying to eliminate your dependence on costly legacy systems and patches, or upgrade to the latest cloud solution, we have the right blend of experience to make the process as simple as possible. Read more..."}
              {showMore && (
                <button
                  className="text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  Read less
                </button>
              )}
            </p>
          </div>

          <div className="bg-white  p-6">
            <h3 className="text-xl font-bold mb-4">Fintech</h3>
            <p className="text-gray-700 mb-6">
              {showMore
                ? "Sometimes you know where you’d like to go but you have no idea what the best route is. Indie Tech is here to help you work your way out of the maze. Our consultants have an average of 15-20 years solving the very same challenges you are faced with right now. New regulations, technology, and products make it a challenge to know the best way to continue to improve. We can help you figure our your most pressing needs, how to get there the smartest and most efficient way possible."
                : "Sometimes you know where you’d like to go but you have no idea what the best route is. Indie Tech is here to help you work your way out of the maze. Our consultants have an average of 15-20 years solving the very same challenges you are faced with right now. New regulations, technology, and products make it a challenge to know the best way to continue to improve. We can help you figure our your most pressing needs, how to get there the smartest and most efficient way possible. Read more..."}
              {showMore && (
                <button
                  className="text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  Read less
                </button>
              )}
            </p>
          </div>

          <div className="bg-white  p-6">
            <h3 className="text-xl font-bold mb-4">Risk</h3>
            <p className="text-gray-700 mb-6">
              {showMore
                ? "Financial Services have always pushed the advancement of risk management. Never has the need to be vigilant been more apparent as financial risks become more acute. As regulatory requirements continue to evolve and Financial Institutions struggle to keep up with the demands from regulators, the industry has never seen so many complications.. From new technology that promises to mitigate or aggregate data to models that need to be scrutinized or stress tested. Our risk team has the right balance of technology and business experience to help solve your greatest challenges."
                : "Financial Services have always pushed the advancement of risk management. Never has the need to be vigilant been more apparent as financial risks become more acute. As regulatory requirements continue to evolve and Financial Institutions struggle to keep up with the demands from regulators, the industry has never seen so many complications.. From new technology that promises to mitigate or aggregate data to models that need to be scrutinized or stress tested. Our risk team has the right balance of technology and business experience to help solve your greatest challenges. Read more..."}
              {showMore && (
                <button
                  className="text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  Read less
                </button>
              )}
            </p>
          </div>

          <div className="bg-white  p-6">
            <h3 className="text-xl font-bold mb-4">Technology Operations</h3>
            <p className="text-gray-700 mb-6">
              {showMore
                ? "Technology connects your firm, predicts your risk, calculates your profit and loss, and even tracks your human capital. There isn’t much that isn’t connected to your systems or patched to legacy systems. Indie Tech specializes in connecting the world of technology to the business line as much as a hinge connects a door to the jamb. Making sure that you get all the information to ensure your client is not only delivered via the technology they need, but also by the technology they want."
                : "Technology connects your firm, predicts your risk, calculates your profit and loss, and even tracks your human capital. There isn’t much that isn’t connected to your systems or patched to legacy systems. Indie Tech specializes in connecting the world of technology to the business line as much as a hinge connects a door to the jamb. Making sure that you get all the information to ensure your client is not only delivered via the technology they need, but also by the technology they want. Read more..."}
              {showMore && (
                <button
                  className="text-blue-500 underline"
                  onClick={toggleShowMore}
                >
                  Read less
                </button>
              )}
            </p>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
}
