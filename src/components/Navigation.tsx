"use client";

import { useState } from "react";
import Image from "next/image";
import IndieLogo from "@/../public/Logo.png";
import { Button } from "./Button";
import { navigation_links } from "../NavigationLinks";
import Link from "next/link";
import { NavLink } from "./NavLink";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="Top" className={` ${isMenuOpen ? "fixed" : "absolute"} inset-x-0 top-0 z-50`}>
      <nav className="flex items-center h-[60px] justify-end px-6 p-4 lg:px-8 bg-white shadow-lg shadow-white border-b-[1px] border-gray-200 " aria-label="Global">
        {/* Desktop Navigation */}
        {/* <div className={`hidden lg:flex text-sm bg-white z-20 gap-8`}>
          {navigation_links.map((item, index) => (
            <NavLink {...item} key={item.name + index} />
          ))}
        </div> */}

        {/* Mobile Navigation */}
        {/* <div
          className={`bg-white z-20 text-2xl flex fixed top-[0] pt-32 h-full w-full left-0 flex-col gap-8 lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navigation_links.map((item, index) => (
            <NavLink {...item} key={item.name + index} />
          ))}
        </div> */}

        <div className={`absolute top-4 left-4 md:left-8 lg:flex-1 z-20`}>
          <a href="/" className="flex gap-4">
            <Image className="h-[40px] w-auto -mt-1" src={IndieLogo} alt="indie tech logo" width="50" height="50" />
            <span className="font-serif font-bold text-lg capitalize ">INDIE TECH</span>
            {/* <Image
              className="h-[40px] w-auto"
              src={IndieLogo}
              alt="indie tech logo"
              width="150"
              height="60"
            /> */}
          </a>
        </div>

        <div className="flex absolute top-4 right-4 z-20">
          <a target="_blank" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" href={"https://portal.indietech.ai/login"}>
            <span className="font-serif font-bold text-lg capitalize ">LOGIN</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        {/* <div className="flex lg:hidden absolute top-4 right-4 z-20">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div> */}
      </nav>
    </header>
  );
}
