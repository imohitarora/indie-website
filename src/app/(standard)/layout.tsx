import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
