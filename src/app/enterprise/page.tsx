import { ContactUs } from "@/components/ContactUs";

import { Metadata } from "next";
import { Enterprise } from "@/components/Sections/Enterprise";

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
      <Enterprise />
      {/* <ContactUs /> */}
    </main>
  );
}
