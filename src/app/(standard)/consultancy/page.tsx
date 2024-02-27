import { ContactUs } from "@/components/ContactUs";

import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";
import { SimpleFeatures } from "@/components/FeaturesSection/Features";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SmallHeader } from "@/components/SmallHeader";
import { Button } from "@/components/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  description:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  icons: {
    icon: "/Logo.png",
  },
};

const featureItems = [
  {
    title: "Transparent pricing",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  },
  {
    title: "Contracts that meet your skillset",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  },
  {
    title: "Direct access to clients",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
  },
  {
    title: "Reduce stress about seeking your next engagement",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
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
                  className="absolute inset-0 w-full object-cover rounded"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-white pt-[420px] xl:pt-2 rounded lg:rounded-none">
              <span className="hidden xl:absolute xl:inset-y-0 xl:-start-16 xl:block xl:w-16 xl: bg-white"></span>

              <div className="p-8 sm:p-16 xl:p-24 text-common-black ">
                <SmallHeader>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </SmallHeader>

                <p className="mt-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <Button className="mt-20" href="#contact-us">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <div className="pt-40 pb-12">
        <SimpleFeatures
          featureItems={featureItems}
          title={"Automating your engagements "}
          description={"Save time and energy while you experience"}
        />
      </div>
    </main>
  );
}
