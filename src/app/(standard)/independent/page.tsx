import { ContactUs } from "@/components/ContactUs";

import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";
import { SimpleFeatures } from "@/components/FeaturesSection/SimpleFeatures";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SmallHeader } from "@/components/SmallHeader";
import { Button } from "@/components/Button";
import Image from "next/image";
import { Features } from "@/components/Sections/Features";
import { CenterBlock } from "@/components/Sections/CenterBlock";
//
import {
  IoTelescopeOutline,
  IoOptionsOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { AiOutlineInteraction } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
//
export const metadata: Metadata = {
  title: "Indie Tech | Consulting Made Transparent",
  description: "Indie Tech | Consulting Made Transparent",
  icons: {
    icon: "/Logo.png",
  },
};

const featureItems = [
  {
    title: "Global Market Access",
    description:
      "Connect with enterprises and management services firms in a vibrant global market.",
  },
  {
    title: "Enterprise Deployments",
    description:
      "Automatically become part of enterprise markets, opening doors to high-profile engagements.",
  },
  {
    title: "Management Services Support",
    description:
      "Receive dedicated support from top-tier management services firms overseeing your engagements.",
  },
  {
    title: "Automated Engagements",
    description:
      "Streamline your workflow with automated processes, accelerating time to engagement, invoicing, and getting paid.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Gain transparency in pricing, ensuring fairness and clarity in every interaction.",
  },
  {
    title: "Direct Communication",
    description:
      "Communicate directly with clients for a more personalized and effective collaboration experience.",
  },
];

// How It Works:
// 1.	Join a Global Market: Access a vibrant global market where independent consultants connect with leading enterprise professional services buyers
// 2.	Automatic Entry under Managed Services Firms: When the Enterprise deploys their private market, seamlessly enter under their selected managed services firms, unlocking high-profile engagements.
// 3.	Interact and Transact with Clients: Engage and transact directly with clients, fostering a more personalized and effective collaboration experience.
// 4.	Automated Engagement Process: Streamline your workflow with our automated engagement processes, significantly reducing time to engagement.
// 5.	Transparently Track Timesheets and Performance: Utilize our transparent tracking system to monitor timesheets and performance in real-time as you deliver.
//
const HowItWorksContents = [
  {
    title: "Join a Global Market",
    description:
      "Access a vibrant global market where independent consultants connect with leading enterprise professional services buyers.",
    icon: AiOutlineGlobal,
  },
  {
    title: "Automatic Entry under Managed Services Firms",
    description:
      "When the Enterprise deploys their private market, seamlessly enter under their selected managed services firms, unlocking high-profile engagements.",
    icon: IoBriefcaseOutline,
  },
  {
    title: "Interact and Transact with Clients",
    description:
      "Engage and transact directly with clients, fostering a more personalized and effective collaboration experience.",
    icon: AiOutlineInteraction,
  },
  {
    title: "Automated Engagement Process",
    description:
      "Streamline your workflow with our automated engagement processes, significantly reducing time to engagement.",
    icon: IoOptionsOutline,
  },
  {
    title: "Transparently Track Timesheets and Performance",
    description:
      "Utilize our transparent tracking system to monitor timesheets and performance in real-time as you deliver.",
    icon: IoTelescopeOutline,
  },
];

export default function Page() {
  return (
    <main>
      <SectionWrapper primary>
        <div className="mx-auto max-w-screen-2xl py-16 sm:px-6 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="relative z-10 xl:py-16">
              <div className="relative">
                <Image
                  alt=""
                  width={900}
                  height={600}
                  src="/pexels-photo-2977565.jpeg "
                  className="absolute inset-0 md:max-h-[27rem] w-full object-cover rounded"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-white pt-[68%] md:pt-[420px] xl:pt-2 rounded lg:rounded-none">
              <span className="hidden xl:absolute xl:inset-y-0 xl:-start-16 xl:block xl:w-16 xl: bg-white"></span>

              <div className="p-2 sm:p-8 md:p-16 xl:p-24 text-common-black  ">
                <SmallHeader className="max-w-[640px]">
                  Empower Your Independent Consulting Career with Indie Tech
                </SmallHeader>

                <p className="mt-4 text-black">
                  Welcome to Indie Tech, the ultimate platform for independent
                  consultants seeking unparalleled opportunities. Join a global
                  market of independents and experience a unique setup where
                  large enterprises deploy markets, placing you under the
                  management of leading services firms. Elevate your career with
                  seamless engagements, direct connections to enterprises, and
                  dedicated management support.
                </p>

                <Button
                  target="_blank"
                  className="mt-12"
                  href={
                    "https://outlook.office365.com/owa/calendar/IndieTechWebsiteLink@indietech.ai/bookings/"
                  }
                >
                  Book a call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/*  */}
      <Features contents={featureItems} title={"Key Benefits"} />
      {/*  */}
      <SectionWrapper grey className="pt-20 pb-12">
        <SimpleFeatures
          content={HowItWorksContents}
          title={"How It Works"}
          description={" "}
        />
      </SectionWrapper>
      {/*  */}
    </main>
  );
}
