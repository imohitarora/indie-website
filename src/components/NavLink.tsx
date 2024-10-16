import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaSortDown } from "react-icons/fa";

export type NavLinkProps = {
  name: string;
  href?: string;
  target?: string;
  subMenu?: {
    name: string;
    href: string;
  }[];
  handleClose?: () => void;
};

export function NavLink({
  name,
  target,
  href,
  subMenu,
  handleClose,
}: NavLinkProps) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const pathname = usePathname();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const largeScreen = useMemo(() => screenWidth > 1024, [screenWidth]);

  const linkClassName = `whitespace-nowrap cursor-pointer pt-8 pb-[1px] lg:pt-0 lg:text-base lg:mx-0 font-semibold leading-6 text-gray-900 border-b-[3px] ${
    href === "" || href !== pathname
      ? "border-transparent hover:border-gray-200 "
      : "border-primary "
  }`;

  const renderSubMenu = () => {
    if (!subMenu || !largeScreen || !openSubMenu) {
      return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={openSubMenu ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full flex flex-col gap-2 py-3 px-5 -left-5 mt-2 bg-white shadow-lg border-[1px] border-gray-200 border-t-0"
        onMouseLeave={() => setOpenSubMenu(false)}
        style={{
          display: openSubMenu ? "flex" : "none",
        }}
      >
        {subMenu.map((subItem) => (
          <Link
            key={subItem.name}
            href={subItem.href}
            className={linkClassName}
            onClick={handleClose}
          >
            {subItem.name}
          </Link>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="relative mx-auto min-w-[170px] lg:min-w-[55px] text-center">
      {href ? (
        <Link
          target={target || "_self"}
          href={href}
          className={linkClassName}
          onClick={handleClose}
        >
          {name}
        </Link>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <div
            onClick={() => setOpenSubMenu(!openSubMenu)}
            className={"flex " + linkClassName}
          >
            {name}
            <FaSortDown className="-mt-1.5 md:mt-0 ml-4 md:ml-1 opacity-50 " />
          </div>
          {subMenu &&
            !largeScreen &&
            openSubMenu &&
            subMenu.map((subItem, index) => (
              <Link
                onClick={handleClose}
                key={subItem.name + "-" + index}
                href={subItem.href}
                className={linkClassName}
              >
                {subItem.name}
              </Link>
            ))}
        </div>
      )}

      {renderSubMenu()}
    </div>
  );
}
