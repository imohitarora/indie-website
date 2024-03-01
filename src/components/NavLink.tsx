"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export type NavLinkProps = {
  name: string;
  href?: string;
  target?: string;
  subMenu?: {
    name: string;
    href: string;
  }[];
};

export function NavLink({ name, target, href, subMenu }: NavLinkProps) {
  const [open, setOpen] = useState(false);
  // next js get current path
  const pathname = usePathname();

  return (
    <>
      <div key={name} className="relative" onClick={() => setOpen(!open)}>
        {href ? (
          <Link
            target={target || "_self"}
            href={href}
            className={`mx-auto pt-8 pb-[1px] lg:pt-0 lg:text-base lg:mx-0 font-semibold leading-6 text-gray-900 border-b-[3px] ${
              href !== pathname
                ? "border-transparent hover:border-gray-200 "
                : "border-primary-main "
            }`}
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
