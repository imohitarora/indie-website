// import { navigation_links } from "../../NavigationLinks";
import Image from "next/image";
import IndieLogo from "@/../public/Logo.png";
import { navigation_links } from "@/NavigationLinks";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";
import { ContactUs } from "./ContactUs";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* <ContactUs /> */}
      <footer className="bg-gray-100 border-t-2 border-gray-200">
        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          {/*  [Contact Email/Phone]. 
        Privacy Policy | Terms of Service | Follow us on [Social Media Icons] */}

          <div className="flex flex-col sm:items-start">
            <a href="/" className="flex gap-4">
              <span className="sr-only">Indie Tech</span>
              <Image
                className="h-[40px] w-auto -mt-1"
                src={IndieLogo}
                alt="indie tech logo"
                width="50"
                height="50"
              />
              <span className="font-serif font-bold text-lg capitalize ">
                Indie Tech
              </span>
            </a>
            <div className="mb:mx-auto max-w-md leading-relaxed text-gray-500 lg:text-left pt-10">
              Copyright &copy; {year}. All rights reserved.
              <br />
              <div className="flex gap-4 pt-2 font-medium underline">
                <Link
                  className="text-gray-700 transition hover:text-primary-main "
                  target="_blank"
                  href={"/tos"}
                >
                  Terms of Service
                </Link>
                <Link
                  className="text-gray-700 transition hover:text-primary-main "
                  target="_blank"
                  href={"/privacy"}
                >
                  Privacy Policy
                </Link>
              </div>
              <Image
                className="mt-4"
                src="/SOC2/21972-312_SOC_NonCPA_BLK .png"
                alt="SOC 2 Certified"
                width={110}
                height={110}
              />
            </div>
          </div>

          <div className="">
            <p className="max-w-72 font-medium">
              Ready to elevate your consultant management game? Contact us at
            </p>
            <div className="flex flex-col gap-4 pt-4 font-medium">
              <a
                href="mailto:hello@indietech.ai"
                className="text-primary-main hover:underline"
              >
                <FaEnvelope className="h-4 w-4 mr-3 inline-block" />
                hello@indietech.ai
              </a>
              <a
                href="tel:416-912-3664"
                className="text-primary-main hover:underline"
              >
                <FaPhone className="h-4 w-4 mr-3 inline-block" />
                416-912-3664
              </a>
              <div className="flex items-start">
                {" "}
                {/* Ensuring consistent alignment */}
                <FaMapMarkerAlt className="mr-2 text-primary-main inline-block mt-1" />{" "}
                {/* Adjusting margin and alignment */}
                <p className="text-base text-gray-500">
                  140 Yonge Street #200,
                  <br /> Toronto, ON M5C 1X6
                </p>
              </div>
              <div className="flex items-start">
                {" "}
                {/* Ensuring consistent alignment */}
                <FaMapMarkerAlt className="mr-2 text-primary-main inline-block mt-1" />{" "}
                {/* Adjusting margin and alignment */}
                <p className="text-base text-gray-500">
                  43 W 23rd St, New York,
                  <br /> NY 10010, United States
                </p>
              </div>
            </div>
          </div>

          <div className="">
            {/* Nav Links */}
            <div>
              <strong className="block">Links</strong>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-2 whitespace-nowrap pt-4">
                {navigation_links.map(({ name, href, subMenu }, index) =>
                  !subMenu ? (
                    <li key={"footer-nav-link-" + index}>
                      <Link
                        className="text-gray-700 transition hover:text-primary-main"
                        href={href}
                      >
                        {name}
                      </Link>
                    </li>
                  ) : (
                    subMenu.map(({ name, href }, subDex) => (
                      <li key={"footer-nav-link-" + subDex}>
                        <Link
                          className="text-gray-700 transition hover:text-primary-main"
                          href={href}
                        >
                          {name}
                        </Link>
                      </li>
                    ))
                  )
                )}
                <li key={"footer-nav-link-000"}>
                  <Link
                    className="text-gray-700 transition hover:text-primary-main"
                    href={"/careers"}
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            {/* Socials */}
            <strong className="pt-10 block">Follow us on</strong>
            <div className="flex gap-5 pt-4">
              <a
                href="https://www.linkedin.com/company/indie-tech/about/"
                target="_blank"
              >
                <FaLinkedin className="h-7 w-7 hover:text-primary-main" />
              </a>
              <a href="https://www.instagram.com/indie.tech.ai/">
                <FaInstagram
                  className="h-7 w-7 hover:text-primary-main"
                  target="_blank"
                />
              </a>
            </div>
          </div>

          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full border-2 border-primary-dark hover:bg-primary-dark hover:text-white p-2 text-primary-dark shadow transition hover:bg-primary-dark-500 sm:p-3 lg:p-4"
              href="#Top"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {navigation_links.map(({ name, href }, index) => (
              <li key={"footer-nav-link-" + index}>
                <Link
                  className="text-gray-700 transition hover:text-primary-main"
                  href={href}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </footer>
    </>
  );
}
