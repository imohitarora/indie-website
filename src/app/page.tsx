import { Hero } from "@/components/Sections/Hero";
import { CoreAspects } from "@/components/Sections/CoreAspects";
import { OurProcess } from "@/components/Sections/OurProcess";
import { ContactUs } from "@/components/ContactUs";
import { AboutUs } from "@/components/Sections/AboutUs";
import { FinancialServicesSection } from "@/components/Sections/FinancialServices";
import { OurClients } from "@/components/Sections/OurClients";
import { Testimonials } from "@/components/Sections/Testimonial";
import { VideoSection } from "@/components/Sections/VideoSection";
import { BlogContent } from "@/components/Sections/BlogContent";
import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";
import { Consultants } from "@/components/Sections/Consultants";
import { ClientContent } from "@/components/Sections/ClientContent";
import { Features } from "@/components/Sections/Features";
import { HowItWorks } from "@/components/Sections/HowItWorks";

export const metadata: Metadata = {
  title:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  description:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  icons: {
    icon: "/Logo.png",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <VideoSection /> */}
      {/* <ClientContent /> */}
      <Features />
      {/* <CoreAspects /> */}
      <HowItWorks />
      {/* <BlogContent /> */}
      <ContactUs />
    </main>
  );
}
