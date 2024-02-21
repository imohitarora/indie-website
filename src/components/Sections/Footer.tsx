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
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="relative container mx-auto flex justify-between max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        {/*  [Contact Email/Phone]. 
        Privacy Policy | Terms of Service | Follow us on [Social Media Icons] */}

        <div className="">
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
          <p className="pt-4 max-w-72 font-medium">Follow us on</p>
          <div className="flex gap-5 pt-4">
            {/* linked react-icons */}
            <a href="https://www.linkedin.com/company/indie-tech/about/">
              <FaLinkedin className="h-7 w-7 hover:text-primary-main" />
            </a>
            <a href="https://www.instagram.com/indie.tech.ai/">
              <FaInstagram className="h-7 w-7 hover:text-primary-main" />
            </a>
          </div>
        </div>
        <div>
          <p className="pt-4 max-w-72 font-medium">
            Ready to elevate your consultant management game? Contact us at
          </p>
          <div className="flex flex-col gap-1 pt-4 font-medium">
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
          </div>
        </div>

        <div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
            Copyright &copy; {year}. All rights reserved.
            <br />
            <div className="flex gap-4 pt-2 font-medium underline">
              <Link
                className="text-gray-700 transition hover:text-primary-main "
                href={"/tos"}
              >
                Terms of Service
              </Link>
              <Link
                className="text-gray-700 transition hover:text-primary-main "
                href={"/privacy"}
              >
                Privacy Policy
              </Link>
            </div>
          </p>
        </div>

        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-primary-main hover:bg-primary-dark p-2 text-white shadow transition hover:bg-primary-dark-500 sm:p-3 lg:p-4"
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
  );
}
