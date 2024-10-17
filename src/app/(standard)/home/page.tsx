import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { BlogContent } from "@/components/Sections/BlogContent/BlogContent";
import { Features } from "@/components/Sections/Features";
import { Hero } from "@/components/Sections/Hero";
import { HowItWorks } from "@/components/Sections/HowItWorks";
import PricingCards from "@/components/Sections/Pricing";
import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Indie Tech | Consulting Made Transparent",
  description: "Indie Tech | Consulting Made Transparent",
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

const pricingTiers = [
  {
    title: "Basic",
    price: "$29/month",
    features: [
      "Access to basic features",
      "Email support",
      "10 projects",
    ],
  },
  {
    title: "Pro",
    price: "$59/month",
    features: [
      "Access to all features",
      "Priority email support",
      "Unlimited projects",
      "Advanced analytics",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact us",
    features: [
      "Custom solutions",
      "Dedicated support",
      "Unlimited projects",
      "Advanced analytics",
      "Custom integrations",
    ],
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
          title={"Effortless Consultant Lifecycle Management"}
        />
        {/* <CoreAspects /> */}
        {/* <FeaturedSection /> */}
        <HowItWorks
          title="How Indie Tech Works for Your Enterprise"
          contents={HowItWorksContents}
        />
        <PricingCards />
        <BlogContent />
        {/* <ContactUs /> */}
      </main>
      <Footer />
    </>
  );
}
