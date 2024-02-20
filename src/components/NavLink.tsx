"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export type NavLinkProps = {
  name: string;
  href?: string;
  subMenu?: {
    name: string;
    href: string;
  }[];
};

export function NavLink({ name, href, subMenu }: NavLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div key={name} className="relative" onClick={() => setOpen(!open)}>
        {href ? (
          <Link
            href={href}
            className="mx-auto pt-8 lg:pt-0 lg:text-base lg:mx-0 font-semibold leading-6 text-gray-900 border-gray-200 border-b-4 hover:border-primary-main "
          >
            {name}
          </Link>
        ) : (
          <div>
            <p className="mx-auto cursor-pointer pt-8 lg:pt-0 lg:text-base lg:mx-0 font-semibold leading-6 text-gray-900 border-gray-200 border-b-4 hover:border-primary-main ">
              {name}
            </p>
          </div>
        )}

        {subMenu && open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={open ? { opacity: 1 } : { opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full flex flex-col gap-2 p-3 left-0 mt-2 bg-white shadow-lg"
            onMouseLeave={() => setOpen(false)}
            style={{
              display: open ? "flex" : "none",
            }}
          >
            {subMenu.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="mx-auto pt-8 lg:pt-0 lg:text-base lg:mx-0 font-semibold leading-6 text-gray-900 hover:border-primary-main "
              >
                {subItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
