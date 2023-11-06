"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Aside from "./Aside/Aside";
import Navbar from "./Navbar/Navbar";
import { useDrawerContext } from "core/context/DrawerContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block ${
        active ||
        (href.startsWith("/dashboard") && pathname.startsWith("/dashboard"))
          ? "text-black font-semibold"
          : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

const menuItems = [
  { label: `Home`, url: `/` },
  { label: `Dashboard`, url: `/dashboard/analytics` },
  { label: `Newsletter`, url: `/newsletter` },
];

const Header = () => {
  const { state, toggleDrawer } = useDrawerContext();
  const { showDrawer } = state;
  return (
    <header className="">
      <div className="py-2 flex items-center">
        {/* <nav className="ml-8">
          <ul className="flex flex-wrap gap-x-8 text-gray-900">
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <ActiveMenuLink href={url}>{label}</ActiveMenuLink>
              </li>
            ))}
          </ul>
        </nav> */}
        <Navbar />
        <Aside />
      </div>
    </header>
  );
};

export default Header;
