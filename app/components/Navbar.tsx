"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserNav from "./UserNav";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "TV Shows",
    href: "/home/shows",
  },
  {
    name: "Movies",
    href: "/home/movies",
  },
  {
    name: "Recently Added",
    href: "/home/recently",
  },
  {
    name: "My List",
    href: "/home/user/list",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src="/logo.svg" alt="Logo" priority width={120} height={120} />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link href={link.href} className="text-white underline">
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={link.href} className="text-gray-400">
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-400 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-400 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
