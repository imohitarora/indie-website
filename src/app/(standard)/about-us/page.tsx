import { ContactUs } from "@/components/ContactUs";

import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";
import { SimpleFeatures } from "@/components/FeaturesSection/Features";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SmallHeader } from "@/components/SmallHeader";
import { Button } from "@/components/Button";
import { OurTeam } from "@/components/Sections/OurTeam";
import { AboutUs } from "@/components/Sections/AboutUs";

export const metadata: Metadata = {
  title:
    "Indie Tech - About Us | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  description:
    "Indie Tech - About Us | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  icons: {
    icon: "/Logo.png",
  },
};

export default function Page() {
  return (
    <main>
      <AboutUs />
      <OurTeam />
    </main>
  );
}
