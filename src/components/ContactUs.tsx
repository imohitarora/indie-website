import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { SectionWrapper } from "./SectionWrapper";
import { SmallHeader } from "./SmallHeader";

export function ContactUs() {
  return (
    <div
      id="contact-us"
      className="flex border-gray-100 border-t-4 py-20  justify-center"
    >
      <SectionWrapper>
        <div className="flex flex-col lg:flex-row">
          <div className="max-w-md mx-auto lg:mx-7 px-4 sm:px-6">
            <div>
              <SmallHeader noUnderline>We have so much to share</SmallHeader>
              <p className="pt-5">
                Ready to elevate your consultant management game?
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque. */}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="max-w-md mx-auto lg:mx-7 py-3 lg:w-fit w-full px-1 sm:px-2 lg:px-3">
            <div className="inline-block h-0.5 w-full lg:h-[250px] lg:min-h-[1em] lg:w-0.5 self-stretch bg-primary-main opacity-100 " />
          </div>
          {/*  */}
          <div className=" mx-auto lg:mx-7 lg:pl-6 pr-4 sm:pr-6 lg:pr-8">
            <div className=" mx-auto">
              <div className="sm:grid-cols-2 sm:gap-x-8">
                <div className="pt-6">
                  <h3 className="text-lg font-medium ">Address</h3>
                  <div className="flex items-center mt-2">
                    <FaMapMarkerAlt className="mr-2 text-primary-main" />
                    <p className="text-base text-gray-500">
                      140 Yonge Street #200, Toronto, ON M5C 1X6
                    </p>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-lg font-medium ">Phone</h3>
                  <div className="flex items-center mt-2">
                    <FaPhone className="mr-2 text-primary-main" />
                    <a
                      target="_blank"
                      href="tel:416-912-3664"
                      className="text-base text-gray-500"
                    >
                      416-912-3664
                    </a>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-lg font-medium ">Email</h3>
                  <div className="flex items-center mt-2">
                    <FaEnvelope className="mr-2 text-primary-main" />
                    <a
                      target="_blank"
                      href="mailto:hello@indietech.ai"
                      className="text-base text-gray-500"
                    >
                      hello@indietech.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
