import { Montserrat, Raleway } from "next/font/google";
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

        <div>{children}</div>
      </body>
    </html>
  );
}
