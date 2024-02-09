import { BlogContent } from "@/components/Sections/BlogContent";
import { Features } from "@/components/FeaturesSection/Features";
import { Hero } from "@/components/Sections/Hero";
import { VideoSection } from "@/components/Sections/VideoSection";
import { Header } from "@/components/Sections/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Header />
      <Features />
      <VideoSection />
      <BlogContent />
    </main>
  );
}
