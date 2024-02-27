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
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  description:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  icons: {
    icon: "/Logo.png",
  },
};

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Trust-worthy</h1>
        <p>
          Trust us to be your partner as we completely transform the consulting
          experience.
        </p>
      </div>
    </header>
  );
};

const TeamMember = ({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold">{role}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const TeamSection = ({
  title,
  members,
}: {
  title: string;
  members: {
    name: string;
    role: string;
    bio: string;
  }[];
}) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <main>
      <AboutUs />
      <OurTeam />
    </main>
  );
}
