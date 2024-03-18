import { Hero } from "@/components/Sections/Hero";
import { CoreAspects } from "@/components/Sections/CoreAspects";
import { OurProcess } from "@/components/Sections/OurProcess";
import { ContactUs } from "@/components/ContactUs";
import { AboutUs } from "@/components/Sections/AboutUs";
import { FinancialServicesSection } from "@/components/Sections/FinancialServices";
import { OurClients } from "@/components/Sections/OurClients";
import { Testimonials } from "@/components/Sections/Testimonial";
import { FeaturedSection } from "@/components/Sections/FeaturedSection";
import { BlogContent } from "@/components/Sections/BlogContent/BlogContent";
import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";
import { Consultants } from "@/components/Sections/Consultants";
import { ClientContent } from "@/components/Sections/ClientContent";
import { Features } from "@/components/Sections/Features";
import { HowItWorks } from "@/components/Sections/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Sections/Footer";

export const metadata: Metadata = {
  title:
    "Indie Tech | Consulting Made Transparent",
  description:
    "Indie Tech | Consulting Made Transparent",
  icons: {
    icon: "/Logo.png",
  },
};

const HowItWorksContents = [
  {
    title: "Deploy Your Private Ecosystem",
    description:
      "Create a secure and exclusive environment by inviting your professional services suppliers to join and add their consultants.",
  },
  {
    title: "Find Consultants or Post Engagements",
    description:
      "Explore consultants within your network or post engagements to receive proposals from qualified professionals.",
  },
  {
    title: "Seamlessly Engage and Transact",
    description:
      "Interact and transact directly with your approved suppliers for a seamless collaboration experience.",
  },
  {
    title: "Create Contracts from Procurement Approved Templates",
    description:
      "Utilize our corporate-approved templates to effortlessly generate contracts that meet procurement standards.",
  },
  {
    title: "Track Performance Insights",
    description:
      "Utilize our tracking and reporting features to gain actionable insights into consultant performance.",
  },
];

const features = [
  {
    title: "Comprehensive Consultant Management",
    description:
      "Manage and engage consultants across all divisions with ease, from consulting companies to independent contractors.",
    // icon: FaListCheck,
  },
  {
    title: "Performance Tracking",
    description:
      "Gain a deep understanding of consultant performance through our robust tracking and reporting features.",
    // icon: FaRankingStar,
  },
  {
    title: "Collaborate With Your Approved Suppliers",
    description:
      "Post new engagements, interact, and transact seamlessly with your approved suppliers, using corporately-approved Statement of Work templates.",
    // icon: FaStamp,
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        {/* <ClientContent /> */}
        <Features
          contents={features}
          title={"Effortless Consultant Management Solutions"}
        />
        {/* <CoreAspects /> */}
        {/* <FeaturedSection /> */}
        <HowItWorks
          title="How Indie Tech Works for Your Enterprise"
          contents={HowItWorksContents}
        />
        <BlogContent />
        {/* <ContactUs /> */}
      </main>
      <Footer />
    </>
  );
}
