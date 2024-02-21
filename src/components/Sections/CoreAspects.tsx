"use client";
import React from "react";
import { FaLightbulb, FaClipboardCheck, FaBook } from "react-icons/fa";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

export function CoreAspects() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-14 pt-14 pb-20">
        <div className="px-4 sm:px-6 lg:px-8 pt-4 mt-4 lg:pt-8 lg:mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="my-auto">
              <div className="text-left">
                <SmallHeader>Discover Our Curated Marketplace</SmallHeader>
                <p className="mt-4 text-lg ">
                  Our platform empowers consultants to effortlessly establish
                  their profiles, rates, and availability, ensuring they stand
                  out in a competitive market.
                </p>
                <p className="mt-4 text-lg ">
                  Hiring managers will quickly find the most suitable
                  consultants for their engagements.
                </p>
              </div>
            </div>
            <div>
              <img
                className="h-72 w-full "
                src="/undraw_filter_4kje.svg"
                alt="undraw_filter_4kje"
              />
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pt-4 mt-4 border-gray-200 border-t-[3px] lg:pt-8 lg:mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="order-1 my-auto">
              <div className="text-left">
                <SmallHeader>Streamlined Selection Process</SmallHeader>

                <p className="mt-4 text-lg ">
                  We&apos;ve revolutionized how consultants and clients connect.
                  Consultants play an active role in contract negotiations,
                  ensuring alignment from the start. Meanwhile, hiring managers
                  can easily post engagements, attracting top talent with
                  minimal effort.
                </p>
              </div>
            </div>
            <div>
              <img
                className="h-72 w-full "
                src="/undraw_organize_resume_utk5-1.svg"
                alt="undraw_organize_resume_utk5-1"
              />
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pt-4 mt-4 border-gray-200 border-t-[3px] lg:pt-8 lg:mt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="my-auto">
              <div className="text-left">
                <SmallHeader>Transparent Pricing</SmallHeader>
                <p className="mt-4 text-lg ">
                  At Indie Tech, transparency is non-negotiable. Our platform
                  ensures that rates and margins are always visible, fostering
                  fair and professional negotiations. Welcome to a new era of
                  consulting, where transparency and efficiency reign supreme.
                </p>
              </div>
            </div>
            <div>
              <img
                className="h-72 w-full "
                src="/undraw_personal_finance_tqcd-1.svg"
                alt="undraw_personal_finance_tqcd-1"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
