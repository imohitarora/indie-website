import { ContactUs } from "@/components/ContactUs";

import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";
import { SimpleFeatures } from "@/components/FeaturesSection/SimpleFeatures";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SmallHeader } from "@/components/SmallHeader";
import { Button } from "@/components/Button";
import Image from "next/image";
import { OurProcess } from "@/components/Sections/OurProcess";

export const metadata: Metadata = {
  title:
    "Indie Tech | Consulting Made Transparent",
  description:
    "Indie Tech | Consulting Made Transparent",
  icons: {
    icon: "/Logo.png",
  },
};

const featureItems = [
  {
    title: "Market Access",
    description:
      "Gain entry to markets hosted by your largest clients or take control by creating your private marketplace. Maximize exposure for your bench of consultants.",
  },
  {
    title: "Seamless Interaction",
    description:
      "Foster efficient communication and relationship management by directly engaging with clients on the platform.",
  },
  {
    title: "Automation",
    description:
      "Experience hassle-free engagements as the platform automates the entire process, from initiation to completion.",
  },
  {
    title: "Real-time Tracking",
    description:
      "Stay informed and responsive throughout the delivery process with near real-time tracking of consulting engagements.",
  },
];

// How It Works:
// 1.	Join a Marketplace or Create Your Own: Access markets hosted by your largest clients or take control by creating your private marketplace. Add your bench of consultants for maximum exposure and simply invite your clients.
// 2.	Interact Directly with Clients: Engage in direct and seamless communication with your clients, building stronger relationships and enhancing collaboration.
// 3.	Automate the Engagement Process: Experience the power of automation as [Your Platform Name] handles the entire engagement process, from initiation to completion.
// 4.	Track Consulting Engagements in Real-Time: Monitor your consulting engagements in near real-time, ensuring you stay informed and responsive throughout the delivery process.

const OurProcessContents = [
  {
    title: "Join a Marketplace or Create Your Own",
    description:
      "Access markets hosted by your largest clients or take control by creating your private marketplace. Add your bench of consultants for maximum exposure and simply invite your clients.",
  },
  {
    title: "Interact Directly with Clients",
    description:
      "Engage in direct and seamless communication with your clients, building stronger relationships and enhancing collaboration.",
  },
  {
    title: "Automate the Engagement Process",
    description:
      "Experience the power of automation as [Your Platform Name] handles the entire engagement process, from initiation to completion.",
  },
  {
    title: "Track Consulting Engagements in Real-Time",
    description:
      "Monitor your consulting engagements in near real-time, ensuring you stay informed and responsive throughout the delivery process.",
  },
];

export default function Page() {
  return (
    <main>
      {/* pexels-the-coach-space-2977547.jpg */}
      <SectionWrapper primary>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 xl:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <div className="relative z-10 xl:py-16">
              <div className="relative">
                <Image
                  alt=""
                  width={900}
                  height={600}
                  src="/pexels-the-coach-space-2977547.jpg"
                  className="absolute inset-0 md:max-h-[27rem] w-full  object-cover rounded"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-white pt-[68%] md:pt-[420px] xl:pt-2 rounded lg:rounded-none">
              <span className="hidden xl:absolute xl:inset-y-0 xl:-start-16 xl:block xl:w-16 xl: bg-white"></span>

              <div className="p-8 sm:p-16 xl:p-24 text-common-black ">
                <SmallHeader className="max-w-[640px]">
                  Elevate Your Consulting Business with Indie Tech
                </SmallHeader>

                <p className="mt-4 ">
                  Welcome to Indie Tech where consulting firms like yours can
                  revolutionize the way you collaborate with clients. Join
                  markets hosted by your largest clients or take the lead by
                  hosting your private marketplace. Our platform empowers you to
                  streamline engagements, interact directly with clients, and
                  automate the entire process.
                </p>
                <Button
                  className="mt-12"
                  target="_blank"
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
      <OurProcess contents={OurProcessContents} />
      {/*  */}
      <SectionWrapper grey className="pt-20 pb-12">
        <SimpleFeatures
          featureItems={featureItems}
          title={"Key Benefits"}
          // title={"Elevate Your Consulting Business with Indie Tech "}
          description={
            "Unlock New Avenues for Growth: Join Markets or Host Your Private Marketplace"
          }
        />
      </SectionWrapper>
    </main>
  );
}
