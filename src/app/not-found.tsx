"use client";

import { ContactUs } from "@/components/ContactUs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  description:
    "Indie Tech | Financial Services | Fintech | Compliance | Risk | Technology Operations",
  icons: {
    icon: "/Logo.png",
  },
};

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="bg-white">
      <div className="text-center flex flex-col items-center gap-10 justify-center h-[70vh]">
        <div className="flex items-center gap-10">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="text-lg text-gray-600">Page not found</p>
        </div>
        <div>
          <Link href="/" className="text-primary-main">
            Go back to Home
          </Link>
        </div>
      </div>
      <ContactUs />
    </main>
  );
}
