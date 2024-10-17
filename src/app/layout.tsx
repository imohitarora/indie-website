import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

const IntercomClientComponent = dynamic(() => import('../components/intercom/intercom-client'), { ssr: false });

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
        <IntercomClientComponent />
        <div>{children}</div>
      </body>
    </html>
  );
}
