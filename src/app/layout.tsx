import { Footer } from "@/components/Sections/Footer";
import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${montserrat.className} text-gray-900`}
      >
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <div className="font-sans">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
